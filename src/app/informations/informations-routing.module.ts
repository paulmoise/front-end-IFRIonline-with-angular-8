import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { InformationsComponent } from './informations.component';

const routes: Routes = [
  {
    path:'informations',
    component:MainLayoutComponent,
    children:[{
      path:'',
      component:InformationsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationsRoutingModule { }
