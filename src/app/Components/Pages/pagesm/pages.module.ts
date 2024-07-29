import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import {AboutComponent} from '../Components/about/about.component';
import { ContactComponent } from '../Components/contact/contact.component';
import { ServicesComponent } from '../Components/services/services.component';
export const routes:Routes=[
 { path:''
 ,children:[{
  path:'',
  redirectTo:'About',
  pathMatch:'full',
 },
{
  path:'About',
  component:AboutComponent
},
{
  path:'contact',
  component:ContactComponent
}
,{
    path:'Services',
    component:ServicesComponent
},


]
}
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
