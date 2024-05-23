import { CanActivateFn } from '@angular/router';

export const carritoGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('admin')=='true'||localStorage.getItem('user')=='true'){
    return true
  } else{
    return false;
  }}