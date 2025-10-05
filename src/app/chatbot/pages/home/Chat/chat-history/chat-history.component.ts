import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { interval } from 'rxjs';
import { ClientWrapperService } from '../../../../services/client-wrapper.service';

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [CommonModule , DatePipe],
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.scss'
})
export class ChatHistoryComponent {


   //Injectiposn
   private _clientWrapper = inject(ClientWrapperService)


   //Variables
   public interval = interval(3000)

   //Input/OutPut
   @Input('chatHistory')  chatHistory : any = [] ;
   @Input('chattingActiveBuddyProfileID') chattingActiveBuddyProfileID : any = -1;
   public profileId = window.sessionStorage.getItem('profileId')  || -1 ;


   //Functions
   ngOnInit(){
    this.interval.subscribe((polling)=>{
       this.loadChatHistoryAgain(this.chattingActiveBuddyProfileID);
    })

   }

  loadChatHistoryAgain(chatBuddyProfileId : any){
     this._clientWrapper.getChatHistroy(window.sessionStorage.getItem('profileId') , chatBuddyProfileId).subscribe((history : any)=>{
        this.chatHistory = history.response ;
     })
  }

}
