
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';

//fdsfdsfd

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // HomeComponent,
    // StoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
