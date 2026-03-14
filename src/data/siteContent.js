import { iconMap } from './navigationData'

export const siteContent = {
  projects: {
    'apd-os': {
      id: 'apd-os',
      icon: iconMap.projects,
      title: 'APDWORLD OS type site',
      status: 'Refactoring into a dynamic content factory with nested detail pages and reusable widgets.',
      snapshots: [
        { id: 's1', title: 'Sidebar Shell', tone: 'teal', image: 'assets/projects/sidebar-shell.svg' },
        { id: 's2', title: 'Glass Panels', tone: 'blue', image: 'assets/projects/glass-panels.svg' },
        { id: 's3', title: 'Detail Loader', tone: 'green', image: 'assets/projects/detail-loader.svg' },
      ],
      timeline: [
        { phase: 'Kickoff', note: 'Migrated from dashboard to sidebar navigation model.' },
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
      icon: iconMap.projects,
      title: 'Frontend Toy Lab',
      status: 'Experimenting with playful UI patterns and nostalgic desktop interactions.',
      snapshots: [
        { id: 's1', title: 'Hover States', tone: 'green', image: 'assets/projects/hover-states.svg' },
        { id: 's2', title: 'Icon Grid', tone: 'teal', image: 'assets/projects/icon-grid.svg' },
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
      icon: iconMap.movies,
      title: 'Night Drive',
      posterImage: 'assets/movies/night-drive-poster.svg',
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
      icon: iconMap.movies,
      title: 'Rain Core',
      posterImage: 'assets/movies/rain-core-poster.svg',
      review: 'Slow, moody, and perfect for late-night tea and overthinking your life decisions.',
      imdb: 7.9,
      dialogue: [
        { id: 'd1', who: 'Me', line: 'It is 80% rain and 20% feelings, exactly my thing.' },
        { id: 'd2', who: 'Friend', line: 'No explosions, still somehow gripping.' },
      ],
    },
  },
  music: {
    'night-drive-mix': {
      id: 'night-drive-mix',
      icon: iconMap.music,
      title: 'Night Drive Mix',
      coverLabel: 'Night Drive Vol.7',
      coverImage: 'assets/movies/night-drive-poster.svg',
      commentary: 'Bassline-powered focus mode. This one turns debugging into a cinematic road trip.',
      videoUrl: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
      rating: 4,
    },
    'rain-core-tape': {
      id: 'rain-core-tape',
      icon: iconMap.music,
      title: 'Rain Core Tape',
      coverLabel: 'Rain Core Tape',
      coverImage: 'assets/movies/rain-core-poster.svg',
      commentary: 'Perfect for writing code while pretending the universe is a lo-fi montage.',
      videoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
      rating: 5,
    },
  },
  hobbies: {
    gaming: {
      id: 'gaming',
      icon: iconMap.hobbies,
      title: 'Gaming',
      photos: [
        { id: 'p1', caption: 'Victory Screen', image: 'assets/hobbies/victory-screen.svg' },
        { id: 'p2', caption: 'Overconfident Build', image: 'assets/hobbies/overconfident-build.svg' },
        { id: 'p3', caption: 'Boss Fight Chaos', image: 'assets/hobbies/boss-fight-chaos.svg' },
      ],
      jury: [
        { id: 'j1', name: 'Alex', opinion: 'You call this strategy? Respectfully, no.' },
        { id: 'j2', name: 'Mina', opinion: 'Chaotic but entertaining. 10/10 spectator sport.' },
      ],
    },
    coding: {
      id: 'coding',
      icon: iconMap.hobbies,
      title: 'Coding',
      photos: [
        { id: 'p1', caption: 'Terminal Glow', image: 'assets/hobbies/terminal-glow.svg' },
        { id: 'p2', caption: 'CSS Layer Stack', image: 'assets/hobbies/css-layer-stack.svg' },
        { id: 'p3', caption: 'Bug Hunting', image: 'assets/hobbies/bug-hunting.svg' },
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
      icon: iconMap.art,
      title: 'Sky Bloom',
      masterpiece: 'assets/art/sky-bloom.svg',
      process: [
        { id: 'p1', step: 'Palette Draft', note: 'Picked electric cyan + spring green values first.', image: 'assets/art/sky-bloom.svg' },
        { id: 'p2', step: 'Shape Blocking', note: 'Built major forms with broad, high-contrast strokes.', image: 'assets/art/sky-bloom.svg' },
        { id: 'p3', step: 'Gloss Pass', note: 'Added reflective bloom and soft haze overlays.', image: 'assets/art/sky-bloom.svg' },
      ],
    },
    'city-pulse': {
      id: 'city-pulse',
      icon: iconMap.art,
      title: 'City Pulse',
      masterpiece: 'assets/art/city-pulse.svg',
      process: [
        { id: 'p1', step: 'Line Sketch', note: 'Mapped towers and key perspective anchors.', image: 'assets/art/city-pulse.svg' },
        { id: 'p2', step: 'Color Build', note: 'Layered cool blues with vivid accent lights.', image: 'assets/art/city-pulse.svg' },
      ],
    },
  },
}

export const categoryLabels = {
  projects: 'Projects.exe',
  movies: 'Movies we binge.mp4',
  music: 'Music gives you life.wav',
  hobbies: 'Hobbies i suck at.docs',
  art: 'Art we Love.jpg',
}

export function getCategoryItems(category) {
  const source = siteContent[category]
  if (!source) return []

  return Object.values(source).map((item) => ({
    id: item.id,
    title: item.title,
    icon: item.icon,
    labelImage: item.labelImage,
  }))
}
