import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-cal',
  templateUrl: './present-value-cal.component.html',
  styleUrls: ['./present-value-cal.component.scss']
})
export class PresentValueCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}