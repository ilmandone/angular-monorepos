import { Routes } from '@angular/router';
import { UselessService } from './local/useless-service.service';
import { inject } from '@angular/core';

export const routes: Routes = [
	{
		path: 'main',
		loadComponent: () => import('./federated/simple/simple.component'),
	},
	{
		path: 'sub',
		loadChildren: () => import('./federated/sub/sub.routes'),
		providers: [
			{
				provide: 'useless-service',
				useExisting: UselessService
			}
		],
		resolve: {
			recepie: () => 
				inject(UselessService).getUserMe()
			
		}
	},
	{
		path: '',
		redirectTo: '/main',
		pathMatch: 'full',
	},
];
