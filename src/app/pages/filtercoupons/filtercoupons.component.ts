import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  pageTitle:any;
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
  mainCatDescriptionIs:any;
  showDescription:any
  mainCatTitle: any;
  subCatsAre: any;
  allSubCatsAre: any;
  subFilter: any;
  subCategories: string[] = [];

  encodedFilter: any;
  sliceKey: any;
  isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private http: FiltercouponsService,
    private catCoups: FiltercouponsService,
    private allcat: AllcategoriesService) { }

  ngOnInit(): void {

    this.allcat.getAllCategories().subscribe((data: any) => {
      this.allCategoriesAre = data;

      for (const key in this.allCategoriesAre.categories) {
        this.mainCatIs = this.allCategoriesAre.categories[key].Category;
        this.mainCatDescriptionIs = this.allCategoriesAre.categories[key].Description;

        if (this.mainCatIs === decodeURIComponent(this.catgoryFilter)) {

          this.showDescription = this.mainCatDescriptionIs;
          this.showDescription = this.showDescription.replace(/<a([^>]+)>/gi, '<span$1>'); // to replace description <a> tags
          this.showDescription = this.showDescription.replace(/<\/a>/gi, '</span>'); // to replace description <a> tags
          
          this.mainCatTitle = this.mainCatIs;

          this.subCatsAre = this.allCategoriesAre.categories[key].sub_categories;
          
          for (let subCat of this.subCatsAre) {

            subCat.SubCategory
            this.subCategories.push(subCat.SubCategory); // injected a new key based on sub_categories
            
            // to check sub description
            if ( subCat.SubCategory === decodeURIComponent(this.subCatFilter)){
                this.showDescription = subCat.Description;
              }
            // to check sub description /
            

          }

        }
      }

    })

    //this will get categroyFilter value from routing and store it in catoryFilter variable

    this.route.params.subscribe(params => {

      this.catgoryFilter = params['categoryFilter'];
      this.subCatFilter = params['subCategoryFilter'];

      this.getCatFiterCoupons();

    });

    this.route.params.subscribe(params => {
      this.catgoryFilter = params['categoryFilter'];
      this.subCatFilter = params['subCategoryFilter'];

      this.getSubCatFiter();

    });

  }

  getCatFiterCoupons() {
    
    if (this.subCatFilter === null) {
      this.subCatFilter = "";
    }

    this.catCoups.getCatCoups(this.catgoryFilter, this.subCatFilter, this.currentPage, this.filter).subscribe((data: any) => {
      
      this.TotalFitrdCounts = data.TotalCoupons;
      this.pageTitle = data.PageTitle;
      this.titleService.setTitle(this.pageTitle); // Set the page title dynamically
      
      this.filteredCategoryCoupons = data.coupons;

    })
    this.filter = "all";

  }

  getSubCatFiter() {
    if (this.subCatFilter === null) {
      this.subCatFilter = "";
    }

    this.http.getCatCount(this.catgoryFilter, this.subCatFilter).subscribe((data: any) => {
      this.TotalCouponsCount = data.TotalCouponsCount;
      this.filteredCategoryCount = data;

    })
  }

  categoryCountFilter(filter: any) {
    this.filter = filter;
    this.currentPage = 0;
    this.getCatFiterCoupons();
    
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

  onFilterCoupPageChange(event: any) {
    this.currentPage = event - 1;
    this.getCatFiterCoupons();
  }


}
