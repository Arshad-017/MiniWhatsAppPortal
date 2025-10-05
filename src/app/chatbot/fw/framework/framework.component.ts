import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-framework',
  standalone: true,
  imports: [HeaderComponent , FooterComponent , SideNavComponent , RouterOutlet],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.scss'
})
export class FrameworkComponent  implements OnInit{

  //Injectiosn
  private _activatedRoute =  inject(ActivatedRoute)
  private _globalService = inject(GlobalService)
  public _activeUsers :  any ;


  //Functions
  ngOnInit(){
    this._activatedRoute.data.subscribe((response)=>{
      const resolvedData =  response['reolvedData'];
      this._activeUsers  =resolvedData[0].response;
      this._globalService.setActiveUsers(this._activeUsers)
    })
  }

}
