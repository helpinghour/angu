import { Component } from '@angular/core';
import { AllcountsService } from 'src/app/services/allcounts.service';
import { HomeServiceService } from 'src/app/services/home/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCounts: any;
  total_coupons: any;
  homeCoupon: any;
  homeCashback: any;
  
  
  constructor(
    private allCount:AllcountsService,
    private homeCoupons:HomeServiceService,
    private cashBack:HomeServiceService,
    ) { }

  ngOnInit(){
    this.allCount.getAllCounts().subscribe( (counts:any) =>{ //counts is a any type that will get data response from service
      this.allCounts = counts;
    });
    this.homeCoupons.getHomeCoupon().subscribe( (coup:any) =>{ //getHomeCoupon is method in service
      this.homeCoupon = coup;
    });
    this.cashBack.getHomeCashback().subscribe( (cashb:any) =>{
      this.homeCashback = cashb;
    });
  }
  
}
