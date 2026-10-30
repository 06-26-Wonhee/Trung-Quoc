/**
 * Main Application Logic
 * Manages tabs, state, vocabulary explorer, flashcard mode, mock test, and local storage.
 */

class ChineseLearningApp {
  constructor() {
    this.words = [];
    this.favorites = new Set();
    this.activeTab = 'home';
    this.currentLevelFilter = 'ALL';
    this.searchQuery = '';
    this.currentPracticeType = 'vocab-quiz';

    // Flashcard deck state
    this.flashcardList = [];
    this.flashcardIndex = 0;
    this.isCardFlipped = false;

    // Test mode state
    this.testState = {
      active: false,
      timer: null,
      timeLeft: 600, // 10 mins
      questions: [],
      userAnswers: {},
      currentQIndex: 0
    };

    this.init();
  }

  init() {
    this.loadData();
    this.bindNavigation();
    this.bindHomeActions();
    this.bindVocabControls();
    this.bindPracticeSelector();
    this.bindCustomWordForm();
    this.bindSettings();
    this.renderVocabList();
    this.updateStats();
  }

  // --- DATA & STORAGE ---
  loadData() {
    try {
      const savedVocab = localStorage.getItem('zh_saved_vocab');
      if (savedVocab) {
        this.words = JSON.parse(savedVocab);
      } else {
        this.words = [...DEFAULT_HSK_WORDS];
        this.saveWords();
      }

      const savedFavs = localStorage.getItem('zh_favorites');
      if (savedFavs) {
        this.favorites = new Set(JSON.parse(savedFavs));
      }
    } catch (e) {
      console.warn('Error reading localStorage:', e);
      this.words = [...DEFAULT_HSK_WORDS];
    }
  }

  saveWords() {
    try {
      localStorage.setItem('zh_saved_vocab', JSON.stringify(this.words));
    } catch (e) {
      console.warn('Could not save words to localStorage:', e);
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem('zh_favorites', JSON.stringify([...this.favorites]));
    } catch (e) {
      console.warn('Could not save favorites:', e);
    }
  }

  toggleFavorite(wordId) {
    if (this.favorites.has(wordId)) {
      this.favorites.delete(wordId);
    } else {
      this.favorites.add(wordId);
    }
    this.saveFavorites();
    this.renderVocabList();
    this.updateStats();
  }

  updateStats() {
    const totalCount = this.words.length;
    const hsk1Count = this.words.filter(w => w.level === 'HSK 1').length;
    const hsk2Count = this.words.filter(w => w.level === 'HSK 2').length;
    const favCount = this.favorites.size;

    document.querySelectorAll('.stat-total-words').forEach(el => el.textContent = totalCount);
    document.querySelectorAll('.stat-hsk1-words').forEach(el => el.textContent = hsk1Count);
    document.querySelectorAll('.stat-hsk2-words').forEach(el => el.textContent = hsk2Count);
    document.querySelectorAll('.stat-fav-words').forEach(el => el.textContent = favCount);
  }

  // --- NAVIGATION ---
  bindNavigation() {
    const navLinks = document.querySelectorAll('.nav-tab-btn');
    navLinks.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetTab = btn.dataset.tab;
        this.switchTab(targetTab);
      });
    });

    // Mobile menu toggle if present
    const menuToggle = document.getElementById('btn-mobile-menu');
    const navMenu = document.getElementById('main-nav-menu');
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  }

  switchTab(tabId) {
    this.activeTab = tabId;
    speechEngine.playClick();

    // Update active nav button
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Close mobile nav menu
    const navMenu = document.getElementById('main-nav-menu');
    if (navMenu) navMenu.classList.remove('open');

    // Hide all tab sections, show target
    document.querySelectorAll('.tab-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const targetSection = document.getElementById(`tab-${tabId}`);
    if (targetSection) {
      targetSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Trigger initializers if entering specific tabs
    if (tabId === 'practice') {
      this.loadPracticeModule(this.currentPracticeType);
    } else if (tabId === 'test') {
      this.initTestTab();
    } else if (tabId === 'vocab') {
      this.renderVocabList();
    }
  }

  bindHomeActions() {
    // Quick action cards on homepage
    document.querySelectorAll('[data-goto-tab]').forEach(el => {
      el.addEventListener('click', () => {
        const tab = el.dataset.gotoTab;
        if (el.dataset.practiceType) {
          this.currentPracticeType = el.dataset.practiceType;
        }
        this.switchTab(tab);
      });
    });
  }

  // --- VOCABULARY EXPLORER ---
  bindVocabControls() {
    // Filter level pills
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        speechEngine.playClick();
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.currentLevelFilter = pill.dataset.filter;
        this.renderVocabList();
      });
    });

    // Search bar
    const searchInput = document.getElementById('vocab-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderVocabList();
      });

      const clearSearchBtn = document.getElementById('btn-clear-search');
      if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
          searchInput.value = '';
          this.searchQuery = '';
          this.renderVocabList();
          searchInput.focus();
        });
      }
    }

    // View mode toggles: Grid vs Flashcards
    const btnGridView = document.getElementById('btn-view-grid');
    const btnFlashcardView = document.getElementById('btn-view-flashcard');
    if (btnGridView && btnFlashcardView) {
      btnGridView.addEventListener('click', () => {
        btnGridView.classList.add('active');
        btnFlashcardView.classList.remove('active');
        document.getElementById('vocab-grid-container').classList.remove('hidden');
        document.getElementById('vocab-flashcard-container').classList.add('hidden');
      });

      btnFlashcardView.addEventListener('click', () => {
        btnFlashcardView.classList.add('active');
        btnGridView.classList.remove('active');
        document.getElementById('vocab-grid-container').classList.add('hidden');
        document.getElementById('vocab-flashcard-container').classList.remove('hidden');
        this.initFlashcardDeck();
      });
    }

    // Modal close
    const modal = document.getElementById('word-detail-modal');
    const modalCloseBtn = document.getElementById('btn-close-modal');
    if (modal && modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => modal.classList.add('hidden'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }
  }

  getFilteredWords() {
    return this.words.filter(word => {
      // Level filter
      if (this.currentLevelFilter === 'HSK 1' && word.level !== 'HSK 1') return false;
      if (this.currentLevelFilter === 'HSK 2' && word.level !== 'HSK 2') return false;
      if (this.currentLevelFilter === 'FAVORITES' && !this.favorites.has(word.id)) return false;

      // Search query
      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchHanzi = word.hanzi.toLowerCase().includes(q);
        const matchPinyin = word.pinyin.toLowerCase().includes(q);
        const matchMeaning = word.meaning.toLowerCase().includes(q);
        if (!matchHanzi && !matchPinyin && !matchMeaning) return false;
      }
      return true;
    });
  }

  renderVocabList() {
    const container = document.getElementById('vocab-grid-container');
    if (!container) return;

    const filtered = this.getFilteredWords();
    const countBadge = document.getElementById('vocab-results-count');
    if (countBadge) countBadge.textContent = `${filtered.length} từ vựng`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>Không tìm thấy từ vựng nào</h3>
          <p>Hãy thử tìm bằng từ khóa khác hoặc chuyển bộ lọc cấp độ.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(word => {
      const isFav = this.favorites.has(word.id);
      return `
        <div class="vocab-card animate-card" data-id="${word.id}">
          <div class="card-top-bar">
            <span class="badge ${word.level === 'HSK 1' ? 'badge-hsk1' : 'badge-hsk2'}">${word.level}</span>
            <span class="vocab-type-tag">${word.type || 'Từ vựng'}</span>
            <button class="btn-fav ${isFav ? 'favorited' : ''}" data-id="${word.id}" title="${isFav ? 'Bỏ lưu' : 'Lưu từ'}">
              ${isFav ? '★' : '☆'}
            </button>
          </div>

          <div class="card-main-content" data-detail-id="${word.id}">
            <div class="vocab-hanzi chinese-text">${word.hanzi}</div>
            <div class="vocab-pinyin">${word.pinyin}</div>
            <div class="vocab-meaning">${word.meaning}</div>
          </div>

          <div class="card-example-box">
            <div class="example-hanzi chinese-text">${word.example.hanzi}</div>
            <div class="example-pinyin">${word.example.pinyin}</div>
            <div class="example-vi">🇻🇳 ${word.example.meaning}</div>
          </div>

          <div class="card-bottom-actions">
            <button class="btn btn-sm btn-icon btn-listen" data-speak="${word.hanzi}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
              <span>Phát âm</span>
            </button>
            <button class="btn btn-sm btn-outline btn-example-listen" data-speak="${word.example.hanzi}">
              <span>Ví dụ 🔊</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach card event listeners
    container.querySelectorAll('.btn-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleFavorite(btn.dataset.id);
      });
    });

    container.querySelectorAll('.btn-listen').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        speechEngine.playClick();
        speechEngine.speak(btn.dataset.speak);
      });
    });

    container.querySelectorAll('.btn-example-listen').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        speechEngine.playClick();
        speechEngine.speak(btn.dataset.speak);
      });
    });

    // Word detail modal click
    container.querySelectorAll('.card-main-content').forEach(box => {
      box.addEventListener('click', () => {
        const id = box.dataset.detailId;
        const word = this.words.find(w => w.id === id);
        if (word) this.showWordDetailModal(word);
      });
    });
  }

  showWordDetailModal(word) {
    const modal = document.getElementById('word-detail-modal');
    if (!modal) return;

    modal.querySelector('#modal-word-hanzi').textContent = word.hanzi;
    modal.querySelector('#modal-word-pinyin').textContent = word.pinyin;
    modal.querySelector('#modal-word-meaning').textContent = word.meaning;
    modal.querySelector('#modal-word-level').textContent = word.level;
    modal.querySelector('#modal-word-type').textContent = word.type || 'Từ vựng';

    modal.querySelector('#modal-ex-hanzi').textContent = word.example.hanzi;
    modal.querySelector('#modal-ex-pinyin').textContent = word.example.pinyin;
    modal.querySelector('#modal-ex-meaning').textContent = word.example.meaning;

    // Listen buttons
    const btnSpeakWord = modal.querySelector('#modal-btn-speak-word');
    btnSpeakWord.onclick = () => speechEngine.speak(word.hanzi);

    const btnSpeakEx = modal.querySelector('#modal-btn-speak-ex');
    btnSpeakEx.onclick = () => speechEngine.speak(word.example.hanzi);

    modal.classList.remove('hidden');
  }

  // --- FLASHCARD DECK MODE ---
  initFlashcardDeck() {
    this.flashcardList = this.getFilteredWords();
    this.flashcardIndex = 0;
    this.isCardFlipped = false;
    this.renderFlashcard();
    this.bindFlashcardDeckEvents();
  }

  renderFlashcard() {
    const container = document.getElementById('vocab-flashcard-container');
    if (!container) return;

    if (this.flashcardList.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>Không có từ nào trong danh mục hiện tại để hiển thị thẻ!</h3>
        </div>
      `;
      return;
    }

    const word = this.flashcardList[this.flashcardIndex];
    const isFav = this.favorites.has(word.id);

    container.innerHTML = `
      <div class="flashcard-wrapper">
        <div class="flashcard-deck-nav">
          <span class="badge badge-primary">Thẻ ${this.flashcardIndex + 1} / ${this.flashcardList.length}</span>
          <button class="btn btn-sm btn-outline" id="btn-fc-shuffle">🔀 Trộn thẻ</button>
        </div>

        <div class="flashcard ${this.isCardFlipped ? 'flipped' : ''}" id="flashcard-card">
          <!-- Front Face -->
          <div class="card-face card-front">
            <span class="fc-level-badge badge ${word.level === 'HSK 1' ? 'badge-hsk1' : 'badge-hsk2'}">${word.level}</span>
            <div class="fc-hanzi chinese-text">${word.hanzi}</div>
            <div class="fc-hint">Nhấp vào thẻ để lật xem phiên âm & nghĩa</div>
            <button class="btn btn-icon btn-sm btn-listen" id="btn-fc-speak-front">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
              <span>Phát âm</span>
            </button>
          </div>

          <!-- Back Face -->
          <div class="card-face card-back">
            <div class="fc-pinyin">${word.pinyin}</div>
            <div class="fc-meaning">${word.meaning}</div>
            <div class="fc-type badge badge-accent">${word.type}</div>
            <div class="fc-example">
              <div class="chinese-text">${word.example.hanzi}</div>
              <small>${word.example.pinyin}</small>
              <div class="fc-ex-vi">🇻🇳 ${word.example.meaning}</div>
            </div>
          </div>
        </div>

        <div class="flashcard-controls">
          <button class="btn btn-outline" id="btn-fc-prev" ${this.flashcardIndex === 0 ? 'disabled' : ''}>
            ◀ Thẻ trước
          </button>
          <button class="btn btn-primary" id="btn-fc-flip">
            🔄 Lật thẻ
          </button>
          <button class="btn btn-outline" id="btn-fc-next" ${this.flashcardIndex === this.flashcardList.length - 1 ? 'disabled' : ''}>
            Thẻ tiếp theo ▶
          </button>
        </div>
      </div>
    `;

    // Speak front word on click
    const speakBtn = container.querySelector('#btn-fc-speak-front');
    if (speakBtn) {
      speakBtn.onclick = (e) => {
        e.stopPropagation();
        speechEngine.speak(word.hanzi);
      };
    }
  }

  bindFlashcardDeckEvents() {
    const container = document.getElementById('vocab-flashcard-container');
    if (!container) return;

    container.addEventListener('click', (e) => {
      const card = e.target.closest('#flashcard-card');
      const flipBtn = e.target.closest('#btn-fc-flip');
      const prevBtn = e.target.closest('#btn-fc-prev');
      const nextBtn = e.target.closest('#btn-fc-next');
      const shuffleBtn = e.target.closest('#btn-fc-shuffle');

      if (card || flipBtn) {
        if (!e.target.closest('#btn-fc-speak-front')) {
          speechEngine.playClick();
          this.isCardFlipped = !this.isCardFlipped;
          const cardEl = container.querySelector('#flashcard-card');
          if (cardEl) cardEl.classList.toggle('flipped', this.isCardFlipped);
        }
      } else if (prevBtn) {
        if (this.flashcardIndex > 0) {
          speechEngine.playClick();
          this.flashcardIndex--;
          this.isCardFlipped = false;
          this.renderFlashcard();
        }
      } else if (nextBtn) {
        if (this.flashcardIndex < this.flashcardList.length - 1) {
          speechEngine.playClick();
          this.flashcardIndex++;
          this.isCardFlipped = false;
          this.renderFlashcard();
        }
      } else if (shuffleBtn) {
        speechEngine.playClick();
        this.flashcardList.sort(() => 0.5 - Math.random());
        this.flashcardIndex = 0;
        this.isCardFlipped = false;
        this.renderFlashcard();
      }
    });
  }

  // --- PRACTICE MODULE SELECTOR ---
  bindPracticeSelector() {
    const navItems = document.querySelectorAll('.practice-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const type = item.dataset.type;
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        this.currentPracticeType = type;
        this.loadPracticeModule(type);
      });
    });
  }

  loadPracticeModule(type) {
    const container = document.getElementById('practice-exercise-container');
    if (!container) return;

    // Highlight menu
    document.querySelectorAll('.practice-nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.type === type);
    });

    switch (type) {
      case 'vocab-quiz':
        exerciseManager.initVocabQuiz(container, this.words);
        break;
      case 'image-tf':
        exerciseManager.initImageTrueFalse(container);
        break;
      case 'reading-comp':
        exerciseManager.initReadingComprehension(container);
        break;
      case 'cloze-test':
        exerciseManager.initClozeExercise(container);
        break;
      case 'pinyin-to-hanzi':
        exerciseManager.initPinyinToHanzi(container);
        break;
      case 'sentence-order':
        exerciseManager.initSentenceOrdering(container);
        break;
      case 'translation':
        exerciseManager.initTranslation(container);
        break;
      case 'dialogue-turn':
        exerciseManager.initTwoTurnDialogue(container);
        break;
      default:
        exerciseManager.initVocabQuiz(container, this.words);
    }
  }

  // --- COMPREHENSIVE MOCK TEST MODE ---
  initTestTab() {
    const container = document.getElementById('test-arena-container');
    if (!container) return;

    if (!this.testState.active) {
      container.innerHTML = `
        <div class="test-intro-card">
          <div class="test-icon">📝</div>
          <h2>Bài Thi Kiểm Tra Năng Lực Tiếng Trung HSK 1 - HSK 2</h2>
          <p class="test-description">
            Bài kiểm tra tổng hợp gồm <strong>15 câu hỏi đa dạng</strong>: Từ vựng, ngữ pháp, đọc hiểu, phân biệt chữ Hán, và dịch câu. Thời gian làm bài là <strong>15 phút</strong>.
          </p>

          <div class="test-rules-grid">
            <div class="rule-item">
              <span class="rule-icon">⏱️</span>
              <div>
                <strong>15 Phút đếm ngược</strong>
                <p>Hệ thống sẽ tự động thu bài khi hết giờ.</p>
              </div>
            </div>
            <div class="rule-item">
              <span class="rule-icon">🎯</span>
              <div>
                <strong>Thang điểm 100</strong>
                <p>Đạt từ 60/100 điểm trở lên để vượt qua bài thi.</p>
              </div>
            </div>
            <div class="rule-item">
              <span class="rule-icon">📊</span>
              <div>
                <strong>Báo cáo chi tiết</strong>
                <p>Xem lại toàn bộ đáp án đúng/sai và phân tích giải thích.</p>
              </div>
            </div>
          </div>

          <div class="test-level-select">
            <label>Chọn cấp độ bài kiểm tra:</label>
            <div class="select-group">
              <button class="btn btn-outline active test-level-btn" data-level="ALL">Tổng hợp HSK 1 & 2</button>
              <button class="btn btn-outline test-level-btn" data-level="HSK 1">Chuyên HSK 1</button>
              <button class="btn btn-outline test-level-btn" data-level="HSK 2">Chuyên HSK 2</button>
            </div>
          </div>

          <button class="btn btn-primary btn-lg" id="btn-start-test">
            <span>🚀 Bắt đầu làm bài thi</span>
          </button>
        </div>
      `;

      let selectedLevel = 'ALL';
      container.querySelectorAll('.test-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('.test-level-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectedLevel = btn.dataset.level;
        });
      });

      container.querySelector('#btn-start-test').addEventListener('click', () => {
        this.startTest(selectedLevel);
      });
    }
  }

  startTest(level) {
    this.testState.active = true;
    this.testState.timeLeft = 900; // 15 mins (900s)
    this.testState.userAnswers = {};
    this.testState.currentQIndex = 0;
    this.testState.questions = this.buildTestQuestionBank(level);

    this.renderTestInterface();
    this.startTestTimer();
  }

  buildTestQuestionBank(level) {
    // Curate 15 mixed questions
    const pool = [];

    // Filter words according to level
    let filteredVocab = this.words;
    if (level === 'HSK 1') filteredVocab = this.words.filter(w => w.level === 'HSK 1');
    else if (level === 'HSK 2') filteredVocab = this.words.filter(w => w.level === 'HSK 2');

    // 1. Vocabulary questions (5 questions)
    const randomWords = [...filteredVocab].sort(() => 0.5 - Math.random()).slice(0, 5);
    randomWords.forEach((word, idx) => {
      const distractors = this.words.filter(w => w.id !== word.id).sort(() => 0.5 - Math.random()).slice(0, 3);
      const opts = [word, ...distractors].sort(() => 0.5 - Math.random());
      pool.push({
        type: 'vocab',
        title: `Phần 1: Từ vựng (${idx + 1})`,
        prompt: `Chữ Hán <strong>"${word.hanzi}"</strong> (${word.pinyin}) có nghĩa tiếng Việt là gì?`,
        options: opts.map(o => o.meaning),
        correctIndex: opts.findIndex(o => o.id === word.id),
        explanation: `${word.hanzi} [${word.pinyin}]: ${word.meaning}`
      });
    });

    // 2. Reading comprehension (3 questions)
    READING_COMPREHENSION_EXERCISES.slice(0, 3).forEach((rc, idx) => {
      pool.push({
        type: 'reading',
        title: `Phần 2: Đọc hiểu (${idx + 1})`,
        prompt: `Đoạn văn: <em>"${rc.passage}"</em><br><br>Câu hỏi: <strong>${rc.question}</strong> (${rc.questionMeaning})`,
        options: rc.options.map(o => o.text),
        correctIndex: rc.answerIndex,
        explanation: rc.explanation
      });
    });

    // 3. Translation & Grammar (4 questions)
    TRANSLATION_EXERCISES.slice(0, 4).forEach((tr, idx) => {
      pool.push({
        type: 'translation',
        title: `Phần 3: Dịch & Ngữ pháp (${idx + 1})`,
        prompt: `Chọn câu tiếng Trung dịch đúng câu sau:<br><strong>"${tr.vietnamese}"</strong>`,
        options: tr.options.map(o => o.text),
        correctIndex: tr.options.findIndex(o => o.isCorrect),
        explanation: tr.explanation
      });
    });

    // 4. Sentence ordering check (3 questions)
    SENTENCE_ORDERING_EXERCISES.slice(0, 3).forEach((so, idx) => {
      const scrambledJoined = so.scrambled.join(' / ');
      const options = [
        so.correctSentence,
        so.scrambled.join(''),
        [...so.scrambled].reverse().join('')
      ].sort(() => 0.5 - Math.random());

      pool.push({
        type: 'ordering',
        title: `Phần 4: Sắp xếp câu (${idx + 1})`,
        prompt: `Cho các từ sau: [${scrambledJoined}]. Hãy chọn câu được sắp xếp đúng ngữ pháp mang nghĩa: <em>"${so.vietnamese}"</em>`,
        options: options,
        correctIndex: options.indexOf(so.correctSentence),
        explanation: `Câu đúng là: "${so.correctSentence}". ${so.grammarPoint}`
      });
    });

    return pool.slice(0, 15);
  }

  startTestTimer() {
    if (this.testState.timer) clearInterval(this.testState.timer);
    this.testState.timer = setInterval(() => {
      this.testState.timeLeft--;
      const timerEl = document.getElementById('test-timer-badge');
      if (timerEl) {
        const mins = Math.floor(this.testState.timeLeft / 60);
        const secs = this.testState.timeLeft % 60;
        timerEl.textContent = `⏱️ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      }

      if (this.testState.timeLeft <= 0) {
        clearInterval(this.testState.timer);
        alert('Hết giờ làm bài! Hệ thống đang tự động chấm điểm...');
        this.submitTest();
      }
    }, 1000);
  }

  renderTestInterface() {
    const container = document.getElementById('test-arena-container');
    if (!container) return;

    const { questions, currentQIndex, userAnswers, timeLeft } = this.testState;
    const q = questions[currentQIndex];
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;

    container.innerHTML = `
      <div class="test-exam-wrapper">
        <div class="test-top-bar">
          <div class="test-status">
            <span class="badge badge-primary">Câu ${currentQIndex + 1} / ${questions.length}</span>
            <span class="badge badge-accent" id="test-timer-badge">⏱️ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}</span>
          </div>
          <button class="btn btn-danger btn-sm" id="btn-submit-test-early">Nộp bài thi</button>
        </div>

        <div class="test-question-palette">
          ${questions.map((_, i) => {
            const isAnswered = userAnswers[i] !== undefined;
            const isCurrent = i === currentQIndex;
            return `
              <button class="palette-chip ${isCurrent ? 'active' : ''} ${isAnswered ? 'answered' : ''}" data-goto="${i}">
                ${i + 1}
              </button>
            `;
          }).join('')}
        </div>

        <div class="test-card">
          <div class="test-q-title">${q.title}</div>
          <div class="test-q-prompt">${q.prompt}</div>

          <div class="test-options-list">
            ${q.options.map((opt, idx) => {
              const isSelected = userAnswers[currentQIndex] === idx;
              return `
                <label class="test-opt-label ${isSelected ? 'selected' : ''}">
                  <input type="radio" name="test-opt" value="${idx}" ${isSelected ? 'checked' : ''} />
                  <span class="opt-key-circle">${String.fromCharCode(65 + idx)}</span>
                  <span class="opt-text">${opt}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>

        <div class="test-nav-controls">
          <button class="btn btn-outline" id="btn-test-prev" ${currentQIndex === 0 ? 'disabled' : ''}>
            ◀ Câu trước
          </button>
          <button class="btn btn-primary" id="btn-test-next">
            ${currentQIndex === questions.length - 1 ? 'Xem lại & Nộp bài' : 'Câu tiếp theo ▶'}
          </button>
        </div>
      </div>
    `;

    // Palette clicks
    container.querySelectorAll('.palette-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        speechEngine.playClick();
        this.testState.currentQIndex = parseInt(btn.dataset.goto, 10);
        this.renderTestInterface();
      });
    });

    // Radio option select
    container.querySelectorAll('input[name="test-opt"]').forEach(input => {
      input.addEventListener('change', () => {
        speechEngine.playClick();
        userAnswers[currentQIndex] = parseInt(input.value, 10);
        this.renderTestInterface();
      });
    });

    // Next / Prev buttons
    container.querySelector('#btn-test-prev').addEventListener('click', () => {
      if (this.testState.currentQIndex > 0) {
        speechEngine.playClick();
        this.testState.currentQIndex--;
        this.renderTestInterface();
      }
    });

    container.querySelector('#btn-test-next').addEventListener('click', () => {
      speechEngine.playClick();
      if (this.testState.currentQIndex < questions.length - 1) {
        this.testState.currentQIndex++;
        this.renderTestInterface();
      } else {
        if (confirm('Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?')) {
          this.submitTest();
        }
      }
    });

    // Early submit
    container.querySelector('#btn-submit-test-early').addEventListener('click', () => {
      const answeredCount = Object.keys(userAnswers).length;
      if (confirm(`Bạn đã làm ${answeredCount}/${questions.length} câu. Bạn có muốn nộp bài ngay?`)) {
        this.submitTest();
      }
    });
  }

  submitTest() {
    if (this.testState.timer) clearInterval(this.testState.timer);
    this.testState.active = false;

    const { questions, userAnswers } = this.testState;
    let correctCount = 0;

    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctIndex) {
        correctCount++;
      }
    });

    const total = questions.length;
    const finalScore = Math.round((correctCount / total) * 100);
    const isPassed = finalScore >= 60;

    if (isPassed) {
      speechEngine.playSuccess();
    } else {
      speechEngine.playError();
    }

    const container = document.getElementById('test-arena-container');
    if (!container) return;

    container.innerHTML = `
      <div class="test-result-report animate-fade-in">
        <div class="result-header-card ${isPassed ? 'passed' : 'failed'}">
          <div class="report-badge">${isPassed ? '🎉 ĐẠT CHUẨN (合格)' : '⚠️ CẦN CỐ GẮNG (未通过)'}</div>
          <h2>Báo Cáo Kết Quả Bài Thi</h2>
          <div class="score-display">
            <span class="score-big">${finalScore}</span>
            <span class="score-scale">/ 100 Điểm</span>
          </div>
          <p>Bạn đã trả lời đúng <strong>${correctCount} / ${total} câu hỏi</strong>.</p>
        </div>

        <div class="review-answers-section">
          <h3>Chi tiết bài làm và giải thích:</h3>
          <div class="review-questions-list">
            ${questions.map((q, i) => {
              const userAns = userAnswers[i];
              const isRight = userAns === q.correctIndex;
              return `
                <div class="review-q-card ${isRight ? 'q-correct' : 'q-wrong'}">
                  <div class="review-q-header">
                    <span class="badge ${isRight ? 'badge-success' : 'badge-danger'}">
                      Câu ${i + 1}: ${isRight ? `✓ Đúng (+${Math.round(100 / total)}đ)` : '✗ Sai'}
                    </span>
                    <span class="q-type-label">${q.title}</span>
                  </div>
                  <div class="review-prompt">${q.prompt}</div>
                  <div class="review-details">
                    <div><strong>Đáp án của bạn:</strong> ${userAns !== undefined ? `${String.fromCharCode(65 + userAns)}. ${q.options[userAns]}` : '<span class="text-danger">Chưa chọn</span>'}</div>
                    <div><strong>Đáp án chính xác:</strong> <span class="text-success">${String.fromCharCode(65 + q.correctIndex)}. ${q.options[q.correctIndex]}</span></div>
                    <div class="review-explanation">💡 <em>${q.explanation}</em></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="report-actions">
          <button class="btn btn-primary btn-lg" id="btn-retest">
            <span>Thi lại bài mới</span>
          </button>
        </div>
      </div>
    `;

    container.querySelector('#btn-retest').addEventListener('click', () => {
      this.initTestTab();
    });
  }

  // --- CUSTOM WORD & DATA MANAGEMENT ---
  bindCustomWordForm() {
    const form = document.getElementById('add-word-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const hanzi = document.getElementById('input-hanzi').value.trim();
      const pinyin = document.getElementById('input-pinyin').value.trim();
      const meaning = document.getElementById('input-meaning').value.trim();
      const level = document.getElementById('select-level').value;
      const type = document.getElementById('input-type').value.trim() || 'Từ vựng';
      const exHanzi = document.getElementById('input-ex-hanzi').value.trim();
      const exPinyin = document.getElementById('input-ex-pinyin').value.trim();
      const exMeaning = document.getElementById('input-ex-meaning').value.trim();

      if (!hanzi || !pinyin || !meaning) {
        alert('Vui lòng điền tối thiểu: Chữ Hán, Phiên âm Pinyin và Nghĩa tiếng Việt!');
        return;
      }

      const newWord = {
        id: 'custom-' + Date.now(),
        hanzi,
        pinyin,
        meaning,
        level,
        type,
        example: {
          hanzi: exHanzi || `${hanzi}。`,
          pinyin: exPinyin || `${pinyin}.`,
          meaning: exMeaning || `${meaning}.`
        }
      };

      this.words.unshift(newWord);
      this.saveWords();
      this.renderVocabList();
      this.updateStats();

      speechEngine.playSuccess();
      alert(`Đã thêm thành công từ vựng: ${hanzi} (${pinyin})!`);
      form.reset();
    });

    // Reset default vocabulary
    const btnResetDefaults = document.getElementById('btn-reset-defaults');
    if (btnResetDefaults) {
      btnResetDefaults.addEventListener('click', () => {
        if (confirm('Khôi phục danh sách từ vựng gốc (HSK 1 & HSK 2 mẫu)? Các từ bạn tự thêm sẽ được đưa về mặc định.')) {
          this.words = [...DEFAULT_HSK_WORDS];
          this.saveWords();
          this.renderVocabList();
          this.updateStats();
          alert('Đã khôi phục bộ từ vựng mẫu thành công!');
        }
      });
    }

    // Export JSON
    const btnExport = document.getElementById('btn-export-vocab');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.words, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute('href', dataStr);
        downloadAnchor.setAttribute('download', 'chinese_vocabulary_backup.json');
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
      });
    }

    // Import JSON
    const inputImport = document.getElementById('input-import-vocab');
    if (inputImport) {
      inputImport.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const imported = JSON.parse(evt.target.result);
            if (Array.isArray(imported)) {
              this.words = imported;
              this.saveWords();
              this.renderVocabList();
              this.updateStats();
              alert(`Nhập thành công ${imported.length} từ vựng từ tệp!`);
            } else {
              alert('Định dạng tệp không hợp lệ!');
            }
          } catch (err) {
            alert('Không thể đọc tệp JSON: ' + err.message);
          }
        };
        reader.readAsText(file);
      });
    }
  }

  // --- AUDIO & VOICE SETTINGS ---
  bindSettings() {
    const muteBtn = document.getElementById('btn-toggle-sound');
    if (muteBtn) {
      const updateMuteUI = () => {
        muteBtn.innerHTML = speechEngine.isMuted
          ? `<span>🔇 Âm thanh: TẮT</span>`
          : `<span>🔊 Âm thanh: BẬT</span>`;
      };
      updateMuteUI();

      muteBtn.addEventListener('click', () => {
        speechEngine.toggleMute();
        updateMuteUI();
      });
    }

    const rateSelector = document.getElementById('select-speech-rate');
    if (rateSelector) {
      rateSelector.value = speechEngine.speechRate.toString();
      rateSelector.addEventListener('change', (e) => {
        speechEngine.setSpeechRate(parseFloat(e.target.value));
      });
    }
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new ChineseLearningApp();
});
