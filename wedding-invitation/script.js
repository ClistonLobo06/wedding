/**
 * Roshan & Elvisha — Luxury Wedding Invitation
 * Pure Vanilla JavaScript (Vercel-Ready & Offline-Friendly)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. CONFIGURATION & EDITABLE DETAILS
  // =========================================================================
  const WEDDING_CONFIG = {
    // Target Wedding Ceremony Date: Monday, 11 January 2027, 11:00 AM
    // Format: YYYY-MM-DDTHH:MM:SS
    targetDate: '2027-01-11T11:00:00',
    audioSrc: 'audio/wedding-music.mp3'
  };

  // =========================================================================
  // 2. MOBILE NAVIGATION & SCROLLSPY
  // =========================================================================
  function initNavigation() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    if (hamburgerBtn && navMenu) {
      hamburgerBtn.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('open');
        hamburgerBtn.classList.toggle('active', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
      });

      // Close menu when any link is clicked
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          navMenu.classList.remove('open');
          hamburgerBtn.classList.remove('active');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
      });

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (navMenu.classList.contains('open') && 
            !navMenu.contains(e.target) && 
            !hamburgerBtn.contains(e.target)) {
          navMenu.classList.remove('open');
          hamburgerBtn.classList.remove('active');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Navbar appearance on scroll
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });

    // Active Section Scrollspy
    const sections = document.querySelectorAll('section[id]');
    function updateActiveLink() {
      const scrollY = window.pageYOffset + 120;

      sections.forEach(function (current) {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(function (l) { l.classList.remove('active'); });
          if (link) link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
  }

  // =========================================================================
  // 3. GOLDEN SPARKLE BURST GENERATOR
  // =========================================================================
  function createSparkleBurst(x, y) {
    const container = document.getElementById('sparkleBurstContainer');
    if (!container) return;

    const count = 45;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'sparkle-particle';
      
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.6;
      const distance = Math.random() * 220 + 80;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const duration = Math.random() * 1.2 + 0.8;
      const size = Math.random() * 7 + 4;

      p.style.left = x + 'px';
      p.style.top = y + 'px';
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.transition = `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`;

      container.appendChild(p);

      requestAnimationFrame(() => {
        p.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
        p.style.opacity = '0';
      });

      setTimeout(() => {
        if (p.parentNode) p.parentNode.removeChild(p);
      }, duration * 1000);
    }
  }

  // =========================================================================
  // 4. 3D ROYAL VELVET & GOLD GATEFOLD INVITATION ANIMATION
  // =========================================================================
  function initRoyalInvitationModal() {
    const heroBtn = document.getElementById('heroOpenInvitationBtn');
    const sectionBtn = document.getElementById('sectionOpenInvitationBtn');
    const modal = document.getElementById('invitationModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const backdrop = document.getElementById('invitationModalBackdrop');
    const folioBox = document.getElementById('royalFolioBox');
    const waxSeal = document.getElementById('royalWaxSeal');
    const fullscreenBtn = document.getElementById('toolbarFullscreenBtn');
    const replayBtn = document.getElementById('toolbarReplayBtn');
    const cardImg = document.getElementById('folioCardImg');

    if (!modal || !folioBox) return;

    let isOpeningInProgress = false;

    function playRoyalOpeningSequence() {
      if (isOpeningInProgress) return;
      isOpeningInProgress = true;

      // 1. Trigger Sparkle Burst from the Wax Seal center
      if (waxSeal) {
        const rect = waxSeal.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        createSparkleBurst(centerX, centerY);
      }

      // 2. Open the Royal Gates in 3D Perspective
      folioBox.classList.add('is-opened');
      modal.classList.add('opened');

      setTimeout(() => {
        isOpeningInProgress = false;
      }, 1300);
    }

    function openInvitationModal() {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // If already opened, just show; otherwise play grand royal sequence
      if (!folioBox.classList.contains('is-opened')) {
        setTimeout(playRoyalOpeningSequence, 280);
      }
    }

    function closeInvitationModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function replayRoyalOpening() {
      if (isOpeningInProgress) return;
      isOpeningInProgress = true;

      // Temporarily close gates and restore seal
      folioBox.classList.remove('is-opened');
      modal.classList.remove('opened');

      // Wait for doors to close and seal to reassemble, then re-open with fresh sparkles
      setTimeout(() => {
        isOpeningInProgress = false;
        playRoyalOpeningSequence();
      }, 450);
    }

    // Trigger button in Hero
    if (heroBtn) {
      heroBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openInvitationModal();
      });
    }

    // Trigger button in Countdown section
    if (sectionBtn) {
      sectionBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openInvitationModal();
      });
    }

    // Close events
    if (closeBtn) closeBtn.addEventListener('click', closeInvitationModal);
    if (backdrop) backdrop.addEventListener('click', closeInvitationModal);

    // Escape key closes modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeInvitationModal();
      }
    });

    // Clicking wax seal or closed box opens it
    if (waxSeal) {
      waxSeal.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!folioBox.classList.contains('is-opened')) {
          playRoyalOpeningSequence();
        }
      });
    }

    folioBox.addEventListener('click', function (e) {
      if (!folioBox.classList.contains('is-opened')) {
        e.stopPropagation();
        playRoyalOpeningSequence();
      }
    });

    // Replay opening button
    if (replayBtn) {
      replayBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        replayRoyalOpening();
      });
    }

    // Fullscreen lightbox button & clicking card image
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openCardLightbox();
      });
    }

    if (cardImg) {
      cardImg.addEventListener('click', function (e) {
        if (folioBox.classList.contains('is-opened')) {
          e.stopPropagation();
          openCardLightbox();
        }
      });
    }
  }

  // =========================================================================
  // 5. LIVE WEDDING COUNTDOWN TIMER (11 JANUARY 2027)
  // =========================================================================
  function initCountdown() {
    const timerContainer = document.getElementById('countdownTimer');
    const dayMessage = document.getElementById('weddingDayMessage');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!timerContainer || !daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    const targetDateStr = timerContainer.getAttribute('data-target-date') || WEDDING_CONFIG.targetDate;
    const targetDate = new Date(targetDateStr).getTime();

    function updateTimer() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        timerContainer.style.display = 'none';
        if (dayMessage) {
          dayMessage.style.display = 'block';
        }
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
  }

  // =========================================================================
  // 6. BACKGROUND MUSIC CONTROLLER (MP3 + SYNTHESIZER FALLBACK)
  // =========================================================================
  function initMusicController() {
    const audioEl = document.getElementById('weddingAudio');
    const musicBtn = document.getElementById('musicToggleBtn');
    let isPlaying = false;
    let synth = null;

    if (!musicBtn) return;

    // Web Audio romantic melody synthesizer as fallback
    class RomanticAudioSynth {
      constructor() {
        this.ctx = null;
        this.timer = null;
        this.step = 0;
        this.notes = [
          587.33, 739.99, 880.00, 1174.66,
          440.00, 659.25, 880.00, 1108.73,
          493.88, 587.33, 739.99, 987.77,
          369.99, 554.37, 739.99, 880.00,
          392.00, 587.33, 783.99, 1174.66,
          293.66, 440.00, 587.33, 880.00
        ];
      }

      start() {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        if (!this.ctx) this.ctx = new AudioCtx();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const playNext = () => {
          if (!this.ctx) return;
          const freq = this.notes[this.step % this.notes.length];
          this.step++;

          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.3);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.8);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(this.ctx.currentTime);
          osc.stop(this.ctx.currentTime + 1.85);

          this.timer = setTimeout(playNext, 1200);
        };

        playNext();
      }

      stop() {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        if (this.ctx && this.ctx.state === 'running') {
          this.ctx.suspend();
        }
      }
    }

    musicBtn.addEventListener('click', function () {
      if (!isPlaying) {
        if (audioEl) {
          const playPromise = audioEl.play();
          if (playPromise !== undefined) {
            playPromise.then(function () {
              isPlaying = true;
              musicBtn.classList.add('playing');
            }).catch(function (err) {
              console.log('Audio file playback fallback to synth:', err);
              if (!synth) synth = new RomanticAudioSynth();
              synth.start();
              isPlaying = true;
              musicBtn.classList.add('playing');
            });
          } else {
            isPlaying = true;
            musicBtn.classList.add('playing');
          }
        }
      } else {
        if (audioEl) audioEl.pause();
        if (synth) synth.stop();
        isPlaying = false;
        musicBtn.classList.remove('playing');
      }
    });
  }

  // =========================================================================
  // 7. CARD LIGHTBOX MODAL (FULLSCREEN HIGH-RES VIEW)
  // =========================================================================
  function openCardLightbox() {
    const modal = document.getElementById('cardLightboxModal');
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function initCardLightbox() {
    const modal = document.getElementById('cardLightboxModal');
    const openBtn = document.getElementById('openLightboxBtn');
    const closeBtn = document.getElementById('lightboxCloseBtn');
    const backdrop = document.getElementById('lightboxBackdrop');
    const pageCardImg = document.getElementById('uploadedCardImg');

    if (!modal) return;

    function closeModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (openBtn) openBtn.addEventListener('click', openCardLightbox);
    if (pageCardImg) pageCardImg.addEventListener('click', openCardLightbox);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // =========================================================================
  // 8. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // =========================================================================
  function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealElements.forEach(function (el) {
        el.classList.add('is-revealed');
      });
    }
  }

  // =========================================================================
  // 9. FLOATING ROSE & GOLD FLOWER PETALS CANVAS
  // =========================================================================
  function initPetalsCanvas() {
    const canvas = document.getElementById('petalsCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', function () {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    const petalCount = window.innerWidth < 768 ? 16 : 28;
    const petals = [];

    // Colors: Crimson Velvet Petals, Deep Rose, Golden Sparks
    const petalColors = [
      { r: 140, g: 15, b: 30, a: 0.8 },   // Deep Burgundy
      { r: 180, g: 25, b: 45, a: 0.75 },  // Crimson Red
      { r: 212, g: 175, b: 55, a: 0.65 }, // Gold Sparkle
      { r: 245, g: 215, b: 120, a: 0.6 }, // Light Gold
      { r: 100, g: 10, b: 20, a: 0.75 }   // Dark Wine
    ];

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(init) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -20;
        this.size = Math.random() * 8 + 8;
        this.speedY = Math.random() * 0.9 + 0.6;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.03;
        this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = Math.random() * 0.03 + 0.01;
      }

      update() {
        this.y += this.speedY;
        this.angle += this.spin;
        this.flip += this.flipSpeed;
        this.x += this.speedX + Math.sin(this.angle) * 0.6;

        if (this.y > height + 25 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(Math.cos(this.flip), 1);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size / 2, this.size, 0, this.size * 1.3);
        ctx.bezierCurveTo(this.size / 2, this.size, this.size / 2, -this.size / 2, 0, 0);

        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
        ctx.fill();

        ctx.restore();
      }
    }

    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw();
      }
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  // =========================================================================
  // 10. RESPONSIVE NAME FITTER (ENSURES BRIDE & GROOM NAME IS STRICTLY SINGLE LINE)
  // =========================================================================
  function initTogetherNamesFitter() {
    const el = document.getElementById('togetherNames') || document.querySelector('.together-names');
    if (!el) return;

    function fit() {
      el.style.fontSize = ''; // reset to CSS clamp
      const parent = el.parentElement;
      if (!parent) return;

      const availableWidth = parent.clientWidth - 16;
      if (availableWidth > 0 && el.scrollWidth > availableWidth) {
        const currentSize = parseFloat(window.getComputedStyle(el).fontSize);
        const scale = availableWidth / el.scrollWidth;
        el.style.fontSize = Math.max(13, Math.floor(currentSize * scale * 0.98)) + 'px';
      }
    }

    fit();
    window.addEventListener('resize', fit, { passive: true });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit);
    }
  }

  // =========================================================================
  // 11. INITIALIZE ON DOM READY
  // =========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initRoyalInvitationModal();
    initCountdown();
    initMusicController();
    initCardLightbox();
    initScrollAnimations();
    initPetalsCanvas();
    initTogetherNamesFitter();
  });

})();
