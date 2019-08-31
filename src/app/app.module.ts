import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FooterOnlyLayoutComponent } from './layout/footer-only-layout/footer-only-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ResultExamsComponent } from './result-exams/result-exams.component';
import { EmploiDuTempsComponent } from './emploi-du-temps/emploi-du-temps.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { CompteActivationModule } from './compte-activation/compte-activation.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmploiDuTempsModule } from './emploi-du-temps/emploi-du-temps.module';
import { GestAdminModule } from './gest-admin/gest-admin.module';
import { InformationsModule } from './informations/informations.module';
import { LayoutModule } from './layout/layout.module';
import { RessourcesModule } from './ressources/ressources.module';
import { ResultExamsModule } from './result-exams/result-exams.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { NotAuthorizedModule } from './not-authorized/not-authorized.module';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigurationModule } from './configuration/configuration.module';
import { FileSelectDirective, FileUploader, FileUploadModule } from 'ng2-file-upload';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LoginModule,
    ProfileModule,
    CompteActivationModule,
    DashboardModule,
    EmploiDuTempsModule,
    GestAdminModule,
    InformationsModule,
    LayoutModule,
    RessourcesModule,
    ResultExamsModule,
    EmploiDuTempsModule,
    PageNotFoundModule,
    NotAuthorizedModule,
    ConfigurationModule,
    FileUploadModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
