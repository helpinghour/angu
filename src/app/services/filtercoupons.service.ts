import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltercouponsService {
  catCoupsCountAPI = "https://adscombined.com/v1/public/api/CategoryCounts";
  catCoupsAPI = "https://adscombined.com/v1/public/api/CategoryCoupons";

  constructor( private catCoupCoun: HttpClient) { 
    
  }

  getCoupsCount(){

  }


}
