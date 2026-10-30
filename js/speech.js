/**
 * Speech Engine & Web Audio Sound Effects
 * Uses native browser Web Speech API (speechSynthesis) for authentic Chinese voice
 * and Web Audio API for interactive gamified sound effects without external files.
 */

class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.chineseVoice = null;
    this.audioContext = null;
    this.isMuted = false;
    this.speechRate = 0.9; // Slightly slower for language learners

    this.initVoices();
    this.loadSettings();

    // Voice list changes asynchronously in Chromium/Firefox
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this.initVoices();
    }
  }

  loadSettings() {
    try {
      const savedRate = localStorage.getItem('zh_speech_rate');
      if (savedRate) this.speechRate = parseFloat(savedRate);
      const savedMute = localStorage.getItem('zh_sound_muted');
      if (savedMute) this.isMuted = savedMute === 'true';
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  setSpeechRate(rate) {
    this.speechRate = rate;
    localStorage.setItem('zh_speech_rate', rate);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('zh_sound_muted', this.isMuted);
    return this.isMuted;
  }

  initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioritize natural Mandarin Chinese voices: zh-CN, zh, cmn
    this.chineseVoice = voices.find(v => 
      v.lang === 'zh-CN' || v.lang === 'zh_CN' || v.lang.startsWith('zh')
    ) || null;
  }

  /**
   * Speak Chinese text with Web Speech API
   * @param {string} text - Chinese characters to pronounce
   * @param {function} onStart - Callback when speech starts
   * @param {function} onEnd - Callback when speech ends
   */
  speak(text, onStart = null, onEnd = null) {
    if (!this.synth) {
      console.warn('Web Speech API is not supported in this browser.');
      return;
    }

    if (this.synth.speaking) {
      this.synth.cancel();
    }

    if (!text || text.trim() === '') return;

    // Filter out punctuation for cleaner pronunciation if needed, or leave naturally
    const cleanText = text.replace(/[0-9\(\)（）\[\]\<\>]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'zh-CN';
    utterance.rate = this.speechRate;
    utterance.pitch = 1.0;

    if (this.chineseVoice) {
      utterance.voice = this.chineseVoice;
    } else {
      // Re-query voices if not ready
      this.initVoices();
      if (this.chineseVoice) utterance.voice = this.chineseVoice;
    }

    if (onStart) {
      utterance.onstart = () => onStart();
    }

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('Speech error:', e);
      if (onEnd) onEnd();
    };

    this.synth.speak(utterance);
  }

  getAudioContext() {
    if (!this.audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioContext = new AudioContext();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    return this.audioContext;
  }

  /**
   * Play sweet success chime (frequencies: 523.25Hz -> 659.25Hz -> 783.99Hz = C5 - E5 - G5)
   */
  playSuccess() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.18, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.35);
    });
  }

  /**
   * Play subtle error buzz (low frequency pulse)
   */
  playError() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(130, now + 0.22);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.28);
  }

  /**
   * Play soft tap/click feedback
   */
  playClick() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }
}

// Global instance
const speechEngine = new SpeechEngine();
