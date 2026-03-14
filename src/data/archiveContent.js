import projectsIcon from '../assets/icons/projects.svg'
import mediaPlayerIcon from '../assets/icons/media_player.svg'
import hobbiesIcon from '../assets/icons/hobbies.svg'
import artIcon from '../assets/icons/art.svg'

import sidebarShellImage from '../assets/projects/sidebar-shell.svg'
import glassPanelsImage from '../assets/projects/glass-panels.svg'
import detailLoaderImage from '../assets/projects/detail-loader.svg'
import hoverStatesImage from '../assets/projects/hover-states.svg'
import iconGridImage from '../assets/projects/icon-grid.svg'

import nightDrivePoster from '../assets/movies/night-drive-poster.svg'
import rainCorePoster from '../assets/movies/rain-core-poster.svg'

import victoryScreenImage from '../assets/hobbies/victory-screen.svg'
import overconfidentBuildImage from '../assets/hobbies/overconfident-build.svg'
import bossFightChaosImage from '../assets/hobbies/boss-fight-chaos.svg'
import terminalGlowImage from '../assets/hobbies/terminal-glow.svg'
import cssLayerStackImage from '../assets/hobbies/css-layer-stack.svg'
import bugHuntingImage from '../assets/hobbies/bug-hunting.svg'

import skyBloomImage from '../assets/art/sky-bloom.svg'
import cityPulseImage from '../assets/art/city-pulse.svg'

export const archiveContent = {
  projects: {
    'apd-os': {
      id: 'apd-os',
      icon: projectsIcon,
      title: 'APDWORLD Archive OS',
      status: 'Refactoring into a dynamic content factory with nested detail pages and reusable widgets.',
      snapshots: [
        { id: 's1', title: 'Sidebar Shell', tone: 'teal', image: sidebarShellImage },
        { id: 's2', title: 'Glass Panels', tone: 'blue', image: glassPanelsImage },
        { id: 's3', title: 'Detail Loader', tone: 'green', image: detailLoaderImage },
      ],
      timeline: [
        { phase: 'Kickoff', note: 'Migrated from dashboard to archive navigation model.' },
        { phase: 'Routing', note: 'Added nested routes and dynamic /:category/:id resolver.' },
        { phase: 'Polish', note: 'Applied green-blue Aero gradients, blur hierarchy, and glossy widgets.' },
      ],
      collaborators: [
        { id: 'c1', name: 'R', initials: 'RM' },
        { id: 'c2', name: 'A', initials: 'AD' },
        { id: 'c3', name: 'P', initials: 'PX' },
      ],
    },
    'toy-lab': {
      id: 'toy-lab',
      icon: projectsIcon,
      title: 'Frontend Toy Lab',
      status: 'Experimenting with playful UI patterns and nostalgic desktop interactions.',
      snapshots: [
        { id: 's1', title: 'Hover States', tone: 'green', image: hoverStatesImage },
        { id: 's2', title: 'Icon Grid', tone: 'teal', image: iconGridImage },
      ],
      timeline: [
        { phase: 'Idea', note: 'Collect references from Vista-era UI and modern motion design.' },
        { phase: 'Prototype', note: 'Build tiny widgets and interaction patterns.' },
      ],
      collaborators: [{ id: 'c1', name: 'Solo', initials: 'SO' }],
    },
  },
  movies: {
    'night-drive': {
      id: 'night-drive',
      icon: mediaPlayerIcon,
      title: 'Night Drive',
      posterImage: nightDrivePoster,
      review:
        'A neon-soaked comfort watch where every scene feels like a soundtrack visualization in motion.',
      imdb: 8.2,
      dialogue: [
        { id: 'd1', who: 'Me', line: 'This movie has impossible levels of style.' },
        { id: 'd2', who: 'Friend', line: 'You only like it because the UI in it is glossy.' },
      ],
    },
    'rain-core': {
      id: 'rain-core',
      icon: mediaPlayerIcon,
      title: 'Rain Core',
      posterImage: rainCorePoster,
      review: 'Slow, moody, and perfect for late-night tea and overthinking your life decisions.',
      imdb: 7.9,
      dialogue: [
        { id: 'd1', who: 'Me', line: 'It is 80% rain and 20% feelings, exactly my thing.' },
        { id: 'd2', who: 'Friend', line: 'No explosions, still somehow gripping.' },
      ],
    },
  },
  hobbies: {
    gaming: {
      id: 'gaming',
      icon: hobbiesIcon,
      title: 'Gaming',
      photos: [
        { id: 'p1', caption: 'Victory Screen', image: victoryScreenImage },
        { id: 'p2', caption: 'Overconfident Build', image: overconfidentBuildImage },
        { id: 'p3', caption: 'Boss Fight Chaos', image: bossFightChaosImage },
      ],
      jury: [
        { id: 'j1', name: 'Alex', opinion: 'You call this strategy? Respectfully, no.' },
        { id: 'j2', name: 'Mina', opinion: 'Chaotic but entertaining. 10/10 spectator sport.' },
      ],
    },
    coding: {
      id: 'coding',
      icon: hobbiesIcon,
      title: 'Coding',
      photos: [
        { id: 'p1', caption: 'Terminal Glow', image: terminalGlowImage },
        { id: 'p2', caption: 'CSS Layer Stack', image: cssLayerStackImage },
        { id: 'p3', caption: 'Bug Hunting', image: bugHuntingImage },
      ],
      jury: [
        { id: 'j1', name: 'Riya', opinion: 'You refactor at midnight and call it relaxation.' },
        { id: 'j2', name: 'Jon', opinion: 'The gradients are illegal levels of shiny.' },
      ],
    },
  },
  art: {
    'sky-bloom': {
      id: 'sky-bloom',
      icon: artIcon,
      title: 'Sky Bloom',
      masterpiece: skyBloomImage,
      process: [
        { id: 'p1', step: 'Palette Draft', note: 'Picked electric cyan + spring green values first.', image: skyBloomImage },
        { id: 'p2', step: 'Shape Blocking', note: 'Built major forms with broad, high-contrast strokes.', image: skyBloomImage },
        { id: 'p3', step: 'Gloss Pass', note: 'Added reflective bloom and soft haze overlays.', image: skyBloomImage },
      ],
    },
    'city-pulse': {
      id: 'city-pulse',
      icon: artIcon,
      title: 'City Pulse',
      masterpiece: cityPulseImage,
      process: [
        { id: 'p1', step: 'Line Sketch', note: 'Mapped towers and key perspective anchors.', image: cityPulseImage },
        { id: 'p2', step: 'Color Build', note: 'Layered cool blues with vivid accent lights.', image: cityPulseImage },
      ],
    },
  },
}

export const categoryLabels = {
  projects: 'Projects.exe',
  movies: 'Movies we binge.mp4',
  hobbies: 'Hobbies i suck at.docs',
  art: 'Art we Love.jpg',
}

export function getCategoryItems(category) {
  const source = archiveContent[category]
  if (!source) return []

  return Object.values(source).map((item) => ({
    id: item.id,
    title: item.title,
    icon: item.icon,
  }))
}
