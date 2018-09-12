export default [
  {
    role: 'clerk',
    menu: [
      {id: 'm2', icon: 'fa fa-cube', title: 'Делопроизводитель', link: '/clerk'},
      {id: 'm3', icon: 'fa fa-cube', title: 'Some Module', link: '/other'}
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
  }
]
