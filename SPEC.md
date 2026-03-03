# Wisetech Electroservices Ltd - Landing Page Specification

## 1. Project Overview

**Project Name:** Wisetech Electroservices Ltd Website  
**Type:** Single-page landing website (Next.js 15 App Router)  
**Core Functionality:** Corporate landing page for a Kenyan electrical & mechanical engineering company showcasing services, portfolio, testimonials, and contact information  
**Target Users:** Potential clients in Kenya seeking electrical/mechanical engineering services

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections (in order):**
1. Navbar (sticky, glassmorphism)
2. Hero Section (full viewport height)
3. About Us
4. Services (6 cards grid)
5. Portfolio (project showcase with modals)
6. Clients & Testimonials
7. Contact Section
8. Footer
9. Floating WhatsApp Button

**Responsive Breakpoints:**
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (full layout)

### Visual Design

**Color Palette:**
- Primary Background: #0A1428 (deep navy)
- Secondary Background: #0f172a (slate-900)
- Accent Primary: #00f0ff (electric cyan)
- Accent Secondary: #00bfff (deep sky blue)
- Text Primary: #ffffff
- Text Secondary: #94a3b8 (slate-400)
- Border/Divider: #1e293b (slate-800)
- Card Background: rgba(15, 23, 42, 0.8)

**Typography:**
- Font Family: Inter (next/font/google)
- Hero Title: 4rem (64px) / md: 5rem / lg: 6rem, font-bold, tracking-tight
- Section Titles: 2.5rem (40px), font-bold
- Subheadings: 1.25rem (20px), font-semibold
- Body: 1rem (16px), font-normal
- Small: 0.875rem (14px)

**Spacing System:**
- Section padding: 5rem (80px) vertical
- Container max-width: 1280px
- Card padding: 1.5rem (24px)
- Element gaps: 1rem - 2rem

**Visual Effects:**
- Glassmorphism: backdrop-blur-lg + bg-opacity-80
- Glow effects: box-shadow with cyan (#00f0ff)
- Gradient overlays: linear-gradient with transparency
- Circuit-inspired decorative lines

### Components

**Navbar:**
- Fixed position, height: 4rem (64px)
- Glassmorphism background on scroll
- Logo (WISETECH with cyan accent)
- Menu items: Home, About, Services, Portfolio, Clients, Contact
- Call Now button (cyan background)
- Mobile: hamburger menu with slide-in drawer

**Hero Section:**
- Full viewport height (100vh)
- Background: dark with subtle circuit/grid pattern overlay
- Animated title with stagger effect
- Subtitle with typewriter or fade-in
- Two CTA buttons with glow hover

**Service Cards:**
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Card: dark background, subtle border, hover lift + cyan glow
- Icon: lucide-react, cyan color, pulse on hover

**Portfolio Items:**
- Masonry/grid layout
- Image with overlay on hover
- Click opens modal with full details
- Real project images from Unsplash (electrical/industrial)

**Testimonial Cards:**
- Quote icon, testimonial text, signature
- Client name, company, role
- Fade-in animation

**Contact Form:**
- Fields: Name, Phone, Email, Message
- Formspree integration for submission
- Success/error toast notifications (sonner)
- Direct contact links below form

**Footer:**
- 4-column layout (company info, quick links, services, contact)
- Social media placeholder icons
- Copyright 2026

---

## 3. Functionality Specification

### Core Features

1. **Dark/Light Mode Toggle**
   - Uses next-themes for persistent theme
   - System preference detection
   - localStorage persistence
   - Toggle button in navbar

2. **Smooth Scrolling**
   - Native CSS: scroll-behavior: smooth
   - Anchor links for navigation

3. **Animations (Framer Motion)**
   - Hero: fadeInUp with stagger
   - Sections: viewport fade-up (once)
   - Cards: hover scale + glow
   - Page transitions

4. **Contact Form**
   - Formspree endpoint integration
   - Client-side validation
   - Toast notifications (sonner)

5. **Mobile Menu**
   - Hamburger to X animation
   - Slide-in drawer
   - Close on link click

6. **Portfolio Modal**
   - Lightbox effect
   - Image + project details
   - Close on backdrop click or X

7. **SEO**
   - Dynamic metadata
   - Open Graph tags
   - Semantic HTML

### User Interactions

- Navbar links → smooth scroll to sections
- Call Now → tel: link
- WhatsApp → wa.me link
- Contact form → submit → toast feedback
- Portfolio items → click → modal opens
- Theme toggle → switches dark/light

---

## 4. Acceptance Criteria

1. ✅ Page loads without errors
2. ✅ All sections visible and properly styled
3. ✅ Dark mode works with toggle and persists
4. ✅ Smooth scrolling works on navigation
5. ✅ Animations play on scroll/hover
6. ✅ Mobile menu opens/closes properly
7. ✅ Contact form validates and shows toast
8. ✅ Portfolio modals open/close
9. ✅ All external links work (phone, WhatsApp, email)
10. ✅ Responsive on mobile/tablet/desktop
11. ✅ No console errors
12. ✅ SEO metadata present

---

## 5. File Structure

```
/app
  layout.tsx
  page.tsx
  globals.css
/components
  Navbar.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  Portfolio.tsx
  ClientsTestimonials.tsx
  Contact.tsx
  Footer.tsx
  WhatsAppFloat.tsx
  MobileMenu.tsx
  PortfolioModal.tsx
/lib
  framerVariants.ts
  types.ts
/package.json
/tailwind.config.ts
/next.config.ts
```

---

## 6. Company Information (Exact)

**Name:** Wisetech Electroservices Ltd  
**Tagline:** Specialists in Mechanical and Electrical Engineering Works  
**Location:** P.O. Box 131, 00242 Kitengela | Namanga Road, Nurick House, Kitengela, Kajiado County, Kenya  
**Phone:** +254 723 755 395  
**Email:** wisetechelectroservicesltd2024@gmail.com  
**Registered:** 20 Dec 2023 (PVT-GYU5EBLD), PIN: P052289713G  
**Director:** Jacob Obiero Marambah

**Vision:** To provide adequate & quality services that exceeds the expectations of our esteemed customers.  
**Mission:** Build trust and long-lasting relationships. Provide exceptional electrical-based services with professionalism.  
**Core Values:** Integrity, Customer Focus, Innovativeness, Professionalism & Team Work.

### Services (6):
1. Electrical Installations & Panel Fabrication
2. Electric Motor Rewinding & Repair
3. Power Factor Correction & Control Panels
4. Power House Construction (incl. 1MVA Transformers)
5. Cabling, Termination, Networking & Commissioning
6. After-Sales Services, Project Supervision & Equipment Sourcing

### Portfolio Projects:
1. **Swara Cement Limited** (Athi River) – Nov 2023
   - Main power panel & power factor correction
   - Various control panels
   - Power house with 1MVA transformer
   - Main cabling, motor networking, commissioning
   
2. **Winem Enterprise Ltd** (Kitengela) – Feb 2024
   - Supplied cables, power/control panels
   - 3-phase motor termination
   - Lighting system supply & erection
   - Testing & commissioning

