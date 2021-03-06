import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-of-growing-annuity-cal',
  templateUrl: './present-value-of-growing-annuity-cal.component.html',
  styleUrls: ['./present-value-of-growing-annuity-cal.component.scss']
})
export class PresentValueOfGrowingAnnuityCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
