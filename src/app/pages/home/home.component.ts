import { Component } from '@angular/core';
import { AllcountsService } from 'src/app/services/allcounts.service';
import { HomeServiceService } from 'src/app/services/home/home-service.service';
import { SubscribeService } from 'src/app/services/subscribe.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCounts: any;
  total_coupons: any;
  homeCoupon: any;
  homeCashback: any;
  boGo: any;
  eventsData: any;
  topDeals: any;
  salesData: any;
  subscribeIt:any;
  responseMsg:any;
  successMessage:any;
  warnMessage:any;


  constructor(
    private allCount:AllcountsService,
    private homeCoupons:HomeServiceService,
    private cashBack:HomeServiceService,
    private bogo:HomeServiceService,
    private events:HomeServiceService,
    private deals:HomeServiceService,
    private sales:HomeServiceService,
    private subScriber:SubscribeService,
    ) { }

  ngOnInit(){
    this.allCount.getAllCounts().subscribe( (counts:any) =>{ //counts is a any type that will get data response from service
      this.allCounts = counts;
    });
    this.homeCoupons.getHomeCoupon().subscribe( (coup:any) =>{ //getHomeCoupon is method in service
      this.homeCoupon = coup;
    });
    this.cashBack.getHomeCashback().subscribe( (cashb:any) =>{
      this.homeCashback = cashb;
    });
    this.bogo.getBogo().subscribe( (bogo:any) =>{
      this.boGo = bogo;
    });
    this.events.getEvents().subscribe( (events:any) =>{
      this.eventsData = events;
    })
    this.sales.getSales().subscribe( (sales:any) =>{
      this.salesData = sales;
    })
    this.deals.getTopDeals().subscribe( (deals:any) =>{
      this.topDeals = deals;
    })
    
  }
  
      // subscription code start
      getSubDetails(data: {email: string, frequency: string, alert_preference: string, alert_category: string}){
        this.subScriber.subscribeUser(data).subscribe( (results)=>{
          this.subscribeIt = results;

          this.responseMsg = this.subscribeIt.message;
          if(this.responseMsg == "Subscription Added!"){
            this.successMessage = this.responseMsg;
            this.warnMessage = null;
          }else{
            this.warnMessage = this.responseMsg;
            this.successMessage = null;
          }
          
        })
      }
      // subscription code end
}
