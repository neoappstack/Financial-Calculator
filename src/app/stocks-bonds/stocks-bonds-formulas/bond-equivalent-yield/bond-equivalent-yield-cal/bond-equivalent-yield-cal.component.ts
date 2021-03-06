import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bond-equivalent-yield-cal',
  templateUrl: './bond-equivalent-yield-cal.component.html',
  styleUrls: ['./bond-equivalent-yield-cal.component.scss']
})
export class BondEquivalentYieldCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
