# Message Masters Website Setup Guide

## Quick Start

### Option 1: The React App (Recommended)

The Vite React app already exists in `web/`:

```bash
cd "/Users/mnstr/Desktop/Message Masters/web"
npm install
npm run dev
```

The dev server runs at `http://localhost:3000/`.

**Stack:**

- Vite 7 + React 18
- Plain CSS (`src/styles/index.css`), kept in lockstep with the GoHighLevel file
- GSAP + ScrollTrigger for scroll choreography
- Lenis for smooth scrolling
- Poppins via Google Fonts (400, 700, 900)

**Production build:**

```bash
cd web && npm run build
```

Output lands in `web/dist/`. Preview it with `npm run preview`.

### Option 2: The Single HTML Version (GoHighLevel)

The `gohighlevel-landing.html` file is ready to upload directly to GoHighLevel or any hosting platform. It includes:

- Complete brand styling, inline CSS, inline JavaScript
- Canvas starfield hero and a self-drawing heptagon preloader
- Pinned horizontal Order section on desktop, vertical fallback on mobile
- All major sections, animated counters, crossfading testimonials
- Contact form, smooth anchor scrolling, mobile navigation
- CDN-loaded GSAP, ScrollTrigger, and Lenis with a graceful vanilla fallback if they fail to load
- Reduced-motion support throughout

**To use:**

1. Open `gohighlevel-landing.html` in a browser to test
2. Customize the contact form action URL
3. Upload directly to GoHighLevel

## Project Structure

```
Message Masters/
├── web/                            The real Vite React app
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── components/
│       │   ├── fx/                 Starfield, Grain, HeptagonMark,
│       │   │                       Marquee, Cursor, Magnet, Reveal
│       │   ├── layout/             Nav, Footer
│       │   └── sections/           Preloader, Hero, Problems,
│       │                           Verification, Order, Services,
│       │                           Differentiators, Stats,
│       │                           Testimonials, Contact
│       ├── hooks/                  useLenis, useReducedMotion
│       ├── lib/                    heptagon.js
│       ├── styles/index.css
│       ├── App.jsx
│       └── main.jsx
├── gohighlevel-landing.html        Standalone single-file version
├── design.md                       Design system + motion spec
├── MessageMasters_Brand_Manifesto_v4-1.md
└── .devin/
    ├── skills/message-masters-website/SKILL.md
    └── rules/development-rules.md
```

## Brand Guidelines Reference

### Colors

- Signal Blue: #2B7CB1
- Deep Void: #0B0D10
- Graphite: #252729
- White: #FFFFFF
- Black: #14181C

### Typography

- Font: Poppins (400, 700, 900)
- Headlines: ALL CAPS, tight tracking, tight leading
- Body: Sentence case, generous leading

### Key Messaging

- Tagline: "Discover your value. Share it with the world."
- Order: Purpose > Identity > Strategy > Expression

## Development Rules

- **Distinctness Test**: Could a competitor sign this? If yes, it fails.
- **Verification Test**: Can we show where this came from?
- **Order Standard**: Purpose > Identity > Strategy > Expression
- **Reading Level**: Grade 8
- **No Em Dashes**: Use full sentences, commas, colons, or periods
- **Keep Both Versions In Sync**: Style or copy changes go in both `web/src/styles/index.css` and `gohighlevel-landing.html`

## Next Steps

### For the React App

1. Wire the contact form to a real endpoint
2. Add analytics and SEO meta as needed
3. Deploy `web/dist/` to Vercel, Netlify, or traditional hosting
4. Test across devices and browsers

### For GoHighLevel

1. Test the HTML file locally
2. Customize the contact form action URL
3. Upload to GoHighLevel
4. Test on mobile devices
5. Verify all links work

## Support Files

- **design.md**: Complete design system and motion specification
- **development-rules.md**: Strict development rules and standards
- **message-masters-website/SKILL.md**: Development skill guide
- **README.md**: Project documentation
- **MessageMasters_Brand_Manifesto_v4-1.md**: Source of all content

## Testing Checklist

- [ ] Colors match brand guidelines exactly
- [ ] Typography settings are correct
- [ ] All links work
- [ ] Mobile responsive
- [ ] Contact form functional
- [ ] Reduced-motion mode renders a complete static page
- [ ] Order section: horizontal pin on desktop, vertical stack on mobile
- [ ] GHL file still works with CDN scripts blocked
- [ ] Accessibility (WCAG AA)
- [ ] Performance (Lighthouse 90+)

## Common Issues

### CDN libraries fail in GoHighLevel

- The page is designed to degrade gracefully: reveals appear instantly, the Order section stacks vertically, counters jump to final values
- If GSAP or Lenis load but behave oddly, check for stripped `defer` attributes on the script tags

### Fonts not loading

- Check the Google Fonts link in `web/index.html` or `gohighlevel-landing.html`
- Clear browser cache

### Build errors

- Ensure dependencies are installed (`cd web && npm install`)
- Check Node.js version (18+)

## Deployment

### Vercel/Netlify

1. Connect your Git repository
2. Set the root directory to `web`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

### Traditional Hosting

1. Run `cd web && npm run build`
2. Upload `web/dist` contents
3. Configure the server to handle SPA routing

## Questions?

Refer to:

- Brand manifesto for content and messaging
- design.md for visual and motion specifications
- development-rules.md for coding standards
- SKILL.md for development guidance
