import{a as ji}from"./chunk-XO4N53D6.js";import{a as zi}from"./chunk-25TJZ7ZE.js";import{a as Ni}from"./chunk-GCKFWZ7Y.js";import{a as $t}from"./chunk-VZOQV3IZ.js";import"./chunk-DVYFYGPF.js";import{a as Ii,b as Ai,c as Li}from"./chunk-Z7OTWQ4Y.js";import{a as bi,e as Mi}from"./chunk-SB7TF7YC.js";import{a as Hi}from"./chunk-KYZMJLAE.js";import"./chunk-B4MT6PHQ.js";import{a as Vi}from"./chunk-H2WHRL6I.js";import{a as Bi,b as Ri}from"./chunk-OGIQ5YO4.js";import{e as xi,i as yi,j as wi,m as ki,n as Ci}from"./chunk-UIKJI56D.js";import{a as Kt}from"./chunk-GDXX67BJ.js";import{b as Si,h as Oi,i as Ei,l as Ti,o as Pi,r as Di}from"./chunk-LNGFM4AD.js";import{b as ii,c as wt,h as dt,k as mt,v as ni,x as pt}from"./chunk-5ZYDYQWL.js";import{b as ve,c as Ct,d as xe,g as At}from"./chunk-UKZTWLVR.js";import{C as pi,D as qt,E as hi,F as H,H as L,P as rt,Q as ui,R as _i,S as gi,T as Xt,U as Zt,V as fi,W as vi,a as ai,b as oi,f as ht,g as Dt,i as It,k as kt,l as ri,q as si,r as li,s as Ut,t as ci,v as di,w as Gt,y as mi,z as Yt}from"./chunk-ORAPZGEG.js";import{b as Qt}from"./chunk-OZS3OO7M.js";import{a as Fi}from"./chunk-FEQFUONK.js";import{a as yt}from"./chunk-KSREIUAF.js";import{a as vt,c as ti,e as xt,f as Ht,g as Wt}from"./chunk-L2R6A5WK.js";import"./chunk-P43RJBZM.js";import"./chunk-PIIZLQM2.js";import{b as ei,c as J}from"./chunk-IUOYXXGK.js";import{$b as R,Ac as Nt,B as lt,Ba as at,Bc as jt,D as F,Da as I,Db as E,Ea as Ft,Eb as f,Ec as p,F as Et,Fb as v,Fc as h,Gb as Ke,H as Bt,Hb as Ue,I as Rt,Ib as Y,J as _e,Jb as q,Kb as w,L as Fe,Lb as a,Mb as o,Nb as T,Ob as fe,Pb as Ge,Qc as $e,Rc as Je,T as ut,U as Tt,Ub as M,V as z,Vb as Ye,Vc as ot,Xa as Ve,Yb as b,Yc as $,Za as Ne,Zb as qe,_a as s,_b as m,a as ft,aa as V,ac as S,bc as X,ca as W,cc as gt,db as Pt,dc as P,e as B,ea as d,eb as je,ec as D,gb as _t,gc as Xe,hc as Ze,ib as He,ic as bt,ja as u,jb as We,jc as zt,ka as _,kc as y,l as et,la as ge,lc as Vt,mc as l,na as it,nb as C,nc as x,oa as ct,ob as N,oc as O,pa as ze,pb as A,r as ue,ra as nt,rc as Q,sa as G,sb as j,sc as K,tc as U,ub as Qe,wa as k,za as be,zc as Z}from"./chunk-ZYXADZBJ.js";import{a as he,b as Re}from"./chunk-C6Q5SG76.js";var ee=["*"],sn=["content"],ln=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],cn=["mat-drawer","mat-drawer-content","*"];function dn(n,r){if(n&1){let t=M();a(0,"div",1),b("click",function(){u(t);let i=m();return _(i._onBackdropClicked())}),o()}if(n&2){let t=m();y("mat-drawer-shown",t._isShowingBackdrop())}}function mn(n,r){n&1&&(a(0,"mat-drawer-content"),S(1,2),o())}var pn=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],hn=["mat-sidenav","mat-sidenav-content","*"];function un(n,r){if(n&1){let t=M();a(0,"div",1),b("click",function(){u(t);let i=m();return _(i._onBackdropClicked())}),o()}if(n&2){let t=m();y("mat-drawer-shown",t._isShowingBackdrop())}}function _n(n,r){n&1&&(a(0,"mat-sidenav-content"),S(1,2),o())}var gn=`.mat-drawer-container {
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
`;var bn=new W("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ce=new W("MAT_DRAWER_CONTAINER"),Jt=(()=>{class n extends Ct{_platform=d(ht);_changeDetectorRef=d(ot);_container=d(we);constructor(){let t=d(I),e=d(ve),i=d(G);super(t,e,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(zt("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),y("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[Z([{provide:Ct,useExisting:n}]),j],ngContentSelectors:ee,decls:1,vars:0,template:function(e,i){e&1&&(R(),S(0))},encapsulation:2,changeDetection:0})}return n})(),ye=(()=>{class n{_elementRef=d(I);_focusTrapFactory=d(ci);_focusMonitor=d(It);_platform=d(ht);_ngZone=d(G);_renderer=d(_t);_interactivityChecker=d(Ut);_doc=d(ct);_container=d(Ce,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=L(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=L(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(L(t))}_opened=k(!1);_openedVia=null;_animationStarted=new B;_animationEnd=new B;openedChange=new nt(!0);_openedStream=this.openedChange.pipe(F(t=>t),ue(()=>{}));openedStart=this._animationStarted.pipe(F(()=>this.opened),_e(void 0));_closedStream=this.openedChange.pipe(F(t=>!t),ue(()=>{}));closedStart=this._animationStarted.pipe(F(()=>!this.opened),_e(void 0));_destroyed=new B;onPositionChanged=new nt;_content;_modeChanged=new B;_injector=d(it);_changeDetectorRef=d(ot);constructor(){this.openedChange.pipe(z(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Gt(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{c(),g(),t.removeAttribute("tabindex")},c=this._renderer.listen(t,"blur",i),g=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Pt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(c=>{this.openedChange.pipe(Rt(1)).subscribe(g=>c(g?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&gt(sn,5),e&2){let c;P(c=D())&&(i._content=c.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(E("align",null)("tabIndex",i.mode!=="side"?"-1":null),zt("visibility",!i._container&&!i.opened?"hidden":null),y("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(R(),a(0,"div",1,0),S(2),o())},dependencies:[Ct],encapsulation:2,changeDetection:0})}return n})(),we=(()=>{class n{_dir=d(qt,{optional:!0});_element=d(I);_ngZone=d(G);_changeDetectorRef=d(ot);_animationDisabled=rt();_transitionsEnabled=!1;_allDrawers;_drawers=new Ft;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=L(t)}_autosize=d(bn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:L(t)}_backdropOverride=null;backdropClick=new nt;_start=null;_end=null;_left=null;_right=null;_destroyed=new B;_doCheckSubject=new B;_contentMargins={left:null,right:null};_contentMarginChanges=new B;get scrollable(){return this._userContent||this._content}_injector=d(it);constructor(){let t=d(ht),e=d(xe);this._dir?.change.pipe(z(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(z(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ut(this._allDrawers),z(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ut(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Bt(10),z(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(z(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(z(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(z(this._drawers.changes)).subscribe(()=>{Pt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(z(lt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,c){if(e&1&&X(c,Jt,5)(c,ye,5),e&2){let g;P(g=D())&&(i._content=g.first),P(g=D())&&(i._allDrawers=g)}},viewQuery:function(e,i){if(e&1&&gt(Jt,5),e&2){let c;P(c=D())&&(i._userContent=c.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&y("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Z([{provide:Ce,useExisting:n}])],ngContentSelectors:cn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(R(ln),f(0,dn,1,2,"div",0),S(1),S(2,1),f(3,mn,2,0,"mat-drawer-content")),e&2&&(v(i.hasBackdrop?0:-1),s(3),v(i._content?-1:3))},dependencies:[Jt],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return n})(),te=(()=>{class n extends Jt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=at(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Z([{provide:Ct,useExisting:n}]),j],ngContentSelectors:ee,decls:1,vars:0,template:function(e,i){e&1&&(R(),S(0))},encapsulation:2,changeDetection:0})}return n})(),Me=(()=>{class n extends ye{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=L(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Dt(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Dt(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=at(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(E("tabIndex",i.mode!=="side"?"-1":null)("align",null),zt("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),y("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Z([{provide:ye,useExisting:n}]),j],ngContentSelectors:ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(R(),a(0,"div",1,0),S(2),o())},dependencies:[Ct],encapsulation:2,changeDetection:0})}return n})(),Wi=(()=>{class n extends we{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=at(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,c){if(e&1&&X(c,te,5)(c,Me,5),e&2){let g;P(g=D())&&(i._content=g.first),P(g=D())&&(i._allDrawers=g)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&y("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[Z([{provide:Ce,useExisting:n},{provide:we,useExisting:n}]),j],ngContentSelectors:hn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(R(pn),f(0,un,1,2,"div",0),S(1),S(2,1),f(3,_n,2,0,"mat-sidenav-content")),e&2&&(v(i.hasBackdrop?0:-1),s(3),v(i._content?-1:3))},dependencies:[te],styles:[gn],encapsulation:2,changeDetection:0})}return n})(),Qi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[At,H,At]})}return n})();var vn=["*",[["mat-toolbar-row"]]],xn=["*","mat-toolbar-row"],yn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Ki=(()=>{class n{_elementRef=d(I);_platform=d(ht);_document=d(ct);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,i,c){if(e&1&&X(c,yn,5),e&2){let g;P(g=D())&&(i._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,i){e&2&&(Vt(i.color?"mat-"+i.color:""),y("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:xn,decls:2,vars:0,template:function(e,i){e&1&&(R(vn),S(0),S(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return n})();var Ui=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[H]})}return n})();var Se=(()=>{class n{get vertical(){return this._vertical}set vertical(t){this._vertical=L(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=L(t)}_inset=!1;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,i){e&2&&(E("aria-orientation",i.vertical?"vertical":"horizontal"),y("mat-divider-vertical",i.vertical)("mat-divider-horizontal",!i.vertical)("mat-divider-inset",i.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,i){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return n})(),ie=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[H]})}return n})();var kn=["*"],Cn=`.mdc-list {
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
`,Mn=["unscopedContent"],Sn=["text"],On=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],En=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Tn=new W("ListOption"),Ee=(()=>{class n{_elementRef=d(I);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Pn=(()=>{class n{_elementRef=d(I);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),Dn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),Gi=(()=>{class n{_listOption=d(Tn,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,hostVars:4,hostBindings:function(e,i){e&2&&y("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),In=(()=>{class n extends Gi{static \u0275fac=(()=>{let t;return function(i){return(t||(t=at(n)))(i||n)}})();static \u0275dir=A({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[j]})}return n})(),Te=(()=>{class n extends Gi{static \u0275fac=(()=>{let t;return function(i){return(t||(t=at(n)))(i||n)}})();static \u0275dir=A({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[j]})}return n})(),An=new W("MAT_LIST_CONFIG"),Oe=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=L(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(L(t))}_disabled=k(!1);_defaultOptions=d(An,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,hostVars:1,hostBindings:function(e,i){e&2&&E("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Ln=(()=>{class n{_elementRef=d(I);_ngZone=d(G);_listBase=d(Oe,{optional:!0});_platform=d(ht);_hostElement;_isButtonElement;_noopAnimations=rt();_avatars;_icons;set lines(t){this._explicitLines=Dt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=L(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(L(t))}_disabled=k(!1);_subscriptions=new ft;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(kt).load(Xt);let t=d(_i,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ui(this,this._ngZone,this._hostElement,this._platform,d(it)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(lt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let c=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",c),i.classList.toggle("mdc-list-item__secondary-text",!c)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,contentQueries:function(e,i,c){if(e&1&&X(c,In,4)(c,Te,4),e&2){let g;P(g=D())&&(i._avatars=g),P(g=D())&&(i._icons=g)}},hostVars:4,hostBindings:function(e,i){e&2&&(E("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),y("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var Yi=(()=>{class n extends Ln{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=L(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=at(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,c){if(e&1&&X(c,Pn,5)(c,Ee,5)(c,Dn,5),e&2){let g;P(g=D())&&(i._lines=g),P(g=D())&&(i._titles=g),P(g=D())&&(i._meta=g)}},viewQuery:function(e,i){if(e&1&&gt(Mn,5)(Sn,5),e&2){let c;P(c=D())&&(i._unscopedContent=c.first),P(c=D())&&(i._itemText=c.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(E("aria-current",i._getAriaCurrent()),y("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[j],ngContentSelectors:En,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(R(On),S(0),a(1,"span",1),S(2,1),S(3,2),a(4,"span",2,0),b("cdkObserveContent",function(){return i._updateItemLines(!0)}),S(6,3),o()(),S(7,4),S(8,5),T(9,"div",3))},dependencies:[si],encapsulation:2,changeDetection:0})}return n})();var qi=(()=>{class n extends Oe{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=at(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Z([{provide:Oe,useExisting:n}]),j],ngContentSelectors:kn,decls:1,vars:0,template:function(e,i){e&1&&(R(),S(0))},styles:[Cn],encapsulation:2,changeDetection:0})}return n})();var Xi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[li,Zt,bi,H,ie]})}return n})();var Nn=["mat-menu-item",""],jn=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Hn=["mat-icon, [matMenuItemIcon]","*"];function Wn(n,r){n&1&&(ge(),a(0,"svg",2),T(1,"polygon",3),o())}var Qn=["*"];function Kn(n,r){if(n&1){let t=M();fe(0,"div",0),qe("click",function(){u(t);let i=m();return _(i.closed.emit("click"))})("animationstart",function(i){u(t);let c=m();return _(c._onAnimationStart(i.animationName))})("animationend",function(i){u(t);let c=m();return _(c._onAnimationDone(i.animationName))})("animationcancel",function(i){u(t);let c=m();return _(c._onAnimationDone(i.animationName))}),fe(1,"div",1),S(2),Ge()()}if(n&2){let t=m();Vt(t._classList),y("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Ye("id",t.panelId),E("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var De=new W("MAT_MENU_PANEL"),Lt=(()=>{class n{_elementRef=d(I);_document=d(ct);_focusMonitor=d(It);_parentMenu=d(De,{optional:!0});_changeDetectorRef=d(ot);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new B;_focused=new B;_highlighted=!1;_triggersSubmenu=!1;constructor(){d(kt).load(Xt),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<e.length;i++)e[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,i){e&1&&b("click",function(g){return i._checkDisabled(g)})("mouseenter",function(){return i._handleMouseEnter()}),e&2&&(E("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),y("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",$],disableRipple:[2,"disableRipple","disableRipple",$]},exportAs:["matMenuItem"],attrs:Nn,ngContentSelectors:Hn,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,i){e&1&&(R(jn),S(0),a(1,"span",0),S(2,1),o(),T(3,"div",1),f(4,Wn,2,0,":svg:svg",2)),e&2&&(s(3),w("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),s(),v(i._triggersSubmenu?4:-1))},dependencies:[gi],encapsulation:2,changeDetection:0})}return n})();var Un=new W("MatMenuContent");var Gn=new W("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Pe="_mat-menu-enter",ne="_mat-menu-exit",St=(()=>{class n{_elementRef=d(I);_changeDetectorRef=d(ot);_injector=d(it);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=rt();_allItems;_directDescendantItems=new Ft;_classList={};_panelAnimationState="void";_animationDone=new B;_isAnimating=k(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,i=he({},this._classList);e&&e.length&&e.split(" ").forEach(c=>{i[c]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(c=>{i[c]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new nt;close=this.closed;panelId=d(Yt).getId("mat-menu-panel-");constructor(){let t=d(Gn);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new mi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(ut(this._directDescendantItems),Tt(t=>lt(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let i=t.toArray(),c=Math.max(0,Math.min(i.length-1,e.activeItemIndex||0));i[c]&&!i[c].disabled?e.setActiveItem(c):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ut(this._directDescendantItems),Tt(e=>lt(...e.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,i=this._keyManager;switch(e){case 27:Gt(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Pt(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=Re(he({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===ne;(e||t===Pe)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Pe||t===ne)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ne),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Pe:ne)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ut(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["mat-menu"]],contentQueries:function(e,i,c){if(e&1&&X(c,Un,5)(c,Lt,5)(c,Lt,4),e&2){let g;P(g=D())&&(i.lazyContent=g.first),P(g=D())&&(i._allItems=g),P(g=D())&&(i.items=g)}},viewQuery:function(e,i){if(e&1&&gt(je,5),e&2){let c;P(c=D())&&(i.templateRef=c.first)}},hostVars:3,hostBindings:function(e,i){e&2&&E("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",$],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:$(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Z([{provide:De,useExisting:n}])],ngContentSelectors:Qn,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,i){e&1&&(R(),Qe(0,Kn,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return n})(),Yn=new W("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(it);return()=>Oi(n)}});var Mt=new WeakMap,qn=(()=>{class n{_canHaveBackdrop;_element=d(I);_viewContainerRef=d(We);_menuItemInstance=d(Lt,{optional:!0,self:!0});_dir=d(qt,{optional:!0});_focusMonitor=d(It);_ngZone=d(G);_injector=d(it);_scrollStrategy=d(Yn);_changeDetectorRef=d(ot);_animationsDisabled=rt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ft.EMPTY;_menuCloseSubscription=ft.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=d(De,{optional:!0});this._parentMaterialMenu=e instanceof St?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Mt.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let i=Mt.get(e);Mt.set(e,this),i&&i!==this&&i._closeMenu();let c=this._createOverlay(e),g=c.getConfig(),st=g.positionStrategy;this._setPosition(e,st),this._canHaveBackdrop?g.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:g.hasBackdrop=e.hasBackdrop??!1,c.hasAttached()||(c.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof St&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(z(e.close)).subscribe(()=>{st.withLockedPosition(!1).reapplyLastPosition(),st.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,i=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof St&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(Rt(1)).subscribe(()=>{e.detach(),Mt.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(e.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Mt.delete(i),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Pi(this._injector,e),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof St&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new Ei({positionStrategy:Ti(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let c=i.connectionPair.overlayX==="start"?"after":"before",g=i.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(c,g)})})}_setPosition(t,e){let[i,c]=t.xPosition==="before"?["end","start"]:["start","end"],[g,st]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[ce,de]=[g,st],[me,pe]=[i,c],Ot=0;if(this._triggersSubmenu()){if(pe=i=t.xPosition==="before"?"start":"end",c=me=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Be=this._parentMaterialMenu.items.first;this._parentInnerPadding=Be?Be._getHostElement().offsetTop:0}Ot=g==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(ce=g==="top"?"bottom":"top",de=st==="top"?"bottom":"top");e.withPositions([{originX:i,originY:ce,overlayX:me,overlayY:g,offsetY:Ot},{originX:c,originY:ce,overlayX:pe,overlayY:g,offsetY:Ot},{originX:i,originY:de,overlayX:me,overlayY:st,offsetY:-Ot},{originX:c,originY:de,overlayX:pe,overlayY:st,offsetY:-Ot}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:et(),c=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(F(g=>this._menuOpen&&g!==this._menuItemInstance)):et();return lt(t,i,c,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Si(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Mt.get(t)===this}_triggerIsAriaDisabled(){return $(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){He()};static \u0275dir=A({type:n})}return n})(),Ji=(()=>{class n extends qn{_cleanupTouchstart;_hoverSubscription=ft.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new nt;onMenuOpen=this.menuOpened;menuClosed=new nt;onMenuClose=this.menuClosed;constructor(){super(!0);let t=d(_t);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{oi(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){ai(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,i){e&1&&b("click",function(g){return i._handleClick(g)})("mousedown",function(g){return i._handleMousedown(g)})("keydown",function(g){return i._handleKeydown(g)}),e&2&&E("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[j]})}return n})();var tn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Zt,Di,H,At]})}return n})();var en="mat-badge-content",Zn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-badge {
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
`],encapsulation:2,changeDetection:0})}return n})(),nn=(()=>{class n{_ngZone=d(G);_elementRef=d(I);_ariaDescriber=d(pi);_renderer=d(_t);_animationsDisabled=rt();_idGenerator=d(Yt);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=d(Ut);_document=d(ct);constructor(){let t=d(kt);t.load(Zn),t.load(ri)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(en),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${en}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,i){e&2&&y("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small",i.size==="small")("mat-badge-medium",i.size==="medium")("mat-badge-large",i.size==="large")("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",$],disabled:[2,"matBadgeDisabled","disabled",$],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",$]}})}return n})(),an=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[di,H]})}return n})();var Jn=n=>({exact:n}),ta=(n,r)=>r.route;function ea(n,r){if(n&1&&(a(0,"span",5),l(1),o()),n&2){let t=m(2);s(),x(t.unreadCount()>9?"9+":t.unreadCount())}}function ia(n,r){if(n&1&&(a(0,"span",6),l(1),p(2,"translate"),o()),n&2){let t=m().$implicit;s(),x(h(2,1,t.labelKey))}}function na(n,r){if(n&1&&(a(0,"a",2),p(1,"translate"),a(2,"div",3)(3,"span",4),l(4),o(),f(5,ea,2,1,"span",5),o(),f(6,ia,3,3,"span",6),o()),n&2){let t=r.$implicit,e=m();y("fab-item",t.fab),w("routerLink",t.route)("routerLinkActiveOptions",jt(10,Jn,!!t.exact)),E("aria-label",h(1,8,t.labelKey)),s(4),x(t.icon),s(),v(t.route==="/messages"&&e.unreadCount()>0?5:-1),s(),v(t.fab?-1:6)}}var ae=class n{notifSvc=d($t);auth=d(Qt);scrollHidden=$e(!1);unreadCount=this.notifSvc.unreadCount;navItems=[{labelKey:"NAV.HOME",icon:"home",route:"/",exact:!0},{labelKey:"NAV.MAP",icon:"map",route:"/map"},{labelKey:"NAV.POST",icon:"add",route:"/post",fab:!0},{labelKey:"NAV.MESSAGES",icon:"chat_bubble",route:"/messages"},{labelKey:"NAV.ACCOUNT",icon:"person",route:this.auth.isLoggedIn()?"/dashboard/profile":"/auth/login"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-bottom-nav"]],hostVars:2,hostBindings:function(t,e){t&2&&y("scroll-hidden",e.scrollHidden())},inputs:{scrollHidden:[1,"scrollHidden"]},decls:3,vars:0,consts:[[1,"bottom-nav","hide-tablet"],["routerLinkActive","active",1,"nav-item",3,"fab-item","routerLink","routerLinkActiveOptions"],["routerLinkActive","active",1,"nav-item",3,"routerLink","routerLinkActiveOptions"],[1,"nav-icon-wrap"],[1,"material-symbols-outlined","nav-icon"],[1,"badge"],[1,"nav-label"]],template:function(t,e){t&1&&(a(0,"nav",0),Y(1,na,7,12,"a",1,ta),o()),t&2&&(s(),q(e.navItems))},dependencies:[Ht,Wt,J],styles:['@charset "UTF-8";.bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;inset-inline:0;height:calc(var(--b-bottom-nav-h) + env(safe-area-inset-bottom,0px));background:var(--b-surface-card);border-top:1px solid var(--b-border);display:flex;align-items:flex-start;justify-content:space-around;padding-top:0;padding-bottom:env(safe-area-inset-bottom,0px);z-index:100;box-shadow:0 -2px 12px #0000000f;transition:transform .3s cubic-bezier(.4,0,.2,1)}.scroll-hidden[_nghost-%COMP%]   .bottom-nav[_ngcontent-%COMP%]{transform:translateY(100%)}.nav-item[_ngcontent-%COMP%]{height:var(--b-bottom-nav-h);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-decoration:none;color:var(--b-text-secondary);border-radius:var(--b-radius-md);padding:6px 12px;min-width:52px;transition:color .2s,transform .1s;position:relative;-webkit-tap-highlight-color:transparent}.nav-item[_ngcontent-%COMP%]:active{transform:scale(.92)}.nav-item.active[_ngcontent-%COMP%]{color:var(--b-primary)}.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{font-variation-settings:"FILL" 1}.nav-item.active[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%]{font-weight:600}.fab-item[_ngcontent-%COMP%]   .nav-icon-wrap[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:50%;background:var(--b-accent);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px color-mix(in srgb,var(--b-accent) 50%,transparent);transition:transform .2s,box-shadow .2s}.fab-item[_ngcontent-%COMP%]:active   .nav-icon-wrap[_ngcontent-%COMP%]{transform:scale(.92);box-shadow:0 2px 6px color-mix(in srgb,var(--b-accent) 35%,transparent)}.fab-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-on-accent);font-size:24px}.nav-icon-wrap[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.nav-icon[_ngcontent-%COMP%]{font-size:22px;font-variation-settings:"FILL" 0,"wght" 300;transition:font-variation-settings .2s}.nav-label[_ngcontent-%COMP%]{font-size:.65rem;line-height:1;font-weight:400}.badge[_ngcontent-%COMP%]{position:absolute;top:-4px;inset-inline-end:-6px;background:var(--b-accent);color:#fff;font-size:.6rem;font-weight:700;min-width:16px;height:16px;border-radius:var(--b-radius-pill);display:flex;align-items:center;justify-content:center;padding:0 3px}']})};var aa=["messagesContainer"];function oa(n,r){n&1&&(a(0,"div",11)(1,"span",17),l(2),p(3,"translate"),o()()),n&2&&(s(2),x(h(3,1,"CHATBOT.WELCOME")))}function ra(n,r){n&1&&(a(0,"span",19),l(1,"smart_toy"),o())}function sa(n,r){if(n&1&&(a(0,"div",18),f(1,ra,2,0,"span",19),a(2,"span",20),l(3),o()()),n&2){let t=r.$implicit;y("user-msg",t.role==="user")("bot-msg",t.role==="assistant"),s(),v(t.role==="assistant"?1:-1),s(2),x(t.content)}}function la(n,r){n&1&&(a(0,"div",13)(1,"span",19),l(2,"smart_toy"),o(),a(3,"span",21),T(4,"span",22)(5,"span",22)(6,"span",22),o()())}function ca(n,r){if(n&1){let t=M();a(0,"div",3)(1,"div",4)(2,"span",5),l(3,"smart_toy"),o(),a(4,"div",6)(5,"span",7),l(6),p(7,"translate"),o(),a(8,"span",8),l(9),p(10,"translate"),o()(),a(11,"button",9),b("click",function(){u(t);let i=m();return _(i.toggleOpen())}),a(12,"span",2),l(13,"close"),o()()(),a(14,"div",10,0),f(16,oa,4,3,"div",11),Y(17,sa,4,6,"div",12,Ke),f(19,la,7,0,"div",13),o(),a(20,"div",14)(21,"input",15),p(22,"translate"),U("ngModelChange",function(i){u(t);let c=m();return K(c.inputText,i)||(c.inputText=i),_(i)}),b("keydown.enter",function(){u(t);let i=m();return _(i.send())}),o(),a(23,"button",16),b("click",function(){u(t);let i=m();return _(i.send())}),a(24,"span",2),l(25,"send"),o()()()()}if(n&2){let t=m();w("dir",t.isRtl()?"rtl":"ltr"),s(6),x(h(7,9,"CHATBOT.BOT_NAME")),s(3),x(h(10,11,"CHATBOT.STATUS_ONLINE")),s(7),v(t.messages().length?-1:16),s(),q(t.messages()),s(2),v(t.loading()?19:-1),s(2),Q("ngModel",t.inputText),w("placeholder",h(22,13,"CHATBOT.PLACEHOLDER"))("disabled",t.loading()),s(2),w("disabled",!t.inputText.trim()||t.loading())}}var re=class n{api=d(yt);translate=d(ei);router=d(xt);messagesContainer=Je("messagesContainer");isOpen=k(!1);loading=k(!1);messages=k([]);onPostForm=k(!1);inputText="";constructor(){this.onPostForm.set(this.router.url.startsWith("/post")),this.router.events.pipe(F(r=>r instanceof vt)).subscribe(r=>{this.onPostForm.set(r.urlAfterRedirects.startsWith("/post"))})}isRtl(){return this.translate.currentLang==="ar"}toggleOpen(){this.isOpen.update(r=>!r)}send(){let r=this.inputText.trim();if(!r||this.loading())return;this.messages.update(i=>[...i,{role:"user",content:r}]),this.inputText="",this.loading.set(!0);let t=this.translate.currentLang==="ar"?"ar":"en",e=this.messages().slice(-9,-1);this.api.post("/core/chatbot/",{message:r,history:e,language:t}).pipe(Et(()=>et({reply:t==="ar"?"\u0639\u0630\u0631\u0627\u064B\u060C \u062D\u062F\u062B \u062E\u0637\u0623. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u0627\u064B.":"Sorry, something went wrong."}))).subscribe(i=>{this.messages.update(c=>[...c,{role:"assistant",content:i.reply}]),this.loading.set(!1)})}ngAfterViewChecked(){let r=this.messagesContainer()?.nativeElement;r&&(r.scrollTop=r.scrollHeight)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-chatbot-widget"]],viewQuery:function(t,e){t&1&&Xe(e.messagesContainer,aa,5),t&2&&Ze()},hostVars:2,hostBindings:function(t,e){t&2&&y("on-post-form",e.onPostForm())},decls:5,vars:5,consts:[["messagesContainer",""],[1,"chat-fab",3,"click"],[1,"material-symbols-outlined"],[1,"chat-panel",3,"dir"],[1,"chat-header"],[1,"material-symbols-outlined","bot-icon"],[1,"header-text"],[1,"bot-name"],[1,"bot-status"],[1,"header-close",3,"click"],[1,"chat-messages"],[1,"msg","bot-msg"],[1,"msg",3,"user-msg","bot-msg"],[1,"msg","bot-msg","typing-row"],[1,"chat-input-row"],["type","text","autocomplete","off",1,"chat-input",3,"ngModelChange","keydown.enter","ngModel","placeholder","disabled"],[1,"send-btn",3,"click","disabled"],[1,"bot-bubble"],[1,"msg"],[1,"material-symbols-outlined","bot-avatar"],[1,"bubble"],[1,"bubble","typing-bubble"],[1,"dot"]],template:function(t,e){t&1&&(a(0,"button",1),p(1,"translate"),b("click",function(){return e.toggleOpen()}),a(2,"span",2),l(3),o()(),f(4,ca,26,15,"div",3)),t&2&&(E("aria-label",h(1,3,"CHATBOT.OPEN")),s(3),O(" ",e.isOpen()?"close":"smart_toy"," "),s(),v(e.isOpen()?4:-1))},dependencies:[pt,wt,dt,mt,J],styles:['@charset "UTF-8";[_nghost-%COMP%]{position:fixed;bottom:70px;inset-inline-end:20px;z-index:1200}.on-post-form[_nghost-%COMP%]{inset-inline-end:unset;inset-inline-start:20px}.on-post-form[_nghost-%COMP%]   .chat-panel[_ngcontent-%COMP%]{inset-inline-end:unset;inset-inline-start:0}.chat-fab[_ngcontent-%COMP%]{width:47px;height:47px;border-radius:50%;background:var(--b-primary);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px #00000040;transition:transform .2s,box-shadow .2s}.chat-fab[_ngcontent-%COMP%]:hover{transform:scale(1.08);box-shadow:0 6px 20px #0000004d}.chat-fab[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:26px}.chat-panel[_ngcontent-%COMP%]{position:absolute;bottom:62px;inset-inline-end:0;width:320px;background:var(--b-surface);border:1px solid var(--b-border);border-radius:16px;box-shadow:0 8px 32px #0000002e;display:flex;flex-direction:column;overflow:hidden;animation:_ngcontent-%COMP%_slide-up .2s ease}@media(max-width:400px){.chat-panel[_ngcontent-%COMP%]{width:calc(100vw - 32px);inset-inline-end:0}}@keyframes _ngcontent-%COMP%_slide-up{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.chat-header[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}.bot-icon[_ngcontent-%COMP%]{font-size:24px}.header-text[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;line-height:1.2}.bot-name[_ngcontent-%COMP%]{font-size:.88rem;font-weight:600}.bot-status[_ngcontent-%COMP%]{font-size:.72rem;opacity:.8}.header-close[_ngcontent-%COMP%]{background:transparent;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:50%;width:28px;height:28px}.header-close[_ngcontent-%COMP%]:hover{background:#ffffff26}.header-close[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}.chat-messages[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:12px 10px;display:flex;flex-direction:column;gap:8px;min-height:220px;max-height:300px;scroll-behavior:smooth}.msg[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:6px}.msg.user-msg[_ngcontent-%COMP%]{flex-direction:row-reverse}.bot-avatar[_ngcontent-%COMP%]{font-size:18px;color:var(--b-primary);flex-shrink:0}.bubble[_ngcontent-%COMP%], .bot-bubble[_ngcontent-%COMP%]{max-width:80%;padding:8px 11px;border-radius:14px;font-size:.83rem;line-height:1.45;white-space:pre-wrap;word-break:break-word}.bot-msg[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%], .bot-msg[_ngcontent-%COMP%]   .bot-bubble[_ngcontent-%COMP%]{background:var(--b-surface-dim);border-end-start-radius:4px}.user-msg[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%], .user-msg[_ngcontent-%COMP%]   .bot-bubble[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff;border-end-end-radius:4px}.bot-bubble[_ngcontent-%COMP%]{background:var(--b-surface-dim)}.typing-bubble[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:10px 14px;background:var(--b-surface-dim)}.dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:var(--b-text-secondary);animation:_ngcontent-%COMP%_bounce .9s infinite}.dot[_ngcontent-%COMP%]:nth-child(2){animation-delay:.15s}.dot[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}@keyframes _ngcontent-%COMP%_bounce{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-6px)}}.chat-input-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:8px 10px;border-top:1px solid var(--b-border)}.chat-input[_ngcontent-%COMP%]{flex:1;border:1px solid var(--b-border);border-radius:20px;padding:7px 12px;font-size:.84rem;outline:none;background:var(--b-surface);color:var(--b-text-primary)}.chat-input[_ngcontent-%COMP%]:focus{border-color:var(--b-primary)}.chat-input[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.send-btn[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;background:var(--b-primary);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s}.send-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:color-mix(in srgb,var(--b-primary) 80%,black)}.send-btn[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.send-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}'],changeDetection:0})};var da=()=>[1,2,3,4,5];function ma(n,r){if(n&1){let t=M();a(0,"button",8),b("click",function(){let i=u(t).$implicit,c=m(3);return _(c.setStar(i))}),a(1,"span",2),l(2,"star"),o()()}if(n&2){let t=r.$implicit,e=m(3);y("active",e.star()>=t),E("aria-label",t+" stars")}}function pa(n,r){n&1&&(a(0,"span",11),l(1,"progress_activity"),o())}function ha(n,r){n&1&&(l(0),p(1,"translate")),n&2&&O(" ",h(1,1,"FEEDBACK_WIDGET.SUBMIT")," ")}function ua(n,r){if(n&1){let t=M();a(0,"textarea",9),p(1,"translate"),U("ngModelChange",function(i){u(t);let c=m(3);return K(c.text,i)||(c.text=i),_(i)}),o(),a(2,"button",10),b("click",function(){u(t);let i=m(3);return _(i.submit())}),f(3,pa,2,0,"span",11)(4,ha,2,3),o()}if(n&2){let t=m(3);Q("ngModel",t.text),w("placeholder",h(1,4,"FEEDBACK_WIDGET.PLACEHOLDER")),s(2),w("disabled",t.loading()),s(),v(t.loading()?3:4)}}function _a(n,r){if(n&1){let t=M();a(0,"p",4),l(1),p(2,"translate"),o(),a(3,"div",5),Y(4,ma,3,3,"button",6,Ue),o(),f(6,ua,5,6),a(7,"button",7),b("click",function(){u(t);let i=m(2);return _(i.dismiss())}),l(8),p(9,"translate"),o()}if(n&2){let t=m(2);s(),x(h(2,3,"FEEDBACK_WIDGET.TITLE")),s(3),q(Nt(7,da)),s(2),v(t.star()>0?6:-1),s(2),x(h(9,5,"FEEDBACK_WIDGET.SKIP"))}}function ga(n,r){n&1&&(a(0,"div",3)(1,"span",2),l(2,"check_circle"),o(),a(3,"span"),l(4),p(5,"translate"),o()()),n&2&&(s(4),x(h(5,1,"FEEDBACK_WIDGET.THANKS")))}function ba(n,r){if(n&1){let t=M();a(0,"div",0),p(1,"translate"),a(2,"button",1),p(3,"translate"),b("click",function(){u(t);let i=m();return _(i.dismiss())}),a(4,"span",2),l(5,"close"),o()(),f(6,_a,10,8)(7,ga,6,3,"div",3),o()}if(n&2){let t=m();E("aria-label",h(1,3,"FEEDBACK_WIDGET.TITLE")),s(2),E("aria-label",h(3,5,"ACTIONS.CLOSE")),s(4),v(t.submitted()?7:6)}}var Ae="barmha_fb_last",fa=10080*60*1e3,va=5,xa=12e3,se=class n{api=d(yt);router=d(xt);visible=k(!1);loading=k(!1);submitted=k(!1);star=k(0);text="";_pageCount=0;_autoDismissTimer=null;_routerSub;_currentPage="";constructor(){this._routerSub=this.router.events.pipe(F(r=>r instanceof vt)).subscribe(r=>{this._currentPage=r.urlAfterRedirects,this._pageCount++,this._pageCount>=va&&!this.visible()&&this._maybeShow()})}ngOnDestroy(){this._routerSub.unsubscribe(),this._autoDismissTimer&&clearTimeout(this._autoDismissTimer)}_maybeShow(){let r=localStorage.getItem(Ae);r&&Date.now()-Number(r)<fa||(this.visible.set(!0),this._autoDismissTimer=setTimeout(()=>this.dismiss(),xa))}setStar(r){this.star.set(r),this._autoDismissTimer&&(clearTimeout(this._autoDismissTimer),this._autoDismissTimer=null)}dismiss(){localStorage.setItem(Ae,String(Date.now())),this.visible.set(!1),this._autoDismissTimer&&(clearTimeout(this._autoDismissTimer),this._autoDismissTimer=null)}submit(){if(this.loading())return;this.loading.set(!0);let r={page:this._currentPage};this.star()>0&&(r.stars=this.star()),this.text.trim()&&(r.text=this.text.trim()),this.api.post("/core/feedback/",r).subscribe({next:()=>{this.loading.set(!1),this.submitted.set(!0),localStorage.setItem(Ae,String(Date.now())),setTimeout(()=>this.visible.set(!1),2500)},error:()=>this.loading.set(!1)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-feedback-widget"]],decls:1,vars:1,consts:[["role","dialog",1,"fb-toast"],[1,"fb-dismiss",3,"click"],[1,"material-symbols-outlined"],[1,"fb-thanks"],[1,"fb-question"],[1,"fb-stars"],[1,"fb-star",3,"active"],[1,"fb-skip",3,"click"],[1,"fb-star",3,"click"],["maxlength","300","rows","2",1,"fb-textarea",3,"ngModelChange","ngModel","placeholder"],[1,"fb-submit",3,"click","disabled"],[1,"material-symbols-outlined","spinning"]],template:function(t,e){t&1&&f(0,ba,8,7,"div",0),t&2&&v(e.visible()?0:-1)},dependencies:[pt,wt,dt,ni,mt,J],styles:['[_nghost-%COMP%]{position:fixed;bottom:76px;inset-inline-start:50%;transform:translate(-50%);z-index:1300;pointer-events:none}@media(min-width:960px){[_nghost-%COMP%]{bottom:32px}}.fb-toast[_ngcontent-%COMP%]{pointer-events:all;background:var(--b-surface-card);border:1px solid var(--b-border);border-radius:var(--b-radius-md);box-shadow:0 8px 32px #0000002e;padding:16px 20px 12px;width:min(340px,100vw - 32px);display:flex;flex-direction:column;gap:10px;position:relative;animation:_ngcontent-%COMP%_slideUp .3s cubic-bezier(.4,0,.2,1)}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}.fb-dismiss[_ngcontent-%COMP%]{position:absolute;top:8px;inset-inline-end:8px;width:24px;height:24px;border:none;background:transparent;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--b-text-hint);padding:0}.fb-dismiss[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:16px}.fb-dismiss[_ngcontent-%COMP%]:hover{background:var(--b-surface-dim)}.fb-question[_ngcontent-%COMP%]{font-size:.9rem;font-weight:600;color:var(--b-text-primary);margin:0;padding-inline-end:24px}.fb-stars[_ngcontent-%COMP%]{display:flex;gap:4px}.fb-star[_ngcontent-%COMP%]{width:40px;height:40px;border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:50%;padding:0;transition:background .1s}.fb-star[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:30px;color:var(--b-border);font-variation-settings:"FILL" 0;transition:color .1s,font-variation-settings .1s}.fb-star.active[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{color:#ffc107;font-variation-settings:"FILL" 1}.fb-star[_ngcontent-%COMP%]:hover{background:var(--b-surface-dim)}.fb-textarea[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid var(--b-border);border-radius:var(--b-radius-sm);background:var(--b-surface);color:var(--b-text-primary);font-size:.83rem;resize:none;outline:none;font-family:inherit;line-height:1.5}.fb-textarea[_ngcontent-%COMP%]:focus{border-color:var(--b-primary)}.fb-textarea[_ngcontent-%COMP%]::placeholder{color:var(--b-text-hint)}.fb-submit[_ngcontent-%COMP%]{align-self:flex-start;padding:6px 18px;border:none;border-radius:var(--b-radius-pill);background:var(--b-primary);color:#fff;font-size:.83rem;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:4px}.fb-submit[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.fb-skip[_ngcontent-%COMP%]{align-self:flex-start;border:none;background:transparent;color:var(--b-text-hint);font-size:.75rem;cursor:pointer;padding:0}.fb-skip[_ngcontent-%COMP%]:hover{color:var(--b-text-secondary)}.fb-thanks[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.88rem;color:var(--b-text-primary)}.fb-thanks[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px;color:#4caf50;font-variation-settings:"FILL" 1}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.spinning[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite}'],changeDetection:0})};function ya(n,r){if(n&1){let t=M();a(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),l(4,"cookie"),o(),a(5,"div")(6,"p",4),l(7),p(8,"translate"),o(),a(9,"p",5),l(10),p(11,"translate"),o()()(),a(12,"div",6)(13,"label",7)(14,"span",8),l(15),p(16,"translate"),o(),T(17,"input",9),a(18,"span",10),l(19,"lock"),o()(),a(20,"label",7)(21,"span",8),l(22),p(23,"translate"),o(),a(24,"input",11),U("ngModelChange",function(i){u(t);let c=m();return K(c.analyticsOn,i)||(c.analyticsOn=i),_(i)}),o()(),a(25,"label",7)(26,"span",8),l(27),p(28,"translate"),o(),a(29,"input",11),U("ngModelChange",function(i){u(t);let c=m();return K(c.adsOn,i)||(c.adsOn=i),_(i)}),o()()(),a(30,"div",12)(31,"button",13),b("click",function(){u(t);let i=m();return _(i.chooseEssential())}),l(32),p(33,"translate"),o(),a(34,"button",14),b("click",function(){u(t);let i=m();return _(i.acceptSelected())}),l(35),p(36,"translate"),o(),a(37,"button",15),b("click",function(){u(t);let i=m();return _(i.acceptAll())}),l(38),p(39,"translate"),o()()()()}if(n&2){let t=m();s(7),x(h(8,10,"COOKIE.TITLE")),s(3),x(h(11,12,"COOKIE.BODY")),s(5),x(h(16,14,"COOKIE.ESSENTIAL")),s(7),x(h(23,16,"COOKIE.ANALYTICS")),s(2),Q("ngModel",t.analyticsOn),s(3),x(h(28,18,"COOKIE.ADVERTISING")),s(2),Q("ngModel",t.adsOn),s(3),O(" ",h(33,20,"COOKIE.ESSENTIAL_ONLY")," "),s(3),O(" ",h(36,22,"COOKIE.ACCEPT_SELECTED")," "),s(3),O(" ",h(39,24,"COOKIE.ACCEPT_ALL")," ")}}var on="barmha_cookie_consent",le=class n{visible=k(!1);analyticsOn=!0;adsOn=!0;ngOnInit(){localStorage.getItem(on)||this.visible.set(!0)}acceptAll(){this._save({analytics:!0,ads:!0})}acceptSelected(){this._save({analytics:this.analyticsOn,ads:this.adsOn})}chooseEssential(){this._save({analytics:!1,ads:!1})}_save(r){localStorage.setItem(on,JSON.stringify(r)),this.visible.set(!1),this._updateConsent(r)}_updateConsent(r){let t=window.gtag;typeof t=="function"&&t("consent","update",{analytics_storage:r.analytics?"granted":"denied",ad_storage:r.ads?"granted":"denied",ad_user_data:r.ads?"granted":"denied",ad_personalization:r.ads?"granted":"denied"})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-cookie-consent"]],decls:1,vars:1,consts:[["role","dialog","aria-modal","true",1,"consent-backdrop"],[1,"consent-bar"],[1,"consent-text"],[1,"consent-icon","material-symbols-outlined"],[1,"consent-title"],[1,"consent-body"],[1,"consent-toggles"],[1,"toggle-row"],[1,"toggle-label"],["type","checkbox","checked","","disabled","",1,"toggle-check"],[1,"toggle-lock","material-symbols-outlined"],["type","checkbox",1,"toggle-check",3,"ngModelChange","ngModel"],[1,"consent-actions"],[1,"btn-essential",3,"click"],[1,"btn-accept",3,"click"],[1,"btn-all",3,"click"]],template:function(t,e){t&1&&f(0,ya,40,26,"div",0),t&2&&v(e.visible()?0:-1)},dependencies:[pt,ii,dt,mt,J],styles:['@charset "UTF-8";.consent-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:2000;pointer-events:none;display:flex;align-items:flex-end;padding:16px}.consent-bar[_ngcontent-%COMP%]{pointer-events:all;width:100%;max-width:860px;margin:0 auto;background:var(--b-surface);border:1px solid var(--b-border);border-radius:16px;box-shadow:0 8px 32px #0000002e;padding:18px 20px;display:flex;gap:16px;align-items:center;flex-wrap:wrap}@media(max-width:640px){.consent-bar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;border-radius:12px}}.consent-text[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:flex-start;flex:1;min-width:200px}.consent-icon[_ngcontent-%COMP%]{font-size:28px;color:var(--b-primary);flex-shrink:0;margin-top:2px}.consent-title[_ngcontent-%COMP%]{margin:0 0 4px;font-size:.95rem;font-weight:600;color:var(--b-text)}.consent-body[_ngcontent-%COMP%]{margin:0;font-size:.8rem;color:var(--b-text-secondary);line-height:1.45}.consent-toggles[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;flex-shrink:0}.toggle-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.82rem;color:var(--b-text)}.toggle-check[_ngcontent-%COMP%]{width:16px;height:16px;accent-color:var(--b-primary);cursor:pointer}.toggle-check[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.5}.toggle-lock[_ngcontent-%COMP%]{font-size:14px;color:var(--b-text-secondary)}.consent-actions[_ngcontent-%COMP%]{display:flex;gap:8px;flex-shrink:0;flex-wrap:wrap;align-items:center}@media(max-width:640px){.consent-actions[_ngcontent-%COMP%]{width:100%}}button[_ngcontent-%COMP%]{border:none;cursor:pointer;border-radius:8px;font-size:.82rem;font-weight:500;padding:8px 14px;transition:opacity .15s;white-space:nowrap}button[_ngcontent-%COMP%]:hover{opacity:.82}@media(max-width:640px){button[_ngcontent-%COMP%]{flex:1}}.btn-essential[_ngcontent-%COMP%]{background:var(--b-surface-variant, #f0f0f0);color:var(--b-text)}.btn-accept[_ngcontent-%COMP%]{background:var(--b-surface-variant, #e0e0e0);color:var(--b-text)}.btn-all[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff}'],changeDetection:0})};var wa=n=>({exact:n}),ka=()=>({exact:!1}),Le=(n,r)=>r.route;function Ca(n,r){if(n&1){let t=M();a(0,"button",38),b("click",function(){u(t),m();let i=bt(2);return _(i.close())}),a(1,"span",24),l(2,"close"),o()()}}function Ma(n,r){if(n&1){let t=M();a(0,"div",9)(1,"mat-form-field",39)(2,"span",40),l(3,"search"),o(),a(4,"input",41),p(5,"translate"),U("ngModelChange",function(i){u(t);let c=m();return K(c.searchQuery,i)||(c.searchQuery=i),_(i)}),b("keyup.enter",function(){u(t);let i=m();return _(i.doSearch())}),o()()()}if(n&2){let t=m();s(4),w("placeholder",h(5,2,"COMMON.SEARCH_PLACEHOLDER")),Q("ngModel",t.searchQuery)}}function Sa(n,r){if(n&1){let t=M();a(0,"a",42),b("click",function(){u(t);let i=m();return _(i.closeMobile())}),a(1,"span",43),l(2),o(),a(3,"span",44),l(4),p(5,"translate"),o()()}if(n&2){let t=r.$implicit;w("routerLink",t.route)("routerLinkActiveOptions",jt(6,wa,!!t.exact)),s(2),x(t.icon),s(2),x(h(5,4,t.labelKey))}}function Oa(n,r){if(n&1&&(a(0,"span",50),l(1),o()),n&2){let t=m(2);s(),x(t.msgUnreadCount()>9?"9+":t.msgUnreadCount())}}function Ea(n,r){if(n&1){let t=M();T(0,"mat-divider",14),a(1,"mat-nav-list",55)(2,"a",56),b("click",function(){u(t);let i=m(2);return _(i.closeMobile())}),a(3,"span",43),l(4,"campaign"),o(),a(5,"span",44),l(6),p(7,"translate"),o()(),a(8,"a",57),b("click",function(){u(t);let i=m(2);return _(i.closeMobile())}),a(9,"span",43),l(10,"flag"),o(),a(11,"span",44),l(12),p(13,"translate"),o()(),a(14,"a",58),b("click",function(){u(t);let i=m(2);return _(i.closeMobile())}),a(15,"span",43),l(16,"star"),o(),a(17,"span",44),l(18),p(19,"translate"),o()(),a(20,"a",59),b("click",function(){u(t);let i=m(2);return _(i.closeMobile())}),a(21,"span",43),l(22,"reviews"),o(),a(23,"span",44),l(24),p(25,"translate"),o()()()}n&2&&(s(6),x(h(7,4,"NAV.ADMIN_ADS")),s(6),x(h(13,6,"NAV.ADMIN_REPORTS")),s(6),x(h(19,8,"NAV.ADMIN_RATINGS")),s(6),x(h(25,10,"NAV.ADMIN_FEEDBACK")))}function Ta(n,r){if(n&1){let t=M();a(0,"mat-nav-list",45)(1,"a",46),b("click",function(){u(t);let i=m();return _(i.closeMobile())}),a(2,"span",43),l(3,"list_alt"),o(),a(4,"span",44),l(5),p(6,"translate"),o()(),a(7,"a",47),b("click",function(){u(t);let i=m();return _(i.closeMobile())}),a(8,"span",43),l(9,"favorite"),o(),a(10,"span",44),l(11),p(12,"translate"),o()(),a(13,"a",48),b("click",function(){u(t);let i=m();return _(i.closeMobile())}),a(14,"span",43),l(15,"chat_bubble"),o(),a(16,"span",49),l(17),p(18,"translate"),f(19,Oa,2,1,"span",50),o()(),a(20,"a",51),b("click",function(){u(t);let i=m();return _(i.closeMobile())}),a(21,"span",43),l(22,"notifications"),o(),a(23,"span",44),l(24),p(25,"translate"),o()(),a(26,"a",52),b("click",function(){u(t);let i=m();return _(i.closeMobile())}),a(27,"span",43),l(28,"notifications_active"),o(),a(29,"span",44),l(30),p(31,"translate"),o()(),a(32,"a",53),b("click",function(){u(t);let i=m();return _(i.closeMobile())}),a(33,"span",43),l(34,"person"),o(),a(35,"span",44),l(36),p(37,"translate"),o()()(),f(38,Ea,26,12),T(39,"mat-divider",14),a(40,"mat-nav-list",10)(41,"a",54),b("click",function(){u(t);let i=m();return _(i.logout())}),a(42,"span",43),l(43,"logout"),o(),a(44,"span",44),l(45),p(46,"translate"),o()()()}if(n&2){let t,e=m();s(5),x(h(6,9,"NAV.MY_LISTINGS")),s(6),x(h(12,11,"NAV.FAVOURITES")),s(6),O(" ",h(18,13,"NAV.MESSAGES")," "),s(2),v(e.msgUnreadCount()>0?19:-1),s(5),x(h(25,15,"NAV.NOTIFICATIONS")),s(6),x(h(31,17,"NAV.AREA_ALERTS")),s(6),x(h(37,19,"NAV.PROFILE")),s(2),v((t=e.auth.currentUser())!=null&&t.is_staff?38:-1),s(7),x(h(46,21,"AUTH.LOGOUT"))}}function Pa(n,r){if(n&1){let t=M();a(0,"div",15)(1,"a",60),b("click",function(){u(t);let i=m();return _(i.closeMobile())}),l(2),p(3,"translate"),o(),a(4,"a",61),b("click",function(){u(t);let i=m();return _(i.closeMobile())}),l(5),p(6,"translate"),o()()}n&2&&(s(2),O(" ",h(3,2,"AUTH.LOGIN")," "),s(3),O(" ",h(6,4,"AUTH.REGISTER")," "))}function Da(n,r){if(n&1&&(a(0,"mat-option",29)(1,"span",62),l(2),o(),l(3),o()),n&2){let t=r.$implicit;w("value",t.label),s(2),x(t.icon),s(),O(" ",t.label," ")}}function Ia(n,r){if(n&1){let t=M();a(0,"div",30)(1,"button",63),p(2,"translate"),b("click",function(){u(t);let i=m(),c=bt(2);return _(i.onMenuClick(c))}),a(3,"span",24),l(4,"menu"),o()(),a(5,"a",64),T(6,"app-brand",65),o()()}if(n&2){let t=m();s(),E("aria-label",h(2,3,"NAV.MENU")),s(4),y("mobile-logo",t.isMobile())}}function Aa(n,r){if(n&1){let t=M();a(0,"button",70),b("click",function(){u(t);let i=m(2);return _(i.clearSearch())}),a(1,"span",24),l(2,"close"),o()()}}function La(n,r){if(n&1){let t=M();a(0,"div",31)(1,"div",66)(2,"span",67),l(3,"search"),o(),a(4,"input",68),p(5,"translate"),U("ngModelChange",function(i){u(t);let c=m();return K(c.searchQuery,i)||(c.searchQuery=i),_(i)}),b("input",function(){u(t);let i=m();return _(i.onSearchInput())})("keyup.enter",function(){u(t);let i=m();return _(i.doSearch())})("focus",function(){u(t);let i=m();return _(i.searchFocused=!0)})("blur",function(){u(t);let i=m();return _(i.searchFocused=!1)}),o(),f(6,Aa,3,0,"button",69),o()()}if(n&2){let t=m(),e=bt(48);s(),y("focused",t.searchFocused),s(3),w("placeholder",h(5,6,"COMMON.SEARCH_PLACEHOLDER")),Q("ngModel",t.searchQuery),w("matAutocomplete",e),s(2),v(t.searchQuery?6:-1)}}function Ba(n,r){if(n&1){let t=M();a(0,"div",32)(1,"div",71)(2,"span",67),l(3,"search"),o(),a(4,"input",72),p(5,"translate"),U("ngModelChange",function(i){u(t);let c=m();return K(c.searchQuery,i)||(c.searchQuery=i),_(i)}),b("input",function(){u(t);let i=m();return _(i.onSearchInput())})("keyup.enter",function(){u(t);let i=m();return _(i.doSearch())})("keyup.escape",function(){u(t);let i=m();return _(i.closeSearch())}),o(),a(6,"button",70),b("click",function(){u(t);let i=m();return _(i.closeSearch())}),a(7,"span",24),l(8,"close"),o()()()()}if(n&2){let t=m(),e=bt(48);s(4),w("placeholder",h(5,3,"COMMON.SEARCH_PLACEHOLDER")),Q("ngModel",t.searchQuery),w("matAutocomplete",e)}}function Ra(n,r){n&1&&(a(0,"a",73)(1,"span",24),l(2,"add"),o(),l(3),p(4,"translate"),o()),n&2&&(s(3),O(" ",h(4,1,"ACTIONS.POST_AD")," "))}function Fa(n,r){if(n&1){let t=M();a(0,"button",63),p(1,"translate"),b("click",function(){u(t);let i=m(2);return _(i.openSearch())}),a(2,"span",24),l(3,"search"),o()()}n&2&&E("aria-label",h(1,1,"COMMON.SEARCH"))}function za(n,r){if(n&1&&(a(0,"a",75),p(1,"translate"),a(2,"span",24),l(3,"chat_bubble"),o()()),n&2){let t=m(2);w("matTooltip",h(1,3,"NAV.MESSAGES"))("matBadge",t.msgUnreadCount()>0?t.msgUnreadCount()>9?"9+":t.msgUnreadCount().toString():"")("matBadgeHidden",t.msgUnreadCount()===0)}}function Va(n,r){if(n&1){let t=M();a(0,"button",79),p(1,"translate"),b("click",function(){u(t);let i=m(2);return _(i.pwaInstall.promptInstall())}),a(2,"span",24),l(3,"install_mobile"),o()()}n&2&&w("matTooltip",h(1,1,"ACTIONS.INSTALL_APP"))}function Na(n,r){if(n&1&&T(0,"img",81),n&2){let t=m(3);w("src",t.auth.currentUser().avatar_thumbnail,Ve)("alt",t.auth.currentUser().first_name||"profile")}}function ja(n,r){n&1&&(a(0,"span",24),l(1,"account_circle"),o())}function Ha(n,r){n&1&&(T(0,"mat-divider"),a(1,"a",89)(2,"span",84),l(3,"campaign"),o(),l(4),p(5,"translate"),o(),a(6,"a",90)(7,"span",84),l(8,"flag"),o(),l(9),p(10,"translate"),o(),a(11,"a",91)(12,"span",84),l(13,"star"),o(),l(14),p(15,"translate"),o(),a(16,"a",92)(17,"span",84),l(18,"reviews"),o(),l(19),p(20,"translate"),o()),n&2&&(s(4),O(" ",h(5,4,"NAV.ADMIN_ADS")," "),s(5),O(" ",h(10,6,"NAV.ADMIN_REPORTS")," "),s(5),O(" ",h(15,8,"NAV.ADMIN_RATINGS")," "),s(5),O(" ",h(20,10,"NAV.ADMIN_FEEDBACK")," "))}function Wa(n,r){if(n&1){let t=M();a(0,"button",80),p(1,"translate"),f(2,Na,1,2,"img",81)(3,ja,2,0,"span",24),o(),a(4,"mat-menu",82,2)(6,"a",83)(7,"span",84),l(8,"person"),o(),l(9),p(10,"translate"),o(),a(11,"a",85)(12,"span",84),l(13,"list_alt"),o(),l(14),p(15,"translate"),o(),a(16,"a",86)(17,"span",84),l(18,"favorite"),o(),l(19),p(20,"translate"),o(),a(21,"a",87)(22,"span",84),l(23,"notifications"),o(),l(24),p(25,"translate"),o(),f(26,Ha,21,12),T(27,"mat-divider"),a(28,"button",88),b("click",function(){u(t);let i=m(2);return _(i.logout())}),a(29,"span",84),l(30,"logout"),o(),l(31),p(32,"translate"),o()()}if(n&2){let t,e,i=bt(5),c=m(2);w("matMenuTriggerFor",i)("matTooltip",h(1,9,"NAV.ACCOUNT")),s(2),v((t=c.auth.currentUser())!=null&&t.avatar_thumbnail?2:3),s(7),O(" ",h(10,11,"NAV.PROFILE")," "),s(5),O(" ",h(15,13,"NAV.MY_LISTINGS")," "),s(5),O(" ",h(20,15,"NAV.FAVOURITES")," "),s(5),O(" ",h(25,17,"NAV.NOTIFICATIONS")," "),s(2),v((e=c.auth.currentUser())!=null&&e.is_staff?26:-1),s(5),O(" ",h(32,19,"AUTH.LOGOUT")," ")}}function Qa(n,r){n&1&&(a(0,"a",78),l(1),p(2,"translate"),o()),n&2&&(s(),x(h(2,1,"AUTH.LOGIN")))}function Ka(n,r){if(n&1&&(f(0,Ra,5,3,"a",73),f(1,Fa,4,3,"button",74),f(2,za,4,5,"a",75),a(3,"a",76),p(4,"translate"),a(5,"span",24),l(6,"tune"),o()(),f(7,Va,4,3,"button",77),f(8,Wa,33,21)(9,Qa,3,3,"a",78)),n&2){let t=m();v(t.isMobile()?-1:0),s(),v(t.isMobile()?1:-1),s(),v(t.auth.isLoggedIn()&&!t.isMobile()?2:-1),s(),w("matTooltip",h(4,6,"SETTINGS.TITLE")),s(4),v(t.pwaInstall.canInstall()?7:-1),s(),v(t.auth.isLoggedIn()?8:9)}}function Ua(n,r){if(n&1&&(a(0,"span",98),l(1),o()),n&2){let t=m().$implicit,e=m(2);s(),O("(",e.fmtCount(e.sectionCounts()[t.countKey]),")")}}function Ga(n,r){if(n&1&&(a(0,"a",95)(1,"span",96),l(2),o(),a(3,"span",97),l(4),p(5,"translate"),o(),f(6,Ua,2,1,"span",98),o()),n&2){let t=r.$implicit,e=m(2);w("routerLink",t.route)("routerLinkActiveOptions",Nt(7,ka)),s(2),x(t.icon),s(2),x(h(5,5,t.labelKey)),s(2),v(e.fmtCount(e.sectionCounts()[t.countKey])?6:-1)}}function Ya(n,r){if(n&1&&(a(0,"nav",34)(1,"div",93),T(2,"app-governorate-select",94),Y(3,Ga,7,8,"a",95,Le),o()()),n&2){let t=m();s(2),w("compact",!0),s(),q(t.NAV_SECTIONS)}}function qa(n,r){if(n&1){let t=M();a(0,"div",35)(1,"span",24),l(2,"mark_email_unread"),o(),a(3,"span"),l(4),p(5,"translate"),o(),a(6,"button",99),b("click",function(){u(t);let i=m();return _(i.resendActivation())}),l(7),p(8,"translate"),p(9,"translate"),o()()}if(n&2){let t=m();s(4),x(h(5,3,"AUTH.VERIFY_EMAIL_BANNER")),s(2),w("disabled",t.resendSent()),s(),O(" ",t.resendSent()?h(8,5,"AUTH.SENT"):h(9,7,"AUTH.RESEND_ACTIVATION")," ")}}var rn=class n{_destroyRef=d(ze);theme=d(Fi);auth=d(Qt);NAV_SECTIONS=[{route:"/properties",labelKey:"NAV.PROPERTIES",icon:"apartment",countKey:"properties"},{route:"/vehicles",labelKey:"NAV.VEHICLES",icon:"directions_car",countKey:"vehicles"},{route:"/classifieds",labelKey:"NAV.CLASSIFIEDS",icon:"sell",countKey:"classifieds"},{route:"/jobs",labelKey:"NAV.JOBS",icon:"work",countKey:"jobs"},{route:"/services",labelKey:"NAV.SERVICES",icon:"handyman",countKey:"services"},{route:"/deals",labelKey:"NAV.DEALS",icon:"local_offer",countKey:"deals"},{route:"/events",labelKey:"NAV.EVENTS",icon:"event",countKey:"events"},{route:"/news",labelKey:"NAV.NEWS",icon:"newspaper",countKey:"news"}];sectionCounts=k({});fmtCount(r){return r?r>=1e6?(r/1e6).toFixed(1).replace(/\.0$/,"")+"M":r>=1e3?(r/1e3).toFixed(1).replace(/\.0$/,"")+"K":String(r):""}resendActivation(){if(this.resendSent())return;let r=this.auth.currentUser();r?.email&&this.api.post("/accounts/activate/resend/",{email:r.email}).subscribe({next:()=>this.resendSent.set(!0),error:()=>this.resendSent.set(!0)})}pwaInstall=d(Ni);notif=d($t);api=d(yt);locSvc=d(Vi);router=d(xt);unreadCount=this.notif.unreadCount;msgUnreadCount=d(zi).unreadCount;searchQuery="";searchFocused=!1;suggestions=k([]);scrolled=k(!1);navHidden=k(!1);isMobile=k(!1);searchOpen=k(!1);sidenavOpen=k(!1);resendSent=k(!1);isMapRoute=k(!1);_lastScrollY=0;_scrollEl=null;searchSubject=new B;sectionIcons={properties:"apartment",vehicles:"directions_car",classifieds:"sell",jobs:"work",services:"build",deals:"local_offer",events:"event",news:"newspaper"};mainSections=[{labelKey:"NAV.HOME",icon:"home",route:"/",exact:!0},{labelKey:"NAV.MAP",icon:"map",route:"/map"},{labelKey:"NAV.PROPERTIES",icon:"apartment",route:"/properties"},{labelKey:"NAV.VEHICLES",icon:"directions_car",route:"/vehicles"},{labelKey:"NAV.CLASSIFIEDS",icon:"sell",route:"/classifieds"},{labelKey:"NAV.JOBS",icon:"work",route:"/jobs"},{labelKey:"NAV.SERVICES",icon:"build",route:"/services"},{labelKey:"NAV.DEALS",icon:"local_offer",route:"/deals"},{labelKey:"NAV.EVENTS",icon:"event",route:"/events"},{labelKey:"NAV.NEWS",icon:"newspaper",route:"/news"}];constructor(){be(()=>{this.auth.currentUser()?this.notif.startPolling():this.notif.stopPolling()}),this.checkMobile(),this.locSvc.loadGovernorates().subscribe(),this.isMapRoute.set(this.router.url.startsWith("/map")),this.router.events.pipe(F(t=>t instanceof vt),Kt(this._destroyRef)).subscribe(t=>{let e=t.urlAfterRedirects.startsWith("/map");this.isMapRoute.set(e),e||(this.navHidden.set(!1),this._scrollEl?.style.setProperty("--nav-offset","100px"))}),be(()=>{let t=this.locSvc.selectedGovernorate(),e={};t&&(e.governorate=String(t)),this.api.get("/core/section-counts/",e).pipe(Et(()=>et({})),Kt(this._destroyRef)).subscribe(i=>this.sectionCounts.set(i))}),this.searchSubject.pipe(Bt(300),Fe(),Tt(t=>t.trim().length<2?et([]):this.api.get("/core/search/",{q:t,suggest:"1"}).pipe(Et(()=>et([])))),Kt(this._destroyRef)).subscribe(t=>{this.suggestions.set(t.slice(0,8).map(e=>({label:e.title??e.translations?.ar?.title??e.translations?.en?.title??"",icon:this.sectionIcons[e.section]??"search",route:e.url??`/${e.section}/${e.id}`})).filter(e=>e.label))});let r=document.getElementById("app-loader");r&&(r.classList.add("fade-out"),r.addEventListener("transitionend",()=>r.remove(),{once:!0}))}onResize(){this.checkMobile()}checkMobile(){this.isMobile.set(window.innerWidth<960)}onContentScroll(r){if(this.isMapRoute())return;let t=this._scrollEl=r.target,e=t.scrollTop,i=e-this._lastScrollY;i>6&&e>80?this.navHidden.set(!0):i<-6&&this.navHidden.set(!1),t.style.setProperty("--nav-offset",this.navHidden()?"0px":"100px"),this.scrolled.set(e>8),this._lastScrollY=e}onSearchInput(){this.searchSubject.next(this.searchQuery)}doSearch(){let r=this.searchQuery.trim();r&&(this.router.navigate(["/search"],{queryParams:{q:r}}),this.suggestions.set([]),this.searchQuery="")}onSuggestionSelect(r){let t=this.suggestions().find(e=>e.label===r.option.value);t&&this.router.navigate([t.route]),this.searchQuery="",this.suggestions.set([]),this.searchSubject.next("")}clearSearch(){this.searchQuery="",this.suggestions.set([]),this.searchSubject.next("")}openSearch(){this.searchOpen.set(!0),setTimeout(()=>{document.querySelector(".mobile-search-input")?.focus()},50)}closeSearch(){this.searchOpen.set(!1),this.clearSearch()}toggleLang(){let r=this.theme.isRtl()?"en":"ar";this.theme.setLang(r),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},50)}onMenuClick(r){this.isMobile()?r.toggle():this.sidenavOpen.update(t=>!t)}logout(){this.auth.logout()}closeMobile(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-shell"]],hostBindings:function(t,e){t&1&&b("resize",function(){return e.onResize()},Ne)},decls:64,vars:43,consts:[["sidenav",""],["searchAuto","matAutocomplete"],["accountMenu","matMenu"],[1,"shell-container",3,"hasBackdrop","dir"],["fixedTopGap","0",1,"side-nav",3,"mode","opened","fixedInViewport"],[1,"sidenav-logo"],["routerLink","/",1,"logo-link",3,"click"],["size","md"],["mat-icon-button","",1,"close-btn"],[1,"sidenav-search"],[1,"sidenav-list"],["mat-list-item","","routerLinkActive","active-link",1,"nav-list-item",3,"routerLink","routerLinkActiveOptions"],[1,"gov-filter"],[1,"gov-filter-label"],[1,"sidenav-divider"],[1,"auth-btns"],[1,"sidenav-footer-links"],["routerLink","/legal/terms",3,"click"],[1,"footer-sep"],["routerLink","/legal/privacy",3,"click"],["routerLink","/contact",3,"click"],["routerLink","/help",3,"click"],[1,"sidenav-bottom"],["mat-button","","routerLink","/settings",1,"settings-link",3,"click"],[1,"material-symbols-outlined"],[1,"shell-content",3,"scroll"],[1,"sticky-bars"],[1,"top-bar"],[3,"optionSelected"],[3,"value"],[1,"toolbar-left"],[1,"toolbar-center"],[1,"toolbar-search-mobile"],[1,"toolbar-spacer"],["aria-label","sections",1,"section-nav"],[1,"verify-banner"],[1,"page-content"],[3,"scrollHidden"],["mat-icon-button","",1,"close-btn",3,"click"],["appearance","outline","subscriptSizing","dynamic",1,"search-field"],["matPrefix","",1,"material-symbols-outlined","search-icon-pre"],["matInput","","autocomplete","off",3,"ngModelChange","keyup.enter","placeholder","ngModel"],["mat-list-item","","routerLinkActive","active-link",1,"nav-list-item",3,"click","routerLink","routerLinkActiveOptions"],["matListItemIcon","",1,"material-symbols-outlined","nav-icon"],["matListItemTitle",""],[1,"sidenav-list","user-section"],["mat-list-item","","routerLink","/dashboard/listings","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/dashboard/favourites","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/messages","routerLinkActive","active-link",3,"click"],["matListItemTitle","",1,"msg-title"],[1,"sidenav-badge"],["mat-list-item","","routerLink","/dashboard/notifications","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/dashboard/area-alerts","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/dashboard/profile","routerLinkActive","active-link",3,"click"],["mat-list-item","",1,"logout-item",3,"click"],[1,"sidenav-list","admin-section"],["mat-list-item","","routerLink","/admin/ads","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/admin/reports","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/admin/ratings","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/admin/feedback","routerLinkActive","active-link",3,"click"],["mat-flat-button","","routerLink","/auth/login","color","primary",1,"auth-btn",3,"click"],["mat-stroked-button","","routerLink","/auth/register",1,"auth-btn",3,"click"],[1,"material-symbols-outlined","sugg-icon"],["mat-icon-button","",3,"click"],["routerLink","/",1,"toolbar-logo"],["size","sm"],[1,"search-pill"],[1,"material-symbols-outlined","sp-icon"],["autocomplete","off",1,"sp-input",3,"ngModelChange","input","keyup.enter","focus","blur","placeholder","ngModel","matAutocomplete"],[1,"sp-clear"],[1,"sp-clear",3,"click"],[1,"search-pill","focused"],["autocomplete","off",1,"sp-input","mobile-search-input",3,"ngModelChange","input","keyup.enter","keyup.escape","placeholder","ngModel","matAutocomplete"],["mat-flat-button","","routerLink","/post",1,"post-btn"],["mat-icon-button",""],["mat-icon-button","","routerLink","/messages","matBadgeColor","accent","matBadgeSize","small",1,"tb-btn",3,"matTooltip","matBadge","matBadgeHidden"],["mat-icon-button","","routerLink","/settings",1,"tb-btn",3,"matTooltip"],["mat-icon-button","",1,"tb-btn",3,"matTooltip"],["mat-button","","routerLink","/auth/login",1,"login-btn"],["mat-icon-button","",1,"tb-btn",3,"click","matTooltip"],["mat-icon-button","",1,"tb-btn","profile-btn",3,"matMenuTriggerFor","matTooltip"],[1,"toolbar-avatar",3,"src","alt"],["xPosition","before"],["mat-menu-item","","routerLink","/dashboard/profile"],[1,"material-symbols-outlined","menu-icon"],["mat-menu-item","","routerLink","/dashboard/listings"],["mat-menu-item","","routerLink","/dashboard/favourites"],["mat-menu-item","","routerLink","/dashboard/notifications"],["mat-menu-item","",3,"click"],["mat-menu-item","","routerLink","/admin/ads",1,"admin-menu-item"],["mat-menu-item","","routerLink","/admin/reports",1,"admin-menu-item"],["mat-menu-item","","routerLink","/admin/ratings",1,"admin-menu-item"],["mat-menu-item","","routerLink","/admin/feedback",1,"admin-menu-item"],[1,"section-nav-inner"],[3,"compact"],["routerLinkActive","sn-chip--active",1,"sn-chip",3,"routerLink","routerLinkActiveOptions"],[1,"material-symbols-outlined","sn-icon"],[1,"sn-label"],[1,"sn-count"],[1,"resend-btn",3,"click","disabled"]],template:function(t,e){t&1&&(a(0,"mat-sidenav-container",3)(1,"mat-sidenav",4,0)(3,"div",5)(4,"a",6),b("click",function(){return e.closeMobile()}),T(5,"app-brand",7),o(),f(6,Ca,3,0,"button",8),o(),f(7,Ma,6,4,"div",9),a(8,"mat-nav-list",10),Y(9,Sa,6,8,"a",11,Le),o(),a(11,"div",12)(12,"div",13),l(13),p(14,"translate"),o(),T(15,"app-governorate-select"),o(),T(16,"mat-divider",14),f(17,Ta,47,23)(18,Pa,7,6,"div",15),a(19,"div",16)(20,"a",17),b("click",function(){return e.closeMobile()}),l(21),p(22,"translate"),o(),a(23,"span",18),l(24,"\xB7"),o(),a(25,"a",19),b("click",function(){return e.closeMobile()}),l(26),p(27,"translate"),o(),a(28,"span",18),l(29,"\xB7"),o(),a(30,"a",20),b("click",function(){return e.closeMobile()}),l(31),p(32,"translate"),o(),a(33,"span",18),l(34,"\xB7"),o(),a(35,"a",21),b("click",function(){return e.closeMobile()}),l(36),p(37,"translate"),o()(),a(38,"div",22)(39,"a",23),b("click",function(){return e.closeMobile()}),a(40,"span",24),l(41,"tune"),o(),l(42),p(43,"translate"),o()()(),a(44,"mat-sidenav-content",25),b("scroll",function(c){return e.onContentScroll(c)}),a(45,"div",26)(46,"mat-toolbar",27)(47,"mat-autocomplete",28,1),b("optionSelected",function(c){return e.onSuggestionSelect(c)}),Y(49,Da,4,3,"mat-option",29,Le),o(),f(51,Ia,7,5,"div",30),f(52,La,7,8,"div",31),f(53,Ba,9,5,"div",32),T(54,"span",33),f(55,Ka,10,8),o(),f(56,Ya,5,1,"nav",34),o(),f(57,qa,10,9,"div",35),a(58,"main",36),T(59,"router-outlet"),o(),T(60,"app-bottom-nav",37),o()(),T(61,"app-chatbot-widget")(62,"app-feedback-widget")(63,"app-cookie-consent")),t&2&&(w("hasBackdrop",e.isMobile())("dir",e.theme.isRtl()?"rtl":"ltr"),s(),w("mode",e.isMobile()?"over":"side")("opened",!e.isMobile()&&e.sidenavOpen())("fixedInViewport",!0),s(5),v(e.isMobile()?6:-1),s(),v(e.isMobile()?7:-1),s(2),q(e.mainSections),s(4),x(h(14,31,"GOVERNORATE.LABEL")),s(4),v(e.auth.isLoggedIn()?17:18),s(4),x(h(22,33,"NAV.TERMS")),s(5),x(h(27,35,"NAV.PRIVACY")),s(5),x(h(32,37,"NAV.CONTACT")),s(5),x(h(37,39,"NAV.HELP")),s(6),O(" ",h(43,41,"SETTINGS.TITLE")," "),s(2),y("with-sidenav",!e.isMobile()&&e.sidenavOpen())("map-route",e.isMapRoute()),s(),y("bars-hidden",e.navHidden()),s(),y("scrolled",e.scrolled()),s(3),q(e.suggestions()),s(2),v(!e.searchOpen()||!e.isMobile()?51:-1),s(),v(e.isMobile()?-1:52),s(),v(e.isMobile()&&e.searchOpen()?53:-1),s(2),v(!e.searchOpen()||!e.isMobile()?55:-1),s(),v(e.isMapRoute()?-1:56),s(),v(e.auth.currentUser()&&!e.auth.currentUser().email_verified&&!e.auth.currentUser().is_verified?57:-1),s(),y("has-bottom-nav",e.isMobile()),s(2),w("scrollHidden",e.navHidden()&&e.isMobile()))},dependencies:[ti,Ht,Wt,pt,wt,dt,mt,Qi,hi,Me,Wi,te,Ui,Ki,Xi,qi,Yi,Te,Se,Ee,fi,vi,wi,yi,xi,Ci,ki,Li,Ii,Mi,Ai,tn,St,Lt,Ji,an,nn,ie,Ri,Bi,ae,ji,Hi,re,se,le,J],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100vh;overflow:hidden}.shell-container[_ngcontent-%COMP%]{height:100vh}.side-nav[_ngcontent-%COMP%]{width:260px;border-inline-end:1px solid var(--b-border);background:var(--b-surface-card);display:flex;flex-direction:column;overflow-x:hidden}.sidenav-logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:20px 16px 16px;background:transparent;border-bottom:1px solid var(--b-border)}.logo-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--b-primary);font-size:1.2rem;font-weight:700;opacity:.95}.logo-link[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]{letter-spacing:-.3px}.close-btn[_ngcontent-%COMP%]{color:var(--b-text-secondary)!important}.sidenav-search[_ngcontent-%COMP%]{padding:8px 12px}.sidenav-search[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{width:100%}.sidenav-list[_ngcontent-%COMP%]{padding:4px 8px}.nav-list-item[_ngcontent-%COMP%]{border-radius:var(--b-radius-md)!important;margin-bottom:2px;--mdc-list-list-item-label-text-size: .9rem}.nav-list-item.active-link[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--b-primary) 12%,transparent);color:var(--b-primary)}.nav-list-item.active-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-primary);font-variation-settings:"FILL" 1}.nav-icon[_ngcontent-%COMP%]{font-size:20px;color:var(--b-text-secondary);font-variation-settings:"FILL" 1,"wght" 400}.sidenav-divider[_ngcontent-%COMP%]{margin:6px 0}.msg-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.sidenav-badge[_ngcontent-%COMP%]{background:var(--b-accent);color:var(--b-on-accent);font-size:.6rem;font-weight:700;min-width:16px;height:16px;border-radius:var(--b-radius-pill);display:inline-flex;align-items:center;justify-content:center;padding:0 4px}.auth-btns[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:12px 16px}.auth-btns[_ngcontent-%COMP%]   .auth-btn[_ngcontent-%COMP%]{width:100%}.logout-item[_ngcontent-%COMP%], .logout-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-error)!important}.admin-section[_ngcontent-%COMP%]   .nav-list-item[_ngcontent-%COMP%], .admin-section[_ngcontent-%COMP%]   .nav-list-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{color:var(--b-primary)}.admin-menu-item[_ngcontent-%COMP%], .admin-menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{color:var(--b-primary)!important}.sidenav-footer-links[_ngcontent-%COMP%]{padding:10px 16px 2px;display:flex;flex-wrap:wrap;align-items:center;gap:4px 6px;margin-top:auto}.sidenav-footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.75rem;color:var(--b-text-hint);text-decoration:none}.sidenav-footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--b-primary);text-decoration:underline}.sidenav-footer-links[_ngcontent-%COMP%]   .footer-sep[_ngcontent-%COMP%]{font-size:.75rem;color:var(--b-border);-webkit-user-select:none;user-select:none}.sidenav-bottom[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:8px 12px calc(12px + env(safe-area-inset-bottom,0));border-top:1px solid var(--b-border)}.gov-filter[_ngcontent-%COMP%]{padding:4px 12px 8px}.gov-filter-label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600;color:var(--b-text-hint);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.sticky-bars[_ngcontent-%COMP%]{position:sticky;top:0;z-index:50;transform:translateY(0);transition:transform .28s cubic-bezier(.4,0,.2,1);will-change:transform}.sticky-bars.bars-hidden[_ngcontent-%COMP%]{transform:translateY(-100%)}.top-bar[_ngcontent-%COMP%]{position:relative;background:var(--b-primary-dark)!important;border-bottom:none!important;height:56px;min-height:56px;padding:0 12px;gap:6px;transition:box-shadow .2s;box-shadow:var(--b-shadow-sm)}.top-bar.scrolled[_ngcontent-%COMP%]{box-shadow:var(--b-shadow-md)}.dark[_nghost-%COMP%]   .top-bar[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .top-bar[_ngcontent-%COMP%]{background:var(--b-surface)!important}.top-bar[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]{color:#ffffffe0!important}.top-bar[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]:hover{background:#ffffff1a!important}.toolbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px;flex-shrink:0}.toolbar-logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;text-decoration:none;color:#fff;font-size:1.1rem;font-weight:700;white-space:nowrap;padding:0 4px;opacity:.95}.toolbar-center[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);width:min(480px,100vw - 440px);pointer-events:none;display:flex;justify-content:center}[dir=rtl][_nghost-%COMP%]   .toolbar-center[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .toolbar-center[_ngcontent-%COMP%]{left:auto;right:50%;transform:translate(50%)}.search-pill[_ngcontent-%COMP%]{pointer-events:all;display:flex;align-items:center;gap:6px;padding:0 10px 0 14px;height:38px;border-radius:var(--b-radius-pill);background:#ffffff1f;border:1.5px solid rgba(255,255,255,.18);transition:border-color .2s,box-shadow .2s,background .2s;width:100%}.search-pill.focused[_ngcontent-%COMP%]{background:#fff3;border-color:#ffffff73;box-shadow:0 0 0 3px #ffffff1a}.sp-icon[_ngcontent-%COMP%]{font-size:18px;color:#ffffffa6;flex-shrink:0;line-height:1}.sp-input[_ngcontent-%COMP%]{flex:1;min-width:0;border:none;background:transparent;outline:none;font-size:.875rem;color:#fff;font-family:inherit;line-height:1}.sp-input[_ngcontent-%COMP%]::placeholder{color:#ffffff80}.sp-clear[_ngcontent-%COMP%]{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:none;background:transparent;cursor:pointer;color:#ffffffa6;padding:0;transition:background .15s}.sp-clear[_ngcontent-%COMP%]:hover{background:#ffffff26}.sp-clear[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:15px;line-height:1}.toolbar-search-mobile[_ngcontent-%COMP%]{flex:1;padding:0 4px;display:flex;align-items:center}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.post-btn[_ngcontent-%COMP%]{background-color:var(--b-accent)!important;color:var(--b-on-accent)!important;border-radius:var(--b-radius-pill)!important;font-weight:600!important;box-shadow:0 2px 8px color-mix(in srgb,var(--b-accent) 45%,transparent)!important;transition:box-shadow .2s,transform .15s!important}.post-btn[_ngcontent-%COMP%]:hover{box-shadow:0 4px 16px color-mix(in srgb,var(--b-accent) 55%,transparent)!important;transform:translateY(-1px)}.login-btn[_ngcontent-%COMP%]{color:#ffffffe6!important;font-weight:600}.profile-btn[_ngcontent-%COMP%]{padding:0!important;overflow:hidden}.toolbar-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;object-fit:cover;display:block}.settings-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;color:var(--b-text-secondary);font-size:.85rem}@media(min-width:960px){.top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:34px!important;height:34px!important;min-width:34px!important;max-width:34px!important;padding:0!important;border-radius:50%!important;background:#ffffff1f!important;border:1.5px solid rgba(255,255,255,.28)!important;overflow:hidden;transition:background .15s,border-color .15s,transform .15s!important}.top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]:hover{background:#ffffff2e!important;border-color:#ffffff61!important;transform:translateY(-1px)}.top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-persistent-ripple[_ngcontent-%COMP%], .top-bar[_ngcontent-%COMP%]   .tb-btn.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-focus-indicator[_ngcontent-%COMP%]{width:34px!important;height:34px!important;border-radius:50%!important}.top-bar[_ngcontent-%COMP%]   .tb-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px;line-height:1}.top-bar[_ngcontent-%COMP%]   .tb-btn.profile-btn[_ngcontent-%COMP%]{border-radius:50%!important}.toolbar-avatar[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%}}.search-icon-pre[_ngcontent-%COMP%]{font-size:18px;color:var(--b-text-hint);margin-inline-end:4px}.sugg-icon[_ngcontent-%COMP%]{font-size:16px;color:var(--b-text-secondary);margin-inline-end:8px;vertical-align:middle}.menu-icon[_ngcontent-%COMP%]{font-size:18px;margin-inline-end:8px;vertical-align:middle;color:var(--b-text-secondary)}.shell-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow-y:scroll;scrollbar-gutter:stable;background:var(--b-surface-dim)}.section-nav[_ngcontent-%COMP%]{background:var(--b-surface-card);border-bottom:1px solid var(--b-border);position:relative;overflow:hidden}.section-nav-inner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;overflow-x:auto;overflow-y:hidden;padding:7px 12px;scrollbar-width:none}.section-nav-inner[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.section-nav-inner[_ngcontent-%COMP%]{-webkit-mask-image:linear-gradient(to right,transparent 0,black 16px,black calc(100% - 16px),transparent 100%);mask-image:linear-gradient(to right,transparent 0,black 16px,black calc(100% - 16px),transparent 100%)}.sn-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:5px;padding:5px 14px;border-radius:var(--b-radius-pill);text-decoration:none;font-size:.78rem;font-weight:500;color:var(--b-text-secondary);background:transparent;border:1.5px solid transparent;white-space:nowrap;flex-shrink:0;transition:background .15s,color .15s,border-color .15s}.sn-chip[_ngcontent-%COMP%]:hover{background:var(--b-primary-container);color:var(--b-primary-dark);border-color:transparent}.sn-chip--active[_ngcontent-%COMP%]{background:var(--b-primary);color:#fff;font-weight:600;border-color:transparent}.sn-icon[_ngcontent-%COMP%]{font-size:15px;font-variation-settings:"FILL" 1,"wght" 400}.sn-count[_ngcontent-%COMP%]{font-size:.7rem;color:inherit;opacity:.65;margin-inline-start:1px}.verify-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap;background:#fff3cd;color:#664d03;padding:10px 20px;font-size:.83rem;border-bottom:1px solid #ffe69c}.verify-banner[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px;color:#d97c00;flex-shrink:0}.resend-btn[_ngcontent-%COMP%]{margin-inline-start:auto;padding:4px 14px;border:1px solid #d97c00;border-radius:var(--b-radius-pill);background:transparent;color:#d97c00;font-size:.78rem;font-weight:600;cursor:pointer}.resend-btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:default}.page-content[_ngcontent-%COMP%]{flex:1;min-height:0}'],changeDetection:0})};export{rn as ShellComponent};
