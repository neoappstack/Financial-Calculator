import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompoundInterestRoutingModule } from './compound-interest-routing.module';
import { CompoundInterestComponent } from './compound-interest.component';
import { CompoundInterestCalComponent } from './compound-interest-cal/compound-interest-cal.component';

@NgModule({
  declarations: [CompoundInterestComponent, CompoundInterestCalComponent],
  imports: [
    CommonModule,
    CompoundInterestRoutingModule,
    FormulaDefinitionModule
  ]
})
export class CompoundInterestModule { }
