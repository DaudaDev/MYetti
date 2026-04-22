# MYetti Site Upgrade Plan

Goal: lift the site from generic template feel to a professional charity presence. Four work streams: **theme-link cleanup**, **imagery upgrade**, **content/polish**, **new testimonials page**.

---

## 1. Remove Theme / Template Links (ship first, low risk)

Residual Mediplus template markup leaks vendor branding and external links. Strip everywhere.

### Targets

**Footer copyright link** — replace with MYET copyright.
- `contact.html:361`
- `index-archive.html:1007`
- `404.html:263`
- `portfolio-details.html:303`
- `blog-single.html:515`

Current:
```html
<p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</a> </p>
```
Replace with:
```html
<p>© 2026 Masih Youth Education Trust. All rights reserved.</p>
```

**"Pro Version Available on Themeforest" CTA block** — delete entirely.
- `contact.html:67–76`
- `index-archive.html:67–76`
- `404.html:67–76`
- `portfolio-details.html:67–76`
- `blog-single.html:67–76`

**Third-party tracking CDN** — replace with local file or bump to HTTPS.
- `http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js` → self-host under `js/` or use `https://`.

**Infogram embed branding** at `who-we-are.html:163` — decide whether org chart stays hosted on Infogram (external link) or switch to the local `img/organisationchart.png` already in repo.

### Check also
- `<meta name="keywords">`, `<meta name="description">` empty across every page. Populate.
- `<title>` tags: some say "Who we are.", "MYetti", inconsistent. Standardise `MYET – <Page>`.

---

## 2. Imagery Upgrade

Current template stock photos do not represent the Masihiyawa community, northern Nigeria context, or the charity's actual work.

### Hero slider (`index.html:120,140,159`)
- `img/slider.jpg`, `slider2.jpg`, `slider3.jpg` → replace with photos of:
  - real beneficiaries at graduation / study (with consent)
  - community scenes from Kebbi / Sokoto / Zamfara
  - mentorship sessions, scholarship handover events
- Dimensions: 1920×900 px, optimised (< 300 KB each), WebP with JPEG fallback.

### Other template images to replace / retire
- `about-img.jpg`, `mission-img.jpg` — swap to real MYET moments.
- `author1.jpg`…`author3.jpg` — replace with board / trustee headshots (used in testimonials author slots once added).
- `pf1–pf4.jpg`, `blog1–3.jpg` — use real scholarship recipient stories or remove pages if unused.
- `client1–5.png` — replace logos with real partners (churches, ECWA, universities) or drop the section.
- `call-bg.jpg`, `testi-bg.jpg`, `bread-bg.jpg`, `fun-bg.jpg` — move to muted community-context photos.

### New images to source / create
- Board / trustees group photo for Who We Are.
- Beneficiary portraits (with signed consent) for testimonials.
- Event photos (scholarship award, mentorship meetup).
- High-res MYET logo white variant for dark footers.

### Asset hygiene
- Standardise filenames (kebab-case, descriptive): `img/hero-graduation.jpg`, `img/beneficiary-zakariya.jpg`.
- Add `alt` text on every `<img>` (currently `alt="#"` everywhere — bad for accessibility + SEO).

---

## 3. Professional Polish

### Content
- Purge every `Lorem ipsum` (58 occurrences across 11 files). Write real copy per page.
- Rewrite footer "About Us" blurb (currently Lorem ipsum) — tie to MYET mission.
- Fill dead `href="#"` links in footer quick-links; either wire up or remove.
- Social links in footer all `href="#"` — point to real MYET accounts or remove.

### Navigation
- Add **Testimonials** to main nav (dropdown under About Us, or top-level).
- Highlight current page in nav (many pages mark Home active regardless).

### Visual / UX
- Preloader: template branding — keep or retire (adds perceived load time).
- Hero buttons `href="#"` — wire Donate Now → donation page, Our Story → who-we-are.
- Consistent brand colour palette — document hex values in a short style guide.
- Add favicon variants (32×32, apple-touch-icon) — only one 16×16 currently.
- Compress all assets, enable `loading="lazy"` on below-fold images.
- Fix `http://` external script to `https://` (mixed content warning on deploy).

### Accessibility
- Form labels on contact form.
- `alt` text on every image.
- Sufficient colour contrast for copy over background overlays.
- `lang="zxx"` on `<html>` → change to `lang="en"`.

### SEO
- Per-page `<meta name="description">`.
- Open Graph tags for share previews.
- Sitemap + robots.txt.

---

## 4. Testimonials Page (building now)

New file: `testimonials.html`. Content sourced from supporter and beneficiary messages dated Jan 2025. Reworked into polished form while preserving original voice.

- Scaffold: copy `who-we-are.html` shell (same header / footer / scripts).
- Breadcrumb title: **Voices of MYET**.
- Section: grid / carousel of testimonial cards.
- Author lines kept where provided (e.g., Zakariya Barau Sabo); others attributed as "MYET Beneficiary" / "Sponsored Student".
- Add nav link on every page.

---

## Suggested Order of Execution

1. **Testimonials page** (doing now — value-add, no risk).
2. **Theme link purge** (5 files, small diff — fast win).
3. **Alt text + lang attr + meta descriptions** (accessibility / SEO — safe).
4. **Lorem ipsum replacement** (content pass).
5. **Imagery swap** (pending photo assets from team).
6. **Wire footer / social / CTA links**.
7. **Performance pass** (lazy-load, minify, WebP).
