"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[9179,9271,769,8713],{13673:(b,h,r)=>{r.d(h,{G:()=>g});var n=r(8239),e=r(86889),_=r(88692),d=r(34511),i=r(64537),s=r(13987),u=r(32607);let g=(()=>{class f{constructor(t,a,c,p,S,C){(0,e.Z)(this,"elRef",void 0),(0,e.Z)(this,"renderer",void 0),(0,e.Z)(this,"publicHelper",void 0),(0,e.Z)(this,"cmsToastrService",void 0),(0,e.Z)(this,"cdr",void 0),(0,e.Z)(this,"document",void 0),(0,e.Z)(this,"row",void 0),(0,e.Z)(this,"contentService",void 0),this.elRef=t,this.renderer=a,this.publicHelper=c,this.cmsToastrService=p,this.cdr=S,this.document=C,this.getEnumRecordStatus()}getEnumRecordStatus(){var t=this;return(0,n.Z)(function*(){(yield t.publicHelper.getEnumRecordStatus()).listItems.forEach(c=>{const p=document.createElement("option");p.innerHTML=" "+c.title+' <i Class="'+t.iconStatus(c.value)+'"></i>',p.value=c.value.toString(),t.elRef.nativeElement.add(p)}),t.elRef.nativeElement.options.length>0&&t.row&&t.row.recordStatus&&t.renderer.setProperty(t.elRef.nativeElement,"value",t.row.recordStatus)})()}onChange(){const t=this.elRef.nativeElement,a=t.value;this.addLoader(t),this.contentService.setAccessDataType(d.MZK.Editor),this.contentService.ServiceSetStatus(this.row.id,a).subscribe(c=>{c.isSuccess?(this.handleSuccessCase(t),this.cmsToastrService.typeSuccessSetStatus(c.errorMessage),this.row.recordStatus=0|a,this.cdr.markForCheck()):(this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeErrorSetStatus(c.errorMessage),this.handleErrorCase(t))},c=>{this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeError(c),this.handleErrorCase(t)})}handleSuccessCase(t){this.removeBackground(t),this.addSuccess(t),setTimeout(()=>{this.removeBackground(t)},1e3)}handleErrorCase(t){this.removeBackground(t);const a=this.document.createElement("img");a.style.width="20px",a.src="https://www.seekpng.com/png/detail/334-3345964_error-icon-download-attention-symbol.png";const c=this.renderer.parentNode(this.elRef.nativeElement);this.renderer.appendChild(c,a),setTimeout(()=>{this.renderer.removeChild(c,a)},1e3)}addLoader(t){this.addBackground(t,"https://replit.com/public/images/loading_dots.gif",20)}addSuccess(t){this.addBackground(t,"https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg",20)}addBackground(t,a,c){t.style.background=`#fff url("${a}") no-repeat right 20px center`,t.style.backgroundSize=`${c}px`}removeBackground(t){t.style.background="none"}iconStatus(t){let a="";switch(t){case 1:default:a="fa fa-check";break;case 2:a="fa fa-eye-slash";break;case 3:a="fa fa-times";break;case 4:a="fa fa-hourglass-half";break;case 5:a="far fa-thumbs-down";break;case 6:a="fa fa-archive"}return a}}return(0,e.Z)(f,"\u0275fac",function(t){return new(t||f)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(s.i),i.Y36(u.e),i.Y36(i.sBO),i.Y36(_.K0))}),(0,e.Z)(f,"\u0275dir",i.lG2({type:f,selectors:[["","cmsRecordStatusSelfSave",""]],hostBindings:function(t,a){1&t&&i.NdJ("change",function(){return a.onChange()})},inputs:{row:"row",contentService:"contentService"}})),f})()},81418:(b,h,r)=>{r.d(h,{v:()=>_});var n=r(86889),e=r(64537);let _=(()=>{class d{transform(s){return(s+="").replace("/images/","/thumbnails/")}}return(0,n.Z)(d,"\u0275fac",function(s){return new(s||d)}),(0,n.Z)(d,"\u0275pipe",e.Yjl({name:"cmsthumbnail",type:d,pure:!0})),d})()},53953:(b,h,r)=>{r.d(h,{b:()=>d});var n=r(86889),e=r(64537),_=r(5998);let d=(()=>{class i{constructor(u){(0,n.Z)(this,"sanitizer",void 0),this.sanitizer=u}transform(u,l=!1){let o="";switch(u){case 1:default:o="fa fa-check";break;case 2:o="fa fa-times";break;case 3:o="fa fa-trash";break;case 4:o="fa fa-hourglass-half";break;case 5:o="far fa-thumbs-down";break;case 6:o="fa fa-archive"}return o}}return(0,n.Z)(i,"\u0275fac",function(u){return new(u||i)(e.Y36(_.H7,16))}),(0,n.Z)(i,"\u0275pipe",e.Yjl({name:"statusClass",type:i,pure:!0})),i})()},83914:(b,h,r)=>{r.d(h,{s:()=>i});var n=r(86889),e=r(64537),_=r(58219);let d=(()=>{class s{constructor(l){(0,n.Z)(this,"activeModal",void 0),(0,n.Z)(this,"id",++s.nextId),(0,n.Z)(this,"title",void 0),(0,n.Z)(this,"message",void 0),(0,n.Z)(this,"btnOkText",void 0),(0,n.Z)(this,"btnCancelText",void 0),this.activeModal=l}ngOnInit(){}decline(){this.activeModal.close(!1)}accept(){this.activeModal.close(!0)}dismiss(){this.activeModal.dismiss()}}return(0,n.Z)(s,"nextId",0),(0,n.Z)(s,"\u0275fac",function(l){return new(l||s)(e.Y36(_.Kz))}),(0,n.Z)(s,"\u0275cmp",e.Xpm({type:s,selectors:[["app-confirmation-dialog"]],inputs:{title:"title",message:"message",btnOkText:"btnOkText",btnCancelText:"btnCancelText"},decls:12,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body",3,"innerHTML"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(l,o){1&l&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return o.dismiss()}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e._UZ(6,"div",4),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return o.decline()}),e._uU(9),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return o.accept()}),e._uU(11),e.qZA()()),2&l&&(e.xp6(2),e.Oqu(o.title),e.xp6(4),e.Q6J("innerHTML",o.message,e.oJD),e.xp6(3),e.Oqu(o.btnCancelText),e.xp6(2),e.Oqu(o.btnOkText))},encapsulation:2})),s})(),i=(()=>{class s{constructor(l){(0,n.Z)(this,"modalService",void 0),this.modalService=l}confirm(l,o,v="OK",g="Cancel",f="sm"){const m=this.modalService.open(d,{size:f});return m.componentInstance.title=l,m.componentInstance.message=o,m.componentInstance.btnOkText=v,m.componentInstance.btnCancelText=g,m.result}}return(0,n.Z)(s,"\u0275fac",function(l){return new(l||s)(e.LFG(_.FF))}),(0,n.Z)(s,"\u0275prov",e.Yz7({token:s,factory:s.\u0275fac})),s})()}}]);