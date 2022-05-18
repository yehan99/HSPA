import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userSubmitted: boolean ;
  constructor(private fb: FormBuilder,
              private authservice : AuthService) { }

  ngOnInit(): void {
    this.createForm() ;
  }

  createForm(){
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],

    })
  }

  onSubmit(){
    console.log(this.loginForm);
    const user = this.authservice.authUser(this.loginForm.value);
    if(user){
      console.log('Login Successfull')
    }
    else{
      console.log('Login failed')
    }
  }

  onCancel(){

  }


}
