import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameworkComponent } from './chatbot/fw/framework/framework.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FrameworkComponent , NgxUiLoaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ChatPortal';
}
