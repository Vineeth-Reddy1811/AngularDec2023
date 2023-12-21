import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrl: './shooping-list.component.css',
})
export class ShoopingListComponent implements OnInit, OnDestroy {

  ingredients : Ingredient[] ;
  private subscription : Subscription;

  constructor(private slService: ShoppingListService){

  }

  ngOnInit(): void {
   this.ingredients = this.slService.getIngredients();
   this.subscription =  this.slService.ingredientsChanged
      .subscribe(
          (ingredients : Ingredient[]) => {
            this.ingredients = ingredients;
          }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onEditItem(index : number){
    this.slService.startedEditing.next(index);
  }
}



  //   new Ingredient('apples', 5), 
  //   new Ingredient('Tomatos', 10), 
  //   new Ingredient('Banana', 3)
  // ];

  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }
