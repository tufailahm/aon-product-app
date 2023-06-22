import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree }
  from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate {

  //DI
  constructor(public router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("1.### Product Guard called");
    //call rest api - un and password
    //if not authorized
   //  return this.router.navigate(['/aboutus']);
   return true;
  }

}
