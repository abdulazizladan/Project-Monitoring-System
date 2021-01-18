import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl : string = "./assets/user.json";

  constructor( private _http : HttpClient ){ 
  }

  login(loginData : user){
    return this._http.get<any>(this.loginUrl);
  }

}
