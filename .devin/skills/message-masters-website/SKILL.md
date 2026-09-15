# Message Masters Website Development

Build a Vite React website for Message Masters that strictly follows the brand manifesto and design system.

## Design System

### Colors
- Signal Blue: #2B7CB1 (accent, used sparingly)
- Deep Void: #0B0D10 (dark field, backgrounds)
- Graphite: #252729 (secondary dark)
- White: #FFFFFF (page, text backgrounds)
- Black: #14181C (type, primary text)

### Typography
- Font: Poppins (Google Fonts)
- Headlines: Poppins Black, ALL CAPS, tracking -68, leading 0.84
- Headers: Poppins Black, ALL CAPS, tracking -68, leading 0.84
- Body: Poppins Regular, sentence case, normal tracking, leading 1.66
- Emphasis: Poppins Bold, inline bold, card titles, table headers

### Brand Elements
- Mark: Seven-sided figure with wavy outer edge and Signal Blue outline
- Lockup line: "Built on Purpose" (small caps, letterspaced)
- Tagline: "Discover your value. Share it with the world."
- Always use the seven-sided mark (never simplify to 6 or 8 sides)

## Content Structure

### Key Sections
1. **Hero**: Tagline + positioning sentence
2. **Problem/Solution**: Value gap, confusion tax, divided house, weight the leader carries
3. **Services**: INSIGHT ($299), Manifesto ($5,000+), MasterPlan Lite ($20,000+), MasterPlan ($50,000+), Manager, Media
4. **Process**: Purpose > Identity > Strategy > Expression
5. **Differentiators**: We find it. We build it. Best of Denton County (2 years running). Built on Purpose.
6. **Audience**: Builders, Brokers, Missions, Practices
7. **Testimonials**: Use actual client quotes from verification section
8. **Contact**: CTA for INSIGHT evaluation

### Messaging Rules
- Reading level: Grade 8
- No em dashes (use full sentences, commas, colons, or periods)
- Avoid: generic, branding, full-service marketing agency, cohesive communications system, business therapy, jargon (synergy, leverage, ecosystem, elevate, unlock, transform, journey, solutions), urgency/scarcity
- Use: Build, Own, Purpose, Value, Message, Master, Share, Written down, Excavate, Verify, Order, Discover, Clarity, Working order, The room, Honest, Worth it

## Technical Requirements

### Stack
- Vite 7 + React 18 (in `web/`)
- Plain CSS in `src/styles/index.css`, kept in lockstep with `gohighlevel-landing.html`
- GSAP + ScrollTrigger for scroll choreography (pinned Order sequence, reveals, counters)
- Lenis for smooth scrolling
- Google Fonts (Poppins 400/700/900)
- Single-page composition; no router

### Component Structure
```
web/src/
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
│       ├── Order.jsx          Pinned horizontal Order sequence
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
└── App.jsx
```

### Motion System
- Motion spec lives in `design.md` (easing, timing, choreography rules)
- Every effect must honor `prefers-reduced-motion` via `useReducedMotion`
- The GHL file must degrade gracefully when CDN libraries fail: instant reveals, vertical Order stack, final counter values
- Order section: pinned horizontal on desktop, vertical stack on mobile and reduced-motion

### Performance
- Lazy load sections
- Optimize images
- Use semantic HTML
- Ensure accessibility (WCAG AA)

## Development Rules

1. **Strict Brand Adherence**: Every design decision must reference the brand manifesto
2. **No Generic Solutions**: If a component could work for any company, it's wrong
3. **Verify Claims**: Any statistics or claims must be from the verification section
4. **Reading Level**: Keep text at grade 8 level
5. **Mobile First**: Design for mobile, enhance for desktop
6. **Speed**: Fast loading, smooth interactions
7. **Accessibility**: Proper contrast, keyboard navigation, screen reader support

## Testing

- Test on mobile, tablet, desktop
- Verify all brand colors are exact
- Check typography settings (tracking, leading)
- Ensure all links work
- Test contact form functionality
- Verify accessibility

## Deployment

- Optimize for production
- Set up proper meta tags
- Configure analytics (if needed)
- Test on staging before production
