import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploiDuTempsRoutingModule } from './emploi-du-temps-routing.module';
import { EmploiDuTempsComponent } from './emploi-du-temps.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [EmploiDuTempsComponent],
  imports: [
    CommonModule,
    EmploiDuTempsRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule

    
  ]
})
export class EmploiDuTempsModule { }
