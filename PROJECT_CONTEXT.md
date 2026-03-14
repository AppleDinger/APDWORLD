# Project Context and Progress

Last updated: 2026-03-14
Project: APDWORLD
Goal: Nostalgic, funny personal poster site with Frutiger Aero visual language and folder-style navigation.

## Current Product State
- Architecture has shifted from a desktop window manager concept to a route-driven "Explorer OS" shell.
- Primary UX: fixed sidebar explorer + content window with breadcrumbs.
- Visual direction is green/blue Aero glass (explicitly not black Aero).
- Content is data-driven and rendered through category pages plus dynamic detail routes.

## Tech Stack and Runtime
- React 18 + Vite 5
- react-router-dom for nested routing and dynamic params
- CSS variables + backdrop filters + responsive breakpoints in a single central stylesheet
- `getAsset` helper for BASE_URL-safe static asset paths (GitHub Pages compatibility)

## Canonical Architecture
- Routing source: `src/routes.jsx`
  - `/`
  - `/blog`
  - `/blog/:id`
  - `/hobbies`
  - `/projects`
  - `/art`
  - `/movies`
  - `/music`
  - `/:category/:id` (dynamic details)
- Layout shell: `src/layouts/MainLayout.jsx`
  - Left sidebar sections: Computer + Folders
  - Main panel wraps `AeroWindow` and route `Outlet`
  - Breadcrumb labels generated from pathname segments
- Dynamic details controller: `src/pages/ContentLoader.jsx`
  - Loading spinner transition before rendering detail
  - Category-specific layouts:
    - `MovieDetail`
    - `MusicDetail`
    - `ProjectDetail`
    - `HobbyDetail`
    - `ArtDetail`

## Data Model and Navigation
- Navigation metadata: `src/data/navigationData.js`
  - Uses exact icon mappings from `/public/icons/*`
  - Folders include Hobbies, Projects, Art, Movies, Music
- Content source of truth: `src/data/siteContent.js`
  - Category object buckets keyed by `id`
  - `getCategoryItems(category)` transforms bucket entries for folder grids
  - Includes optional `labelImage` passthrough for folder label image rendering
- Blog data: `src/data/blogData.js` consumed by `BlogPage` and `BlogDetail`

## Components and Notable Behavior
- `src/components/FolderView.jsx`
  - Renders folder glyph icon + label
  - New behavior: if `item.labelImage` exists, renders an image label instead of plain text
- `src/components/YouTubeEmbed.jsx`
  - Normalizes watch/short/embed URLs to a video id
  - Uses `https://www.youtube.com/embed/{id}` to avoid refused-to-connect issues
- `src/components/ReusableCarousel.jsx` and `src/components/BlogCarousel.jsx`
  - Shared horizontal card rails; mobile behavior tuned in CSS

## Styling Snapshot
- Primary stylesheet: `src/index.css`
- Current baseline glass variable:
  - `--glass-panel: rgba(6, 56, 65, 0.01)`
- Recently updated translucent tile styles:
  - `.folder-icon` and `.sitemap-tile` now use:
    - `background: rgba(255, 255, 255, 0.12)`
    - `backdrop-filter: blur(12px) saturate(160%)`
    - `border: 1px solid rgba(255, 255, 255, 0.2)`
    - `box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3)`
- Folder label image support style added:
  - `.folder-icon .folder-label-image { max-width: 100%; height: auto; pointer-events: none; }`
- Music detail visual fixes:
  - `.mini-player-wrap` uses `overflow: hidden`
  - embedded iframe has consistent rounded corners

## Asset Pathing and Deploy Safety
- Asset helper: `src/utils/getAsset.js`
  - `getAsset(path) => ${import.meta.env.BASE_URL}${path}`
- Most components/pages now route image/icon paths through `getAsset`
- Wallpaper currently set in `src/App.jsx` via:
  - `getAsset('wallpapers/Win XP wallpaper.webp')`

## Known Risks / Verification Items
1. Runtime check recommended for wallpaper extension consistency (`.webp` vs existing files in `/public/wallpapers`).
2. End-to-end route QA still advised after large CSS and routing iterations.
3. Verify on mobile for bottom-dock behavior, vertical card stacks, and detail page scroll continuity.

## Suggested First Steps Next Session
1. Run local preview and sanity-check all major routes:
   - `/`, `/blog`, `/blog/:id`, `/hobbies`, `/projects`, `/art`, `/movies`, `/music`, `/:category/:id`.
2. Confirm YouTube embed playback on music detail pages.
3. If wallpaper is missing, align `src/App.jsx` wallpaper filename to the actual file in `/public/wallpapers`.
4. Start replacing placeholder content assets/text with final personal content.
