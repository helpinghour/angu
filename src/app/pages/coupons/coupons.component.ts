import { Component } from '@angular/core';
import { CouponsService } from 'src/app/services/coupons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})

export class CouponsComponent {
  allCoupons:any;
  allCounts:any;
  total_coupons: any;
  totalCountsPagination:any;

  totalFilter: string = "all";
  
  allCouponsData: any;
  currentPage = 0;
  perPage: number = 60;
  // filter: string = "all";
  sliceKey:any;
  coupFilter:any;
  filter:any;
  

  constructor( private route: ActivatedRoute, private couponsData: CouponsService, private totalofferCount: CouponsService ){ }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.filter = params.get('coupFilter');
      this.getCoupons();
    });

    this.getTotalOffersCounts();

  }

  getTotalOffersCounts(): void{
  
    this.totalofferCount.getTotalCounts().subscribe( (data:any) => {
      this.total_coupons = data.total_coupons;
    })  
  
  }
  
  getCoupons(): void{
  
    this.couponsData.getAllCoup( this.currentPage, this.filter ).subscribe( (data:any) =>{
      this.allCoupons = data.coupons;
      this.allCouponsData = data;
      this.allCounts = data.counts;
      this.totalCountsPagination = data.total_coupons;
      
    })
  }

  sliceData(key:any){
    this.sliceKey = key.slice(0, -5);
    let str = this.sliceKey;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str;
  }
  
  filterCoup(filter:any){
    console.log(filter);

    this.filter = filter;
    this.currentPage = 0;
    this.getCoupons();
  }
  onCouponPageChange(event:any){
    
    this.currentPage = event - 1;
    

    this.getCoupons();
  }
  

}
