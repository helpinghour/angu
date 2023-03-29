import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FiltercouponsService } from 'src/app/services/filtercoupons.service';
import { AllcategoriesService } from 'src/app/services/allcategories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filtercoupons',
  templateUrl: './filtercoupons.component.html',
  styleUrls: ['./filtercoupons.component.css']
})
export class FiltercouponsComponent implements OnInit{
  TotalCouponsCount: any;
  TotalFitrdCounts:any;
  catgoryFilter: any;
  currentPage:number = 0;
  perPage: number = 60;
  filter:string = "all";
  filteredCategoryCount: any;
  filteredCategoryCoupons:any;
  allCategoriesAre:any;
  catsAre:any;
  mainCatIs:any;
  mainCatTitle:any;
  subCatsAre:any;


  encodedFilter: any;
  sliceKey:any;

  isNumber(value: any): boolean {
    return typeof value === 'number';
  }
  
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
        this.TotalCouponsCount = data.TotalCouponsCount;
        this.filteredCategoryCount = data;
      
      })
      

      this.getfiterCoupons();

    
      this.allcat.getAllCategories().subscribe( (data:any) =>{
      this.allCategoriesAre = data;
      

      for (const key in this.allCategoriesAre.categories) {
        this.mainCatIs = this.allCategoriesAre.categories[key].Category;
        

        if(this.mainCatIs === this.catgoryFilter){
          // console.log(this.mainCatIs);
          this.mainCatTitle = this.mainCatIs;

          this.subCatsAre = this.allCategoriesAre.categories[key].sub_categories;
          console.log(this.subCatsAre);

          // for ( const subcat in this.subCatsAre.SubCategory){
          // this.subCatsAre = this.mainCatIs.sub_categories[subcat].SubCategory;
          // }
          // console.log(this.subCatsAre);

        }
      }
      
    })

    // this.encodedFilter = this.decodeCleanedTitle(this.catgoryFilter);
    
  }
  getfiterCoupons(){
    this.catCoups.getCatCoups(this.catgoryFilter, this.currentPage, this.filter).subscribe( (data:any) =>{
      
      this.TotalFitrdCounts = data.TotalCoupons;
      this.filteredCategoryCoupons = data.coupons;
      console.log(this.filteredCategoryCoupons);

    })
  }
   
  sliceData(key: any) {
    this.sliceKey = key.slice(0, -5);
    let str = this.sliceKey;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (str.charAt(str.length - 1) === 's') {
      str = str.slice(0, -1);
    }
    return str;
  }
  
  filterCoup(filter:any){
    this.filter = filter;
    this.getfiterCoupons();
  }
  onFilterCoupPageChange(event:any){
    this.currentPage = event - 1;
    this.getfiterCoupons();
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
