export default [
  {
    role: 'clerk',
    menu: [
      {id: 'm4', icon: 'fa fa-cube', title: 'Управление', link: '/manage'},
      // {id: 'm2', icon: 'fa fa-cube', title: 'Делопроизводитель', link: '/clerk'},
      {id: 'm2', icon: 'fa fa-cube', title: 'Дети', link: '/children'},
      {id: 'm3', icon: 'fa fa-cube', title: 'Дети по группам', link: '/children-group'},
      {id: 'm5', icon: 'fa fa-users', title: 'Пользователи', link: '/users'}
    ],
    permissions: ['GroupListCreate', 'GroupListEdit', 'ChildrenListCreate', 'ChildrenListEdit']
  },
  {
    role: 'doctor',
    menu: [
      {id: 'm1', icon: 'fa fa-cube', title: 'Dashboard', link: '/dashboard'},
      {id: 'm3', icon: 'fa fa-cube', title: 'Some Module', link: '/other'}
    ]
  },
  {
    role: 'supplier',
    menu: [
      {id: 'm1', icon: 'fa fa-cube', title: 'Dashboard', link: '/dashboard'}
    ]
  },
  {
    role: 'teacher',
    menu: [
    ]
  },
  {
    role: 'admin',
    menu: [
    ]
  }
]
