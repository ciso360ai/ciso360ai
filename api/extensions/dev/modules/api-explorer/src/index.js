import ModuleComponent from './module.vue';

export default {
	id: 'api-explorer',
	name: 'API Explorer',
	icon: 'api',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
};
