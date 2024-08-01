import { Routes } from '@angular/router';
import { UselessService } from '../../local/useless-service.service';
import { inject } from '@angular/core';

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
