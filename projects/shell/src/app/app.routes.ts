import { loadRemoteModule } from '@angular-architects/native-federation';
import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'main',
		loadComponent: () => loadRemoteModule('host', './SimpleComponent'),
        providers: [
            HttpClient
        ]
	},
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
    
];
