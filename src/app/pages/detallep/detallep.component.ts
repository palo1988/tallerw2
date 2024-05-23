import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductoservicioService } from '../../services/productoservicio.service';

@Component({
  selector: 'app-detallep',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detallep.component.html',
  styleUrls: ['./detallep.component.css']
})
export class DetallepComponent implements OnInit {
  id: any;
  album: any;

  router = inject(Router);
  ruta = inject(ActivatedRoute);
  servicio = inject(ProductoservicioService);

  ngOnInit(): void {
    this.ruta.params.subscribe(p => {
      this.id = p['idProduct'];
      
      this.servicio.getPersonaInfo(this.id).subscribe(a => {
        this.album = a;
        console.log(this.album); // Verifica que se están recibiendo los datos
      }, error => {
        console.error('Error al obtener los datos del álbum:', error);
      });
    });
  }
}
