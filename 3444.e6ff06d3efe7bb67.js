"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[3444],{70532:(y,M,a)=>{a.d(M,{t:()=>r});var r=(()=>{return(i=r||(r={}))[i.none=0]="none",i[i.add=1]="add",i[i.edit=2]="edit",i[i.delete=3]="delete",i[i.list=4]="list",i[i.select=5]="select",r;var i})()},81447:(y,M,a)=>{a.d(M,{t:()=>i});var r=a(86889);class i{constructor(){(0,r.Z)(this,"lat",void 0),(0,r.Z)(this,"lon",void 0)}}},25897:(y,M,a)=>{a.d(M,{Y:()=>P});var r=a(86889),i=a(64537),t=a(5998);let P=(()=>{var _;class A{constructor(C){(0,r.Z)(this,"sanitizer",void 0),this.sanitizer=C}transform(C){return"cms-RecordStatusEnum-cell-"+C}}return _=A,(0,r.Z)(A,"\u0275fac",function(C){return new(C||_)(i.Y36(t.H7,16))}),(0,r.Z)(A,"\u0275pipe",i.Yjl({name:"statusCellClass",type:_,pure:!0})),A})()},76609:(y,M,a)=>{a.d(M,{D:()=>l});var r=a(8239),i=a(86889),t=a(64537),P=a(20092),_=a(34511),A=a(57445),I=a(51927),C=a(83151),T=a(42147),E=a(61528),L=a(27969),p=a(60656),v=a(56707),d=a(88692),O=a(61637),R=a(1379),Z=a(88659),W=a(83331),U=a(39665),B=a(75738),K=a(81418);function g(o,c){if(1&o&&(t._UZ(0,"img",9),t.ALo(1,"cmsthumbnail")),2&o){const m=t.oxw().$implicit;t.s9C("src",t.lcZ(1,1,m.linkImageIdSrc),t.LSH)}}function f(o,c){if(1&o&&(t.TgZ(0,"mat-option",7),t.YNc(1,g,2,3,"img",8),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&o){const m=c.$implicit,e=t.oxw();t.Q6J("value",m)("disabled",e.optionDisabled),t.xp6(1),t.Q6J("ngIf",m.linkImageIdSrc),t.xp6(2),t.Oqu(e.displayOption(m))}}function D(o,c){if(1&o){const m=t.EpF();t.TgZ(0,"mat-icon",10),t.NdJ("click",function(){t.CHM(m);const n=t.oxw();return t.KtG(n.onActionSelectClear())}),t._uU(1,"close"),t.qZA()}}const s=["*"];let l=(()=>{var o;class c{constructor(e,n,h,S){(0,i.Z)(this,"coreEnumService",void 0),(0,i.Z)(this,"translate",void 0),(0,i.Z)(this,"cdr",void 0),(0,i.Z)(this,"categoryService",void 0),(0,i.Z)(this,"id",++c.nextId),(0,i.Z)(this,"dataModelResult",new _.y$4),(0,i.Z)(this,"dataModelSelect",new _.Dp$),(0,i.Z)(this,"formControl",new P.NI),(0,i.Z)(this,"filteredOptions",void 0),(0,i.Z)(this,"optionDisabled",!1),(0,i.Z)(this,"optionSelectFirstItem",!1),(0,i.Z)(this,"optionPlaceholder",""),(0,i.Z)(this,"optionChange",new t.vpe),(0,i.Z)(this,"optionReload",()=>this.onActionReload()),(0,i.Z)(this,"loading",new p.O),this.coreEnumService=e,this.translate=n,this.cdr=h,this.categoryService=S,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}set optionSelectForce(e){this.onActionSelectForce(e)}get optionLoading(){return this.loading}set optionLoading(e){this.loading=e}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,I.O)(""),(0,C.b)(1500),(0,T.x)(),(0,E.w)(e=>this.DataGetAll("string"==typeof e||"number"==typeof e?e:"")))}displayFn(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}displayOption(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}DataGetAll(e){var n=this;return(0,r.Z)(function*(){const h=new _.Hay;if(h.rowPerPage=20,h.accessLoad=!0,e&&e.length>0){let u=new _.AO3;u=new _.AO3,u.propertyName="Symbol",u.value=e,u.searchType=_.J6G.Contains,u.clauseType=_.ppe.Or,h.filters.push(u),u=new _.AO3,u.propertyName="Title",u.value=e,u.searchType=_.J6G.Contains,u.clauseType=_.ppe.Or,h.filters.push(u),e&&"number"==typeof+e&&+e>0&&(u=new _.AO3,u.propertyName="Id",u.value=e,u.searchType=_.J6G.Equal,u.clauseType=_.ppe.Or,h.filters.push(u))}const S=n.constructor.name+"main";return n.loading.Start(S),yield(0,A.z)(n.categoryService.ServiceGetAll(h)).then(u=>(n.dataModelResult=u,n.optionSelectFirstItem&&(!n.dataModelSelect||!n.dataModelSelect.id||n.dataModelSelect.id<=0)&&n.dataModelResult.listItems.length>0&&(n.optionSelectFirstItem=!1,setTimeout(()=>{n.formControl.setValue(n.dataModelResult.listItems[0])},1e3),n.onActionSelect(n.dataModelResult.listItems[0])),n.loading.Stop(S),u.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(e){return this.filteredOptions.pipe((0,L.U)(n=>(n.find(h=>h.id===e.id)||n.push(e),n)))}onActionSelectForce(e){if("number"==typeof e&&e>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(n=>n.id===e)){const n=this.dataModelResult.listItems.find(h=>h.id===e);return this.dataModelSelect=n,void this.formControl.setValue(n)}this.categoryService.ServiceGetOneIncludeParent(e).subscribe(n=>{n.isSuccess&&(this.filteredOptions=this.push(n.item),this.dataModelSelect=n.item,this.formControl.setValue(n.item),this.optionChange.emit(n.item))})}else{if(typeof e==typeof _.Dp$)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new _.Dp$,this.loadOptions()}}return o=c,(0,i.Z)(c,"nextId",0),(0,i.Z)(c,"\u0275fac",function(e){return new(e||o)(t.Y36(_.FLW),t.Y36(v.sK),t.Y36(t.sBO),t.Y36(_.XRW))}),(0,i.Z)(c,"\u0275cmp",t.Xpm({type:o,selectors:[["app-cms-location-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:s,decls:9,vars:10,consts:[[1,"ntk-full-width"],[3,"options"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(e,n){if(1&e&&(t.F$t(),t.TgZ(0,"mat-form-field",0),t._UZ(1,"app-progress-spinner",1)(2,"input",2),t.TgZ(3,"mat-autocomplete",3,4),t.NdJ("optionSelected",function(S){return n.onActionSelect(S.option.value)}),t.YNc(5,f,4,4,"mat-option",5),t.ALo(6,"async"),t.qZA(),t.YNc(7,D,2,0,"mat-icon",6),t.Hsn(8),t.qZA()),2&e){const h=t.MAs(4);t.xp6(1),t.Q6J("options",n.loading),t.xp6(1),t.s9C("placeholder",n.optionPlaceholder),t.Q6J("formControl",n.formControl)("matAutocomplete",h),t.uIk("disabled",!!n.optionDisabled||null),t.xp6(1),t.Q6J("displayWith",n.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,8,n.filteredOptions)),t.xp6(2),t.Q6J("ngIf",null==n.dataModelSelect?null:n.dataModelSelect.id)}},dependencies:[d.sg,d.O5,P.Fj,P.JJ,P.oH,O.XC,R.ey,O.ZL,Z.KE,Z.R9,W.Hw,U.Nt,B.O,d.Ov,K.v],encapsulation:2})),c})()},17407:(y,M,a)=>{a.d(M,{r:()=>C});var r=a(86889),i=a(64537),t=a(64216),_=a(92340),A=a(32607),I=a(27128);let C=(()=>{var T;class E{set optonCenter(p){this.map&&p&&p.lat&&p.lon&&0!==p.lat&&0!==p.lon&&this.map.setView(new t.LatLng(p.lat,p.lon),this.zoom)}set optionCurrentPoint(p){this.onActionCurrentPoint(p)}constructor(p){(0,r.Z)(this,"cmsToastrService",void 0),(0,r.Z)(this,"id",++E.nextId),(0,r.Z)(this,"map$",new i.vpe),(0,r.Z)(this,"zoom$",new i.vpe),(0,r.Z)(this,"options",{layers:[(0,t.tileLayer)(_.N.leafletUrl,{opacity:.7,maxZoom:19,detectRetina:!0})],zoom:16,center:[32.684985,51.6359425]}),(0,r.Z)(this,"map",void 0),(0,r.Z)(this,"zoom",void 0),(0,r.Z)(this,"destroy",!1),this.cmsToastrService=p}ngOnInit(){const O=t.icon({iconRetinaUrl:"assets/leaflet/marker-icon-2x.png",iconUrl:"assets/leaflet/marker-icon.png",shadowUrl:"assets/leaflet/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]});t.Marker.prototype.options.icon=O}ngAfterViewInit(){}ngOnDestroy(){this.map&&(this.map.clearAllEventListeners(),this.destroy=!0)}onMapReady(p){setTimeout(()=>{this.map&&!this.destroy&&p.invalidateSize()},500),this.map=p,this.map$.emit(p),this.zoom=p.getZoom(),this.zoom$.emit(this.zoom)}onMapZoomEnd(p){this.zoom=p.target.getZoom(),this.zoom$.emit(this.zoom)}onActionCurrentPoint(p=!0){this.getPosition().then(v=>{this.map.setView(new t.LatLng(v.lat,v.lon),this.zoom)})}getPosition(){return new Promise((p,v)=>{navigator.geolocation.getCurrentPosition(d=>{p({lon:d.coords.longitude,lat:d.coords.latitude})},d=>{this.cmsToastrService.typeErrorGetPosition()})})}}return T=E,(0,r.Z)(E,"nextId",0),(0,r.Z)(E,"\u0275fac",function(p){return new(p||T)(i.Y36(A.e))}),(0,r.Z)(E,"\u0275cmp",i.Xpm({type:T,selectors:[["app-cms-map"]],inputs:{options:"options",optonCenter:"optonCenter",optionCurrentPoint:"optionCurrentPoint"},outputs:{map$:"map$",zoom$:"zoom$"},decls:1,vars:1,consts:[["leaflet","",1,"map-container",3,"leafletOptions","leafletMapReady","leafletMapZoomEnd"]],template:function(p,v){1&p&&(i.TgZ(0,"div",0),i.NdJ("leafletMapReady",function(O){return v.onMapReady(O)})("leafletMapZoomEnd",function(O){return v.onMapZoomEnd(O)}),i.qZA()),2&p&&i.Q6J("leafletOptions",v.options)},dependencies:[I.je],styles:[".map-container[_ngcontent-%COMP%]{width:100%;height:300px}"]})),E})()},69831:(y,M,a)=>{a.d(M,{u:()=>K});var r=a(86889),i=a(35436),t=a(64537),P=a(20092),_=a(34511),A=a(51927),I=a(83151),C=a(61528),T=a(27969),E=a(32607),L=a(88692),p=a(61637),v=a(1379),d=a(27084),O=a(88659),R=a(83331);const Z=["tagInput"];function W(g,f){if(1&g){const D=t.EpF();t.TgZ(0,"mat-chip",9),t.NdJ("removed",function(){const o=t.CHM(D).$implicit,c=t.oxw();return t.KtG(c.remove(o))}),t._uU(1),t.TgZ(2,"button",10)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&g){const D=f.$implicit;t.xp6(1),t.hij(" ",D.display," ")}}function U(g,f){if(1&g&&(t.TgZ(0,"mat-option",11),t._uU(1),t.qZA()),2&g){const D=f.$implicit;t.Q6J("value",D),t.xp6(1),t.hij(" ",D.display," ")}}let K=(()=>{var g;class f{constructor(s,l){(0,r.Z)(this,"service",void 0),(0,r.Z)(this,"cmsToastrService",void 0),(0,r.Z)(this,"id",++f.nextId),(0,r.Z)(this,"optionDisabled",!1),(0,r.Z)(this,"tagInput",void 0),(0,r.Z)(this,"optionPlaceholder","+ Tag"),(0,r.Z)(this,"optionLabel"," Select"),(0,r.Z)(this,"optionChange",new t.vpe),(0,r.Z)(this,"tagDataModel",[]),(0,r.Z)(this,"tagLastDataModel",[]),(0,r.Z)(this,"selectForceStatus",!0),(0,r.Z)(this,"separatorKeysCodes",[i.K5]),(0,r.Z)(this,"tagCtrl",new P.NI("")),(0,r.Z)(this,"filteredOptions",void 0),(0,r.Z)(this,"addOnBlur",!0),this.service=s,this.cmsToastrService=l,this.filteredOptions=this.tagCtrl.valueChanges.pipe((0,A.O)(null),(0,I.b)(400),(0,C.w)(o=>this.filter(o||"")))}set optionSelectForce(s){this.onActionSelectForce(s)}ngOnInit(){}filter(s){const l=new _.Hay;l.rowPerPage=20,l.accessLoad=!0;let o=new _.AO3;return o.propertyName="Title",o.value=s,o.searchType=_.J6G.Contains,o.clauseType=_.ppe.Or,l.filters.push(o),s&&"number"==typeof+s&&+s>0&&(o=new _.AO3,o.propertyName="Id",o.value=s,o.searchType=_.J6G.Equal,o.clauseType=_.ppe.Or,l.filters.push(o)),this.service.ServiceGetAll(l).pipe((0,T.U)(c=>(this.tagLastDataModel=c.listItems.map(m=>({display:m.title,value:m.id})),this.tagLastDataModel)))}checkIndex(s){let l=0,o=-1;return this.tagDataModel.forEach(c=>{c.value==s&&(o=l),l++}),o}add(s){let l;s.value&&this.tagLastDataModel.forEach(o=>{(o.display==s.value||o.value+""==s.value)&&(l=o)}),l&&this.checkIndex(l.value)<0&&(this.tagDataModel.push(l),this.onActionChange()),s.chipInput.clear(),this.tagCtrl.setValue(null)}remove(s){const l=this.checkIndex(s.value);l>=0&&(this.tagDataModel.splice(l,1),this.onActionChange())}selected(s){const l=s.option.value;this.checkIndex(l.value)<0&&this.tagDataModel.push(l),this.tagInput.nativeElement.value="",this.tagCtrl.setValue(null),this.onActionChange()}onActionChange(){const s=[];this.tagDataModel.forEach(l=>{s.findIndex(o=>o==l.value)<0&&s.push(l.value)}),this.selectForceStatus=!1,this.optionChange.emit(s)}onActionSelectForce(s){if(!this.selectForceStatus||!s||0===s.length)return;const l=new _.Hay;s.forEach(o=>{if(o>0){const c=new _.AO3;c.propertyName="Id",c.value=o,c.clauseType=_.ppe.Or,l.filters.push(c)}}),this.service.ServiceGetAll(l).pipe((0,T.U)(o=>{o.isSuccess?o.listItems.forEach(c=>{this.tagDataModel.findIndex(m=>m.value==c.id)<0&&this.tagDataModel.push({value:c.id,display:c.title})}):this.cmsToastrService.typeErrorGetAll(o.errorMessage)},o=>{this.cmsToastrService.typeErrorGetAll(o)})).toPromise()}}return g=f,(0,r.Z)(f,"nextId",0),(0,r.Z)(f,"\u0275fac",function(s){return new(s||g)(t.Y36(_.dF2),t.Y36(E.e))}),(0,r.Z)(f,"\u0275cmp",t.Xpm({type:g,selectors:[["app-cms-tag-autocomplete"]],viewQuery:function(s,l){if(1&s&&t.Gf(Z,5),2&s){let o;t.iGM(o=t.CRH())&&(l.tagInput=o.first)}},inputs:{optionDisabled:"optionDisabled",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},decls:12,vars:12,consts:[["appearance","fill",2,"width","100%"],["aria-label","tag selection",3,"disabled"],["chipList",""],[3,"removed",4,"ngFor","ngForOf"],[3,"placeholder","matChipInputAddOnBlur","formControl","matAutocomplete","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["tagInput",""],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"removed"],["matChipRemove",""],[3,"value"]],template:function(s,l){if(1&s&&(t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2),t.qZA(),t.TgZ(3,"mat-chip-grid",1,2),t.YNc(5,W,5,1,"mat-chip",3),t.TgZ(6,"input",4,5),t.NdJ("matChipInputTokenEnd",function(c){return l.add(c)}),t.qZA()(),t.TgZ(8,"mat-autocomplete",6,7),t.NdJ("optionSelected",function(c){return l.selected(c)}),t.YNc(10,U,2,2,"mat-option",8),t.ALo(11,"async"),t.qZA()()),2&s){const o=t.MAs(4),c=t.MAs(9);t.xp6(2),t.Oqu(l.optionLabel),t.xp6(1),t.Q6J("disabled",l.optionDisabled),t.xp6(2),t.Q6J("ngForOf",l.tagDataModel),t.xp6(1),t.Q6J("placeholder",l.optionPlaceholder)("matChipInputAddOnBlur",l.addOnBlur)("formControl",l.tagCtrl)("matAutocomplete",c)("matChipInputFor",o)("matChipInputSeparatorKeyCodes",l.separatorKeysCodes),t.xp6(4),t.Q6J("ngForOf",t.lcZ(11,10,l.filteredOptions))}},dependencies:[L.sg,P.Fj,P.JJ,P.oH,p.XC,v.ey,p.ZL,d.HS,d.RA,d.oH,d.qH,O.KE,O.hX,R.Hw,L.Ov],encapsulation:2})),f})()}}]);