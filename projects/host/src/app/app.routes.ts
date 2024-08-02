import { Routes } from '@angular/router';
import { Recepie, UselessService } from './local/useless-service.service';
import { inject } from '@angular/core';

export const routes: Routes = [
	{
		path: 'main',
		loadComponent: () => import('./federated/simple/simple.component'),
	},
	{
		path: 'sub',
		loadChildren: () => import('./federated/sub/sub.routes').then(m => m.getSubRoutes<Recepie>()),
		providers: [
			{
				provide: 'useless-service',
				useExisting: UselessService
			}
		],
		resolve: {
			value: () => 
				inject(UselessService).getValues()
			
		}
	},
	{
		path: '',
		redirectTo: '/main',
		pathMatch: 'full',
	},
];
