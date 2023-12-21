import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../userService.service';
import { CounterService } from '../counterService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();


  constructor(private userService : UserService, private counterService:CounterService){

  }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.userService.userSetToInactive.emit(id);
    this.counterService.logCount(this.counterService.count++);
    this.userService.setInactive(id);
  }
}
