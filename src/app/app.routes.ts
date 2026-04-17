import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';

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
        component: Admin
    },
    {
        path: 'user',
        component: User
    }
];
