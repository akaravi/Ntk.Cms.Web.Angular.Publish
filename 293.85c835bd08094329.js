"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[293],{99654:(K,Z,s)=>{s.d(Z,{B:()=>t});var r=s(86889),a=s(64537);let t=(()=>{var h;class e{transform(S,A){if(!A||0===A.length)return"";const I=A.find(p=>p.key===S||p.value===S);return I?I.description:""}}return h=e,(0,r.Z)(e,"\u0275fac",function(S){return new(S||h)}),(0,r.Z)(e,"\u0275pipe",a.Yjl({name:"enums",type:h,pure:!0})),e})()},47907:(K,Z,s)=>{s.d(Z,{H:()=>y});var r=s(86889),a=s(54536),t=s(34511),h=s(60656),e=s(64537),D=s(32607),S=s(56707),A=s(94032),I=s(88692),p=s(46997),C=s(75738),v=s(99654);function P(O,E){1&O&&(e.TgZ(0,"div"),e._UZ(1,"span",13)(2,"br"),e.qZA()),2&O&&(e.xp6(1),e.Q6J("inlineSVG","assets/media/svg/icons/General/Shield-check.svg"))}function T(O,E){if(1&O&&(e.TgZ(0,"div",8)(1,"div",9)(2,"div",10),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",10),e._uU(6),e.qZA(),e._UZ(7,"div",11),e.qZA(),e.TgZ(8,"div",9)(9,"div",10),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"div",10),e.YNc(13,P,3,1,"div",12),e._uU(14),e.ALo(15,"enums"),e.qZA(),e._UZ(16,"div",11),e.qZA(),e.TgZ(17,"div",9)(18,"div",10),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"div",10),e._uU(22),e.qZA(),e._UZ(23,"div",11),e.qZA(),e.TgZ(24,"div",9)(25,"div",10),e._uU(26),e.ALo(27,"translate"),e.qZA(),e.TgZ(28,"div",10),e._uU(29),e.qZA(),e._UZ(30,"div",11),e.qZA()()),2&O){const g=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,11,"TITLE.Transaction_ID")),e.xp6(3),e.Oqu(g.dataModelResult.item.id),e.xp6(4),e.AsE("",e.lcZ(11,13,"TITLE.Transaction_status"),":",g.requestId,""),e.xp6(3),e.Q6J("ngIf",g.dataModelResult.item.transactionStatus===g.TransactionSuccessful),e.xp6(1),e.hij(" ",e.xi3(15,15,g.dataModelResult.item.transactionStatus,g.dataModelEnumTransactionRecordStatusResult.listItems)," "),e.xp6(5),e.hij(" ",e.lcZ(20,18,"TITLE.Amount")," "),e.xp6(3),e.AsE("",g.dataModelResult.item.amount," ",g.dataModelResult.item.currencyUnit,""),e.xp6(4),e.hij("",e.lcZ(27,20,"TITLE.Message")," "),e.xp6(3),e.Oqu(g.dataModelResult.item.lastStatusMessage)}}let y=(()=>{var O;class E{constructor(u,f,R,U,L,W,B,b){(0,r.Z)(this,"data",void 0),(0,r.Z)(this,"bankPaymentTransactionService",void 0),(0,r.Z)(this,"dialogRef",void 0),(0,r.Z)(this,"bankPaymentEnumService",void 0),(0,r.Z)(this,"cmsToastrService",void 0),(0,r.Z)(this,"translate",void 0),(0,r.Z)(this,"cdr",void 0),(0,r.Z)(this,"publicHelper",void 0),(0,r.Z)(this,"id",++E.nextId),(0,r.Z)(this,"requestId",0),(0,r.Z)(this,"loading",new h.O),(0,r.Z)(this,"dataModelResult",new t.y$4),(0,r.Z)(this,"dataModelEnumTransactionRecordStatusResult",new t.y$4),(0,r.Z)(this,"TransactionSuccessful",t.VnT.TransactionSuccessful),this.data=u,this.bankPaymentTransactionService=f,this.dialogRef=R,this.bankPaymentEnumService=U,this.cmsToastrService=L,this.translate=W,this.cdr=B,this.publicHelper=b,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information"),u&&(this.requestId=+u.id||0)}get optionLoading(){return this.loading}set optionLoading(u){this.loading=u}ngOnInit(){if(this.requestId<=0)return this.cmsToastrService.typeErrorComponentAction(),void this.dialogRef.close({dialogChangedDate:!1});this.DataGeOne(),this.getEnumTransactionRecordStatus()}getEnumTransactionRecordStatus(){this.bankPaymentEnumService.ServiceTransactionRecordStatusEnum().subscribe(u=>{this.dataModelEnumTransactionRecordStatusResult=u})}DataGeOne(){const u=this.constructor.name+"main";this.loading.Start(u),this.bankPaymentTransactionService.ServiceGetOneById(this.requestId).subscribe(f=>{f.isSuccess?this.dataModelResult=f:this.cmsToastrService.typeErrorMessage(f.errorMessage),this.loading.Stop(u)},f=>{this.cmsToastrService.typeError(f),this.loading.Stop(u)})}onFormCancel(){this.dialogRef.close({dialogChangedDate:!0})}}return O=E,(0,r.Z)(E,"nextId",0),(0,r.Z)(E,"\u0275fac",function(u){return new(u||O)(e.Y36(a.WI),e.Y36(t.zRJ),e.Y36(a.so),e.Y36(t.T7Z),e.Y36(D.e),e.Y36(S.sK),e.Y36(e.sBO),e.Y36(A.i))}),(0,r.Z)(E,"\u0275cmp",e.Xpm({type:O,selectors:[["app-cms-bankpayment-transaction-info"]],inputs:{optionLoading:"optionLoading"},decls:12,vars:9,consts:[[1,"ntk-cms-html-card-header"],[1,"ntk-cms-html-card-body"],[3,"options"],["class","table",4,"ngIf"],[1,"ntk-cms-html-card-footer"],[1,"form-actions"],["type","button",1,"btn","btn-light",3,"click"],[1,"ft-x"],[1,"table"],[1,"tr"],[1,"td"],[2,"clear","both"],[4,"ngIf"],[1,"svg-icon","svg-icon-3x","svg-icon-primary",3,"inlineSVG"]],template:function(u,f){1&u&&(e.TgZ(0,"div",0),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"div",1),e._UZ(4,"app-progress-spinner",2),e.YNc(5,T,31,22,"div",3),e.qZA(),e.TgZ(6,"div",4)(7,"div",5)(8,"button",6),e.NdJ("click",function(){return f.onFormCancel()}),e._UZ(9,"i",7),e._uU(10),e.ALo(11,"translate"),e.qZA()()()),2&u&&(e.xp6(1),e.AsE(" ",e.lcZ(2,5,"TITLE.Transaction_status"),":",f.requestId," "),e.xp6(3),e.Q6J("options",f.loading),e.xp6(1),e.Q6J("ngIf",f.dataModelResult.item&&f.dataModelResult.item.id>0),e.xp6(5),e.hij(" ",e.lcZ(11,7,"ACTION.BACK")," "))},dependencies:[I.O5,p.d$,C.O,S.X$,v.B],styles:[".table[_ngcontent-%COMP%]{display:table;border:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%]{display:table-row;background-color:#40a1f5;color:#fff;font-weight:700}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f9f9f9}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]{display:table-row;border-bottom:1px solid #000}.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]{display:table-cell;padding:15px;border-bottom:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%]{border:0}.clear[_ngcontent-%COMP%]{clear:both}"]})),E})()},76049:(K,Z,s)=>{s.d(Z,{T:()=>M});var r=s(8239),a=s(86889),t=s(64537),h=s(20092),e=s(34511),D=s(57445),S=s(51927),A=s(83151),I=s(42147),p=s(61528),C=s(27969),v=s(60656),P=s(56707),T=s(94032),y=s(88692),O=s(61637),E=s(1379),g=s(88659),u=s(83331),f=s(39665),R=s(75738),U=s(81418);function L(_,c){if(1&_&&(t._UZ(0,"img",9),t.ALo(1,"cmsthumbnail")),2&_){const i=t.oxw();t.s9C("src",t.lcZ(1,1,i.dataModelSelect.linkMainImageIdSrc),t.LSH)}}function W(_,c){if(1&_&&(t._UZ(0,"img",9),t.ALo(1,"cmsthumbnail")),2&_){const i=t.oxw().$implicit;t.s9C("src",t.lcZ(1,1,i.linkMainImageIdSrc),t.LSH)}}function B(_,c){if(1&_&&(t.TgZ(0,"mat-option",10),t.YNc(1,W,2,3,"img",3),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&_){const i=c.$implicit,n=t.oxw();t.Q6J("value",i)("disabled",n.optionDisabled),t.xp6(1),t.Q6J("ngIf",i.linkMainImageIdSrc),t.xp6(2),t.Oqu(n.displayOption(i))}}function b(_,c){if(1&_){const i=t.EpF();t.TgZ(0,"mat-icon",11),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.onActionSelectClear())}),t._uU(1,"close"),t.qZA()}}const N=["*"];let M=(()=>{var _;class c{constructor(n,o,m,l,d){(0,a.Z)(this,"coreEnumService",void 0),(0,a.Z)(this,"translate",void 0),(0,a.Z)(this,"cdr",void 0),(0,a.Z)(this,"publicHelper",void 0),(0,a.Z)(this,"categoryService",void 0),(0,a.Z)(this,"id",++c.nextId),(0,a.Z)(this,"dataModelResult",new e.y$4),(0,a.Z)(this,"dataModelSelect",new e.CWo),(0,a.Z)(this,"formControl",new h.NI),(0,a.Z)(this,"filteredOptions",void 0),(0,a.Z)(this,"optionDisabled",!1),(0,a.Z)(this,"optionSelectFirstItem",!1),(0,a.Z)(this,"optionPlaceholder",""),(0,a.Z)(this,"optionChange",new t.vpe),(0,a.Z)(this,"optionReload",()=>this.onActionReload()),(0,a.Z)(this,"loading",new v.O),(0,a.Z)(this,"dateUseStore",!0),this.coreEnumService=n,this.translate=o,this.cdr=m,this.publicHelper=l,this.categoryService=d,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}set optionSelectForce(n){this.onActionSelectForce(n)}get optionLoading(){return this.loading}set optionLoading(n){this.loading=n}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,S.O)(""),(0,A.b)(1500),(0,I.x)(),(0,p.w)(n=>this.DataGetAll("string"==typeof n||"number"==typeof n?n:"")))}displayFn(n){return n?n.titleML:void 0}displayOption(n){return n?n.titleML:void 0}DataGetAll(n){var o=this;return(0,r.Z)(function*(){if(o.dateUseStore&&(o.dataModelResult=yield o.publicHelper.getCurrency(),o.dataModelResult.isSuccess))return o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.id||o.dataModelSelect.id<=0)&&o.dataModelResult.listItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.listItems[0])},1e3),o.onActionSelect(o.dataModelResult.listItems[0])),o.dataModelResult.listItems;const m=new e.Hay;if(m.rowPerPage=20,m.accessLoad=!0,n&&n.length>0){let d=new e.AO3;d=new e.AO3,d.propertyName="Symbol",d.value=n,d.searchType=e.J6G.Contains,d.clauseType=e.ppe.Or,m.filters.push(d),d=new e.AO3,d.propertyName="Title",d.value=n,d.searchType=e.J6G.Contains,d.clauseType=e.ppe.Or,m.filters.push(d),n&&"number"==typeof+n&&+n>0&&(d=new e.AO3,d.propertyName="Id",d.value=n,d.searchType=e.J6G.Equal,d.clauseType=e.ppe.Or,m.filters.push(d))}const l=o.constructor.name+"ServiceGetAll";return o.loading.Start(l),o.categoryService.setAccessDataType(e.dR.Viewer),yield(0,D.z)(o.categoryService.ServiceGetAll(m)).then(d=>(o.dataModelResult=d,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.id||o.dataModelSelect.id<=0)&&o.dataModelResult.listItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.listItems[0])},1e3),o.onActionSelect(o.dataModelResult.listItems[0])),o.loading.Stop(l),d.listItems))})()}onActionSelect(n){this.optionDisabled||(this.dataModelSelect=n,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(n){return this.filteredOptions.pipe((0,C.U)(o=>(o.find(m=>m.id===n.id)||o.push(n),o)))}onActionSelectForce(n){if("number"==typeof n&&n>0){if(this.dataModelSelect&&this.dataModelSelect.id===n)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.id===n)){const o=this.dataModelResult.listItems.find(m=>m.id===n);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(n).subscribe(o=>{o.isSuccess&&(this.filteredOptions=this.push(o.item),this.dataModelSelect=o.item,this.formControl.setValue(o.item),this.optionChange.emit(o.item))})}else{if(typeof n==typeof e.CWo)return this.filteredOptions=this.push(n),this.dataModelSelect=n,void this.formControl.setValue(n);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new e.CWo,this.loadOptions()}}return _=c,(0,a.Z)(c,"nextId",0),(0,a.Z)(c,"\u0275fac",function(n){return new(n||_)(t.Y36(e.FLW),t.Y36(P.sK),t.Y36(t.sBO),t.Y36(T.i),t.Y36(e._GB))}),(0,a.Z)(c,"\u0275cmp",t.Xpm({type:_,selectors:[["app-cms-currency-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:N,decls:12,vars:11,consts:[[1,"ntk-full-width"],[3,"options"],["matPrefix",""],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(n,o){if(1&n&&(t.F$t(),t.TgZ(0,"mat-form-field",0),t._UZ(1,"app-progress-spinner",1),t.TgZ(2,"span",2),t.YNc(3,L,2,3,"img",3),t._uU(4," \xa0"),t.qZA(),t._UZ(5,"input",4),t.TgZ(6,"mat-autocomplete",5,6),t.NdJ("optionSelected",function(l){return o.onActionSelect(l.option.value)}),t.YNc(8,B,4,4,"mat-option",7),t.ALo(9,"async"),t.qZA(),t.YNc(10,b,2,0,"mat-icon",8),t.Hsn(11),t.qZA()),2&n){const m=t.MAs(7);t.xp6(1),t.Q6J("options",o.loading),t.xp6(2),t.Q6J("ngIf",o.dataModelSelect&&(null==o.dataModelSelect?null:o.dataModelSelect.linkMainImageIdSrc)),t.xp6(2),t.s9C("placeholder",o.optionPlaceholder),t.Q6J("formControl",o.formControl)("matAutocomplete",m),t.uIk("disabled",!!o.optionDisabled||null),t.xp6(1),t.Q6J("displayWith",o.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(9,9,o.filteredOptions)),t.xp6(2),t.Q6J("ngIf",null==o.dataModelSelect?null:o.dataModelSelect.id)}},dependencies:[y.sg,y.O5,h.Fj,h.JJ,h.oH,O.XC,E.ey,O.ZL,g.KE,g.qo,g.R9,u.Hw,f.Nt,R.O,y.Ov,U.v],encapsulation:2})),c})()},50738:(K,Z,s)=>{s.d(Z,{Y:()=>I});var r=s(86889),a=s(64537),t=s(88692),h=s(46997);function e(p,C){if(1&p&&(a.ynx(0),a._UZ(1,"span",4),a.BQk()),2&p){const v=a.oxw(2);a.xp6(1),a.Q6J("inlineSVG",v.svg)}}function D(p,C){if(1&p&&(a.ynx(0),a._UZ(1,"i",5),a.BQk()),2&p){const v=a.oxw(2);a.xp6(1),a.Q6J("ngClass",v.icon)}}function S(p,C){if(1&p&&(a.ynx(0),a.TgZ(1,"div",3),a.YNc(2,e,2,1,"ng-container",1),a.YNc(3,D,2,1,"ng-container",1),a.qZA(),a.BQk()),2&p){const v=a.oxw();a.xp6(2),a.Q6J("ngIf",v.svg),a.xp6(1),a.Q6J("ngIf",v.icon)}}const A=["*"];let I=(()=>{var p;class C{constructor(){(0,r.Z)(this,"id",++C.nextId),(0,r.Z)(this,"classes",void 0),(0,r.Z)(this,"icon",void 0),(0,r.Z)(this,"svg",void 0)}ngOnInit(){}}return p=C,(0,r.Z)(C,"nextId",0),(0,r.Z)(C,"\u0275fac",function(P){return new(P||p)}),(0,r.Z)(C,"\u0275cmp",a.Xpm({type:p,selectors:[["app-cms-html-notice"]],inputs:{classes:"classes",icon:"icon",svg:"svg"},ngContentSelectors:A,decls:4,vars:2,consts:[["role","alert",1,"alert","alert-custom","alert-white","alert-shadow","gutter-b",3,"ngClass"],[4,"ngIf"],[1,"alert-text"],[1,"alert-icon","alert-icon-top"],[1,"svg-icon","svg-icon-3x","svg-icon-primary",3,"inlineSVG"],[3,"ngClass"]],template:function(P,T){1&P&&(a.F$t(),a.TgZ(0,"div",0),a.YNc(1,S,4,2,"ng-container",1),a.TgZ(2,"div",2),a.Hsn(3),a.qZA()()),2&P&&(a.Q6J("ngClass",T.classes),a.xp6(1),a.Q6J("ngIf",T.icon||T.svg))},dependencies:[t.mk,t.O5,h.d$],encapsulation:2})),C})()},63181:(K,Z,s)=>{s.d(Z,{g:()=>N});var r=s(8239),a=s(86889),t=s(64537),h=s(20092),e=s(34511),D=s(57445),S=s(51927),A=s(83151),I=s(42147),p=s(61528),C=s(27969),v=s(60656),P=s(56707),T=s(88692),y=s(61637),O=s(1379),E=s(88659),g=s(83331),u=s(39665),f=s(75738),R=s(81418);function U(M,_){if(1&M&&(t._UZ(0,"img",9),t.ALo(1,"cmsthumbnail")),2&M){const c=t.oxw();t.s9C("src",t.lcZ(1,1,null==c.dataModelSelect?null:c.dataModelSelect.linkMainImageIdSrc),t.LSH)}}function L(M,_){if(1&M&&(t._UZ(0,"img",9),t.ALo(1,"cmsthumbnail")),2&M){const c=t.oxw().$implicit;t.s9C("src",t.lcZ(1,1,c.linkMainImageIdSrc),t.LSH)}}function W(M,_){if(1&M&&(t.TgZ(0,"mat-option",10),t.YNc(1,L,2,3,"img",11),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&M){const c=_.$implicit,i=t.oxw();t.Q6J("value",c)("disabled",i.optionDisabled),t.xp6(1),t.Q6J("ngIf",c.linkMainImageIdSrc),t.xp6(2),t.Oqu(i.displayOption(c))}}function B(M,_){if(1&M){const c=t.EpF();t.TgZ(0,"mat-icon",12),t.NdJ("click",function(){t.CHM(c);const n=t.oxw();return t.KtG(n.onActionSelectClear())}),t._uU(1,"close"),t.qZA()}}const b=["*"];let N=(()=>{var M;class _{constructor(i,n,o,m){(0,a.Z)(this,"coreEnumService",void 0),(0,a.Z)(this,"cdr",void 0),(0,a.Z)(this,"translate",void 0),(0,a.Z)(this,"categoryService",void 0),(0,a.Z)(this,"id",++_.nextId),(0,a.Z)(this,"dataModelResult",new e.y$4),(0,a.Z)(this,"dataModelSelect",new e.NCo),(0,a.Z)(this,"loading",new v.O),(0,a.Z)(this,"formControl",new h.NI),(0,a.Z)(this,"filteredOptions",void 0),(0,a.Z)(this,"optionDisabled",!1),(0,a.Z)(this,"optionSelectFirstItem",!1),(0,a.Z)(this,"optionPlaceholder",""),(0,a.Z)(this,"optionChange",new t.vpe),(0,a.Z)(this,"optionReload",()=>this.onActionReload()),this.coreEnumService=i,this.cdr=n,this.translate=o,this.categoryService=m,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}get optionLoading(){return this.loading}set optionLoading(i){this.loading=i}set optionSelectForce(i){this.onActionSelectForce(i)}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,S.O)(""),(0,A.b)(1500),(0,I.x)(),(0,p.w)(i=>this.DataGetAll("string"==typeof i||"number"==typeof i?i:"")))}displayFn(i){let n="";return i&&(i.username&&i.username.length>0&&(n=n+" "+i.username),i.name&&i.name.length>0&&(n=n+" "+i.name),i.lastName&&i.lastName.length>0&&(n=n+" "+i.lastName),n=n+"#:"+i.id),n}displayOption(i){let n="";return i&&(i.username&&i.username.length>0&&(n=n+" "+i.username),i.name&&i.name.length>0&&(n=n+" "+i.name),i.lastName&&i.lastName.length>0&&(n=n+" "+i.lastName),n=n+"#:"+i.id),n}DataGetAll(i){var n=this;return(0,r.Z)(function*(){const o=new e.Hay;if(o.rowPerPage=20,o.accessLoad=!0,i&&i.length>0){let l=new e.AO3;l=new e.AO3,l.propertyName="username",l.value=i,l.searchType=e.J6G.Contains,l.clauseType=e.ppe.Or,o.filters.push(l),l=new e.AO3,l.propertyName="name",l.value=i,l.searchType=e.J6G.Contains,l.clauseType=e.ppe.Or,o.filters.push(l),l=new e.AO3,l.propertyName="email",l.value=i,l.searchType=e.J6G.Contains,l.clauseType=e.ppe.Or,o.filters.push(l),l=new e.AO3,l.propertyName="lastname",l.value=i,l.searchType=e.J6G.Contains,l.clauseType=e.ppe.Or,o.filters.push(l),i&&"number"==typeof+i&&+i>0&&(l=new e.AO3,l.propertyName="Id",l.value=i,l.searchType=e.J6G.Equal,l.clauseType=e.ppe.Or,o.filters.push(l))}const m=n.constructor.name+"main";return n.loading.Start(m),yield(0,D.z)(n.categoryService.ServiceGetAll(o)).then(l=>(n.dataModelResult=l,n.optionSelectFirstItem&&(!n.dataModelSelect||!n.dataModelSelect.id||n.dataModelSelect.id<=0)&&n.dataModelResult.listItems.length>0&&(n.optionSelectFirstItem=!1,setTimeout(()=>{n.formControl.setValue(n.dataModelResult.listItems[0])},1e3),n.onActionSelect(n.dataModelResult.listItems[0])),n.loading.Stop(m),l.listItems))})()}onActionSelect(i){this.optionDisabled||(this.dataModelSelect=i,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(i){return this.filteredOptions.pipe((0,C.U)(n=>(n.find(o=>o.id===i.id)||n.push(i),n)))}onActionSelectForce(i){if("number"==typeof i&&i>0){if(this.dataModelSelect&&this.dataModelSelect.id===i)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(n=>n.id===i)){const n=this.dataModelResult.listItems.find(o=>o.id===i);return this.dataModelSelect=n,void this.formControl.setValue(n)}this.categoryService.ServiceGetOneById(i).subscribe(n=>{n.isSuccess&&(this.filteredOptions=this.push(n.item),this.dataModelSelect=n.item,this.formControl.setValue(n.item),this.optionChange.emit(n.item))})}else{if(typeof i==typeof e.NCo)return this.filteredOptions=this.push(i),this.dataModelSelect=i,void this.formControl.setValue(i);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new e.NCo,this.loadOptions()}}return M=_,(0,a.Z)(_,"nextId",0),(0,a.Z)(_,"\u0275fac",function(i){return new(i||M)(t.Y36(e.FLW),t.Y36(t.sBO),t.Y36(P.sK),t.Y36(e.k$Z))}),(0,a.Z)(_,"\u0275cmp",t.Xpm({type:M,selectors:[["app-cms-user-selector"]],inputs:{optionLoading:"optionLoading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:b,decls:12,vars:11,consts:[[1,"ntk-full-width"],[3,"options"],["matPrefix",""],["class","ntk-hover-zoom","style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(i,n){if(1&i&&(t.F$t(),t.TgZ(0,"mat-form-field",0),t._UZ(1,"app-progress-spinner",1),t.TgZ(2,"span",2),t.YNc(3,U,2,3,"img",3),t._uU(4," \xa0"),t.qZA(),t._UZ(5,"input",4),t.TgZ(6,"mat-autocomplete",5,6),t.NdJ("optionSelected",function(m){return n.onActionSelect(m.option.value)}),t.YNc(8,W,4,4,"mat-option",7),t.ALo(9,"async"),t.qZA(),t.YNc(10,B,2,0,"mat-icon",8),t.Hsn(11),t.qZA()),2&i){const o=t.MAs(7);t.xp6(1),t.Q6J("options",n.loading),t.xp6(2),t.Q6J("ngIf",n.dataModelSelect&&(null==n.dataModelSelect?null:n.dataModelSelect.linkMainImageIdSrc)),t.xp6(2),t.s9C("placeholder",n.optionPlaceholder),t.Q6J("formControl",n.formControl)("matAutocomplete",o),t.uIk("disabled",!!n.optionDisabled||null),t.xp6(1),t.Q6J("displayWith",n.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(9,9,n.filteredOptions)),t.xp6(2),t.Q6J("ngIf",null==n.dataModelSelect?null:n.dataModelSelect.id)}},dependencies:[T.sg,T.O5,h.Fj,h.JJ,h.oH,y.XC,O.ey,y.ZL,E.KE,E.qo,E.R9,g.Hw,u.Nt,f.O,T.Ov,R.v],encapsulation:2})),_})()}}]);