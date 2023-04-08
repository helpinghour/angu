import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private regURL = "https://adscombined.com/v1/public/api/register?";
  private logURL = "https://adscombined.com/v1/public/api/login?"

  constructor( private userAuth: HttpClient ) { }

  registerUser(data:any){
    return this.userAuth.post(this.regURL, data);
  }
  loginUser(data:any){
    return this.userAuth.post(this.logURL, data);
  }
   
}
