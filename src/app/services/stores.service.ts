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
  
  constructor( private catgor: HttpClient, private http: HttpClient) { }
  
  
  allCategories(){
    return this.catgor.get(this.allCategor);
  }
  
  getAllStores(page: number, perPage: number): Observable<any>{
    const params = {
      Type: 'Store',
      Page: page.toString(),
      PerPage: perPage.toString(),
      Filter: ''
    }
    return this.http.get(this.apiUrl, {params} );
  }

}
