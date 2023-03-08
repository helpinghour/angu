import { Component } from '@angular/core';
import { AllcountsService } from 'src/app/services/allcounts.service';
import { CouponService } from 'src/app/services/home/coupon.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCounts: any;
  homeCoupon: any;
  /**
   *
   */
  constructor( private allCount:AllcountsService, private homeCoupons:CouponService) { }

  ngOnInit(){
    this.allCount.getAllCounts().subscribe( response =>{
      this.allCounts = response;
    });
    this.homeCoupons.getHomeCoupon().subscribe( response =>{
      this.homeCoupon = response;
      console.log(this.homeCoupon);
    })
  }
  

}
