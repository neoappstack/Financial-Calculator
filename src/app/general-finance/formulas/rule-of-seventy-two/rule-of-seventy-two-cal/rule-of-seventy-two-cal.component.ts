import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rule-of-seventy-two-cal',
  templateUrl: './rule-of-seventy-two-cal.component.html',
  styleUrls: ['./rule-of-seventy-two-cal.component.scss']
})
export class RuleOfSeventyTwoCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
