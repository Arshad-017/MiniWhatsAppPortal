import { Routes } from '@angular/router';
import { LoginComponent } from './chatbot/pages/login/login.component';
import { FrameworkComponent } from './chatbot/fw/framework/framework.component';
import { MainDashboardComponent } from './chatbot/pages/home/main-dashboard/main-dashboard.component';
import { authGuard } from './chatbot/guard/auth.guard';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
        path : 'login',
        loadComponent : () => import('./chatbot/pages/login/login.component').then((c)=> c.LoginComponent)
    },
    {
        path : 'amsoft',
        canActivate : [authGuard],
        loadChildren : () => import('./chatbot/fw/fw.route').then((comp)=> comp.chatBotRoute)
    }
];
