import { Component } from '@angular/core';
import { AllcategoriesService } from 'src/app/services/allcategories.service';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.css']
})
export class AllcategoriesComponent {
  CategoriesAre: any;
  categoriesIs: any;
  category: any;
  allCat: any;

  constructor(private getCat: AllcategoriesService) {

    this.getCat.getAllCategories().subscribe((data: any) => {

      this.CategoriesAre = data.categories;

      for (const mCategory of this.CategoriesAre) {
        
        mCategory['titleName'] = this.cleanTitle(mCategory.Category);

        if (mCategory.sub_categories) {
          for (const subCategory of mCategory.sub_categories) {
            subCategory['imgName'] = this.cleanTitle(subCategory.SubCategory);
          }
        }
       
      }
      this.CategoriesAre = data.categories;

      // console.log(this.CategoriesAre);

    })
  }
  encodeToURL(value: any) {
    let str = value;
    let encodedStr = encodeURIComponent(str).replaceAll('&', '%26');
    return encodedStr;
  }
  removeHypen(value:any){
    let str = value;
    let cleanedStr = str.replaceAll('-', '&');
    return cleanedStr;
    
  }
  cleanTitle(name: any) {
    // Replace all non-alphanumeric characters with a space
    let cleaned = name.replaceAll(/[^a-zA-Z0-9]/g, ' ');

    // Replace all consecutive spaces with a single hyphen
    cleaned = cleaned.replaceAll(/\s+/g, '-');

    // Convert to lowercase and return the result
    return cleaned.toLowerCase();

    // let cleanName = name.replace(/\s+/g, '').replace('&','-');

  }


}
