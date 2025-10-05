import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _http = inject(HttpClient);
  private _globalService = inject(GlobalService)



  userLogin(username : String , password : String){
    let requestBody = {
      username  : username ,
      password : password
    }
    return this._http.post(this._globalService.backEndUrl + '/login' , requestBody)
  }
}
