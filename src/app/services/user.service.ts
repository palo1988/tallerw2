import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private API_USERS="http://localhost:3000/users"
  //leer 
  getUsers():Observable<any>{
    return this.http.get(this.API_USERS)
      }
//leer ID
      getUsersID(id:any):Observable<any>{
        return this.http.get(`${this.API_USERS}/${id}`)
          }
//eliminar
          deleteUserID(id: any):Observable<any>{
            return this.http.delete(`${this.API_USERS}/${id}`)
          }  
          //guardar
          postUsers(users: JSON): Observable <any>{
            return this.http.post(this.API_USERS, users)
          }
          //editar
          putUsers(users:any):Observable <any> {
            return this.http.put(`${this.API_USERS}/${users.id}`, users)
          }
}
