import { NgModule } from "@angular/core";
import { ShoopingListComponent } from "./shooping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({

    declarations: [
        ShoopingListComponent,
        ShoppingEditComponent,
    ],

    imports : [
        FormsModule,
        RouterModule.forChild([
            {path : 'shoppingList', component: ShoopingListComponent},
        ]),
        SharedModule
    ]
})
export class ShoppingListModule{

}