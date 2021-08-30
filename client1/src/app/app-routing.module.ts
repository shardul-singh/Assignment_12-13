import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdduserComponent} from './adduser/adduser.component';
import {GetUserComponent} from './get-user/get-user.component';
import {UpdUserComponent} from './upd-user/upd-user.component';
import {CustomerComponent} from './customer/customer/customer.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {UpdCustomerComponent} from './customer/upd-customer/upd-customer.component'

const routes: Routes = [
  {
    component:AdduserComponent,
    path:'add'
  },
  {
    component:GetUserComponent,
    path:'get'
  },
  {
    component:UpdUserComponent,
    path:'updu/:id'
  },
  {
    component:AddCustomerComponent,
    path:'addcustomer'
  },
  {
    component:CustomerComponent,
    path:'showcustomer'
  },
  {
    component:UpdCustomerComponent,
    path:'updc/:id'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
