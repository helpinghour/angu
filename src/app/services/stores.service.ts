
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class StoresService {

  storeUrlIs = "https://adscombined.com/v1/public/api/AllStores?Type=Store&Page=0&PerPage=60&Filter=";
  allCategor = "https://adscombined.com/v1/public/api/AllCategories";

  constructor( private stores: HttpClient, private catgor: HttpClient) { }
  
  storesInfo(){ 
     return this.stores.get(this.storeUrlIs);
  }
  allCategories(){
    return this.catgor.get(this.allCategor);
  }

}
