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

  currentPage = 0;
  perPage: number = 60;
  filter: any = "";
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  selectedCategory: any;
  pCat:any = "";
  sCat:any = "";

  constructor( private retailsCat:RetailersService, private retailersData: RetailersService){

    this.retailsCat.allCat().subscribe( (response:any) =>{
      this.allRetailCat = response.categories;
    })
 
  }

  ngOnInit(): void{
    this.getRetailsers();
  }

  getRetailsers(): void{
    this.retailersData.getAllRetailers( this.currentPage, this.perPage, this.filter, this.pCat, this.sCat ).subscribe( (response:any) =>{
      this.allRetailData = response.stores;
      this.storesCount = response.total_stores;

    })
  }

  getAllStor(){
    this.filter = "";
    this.getRetailsers();
  }
  getNumeric(filter:any){
    this.filter = filter;
    this.getRetailsers();
  }

  getAlpha(filter:any){
    this.filter = filter;
    this.getRetailsers();
  }

  filterPCat(filterPCat:any){ // to filter Parent category (Category)
    this.currentPage = 0
    this.sCat = "";
    this.filter = "";
    this.pCat = filterPCat;
    this.getRetailsers();
  }

  filterSCat(filterSCat:any){ // to filter child categories (SubCategory)
    this.currentPage = 0
    this.sCat = filterSCat;
    this.getRetailsers();
  }

  onRetailerPageChange( event: any){
    this.currentPage = event - 1;
    this.getRetailsers();
  }

}
