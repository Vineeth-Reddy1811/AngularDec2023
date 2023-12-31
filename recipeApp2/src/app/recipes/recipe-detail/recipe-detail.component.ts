import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe: Recipe;
  id :number;

  constructor(private recipeService : RecipeService, 
    private route : ActivatedRoute,
    private router : Router){}

    ngOnInit(){
      const id = this.route.params  
                    .subscribe(
                      (params : Params) => {
                          this.id = +params['id'];
                         this.recipe =  this.recipeService.getRecipe(this.id);
                      }
                    );
    }
    onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo: this.route})

    }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
