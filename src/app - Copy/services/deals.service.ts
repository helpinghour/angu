import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  dealsApi = "https://adscombined.com/v1/public/api/AllDeals";
  dealStoreApi = "https://adscombined.com/v1/public/api/DealStores";

  constructor( private deals: HttpClient, private dealStore: HttpClient) { }

  allDeals(){
    return this.deals.get(this.dealsApi);
  }

  getAllDealStore( page: number, perPage: number ){
    const params = {
  
      Page: page.toString(),
      PerPage: perPage.toString(),
    }
    return this.dealStore.get(this.dealsApi, {params});
  }

}
