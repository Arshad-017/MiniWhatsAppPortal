import { query } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {

  //Injections
  private _activatedRoute = inject(ActivatedRoute)



  //Varibales
  public profileObjectId = -1


  //Functions
  ngOnInit(){
    this.loadQurryParams();
  }

  private loadQurryParams(){
    this._activatedRoute.params.subscribe((params)=>{
      this.profileObjectId = params['Id'] 
    })
  }

}
