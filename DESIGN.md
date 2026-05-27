---
name: Minimalist Portfolio System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#111c2c'
  on-tertiary-container: '#798499'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#d8e3fa'
  tertiary-fixed-dim: '#bcc7dd'
  on-tertiary-fixed: '#111c2c'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap-lg: 160px
  section-gap-md: 80px
---

## Brand & Style

This design system is built upon the principles of **high-end minimalism and editorial sophistication**. It is designed specifically for professional design services where the work must remain the focal point. The aesthetic avoids unnecessary ornamentation, relying instead on precise typography, expansive negative space, and a restrained color palette to convey authority and taste.

The emotional response should be one of "quiet luxury"—calm, confident, and meticulously organized. By utilizing a mix of classical serif headers and utilitarian sans-serif body text, the system bridges the gap between traditional craftsmanship and modern digital precision.

## Colors

The color strategy for this design system prioritizes contrast and subtle warmth. 

*   **Primary (#1A1A1A):** Used for all primary text, iconography, and structural borders to provide a grounded, high-contrast foundation.
*   **Surface & Neutral:** Pure White (#FFFFFF) is used for active content areas, while the Soft Off-White (#F9F9F9) acts as a subtle background layer to reduce eye strain and add a sense of material depth.
*   **Accents:** Champagne Gold (#D4AF37) is used sparingly for high-value interactions, such as active states or bespoke decorative elements. Muted Slate Blue (#4A5568) serves as a secondary accent for functional elements like secondary buttons or meta-data to maintain a professional tone.

## Typography

The typography system is the cornerstone of this design system's identity. It uses a **High-Contrast Serif** for displays and headings to evoke an editorial, premium feel, while a **Geometric Sans-Serif** handles utilitarian content.

**Key Rules:**
- **Generous Leading:** Body text uses a 1.6x to 1.8x line-height ratio to ensure maximum readability and a relaxed, airy feel.
- **Letter Spacing:** Small labels and captions utilize increased tracking (0.1em) to maintain clarity and add a touch of modern sophistication.
- **Hierarchy:** Use `display-lg` sparingly for hero sections. Headlines should use the Primary Charcoal color, while secondary body text can lean into the Muted Slate Blue for subtle differentiation.

## Layout & Spacing

This design system employs a **Fixed Grid with Fluid Margins**. The central content container is capped to ensure line lengths remain optimal for reading, while extreme outer margins provide the "white space" necessary for a luxury feel.

**Layout Guidelines:**
- **12-Column Grid:** On desktop, use a 12-column grid with 32px gutters.
- **Section Breathing Room:** Vertical spacing between major sections should be aggressive (160px on desktop) to force focus on one piece of content at a time.
- **The "Purposeful Gap":** If an element doesn't need to be near another, double the standard padding. Negative space is treated as a physical element in the layout.

## Elevation & Depth

To maintain a minimalist profile, this design system avoids heavy shadows and traditional skeuomorphism. Instead, it uses **Tonal Layering and Soft Outlines**.

- **Depth via Contrast:** Surfaces are mostly flat. Depth is created by placing white cards (`#FFFFFF`) on off-white backgrounds (`#F9F9F9`).
- **Intentional Shadows:** When elevation is required (e.g., a floating navigation bar or an active card), use an "Ambient Shadow": `0px 4px 20px rgba(26, 26, 26, 0.04)`. It should be barely perceptible.
- **Thin Borders:** Use 1px borders in `#1A1A1A` at 10% opacity to define boundaries without adding visual weight.

## Shapes

The shape language is **Structured and Soft**. Sharp corners are avoided to prevent the UI from feeling "aggressive," but "Pill-shaped" or highly rounded corners are also avoided to maintain a professional, architectural tone.

- **Base Radius:** 0.25rem (4px) for small components like checkboxes or tags.
- **Container Radius:** 0.5rem (8px) for cards and modals.
- **Media:** Images and portfolio shots should follow the 8px radius to feel integrated with the UI.

## Components

### Buttons
- **Primary:** Solid `#1A1A1A` with White text. No border. 4px radius. High-padding (16px 32px).
- **Secondary:** Transparent background with a 1px `#1A1A1A` border. 
- **Ghost:** Text-only with an animated underline on hover using the Champagne Gold accent.

### Input Fields
- **Style:** Bottom-border only (1px `#1A1A1A` at 20% opacity). When focused, the border becomes 100% opacity Primary Charcoal.
- **Labels:** Always use `label-caps` typography, positioned above the input field.

### Cards
- **Portfolio Cards:** No border, no shadow by default. On hover, the image scales slightly (1.02x) and a very soft ambient shadow appears.
- **Content Cards:** Soft `#F9F9F9` background, 8px radius, no border.

### Interactive Elements
- **Micro-interactions:** Use 300ms "Ease-out" transitions for all hover states.
- **Cursors:** Consider using a custom, small circular cursor that reacts (expands/changes color) when hovering over clickable portfolio items.