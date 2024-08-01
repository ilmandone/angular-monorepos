import { Routes } from '@angular/router';
import { UselessService } from './local/useless-service.service';

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
	},
	{
		path: '',
		redirectTo: '/main',
		pathMatch: 'full',
	},
];
