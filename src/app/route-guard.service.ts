import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) /* valore dello snapshot di quando viene attivato */
  {
    if (this.auth.isUserLoggedIn() == false) { /* se non è loggato */
      this.router.navigate(['login'])
    }  /* altrimenti viene reindirizzato al login */
    return true; /* essendo true, la Guard non impedisce l'accesso al modulo, per cui verrà caricato */

  }
}
