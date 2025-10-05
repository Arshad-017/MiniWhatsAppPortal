import { inject, Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientWrapperService {

    private _http = inject(HttpClient);
    private _globalService = inject(GlobalService)
    private _backendURL = this._globalService.backEndUrl
  
  
    getAllUsers(){
      return this._http.get(this._backendURL + '/register/getAllUsers' )
    }

    getChatHistroy(senderId : any , reciverId : any){
      let body = {
        senderId : senderId ,
        reciverId : reciverId
      }
      return this._http.post(this._backendURL + '/message/getChats' , body)
    }


    sendMessage(body : any){
      return this._http.post(this._backendURL + '/message/send' , body)
    }
}
