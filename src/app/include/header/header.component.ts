import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  affCoupns:any;

  constructor( private getCoup: HeaderService){
    this.getCoup.getCoupData().subscribe( (data:any) =>{
      this.affCoupns = data;   
      console.log(this.affCoupns);
    })
  }
}
