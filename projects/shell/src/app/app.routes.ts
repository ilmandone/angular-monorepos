import { loadRemoteModule } from '@angular-architects/native-federation';
import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {
	Todo,
	UselessShellService,
} from './local/services/useless-shell.service';

type GetSubRoutes = <T>() => Routes;

export const routes: Routes = [
	{
		path: 'main',
		loadComponent: () => loadRemoteModule('host', './SimpleComponent'),
	},
	{
		path: 'sub',
		loadChildren: () =>
			loadRemoteModule('host', './SubRoutes').then(
				(m: { getSubRoutes: GetSubRoutes }) => m.getSubRoutes<Todo>()
			),
		providers: [
			{
				provide: 'useless-service',
				useExisting: UselessShellService,
			},
		],
		resolve: {
			value: () => inject(UselessShellService).getValue(),
		},
	},
	{
		path: '',
		redirectTo: '/main',
		pathMatch: 'full',
	},
];
