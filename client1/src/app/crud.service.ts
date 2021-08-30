import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  

  url="http://localhost:3000"
  constructor(private http:HttpClient) { }
  getData(){
   return this.http.get(`${this.url}/user1s?filter[include][]=customer&filter[include][]=role`);
  }
  getCustomerwithUser(id:any){
    return this.http.get(`${this.url}/customers/${id}?filter[include][]=user1s`);
   }
   getCustomers(){
    return this.http.get(`${this.url}/customers`);
   }
  saveUser(data:any){
    const body= {
      firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    phone: data.phone,
    customerId: data.customerId,
    roleId: +data.roleId
    }
     return this.http.post(this.url+'/user1s',body);
  }

  saveCustomer(data:any){
    
     return this.http.post(this.url+'/customers',data);
  }

  deleteUser(id:any){
    return this.http.delete(`${this.url}/user1s/${id}`);
 }
 getCurrentUser(id:any){
  return this.http.get(`${this.url}/user1s/${id}`);
}
updateUser(id:any,data:any){
  const body= {
    firstname: data.firstname,
  lastname: data.lastname,
  email: data.email,
  phone: data.phone,
  customerId: data.customerId,
  roleId: +data.roleId
  }
  return this.http.put(`${this.url}/user1s/${id}`,body);
}
deleteCustomer(id:any){
  return this.http.delete(`${this.url}/customers/${id}`);
}
updateCustomer(id:any,data:any){
  return this.http.put(`${this.url}/customers/${id}`,data);
}
getCurrentCustomer(id:any){
  return this.http.get(`${this.url}/customers/${id}`);
}
}
