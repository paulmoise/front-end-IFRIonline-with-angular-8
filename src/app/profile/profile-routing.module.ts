import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path:'profile',
    component:MainLayoutComponent,
    children:[{
      path:'',
      component:ProfileComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
