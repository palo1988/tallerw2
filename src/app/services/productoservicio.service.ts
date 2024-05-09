import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoservicioService {

  constructor(private http: HttpClient) { }
  private API_ALBUMS="http://localhost:3000/album";
  getAlbums(): Observable <any>{
    return this.http.get( this.API_ALBUMS)
  }
  getPersonaInfo(id:any):Observable<any>{
    return this.http.get(`${this.API_ALBUMS}/${id}`)
   }
    
    ////////// ELIMINAR - DELETE //////////
    deleteAlbumID(id: any):Observable<any>{
      return this.http.delete(`${this.API_ALBUMS}/${id}`)
    }
  
}
