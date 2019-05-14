import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-of-periods-of-annuity-from-fv',
  templateUrl: './no-of-periods-of-annuity-from-fv.component.html',
  styleUrls: ['./no-of-periods-of-annuity-from-fv.component.scss']
})
export class NoOfPeriodsOfAnnuityFromFVComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(private formulaDefinationService: GeneralFormulaDefinationService) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getNoOfPeriodsOfAnnuityFromFVComponentDef();
  }

}