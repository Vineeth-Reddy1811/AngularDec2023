//USed of HTTP functionality
// we use Injectable to use the the HTTP CLient
import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{

    constructor(private http : HttpClient, 
                private recipesService: RecipeService,
                private authService : AuthService) {
        
    }

    storeRecipes( ){
        const recipes = this.recipesService.getRecipes();
        this.http.put
        ('https://ng-course-recipe-book-12c48-default-rtdb.asia-southeast1.firebasedatabase.app/.json'
        , recipes)
        .subscribe( response => {
            console.log(response)
        });

    }

    fetchRecipes(){
        return this.http.
        get<Recipe[]>
        ('https://ng-course-recipe-book-12c48-default-rtdb.asia-southeast1.firebasedatabase.app/.json',)
        .pipe( 
     map( recipes => {
        return recipes.map(recipes => {
            return {...recipes, ingredients : recipes.ingredients ? recipes.ingredients : []
            };
        });
    }),
    tap(recipes => {
        this.recipesService.setRecipes(recipes);
    })
    );

        // .subscribe( recipes => {
        //    this.recipesService.setRecipes(recipes);
        // });
    }

}