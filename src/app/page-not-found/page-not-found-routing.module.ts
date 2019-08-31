import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterOnlyLayoutComponent } from '../layout/footer-only-layout/footer-only-layout.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path:'page-not-found',
    component:FooterOnlyLayoutComponent,
    children:[{
      path:'',
      component:PageNotFoundComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
