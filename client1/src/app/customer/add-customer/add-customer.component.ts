import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {CrudService} from '../../crud.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  alert:boolean=false;
  addCustomer= new FormGroup({
    customer_name: new FormControl('',Validators.required),
    customer_website: new FormControl('',Validators.required),
    customer_address: new FormControl('',Validators.required),
  })
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
  }

  collect(){
    // console.warn(this.addEmp.value);
     this.crud.saveCustomer(this.addCustomer.value).subscribe((result:any)=>{
       this.alert=true;
       this.addCustomer.reset({});
        console.warn("REsult ",result);
    });
  }
  closeAlert(){
    this.alert=false;
  }

}
