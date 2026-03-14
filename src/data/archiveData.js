import myComputerIcon from '../assets/icons/my_computer.svg'
import notepadIcon from '../assets/icons/notepad.svg'
import mediaPlayerIcon from '../assets/icons/media_player.svg'
import folderIcon from '../assets/icons/folder.svg'
import projectsIcon from '../assets/icons/projects.svg'
import artIcon from '../assets/icons/art.svg'
import hobbiesIcon from '../assets/icons/hobbies.svg'

export const folderRoutes = [
  { id: 'hobbies', title: 'Hobbies i suck at.docs', path: '/hobbies', icon: hobbiesIcon },
  { id: 'projects', title: 'Projects.exe', path: '/projects', icon: projectsIcon },
  { id: 'art', title: 'Art we Love.jpg', path: '/art', icon: artIcon },
  { id: 'movies', title: 'Movies we binge.mp4', path: '/movies', icon: mediaPlayerIcon },
]

export const computerRoutes = [
  { id: 'home', title: 'Home.sys ', path: '/', icon: myComputerIcon },
  { id: 'blog', title: 'Ram Says.txt', path: '/blog', icon: notepadIcon },
]

export const desktopIcons = {
  folder: folderIcon,
  hobbies: hobbiesIcon,
  projects: projectsIcon,
  art: artIcon,
  movies: mediaPlayerIcon,
}
