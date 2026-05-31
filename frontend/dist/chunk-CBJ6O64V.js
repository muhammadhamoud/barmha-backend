import{a as Ii}from"./chunk-4L6K3DWD.js";import{a as Ti}from"./chunk-QHEUYYXO.js";import{a as Pi}from"./chunk-ZTP5LE6K.js";import{a as qt}from"./chunk-OAM6KFRB.js";import"./chunk-ZAPDGAEP.js";import{a as ki,b as Ci,c as Mi}from"./chunk-VMVX44Z6.js";import{a as li,e as gi}from"./chunk-PXDO3VV4.js";import{a as Ai}from"./chunk-KB7IC4OY.js";import"./chunk-NJI52NWI.js";import{a as Di}from"./chunk-N74KS3XJ.js";import{a as Si,b as Oi}from"./chunk-2WXBCJIV.js";import{e as mi,i as pi,j as hi,m as ui,n as _i}from"./chunk-2G3T6NXA.js";import{a as he}from"./chunk-3T3CAYL2.js";import{b as bi,h as fi,i as vi,l as xi,o as yi,r as wi}from"./chunk-WE7TDRJO.js";import{b as Vt,g as Nt,j as jt,w as Ht}from"./chunk-55EG65HQ.js";import{b as ue,c as bt,d as _e,g as St}from"./chunk-BRLEWM4I.js";import{C as ni,D as Gt,E as ai,F as j,H as L,P as J,Q as oi,R as ri,S as si,T as Kt,U as Yt,V as ci,W as di,a as qe,b as Xe,f as ot,g as Ct,i as Mt,k as gt,l as Ze,q as $e,r as Je,s as Qt,t as ti,v as ei,w as Wt,y as ii,z as Ut}from"./chunk-CGEFWE5H.js";import{b as Ft}from"./chunk-4XODTPRS.js";import{a as Ei}from"./chunk-O34IYIE6.js";import{a as zt}from"./chunk-X432Z7RN.js";import{a as Ge,c as Ke,e as Lt,f as Rt,g as Bt}from"./chunk-L5PCJNFM.js";import"./chunk-TZV53DYE.js";import"./chunk-QU52A6S5.js";import{b as Ye,c as _t}from"./chunk-NEFOGWMI.js";import{$b as B,Ac as We,B as et,Ba as Z,Bc as At,D as Y,Da as I,Db as D,Ea as Dt,Eb as f,Ec as h,F as yt,Fb as v,Fc as u,Gb as ze,H as Et,I as Tt,Ib as nt,J as ce,Jb as at,Kb as w,L as De,Lb as a,Mb as o,Nb as M,Ob as pe,Pb as Ve,Rc as Ue,T as st,U as wt,Ub as S,V as F,Vb as Ne,Vc as $,Xa as Ie,Yb as _,Yc as G,Za as Ae,Zb as je,_a as r,_b as m,a as mt,aa as z,ac as k,bc as W,ca as H,cc as ct,db as kt,dc as O,e as R,ea as c,eb as Le,ec as E,gb as lt,gc as He,hc as Qe,ib as Re,ic as dt,ja as g,jb as Be,jc as Pt,ka as b,kc as x,l as K,la as de,lc as It,mc as d,na as q,nb as C,nc as y,oa as it,ob as V,oc as P,pa as Pe,pb as A,r as le,ra as X,rc as pt,sa as Q,sb as N,sc as ht,tc as ut,ub as Fe,wa as T,za as me,zc as U}from"./chunk-LDBCEKYW.js";import{a as se,b as Te}from"./chunk-C6Q5SG76.js";var $t=["*"],Zi=["content"],$i=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Ji=["mat-drawer","mat-drawer-content","*"];function tn(n,s){if(n&1){let t=S();a(0,"div",1),_("click",function(){g(t);let i=m();return b(i._onBackdropClicked())}),o()}if(n&2){let t=m();x("mat-drawer-shown",t._isShowingBackdrop())}}function en(n,s){n&1&&(a(0,"mat-drawer-content"),k(1,2),o())}var nn=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],an=["mat-sidenav","mat-sidenav-content","*"];function on(n,s){if(n&1){let t=S();a(0,"div",1),_("click",function(){g(t);let i=m();return b(i._onBackdropClicked())}),o()}if(n&2){let t=m();x("mat-drawer-shown",t._isShowingBackdrop())}}function rn(n,s){n&1&&(a(0,"mat-sidenav-content"),k(1,2),o())}var sn=`.mat-drawer-container {
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
`;var ln=new H("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ve=new H("MAT_DRAWER_CONTAINER"),Xt=(()=>{class n extends bt{_platform=c(ot);_changeDetectorRef=c($);_container=c(be);constructor(){let t=c(I),e=c(ue),i=c(Q);super(t,e,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(Pt("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),x("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[U([{provide:bt,useExisting:n}]),N],ngContentSelectors:$t,decls:1,vars:0,template:function(e,i){e&1&&(B(),k(0))},encapsulation:2,changeDetection:0})}return n})(),ge=(()=>{class n{_elementRef=c(I);_focusTrapFactory=c(ti);_focusMonitor=c(Mt);_platform=c(ot);_ngZone=c(Q);_renderer=c(lt);_interactivityChecker=c(Qt);_doc=c(it);_container=c(ve,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=L(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=L(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(L(t))}_opened=T(!1);_openedVia=null;_animationStarted=new R;_animationEnd=new R;openedChange=new X(!0);_openedStream=this.openedChange.pipe(Y(t=>t),le(()=>{}));openedStart=this._animationStarted.pipe(Y(()=>this.opened),ce(void 0));_closedStream=this.openedChange.pipe(Y(t=>!t),le(()=>{}));closedStart=this._animationStarted.pipe(Y(()=>!this.opened),ce(void 0));_destroyed=new R;onPositionChanged=new X;_content;_modeChanged=new R;_injector=c(q);_changeDetectorRef=c($);constructor(){this.openedChange.pipe(F(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Wt(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{l(),p(),t.removeAttribute("tabindex")},l=this._renderer.listen(t,"blur",i),p=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":kt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(l=>{this.openedChange.pipe(Tt(1)).subscribe(p=>l(p?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&ct(Zi,5),e&2){let l;O(l=E())&&(i._content=l.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(D("align",null)("tabIndex",i.mode!=="side"?"-1":null),Pt("visibility",!i._container&&!i.opened?"hidden":null),x("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:$t,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(B(),a(0,"div",1,0),k(2),o())},dependencies:[bt],encapsulation:2,changeDetection:0})}return n})(),be=(()=>{class n{_dir=c(Gt,{optional:!0});_element=c(I);_ngZone=c(Q);_changeDetectorRef=c($);_animationDisabled=J();_transitionsEnabled=!1;_allDrawers;_drawers=new Dt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=L(t)}_autosize=c(ln);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:L(t)}_backdropOverride=null;backdropClick=new X;_start=null;_end=null;_left=null;_right=null;_destroyed=new R;_doCheckSubject=new R;_contentMargins={left:null,right:null};_contentMarginChanges=new R;get scrollable(){return this._userContent||this._content}_injector=c(q);constructor(){let t=c(ot),e=c(_e);this._dir?.change.pipe(F(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(F(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(st(this._allDrawers),F(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(st(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Et(10),F(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(F(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(F(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(F(this._drawers.changes)).subscribe(()=>{kt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(F(et(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,l){if(e&1&&W(l,Xt,5)(l,ge,5),e&2){let p;O(p=E())&&(i._content=p.first),O(p=E())&&(i._allDrawers=p)}},viewQuery:function(e,i){if(e&1&&ct(Xt,5),e&2){let l;O(l=E())&&(i._userContent=l.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&x("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[U([{provide:ve,useExisting:n}])],ngContentSelectors:Ji,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(B($i),f(0,tn,1,2,"div",0),k(1),k(2,1),f(3,en,2,0,"mat-drawer-content")),e&2&&(v(i.hasBackdrop?0:-1),r(3),v(i._content?-1:3))},dependencies:[Xt],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return n})(),Zt=(()=>{class n extends Xt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=Z(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[U([{provide:bt,useExisting:n}]),N],ngContentSelectors:$t,decls:1,vars:0,template:function(e,i){e&1&&(B(),k(0))},encapsulation:2,changeDetection:0})}return n})(),xe=(()=>{class n extends ge{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=L(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Ct(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Ct(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=Z(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(D("tabIndex",i.mode!=="side"?"-1":null)("align",null),Pt("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),x("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[U([{provide:ge,useExisting:n}]),N],ngContentSelectors:$t,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(B(),a(0,"div",1,0),k(2),o())},dependencies:[bt],encapsulation:2,changeDetection:0})}return n})(),Li=(()=>{class n extends be{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=Z(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,l){if(e&1&&W(l,Zt,5)(l,xe,5),e&2){let p;O(p=E())&&(i._content=p.first),O(p=E())&&(i._allDrawers=p)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&x("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[U([{provide:ve,useExisting:n},{provide:be,useExisting:n}]),N],ngContentSelectors:an,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(B(nn),f(0,on,1,2,"div",0),k(1),k(2,1),f(3,rn,2,0,"mat-sidenav-content")),e&2&&(v(i.hasBackdrop?0:-1),r(3),v(i._content?-1:3))},dependencies:[Zt],styles:[sn],encapsulation:2,changeDetection:0})}return n})(),Ri=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=z({imports:[St,j,St]})}return n})();var dn=["*",[["mat-toolbar-row"]]],mn=["*","mat-toolbar-row"],pn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Bi=(()=>{class n{_elementRef=c(I);_platform=c(ot);_document=c(it);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,i,l){if(e&1&&W(l,pn,5),e&2){let p;O(p=E())&&(i._toolbarRows=p)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,i){e&2&&(It(i.color?"mat-"+i.color:""),x("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:mn,decls:2,vars:0,template:function(e,i){e&1&&(B(dn),k(0),k(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return n})();var Fi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=z({imports:[j]})}return n})();var ye=(()=>{class n{get vertical(){return this._vertical}set vertical(t){this._vertical=L(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=L(t)}_inset=!1;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,i){e&2&&(D("aria-orientation",i.vertical?"vertical":"horizontal"),x("mat-divider-vertical",i.vertical)("mat-divider-horizontal",!i.vertical)("mat-divider-inset",i.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,i){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return n})(),Jt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=z({imports:[j]})}return n})();var un=["*"],_n=`.mdc-list {
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
`,gn=["unscopedContent"],bn=["text"],fn=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],vn=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var xn=new H("ListOption"),ke=(()=>{class n{_elementRef=c(I);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),yn=(()=>{class n{_elementRef=c(I);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),wn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),zi=(()=>{class n{_listOption=c(xn,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,hostVars:4,hostBindings:function(e,i){e&2&&x("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),kn=(()=>{class n extends zi{static \u0275fac=(()=>{let t;return function(i){return(t||(t=Z(n)))(i||n)}})();static \u0275dir=A({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[N]})}return n})(),Ce=(()=>{class n extends zi{static \u0275fac=(()=>{let t;return function(i){return(t||(t=Z(n)))(i||n)}})();static \u0275dir=A({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[N]})}return n})(),Cn=new H("MAT_LIST_CONFIG"),we=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=L(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(L(t))}_disabled=T(!1);_defaultOptions=c(Cn,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,hostVars:1,hostBindings:function(e,i){e&2&&D("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Mn=(()=>{class n{_elementRef=c(I);_ngZone=c(Q);_listBase=c(we,{optional:!0});_platform=c(ot);_hostElement;_isButtonElement;_noopAnimations=J();_avatars;_icons;set lines(t){this._explicitLines=Ct(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=L(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(L(t))}_disabled=T(!1);_subscriptions=new mt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(gt).load(Kt);let t=c(ri,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new oi(this,this._ngZone,this._hostElement,this._platform,c(q)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(et(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let l=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",l),i.classList.toggle("mdc-list-item__secondary-text",!l)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,contentQueries:function(e,i,l){if(e&1&&W(l,kn,4)(l,Ce,4),e&2){let p;O(p=E())&&(i._avatars=p),O(p=E())&&(i._icons=p)}},hostVars:4,hostBindings:function(e,i){e&2&&(D("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),x("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var Vi=(()=>{class n extends Mn{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=L(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Z(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,l){if(e&1&&W(l,yn,5)(l,ke,5)(l,wn,5),e&2){let p;O(p=E())&&(i._lines=p),O(p=E())&&(i._titles=p),O(p=E())&&(i._meta=p)}},viewQuery:function(e,i){if(e&1&&ct(gn,5)(bn,5),e&2){let l;O(l=E())&&(i._unscopedContent=l.first),O(l=E())&&(i._itemText=l.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(D("aria-current",i._getAriaCurrent()),x("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[N],ngContentSelectors:vn,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(B(fn),k(0),a(1,"span",1),k(2,1),k(3,2),a(4,"span",2,0),_("cdkObserveContent",function(){return i._updateItemLines(!0)}),k(6,3),o()(),k(7,4),k(8,5),M(9,"div",3))},dependencies:[$e],encapsulation:2,changeDetection:0})}return n})();var Ni=(()=>{class n extends we{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=Z(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[U([{provide:we,useExisting:n}]),N],ngContentSelectors:un,decls:1,vars:0,template:function(e,i){e&1&&(B(),k(0))},styles:[_n],encapsulation:2,changeDetection:0})}return n})();var ji=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=z({imports:[Je,Yt,li,j,Jt]})}return n})();var Pn=["mat-menu-item",""],In=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],An=["mat-icon, [matMenuItemIcon]","*"];function Ln(n,s){n&1&&(de(),a(0,"svg",2),M(1,"polygon",3),o())}var Rn=["*"];function Bn(n,s){if(n&1){let t=S();pe(0,"div",0),je("click",function(){g(t);let i=m();return b(i.closed.emit("click"))})("animationstart",function(i){g(t);let l=m();return b(l._onAnimationStart(i.animationName))})("animationend",function(i){g(t);let l=m();return b(l._onAnimationDone(i.animationName))})("animationcancel",function(i){g(t);let l=m();return b(l._onAnimationDone(i.animationName))}),pe(1,"div",1),k(2),Ve()()}if(n&2){let t=m();It(t._classList),x("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Ne("id",t.panelId),D("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var Se=new H("MAT_MENU_PANEL"),Ot=(()=>{class n{_elementRef=c(I);_document=c(it);_focusMonitor=c(Mt);_parentMenu=c(Se,{optional:!0});_changeDetectorRef=c($);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new R;_focused=new R;_highlighted=!1;_triggersSubmenu=!1;constructor(){c(gt).load(Kt),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<e.length;i++)e[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,i){e&1&&_("click",function(p){return i._checkDisabled(p)})("mouseenter",function(){return i._handleMouseEnter()}),e&2&&(D("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),x("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",G],disableRipple:[2,"disableRipple","disableRipple",G]},exportAs:["matMenuItem"],attrs:Pn,ngContentSelectors:An,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,i){e&1&&(B(In),k(0),a(1,"span",0),k(2,1),o(),M(3,"div",1),f(4,Ln,2,0,":svg:svg",2)),e&2&&(r(3),w("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),r(),v(i._triggersSubmenu?4:-1))},dependencies:[si],encapsulation:2,changeDetection:0})}return n})();var Fn=new H("MatMenuContent");var zn=new H("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Me="_mat-menu-enter",te="_mat-menu-exit",vt=(()=>{class n{_elementRef=c(I);_changeDetectorRef=c($);_injector=c(q);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=J();_allItems;_directDescendantItems=new Dt;_classList={};_panelAnimationState="void";_animationDone=new R;_isAnimating=T(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,i=se({},this._classList);e&&e.length&&e.split(" ").forEach(l=>{i[l]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(l=>{i[l]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new X;close=this.closed;panelId=c(Ut).getId("mat-menu-panel-");constructor(){let t=c(zn);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ii(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(st(this._directDescendantItems),wt(t=>et(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let i=t.toArray(),l=Math.max(0,Math.min(i.length-1,e.activeItemIndex||0));i[l]&&!i[l].disabled?e.setActiveItem(l):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(st(this._directDescendantItems),wt(e=>et(...e.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,i=this._keyManager;switch(e){case 27:Wt(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=kt(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=Te(se({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===te;(e||t===Me)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Me||t===te)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(te),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Me:te)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(st(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-menu"]],contentQueries:function(e,i,l){if(e&1&&W(l,Fn,5)(l,Ot,5)(l,Ot,4),e&2){let p;O(p=E())&&(i.lazyContent=p.first),O(p=E())&&(i._allItems=p),O(p=E())&&(i.items=p)}},viewQuery:function(e,i){if(e&1&&ct(Le,5),e&2){let l;O(l=E())&&(i.templateRef=l.first)}},hostVars:3,hostBindings:function(e,i){e&2&&D("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",G],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:G(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[U([{provide:Se,useExisting:n}])],ngContentSelectors:Rn,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,i){e&1&&(B(),Fe(0,Bn,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return n})(),Vn=new H("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(q);return()=>fi(n)}});var ft=new WeakMap,Nn=(()=>{class n{_canHaveBackdrop;_element=c(I);_viewContainerRef=c(Be);_menuItemInstance=c(Ot,{optional:!0,self:!0});_dir=c(Gt,{optional:!0});_focusMonitor=c(Mt);_ngZone=c(Q);_injector=c(q);_scrollStrategy=c(Vn);_changeDetectorRef=c($);_animationsDisabled=J();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=mt.EMPTY;_menuCloseSubscription=mt.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=c(Se,{optional:!0});this._parentMaterialMenu=e instanceof vt?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ft.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let i=ft.get(e);ft.set(e,this),i&&i!==this&&i._closeMenu();let l=this._createOverlay(e),p=l.getConfig(),tt=p.positionStrategy;this._setPosition(e,tt),this._canHaveBackdrop?p.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:p.hasBackdrop=e.hasBackdrop??!1,l.hasAttached()||(l.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof vt&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(F(e.close)).subscribe(()=>{tt.withLockedPosition(!1).reapplyLastPosition(),tt.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,i=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof vt&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(Tt(1)).subscribe(()=>{e.detach(),ft.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(e.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&ft.delete(i),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=yi(this._injector,e),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof vt&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new vi({positionStrategy:xi(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let l=i.connectionPair.overlayX==="start"?"after":"before",p=i.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(l,p)})})}_setPosition(t,e){let[i,l]=t.xPosition==="before"?["end","start"]:["start","end"],[p,tt]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[ne,ae]=[p,tt],[oe,re]=[i,l],xt=0;if(this._triggersSubmenu()){if(re=i=t.xPosition==="before"?"start":"end",l=oe=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Ee=this._parentMaterialMenu.items.first;this._parentInnerPadding=Ee?Ee._getHostElement().offsetTop:0}xt=p==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(ne=p==="top"?"bottom":"top",ae=tt==="top"?"bottom":"top");e.withPositions([{originX:i,originY:ne,overlayX:oe,overlayY:p,offsetY:xt},{originX:l,originY:ne,overlayX:re,overlayY:p,offsetY:xt},{originX:i,originY:ae,overlayX:oe,overlayY:tt,offsetY:-xt},{originX:l,originY:ae,overlayX:re,overlayY:tt,offsetY:-xt}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:K(),l=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Y(p=>this._menuOpen&&p!==this._menuItemInstance)):K();return et(t,i,l,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new bi(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return ft.get(t)===this}_triggerIsAriaDisabled(){return G(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){Re()};static \u0275dir=A({type:n})}return n})(),Wi=(()=>{class n extends Nn{_cleanupTouchstart;_hoverSubscription=mt.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new X;onMenuOpen=this.menuOpened;menuClosed=new X;onMenuClose=this.menuClosed;constructor(){super(!0);let t=c(lt);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{Xe(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){qe(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,i){e&1&&_("click",function(p){return i._handleClick(p)})("mousedown",function(p){return i._handleMousedown(p)})("keydown",function(p){return i._handleKeydown(p)}),e&2&&D("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[N]})}return n})();var Ui=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=z({imports:[Yt,wi,j,St]})}return n})();var Gi="mat-badge-content",Hn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-badge {
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
`],encapsulation:2,changeDetection:0})}return n})(),Ki=(()=>{class n{_ngZone=c(Q);_elementRef=c(I);_ariaDescriber=c(ni);_renderer=c(lt);_animationsDisabled=J();_idGenerator=c(Ut);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=c(Qt);_document=c(it);constructor(){let t=c(gt);t.load(Hn),t.load(Ze)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(Gi),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Gi}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,i){e&2&&x("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small",i.size==="small")("mat-badge-medium",i.size==="medium")("mat-badge-large",i.size==="large")("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",G],disabled:[2,"matBadgeDisabled","disabled",G],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",G]}})}return n})(),Yi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=z({imports:[ei,j]})}return n})();var Wn=n=>({exact:n}),Un=(n,s)=>s.route;function Gn(n,s){if(n&1&&(a(0,"span",5),d(1),o()),n&2){let t=m(2);r(),y(t.unreadCount()>9?"9+":t.unreadCount())}}function Kn(n,s){if(n&1&&(a(0,"span",6),d(1),h(2,"translate"),o()),n&2){let t=m().$implicit;r(),y(u(2,1,t.labelKey))}}function Yn(n,s){if(n&1&&(a(0,"a",2),h(1,"translate"),a(2,"div",3)(3,"span",4),d(4),o(),f(5,Gn,2,1,"span",5),o(),f(6,Kn,3,3,"span",6),o()),n&2){let t=s.$implicit,e=m();x("fab-item",t.fab),w("routerLink",t.route)("routerLinkActiveOptions",At(10,Wn,!!t.exact)),D("aria-label",u(1,8,t.labelKey)),r(4),y(t.icon),r(),v(t.route==="/messages"&&e.unreadCount()>0?5:-1),r(),v(t.fab?-1:6)}}var ee=class n{notifSvc=c(qt);auth=c(Ft);unreadCount=this.notifSvc.unreadCount;navItems=[{labelKey:"NAV.HOME",icon:"home",route:"/",exact:!0},{labelKey:"NAV.MAP",icon:"map",route:"/map"},{labelKey:"NAV.POST",icon:"add",route:"/post",fab:!0},{labelKey:"NAV.MESSAGES",icon:"chat_bubble",route:"/messages"},{labelKey:"NAV.ACCOUNT",icon:"person",route:this.auth.isLoggedIn()?"/dashboard/profile":"/auth/login"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-bottom-nav"]],decls:3,vars:0,consts:[[1,"bottom-nav","hide-tablet"],["routerLinkActive","active",1,"nav-item",3,"fab-item","routerLink","routerLinkActiveOptions"],["routerLinkActive","active",1,"nav-item",3,"routerLink","routerLinkActiveOptions"],[1,"nav-icon-wrap"],[1,"material-symbols-outlined","nav-icon"],[1,"badge"],[1,"nav-label"]],template:function(t,e){t&1&&(a(0,"nav",0),nt(1,Yn,7,12,"a",1,Un),o()),t&2&&(r(),at(e.navItems))},dependencies:[Rt,Bt,_t],styles:['@charset "UTF-8";.bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;inset-inline:0;height:var(--b-bottom-nav-h);background:var(--b-surface-card);border-top:1px solid var(--b-border);display:flex;align-items:center;justify-content:space-around;z-index:100;padding-bottom:env(safe-area-inset-bottom,0);box-shadow:0 -2px 12px #0000000f}.nav-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:2px;text-decoration:none;color:var(--b-text-secondary);border-radius:var(--b-radius-md);padding:6px 12px;min-width:52px;transition:color .2s,transform .1s;position:relative;-webkit-tap-highlight-color:transparent}.nav-item[_ngcontent-%COMP%]:active{transform:scale(.92)}.nav-item.active[_ngcontent-%COMP%]{color:var(--b-primary)}.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{font-variation-settings:"FILL" 1}.nav-item.active[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%]{font-weight:600}.fab-item[_ngcontent-%COMP%]   .nav-icon-wrap[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:50%;background:var(--b-accent);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px color-mix(in srgb,var(--b-accent) 50%,transparent);transition:transform .2s,box-shadow .2s}.fab-item[_ngcontent-%COMP%]:active   .nav-icon-wrap[_ngcontent-%COMP%]{transform:scale(.92);box-shadow:0 2px 6px color-mix(in srgb,var(--b-accent) 35%,transparent)}.fab-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-on-accent);font-size:24px}.nav-icon-wrap[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.nav-icon[_ngcontent-%COMP%]{font-size:22px;font-variation-settings:"FILL" 0,"wght" 300;transition:font-variation-settings .2s}.nav-label[_ngcontent-%COMP%]{font-size:.65rem;line-height:1;font-weight:400}.badge[_ngcontent-%COMP%]{position:absolute;top:-4px;inset-inline-end:-6px;background:var(--b-accent);color:#fff;font-size:.6rem;font-weight:700;min-width:16px;height:16px;border-radius:var(--b-radius-pill);display:flex;align-items:center;justify-content:center;padding:0 3px}']})};var Xn=["messagesContainer"];function Zn(n,s){n&1&&(a(0,"div",11)(1,"span",17),d(2),h(3,"translate"),o()()),n&2&&(r(2),y(u(3,1,"CHATBOT.WELCOME")))}function $n(n,s){n&1&&(a(0,"span",19),d(1,"smart_toy"),o())}function Jn(n,s){if(n&1&&(a(0,"div",18),f(1,$n,2,0,"span",19),a(2,"span",20),d(3),o()()),n&2){let t=s.$implicit;x("user-msg",t.role==="user")("bot-msg",t.role==="assistant"),r(),v(t.role==="assistant"?1:-1),r(2),y(t.content)}}function ta(n,s){n&1&&(a(0,"div",13)(1,"span",19),d(2,"smart_toy"),o(),a(3,"span",21),M(4,"span",22)(5,"span",22)(6,"span",22),o()())}function ea(n,s){if(n&1){let t=S();a(0,"div",3)(1,"div",4)(2,"span",5),d(3,"smart_toy"),o(),a(4,"div",6)(5,"span",7),d(6),h(7,"translate"),o(),a(8,"span",8),d(9),h(10,"translate"),o()(),a(11,"button",9),_("click",function(){g(t);let i=m();return b(i.toggleOpen())}),a(12,"span",2),d(13,"close"),o()()(),a(14,"div",10,0),f(16,Zn,4,3,"div",11),nt(17,Jn,4,6,"div",12,ze),f(19,ta,7,0,"div",13),o(),a(20,"div",14)(21,"input",15),h(22,"translate"),ut("ngModelChange",function(i){g(t);let l=m();return ht(l.inputText,i)||(l.inputText=i),b(i)}),_("keydown.enter",function(){g(t);let i=m();return b(i.send())}),o(),a(23,"button",16),_("click",function(){g(t);let i=m();return b(i.send())}),a(24,"span",2),d(25,"send"),o()()()()}if(n&2){let t=m();w("dir",t.isRtl()?"rtl":"ltr"),r(6),y(u(7,9,"CHATBOT.BOT_NAME")),r(3),y(u(10,11,"CHATBOT.STATUS_ONLINE")),r(7),v(t.messages().length?-1:16),r(),at(t.messages()),r(2),v(t.loading()?19:-1),r(2),pt("ngModel",t.inputText),w("placeholder",u(22,13,"CHATBOT.PLACEHOLDER"))("disabled",t.loading()),r(2),w("disabled",!t.inputText.trim()||t.loading())}}var ie=class n{api=c(zt);translate=c(Ye);router=c(Lt);messagesContainer=Ue("messagesContainer");isOpen=T(!1);loading=T(!1);messages=T([]);onPostForm=T(!1);inputText="";constructor(){this.onPostForm.set(this.router.url.startsWith("/post")),this.router.events.pipe(Y(s=>s instanceof Ge)).subscribe(s=>{this.onPostForm.set(s.urlAfterRedirects.startsWith("/post"))})}isRtl(){return this.translate.currentLang==="ar"}toggleOpen(){this.isOpen.update(s=>!s)}send(){let s=this.inputText.trim();if(!s||this.loading())return;this.messages.update(i=>[...i,{role:"user",content:s}]),this.inputText="",this.loading.set(!0);let t=this.translate.currentLang==="ar"?"ar":"en",e=this.messages().slice(-9,-1);this.api.post("/core/chatbot/",{message:s,history:e,language:t}).pipe(yt(()=>K({reply:t==="ar"?"\u0639\u0630\u0631\u0627\u064B\u060C \u062D\u062F\u062B \u062E\u0637\u0623. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u0627\u064B.":"Sorry, something went wrong."}))).subscribe(i=>{this.messages.update(l=>[...l,{role:"assistant",content:i.reply}]),this.loading.set(!1)})}ngAfterViewChecked(){let s=this.messagesContainer()?.nativeElement;s&&(s.scrollTop=s.scrollHeight)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-chatbot-widget"]],viewQuery:function(t,e){t&1&&He(e.messagesContainer,Xn,5),t&2&&Qe()},hostVars:2,hostBindings:function(t,e){t&2&&x("on-post-form",e.onPostForm())},decls:5,vars:5,consts:[["messagesContainer",""],[1,"chat-fab",3,"click"],[1,"material-symbols-outlined"],[1,"chat-panel",3,"dir"],[1,"chat-header"],[1,"material-symbols-outlined","bot-icon"],[1,"header-text"],[1,"bot-name"],[1,"bot-status"],[1,"header-close",3,"click"],[1,"chat-messages"],[1,"msg","bot-msg"],[1,"msg",3,"user-msg","bot-msg"],[1,"msg","bot-msg","typing-row"],[1,"chat-input-row"],["type","text","autocomplete","off",1,"chat-input",3,"ngModelChange","keydown.enter","ngModel","placeholder","disabled"],[1,"send-btn",3,"click","disabled"],[1,"bot-bubble"],[1,"msg"],[1,"material-symbols-outlined","bot-avatar"],[1,"bubble"],[1,"bubble","typing-bubble"],[1,"dot"]],template:function(t,e){t&1&&(a(0,"button",1),h(1,"translate"),_("click",function(){return e.toggleOpen()}),a(2,"span",2),d(3),o()(),f(4,ea,26,15,"div",3)),t&2&&(D("aria-label",u(1,3,"CHATBOT.OPEN")),r(3),P(" ",e.isOpen()?"close":"smart_toy"," "),r(),v(e.isOpen()?4:-1))},dependencies:[Ht,Vt,Nt,jt,_t],styles:['@charset "UTF-8";[_nghost-%COMP%]{position:fixed;bottom:70px;inset-inline-end:20px;z-index:1200}.on-post-form[_nghost-%COMP%]{inset-inline-end:unset;inset-inline-start:20px}.on-post-form[_nghost-%COMP%]   .chat-panel[_ngcontent-%COMP%]{inset-inline-end:unset;inset-inline-start:0}.chat-fab[_ngcontent-%COMP%]{width:47px;height:47px;border-radius:50%;background:var(--b-primary);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px #00000040;transition:transform .2s,box-shadow .2s}.chat-fab[_ngcontent-%COMP%]:hover{transform:scale(1.08);box-shadow:0 6px 20px #0000004d}.chat-fab[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:26px}.chat-panel[_ngcontent-%COMP%]{position:absolute;bottom:62px;inset-inline-end:0;width:320px;background:var(--b-surface);border:1px solid var(--b-border);border-radius:16px;box-shadow:0 8px 32px #0000002e;display:flex;flex-direction:column;overflow:hidden;animation:_ngcontent-%COMP%_slide-up .2s ease}@media(max-width:400px){.chat-panel[_ngcontent-%COMP%]{width:calc(100vw - 32px);inset-inline-end:0}}@keyframes _ngcontent-%COMP%_slide-up{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.chat-header[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}.bot-icon[_ngcontent-%COMP%]{font-size:24px}.header-text[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;line-height:1.2}.bot-name[_ngcontent-%COMP%]{font-size:.88rem;font-weight:600}.bot-status[_ngcontent-%COMP%]{font-size:.72rem;opacity:.8}.header-close[_ngcontent-%COMP%]{background:transparent;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:50%;width:28px;height:28px}.header-close[_ngcontent-%COMP%]:hover{background:#ffffff26}.header-close[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}.chat-messages[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:12px 10px;display:flex;flex-direction:column;gap:8px;min-height:220px;max-height:300px;scroll-behavior:smooth}.msg[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:6px}.msg.user-msg[_ngcontent-%COMP%]{flex-direction:row-reverse}.bot-avatar[_ngcontent-%COMP%]{font-size:18px;color:var(--b-primary);flex-shrink:0}.bubble[_ngcontent-%COMP%], .bot-bubble[_ngcontent-%COMP%]{max-width:80%;padding:8px 11px;border-radius:14px;font-size:.83rem;line-height:1.45;white-space:pre-wrap;word-break:break-word}.bot-msg[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%], .bot-msg[_ngcontent-%COMP%]   .bot-bubble[_ngcontent-%COMP%]{background:var(--b-surface-dim);border-end-start-radius:4px}.user-msg[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%], .user-msg[_ngcontent-%COMP%]   .bot-bubble[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff;border-end-end-radius:4px}.bot-bubble[_ngcontent-%COMP%]{background:var(--b-surface-dim)}.typing-bubble[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:10px 14px;background:var(--b-surface-dim)}.dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:var(--b-text-secondary);animation:_ngcontent-%COMP%_bounce .9s infinite}.dot[_ngcontent-%COMP%]:nth-child(2){animation-delay:.15s}.dot[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}@keyframes _ngcontent-%COMP%_bounce{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-6px)}}.chat-input-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:8px 10px;border-top:1px solid var(--b-border)}.chat-input[_ngcontent-%COMP%]{flex:1;border:1px solid var(--b-border);border-radius:20px;padding:7px 12px;font-size:.84rem;outline:none;background:var(--b-surface);color:var(--b-text-primary)}.chat-input[_ngcontent-%COMP%]:focus{border-color:var(--b-primary)}.chat-input[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.send-btn[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;background:var(--b-primary);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s}.send-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:color-mix(in srgb,var(--b-primary) 80%,black)}.send-btn[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.send-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}'],changeDetection:0})};var ia=n=>({exact:n}),na=()=>({exact:!1}),Oe=(n,s)=>s.route;function aa(n,s){if(n&1){let t=S();a(0,"button",40),_("click",function(){g(t),m();let i=dt(2);return b(i.close())}),a(1,"span",24),d(2,"close"),o()()}}function oa(n,s){if(n&1){let t=S();a(0,"div",9)(1,"mat-form-field",41)(2,"span",42),d(3,"search"),o(),a(4,"input",43),h(5,"translate"),ut("ngModelChange",function(i){g(t);let l=m();return ht(l.searchQuery,i)||(l.searchQuery=i),b(i)}),_("keyup.enter",function(){g(t);let i=m();return b(i.doSearch())}),o()()()}if(n&2){let t=m();r(4),w("placeholder",u(5,2,"COMMON.SEARCH_PLACEHOLDER")),pt("ngModel",t.searchQuery)}}function ra(n,s){if(n&1){let t=S();a(0,"a",44),_("click",function(){g(t);let i=m();return b(i.closeMobile())}),a(1,"span",45),d(2),o(),a(3,"span",46),d(4),h(5,"translate"),o()()}if(n&2){let t=s.$implicit;w("routerLink",t.route)("routerLinkActiveOptions",At(6,ia,!!t.exact)),r(2),y(t.icon),r(2),y(u(5,4,t.labelKey))}}function sa(n,s){if(n&1&&(a(0,"span",52),d(1),o()),n&2){let t=m(2);r(),y(t.msgUnreadCount()>9?"9+":t.msgUnreadCount())}}function la(n,s){if(n&1){let t=S();M(0,"mat-divider",14),a(1,"mat-nav-list",57)(2,"a",58),_("click",function(){g(t);let i=m(2);return b(i.closeMobile())}),a(3,"span",45),d(4,"campaign"),o(),a(5,"span",46),d(6),h(7,"translate"),o()()()}n&2&&(r(6),y(u(7,1,"NAV.ADMIN_ADS")))}function ca(n,s){if(n&1){let t=S();a(0,"mat-nav-list",47)(1,"a",48),_("click",function(){g(t);let i=m();return b(i.closeMobile())}),a(2,"span",45),d(3,"list_alt"),o(),a(4,"span",46),d(5),h(6,"translate"),o()(),a(7,"a",49),_("click",function(){g(t);let i=m();return b(i.closeMobile())}),a(8,"span",45),d(9,"favorite"),o(),a(10,"span",46),d(11),h(12,"translate"),o()(),a(13,"a",50),_("click",function(){g(t);let i=m();return b(i.closeMobile())}),a(14,"span",45),d(15,"chat_bubble"),o(),a(16,"span",51),d(17),h(18,"translate"),f(19,sa,2,1,"span",52),o()(),a(20,"a",53),_("click",function(){g(t);let i=m();return b(i.closeMobile())}),a(21,"span",45),d(22,"notifications"),o(),a(23,"span",46),d(24),h(25,"translate"),o()(),a(26,"a",54),_("click",function(){g(t);let i=m();return b(i.closeMobile())}),a(27,"span",45),d(28,"notifications_active"),o(),a(29,"span",46),d(30),h(31,"translate"),o()(),a(32,"a",55),_("click",function(){g(t);let i=m();return b(i.closeMobile())}),a(33,"span",45),d(34,"person"),o(),a(35,"span",46),d(36),h(37,"translate"),o()()(),f(38,la,8,3),M(39,"mat-divider",14),a(40,"mat-nav-list",10)(41,"a",56),_("click",function(){g(t);let i=m();return b(i.logout())}),a(42,"span",45),d(43,"logout"),o(),a(44,"span",46),d(45),h(46,"translate"),o()()()}if(n&2){let t,e=m();r(5),y(u(6,9,"NAV.MY_LISTINGS")),r(6),y(u(12,11,"NAV.FAVOURITES")),r(6),P(" ",u(18,13,"NAV.MESSAGES")," "),r(2),v(e.msgUnreadCount()>0?19:-1),r(5),y(u(25,15,"NAV.NOTIFICATIONS")),r(6),y(u(31,17,"NAV.AREA_ALERTS")),r(6),y(u(37,19,"NAV.PROFILE")),r(2),v((t=e.auth.currentUser())!=null&&t.is_staff?38:-1),r(7),y(u(46,21,"AUTH.LOGOUT"))}}function da(n,s){if(n&1){let t=S();a(0,"div",15)(1,"a",59),_("click",function(){g(t);let i=m();return b(i.closeMobile())}),d(2),h(3,"translate"),o(),a(4,"a",60),_("click",function(){g(t);let i=m();return b(i.closeMobile())}),d(5),h(6,"translate"),o()()}n&2&&(r(2),P(" ",u(3,2,"AUTH.LOGIN")," "),r(3),P(" ",u(6,4,"AUTH.REGISTER")," "))}function ma(n,s){if(n&1&&(a(0,"mat-option",29)(1,"span",61),d(2),o(),d(3),o()),n&2){let t=s.$implicit;w("value",t.label),r(2),y(t.icon),r(),P(" ",t.label," ")}}function pa(n,s){if(n&1){let t=S();a(0,"div",30)(1,"button",62),h(2,"translate"),_("click",function(){g(t);let i=m(),l=dt(2);return b(i.onMenuClick(l))}),a(3,"span",24),d(4,"menu"),o()(),a(5,"a",63),M(6,"app-brand",64),o()()}if(n&2){let t=m();r(),D("aria-label",u(2,3,"NAV.MENU")),r(4),x("mobile-logo",t.isMobile())}}function ha(n,s){if(n&1){let t=S();a(0,"button",69),_("click",function(){g(t);let i=m(2);return b(i.clearSearch())}),a(1,"span",24),d(2,"close"),o()()}}function ua(n,s){if(n&1){let t=S();a(0,"div",31)(1,"div",65)(2,"span",66),d(3,"search"),o(),a(4,"input",67),h(5,"translate"),ut("ngModelChange",function(i){g(t);let l=m();return ht(l.searchQuery,i)||(l.searchQuery=i),b(i)}),_("input",function(){g(t);let i=m();return b(i.onSearchInput())})("keyup.enter",function(){g(t);let i=m();return b(i.doSearch())})("focus",function(){g(t);let i=m();return b(i.searchFocused=!0)})("blur",function(){g(t);let i=m();return b(i.searchFocused=!1)}),o(),f(6,ha,3,0,"button",68),o()()}if(n&2){let t=m(),e=dt(48);r(),x("focused",t.searchFocused),r(3),w("placeholder",u(5,6,"COMMON.SEARCH_PLACEHOLDER")),pt("ngModel",t.searchQuery),w("matAutocomplete",e),r(2),v(t.searchQuery?6:-1)}}function _a(n,s){if(n&1){let t=S();a(0,"div",32)(1,"div",70)(2,"span",66),d(3,"search"),o(),a(4,"input",71),h(5,"translate"),ut("ngModelChange",function(i){g(t);let l=m();return ht(l.searchQuery,i)||(l.searchQuery=i),b(i)}),_("input",function(){g(t);let i=m();return b(i.onSearchInput())})("keyup.enter",function(){g(t);let i=m();return b(i.doSearch())})("keyup.escape",function(){g(t);let i=m();return b(i.closeSearch())}),o(),a(6,"button",69),_("click",function(){g(t);let i=m();return b(i.closeSearch())}),a(7,"span",24),d(8,"close"),o()()()()}if(n&2){let t=m(),e=dt(48);r(4),w("placeholder",u(5,3,"COMMON.SEARCH_PLACEHOLDER")),pt("ngModel",t.searchQuery),w("matAutocomplete",e)}}function ga(n,s){n&1&&(a(0,"a",72)(1,"span",24),d(2,"add"),o(),d(3),h(4,"translate"),o()),n&2&&(r(3),P(" ",u(4,1,"ACTIONS.POST_AD")," "))}function ba(n,s){if(n&1){let t=S();a(0,"button",62),h(1,"translate"),_("click",function(){g(t);let i=m(2);return b(i.openSearch())}),a(2,"span",24),d(3,"search"),o()()}n&2&&D("aria-label",u(1,1,"COMMON.SEARCH"))}function fa(n,s){if(n&1&&(a(0,"a",74),h(1,"translate"),a(2,"span",24),d(3,"chat_bubble"),o()()),n&2){let t=m(2);w("matTooltip",u(1,3,"NAV.MESSAGES"))("matBadge",t.msgUnreadCount()>0?t.msgUnreadCount()>9?"9+":t.msgUnreadCount().toString():"")("matBadgeHidden",t.msgUnreadCount()===0)}}function va(n,s){if(n&1){let t=S();a(0,"button",78),h(1,"translate"),_("click",function(){g(t);let i=m(2);return b(i.pwaInstall.promptInstall())}),a(2,"span",24),d(3,"install_mobile"),o()()}n&2&&w("matTooltip",u(1,1,"ACTIONS.INSTALL_APP"))}function xa(n,s){if(n&1&&M(0,"img",80),n&2){let t=m(3);w("src",t.auth.currentUser().avatar_thumbnail,Ie)("alt",t.auth.currentUser().first_name||"profile")}}function ya(n,s){n&1&&(a(0,"span",24),d(1,"account_circle"),o())}function wa(n,s){n&1&&(M(0,"mat-divider"),a(1,"a",88)(2,"span",83),d(3,"campaign"),o(),d(4),h(5,"translate"),o()),n&2&&(r(4),P(" ",u(5,1,"NAV.ADMIN_ADS")," "))}function ka(n,s){if(n&1){let t=S();a(0,"button",79),h(1,"translate"),f(2,xa,1,2,"img",80)(3,ya,2,0,"span",24),o(),a(4,"mat-menu",81,2)(6,"a",82)(7,"span",83),d(8,"person"),o(),d(9),h(10,"translate"),o(),a(11,"a",84)(12,"span",83),d(13,"list_alt"),o(),d(14),h(15,"translate"),o(),a(16,"a",85)(17,"span",83),d(18,"favorite"),o(),d(19),h(20,"translate"),o(),a(21,"a",86)(22,"span",83),d(23,"notifications"),o(),d(24),h(25,"translate"),o(),f(26,wa,6,3),M(27,"mat-divider"),a(28,"button",87),_("click",function(){g(t);let i=m(2);return b(i.logout())}),a(29,"span",83),d(30,"logout"),o(),d(31),h(32,"translate"),o()()}if(n&2){let t,e,i=dt(5),l=m(2);w("matMenuTriggerFor",i)("matTooltip",u(1,9,"NAV.ACCOUNT")),r(2),v((t=l.auth.currentUser())!=null&&t.avatar_thumbnail?2:3),r(7),P(" ",u(10,11,"NAV.PROFILE")," "),r(5),P(" ",u(15,13,"NAV.MY_LISTINGS")," "),r(5),P(" ",u(20,15,"NAV.FAVOURITES")," "),r(5),P(" ",u(25,17,"NAV.NOTIFICATIONS")," "),r(2),v((e=l.auth.currentUser())!=null&&e.is_staff?26:-1),r(5),P(" ",u(32,19,"AUTH.LOGOUT")," ")}}function Ca(n,s){n&1&&(a(0,"a",77),d(1),h(2,"translate"),o()),n&2&&(r(),y(u(2,1,"AUTH.LOGIN")))}function Ma(n,s){if(n&1&&(f(0,ga,5,3,"a",72),f(1,ba,4,3,"button",73),f(2,fa,4,5,"a",74),a(3,"a",75),h(4,"translate"),a(5,"span",24),d(6,"tune"),o()(),f(7,va,4,3,"button",76),f(8,ka,33,21)(9,Ca,3,3,"a",77)),n&2){let t=m();v(t.isMobile()?-1:0),r(),v(t.isMobile()?1:-1),r(),v(t.auth.isLoggedIn()?2:-1),r(),w("matTooltip",u(4,6,"SETTINGS.TITLE")),r(4),v(t.pwaInstall.canInstall()?7:-1),r(),v(t.auth.isLoggedIn()?8:9)}}function Sa(n,s){if(n&1&&(a(0,"span",91),d(1),o()),n&2){let t=m().$implicit,e=m();r(),P("(",e.fmtCount(e.sectionCounts()[t.countKey]),")")}}function Oa(n,s){if(n&1&&(a(0,"a",37)(1,"span",89),d(2),o(),a(3,"span",90),d(4),h(5,"translate"),o(),f(6,Sa,2,1,"span",91),o()),n&2){let t=s.$implicit,e=m();w("routerLink",t.route)("routerLinkActiveOptions",We(7,na)),r(2),y(t.icon),r(2),y(u(5,5,t.labelKey)),r(2),v(e.fmtCount(e.sectionCounts()[t.countKey])?6:-1)}}function Ea(n,s){if(n&1){let t=S();a(0,"div",38)(1,"span",24),d(2,"mark_email_unread"),o(),a(3,"span"),d(4),h(5,"translate"),o(),a(6,"button",92),_("click",function(){g(t);let i=m();return b(i.resendActivation())}),d(7),h(8,"translate"),h(9,"translate"),o()()}if(n&2){let t=m();r(4),y(u(5,3,"AUTH.VERIFY_EMAIL_BANNER")),r(2),w("disabled",t.resendSent()),r(),P(" ",t.resendSent()?u(8,5,"AUTH.SENT"):u(9,7,"AUTH.RESEND_ACTIVATION")," ")}}var Xi=class n{_destroyRef=c(Pe);theme=c(Ei);auth=c(Ft);NAV_SECTIONS=[{route:"/properties",labelKey:"NAV.PROPERTIES",icon:"apartment",countKey:"properties"},{route:"/vehicles",labelKey:"NAV.VEHICLES",icon:"directions_car",countKey:"vehicles"},{route:"/classifieds",labelKey:"NAV.CLASSIFIEDS",icon:"sell",countKey:"classifieds"},{route:"/jobs",labelKey:"NAV.JOBS",icon:"work",countKey:"jobs"},{route:"/services",labelKey:"NAV.SERVICES",icon:"handyman",countKey:"services"},{route:"/deals",labelKey:"NAV.DEALS",icon:"local_offer",countKey:"deals"},{route:"/events",labelKey:"NAV.EVENTS",icon:"event",countKey:"events"},{route:"/news",labelKey:"NAV.NEWS",icon:"newspaper",countKey:"news"}];sectionCounts=T({});fmtCount(s){return s?s>=1e6?(s/1e6).toFixed(1).replace(/\.0$/,"")+"M":s>=1e3?(s/1e3).toFixed(1).replace(/\.0$/,"")+"K":String(s):""}resendActivation(){if(this.resendSent())return;let s=this.auth.currentUser();s?.email&&this.api.post("/accounts/activate/resend/",{email:s.email}).subscribe({next:()=>this.resendSent.set(!0),error:()=>this.resendSent.set(!0)})}pwaInstall=c(Pi);notif=c(qt);api=c(zt);locSvc=c(Di);router=c(Lt);unreadCount=this.notif.unreadCount;msgUnreadCount=c(Ti).unreadCount;searchQuery="";searchFocused=!1;suggestions=T([]);scrolled=T(!1);navHidden=T(!1);isMobile=T(!1);searchOpen=T(!1);sidenavOpen=T(!1);resendSent=T(!1);_lastScrollY=0;searchSubject=new R;sectionIcons={properties:"apartment",vehicles:"directions_car",classifieds:"sell",jobs:"work",services:"build",deals:"local_offer",events:"event",news:"newspaper"};mainSections=[{labelKey:"NAV.HOME",icon:"home",route:"/",exact:!0},{labelKey:"NAV.MAP",icon:"map",route:"/map"},{labelKey:"NAV.PROPERTIES",icon:"apartment",route:"/properties"},{labelKey:"NAV.VEHICLES",icon:"directions_car",route:"/vehicles"},{labelKey:"NAV.CLASSIFIEDS",icon:"sell",route:"/classifieds"},{labelKey:"NAV.JOBS",icon:"work",route:"/jobs"},{labelKey:"NAV.SERVICES",icon:"build",route:"/services"},{labelKey:"NAV.DEALS",icon:"local_offer",route:"/deals"},{labelKey:"NAV.EVENTS",icon:"event",route:"/events"},{labelKey:"NAV.NEWS",icon:"newspaper",route:"/news"}];constructor(){me(()=>{this.auth.currentUser()?this.notif.startPolling():this.notif.stopPolling()}),this.checkMobile(),this.locSvc.loadGovernorates().subscribe(),me(()=>{let t=this.locSvc.selectedGovernorate(),e={};t&&(e.governorate=String(t)),this.api.get("/core/section-counts/",e).pipe(yt(()=>K({})),he(this._destroyRef)).subscribe(i=>this.sectionCounts.set(i))}),this.searchSubject.pipe(Et(300),De(),wt(t=>t.trim().length<2?K([]):this.api.get("/core/search/",{q:t,suggest:"1"}).pipe(yt(()=>K([])))),he(this._destroyRef)).subscribe(t=>{this.suggestions.set(t.slice(0,8).map(e=>({label:e.title??e.translations?.ar?.title??e.translations?.en?.title??"",icon:this.sectionIcons[e.section]??"search",route:e.url??`/${e.section}/${e.id}`})).filter(e=>e.label))});let s=document.getElementById("app-loader");s&&(s.classList.add("fade-out"),s.addEventListener("transitionend",()=>s.remove(),{once:!0}))}onResize(){this.checkMobile()}checkMobile(){this.isMobile.set(window.innerWidth<960)}onContentScroll(s){let e=s.target.scrollTop,i=e-this._lastScrollY;i>6&&e>80?this.navHidden.set(!0):i<-6&&this.navHidden.set(!1),this.scrolled.set(e>8),this._lastScrollY=e}onSearchInput(){this.searchSubject.next(this.searchQuery)}doSearch(){let s=this.searchQuery.trim();s&&(this.router.navigate(["/search"],{queryParams:{q:s}}),this.suggestions.set([]),this.searchQuery="")}onSuggestionSelect(s){let t=this.suggestions().find(e=>e.label===s.option.value);t&&this.router.navigate([t.route]),this.searchQuery="",this.suggestions.set([]),this.searchSubject.next("")}clearSearch(){this.searchQuery="",this.suggestions.set([]),this.searchSubject.next("")}openSearch(){this.searchOpen.set(!0),setTimeout(()=>{document.querySelector(".mobile-search-input")?.focus()},50)}closeSearch(){this.searchOpen.set(!1),this.clearSearch()}toggleLang(){let s=this.theme.isRtl()?"en":"ar";this.theme.setLang(s),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},50)}onMenuClick(s){this.isMobile()?s.toggle():this.sidenavOpen.update(t=>!t)}logout(){this.auth.logout()}closeMobile(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-shell"]],hostBindings:function(t,e){t&1&&_("resize",function(){return e.onResize()},Ae)},decls:66,vars:40,consts:[["sidenav",""],["searchAuto","matAutocomplete"],["accountMenu","matMenu"],[1,"shell-container",3,"hasBackdrop","dir"],["fixedTopGap","0",1,"side-nav",3,"mode","opened","fixedInViewport"],[1,"sidenav-logo"],["routerLink","/",1,"logo-link",3,"click"],["size","md"],["mat-icon-button","",1,"close-btn"],[1,"sidenav-search"],[1,"sidenav-list"],["mat-list-item","","routerLinkActive","active-link",1,"nav-list-item",3,"routerLink","routerLinkActiveOptions"],[1,"gov-filter"],[1,"gov-filter-label"],[1,"sidenav-divider"],[1,"auth-btns"],[1,"sidenav-footer-links"],["routerLink","/legal/terms",3,"click"],[1,"footer-sep"],["routerLink","/legal/privacy",3,"click"],["routerLink","/contact",3,"click"],["routerLink","/help",3,"click"],[1,"sidenav-bottom"],["mat-button","","routerLink","/settings",1,"settings-link",3,"click"],[1,"material-symbols-outlined"],[1,"shell-content",3,"scroll"],[1,"sticky-bars"],[1,"top-bar"],[3,"optionSelected"],[3,"value"],[1,"toolbar-left"],[1,"toolbar-center"],[1,"toolbar-search-mobile"],[1,"toolbar-spacer"],["aria-label","sections",1,"section-nav"],[1,"section-nav-inner"],[3,"compact"],["routerLinkActive","sn-chip--active",1,"sn-chip",3,"routerLink","routerLinkActiveOptions"],[1,"verify-banner"],[1,"page-content"],["mat-icon-button","",1,"close-btn",3,"click"],["appearance","outline","subscriptSizing","dynamic",1,"search-field"],["matPrefix","",1,"material-symbols-outlined","search-icon-pre"],["matInput","","autocomplete","off",3,"ngModelChange","keyup.enter","placeholder","ngModel"],["mat-list-item","","routerLinkActive","active-link",1,"nav-list-item",3,"click","routerLink","routerLinkActiveOptions"],["matListItemIcon","",1,"material-symbols-outlined","nav-icon"],["matListItemTitle",""],[1,"sidenav-list","user-section"],["mat-list-item","","routerLink","/dashboard/listings","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/dashboard/favourites","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/messages","routerLinkActive","active-link",3,"click"],["matListItemTitle","",1,"msg-title"],[1,"sidenav-badge"],["mat-list-item","","routerLink","/dashboard/notifications","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/dashboard/area-alerts","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/dashboard/profile","routerLinkActive","active-link",3,"click"],["mat-list-item","",1,"logout-item",3,"click"],[1,"sidenav-list","admin-section"],["mat-list-item","","routerLink","/admin/ads","routerLinkActive","active-link",3,"click"],["mat-flat-button","","routerLink","/auth/login","color","primary",1,"auth-btn",3,"click"],["mat-stroked-button","","routerLink","/auth/register",1,"auth-btn",3,"click"],[1,"material-symbols-outlined","sugg-icon"],["mat-icon-button","",3,"click"],["routerLink","/",1,"toolbar-logo"],["size","sm"],[1,"search-pill"],[1,"material-symbols-outlined","sp-icon"],["autocomplete","off",1,"sp-input",3,"ngModelChange","input","keyup.enter","focus","blur","placeholder","ngModel","matAutocomplete"],[1,"sp-clear"],[1,"sp-clear",3,"click"],[1,"search-pill","focused"],["autocomplete","off",1,"sp-input","mobile-search-input",3,"ngModelChange","input","keyup.enter","keyup.escape","placeholder","ngModel","matAutocomplete"],["mat-flat-button","","routerLink","/post",1,"post-btn"],["mat-icon-button",""],["mat-icon-button","","routerLink","/messages","matBadgeColor","accent","matBadgeSize","small",1,"tb-btn",3,"matTooltip","matBadge","matBadgeHidden"],["mat-icon-button","","routerLink","/settings",1,"tb-btn",3,"matTooltip"],["mat-icon-button","",1,"tb-btn",3,"matTooltip"],["mat-button","","routerLink","/auth/login",1,"login-btn"],["mat-icon-button","",1,"tb-btn",3,"click","matTooltip"],["mat-icon-button","",1,"tb-btn","profile-btn",3,"matMenuTriggerFor","matTooltip"],[1,"toolbar-avatar",3,"src","alt"],["xPosition","before"],["mat-menu-item","","routerLink","/dashboard/profile"],[1,"material-symbols-outlined","menu-icon"],["mat-menu-item","","routerLink","/dashboard/listings"],["mat-menu-item","","routerLink","/dashboard/favourites"],["mat-menu-item","","routerLink","/dashboard/notifications"],["mat-menu-item","",3,"click"],["mat-menu-item","","routerLink","/admin/ads",1,"admin-menu-item"],[1,"material-symbols-outlined","sn-icon"],[1,"sn-label"],[1,"sn-count"],[1,"resend-btn",3,"click","disabled"]],template:function(t,e){t&1&&(a(0,"mat-sidenav-container",3)(1,"mat-sidenav",4,0)(3,"div",5)(4,"a",6),_("click",function(){return e.closeMobile()}),M(5,"app-brand",7),o(),f(6,aa,3,0,"button",8),o(),f(7,oa,6,4,"div",9),a(8,"mat-nav-list",10),nt(9,ra,6,8,"a",11,Oe),o(),a(11,"div",12)(12,"div",13),d(13),h(14,"translate"),o(),M(15,"app-governorate-select"),o(),M(16,"mat-divider",14),f(17,ca,47,23)(18,da,7,6,"div",15),a(19,"div",16)(20,"a",17),_("click",function(){return e.closeMobile()}),d(21),h(22,"translate"),o(),a(23,"span",18),d(24,"\xB7"),o(),a(25,"a",19),_("click",function(){return e.closeMobile()}),d(26),h(27,"translate"),o(),a(28,"span",18),d(29,"\xB7"),o(),a(30,"a",20),_("click",function(){return e.closeMobile()}),d(31),h(32,"translate"),o(),a(33,"span",18),d(34,"\xB7"),o(),a(35,"a",21),_("click",function(){return e.closeMobile()}),d(36),h(37,"translate"),o()(),a(38,"div",22)(39,"a",23),_("click",function(){return e.closeMobile()}),a(40,"span",24),d(41,"tune"),o(),d(42),h(43,"translate"),o()()(),a(44,"mat-sidenav-content",25),_("scroll",function(l){return e.onContentScroll(l)}),a(45,"div",26)(46,"mat-toolbar",27)(47,"mat-autocomplete",28,1),_("optionSelected",function(l){return e.onSuggestionSelect(l)}),nt(49,ma,4,3,"mat-option",29,Oe),o(),f(51,pa,7,5,"div",30),f(52,ua,7,8,"div",31),f(53,_a,9,5,"div",32),M(54,"span",33),f(55,Ma,10,8),o(),a(56,"nav",34)(57,"div",35),M(58,"app-governorate-select",36),nt(59,Oa,7,8,"a",37,Oe),o()()(),f(61,Ea,10,9,"div",38),a(62,"main",39),M(63,"router-outlet"),o(),M(64,"app-bottom-nav"),o()(),M(65,"app-chatbot-widget")),t&2&&(w("hasBackdrop",e.isMobile())("dir",e.theme.isRtl()?"rtl":"ltr"),r(),w("mode",e.isMobile()?"over":"side")("opened",!e.isMobile()&&e.sidenavOpen())("fixedInViewport",!0),r(5),v(e.isMobile()?6:-1),r(),v(e.isMobile()?7:-1),r(2),at(e.mainSections),r(4),y(u(14,28,"GOVERNORATE.LABEL")),r(4),v(e.auth.isLoggedIn()?17:18),r(4),y(u(22,30,"NAV.TERMS")),r(5),y(u(27,32,"NAV.PRIVACY")),r(5),y(u(32,34,"NAV.CONTACT")),r(5),y(u(37,36,"NAV.HELP")),r(6),P(" ",u(43,38,"SETTINGS.TITLE")," "),r(2),x("with-sidenav",!e.isMobile()&&e.sidenavOpen()),r(),x("bars-hidden",e.navHidden()),r(),x("scrolled",e.scrolled()),r(3),at(e.suggestions()),r(2),v(!e.searchOpen()||!e.isMobile()?51:-1),r(),v(e.isMobile()?-1:52),r(),v(e.isMobile()&&e.searchOpen()?53:-1),r(2),v(!e.searchOpen()||!e.isMobile()?55:-1),r(3),w("compact",!0),r(),at(e.NAV_SECTIONS),r(2),v(e.auth.currentUser()&&!e.auth.currentUser().email_verified&&!e.auth.currentUser().is_verified?61:-1),r(),x("has-bottom-nav",e.isMobile()))},dependencies:[Ke,Rt,Bt,Ht,Vt,Nt,jt,Ri,ai,xe,Li,Zt,Fi,Bi,ji,Ni,Vi,Ce,ye,ke,ci,di,hi,pi,mi,_i,ui,Mi,ki,gi,Ci,Ui,vt,Ot,Wi,Yi,Ki,Jt,Oi,Si,ee,Ii,Ai,ie,_t],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100vh;overflow:hidden}.shell-container[_ngcontent-%COMP%]{height:100vh}.side-nav[_ngcontent-%COMP%]{width:260px;border-inline-end:1px solid var(--b-border);background:var(--b-surface-card);display:flex;flex-direction:column;overflow-x:hidden}.sidenav-logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:20px 16px 16px;background:transparent;border-bottom:1px solid var(--b-border)}.logo-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--b-primary);font-size:1.2rem;font-weight:700;opacity:.95}.logo-link[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]{letter-spacing:-.3px}.close-btn[_ngcontent-%COMP%]{color:var(--b-text-secondary)!important}.sidenav-search[_ngcontent-%COMP%]{padding:8px 12px}.sidenav-search[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{width:100%}.sidenav-list[_ngcontent-%COMP%]{padding:4px 8px}.nav-list-item[_ngcontent-%COMP%]{border-radius:var(--b-radius-md)!important;margin-bottom:2px;--mdc-list-list-item-label-text-size: .9rem}.nav-list-item.active-link[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--b-primary) 12%,transparent);color:var(--b-primary)}.nav-list-item.active-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-primary);font-variation-settings:"FILL" 1}.nav-icon[_ngcontent-%COMP%]{font-size:20px;color:var(--b-text-secondary);font-variation-settings:"FILL" 1,"wght" 400}.sidenav-divider[_ngcontent-%COMP%]{margin:6px 0}.msg-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.sidenav-badge[_ngcontent-%COMP%]{background:var(--b-accent);color:var(--b-on-accent);font-size:.6rem;font-weight:700;min-width:16px;height:16px;border-radius:var(--b-radius-pill);display:inline-flex;align-items:center;justify-content:center;padding:0 4px}.auth-btns[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:12px 16px}.auth-btns[_ngcontent-%COMP%]   .auth-btn[_ngcontent-%COMP%]{width:100%}.logout-item[_ngcontent-%COMP%], .logout-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-error)!important}.admin-section[_ngcontent-%COMP%]   .nav-list-item[_ngcontent-%COMP%], .admin-section[_ngcontent-%COMP%]   .nav-list-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-primary)}.admin-menu-item[_ngcontent-%COMP%], .admin-menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{color:var(--b-primary)!important}.sidenav-footer-links[_ngcontent-%COMP%]{padding:10px 16px 2px;display:flex;flex-wrap:wrap;align-items:center;gap:4px 6px;margin-top:auto}.sidenav-footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.75rem;color:var(--b-text-hint);text-decoration:none}.sidenav-footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--b-primary);text-decoration:underline}.sidenav-footer-links[_ngcontent-%COMP%]   .footer-sep[_ngcontent-%COMP%]{font-size:.75rem;color:var(--b-border);-webkit-user-select:none;user-select:none}.sidenav-bottom[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:8px 12px calc(12px + env(safe-area-inset-bottom,0));border-top:1px solid var(--b-border)}.gov-filter[_ngcontent-%COMP%]{padding:4px 12px 8px}.gov-filter-label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600;color:var(--b-text-hint);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.sticky-bars[_ngcontent-%COMP%]{position:sticky;top:0;z-index:50;transform:translateY(0);transition:transform .28s cubic-bezier(.4,0,.2,1);will-change:transform}.sticky-bars.bars-hidden[_ngcontent-%COMP%]{transform:translateY(-100%)}.top-bar[_ngcontent-%COMP%]{position:relative;background:var(--b-primary-dark)!important;border-bottom:none!important;height:56px;min-height:56px;padding:0 12px;gap:6px;transition:box-shadow .2s;box-shadow:var(--b-shadow-sm)}.top-bar.scrolled[_ngcontent-%COMP%]{box-shadow:var(--b-shadow-md)}.dark[_nghost-%COMP%]   .top-bar[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .top-bar[_ngcontent-%COMP%]{background:var(--b-surface)!important}.top-bar[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]{color:#ffffffe0!important}.top-bar[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]:hover{background:#ffffff1a!important}.toolbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px;flex-shrink:0}.toolbar-logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;text-decoration:none;color:#fff;font-size:1.1rem;font-weight:700;white-space:nowrap;padding:0 4px;opacity:.95}.toolbar-center[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);width:min(480px,100vw - 440px);pointer-events:none;display:flex;justify-content:center}[dir=rtl][_nghost-%COMP%]   .toolbar-center[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .toolbar-center[_ngcontent-%COMP%]{left:auto;right:50%;transform:translate(50%)}.search-pill[_ngcontent-%COMP%]{pointer-events:all;display:flex;align-items:center;gap:6px;padding:0 10px 0 14px;height:38px;border-radius:var(--b-radius-pill);background:#ffffff1f;border:1.5px solid rgba(255,255,255,.18);transition:border-color .2s,box-shadow .2s,background .2s;width:100%}.search-pill.focused[_ngcontent-%COMP%]{background:#fff3;border-color:#ffffff73;box-shadow:0 0 0 3px #ffffff1a}.sp-icon[_ngcontent-%COMP%]{font-size:18px;color:#ffffffa6;flex-shrink:0;line-height:1}.sp-input[_ngcontent-%COMP%]{flex:1;min-width:0;border:none;background:transparent;outline:none;font-size:.875rem;color:#fff;font-family:inherit;line-height:1}.sp-input[_ngcontent-%COMP%]::placeholder{color:#ffffff80}.sp-clear[_ngcontent-%COMP%]{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:none;background:transparent;cursor:pointer;color:#ffffffa6;padding:0;transition:background .15s}.sp-clear[_ngcontent-%COMP%]:hover{background:#ffffff26}.sp-clear[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:15px;line-height:1}.toolbar-search-mobile[_ngcontent-%COMP%]{flex:1;padding:0 4px;display:flex;align-items:center}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.post-btn[_ngcontent-%COMP%]{background-color:var(--b-accent)!important;color:var(--b-on-accent)!important;border-radius:var(--b-radius-pill)!important;font-weight:600!important;box-shadow:0 2px 8px color-mix(in srgb,var(--b-accent) 45%,transparent)!important;transition:box-shadow .2s,transform .15s!important}.post-btn[_ngcontent-%COMP%]:hover{box-shadow:0 4px 16px color-mix(in srgb,var(--b-accent) 55%,transparent)!important;transform:translateY(-1px)}.login-btn[_ngcontent-%COMP%]{color:#ffffffe6!important;font-weight:600}.profile-btn[_ngcontent-%COMP%]{padding:0!important;overflow:hidden}.toolbar-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;object-fit:cover;display:block}.settings-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;color:var(--b-text-secondary);font-size:.85rem}@media(min-width:960px){.top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:34px!important;height:34px!important;min-width:34px!important;max-width:34px!important;padding:0!important;border-radius:50%!important;background:#ffffff1f!important;border:1.5px solid rgba(255,255,255,.28)!important;overflow:hidden;transition:background .15s,border-color .15s,transform .15s!important}.top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]:hover{background:#ffffff2e!important;border-color:#ffffff61!important;transform:translateY(-1px)}.top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-persistent-ripple[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-focus-indicator[_ngcontent-%COMP%]{width:34px!important;height:34px!important;border-radius:50%!important}.top-bar[_ngcontent-%COMP%]   .tb-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px;line-height:1}.top-bar[_ngcontent-%COMP%]   .tb-btn.profile-btn[_ngcontent-%COMP%]{border-radius:50%!important}.toolbar-avatar[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%}}.search-icon-pre[_ngcontent-%COMP%]{font-size:18px;color:var(--b-text-hint);margin-inline-end:4px}.sugg-icon[_ngcontent-%COMP%]{font-size:16px;color:var(--b-text-secondary);margin-inline-end:8px;vertical-align:middle}.menu-icon[_ngcontent-%COMP%]{font-size:18px;margin-inline-end:8px;vertical-align:middle;color:var(--b-text-secondary)}.shell-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow-y:scroll;scrollbar-gutter:stable;background:var(--b-surface-dim)}.section-nav[_ngcontent-%COMP%]{background:var(--b-surface-card);border-bottom:1px solid var(--b-border);position:relative;overflow:hidden}.section-nav-inner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;overflow-x:auto;overflow-y:hidden;padding:7px 12px;scrollbar-width:none}.section-nav-inner[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.section-nav-inner[_ngcontent-%COMP%]{-webkit-mask-image:linear-gradient(to right,transparent 0,black 16px,black calc(100% - 16px),transparent 100%);mask-image:linear-gradient(to right,transparent 0,black 16px,black calc(100% - 16px),transparent 100%)}.sn-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:5px;padding:5px 14px;border-radius:var(--b-radius-pill);text-decoration:none;font-size:.78rem;font-weight:500;color:var(--b-text-secondary);background:transparent;border:1.5px solid transparent;white-space:nowrap;flex-shrink:0;transition:background .15s,color .15s,border-color .15s}.sn-chip[_ngcontent-%COMP%]:hover{background:var(--b-primary-container);color:var(--b-primary-dark);border-color:transparent}.sn-chip--active[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff;font-weight:600;border-color:transparent}.sn-icon[_ngcontent-%COMP%]{font-size:15px;font-variation-settings:"FILL" 1,"wght" 400}.sn-count[_ngcontent-%COMP%]{font-size:.7rem;color:inherit;opacity:.65;margin-inline-start:1px}.verify-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap;background:#fff3cd;color:#664d03;padding:10px 20px;font-size:.83rem;border-bottom:1px solid #ffe69c}.verify-banner[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px;color:#d97c00;flex-shrink:0}.resend-btn[_ngcontent-%COMP%]{margin-inline-start:auto;padding:4px 14px;border:1px solid #d97c00;border-radius:var(--b-radius-pill);background:transparent;color:#d97c00;font-size:.78rem;font-weight:600;cursor:pointer}.resend-btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:default}.page-content[_ngcontent-%COMP%]{flex:1;min-height:0}'],changeDetection:0})};export{Xi as ShellComponent};
