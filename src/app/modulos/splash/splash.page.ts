import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-splash',
	templateUrl: './splash.page.html',
	styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
		this.getLogin();
	}

	getLogin() {
		let timeout = setTimeout(() => {
			this.router.navigate(['login/']);
			clearTimeout(timeout);
		}, 3000);
	}
}
