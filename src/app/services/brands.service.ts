import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  allCats = "https://adscombined.com/v1/public/api/AllCategories";
  allBrand = "https://adscombined.com/v1/public/api/AllStores?Type=Brand&Page=0&PerPage=60&Filter=";
  apiUrl = "https://adscombined.com/v1/public/api/AllStores";

  constructor( private allcat: HttpClient, private allbrand: HttpClient, private http: HttpClient) { }
  allCat(){
    return this.allcat.get(this.allCats);
  }
  allBrands(){
    return this.allbrand.get(this.allBrand);
  }

  getAllBrands( page: number, perPage: number ): Observable<any>{
    const params = {
      Type: 'Brand',
      Page: page.toString(),
      PerPage: perPage.toString(),
      Filter: ''
    }
    return this.http.get( this.apiUrl, {params})

  }
}
