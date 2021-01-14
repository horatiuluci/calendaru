import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthentificated: boolean = false;
  private _secretToken: string = '';

  get userIsAuthenticated() {
    return this._userIsAuthentificated;
  }

  get token() {
    return this._secretToken;
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(username, password) {
    this.http
      .post<any>(environment.apiUrl + '/login', {username: username, password: password})
      .subscribe(
        (data) => {
          if (data) {
            this._secretToken = data.accessToken as string;
            this._userIsAuthentificated = true;
            this.router.navigateByUrl('/events');
          }
        },
        (error) => console.log(error)
      );
  }

  logout(){
    this._userIsAuthentificated = false;
    this._secretToken = '';
    this.router.navigateByUrl('/');
  }
}
