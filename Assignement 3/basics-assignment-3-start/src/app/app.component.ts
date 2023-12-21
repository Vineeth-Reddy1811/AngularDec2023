import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
  }

  showData = true;
  counter = 0
  datalogs = []


  onAddingData(){
    this.datalogs.push(this.counter++);
  }

  addBlue(){
    if(this.counter>5){
      return "seablue"
    }
  }


}
