import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { finalize, tap } from 'rxjs';
import { GlobalService } from '../services/global.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  
  const _ngxService = inject(NgxUiLoaderService);
  const _globalService = inject(GlobalService)

  if(req.url.includes('message/getChats') || req.url.includes('message/send')){
    return next(req)
  }else{
    _globalService.httpRequestCounter++ ;
    _ngxService.start()
  
    return next(req).pipe(
        finalize(() => {
          _globalService.httpRequestCounter--;
          if(_globalService.httpRequestCounter == 0){
            _ngxService.stop();
          }
        })
      );
  }
};
