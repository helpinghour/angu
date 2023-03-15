import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RetailersService {
  allCatURL = "https://adscombined.com/v1/public/api/AllCategories";
  allRetailers = "https://adscombined.com/v1/public/api/AllStores?Type=Retailer&Page=0&PerPage=60&Filter=";
  apiUrl = "https://adscombined.com/v1/public/api/AllStores";

  constructor( private allRetail: HttpClient, private retailerData: HttpClient, private http:HttpClient ) { }

  allCat(){
    return this.retailerData.get(this.allCatURL);
  }
  
  allRetails(){
    return this.allRetail.get(this.allRetailers);
  }

  getAllRetailers( page: number, perPage: number ): Observable<any>{
    const params = {
      Type: 'Retailer',
      Page: page.toString(),
      PerPage: perPage.toString(),
      Filter: ''
    }
    return this.http.get( this.apiUrl, {params} );

  }

}
