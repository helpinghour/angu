import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  
  private couponsHome = "https://adscombined.com/v1/public/api/FilterCoupons?filter=Coupon&Page=0&PerPage=15&Filter=Coupon";
  
  constructor( private coupons: HttpClient ) { }

  getHomeCoupon(){
    return this.coupons.get(this.couponsHome);
  }

}
