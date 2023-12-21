import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../userService.service';
import { CounterService } from '../counterService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private userService : UserService, private counterService : CounterService ){

  }
  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToActive(id: number) {
    this.userService.userSetToActive.emit(id);
    this.userService.setActive(id);
    this.counterService.logCount(this.counterService.count++);
  }
}
