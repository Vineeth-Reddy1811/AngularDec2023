import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit,OnDestroy {
//  @Output() recipeWasSelected = new EventEmitter<Recipe>()
//;Cus of emmiter we added in Recipe.service-->
  recipes : Recipe[];
  subscription :Subscription

  constructor(private recipeSercice : RecipeService,
    private router : Router,
    private route : ActivatedRoute){}

  ngOnInit(){
    this.subscription = this.recipeSercice.recipesChanged
          .subscribe(
            (recipes : Recipe[]) => {
              this.recipes = recipes;
            }
          );
    this.recipes = this.recipeSercice.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'] , {relativeTo: this.route});

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // onRecipeSelected(recipe:Recipe){
  //   this.recipeWasSelected.emit(recipe)
  // } Cus of emmiter we added in Recipe.service-->

}
