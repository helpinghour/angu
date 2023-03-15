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

  constructor( private retailData: RetailersService, private retailsCat:RetailersService, private retailersData: RetailersService){

    this.retailData.allRetails().subscribe( (data:any) =>{
      this.allRetailData = data.stores;
      this.storesCount = data.total_stores;
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
