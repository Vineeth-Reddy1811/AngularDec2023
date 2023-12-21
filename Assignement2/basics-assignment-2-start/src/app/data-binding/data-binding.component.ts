import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
username = " "
allowReset = false

constructor(){
}

  emptyString() {
    this.username = "";
}

}

