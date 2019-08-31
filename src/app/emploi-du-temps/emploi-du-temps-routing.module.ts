import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { EmploiDuTempsComponent } from './emploi-du-temps.component';

const routes: Routes = [
  {
    path:'emploi-du-temps',
    component:MainLayoutComponent,
    children:[{
      path:'',
      component:EmploiDuTempsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploiDuTempsRoutingModule { }
