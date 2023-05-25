"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[4121],{13673:(C,m,r)=>{r.d(m,{G:()=>g});var n=r(8239),e=r(86889),u=r(88692),h=r(34511),s=r(64537),o=r(13987),c=r(32607);let g=(()=>{class f{constructor(t,a,l,p,S,b){(0,e.Z)(this,"elRef",void 0),(0,e.Z)(this,"renderer",void 0),(0,e.Z)(this,"publicHelper",void 0),(0,e.Z)(this,"cmsToastrService",void 0),(0,e.Z)(this,"cdr",void 0),(0,e.Z)(this,"document",void 0),(0,e.Z)(this,"row",void 0),(0,e.Z)(this,"contentService",void 0),this.elRef=t,this.renderer=a,this.publicHelper=l,this.cmsToastrService=p,this.cdr=S,this.document=b,this.getEnumRecordStatus()}getEnumRecordStatus(){var t=this;return(0,n.Z)(function*(){(yield t.publicHelper.getEnumRecordStatus()).listItems.forEach(l=>{const p=document.createElement("option");p.innerHTML=" "+l.title+' <i Class="'+t.iconStatus(l.value)+'"></i>',p.value=l.value.toString(),t.elRef.nativeElement.add(p)}),t.elRef.nativeElement.options.length>0&&t.row&&t.row.recordStatus&&t.renderer.setProperty(t.elRef.nativeElement,"value",t.row.recordStatus)})()}onChange(){const t=this.elRef.nativeElement,a=t.value;this.addLoader(t),this.contentService.setAccessDataType(h.MZK.Editor),this.contentService.ServiceSetStatus(this.row.id,a).subscribe(l=>{l.isSuccess?(this.handleSuccessCase(t),this.cmsToastrService.typeSuccessSetStatus(l.errorMessage),this.row.recordStatus=0|a,this.cdr.markForCheck()):(this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeErrorSetStatus(l.errorMessage),this.handleErrorCase(t))},l=>{this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeError(l),this.handleErrorCase(t)})}handleSuccessCase(t){this.removeBackground(t),this.addSuccess(t),setTimeout(()=>{this.removeBackground(t)},1e3)}handleErrorCase(t){this.removeBackground(t);const a=this.document.createElement("img");a.style.width="20px",a.src="https://www.seekpng.com/png/detail/334-3345964_error-icon-download-attention-symbol.png";const l=this.renderer.parentNode(this.elRef.nativeElement);this.renderer.appendChild(l,a),setTimeout(()=>{this.renderer.removeChild(l,a)},1e3)}addLoader(t){this.addBackground(t,"https://replit.com/public/images/loading_dots.gif",20)}addSuccess(t){this.addBackground(t,"https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg",20)}addBackground(t,a,l){t.style.background=`#fff url("${a}") no-repeat right 20px center`,t.style.backgroundSize=`${l}px`}removeBackground(t){t.style.background="none"}iconStatus(t){let a="";switch(t){case 1:default:a="fa fa-check";break;case 2:a="fa fa-eye-slash";break;case 3:a="fa fa-times";break;case 4:a="fa fa-hourglass-half";break;case 5:a="far fa-thumbs-down";break;case 6:a="fa fa-archive"}return a}}return(0,e.Z)(f,"\u0275fac",function(t){return new(t||f)(s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(o.i),s.Y36(c.e),s.Y36(s.sBO),s.Y36(u.K0))}),(0,e.Z)(f,"\u0275dir",s.lG2({type:f,selectors:[["","cmsRecordStatusSelfSave",""]],hostBindings:function(t,a){1&t&&s.NdJ("change",function(){return a.onChange()})},inputs:{row:"row",contentService:"contentService"}})),f})()},25897:(C,m,r)=>{r.d(m,{Y:()=>h});var n=r(86889),e=r(64537),u=r(5998);let h=(()=>{class s{constructor(c){(0,n.Z)(this,"sanitizer",void 0),this.sanitizer=c}transform(c){return"cms-EnumRecordStatus-cell-"+c}}return(0,n.Z)(s,"\u0275fac",function(c){return new(c||s)(e.Y36(u.H7,16))}),(0,n.Z)(s,"\u0275pipe",e.Yjl({name:"statusCellClass",type:s,pure:!0})),s})()},86639:(C,m,r)=>{r.d(m,{G:()=>h});var n=r(86889),e=r(64537),u=r(5998);let h=(()=>{class s{constructor(c){(0,n.Z)(this,"sanitizer",void 0),this.sanitizer=c}transform(c,d=!1){let i="";switch(c){case 1:default:i="fa fa-check";break;case 2:i="fa fa-times";break;case 3:i="fa fa-trash";break;case 4:i="fa fa-hourglass-half";break;case 5:i="far fa-thumbs-down";break;case 6:i="fa fa-archive"}return i}}return(0,n.Z)(s,"\u0275fac",function(c){return new(c||s)(e.Y36(u.H7,16))}),(0,n.Z)(s,"\u0275pipe",e.Yjl({name:"statusIconClass",type:s,pure:!0})),s})()},83914:(C,m,r)=>{r.d(m,{s:()=>s});var n=r(86889),e=r(64537),u=r(58219);let h=(()=>{class o{constructor(d){(0,n.Z)(this,"activeModal",void 0),(0,n.Z)(this,"id",++o.nextId),(0,n.Z)(this,"title",void 0),(0,n.Z)(this,"message",void 0),(0,n.Z)(this,"btnOkText",void 0),(0,n.Z)(this,"btnCancelText",void 0),this.activeModal=d}ngOnInit(){}decline(){this.activeModal.close(!1)}accept(){this.activeModal.close(!0)}dismiss(){this.activeModal.dismiss()}}return(0,n.Z)(o,"nextId",0),(0,n.Z)(o,"\u0275fac",function(d){return new(d||o)(e.Y36(u.Kz))}),(0,n.Z)(o,"\u0275cmp",e.Xpm({type:o,selectors:[["app-confirmation-dialog"]],inputs:{title:"title",message:"message",btnOkText:"btnOkText",btnCancelText:"btnCancelText"},decls:12,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body",3,"innerHTML"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(d,i){1&d&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return i.dismiss()}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e._UZ(6,"div",4),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return i.decline()}),e._uU(9),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return i.accept()}),e._uU(11),e.qZA()()),2&d&&(e.xp6(2),e.Oqu(i.title),e.xp6(4),e.Q6J("innerHTML",i.message,e.oJD),e.xp6(3),e.Oqu(i.btnCancelText),e.xp6(2),e.Oqu(i.btnOkText))},encapsulation:2})),o})(),s=(()=>{class o{constructor(d){(0,n.Z)(this,"modalService",void 0),this.modalService=d}confirm(d,i,v="OK",g="Cancel",f="sm"){const _=this.modalService.open(h,{size:f});return _.componentInstance.title=d,_.componentInstance.message=i,_.componentInstance.btnOkText=v,_.componentInstance.btnCancelText=g,_.result}}return(0,n.Z)(o,"\u0275fac",function(d){return new(d||o)(e.LFG(u.FF))}),(0,n.Z)(o,"\u0275prov",e.Yz7({token:o,factory:o.\u0275fac})),o})()}}]);