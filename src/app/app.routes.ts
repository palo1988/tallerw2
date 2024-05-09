import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductoServiciosComponent } from './pages/producto-servicios/producto-servicios.component';
import { DetallepComponent } from './pages/detallep/detallep.component';

export const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'nosotros',component:NosotrosComponent},
{path:'producto',component:ProductoServiciosComponent},
{path:"detallep/:idProduct",component:DetallepComponent},

{path: '',redirectTo:"home",pathMatch:'full'},
{path:'**',component:Error404Component}

];
