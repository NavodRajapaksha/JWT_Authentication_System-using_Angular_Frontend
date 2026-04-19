import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { authGuard } from './components/auth/auth-guard';
import { Forbidden } from './components/forbidden/forbidden';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'admin',
        component: Admin,
        canActivate: [authGuard],
        data: { roles: ['Admin'] }
    },
    {
        path: 'user',
        component: User,
        canActivate: [authGuard],
        data: { roles: ['User', 'Admin'] }
    },
    {
        path: 'forbidden',
        component: Forbidden
    },
    { 
        path: '**', 
        redirectTo: '/home' 
    } 
];
