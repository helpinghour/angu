import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  searchR:any;
  coupFilter:any;

  constructor( private route: ActivatedRoute, private router: Router ){ }
  isLoggedIn: boolean = false;
  
  
  ngOnInit(): void{
    const token = localStorage.getItem('token');
    if(token){
      // User is logged in
      console.log('User is logged in');
      this.isLoggedIn = true;
      // you can also set a boolean variable to true to use it in the template for showing/hiding certain elements
    }
  }

  
  

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }


}
