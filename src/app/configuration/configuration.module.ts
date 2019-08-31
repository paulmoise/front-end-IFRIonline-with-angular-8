import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationComponent } from './configuration.component';
import { MaterialFileUploadComponent } from '../material-file-upload/material-file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [
    ConfigurationComponent,
    MaterialFileUploadComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule
  ]
})
export class ConfigurationModule { }
