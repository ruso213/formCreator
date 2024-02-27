import { Route } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';

export const appRoutes: Route[] = [
    {
        path:'inicio',
        component:InicioComponent
    },
    {
        path:'register',
        component:InicioComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:"**",
        redirectTo:'inicio'
    }
];
