
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoresComponent } from './pages/stores/stores.component';
import { RetailersComponent } from './pages/retailers/retailers.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { DealsComponent } from './pages/deals/deals.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { FiltercouponsComponent } from './pages/filtercoupons/filtercoupons.component';
import { AllcategoriesComponent } from './pages/allcategories/allcategories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StoresComponent,
    RetailersComponent,
    BrandsComponent,
    DealsComponent,
    CouponsComponent,
    AllcategoriesComponent,
    FiltercouponsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
