import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  allCatgoriesData: any;
  allBrandsData: any;
  brandsCount: any;
  allBrandsAre: any;
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  currentPage = 0;
  perPage: number = 60;
  filter:any;
  selectedCategory: any;
  pCat:any = "";
  sCat:any = "";

  constructor( private allCatgories: BrandsService, private allBrandData: BrandsService){

    this.allCatgories.allCat().subscribe( (response:any) => {
      this.allCatgoriesData = response.categories;
    })


  }

  ngOnInit(): void{
    this.getBrands();
  }

  getBrands(): void{
      this.allBrandData.getAllBrands( this.currentPage, this.perPage, this.filter, this.pCat, this.sCat ).subscribe( (response:any) => {
      this.allBrandsData = response.stores;
      this.brandsCount = response.total_stores;
      this.allBrandsAre = response.stores;
    })
  }

  getNumeric(filter: any){ //for numeric filters
    this.filter = filter;
    this.getBrands();
  }
  getAllBrands(){
    this.filter = "";
    this.getBrands();
  }
  getAlpha(filter:any){
    this.currentPage = 0;
    this.filter = filter;
    this.getBrands();
  }

  filterPCat(filterPCat:any){ // to filter child categories (SubCategory)
    this.currentPage = 0
      this.sCat = "";
      this.filter = "";
      this.pCat = filterPCat;
    this.getBrands();
  }
  filterSCat(filterSCat:any){ // to filter child categories (SubCategory)
    this.currentPage = 0
    this.sCat = filterSCat;
    this.getBrands();
  }

  onBrandPageChange( event: any){
    this.currentPage = event - 1;
    this.getBrands();
  }

}
