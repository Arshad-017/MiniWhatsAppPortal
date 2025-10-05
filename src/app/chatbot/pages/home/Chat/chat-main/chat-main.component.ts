import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientWrapperService } from '../../../../services/client-wrapper.service';
import { ChatHistoryComponent } from '../chat-history/chat-history.component';
import { GlobalService } from '../../../../services/global.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-main',
  standalone: true,
  imports: [ChatHistoryComponent , ReactiveFormsModule , FormsModule],
  templateUrl: './chat-main.component.html',
  styleUrl: './chat-main.component.scss'
})
export class ChatMainComponent implements OnInit{
  
  private _activatedRoute = inject(ActivatedRoute);
  private _clientWrapper = inject(ClientWrapperService);
  private _globalService = inject(GlobalService)
  

  public chatHistory : any = [];
  public chattingActiveBuddyProfile : any ;
  public chattingActiveBuddyProfileID : any ;
  public message = '';

  
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((prms)=>{
      this.chattingActiveBuddyProfileID = prms['Id']
       this.loadChatHistory(prms['Id']);
       this.getUserNameFromActiveUser();
       this.message = ''
    })    
  }

  loadChatHistory(chatBuddyProfileId : any){
     this._clientWrapper.getChatHistroy(window.sessionStorage.getItem('profileId') , chatBuddyProfileId).subscribe((history : any)=>{
        this.chatHistory = history.response ;
     })
  }

  getUserNameFromActiveUser(){
   this.chattingActiveBuddyProfile =  this._globalService.getActiveUsers().find((profile : any)=>{
        return profile?.profileId == this.chattingActiveBuddyProfileID
    })
  }

  sendMessage(){
    let body = {
      sender: window.sessionStorage.getItem('profileId') ,
      receiver: this.chattingActiveBuddyProfileID,
      content: this.message,
      isRead: false,  
      createdAt : ""
    }
    
    this._clientWrapper.sendMessage(body).subscribe((resp)=>{
      this.loadChatHistory(this.chattingActiveBuddyProfileID)
    })
  }
}
