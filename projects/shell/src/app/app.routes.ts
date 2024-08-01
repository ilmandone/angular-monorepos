import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { UselessShellService } from './local/services/useless-shell.service';

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
        
	},
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
    
];
