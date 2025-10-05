import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public backEndUrl : string  = 'http://localhost:5003/api';
  private _activeUsers = [];
  public activeUsersList = new Subject<any>();
  public httpRequestCounter : number = 0;


  public setActiveUsers(activeUsers : any){
    this._activeUsers = activeUsers;
  }

  public getActiveUsers(){
    return this._activeUsers;
  }




}
