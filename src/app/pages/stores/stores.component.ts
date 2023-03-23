import { Component } from '@angular/core';
import { response } from 'express';
import { StoresService } from 'src/app/services/stores.service';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})

export class StoresComponent {
  allCategories:any;
  totalStores:any;
  storesData:any;
  allNumericeStart: any;
  
  currentPage = 0;
  perPage: number = 60;
  filter: any = "";
  selectedCategory: any;
  pCat:any = "";
  sCat:any = "";

  filterIt: any;
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor ( private categories:StoresService, private httpData:StoresService ){
    
    this.categories.allCategories().subscribe( (response:any) => {
      this.allCategories = response.categories;
    })
  
  }

    ngOnInit(): void{
      this.getStores();
    }
    
    getStores(): void{
        this.httpData.getAllStores(this.currentPage, this.perPage, this.filter, this.pCat, this.sCat).subscribe( (response:any) =>{
        this.totalStores = response.total_stores;
        this.storesData = response.stores;
      })
    }
    
    getAllStor(){ // filter for all results
      this.filter = "";
      this.getStores();
    }

    getNumeric(filter: any){ //for numeric filters
      this.currentPage = 0;
      this.filter = filter;
      this.getStores();
    }

    getAlpha(filter:any){ // for alpha filters
      this.currentPage = 0;
      this.filter = filter;
      this.getStores();
    }

    filterPCat(filterPCat:any){ // to filter Parent category (Category)
      this.currentPage = 0
      this.pCat = filterPCat;
      this.sCat = "";
      this.getStores();
    }

    filterSCat(filterSCat:any){ // to filter child categories (SubCategory)
      this.currentPage = 0
      this.sCat = filterSCat;
      this.getStores();
    }

    onStorePageChange(event: any){ //for pagination
      this.currentPage = event - 1;
      this.getStores();
    }
    
}
