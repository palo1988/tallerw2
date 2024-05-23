import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoservicioService } from '../../services/productoservicio.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule, RouterLink,CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  servicio = inject(CarritoService);
  ruta = inject(ActivatedRoute);
  albums: any;
  carrito: any;
  id: any;
  nombre: any;
  artista: any;
  genero: any;
  anio: any;
  image: any;
  precio: any;

  ngOnInit() {
    this.servicio.getAlbums().subscribe(a => {
      this.albums = a;
    });

    this.servicio.getCarrito().subscribe(carrito => {
      this.carrito = carrito;
    });
  }

  eliminar(id: any) {
    this.servicio.deleteAlbumID(id).subscribe();
    window.location.reload();
  }

  guardar(datos: any) {
    console.log(datos.value);
    this.servicio.postAlbum(datos.value).subscribe();

    //recarga la página
    window.location.reload();
  }

  editar(datos: any) {
    this.servicio.putAlbums(datos.value).subscribe();
    window.location.reload();
  }

  agregarAlCarrito(album: any) {
    this.servicio.agregarAlCarrito(album);
  }

  eliminarDelCarrito(id: number) {
    this.servicio.eliminarDelCarrito(id);
  }
  totalPrecioCarrito(): number {
    let total = 0;
    for (let item of this.carrito) {
        total += item.precio;
    }
    
    return Math.round(total * 10) / 10;
}




  logout() {
    localStorage.removeItem('acceso');
    localStorage.removeItem('admin');
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
