import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-present-value-annuity-factor',
  templateUrl: './present-value-annuity-factor.component.html',
  styleUrls: ['./present-value-annuity-factor.component.scss']
})
export class PresentValueAnnuityFactorComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getPresentValueAnnuityFactorDef();
  }

}
