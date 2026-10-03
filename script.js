/**
 * Roshan & Elvisha — Luxury Wedding Invitation
 * ChungDoi Minimalism Dark Red Replica & Interactive Features
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. CONFIGURATION
  // =========================================================================
  const WEDDING_CONFIG = {
    // Target Wedding Ceremony Date: Monday, 11 January 2027, 5:00 PM (17:00)
    targetDate: '2027-01-11T17:00:00',
    galleryImages: [
      { src: 'images/chungdoi_1.jpg', alt: 'Roshan and Elvisha in black outfits' },
      { src: 'images/chungdoi_2.jpg', alt: 'Roshan and Elvisha standing together' },
      { src: 'images/chungdoi_3.jpg', alt: 'Roshan and Elvisha with rose bouquet' },
      { src: 'images/chungdoi_4.jpg', alt: 'Roshan and Elvisha portrait' }
    ],
    printedCardImage: 'images/wedding-card.jpg'
  };

  // =========================================================================
  // 2. ENVELOPE OPENING ANIMATION & AUDIO PLAYBACK
  // =========================================================================
  function initEnvelopeOpening() {
    const envelopeScreen = document.getElementById('envelopeScreen');
    const openBtn = document.getElementById('openInvitationBtn');
    const waxSealBtn = document.getElementById('waxSealBtn');
    const audioEl = document.getElementById('weddingAudio');
    const musicBtn = document.getElementById('musicToggleBtn');

    if (!envelopeScreen) return;

    let hasOpened = false;

    function openEnvelope() {
      if (hasOpened) return;
      hasOpened = true;

      // 1. Golden Sparkle Burst
      const rect = (waxSealBtn || openBtn).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      createSparkleBurst(centerX, centerY);

      // 2. Dissolve Envelope Screen
      envelopeScreen.classList.add('is-opened');

      // 3. Attempt to play background music on user gesture
      if (audioEl) {
        audioEl.play().then(() => {
          if (musicBtn) musicBtn.classList.add('playing');
        }).catch((err) => {
          console.log('Autoplay audio note:', err);
        });
      }

      // 4. Smooth scroll to top of main website
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (openBtn) openBtn.addEventListener('click', openEnvelope);
    if (waxSealBtn) waxSealBtn.addEventListener('click', openEnvelope);

    // Auto open if URL has ?open=1 like ChungDoi
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('open') === '1') {
      setTimeout(openEnvelope, 400);
    }
  }

  // =========================================================================
  // 3. GOLDEN SPARKLE BURST GENERATOR
  // =========================================================================
  function createSparkleBurst(x, y) {
    const container = document.getElementById('sparkleBurstContainer');
    if (!container) return;

    const count = 40;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'sparkle-particle';

      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const distance = Math.random() * 200 + 70;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const duration = Math.random() * 1.0 + 0.7;
      const size = Math.random() * 6 + 4;

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
  // 4. AMBIENT FALLING HEARTS & ROSE PETALS CANVAS (CHUNGDOI SIGNATURE)
  // =========================================================================
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', function () {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    const particleCount = window.innerWidth < 768 ? 16 : 26;
    const particles = [];

    // ChungDoi colors: Burgundy (#a8323b), Gold (#c9a24a), Soft Ivory (#ece4d8)
    const particleColors = [
      { r: 168, g: 50, b: 59, a: 0.75, type: 'heart' },
      { r: 201, g: 162, b: 74, a: 0.7, type: 'heart' },
      { r: 236, g: 228, b: 216, a: 0.65, type: 'petal' },
      { r: 122, g: 31, b: 38, a: 0.75, type: 'heart' },
      { r: 197, g: 165, b: 132, a: 0.65, type: 'petal' }
    ];

    class AmbientParticle {
      constructor() {
        this.reset(true);
      }

      reset(initial) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -30;
        this.size = Math.random() * 8 + 10;
        this.speedY = Math.random() * 0.8 + 0.45;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.02;
        this.sway = Math.random() * 20 + 10;
        this.swaySpeed = Math.random() * 0.02 + 0.01;
        this.swayAngle = Math.random() * Math.PI * 2;
        this.config = particleColors[Math.floor(Math.random() * particleColors.length)];
      }

      update() {
        this.y += this.speedY;
        this.angle += this.spin;
        this.swayAngle += this.swaySpeed;
        this.x += this.speedX + Math.sin(this.swayAngle) * 0.5;

        if (this.y > height + 35 || this.x < -40 || this.x > width + 40) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        ctx.fillStyle = `rgba(${this.config.r}, ${this.config.g}, ${this.config.b}, ${this.config.a})`;

        if (this.config.type === 'heart') {
          // Draw miniature heart
          const s = this.size * 0.6;
          ctx.beginPath();
          ctx.moveTo(0, s * 0.3);
          ctx.bezierCurveTo(-s * 0.5, -s * 0.4, -s, s * 0.2, 0, s);
          ctx.bezierCurveTo(s, s * 0.2, s * 0.5, -s * 0.4, 0, s * 0.3);
          ctx.fill();
        } else {
          // Draw soft curved petal
          const s = this.size * 0.7;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(s * 0.6, 0, 0, s);
          ctx.quadraticCurveTo(-s * 0.6, 0, 0, -s);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new AmbientParticle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  // =========================================================================
  // 5. LIVE COUNTDOWN TIMER (JANUARY 11, 2027)
  // =========================================================================
  function initCountdown() {
    const timerContainer = document.getElementById('countdownTimer');
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
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
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
    setInterval(updateTimer, 1000);
  }

  // =========================================================================
  // 6. PHOTO GALLERY & LIGHTBOX MODAL
  // =========================================================================
  function initGalleryLightbox() {
    const modal = document.getElementById('galleryLightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const counterEl = document.getElementById('lightboxCounter');
    const closeBtn = document.getElementById('lightboxCloseBtn');
    const prevBtn = document.getElementById('lightboxPrevBtn');
    const nextBtn = document.getElementById('lightboxNextBtn');
    const backdrop = document.getElementById('lightboxBackdrop');
    const galleryCards = document.querySelectorAll('.gallery-card');
    const viewOriginalBtn = document.getElementById('viewOriginalCardBtn');

    if (!modal || !lightboxImg) return;

    let currentIndex = 0;
    const images = WEDDING_CONFIG.galleryImages;

    function openLightbox(index) {
      currentIndex = index;
      updateLightboxContent();
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function updateLightboxContent() {
      if (currentIndex === -1) {
        // Printed wedding card view
        lightboxImg.src = WEDDING_CONFIG.printedCardImage;
        lightboxImg.alt = 'Official Printed Wedding Invitation Card';
        if (counterEl) counterEl.textContent = 'Invitation Card';
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        return;
      }

      if (prevBtn) prevBtn.style.display = '';
      if (nextBtn) nextBtn.style.display = '';

      const currentItem = images[currentIndex];
      lightboxImg.src = currentItem.src;
      lightboxImg.alt = currentItem.alt;
      if (counterEl) {
        counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
      }
    }

    function showNext() {
      if (currentIndex === -1) currentIndex = 0;
      else currentIndex = (currentIndex + 1) % images.length;
      updateLightboxContent();
    }

    function showPrev() {
      if (currentIndex === -1) currentIndex = 0;
      else currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateLightboxContent();
    }

    galleryCards.forEach((card, idx) => {
      card.addEventListener('click', () => openLightbox(idx));
    });

    if (viewOriginalBtn) {
      viewOriginalBtn.addEventListener('click', () => openLightbox(-1));
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });
  }

  // =========================================================================
  // 7. RSVP FORM SUBMISSION
  // =========================================================================
  function initRSVP() {
    const form = document.getElementById('rsvpForm');
    const successMsg = document.getElementById('rsvpSuccessMessage');
    const submitBtn = document.getElementById('rsvpSubmitBtn');

    if (!form || !successMsg) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const guestName = form.guestName.value.trim();
      const attendance = form.attendance.value;
      const guestCount = form.guestCount ? form.guestCount.value : '1';
      const message = form.guestMessage.value.trim();

      const rsvpData = {
        name: guestName,
        attendance: attendance,
        guests: guestCount,
        message: message,
        submittedAt: new Date().toISOString()
      };

      // Save locally
      try {
        const stored = JSON.parse(localStorage.getItem('wedding_rsvp') || '[]');
        stored.push(rsvpData);
        localStorage.setItem('wedding_rsvp', JSON.stringify(stored));
      } catch (err) {
        console.log('Storage note:', err);
      }

      // Animate success
      if (submitBtn) {
        submitBtn.style.display = 'none';
      }
      successMsg.style.display = 'block';
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // =========================================================================
  // 8. BACKGROUND MUSIC CONTROLLER
  // =========================================================================
  function initMusicController() {
    const audioEl = document.getElementById('weddingAudio');
    const musicBtn = document.getElementById('musicToggleBtn');
    let isPlaying = false;

    if (!musicBtn || !audioEl) return;

    musicBtn.addEventListener('click', function () {
      if (!isPlaying) {
        audioEl.play().then(() => {
          isPlaying = true;
          musicBtn.classList.add('playing');
        }).catch((err) => {
          console.log('Audio playback note:', err);
        });
      } else {
        audioEl.pause();
        isPlaying = false;
        musicBtn.classList.remove('playing');
      }
    });

    audioEl.addEventListener('play', () => {
      isPlaying = true;
      musicBtn.classList.add('playing');
    });

    audioEl.addEventListener('pause', () => {
      isPlaying = false;
      musicBtn.classList.remove('playing');
    });
  }

  // =========================================================================
  // 9. MOBILE NAVIGATION & SCROLLSPY
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

      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          navMenu.classList.remove('open');
          hamburgerBtn.classList.remove('active');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
      });

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

    // Navbar scrolled shadow
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });

    // Active link scrollspy
    const sections = document.querySelectorAll('section[id]');
    function updateActiveLink() {
      const scrollPos = window.pageYOffset + 120;
      sections.forEach(function (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(l => l.classList.remove('active'));
          if (link) link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
  }

  // =========================================================================
  // 10. SCROLL REVEAL (INTERSECTION OBSERVER)
  // =========================================================================
  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal-on-scroll');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      elements.forEach(el => observer.observe(el));
    } else {
      elements.forEach(el => el.classList.add('is-revealed'));
    }
  }

  // =========================================================================
  // 11. STRICT SINGLE-LINE COUPLE NAME FITTER
  // =========================================================================
  function initSingleLineNameFitter() {
    const el = document.getElementById('coupleSingleLineNames');
    if (!el || !el.parentElement) return;

    function fit() {
      el.style.fontSize = ''; // reset to CSS clamp
      const parent = el.parentElement;
      const maxWidth = parent.clientWidth - 16;
      if (maxWidth > 0 && el.scrollWidth > maxWidth) {
        const computedSize = parseFloat(window.getComputedStyle(el).fontSize);
        const ratio = maxWidth / el.scrollWidth;
        el.style.fontSize = Math.max(13, Math.floor(computedSize * ratio * 0.98)) + 'px';
      }
    }

    fit();
    window.addEventListener('resize', fit, { passive: true });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit);
    }
  }

  // =========================================================================
  // 12. INITIALIZATION ON DOM READY
  // =========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    initEnvelopeOpening();
    initAmbientCanvas();
    initCountdown();
    initGalleryLightbox();
    initRSVP();
    initMusicController();
    initNavigation();
    initScrollReveal();
    initSingleLineNameFitter();
  });

})();
