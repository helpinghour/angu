import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  allCoupns = "https://adscombined.com/v1/public/api/FilterCoupons";

  constructor( private allCoupons: HttpClient, private allCounts: HttpClient) { }

  getAllCoup( currentPage: number, filter: any ): Observable<any>{

    this.allCoupns = "https://adscombined.com/v1/public/api/FilterCoupons?Filter="+filter+"&SubType=&Page="+currentPage+"&PerPage=60";
    return this.allCoupons.post( this.allCoupns, {} );
    
  }
  getTotalCounts(): Observable<any>{
    this.allCoupns = "https://adscombined.com/v1/public/api/FilterCoupons?Filter=all&SubType=&Page=0&PerPage=60";
    return this.allCounts.post( this.allCoupns, {} );
  }

}
