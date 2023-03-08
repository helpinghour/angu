import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AllcountsService {

  private allCountUrl = "https://adscombined.com/v1/public/api/AllCounts";
  
  constructor( private allcount: HttpClient ) { }

  getAllCounts(){
    return this.allcount.get(this.allCountUrl);
  }

}
