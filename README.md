# RytekPC Static Website Rebuild

Modern multi-page static site for RytekPC, built with semantic HTML, modern CSS, and lightweight JavaScript.

## Folder Structure

- `index.html` – Home page
- `services.html` – Detailed services page
- `about.html` – Founder profile page
- `contact.html` – Contact page with frontend form
- `assets/css/styles.css` – Shared styles, responsive layout, motion preferences, theme support
- `assets/js/main.js` – Theme toggle, mobile nav, reveal-on-scroll, dynamic year
- `assets/images/` – Placeholder headshot, favicon, OG preview image
- `robots.txt` – Search crawler policy
- `sitemap.xml` – XML sitemap

## Deploy (Static Hosting)

You can deploy this project to any static host:
- GitHub Pages
- Netlify
- Vercel static hosting
- Cloudflare Pages
- Traditional cPanel hosting

### Basic deployment steps
1. Upload all files/folders preserving structure.
2. Ensure `index.html` is in the web root.
3. Set your domain DNS to the host.
4. Replace `https://rytekpc.com` URLs in metadata with your production URL if needed.

## Run Locally

No build step is required. Open `index.html` directly in a browser.

For best local behavior with all assets:
- Use a simple static server (optional), e.g. `python3 -m http.server`.

## Content Editing Guide

### Update contact info
- Email/phone text appears in:
  - `contact.html`
  - `index.html` (form/CTA context)
  - `index.html` LocalBusiness JSON-LD block
- Update those locations together to keep metadata and visible content in sync.

### Update services
- Home summary cards: `index.html`
- Full service details: `services.html`
- To add a new service:
  1. Add a new `<article class="card">...</article>` to `services.html`
  2. Optionally add a summary card to `index.html`
  3. Add a matching option in the `contact.html` service dropdown

### Update founder profile
- Edit the leadership bio sections and professional details in `about.html`.
- Replace `assets/images/founder-headshot-placeholder.svg` with a real headshot (same filename or update image path).

## SEO Notes

- Per-page title and description tags are included.
- OpenGraph tags are included.
- `robots.txt` and `sitemap.xml` are included.
- LocalBusiness structured data is included on the home page.

## Analytics Placeholder

To add analytics later, include your vendor script before the closing `</head>` or `</body>` tag on each page (or refactor to shared includes via your deployment tool).
