import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
	{
		path: '',
		component: MenuPage,
		children: [
			{
				path: 'linea',
				loadChildren: () => import('../linea/linea.module').then(m => m.LineaPageModule),
			},
			{
				path: 'estacion',
				loadChildren: () => import('../estacion/estacion.module').then(m => m.EstacionPageModule),
			},
			{
				path: 'pasajeros',
				loadChildren: () => import('../pasajeros/pasajeros.module').then(m => m.PasajerosPageModule),
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MenuPageRoutingModule { }
