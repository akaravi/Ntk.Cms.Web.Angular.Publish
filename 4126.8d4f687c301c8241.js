"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[4126],{95631:(L,h,a)=>{a.d(h,{z:()=>K});var f=a(8239),l=a(86889),e=a(64537),p=a(20092),i=a(34511),O=a(57445),C=a(51927),M=a(83151),E=a(42147),S=a(61528),g=a(27969),D=a(60656),P=a(56707),d=a(88692),u=a(61637),A=a(1379),m=a(88659),v=a(83331),y=a(39665),T=a(75738);function I(r,c){if(1&r&&(e.TgZ(0,"mat-option",7)(1,"span"),e._uU(2),e.qZA()()),2&r){const t=c.$implicit,o=e.oxw();e.Q6J("value",t)("disabled",o.optionDisabled),e.xp6(2),e.Oqu(o.displayOption(t))}}function R(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"mat-icon",8),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onActionSelectClear())}),e._uU(1,"close"),e.qZA()}}const Z=["*"];let K=(()=>{class r{constructor(t,o,s,_){(0,l.Z)(this,"coreEnumService",void 0),(0,l.Z)(this,"cdr",void 0),(0,l.Z)(this,"translate",void 0),(0,l.Z)(this,"categoryService",void 0),(0,l.Z)(this,"id",++r.nextId),(0,l.Z)(this,"dataModelResult",new i.y$4),(0,l.Z)(this,"dataModelSelect",new i.MCb),(0,l.Z)(this,"loading",new D.O),(0,l.Z)(this,"formControl",new p.NI),(0,l.Z)(this,"filteredOptions",void 0),(0,l.Z)(this,"optionDisabled",!1),(0,l.Z)(this,"optionSelectFirstItem",!1),(0,l.Z)(this,"optionPlaceholder",""),(0,l.Z)(this,"optionChange",new e.vpe),(0,l.Z)(this,"optionReload",()=>this.onActionReload()),this.coreEnumService=t,this.cdr=o,this.translate=s,this.categoryService=_,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}get optionLoading(){return this.loading}set optionLoading(t){this.loading=t}set optionSelectForce(t){this.onActionSelectForce(t)}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,C.O)(""),(0,M.b)(1500),(0,E.x)(),(0,S.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t?t.title:void 0}displayOption(t){return t?t.title:void 0}DataGetAll(t){var o=this;return(0,f.Z)(function*(){const s=new i.Hay;if(s.rowPerPage=20,s.accessLoad=!0,t&&t.length>0){let n=new i.AO3;n=new i.AO3,n.propertyName="SubDomain",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,s.filters.push(n),n=new i.AO3,n.propertyName="Domain",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,s.filters.push(n),n=new i.AO3,n.propertyName="Title",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,s.filters.push(n),t&&"number"==typeof+t&&+t>0&&(n=new i.AO3,n.propertyName="Id",n.value=t,n.searchType=i.b3P.Equal,n.clauseType=i.KT6.Or,s.filters.push(n))}const _=o.constructor.name+"main";return o.loading.Start(_),yield(0,O.z)(o.categoryService.ServiceGetAll(s)).then(n=>(o.dataModelResult=n,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.id||o.dataModelSelect.id<=0)&&o.dataModelResult.listItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.listItems[0])},1e3),o.onActionSelect(o.dataModelResult.listItems[0])),o.loading.Stop(_),n.listItems))})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(t){return this.filteredOptions.pipe((0,g.U)(o=>(o.find(s=>s.id===t.id)||o.push(t),o)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.id===t)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.id===t)){const o=this.dataModelResult.listItems.find(s=>s.id===t);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(t).subscribe(o=>{o.isSuccess&&(this.filteredOptions=this.push(o.item),this.dataModelSelect=o.item,this.formControl.setValue(o.item),this.optionChange.emit(o.item))})}else{if(typeof t==typeof i.MCb)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new i.MCb,this.loadOptions()}}return(0,l.Z)(r,"nextId",0),(0,l.Z)(r,"\u0275fac",function(t){return new(t||r)(e.Y36(i.FLW),e.Y36(e.sBO),e.Y36(P.sK),e.Y36(i.PwI))}),(0,l.Z)(r,"\u0275cmp",e.Xpm({type:r,selectors:[["app-cms-sitecategory-selector"]],inputs:{optionLoading:"optionLoading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:Z,decls:9,vars:10,consts:[[1,"ntk-full-width"],[3,"options"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto34","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,o){if(1&t&&(e.F$t(),e.TgZ(0,"mat-form-field",0),e._UZ(1,"app-progress-spinner",1)(2,"input",2),e.TgZ(3,"mat-autocomplete",3,4),e.NdJ("optionSelected",function(_){return o.onActionSelect(_.option.value)}),e.YNc(5,I,3,3,"mat-option",5),e.ALo(6,"async"),e.qZA(),e.YNc(7,R,2,0,"mat-icon",6),e.Hsn(8),e.qZA()),2&t){const s=e.MAs(4);e.xp6(1),e.Q6J("options",o.loading),e.xp6(1),e.s9C("placeholder",o.optionPlaceholder),e.Q6J("formControl",o.formControl)("matAutocomplete",s),e.uIk("disabled",!!o.optionDisabled||null),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(6,8,o.filteredOptions)),e.xp6(2),e.Q6J("ngIf",o.dataModelSelect.id)}},dependencies:[d.sg,d.O5,p.Fj,p.JJ,p.oH,u.XC,A.ey,u.ZL,m.KE,m.R9,v.Hw,y.Nt,T.O,d.Ov],encapsulation:2})),r})()},6586:(L,h,a)=>{a.d(h,{w:()=>K});var f=a(8239),l=a(86889),e=a(64537),p=a(20092),i=a(34511),O=a(57445),C=a(51927),M=a(83151),E=a(42147),S=a(61528),g=a(27969),D=a(60656),P=a(56707),d=a(88692),u=a(61637),A=a(1379),m=a(88659),v=a(83331),y=a(39665),T=a(75738);function I(r,c){if(1&r&&(e.TgZ(0,"mat-option",7)(1,"span"),e._uU(2),e.qZA()()),2&r){const t=c.$implicit,o=e.oxw();e.Q6J("value",t)("disabled",o.optionDisabled),e.xp6(2),e.Oqu(o.displayOption(t))}}function R(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"mat-icon",8),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onActionSelectClear())}),e._uU(1,"close"),e.qZA()}}const Z=["*"];let K=(()=>{class r{constructor(t,o,s,_){(0,l.Z)(this,"coreEnumService",void 0),(0,l.Z)(this,"cdr",void 0),(0,l.Z)(this,"translate",void 0),(0,l.Z)(this,"categoryService",void 0),(0,l.Z)(this,"id",++r.nextId),(0,l.Z)(this,"dataModelResult",new i.y$4),(0,l.Z)(this,"dataModelSelect",new i.fsQ),(0,l.Z)(this,"loading",new D.O),(0,l.Z)(this,"formControl",new p.NI),(0,l.Z)(this,"filteredOptions",void 0),(0,l.Z)(this,"optionDisabled",!1),(0,l.Z)(this,"optionSelectFirstItem",!1),(0,l.Z)(this,"optionPlaceholder",""),(0,l.Z)(this,"optionChange",new e.vpe),(0,l.Z)(this,"optionReload",()=>this.onActionReload()),this.coreEnumService=t,this.cdr=o,this.translate=s,this.categoryService=_,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}get optionLoading(){return this.loading}set optionLoading(t){this.loading=t}set optionSelectForce(t){this.onActionSelectForce(t)}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,C.O)(""),(0,M.b)(1500),(0,E.x)(),(0,S.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t?t.title:void 0}displayOption(t){return t?t.title:void 0}DataGetAll(t){var o=this;return(0,f.Z)(function*(){const s=new i.Hay;if(s.rowPerPage=20,s.accessLoad=!0,t&&t.length>0){let n=new i.AO3;n=new i.AO3,n.propertyName="username",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,s.filters.push(n),n=new i.AO3,n.propertyName="name",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,s.filters.push(n),n=new i.AO3,n.propertyName="email",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,s.filters.push(n),n=new i.AO3,n.propertyName="lastname",n.value=t,n.searchType=i.b3P.Contains,n.clauseType=i.KT6.Or,s.filters.push(n),t&&"number"==typeof+t&&+t>0&&(n=new i.AO3,n.propertyName="Id",n.value=t,n.searchType=i.b3P.Equal,n.clauseType=i.KT6.Or,s.filters.push(n))}const _=o.constructor.name+"main";return o.loading.Start(_),yield(0,O.z)(o.categoryService.ServiceGetAll(s)).then(n=>(o.dataModelResult=n,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.id||o.dataModelSelect.id<=0)&&o.dataModelResult.listItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.listItems[0])},1e3),o.onActionSelect(o.dataModelResult.listItems[0])),o.loading.Stop(_),n.listItems))})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.formControl.setValue(null),this.optionChange.emit(null))}push(t){return this.filteredOptions.pipe((0,g.U)(o=>(o.find(s=>s.id===t.id)||o.push(t),o)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.id===t)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.id===t)){const o=this.dataModelResult.listItems.find(s=>s.id===t);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(t).subscribe(o=>{o.isSuccess&&(this.filteredOptions=this.push(o.item),this.dataModelSelect=o.item,this.formControl.setValue(o.item),this.optionChange.emit(o.item))})}else{if(typeof t==typeof i.fsQ)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new i.fsQ,this.loadOptions()}}return(0,l.Z)(r,"nextId",0),(0,l.Z)(r,"\u0275fac",function(t){return new(t||r)(e.Y36(i.FLW),e.Y36(e.sBO),e.Y36(P.sK),e.Y36(i.dyD))}),(0,l.Z)(r,"\u0275cmp",e.Xpm({type:r,selectors:[["app-cms-usergroup-selector"]],inputs:{optionLoading:"optionLoading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:Z,decls:9,vars:10,consts:[[1,"ntk-full-width"],[3,"options"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto35","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(t,o){if(1&t&&(e.F$t(),e.TgZ(0,"mat-form-field",0),e._UZ(1,"app-progress-spinner",1)(2,"input",2),e.TgZ(3,"mat-autocomplete",3,4),e.NdJ("optionSelected",function(_){return o.onActionSelect(_.option.value)}),e.YNc(5,I,3,3,"mat-option",5),e.ALo(6,"async"),e.qZA(),e.YNc(7,R,2,0,"mat-icon",6),e.Hsn(8),e.qZA()),2&t){const s=e.MAs(4);e.xp6(1),e.Q6J("options",o.loading),e.xp6(1),e.s9C("placeholder",o.optionPlaceholder),e.Q6J("formControl",o.formControl)("matAutocomplete",s),e.uIk("disabled",!!o.optionDisabled||null),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(6,8,o.filteredOptions)),e.xp6(2),e.Q6J("ngIf",o.dataModelSelect.id)}},dependencies:[d.sg,d.O5,p.Fj,p.JJ,p.oH,u.XC,A.ey,u.ZL,m.KE,m.R9,v.Hw,y.Nt,T.O,d.Ov],encapsulation:2})),r})()}}]);