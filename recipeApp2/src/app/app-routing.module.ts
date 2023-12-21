import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const appRoutes : Routes = [
    {path : '', redirectTo : '/recipes', pathMatch: "full"},
    {path : 'recipes',
    loadChildren : () => import('./recipes/recipes.module').then(module => module.RecipesModule)}
];
@NgModule({
     imports : [ RouterModule.forRoot(appRoutes, 
                        {preloadingStrategy: PreloadAllModules}
                        )],

     exports : [RouterModule] 
})
export class AppRoutingModule{

}