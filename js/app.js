/**
 * Main Application Logic
 * Manages HSK 1-6 levels, topic-based categorization, vocabulary decks,
 * interactive exercises, mock test mode, and persistent LocalStorage.
 */

class ChineseLearningApp {
  constructor() {
    this.words = [];
    this.decks = [];
    this.favorites = new Set();
    this.activeTab = 'home';

    // Vocab Explorer filters & views
    this.currentLevelFilter = 'ALL';
    this.currentCategoryFilter = 'ALL';
    this.searchQuery = '';
    this.groupByTopic = false;

    // Practice filter
    this.currentPracticeType = 'vocab-quiz';
    this.practiceLevel = 'ALL';

    // Flashcard deck state
    this.flashcardList = [];
    this.flashcardIndex = 0;
    this.isCardFlipped = false;

    // Test mode state
    this.testState = {
      active: false,
      timer: null,
      timeLeft: 900,
      questions: [],
      userAnswers: {},
      currentQIndex: 0
    };

    this.init();
  }

  init() {
    this.loadData();
    this.populateCategoryDropdowns();
    this.bindNavigation();
    this.bindHomeActions();
    this.bindVocabControls();
    this.bindPracticeControls();
    this.bindDecksManager();
    this.bindCustomWordForm();
    this.bindSettings();
    this.renderVocabList();
    this.renderDecks();
    this.updateStats();
  }

  // --- DATA & STORAGE ---
  loadData() {
    try {
      const savedVocab = localStorage.getItem('zh_saved_vocab_v2');
      if (savedVocab) {
        this.words = JSON.parse(savedVocab);
      } else {
        this.words = [...DEFAULT_HSK_WORDS];
        this.saveWords();
      }

      const savedDecks = localStorage.getItem('zh_saved_decks');
      if (savedDecks) {
        this.decks = JSON.parse(savedDecks);
      } else {
        this.decks = [...DEFAULT_DECKS];
        this.saveDecks();
      }

      const savedFavs = localStorage.getItem('zh_favorites');
      if (savedFavs) {
        this.favorites = new Set(JSON.parse(savedFavs));
      }
    } catch (e) {
      console.warn('Error reading localStorage:', e);
      this.words = [...DEFAULT_HSK_WORDS];
      this.decks = [...DEFAULT_DECKS];
    }
  }

  saveWords() {
    try {
      localStorage.setItem('zh_saved_vocab_v2', JSON.stringify(this.words));
    } catch (e) {
      console.warn('Could not save words to localStorage:', e);
    }
  }

  saveDecks() {
    try {
      localStorage.setItem('zh_saved_decks', JSON.stringify(this.decks));
    } catch (e) {
      console.warn('Could not save decks to localStorage:', e);
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
    const hsk3Count = this.words.filter(w => w.level === 'HSK 3').length;
    const hsk4Count = this.words.filter(w => w.level === 'HSK 4').length;
    const hsk5Count = this.words.filter(w => w.level === 'HSK 5').length;
    const hsk6Count = this.words.filter(w => w.level === 'HSK 6').length;
    const decksCount = this.decks.length;

    document.querySelectorAll('.stat-total-words').forEach(el => el.textContent = totalCount);
    document.querySelectorAll('.stat-total-decks').forEach(el => el.textContent = decksCount);
    document.querySelectorAll('.stat-hsk1-words').forEach(el => el.textContent = hsk1Count);
    document.querySelectorAll('.stat-hsk2-words').forEach(el => el.textContent = hsk2Count);
    document.querySelectorAll('.stat-hsk3-words').forEach(el => el.textContent = hsk3Count);
    document.querySelectorAll('.stat-hsk4-words').forEach(el => el.textContent = hsk4Count);
    document.querySelectorAll('.stat-hsk5-words').forEach(el => el.textContent = hsk5Count);
    document.querySelectorAll('.stat-hsk6-words').forEach(el => el.textContent = hsk6Count);
  }

  populateCategoryDropdowns() {
    const vocabCatSelect = document.getElementById('vocab-category-select');
    const customWordCatSelect = document.getElementById('select-category');

    if (vocabCatSelect && typeof CATEGORIES_LIST !== 'undefined') {
      vocabCatSelect.innerHTML = `<option value="ALL">Tất cả các chủ đề</option>` +
        CATEGORIES_LIST.map(c => `<option value="${c.name}">${c.icon} ${c.name}</option>`).join('');
    }

    if (customWordCatSelect && typeof CATEGORIES_LIST !== 'undefined') {
      customWordCatSelect.innerHTML = CATEGORIES_LIST.map(c => 
        `<option value="${c.name}">${c.icon} ${c.name}</option>`
      ).join('');
    }
  }

  // --- NAVIGATION ---
  bindNavigation() {
    const navLinks = document.querySelectorAll('.nav-tab-btn');
    navLinks.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        this.switchTab(targetTab);
      });
    });

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

    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    const navMenu = document.getElementById('main-nav-menu');
    if (navMenu) navMenu.classList.remove('open');

    document.querySelectorAll('.tab-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const targetSection = document.getElementById(`tab-${tabId}`);
    if (targetSection) {
      targetSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (tabId === 'practice') {
      this.loadPracticeModule(this.currentPracticeType, this.practiceLevel);
    } else if (tabId === 'test') {
      this.initTestTab();
    } else if (tabId === 'vocab') {
      this.renderVocabList();
    } else if (tabId === 'decks') {
      this.renderDecks();
    }
  }

  bindHomeActions() {
    document.querySelectorAll('[data-goto-tab]').forEach(el => {
      el.addEventListener('click', () => {
        const tab = el.dataset.gotoTab;
        if (el.dataset.practiceType) {
          this.currentPracticeType = el.dataset.practiceType;
        }
        if (el.dataset.groupTopic === 'true') {
          this.groupByTopic = true;
          const btnGroup = document.getElementById('btn-toggle-group-topic');
          if (btnGroup) btnGroup.classList.add('active');
        }
        this.switchTab(tab);
      });
    });
  }

  // --- VOCABULARY EXPLORER (HSK 1 - 6 & TOPICS) ---
  bindVocabControls() {
    // Level pills (HSK 1 to HSK 6)
    const pillsContainer = document.getElementById('vocab-level-pills');
    if (pillsContainer) {
      pillsContainer.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          speechEngine.playClick();
          pillsContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.currentLevelFilter = pill.dataset.filter;
          this.renderVocabList();
        });
      });
    }

    // Category / Topic dropdown
    const catSelect = document.getElementById('vocab-category-select');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        this.currentCategoryFilter = e.target.value;
        this.renderVocabList();
      });
    }

    // Toggle Group by Topic
    const btnToggleGroup = document.getElementById('btn-toggle-group-topic');
    if (btnToggleGroup) {
      btnToggleGroup.addEventListener('click', () => {
        speechEngine.playClick();
        this.groupByTopic = !this.groupByTopic;
        btnToggleGroup.classList.toggle('active', this.groupByTopic);
        btnToggleGroup.innerHTML = this.groupByTopic
          ? `<span>📋 Chuyển về hiển thị dạng phẳng</span>`
          : `<span>📑 Gom nhóm hiển thị theo chủ đề</span>`;
        this.renderVocabList();
      });
    }

    // Search input
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
      if (this.currentLevelFilter === 'FAVORITES') {
        if (!this.favorites.has(word.id)) return false;
      } else if (this.currentLevelFilter !== 'ALL' && word.level !== this.currentLevelFilter) {
        return false;
      }

      // Category / Topic filter
      if (this.currentCategoryFilter !== 'ALL' && word.category !== this.currentCategoryFilter) {
        return false;
      }

      // Search query
      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchHanzi = word.hanzi.toLowerCase().includes(q);
        const matchPinyin = word.pinyin.toLowerCase().includes(q);
        const matchMeaning = word.meaning.toLowerCase().includes(q);
        const matchCategory = (word.category || '').toLowerCase().includes(q);
        if (!matchHanzi && !matchPinyin && !matchMeaning && !matchCategory) return false;
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
          <h3>Không tìm thấy từ vựng nào phù hợp</h3>
          <p>Hãy thử tìm bằng từ khóa khác hoặc chuyển bộ lọc cấp độ / chủ đề.</p>
        </div>
      `;
      return;
    }

    if (!this.groupByTopic) {
      container.className = 'vocab-grid';
      container.innerHTML = filtered.map(word => this.renderWordCardHtml(word)).join('');
    } else {
      // Group by Topic
      container.className = '';
      const grouped = {};
      filtered.forEach(word => {
        const cat = word.category || 'Chủ đề chung';
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(word);
      });

      let html = '';
      for (const [catName, wordsInCat] of Object.entries(grouped)) {
        const catObj = CATEGORIES_LIST.find(c => c.name === catName);
        const icon = catObj ? catObj.icon : '🏷️';
        html += `
          <div class="topic-group-section">
            <div class="topic-group-header">
              <div class="topic-group-title">
                <span>${icon}</span>
                <span>${catName}</span>
              </div>
              <span class="topic-group-count">${wordsInCat.length} từ vựng</span>
            </div>
            <div class="vocab-grid">
              ${wordsInCat.map(w => this.renderWordCardHtml(w)).join('')}
            </div>
          </div>
        `;
      }
      container.innerHTML = html;
    }

    this.attachWordCardListeners(container);
  }

  renderWordCardHtml(word) {
    const isFav = this.favorites.has(word.id);
    const badgeClass = exerciseManager.getBadgeClass(word.level);

    return `
      <div class="vocab-card animate-card" data-id="${word.id}">
        <div class="card-top-bar">
          <span class="badge ${badgeClass}">${word.level}</span>
          <span class="vocab-category-tag">${word.category || word.type || 'Từ vựng'}</span>
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
  }

  attachWordCardListeners(container) {
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
    modal.querySelector('#modal-word-category').textContent = word.category || 'Chủ đề chung';

    modal.querySelector('#modal-ex-hanzi').textContent = word.example.hanzi;
    modal.querySelector('#modal-ex-pinyin').textContent = word.example.pinyin;
    modal.querySelector('#modal-ex-meaning').textContent = word.example.meaning;

    const btnSpeakWord = modal.querySelector('#modal-btn-speak-word');
    btnSpeakWord.onclick = () => speechEngine.speak(word.hanzi);

    const btnSpeakEx = modal.querySelector('#modal-btn-speak-ex');
    btnSpeakEx.onclick = () => speechEngine.speak(word.example.hanzi);

    modal.classList.remove('hidden');
  }

  // --- FLASHCARD DECK MODE ---
  initFlashcardDeck(customWords = null) {
    this.flashcardList = customWords || this.getFilteredWords();
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

    container.innerHTML = `
      <div class="flashcard-wrapper">
        <div class="flashcard-deck-nav">
          <span class="badge badge-primary">Thẻ ${this.flashcardIndex + 1} / ${this.flashcardList.length}</span>
          <button class="btn btn-sm btn-outline" id="btn-fc-shuffle">🔀 Trộn thẻ</button>
        </div>

        <div class="flashcard ${this.isCardFlipped ? 'flipped' : ''}" id="flashcard-card">
          <!-- Front Face -->
          <div class="card-face card-front">
            <span class="fc-level-badge badge ${exerciseManager.getBadgeClass(word.level)}">${word.level}</span>
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
            <div class="fc-type badge badge-accent">${word.category || word.type}</div>
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

  // --- PRACTICE CONTROLS & LEVEL-AWARE ENGINE ---
  bindPracticeControls() {
    // 1. Practice Type Selector
    const navItems = document.querySelectorAll('.practice-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const type = item.dataset.type;
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        this.currentPracticeType = type;
        this.loadPracticeModule(type, this.practiceLevel);
      });
    });

    // 2. Practice Level Selector (HSK 1 - 6)
    const levelPillsContainer = document.getElementById('practice-level-pills');
    if (levelPillsContainer) {
      levelPillsContainer.querySelectorAll('.practice-level-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          speechEngine.playClick();
          levelPillsContainer.querySelectorAll('.practice-level-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.practiceLevel = pill.dataset.level;
          this.loadPracticeModule(this.currentPracticeType, this.practiceLevel);
        });
      });
    }
  }

  loadPracticeModule(type, level = 'ALL') {
    const container = document.getElementById('practice-exercise-container');
    if (!container) return;

    document.querySelectorAll('.practice-nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.type === type);
    });

    switch (type) {
      case 'vocab-quiz':
        exerciseManager.initVocabQuiz(container, this.words, level);
        break;
      case 'image-tf':
        exerciseManager.initImageTrueFalse(container, level);
        break;
      case 'reading-comp':
        exerciseManager.initReadingComprehension(container, level);
        break;
      case 'cloze-test':
        exerciseManager.initClozeExercise(container, level);
        break;
      case 'pinyin-to-hanzi':
        exerciseManager.initPinyinToHanzi(container, level);
        break;
      case 'sentence-order':
        exerciseManager.initSentenceOrdering(container, level);
        break;
      case 'translation':
        exerciseManager.initTranslation(container, level);
        break;
      case 'dialogue-turn':
        exerciseManager.initTwoTurnDialogue(container, level);
        break;
      default:
        exerciseManager.initVocabQuiz(container, this.words, level);
    }
  }

  // --- BỘ TỪ VỰNG HSK 1 - 6 (DECKS MANAGER) ---
  bindDecksManager() {
    const modal = document.getElementById('create-deck-modal');
    const openBtn = document.getElementById('btn-open-create-deck-modal');
    const closeBtn = document.getElementById('btn-close-create-deck-modal');
    const form = document.getElementById('create-deck-form');
    const levelSelect = document.getElementById('deck-select-level');
    const selectAllBtn = document.getElementById('btn-deck-select-all');

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        this.renderDeckWordSelector(levelSelect ? levelSelect.value : 'HSK 1');
        modal.classList.remove('hidden');
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }

    if (levelSelect) {
      levelSelect.addEventListener('change', (e) => {
        this.renderDeckWordSelector(e.target.value);
      });
    }

    if (selectAllBtn) {
      selectAllBtn.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('#deck-words-selector-container input[type="checkbox"]');
        const allChecked = Array.from(checkboxes).every(c => c.checked);
        checkboxes.forEach(c => c.checked = !allChecked);
        selectAllBtn.textContent = allChecked ? 'Chọn tất cả từ cấp độ này' : 'Bỏ chọn tất cả';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('deck-input-title').value.trim();
        const level = document.getElementById('deck-select-level').value;
        const icon = document.getElementById('deck-input-icon').value.trim() || '📚';
        const desc = document.getElementById('deck-input-desc').value.trim();

        const selectedWordIds = [];
        document.querySelectorAll('#deck-words-selector-container input[type="checkbox"]:checked').forEach(c => {
          selectedWordIds.push(c.value);
        });

        if (!title) {
          alert('Vui lòng nhập tên bộ từ vựng!');
          return;
        }

        if (selectedWordIds.length === 0) {
          alert('Vui lòng chọn ít nhất 1 từ vựng vào bộ!');
          return;
        }

        const newDeck = {
          id: 'deck-custom-' + Date.now(),
          title,
          level,
          icon,
          description: desc || `Bộ từ vựng cấp độ ${level}`,
          wordIds: selectedWordIds,
          isCustom: true
        };

        this.decks.unshift(newDeck);
        this.saveDecks();
        this.renderDecks();
        this.updateStats();

        speechEngine.playSuccess();
        alert(`Đã tạo thành công bộ từ vựng: "${title}" gồm ${selectedWordIds.length} từ!`);
        modal.classList.add('hidden');
        form.reset();
      });
    }
  }

  renderDeckWordSelector(selectedLevel) {
    const container = document.getElementById('deck-words-selector-container');
    if (!container) return;

    const wordsOfLevel = this.words.filter(w => w.level === selectedLevel);
    if (wordsOfLevel.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; color: var(--text-muted);">Chưa có từ vựng thuộc ${selectedLevel} để chọn.</div>`;
      return;
    }

    container.innerHTML = wordsOfLevel.map(w => `
      <label class="deck-word-item">
        <input type="checkbox" value="${w.id}" checked>
        <strong class="chinese-text">${w.hanzi}</strong>
        <small>${w.pinyin}</small>
      </label>
    `).join('');
  }

  renderDecks() {
    const container = document.getElementById('decks-grid-container');
    if (!container) return;

    if (this.decks.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <h3>Chưa có bộ từ vựng nào</h3>
          <p>Nhấp nút "+ Tạo bộ từ vựng mới" ở trên để tạo ngay bộ từ của bạn!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.decks.map(deck => {
      const badgeClass = exerciseManager.getBadgeClass(deck.level);
      const wordCount = deck.wordIds ? deck.wordIds.length : 0;

      return `
        <div class="deck-card animate-card" data-deck-id="${deck.id}">
          <div class="deck-card-top">
            <div class="deck-icon-bubble">${deck.icon || '📦'}</div>
            <div style="display: flex; gap: 6px;">
              <span class="badge ${badgeClass}">${deck.level}</span>
              ${deck.isCustom ? `<span class="badge badge-accent">Tự tạo</span>` : ''}
            </div>
          </div>

          <div>
            <h3 class="deck-title">${deck.title}</h3>
            <p class="deck-description">${deck.description}</p>
          </div>

          <div class="deck-meta-bar">
            <span>📊 Số lượng: ${wordCount} từ vựng</span>
            <span>⭐ ${deck.level}</span>
          </div>

          <div class="deck-card-actions">
            <button class="btn btn-sm btn-primary btn-deck-study" data-deck-id="${deck.id}">
              <span>🗂️ Thẻ Flashcards</span>
            </button>
            <button class="btn btn-sm btn-outline btn-deck-quiz" data-deck-id="${deck.id}">
              <span>🎲 Trắc nghiệm</span>
            </button>
            ${deck.isCustom ? `
              <button class="btn btn-sm btn-danger btn-deck-delete" data-deck-id="${deck.id}" title="Xóa bộ từ này">
                <span>🗑️</span>
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Attach Deck Action Listeners
    container.querySelectorAll('.btn-deck-study').forEach(btn => {
      btn.addEventListener('click', () => {
        const deckId = btn.dataset.deckId;
        const deck = this.decks.find(d => d.id === deckId);
        if (deck) {
          const deckWords = this.words.filter(w => deck.wordIds.includes(w.id));
          this.switchTab('vocab');
          document.getElementById('btn-view-flashcard').click();
          this.initFlashcardDeck(deckWords);
        }
      });
    });

    container.querySelectorAll('.btn-deck-quiz').forEach(btn => {
      btn.addEventListener('click', () => {
        const deckId = btn.dataset.deckId;
        const deck = this.decks.find(d => d.id === deckId);
        if (deck) {
          const deckWords = this.words.filter(w => deck.wordIds.includes(w.id));
          this.switchTab('practice');
          this.currentPracticeType = 'vocab-quiz';
          const pContainer = document.getElementById('practice-exercise-container');
          exerciseManager.initVocabQuiz(pContainer, deckWords, deck.level);
        }
      });
    });

    container.querySelectorAll('.btn-deck-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const deckId = btn.dataset.deckId;
        if (confirm('Bạn có chắc chắn muốn xóa bộ từ vựng tự tạo này?')) {
          this.decks = this.decks.filter(d => d.id !== deckId);
          this.saveDecks();
          this.renderDecks();
          this.updateStats();
        }
      });
    });
  }

  // --- MOCK TEST MODE (HSK 1 - 6 COMPREHENSIVE) ---
  initTestTab() {
    const container = document.getElementById('test-arena-container');
    if (!container) return;

    if (!this.testState.active) {
      container.innerHTML = `
        <div class="test-intro-card">
          <div class="test-icon">📝</div>
          <h2>Bài Thi Kiểm Tra Năng Lực Tiếng Trung HSK 1 - HSK 6</h2>
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
            <label>Chọn cấp độ bài thi:</label>
            <div class="select-group">
              <button class="btn btn-outline active test-level-btn" data-level="ALL">Tổng hợp HSK 1-6</button>
              <button class="btn btn-outline test-level-btn" data-level="HSK 1">HSK 1</button>
              <button class="btn btn-outline test-level-btn" data-level="HSK 2">HSK 2</button>
              <button class="btn btn-outline test-level-btn" data-level="HSK 3">HSK 3</button>
              <button class="btn btn-outline test-level-btn" data-level="HSK 4">HSK 4</button>
              <button class="btn btn-outline test-level-btn" data-level="HSK 5">HSK 5</button>
              <button class="btn btn-outline test-level-btn" data-level="HSK 6">HSK 6</button>
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
    this.testState.timeLeft = 900;
    this.testState.userAnswers = {};
    this.testState.currentQIndex = 0;
    this.testState.questions = this.buildTestQuestionBank(level);

    this.renderTestInterface();
    this.startTestTimer();
  }

  buildTestQuestionBank(level) {
    const pool = [];
    let filteredVocab = this.words;
    if (level !== 'ALL') {
      filteredVocab = this.words.filter(w => w.level === level);
    }
    if (filteredVocab.length < 5) filteredVocab = this.words;

    // 1. Vocabulary questions (5 questions)
    const randomWords = [...filteredVocab].sort(() => 0.5 - Math.random()).slice(0, 5);
    randomWords.forEach((word, idx) => {
      const distractors = this.words.filter(w => w.id !== word.id).sort(() => 0.5 - Math.random()).slice(0, 3);
      const opts = [word, ...distractors].sort(() => 0.5 - Math.random());
      pool.push({
        type: 'vocab',
        title: `Phần 1: Từ vựng (${idx + 1}) - ${word.level}`,
        prompt: `Chữ Hán <strong>"${word.hanzi}"</strong> (${word.pinyin}) có nghĩa tiếng Việt là gì?`,
        options: opts.map(o => o.meaning),
        correctIndex: opts.findIndex(o => o.id === word.id),
        explanation: `${word.hanzi} [${word.pinyin}]: ${word.meaning}`
      });
    });

    // 2. Reading comprehension (3 questions)
    let rcPool = READING_COMPREHENSION_EXERCISES;
    if (level !== 'ALL') {
      const match = rcPool.filter(r => r.level === level);
      if (match.length > 0) rcPool = match;
    }
    rcPool.slice(0, 3).forEach((rc, idx) => {
      pool.push({
        type: 'reading',
        title: `Phần 2: Đọc hiểu (${idx + 1}) - ${rc.level}`,
        prompt: `Đoạn văn: <em>"${rc.passage}"</em><br><br>Câu hỏi: <strong>${rc.question}</strong> (${rc.questionMeaning})`,
        options: rc.options.map(o => o.text),
        correctIndex: rc.answerIndex,
        explanation: rc.explanation
      });
    });

    // 3. Translation & Grammar (4 questions)
    let trPool = TRANSLATION_EXERCISES;
    if (level !== 'ALL') {
      const match = trPool.filter(t => t.level === level);
      if (match.length > 0) trPool = match;
    }
    trPool.slice(0, 4).forEach((tr, idx) => {
      pool.push({
        type: 'translation',
        title: `Phần 3: Dịch & Ngữ pháp (${idx + 1}) - ${tr.level}`,
        prompt: `Chọn câu tiếng Trung dịch đúng câu sau:<br><strong>"${tr.vietnamese}"</strong>`,
        options: tr.options.map(o => o.text),
        correctIndex: tr.options.findIndex(o => o.isCorrect),
        explanation: tr.explanation
      });
    });

    // 4. Sentence ordering check (3 questions)
    let soPool = SENTENCE_ORDERING_EXERCISES;
    if (level !== 'ALL') {
      const match = soPool.filter(s => s.level === level);
      if (match.length > 0) soPool = match;
    }
    soPool.slice(0, 3).forEach((so, idx) => {
      const scrambledJoined = so.scrambled.join(' / ');
      const options = [
        so.correctSentence,
        so.scrambled.join(''),
        [...so.scrambled].reverse().join('')
      ].sort(() => 0.5 - Math.random());

      pool.push({
        type: 'ordering',
        title: `Phần 4: Sắp xếp câu (${idx + 1}) - ${so.level}`,
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

    container.querySelectorAll('.palette-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        speechEngine.playClick();
        this.testState.currentQIndex = parseInt(btn.dataset.goto, 10);
        this.renderTestInterface();
      });
    });

    container.querySelectorAll('input[name="test-opt"]').forEach(input => {
      input.addEventListener('change', () => {
        speechEngine.playClick();
        userAnswers[currentQIndex] = parseInt(input.value, 10);
        this.renderTestInterface();
      });
    });

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
      const category = document.getElementById('select-category').value;
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
        category,
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
      alert(`Đã thêm thành công từ vựng: ${hanzi} (${pinyin}) [${level}] thuộc chủ đề "${category}"!`);
      form.reset();
    });

    const btnResetDefaults = document.getElementById('btn-reset-defaults');
    if (btnResetDefaults) {
      btnResetDefaults.addEventListener('click', () => {
        if (confirm('Khôi phục toàn bộ kho từ vựng mẫu HSK 1 - 6 và các bộ từ vựng chuẩn?')) {
          this.words = [...DEFAULT_HSK_WORDS];
          this.decks = [...DEFAULT_DECKS];
          this.saveWords();
          this.saveDecks();
          this.renderVocabList();
          this.renderDecks();
          this.updateStats();
          alert('Đã khôi phục dữ liệu HSK 1 - 6 chuẩn thành công!');
        }
      });
    }

    const btnExport = document.getElementById('btn-export-vocab');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        const payload = {
          words: this.words,
          decks: this.decks
        };
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(payload, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute('href', dataStr);
        downloadAnchor.setAttribute('download', 'chinese_learning_backup_hsk1_6.json');
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
      });
    }

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
            } else if (imported.words && Array.isArray(imported.words)) {
              this.words = imported.words;
              if (imported.decks && Array.isArray(imported.decks)) {
                this.decks = imported.decks;
                this.saveDecks();
              }
            } else {
              alert('Định dạng tệp không hợp lệ!');
              return;
            }
            this.saveWords();
            this.renderVocabList();
            this.renderDecks();
            this.updateStats();
            alert(`Nhập thành công dữ liệu từ vựng từ tệp!`);
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
