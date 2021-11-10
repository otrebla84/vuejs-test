export default {
  items: {
    home: {
      id: 'home', text: 'Home', icon: 'fa-home',
      link: '/'
    },
    config: {
      id: 'config', text: 'Config', icon: 'fa-wrench',
      submenu: [
        { id: 'link1', text: 'Link 1', link: '/link1' },
        { id: 'link2', text: 'Link 2', link: '/link2' },
        { id: 'link3', text: 'Link 3', link: '/link3' },
        { id: 'link4', text: 'Link 4', link: '/link4' },
        { id: 'link5', text: 'Link 5', link: '/link5' },
      ]
    },
    list: {
      id: 'list', text: 'List', icon: 'fa-list',
      link: '/'
    },
    play: {
      id: 'play', text: 'Play', icon: 'fa-play',
      submenu: [
        { id: 'link1', text: 'Link 1', link: '/link1' },
        { id: 'link2', text: 'Link 2', link: '/link2' },
        { id: 'link3', text: 'Link 3', link: '/link3' },
        { id: 'link4', text: 'Link 4', link: '/link4' },
        { id: 'link5', text: 'Link 5', link: '/link5' },
      ]
    }
  }
}