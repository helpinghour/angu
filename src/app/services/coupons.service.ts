import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  allCoupns = "https://adscombined.com/v1/public/api/FilterCoupons";

  constructor( private allCoupons: HttpClient) { }

  getAllCoup( currentPage: number, filter: any ): Observable<any>{

    this.allCoupns = "https://adscombined.com/v1/public/api/FilterCoupons?Filter="+filter+"&SubType=&Page="+currentPage+"&PerPage=60";
    return this.allCoupons.post( this.allCoupns, {} );
    
  }

}
