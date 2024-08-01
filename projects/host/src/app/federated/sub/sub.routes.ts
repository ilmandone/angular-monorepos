import { Routes } from '@angular/router';
import { Recepie, UselessService } from '../../local/useless-service.service';
import { inject } from '@angular/core';

export const getSubRoutes = <T>(): Routes => {
	return [
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
			loadComponent: () => import('./sub-secondary/sub-secondary.component').then((m) => m.SubSecondaryComponent<T>),
		},
	]
}

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
		loadComponent: () => import('./sub-secondary/sub-secondary.component').then((m) => m.SubSecondaryComponent<Recepie>),
	},
];
