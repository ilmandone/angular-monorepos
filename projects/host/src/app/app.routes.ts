import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'main',
		loadComponent: () => import('./federated/simple/simple.component'),
	},
	{
		path: 'sub',
		loadChildren: () => import('./federated/sub/sub.routes'),
	},
	{
		path: '',
		redirectTo: '/main',
		pathMatch: 'full',
	},
];
