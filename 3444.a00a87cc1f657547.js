"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[3444],{70532:(T,P,a)=>{a.d(P,{t:()=>u});var u=(()=>{return(t=u||(u={}))[t.none=0]="none",t[t.add=1]="add",t[t.edit=2]="edit",t[t.delete=3]="delete",t[t.list=4]="list",t[t.select=5]="select",u;var t})()},81447:(T,P,a)=>{a.d(P,{t:()=>u});class u{lat;lon}},25897:(T,P,a)=>{a.d(P,{Y:()=>f});var u=a(64537),t=a(5998);let f=(()=>{class l{sanitizer;constructor(M){this.sanitizer=M}transform(M){return"cms-RecordStatusEnum-cell-"+M}static \u0275fac=function(O){return new(O||l)(u.Y36(t.H7,16))};static \u0275pipe=u.Yjl({name:"statusCellClass",type:l,pure:!0})}return l})()},76609:(T,P,a)=>{a.d(P,{D:()=>o});var u=a(8239),t=a(64537),f=a(20092),l=a(34511),A=a(57445),M=a(51927),O=a(83151),C=a(42147),S=a(61528),_=a(27969),m=a(60656),v=a(56707),g=a(88692),E=a(61637),y=a(1379),L=a(88659),R=a(83331),U=a(39665),W=a(75738),K=a(81418);function h(s,d){if(1&s&&(t._UZ(0,"img",9),t.ALo(1,"cmsthumbnail")),2&s){const e=t.oxw().$implicit;t.s9C("src",t.lcZ(1,1,e.linkImageIdSrc),t.LSH)}}function I(s,d){if(1&s&&(t.TgZ(0,"mat-option",7),t.YNc(1,h,2,3,"img",8),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&s){const e=d.$implicit,n=t.oxw();t.Q6J("value",e)("disabled",n.optionDisabled),t.xp6(1),t.Q6J("ngIf",e.linkImageIdSrc),t.xp6(2),t.Oqu(n.displayOption(e))}}function i(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"mat-icon",10),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.onActionSelectClear())}),t._uU(1,"close"),t.qZA()}}const r=["*"];let o=(()=>{class s{coreEnumService;translate;cdr;categoryService;static nextId=0;id=++s.nextId;constructor(e,n,p,D){this.coreEnumService=e,this.translate=n,this.cdr=p,this.categoryService=D,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}dataModelResult=new l.y$4;dataModelSelect=new l.Dp$;formControl=new f.NI;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder="";optionChange=new t.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(e){this.onActionSelectForce(e)}loading=new m.O;get optionLoading(){return this.loading}set optionLoading(e){this.loading=e}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,M.O)(""),(0,O.b)(1500),(0,C.x)(),(0,S.w)(e=>this.DataGetAll("string"==typeof e||"number"==typeof e?e:"")))}displayFn(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}displayOption(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}DataGetAll(e){var n=this;return(0,u.Z)(function*(){const p=new l.Hay;if(p.rowPerPage=20,p.accessLoad=!0,e&&e.length>0){let c=new l.AO3;c=new l.AO3,c.propertyName="Symbol",c.value=e,c.searchType=l.J6G.Contains,c.clauseType=l.ppe.Or,p.filters.push(c),c=new l.AO3,c.propertyName="Title",c.value=e,c.searchType=l.J6G.Contains,c.clauseType=l.ppe.Or,p.filters.push(c),e&&"number"==typeof+e&&+e>0&&(c=new l.AO3,c.propertyName="Id",c.value=e,c.searchType=l.J6G.Equal,c.clauseType=l.ppe.Or,p.filters.push(c))}const D=n.constructor.name+"main";return n.loading.Start(D),yield(0,A.z)(n.categoryService.ServiceGetAll(p)).then(c=>(n.dataModelResult=c,n.optionSelectFirstItem&&(!n.dataModelSelect||!n.dataModelSelect.id||n.dataModelSelect.id<=0)&&n.dataModelResult.listItems.length>0&&(n.optionSelectFirstItem=!1,setTimeout(()=>{n.formControl.setValue(n.dataModelResult.listItems[0])},1e3),n.onActionSelect(n.dataModelResult.listItems[0])),n.loading.Stop(D),c.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(e){return this.filteredOptions.pipe((0,_.U)(n=>(n.find(p=>p.id===e.id)||n.push(e),n)))}onActionSelectForce(e){if("number"==typeof e&&e>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(n=>n.id===e)){const n=this.dataModelResult.listItems.find(p=>p.id===e);return this.dataModelSelect=n,void this.formControl.setValue(n)}this.categoryService.ServiceGetOneIncludeParent(e).subscribe(n=>{n.isSuccess&&(this.filteredOptions=this.push(n.item),this.dataModelSelect=n.item,this.formControl.setValue(n.item),this.optionChange.emit(n.item))})}else{if(typeof e==typeof l.Dp$)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new l.Dp$,this.loadOptions()}static \u0275fac=function(n){return new(n||s)(t.Y36(l.FLW),t.Y36(v.sK),t.Y36(t.sBO),t.Y36(l.XRW))};static \u0275cmp=t.Xpm({type:s,selectors:[["app-cms-location-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:r,decls:9,vars:10,consts:[[1,"ntk-full-width"],[3,"options"],["type","text","aria-label","Assignee","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(n,p){if(1&n&&(t.F$t(),t.TgZ(0,"mat-form-field",0),t._UZ(1,"app-progress-spinner",1)(2,"input",2),t.TgZ(3,"mat-autocomplete",3,4),t.NdJ("optionSelected",function(c){return p.onActionSelect(c.option.value)}),t.YNc(5,I,4,4,"mat-option",5),t.ALo(6,"async"),t.qZA(),t.YNc(7,i,2,0,"mat-icon",6),t.Hsn(8),t.qZA()),2&n){const D=t.MAs(4);t.xp6(1),t.Q6J("options",p.loading),t.xp6(1),t.s9C("placeholder",p.optionPlaceholder),t.Q6J("formControl",p.formControl)("matAutocomplete",D),t.uIk("disabled",!!p.optionDisabled||null),t.xp6(1),t.Q6J("displayWith",p.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,8,p.filteredOptions)),t.xp6(2),t.Q6J("ngIf",null==p.dataModelSelect?null:p.dataModelSelect.id)}},dependencies:[g.sg,g.O5,f.Fj,f.JJ,f.oH,E.XC,y.ey,E.ZL,L.KE,L.R9,R.Hw,U.Nt,W.O,g.Ov,K.v],encapsulation:2})}return s})()},17407:(T,P,a)=>{a.d(P,{r:()=>O});var u=a(64537),t=a(64216),l=a(92340),A=a(32607),M=a(27128);let O=(()=>{class C{cmsToastrService;static nextId=0;id=++C.nextId;map$=new u.vpe;zoom$=new u.vpe;options={layers:[(0,t.tileLayer)(l.N.leafletUrl,{opacity:.7,maxZoom:19,detectRetina:!0})],zoom:16,center:[32.684985,51.6359425]};set optonCenter(_){this.map&&_&&_.lat&&_.lon&&0!==_.lat&&0!==_.lon&&this.map.setView(new t.LatLng(_.lat,_.lon),this.zoom)}set optionCurrentPoint(_){this.onActionCurrentPoint(_)}map;zoom;destroy=!1;constructor(_){this.cmsToastrService=_}ngOnInit(){const g=t.icon({iconRetinaUrl:"assets/leaflet/marker-icon-2x.png",iconUrl:"assets/leaflet/marker-icon.png",shadowUrl:"assets/leaflet/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]});t.Marker.prototype.options.icon=g}ngAfterViewInit(){}ngOnDestroy(){this.map&&(this.map.clearAllEventListeners(),this.destroy=!0)}onMapReady(_){setTimeout(()=>{this.map&&!this.destroy&&_.invalidateSize()},500),this.map=_,this.map$.emit(_),this.zoom=_.getZoom(),this.zoom$.emit(this.zoom)}onMapZoomEnd(_){this.zoom=_.target.getZoom(),this.zoom$.emit(this.zoom)}onActionCurrentPoint(_=!0){this.getPosition().then(m=>{this.map.setView(new t.LatLng(m.lat,m.lon),this.zoom)})}getPosition(){return new Promise((_,m)=>{navigator.geolocation.getCurrentPosition(v=>{_({lon:v.coords.longitude,lat:v.coords.latitude})},v=>{this.cmsToastrService.typeErrorGetPosition()})})}static \u0275fac=function(m){return new(m||C)(u.Y36(A.e))};static \u0275cmp=u.Xpm({type:C,selectors:[["app-cms-map"]],inputs:{options:"options",optonCenter:"optonCenter",optionCurrentPoint:"optionCurrentPoint"},outputs:{map$:"map$",zoom$:"zoom$"},decls:1,vars:1,consts:[["leaflet","",1,"map-container",3,"leafletOptions","leafletMapReady","leafletMapZoomEnd"]],template:function(m,v){1&m&&(u.TgZ(0,"div",0),u.NdJ("leafletMapReady",function(E){return v.onMapReady(E)})("leafletMapZoomEnd",function(E){return v.onMapZoomEnd(E)}),u.qZA()),2&m&&u.Q6J("leafletOptions",v.options)},dependencies:[M.je],styles:[".map-container[_ngcontent-%COMP%]{width:100%;height:300px}"]})}return C})()},69831:(T,P,a)=>{a.d(P,{u:()=>K});var u=a(35436),t=a(64537),f=a(20092),l=a(34511),A=a(51927),M=a(83151),O=a(61528),C=a(27969),S=a(32607),_=a(88692),m=a(61637),v=a(1379),g=a(27084),E=a(88659),y=a(83331);const L=["tagInput"];function R(h,I){if(1&h){const i=t.EpF();t.TgZ(0,"mat-chip",9),t.NdJ("removed",function(){const s=t.CHM(i).$implicit,d=t.oxw();return t.KtG(d.remove(s))}),t._uU(1),t.TgZ(2,"button",10)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&h){const i=I.$implicit;t.xp6(1),t.hij(" ",i.display," ")}}function U(h,I){if(1&h&&(t.TgZ(0,"mat-option",11),t._uU(1),t.qZA()),2&h){const i=I.$implicit;t.Q6J("value",i),t.xp6(1),t.hij(" ",i.display," ")}}let K=(()=>{class h{service;cmsToastrService;static nextId=0;id=++h.nextId;constructor(i,r){this.service=i,this.cmsToastrService=r,this.filteredOptions=this.tagCtrl.valueChanges.pipe((0,A.O)(null),(0,M.b)(400),(0,O.w)(o=>this.filter(o||"")))}optionDisabled=!1;tagInput;optionPlaceholder="+ Tag";optionLabel=" Select";optionChange=new t.vpe;set optionSelectForce(i){this.onActionSelectForce(i)}tagDataModel=[];tagLastDataModel=[];selectForceStatus=!0;separatorKeysCodes=[u.K5];tagCtrl=new f.NI("");filteredOptions;addOnBlur=!0;ngOnInit(){}filter(i){const r=new l.Hay;r.rowPerPage=20,r.accessLoad=!0;let o=new l.AO3;return o.propertyName="Title",o.value=i,o.searchType=l.J6G.Contains,o.clauseType=l.ppe.Or,r.filters.push(o),i&&"number"==typeof+i&&+i>0&&(o=new l.AO3,o.propertyName="Id",o.value=i,o.searchType=l.J6G.Equal,o.clauseType=l.ppe.Or,r.filters.push(o)),this.service.ServiceGetAll(r).pipe((0,C.U)(s=>(this.tagLastDataModel=s.listItems.map(d=>({display:d.title,value:d.id})),this.tagLastDataModel)))}checkIndex(i){let r=0,o=-1;return this.tagDataModel.forEach(s=>{s.value==i&&(o=r),r++}),o}add(i){let r;i.value&&this.tagLastDataModel.forEach(o=>{(o.display==i.value||o.value+""==i.value)&&(r=o)}),r&&this.checkIndex(r.value)<0&&(this.tagDataModel.push(r),this.onActionChange()),i.chipInput.clear(),this.tagCtrl.setValue(null)}remove(i){const r=this.checkIndex(i.value);r>=0&&(this.tagDataModel.splice(r,1),this.onActionChange())}selected(i){const r=i.option.value;this.checkIndex(r.value)<0&&this.tagDataModel.push(r),this.tagInput.nativeElement.value="",this.tagCtrl.setValue(null),this.onActionChange()}onActionChange(){const i=[];this.tagDataModel.forEach(r=>{i.findIndex(o=>o==r.value)<0&&i.push(r.value)}),this.selectForceStatus=!1,this.optionChange.emit(i)}onActionSelectForce(i){if(!this.selectForceStatus||!i||0===i.length)return;const r=new l.Hay;i.forEach(o=>{if(o>0){const s=new l.AO3;s.propertyName="Id",s.value=o,s.clauseType=l.ppe.Or,r.filters.push(s)}}),this.service.ServiceGetAll(r).pipe((0,C.U)(o=>{o.isSuccess?o.listItems.forEach(s=>{this.tagDataModel.findIndex(d=>d.value==s.id)<0&&this.tagDataModel.push({value:s.id,display:s.title})}):this.cmsToastrService.typeErrorGetAll(o.errorMessage)},o=>{this.cmsToastrService.typeErrorGetAll(o)})).toPromise()}static \u0275fac=function(r){return new(r||h)(t.Y36(l.dF2),t.Y36(S.e))};static \u0275cmp=t.Xpm({type:h,selectors:[["app-cms-tag-autocomplete"]],viewQuery:function(r,o){if(1&r&&t.Gf(L,5),2&r){let s;t.iGM(s=t.CRH())&&(o.tagInput=s.first)}},inputs:{optionDisabled:"optionDisabled",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},decls:12,vars:12,consts:[["appearance","fill",2,"width","100%"],["aria-label","tag selection",3,"disabled"],["chipList",""],[3,"removed",4,"ngFor","ngForOf"],[3,"placeholder","matChipInputAddOnBlur","formControl","matAutocomplete","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["tagInput",""],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"removed"],["matChipRemove",""],[3,"value"]],template:function(r,o){if(1&r&&(t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2),t.qZA(),t.TgZ(3,"mat-chip-grid",1,2),t.YNc(5,R,5,1,"mat-chip",3),t.TgZ(6,"input",4,5),t.NdJ("matChipInputTokenEnd",function(d){return o.add(d)}),t.qZA()(),t.TgZ(8,"mat-autocomplete",6,7),t.NdJ("optionSelected",function(d){return o.selected(d)}),t.YNc(10,U,2,2,"mat-option",8),t.ALo(11,"async"),t.qZA()()),2&r){const s=t.MAs(4),d=t.MAs(9);t.xp6(2),t.Oqu(o.optionLabel),t.xp6(1),t.Q6J("disabled",o.optionDisabled),t.xp6(2),t.Q6J("ngForOf",o.tagDataModel),t.xp6(1),t.Q6J("placeholder",o.optionPlaceholder)("matChipInputAddOnBlur",o.addOnBlur)("formControl",o.tagCtrl)("matAutocomplete",d)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",o.separatorKeysCodes),t.xp6(4),t.Q6J("ngForOf",t.lcZ(11,10,o.filteredOptions))}},dependencies:[_.sg,f.Fj,f.JJ,f.oH,m.XC,v.ey,m.ZL,g.HS,g.RA,g.oH,g.qH,E.KE,E.hX,y.Hw,_.Ov],encapsulation:2})}return h})()}}]);