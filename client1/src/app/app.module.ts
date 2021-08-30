import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { GetUserComponent } from './get-user/get-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdUserComponent } from './upd-user/upd-user.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { UpdCustomerComponent } from './customer/upd-customer/upd-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    GetUserComponent,
    UpdUserComponent,
    CustomerComponent,
    AddCustomerComponent,
    UpdCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
