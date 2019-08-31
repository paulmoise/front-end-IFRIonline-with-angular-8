import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    FooterOnlyLayoutComponent,
    HeaderComponent,
    MainLayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports:[MainLayoutComponent, FooterComponent]
})
export class LayoutModule { }
