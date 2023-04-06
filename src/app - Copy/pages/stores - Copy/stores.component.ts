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
        this.httpData.getAllStores(this.currentPage, this.perPage, this.filter).subscribe( (response:any) =>{
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

    onStorePageChange(event: any){ //for pagination
      this.currentPage = event - 1;
      this.getStores();
    }
    
}
