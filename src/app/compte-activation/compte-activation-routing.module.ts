import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterOnlyLayoutComponent } from '../layout/footer-only-layout/footer-only-layout.component';
import { CompteActivationComponent } from './compte-activation.component';

const routes: Routes = [
  {
    path:'compte-activation',
    component:FooterOnlyLayoutComponent,
    children:[{
      path:'',
      component:CompteActivationComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteActivationRoutingModule { }
