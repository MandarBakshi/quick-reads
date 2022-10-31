import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiAuthService } from 'src/app/services/apiAuth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private sub?: Subscription;
  public loginForm?: FormGroup;
  // public msg?: string;

  

  constructor(private fb: FormBuilder, 
    private snackBar: MatSnackBar, 
    private apiauth: ApiAuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.InitializeLoginForm();
  }

  get Username() {
    return this.loginForm?.get('username');
  }

  get Password() {
    return this.loginForm?.get('password');
  }

  InitializeLoginForm(): void {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
  }


  OpenSnackBar() {
    this.snackBar.open(
      'Incorrect credentials',
      'OK',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }

  OnSubmitLoginForm(): void {
    console.log(this.loginForm?.value);
    this.sub = this.apiauth.LoginProcess(this.loginForm?.value).subscribe(
      {
        next: res => {
          console.log(res);
          if (res === null) {
            this.OpenSnackBar();
          } else {
            this.apiauth.SetUsername(res['username']);
            this.router.navigateByUrl('/');
          }
        },
        error: err => {
          console.log("An error occurred...",err);
        }
      }
    )
    
  }

}
