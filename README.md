# Message Masters Website

A Vite React website for Message Masters, built strictly following the brand manifesto and design system. The page performs the brand's argument: scale revealing order, purpose before expression, evidence before claims.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

The React app lives in `web/`:

```bash
cd web
npm install
npm run dev
```

The dev server runs at `http://localhost:3000/`.

### Stack

- Vite 7 + React 18
- Plain CSS in `src/styles/index.css` (shared in lockstep with the GoHighLevel file)
- GSAP + ScrollTrigger for scroll choreography
- Lenis for smooth scrolling
- Poppins via Google Fonts (400, 700, 900)

## Project Structure

```
web/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── components/
    │   ├── fx/
    │   │   ├── Starfield.jsx      Canvas starfield, scroll-scrubbed zoom-out
    │   │   ├── Grain.jsx          Film grain overlay
    │   │   ├── HeptagonMark.jsx   Seven-sided brand mark
    │   │   ├── Marquee.jsx        Divider marquees
    │   │   ├── Cursor.jsx         Custom cursor (capable desktops)
    │   │   ├── Magnet.jsx         Magnetic CTA wrapper
    │   │   └── Reveal.jsx         Scroll reveal wrapper
    │   ├── layout/
    │   │   ├── Nav.jsx            Nav with heptagon scroll-progress meter
    │   │   └── Footer.jsx
    │   └── sections/
    │       ├── Preloader.jsx      Self-drawing heptagon
    │       ├── Hero.jsx           Starfield hero, two-beat tagline
    │       ├── Problems.jsx       Ghost-fill problem statements
    │       ├── Verification.jsx   Evidence-before-claim blocks
    │       ├── Order.jsx          Pinned horizontal Purpose > Identity > Strategy > Expression
    │       ├── Services.jsx       Sticky stacked service cards
    │       ├── Differentiators.jsx
    │       ├── Stats.jsx          Animated counters
    │       ├── Testimonials.jsx   Crossfading client quotes
    │       └── Contact.jsx        INSIGHT evaluation CTA
    ├── hooks/
    │   ├── useLenis.js
    │   └── useReducedMotion.js
    ├── lib/
    │   └── heptagon.js            Shared seven-sided geometry
    ├── styles/
    │   └── index.css
    ├── App.jsx
    └── main.jsx
```

## Development

### Start Development Server
```bash
cd web && npm run dev
```

### Build for Production
```bash
cd web && npm run build
```

### Preview Production Build
```bash
cd web && npm run preview
```

## Brand Guidelines

### Colors
- Signal Blue: #2B7CB1 (accent, use sparingly)
- Deep Void: #0B0D10 (backgrounds)
- Graphite: #252729 (secondary dark)
- White: #FFFFFF (content areas)
- Black: #14181C (text)

### Typography
- Font: Poppins (400, 700, 900 weights)
- Headlines: ALL CAPS, tracking -68, leading 0.84
- Body: Sentence case, normal tracking, leading 1.66

### Key Messaging
- Tagline: "Discover your value. Share it with the world."
- Lockup: "Built on Purpose"
- Order: Purpose > Identity > Strategy > Expression

### Forbidden Words
- Generic, branding, full-service marketing agency, cohesive communications system, business therapy, jargon (synergy, leverage, ecosystem, elevate, unlock, transform, journey, solutions)

### Required Words
- Build, Own, Purpose, Value, Message, Master, Share, Written down, Excavate, Verify, Order, Discover, Clarity, Working order

## Content Sources

All content must be derived from the brand manifesto:
- Services and pricing from Section 8
- Audience segments from Section 7
- Differentiators from Section 9
- Process from Section 3 and 9
- Testimonials from Section 2 (Verification)

## Development Rules

1. **Distinctness Test**: Could a competitor sign this? If yes, it fails.
2. **Verification Test**: Can we show where this came from? Every claim must be sourced.
3. **Order Standard**: Purpose > Identity > Strategy > Expression. Never backwards.
4. **Reading Level**: Grade 8.
5. **No Em Dashes**: Use full sentences, commas, colons, or periods.

## Performance Targets

- Lighthouse score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Accessibility

- WCAG AA compliance
- Proper color contrast (4.5:1 for normal text, 3:1 for large text)
- Keyboard navigation
- Screen reader support
- Semantic HTML

## Deployment

### Environment Variables
Create `.env` file for production:
```
VITE_API_URL=your_api_url
VITE_CONTACT_FORM_ENDPOINT=your_form_endpoint
```

### Build Optimization
- Images: Use WebP format, optimize sizes
- Code: Enable code splitting and lazy loading
- Bundle: Analyze and minimize bundle size
- Caching: Implement proper cache strategies

## Testing

### Required Testing
- Cross-browser (Chrome, Firefox, Safari, Edge)
- Mobile (iOS, Android)
- Tablet
- Desktop (various screen sizes)
- Accessibility (screen readers, keyboard navigation)
- Performance (Lighthouse)
- Color contrast verification

## Skills and Rules

This project includes:
- `.devin/skills/message-masters-website/SKILL.md` - Development skill guide
- `.devin/rules/development-rules.md` - Strict development rules
- `design.md` - Comprehensive design system documentation

## Single HTML Version

A standalone single-file version for GoHighLevel is available as `gohighlevel-landing.html`. It mirrors the React experience (starfield hero, self-drawing heptagon preloader, pinned horizontal Order on desktop, vertical fallback on mobile) using CDN-loaded GSAP, ScrollTrigger, and Lenis with a graceful vanilla fallback if those libraries fail to load. Upload it directly to GoHighLevel.

## Support

For questions about the brand or content, reference the brand manifesto: `MessageMasters_Brand_Manifesto_v4-1.md`

For technical implementation questions, reference the design.md and development rules.

## License

This project is proprietary to Message Masters. All rights reserved.
