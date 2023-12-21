import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class UserService{

    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

   // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
userSetToInactive = new EventEmitter<number>();

userSetToActive = new EventEmitter<number>();

setActive( id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1)
}

setInactive(id:number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1)
}

}