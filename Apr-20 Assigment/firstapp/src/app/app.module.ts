import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolBarComponent } from './common/tool-bar/tool-bar.component';
import { CategorysComponent } from './pages/categorys/categorys.component';
import { ContactBoxsComponent } from './pages/categorys/contact-boxs/contact-boxs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { RangepipePipe } from './pipes/rangepipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    CategorysComponent,
    ContactBoxsComponent,
    FilterPipe,
    RangepipePipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
