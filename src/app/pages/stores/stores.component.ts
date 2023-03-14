import { Component } from '@angular/core';
import { StoresService } from 'src/app/services/stores.service';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})

export class StoresComponent {
  storesData:any;
  allCategories:any;
  totalStores:any;
  stores:any;
  currentPage = 1;
  perPage = 60;
  

  constructor ( private storeCount:StoresService, private categories:StoresService, private storePagi: StoresService ){

    this.storeCount.storesInfo().subscribe( (response:any) => {  
      this.totalStores = response.total_stores;
    })
    this.categories.allCategories().subscribe( (response:any) => {
      this.allCategories = response.categories;
    })
  }
  ngOnInit(): void {
    this.getStores();
  }
  getStores(): void {
    this.storePagi.getStores(this.currentPage - 1, this.perPage).subscribe(response => {
      this.storesData = response.stores;
    });
  }
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getStores();
    }
  }
  goToNextPage(): void {
    this.currentPage++;
    this.getStores();
  }

}
