import Home from '@/pages/Home';
import Films from '@/pages/Films';

const routes = [
	{
		path: '/',
		component: Home,
    children: [
      {
        path: '/',
        component: Films
      },
      {
        path: '/actor/:name',
        name: 'actor-page',
        props: true,
        component: () => import('@/pages/Actor')
      },
      {
        path: '/director/:director',
        name: 'director-page',
        props: true,
        component: () => import('@/pages/Director')
      },
      {
        path: '/collection/:collection',
        props: true,
        name: 'collections-list',
        component: () => import('@/pages/Collection')
      },
      {
        path: '/search/:title',
        name: 'search-page',
        props: true,
        component: () => import('@/pages/SearchResults')
      }
    ]
	},
	{
		path: '/film/:id',
		props: true,
    name: 'film',
		component: () => import('@/pages/Film')
	}
];

export default routes;
