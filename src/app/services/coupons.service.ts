import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  couponsAPI = "https://adscombined.com/v1/public/api/FilterCoupons?Filter=all&SubType=&Page=0&PerPage=60";
  allCoupns = "https://adscombined.com/v1/public/api/FilterCoupons";

  constructor( private coup: HttpClient, private allCoupons: HttpClient) { }

  allCoup(){
    return this.coup.post( this.couponsAPI, {});
  }


  getAllCoup( page: number ): Observable<any>{
    this.allCoupns = "https://adscombined.com/v1/public/api/FilterCoupons?Filter=all&SubType=&Page="+page+"&PerPage=60";
    return this.allCoupons.post( this.allCoupns, {} );
    
  }

}
