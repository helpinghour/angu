
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';
import { RetailersComponent } from './pages/retailers/retailers.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { DealsComponent } from './pages/deals/deals.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'stores',
    component: StoresComponent
  },
  {
    path: 'retailers',
    component: RetailersComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'deals',
    component: DealsComponent
  }
  
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
