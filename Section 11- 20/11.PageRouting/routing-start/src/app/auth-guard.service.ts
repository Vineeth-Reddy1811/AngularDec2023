import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard  implements CanActivateChild{

    next : ActivatedRouteSnapshot;
//Here CanActivate interface is depreciated, Hence we use INjectable.
    constructor(private authService : AuthService,
            private router : Router){}

    canActivate(next:ActivatedRouteSnapshot, 
        state: RouterStateSnapshot) : 
         Observable<boolean> | Promise<boolean> | boolean {

       return this.authService.isAuthenticated()
            .then(
                (authenticated : boolean) => {
                    if(authenticated){
                        return true;
                    } else { 
                        this.router.navigate(['/']);
                        return false;
                    }
                }
            ); 
        }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(this.next, state);
    }
}

// This is where we can see if we are logged in and reroute if we are not loggedin.