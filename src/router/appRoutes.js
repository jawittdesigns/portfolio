// Import the views for the routes.
import Home from '@views/Home'

// Define the routes.
export default [
  {
    path: '/',
    name: 'home',
    title: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'projects',
    title: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ './../views/Projects.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    title: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ './../views/Contact.vue'),
    children: [
      {
        path: 'submition',
        name: 'submition',
        title: 'Submition',
        component: () => import(/* webpackChunkName: "contact" */ './../views/Submition.vue'),
      },
    ],
  },
]
