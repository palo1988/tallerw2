import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-adm',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './user-adm.component.html',
  styleUrl: './user-adm.component.css'
})
export class UserAdmComponent {
  
  servicio=inject(UserService)
  users:any
  id:any;
  email:any;
  password:any;
  type:any;
  ngOnInit(): void {
    this.servicio.getUsers().subscribe(u=>{
      this.users=u
    })
  }
  eliminar(id:any){
    this.servicio.deleteUserID(id).subscribe()
    window.location.reload()
  }
  guardar( datos: any){
    console.log(datos.value);
    this.servicio.postUsers(datos.value).subscribe()

    //recarga la página
    window.location.reload()

  }
  editar(datos:any){
    this.servicio.putUsers(datos.value).subscribe()
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
