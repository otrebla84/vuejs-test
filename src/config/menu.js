export default {
  items: {
    home: {
      id: 'home', text: 'Home', icon: 'fa-home',
      link: '/'
    },
    list: {
      id: 'list', i18n: 'sidebar.examples', icon: 'fa-list',
      submenu: [
        { id: 'example-buttons',  i18n: 'sidebar.exampleButtons', link: '/examples/buttons' },
        { id: 'example-panels',  i18n: 'sidebar.examplePanels', link: '/examples/panels' },
        { id: 'example-dialogs',  i18n: 'sidebar.exampleDialogs', link: '/examples/dialogs' },
        { id: 'example-forms', i18n: 'sidebar.exampleForm', link: '/examples/forms' }
      ]
    }
  }
}