import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = window.sessionStorage.getItem('token') || "";
  const _router = inject(Router)

  if(token.length)
    return true;
  else{
    _router.navigate(['/login']);
    return false;
  }
    
};
