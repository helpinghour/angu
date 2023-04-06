import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllcategoriesService {
  allCategoriesAPI = "https://adscombined.com/v1/public/api/AllCategories";

  constructor( private catHttp: HttpClient) { }
  
  getAllCategories(){
    return this.catHttp.get(this.allCategoriesAPI);
  }
  

}
