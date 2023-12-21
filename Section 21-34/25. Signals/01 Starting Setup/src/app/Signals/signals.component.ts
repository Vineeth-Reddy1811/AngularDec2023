import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  // actions: string[] = [];
  // counter = 0;
  actions = signal<string[]>([]);     //array of string.
  counter = signal(0);

  increment() {
    // this.counter++;
    // this.counter.update(  (oldCounter)=> oldCounter + 1 );
    this.counter.set(5); //just give the new value
    this.counter.set( this.counter() + 1); // To get old value using set.
  
    this.actions.mutate( (oldValue) => oldValue.push('Increment'))
    // this.actions.push('INCREMENT');
  }

  decrement() {
    // this.counter--;
    this.counter.update(  (oldCounter)=> oldCounter - 1 );
    this.actions.update( (oldValue) => [...oldValue, 'Decrement' ]);

    // this.actions.push('DECREMENT');
  }
}
