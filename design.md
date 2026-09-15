# Message Masters Website Design

## Visual Identity

### Core Concept
**Scale and Order**: A system that works because it was designed, viewed from far enough away to see all of it at once. This is the same argument we make about a business.

### Aesthetic Direction
- Deep dark field with sparse Signal Blue accents
- Earth from space imagery and starfields
- Globe line art
- Clean, purposeful layout
- High contrast for readability
- Professional but not corporate

## Color Palette

### Primary Colors
```
Signal Blue: #2B7CB1 (accent - use sparingly)
Deep Void: #0B0D10 (backgrounds, dark sections)
Graphite: #252729 (secondary dark elements)
White: #FFFFFF (content areas, text backgrounds)
Black: #14181C (primary text)
```

### Color Usage Rules
- Signal Blue is the single accent - one accent used everywhere is not an accent
- Deep Void for main background and section dividers
- White for content cards and main reading areas
- Black for body text and primary content
- Graphite for secondary text and borders

### Contrast Requirements
- WCAG AA compliance for all text
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- Test all color combinations for accessibility

## Typography

### Font Family
**Poppins** (Google Fonts)
- Licensed under SIL Open Font License
- Free for commercial use permanently
- Can be embedded in PDFs and client deliverables

### Typography Scale

#### Headlines
- Font: Poppins Black
- Case: ALL CAPS
- Tracking: -68
- Leading: 0.84
- Use: Page titles, section headers, major headlines

#### Headers
- Font: Poppins Black
- Case: ALL CAPS
- Tracking: -68
- Leading: 0.84
- Use: Card titles, subsection headers

#### Body Text
- Font: Poppins Regular
- Case: Sentence case
- Tracking: Normal
- Leading: 1.66
- Use: All body content, paragraphs

#### Emphasis
- Font: Poppins Bold
- Use: Inline bold, card titles, table headers

### Typography Rules
- Never use Visby CF (retired from brand system)
- Use bold greater-than sign (>) for sequence arrows
- Maintain consistent spacing and line heights
- Ensure readability at all sizes

## Logo and Brand Mark

### The Mark
- Seven-sided figure with wavy outer edge
- Signal Blue outline
- Contains MM wordmark
- Seven represents completion and God's principles

### Production Rules
- Never regularize side count at small sizes
- Never snap to 6 or 8 sided grid
- Wavy edge is part of the mark - never remove
- Below 24px, use wordmark alone
- Keep true vector original
- Blank badge works as frame, container, bullet, divider

### Lockup
- "Built on Purpose" sits under wordmark
- Small caps, letterspaced
- Never larger than 1/3 of wordmark cap height
- Extended form: "Building Brands on Purpose"

## Layout System

### Grid Structure
- Mobile-first responsive design
- CSS Grid for complex layouts
- Flexbox for component alignment
- Consistent spacing using 8px grid system

### Section Components
- Full-bleed dark dividers between sections
- Card grids for services and content
- Tinted belief boxes for key statements
- Running footer on all pages

### Spacing
- Generous whitespace for clarity
- Consistent padding and margins
- Clear visual hierarchy
- Purposeful use of negative space

## Component Design

### Hero Section
- Full-width with dark background
- Tagline: "Discover your value. Share it with the world."
- Positioning sentence
- CTA: "Get your INSIGHT evaluation"
- Earth from space or starfield background

### Navigation
- Clean, minimal navigation
- Logo on left
- Navigation links center/right
- Mobile hamburger menu
- Sticky header on scroll

### Cards
- Dark background with white text
- Subtle borders using Graphite
- Hover effects with Signal Blue accents
- Consistent padding and spacing

### Buttons
- Primary: Signal Blue background, white text
- Secondary: White background, Signal Blue text
- Tertiary: Transparent background, Signal Blue text
- Subtle hover animations
- Clear focus states for accessibility

### Forms
- Clean, minimal design
- Clear labels and placeholders
- Proper error states
- Accessible form controls
- Inline validation

## Imagery

### Image Types
- Earth from space photography
- Starfields and space imagery
- Globe line art
- Seven-sided badge as graphic element
- Professional, purposeful imagery

### Image Rules
- High contrast for readability
- Optimized for web performance
- Proper alt text for accessibility
- Consistent style and treatment
- Support dark mode aesthetic

## Animation and Interaction

### Animation Principles
- Subtle, purposeful animations
- Smooth transitions (300-500ms)
- Never distract from content
- Enhance user experience
- Respect user preferences (reduced motion)

### Interactive Elements
- Hover states on all interactive elements
- Focus states for keyboard navigation
- Loading states for async actions
- Error states for form validation
- Success states for completed actions

## Responsive Design

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1440px
- Large Desktop: 1440px+

### Mobile Strategy
- Single column layouts
- Stacked cards
- Simplified navigation
- Touch-friendly targets (44px minimum)
- Optimized for vertical scrolling

### Desktop Strategy
- Multi-column layouts
- Card grids
- Full navigation
- Hover interactions
- Horizontal scrolling where appropriate

## Accessibility

### Visual Accessibility
- WCAG AA color contrast
- Scalable text (200% zoom)
- No reliance on color alone
- Clear visual hierarchy
- Readable font sizes (minimum 16px)

### Keyboard Accessibility
- All interactive elements keyboard accessible
- Clear focus indicators
- Logical tab order
- No keyboard traps
- Skip navigation link

### Screen Reader Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed
- Descriptive link text

## Performance

### Performance Targets
- Lighthouse score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### Optimization Strategies
- Lazy load images and components
- Optimize image formats (WebP)
- Minimize JavaScript bundle
- Use code splitting
- Implement proper caching
- CDN for static assets

## Brand Consistency

### Verification
- Every design decision references brand manifesto
- Colors match brand guidelines exactly
- Typography follows all rules
- Logo usage adheres to all restrictions
- Messaging is consistent with brand voice

### Distinctness Test
- Could a competitor sign this design? If yes, it fails
- Is it unique to Message Masters?
- Does it reflect the Sage + Caregiver archetype?
- Is the Hero the client, not Message Masters?

## Page Templates

### Home Page
- Hero with tagline and CTA
- Problem/Solution section
- Services overview
- Process explanation
- Differentiators
- Audience segments
- Testimonials
- Contact/INSIGHT CTA

### Services Page
- Detailed service descriptions
- Pricing information
- Process for each service
- Case studies or examples
- Comparison with alternatives
- CTA for INSIGHT or consultation

### About Page
- Company story (The Origin)
- Team information
- Values and culture (HALO)
- The Declaration
- Verification evidence
- Contact information

### Contact Page
- Contact form
- Location information
- Email and phone
- Social links
- Response time expectations
- CTA for INSIGHT

## Motion System

The page performs the brand's argument. Three signature interactions come straight from the manifesto; everything else supports them.

### Signature Interactions

**The Zoom Out**
The brand's core image is a system viewed from far enough away to see all of it at once. The hero opens tight on a single point of light in a Deep Void starfield. On scroll, the view pulls back to reveal the whole constellation. The user experiences scale revealing order.

**The Order Cannot Run Backwards**
Purpose > Identity > Strategy > Expression becomes a pinned horizontal-scroll sequence of four full-screen panels. Scroll physically enforces the order. The interaction is the claim. On viewports under 768px, panels stack vertically instead.

**Evidence Before Claim**
Section 02's mechanic becomes visible. A claim appears alone, then the verified evidence slides in beneath it. The reader confirms a conclusion instead of evaluating writing.

**The Seven Draws Itself**
The seven-sided wavy mark draws its Signal Blue outline via SVG stroke animation in the preloader. It recurs as rotating section dividers and as a scroll-progress meter in the nav.

### Easing and Timing

- Primary easing: `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo feel) for all reveals
- Linear only for rotations, marquees, and starfield twinkle
- Reveal duration: 0.8s to 1.2s
- Stagger: 80ms to 120ms between siblings
- Scrub-driven (scroll-linked) for: hero zoom-out, horizontal Order sequence, pinned sections
- Never animate more than 3 properties on one element. Prefer transform and opacity only.

### Choreography Rules

- Headlines reveal by masked lines sliding up, never by fade alone
- The two-beat tagline: "DISCOVER YOUR VALUE." holds a beat, then "SHARE IT WITH THE WORLD." The pause is the brand.
- Section titles enter once, hold position, never re-animate
- Counters animate once when 60% visible, duration 1.4s, ease-out
- Marquee speed: slow enough to read, ~20s per loop
- Custom cursor: dot plus trailing ring, scales to 2.5x over interactive elements. `pointer:fine` only.
- Magnetic CTAs: max 8px pull, spring back on leave

### Supporting Layer

- Lenis smooth scroll driving GSAP ScrollTrigger
- Subtle film-grain overlay (SVG noise, ~4% opacity, static, non-animated)
- Nav hides on scroll down, reveals on scroll up
- Seven-segment scroll progress in nav
- Ghost outline text fills solid as statements scroll through center

### Reduced Motion

`prefers-reduced-motion: reduce` disables all choreography. Every section has a fully readable static state. Canvas starfield renders a single static frame. No parallax, no pinning, no cursor, no marquee motion.

### Performance Budget

- Canvas: devicePixelRatio capped at 2, pause via IntersectionObserver when offscreen
- Animate transform and opacity only
- No external images required. Starfield and Earth glow are canvas and CSS.
- Grain is a static SVG, not a video or animated filter
- Total JS budget for GHL version: GSAP + ScrollTrigger + Lenis via CDN (~120KB), inline app code ~40KB

## Technical Implementation

### Tech Stack
- Vite + React
- Tailwind CSS (custom config with brand colors)
- React Router
- Framer Motion (subtle animations)
- Google Fonts (Poppins)

### File Structure
```
src/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── pages/
├── styles/
└── App.jsx
```

### Build Configuration
- Production optimization
- Proper meta tags
- Analytics integration
- SEO configuration
- Environment variables

## Success Metrics

### User Experience
- Low bounce rate
- High engagement time
- Mobile usage matches expectations
- Accessibility compliance
- Fast load times

### Business Goals
- INSIGHT evaluation sign-ups
- Contact form submissions
- Phone call inquiries
- Meeting requests
- Overall conversion rate

### Brand Goals
- Brand recognition
- Message consistency
- Professional perception
- Differentiation from competitors
- Alignment with brand manifesto
