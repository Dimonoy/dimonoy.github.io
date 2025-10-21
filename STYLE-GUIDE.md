# Style Guide

This document outlines the design system and styling conventions used in this project. The styles are organized in a modular structure within the `styles/` folder.

## Table of Contents

- [File Structure](#file-structure)
- [Design Tokens](#design-tokens)
- [Typography](#typography)
- [Color System](#color-system)
- [Layout & Spacing](#layout--spacing)
- [Components](#components)
- [Animations](#animations)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)

## File Structure

```
styles/
├── styles.css          # Main stylesheet with imports and global styles
├── animations.css      # Animation definitions and keyframes
├── fonts.css          # Font face declarations
├── header.css         # Header component styles
├── footer.css         # Footer component styles
└── sections/
    ├── about.css      # About section styles
    ├── experience.css # Experience section styles
    └── projects.css   # Projects section styles
```

## Design Tokens

### CSS Custom Properties

The design system uses CSS custom properties defined in `:root` for consistent theming and maintainability:

#### Colors
```css
--color-primary-background: light-dark(white, #222)
--color-secondary-background: #333
--color-primary-foreground: light-dark(#333, white)
--color-accent-theme: light-dark(#aa0, #ff0)
--color-accent-toggle: light-dark(#22f, #77f)
--color-accent-link: light-dark(#a1a, #f8f)
```

#### Drop Shadows
```css
--drop-shadow-toggle: drop-shadow(0 0 8px var(--color-accent-toggle))
--drop-shadow-theme: drop-shadow(0 0 8px var(--color-accent-theme)) drop-shadow(0 0 12px var(--color-accent-theme)) drop-shadow(0 0 24px var(--color-accent-theme))
--drop-shadow-link: drop-shadow(0 0 8px var(--color-accent-link))
--drop-shadow-text: drop-shadow(0 0 6px var(--color-primary-foreground))
--drop-shadow-header: drop-shadow(0 0 1px var(--color-primary-foreground)) drop-shadow(0 0 8px var(--color-primary-foreground)) drop-shadow(0 0 16px var(--color-primary-foreground))
--drop-shadow-card: var(--drop-shadow-text)
```

#### Spacing & Layout
```css
--gap: 32px
--lightup-transition: 200ms ease-out
```

#### Typography
```css
--font-size-normal: 16px
--font-size-medium: 1.5rem
--font-size-large: 3rem
--font-weight-bold: 600
--font-weight-normal: 400
--font-weight-light: 100
```

## Typography

### Font Families

The project uses two main font families:

1. **Kanit** (Primary)
   - Light (100): `Kanit-Light.ttf`
   - Regular (400): `Kanit-Regular.ttf`
   - SemiBold (600): `Kanit-SemiBold.ttf`

2. **Gothic A1** (Secondary)
   - Regular (300): `GothicA1-Regular.ttf`
   - Bold (400): `GothicA1-Bold.ttf`
   - Black (700): `GothicA1-Black.ttf`

### Typography Scale

- **H1**: `3rem` (48px), Bold (600)
- **H2**: `1.5rem` (24px), Bold (600)
- **Body**: `16px`, Normal (400)
- **Small**: `12.8px` (0.8 × normal)

### Text Effects

- **Headers (H1, H2)**: 
  - Transparent color with 1px stroke
  - Glow effect on hover using `--drop-shadow-header`
  - H1 includes animated `wavyGlowing` effect

- **Paragraphs**: 
  - Glow effect on hover using `--drop-shadow-text`

## Color System

### Theme Support

The design system supports both light and dark themes using the `light-dark()` CSS function:

- **Light Theme**: White backgrounds, dark text
- **Dark Theme**: Dark backgrounds (#222, #333), light text

### Color Usage

- **Primary Background**: Main page background
- **Secondary Background**: Alternative background color
- **Primary Foreground**: Main text color
- **Accent Theme**: Theme toggle button color (yellow/gold)
- **Accent Toggle**: Language toggle button color (blue)
- **Accent Link**: Link and button colors (magenta/pink)

## Layout & Spacing

### Container Structure

- **Header/Footer**: 20% horizontal margin
- **Main Content**: 20% horizontal padding
- **Gap**: 32px standard spacing between elements

### Grid Systems

- **Experience Timeline**: 3-column grid (1fr 1fr 2fr)
- **Toolbox Cards**: 2-column grid with 8px column gap
- **Projects Slideshow**: Flexbox with absolute positioning

## Components

### Header

- **Position**: Sticky, top of viewport
- **Background**: Semi-transparent with backdrop blur
- **Layout**: Flexbox with space-between
- **Responsive**: Menu hidden on screens < 1000px

#### Menu Items
- **Width**: 120px
- **Height**: 32px
- **Hover Effect**: Underline animation (300ms)
- **Active State**: Underline + glow effect

### Footer

- **Layout**: Flexbox with space-between
- **Typography**: Varied font sizes (1.5x and 4x normal)
- **Icons**: 32px × 32px with hover glow effects

### Buttons

- **Primary Button**: 
  - Background: `--color-accent-link`
  - Text: `--color-primary-background`
  - Hover: Glow effect
  - Size: 140px × 48px (about section), 120px × 32px (projects)

### Cards

- **Toolbox Cards**: 125px × 24px with 32px icons
- **Project Slides**: 16:9 aspect ratio, 432px height (active: 504px)
- **Info Cards**: 215px × 64px with background image

## Animations

### Keyframe Animations

#### `wavyGlowing`
- **Duration**: 5s infinite linear
- **Effect**: Pulsing glow on headers
- **Usage**: Applied to main H1 in about section

### Transitions

- **Standard**: `200ms ease-out` (`--lightup-transition`)
- **Menu Underline**: `300ms` linear
- **Opacity**: `500ms ease-in-out` (show/hide states)

### Hover Effects

- **Glow Effects**: Applied to interactive elements
- **Filter Transitions**: Smooth transitions on hover
- **Underline Animation**: Menu items with expanding underline

## Responsive Design

### Breakpoints

- **Mobile**: < 1000px
  - About section: Column layout
  - Header menu: Hidden

### Layout Adaptations

- **About Section**: Switches from row to column layout on mobile
- **Header Menu**: Hidden on smaller screens
- **Grid Systems**: Maintain responsive behavior

## Accessibility

### Cursor Customization

- **Default**: Custom cursor (`cursor.svg`)
- **Interactive**: Pointer cursor (`pointer.svg`)
- **Text Selection**: Select cursor (`select.svg`)

### Visual Feedback

- **Hover States**: Clear visual feedback for all interactive elements
- **Focus States**: Maintained through CSS transitions
- **Selection**: Custom selection color for better contrast

### Color Contrast

- **Theme Support**: Automatic light/dark theme switching
- **High Contrast**: Stroke effects on headers for better readability
- **Glow Effects**: Enhanced visibility of interactive elements

## Usage Guidelines

### Adding New Components

1. Create component-specific CSS file in appropriate directory
2. Import in `styles.css`
3. Use existing design tokens for consistency
4. Follow naming convention: `.component__element--modifier`

### Modifying Colors

1. Update CSS custom properties in `:root`
2. Use `light-dark()` function for theme support
3. Test both light and dark themes

### Adding Animations

1. Define keyframes in `animations.css`
2. Use existing transition variables
3. Apply hover effects consistently

### Responsive Considerations

1. Test at 1000px breakpoint
2. Use relative units where possible
3. Consider mobile-first approach for new components

## Browser Support

- **Modern Browsers**: Full support for CSS custom properties and `light-dark()`
- **Firefox**: Special handling for linear gradients (solid color fallback)
- **Cross-browser**: Consistent cursor and selection behavior

---

*This style guide is maintained alongside the codebase. Please update it when making significant changes to the design system.*