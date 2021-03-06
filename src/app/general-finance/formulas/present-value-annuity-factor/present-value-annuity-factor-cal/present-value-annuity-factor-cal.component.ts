import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-annuity-factor-cal',
  templateUrl: './present-value-annuity-factor-cal.component.html',
  styleUrls: ['./present-value-annuity-factor-cal.component.scss']
})
export class PresentValueAnnuityFactorCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
