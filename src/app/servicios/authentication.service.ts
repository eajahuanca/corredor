import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

import { environment } from 'src/environments/environment';

const ACCESS_TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh-token';
const USER_DATA_KEY = 'data_user';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	private url = environment.apiurl;
	private urllogin = `${this.url}login/`;

	isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	currentAccessToken = '';

	constructor(
		private http: HttpClient,
		private router: Router
	) { }

	async loadToken() {
		const token = await Storage.get({ key: ACCESS_TOKEN_KEY});
		if (token && token.value) {
			this.currentAccessToken = token.value;
			this.isAuthenticated.next(true);
		} else {
			this.isAuthenticated.next(false);
		}
	}

	login(credentials: {username: string, password: string}): Observable<any>{
		return this.http.post<any>(`${this.urllogin}`, credentials).pipe(
			switchMap((tokens: {accessToken: any, refreshToken: any, userData: any}) => {
				this.currentAccessToken = tokens.accessToken;
				const storeAccess = Storage.set({key: ACCESS_TOKEN_KEY, value: tokens.accessToken});
				const storeRefresh = Storage.set({key: REFRESH_TOKEN_KEY, value: tokens.refreshToken});
				const storeUserData = Storage.set({key: USER_DATA_KEY, value: tokens.userData});
				return from(Promise.all([storeAccess, storeRefresh, storeUserData]));
			}), tap ( _ => {
				this.isAuthenticated.next(true);
			})
		);
	}

	async removeItem(key: string) {
        await Storage.remove({ key });
    }

	async clear() {
        await Storage.clear();
    }


}
