import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit{

  interval;         //like index.
  lastNumber = 0;

 @Output() intervalFired = new EventEmitter<number>();  // Creating event emmitter object, and @Output means the even is catchable outside the component.

  ngOnInit(): void {
 
  }

  onStart(){
   
    this.interval = setInterval( ()=>{
      this.intervalFired.emit(this.lastNumber + 1);           // Emit 1 first time
      this.lastNumber++;                                      // Increment the number 
    },1000);                                                  // for every second.
    
  }

  onStop(){
    if(this.interval){                  //Stopping the Server.
      clearInterval(this.interval);
    }
  }


}