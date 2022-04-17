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
