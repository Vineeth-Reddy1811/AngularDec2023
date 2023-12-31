import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { UserComponent } from "./users/user/user.component";
import { ServerComponent } from "./servers/server/server.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
    { path : '' , component : HomeComponent }, 
    { path : 'users' , component : UsersComponent,children: [
      { path : ':id/:name' , component : UserComponent },
  
    ] },//localhost:4200/user
    { path : 'servers' , 
    // canActivate: [AuthGuard],
    canActivateChild : [AuthGuard],
    component : ServersComponent,
        children : [
      { path : ':id' , component : ServerComponent },
      { path : ':id/edit' , component : EditServerComponent,
                     canDeactivate: [CanDeactivateGuard] }
    ] },


    // { path : 'not-found', component : PageNotFoundComponent},
    { path : 'not-found', component : ErrorPageComponent, data : {message: 'Page not Found!'}},
    { path : '**', redirectTo : '/not-found'} 
      //Make sure its last one as it catches everything else.
  
  ];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [RouterModule ]
})
export class AppRoutingModule{

}