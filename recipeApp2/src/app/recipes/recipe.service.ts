import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shooping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();

  //  private recipes : Recipe[] = [
  //       new Recipe('A Test recipe', 'this is a test description', 
  //       'https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg',
  //       [
  //         new Ingredient('Meat', 1), 
  //         new Ingredient('French Fries', 20)

  //       ]),
  //       new Recipe('Another Test recipe', 'this is another test description', 'https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg',
  //      [ new Ingredient('Buns', 2), 
  //       new Ingredient('Meat', 1)
  //      ])
  //     ];

    private recipes: Recipe[] = [];

      constructor(private slService: ShoppingListService){
      }

      getRecipes(){
        return this.recipes.slice();     //Just to get a copy of 
                                        // the array and not oroginal reference.    
      }

      getRecipe(index:number){
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index : number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

      }

      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }

      setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }


}