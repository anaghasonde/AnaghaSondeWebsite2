# Mind Matters by Anagha Sonde — Premium Life Coaching Website

> **Brand Tagline:** *Love life, Live life*  
> **Founder:** Anagha Sonde (Life Coach & Author)  
> **Initiative:** Mind Matters (Founded 2022)  

A custom, responsive, production-ready website for **Mind Matters by Anagha Sonde**. Built to convey the warmth, wisdom, authenticity, and credibility of an experienced personal life coach and author.

---

## 1. Visual Identity & Design System

The visual design is directly inspired by Anagha Sonde's official portrait — featuring a charcoal black background, champagne/beige attire, intricate black and antique gold embroidery, and natural skin tones.

### Color Palette
- **Warm Ivory (`#F8F5EF`):** Primary light background.
- **Champagne Beige (`#E8D8C6`):** Secondary cards, warm borders, and soft highlights.
- **Charcoal Black (`#171615`):** Headings, dark contrast sections, and sophisticated footer.
- **Antique Gold (`#B49A6A`):** Buttons, decorative lines, badges, and focus accents.
- **Dusty Rose (`#B9797D`):** Restrained accent for notices and touches of warmth.
- **Soft White (`#FFFFFF`):** High-contrast cards and light text on dark backgrounds.
- **Warm Grey (`#706B65`):** Calm, readable secondary body typography.

### Typography
- **Headlines:** `Playfair Display` & `Cormorant Garamond` (Editorial serif)
- **Body & Controls:** `Inter` (Clean, highly legible sans-serif)

---

## 2. Pages & Navigation Architecture

| Route | Page | Purpose & Content |
|---|---|---|
| `/` | **Home** | Hero section with founder portrait & tagline, What Is Life Coaching, About intro, "Welcome Back to Yourself" author feature, 6 service cards, Coaching Philosophy in Charcoal, 4-step session journey, Mind Matters themes, 9-item FAQ accordion, and interactive appointment booking. |
| `/about` | **About Anagha** | Detailed personal story, Achology 2020 certification, founding of Mind Matters in 2022, verification note on ~150 clients, and philosophy of listening before advising. |
| `/life-coaching` | **What is Life Coaching?** | Deep-dive educational guide, the 4 principles (Self-awareness, Clarity, Confidence, Meaningful action), and a transparent coaching vs. therapy comparison. |
| `/services` | **My Services** | All 6 life coaching services detailed with ideal-client scenarios, session length, and pricing breakdown. |
| `/mind-matters` | **Mind Matters** | The personal coaching initiative and 8 core conversation themes for reconnecting with yourself. |
| `/book` | **My Book** | Dedicated feature for the memoir *"Welcome Back to Yourself"*, synopsis, core reflections, edition availability, and connection to coaching. |
| `/book-session` | **Book an Appointment** | 5-step genuine appointment booking system with date picker, Asia/Kolkata time slots, format selection, summary review, and calendar (.ics) download. |
| `/contact` | **Contact** | Welcoming contact enquiry form, verified contact details, timezone, and location. |
| `/privacy` | **Privacy Policy** | Comprehensive data collection policies, storage, deletion rights, confidentiality limits, and non-clinical mental health disclaimer. |

---

## 3. Key Features

- **Genuine 5-Step Appointment Booking System:**
  1. *Choose Service & Format:* Select from 6 coaching focuses or "Not Sure — Help Me Choose", plus Online or In-person (Bengaluru).
  2. *Select Date & Time:* Interactive calendar (Mon–Sat) with 60-minute time slots in `Asia/Kolkata (IST)` timezone.
  3. *Client Details:* Full name, email, optional phone, optional short message, and privacy acknowledgment.
  4. *Review & Summary:* Transparent breakdown before final submission.
  5. *Confirmation & Calendar Invite:* Instant booking reference code (`MM-2026-XXXX`), clear status message, and direct one-click **Add to Calendar (.ics)** download.
- **Author of "Welcome Back to Yourself" Section:**
  Editorial two-column book presentation with cover placeholder/graphic, book synopsis, key themes, copy request form, and bridge connecting the memoir to Mind Matters.
- **Ethical Integrity & Boundary Disclaimers:**
  Clear distinctions throughout emphasizing that life coaching is forward-focused and reflective, and not a substitute for clinical psychotherapy, psychiatric care, or emergency support.
- **Accessible & Responsive:**
  Mobile hamburger drawer, keyboard navigation focus rings, mobile floating booking CTA, and semantic HTML.
- **SEO & Social Sharing:**
  Preconfigured Open Graph tags, Twitter card tags, canonical links, XML sitemap (`/sitemap.xml`), `robots.txt`, and Google-recognized JSON-LD Schema markup for both `ProfessionalService` and `Book`.

---

## 4. Development & Build Commands

This project is built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite 8**.

### Prerequisites
- Node.js `v18+` or `v24+`
- npm `v9+` or `v11+`

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run the development server (with Hot Module Replacement)
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 5. Centralized Configuration Guide

All business details, fees, session durations, social media handles, and service copy are centrally managed in a single file:

```
src/config/siteConfig.ts
```

### Updating Business & Contact Information
Open `src/config/siteConfig.ts`:
```typescript
contact: {
  email: "your-verified-email@mindmattersbyanagha.com",
  phone: "+91 98765 43210",
  city: "Bengaluru",
  timezone: "Asia/Kolkata (IST)",
  social: {
    instagram: "https://instagram.com/your-handle",
    linkedin: "https://linkedin.com/in/your-profile",
  }
}
```

### Updating Pricing & Sessions
```typescript
sessionDetails: {
  durationMinutes: 60,
  durationDisplay: "60 minutes",
  feeDisplay: "₹1,000",
  feeNote: "Session fee subject to confirmation before launch.",
}
```

### Replacing Images
- **Founder Portrait:** Replace `public/assets/anagha-sonde.jpg` with any new high-resolution photo.
- **Book Cover:** Replace `public/assets/book-cover.svg` with `public/assets/book-cover.jpg` once the official retail cover art is finalized, and update `coverImage` in `src/config/siteConfig.ts`.

---

## 6. Connecting External Scheduling (Calendly / Cal.com / Google Calendar)

If you prefer using an external booking service like Calendly or Cal.com:
1. Open `src/config/siteConfig.ts`.
2. Update `integrations`:
   ```typescript
   integrations: {
     isBackendConfigured: true,
     bookingProvider: "cal.com", // or "calendly"
     externalBookingUrl: "https://cal.com/anagha-sonde/60min",
   }
   ```

---

## 7. Deployment Instructions

### Deploy to Vercel
1. Push this repository to GitHub / GitLab.
2. Import the project in Vercel.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.

### Deploy to Netlify
1. Connect your repository to Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add a `_redirects` file in `public/` containing `/* /index.html 200` for client-side routing.

---

## 8. Verification Checklist Before Going Live

- [ ] Confirm the exact session fee (currently set to `₹1,000`, subject to founder verification).
- [ ] Confirm official business email and telephone number.
- [ ] Verify social media profile URLs (LinkedIn, Instagram).
- [ ] Verify client count claim (~150 clients supported) prior to public marketing.
- [ ] Supply official high-res cover art for *"Welcome Back to Yourself"*.
- [ ] Configure live mail server (e.g., SendGrid, Resend, or EmailJS) if automated confirmation emails are desired upon booking.
