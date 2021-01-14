import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) 
  {}

  canActivate() {
      if(!this.authService.userIsAuthenticated){
        this.router.navigateByUrl('/auth');
      }
      return this.authService.userIsAuthenticated;
  }

  canLoad() {
    if(!this.authService.userIsAuthenticated){
      this.router.navigateByUrl('/auth');
    }
    return this.authService.userIsAuthenticated;
  }
}
