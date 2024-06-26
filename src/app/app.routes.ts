import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductoServiciosComponent } from './pages/producto-servicios/producto-servicios.component';
import { DetallepComponent } from './pages/detallep/detallep.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';
import { RegistroComponent } from './pages/registro/registro.component';
import { UserAdmComponent } from './pages/user-adm/user-adm.component';
import { formularioGuard } from './guards/formulario.guard';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { carritoGuard } from './guards/carrito.guard';

export const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'nosotros',component:NosotrosComponent},
{path:'producto',component:ProductoServiciosComponent},
{path:"detallep/:idProduct",component:DetallepComponent},
{path:"formulario",component:FormularioComponent,canActivate:[formularioGuard]},
{path:'login',component:LoginComponent,canActivate:[loginGuard]},
{path:'registro',component:RegistroComponent},
{path:'users',component:UserAdmComponent},
{path:'carrito',component:CarritoComponent,canActivate:[carritoGuard]},


{path: '',redirectTo:"home",pathMatch:'full'},
{path:'**',component:Error404Component}

];
