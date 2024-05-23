import { Component, inject } from '@angular/core';
import { ProductoservicioService } from '../../services/productoservicio.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  servicio = inject(ProductoservicioService)
  ruta = inject(ActivatedRoute)
  albums : any;
 id:any;
 nombre:any;
artista:any;
genero:any;
anio:any;
image:any;
precio:any;
 
ngOnInit(){
    this.servicio.getAlbums().subscribe( a =>{
      this.albums = a
    } )
  }
/*
  ngOnInit() {
    this.ruta.params.subscribe(r => {
      console.log(r);
      
      this.servicio.getPersonaInfo(r['idProduct']).subscribe(p => {
        this.id = p.id
        this.nombre = p.nombre
        this.artista = p.artista
        this.genero= p.genero
        this.anio= p.anio
        this.image= p.image
        this.precio= p.precio
      })
    })
    
  }
*/
  eliminar(id:any){
    this.servicio.deleteAlbumID(id).subscribe()
    window.location.reload()
  }
  guardar( datos: any){
    console.log(datos.value);
    this.servicio.postAlbum(datos.value).subscribe()

    //recarga la página
    window.location.reload()

  }
  editar(datos:any){
    this.servicio.putAlbums(datos.value).subscribe()
    window.location.reload()
  }
  //ruta=inject(Router)
  logout() {
    localStorage.removeItem('acceso');
    localStorage.removeItem('admin');
    localStorage.removeItem('token'); 
    window.location.href='/login' 
  }

}
