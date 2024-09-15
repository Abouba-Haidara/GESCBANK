import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
   singInForm!: FormGroup;
   submitted =  false;
   isSuccessed = false;
  constructor( private formBuilder: FormBuilder, private router: Router){}
  
ngOnInit(): void {
  this.singInForm= this.formBuilder.group({
    username: ['', [ Validators.required,]],
    password: ['', [ Validators.required,]],
    remberMe: ['', []]
   })
  }

  get fb():any { return this.singInForm.controls; }

onSubmit() {
  this.submitted=true;
  if(this.singInForm.invalid){
      return;
  }else{
    // do logic here
    this.router.navigateByUrl('/home');
  }
 }
}
