# PartyPixel.ro — Next.js + Payload CMS Project

## Quick Start

```bash
cd partypixel.ro/partypixel-next
npm install
npm run dev     # starts on http://localhost:3002
```

- **Frontend**: http://localhost:3002
- **Admin Panel**: http://localhost:3002/admin
- First visit to /admin will prompt to create an admin user

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **CMS**: Payload CMS 3.x (embedded in Next.js)
- **Database**: SQLite (file:./database.db)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Playfair Display (headings) + Poppins (body)

## Project Structure

```
partypixel-next/
├── public/
│   └── media/           # Images, videos, logos
│       ├── brand/       # PartyPixel logo
│       ├── services/    # Service photos
│       ├── events/      # Event photos
│       ├── logos/        # Partner logos
│       ├── fundaluri/   # Backdrop images
│       ├── edited/      # Edited marketing images
│       └── videos/      # Video files
├── src/
│   ├── app/
│   │   ├── (frontend)/  # Public website routes
│   │   │   ├── layout.tsx
│   │   │   ├── globals.css
│   │   │   ├── page.tsx (homepage)
│   │   │   ├── cabina-foto-bucuresti/
│   │   │   ├── cabina-foto-nunta-photobooth-bucuresti/
│   │   │   ├── cabina-foto-botez-photobooth-bucuresti/
│   │   │   ├── cabina-foto-majorat/
│   │   │   ├── cabina-foto-ai-bucuresti/
│   │   │   ├── video-booth-selfie-360-bucuresti/
│   │   │   ├── oglinda-magica-bucuresti/
│   │   │   ├── fum-greu-gheata-carbonica/
│   │   │   ├── artificii-spark-nunta-bucuresti/
│   │   │   ├── baloane-cu-fum-bucuresti/
│   │   │   ├── guest-book-foto/
│   │   │   ├── photobooth-petreceri-corporate/
│   │   │   ├── preturi-inchiriere-cabina-foto/
│   │   │   ├── contact-cabina-fotografica-booth/
│   │   │   ├── template-cabine-foto-bucuresti/
│   │   │   └── galerie-cabine-fotografice/
│   │   ├── (payload)/   # Payload CMS admin
│   │   │   ├── layout.tsx
│   │   │   ├── admin/
│   │   │   └── api/
│   │   └── layout.tsx   # Root layout
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingCTA.tsx          # WhatsApp button bottom-right, page-aware messages
│   │   ├── InlineMiniForm.tsx       # Reusable lead form (4-field + compact phone-only)
│   │   ├── ui/
│   │   │   └── Icon.tsx             # ~25 SVG line icons replacing all emoji
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Homepage hero with floating testimonial + mini form
│   │   │   ├── LogoMarquee.tsx
│   │   │   ├── ServicesSection.tsx   # 2 hero cards + 4 compact cards
│   │   │   ├── VideoShowcaseSection.tsx  # Video autoplay + bullets
│   │   │   ├── EventsSection.tsx    # Bento grid (1 large + 3 small)
│   │   │   ├── SocialProofSection.tsx   # Google Reviews + 3 testimonials
│   │   │   ├── IncludedSection.tsx  # SVG icons, Info Card style
│   │   │   └── InlineLeadSection.tsx    # Split CTA with inline form
│   │   └── ServicePageLayouts/
│   │       ├── ShowcaseLayout.tsx    # For: cabina-foto, AI, 360, oglinda
│   │       ├── AtmosphereLayout.tsx  # For: fum greu, artificii, baloane
│   │       └── EventFocusLayout.tsx  # For: nuntă, botez, majorat, corporate
│   ├── collections/     # Payload CMS collections
│   │   ├── Users.ts
│   │   ├── Pages.ts
│   │   ├── Services.ts
│   │   ├── Media.ts
│   │   ├── Testimonials.ts
│   │   ├── FAQs.ts
│   │   ├── Pricing.ts
│   │   ├── ContactSubmissions.ts
│   │   └── Partners.ts
│   ├── globals/         # Payload CMS globals
│   │   ├── SiteSettings.ts
│   │   └── Navigation.ts
│   └── payload.config.ts
├── .env
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## URL Mapping (WordPress → Next.js)

| WordPress URL | Next.js Route | Page |
|---|---|---|
| `/cabina-foto-bucuresti/` | `/cabina-foto-bucuresti` | Servicii Cabina Foto |
| `/cabina-foto-nunta-photobooth-bucuresti/` | `/cabina-foto-nunta-photobooth-bucuresti` | Nunta |
| `/cabina-foto-botez-photobooth-bucuresti/` | `/cabina-foto-botez-photobooth-bucuresti` | Botez |
| `/cabina-foto-majorat/` | `/cabina-foto-majorat` | Majorat |
| `/cabina-foto-ai-bucuresti/` | `/cabina-foto-ai-bucuresti` | AI Photo Booth |
| `/video-booth-selfie-360-bucuresti/` | `/video-booth-selfie-360-bucuresti` | Selfie 360 |
| `/oglinda-magica-bucuresti/` | `/oglinda-magica-bucuresti` | Oglinda Magica |
| `/fum-greu-gheata-carbonica/` | `/fum-greu-gheata-carbonica` | Fum Greu |
| `/artificii-spark-nunta-bucuresti/` | `/artificii-spark-nunta-bucuresti` | Artificii Spark |
| `/baloane-cu-fum-bucuresti/` | `/baloane-cu-fum-bucuresti` | Baloane cu Fum |
| `/guest-book-foto/` | `/guest-book-foto` | Guest Book |
| `/photobooth-petreceri-corporate/` | `/photobooth-petreceri-corporate` | Corporate |
| `/preturi-inchiriere-cabina-foto/` | `/preturi-inchiriere-cabina-foto` | Preturi |
| `/contact-cabina-fotografica-booth/` | `/contact-cabina-fotografica-booth` | Contact |
| `/template-cabine-foto-bucuresti/` | `/template-cabine-foto-bucuresti` | Template-uri |
| `/galerie-cabine-fotografice/` | `/galerie-cabine-fotografice` | Galerie |

## Design System

### Brand Colors
- **Magenta**: `#FF3D9A` (primary accent, CTAs)
- **Teal**: `#1DE8DC` (secondary accent, badges)
- **Gold**: `#F5C842` (tertiary, buttons)
- **Heading**: `#0F172A` (dark blue-black)
- **Body**: `#475569` (slate gray)
- **Background**: `#FAFBFF` (off-white)
- **Dark**: `#0A0F1E` (footer, dark sections)

### Typography
- **Headings**: Playfair Display (serif, display)
- **Body**: Poppins (sans-serif)
- Heading tracking: -0.03em
- Body line-height: 1.7

### CSS Utilities
- `.btn-gold` — Gold gradient button with hover lift
- `.btn-magenta` — Magenta gradient button
- `.card-hover` — Card with hover float effect
- `.glass` / `.glass-scrolled` — Frosted glass header
- `.text-gradient-magenta` — Magenta to Teal gradient text
- `.text-gradient-gold` — Gold to Magenta gradient text
- `.img-reveal` — Image zoom on hover
- `.grain` — SVG noise texture overlay

## CMS Admin Panel

### Collections
- **Users** — Admin authentication
- **Pages** — Generic content pages
- **Services** — Photo booth services (features, gallery, SEO)
- **Media** — Images and videos with categories
- **Testimonials** — Client reviews
- **FAQs** — Frequently asked questions per page
- **Pricing** — Package pricing with included items
- **Contact Submissions** — Lead capture with status pipeline (Nou → Contactat → Oferta trimisa → Confirmat → Finalizat)
- **Partners** — Client logo marquee

### Globals
- **Site Settings** — Contact info, social media, hero content, stats, SEO defaults
- **Navigation** — Main menu with submenu items and badges

## Contact Form

- POST `/api/contact` with JSON body: `{ name, phone, email?, eventDate?, eventType?, guestCount?, message? }`
- Saves to Payload CMS `contact-submissions` collection
- Visible in admin panel under "Leads"
- Email notification: Configure SMTP in `.env`

## Key Features

- **SEO Preserved** — All WordPress URLs maintained for Google ranking
- **Admin Panel** — Full CMS at /admin to edit all content
- **Responsive** — Mobile-first design with Tailwind
- **Performance** — Static pages, optimized images with Next.js Image
- **Lead Capture** — Contact form saves to CMS with status tracking
- **WhatsApp Integration** — Direct WhatsApp links throughout

## Environment Variables

```env
DATABASE_URI=file:./database.db          # SQLite database path
PAYLOAD_SECRET=your-secret-key           # Payload CMS secret (change in prod!)
NEXT_PUBLIC_SITE_URL=http://localhost:3002 # Site URL
SMTP_HOST=smtp.gmail.com                 # Email SMTP host
SMTP_PORT=587                            # Email SMTP port
SMTP_USER=                               # Email username
SMTP_PASS=                               # Email password
CONTACT_EMAIL=contact@partypixel.ro      # Contact notification email
```

## Next Steps / TODO

### Polish (Faza 4 — în curs)
- [ ] Polish prețuri page (remove blobs, add InlineMiniForm)
- [ ] Polish contact page (SVG icons, verify form works)
- [ ] Polish galerie + template pages
- [ ] Add ScrollReveal animations
- [ ] Footer CTA button
- [ ] Final audit (emoji rămase, shadows inconsistente)

### SEO & Production
- [ ] Connect CMS data to frontend pages (currently using static content)
- [ ] Configure SMTP for contact form email notifications
- [ ] Add structured data (JSON-LD) for LocalBusiness schema
- [ ] Add sitemap.xml generation
- [ ] Add robots.txt
- [ ] Add blog section
- [ ] Deploy to production (Vercel or VPS)

### Completed (2026-03-30)
- [x] Premium redesign — homepage + all 12 service pages
- [x] 3 layout templates (Showcase, Atmosphere, EventFocus)
- [x] SVG Icon system (25+ icons replacing all emoji)
- [x] InlineMiniForm on every page (conversion)
- [x] WhatsApp floating button with page-aware messages
- [x] Real images on all pages (no more placeholders)
- [x] Port changed from 3001 → 3002 (3001 free for WordPress)
