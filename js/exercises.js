/**
 * Exercises Module
 * Implements interactive engines for all 7+ Chinese practice modes.
 */

class ExerciseManager {
  constructor() {
    this.currentMode = null;
    this.quizState = {};
    this.stats = {
      correctCount: 0,
      totalCount: 0
    };
  }

  // --- 1. DYNAMIC VOCABULARY QUIZ ---
  initVocabQuiz(container, vocabList) {
    if (!vocabList || vocabList.length < 4) {
      container.innerHTML = `<div class="empty-state">Cần ít nhất 4 từ vựng để bắt đầu trắc nghiệm.</div>`;
      return;
    }

    this.vocabList = vocabList;
    this.quizState = {
      score: 0,
      total: 10,
      currentStep: 0,
      questions: this.generateVocabQuestions(vocabList, 10),
      answered: false
    };

    this.renderVocabQuizStep(container);
  }

  generateVocabQuestions(vocabList, count) {
    const shuffled = [...vocabList].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(count, vocabList.length));
    const questionTypes = ['hanzi-to-vi', 'vi-to-hanzi', 'hanzi-to-pinyin', 'audio-to-hanzi'];

    return selected.map((word) => {
      const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
      // Generate 3 distractors
      const distractors = vocabList
        .filter(w => w.id !== word.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const allOptions = [word, ...distractors].sort(() => 0.5 - Math.random());

      let prompt = '';
      let promptSub = '';
      let isAudio = false;

      if (qType === 'hanzi-to-vi') {
        prompt = word.hanzi;
        promptSub = `${word.pinyin} • ${word.level}`;
      } else if (qType === 'vi-to-hanzi') {
        prompt = word.meaning;
        promptSub = `Chọn chữ Hán tương ứng (${word.level})`;
      } else if (qType === 'hanzi-to-pinyin') {
        prompt = word.hanzi;
        promptSub = `Chọn phiên âm Pinyin đúng`;
      } else {
        // audio-to-hanzi
        prompt = '🔊 Nghe và chọn từ đúng';
        promptSub = 'Nhấp biểu tượng loa để nghe lại';
        isAudio = true;
      }

      return {
        word,
        qType,
        prompt,
        promptSub,
        isAudio,
        options: allOptions.map(opt => {
          let label = '';
          if (qType === 'hanzi-to-vi') label = opt.meaning;
          else if (qType === 'vi-to-hanzi') label = opt.hanzi;
          else if (qType === 'hanzi-to-pinyin') label = opt.pinyin;
          else label = `${opt.hanzi} (${opt.pinyin})`;
          return {
            id: opt.id,
            label,
            isCorrect: opt.id === word.id
          };
        })
      };
    });
  }

  renderVocabQuizStep(container) {
    const { questions, currentStep, score, total } = this.quizState;

    if (currentStep >= questions.length) {
      this.renderQuizResults(container, score, total, () => {
        this.initVocabQuiz(container, this.vocabList);
      });
      return;
    }

    const q = questions[currentStep];
    this.quizState.answered = false;

    container.innerHTML = `
      <div class="exercise-card">
        <div class="exercise-progress-bar">
          <div class="progress-fill" style="width: ${((currentStep + 1) / total) * 100}%"></div>
        </div>

        <div class="exercise-header">
          <span class="badge badge-primary">Câu ${currentStep + 1}/${total}</span>
          <span class="badge badge-success">Điểm: ${score}</span>
        </div>

        <div class="quiz-prompt-box">
          <div class="quiz-prompt-text ${q.qType === 'hanzi-to-vi' || q.qType === 'hanzi-to-pinyin' ? 'chinese-text' : ''}">
            ${q.prompt}
          </div>
          <div class="quiz-prompt-sub">${q.promptSub}</div>
          <button class="btn btn-icon btn-listen" id="btn-quiz-audio" title="Nghe phát âm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
            <span>Phát âm</span>
          </button>
        </div>

        <div class="options-grid" id="quiz-options-container">
          ${q.options.map((opt, idx) => `
            <button class="option-btn" data-idx="${idx}" data-correct="${opt.isCorrect}">
              <span class="option-key">${String.fromCharCode(65 + idx)}</span>
              <span class="option-label ${q.qType === 'vi-to-hanzi' ? 'chinese-text' : ''}">${opt.label}</span>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback-box" class="feedback-box hidden"></div>

        <div class="exercise-footer">
          <button id="btn-quiz-next" class="btn btn-primary hidden">
            <span>Câu tiếp theo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Auto play audio if audio question
    if (q.isAudio) {
      setTimeout(() => speechEngine.speak(q.word.hanzi), 300);
    }

    const audioBtn = container.querySelector('#btn-quiz-audio');
    audioBtn.addEventListener('click', () => {
      speechEngine.playClick();
      speechEngine.speak(q.word.hanzi);
    });

    const optionButtons = container.querySelectorAll('.option-btn');
    const feedbackBox = container.querySelector('#quiz-feedback-box');
    const nextBtn = container.querySelector('#btn-quiz-next');

    optionButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.quizState.answered) return;
        this.quizState.answered = true;

        const isCorrect = btn.dataset.correct === 'true';

        optionButtons.forEach(b => {
          b.disabled = true;
          if (b.dataset.correct === 'true') {
            b.classList.add('correct');
          }
        });

        if (isCorrect) {
          btn.classList.add('correct');
          this.quizState.score += 10;
          speechEngine.playSuccess();
          feedbackBox.className = 'feedback-box correct-feedback';
          feedbackBox.innerHTML = `
            <div class="feedback-title">🎉 Chính xác! (+10 điểm)</div>
            <div class="feedback-detail">
              <strong>${q.word.hanzi}</strong> [${q.word.pinyin}]: ${q.word.meaning}
              <br><small>Ví dụ: ${q.word.example.hanzi} (${q.word.example.pinyin})</small>
            </div>
          `;
        } else {
          btn.classList.add('incorrect');
          speechEngine.playError();
          feedbackBox.className = 'feedback-box error-feedback';
          feedbackBox.innerHTML = `
            <div class="feedback-title">❌ Chưa chính xác!</div>
            <div class="feedback-detail">
              Đáp án đúng là: <strong>${q.word.hanzi}</strong> [${q.word.pinyin}] - ${q.word.meaning}
            </div>
          `;
        }

        feedbackBox.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
      });
    });

    nextBtn.addEventListener('click', () => {
      speechEngine.playClick();
      this.quizState.currentStep++;
      this.renderVocabQuizStep(container);
    });
  }

  // --- 2. NHÌN HÌNH PHÁN ĐOÁN ĐÚNG SAI (Image True/False) ---
  initImageTrueFalse(container) {
    this.itfIndex = 0;
    this.itfScore = 0;
    this.renderImageTrueFalse(container);
  }

  renderImageTrueFalse(container) {
    const list = IMAGE_TRUE_FALSE_EXERCISES;
    if (this.itfIndex >= list.length) {
      this.renderQuizResults(container, this.itfScore, list.length * 10, () => {
        this.initImageTrueFalse(container);
      });
      return;
    }

    const item = list[this.itfIndex];
    let answered = false;

    container.innerHTML = `
      <div class="exercise-card">
        <div class="exercise-progress-bar">
          <div class="progress-fill" style="width: ${((this.itfIndex + 1) / list.length) * 100}%"></div>
        </div>

        <div class="exercise-header">
          <span class="badge badge-primary">Bài tập Nhìn hình: ${this.itfIndex + 1}/${list.length}</span>
          <span class="badge badge-accent">${item.category}</span>
          <span class="badge badge-success">Điểm: ${this.itfScore}</span>
        </div>

        <div class="itf-illustration-box">
          ${item.svg}
        </div>

        <div class="itf-statement-card">
          <div class="itf-statement-zh chinese-text">${item.statement}</div>
          <div class="itf-statement-pinyin">${item.pinyin}</div>
          <button class="btn btn-icon btn-sm btn-listen" id="btn-itf-audio">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
            <span>Phát âm</span>
          </button>
        </div>

        <div class="tf-buttons-grid">
          <button class="tf-btn tf-btn-true" id="btn-tf-true">
            <span class="tf-icon">✓</span>
            <div class="tf-text">
              <strong>ĐÚNG (正确)</strong>
              <small>Hình ảnh khớp với mô tả</small>
            </div>
          </button>
          <button class="tf-btn tf-btn-false" id="btn-tf-false">
            <span class="tf-icon">✗</span>
            <div class="tf-text">
              <strong>SAI (错误)</strong>
              <small>Hình ảnh không khớp mô tả</small>
            </div>
          </button>
        </div>

        <div id="itf-feedback" class="feedback-box hidden"></div>

        <div class="exercise-footer">
          <button id="btn-itf-next" class="btn btn-primary hidden">
            <span>Câu tiếp theo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    container.querySelector('#btn-itf-audio').addEventListener('click', () => {
      speechEngine.speak(item.statement);
    });

    const handleChoice = (userChoice) => {
      if (answered) return;
      answered = true;

      const isCorrect = userChoice === item.isCorrect;
      const trueBtn = container.querySelector('#btn-tf-true');
      const falseBtn = container.querySelector('#btn-tf-false');
      const feedback = container.querySelector('#itf-feedback');
      const nextBtn = container.querySelector('#btn-itf-next');

      trueBtn.disabled = true;
      falseBtn.disabled = true;

      if (item.isCorrect) {
        trueBtn.classList.add('correct');
      } else {
        falseBtn.classList.add('correct');
      }

      if (isCorrect) {
        this.itfScore += 10;
        speechEngine.playSuccess();
        feedback.className = 'feedback-box correct-feedback';
        feedback.innerHTML = `
          <div class="feedback-title">🎉 Phán đoán rất chuẩn xác! (+10 điểm)</div>
          <div class="feedback-detail">${item.explanation}</div>
        `;
      } else {
        speechEngine.playError();
        if (userChoice) trueBtn.classList.add('incorrect');
        else falseBtn.classList.add('incorrect');
        feedback.className = 'feedback-box error-feedback';
        feedback.innerHTML = `
          <div class="feedback-title">❌ Chưa chính xác!</div>
          <div class="feedback-detail">${item.explanation}</div>
        `;
      }

      feedback.classList.remove('hidden');
      nextBtn.classList.remove('hidden');
    };

    container.querySelector('#btn-tf-true').addEventListener('click', () => handleChoice(true));
    container.querySelector('#btn-tf-false').addEventListener('click', () => handleChoice(false));

    container.querySelector('#btn-itf-next').addEventListener('click', () => {
      speechEngine.playClick();
      this.itfIndex++;
      this.renderImageTrueFalse(container);
    });
  }

  // --- 3. ĐỌC CÂU HỎI CHỌN CÂU TRẢ LỜI ĐÚNG (Reading Comprehension) ---
  initReadingComprehension(container) {
    this.rcIndex = 0;
    this.rcScore = 0;
    this.renderReadingComprehension(container);
  }

  renderReadingComprehension(container) {
    const list = READING_COMPREHENSION_EXERCISES;
    if (this.rcIndex >= list.length) {
      this.renderQuizResults(container, this.rcScore, list.length * 10, () => {
        this.initReadingComprehension(container);
      });
      return;
    }

    const item = list[this.rcIndex];
    let answered = false;

    container.innerHTML = `
      <div class="exercise-card">
        <div class="exercise-progress-bar">
          <div class="progress-fill" style="width: ${((this.rcIndex + 1) / list.length) * 100}%"></div>
        </div>

        <div class="exercise-header">
          <span class="badge badge-primary">Đọc hiểu: Bài ${this.rcIndex + 1}/${list.length}</span>
          <span class="badge badge-success">Điểm: ${this.rcScore}</span>
        </div>

        <div class="rc-passage-box">
          <div class="rc-passage-title">
            <span>📖 Đoạn văn ngắn</span>
            <div class="rc-actions">
              <button class="btn btn-sm btn-icon" id="btn-rc-toggle-pinyin">
                <span>Pinyin & Dịch</span>
              </button>
              <button class="btn btn-sm btn-icon btn-listen" id="btn-rc-audio">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                <span>Nghe đọc</span>
              </button>
            </div>
          </div>
          <div class="rc-passage-text chinese-text">${item.passage}</div>
          <div id="rc-hints" class="rc-hints hidden">
            <div class="rc-hint-pinyin">${item.passagePinyin}</div>
            <div class="rc-hint-vi">🇻🇳 ${item.passageMeaning}</div>
          </div>
        </div>

        <div class="rc-question-box">
          <div class="rc-q-badge">Câu hỏi:</div>
          <div class="rc-q-zh chinese-text">${item.question}</div>
          <div class="rc-q-sub">${item.questionPinyin} • (${item.questionMeaning})</div>
        </div>

        <div class="options-grid" id="rc-options">
          ${item.options.map((opt, idx) => `
            <button class="option-btn" data-idx="${idx}">
              <span class="option-key">${String.fromCharCode(65 + idx)}</span>
              <span class="option-label chinese-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>

        <div id="rc-feedback" class="feedback-box hidden"></div>

        <div class="exercise-footer">
          <button id="btn-rc-next" class="btn btn-primary hidden">
            <span>Bài tiếp theo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    const hints = container.querySelector('#rc-hints');
    container.querySelector('#btn-rc-toggle-pinyin').addEventListener('click', () => {
      hints.classList.toggle('hidden');
    });

    container.querySelector('#btn-rc-audio').addEventListener('click', () => {
      speechEngine.speak(item.passage);
    });

    const optButtons = container.querySelectorAll('#rc-options .option-btn');
    const feedback = container.querySelector('#rc-feedback');
    const nextBtn = container.querySelector('#btn-rc-next');

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const idx = parseInt(btn.dataset.idx, 10);
        const isCorrect = idx === item.answerIndex;

        optButtons.forEach((b, i) => {
          b.disabled = true;
          if (i === item.answerIndex) b.classList.add('correct');
        });

        if (isCorrect) {
          btn.classList.add('correct');
          this.rcScore += 10;
          speechEngine.playSuccess();
          feedback.className = 'feedback-box correct-feedback';
          feedback.innerHTML = `
            <div class="feedback-title">🎉 Tuyệt vời! Bạn đã chọn đúng (+10 điểm)</div>
            <div class="feedback-detail">${item.explanation}</div>
          `;
        } else {
          btn.classList.add('incorrect');
          speechEngine.playError();
          feedback.className = 'feedback-box error-feedback';
          feedback.innerHTML = `
            <div class="feedback-title">❌ Chưa chính xác!</div>
            <div class="feedback-detail">${item.explanation}</div>
          `;
        }

        feedback.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
      });
    });

    nextBtn.addEventListener('click', () => {
      speechEngine.playClick();
      this.rcIndex++;
      this.renderReadingComprehension(container);
    });
  }

  // --- 4. CHỌN BỘ TỪ ĐIỀN VÀO ĐOẠN VĂN (Cloze Test) ---
  initClozeExercise(container) {
    this.clozeIndex = 0;
    this.clozeScore = 0;
    this.renderClozeExercise(container);
  }

  renderClozeExercise(container) {
    const list = CLOZE_PASSAGES_EXERCISES;
    if (this.clozeIndex >= list.length) {
      this.renderQuizResults(container, this.clozeScore, list.length * 20, () => {
        this.initClozeExercise(container);
      });
      return;
    }

    const item = list[this.clozeIndex];
    const userSelections = {}; // blankIndex -> wordKey
    let activeBlankIndex = 0;

    const renderText = () => {
      let html = '';
      for (let i = 0; i < item.textParts.length; i++) {
        html += `<span class="cloze-part">${item.textParts[i]}</span>`;
        if (i < item.blankCount) {
          const selectedKey = userSelections[i];
          const word = selectedKey ? item.wordBank.find(w => w.key === selectedKey) : null;
          const isActive = activeBlankIndex === i;
          html += `
            <button class="cloze-blank-btn ${isActive ? 'active' : ''} ${selectedKey ? 'filled' : ''}" data-blank="${i}">
              <span class="blank-num">(${i + 1})</span>
              <span class="blank-val">${word ? `${word.hanzi}` : '____'}</span>
            </button>
          `;
        }
      }
      return html;
    };

    container.innerHTML = `
      <div class="exercise-card">
        <div class="exercise-progress-bar">
          <div class="progress-fill" style="width: ${((this.clozeIndex + 1) / list.length) * 100}%"></div>
        </div>

        <div class="exercise-header">
          <span class="badge badge-primary">Điền từ vào đoạn văn: ${this.clozeIndex + 1}/${list.length}</span>
          <span class="badge badge-accent">${item.title}</span>
          <span class="badge badge-success">Điểm: ${this.clozeScore}</span>
        </div>

        <div class="cloze-instructions">
          👉 <strong>Hướng dẫn:</strong> Bấm vào ô trống <code>(1)</code>, <code>(2)</code>,... rồi chọn từ thích hợp trong ngân hàng từ bên dưới.
        </div>

        <div class="cloze-passage-container chinese-text" id="cloze-text-area">
          ${renderText()}
        </div>

        <div class="wordbank-section">
          <div class="wordbank-header">Ngân hàng từ vựng:</div>
          <div class="wordbank-grid" id="wordbank-chips">
            ${item.wordBank.map(w => `
              <button class="wordbank-chip" data-key="${w.key}">
                <span class="chip-key">${w.key}</span>
                <span class="chip-hanzi chinese-text">${w.hanzi}</span>
                <span class="chip-pinyin">${w.pinyin}</span>
                <span class="chip-meaning">${w.meaning}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div id="cloze-feedback" class="feedback-box hidden"></div>

        <div class="exercise-footer cloze-footer">
          <button id="btn-cloze-reset" class="btn btn-outline">Làm lại</button>
          <button id="btn-cloze-check" class="btn btn-primary">Kiểm tra kết quả</button>
          <button id="btn-cloze-next" class="btn btn-success hidden">Bài tiếp theo ➔</button>
        </div>
      </div>
    `;

    const textArea = container.querySelector('#cloze-text-area');
    const wordBankContainer = container.querySelector('#wordbank-chips');
    const feedback = container.querySelector('#cloze-feedback');
    const checkBtn = container.querySelector('#btn-cloze-check');
    const nextBtn = container.querySelector('#btn-cloze-next');
    const resetBtn = container.querySelector('#btn-cloze-reset');

    const updateBlanksUI = () => {
      textArea.innerHTML = renderText();
      attachBlankListeners();
    };

    const attachBlankListeners = () => {
      textArea.querySelectorAll('.cloze-blank-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          activeBlankIndex = parseInt(btn.dataset.blank, 10);
          updateBlanksUI();
        });
      });
    };

    attachBlankListeners();

    // Word chip click
    wordBankContainer.querySelectorAll('.wordbank-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        speechEngine.playClick();
        const key = chip.dataset.key;
        userSelections[activeBlankIndex] = key;
        // Move to next unfilled blank if any
        for (let b = 0; b < item.blankCount; b++) {
          if (!userSelections[b]) {
            activeBlankIndex = b;
            break;
          }
        }
        updateBlanksUI();
      });
    });

    resetBtn.addEventListener('click', () => {
      for (let k in userSelections) delete userSelections[k];
      activeBlankIndex = 0;
      feedback.classList.add('hidden');
      checkBtn.classList.remove('hidden');
      nextBtn.classList.add('hidden');
      updateBlanksUI();
    });

    checkBtn.addEventListener('click', () => {
      // Validate all blanks
      let correctCount = 0;
      let allAnswered = true;

      for (let i = 0; i < item.blankCount; i++) {
        if (!userSelections[i]) {
          allAnswered = false;
        } else if (userSelections[i] === item.correctAnswers[i]) {
          correctCount++;
        }
      }

      if (!allAnswered) {
        alert('Vui lòng điền đủ tất cả các ô trống trước khi kiểm tra!');
        return;
      }

      const allRight = correctCount === item.blankCount;
      if (allRight) {
        this.clozeScore += 20;
        speechEngine.playSuccess();
        feedback.className = 'feedback-box correct-feedback';
        feedback.innerHTML = `
          <div class="feedback-title">🎉 Xuất sắc! Bạn đã điền đúng toàn bộ (${correctCount}/${item.blankCount})</div>
          <div class="feedback-detail">
            <strong>Đoạn văn hoàn chỉnh:</strong> ${item.fullText}<br>
            <strong>Dịch nghĩa:</strong> ${item.translation}
          </div>
        `;
      } else {
        speechEngine.playError();
        feedback.className = 'feedback-box error-feedback';
        feedback.innerHTML = `
          <div class="feedback-title">Đã đúng ${correctCount}/${item.blankCount} vị trí.</div>
          <div class="feedback-detail">
            <strong>Đoạn văn chuẩn:</strong> ${item.fullText}<br>
            <strong>Dịch nghĩa:</strong> ${item.translation}
          </div>
        `;
      }

      feedback.classList.remove('hidden');
      checkBtn.classList.add('hidden');
      nextBtn.classList.remove('hidden');
    });

    nextBtn.addEventListener('click', () => {
      speechEngine.playClick();
      this.clozeIndex++;
      this.renderClozeExercise(container);
    });
  }

  // --- 5. NHÌN PHIÊN ÂM VIẾT HÁN TỰ (Pinyin to Hanzi) ---
  initPinyinToHanzi(container) {
    this.pthIndex = 0;
    this.pthScore = 0;
    this.renderPinyinToHanzi(container);
  }

  renderPinyinToHanzi(container) {
    const list = PINYIN_TO_HANZI_EXERCISES;
    if (this.pthIndex >= list.length) {
      this.renderQuizResults(container, this.pthScore, list.length * 10, () => {
        this.initPinyinToHanzi(container);
      });
      return;
    }

    const item = list[this.pthIndex];
    let answered = false;

    container.innerHTML = `
      <div class="exercise-card">
        <div class="exercise-progress-bar">
          <div class="progress-fill" style="width: ${((this.pthIndex + 1) / list.length) * 100}%"></div>
        </div>

        <div class="exercise-header">
          <span class="badge badge-primary">Viết chữ Hán: ${this.pthIndex + 1}/${list.length}</span>
          <span class="badge badge-success">Điểm: ${this.pthScore}</span>
        </div>

        <div class="pth-prompt-box">
          <div class="pth-pinyin">${item.pinyin}</div>
          <div class="pth-meaning">${item.meaning}</div>
          <button class="btn btn-icon btn-sm btn-listen" id="btn-pth-audio">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
            <span>Phát âm</span>
          </button>
        </div>

        <div class="pth-input-area">
          <input type="text" id="pth-input" class="pth-input chinese-text" placeholder="Gõ chữ Hán hoặc nhấp phím ký tự bên dưới..." autofocus autocomplete="off" />
          <button id="btn-pth-clear" class="btn btn-outline btn-sm">Xóa</button>
        </div>

        <div class="pth-virtual-keyboard">
          <div class="vk-title">Bàn phím gợi ý ký tự:</div>
          <div class="vk-tiles">
            ${item.tiles.map(char => `
              <button class="vk-tile-btn chinese-text" data-char="${char}">${char}</button>
            `).join('')}
          </div>
        </div>

        <div id="pth-feedback" class="feedback-box hidden"></div>

        <div class="exercise-footer">
          <button id="btn-pth-check" class="btn btn-primary">Kiểm tra</button>
          <button id="btn-pth-next" class="btn btn-success hidden">Câu tiếp theo ➔</button>
        </div>
      </div>
    `;

    const input = container.querySelector('#pth-input');
    const clearBtn = container.querySelector('#btn-pth-clear');
    const checkBtn = container.querySelector('#btn-pth-check');
    const nextBtn = container.querySelector('#btn-pth-next');
    const feedback = container.querySelector('#pth-feedback');

    container.querySelector('#btn-pth-audio').addEventListener('click', () => {
      speechEngine.speak(item.hanzi);
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      input.focus();
    });

    container.querySelectorAll('.vk-tile-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        speechEngine.playClick();
        input.value += btn.dataset.char;
        input.focus();
      });
    });

    const checkAnswer = () => {
      if (answered) return;
      const userVal = input.value.trim();
      if (!userVal) {
        alert('Vui lòng nhập hoặc chọn chữ Hán!');
        return;
      }
      answered = true;
      input.disabled = true;

      const isCorrect = userVal === item.hanzi;
      if (isCorrect) {
        this.pthScore += 10;
        speechEngine.playSuccess();
        feedback.className = 'feedback-box correct-feedback';
        feedback.innerHTML = `
          <div class="feedback-title">🎉 Chính xác tuyệt đối! (+10 điểm)</div>
          <div class="feedback-detail">
            Chữ Hán: <strong class="chinese-text" style="font-size: 1.4rem;">${item.hanzi}</strong> [${item.pinyin}] - ${item.meaning}
          </div>
        `;
      } else {
        speechEngine.playError();
        feedback.className = 'feedback-box error-feedback';
        feedback.innerHTML = `
          <div class="feedback-title">❌ Chưa chính xác!</div>
          <div class="feedback-detail">
            Bạn đã viết: <code>${userVal}</code><br>
            Đáp án đúng: <strong class="chinese-text" style="font-size: 1.4rem;">${item.hanzi}</strong> [${item.pinyin}] - ${item.meaning}
          </div>
        `;
      }

      feedback.classList.remove('hidden');
      checkBtn.classList.add('hidden');
      nextBtn.classList.remove('hidden');
    };

    checkBtn.addEventListener('click', checkAnswer);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkAnswer();
    });

    nextBtn.addEventListener('click', () => {
      speechEngine.playClick();
      this.pthIndex++;
      this.renderPinyinToHanzi(container);
    });
  }

  // --- 6. SẮP XẾP TỪ THÀNH CÂU HOÀN CHỈNH (Sentence Unscramble) ---
  initSentenceOrdering(container) {
    this.soIndex = 0;
    this.soScore = 0;
    this.renderSentenceOrdering(container);
  }

  renderSentenceOrdering(container) {
    const list = SENTENCE_ORDERING_EXERCISES;
    if (this.soIndex >= list.length) {
      this.renderQuizResults(container, this.soScore, list.length * 10, () => {
        this.initSentenceOrdering(container);
      });
      return;
    }

    const item = list[this.soIndex];
    // Pool tokens with unique IDs
    let poolTokens = item.scrambled.map((token, id) => ({ id, token }));
    let userSentence = [];
    let answered = false;

    const renderTokensUI = () => {
      const targetArea = container.querySelector('#so-target-area');
      const poolArea = container.querySelector('#so-pool-area');

      // Render selected tokens
      if (userSentence.length === 0) {
        targetArea.innerHTML = `<span class="placeholder-text">Nhấp vào các từ bên dưới để ghép thành câu...</span>`;
      } else {
        targetArea.innerHTML = userSentence.map((t, idx) => `
          <button class="token-chip selected-chip chinese-text" data-id="${t.id}" data-idx="${idx}">
            ${t.token}
          </button>
        `).join('');
      }

      // Render pool tokens
      poolArea.innerHTML = poolTokens.map(t => `
        <button class="token-chip pool-chip chinese-text" data-id="${t.id}">
          ${t.token}
        </button>
      `).join('');

      attachListeners();
    };

    container.innerHTML = `
      <div class="exercise-card">
        <div class="exercise-progress-bar">
          <div class="progress-fill" style="width: ${((this.soIndex + 1) / list.length) * 100}%"></div>
        </div>

        <div class="exercise-header">
          <span class="badge badge-primary">Sắp xếp câu: ${this.soIndex + 1}/${list.length}</span>
          <span class="badge badge-success">Điểm: ${this.soScore}</span>
        </div>

        <div class="so-meaning-box">
          <div class="so-vi-label">🇻🇳 Câu tiếng Việt:</div>
          <div class="so-vi-text">"${item.vietnamese}"</div>
        </div>

        <div class="so-work-zone">
          <div class="so-tray-label">Câu của bạn:</div>
          <div class="so-target-area" id="so-target-area"></div>
        </div>

        <div class="so-pool-zone">
          <div class="so-tray-label">Ngân hàng từ:</div>
          <div class="so-pool-area" id="so-pool-area"></div>
        </div>

        <div id="so-feedback" class="feedback-box hidden"></div>

        <div class="exercise-footer">
          <button id="btn-so-reset" class="btn btn-outline">Làm lại</button>
          <button id="btn-so-check" class="btn btn-primary">Kiểm tra câu</button>
          <button id="btn-so-next" class="btn btn-success hidden">Câu tiếp theo ➔</button>
        </div>
      </div>
    `;

    const attachListeners = () => {
      // Click selected chip to return to pool
      container.querySelectorAll('.selected-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          if (answered) return;
          speechEngine.playClick();
          const id = parseInt(btn.dataset.id, 10);
          const itemT = userSentence.find(x => x.id === id);
          userSentence = userSentence.filter(x => x.id !== id);
          poolTokens.push(itemT);
          renderTokensUI();
        });
      });

      // Click pool chip to add to sentence
      container.querySelectorAll('.pool-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          if (answered) return;
          speechEngine.playClick();
          const id = parseInt(btn.dataset.id, 10);
          const itemT = poolTokens.find(x => x.id === id);
          poolTokens = poolTokens.filter(x => x.id !== id);
          userSentence.push(itemT);
          renderTokensUI();
        });
      });
    };

    renderTokensUI();

    const resetBtn = container.querySelector('#btn-so-reset');
    const checkBtn = container.querySelector('#btn-so-check');
    const nextBtn = container.querySelector('#btn-so-next');
    const feedback = container.querySelector('#so-feedback');

    resetBtn.addEventListener('click', () => {
      if (answered) return;
      poolTokens = item.scrambled.map((token, id) => ({ id, token }));
      userSentence = [];
      renderTokensUI();
    });

    checkBtn.addEventListener('click', () => {
      if (answered) return;
      if (poolTokens.length > 0) {
        alert('Hãy sử dụng hết tất cả các từ trong ngân hàng từ!');
        return;
      }

      answered = true;
      const assembledSentence = userSentence.map(t => t.token).join('');
      const cleanAssembled = assembledSentence.replace(/\s+/g, '');
      const cleanCorrect = item.correctSentence.replace(/\s+/g, '');

      const isCorrect = cleanAssembled === cleanCorrect;

      if (isCorrect) {
        this.soScore += 10;
        speechEngine.playSuccess();
        feedback.className = 'feedback-box correct-feedback';
        feedback.innerHTML = `
          <div class="feedback-title">🎉 Xuất sắc! Câu ghép hoàn toàn chính xác (+10 điểm)</div>
          <div class="feedback-detail">
            <strong>${item.correctSentence}</strong><br>
            <em>${item.pinyin}</em><br>
            <div class="grammar-tip">💡 <strong>Điểm ngữ pháp:</strong> ${item.grammarPoint}</div>
          </div>
        `;
      } else {
        speechEngine.playError();
        feedback.className = 'feedback-box error-feedback';
        feedback.innerHTML = `
          <div class="feedback-title">❌ Chưa chuẩn ngữ pháp tiếng Trung!</div>
          <div class="feedback-detail">
            Câu của bạn: <del>${assembledSentence}</del><br>
            Câu đúng: <strong class="chinese-text">${item.correctSentence}</strong><br>
            <em>${item.pinyin}</em><br>
            <div class="grammar-tip">💡 <strong>Điểm ngữ pháp:</strong> ${item.grammarPoint}</div>
          </div>
        `;
      }

      // Add audio pronunciation button inside feedback
      const listenBtn = document.createElement('button');
      listenBtn.className = 'btn btn-sm btn-icon btn-listen';
      listenBtn.innerHTML = `<span>🔊 Nghe câu đúng</span>`;
      listenBtn.onclick = () => speechEngine.speak(item.correctSentence);
      feedback.appendChild(listenBtn);

      feedback.classList.remove('hidden');
      checkBtn.classList.add('hidden');
      resetBtn.classList.add('hidden');
      nextBtn.classList.remove('hidden');
    });

    nextBtn.addEventListener('click', () => {
      speechEngine.playClick();
      this.soIndex++;
      this.renderSentenceOrdering(container);
    });
  }

  // --- 7. DỊCH CÂU VIỆT SANG TRUNG (Translation Practice) ---
  initTranslation(container) {
    this.transIndex = 0;
    this.transScore = 0;
    this.renderTranslation(container);
  }

  renderTranslation(container) {
    const list = TRANSLATION_EXERCISES;
    if (this.transIndex >= list.length) {
      this.renderQuizResults(container, this.transScore, list.length * 10, () => {
        this.initTranslation(container);
      });
      return;
    }

    const item = list[this.transIndex];
    let answered = false;

    container.innerHTML = `
      <div class="exercise-card">
        <div class="exercise-progress-bar">
          <div class="progress-fill" style="width: ${((this.transIndex + 1) / list.length) * 100}%"></div>
        </div>

        <div class="exercise-header">
          <span class="badge badge-primary">Dịch Việt - Trung: ${this.transIndex + 1}/${list.length}</span>
          <span class="badge badge-success">Điểm: ${this.transScore}</span>
        </div>

        <div class="trans-vietnamese-card">
          <div class="trans-label">🇻🇳 Câu tiếng Việt cần dịch:</div>
          <div class="trans-text">"${item.vietnamese}"</div>
        </div>

        <div class="trans-prompt-title">Chọn câu dịch tiếng Trung chuẩn xác nhất:</div>

        <div class="options-grid" id="trans-options">
          ${item.options.map((opt, idx) => `
            <button class="option-btn" data-correct="${opt.isCorrect}">
              <span class="option-key">${String.fromCharCode(65 + idx)}</span>
              <span class="option-label chinese-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>

        <div id="trans-feedback" class="feedback-box hidden"></div>

        <div class="exercise-footer">
          <button id="btn-trans-next" class="btn btn-primary hidden">
            <span>Câu tiếp theo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    const optButtons = container.querySelectorAll('#trans-options .option-btn');
    const feedback = container.querySelector('#trans-feedback');
    const nextBtn = container.querySelector('#btn-trans-next');

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const isCorrect = btn.dataset.correct === 'true';

        optButtons.forEach(b => {
          b.disabled = true;
          if (b.dataset.correct === 'true') b.classList.add('correct');
        });

        if (isCorrect) {
          btn.classList.add('correct');
          this.transScore += 10;
          speechEngine.playSuccess();
          feedback.className = 'feedback-box correct-feedback';
          feedback.innerHTML = `
            <div class="feedback-title">🎉 Bản dịch chính xác tuyệt vời! (+10 điểm)</div>
            <div class="feedback-detail">
              <strong>${item.targetHanzi}</strong><br>
              <em>${item.pinyin}</em><br>
              <div class="grammar-tip">💡 <strong>Giải thích ngữ pháp:</strong> ${item.explanation}</div>
            </div>
          `;
        } else {
          btn.classList.add('incorrect');
          speechEngine.playError();
          feedback.className = 'feedback-box error-feedback';
          feedback.innerHTML = `
            <div class="feedback-title">❌ Chưa chính xác!</div>
            <div class="feedback-detail">
              Đáp án chuẩn: <strong class="chinese-text">${item.targetHanzi}</strong><br>
              <em>${item.pinyin}</em><br>
              <div class="grammar-tip">💡 <strong>Giải thích ngữ pháp:</strong> ${item.explanation}</div>
            </div>
          `;
        }

        const audioBtn = document.createElement('button');
        audioBtn.className = 'btn btn-sm btn-icon btn-listen';
        audioBtn.innerHTML = `<span>🔊 Nghe phát âm câu tiếng Trung</span>`;
        audioBtn.onclick = () => speechEngine.speak(item.targetHanzi);
        feedback.appendChild(audioBtn);

        feedback.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
      });
    });

    nextBtn.addEventListener('click', () => {
      speechEngine.playClick();
      this.transIndex++;
      this.renderTranslation(container);
    });
  }

  // --- 8. HOÀN THÀNH HỘI THOẠI 2 LƯỢT TRẢ LỜI (2-turn Dialogue Completion) ---
  initTwoTurnDialogue(container) {
    this.dialIndex = 0;
    this.dialScore = 0;
    this.renderTwoTurnDialogue(container);
  }

  renderTwoTurnDialogue(container) {
    const list = TWO_TURN_DIALOGUES;
    if (this.dialIndex >= list.length) {
      this.renderQuizResults(container, this.dialScore, list.length * 20, () => {
        this.initTwoTurnDialogue(container);
      });
      return;
    }

    const item = list[this.dialIndex];
    let currentTurn = 1;
    let turn1Answer = null;
    let turn2Answer = null;

    container.innerHTML = `
      <div class="exercise-card">
        <div class="exercise-progress-bar">
          <div class="progress-fill" style="width: ${((this.dialIndex + 1) / list.length) * 100}%"></div>
        </div>

        <div class="exercise-header">
          <span class="badge badge-primary">Hội thoại thực tế: ${this.dialIndex + 1}/${list.length}</span>
          <span class="badge badge-accent">${item.topic}</span>
          <span class="badge badge-success">Điểm: ${this.dialScore}</span>
        </div>

        <div class="dialogue-chat-window" id="dialogue-chat-window">
          <!-- Turn 1 NPC Message -->
          <div class="chat-message npc-message" id="msg-turn1-npc">
            <div class="avatar-circle">👤</div>
            <div class="message-content">
              <div class="sender-name">${item.partner.name} <small>(${item.partner.role})</small></div>
              <div class="message-bubble chinese-text">
                ${item.turn1.prompt}
                <button class="mini-listen-btn" onclick="speechEngine.speak('${item.turn1.prompt}')">🔊</button>
              </div>
              <div class="message-sub">${item.turn1.pinyin}</div>
              <div class="message-vi">🇻🇳 "${item.turn1.meaning}"</div>
            </div>
          </div>

          <!-- User Turn 1 Bubble (will appear after choice) -->
          <div id="user-turn1-slot"></div>

          <!-- NPC Turn 2 Message (will appear after Turn 1 correct) -->
          <div id="npc-turn2-slot"></div>

          <!-- User Turn 2 Bubble (will appear after choice) -->
          <div id="user-turn2-slot"></div>
        </div>

        <div class="dialogue-action-panel" id="dialogue-action-panel">
          <div class="dialogue-turn-indicator" id="turn-indicator">
            Lượt 1/2: Chọn câu đáp lời ${item.partner.name}:
          </div>
          <div class="options-grid" id="dialogue-options">
            ${item.turn1.options.map((opt, idx) => `
              <button class="option-btn dialogue-choice-btn" data-idx="${idx}" data-correct="${opt.isCorrect}">
                <span class="option-key">${String.fromCharCode(65 + idx)}</span>
                <div class="option-label">
                  <div class="chinese-text">${opt.text}</div>
                  <div class="option-sub-text">${opt.pinyin} • ${opt.meaning}</div>
                </div>
              </button>
            `).join('')}
          </div>
        </div>

        <div id="dial-feedback" class="feedback-box hidden"></div>

        <div class="exercise-footer">
          <button id="btn-dial-next" class="btn btn-primary hidden">
            <span>Hội thoại tiếp theo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    const chatWindow = container.querySelector('#dialogue-chat-window');
    const actionPanel = container.querySelector('#dialogue-action-panel');
    const optionsGrid = container.querySelector('#dialogue-options');
    const turnIndicator = container.querySelector('#turn-indicator');
    const feedback = container.querySelector('#dial-feedback');
    const nextBtn = container.querySelector('#btn-dial-next');

    // Attach listeners for Turn 1
    const attachTurn1Listeners = () => {
      optionsGrid.querySelectorAll('.dialogue-choice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx, 10);
          const opt = item.turn1.options[idx];
          turn1Answer = opt;

          if (opt.isCorrect) {
            speechEngine.playSuccess();
            this.dialScore += 10;
            // Render user message bubble
            container.querySelector('#user-turn1-slot').innerHTML = `
              <div class="chat-message user-message animate-fade-in">
                <div class="message-content">
                  <div class="sender-name">Bạn (Học viên)</div>
                  <div class="message-bubble chinese-text">
                    ${opt.text}
                    <button class="mini-listen-btn" onclick="speechEngine.speak('${opt.text}')">🔊</button>
                  </div>
                  <div class="message-sub">${opt.pinyin}</div>
                  <div class="message-vi">🇻🇳 "${opt.meaning}"</div>
                </div>
                <div class="avatar-circle user-avatar">🙋</div>
              </div>
            `;

            // Transition to Turn 2 after 600ms
            setTimeout(() => {
              renderTurn2();
            }, 600);
          } else {
            speechEngine.playError();
            feedback.className = 'feedback-box error-feedback';
            feedback.innerHTML = `
              <div class="feedback-title">❌ Chưa phù hợp với hoàn cảnh!</div>
              <div class="feedback-detail">${opt.feedback} Vui lòng chọn lại.</div>
            `;
            feedback.classList.remove('hidden');
          }
        });
      });
    };

    const renderTurn2 = () => {
      currentTurn = 2;
      feedback.classList.add('hidden');

      // Add NPC turn 2 bubble
      container.querySelector('#npc-turn2-slot').innerHTML = `
        <div class="chat-message npc-message animate-fade-in">
          <div class="avatar-circle">👤</div>
          <div class="message-content">
            <div class="sender-name">${item.partner.name} <small>(${item.partner.role})</small></div>
            <div class="message-bubble chinese-text">
              ${item.turn2.prompt}
              <button class="mini-listen-btn" onclick="speechEngine.speak('${item.turn2.prompt}')">🔊</button>
            </div>
            <div class="message-sub">${item.turn2.pinyin}</div>
            <div class="message-vi">🇻🇳 "${item.turn2.meaning}"</div>
          </div>
        </div>
      `;

      // Speak NPC reply
      setTimeout(() => speechEngine.speak(item.turn2.prompt), 200);

      turnIndicator.innerHTML = `Lượt 2/2: ${item.partner.name} tiếp tục đáp lời. Bạn hãy chọn câu phản hồi phù hợp:`;
      optionsGrid.innerHTML = item.turn2.options.map((opt, idx) => `
        <button class="option-btn dialogue-choice-btn" data-idx="${idx}" data-correct="${opt.isCorrect}">
          <span class="option-key">${String.fromCharCode(65 + idx)}</span>
          <div class="option-label">
            <div class="chinese-text">${opt.text}</div>
            <div class="option-sub-text">${opt.pinyin} • ${opt.meaning}</div>
          </div>
        </button>
      `).join('');

      // Turn 2 choices listeners
      optionsGrid.querySelectorAll('.dialogue-choice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx, 10);
          const opt = item.turn2.options[idx];
          turn2Answer = opt;

          if (opt.isCorrect) {
            speechEngine.playSuccess();
            this.dialScore += 10;

            container.querySelector('#user-turn2-slot').innerHTML = `
              <div class="chat-message user-message animate-fade-in">
                <div class="message-content">
                  <div class="sender-name">Bạn (Học viên)</div>
                  <div class="message-bubble chinese-text">
                    ${opt.text}
                    <button class="mini-listen-btn" onclick="speechEngine.speak('${opt.text}')">🔊</button>
                  </div>
                  <div class="message-sub">${opt.pinyin}</div>
                  <div class="message-vi">🇻🇳 "${opt.meaning}"</div>
                </div>
                <div class="avatar-circle user-avatar">🙋</div>
              </div>
            `;

            actionPanel.classList.add('hidden');
            feedback.className = 'feedback-box correct-feedback';
            feedback.innerHTML = `
              <div class="feedback-title">🎉 Chúc mừng! Bạn đã hoàn thành xuất sắc đoạn hội thoại 2 lượt (+20 điểm)</div>
              <div class="feedback-detail">
                Cuộc trò chuyện đã diễn ra rất tự nhiên và chính xác theo phong cách giao tiếp của người bản xứ!
              </div>
            `;
            feedback.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
          } else {
            speechEngine.playError();
            feedback.className = 'feedback-box error-feedback';
            feedback.innerHTML = `
              <div class="feedback-title">❌ Chưa phù hợp với hoàn cảnh!</div>
              <div class="feedback-detail">${opt.feedback} Vui lòng chọn lại.</div>
            `;
            feedback.classList.remove('hidden');
          }
        });
      });
    };

    attachTurn1Listeners();

    nextBtn.addEventListener('click', () => {
      speechEngine.playClick();
      this.dialIndex++;
      this.renderTwoTurnDialogue(container);
    });
  }

  // --- COMMON QUIZ RESULT COMPONENT ---
  renderQuizResults(container, score, maxScore, onRetry) {
    const percentage = Math.round((score / maxScore) * 100);
    let title = 'Hoàn thành xuất sắc!';
    let emoji = '🏆';
    let message = 'Bạn nắm rất vững kiến thức và kỹ năng tiếng Trung!';

    if (percentage < 50) {
      title = 'Cố gắng lên nhé!';
      emoji = '💪';
      message = 'Hãy ôn tập thêm từ vựng và thử lại để cải thiện kết quả!';
    } else if (percentage < 80) {
      title = 'Làm rất tốt!';
      emoji = '⭐';
      message = 'Bạn có nền tảng tốt, tiếp tục rèn luyện mỗi ngày nhé!';
    }

    container.innerHTML = `
      <div class="quiz-result-card animate-fade-in">
        <div class="result-emoji">${emoji}</div>
        <h2 class="result-title">${title}</h2>
        <div class="result-score-badge">
          <span class="score-num">${score}</span>
          <span class="score-max">/ ${maxScore} điểm (${percentage}%)</span>
        </div>
        <p class="result-desc">${message}</p>
        <div class="result-actions">
          <button class="btn btn-primary" id="btn-result-retry">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 4v6h6M23 20v-6h-6"/>
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
            </svg>
            <span>Luyện tập lại</span>
          </button>
        </div>
      </div>
    `;

    container.querySelector('#btn-result-retry').addEventListener('click', () => {
      speechEngine.playClick();
      if (onRetry) onRetry();
    });
  }
}

// Global instance
const exerciseManager = new ExerciseManager();
