import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-upd-user',
  templateUrl: './upd-user.component.html',
  styleUrls: ['./upd-user.component.css']
})
export class UpdUserComponent implements OnInit {

  alert:boolean=false;
  editUser= new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    customerId: new FormControl(''),
    roleId: new FormControl(''),
  })
  constructor(private router:ActivatedRoute,private crud:CrudService,private rout:Router) { }

  res:any=[]
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.crud.getCurrentUser(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result);
      this.res=result;
      console.warn(result.firstname);
      this.editUser= new FormGroup({
        firstname: new FormControl(result.firstname),
        lastname: new FormControl(result.lastname),
        email: new FormControl(result.email),
        phone: new FormControl(result.phone),
        customerId: new FormControl(result.customerId),
        roleId: new FormControl(result.roleId),
      })
    })
  }
  collection(){
    console.warn(this.editUser.value);
    this.crud.updateUser(this.router.snapshot.params.id,this.editUser.value).subscribe((result:any)=>{
      console.warn(result);
      this.alert=true;
      
    })
  }
  closeAlert(){
    this.alert=false;
    this.rout.navigateByUrl('/get');
  }

}
