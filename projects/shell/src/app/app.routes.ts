import { loadRemoteModule } from '@angular-architects/native-federation';
import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'main',
		loadComponent: () => loadRemoteModule('host', './SimpleComponent'),
	},
    {
		path: 'sub',
		loadChildren: () => loadRemoteModule('host', './SubRoutes'),
        
	},
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
    
];
