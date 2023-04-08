import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  searchR:any;
  coupFilter:any;

  constructor( private route: ActivatedRoute ){
  }
  
  ngOnInit(): void{

  }

  
  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.coupFilter = params.get('coupFilter');
  //     console.log(this.coupFilter);
  //   });
  // }


}
