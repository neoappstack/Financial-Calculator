(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{F1R7:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var a=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()},Fvo5:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var a=function(){return function(){}}()},NBXG:function(n,e,t){"use strict";var a={id:1,title:"Annuity Payment - FV",subtitle:"Annuity Payment - FV",defination:["TThe annuity payment formula shown above is used to calculate the cash\n  flows of an annuity when future value is known. An annuity is denoted as a series of\n  periodic payments.","The annuity payment formula shown here is specifically used when\n  the future value is known, as opposed to the annuity payment formula used when present\n  value is known. There are not only mathematical differences between calculating an\n  annuity when present value is known and when future value is known, but also differences\n  in the real life application of the formulas. ","For example, if an individual is wanting\n  to calculate the payments on a loan, the original loan balance would be considered the\n  present value and the payment formula would accommodate this known variable. However,\n  if an individual is wanting to calculate how much they need to save per year in an interest\n  bearing account to have a certain balance after a specific period of time, then this wanted\n  balance would be considered the future value. The latter example would use the annuity payment\n  using future value formula as the balance is increasing instead of decreasing."],formula:" = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]",formulaRef:["P = Periodic Payment","r = rate per period","n = number of periods"],tags:["General Finance","Future Value of Annuity"]},u={id:1,title:"Annuity Payment (PV)",subtitle:"Annuity Payment (PV)",defination:["The annuity payment formula is used to calculate the periodic payment\n  on an annuity. An annuity is a series of periodic payments that are received at a\n  future date. The present value portion of the formula is the initial payout, with\n  an example being the original payout on an amortized loan.","The annuity payment\n  formula shown is for ordinary annuities. This formula assumes that the rate does\n  not change, the payments stay the same, and that the first payment is one period\n  away. An annuity that grows at a proportionate rate would use the growing annuity\n  payment formula. Otherwise, an annuity that changes the payment and/or rate would\n  need to be adjusted for each change. An annuity that has its first payment due at\n  the beginning would use the annuity due payment formula and the deferred annuity\n  payment formula would have a payment due at a later date."," The annuity payment\n  formula can be used for amortized loans, income annuities, structured settlements,\n  lottery payouts(see annuity due payment formula if first payment starts immediately),\n  and any other type of constant periodic payments."],formula:" = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]",formulaRef:["P = Periodic Payment","r = rate per period","n = number of periods"],tags:["General Finance","Future Value of Annuity"]},o={id:1,title:"Annuity (FV)- Solve for n",subtitle:"Annuity (FV)- Solve for n",defination:["The formula for solving for number of periods (n) on an annuity\n  shown above is used to calculate the number of periods based on the future value,\n  rate, and periodic cash flows.",'The formula at the top of the page, solving for n,\n  generally approaches the question "How long will it take to save $x amount dollars\n  by saving $y per month at a rate of z%".',"Example of Solve for n on Annuity\n  Formula","Suppose that an individual receives an additional $1000 pay or bonus\n  semiannually. Suppose this individual would like to find out how long until they\n  save $19600 by saving $1,000 every half year at an effective rate of 5% every half\n  year. **It is important to remember that the rate should match the frequency of the\n  cash flows/payments. For example, if cash flows are semi-annual, then the effective\n  semi-annual rate is used. The term effective implies that compounding is already\n  adjusted for that period (see effective rate)."],formula:" = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]",formulaRef:["P = Periodic Payment","r = rate per period","n = number of periods"],tags:["General Finance","Future Value of Annuity"]},i={id:1,title:"FV of Annuity - Continuous Compounding",subtitle:"FV of Annuity - Continuous Compounding",defination:["The future value (FV) of an annuity with\n   continuous compounding formula is used to calculate\n   the ending balance on a series of periodic payments\n   that are compounded continuously. Understanding the\n   future value of annuity with continuous compounding\n   formula requires the understanding of two specific\n   financial and mathematical concepts, which are future\n   value of an annuity and continuous compounding.","Future Value of Annuity, Continuous Compounding, and Geometric Series:",'Future Value of Annuity - The future value of an annuity is the sum\n    of a series of periodic payments and typically involves compounding\n    of interest as the balance increases. The formula for future value\n    of annuity alone generally solves the question "How much will I\n    have saved at X dollars per month after Y months."',"Continuous Compounding - Continuous compounding is compounding that\n    is constant. One way some try to visualize the concept of continuous\n    compounding is that is fluid, constantly compounding moment by moment,\n    as opposed to daily, monthly, quarterly, or annually. The question a few\n    sentences above regarding 'How much will I have saved' must also take into\n   consideration how often interest is compounded in the interest bearing account"],formula:"",formulaRef:["P = Periodic Payment","r = rate per period","n = number of periods"],tags:["General Finance","Future Value of Annuity"]},l={id:1,title:"Future Value of Annuity",subtitle:"Future Value of Annuity",defination:["The future value of an annuity formula is used to calculate what the\n    value at a future date would be for a series of periodic payments.","The future value of an annuity formula assumes that","1. The rate does not change","2. The first payment is one period away","3. The periodic payment does not change","If the rate or periodic payment does change, then the sum of the future value of\n     each individual cash flow would need to be calculated to determine the future value\n     of the annuity. If the first cash flow, or payment, is made immediately, the future\n     value of annuity due formula would be used."],formula:" = P * \\left [ \\frac{\\left ( 1 + r \\right )^{n}}{r}  -1 \\right ]",formulaRef:["P = Periodic Payment","r = rate per period","n = number of periods"],tags:["General Finance","Future Value of Annuity"]},r=t("CcnG");t.d(e,"a",function(){return s});var s=function(){function n(){}return n.prototype.getFutureValueOfAnnuityDef=function(){return l},n.prototype.getFutureValueOfAnnuityContinuousCompoundingDef=function(){return i},n.prototype.getNoOfPeriodsOfAnnuityFromFVComponentDef=function(){return o},n.prototype.getAnnuityPaymentFormulaDef=function(){return u},n.prototype.getAnnuityPaymentFromFutureValueDef=function(){return a},n.ngInjectableDef=r.defineInjectable({factory:function(){return new n},token:n,providedIn:"root"}),n}()},wBqd:function(n,e,t){"use strict";var a=t("CcnG"),u=t("Ip0R");t("F1R7"),t.d(e,"a",function(){return o}),t.d(e,"b",function(){return l});var o=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function i(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a["\u0275ted"](1,null,[" "," "]))],null,function(n,e){n(e,1,0,e.context.$implicit)})}function l(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,8,"div",[["class","card"]],null,null,null,null,null)),(n()(),a["\u0275eld"](1,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),a["\u0275eld"](2,0,null,null,1,"h5",[["class","title"]],null,null,null,null,null)),(n()(),a["\u0275ted"](3,null,["",""])),(n()(),a["\u0275eld"](4,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),a["\u0275eld"](5,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(n()(),a["\u0275eld"](6,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),a["\u0275and"](16777216,null,null,1,null,i)),a["\u0275did"](8,278528,null,0,u.j,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,8,0,e.component.formulaDefination.defination)},function(n,e){n(e,3,0,e.component.formulaDefination.title)})}}}]);