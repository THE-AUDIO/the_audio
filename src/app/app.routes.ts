import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"", loadComponent: ()=> import('./features/main/main').then((main)=>main.Main)
    }
];
