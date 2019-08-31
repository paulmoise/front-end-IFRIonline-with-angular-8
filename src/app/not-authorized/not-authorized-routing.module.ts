import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterOnlyLayoutComponent } from '../layout/footer-only-layout/footer-only-layout.component';
import { NotAuthorizedComponent } from './not-authorized.component';

const routes: Routes = [
  {
    path:'not-authorized',
    component:FooterOnlyLayoutComponent,
    children:[{
      path:'',
      component:NotAuthorizedComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotAuthorizedRoutingModule { }
