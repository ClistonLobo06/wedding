/**
 * Wedding Invitation of Roshan Glatvin Lobo & Elvisha Dsouza
 * ChungDoi Signature Minimalist Dark Red Theme Interaction Engine
 * Features: Ed Sheeran - Perfect, Fullscreen Lightbox, 3D Coverflow, Live Countdown, Interactive Envelope
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Audio Background Player with Equalizer Animation (Ed Sheeran - Perfect)
  // =========================================================================
  const bgMusic = document.getElementById('bgMusic');
  const floatingMusicBtn = document.getElementById('floatingMusicBtn');
  let isPlaying = false;

  function playMusic() {
    if (!bgMusic) return;
    bgMusic.play().then(() => {
      isPlaying = true;
      if (floatingMusicBtn) floatingMusicBtn.classList.add('playing');
    }).catch(() => {
      // Browser autoplay policy might require user gesture
      isPlaying = false;
      if (floatingMusicBtn) floatingMusicBtn.classList.remove('playing');
    });
  }

  function pauseMusic() {
    if (!bgMusic) return;
    bgMusic.pause();
    isPlaying = false;
    if (floatingMusicBtn) floatingMusicBtn.classList.remove('playing');
  }

  function toggleMusic() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  if (floatingMusicBtn) {
    floatingMusicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMusic();
    });
  }

  // Attempt audio start on first global interaction
  const enableAudioOnGesture = () => {
    if (!isPlaying && bgMusic && bgMusic.paused) {
      playMusic();
    }
    window.removeEventListener('click', enableAudioOnGesture);
    window.removeEventListener('touchstart', enableAudioOnGesture);
  };
  window.addEventListener('click', enableAudioOnGesture, { once: true });
  window.addEventListener('touchstart', enableAudioOnGesture, { once: true });

  // =========================================================================
  // 0. Fullscreen Entrance Gate Screen Interaction ("Open" to Enter Website)
  // =========================================================================
  const entranceGateScreen = document.getElementById('entranceGateScreen');
  const openInvitationGateBtn = document.getElementById('openInvitationGateBtn');
  const entranceSealBtn = document.getElementById('entranceSealBtn');

  function dismissEntranceGate() {
    if (entranceGateScreen && !entranceGateScreen.classList.contains('dismissed')) {
      entranceGateScreen.classList.add('dismissed');
      document.body.classList.remove('entrance-locked');
      
      // Start background music (Ed Sheeran - Perfect) immediately on explicit user action
      playMusic();
      
      setTimeout(() => {
        entranceGateScreen.style.display = 'none';
      }, 850);
    }
  }

  if (openInvitationGateBtn) {
    openInvitationGateBtn.addEventListener('click', dismissEntranceGate);
  }
  if (entranceSealBtn) {
    entranceSealBtn.addEventListener('click', dismissEntranceGate);
    entranceSealBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dismissEntranceGate();
      }
    });
  }

  // =========================================================================
  // 2. Landing Envelope Interaction (Wax Seal & Polaroid)
  // =========================================================================
  const waxSealBtn = document.getElementById('waxSealBtn');
  const polaroidCard = document.getElementById('polaroidCard');
  const namesHeader = document.getElementById('namesHeader');

  function openEnvelope() {
    if (polaroidCard) {
      polaroidCard.classList.add('opened');
    }
    // Start music if not started
    if (!isPlaying) {
      playMusic();
    }
    // Smooth scroll down to main content after a slight delay for animation
    setTimeout(() => {
      if (namesHeader) {
        namesHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 600);
  }

  if (waxSealBtn) {
    waxSealBtn.addEventListener('click', openEnvelope);
  }
  if (polaroidCard) {
    polaroidCard.addEventListener('click', openEnvelope);
  }

  // =========================================================================
  // 3. Official Invitation Card Lightbox Zoom
  // =========================================================================
  const officialCardTrigger = document.getElementById('officialCardTrigger');
  const cardLightbox = document.getElementById('cardLightbox');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const closeLightboxBackdrop = document.getElementById('closeLightboxBackdrop');

  function openLightbox() {
    if (cardLightbox) {
      cardLightbox.classList.add('open');
      cardLightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (cardLightbox) {
      cardLightbox.classList.remove('open');
      cardLightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (officialCardTrigger) officialCardTrigger.addEventListener('click', openLightbox);
  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (closeLightboxBackdrop) closeLightboxBackdrop.addEventListener('click', closeLightbox);

  // =========================================================================
  // 4. Live Countdown Timer (Exact ChungDoi Format)
  // =========================================================================
  const liveCountdownText = document.getElementById('liveCountdownText');
  // Target: Monday, January 11, 2027 at 19:00:00 (7:00 PM IST)
  const targetDate = new Date('2027-01-11T19:00:00+05:30').getTime();

  function updateCountdown() {
    if (!liveCountdownText) return;

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      liveCountdownText.textContent = "Today is the Celebration Day!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exact ChungDoi format: "100 days 6 hours 22 min 29 sec"
    liveCountdownText.textContent = `${days} days ${hours} hours ${minutes} min ${seconds} sec`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // =========================================================================
  // 5. Photo Gallery 3D Coverflow Carousel (6 photos including uploaded ones)
  // =========================================================================
  const cards = document.querySelectorAll('.carousel-card');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.getElementById('galleryPrevBtn');
  const nextBtn = document.getElementById('galleryNextBtn');
  const carouselViewport = document.querySelector('.carousel-viewport');

  let currentIndex = 0;
  const totalCards = cards.length;

  function updateGalleryClasses() {
    cards.forEach((card, i) => {
      card.className = 'carousel-card';
      const offset = (i - currentIndex + totalCards) % totalCards;

      if (offset === 0) {
        card.classList.add('active');
      } else if (offset === 1) {
        card.classList.add('next');
      } else if (offset === totalCards - 1) {
        card.classList.add('prev');
      } else if (offset < totalCards / 2) {
        card.classList.add('hidden-right');
      } else {
        card.classList.add('hidden-left');
      }
    });

    // Update dots
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function goToSlide(idx) {
    currentIndex = (idx + totalCards) % totalCards;
    updateGalleryClasses();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Allow clicking on side card to navigate to it
  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      if (card.classList.contains('next')) {
        nextSlide();
      } else if (card.classList.contains('prev')) {
        prevSlide();
      }
    });
  });

  // Dot click
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIdx = parseInt(e.target.dataset.dot, 10);
      goToSlide(targetIdx);
    });
  });

  // Touch Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  if (carouselViewport) {
    carouselViewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselViewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > 40) {
      if (swipeDistance < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  // Initial layout
  updateGalleryClasses();

  // =========================================================================
  // 6. Add to Calendar (iCalendar .ics Download & Google Calendar Link)
  // =========================================================================
  const addToCalendarLink = document.getElementById('addToCalendarLink');

  if (addToCalendarLink) {
    addToCalendarLink.addEventListener('click', (e) => {
      e.preventDefault();

      const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Roshan and Elvisha//Wedding Invitation//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        'UID:roshan-elvisha-wedding-20270111@wedding',
        'DTSTAMP:20261003T120000Z',
        'DTSTART:20270111T113000Z', // 5:00 PM IST (UTC + 5:30)
        'DTEND:20270111T173000Z',   // 11:00 PM IST
        'SUMMARY:Wedding of Roshan Glatvin Lobo & Elvisha Dsouza',
        'DESCRIPTION:Wedding Nuptials at 5:00 PM followed by Reception at 7:00 PM at Mother of God Church, Mogarnad.',
        'LOCATION:Mother of God Church, Mogarnad, Karnataka, India',
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.setAttribute('download', 'Roshan-Elvisha-Wedding.ics');
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  // =========================================================================
  // 7. RSVP Modal Dialog
  // =========================================================================
  const openRsvpBtn = document.getElementById('openRsvpBtn');
  const closeRsvpBtn = document.getElementById('closeRsvpBtn');
  const rsvpModal = document.getElementById('rsvpModal');
  const rsvpForm = document.getElementById('rsvpForm');
  const rsvpSuccess = document.getElementById('rsvpSuccess');
  const guestCountGroup = document.getElementById('guestCountGroup');

  function openModal() {
    if (rsvpModal) {
      rsvpModal.classList.add('open');
      rsvpModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (rsvpModal) {
      rsvpModal.classList.remove('open');
      rsvpModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openRsvpBtn) openRsvpBtn.addEventListener('click', openModal);
  if (closeRsvpBtn) closeRsvpBtn.addEventListener('click', closeModal);

  if (rsvpModal) {
    rsvpModal.addEventListener('click', (e) => {
      if (e.target === rsvpModal) {
        closeModal();
      }
    });
  }

  // Toggle guest count dropdown based on attendance selection
  const attendingRadios = document.querySelectorAll('input[name="attending"]');
  attendingRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (guestCountGroup) {
        if (e.target.value === 'no') {
          guestCountGroup.style.display = 'none';
        } else {
          guestCountGroup.style.display = 'flex';
        }
      }
    });
  });

  // Handle Form Submission
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = {
        name: document.getElementById('guestName')?.value || '',
        phone: document.getElementById('guestPhone')?.value || '',
        attending: document.querySelector('input[name="attending"]:checked')?.value || 'yes',
        guests: document.getElementById('guestCount')?.value || '1',
        message: document.getElementById('guestMessage')?.value || '',
        submittedAt: new Date().toISOString()
      };

      try {
        localStorage.setItem('roshan_elvisha_rsvp', JSON.stringify(formData));
      } catch (err) {
        console.warn('LocalStorage save error:', err);
      }

      // Show success screen
      rsvpForm.style.display = 'none';
      if (rsvpSuccess) {
        rsvpSuccess.style.display = 'block';
      }

      // Auto close after 3 seconds
      setTimeout(() => {
        closeModal();
        setTimeout(() => {
          rsvpForm.reset();
          rsvpForm.style.display = 'flex';
          if (rsvpSuccess) rsvpSuccess.style.display = 'none';
        }, 500);
      }, 2800);
    });
  }

});
