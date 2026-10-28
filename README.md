# Mind Matters by Anagha Sonde — Premium Life Coaching Website

> **Brand Tagline:** *Love life, Live life*  
> **Founder:** Anagha Sonde (Life Coach & Author)  
> **Initiative:** Mind Matters (Founded 2022)  

A custom, responsive, production-ready website for **Mind Matters by Anagha Sonde**. Built to convey the warmth, wisdom, authenticity, and credibility of an experienced personal life coach and author.

---

## 1. Visual Identity & Design System (Red, Black, and White)

The website features a bold, sophisticated, confident, and modern **Red, Black, and White** color theme complementing Anagha Sonde's official founder portrait.

### Color Palette
- **Primary Red (`#C62828`):** Primary buttons, important highlights, links, and calls to action.
- **Deep Red (`#8E1515`):** Hover states, darker accents, and active focus emphasis.
- **Black (`#111111`):** Headings, dark contrast sections, and sophisticated footer.
- **White (`#FFFFFF`):** Primary light backgrounds, cards, and text on dark sections.
- **Light Grey (`#F5F5F5`):** Alternate section backgrounds, cards, and subtle separators.
- **Dark Grey (`#333333` / `#444444`):** Calm, readable secondary body typography.
- **Border Grey (`#E5E5E5`):** Minimalist dividers and card outlines.

### Typography
- **Headlines:** `Playfair Display` & `Cormorant Garamond` (Editorial serif)
- **Body & Controls:** `Inter` (Clean, highly legible sans-serif)

---

## 2. Pages & Navigation Architecture

| Route | Page | Purpose & Content |
|---|---|---|
| `/` | **Home** | Hero section with updated founder portrait & tagline, What Is Life Coaching, About intro, "Welcome Back to Yourself" author feature, 6 service cards, Coaching Philosophy in Black, 4-step session journey, **Words That Matter (Testimonials)**, Mind Matters themes, 9-item FAQ accordion, and interactive appointment booking. |
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
- **Words That Matter (Testimonials Section):**
  Dedicated section on the homepage highlighting three core coaching themes (*Feeling Heard*, *Clarity and Self-Discovery*, and *Confidence and Moving Forward*), clearly labeled as development placeholders until client-approved reviews are published.
- **Author of "Welcome Back to Yourself" Section:**
  Editorial two-column book presentation with cover graphic, book synopsis, key themes, copy request form, and bridge connecting the memoir to Mind Matters.
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

All business details, fees, session durations, social media handles, and testimonials are centrally managed in a single file:

```
src/config/siteConfig.ts
```

### Updating Testimonials
Open `src/config/siteConfig.ts` under `testimonialsSection.items`:
```typescript
{
  id: "testimonial-1",
  theme: "Feeling Heard",
  quote: "Verified quote from client...",
  attribution: "Ananya S., Bengaluru",
  context: "One-to-One Coaching",
  isPlaceholder: false,
}
```

### Updating Business & Contact Information
```typescript
contact: {
  email: "contact@mindmattersbyanagha.com",
  phone: "+91 ...",
  city: "Bengaluru",
  timezone: "Asia/Kolkata (IST)",
  social: {
    instagram: "https://instagram.com/...",
    linkedin: "https://linkedin.com/in/...",
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

---

## 6. Deployment Instructions

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
4. Preconfigured [`public/_redirects`](file:///d:/Anagha%20Sonde/Website/Website2/Ana-Website-2/public/_redirects) handles client-side routing automatically.

---

## 7. Verification Checklist Before Going Live

- [ ] Confirm the exact session fee (currently set to `₹1,000`, subject to founder verification).
- [ ] Confirm official business email and telephone number.
- [ ] Verify social media profile URLs (LinkedIn, Instagram).
- [ ] Verify client count claim (~150 clients supported) prior to public marketing.
- [ ] Replace placeholder testimonials in `src/config/siteConfig.ts` with approved client reviews.
- [ ] Supply official high-res cover art for *"Welcome Back to Yourself"*.
