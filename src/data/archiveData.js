export const iconMap = {
  home: 'icons/taskmgr-9.png',
  blog: 'icons/vista_sticky_notes-9.png',
  projects: 'icons/settings.png',
  movies: 'icons/vista_movie-9.png',
  music: 'icons/wmp1-11.png',
  art: 'icons/gallery.png',
  hobbies: 'icons/my_files.png',
}

export const folderRoutes = [
  { id: 'hobbies', title: 'Hobbies i suck at.docs', path: '/hobbies', icon: iconMap.hobbies },
  { id: 'projects', title: 'Projects.exe', path: '/projects', icon: iconMap.projects },
  { id: 'art', title: 'Art we Love.jpg', path: '/art', icon: iconMap.art },
  { id: 'movies', title: 'Movies we binge.mp4', path: '/movies', icon: iconMap.movies },
  { id: 'music', title: 'Music gives you life.wav', path: '/music', icon: iconMap.music },
]

export const computerRoutes = [
  { id: 'home', title: 'Home.sys', path: '/', icon: iconMap.home },
  { id: 'blog', title: 'Ram Says.txt', path: '/blog', icon: iconMap.blog },
]
