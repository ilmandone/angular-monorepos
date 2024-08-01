import { Routes } from '@angular/router';

const SUB_ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'default',
		pathMatch: 'full',
	},
	{
		path: 'default',
		loadComponent: () => import('./sub-default/sub-default.component'),
	},
	{
		path: 'secondary',
		loadComponent: () => import('./sub-secondary/sub-secondary.component'),
	},
];

export default SUB_ROUTES;
