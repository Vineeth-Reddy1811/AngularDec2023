import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class CounterService{

    count = 1;

    countEvent = new EventEmitter<number>();

    logCount(count:number){
        console.log('Counter is' + count );
        this.countEvent.emit(count++);

    }



}