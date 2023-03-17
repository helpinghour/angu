import { Component } from '@angular/core';
import { response } from 'express';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  allDealsData:any;
  totalDeals: any;
  allDealsAre: any;

  page: number = 0;
  perPage: number = 60;

  constructor( private deals:DealsService, private allDeals:DealsService){ }

  ngOnInit(): void{
    this.getDeals();
  }

  getDeals(): void{
    this.allDeals.getAllDealStore(this.page, this.perPage).subscribe( (response:any) =>{
      
      this.allDealsData = response.deals;
      this.totalDeals = response.total_deals;

      this.allDealsAre = response.deals;
      console.log(this.allDealsAre);

    })
  }
  onDealsPageChange(event: any){
    this.page = event;
    this.getDeals();
  }


}
