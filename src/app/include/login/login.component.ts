import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  

  constructor ( private authSerivce: AuthenticateService, private router: Router){};

  getLoginForm(data: {email: string, password: any }){
    this.authSerivce.loginUser(data).subscribe( (response) =>{
      
      this.responseIs = response;
      if(this.responseIs.error){
        this.responseMsg = this.responseIs.error;
        console.log(this.responseMsg);
      }else{
        console.log(response);

         // User is authenticated, save the token to local storage
         localStorage.setItem('token', this.responseIs.user.token);

        // User is authenticated, redirect to another page
        this.router.navigate(['/stores']);
        
      }

    })
  }
  

}
