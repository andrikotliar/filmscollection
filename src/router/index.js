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
        name: 'actor',
        props: true,
        component: () => import('@/pages/Actor')
      },
      {
        path: '/director/:director',
        name: 'director',
        props: true,
        component: () => import('@/pages/Director')
      },
      {
        path: '/collections/:collection',
        name: 'collection',
        props: true,
        component: () => import('@/pages/Collection')
      },
      {
        path: '/search/:title',
        name: 'search',
        props: true,
        component: () => import('@/pages/SearchResults')
      },
      {
        path: '/top',
        component: () => import('@/pages/Top')
      }
    ]
	},
	{
		path: '/film/:id',
		props: true,
    name: 'film',
		component: () => import('@/pages/Film')
	},
	{
		path: '/collections',
    name: 'collections-list',
		component: () => import('@/pages/CollectionsList')
	}
];

export default routes;
