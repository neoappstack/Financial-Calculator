import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-present-value-factor',
  templateUrl: './present-value-factor.component.html',
  styleUrls: ['./present-value-factor.component.scss']
})
export class PresentValueFactorComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getPresentValueFactorDef();
  }

}