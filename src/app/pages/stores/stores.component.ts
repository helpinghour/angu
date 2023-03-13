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

  constructor ( private stores:StoresService, private categories:StoresService ){

    this.stores.storesInfo().subscribe( (response:any) => {
      this.storesData = response.stores;
    })
    this.categories.allCategories().subscribe( (data:any) => {
      this.allCategories = data.categories;
      console.log(this.allCategories);
    })

  }

}
