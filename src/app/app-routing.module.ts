
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';
import { RetailersComponent } from './pages/retailers/retailers.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { DealsComponent } from './pages/deals/deals.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { FiltercouponsComponent } from './pages/filtercoupons/filtercoupons.component';
import { AllcategoriesComponent } from './pages/allcategories/allcategories.component';
import { LoginComponent } from './include/login/login.component';
import { RegisterComponent } from './include/register/register.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'stores',
    title: 'All Stores | Adscombined.com',
    component: StoresComponent
  },
  {
    path: 'retailers',
    title: 'All Retailers | Adscombined.com',
    component: RetailersComponent
  },
  {
    path: 'brands',
    title: 'All Brands | Adscombined.com',
    component: BrandsComponent
  },
  {
    path: 'deals',
    title: 'All Deals | Adscombined.com',
    component: DealsComponent
  },
  {
    path: 'coupons/:coupFilter',
    component: CouponsComponent
  },
  {
    path: 'allcategories',
    component: AllcategoriesComponent
  },
  {
    path: 'filtercoupons/:categoryFilter',
    component: FiltercouponsComponent
  },
  {
    path: 'filtercoupons/:categoryFilter/:subCategoryFilter',
    component: FiltercouponsComponent
  },
  {
    path: 'login',
    title: 'Login | Adscombined.com',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Register | Adscombined.com',
    component: RegisterComponent
  }
  
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
