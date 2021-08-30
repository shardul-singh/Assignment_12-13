import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  constructor(private crud:CrudService) { }
  data:Array<any>=[]
  ngOnInit(): void {
    this.crud.getData().subscribe((result:any)=>{
      console.warn(result);
      this.data=result;
    })
  }

  deleteUser(item:any){
    this.data.splice(item-1,1)
    this.crud.deleteUser(item).subscribe((result)=>{
      console.warn("result",result);
    })
  }

}
