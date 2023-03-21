import { Component } from '@angular/core';
import { CouponsService } from 'src/app/services/coupons.service';


@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})

export class CouponsComponent {
  allCoupons:any;
  allCounts:any;
  total_coupons: any;

  allCouponsData: any;
  page: number = 0;
  perPage: number = 60;
  
  constructor( private couponsData: CouponsService ){ }

  ngOnInit(): void{
    this.getCoupons();
  }
  
  getCoupons(): void{
    this.couponsData.getAllCoup( this.page ).subscribe( (data:any) =>{
      this.total_coupons = data.total_coupons;
      this.allCounts = data.counts;
      this.allCoupons = data.coupons;
      this.allCouponsData = data;
    })
  }
  onCouponPageChange(event:any){
    this.page = event;
    this.getCoupons();
  }
  

}
