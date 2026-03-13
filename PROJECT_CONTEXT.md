# Project Context and Progress

Last updated: 2026-03-14
Project: APDWORLD
Goal: Nostalgic, funny personal poster site with an Aero-style archive OS experience.

## Product Direction
- Shift complete: from single dashboard-style poster to multi-page, nested-folder Archive OS.
- UX metaphor: desktop explorer with sidebar hierarchy and content panel navigation.
- Visual direction: Frutiger Aero-inspired glass UI in a green-blue palette (not black).

## Tech Stack
- Framework: React + Vite
- Routing: react-router-dom (nested routes)
- Styling: modern CSS (backdrop-filter, gradients, CSS variables, custom scrollbars)
- Deployment target: GitHub Pages via gh-pages

## Current Architecture
- Centralized route configuration in src/routes.jsx
- Router entry:
  - BrowserRouter in src/main.jsx
  - useRoutes in src/App.jsx
- Shell layout:
  - MainLayout with fixed 300px sidebar and main content area
  - Sidebar nav hierarchy:
    - Computer: Home (Sitemap), Blog (Ram Says)
    - Folders: Hobbies i suck at.msi, Projects.exe, Art we Love.jpg, Music gives you life.mp4
- Main content container:
  - AeroWindow now functions as archive content frame
  - Includes breadcrumb bar (Computer > ...)

## Routing Structure
- /
- /blog
- /hobbies
- /hobbies/:subId
- /projects
- /art
- /music

## Component Progress
### Refactored / Added
- AeroWindow updated to content container + breadcrumb bar
- FolderView added as icon-grid folder renderer with useParams-driven sub-folder details
- BlogCarousel added as horizontal, scrollable Ram Says widget with glossy droplet cards

### Pages Added
- HomePage (sitemap)
- BlogPage (carousel)
- HobbiesPage (nested folder entry)
- ProjectsPage
- ArtPage
- MusicPage

### Data and Layout
- archiveData.js added for folder/computer route metadata and hobbies sub-folder content
- MainLayout.jsx added to orchestrate sidebar, breadcrumbing, and Outlet rendering

## Visual Implementation Status (Green-Blue Aero)
- Background uses fixed grass wallpaper asset from src/assets/wallpapers/grass-aero.svg
- Glass containers implemented for sidebar and main panel with blur and glossy top gradient
- Typography uses Segoe UI/Frutiger stack with subtle header glow/text-shadow
- Scrollbars styled as thin glossy green rounded pills
- Responsive behavior added for narrow viewports

## Dependency and Config Status
- package.json includes react-router-dom and gh-pages scripts
- vite.config.js uses base: './' for static hosting compatibility

## Known Status
- Editor diagnostics currently report no file errors in refactored route/layout/component files.
- Terminal in this environment previously returned empty output for install/build commands, so command logs are not yet captured here.

## Remaining Validation
1. Run npm install
2. Run npm run dev and verify all routes and nested hobbies paths
3. Run npm run build
4. Run npm run deploy

## Suggested Next Enhancements
- Add draggable/resizable faux windows while preserving route state
- Persist last-opened route and sidebar state in localStorage
- Replace placeholder folder content with final personal media and copy
