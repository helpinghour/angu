import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerCoup = "https://adscombined.com/v1/public/api/FilterCoupons?Filter=all&SubType=&Page=0&PerPage=60"
  searchAPI = "https://adscombined.com/v1/public/api/SearchKeywordsList";

  constructor( private coups: HttpClient ) {   }
  
  getCoupData(){
    return  this.coups.post( this.headerCoup, {});
  }
  getSearchReuslts(){
    
  }

}

