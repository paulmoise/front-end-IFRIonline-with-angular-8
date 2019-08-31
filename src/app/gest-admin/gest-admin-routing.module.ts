import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { GestAdminComponent } from './gest-admin.component';

const routes: Routes = [
  {
    path:'gest-admin',
    component:MainLayoutComponent,
    children:[{
      path:'',
      component:GestAdminComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestAdminRoutingModule { }
