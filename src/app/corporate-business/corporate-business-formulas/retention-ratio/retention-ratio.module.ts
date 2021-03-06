import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetentionRatioRoutingModule } from './retention-ratio-routing.module';
import { RetentionRatioComponent } from './retention-ratio.component';
import { RetentionRatioCalComponent } from './retention-ratio-cal/retention-ratio-cal.component';

@NgModule({
  declarations: [RetentionRatioComponent, RetentionRatioCalComponent],
  imports: [
    CommonModule,
    RetentionRatioRoutingModule,
    FormulaDefinitionModule
  ]
})
export class RetentionRatioModule { }
