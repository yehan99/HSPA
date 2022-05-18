
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/model/user';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: User ;
  durationInSeconds = 5 ;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  userSubmitted : boolean;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private _snackBar: MatSnackBar,) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      cpassword: [null, Validators.required],
      mobile: [null, Validators.required],
    });
  }

  onSubmit() {
    this.userSubmitted = true ;
    console.log(this.registrationForm);
    if (this.registrationForm.valid) {
      this.user = Object.assign(this.user, this.registrationForm.value);
      localStorage.setItem('Users', JSON.stringify(this.user));
      this.openSnackBarSuc();
      this.userService.addUser(this.user);
      this.registrationForm.reset();
      this.registrationForm.markAsUntouched();
    }

  }

  userData(): User{
    return this.user = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  get name(){
    return this.registrationForm.get('name') as FormControl ;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl ;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl ;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl ;
  }

  openSnackBarSuc() {
    this._snackBar.open("Registration Successful", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['green-snackbar']
    });
  }
  openSnackBarUn() {
    this._snackBar.open("Registration Failed", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['red-snackbar']
    });
  }
  openSnackBarCancel() {
    this._snackBar.open("Successfully Cancel", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['green-snackbar']
    });
  }

  onCancel(){
    this.registrationForm.reset();
    this.openSnackBarCancel()
  }

}
