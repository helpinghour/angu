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

  constructor( private allCatgories: BrandsService, private allBrandData: BrandsService){

    this.allCatgories.allCat().subscribe( (response:any) => {
      this.allCatgoriesData = response.categories;
    })


  }

  ngOnInit(): void{
    this.getBrands();
  }

  getBrands(): void{
      this.allBrandData.getAllBrands( this.currentPage, this.perPage ).subscribe( (response:any) => {
      this.allBrandsData = response.stores;
      this.brandsCount = response.total_stores;
      this.allBrandsAre = response.stores;
    })
  }

  getNumeric(filter: any){ //for numeric filters
    this.currentPage = 0;
    this.filter = filter;
    this.getBrands();
  }

  onBrandPageChange( event: any){
    this.currentPage = event - 1;
    this.getBrands();
  }

}
