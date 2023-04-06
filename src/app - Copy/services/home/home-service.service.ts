import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HomeServiceService {
  
  couponsHome = "https://adscombined.com/v1/public/api/FilterCoupons?filter=Coupon&Page=0&PerPage=15&Filter=Coupon";
  cashbackHome = "https://adscombined.com/v1/public/api/FilterCoupons?filter=Cash%20Back&Page=0&PerPage=15&Filter=Cash%20Back";
  boGo = "https://adscombined.com/v1/public/api/FilterCoupons?filter=BOGO&Page=0&PerPage=15&Filter=BOGO";
  eventsUrl = "https://adscombined.com/v1/public/api/FilterCoupons?filter=Event&Page=0&PerPage=9&Filter=Event";
  topDeal = "https://adscombined.com/v1/public/api/HomepageDeals";
  salesUrl = "https://adscombined.com/v1/public/api/FilterCoupons?filter=Sale&Page=0&PerPage=4&Filter=Sale";
  
  constructor(
    private coupon: HttpClient,
    private cashback: HttpClient,
    private bogo: HttpClient,
    private event: HttpClient,
    private topDeals: HttpClient,
    private sales: HttpClient,
    ) { }
  
  getHomeCoupon() {
    return this.coupon.post( this.couponsHome, {} );
  }
  getHomeCashback(){
    return this.cashback.post( this.cashbackHome, {});
  }
  getBogo(){
    return this.bogo.post( this.boGo, {});
  }
  getEvents(){
    return this.event.post( (this.eventsUrl), {})
  }
  getSales(){
    return this.sales.post( (this.salesUrl), {})
  }
  getTopDeals(){
    return this.topDeals.get(this.topDeal)
  }
}
