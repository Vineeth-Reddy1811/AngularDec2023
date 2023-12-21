import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, authReponseData } from './auth.service';
import { error } from 'console';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnDestroy {
isLoginMode = true;
isLoading = false;
error : string = null;

@ViewChild(PlaceholderDirective, {static: false}) alertHost : PlaceholderDirective

constructor(private authService : AuthService, 
  private router : Router,
  private componentFactoryResolver : ComponentFactoryResolver){
}
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }
onSwitchMode(){
  this.isLoginMode = !this.isLoginMode;
}

onSubmit(form : NgForm){
if(!form.valid){
  return;
}
  const email = form.value.email;
  const password = form.value.password;

  let authObs : Observable<authReponseData>;
  this.isLoading = true
  if(this.isLoginMode){
    authObs = this.authService.login(email,password)
  }
  
  else {
   authObs = this.authService.signup(email,password)
  }
  authObs.subscribe( resData => {
    console.log(resData);
    this.isLoading = false;
    this.router.navigate(['/recipes']);
  }, 
  
  errorMessage => {
    console.log(errorMessage);
    this.error = errorMessage;
    this.showErrorAlert(errorMessage);
    this.isLoading = false;
  });   // this is redudnet code for if and else block, hence we write it like this .
  form.reset();
}

onHandleError(){
  this.error = null;
}

private closeSub : Subscription;

private showErrorAlert(message : string) {
    const alertComponentFactory 
    = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.message= message;
    this.closeSub = componentRef.instance.close.subscribe( () => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
} 
}
