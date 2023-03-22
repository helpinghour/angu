import { Component } from '@angular/core';
import { AllcategoriesService } from 'src/app/services/allcategories.service';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.css']
})
export class AllcategoriesComponent {
  CategoriesAre:any;
  categoriesIs:any;
  category:any;
  allCat:any;

  constructor( private getCat: AllcategoriesService){

    this.getCat.getAllCategories().subscribe( (data:any) =>{
      
      this.CategoriesAre = data.categories;
      
      for (const category of this.CategoriesAre) {
        
        if (category.sub_categories) {
          for (const subCategory of category.sub_categories) {
            // console.log(subCategory);
            subCategory['imgName'] = this.cleanTitle(subCategory.SubCategory);
            // console.log(this.cleanTitle(subCategory.SubCategory));
          }
        }
      }
      this.CategoriesAre = data.categories;

      // console.log(this.CategoriesAre);

    })
  }
   cleanTitle( name:any ) {
    // Replace all non-alphanumeric characters with a space
    let cleaned = name.replaceAll(/[^a-zA-Z0-9]/g, ' ');
    
    // Replace all consecutive spaces with a single hyphen
    cleaned = cleaned.replaceAll(/\s+/g, '-');
    
    // Convert to lowercase and return the result
    return cleaned.toLowerCase();

    // let cleanName = name.replace(/\s+/g, '').replace('&','-');

  }


}
