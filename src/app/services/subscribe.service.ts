import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SubscribeService {
  
  subApiUrl = "https://adscombined.com/v1/public/api/Subscribe?";

  constructor( private subsc: HttpClient) {
    
   }
   subscribeUser(data:any){
    return this.subsc.post(this.subApiUrl,data);
   }
}
