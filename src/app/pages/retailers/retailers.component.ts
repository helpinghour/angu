import { Component } from '@angular/core';
import { response } from 'express';
import { RetailersService } from 'src/app/services/retailers.service';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.css']
})
export class RetailersComponent {
  storesCount: any;
  allRetailData: any;
  allRetailCat: any;
  allRetailersData: any;

  page: number = 0;
  perPage: number = 60;
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor( private retailData: RetailersService, private retailsCat:RetailersService, private retailersData: RetailersService){

    this.retailData.allRetails().subscribe( (response:any) =>{
      this.allRetailData = response.stores;
      this.storesCount = response.total_stores;
    })
    this.retailsCat.allCat().subscribe( (response:any) =>{
      this.allRetailCat = response.categories;
    })
 
  }

  ngOnInit(): void{
    this.getRetailsers();
  }

  getRetailsers(): void{
    this.retailersData.getAllRetailers( this.page, this.perPage ).subscribe( (response:any) =>{
      this.allRetailersData = response.stores;
      // console.log(this.allRetailersData);
    })
  }
  onRetailerPageChange( event: any){
    this.page = event;
    this.getRetailsers();
  }

}
