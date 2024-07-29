import { Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[{
            path:'',loadChildren: ()=> import('./Components/Pages/pagesm/pages.module').then((m)=>m.PagesModule)
        }
       
        ]
    
    
    }
];