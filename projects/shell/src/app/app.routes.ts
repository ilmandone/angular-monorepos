import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { UselessShellService } from './local/services/useless-shell.service';
import { inject } from '@angular/core';

export const routes: Routes = [
	{
		path: 'main',
		loadComponent: () => loadRemoteModule('host', './SimpleComponent'),
	},
    {
		path: 'sub',
		loadChildren: () => loadRemoteModule('host', './SubRoutes'),
		providers: [
			{
				provide: 'useless-service',
				useExisting: UselessShellService
			}
		],
		resolve: {
			recepie: () => 
				inject(UselessShellService).getRecepie()			
		}
        
	},
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
    
];
