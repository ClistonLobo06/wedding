# 💍 Roshan & Elvisha — Digital Wedding Invitation Website

A luxury digital wedding invitation website built with pure **HTML5, Vanilla CSS3, and JavaScript**. 

Designed in the signature ChungDoi minimalist deep burgundy / dark red palette, featuring interactive envelope animations, ambient romantic background music, an official card lightbox, 3D photo gallery, live countdown, and direct WhatsApp attendance confirmation.

---

## 📅 Wedding Details

* **Groom:** Roshan Glatvin Lobo
* **Bride:** Elvisha Dsouza
* **Date:** Monday, January 11, 2027
* **Wedding Nuptial Ceremony:** 5:00 PM
* **Reception:** 7:00 PM
* **Venue:** Mother of God Church, Mogarnad, Karnataka, India
* **RSVP Phone (WhatsApp):** +91 9008705055

---

## ✨ Features

* **🚪 Fullscreen Entrance Gate Screen**:
  * Atmospheric keepsake greeting card with animated ambient floating hearts.
  * Burgundy wax seal and illuminated "Open" button to enter the invitation and start romantic music.

* **💌 Interactive Velvet Envelope**:
  * Realistic deep-burgundy fold flaps and an embossed golden wax seal (`Click to Open`).
  * Smooth pull-out polaroid portrait animation.

* **🎵 Background Music Player**:
  * Plays romantic background music (*Ed Sheeran - Perfect*).
  * Floating music toggle button with animated sound equalizer bars.

* **⛪ Ceremony & Reception Details**:
  * Side-by-side family and parents' blessing blocks.
  * Clearly highlighted ceremony time (5:00 PM) and reception time (7:00 PM).

* **📜 Official Printed Invitation Card with Lightbox**:
  * Dedicated preview frame of the printed invitation card.
  * Tap or click to zoom into an interactive high-resolution fullscreen lightbox.

* **🖼️ 3D Perspective Photo Gallery**:
  * Smooth 3D coverflow carousel cycling through curated couple photographs.
  * Supports arrow navigation, touch swipe for mobile phones, and pagination dot indicators.

* **⏳ Live Countdown Timer & January 2027 Calendar**:
  * Real-time Days, Hours, Minutes, and Seconds countdown to January 11, 2027.
  * Custom mini-calendar widget highlighting the wedding date (Jan 11) with a burgundy heart badge.
  * "Add to Calendar" button (downloads `.ics` iCalendar event compatible with Apple, Google, and Outlook).

* **💬 Instant WhatsApp Attendance Confirmation (RSVP)**:
  * Interactive modal dialog to collect guest name, phone number, attendance status (*Joyfully Accept ♡* / *Regretfully Decline*), guest headcount, and heartfelt wishes.
  * Automatically formats and sends the response directly via WhatsApp to **+91 9008705055**.
  * Saves an offline backup in browser `localStorage`.

* **🗺️ Interactive Venue Location**:
  * Google Maps embedded navigation preview for Mother of God Church, Mogarnad.
  * One-tap "Get Directions" link opening the location in Google Maps.

* **👔 Dress Code Section**:
  * Party attire guidance featuring elegant swatches in Burgundy, Champagne, and White.

---

## 📁 Project Structure

```text
wedding/
├── audio/
│   └── wedding-music.mp3       # Ed Sheeran - Perfect background track
├── images/
│   ├── chungdoi_2.jpg          # Couple portrait (envelope polaroid & gallery)
│   ├── chungdoi_3.jpg          # Couple in red attire (gallery)
│   ├── chungdoi_4.jpg          # Outdoor couple portrait (gallery)
│   ├── church-bg.jpg           # Architectural watermark backdrop
│   ├── couple.jpg              # Couple cover photo (gallery slide 0)
│   ├── flower-decoration.webp  # Floral corner embellishments
│   ├── gold-wax-seal.png       # Golden wax seal badge
│   └── wedding-card.jpg        # Official printed invitation card
├── .gitignore                  # Git ignore rules
├── index.html                  # Main semantic HTML structure
├── README.md                   # Project documentation
├── script.js                   # Interactive logic, 3D gallery, countdown & WhatsApp RSVP
└── style.css                   # Custom luxury design system & responsive styling
```

---

## 🚀 Deployment & Local Preview

### Running Locally
Simply open `index.html` in any web browser, or use a local static server:
```bash
# Using VS Code Live Server extension or Python:
python -m http.server 8000
```

### Deploying to Cloudflare Pages
1. Push all files to your GitHub repository:
   ```bash
   git add -A
   git commit -m "feat: complete wedding invitation website"
   git push origin main
   ```
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/):
   - Go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
   - Select your repository (`wedding`).
   - Set **Framework preset** to **None**.
   - Leave **Build command** empty.
   - Set **Build output directory** to `/` (or leave blank).
   - Click **Save and Deploy**.
3. Your wedding website is live globally on Cloudflare's edge network with free HTTPS, lightning-fast CDN caching, and custom domain support!

---

## 📄 License
Created with love for Roshan & Elvisha's Wedding Ceremony.
