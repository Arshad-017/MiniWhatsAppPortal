import { HttpInterceptorFn } from '@angular/common/http';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  
  const reqWithHeader = req.clone({
    headers: req.headers.set('authorization', `Bearer ${window.sessionStorage.getItem('token')}`),
  });
  
  return next(reqWithHeader);
};
