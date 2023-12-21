import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  trigger : [
    trigger('divState', [
      state('normal', style({
          'background-color' : 'red',
          transform  : 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor : 'blue',                 //better to use same type of property
        transform : 'translateX(100)'
      })),
      transition('normal => highlighted', animate(300)),   //300 is the milliseconds we take
      transition('highlighted => normal', animate(800))   //300 is the milliseconds we take

    ])
  ]

  trigger : [
    trigger('wildState', [
      state('normal', style({
          'background-color' : 'red',
          transform  : 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor : 'blue',                 //better to use same type of property
        transform : 'translateX(100)'
      })),
      state('shrunked', style({
        'background-color' : 'green',
        transform : 'trasnlateX(0) scale(0.5)'
      }))
      transition('normal => highlighted', animate(300)),   //300 is the milliseconds we take
      transition('highlighted => normal', animate(800)),  
      transition('shrunken <=> *', [
        style({                           //First phase wiht no animation
          'background-color' : 'orange'
        }),
        animate (1000 , style({           //middle phase iwth animaition.
          borderRadius : '50px'
        })),
        animate(500)                      // end state with no style
      ]
      )
    ])
  ]


  trigger : [
    trigger('List1', [
      state('in', style({
          opacity : 1,
          transform  : 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor : 'blue',                
        transform : 'translateX(100)'
      })),
      transition('void => *', [
        style({
          opacity : 0,
          transform  : 'translateX(-100px)'
        })
        animate(300)
      ]),  


    ])
  ]

})
export class AppComponent {
  state : 'normal'
  wildState = 'normal'
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate(){
    this.state =='normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState =='normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';

  }

  onShrink(){
    this.wildState = 'shrunken';
  }

    onAdd(item) {
      this.list.push(item);
    }
}
