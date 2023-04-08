import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // formData: any = {};
  responseIs:any;
  responseMsg:any;
  nameErr:any;
  emailErr:any;
  passErr:any;
  c_passErr:any;
  registerSucksess:any;

  constructor(private authService: AuthenticateService) { }

  getRegisterForm(data: {name: string, email: string, password: any }){
    
    this.authService.registerUser(data).subscribe( response => {
      
      this.responseIs = response;

      if(this.responseIs.error){

        this.responseMsg = this.responseIs.error;
        this.nameErr = this.responseMsg.name;
        this.emailErr = this.responseMsg.email;
        this.passErr = this.responseMsg.password;
        this.c_passErr = this.responseMsg.c_password;
       
        console.log(this.nameErr, this.emailErr, this.passErr, this.c_passErr);

      }else{
        
        this.registerSucksess = this.responseIs.success;
        console.log(this.responseMsg);

      }
      

      })
    

  }


  // onSubmit(formData: any) {
  //   this.authService.registerUser(formData)
  //     .subscribe({
  //       next: response => console.log(response),
  //       error: error => console.log(error)
  //     });
  // }
  

}
