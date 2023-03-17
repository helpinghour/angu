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

  constructor( private getCat: AllcategoriesService){

    this.getCat.getAllCategories().subscribe( (data:any) =>{
      this.CategoriesAre = data.categories;
      this.categoriesIs = data.categories.Category.sub_categories;
      

    })
  }


}
