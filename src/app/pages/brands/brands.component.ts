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

  page: number = 0;
  perPage: number = 60;

  constructor( private allCatgories: BrandsService, private allBrandData: BrandsService){

    this.allCatgories.allCat().subscribe( (response:any) => {
      this.allCatgoriesData = response.categories;
    })


  }

  ngOnInit(): void{
    this.getBrands();
  }

  getBrands(): void{
      this.allBrandData.getAllBrands( this.page, this.perPage ).subscribe( (response:any) => {
      this.allBrandsData = response.stores;
      this.brandsCount = response.total_stores;
      this.allBrandsAre = response.stores;
    })
  }
  onBrandPageChange( event: any){
    this.page = event;
    this.getBrands();
  }

}
