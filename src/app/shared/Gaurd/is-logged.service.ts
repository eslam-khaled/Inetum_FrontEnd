import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogInService } from 'src/app/Services/log-in.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService implements CanActivate {

  constructor(private route: Router, private loginService: LogInService) { }

  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.CheckLogin();
  }
  CheckLogin(): boolean {
    if (this.loginService.isLogged()) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
