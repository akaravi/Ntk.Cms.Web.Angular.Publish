"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[9907,6784,918],{13673:(g,h,n)=>{n.d(h,{G:()=>f});var e=n(8239),u=n(88692),d=n(34511),r=n(64537),c=n(94032),m=n(32607);let f=(()=>{class _{elRef;renderer;publicHelper;cmsToastrService;cdr;document;row;contentService;constructor(t,a,o,p,b,S){this.elRef=t,this.renderer=a,this.publicHelper=o,this.cmsToastrService=p,this.cdr=b,this.document=S,this.getEnumRecordStatus()}getEnumRecordStatus(){var t=this;return(0,e.Z)(function*(){(yield t.publicHelper.getEnumRecordStatus()).listItems.forEach(o=>{const p=document.createElement("option");p.innerHTML=" "+o.title+' <i Class="'+t.iconStatus(o.value)+'"></i>',p.value=o.value.toString(),t.elRef.nativeElement.add(p)}),t.elRef.nativeElement.options.length>0&&t.row&&t.row.recordStatus&&t.renderer.setProperty(t.elRef.nativeElement,"value",t.row.recordStatus)})()}onChange(){const t=this.elRef.nativeElement,a=t.value;this.addLoader(t),this.contentService.setAccessDataType(d.dR.Editor),this.contentService.ServiceSetStatus(this.row.id,a).subscribe(o=>{o.isSuccess?(this.handleSuccessCase(t),this.cmsToastrService.typeSuccessSetStatus(o.errorMessage),this.row.recordStatus=0|a,this.cdr.markForCheck()):(this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeErrorSetStatus(o.errorMessage),this.handleErrorCase(t))},o=>{this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeError(o),this.handleErrorCase(t)})}handleSuccessCase(t){this.removeBackground(t),this.addSuccess(t),setTimeout(()=>{this.removeBackground(t)},1e3)}handleErrorCase(t){this.removeBackground(t);const a=this.document.createElement("img");a.style.width="20px",a.src="https://www.seekpng.com/png/detail/334-3345964_error-icon-download-attention-symbol.png";const o=this.renderer.parentNode(this.elRef.nativeElement);this.renderer.appendChild(o,a),setTimeout(()=>{this.renderer.removeChild(o,a)},1e3)}addLoader(t){this.addBackground(t,"https://replit.com/public/images/loading_dots.gif",20)}addSuccess(t){this.addBackground(t,"https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg",20)}addBackground(t,a,o){t.style.background=`#fff url("${a}") no-repeat right 20px center`,t.style.backgroundSize=`${o}px`}removeBackground(t){t.style.background="none"}iconStatus(t){let a="";switch(t){case 1:default:a="fa fa-check";break;case 2:a="fa fa-eye-slash";break;case 3:a="fa fa-times";break;case 4:a="fa fa-hourglass-half";break;case 5:a="far fa-thumbs-down";break;case 6:a="fa fa-archive"}return a}static \u0275fac=function(a){return new(a||_)(r.Y36(r.SBq),r.Y36(r.Qsj),r.Y36(c.i),r.Y36(m.e),r.Y36(r.sBO),r.Y36(u.K0))};static \u0275dir=r.lG2({type:_,selectors:[["","cmsRecordStatusSelfSave",""]],hostBindings:function(a,o){1&a&&r.NdJ("change",function(){return o.onChange()})},inputs:{row:"row",contentService:"contentService"}})}return _})()},81418:(g,h,n)=>{n.d(h,{v:()=>u});var e=n(64537);let u=(()=>{class d{transform(c){return(c+="").replace("/images/","/thumbnails/")}static \u0275fac=function(m){return new(m||d)};static \u0275pipe=e.Yjl({name:"cmsthumbnail",type:d,pure:!0})}return d})()},86639:(g,h,n)=>{n.d(h,{G:()=>d});var e=n(64537),u=n(5998);let d=(()=>{class r{sanitizer;constructor(m){this.sanitizer=m}transform(m,i=!1){let s="";switch(m){case 1:default:s="fa fa-check";break;case 2:s="fa fa-times";break;case 3:s="fa fa-trash";break;case 4:s="fa fa-hourglass-half";break;case 5:s="far fa-thumbs-down";break;case 6:s="fa fa-archive"}return s}static \u0275fac=function(i){return new(i||r)(e.Y36(u.H7,16))};static \u0275pipe=e.Yjl({name:"statusIconClass",type:r,pure:!0})}return r})()},83914:(g,h,n)=>{n.d(h,{s:()=>r});var e=n(64537),u=n(58219);let d=(()=>{class c{activeModal;static nextId=0;id=++c.nextId;title;message;btnOkText;btnCancelText;constructor(i){this.activeModal=i}ngOnInit(){}decline(){this.activeModal.close(!1)}accept(){this.activeModal.close(!0)}dismiss(){this.activeModal.dismiss()}static \u0275fac=function(s){return new(s||c)(e.Y36(u.Kz))};static \u0275cmp=e.Xpm({type:c,selectors:[["app-confirmation-dialog"]],inputs:{title:"title",message:"message",btnOkText:"btnOkText",btnCancelText:"btnCancelText"},decls:12,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body",3,"innerHTML"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(s,l){1&s&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return l.dismiss()}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e._UZ(6,"div",4),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return l.decline()}),e._uU(9),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return l.accept()}),e._uU(11),e.qZA()()),2&s&&(e.xp6(2),e.Oqu(l.title),e.xp6(4),e.Q6J("innerHTML",l.message,e.oJD),e.xp6(3),e.Oqu(l.btnCancelText),e.xp6(2),e.Oqu(l.btnOkText))},encapsulation:2})}return c})(),r=(()=>{class c{modalService;constructor(i){this.modalService=i}confirm(i,s,l="OK",f="Cancel",_="sm"){const v=this.modalService.open(d,{size:_});return v.componentInstance.title=i,v.componentInstance.message=s,v.componentInstance.btnOkText=l,v.componentInstance.btnCancelText=f,v.result}static \u0275fac=function(s){return new(s||c)(e.LFG(u.FF))};static \u0275prov=e.Yz7({token:c,factory:c.\u0275fac})}return c})()}}]);