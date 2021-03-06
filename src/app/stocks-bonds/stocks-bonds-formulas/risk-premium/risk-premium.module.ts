import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskPremiumRoutingModule } from './risk-premium-routing.module';
import { RiskPremiumComponent } from './risk-premium.component';
import { RiskPremiumCalComponent } from './risk-premium-cal/risk-premium-cal.component';

@NgModule({
  declarations: [RiskPremiumComponent, RiskPremiumCalComponent],
  imports: [
    CommonModule,
    RiskPremiumRoutingModule,
    FormulaDefinitionModule
  ]
})
export class RiskPremiumModule { }
