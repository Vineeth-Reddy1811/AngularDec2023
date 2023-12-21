import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // incrementedArray = [];
  // testingnumber = 123;

  oddNumbers: number[] = [];
  evenNumbers:number[] = [] ;

  onIntervalFired(firedNumber: number){

    if(firedNumber %2 == 0){
      this.evenNumbers.push(firedNumber);
    }
    else{
      this.oddNumbers.push(firedNumber);
    }

    console.log(firedNumber);
    // this.testingnumber=increment;
    // this.incrementedArray.push(increment);
    // console.log('Hey' + this.incrementedArray)
  }


  onStopped(){

  }
}