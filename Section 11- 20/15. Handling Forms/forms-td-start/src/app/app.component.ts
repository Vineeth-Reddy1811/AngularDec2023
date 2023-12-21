import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

defaultQuestion = 'pet';
answer = '';
genders = ['male', 'female'];

user = {
  username : '',
  email : '',
  secretQuestion : '',
  answer : '',
  gender : ''
}

Submiited = false; 

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username : suggestedName
      } 
    })
  }

//   onSubmit(form : NgForm){
//     console.log(form)
//   }
@ViewChild('f') signupForm: NgForm;
onSubmit(){
  this.Submiited = true;
  this.user.username = this.signupForm.value.userData.username;
  this.user.email = this.signupForm.value.userData.email;
  this.user.secretQuestion = this.signupForm.value.secret;
  this.user.answer = this.signupForm.value.questionAnswer;
  this.user.gender = this.signupForm.value.gender;

  // this.signupForm.reset();

  console.log(this.signupForm)

}

}
