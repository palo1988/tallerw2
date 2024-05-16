import { CanActivateFn } from '@angular/router';

export const formularioGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('admin')=='true'){
    return true
  } else{
    return false;
  }}

