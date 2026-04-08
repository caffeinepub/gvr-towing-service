# Design Brief

## Direction

Warm Night Emergency Dispatch — Dark charcoal base with bold safety orange accent for 24/7 towing & roadside assistance.

## Tone

Professional, urgent yet reassuring. High-contrast dark mode conveys security. Orange emergency CTA dominates with conviction, no timid secondary actions.

## Differentiation

Orange safety accent on dark background creates immediate visual urgency. Service grid uses layered cards with depth, trust badges (24/7, Fast Response) elevated as callouts, not buried text.

## Color Palette

| Token              | OKLCH         | Role                                  |
| ------------------ | ------------- | ------------------------------------- |
| background (light) | 0.99 0.008230 | Off-white / cream base                |
| background (dark)  | 0.14 0.01550  | Deep warm charcoal primary             |
| foreground (light) | 0.18 0.01523  | Near-black text                       |
| foreground (dark)  | 0.92 0.01 60  | Off-white text on dark                |
| card               | 0.18 0.01850  | Elevated surface / service cards      |
| primary (accent)   | 0.68 0.22 30  | Safety orange (emergency CTA)         |
| accent-foreground  | 0.14 0.01530  | Text on orange buttons                |
| secondary          | 0.22 0.02 50  | Muted accents / dividers              |
| border             | 0.28 0.02 50  | Card borders, subtle separation       |

## Typography

- Display: Bricolage Grotesque — modern, confident, emergency dispatch tone
- Body: DM Sans — professional, highly readable at all sizes
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold`, label `text-xs font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Cards layered with subtle elevated shadows (4px drop, 12% opacity). No glow. Orange buttons cast slight shadow for tactile pressure. Dark mode background provides container contrast.

## Structural Zones

| Zone    | Background     | Border              | Notes                                                 |
| ------- | -------------- | ------------------- | ----------------------------------------------------- |
| Header  | card (0.18)    | border (0.28)       | Logo, phone link, sticky on scroll                    |
| Hero    | background     | —                   | Full-width, orange CTA dominates                      |
| Content | background     | —                   | Service grid alternates card/muted for rhythm         |
| Footer  | card (0.18)    | border (0.28)       | Location, hours, secondary contact, minimal text      |

## Spacing & Rhythm

Section gaps 64px (md: 80px). Cards use 16px internal padding. Service grid: 3 columns on desktop, 1 on mobile. Micro-spacing: 4px, 8px, 12px. Whitespace prioritized for scanning.

## Component Patterns

- Buttons: orange `bg-primary` with dark `text-accent-foreground`. On hover: slightly lighter orange (L +0.05). No borders on primary CTA. Secondary buttons use `bg-card` with `text-foreground`, subtle hover.
- Cards: `bg-card` with `border border-border`, rounded `lg`, `shadow-card`. On dark: L 0.18, on light: L 1.0.
- Badges: `bg-accent/10` with `text-primary`, small caps, no fill button style.
- Trust badges: inline with `inline-flex gap-2`, icon + text, no background.

## Motion

- Entrance: Fade + slide-up on section scroll (0.4s ease-out). Hero CTA scales on load (0.5s cubic-bezier).
- Hover: Orange button scales 1.05 on hover, 0.15s smooth. Card hover: shadow-elevated (4px → 12px drop).
- Decorative: None. All animation serves urgency / interactivity.

## Constraints

- No gradients (except background subtlety: up to 0.01 chroma allowed). No bouncy animations. No garish colors. Orange is the only warm accent; secondary is never hot.
- Accessibility: All buttons tested for AA+ contrast. Text on orange passes WCAG AA. Minimum touch target: 44px.
- Emergency tone: No playful icons, no beige tones, no soft rounded pills. Prefer squared card corners, strong typography.

## Signature Detail

Bold orange on dark charcoal embodies emergency dispatch urgency while maintaining trust. The color pairing is rare in SaaS and immediately signals "fast, reliable, urgent." Typography scale and card layering reinforce professional hierarchy.

