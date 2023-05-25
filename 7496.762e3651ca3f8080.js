"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[7496,4891],{39084:(U,E,i)=>{i.d(E,{Y:()=>P});var u=i(86889),t=i(87241),e=i(27969),O=i(64537),s=i(34511);let P=(()=>{class g{constructor(C){(0,u.Z)(this,"service",void 0),this.service=C}transform(C){return!C||C<=0?new t.y:this.service.ServiceGetOneById(C).pipe((0,e.U)(c=>{var _="";return c.isSuccess&&(c.item.title&&c.item.title.length>0&&(_=c.item.title),c.item.id&&c.item.id>0&&(_.length>0&&(_+=" | "),_+=c.item.id),c.item.domain&&c.item.domain.length>0&&c.item.subDomain&&c.item.subDomain.length>0?(_.length>0&&(_+=" | "),_=_+c.item.subDomain+"."+c.item.domain):c.item.domain&&c.item.domain.length>0&&(_.length>0&&(_+=" | "),_+=c.item.domain)),_},c=>""))}}return(0,u.Z)(g,"\u0275fac",function(C){return new(C||g)(O.Y36(s._0e,16))}),(0,u.Z)(g,"\u0275pipe",O.Yjl({name:"cmssiteinfo",type:g,pure:!0})),g})()},93817:(U,E,i)=>{i.d(E,{J:()=>P});var u=i(86889),t=i(87241),e=i(27969),O=i(64537),s=i(34511);let P=(()=>{class g{constructor(C){(0,u.Z)(this,"service",void 0),this.service=C}transform(C){return!C||C<=0?new t.y:this.service.ServiceGetOneById(C).pipe((0,e.U)(c=>{var _="";return c.isSuccess&&(c.item.username&&c.item.username.length>0&&(_=c.item.username),c.item.email&&c.item.email.length>0&&(_.length>0&&(_+=" | "),_+=c.item.email),c.item.name&&c.item.name.length>0&&(_.length>0&&(_+=" | "),_+=c.item.name),c.item.lastName&&c.item.lastName.length>0&&(_.length>0&&(_+=" | "),_+=c.item.lastName),c.item.mobile&&c.item.mobile.length>0&&(_.length>0&&(_+=" | "),_+=c.item.mobile)),_},c=>""))}}return(0,u.Z)(g,"\u0275fac",function(C){return new(C||g)(O.Y36(s.k$Z,16))}),(0,u.Z)(g,"\u0275pipe",O.Yjl({name:"cmsuserinfo",type:g,pure:!0})),g})()},25897:(U,E,i)=>{i.d(E,{Y:()=>O});var u=i(86889),t=i(64537),e=i(5998);let O=(()=>{class s{constructor(g){(0,u.Z)(this,"sanitizer",void 0),this.sanitizer=g}transform(g){return"cms-EnumRecordStatus-cell-"+g}}return(0,u.Z)(s,"\u0275fac",function(g){return new(g||s)(t.Y36(e.H7,16))}),(0,u.Z)(s,"\u0275pipe",t.Yjl({name:"statusCellClass",type:s,pure:!0})),s})()},42370:(U,E,i)=>{i.d(E,{v:()=>K});var u=i(86889),t=i(64537),e=i(88692),O=i(56707);let s=(()=>{class l{transform(d,m){if(!d)return[];let D=Object.keys(d);return D=D.filter(A=>A&&A.length>0&&A.toLowerCase().indexOf("antiinjection")<0),m&&m.size>0&&(D=D.filter(A=>A&&A.length>0&&m.has(A))),D}}return(0,u.Z)(l,"\u0275fac",function(d){return new(d||l)}),(0,u.Z)(l,"\u0275pipe",t.Yjl({name:"keys",type:l,pure:!0})),l})();function P(l,f){1&l&&(t.TgZ(0,"div",4)(1,"div",5),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",5),t._uU(5),t.ALo(6,"translate"),t.qZA(),t._UZ(7,"div",6),t.qZA()),2&l&&(t.xp6(2),t.Oqu(t.lcZ(3,2,"TITLE.parameter")),t.xp6(3),t.Oqu(t.lcZ(6,4,"TITLE.Values")))}function g(l,f){if(1&l&&(t.TgZ(0,"div",7)(1,"div",5),t._uU(2),t.qZA(),t.TgZ(3,"div",5),t._uU(4),t.qZA(),t._UZ(5,"div",8),t.qZA()),2&l){const d=f.$implicit,m=t.oxw(2);t.xp6(2),t.Oqu(m.optionFields&&m.optionFields.size>0?m.optionFields.get(d):d),t.xp6(2),t.Oqu(m.dataModel[d])}}function T(l,f){if(1&l&&(t.TgZ(0,"div",1),t.YNc(1,P,8,6,"div",2),t.YNc(2,g,6,2,"div",3),t.ALo(3,"keys"),t.qZA()),2&l){const d=t.oxw();t.xp6(1),t.Q6J("ngIf",d.optionViewHead),t.xp6(1),t.Q6J("ngForOf",t.xi3(3,2,d.dataModel,d.optionFields))}}function C(l,f){if(1&l&&(t.TgZ(0,"div",5),t._uU(1),t.qZA()),2&l){const d=f.$implicit,m=t.oxw(3);t.xp6(1),t.Oqu(m.optionFields&&m.optionFields.size>0?m.optionFields.get(d):d)}}function c(l,f){if(1&l&&(t.TgZ(0,"div",4),t.YNc(1,C,2,1,"div",9),t.ALo(2,"keys"),t._UZ(3,"div",6),t.qZA()),2&l){const d=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,d.dataModel[0],d.optionFields))}}function _(l,f){if(1&l&&(t.TgZ(0,"div",5),t._uU(1),t.qZA()),2&l){const d=f.$implicit,m=t.oxw().$implicit;t.xp6(1),t.Oqu(m[d])}}function R(l,f){if(1&l&&(t.TgZ(0,"div",7),t.YNc(1,_,2,1,"div",9),t.ALo(2,"keys"),t._UZ(3,"div",8),t.qZA()),2&l){const d=f.$implicit,m=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,d,m.optionFields))}}function b(l,f){if(1&l&&(t.TgZ(0,"div",1),t.YNc(1,c,4,4,"div",2),t.YNc(2,R,4,4,"div",3),t.qZA()),2&l){const d=t.oxw();t.xp6(1),t.Q6J("ngIf",d.optionViewHead),t.xp6(1),t.Q6J("ngForOf",d.dataModel)}}function S(l,f){if(1&l&&(t.TgZ(0,"div",5),t._uU(1),t.qZA()),2&l){const d=f.$implicit,m=t.oxw(3);t.xp6(1),t.Oqu(m.optionFields&&m.optionFields.size>0?m.optionFields.get(d):d)}}function I(l,f){if(1&l&&(t.TgZ(0,"div",4),t.YNc(1,S,2,1,"div",9),t.ALo(2,"keys"),t._UZ(3,"div",6),t.qZA()),2&l){const d=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,d.dataModel[0],d.optionFields))}}function W(l,f){if(1&l&&(t.TgZ(0,"div",5),t._uU(1),t.qZA()),2&l){const d=f.$implicit,m=t.oxw(2);t.xp6(1),t.Oqu(m.dataModel[d])}}function Z(l,f){if(1&l&&(t.TgZ(0,"div",1),t.YNc(1,I,4,4,"div",2),t.TgZ(2,"div",7),t.YNc(3,W,2,1,"div",9),t.ALo(4,"keys"),t._UZ(5,"div",8),t.qZA()()),2&l){const d=t.oxw();t.xp6(1),t.Q6J("ngIf",d.optionViewHead),t.xp6(2),t.Q6J("ngForOf",t.xi3(4,2,d.dataModel,d.optionFields))}}let K=(()=>{class l{constructor(){(0,u.Z)(this,"id",++l.nextId),(0,u.Z)(this,"optionMethod",1),(0,u.Z)(this,"dataModel",void 0),(0,u.Z)(this,"optionFields",void 0),(0,u.Z)(this,"optionViewHead",!0)}ngOnInit(){}}return(0,u.Z)(l,"nextId",0),(0,u.Z)(l,"\u0275fac",function(d){return new(d||l)}),(0,u.Z)(l,"\u0275cmp",t.Xpm({type:l,selectors:[["app-cms-json-list"]],inputs:{optionMethod:"optionMethod",dataModel:"dataModel",optionFields:"optionFields",optionViewHead:"optionViewHead"},decls:3,vars:3,consts:[["class","table",4,"ngIf"],[1,"table"],["class","th",4,"ngIf"],["class","tr",4,"ngFor","ngForOf"],[1,"th"],[1,"td"],[1,"clear"],[1,"tr"],[2,"clear","both"],["class","td",4,"ngFor","ngForOf"]],template:function(d,m){1&d&&(t.YNc(0,T,4,5,"div",0),t.YNc(1,b,3,2,"div",0),t.YNc(2,Z,6,5,"div",0)),2&d&&(t.Q6J("ngIf",1===m.optionMethod&&m.dataModel),t.xp6(1),t.Q6J("ngIf",2===m.optionMethod&&m.dataModel),t.xp6(1),t.Q6J("ngIf",3===m.optionMethod&&m.dataModel))},dependencies:[e.sg,e.O5,O.X$,s],styles:[".table[_ngcontent-%COMP%]{display:table;border:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%]{display:table-row;background-color:#40a1f5;color:#fff;font-weight:700}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f9f9f9}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]{display:table-row;border-bottom:1px solid #000}.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]{display:table-cell;padding:15px;border-bottom:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%]{border:0}.clear[_ngcontent-%COMP%]{clear:both}"]})),l})()},51797:(U,E,i)=>{i.d(E,{a:()=>A});var u=i(8239),t=i(86889),e=i(64537),O=i(20092),s=i(34511),P=i(57445),g=i(51927),T=i(83151),C=i(42147),c=i(61528),_=i(27969),R=i(60656),b=i(56707),S=i(88692),I=i(61637),W=i(1379),Z=i(88659),K=i(83331),l=i(39665),f=i(75738);function d(M,y){if(1&M&&(e.TgZ(0,"mat-option",7)(1,"span"),e._uU(2),e.qZA()()),2&M){const r=y.$implicit,a=e.oxw();e.Q6J("value",r)("disabled",a.optionDisabled),e.xp6(2),e.Oqu(a.displayOption(r))}}function m(M,y){if(1&M){const r=e.EpF();e.TgZ(0,"mat-icon",8),e.NdJ("click",function(){e.CHM(r);const h=e.oxw();return e.KtG(h.onActionSelectClear())}),e._uU(1,"close"),e.qZA()}}const D=["*"];let A=(()=>{class M{constructor(r,a,h,n){(0,t.Z)(this,"coreEnumService",void 0),(0,t.Z)(this,"translate",void 0),(0,t.Z)(this,"cdr",void 0),(0,t.Z)(this,"categoryService",void 0),(0,t.Z)(this,"id",++M.nextId),(0,t.Z)(this,"dataModelResult",new s.y$4),(0,t.Z)(this,"dataModelSelect",new s.tQj),(0,t.Z)(this,"loading",new R.O),(0,t.Z)(this,"formControl",new O.NI),(0,t.Z)(this,"filteredOptions",void 0),(0,t.Z)(this,"optionDisabled",!1),(0,t.Z)(this,"optionSelectFirstItem",!1),(0,t.Z)(this,"optionPlaceholder",""),(0,t.Z)(this,"optionChange",new e.vpe),(0,t.Z)(this,"optionReload",()=>this.onActionReload()),this.coreEnumService=r,this.translate=a,this.cdr=h,this.categoryService=n,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}get optionLoading(){return this.loading}set optionLoading(r){this.loading=r}set optionSelectForce(r){this.onActionSelectForce(r)}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,g.O)(""),(0,T.b)(1500),(0,C.x)(),(0,c.w)(r=>this.DataGetAll("string"==typeof r||"number"==typeof r?r:"")))}displayFn(r){return r?r.id:void 0}displayOption(r){return r?r.id:void 0}DataGetAll(r){var a=this;return(0,u.Z)(function*(){const h=new s.Hay;if(h.rowPerPage=20,h.accessLoad=!0,r&&r.length>0){let o=new s.AO3;o=new s.AO3,o.propertyName="username",o.value=r,o.searchType=s.b3P.Contains,o.clauseType=s.KT6.Or,h.filters.push(o),o=new s.AO3,o.propertyName="name",o.value=r,o.searchType=s.b3P.Contains,o.clauseType=s.KT6.Or,h.filters.push(o),o=new s.AO3,o.propertyName="email",o.value=r,o.searchType=s.b3P.Contains,o.clauseType=s.KT6.Or,h.filters.push(o),o=new s.AO3,o.propertyName="lastname",o.value=r,o.searchType=s.b3P.Contains,o.clauseType=s.KT6.Or,h.filters.push(o),r&&"number"==typeof+r&&+r>0&&(o=new s.AO3,o.propertyName="Id",o.value=r,o.searchType=s.b3P.Equal,o.clauseType=s.KT6.Or,h.filters.push(o))}const n=a.constructor.name+"categoryService.ServiceGetAll";return a.loading.Start(n),yield(0,P.z)(a.categoryService.ServiceGetAll(h)).then(o=>(a.dataModelResult=o,a.loading.Stop(n),o.listItems))})()}onActionSelect(r){this.optionDisabled||(this.dataModelSelect=r,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(r){return this.filteredOptions.pipe((0,_.U)(a=>(a.find(h=>h.id===r.id)||a.push(r),a)))}onActionSelectForce(r){if("string"==typeof r&&r.length>0){if(this.dataModelSelect&&this.dataModelSelect.id===r)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(a=>a.id===r)){const a=this.dataModelResult.listItems.find(h=>h.id===r);return this.dataModelSelect=a,void this.formControl.setValue(a)}this.categoryService.ServiceGetOneById(r).subscribe(a=>{a.isSuccess&&(this.filteredOptions=this.push(a.item),this.dataModelSelect=a.item,this.formControl.setValue(a.item),this.optionChange.emit(a.item))})}else{if(typeof r==typeof s.tQj)return this.filteredOptions=this.push(r),this.dataModelSelect=r,void this.formControl.setValue(r);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new s.tQj,this.loadOptions()}}return(0,t.Z)(M,"nextId",0),(0,t.Z)(M,"\u0275fac",function(r){return new(r||M)(e.Y36(s.FLW),e.Y36(b.sK),e.Y36(e.sBO),e.Y36(s.Z_L))}),(0,t.Z)(M,"\u0275cmp",e.Xpm({type:M,selectors:[["app-cms-member-selector"]],inputs:{optionLoading:"optionLoading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:D,decls:9,vars:10,consts:[[1,"ntk-full-width"],[3,"options"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto33","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(r,a){if(1&r&&(e.F$t(),e.TgZ(0,"mat-form-field",0),e._UZ(1,"app-progress-spinner",1)(2,"input",2),e.TgZ(3,"mat-autocomplete",3,4),e.NdJ("optionSelected",function(n){return a.onActionSelect(n.option.value)}),e.YNc(5,d,3,3,"mat-option",5),e.ALo(6,"async"),e.qZA(),e.YNc(7,m,2,0,"mat-icon",6),e.Hsn(8),e.qZA()),2&r){const h=e.MAs(4);e.xp6(1),e.Q6J("options",a.loading),e.xp6(1),e.s9C("placeholder",a.optionPlaceholder),e.Q6J("formControl",a.formControl)("matAutocomplete",h),e.uIk("disabled",!!a.optionDisabled||null),e.xp6(1),e.Q6J("displayWith",a.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(6,8,a.filteredOptions)),e.xp6(2),e.Q6J("ngIf",a.dataModelSelect.id)}},dependencies:[S.sg,S.O5,O.Fj,O.JJ,O.oH,I.XC,W.ey,I.ZL,Z.KE,Z.R9,K.Hw,l.Nt,f.O,S.Ov],encapsulation:2})),M})()},63181:(U,E,i)=>{i.d(E,{g:()=>r});var u=i(8239),t=i(86889),e=i(64537),O=i(20092),s=i(34511),P=i(57445),g=i(51927),T=i(83151),C=i(42147),c=i(61528),_=i(27969),R=i(60656),b=i(56707),S=i(88692),I=i(61637),W=i(1379),Z=i(88659),K=i(83331),l=i(39665),f=i(75738),d=i(81418);function m(a,h){if(1&a&&(e._UZ(0,"img",9),e.ALo(1,"cmsthumbnail")),2&a){const n=e.oxw();e.s9C("src",e.lcZ(1,1,n.dataModelSelect.linkMainImageIdSrc),e.LSH)}}function D(a,h){if(1&a&&(e._UZ(0,"img",9),e.ALo(1,"cmsthumbnail")),2&a){const n=e.oxw().$implicit;e.s9C("src",e.lcZ(1,1,n.linkMainImageIdSrc),e.LSH)}}function A(a,h){if(1&a&&(e.TgZ(0,"mat-option",10),e.YNc(1,D,2,3,"img",11),e.TgZ(2,"span"),e._uU(3),e.qZA()()),2&a){const n=h.$implicit,o=e.oxw();e.Q6J("value",n)("disabled",o.optionDisabled),e.xp6(1),e.Q6J("ngIf",n.linkMainImageIdSrc),e.xp6(2),e.Oqu(o.displayOption(n))}}function M(a,h){if(1&a){const n=e.EpF();e.TgZ(0,"mat-icon",12),e.NdJ("click",function(){e.CHM(n);const v=e.oxw();return e.KtG(v.onActionSelectClear())}),e._uU(1,"close"),e.qZA()}}const y=["*"];let r=(()=>{class a{constructor(n,o,v,L){(0,t.Z)(this,"coreEnumService",void 0),(0,t.Z)(this,"cdr",void 0),(0,t.Z)(this,"translate",void 0),(0,t.Z)(this,"categoryService",void 0),(0,t.Z)(this,"id",++a.nextId),(0,t.Z)(this,"dataModelResult",new s.y$4),(0,t.Z)(this,"dataModelSelect",new s.NCo),(0,t.Z)(this,"loading",new R.O),(0,t.Z)(this,"formControl",new O.NI),(0,t.Z)(this,"filteredOptions",void 0),(0,t.Z)(this,"optionDisabled",!1),(0,t.Z)(this,"optionSelectFirstItem",!1),(0,t.Z)(this,"optionPlaceholder",""),(0,t.Z)(this,"optionChange",new e.vpe),(0,t.Z)(this,"optionReload",()=>this.onActionReload()),this.coreEnumService=n,this.cdr=o,this.translate=v,this.categoryService=L,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}get optionLoading(){return this.loading}set optionLoading(n){this.loading=n}set optionSelectForce(n){this.onActionSelectForce(n)}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,g.O)(""),(0,T.b)(1500),(0,C.x)(),(0,c.w)(n=>this.DataGetAll("string"==typeof n||"number"==typeof n?n:"")))}displayFn(n){let o="";return n&&(n.username&&n.username.length>0&&(o=o+" "+n.username),n.name&&n.name.length>0&&(o=o+" "+n.name),n.lastName&&n.lastName.length>0&&(o=o+" "+n.lastName),o=o+"#:"+n.id),o}displayOption(n){let o="";return n&&(n.username&&n.username.length>0&&(o=o+" "+n.username),n.name&&n.name.length>0&&(o=o+" "+n.name),n.lastName&&n.lastName.length>0&&(o=o+" "+n.lastName),o=o+"#:"+n.id),o}DataGetAll(n){var o=this;return(0,u.Z)(function*(){const v=new s.Hay;if(v.rowPerPage=20,v.accessLoad=!0,n&&n.length>0){let p=new s.AO3;p=new s.AO3,p.propertyName="username",p.value=n,p.searchType=s.b3P.Contains,p.clauseType=s.KT6.Or,v.filters.push(p),p=new s.AO3,p.propertyName="name",p.value=n,p.searchType=s.b3P.Contains,p.clauseType=s.KT6.Or,v.filters.push(p),p=new s.AO3,p.propertyName="email",p.value=n,p.searchType=s.b3P.Contains,p.clauseType=s.KT6.Or,v.filters.push(p),p=new s.AO3,p.propertyName="lastname",p.value=n,p.searchType=s.b3P.Contains,p.clauseType=s.KT6.Or,v.filters.push(p),n&&"number"==typeof+n&&+n>0&&(p=new s.AO3,p.propertyName="Id",p.value=n,p.searchType=s.b3P.Equal,p.clauseType=s.KT6.Or,v.filters.push(p))}const L=o.constructor.name+"main";return o.loading.Start(L),yield(0,P.z)(o.categoryService.ServiceGetAll(v)).then(p=>(o.dataModelResult=p,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.id||o.dataModelSelect.id<=0)&&o.dataModelResult.listItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.listItems[0])},1e3),o.onActionSelect(o.dataModelResult.listItems[0])),o.loading.Stop(L),p.listItems))})()}onActionSelect(n){this.optionDisabled||(this.dataModelSelect=n,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(n){return this.filteredOptions.pipe((0,_.U)(o=>(o.find(v=>v.id===n.id)||o.push(n),o)))}onActionSelectForce(n){if("number"==typeof n&&n>0){if(this.dataModelSelect&&this.dataModelSelect.id===n)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.id===n)){const o=this.dataModelResult.listItems.find(v=>v.id===n);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(n).subscribe(o=>{o.isSuccess&&(this.filteredOptions=this.push(o.item),this.dataModelSelect=o.item,this.formControl.setValue(o.item),this.optionChange.emit(o.item))})}else{if(typeof n==typeof s.NCo)return this.filteredOptions=this.push(n),this.dataModelSelect=n,void this.formControl.setValue(n);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new s.NCo,this.loadOptions()}}return(0,t.Z)(a,"nextId",0),(0,t.Z)(a,"\u0275fac",function(n){return new(n||a)(e.Y36(s.FLW),e.Y36(e.sBO),e.Y36(b.sK),e.Y36(s.k$Z))}),(0,t.Z)(a,"\u0275cmp",e.Xpm({type:a,selectors:[["app-cms-user-selector"]],inputs:{optionLoading:"optionLoading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:y,decls:12,vars:11,consts:[[1,"ntk-full-width"],[3,"options"],["matPrefix",""],["class","ntk-hover-zoom","style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto35","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(n,o){if(1&n&&(e.F$t(),e.TgZ(0,"mat-form-field",0),e._UZ(1,"app-progress-spinner",1),e.TgZ(2,"span",2),e.YNc(3,m,2,3,"img",3),e._uU(4," \xa0"),e.qZA(),e._UZ(5,"input",4),e.TgZ(6,"mat-autocomplete",5,6),e.NdJ("optionSelected",function(L){return o.onActionSelect(L.option.value)}),e.YNc(8,A,4,4,"mat-option",7),e.ALo(9,"async"),e.qZA(),e.YNc(10,M,2,0,"mat-icon",8),e.Hsn(11),e.qZA()),2&n){const v=e.MAs(7);e.xp6(1),e.Q6J("options",o.loading),e.xp6(2),e.Q6J("ngIf",o.dataModelSelect&&o.dataModelSelect.linkMainImageIdSrc),e.xp6(2),e.s9C("placeholder",o.optionPlaceholder),e.Q6J("formControl",o.formControl)("matAutocomplete",v),e.uIk("disabled",!!o.optionDisabled||null),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(9,9,o.filteredOptions)),e.xp6(2),e.Q6J("ngIf",o.dataModelSelect.id)}},dependencies:[S.sg,S.O5,O.Fj,O.JJ,O.oH,I.XC,W.ey,I.ZL,Z.KE,Z.qo,Z.R9,K.Hw,l.Nt,f.O,S.Ov,d.v],encapsulation:2})),a})()}}]);