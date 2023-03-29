import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltercouponsService {
  catCatCountAPI = "https://adscombined.com/v1/public/api/CategoryCounts";
  catCoupsAPI = "https://adscombined.com/v1/public/api/CategoryCoupons";
  allCatAPI = "https://adscombined.com/v1/public/api/AllCategories";


  constructor( private catCount: HttpClient, private catCoup: HttpClient) { }

  getCatCount(catgoryFilter: any){
    this.catCatCountAPI = "https://adscombined.com/v1/public/api/CategoryCounts?category="+catgoryFilter;
    return this.catCount.post(this.catCatCountAPI, {});
  }
  getCatCoups(catgoryFilter: any, currentPage: number, filter: string){
    this.catCoupsAPI = "https://adscombined.com/v1/public/api/CategoryCoupons?category="+catgoryFilter+"&Page="+currentPage+"&PerPage=60&Filter="+filter+"&SubType=";
    return this.catCoup.get(this.catCoupsAPI, {});
  }


}
