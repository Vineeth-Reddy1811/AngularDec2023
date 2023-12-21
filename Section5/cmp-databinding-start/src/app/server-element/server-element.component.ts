import { AfterContentInit, Component, DoCheck, Input,
  
  OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit{

  @Input('srvElement') element : {type:string, name:string, content:string};


  constructor() {
    console.log('constructor log');
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log('onChanges log')
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit log');
  }

  ngDoCheck(){
    console.log('ngDoCheck log');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit log');
  }
  }



