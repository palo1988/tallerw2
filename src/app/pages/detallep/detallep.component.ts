import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductoservicioService } from '../../services/productoservicio.service';

@Component({
  selector: 'app-detallep',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detallep.component.html',
  styleUrl: './detallep.component.css'
})
export class DetallepComponent {
  id:any;
  nombre: any;
  artista: any;
  genero: any;
  anio:any;
  album:any;
  
  router = inject(Router)
  ruta= inject(ActivatedRoute)
  servicio=inject(ProductoservicioService)
  ngOnInit(): void {
    this.ruta.params.subscribe(p=>{
      this.id=p['idProduct']
      this.servicio.getPersonaInfo(this.id).subscribe(a=>{
      this.album=a
        /* this.id = p.id
        this.nombre= p.nombre
        this.artista = p.artista
        this.genero=p.genero
        this.anio=p.anio*/
      })
    })
    
  }

}
