# Roshan & Elvisha — Luxury Wedding Invitation Website

A luxury digital wedding invitation website built with pure **HTML5, Vanilla CSS3, and JavaScript**. 

Designed with a color palette of royal ivory, gold foil gradients, deep crimson/burgundy velvet accents, floating rose petals, and traditional wedding flourishes.

> **Important**: This website is exclusively focused on the **Wedding Ceremony**. It contains **no** RSVP, Haldi, Mehendi, Sangeet, Reception, or Our Story sections.

---

## 📁 Project Structure

```text
wedding-invitation/
├── index.html            # Main HTML with clearly commented editable wedding details block
├── style.css             # Luxury design system, responsive styles & wedding reveal animations
├── script.js             # Live countdown timer, falling petals canvas, sparkle burst & audio controller
├── images/
│   ├── couple.jpg        # Bride & Groom together photo (Roshan & Elvisha)
│   ├── couple-full.jpg   # High-resolution standing photo
│   ├── wedding-card.jpg  # The official printed wedding invitation card photograph
│   ├── bride.jpg         # Bride portrait (Elvisha)
│   └── groom.jpg         # Groom portrait (Roshan)
├── audio/
│   └── wedding-music.mp3 # Romantic wedding melody
└── README.md             # Documentation & Vercel deployment guide
```

---

## ✨ Features

* **Bride & Groom Together Picture**:
  * Features the couple together in a single royal gold filigree arch frame.
  * Tagged with *"✦ Happily Ever After ✦"* and *"Two Souls, One Bond • Forever Together"*.
  * No awkward split photos — showcases their genuine warmth and joy together.

* **Bride & Groom Together Picture**:
  * Features the couple together in a single royal gold filigree arch frame.
  * Tagged with *"✦ Happily Ever After ✦"* and *"Two Souls, One Bond • Forever Together"*.
  * No awkward split photos — showcases their genuine warmth and joy together.

* **3D Royal Gatefold Keepsake Box Opening Experience**:
  * The wedding invitation card is exclusively revealed when clicking **"Open Invitation"** (in the Hero or Save The Date section).
  * No static card photo sitting down on the page.
  * Breathtaking royal opening animation:
    1. **Wax Seal & Ribbon**: Golden wax seal (`R & E • 11.01`) splits open with an explosion of radiant golden sparkles and light particles.
    2. **3D Royal Gates**: Left and right French velvet doors embossed with gold foil mandalas swing open outward in 3D perspective (`rotateY(-118deg)` and `rotateY(118deg)`).
    3. **Card Elevation**: The official printed wedding invitation card smoothly elevates forward from the silk lining (`translateZ(40px)`).
    4. **Foil Shimmer Sweep**: A diagonal beam of prismatic gold light washes across the invitation card.
    5. **Action Controls**: "Zoom Fullscreen" for high-resolution inspection, and "Replay Opening" to watch the magical animation again.

* **Save The Date & Live Countdown Timer**:
  * Real-time Days, Hours, Minutes, and Seconds countdown to **11 January 2027, 11:00 AM**.
  * Dedicated "Open Wedding Invitation" action button.
  * Shows *"Today is our Wedding Day! ❤️"* when the wedding date arrives.

* **Venue & Google Maps**:
  * Grand palace illustration crest.
  * Clearly marked **"View Location"** button linking directly to Google Maps in a new tab.
  * Embedded Google Maps orientation preview.

* **Romantic Message & Closing**:
  * *"Two hearts, one beautiful journey. Your presence and blessings will make our special day even more meaningful."*
  * Final celebratory closing with floral flourishes.

* **Floating Music Player**:
  * `♫ Music` button (plays `audio/wedding-music.mp3`).
  * Conforms to modern browser policies: **No autoplay**.
  * Equalizer wave animation when playing.
  * Built-in Web Audio API romantic melody synthesizer fallback for offline local file viewing.

* **Atmospheric Visuals**:
  * Falling crimson velvet and golden petals canvas animation.
  * 100% mobile-first responsive design with hamburger menu and zero horizontal overflow.

---

## ✏️ How to Edit Wedding Details

All customizable settings are placed in one prominent block at the very top of `index.html`:

```html
<!-- ================================================================ -->
<!-- ===== EDIT WEDDING DETAILS HERE ================================ -->
<!-- ================================================================ -->
<!-- 1. GROOM NAME:     Roshan Lobo                                   -->
<!-- 2. BRIDE NAME:     Elvisha Dsouza                                -->
<!-- 3. WEDDING DATE:   Monday, 11 January 2027                       -->
<!-- 4. WEDDING TIME:   11:00 AM onwards                              -->
<!-- 5. COUNTDOWN ISO:  2027-01-11T11:00:00 (used for live timer)     -->
<!-- 6. VENUE NAME:     The Grand Palace                              -->
<!-- 7. VENUE ADDRESS:  Mangalore, Karnataka, India                   -->
<!-- 8. GOOGLE MAPS:    https://maps.google.com/?q=...                -->
<!-- 9. COUPLE PHOTO:   images/couple.jpg                             -->
<!-- 10. INVITATION PIC:images/wedding-card.jpg                       -->
<!-- 11. MUSIC FILE:    audio/wedding-music.mp3                       -->
<!-- ================================================================ -->
```

---

## ⚡ Vercel-Ready Deployment

This project requires zero build commands or framework adapters.

### Deploy via GitHub
1. Push this folder to a GitHub repository.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." -> "Project"**.
3. Import your repository.
4. Leave **Framework Preset** as **Other** (Vercel automatically detects static HTML/CSS/JS).
5. Click **Deploy**. Your website is immediately live worldwide with a free HTTPS URL!

---

## 📄 License
Created with love for Roshan & Elvisha's Wedding Ceremony.
