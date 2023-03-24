import { Component } from '@angular/core';
import { AllcountsService } from 'src/app/services/allcounts.service';
import { HomeServiceService } from 'src/app/services/home/home-service.service';
import { SubscribeService } from 'src/app/services/subscribe.service'
import { AllcategoriesService } from 'src/app/services/allcategories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCounts: any;
  total_coupons: any;
  total_deals: any;
  total_stores: any;
  total_brands: any;
  total_retailers: any;
  homeCoupon: any;
  homeCashback: any;
  boGo: any;
  eventsData: any;
  topDeals: any;
  salesData: any;
  responseIs:any;
  responseMsg:any;
  successMessage:any;
  warnMessage:any;
  CategoriesAre:any;


  constructor(
    private allCount:AllcountsService,
    private homeCoupons:HomeServiceService,
    private cashBack:HomeServiceService,
    private bogo:HomeServiceService,
    private events:HomeServiceService,
    private deals:HomeServiceService,
    private sales:HomeServiceService,
    private subScriber:SubscribeService,
    private getCat: AllcategoriesService 
    ) { }

  ngOnInit(){
    this.allCount.getAllCounts().subscribe( (counts:any) =>{ //counts is a any type that will get data response from service
      this.allCounts = counts;
      this.total_coupons = counts.total_coupons;
      this.total_deals = counts.total_deals;
      this.total_stores = counts.total_stores;
      this.total_brands = counts.total_brands;
      this.total_retailers = counts.total_retailers;
    });
    this.homeCoupons.getHomeCoupon().subscribe( (coup:any) =>{ //getHomeCoupon is method in service
      this.homeCoupon = coup.coupons.slice(0, 4);
    });
    this.cashBack.getHomeCashback().subscribe( (cashb:any) =>{
      this.homeCashback = cashb.coupons;
    });
    this.bogo.getBogo().subscribe( (bogo:any) =>{
      this.boGo = bogo.coupons.slice(0,6);
    });
    this.events.getEvents().subscribe( (events:any) =>{
      this.eventsData = events.coupons.slice(0,6);
    })
    this.sales.getSales().subscribe( (sales:any) =>{
      this.salesData = sales.coupons;
    })
    this.deals.getTopDeals().subscribe( (deals:any) =>{
      this.topDeals = deals.deals.slice(0,8);
    })
    // to get all categories
    this.getCat.getAllCategories().subscribe( (data:any) =>{
    
      this.CategoriesAre = data.categories;
      
      for (const category of this.CategoriesAre) {
        
        if (category.sub_categories) {
          for (const subCategory of category.sub_categories) {
            subCategory['imgName'] = this.cleanTitle(subCategory.SubCategory);
          }
        }
      }
      this.CategoriesAre = data.categories;

      // console.log(this.CategoriesAre);

    })
    // to get all categories
    
  }
  
      // subscription code start
      getSubDetails(data: {email: string, frequency: string, alert_preference: string, alert_category: string}){
        if(data.email == ""){
          console.log("fsdfdsf");
          this.warnMessage = "Invalid email, please enter a valid email i.e. abc@mail.com";
          if(data.frequency == "" || data.alert_preference == ""){
            this.warnMessage = "Valid email, Alert Frequency and Alert Preference required.";
          }
        }
        else{
        
          this.subScriber.subscribeUser(data).subscribe( (response)=>{

          this.responseIs = response;
          this.responseMsg = this.responseIs.message;
          
          if(this.responseMsg == "Subscription Added!"){
            this.successMessage = this.responseMsg;
            this.warnMessage = null;
          }else{
            this.warnMessage = this.responseMsg;
            this.successMessage = null;
          }
          
        })

      }
    }
      // subscription code end
      
      // cleaning string spaces and &
      cleanTitle( name:any ) {
        // Replace all non-alphanumeric characters with a space
        let cleaned = name.replaceAll(/[^a-zA-Z0-9]/g, ' ');
        // Replace all consecutive spaces with a single hyphen
        cleaned = cleaned.replaceAll(/\s+/g, '-');
        // Convert to lowercase and return the result
        return cleaned.toLowerCase();
        // let cleanName = name.replace(/\s+/g, '').replace('&','-');
    
      }
      // cleaning string spaces and &
}
