import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  searchAPI = "https://adscombined.com/v1/public/api/SearchKeywordsList";

  constructor( private search: HttpClient ) {   }
  
  getSearchReuslts(){
    return this.search.post( this.searchAPI, {});
  }

}

