import { Routes } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';
import { MainDashboardComponent } from '../pages/home/main-dashboard/main-dashboard.component';
import { SettingMainComponent } from '../pages/setting/setting-main/setting-main.component';
import { ChatMainComponent } from '../pages/home/Chat/chat-main/chat-main.component';
import { dashboardResolver } from '../resolver/dashboard.resolver';

export const chatBotRoute: Routes = [
    {
        path : '',
        component : FrameworkComponent,
        resolve : {
            reolvedData  : dashboardResolver
        },
        children : [
            {
                path : '',
                redirectTo : 'home',
                pathMatch : 'full'
            }
            ,
            {
                path : 'home',
                component : MainDashboardComponent
            },
            {
                path : 'setting' ,
                component : SettingMainComponent
            },
            {
                path : 'chat/:Id',
                component : ChatMainComponent
            }
        ]
    }
];
