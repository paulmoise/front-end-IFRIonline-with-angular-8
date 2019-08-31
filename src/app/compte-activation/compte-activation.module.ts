import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteActivationRoutingModule } from './compte-activation-routing.module';
import { CompteActivationComponent } from './compte-activation.component';

@NgModule({
  declarations: [CompteActivationComponent],
  imports: [
    CommonModule,
    CompteActivationRoutingModule
  ]
})
export class CompteActivationModule { }
