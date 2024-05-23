import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

interface Album {
  id: number;
  title: string;
  price: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private API_ALBUMS = "http://localhost:3000/album";
  private carrito: Album[] = [];
  private carritoSubject = new BehaviorSubject<Album[]>(this.carrito);

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.http.get(this.API_ALBUMS);
  }

  getPersonaInfo(id: any): Observable<any> {
    return this.http.get(`${this.API_ALBUMS}/${id}`);
  }

  deleteAlbumID(id: any): Observable<any> {
    return this.http.delete(`${this.API_ALBUMS}/${id}`);
  }

  postAlbum(album: JSON): Observable<any> {
    return this.http.post(this.API_ALBUMS, album);
  }

  putAlbums(album: any): Observable<any> {
    return this.http.put(`${this.API_ALBUMS}/${album.id}`, album);
  }

  // Métodos del carrito de compras
  getCarrito(): Observable<Album[]> {
    return this.carritoSubject.asObservable();
  }

  agregarAlCarrito(album: Album) {
    this.carrito.push(album);
    this.carritoSubject.next(this.carrito);
  }

  eliminarDelCarrito(id: number) {
    this.carrito = this.carrito.filter(album => album.id !== id);
    this.carritoSubject.next(this.carrito);
  }
}

