import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {CrudService} from '../../crud.service';


@Component({
  selector: 'app-upd-customer',
  templateUrl: './upd-customer.component.html',
  styleUrls: ['./upd-customer.component.css']
})
export class UpdCustomerComponent implements OnInit {

  alert:boolean=false;
  editCustomer= new FormGroup({
    customer_name: new FormControl(''),
    customer_website: new FormControl(''),
    customer_address: new FormControl(''),
  })
  constructor(private router:ActivatedRoute,private crud:CrudService,private rout:Router) { }

  res:any=[]
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.crud.getCurrentCustomer(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result);
      this.res=result;
      console.warn(result.customer_name);
      this.editCustomer= new FormGroup({
        customer_name: new FormControl(result.customer_name),
        customer_website: new FormControl(result.customer_website),
        customer_address: new FormControl(result.customer_address),
      })
    })
  }

  collection(){
    console.warn(this.editCustomer.value);
    this.crud.updateCustomer(this.router.snapshot.params.id,this.editCustomer.value).subscribe((result:any)=>{
      console.warn(result);
      this.alert=true;
      
    })
  }
  closeAlert(){
    this.alert=false;
    this.rout.navigateByUrl('/showcustomer');
  }

}
