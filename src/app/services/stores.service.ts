import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class StoresService {

  storeUrlIs = "https://adscombined.com/v1/public/api/AllStores?Type=Store&Page=0&PerPage=60&Filter=";
  allCategor = "https://adscombined.com/v1/public/api/AllCategories";
  apiUrl = 'https://adscombined.com/v1/public/api/AllStores';
  
  constructor( private stores: HttpClient, private catgor: HttpClient, private http: HttpClient) { }
  
  
  storesInfo(){ 
     return this.stores.get(this.storeUrlIs);
  }
  allCategories(){
    return this.catgor.get(this.allCategor);
  }

  getStores(page: number, perPage: number): Observable<any> {
    const params = {
      Type: 'Store',
      Page: page.toString(),
      PerPage: perPage.toString(),
      Filter: ''
    };
    console.log(params);
    return this.http.get<any>(this.apiUrl, { params });
  }



}
