import { ResolveFn } from '@angular/router';
import { ClientWrapperService } from '../services/client-wrapper.service';
import { inject } from '@angular/core';
import { forkJoin } from 'rxjs';

export const dashboardResolver: ResolveFn<any> = (route, state) => {
   const _clientWarpperServ =  inject(ClientWrapperService);

   let getUsers = _clientWarpperServ.getAllUsers();


   return forkJoin([ getUsers ])


};
