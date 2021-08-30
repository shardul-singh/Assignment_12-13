import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../crud.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private crud:CrudService) { }
  show:boolean=false;
  data:Array<any>=[]
  udata:any=[]
  

  ngOnInit(): void {
    this.crud.getCustomers().subscribe((result:any)=>{
      console.warn(result);
      this.data=result;
    })
  }

  showUser(id:any){
    this.crud.getCustomerwithUser(id).subscribe((result)=>{
      console.warn("result",result);
      this.udata=result;
      console.log(this.udata.user1s);
      this.show=true;
    })
  }
  deleteCustomer(item:any){
    this.data.splice(item-1,1)
    this.crud.deleteCustomer(item).subscribe((result)=>{
      console.warn("result",result);
    })
  }

  cancel(){
    this.show=false;
  }



}
