import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  allCoupns = "https://adscombined.com/v1/public/api/FilterCoupons";

  constructor( private allCoupons: HttpClient) { }

  getAllCoup( page: number ): Observable<any>{
    this.allCoupns = "https://adscombined.com/v1/public/api/FilterCoupons?Filter=all&SubType=&Page="+page+"&PerPage=60";
    return this.allCoupons.post( this.allCoupns, {} );
    
  }

}
