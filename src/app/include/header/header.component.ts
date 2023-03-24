import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchR:any;

  constructor( private search: HeaderService){
    this.search.getSearchReuslts().subscribe( (data:any) =>{
      // this.searchR = data;
    })
  }
}
