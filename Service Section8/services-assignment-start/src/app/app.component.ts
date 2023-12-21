import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './userService.service';
import { CounterService } from './counterService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ UserService]
})
export class AppComponent implements OnInit{

  
  activeUsers = [];
  inactiveUsers = [];
  @Input() count:number;
  constructor(private userService : UserService, private counterService: CounterService){
  }

  ngOnInit(){

    this.count = this.counterService.count;
    }

  
}
