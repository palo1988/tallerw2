import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoservicioService } from '../../services/productoservicio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(ProductoservicioService)

  albums : any;
  valorMaximo=0;
  valorMinimo=0;
  buscador:any;

  ngOnInit(){
    this.servicio.getAlbums().subscribe( a =>{
      this.albums = a
    } )
  }

  eliminar(id:any){
    this.servicio.deleteAlbumID(id).subscribe()
    window.location.reload()
  }
  logout() {
    localStorage.removeItem('acceso');
    localStorage.removeItem('user');
    localStorage.removeItem('token'); 
    window.location.href='/login' 
  }


}
