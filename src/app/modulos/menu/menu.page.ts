import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

	public appPages = [
		{ 
			title: 'Líneas', 
			url: '/menu/linea', 
			icon: 'mail' 
		},
		{ 
			title: 'Estaciones', 
			url: '/menu/estacion', 
			icon: 'paper-plane' 
		},
		{ 
			title: 'Pasajeros', 
			url: '/menu/pasajeros', 
			icon: 'heart' 
		},
	];

	constructor() {
	}

	ngOnInit() {
	}

}
