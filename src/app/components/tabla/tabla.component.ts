import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoservicioService } from '../../services/productoservicio.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(ProductoservicioService)

  albums : any;

  ngOnInit(){
    this.servicio.getAlbums().subscribe( a =>{
      this.albums = a
    } )
  }

  eliminar(id:any){
    this.servicio.deleteAlbumID(id).subscribe()
    window.location.reload()
  }


}
