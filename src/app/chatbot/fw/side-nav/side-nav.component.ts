import { NgClass } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [NgClass],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnInit {


  //Injections
  private _router = inject(Router)
  public _globalService = inject(GlobalService)
  //Variables
  public isActiveId : any = -1;
  @Input('_activeUsers') _activeUsers !: any ;


  //Functions
  ngOnInit(){

  }

  get getActiveProfileID(){
    return window.sessionStorage.getItem('profileId')
  }



  openMessageWindow(id : any){
    this.isActiveId = id ;
    this._router.navigateByUrl('amsoft/chat/' + this.isActiveId)
  }

}
