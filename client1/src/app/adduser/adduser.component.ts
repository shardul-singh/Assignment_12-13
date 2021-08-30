import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  alert:boolean=false;
  addEmp= new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    customerId: new FormControl('',Validators.required),
    roleId: new FormControl('',Validators.required),
  })
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
  }

  collectEmp(){
    // console.warn(this.addEmp.value);
     this.crud.saveUser(this.addEmp.value).subscribe((result:any)=>{
       this.alert=true;
       this.addEmp.reset({});
        console.warn("REsult ",result);
    });
  }
  closeAlert(){
    this.alert=false;
  }

}
