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
  
  page: number = 0;
  perPage: number = 60;
  allNumericeStart: any;
  filterIt: any;

  constructor ( private categories:StoresService, private httpData:StoresService ){
    
    this.categories.allCategories().subscribe( (response:any) => {
      this.allCategories = response.categories;
    })   
  
  }

    ngOnInit(): void{
      this.getStores();
    }
    
    getStores(): void{
        this.httpData.getAllStores(this.page, this.perPage).subscribe( (response:any) =>{
        this.totalStores = response.total_stores;
        this.storesData = response.stores;
      })
    }

    onStorePageChange(event: any){
      this.page = event;
      this.getStores();
    }
    
    getNumeric(event: any){
      this.filterIt = event.target.textContent;
      this.httpData.getAllStores(this.page, this.perPage).subscribe( (response:any) =>{
        this.allNumericeStart = response.stores;
      })
    }
    
}
