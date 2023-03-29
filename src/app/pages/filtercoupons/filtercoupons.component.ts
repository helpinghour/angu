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
  filteredCategoryCount: any;
  filteredCategoryCoupons:any;
  TotalCouponsCount: any;
  allCategoriesAre:any;

  encodedFilter: any;
  sliceKey:any;

  constructor(
    private route: ActivatedRoute,
    private http: FiltercouponsService,
    private catCoups: FiltercouponsService,
    private allcat: AllcategoriesService)
    {}
  
  ngOnInit(): void {
    //this will get categroyFilter value from routing and store it in catoryFilter variable
    this.catgoryFilter = this.route.snapshot.paramMap.get('catgoryFilter');

      this.http.getCatCount(this.catgoryFilter).subscribe( (data:any) =>{
      this.filteredCategoryCount = data;
      console.log(this.filteredCategoryCoupons);
      this.TotalCouponsCount = data.TotalCouponsCount;
      })

      this.catCoups.getCatCoups(this.catgoryFilter).subscribe( (data:any) =>{
        this.filteredCategoryCoupons = data.coupons;
        console.log(this.filteredCategoryCoupons);
      })
    
      // this.allcat.getAllCategories().subscribe( (data:any) =>{
    //   this.allCategoriesAre = data;
    // })

    // this.encodedFilter = this.decodeCleanedTitle(this.catgoryFilter);
    
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
  sliceData(key:any){
    this.sliceKey = key.slice(0, -5);
    let str = this.sliceKey;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str;
  }
}
