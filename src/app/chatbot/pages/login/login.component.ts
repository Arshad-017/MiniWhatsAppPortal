import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

   //Injections
   private _fb = inject(FormBuilder);
   private _globalService = inject(GlobalService);
   private _loginService = inject(LoginService);
   private _router = inject(Router)

  // Varibales
  loginForm : FormGroup = this._fb.group({});
  public errorMessage = ''

  //Functions
  ngOnInit(){
    this.initLoginForm()
  }


  private initLoginForm(){
    this.loginForm = this._fb.group({
      username : ['' ,  [Validators.required]] ,
      password : ['' ,  [Validators.required]]
    })
  }

  login(){
    this._loginService.userLogin(this.loginForm.get('username')?.value , this.loginForm.get('password')?.value ).subscribe((response) =>{
       this.setSessionData(response);
       this.errorMessage = ''
    },
    (error)=>{
      this.errorMessage = 'Invalid Username or Password'
    })
  }


  private setSessionData(response : any){
    window.sessionStorage.setItem('token' , response.token);
    window.sessionStorage.setItem('profileId' , response.profileId);
    this._router.navigate(['/amsoft'])
  }

}
