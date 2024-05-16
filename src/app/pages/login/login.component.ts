import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:any;
  password:any;
  token:any;
  ruta=inject(Router)
  servicio=inject(LoginService)
  login(formulario:any){
    this.servicio.postLogin(formulario.value).subscribe(u=>{
     this.token=u.accessToken
     if(this.token!=''){
      
      localStorage.setItem("acceso",'true')
      if('admin'==u.user.type){
        localStorage.setItem("admin",'true')
        window.location.href='formulario'
      }if('user'==u.user.type){
        localStorage.setItem("user",'true')
        window.location.href='producto'
      }if('visitante'==u.user.type){
        localStorage.setItem("visitante",'true')
        window.location.href='nosotros'
        localStorage.removeItem('acceso');
        localStorage.removeItem('visitante');
        localStorage.removeItem('token'); 
      }
      //this.ruta.navigateByUrl('privado')//cambia de pagina
       //<--- cambia la ruta de la pagina tambien
    }
    })
  
  }
  
}
