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
export class FiltercouponsComponent implements OnInit {
  TotalCouponsCount: any;
  TotalFitrdCounts: any;
  catgoryFilter: any;
  subCatFilter: any;
  currentPage: number = 0;
  perPage: number = 60;
  filter: string = "all";
  filteredCategoryCount: any;
  filteredCategoryCoupons: any;
  allCategoriesAre: any;
  catsAre: any;
  mainCatIs: any;
  mainCatTitle: any;
  subCatsAre: any;
  allSubCatsAre: any;
  subFilter:any;
  subCategories: string[] = [];

  encodedFilter: any;
  sliceKey: any;
  isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  constructor(
    private route: ActivatedRoute,
    private http: FiltercouponsService,
    private catCoups: FiltercouponsService,
    private allcat: AllcategoriesService) { }

  ngOnInit(): void {
    //this will get categroyFilter value from routing and store it in catoryFilter variable
    this.catgoryFilter = this.route.snapshot.paramMap.get('catgoryFilter');
    this.subFilter = this.route.snapshot.paramMap.get('subCatFilter');
    // console.log(this.subCatFilter);


    this.getfiterCounts(); //calling method defined below
    this.getfiterCoupons(); //calling method defined below


    this.allcat.getAllCategories().subscribe((data: any) => {
      this.allCategoriesAre = data;
      

      for (const key in this.allCategoriesAre.categories) {
        this.mainCatIs = this.allCategoriesAre.categories[key].Category;

        if (this.mainCatIs === decodeURIComponent(this.catgoryFilter)) {

          this.mainCatTitle = this.mainCatIs;

          this.subCatsAre = this.allCategoriesAre.categories[key].sub_categories;

          for (let subCat of this.subCatsAre) {
            
            subCat.SubCategory
            this.subCategories.push(subCat.SubCategory);
             
          }
          
        }
      }

    })

    // this.encodedFilter = this.decodeCleanedTitle(this.catgoryFilter);

  }

  getfiterCounts(){
    
    if(this.subFilter === null){
      console.log("helll");
      this.subFilter = "";
    }

    this.http.getCatCount(this.catgoryFilter, this.subFilter).subscribe((data: any) => {
      this.TotalCouponsCount = data.TotalCouponsCount;
      this.filteredCategoryCount = data;

    })
  }
  getfiterCoupons() {

    if(this.subFilter === null){
      console.log("helll");
      this.subFilter = "";
    }
    
    this.catCoups.getCatCoups(this.catgoryFilter, this.subFilter, this.currentPage, this.filter).subscribe((data: any) => {
      this.TotalFitrdCounts = data.TotalCoupons;
      this.filteredCategoryCoupons = data.coupons;
      // console.log(this.filteredCategoryCoupons);

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

  filterCoup(filter: any) {
    this.filter = filter;
    this.currentPage = 0;
    this.getfiterCoupons();
  }
  
  subCatFilters(subFilter:any){
    this.subFilter =  subFilter;
    this.currentPage = 0;
    this.getfiterCoupons();
    this.getfiterCounts();
  }

  onFilterCoupPageChange(event: any) {
    this.currentPage = event - 1;
    this.getfiterCoupons();
  }


}
