import{a as nn}from"./chunk-4L6K3DWD.js";import{a as Ji}from"./chunk-MUA7JVKJ.js";import{a as en}from"./chunk-ZTP5LE6K.js";import{a as pe}from"./chunk-OAM6KFRB.js";import{b as Fi,c as Ui,d as Ki,e as Gi,f as oe,g as Yi,h as qi,i as Re}from"./chunk-JXR5CUTF.js";import{a as an}from"./chunk-KB7IC4OY.js";import"./chunk-NJI52NWI.js";import{a as tn}from"./chunk-N74KS3XJ.js";import{a as Pe}from"./chunk-3T3CAYL2.js";import{a as Xi,b as Zi}from"./chunk-2WXBCJIV.js";import{e as Vi,h as Ni,i as ji,j as Hi,m as Wi,n as Qi}from"./chunk-2G3T6NXA.js";import{b as re,h as se,i as le,l as ce,o as de,r as me}from"./chunk-WE7TDRJO.js";import{a as bi,b as Zt,g as $t,j as Jt,w as te}from"./chunk-55EG65HQ.js";import{b as Le,c as St,d as Ft,g as _t}from"./chunk-BRLEWM4I.js";import{A as Ie,B as ie,C as Ai,D as Mt,E as Pi,F as W,H as z,N as Di,P as J,Q as Ii,R as Li,S as Ri,T as ne,U as ae,V as Bi,W as zi,a as fi,b as vi,d as De,e as xi,f as it,g as Lt,i as Rt,k as kt,l as yi,n as wi,p as ki,q as Ci,r as Mi,s as ee,t as Si,v as Oi,w as pt,x as Ei,y as Ti,z as Ct}from"./chunk-CGEFWE5H.js";import{b as qt}from"./chunk-4XODTPRS.js";import{a as $i}from"./chunk-O34IYIE6.js";import{a as Xt}from"./chunk-X432Z7RN.js";import{c as ui,e as _i,f as Gt,g as Yt}from"./chunk-L5PCJNFM.js";import"./chunk-TZV53DYE.js";import"./chunk-QU52A6S5.js";import{b as gi,c as wt}from"./chunk-NEFOGWMI.js";import{$b as R,Aa as Ae,Ac as pi,B as K,Ba as ot,Bc as Kt,D as et,Da as P,Db as O,Ea as Vt,Eb as f,Ec as h,F as Dt,Fb as v,Fc as u,Gb as li,H as zt,I as bt,Ib as dt,J as Se,Jb as mt,K as ti,Kb as C,L as ei,Lb as o,Mb as r,Nb as E,Ob as It,Pb as Wt,Rc as hi,T as nt,U as at,Ub as T,V as G,Vb as Qt,Vc as $,X as ii,Xa as oi,Yb as _,Yc as B,Za as ri,Zb as ci,_ as Oe,_a as l,_b as p,a as tt,aa as V,ac as w,bc as Z,c as Me,ca as N,cc as st,db as ht,dc as M,e as D,ea as s,eb as Nt,ec as S,gb as rt,gc as di,ha as ni,hc as mi,ib as si,ic as ut,ja as g,jb as jt,jc as Ut,ka as b,kc as x,l as U,la as Ee,lc as ft,mc as m,na as Y,nb as k,nc as y,oa as ct,ob as H,oc as F,pa as ai,pb as I,r as Pt,ra as j,rc as vt,sa as q,sb as X,sc as xt,tc as yt,ub as Ht,w as Je,wa as A,za as Te,zc as Q}from"./chunk-LDBCEKYW.js";import{a as Ce,b as $e}from"./chunk-C6Q5SG76.js";var _e=["*"],Mn=["content"],Sn=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],On=["mat-drawer","mat-drawer-content","*"];function En(n,c){if(n&1){let t=T();o(0,"div",1),_("click",function(){g(t);let i=p();return b(i._onBackdropClicked())}),r()}if(n&2){let t=p();x("mat-drawer-shown",t._isShowingBackdrop())}}function Tn(n,c){n&1&&(o(0,"mat-drawer-content"),w(1,2),r())}var An=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Pn=["mat-sidenav","mat-sidenav-content","*"];function Dn(n,c){if(n&1){let t=T();o(0,"div",1),_("click",function(){g(t);let i=p();return b(i._onBackdropClicked())}),r()}if(n&2){let t=p();x("mat-drawer-shown",t._isShowingBackdrop())}}function In(n,c){n&1&&(o(0,"mat-sidenav-content"),w(1,2),r())}var Ln=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Rn=new N("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ze=new N("MAT_DRAWER_CONTAINER"),he=(()=>{class n extends St{_platform=s(it);_changeDetectorRef=s($);_container=s(Be);constructor(){let t=s(P),e=s(Le),i=s(q);super(t,e,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(Ut("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),x("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[Q([{provide:St,useExisting:n}]),X],ngContentSelectors:_e,decls:1,vars:0,template:function(e,i){e&1&&(R(),w(0))},encapsulation:2,changeDetection:0})}return n})(),Fe=(()=>{class n{_elementRef=s(P);_focusTrapFactory=s(Si);_focusMonitor=s(Rt);_platform=s(it);_ngZone=s(q);_renderer=s(rt);_interactivityChecker=s(ee);_doc=s(ct);_container=s(ze,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=z(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=z(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(z(t))}_opened=A(!1);_openedVia=null;_animationStarted=new D;_animationEnd=new D;openedChange=new j(!0);_openedStream=this.openedChange.pipe(et(t=>t),Pt(()=>{}));openedStart=this._animationStarted.pipe(et(()=>this.opened),Se(void 0));_closedStream=this.openedChange.pipe(et(t=>!t),Pt(()=>{}));closedStart=this._animationStarted.pipe(et(()=>!this.opened),Se(void 0));_destroyed=new D;onPositionChanged=new j;_content;_modeChanged=new D;_injector=s(Y);_changeDetectorRef=s($);constructor(){this.openedChange.pipe(G(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!pt(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),d(),t.removeAttribute("tabindex")},a=this._renderer.listen(t,"blur",i),d=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ht(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(bt(1)).subscribe(d=>a(d?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&st(Mn,5),e&2){let a;M(a=S())&&(i._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(O("align",null)("tabIndex",i.mode!=="side"?"-1":null),Ut("visibility",!i._container&&!i.opened?"hidden":null),x("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:_e,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(R(),o(0,"div",1,0),w(2),r())},dependencies:[St],encapsulation:2,changeDetection:0})}return n})(),Be=(()=>{class n{_dir=s(Mt,{optional:!0});_element=s(P);_ngZone=s(q);_changeDetectorRef=s($);_animationDisabled=J();_transitionsEnabled=!1;_allDrawers;_drawers=new Vt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=z(t)}_autosize=s(Rn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:z(t)}_backdropOverride=null;backdropClick=new j;_start=null;_end=null;_left=null;_right=null;_destroyed=new D;_doCheckSubject=new D;_contentMargins={left:null,right:null};_contentMarginChanges=new D;get scrollable(){return this._userContent||this._content}_injector=s(Y);constructor(){let t=s(it),e=s(Ft);this._dir?.change.pipe(G(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(G(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(nt(this._allDrawers),G(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(nt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(zt(10),G(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(G(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(G(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(G(this._drawers.changes)).subscribe(()=>{ht({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(G(K(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,a){if(e&1&&Z(a,he,5)(a,Fe,5),e&2){let d;M(d=S())&&(i._content=d.first),M(d=S())&&(i._allDrawers=d)}},viewQuery:function(e,i){if(e&1&&st(he,5),e&2){let a;M(a=S())&&(i._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&x("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Q([{provide:ze,useExisting:n}])],ngContentSelectors:On,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(R(Sn),f(0,En,1,2,"div",0),w(1),w(2,1),f(3,Tn,2,0,"mat-drawer-content")),e&2&&(v(i.hasBackdrop?0:-1),l(3),v(i._content?-1:3))},dependencies:[he],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),ue=(()=>{class n extends he{static \u0275fac=(()=>{let t;return function(i){return(t||(t=ot(n)))(i||n)}})();static \u0275cmp=k({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Q([{provide:St,useExisting:n}]),X],ngContentSelectors:_e,decls:1,vars:0,template:function(e,i){e&1&&(R(),w(0))},encapsulation:2,changeDetection:0})}return n})(),Ve=(()=>{class n extends Fe{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=z(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Lt(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Lt(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=ot(n)))(i||n)}})();static \u0275cmp=k({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(O("tabIndex",i.mode!=="side"?"-1":null)("align",null),Ut("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),x("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Q([{provide:Fe,useExisting:n}]),X],ngContentSelectors:_e,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(R(),o(0,"div",1,0),w(2),r())},dependencies:[St],encapsulation:2,changeDetection:0})}return n})(),on=(()=>{class n extends Be{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=ot(n)))(i||n)}})();static \u0275cmp=k({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,a){if(e&1&&Z(a,ue,5)(a,Ve,5),e&2){let d;M(d=S())&&(i._content=d.first),M(d=S())&&(i._allDrawers=d)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&x("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[Q([{provide:ze,useExisting:n},{provide:Be,useExisting:n}]),X],ngContentSelectors:Pn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(R(An),f(0,Dn,1,2,"div",0),w(1),w(2,1),f(3,In,2,0,"mat-sidenav-content")),e&2&&(v(i.hasBackdrop?0:-1),l(3),v(i._content?-1:3))},dependencies:[ue],styles:[Ln],encapsulation:2,changeDetection:0})}return n})(),rn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=V({imports:[_t,W,_t]})}return n})();var Bn=["*",[["mat-toolbar-row"]]],zn=["*","mat-toolbar-row"],Vn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),sn=(()=>{class n{_elementRef=s(P);_platform=s(it);_document=s(ct);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,i,a){if(e&1&&Z(a,Vn,5),e&2){let d;M(d=S())&&(i._toolbarRows=d)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,i){e&2&&(ft(i.color?"mat-"+i.color:""),x("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:zn,decls:2,vars:0,template:function(e,i){e&1&&(R(Bn),w(0),w(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ln=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=V({imports:[W]})}return n})();var Ne=(()=>{class n{get vertical(){return this._vertical}set vertical(t){this._vertical=z(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=z(t)}_inset=!1;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,i){e&2&&(O("aria-orientation",i.vertical?"vertical":"horizontal"),x("mat-divider-vertical",i.vertical)("mat-divider-horizontal",!i.vertical)("mat-divider-inset",i.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,i){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return n})(),ge=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=V({imports:[W]})}return n})();var jn=["*"],Hn=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Wn=["unscopedContent"],Qn=["text"],Un=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Kn=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Gn=new N("ListOption"),He=(()=>{class n{_elementRef=s(P);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Yn=(()=>{class n{_elementRef=s(P);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),qn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),cn=(()=>{class n{_listOption=s(Gn,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,hostVars:4,hostBindings:function(e,i){e&2&&x("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),Xn=(()=>{class n extends cn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=ot(n)))(i||n)}})();static \u0275dir=I({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[X]})}return n})(),We=(()=>{class n extends cn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=ot(n)))(i||n)}})();static \u0275dir=I({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[X]})}return n})(),Zn=new N("MAT_LIST_CONFIG"),je=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=z(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(z(t))}_disabled=A(!1);_defaultOptions=s(Zn,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,hostVars:1,hostBindings:function(e,i){e&2&&O("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),$n=(()=>{class n{_elementRef=s(P);_ngZone=s(q);_listBase=s(je,{optional:!0});_platform=s(it);_hostElement;_isButtonElement;_noopAnimations=J();_avatars;_icons;set lines(t){this._explicitLines=Lt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=z(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(z(t))}_disabled=A(!1);_subscriptions=new tt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){s(kt).load(ne);let t=s(Li,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ii(this,this._ngZone,this._hostElement,this._platform,s(Y)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(K(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",a),i.classList.toggle("mdc-list-item__secondary-text",!a)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,contentQueries:function(e,i,a){if(e&1&&Z(a,Xn,4)(a,We,4),e&2){let d;M(d=S())&&(i._avatars=d),M(d=S())&&(i._icons=d)}},hostVars:4,hostBindings:function(e,i){e&2&&(O("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),x("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var dn=(()=>{class n extends $n{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=z(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=ot(n)))(i||n)}})();static \u0275cmp=k({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,a){if(e&1&&Z(a,Yn,5)(a,He,5)(a,qn,5),e&2){let d;M(d=S())&&(i._lines=d),M(d=S())&&(i._titles=d),M(d=S())&&(i._meta=d)}},viewQuery:function(e,i){if(e&1&&st(Wn,5)(Qn,5),e&2){let a;M(a=S())&&(i._unscopedContent=a.first),M(a=S())&&(i._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(O("aria-current",i._getAriaCurrent()),x("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[X],ngContentSelectors:Kn,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(R(Un),w(0),o(1,"span",1),w(2,1),w(3,2),o(4,"span",2,0),_("cdkObserveContent",function(){return i._updateItemLines(!0)}),w(6,3),r()(),w(7,4),w(8,5),E(9,"div",3))},dependencies:[Ci],encapsulation:2,changeDetection:0})}return n})();var mn=(()=>{class n extends je{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=ot(n)))(i||n)}})();static \u0275cmp=k({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Q([{provide:je,useExisting:n}]),X],ngContentSelectors:jn,decls:1,vars:0,template:function(e,i){e&1&&(R(),w(0))},styles:[Hn],encapsulation:2,changeDetection:0})}return n})();var pn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=V({imports:[Mi,ae,Fi,W,ge]})}return n})();var ea=["panel"],ia=["*"];function na(n,c){if(n&1&&(It(0,"div",1,0),w(2),Wt()),n&2){let t=c.id,e=p();ft(e._classList),x("mat-mdc-autocomplete-visible",e.showPanel)("mat-mdc-autocomplete-hidden",!e.showPanel)("mat-autocomplete-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._color==="primary")("mat-accent",e._color==="accent")("mat-warn",e._color==="warn"),Qt("id",e.id),O("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby(t))}}var Qe=class{source;option;constructor(c,t){this.source=c,this.option=t}},hn=new N("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),un=(()=>{class n{_changeDetectorRef=s($);_elementRef=s(P);_defaults=s(hn);_animationsDisabled=J();_activeOptionChanges=tt.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(t){this._color=t,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new j;opened=new j;closed=new j;optionActivated=new j;set classList(t){this._classList=t,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}id=s(Ct).getId("mat-autocomplete-");inertGroups;constructor(){let t=s(it);this.inertGroups=t?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Ei(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){let e=new Qe(this,t);this.optionSelected.emit(e)}_getPanelAriaLabelledby(t){if(this.ariaLabel)return null;let e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_skipPredicate(){return!1}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(e,i,a){if(e&1&&Z(a,oe,5)(a,Ki,5),e&2){let d;M(d=S())&&(i.options=d),M(d=S())&&(i.optionGroups=d)}},viewQuery:function(e,i){if(e&1&&st(Nt,7)(ea,5),e&2){let a;M(a=S())&&(i.template=a.first),M(a=S())&&(i.panel=a.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",B],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",B],requireSelection:[2,"requireSelection","requireSelection",B],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",B],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",B]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Q([{provide:Ui,useExisting:n}])],ngContentSelectors:ia,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(e,i){e&1&&(R(),Ht(0,na,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})();var aa={provide:bi,useExisting:Oe(()=>Ge),multi:!0};var oa=new N("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Y);return()=>se(n)}}),Ge=(()=>{class n{_environmentInjector=s(ni);_element=s(P);_injector=s(Y);_viewContainerRef=s(jt);_zone=s(q);_changeDetectorRef=s($);_dir=s(Mt,{optional:!0});_formField=s(Ni,{optional:!0,host:!0});_viewportRuler=s(Ft);_scrollStrategy=s(oa);_renderer=s(rt);_animationsDisabled=J();_defaults=s(hn,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new D;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=tt.EMPTY;_breakpointObserver=s(ki);_handsetLandscapeSubscription=tt.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new D;_overlayPanelClass=wi(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ie(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return K(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(et(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(et(()=>this._overlayAttached)):U()).pipe(Pt(t=>t instanceof Gi?t:null))}optionSelections=Je(()=>{let t=this.autocomplete?this.autocomplete.options:null;return t?t.changes.pipe(nt(t),at(()=>K(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(at(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Me(t=>{let e=a=>{let d=xi(a),L=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,gt=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&d!==this._element.nativeElement&&!this._hasFocus()&&(!L||!L.contains(d))&&(!gt||!gt.contains(d))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(d)&&t.next(a)},i=[this._renderer.listen("document","click",e),this._renderer.listen("document","auxclick",e),this._renderer.listen("document","touchend",e)];return()=>{i.forEach(a=>a())}})}writeValue(t){Promise.resolve(null).then(()=>this._assignOptionValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){let e=t,i=e.keyCode,a=pt(e);if(i===27&&!a&&e.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){let d=this.autocomplete._keyManager.activeItem,L=i===38||i===40;i===9||L&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(e):L&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(L||this.autocomplete._keyManager.activeItem!==d)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(t){let e=t.target,i=e.value;if(e.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(d=>d.selected);if(a){let d=this._getDisplayValue(a.value);i!==d&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return De()===this._element.nativeElement}_floatLabel(t=!1){this._formField&&this._formField.floatLabel==="auto"&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let t=new Me(i=>{ht(()=>{i.next()},{injector:this._environmentInjector})}),e=this.autocomplete.options?.changes.pipe(ii(()=>this._positionStrategy.reapplyLastPosition()),ti(0))??U();return K(t,e).pipe(at(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),bt(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(t){let e=this.autocomplete;return e&&e.displayWith?e.displayWith(t):t}_assignOptionValue(t){let e=this._getDisplayValue(t);t==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(e??"")}_updateNativeInputValue(t){this._formField?this._formField._control.value=t:this._element.nativeElement.value=t,this._previousValue=t}_setValueAndClose(t){let e=this.autocomplete,i=t?t.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),e._emitSelectEvent(i),this._element.nativeElement.focus()):e.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(t,e){this.autocomplete?.options?.forEach(i=>{i!==t&&i.selected&&i.deselect(e)})}_openPanelInternal(t=this._element.nativeElement.value){if(this._attachOverlay(t),this._floatLabel(),this._trackedModal){let e=this.autocomplete.id;Ie(this._trackedModal,"aria-owns",e)}}_attachOverlay(t){if(!this.autocomplete)return;let e=this._overlayRef;e?(this._positionStrategy.setOrigin(this._getConnectedElement()),e.updateSize({width:this._getPanelWidth()})):(this._portal=new re(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),e=de(this._injector,this._getOverlayConfig()),this._overlayRef=e,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&e&&e.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Di.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),e&&!e.hasAttached()&&(e.attach(this._portal),this._valueOnAttach=t,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=t=>{(t.keyCode===27&&!pt(t)||t.keyCode===38&&pt(t,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),t.stopPropagation(),t.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let t=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=t.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=t.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new le({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let t=ce(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){let e=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],d;this.position==="above"?d=a:this.position==="below"?d=e:d=[...e,...a],t.withPositions(d)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let t=this.autocomplete;if(t.autoActiveFirstOption){let e=-1;for(let i=0;i<t.options.length;i++)if(!t.options.get(i).disabled){e=i;break}t._keyManager.setActiveItem(e)}else t._keyManager.setActiveItem(-1)}_canOpen(){let t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this.autocompleteDisabled}_scrollToOption(t){let e=this.autocomplete,i=Yi(t,e.options,e.optionGroups);if(t===0&&i===1)e._setScrollTop(0);else if(e.panel){let a=e.options.toArray()[t];if(a){let d=a._getHostElement(),L=qi(d.offsetTop,d.offsetHeight,e._getScrollTop(),e.panel.nativeElement.offsetHeight);e._setScrollTop(L)}}}_trackedModal=null;_applyModalPanelOwnership(){let t=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;let e=this.autocomplete.id;this._trackedModal&&ie(this._trackedModal,"aria-owns",e),Ie(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){if(this._trackedModal){let t=this.autocomplete.id;ie(this._trackedModal,"aria-owns",t),this._trackedModal=null}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(e,i){e&1&&_("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(d){return i._handleInput(d)})("keydown",function(d){return i._handleKeydown(d)})("click",function(){return i._handleClick()}),e&2&&O("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",B]},exportAs:["matAutocompleteTrigger"],features:[Q([aa]),Ae]})}return n})(),_n=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=V({imports:[me,Re,_t,Re,W]})}return n})();var la=["mat-menu-item",""],ca=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],da=["mat-icon, [matMenuItemIcon]","*"];function ma(n,c){n&1&&(Ee(),o(0,"svg",2),E(1,"polygon",3),r())}var pa=["*"];function ha(n,c){if(n&1){let t=T();It(0,"div",0),ci("click",function(){g(t);let i=p();return b(i.closed.emit("click"))})("animationstart",function(i){g(t);let a=p();return b(a._onAnimationStart(i.animationName))})("animationend",function(i){g(t);let a=p();return b(a._onAnimationDone(i.animationName))})("animationcancel",function(i){g(t);let a=p();return b(a._onAnimationDone(i.animationName))}),It(1,"div",1),w(2),Wt()()}if(n&2){let t=p();ft(t._classList),x("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Qt("id",t.panelId),O("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var qe=new N("MAT_MENU_PANEL"),Bt=(()=>{class n{_elementRef=s(P);_document=s(ct);_focusMonitor=s(Rt);_parentMenu=s(qe,{optional:!0});_changeDetectorRef=s($);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new D;_focused=new D;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(kt).load(ne),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<e.length;i++)e[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,i){e&1&&_("click",function(d){return i._checkDisabled(d)})("mouseenter",function(){return i._handleMouseEnter()}),e&2&&(O("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),x("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",B],disableRipple:[2,"disableRipple","disableRipple",B]},exportAs:["matMenuItem"],attrs:la,ngContentSelectors:da,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,i){e&1&&(R(ca),w(0),o(1,"span",0),w(2,1),r(),E(3,"div",1),f(4,ma,2,0,":svg:svg",2)),e&2&&(l(3),C("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),l(),v(i._triggersSubmenu?4:-1))},dependencies:[Ri],encapsulation:2,changeDetection:0})}return n})();var ua=new N("MatMenuContent");var _a=new N("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Ye="_mat-menu-enter",fe="_mat-menu-exit",Tt=(()=>{class n{_elementRef=s(P);_changeDetectorRef=s($);_injector=s(Y);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=J();_allItems;_directDescendantItems=new Vt;_classList={};_panelAnimationState="void";_animationDone=new D;_isAnimating=A(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,i=Ce({},this._classList);e&&e.length&&e.split(" ").forEach(a=>{i[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(a=>{i[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new j;close=this.closed;panelId=s(Ct).getId("mat-menu-panel-");constructor(){let t=s(_a);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ti(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(nt(this._directDescendantItems),at(t=>K(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let i=t.toArray(),a=Math.max(0,Math.min(i.length-1,e.activeItemIndex||0));i[a]&&!i[a].disabled?e.setActiveItem(a):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(nt(this._directDescendantItems),at(e=>K(...e.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,i=this._keyManager;switch(e){case 27:pt(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ht(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=$e(Ce({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===fe;(e||t===Ye)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Ye||t===fe)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(fe),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Ye:fe)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(nt(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-menu"]],contentQueries:function(e,i,a){if(e&1&&Z(a,ua,5)(a,Bt,5)(a,Bt,4),e&2){let d;M(d=S())&&(i.lazyContent=d.first),M(d=S())&&(i._allItems=d),M(d=S())&&(i.items=d)}},viewQuery:function(e,i){if(e&1&&st(Nt,5),e&2){let a;M(a=S())&&(i.templateRef=a.first)}},hostVars:3,hostBindings:function(e,i){e&2&&O("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",B],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:B(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Q([{provide:qe,useExisting:n}])],ngContentSelectors:pa,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,i){e&1&&(R(),Ht(0,ha,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),ga=new N("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Y);return()=>se(n)}});var Et=new WeakMap,ba=(()=>{class n{_canHaveBackdrop;_element=s(P);_viewContainerRef=s(jt);_menuItemInstance=s(Bt,{optional:!0,self:!0});_dir=s(Mt,{optional:!0});_focusMonitor=s(Rt);_ngZone=s(q);_injector=s(Y);_scrollStrategy=s(ga);_changeDetectorRef=s($);_animationsDisabled=J();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=tt.EMPTY;_menuCloseSubscription=tt.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=s(qe,{optional:!0});this._parentMaterialMenu=e instanceof Tt?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Et.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let i=Et.get(e);Et.set(e,this),i&&i!==this&&i._closeMenu();let a=this._createOverlay(e),d=a.getConfig(),L=d.positionStrategy;this._setPosition(e,L),this._canHaveBackdrop?d.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:d.hasBackdrop=e.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof Tt&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(G(e.close)).subscribe(()=>{L.withLockedPosition(!1).reapplyLastPosition(),L.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,i=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Tt&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(bt(1)).subscribe(()=>{e.detach(),Et.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(e.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Et.delete(i),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=de(this._injector,e),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Tt&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new le({positionStrategy:ce(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let a=i.connectionPair.overlayX==="start"?"after":"before",d=i.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(a,d)})})}_setPosition(t,e){let[i,a]=t.xPosition==="before"?["end","start"]:["start","end"],[d,L]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[gt,ye]=[d,L],[we,ke]=[i,a],At=0;if(this._triggersSubmenu()){if(ke=i=t.xPosition==="before"?"start":"end",a=we=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Ze=this._parentMaterialMenu.items.first;this._parentInnerPadding=Ze?Ze._getHostElement().offsetTop:0}At=d==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(gt=d==="top"?"bottom":"top",ye=L==="top"?"bottom":"top");e.withPositions([{originX:i,originY:gt,overlayX:we,overlayY:d,offsetY:At},{originX:a,originY:gt,overlayX:ke,overlayY:d,offsetY:At},{originX:i,originY:ye,overlayX:we,overlayY:L,offsetY:-At},{originX:a,originY:ye,overlayX:ke,overlayY:L,offsetY:-At}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:U(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(et(d=>this._menuOpen&&d!==this._menuItemInstance)):U();return K(t,i,a,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new re(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Et.get(t)===this}_triggerIsAriaDisabled(){return B(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){si()};static \u0275dir=I({type:n})}return n})(),fn=(()=>{class n extends ba{_cleanupTouchstart;_hoverSubscription=tt.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new j;onMenuOpen=this.menuOpened;menuClosed=new j;onMenuClose=this.menuClosed;constructor(){super(!0);let t=s(rt);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{vi(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){fi(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,i){e&1&&_("click",function(d){return i._handleClick(d)})("mousedown",function(d){return i._handleMousedown(d)})("keydown",function(d){return i._handleKeydown(d)}),e&2&&O("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[X]})}return n})();var vn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=V({imports:[ae,me,W,_t]})}return n})();var xn="mat-badge-content",va=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return n})(),yn=(()=>{class n{_ngZone=s(q);_elementRef=s(P);_ariaDescriber=s(Ai);_renderer=s(rt);_animationsDisabled=J();_idGenerator=s(Ct);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=s(ee);_document=s(ct);constructor(){let t=s(kt);t.load(va),t.load(yi)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(xn),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${xn}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=I({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,i){e&2&&x("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small",i.size==="small")("mat-badge-medium",i.size==="medium")("mat-badge-large",i.size==="large")("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",B],disabled:[2,"matBadgeDisabled","disabled",B],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",B]}})}return n})(),wn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=V({imports:[Oi,W]})}return n})();var ya=n=>({exact:n}),wa=(n,c)=>c.route;function ka(n,c){if(n&1&&(o(0,"span",5),m(1),r()),n&2){let t=p(2);l(),y(t.unreadCount()>9?"9+":t.unreadCount())}}function Ca(n,c){if(n&1&&(o(0,"span",6),m(1),h(2,"translate"),r()),n&2){let t=p().$implicit;l(),y(u(2,1,t.labelKey))}}function Ma(n,c){if(n&1&&(o(0,"a",2),h(1,"translate"),o(2,"div",3)(3,"span",4),m(4),r(),f(5,ka,2,1,"span",5),r(),f(6,Ca,3,3,"span",6),r()),n&2){let t=c.$implicit,e=p();x("fab-item",t.fab),C("routerLink",t.route)("routerLinkActiveOptions",Kt(10,ya,!!t.exact)),O("aria-label",u(1,8,t.labelKey)),l(4),y(t.icon),l(),v(t.route==="/messages"&&e.unreadCount()>0?5:-1),l(),v(t.fab?-1:6)}}var ve=class n{notifSvc=s(pe);auth=s(qt);unreadCount=this.notifSvc.unreadCount;navItems=[{labelKey:"NAV.HOME",icon:"home",route:"/",exact:!0},{labelKey:"NAV.MAP",icon:"map",route:"/map"},{labelKey:"NAV.POST",icon:"add",route:"/post",fab:!0},{labelKey:"NAV.MESSAGES",icon:"chat_bubble",route:"/messages"},{labelKey:"NAV.ACCOUNT",icon:"person",route:this.auth.isLoggedIn()?"/dashboard/profile":"/auth/login"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-bottom-nav"]],decls:3,vars:0,consts:[[1,"bottom-nav","hide-tablet"],["routerLinkActive","active",1,"nav-item",3,"fab-item","routerLink","routerLinkActiveOptions"],["routerLinkActive","active",1,"nav-item",3,"routerLink","routerLinkActiveOptions"],[1,"nav-icon-wrap"],[1,"material-symbols-outlined","nav-icon"],[1,"badge"],[1,"nav-label"]],template:function(t,e){t&1&&(o(0,"nav",0),dt(1,Ma,7,12,"a",1,wa),r()),t&2&&(l(),mt(e.navItems))},dependencies:[Gt,Yt,wt],styles:['@charset "UTF-8";.bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;inset-inline:0;height:var(--b-bottom-nav-h);background:var(--b-surface-card);border-top:1px solid var(--b-border);display:flex;align-items:center;justify-content:space-around;z-index:100;padding-bottom:env(safe-area-inset-bottom,0);box-shadow:0 -2px 12px #0000000f}.nav-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:2px;text-decoration:none;color:var(--b-text-secondary);border-radius:var(--b-radius-md);padding:6px 12px;min-width:52px;transition:color .2s,transform .1s;position:relative;-webkit-tap-highlight-color:transparent}.nav-item[_ngcontent-%COMP%]:active{transform:scale(.92)}.nav-item.active[_ngcontent-%COMP%]{color:var(--b-primary)}.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{font-variation-settings:"FILL" 1}.nav-item.active[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%]{font-weight:600}.fab-item[_ngcontent-%COMP%]   .nav-icon-wrap[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:50%;background:var(--b-accent);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px color-mix(in srgb,var(--b-accent) 50%,transparent);transition:transform .2s,box-shadow .2s}.fab-item[_ngcontent-%COMP%]:active   .nav-icon-wrap[_ngcontent-%COMP%]{transform:scale(.92);box-shadow:0 2px 6px color-mix(in srgb,var(--b-accent) 35%,transparent)}.fab-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-on-accent);font-size:24px}.nav-icon-wrap[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.nav-icon[_ngcontent-%COMP%]{font-size:22px;font-variation-settings:"FILL" 0,"wght" 300;transition:font-variation-settings .2s}.nav-label[_ngcontent-%COMP%]{font-size:.65rem;line-height:1;font-weight:400}.badge[_ngcontent-%COMP%]{position:absolute;top:-4px;inset-inline-end:-6px;background:var(--b-accent);color:#fff;font-size:.6rem;font-weight:700;min-width:16px;height:16px;border-radius:var(--b-radius-pill);display:flex;align-items:center;justify-content:center;padding:0 3px}']})};var Oa=["messagesContainer"];function Ea(n,c){n&1&&(o(0,"div",11)(1,"span",17),m(2),h(3,"translate"),r()()),n&2&&(l(2),y(u(3,1,"CHATBOT.WELCOME")))}function Ta(n,c){n&1&&(o(0,"span",19),m(1,"smart_toy"),r())}function Aa(n,c){if(n&1&&(o(0,"div",18),f(1,Ta,2,0,"span",19),o(2,"span",20),m(3),r()()),n&2){let t=c.$implicit;x("user-msg",t.role==="user")("bot-msg",t.role==="assistant"),l(),v(t.role==="assistant"?1:-1),l(2),y(t.content)}}function Pa(n,c){n&1&&(o(0,"div",13)(1,"span",19),m(2,"smart_toy"),r(),o(3,"span",21),E(4,"span",22)(5,"span",22)(6,"span",22),r()())}function Da(n,c){if(n&1){let t=T();o(0,"div",3)(1,"div",4)(2,"span",5),m(3,"smart_toy"),r(),o(4,"div",6)(5,"span",7),m(6),h(7,"translate"),r(),o(8,"span",8),m(9),h(10,"translate"),r()(),o(11,"button",9),_("click",function(){g(t);let i=p();return b(i.toggleOpen())}),o(12,"span",2),m(13,"close"),r()()(),o(14,"div",10,0),f(16,Ea,4,3,"div",11),dt(17,Aa,4,6,"div",12,li),f(19,Pa,7,0,"div",13),r(),o(20,"div",14)(21,"input",15),h(22,"translate"),yt("ngModelChange",function(i){g(t);let a=p();return xt(a.inputText,i)||(a.inputText=i),b(i)}),_("keydown.enter",function(){g(t);let i=p();return b(i.send())}),r(),o(23,"button",16),_("click",function(){g(t);let i=p();return b(i.send())}),o(24,"span",2),m(25,"send"),r()()()()}if(n&2){let t=p();C("dir",t.isRtl()?"rtl":"ltr"),l(6),y(u(7,9,"CHATBOT.BOT_NAME")),l(3),y(u(10,11,"CHATBOT.STATUS_ONLINE")),l(7),v(t.messages().length?-1:16),l(),mt(t.messages()),l(2),v(t.loading()?19:-1),l(2),vt("ngModel",t.inputText),C("placeholder",u(22,13,"CHATBOT.PLACEHOLDER"))("disabled",t.loading()),l(2),C("disabled",!t.inputText.trim()||t.loading())}}var xe=class n{api=s(Xt);translate=s(gi);messagesContainer=hi("messagesContainer");isOpen=A(!1);loading=A(!1);messages=A([]);inputText="";isRtl(){return this.translate.currentLang==="ar"}toggleOpen(){this.isOpen.update(c=>!c)}send(){let c=this.inputText.trim();if(!c||this.loading())return;this.messages.update(i=>[...i,{role:"user",content:c}]),this.inputText="",this.loading.set(!0);let t=this.translate.currentLang==="ar"?"ar":"en",e=this.messages().slice(-9,-1);this.api.post("/core/chatbot/",{message:c,history:e,language:t}).pipe(Dt(()=>U({reply:t==="ar"?"\u0639\u0630\u0631\u0627\u064B\u060C \u062D\u062F\u062B \u062E\u0637\u0623. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u0627\u064B.":"Sorry, something went wrong."}))).subscribe(i=>{this.messages.update(a=>[...a,{role:"assistant",content:i.reply}]),this.loading.set(!1)})}ngAfterViewChecked(){let c=this.messagesContainer()?.nativeElement;c&&(c.scrollTop=c.scrollHeight)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-chatbot-widget"]],viewQuery:function(t,e){t&1&&di(e.messagesContainer,Oa,5),t&2&&mi()},decls:5,vars:5,consts:[["messagesContainer",""],[1,"chat-fab",3,"click"],[1,"material-symbols-outlined"],[1,"chat-panel",3,"dir"],[1,"chat-header"],[1,"material-symbols-outlined","bot-icon"],[1,"header-text"],[1,"bot-name"],[1,"bot-status"],[1,"header-close",3,"click"],[1,"chat-messages"],[1,"msg","bot-msg"],[1,"msg",3,"user-msg","bot-msg"],[1,"msg","bot-msg","typing-row"],[1,"chat-input-row"],["type","text","autocomplete","off",1,"chat-input",3,"ngModelChange","keydown.enter","ngModel","placeholder","disabled"],[1,"send-btn",3,"click","disabled"],[1,"bot-bubble"],[1,"msg"],[1,"material-symbols-outlined","bot-avatar"],[1,"bubble"],[1,"bubble","typing-bubble"],[1,"dot"]],template:function(t,e){t&1&&(o(0,"button",1),h(1,"translate"),_("click",function(){return e.toggleOpen()}),o(2,"span",2),m(3),r()(),f(4,Da,26,15,"div",3)),t&2&&(O("aria-label",u(1,3,"CHATBOT.OPEN")),l(3),F(" ",e.isOpen()?"close":"smart_toy"," "),l(),v(e.isOpen()?4:-1))},dependencies:[te,Zt,$t,Jt,wt],styles:['@charset "UTF-8";[_nghost-%COMP%]{position:fixed;bottom:70px;inset-inline-end:20px;z-index:1200}.chat-fab[_ngcontent-%COMP%]{width:47px;height:47px;border-radius:50%;background:var(--b-primary);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px #00000040;transition:transform .2s,box-shadow .2s}.chat-fab[_ngcontent-%COMP%]:hover{transform:scale(1.08);box-shadow:0 6px 20px #0000004d}.chat-fab[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:26px}.chat-panel[_ngcontent-%COMP%]{position:absolute;bottom:62px;inset-inline-end:0;width:320px;background:var(--b-surface);border:1px solid var(--b-border);border-radius:16px;box-shadow:0 8px 32px #0000002e;display:flex;flex-direction:column;overflow:hidden;animation:_ngcontent-%COMP%_slide-up .2s ease}@media(max-width:400px){.chat-panel[_ngcontent-%COMP%]{width:calc(100vw - 32px);inset-inline-end:0}}@keyframes _ngcontent-%COMP%_slide-up{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.chat-header[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}.bot-icon[_ngcontent-%COMP%]{font-size:24px}.header-text[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;line-height:1.2}.bot-name[_ngcontent-%COMP%]{font-size:.88rem;font-weight:600}.bot-status[_ngcontent-%COMP%]{font-size:.72rem;opacity:.8}.header-close[_ngcontent-%COMP%]{background:transparent;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:50%;width:28px;height:28px}.header-close[_ngcontent-%COMP%]:hover{background:#ffffff26}.header-close[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}.chat-messages[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:12px 10px;display:flex;flex-direction:column;gap:8px;min-height:220px;max-height:300px;scroll-behavior:smooth}.msg[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:6px}.msg.user-msg[_ngcontent-%COMP%]{flex-direction:row-reverse}.bot-avatar[_ngcontent-%COMP%]{font-size:18px;color:var(--b-primary);flex-shrink:0}.bubble[_ngcontent-%COMP%], .bot-bubble[_ngcontent-%COMP%]{max-width:80%;padding:8px 11px;border-radius:14px;font-size:.83rem;line-height:1.45;white-space:pre-wrap;word-break:break-word}.bot-msg[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%], .bot-msg[_ngcontent-%COMP%]   .bot-bubble[_ngcontent-%COMP%]{background:var(--b-surface-dim);border-end-start-radius:4px}.user-msg[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%], .user-msg[_ngcontent-%COMP%]   .bot-bubble[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff;border-end-end-radius:4px}.bot-bubble[_ngcontent-%COMP%]{background:var(--b-surface-dim)}.typing-bubble[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:10px 14px;background:var(--b-surface-dim)}.dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:var(--b-text-secondary);animation:_ngcontent-%COMP%_bounce .9s infinite}.dot[_ngcontent-%COMP%]:nth-child(2){animation-delay:.15s}.dot[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}@keyframes _ngcontent-%COMP%_bounce{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-6px)}}.chat-input-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:8px 10px;border-top:1px solid var(--b-border)}.chat-input[_ngcontent-%COMP%]{flex:1;border:1px solid var(--b-border);border-radius:20px;padding:7px 12px;font-size:.84rem;outline:none;background:var(--b-surface);color:var(--b-text-primary)}.chat-input[_ngcontent-%COMP%]:focus{border-color:var(--b-primary)}.chat-input[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.send-btn[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;background:var(--b-primary);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s}.send-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:color-mix(in srgb,var(--b-primary) 80%,black)}.send-btn[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.send-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}'],changeDetection:0})};var Ia=n=>({exact:n}),La=()=>({exact:!1}),Xe=(n,c)=>c.route;function Ra(n,c){if(n&1){let t=T();o(0,"button",40),_("click",function(){g(t),p();let i=ut(2);return b(i.close())}),o(1,"span",24),m(2,"close"),r()()}}function Fa(n,c){if(n&1){let t=T();o(0,"div",9)(1,"mat-form-field",41)(2,"span",42),m(3,"search"),r(),o(4,"input",43),h(5,"translate"),yt("ngModelChange",function(i){g(t);let a=p();return xt(a.searchQuery,i)||(a.searchQuery=i),b(i)}),_("keyup.enter",function(){g(t);let i=p();return b(i.doSearch())}),r()()()}if(n&2){let t=p();l(4),C("placeholder",u(5,2,"COMMON.SEARCH_PLACEHOLDER")),vt("ngModel",t.searchQuery)}}function Ba(n,c){if(n&1){let t=T();o(0,"a",44),_("click",function(){g(t);let i=p();return b(i.closeMobile())}),o(1,"span",45),m(2),r(),o(3,"span",46),m(4),h(5,"translate"),r()()}if(n&2){let t=c.$implicit;C("routerLink",t.route)("routerLinkActiveOptions",Kt(6,Ia,!!t.exact)),l(2),y(t.icon),l(2),y(u(5,4,t.labelKey))}}function za(n,c){if(n&1&&(o(0,"span",52),m(1),r()),n&2){let t=p(2);l(),y(t.msgUnreadCount()>9?"9+":t.msgUnreadCount())}}function Va(n,c){if(n&1){let t=T();E(0,"mat-divider",14),o(1,"mat-nav-list",57)(2,"a",58),_("click",function(){g(t);let i=p(2);return b(i.closeMobile())}),o(3,"span",45),m(4,"campaign"),r(),o(5,"span",46),m(6),h(7,"translate"),r()()()}n&2&&(l(6),y(u(7,1,"NAV.ADMIN_ADS")))}function Na(n,c){if(n&1){let t=T();o(0,"mat-nav-list",47)(1,"a",48),_("click",function(){g(t);let i=p();return b(i.closeMobile())}),o(2,"span",45),m(3,"list_alt"),r(),o(4,"span",46),m(5),h(6,"translate"),r()(),o(7,"a",49),_("click",function(){g(t);let i=p();return b(i.closeMobile())}),o(8,"span",45),m(9,"favorite"),r(),o(10,"span",46),m(11),h(12,"translate"),r()(),o(13,"a",50),_("click",function(){g(t);let i=p();return b(i.closeMobile())}),o(14,"span",45),m(15,"chat_bubble"),r(),o(16,"span",51),m(17),h(18,"translate"),f(19,za,2,1,"span",52),r()(),o(20,"a",53),_("click",function(){g(t);let i=p();return b(i.closeMobile())}),o(21,"span",45),m(22,"notifications"),r(),o(23,"span",46),m(24),h(25,"translate"),r()(),o(26,"a",54),_("click",function(){g(t);let i=p();return b(i.closeMobile())}),o(27,"span",45),m(28,"notifications_active"),r(),o(29,"span",46),m(30),h(31,"translate"),r()(),o(32,"a",55),_("click",function(){g(t);let i=p();return b(i.closeMobile())}),o(33,"span",45),m(34,"person"),r(),o(35,"span",46),m(36),h(37,"translate"),r()()(),f(38,Va,8,3),E(39,"mat-divider",14),o(40,"mat-nav-list",10)(41,"a",56),_("click",function(){g(t);let i=p();return b(i.logout())}),o(42,"span",45),m(43,"logout"),r(),o(44,"span",46),m(45),h(46,"translate"),r()()()}if(n&2){let t,e=p();l(5),y(u(6,9,"NAV.MY_LISTINGS")),l(6),y(u(12,11,"NAV.FAVOURITES")),l(6),F(" ",u(18,13,"NAV.MESSAGES")," "),l(2),v(e.msgUnreadCount()>0?19:-1),l(5),y(u(25,15,"NAV.NOTIFICATIONS")),l(6),y(u(31,17,"NAV.AREA_ALERTS")),l(6),y(u(37,19,"NAV.PROFILE")),l(2),v((t=e.auth.currentUser())!=null&&t.is_staff?38:-1),l(7),y(u(46,21,"AUTH.LOGOUT"))}}function ja(n,c){if(n&1){let t=T();o(0,"div",15)(1,"a",59),_("click",function(){g(t);let i=p();return b(i.closeMobile())}),m(2),h(3,"translate"),r(),o(4,"a",60),_("click",function(){g(t);let i=p();return b(i.closeMobile())}),m(5),h(6,"translate"),r()()}n&2&&(l(2),F(" ",u(3,2,"AUTH.LOGIN")," "),l(3),F(" ",u(6,4,"AUTH.REGISTER")," "))}function Ha(n,c){if(n&1&&(o(0,"mat-option",29)(1,"span",61),m(2),r(),m(3),r()),n&2){let t=c.$implicit;C("value",t.label),l(2),y(t.icon),l(),F(" ",t.label," ")}}function Wa(n,c){if(n&1){let t=T();o(0,"div",30)(1,"button",62),h(2,"translate"),_("click",function(){g(t);let i=p(),a=ut(2);return b(i.onMenuClick(a))}),o(3,"span",24),m(4,"menu"),r()(),o(5,"a",63),E(6,"app-brand",64),r()()}if(n&2){let t=p();l(),O("aria-label",u(2,3,"NAV.MENU")),l(4),x("mobile-logo",t.isMobile())}}function Qa(n,c){if(n&1){let t=T();o(0,"button",69),_("click",function(){g(t);let i=p(2);return b(i.clearSearch())}),o(1,"span",24),m(2,"close"),r()()}}function Ua(n,c){if(n&1){let t=T();o(0,"div",31)(1,"div",65)(2,"span",66),m(3,"search"),r(),o(4,"input",67),h(5,"translate"),yt("ngModelChange",function(i){g(t);let a=p();return xt(a.searchQuery,i)||(a.searchQuery=i),b(i)}),_("input",function(){g(t);let i=p();return b(i.onSearchInput())})("keyup.enter",function(){g(t);let i=p();return b(i.doSearch())})("focus",function(){g(t);let i=p();return b(i.searchFocused=!0)})("blur",function(){g(t);let i=p();return b(i.searchFocused=!1)}),r(),f(6,Qa,3,0,"button",68),r()()}if(n&2){let t=p(),e=ut(48);l(),x("focused",t.searchFocused),l(3),C("placeholder",u(5,6,"COMMON.SEARCH_PLACEHOLDER")),vt("ngModel",t.searchQuery),C("matAutocomplete",e),l(2),v(t.searchQuery?6:-1)}}function Ka(n,c){if(n&1){let t=T();o(0,"div",32)(1,"div",70)(2,"span",66),m(3,"search"),r(),o(4,"input",71),h(5,"translate"),yt("ngModelChange",function(i){g(t);let a=p();return xt(a.searchQuery,i)||(a.searchQuery=i),b(i)}),_("input",function(){g(t);let i=p();return b(i.onSearchInput())})("keyup.enter",function(){g(t);let i=p();return b(i.doSearch())})("keyup.escape",function(){g(t);let i=p();return b(i.closeSearch())}),r(),o(6,"button",69),_("click",function(){g(t);let i=p();return b(i.closeSearch())}),o(7,"span",24),m(8,"close"),r()()()()}if(n&2){let t=p(),e=ut(48);l(4),C("placeholder",u(5,3,"COMMON.SEARCH_PLACEHOLDER")),vt("ngModel",t.searchQuery),C("matAutocomplete",e)}}function Ga(n,c){n&1&&(o(0,"a",72)(1,"span",24),m(2,"add"),r(),m(3),h(4,"translate"),r()),n&2&&(l(3),F(" ",u(4,1,"ACTIONS.POST_AD")," "))}function Ya(n,c){if(n&1){let t=T();o(0,"button",62),h(1,"translate"),_("click",function(){g(t);let i=p(2);return b(i.openSearch())}),o(2,"span",24),m(3,"search"),r()()}n&2&&O("aria-label",u(1,1,"COMMON.SEARCH"))}function qa(n,c){if(n&1&&(o(0,"a",74),h(1,"translate"),o(2,"span",24),m(3,"chat_bubble"),r()()),n&2){let t=p(2);C("matTooltip",u(1,3,"NAV.MESSAGES"))("matBadge",t.msgUnreadCount()>0?t.msgUnreadCount()>9?"9+":t.msgUnreadCount().toString():"")("matBadgeHidden",t.msgUnreadCount()===0)}}function Xa(n,c){if(n&1){let t=T();o(0,"button",78),h(1,"translate"),_("click",function(){g(t);let i=p(2);return b(i.pwaInstall.promptInstall())}),o(2,"span",24),m(3,"install_mobile"),r()()}n&2&&C("matTooltip",u(1,1,"ACTIONS.INSTALL_APP"))}function Za(n,c){if(n&1&&E(0,"img",80),n&2){let t=p(3);C("src",t.auth.currentUser().avatar_thumbnail,oi)("alt",t.auth.currentUser().first_name||"profile")}}function $a(n,c){n&1&&(o(0,"span",24),m(1,"account_circle"),r())}function Ja(n,c){n&1&&(E(0,"mat-divider"),o(1,"a",88)(2,"span",83),m(3,"campaign"),r(),m(4),h(5,"translate"),r()),n&2&&(l(4),F(" ",u(5,1,"NAV.ADMIN_ADS")," "))}function to(n,c){if(n&1){let t=T();o(0,"button",79),h(1,"translate"),f(2,Za,1,2,"img",80)(3,$a,2,0,"span",24),r(),o(4,"mat-menu",81,2)(6,"a",82)(7,"span",83),m(8,"person"),r(),m(9),h(10,"translate"),r(),o(11,"a",84)(12,"span",83),m(13,"list_alt"),r(),m(14),h(15,"translate"),r(),o(16,"a",85)(17,"span",83),m(18,"favorite"),r(),m(19),h(20,"translate"),r(),o(21,"a",86)(22,"span",83),m(23,"notifications"),r(),m(24),h(25,"translate"),r(),f(26,Ja,6,3),E(27,"mat-divider"),o(28,"button",87),_("click",function(){g(t);let i=p(2);return b(i.logout())}),o(29,"span",83),m(30,"logout"),r(),m(31),h(32,"translate"),r()()}if(n&2){let t,e,i=ut(5),a=p(2);C("matMenuTriggerFor",i)("matTooltip",u(1,9,"NAV.ACCOUNT")),l(2),v((t=a.auth.currentUser())!=null&&t.avatar_thumbnail?2:3),l(7),F(" ",u(10,11,"NAV.PROFILE")," "),l(5),F(" ",u(15,13,"NAV.MY_LISTINGS")," "),l(5),F(" ",u(20,15,"NAV.FAVOURITES")," "),l(5),F(" ",u(25,17,"NAV.NOTIFICATIONS")," "),l(2),v((e=a.auth.currentUser())!=null&&e.is_staff?26:-1),l(5),F(" ",u(32,19,"AUTH.LOGOUT")," ")}}function eo(n,c){n&1&&(o(0,"a",77),m(1),h(2,"translate"),r()),n&2&&(l(),y(u(2,1,"AUTH.LOGIN")))}function io(n,c){if(n&1&&(f(0,Ga,5,3,"a",72),f(1,Ya,4,3,"button",73),f(2,qa,4,5,"a",74),o(3,"a",75),h(4,"translate"),o(5,"span",24),m(6,"tune"),r()(),f(7,Xa,4,3,"button",76),f(8,to,33,21)(9,eo,3,3,"a",77)),n&2){let t=p();v(t.isMobile()?-1:0),l(),v(t.isMobile()?1:-1),l(),v(t.auth.isLoggedIn()?2:-1),l(),C("matTooltip",u(4,6,"SETTINGS.TITLE")),l(4),v(t.pwaInstall.canInstall()?7:-1),l(),v(t.auth.isLoggedIn()?8:9)}}function no(n,c){if(n&1&&(o(0,"span",91),m(1),r()),n&2){let t=p().$implicit,e=p();l(),F("(",e.fmtCount(e.sectionCounts()[t.countKey]),")")}}function ao(n,c){if(n&1&&(o(0,"a",37)(1,"span",89),m(2),r(),o(3,"span",90),m(4),h(5,"translate"),r(),f(6,no,2,1,"span",91),r()),n&2){let t=c.$implicit,e=p();C("routerLink",t.route)("routerLinkActiveOptions",pi(7,La)),l(2),y(t.icon),l(2),y(u(5,5,t.labelKey)),l(2),v(e.fmtCount(e.sectionCounts()[t.countKey])?6:-1)}}function oo(n,c){if(n&1){let t=T();o(0,"div",38)(1,"span",24),m(2,"mark_email_unread"),r(),o(3,"span"),m(4),h(5,"translate"),r(),o(6,"button",92),_("click",function(){g(t);let i=p();return b(i.resendActivation())}),m(7),h(8,"translate"),h(9,"translate"),r()()}if(n&2){let t=p();l(4),y(u(5,3,"AUTH.VERIFY_EMAIL_BANNER")),l(2),C("disabled",t.resendSent()),l(),F(" ",t.resendSent()?u(8,5,"AUTH.SENT"):u(9,7,"AUTH.RESEND_ACTIVATION")," ")}}var Cn=class n{_destroyRef=s(ai);theme=s($i);auth=s(qt);NAV_SECTIONS=[{route:"/properties",labelKey:"NAV.PROPERTIES",icon:"apartment",countKey:"properties"},{route:"/vehicles",labelKey:"NAV.VEHICLES",icon:"directions_car",countKey:"vehicles"},{route:"/classifieds",labelKey:"NAV.CLASSIFIEDS",icon:"sell",countKey:"classifieds"},{route:"/jobs",labelKey:"NAV.JOBS",icon:"work",countKey:"jobs"},{route:"/services",labelKey:"NAV.SERVICES",icon:"handyman",countKey:"services"},{route:"/deals",labelKey:"NAV.DEALS",icon:"local_offer",countKey:"deals"},{route:"/events",labelKey:"NAV.EVENTS",icon:"event",countKey:"events"},{route:"/news",labelKey:"NAV.NEWS",icon:"newspaper",countKey:"news"}];sectionCounts=A({});fmtCount(c){return c?c>=1e6?(c/1e6).toFixed(1).replace(/\.0$/,"")+"M":c>=1e3?(c/1e3).toFixed(1).replace(/\.0$/,"")+"K":String(c):""}resendActivation(){if(this.resendSent())return;let c=this.auth.currentUser();c?.email&&this.api.post("/accounts/activate/resend/",{email:c.email}).subscribe({next:()=>this.resendSent.set(!0),error:()=>this.resendSent.set(!0)})}pwaInstall=s(en);notif=s(pe);api=s(Xt);locSvc=s(tn);router=s(_i);unreadCount=this.notif.unreadCount;msgUnreadCount=s(Ji).unreadCount;searchQuery="";searchFocused=!1;suggestions=A([]);scrolled=A(!1);navHidden=A(!1);isMobile=A(!1);searchOpen=A(!1);sidenavOpen=A(!1);resendSent=A(!1);_lastScrollY=0;searchSubject=new D;sectionIcons={properties:"apartment",vehicles:"directions_car",classifieds:"sell",jobs:"work",services:"build",deals:"local_offer",events:"event",news:"newspaper"};mainSections=[{labelKey:"NAV.HOME",icon:"home",route:"/",exact:!0},{labelKey:"NAV.MAP",icon:"map",route:"/map"},{labelKey:"NAV.PROPERTIES",icon:"apartment",route:"/properties"},{labelKey:"NAV.VEHICLES",icon:"directions_car",route:"/vehicles"},{labelKey:"NAV.CLASSIFIEDS",icon:"sell",route:"/classifieds"},{labelKey:"NAV.JOBS",icon:"work",route:"/jobs"},{labelKey:"NAV.SERVICES",icon:"build",route:"/services"},{labelKey:"NAV.DEALS",icon:"local_offer",route:"/deals"},{labelKey:"NAV.EVENTS",icon:"event",route:"/events"},{labelKey:"NAV.NEWS",icon:"newspaper",route:"/news"}];constructor(){Te(()=>{this.auth.currentUser()?this.notif.startPolling():this.notif.stopPolling()}),this.checkMobile(),this.locSvc.loadGovernorates().subscribe(),Te(()=>{let t=this.locSvc.selectedGovernorate(),e={};t&&(e.governorate=String(t)),this.api.get("/core/section-counts/",e).pipe(Dt(()=>U({})),Pe(this._destroyRef)).subscribe(i=>this.sectionCounts.set(i))}),this.searchSubject.pipe(zt(300),ei(),at(t=>t.trim().length<2?U([]):this.api.get("/core/search/",{q:t,suggest:"1"}).pipe(Dt(()=>U([])))),Pe(this._destroyRef)).subscribe(t=>{this.suggestions.set(t.slice(0,8).map(e=>({label:e.title??e.translations?.ar?.title??e.translations?.en?.title??"",icon:this.sectionIcons[e.section]??"search",route:e.url??`/${e.section}/${e.id}`})).filter(e=>e.label))});let c=document.getElementById("app-loader");c&&(c.classList.add("fade-out"),c.addEventListener("transitionend",()=>c.remove(),{once:!0}))}onResize(){this.checkMobile()}checkMobile(){this.isMobile.set(window.innerWidth<960)}onContentScroll(c){let e=c.target.scrollTop,i=e-this._lastScrollY;i>6&&e>80?this.navHidden.set(!0):i<-6&&this.navHidden.set(!1),this.scrolled.set(e>8),this._lastScrollY=e}onSearchInput(){this.searchSubject.next(this.searchQuery)}doSearch(){let c=this.searchQuery.trim();c&&(this.router.navigate(["/search"],{queryParams:{q:c}}),this.suggestions.set([]),this.searchQuery="")}onSuggestionSelect(c){let t=this.suggestions().find(e=>e.label===c.option.value);t&&this.router.navigate([t.route]),this.searchQuery="",this.suggestions.set([]),this.searchSubject.next("")}clearSearch(){this.searchQuery="",this.suggestions.set([]),this.searchSubject.next("")}openSearch(){this.searchOpen.set(!0),setTimeout(()=>{document.querySelector(".mobile-search-input")?.focus()},50)}closeSearch(){this.searchOpen.set(!1),this.clearSearch()}toggleLang(){let c=this.theme.isRtl()?"en":"ar";this.theme.setLang(c),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},50)}onMenuClick(c){this.isMobile()?c.toggle():this.sidenavOpen.update(t=>!t)}logout(){this.auth.logout()}closeMobile(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-shell"]],hostBindings:function(t,e){t&1&&_("resize",function(){return e.onResize()},ri)},decls:66,vars:40,consts:[["sidenav",""],["searchAuto","matAutocomplete"],["accountMenu","matMenu"],[1,"shell-container",3,"hasBackdrop","dir"],["fixedTopGap","0",1,"side-nav",3,"mode","opened","fixedInViewport"],[1,"sidenav-logo"],["routerLink","/",1,"logo-link",3,"click"],["size","md"],["mat-icon-button","",1,"close-btn"],[1,"sidenav-search"],[1,"sidenav-list"],["mat-list-item","","routerLinkActive","active-link",1,"nav-list-item",3,"routerLink","routerLinkActiveOptions"],[1,"gov-filter"],[1,"gov-filter-label"],[1,"sidenav-divider"],[1,"auth-btns"],[1,"sidenav-footer-links"],["routerLink","/legal/terms",3,"click"],[1,"footer-sep"],["routerLink","/legal/privacy",3,"click"],["routerLink","/contact",3,"click"],["routerLink","/help",3,"click"],[1,"sidenav-bottom"],["mat-button","","routerLink","/settings",1,"settings-link",3,"click"],[1,"material-symbols-outlined"],[1,"shell-content",3,"scroll"],[1,"sticky-bars"],[1,"top-bar"],[3,"optionSelected"],[3,"value"],[1,"toolbar-left"],[1,"toolbar-center"],[1,"toolbar-search-mobile"],[1,"toolbar-spacer"],["aria-label","sections",1,"section-nav"],[1,"section-nav-inner"],[3,"compact"],["routerLinkActive","sn-chip--active",1,"sn-chip",3,"routerLink","routerLinkActiveOptions"],[1,"verify-banner"],[1,"page-content"],["mat-icon-button","",1,"close-btn",3,"click"],["appearance","outline","subscriptSizing","dynamic",1,"search-field"],["matPrefix","",1,"material-symbols-outlined","search-icon-pre"],["matInput","","autocomplete","off",3,"ngModelChange","keyup.enter","placeholder","ngModel"],["mat-list-item","","routerLinkActive","active-link",1,"nav-list-item",3,"click","routerLink","routerLinkActiveOptions"],["matListItemIcon","",1,"material-symbols-outlined","nav-icon"],["matListItemTitle",""],[1,"sidenav-list","user-section"],["mat-list-item","","routerLink","/dashboard/listings","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/dashboard/favourites","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/messages","routerLinkActive","active-link",3,"click"],["matListItemTitle","",1,"msg-title"],[1,"sidenav-badge"],["mat-list-item","","routerLink","/dashboard/notifications","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/dashboard/area-alerts","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/dashboard/profile","routerLinkActive","active-link",3,"click"],["mat-list-item","",1,"logout-item",3,"click"],[1,"sidenav-list","admin-section"],["mat-list-item","","routerLink","/admin/ads","routerLinkActive","active-link",3,"click"],["mat-flat-button","","routerLink","/auth/login","color","primary",1,"auth-btn",3,"click"],["mat-stroked-button","","routerLink","/auth/register",1,"auth-btn",3,"click"],[1,"material-symbols-outlined","sugg-icon"],["mat-icon-button","",3,"click"],["routerLink","/",1,"toolbar-logo"],["size","sm"],[1,"search-pill"],[1,"material-symbols-outlined","sp-icon"],["autocomplete","off",1,"sp-input",3,"ngModelChange","input","keyup.enter","focus","blur","placeholder","ngModel","matAutocomplete"],[1,"sp-clear"],[1,"sp-clear",3,"click"],[1,"search-pill","focused"],["autocomplete","off",1,"sp-input","mobile-search-input",3,"ngModelChange","input","keyup.enter","keyup.escape","placeholder","ngModel","matAutocomplete"],["mat-flat-button","","routerLink","/post",1,"post-btn"],["mat-icon-button",""],["mat-icon-button","","routerLink","/messages","matBadgeColor","accent","matBadgeSize","small",1,"tb-btn",3,"matTooltip","matBadge","matBadgeHidden"],["mat-icon-button","","routerLink","/settings",1,"tb-btn",3,"matTooltip"],["mat-icon-button","",1,"tb-btn",3,"matTooltip"],["mat-button","","routerLink","/auth/login",1,"login-btn"],["mat-icon-button","",1,"tb-btn",3,"click","matTooltip"],["mat-icon-button","",1,"tb-btn","profile-btn",3,"matMenuTriggerFor","matTooltip"],[1,"toolbar-avatar",3,"src","alt"],["xPosition","before"],["mat-menu-item","","routerLink","/dashboard/profile"],[1,"material-symbols-outlined","menu-icon"],["mat-menu-item","","routerLink","/dashboard/listings"],["mat-menu-item","","routerLink","/dashboard/favourites"],["mat-menu-item","","routerLink","/dashboard/notifications"],["mat-menu-item","",3,"click"],["mat-menu-item","","routerLink","/admin/ads",1,"admin-menu-item"],[1,"material-symbols-outlined","sn-icon"],[1,"sn-label"],[1,"sn-count"],[1,"resend-btn",3,"click","disabled"]],template:function(t,e){t&1&&(o(0,"mat-sidenav-container",3)(1,"mat-sidenav",4,0)(3,"div",5)(4,"a",6),_("click",function(){return e.closeMobile()}),E(5,"app-brand",7),r(),f(6,Ra,3,0,"button",8),r(),f(7,Fa,6,4,"div",9),o(8,"mat-nav-list",10),dt(9,Ba,6,8,"a",11,Xe),r(),o(11,"div",12)(12,"div",13),m(13),h(14,"translate"),r(),E(15,"app-governorate-select"),r(),E(16,"mat-divider",14),f(17,Na,47,23)(18,ja,7,6,"div",15),o(19,"div",16)(20,"a",17),_("click",function(){return e.closeMobile()}),m(21),h(22,"translate"),r(),o(23,"span",18),m(24,"\xB7"),r(),o(25,"a",19),_("click",function(){return e.closeMobile()}),m(26),h(27,"translate"),r(),o(28,"span",18),m(29,"\xB7"),r(),o(30,"a",20),_("click",function(){return e.closeMobile()}),m(31),h(32,"translate"),r(),o(33,"span",18),m(34,"\xB7"),r(),o(35,"a",21),_("click",function(){return e.closeMobile()}),m(36),h(37,"translate"),r()(),o(38,"div",22)(39,"a",23),_("click",function(){return e.closeMobile()}),o(40,"span",24),m(41,"tune"),r(),m(42),h(43,"translate"),r()()(),o(44,"mat-sidenav-content",25),_("scroll",function(a){return e.onContentScroll(a)}),o(45,"div",26)(46,"mat-toolbar",27)(47,"mat-autocomplete",28,1),_("optionSelected",function(a){return e.onSuggestionSelect(a)}),dt(49,Ha,4,3,"mat-option",29,Xe),r(),f(51,Wa,7,5,"div",30),f(52,Ua,7,8,"div",31),f(53,Ka,9,5,"div",32),E(54,"span",33),f(55,io,10,8),r(),o(56,"nav",34)(57,"div",35),E(58,"app-governorate-select",36),dt(59,ao,7,8,"a",37,Xe),r()()(),f(61,oo,10,9,"div",38),o(62,"main",39),E(63,"router-outlet"),r(),E(64,"app-bottom-nav"),r()(),E(65,"app-chatbot-widget")),t&2&&(C("hasBackdrop",e.isMobile())("dir",e.theme.isRtl()?"rtl":"ltr"),l(),C("mode",e.isMobile()?"over":"side")("opened",!e.isMobile()&&e.sidenavOpen())("fixedInViewport",!0),l(5),v(e.isMobile()?6:-1),l(),v(e.isMobile()?7:-1),l(2),mt(e.mainSections),l(4),y(u(14,28,"GOVERNORATE.LABEL")),l(4),v(e.auth.isLoggedIn()?17:18),l(4),y(u(22,30,"NAV.TERMS")),l(5),y(u(27,32,"NAV.PRIVACY")),l(5),y(u(32,34,"NAV.CONTACT")),l(5),y(u(37,36,"NAV.HELP")),l(6),F(" ",u(43,38,"SETTINGS.TITLE")," "),l(2),x("with-sidenav",!e.isMobile()&&e.sidenavOpen()),l(),x("bars-hidden",e.navHidden()),l(),x("scrolled",e.scrolled()),l(3),mt(e.suggestions()),l(2),v(!e.searchOpen()||!e.isMobile()?51:-1),l(),v(e.isMobile()?-1:52),l(),v(e.isMobile()&&e.searchOpen()?53:-1),l(2),v(!e.searchOpen()||!e.isMobile()?55:-1),l(3),C("compact",!0),l(),mt(e.NAV_SECTIONS),l(2),v(e.auth.currentUser()&&!e.auth.currentUser().email_verified&&!e.auth.currentUser().is_verified?61:-1),l(),x("has-bottom-nav",e.isMobile()))},dependencies:[ui,Gt,Yt,te,Zt,$t,Jt,rn,Pi,Ve,on,ue,ln,sn,pn,mn,dn,We,Ne,He,Bi,zi,Hi,ji,Vi,Qi,Wi,_n,un,oe,Ge,vn,Tt,Bt,fn,wn,yn,ge,Zi,Xi,ve,nn,an,xe,wt],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100vh;overflow:hidden}.shell-container[_ngcontent-%COMP%]{height:100vh}.side-nav[_ngcontent-%COMP%]{width:260px;border-inline-end:1px solid var(--b-border);background:var(--b-surface-card);display:flex;flex-direction:column;overflow-x:hidden}.sidenav-logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:20px 16px 16px;background:transparent;border-bottom:1px solid var(--b-border)}.logo-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--b-primary);font-size:1.2rem;font-weight:700;opacity:.95}.logo-link[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]{letter-spacing:-.3px}.close-btn[_ngcontent-%COMP%]{color:var(--b-text-secondary)!important}.sidenav-search[_ngcontent-%COMP%]{padding:8px 12px}.sidenav-search[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{width:100%}.sidenav-list[_ngcontent-%COMP%]{padding:4px 8px}.nav-list-item[_ngcontent-%COMP%]{border-radius:var(--b-radius-md)!important;margin-bottom:2px;--mdc-list-list-item-label-text-size: .9rem}.nav-list-item.active-link[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--b-primary) 12%,transparent);color:var(--b-primary)}.nav-list-item.active-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-primary);font-variation-settings:"FILL" 1}.nav-icon[_ngcontent-%COMP%]{font-size:20px;color:var(--b-text-secondary);font-variation-settings:"FILL" 1,"wght" 400}.sidenav-divider[_ngcontent-%COMP%]{margin:6px 0}.msg-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.sidenav-badge[_ngcontent-%COMP%]{background:var(--b-accent);color:var(--b-on-accent);font-size:.6rem;font-weight:700;min-width:16px;height:16px;border-radius:var(--b-radius-pill);display:inline-flex;align-items:center;justify-content:center;padding:0 4px}.auth-btns[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:12px 16px}.auth-btns[_ngcontent-%COMP%]   .auth-btn[_ngcontent-%COMP%]{width:100%}.logout-item[_ngcontent-%COMP%], .logout-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-error)!important}.admin-section[_ngcontent-%COMP%]   .nav-list-item[_ngcontent-%COMP%], .admin-section[_ngcontent-%COMP%]   .nav-list-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-primary)}.admin-menu-item[_ngcontent-%COMP%], .admin-menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{color:var(--b-primary)!important}.sidenav-footer-links[_ngcontent-%COMP%]{padding:10px 16px 2px;display:flex;flex-wrap:wrap;align-items:center;gap:4px 6px;margin-top:auto}.sidenav-footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.75rem;color:var(--b-text-hint);text-decoration:none}.sidenav-footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--b-primary);text-decoration:underline}.sidenav-footer-links[_ngcontent-%COMP%]   .footer-sep[_ngcontent-%COMP%]{font-size:.75rem;color:var(--b-border);-webkit-user-select:none;user-select:none}.sidenav-bottom[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:8px 12px calc(12px + env(safe-area-inset-bottom,0));border-top:1px solid var(--b-border)}.gov-filter[_ngcontent-%COMP%]{padding:4px 12px 8px}.gov-filter-label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600;color:var(--b-text-hint);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.sticky-bars[_ngcontent-%COMP%]{position:sticky;top:0;z-index:50;transform:translateY(0);transition:transform .28s cubic-bezier(.4,0,.2,1);will-change:transform}.sticky-bars.bars-hidden[_ngcontent-%COMP%]{transform:translateY(-100%)}.top-bar[_ngcontent-%COMP%]{position:relative;background:var(--b-primary-dark)!important;border-bottom:none!important;height:56px;min-height:56px;padding:0 12px;gap:6px;transition:box-shadow .2s;box-shadow:var(--b-shadow-sm)}.top-bar.scrolled[_ngcontent-%COMP%]{box-shadow:var(--b-shadow-md)}.dark[_nghost-%COMP%]   .top-bar[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .top-bar[_ngcontent-%COMP%]{background:var(--b-surface)!important}.top-bar[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]{color:#ffffffe0!important}.top-bar[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]:hover{background:#ffffff1a!important}.toolbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px;flex-shrink:0}.toolbar-logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;text-decoration:none;color:#fff;font-size:1.1rem;font-weight:700;white-space:nowrap;padding:0 4px;opacity:.95}.toolbar-center[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);width:min(480px,100vw - 440px);pointer-events:none;display:flex;justify-content:center}[dir=rtl][_nghost-%COMP%]   .toolbar-center[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .toolbar-center[_ngcontent-%COMP%]{left:auto;right:50%;transform:translate(50%)}.search-pill[_ngcontent-%COMP%]{pointer-events:all;display:flex;align-items:center;gap:6px;padding:0 10px 0 14px;height:38px;border-radius:var(--b-radius-pill);background:#ffffff1f;border:1.5px solid rgba(255,255,255,.18);transition:border-color .2s,box-shadow .2s,background .2s;width:100%}.search-pill.focused[_ngcontent-%COMP%]{background:#fff3;border-color:#ffffff73;box-shadow:0 0 0 3px #ffffff1a}.sp-icon[_ngcontent-%COMP%]{font-size:18px;color:#ffffffa6;flex-shrink:0;line-height:1}.sp-input[_ngcontent-%COMP%]{flex:1;min-width:0;border:none;background:transparent;outline:none;font-size:.875rem;color:#fff;font-family:inherit;line-height:1}.sp-input[_ngcontent-%COMP%]::placeholder{color:#ffffff80}.sp-clear[_ngcontent-%COMP%]{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:none;background:transparent;cursor:pointer;color:#ffffffa6;padding:0;transition:background .15s}.sp-clear[_ngcontent-%COMP%]:hover{background:#ffffff26}.sp-clear[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:15px;line-height:1}.toolbar-search-mobile[_ngcontent-%COMP%]{flex:1;padding:0 4px;display:flex;align-items:center}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.post-btn[_ngcontent-%COMP%]{background-color:var(--b-accent)!important;color:var(--b-on-accent)!important;border-radius:var(--b-radius-pill)!important;font-weight:600!important;box-shadow:0 2px 8px color-mix(in srgb,var(--b-accent) 45%,transparent)!important;transition:box-shadow .2s,transform .15s!important}.post-btn[_ngcontent-%COMP%]:hover{box-shadow:0 4px 16px color-mix(in srgb,var(--b-accent) 55%,transparent)!important;transform:translateY(-1px)}.login-btn[_ngcontent-%COMP%]{color:#ffffffe6!important;font-weight:600}.profile-btn[_ngcontent-%COMP%]{padding:0!important;overflow:hidden}.toolbar-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;object-fit:cover;display:block}.settings-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;color:var(--b-text-secondary);font-size:.85rem}@media(min-width:960px){.top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:34px!important;height:34px!important;min-width:34px!important;max-width:34px!important;padding:0!important;border-radius:50%!important;background:#ffffff1f!important;border:1.5px solid rgba(255,255,255,.28)!important;overflow:hidden;transition:background .15s,border-color .15s,transform .15s!important}.top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]:hover{background:#ffffff2e!important;border-color:#ffffff61!important;transform:translateY(-1px)}.top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-persistent-ripple[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-focus-indicator[_ngcontent-%COMP%]{width:34px!important;height:34px!important;border-radius:50%!important}.top-bar[_ngcontent-%COMP%]   .tb-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px;line-height:1}.top-bar[_ngcontent-%COMP%]   .tb-btn.profile-btn[_ngcontent-%COMP%]{border-radius:50%!important}.toolbar-avatar[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%}}.search-icon-pre[_ngcontent-%COMP%]{font-size:18px;color:var(--b-text-hint);margin-inline-end:4px}.sugg-icon[_ngcontent-%COMP%]{font-size:16px;color:var(--b-text-secondary);margin-inline-end:8px;vertical-align:middle}.menu-icon[_ngcontent-%COMP%]{font-size:18px;margin-inline-end:8px;vertical-align:middle;color:var(--b-text-secondary)}.shell-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow-y:scroll;scrollbar-gutter:stable;background:var(--b-surface-dim)}.section-nav[_ngcontent-%COMP%]{background:var(--b-surface-card);border-bottom:1px solid var(--b-border);position:relative;overflow:hidden}.section-nav-inner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;overflow-x:auto;overflow-y:hidden;padding:7px 12px;scrollbar-width:none}.section-nav-inner[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.section-nav-inner[_ngcontent-%COMP%]{-webkit-mask-image:linear-gradient(to right,transparent 0,black 16px,black calc(100% - 16px),transparent 100%);mask-image:linear-gradient(to right,transparent 0,black 16px,black calc(100% - 16px),transparent 100%)}.sn-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:5px;padding:5px 14px;border-radius:var(--b-radius-pill);text-decoration:none;font-size:.78rem;font-weight:500;color:var(--b-text-secondary);background:transparent;border:1.5px solid transparent;white-space:nowrap;flex-shrink:0;transition:background .15s,color .15s,border-color .15s}.sn-chip[_ngcontent-%COMP%]:hover{background:var(--b-primary-container);color:var(--b-primary-dark);border-color:transparent}.sn-chip--active[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff;font-weight:600;border-color:transparent}.sn-icon[_ngcontent-%COMP%]{font-size:15px;font-variation-settings:"FILL" 1,"wght" 400}.sn-count[_ngcontent-%COMP%]{font-size:.7rem;color:inherit;opacity:.65;margin-inline-start:1px}.verify-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap;background:#fff3cd;color:#664d03;padding:10px 20px;font-size:.83rem;border-bottom:1px solid #ffe69c}.verify-banner[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px;color:#d97c00;flex-shrink:0}.resend-btn[_ngcontent-%COMP%]{margin-inline-start:auto;padding:4px 14px;border:1px solid #d97c00;border-radius:var(--b-radius-pill);background:transparent;color:#d97c00;font-size:.78rem;font-weight:600;cursor:pointer}.resend-btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:default}.page-content[_ngcontent-%COMP%]{flex:1;min-height:0}'],changeDetection:0})};export{Cn as ShellComponent};
