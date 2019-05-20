import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-present-value-of-growing-annuity',
  templateUrl: './present-value-of-growing-annuity.component.html',
  styleUrls: ['./present-value-of-growing-annuity.component.scss']
})
export class PresentValueOfGrowingAnnuityComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getPresentValueOfGrowingAnnuityDef();
  }

}