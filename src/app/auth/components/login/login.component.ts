import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  readonly loginForm  : FormGroup;

  constructor(private fb : FormBuilder, private _auth : AuthService){ 
    this.loginForm = this.fb.group({
    email : ['', [
      Validators.email
    ]],
    password : ['', [
      Validators.required
    ]]
  });
  }

  login(){
    this._auth.login(this.loginForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Inable to login")
      }    
    )
  }

  ngOnInit(): void {
  }

}
