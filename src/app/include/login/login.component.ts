import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  responseIs:any;
  responseMsg:any;
  loginSucksess:any;
  flag: boolean = false;

  constructor ( private authSerivce: AuthenticateService){};

  getLoginForm(data: {email: string, password: any }){
    this.authSerivce.loginUser(data).subscribe( (response) =>{
      
      this.responseIs = response;
      if(this.responseIs.error){
        this.responseMsg = this.responseIs.error;
        console.log(this.responseMsg);
      }else{
        
      }

    })
  }

}
