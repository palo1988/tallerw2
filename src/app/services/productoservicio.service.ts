import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoservicioService {

  constructor(private http: HttpClient) { }
  private API_ALBUMS="http://localhost:9090/album";
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
     //////// GUARDAR - POST /////////
  postAlbum(album: JSON): Observable <any>{
    return this.http.post(this.API_ALBUMS, album)
  }

  ////////// EDITAR - PUT ///////////
  putAlbums(album:any):Observable <any> {
    return this.http.put(`${this.API_ALBUMS}/${album.id}`, album)
  }
  
}
