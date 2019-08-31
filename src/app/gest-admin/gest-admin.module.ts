import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestAdminRoutingModule } from './gest-admin-routing.module';
import { GestAdminComponent } from './gest-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GestAdminComponent],
  imports: [
    CommonModule,
    GestAdminRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule

  ]
})
export class GestAdminModule { }
