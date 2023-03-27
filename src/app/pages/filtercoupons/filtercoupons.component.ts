import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FiltercouponsService } from 'src/app/services/filtercoupons.service';
import { AllcategoriesService } from 'src/app/services/allcategories.service';

@Component({
  selector: 'app-filtercoupons',
  templateUrl: './filtercoupons.component.html',
  styleUrls: ['./filtercoupons.component.css']
})
export class FiltercouponsComponent implements OnInit{
  catgoryFilter: any;
  filteredCategory: any;
  TotalCouponsCount: any;
  allCategoriesAre:any;

  PromoCount:any;
  FreeShippingCount:any;
  ClearanceCount:any;
  WeeklyAdCount:any;
  SaleCount:any;
  EventsCount:any;
  GiftsCount:any;
  CouponCount:any;
  StudentCount:any;
  ReferralCount:any;
  RewardCount:any;
  RebateCount:any;
  NewArrivalCount:any;
  BOGOCount:any;
  CashBackCount:any;
  showPromoCount = false;
  thisiscool="red"
  encodedFilter: any;

  constructor(
    private route: ActivatedRoute,
    private http: FiltercouponsService,
    private allcat: AllcategoriesService) {}
  
  ngOnInit(): void {
    this.catgoryFilter = this.route.snapshot.paramMap.get('catgoryFilter');
    this.allcat.getAllCategories().subscribe( (data:any) =>{
      this.allCategoriesAre = data;
    })
    // this.encodedFilter = this.decodeCleanedTitle(this.catgoryFilter);
    console.log(this.catgoryFilter);

      this.http.getCatCount(this.catgoryFilter).subscribe( (data:any) =>{
      this.filteredCategory = data;

      this.TotalCouponsCount = data.TotalCouponsCount;
      this.PromoCount = data.PromoCount;

      this.FreeShippingCount = data.FreeShippingCount;
      this.ClearanceCount = data.ClearanceCount;
      this.WeeklyAdCount = data.WeeklyAdCount;
      this.SaleCount = data.SaleCount;
      this.EventsCount = data.EventsCount;
      this.GiftsCount = data.GiftsCount;
      this.CouponCount = data.CouponCount;
      this.StudentCount = data.StudentCount;
      this.ReferralCount = data.ReferralCount;
      this.RewardCount = data.RewardCount;
      this.RebateCount = data.RebateCount;
      this.NewArrivalCount = data.NewArrivalCount;
      this.BOGOCount = data.BOGOCount;
      this.CashBackCount = data.CashBackCount;
      console.log(this.CashBackCount+"lll");

    })
    
  }
  
   
  // decodeCleanedTitle(cleanedTitle: string): string {
  //   // Replace hyphens with spaces
  //   let spaceSeparatedString = cleanedTitle.replaceAll('-', '&');
  
  //   // Convert to title case
  //   let words = spaceSeparatedString.split(' ');
  //   let titleCaseWords = words.map((word) => {
  //     return word.charAt(0).toUpperCase() + word.slice(1);
  //   });
  //   let titleCaseString = titleCaseWords.join(' ');
  
  //   // Replace percent-encoded characters with their corresponding characters
  //   let decodedString = decodeURIComponent(titleCaseString);
  
  //   return decodedString;
  // }
  
}
