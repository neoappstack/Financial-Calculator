import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributionMarginRoutingModule } from './contribution-margin-routing.module';
import { ContributionMarginComponent } from './contribution-margin.component';
import { ContributionMarginCalComponent } from './contribution-margin-cal/contribution-margin-cal.component';

@NgModule({
  declarations: [ContributionMarginComponent, ContributionMarginCalComponent],
  imports: [
    CommonModule,
    ContributionMarginRoutingModule,
    FormulaDefinitionModule
  ]
})
export class ContributionMarginModule { }
