import{a as Gt,b as Bt}from"./chunk-V46OHTNU.js";import{f as Nt}from"./chunk-JXR5CUTF.js";import{a as Pn}from"./chunk-7EJVRRZX.js";import{a as Lt}from"./chunk-3NOKS3DP.js";import{a as In}from"./chunk-G4MEUDLA.js";import{a as Ft}from"./chunk-NJI52NWI.js";import{a as kn}from"./chunk-GM7SH4AW.js";import{a as En}from"./chunk-N74KS3XJ.js";import{a as Cn}from"./chunk-ZHHZH7AC.js";import{b as Rt,c as bn,d as At,f as vn,i as Mt,k as oi,m as xn}from"./chunk-2G3T6NXA.js";import{b as yn,e as Sn}from"./chunk-WE7TDRJO.js";import{a as St,b as Zi,c as Et,d as I,e as Ji,g as Ct,h as Pt,l as en,m as It,n as kt,p as tn,q as nn,r as an,s as rn,u as on,v as sn,x as Ue}from"./chunk-55EG65HQ.js";import{b as gn,d as ri}from"./chunk-BRLEWM4I.js";import{D as it,O as fn,P as Ye,S as $e,T as qe,V as Dt,W as Ot,a as ln,b as cn,c as Tt,d as dn,e as tt,f as pn,g as ai,h as ye,i as wt,k as Pe,l as mn,m as He,n as hn,w as _n,y as un,z as Ie}from"./chunk-CGEFWE5H.js";import"./chunk-O34IYIE6.js";import{a as yt}from"./chunk-X432Z7RN.js";import{b as Xi,e as Wi}from"./chunk-L5PCJNFM.js";import{e as Ki}from"./chunk-TZV53DYE.js";import{h as ii,k as xt,s as ni,u as ji}from"./chunk-QU52A6S5.js";import{b as Qi,c as Ce}from"./chunk-NEFOGWMI.js";import{$ as Ne,$b as re,A as Ai,Aa as _e,B as dt,Ba as Ze,Bc as ve,Da as q,Db as G,Dc as Be,Ea as Je,Eb as y,Ec as p,F as Te,Fb as S,Fc as m,Gb as zi,Gc as Y,Hb as gt,I as pt,Ib as C,Ic as ti,Jb as P,Kb as g,Lb as l,Lc as Yi,M as Mi,Mb as o,Mc as ze,Nb as x,Ob as ft,Oc as Ve,Pb as bt,Q as Ni,Qb as et,Qc as $i,Rc as qi,T as he,Tb as ue,U as Ee,Ub as F,V as Z,Vb as ge,Vc as W,Wa as Fe,X as Me,Xa as we,Yb as E,Yc as A,Zc as le,_ as mt,_a as s,_b as b,a as pe,ac as oe,bc as Ge,c as Zt,ca as H,cc as fe,da as Qe,db as Gi,dc as z,e as N,ea as u,eb as De,ec as V,f as Di,fb as ei,gb as Le,gc as Vi,hc as Ui,i as Oi,ic as se,ja as D,jb as ut,jc as Re,ka as O,kc as R,l as U,la as ht,lc as te,m as Ri,ma as Fi,mc as d,na as Jt,nb as L,nc as h,oa as xe,oc as T,pb as X,pc as vt,r as me,ra as M,sa as ne,sb as Oe,ta as _t,tb as ae,ub as Bi,wa as w,x as ct,yc as Hi,za as Li,zc as be}from"./chunk-LDBCEKYW.js";import{a as ee,b as de}from"./chunk-C6Q5SG76.js";var Ia=["*"];function ka(a,i){a&1&&oe(0)}var si=(()=>{class a{_elementRef=u(q);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=X({type:a,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return a})(),li=(()=>{class a{template=u(De);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=X({type:a,selectors:[["","cdkStepLabel",""]]})}return a})();var Ae={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},Ta=new H("STEPPER_GLOBAL_OPTIONS"),zt=(()=>{class a{_stepperOptions;_stepper=u(Xe);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=w(!1);interactedStream=new M;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=w(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=w(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=w(null);index=w(-1);isSelected=ze(()=>this._stepper.selectedIndex===this.index());indicatorType=ze(()=>{let e=this.isSelected(),t=this.completed,n=this._state()??Ae.NUMBER,r=this._editable();return this._showError()&&this.hasError&&!e?Ae.ERROR:this._displayDefaultIndicatorType?!t||e?Ae.NUMBER:r?Ae.EDIT:Ae.DONE:t&&!e?Ae.DONE:t&&e?n:r&&e?Ae.EDIT:n});isNavigable=ze(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=w(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=u(Ta,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["cdk-step"]],contentQueries:function(t,n,r){if(t&1&&Ge(r,li,5)(r,Ji,5),t&2){let c;z(c=V())&&(n.stepLabel=c.first),z(c=V())&&(n._childForms=c)}},viewQuery:function(t,n){if(t&1&&fe(De,7),t&2){let r;z(r=V())&&(n.content=r.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",A],optional:[2,"optional","optional",A],completed:[2,"completed","completed",A],hasError:[2,"hasError","hasError",A]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[_e],ngContentSelectors:Ia,decls:1,vars:0,template:function(t,n){t&1&&(re(),Bi(0,ka,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return a})(),Xe=(()=>{class a{_dir=u(it,{optional:!0});_changeDetectorRef=u(W);_elementRef=u(q);_destroyed=new N;_keyManager;_steps;steps=new Je;_stepHeader;_sortedHeaders=new Je;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=w(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=w(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new M;selectedIndexChange=new M;_groupId=u(Ie).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(he(this._steps),Z(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,n)=>t.index.set(n)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(he(this._stepHeader),Z(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,n)=>t._elementRef.nativeElement.compareDocumentPosition(n._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new un(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:U()).pipe(he(this._layoutDirection()),Z(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),n=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:n,selectedStep:t[e],previouslySelectedStep:t[n]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=_n(e),n=e.keyCode,r=this._keyManager;r?.activeItemIndex!=null&&!t&&(n===32||n===13)?(this.selectedIndex=r.activeItemIndex,e.preventDefault()):r?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let n=t.stepControl;return(n?n.invalid||n.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=dn();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=X({type:a,selectors:[["","cdkStepper",""]],contentQueries:function(t,n,r){if(t&1&&Ge(r,zt,5)(r,si,5),t&2){let c;z(c=V())&&(n._steps=c),z(c=V())&&(n._stepHeader=c)}},inputs:{linear:[2,"linear","linear",A],selectedIndex:[2,"selectedIndex","selectedIndex",le],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return a})(),Tn=(()=>{class a{_stepper=u(Xe);type="submit";constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=X({type:a,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,n){t&1&&E("click",function(){return n._stepper.next()}),t&2&&ge("type",n.type)},inputs:{type:"type"}})}return a})(),wn=(()=>{class a{_stepper=u(Xe);type="button";constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=X({type:a,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,n){t&1&&E("click",function(){return n._stepper.previous()}),t&2&&ge("type",n.type)},inputs:{type:"type"}})}return a})();function Dn(a){return Error(`Unable to find icon with the name "${a}"`)}function wa(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function On(a){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${a}".`)}function Rn(a){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${a}".`)}var Se=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Mn=(()=>{class a{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,n,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=n}addSvgIcon(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}addSvgIconInNamespace(e,t,n,r){return this._addSvgIconConfig(e,t,new Se(n,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,r){let c=this._sanitizer.sanitize(Fe.HTML,n);if(!c)throw Rn(n);let _=He(c);return this._addSvgIconConfig(e,t,new Se("",_,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new Se(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let r=this._sanitizer.sanitize(Fe.HTML,t);if(!r)throw Rn(t);let c=He(r);return this._addSvgIconSetConfig(e,new Se("",c,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Fe.RESOURCE_URL,e);if(!t)throw On(e);let n=this._cachedIconsByUrl.get(t);return n?U(Vt(n)):this._loadSvgIconFromConfig(new Se(e,null)).pipe(Me(r=>this._cachedIconsByUrl.set(t,r)),me(r=>Vt(r)))}getNamedSvgIcon(e,t=""){let n=An(t,e),r=this._svgIconConfigs.get(n);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(n,r),this._getSvgFromConfig(r);let c=this._iconSetConfigs.get(t);return c?this._getSvgFromIconSetConfigs(e,c):Ri(Dn(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?U(Vt(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(me(t=>Vt(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return U(n);let r=t.filter(c=>!c.svgText).map(c=>this._loadSvgIconSetFromConfig(c).pipe(Te(_=>{let v=`Loading icon set URL: ${this._sanitizer.sanitize(Fe.RESOURCE_URL,c.url)} failed: ${_.message}`;return this._errorHandler.handleError(new Error(v)),U(null)})));return ct(r).pipe(me(()=>{let c=this._extractIconWithNameFromAnySet(e,t);if(!c)throw Dn(e);return c}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let r=t[n];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let c=this._svgElementFromConfig(r),_=this._extractSvgIconFromSet(c,e,r.options);if(_)return _}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Me(t=>e.svgText=t),me(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?U(null):this._fetchIcon(e).pipe(Me(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let c=r.cloneNode(!0);if(c.removeAttribute("id"),c.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(c,n);if(c.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(c),n);let _=this._svgElementFromString(He("<svg></svg>"));return _.appendChild(c),this._setSvgAttributes(_,n)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(e){let t=this._svgElementFromString(He("<svg></svg>")),n=e.attributes;for(let r=0;r<n.length;r++){let{name:c,value:_}=n[r];c!=="id"&&t.setAttribute(c,_)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,r=n?.withCredentials??!1;if(!this._httpClient)throw wa();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let c=this._sanitizer.sanitize(Fe.RESOURCE_URL,t);if(!c)throw On(t);let _=this._inProgressUrlFetches.get(c);if(_)return _;let f=this._httpClient.get(c,{responseType:"text",withCredentials:r}).pipe(me(v=>He(v)),Mi(()=>this._inProgressUrlFetches.delete(c)),Ni());return this._inProgressUrlFetches.set(c,f),f}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(An(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let r=this._resolvers[n](t,e);if(r)return Da(r)?new Se(r.url,null,r.options):new Se(r,null)}}static \u0275fac=function(t){return new(t||a)(Qe(ji,8),Qe(Ki),Qe(xe,8),Qe(_t))};static \u0275prov=Ne({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Vt(a){return a.cloneNode(!0)}function An(a,i){return a+":"+i}function Da(a){return!!(a.url&&a.options)}var Oa=["*"],Ra=new H("MAT_ICON_DEFAULT_OPTIONS"),Aa=new H("mat-icon-location",{providedIn:"root",factory:()=>{let a=u(xe),i=a?a.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Nn=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ma=Nn.map(a=>`[${a}]`).join(", "),Na=/^url\(['"]?#(.*?)['"]?\)$/,Fn=(()=>{class a{_elementRef=u(q);_iconRegistry=u(Mn);_location=u(Aa);_errorHandler=u(_t);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=pe.EMPTY;constructor(){let e=u(new Ve("aria-hidden"),{optional:!0}),t=u(Ra,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,r)=>{n.forEach(c=>{r.setAttribute(c.name,`url('${e}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Ma),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)Nn.forEach(c=>{let _=t[r],f=_.getAttribute(c),v=f?f.match(Na):null;if(v){let k=n.get(_);k||(k=[],n.set(_,k)),k.push({name:c,value:v[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(pt(1)).subscribe(r=>this._setSvgElement(r),r=>{let c=`Error retrieving icon ${t}:${n}! ${r.message}`;this._errorHandler.handleError(new Error(c))})}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,n){t&2&&(G("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),te(n.color?"mat-"+n.color:""),R("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",A],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Oa,decls:1,vars:0,template:function(t,n){t&1&&(re(),oe(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return a})();var Fa=(a,i,e)=>({index:a,active:i,optional:e});function La(a,i){if(a&1&&ue(0,2),a&2){let e=b();g("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",Be(2,Fa,e.index,e.active,e.optional))}}function Ga(a,i){if(a&1&&(l(0,"span",7),d(1),o()),a&2){let e=b(2);s(),h(e._getDefaultTextForState(e.state))}}function Ba(a,i){if(a&1&&(l(0,"span",8),d(1),o()),a&2){let e=b(3);s(),h(e._intl.completedLabel)}}function za(a,i){if(a&1&&(l(0,"span",8),d(1),o()),a&2){let e=b(3);s(),h(e._intl.editableLabel)}}function Va(a,i){if(a&1&&(y(0,Ba,2,1,"span",8)(1,za,2,1,"span",8),l(2,"mat-icon",7),d(3),o()),a&2){let e=b(2);S(e.state==="done"?0:e.state==="edit"?1:-1),s(3),h(e._getDefaultTextForState(e.state))}}function Ua(a,i){if(a&1&&y(0,Ga,2,1,"span",7)(1,Va,4,2),a&2){let e,t=b();S((e=t.state)==="number"?0:1)}}function Ha(a,i){a&1&&(l(0,"div",4),ue(1,9),o()),a&2&&(s(),g("ngTemplateOutlet",i.template))}function Ya(a,i){if(a&1&&(l(0,"div",4),d(1),o()),a&2){let e=b();s(),h(e.label)}}function $a(a,i){if(a&1&&(l(0,"div",5),d(1),o()),a&2){let e=b();s(),h(e._intl.optionalLabel)}}function qa(a,i){if(a&1&&(l(0,"div",6),d(1),o()),a&2){let e=b();s(),h(e.errorMessage)}}var Gn=["*"];function ja(a,i){}function Ka(a,i){if(a&1&&(oe(0),ae(1,ja,0,0,"ng-template",0)),a&2){let e=b();s(),g("cdkPortalOutlet",e._portal)}}var Xa=["animatedContainer"],Bn=a=>({steps:a}),zn=a=>({step:a});function Wa(a,i){a&1&&oe(0)}function Qa(a,i){if(a&1&&(l(0,"div",5),ue(1,9)(2,6),o()),a&2){let e=b(2),t=se(6);s(),g("ngTemplateOutlet",e.headerPrefix()),s(),g("ngTemplateOutlet",t)("ngTemplateOutletContext",ve(3,Bn,e.steps))}}function Za(a,i){if(a&1&&ue(0,6),a&2){let e=b(2),t=se(6);g("ngTemplateOutlet",t)("ngTemplateOutletContext",ve(2,Bn,e.steps))}}function Ja(a,i){if(a&1&&(l(0,"div",10,2),ue(2,9),o()),a&2){let e=i.$implicit,t=i.$index,n=b(2);te("mat-horizontal-stepper-content-"+n._getAnimationDirection(t)),g("id",n._getStepContentId(t)),G("aria-labelledby",n._getStepLabelId(t))("inert",n.selectedIndex===t?null:""),s(2),g("ngTemplateOutlet",e.content)}}function er(a,i){if(a&1&&(l(0,"div",3),y(1,Qa,3,5,"div",5)(2,Za,1,4,"ng-container",6),l(3,"div",7),C(4,Ja,3,6,"div",8,gt),o()()),a&2){let e=b();s(),S(e.headerPrefix()?1:2),s(3),P(e.steps)}}function tr(a,i){if(a&1&&ue(0,9),a&2){let e=b(2);g("ngTemplateOutlet",e.headerPrefix())}}function ir(a,i){if(a&1&&(l(0,"div",11),ue(1,6),l(2,"div",12,2)(4,"div",13)(5,"div",14),ue(6,9),o()()()()),a&2){let e=i.$implicit,t=i.$index,n=i.$index,r=i.$count,c=b(2),_=se(4);s(),g("ngTemplateOutlet",_)("ngTemplateOutletContext",ve(11,zn,e)),s(),R("mat-stepper-vertical-line",n!==r-1)("mat-vertical-content-container-active",c.selectedIndex===t),G("inert",c.selectedIndex===t?null:"")("aria-label",c.ariaLabel),s(2),g("id",c._getStepContentId(t)),G("aria-labelledby",c._getStepLabelId(t)),s(2),g("ngTemplateOutlet",e.content)}}function nr(a,i){if(a&1&&(l(0,"div",4),y(1,tr,1,1,"ng-container",9),C(2,ir,7,13,"div",11,gt),o()),a&2){let e=b();s(),S(e.headerPrefix()?1:-1),s(),P(e.steps)}}function ar(a,i){if(a&1){let e=F();l(0,"mat-step-header",15),E("click",function(){let n=D(e).step;return O(n.select())})("keydown",function(n){D(e);let r=b();return O(r._onKeydown(n))}),o()}if(a&2){let e=i.step,t=b();R("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),g("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),G("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function rr(a,i){a&1&&x(0,"div",17)}function or(a,i){if(a&1&&(ue(0,6),y(1,rr,1,0,"div",17)),a&2){let e=i.$implicit,t=i.$index,n=i.$count;b(2);let r=se(4);g("ngTemplateOutlet",r)("ngTemplateOutletContext",ve(3,zn,e)),s(),S(t!==n-1?1:-1)}}function sr(a,i){if(a&1&&(l(0,"div",16),C(1,or,2,5,null,null,gt),o()),a&2){let e=i.steps,t=b();G("aria-label",t.ariaLabel),s(),P(e)}}var nt=(()=>{class a extends li{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Ze(a)))(n||a)}})();static \u0275dir=X({type:a,selectors:[["","matStepLabel",""]],features:[Oe]})}return a})(),lr=(()=>{class a{changes=new N;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Ln=(()=>{class a extends si{_intl=u(lr);_focusMonitor=u(wt);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=u(Pe);e.load(qe),e.load(mn);let t=u(W);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof nt?null:this.label}_templateLabel(){return this.label instanceof nt?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,n){t&2&&(te("mat-"+(n.color||"primary")),R("mat-step-header-empty-label",n._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[Oe],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,n){if(t&1&&(x(0,"div",0),l(1,"div")(2,"div",1),y(3,La,1,6,"ng-container",2)(4,Ua,2,1),o()(),l(5,"div",3),y(6,Ha,2,1,"div",4)(7,Ya,2,1,"div",4),y(8,$a,2,1,"div",5),y(9,qa,2,1,"div",6),o()),t&2){let r;g("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disableRipple),s(),te(Hi("mat-step-icon-state-",n.state," mat-step-icon")),R("mat-step-icon-selected",n.selected),s(2),S(n.iconOverrides&&n.iconOverrides[n.state]?3:4),s(2),R("mat-step-label-active",n.active)("mat-step-label-selected",n.selected)("mat-step-label-error",n.state=="error"),s(),S((r=n._templateLabel())?6:n._stringLabel()?7:-1,r),s(2),S(n._hasOptionalLabel()?8:-1),s(),S(n._hasErrorLabel()?9:-1)}},dependencies:[$e,ii,Fn],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return a})(),ci=(()=>{class a{templateRef=u(De);name;constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=X({type:a,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return a})(),cr=(()=>{class a{_template=u(De);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=X({type:a,selectors:[["ng-template","matStepContent",""]]})}return a})(),di=(()=>{class a extends zt{_errorStateMatcher=u(oi,{skipSelf:!0});_viewContainerRef=u(ut);_isSelected=pe.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Ee(()=>this._stepper.selectionChange.pipe(me(e=>e.selectedStep===this),he(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new yn(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let n=this._errorStateMatcher.isErrorState(e,t),r=!!(e&&e.invalid&&this.interacted);return n||r}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Ze(a)))(n||a)}})();static \u0275cmp=L({type:a,selectors:[["mat-step"]],contentQueries:function(t,n,r){if(t&1&&Ge(r,nt,5)(r,cr,5),t&2){let c;z(c=V())&&(n.stepLabel=c.first),z(c=V())&&(n._lazyContent=c.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[be([{provide:oi,useExisting:a},{provide:zt,useExisting:a}]),Oe],ngContentSelectors:Gn,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,n){t&1&&(re(),ae(0,Ka,2,1,"ng-template"))},dependencies:[Sn],encapsulation:2,changeDetection:0})}return a})(),Vn=(()=>{class a extends Xe{_ngZone=u(ne);_renderer=u(Le);_animationsDisabled=Ye();_cleanupTransition;_isAnimating=w(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Je;_icons;animationDone=new M;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=$i(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!u(pn).isBrowser;constructor(){super();let t=u(q).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(Z(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(Z(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(he(null),Z(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let n=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),r=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(n||r)&&this._animatedContainers.find(_=>_.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,n,r){if(t&1&&Ge(r,di,5)(r,ci,5),t&2){let c;z(c=V())&&(n._steps=c),z(c=V())&&(n._icons=c)}},viewQuery:function(t,n){if(t&1&&fe(Ln,5)(Xa,5),t&2){let r;z(r=V())&&(n._stepHeader=r),z(r=V())&&(n._animatedContainers=r)}},hostVars:14,hostBindings:function(t,n){t&2&&(Re("--mat-stepper-animation-duration",n._getAnimationDuration()),R("mat-stepper-horizontal",n.orientation==="horizontal")("mat-stepper-vertical",n.orientation==="vertical")("mat-stepper-label-position-end",n.orientation==="horizontal"&&n.labelPosition=="end")("mat-stepper-label-position-bottom",n.orientation==="horizontal"&&n.labelPosition=="bottom")("mat-stepper-header-position-bottom",n.headerPosition==="bottom")("mat-stepper-animating",n._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[be([{provide:Xe,useExisting:a}]),Oe],ngContentSelectors:Gn,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,n){if(t&1&&(re(),y(0,Wa,1,0),y(1,er,6,1,"div",3)(2,nr,4,1,"div",4),ae(3,ar,1,27,"ng-template",null,0,ti)(5,sr,3,1,"ng-template",null,1,ti)),t&2){let r;S(n._isServer?0:-1),s(),S((r=n.orientation)==="horizontal"?1:r==="vertical"?2:-1)}},dependencies:[ii,Ln],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return a})(),Un=(()=>{class a extends Tn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Ze(a)))(n||a)}})();static \u0275dir=X({type:a,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,n){t&2&&ge("type",n.type)},features:[Oe]})}return a})(),Hn=(()=>{class a extends wn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Ze(a)))(n||a)}})();static \u0275dir=X({type:a,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,n){t&2&&ge("type",n.type)},features:[Oe]})}return a})();function dr(a,i){a&1&&et(0,"div",2)}var pr=new H("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var $n=(()=>{class a{_elementRef=u(q);_ngZone=u(ne);_changeDetectorRef=u(W);_renderer=u(Le);_cleanupTransitionEnd;constructor(){let e=fn(),t=u(pr,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Yn(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Yn(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new M;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,n){t&2&&(G("aria-valuenow",n._isIndeterminate()?null:n.value)("mode",n.mode),te("mat-"+n.color),R("_mat-animation-noopable",n._isNoopAnimation)("mdc-linear-progress--animation-ready",!n._isNoopAnimation)("mdc-linear-progress--indeterminate",n._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",le],bufferValue:[2,"bufferValue","bufferValue",le],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,n){t&1&&(ft(0,"div",0),et(1,"div",1),y(2,dr,1,0,"div",2),bt(),ft(3,"div",3),et(4,"span",4),bt(),ft(5,"div",5),et(6,"span",4),bt()),t&2&&(s(),Re("flex-basis",n._getBufferBarFlexBasis()),s(),S(n.mode==="buffer"?2:-1),s(),Re("transform",n._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return a})();function Yn(a,i=0,e=100){return Math.max(i,Math.min(e,a))}var mr=["input"],hr=["label"],_r=["*"],pi={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},ur=new H("mat-checkbox-default-options",{providedIn:"root",factory:()=>pi}),j=(function(a){return a[a.Init=0]="Init",a[a.Checked=1]="Checked",a[a.Unchecked=2]="Unchecked",a[a.Indeterminate=3]="Indeterminate",a})(j||{}),mi=class{source;checked},qn=(()=>{class a{_elementRef=u(q);_changeDetectorRef=u(W);_ngZone=u(ne);_animationsDisabled=Ye();_options=u(ur,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new mi;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new M;indeterminateChange=new M;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=j.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(Pe).load(qe);let e=u(new Ve("tabindex"),{optional:!0});this._options=this._options||pi,this.color=this._options.color||pi.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(Ie).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(j.Indeterminate):this._transitionCheckState(this.checked?j.Checked:j.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=w(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?j.Checked:j.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case j.Init:if(t===j.Checked)return this._animationClasses.uncheckedToChecked;if(t==j.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case j.Unchecked:return t===j.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case j.Checked:return t===j.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case j.Indeterminate:return t===j.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&fe(mr,5)(hr,5),t&2){let r;z(r=V())&&(n._inputElement=r.first),z(r=V())&&(n._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(ge("id",n.id),G("tabindex",null)("aria-label",null)("aria-labelledby",null),te(n.color?"mat-"+n.color:"mat-accent"),R("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",A],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",A],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",A],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:le(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",A],checked:[2,"checked","checked",A],disabled:[2,"disabled","disabled",A],indeterminate:[2,"indeterminate","indeterminate",A]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[be([{provide:St,useExisting:mt(()=>a),multi:!0},{provide:Et,useExisting:a,multi:!0}]),_e],ngContentSelectors:_r,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(re(),l(0,"div",3),E("click",function(c){return n._preventBubblingFromLabel(c)}),l(1,"div",4,0)(3,"div",5),E("click",function(){return n._onTouchTargetClick()}),o(),l(4,"input",6,1),E("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(c){return n._onInteractionEvent(c)}),o(),x(6,"div",7),l(7,"div",8),ht(),l(8,"svg",9),x(9,"path",10),o(),Fi(),x(10,"div",11),o(),x(11,"div",12),o(),l(12,"label",13,2),oe(14),o()()),t&2){let r=se(2);g("labelPosition",n.labelPosition),s(4),R("mdc-checkbox--selected",n.checked),g("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),G("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),s(7),g("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),s(),g("for",n.inputId)}},dependencies:[$e,Bt],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return a})();var gr=["switch"],fr=["*"];function br(a,i){a&1&&(l(0,"span",11),ht(),l(1,"svg",13),x(2,"path",14),o(),l(3,"svg",15),x(4,"path",16),o()())}var vr=new H("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ut=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},jn=(()=>{class a{_elementRef=u(q);_focusMonitor=u(wt);_changeDetectorRef=u(W);defaults=u(vr);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Ut(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ye();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new M;toggleChange=new M;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){u(Pe).load(qe);let e=u(new Ve("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=u(Ie).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ut(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-slide-toggle"]],viewQuery:function(t,n){if(t&1&&fe(gr,5),t&2){let r;z(r=V())&&(n._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,n){t&2&&(ge("id",n.id),G("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),te(n.color?"mat-"+n.color:""),R("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",A],color:"color",disabled:[2,"disabled","disabled",A],disableRipple:[2,"disableRipple","disableRipple",A],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:le(e)],checked:[2,"checked","checked",A],hideIcon:[2,"hideIcon","hideIcon",A],disabledInteractive:[2,"disabledInteractive","disabledInteractive",A]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[be([{provide:St,useExisting:mt(()=>a),multi:!0},{provide:Et,useExisting:a,multi:!0}]),_e],ngContentSelectors:fr,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,n){if(t&1&&(re(),l(0,"div",1)(1,"button",2,0),E("click",function(){return n._handleClick()}),x(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),x(8,"span",8),o(),l(9,"span",9),x(10,"span",10),o(),y(11,br,5,0,"span",11),o()()(),l(12,"label",12),E("click",function(c){return c.stopPropagation()}),oe(13),o()()),t&2){let r=se(2);g("labelPosition",n.labelPosition),s(),R("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),g("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),G("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),s(9),g("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),s(),S(n.hideIcon?-1:11),s(),g("for",n.buttonId),G("id",n._labelId)}},dependencies:[$e,Bt],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return a})();var _i=(a,i,e)=>({min:a,max:i,count:e}),B=(a,i)=>i.value,at=(a,i)=>i.id;function yr(a,i){a&1&&(l(0,"mat-error"),d(1),p(2,"translate"),o()),a&2&&(s(),h(m(2,1,"POST_PAGE.ERRORS.TITLE_REQUIRED")))}function Sr(a,i){a&1&&(l(0,"mat-error"),d(1),p(2,"translate"),o()),a&2&&(s(),h(m(2,1,"POST_PAGE.ERRORS.DESCRIPTION_REQUIRED")))}function Er(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function Cr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function Pr(a,i){if(a&1&&(l(0,"div",35)(1,"span",36),d(2),o(),l(3,"span"),d(4),p(5,"translate"),p(6,"translate"),o(),l(7,"span",37),d(8),p(9,"translate"),p(10,"translate"),o()()),a&2){let e=b(2);R("purpose-rent",e.isRent)("purpose-sale",!e.isRent),s(2),h(e.isRent?"key":"sell"),s(2),h(e.isRent?m(5,7,"POST_PAGE.PURPOSE.FOR_RENT"):m(6,9,"POST_PAGE.PURPOSE.FOR_SALE")),s(4),h(e.isRent?m(9,11,"POST_PAGE.PURPOSE.RENT_HINT"):m(10,13,"POST_PAGE.PURPOSE.SALE_HINT"))}}function Ir(a,i){if(a&1&&(l(0,"mat-hint",11)(1,"span",38),d(2,"lightbulb"),o(),d(3),p(4,"number"),p(5,"number"),p(6,"translate"),o()),a&2){let e=i;s(3),T(" ",Y(6,5,"POST_PAGE.FIELDS.PRICE_ESTIMATE",Be(8,_i,m(4,1,e.min),m(5,3,e.max),e.count))," ")}}function kr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),p(2,"translate"),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(m(2,2,e.labelKey))}}function Tr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function wr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function Dr(a,i){if(a&1&&(l(0,"mat-form-field",5)(1,"mat-label"),d(2),p(3,"translate"),o(),l(4,"mat-select",39)(5,"mat-option",7),d(6,"\u2014"),o(),C(7,Tr,2,2,"mat-option",7,B),o()(),l(9,"mat-form-field",5)(10,"mat-label"),d(11),p(12,"translate"),o(),l(13,"mat-select",40)(14,"mat-option",7),d(15,"\u2014"),o(),C(16,wr,2,2,"mat-option",7,B),o()()),a&2){let e=b(2);s(2),h(m(3,4,"POST_PAGE.FIELDS.PRICE_PERIOD")),s(3),g("value",null),s(2),P(e.choices.options("property_price_period")),s(4),h(m(12,6,"POST_PAGE.FIELDS.DEPOSIT")),s(3),g("value",null),s(2),P(e.choices.options("property_deposit"))}}function Or(a,i){a&1&&(l(0,"mat-form-field",5)(1,"mat-label"),d(2),p(3,"translate"),o(),x(4,"input",41),l(5,"span",14),d(6),p(7,"translate"),o()()),a&2&&(s(2),h(m(3,2,"POST_PAGE.FIELDS.PRICE_PER_SQM")),s(4),h(m(7,4,"POST_PAGE.UNITS.SQM")))}function Rr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function Ar(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function Mr(a,i){a&1&&(l(0,"mat-slide-toggle",42),d(1),p(2,"translate"),o(),l(3,"mat-slide-toggle",43),d(4),p(5,"translate"),o()),a&2&&(s(),h(m(2,2,"POST_PAGE.FIELDS.KAHRAMAA_INCLUDED")),s(3),h(m(5,4,"POST_PAGE.FIELDS.INTERNET_INCLUDED")))}function Nr(a,i){if(a&1){let e=F();l(0,"mat-checkbox",44),E("change",function(){let n=D(e).$implicit,r=b(2);return O(r.toggleAmenity(n.value))}),d(1),p(2,"translate"),o()}if(a&2){let e=i.$implicit,t=b(2);g("checked",t.hasAmenity(e.value)),s(),T(" ",m(2,2,e.labelKey)," ")}}function Fr(a,i){if(a&1&&(l(0,"option",7),d(1),p(2,"translate"),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(m(2,2,e.labelKey))}}function Lr(a,i){if(a&1){let e=F();l(0,"div",33)(1,"select",45),E("change",function(n){let r=D(e).$index,c=b(2);return O(c.updateNearbyType(r,n.target.value))}),C(2,Fr,3,4,"option",7,B),o(),l(4,"input",46),p(5,"translate"),E("input",function(n){let r=D(e).$index,c=b(2);return O(c.updateNearbyName(r,n.target.value))}),o(),l(6,"input",47),p(7,"translate"),E("input",function(n){let r=D(e).$index,c=b(2);return O(c.updateNearbyDist(r,n.target.value))}),o(),l(8,"button",48),p(9,"translate"),E("click",function(){let n=D(e).$index,r=b(2);return O(r.removeNearby(n))}),l(10,"span",36),d(11,"close"),o()()()}if(a&2){let e=i.$implicit,t=b(2);s(),g("value",e.amenity_type),s(),P(t.NEARBY_AMENITY_TYPES),s(2),g("placeholder",m(5,6,"POST_PAGE.FIELDS.AMENITY_NAME"))("value",e.name),s(2),g("placeholder",m(7,8,"POST_PAGE.FIELDS.AMENITY_DISTANCE"))("value",e.distance_m??""),s(2),G("aria-label",m(9,10,"ACTIONS.DELETE"))}}function Gr(a,i){if(a&1){let e=F();l(0,"button",49),E("click",function(){D(e);let n=b(2);return O(n.addNearby())}),l(1,"span",36),d(2,"add_circle"),o(),d(3),p(4,"translate"),o()}a&2&&(s(3),T(" ",m(4,1,"POST_PAGE.FIELDS.ADD_AMENITY")," "))}function Br(a,i){if(a&1){let e=F();l(0,"div",1)(1,"mat-form-field",2)(2,"mat-label"),d(3),p(4,"translate"),o(),x(5,"input",3),p(6,"translate"),l(7,"mat-hint"),d(8),o(),y(9,yr,3,3,"mat-error"),o(),l(10,"mat-form-field",2)(11,"mat-label"),d(12),p(13,"translate"),o(),x(14,"textarea",4),p(15,"translate"),y(16,Sr,3,3,"mat-error"),o()(),l(17,"div",1)(18,"mat-form-field",5)(19,"mat-label"),d(20),p(21,"translate"),o(),l(22,"mat-select",6),C(23,Er,2,2,"mat-option",7,B),o()(),l(25,"mat-form-field",5)(26,"mat-label"),d(27),p(28,"translate"),o(),l(29,"mat-select",8),C(30,Cr,2,2,"mat-option",7,B),o()()(),y(32,Pr,11,15,"div",9),l(33,"div",1)(34,"mat-form-field",5)(35,"mat-label"),d(36),p(37,"translate"),o(),l(38,"input",10),E("focus",function(){D(e);let n=b();return O(n.fetchPriceEstimate())}),o(),y(39,Ir,7,12,"mat-hint",11),o(),l(40,"mat-form-field",5)(41,"mat-label"),d(42),p(43,"translate"),o(),l(44,"mat-select",12),C(45,kr,3,4,"mat-option",7,B),o()(),y(47,Dr,18,8),y(48,Or,8,6,"mat-form-field",5),o(),l(49,"div",1)(50,"mat-form-field",5)(51,"mat-label"),d(52),p(53,"translate"),o(),x(54,"input",13),l(55,"span",14),d(56),p(57,"translate"),o()(),l(58,"mat-form-field",5)(59,"mat-label"),d(60),p(61,"translate"),o(),x(62,"input",15),o(),l(63,"mat-form-field",5)(64,"mat-label"),d(65),p(66,"translate"),o(),x(67,"input",16),o(),l(68,"mat-form-field",5)(69,"mat-label"),d(70),p(71,"translate"),o(),x(72,"input",17),o(),l(73,"mat-form-field",5)(74,"mat-label"),d(75),p(76,"translate"),o(),x(77,"input",18),o(),l(78,"mat-form-field",5)(79,"mat-label"),d(80),p(81,"translate"),o(),l(82,"mat-select",19),C(83,Rr,2,2,"mat-option",7,B),o()(),l(85,"mat-form-field",5)(86,"mat-label"),d(87),p(88,"translate"),o(),l(89,"mat-select",20)(90,"mat-option",21),d(91,"\u2014"),o(),C(92,Ar,2,2,"mat-option",7,B),o()()(),l(94,"div",1)(95,"mat-form-field",5)(96,"mat-label"),d(97),p(98,"translate"),o(),x(99,"input",22),o(),l(100,"mat-form-field",2)(101,"mat-label"),d(102),p(103,"translate"),o(),x(104,"input",23),o()(),l(105,"div",24)(106,"mat-slide-toggle",25),d(107),p(108,"translate"),o(),l(109,"mat-slide-toggle",26),d(110),p(111,"translate"),o(),l(112,"mat-slide-toggle",27),d(113),p(114,"translate"),o(),y(115,Mr,6,6),o(),l(116,"div",28)(117,"p",29),d(118),p(119,"translate"),o(),l(120,"div",30),C(121,Nr,3,4,"mat-checkbox",31,B),o()(),l(123,"div",32)(124,"p",29),d(125),p(126,"translate"),o(),C(127,Lr,12,12,"div",33,zi),y(129,Gr,5,3,"button",34),o()}if(a&2){let e,t,n,r,c=b();s(3),h(m(4,32,"POST_PAGE.FIELDS.TITLE")),s(2),g("placeholder",m(6,34,"POST_PAGE.PLACEHOLDERS.PROPERTY_TITLE")),s(3),T("",((e=c.form.get("title"))==null||e.value==null?null:e.value.length)??0," / 200"),s(),S((t=c.form.get("title"))!=null&&t.hasError("required")&&((t=c.form.get("title"))!=null&&t.touched)?9:-1),s(3),h(m(13,36,"POST_PAGE.FIELDS.DESCRIPTION")),s(2),g("placeholder",m(15,38,"POST_PAGE.PLACEHOLDERS.PROPERTY_DESCRIPTION")),s(2),S((n=c.form.get("description"))!=null&&n.hasError("required")&&((n=c.form.get("description"))!=null&&n.touched)?16:-1),s(4),h(m(21,40,"POST_PAGE.FIELDS.PURPOSE")),s(3),P(c.choices.options("property_purpose")),s(4),h(m(28,42,"POST_PAGE.FIELDS.PROPERTY_TYPE")),s(3),P(c.choices.options("property_category")),s(2),S(c.purposeValue()?32:-1),s(4),h(m(37,44,"POST_PAGE.FIELDS.PRICE")),s(3),S((r=c.priceEstimate())?39:-1,r),s(3),h(m(43,46,"POST_PAGE.FIELDS.CURRENCY")),s(3),P(c.CURRENCIES),s(2),S(c.isRent?47:-1),s(),S(c.isRent?-1:48),s(4),h(m(53,48,"POST_PAGE.FIELDS.AREA")),s(4),h(m(57,50,"POST_PAGE.UNITS.SQM")),s(4),h(m(61,52,"POST_PAGE.FIELDS.BEDROOMS")),s(5),h(m(66,54,"POST_PAGE.FIELDS.BATHROOMS")),s(5),h(m(71,56,"POST_PAGE.FIELDS.FLOOR_NUMBER")),s(5),h(m(76,58,"POST_PAGE.FIELDS.TOTAL_FLOORS")),s(5),h(m(81,60,"POST_PAGE.FIELDS.FURNISHING")),s(3),P(c.choices.options("furnishing")),s(4),h(m(88,62,"POST_PAGE.FIELDS.CONTRACT_TYPE")),s(5),P(c.choices.options("contract_type")),s(5),h(m(98,64,"POST_PAGE.FIELDS.OFFICE_CAPACITY")),s(5),h(m(103,66,"POST_PAGE.FIELDS.REFERENCE_CODE")),s(5),h(m(108,68,"POST_PAGE.FIELDS.NEGOTIABLE")),s(3),h(m(111,70,"POST_PAGE.FIELDS.HIDE_PRICE")),s(3),h(m(114,72,"POST_PAGE.FIELDS.NO_COMMISSION")),s(2),S(c.isRent?115:-1),s(3),h(m(119,74,"POST_PAGE.FIELDS.AMENITIES")),s(3),P(c.PROP_AMENITIES),s(4),h(m(126,76,"POST_PAGE.FIELDS.NEARBY_AMENITIES")),s(2),P(c.nearbyList()),s(2),S(c.nearbyList().length<10?129:-1)}}function zr(a,i){a&1&&(l(0,"mat-error"),d(1),p(2,"translate"),o()),a&2&&(s(),h(m(2,1,"POST_PAGE.ERRORS.TITLE_REQUIRED")))}function Vr(a,i){if(a&1&&x(0,"img",78),a&2){let e=b().$implicit;g("src",e.logo_display,we)("alt",e.name)}}function Ur(a,i){if(a&1&&(l(0,"mat-option",7)(1,"span",77),y(2,Vr,1,2,"img",78),d(3),o()()),a&2){let e=i.$implicit;g("value",e.id),s(2),S(e.logo_display?2:-1),s(),T(" ",e.name," ")}}function Hr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.name),s(),h(e.name)}}function Yr(a,i){if(a&1&&(l(0,"mat-select",53)(1,"mat-option",21),d(2),p(3,"translate"),o(),C(4,Hr,2,2,"mat-option",7,at),o()),a&2){let e=b(2);s(2),h(m(3,1,"POST_PAGE.OTHER")),s(2),P(e.models())}}function $r(a,i){a&1&&(x(0,"input",54),p(1,"translate")),a&2&&g("placeholder",m(1,1,"POST_PAGE.PLACEHOLDERS.MODEL"))}function qr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function jr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function Kr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function Xr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function Wr(a,i){if(a&1&&(l(0,"mat-hint",11)(1,"span",38),d(2,"lightbulb"),o(),d(3),p(4,"number"),p(5,"number"),p(6,"translate"),o()),a&2){let e=i;s(3),T(" ",Y(6,5,"POST_PAGE.FIELDS.PRICE_ESTIMATE",Be(8,_i,m(4,1,e.min),m(5,3,e.max),e.count))," ")}}function Qr(a,i){if(a&1&&(l(0,"mat-option",7),d(1),p(2,"translate"),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(m(2,2,e.labelKey))}}function Zr(a,i){if(a&1){let e=F();l(0,"mat-checkbox",44),E("change",function(){let n=D(e).$implicit,r=b(2);return O(r.toggleFeature(n.value))}),d(1),p(2,"translate"),o()}if(a&2){let e=i.$implicit,t=b(2);g("checked",t.hasFeature(e.value)),s(),T(" ",e.label||m(2,2,e.labelKey)," ")}}function Jr(a,i){if(a&1){let e=F();l(0,"div",1)(1,"mat-form-field",2)(2,"mat-label"),d(3),p(4,"translate"),o(),x(5,"input",50),y(6,zr,3,3,"mat-error"),o(),l(7,"mat-form-field",2)(8,"mat-label"),d(9),p(10,"translate"),o(),x(11,"textarea",51),o(),l(12,"mat-form-field",5)(13,"mat-label"),d(14),p(15,"translate"),o(),l(16,"mat-select",52),E("selectionChange",function(n){D(e);let r=b();return O(r.onMakeChange(n.value))}),C(17,Ur,4,3,"mat-option",7,at),o()(),l(19,"mat-form-field",5)(20,"mat-label"),d(21),p(22,"translate"),o(),y(23,Yr,6,3,"mat-select",53)(24,$r,2,3,"input",54),o(),l(25,"mat-form-field",5)(26,"mat-label"),d(27),p(28,"translate"),o(),x(29,"input",55),o(),l(30,"mat-form-field",5)(31,"mat-label"),d(32),p(33,"translate"),o(),x(34,"input",56),o(),l(35,"mat-form-field",5)(36,"mat-label"),d(37),p(38,"translate"),o(),l(39,"mat-select",57),C(40,qr,2,2,"mat-option",7,B),o()(),l(42,"mat-form-field",5)(43,"mat-label"),d(44),p(45,"translate"),o(),l(46,"mat-select",58),C(47,jr,2,2,"mat-option",7,B),o()(),l(49,"mat-form-field",5)(50,"mat-label"),d(51),p(52,"translate"),o(),l(53,"mat-select",59),C(54,Kr,2,2,"mat-option",7,B),o()(),l(56,"mat-form-field",5)(57,"mat-label"),d(58),p(59,"translate"),o(),l(60,"mat-select",60),C(61,Xr,2,2,"mat-option",7,B),o()(),l(63,"mat-form-field",5)(64,"mat-label"),d(65),p(66,"translate"),o(),l(67,"input",10),E("focus",function(){D(e);let n=b();return O(n.fetchPriceEstimate())}),o(),y(68,Wr,7,12,"mat-hint",11),o(),l(69,"mat-form-field",5)(70,"mat-label"),d(71),p(72,"translate"),o(),l(73,"mat-select",12),C(74,Qr,3,4,"mat-option",7,B),o()(),l(76,"mat-form-field",5)(77,"mat-label"),d(78),p(79,"translate"),o(),x(80,"input",61),o(),l(81,"mat-form-field",5)(82,"mat-label"),d(83),p(84,"translate"),o(),x(85,"input",62),o(),l(86,"mat-form-field",5)(87,"mat-label"),d(88),p(89,"translate"),o(),x(90,"input",63),o(),l(91,"mat-form-field",5)(92,"mat-label"),d(93),p(94,"translate"),o(),l(95,"mat-select",64)(96,"mat-option",21),d(97),p(98,"translate"),o(),l(99,"mat-option",65),d(100),p(101,"translate"),o(),l(102,"mat-option",66),d(103),p(104,"translate"),o(),l(105,"mat-option",67),d(106),p(107,"translate"),o(),l(108,"mat-option",68),d(109),p(110,"translate"),o(),l(111,"mat-option",69),d(112),p(113,"translate"),o(),l(114,"mat-option",70),d(115),p(116,"translate"),o()()(),l(117,"mat-form-field",5)(118,"mat-label"),d(119),p(120,"translate"),o(),l(121,"mat-select",71)(122,"mat-option",21),d(123),p(124,"translate"),o(),l(125,"mat-option",72),d(126),p(127,"translate"),o(),l(128,"mat-option",73),d(129),p(130,"translate"),o(),l(131,"mat-option",74),d(132),p(133,"translate"),o()()()(),l(134,"div",24)(135,"mat-slide-toggle",25),d(136),p(137,"translate"),o(),l(138,"mat-slide-toggle",26),d(139),p(140,"translate"),o(),l(141,"mat-slide-toggle",75),d(142),p(143,"translate"),o(),l(144,"mat-slide-toggle",76),d(145),p(146,"translate"),o(),l(147,"mat-slide-toggle",44),E("change",function(n){let r;D(e);let c=b();return O((r=c.form.get("listing_intent"))==null?null:r.setValue(n.checked?"wanted":"offer"))}),d(148),p(149,"translate"),o()(),l(150,"div",28)(151,"p",29),d(152),p(153,"translate"),o(),l(154,"div",30),C(155,Zr,3,4,"mat-checkbox",31,B),o()()}if(a&2){let e,t,n,r=b();s(3),h(m(4,40,"POST_PAGE.FIELDS.TITLE")),s(3),S((e=r.form.get("title"))!=null&&e.hasError("required")&&((e=r.form.get("title"))!=null&&e.touched)?6:-1),s(3),h(m(10,42,"POST_PAGE.FIELDS.DESCRIPTION")),s(5),h(m(15,44,"POST_PAGE.FIELDS.MAKE")),s(3),P(r.makes()),s(4),h(m(22,46,"POST_PAGE.FIELDS.MODEL")),s(2),S(r.models().length?23:24),s(4),h(m(28,48,"POST_PAGE.FIELDS.YEAR")),s(2),g("min",1950)("max",r.currentYear+2),s(3),h(m(33,50,"POST_PAGE.FIELDS.MILEAGE")),s(5),h(m(38,52,"POST_PAGE.FIELDS.FUEL")),s(3),P(r.choices.options("vehicle_fuel_type")),s(4),h(m(45,54,"POST_PAGE.FIELDS.GEAR")),s(3),P(r.choices.options("vehicle_gear_type")),s(4),h(m(52,56,"POST_PAGE.FIELDS.BODY_STYLE")),s(3),P(r.choices.options("vehicle_body_style")),s(4),h(m(59,58,"POST_PAGE.FIELDS.CONDITION")),s(3),P(r.choices.options("vehicle_condition")),s(4),h(m(66,60,"POST_PAGE.FIELDS.PRICE")),s(3),S((t=r.priceEstimate())?68:-1,t),s(3),h(m(72,62,"POST_PAGE.FIELDS.CURRENCY")),s(3),P(r.CURRENCIES),s(4),h(m(79,64,"POST_PAGE.FIELDS.EXTERIOR_COLOR")),s(5),h(m(84,66,"POST_PAGE.FIELDS.INTERIOR_COLOR")),s(5),h(m(89,68,"POST_PAGE.FIELDS.ENGINE_SIZE")),s(5),h(m(94,70,"POST_PAGE.FIELDS.IMPORT_SOURCE")),s(4),h(m(98,72,"POST_PAGE.IMPORT_SOURCES.UNKNOWN")),s(3),h(m(101,74,"POST_PAGE.IMPORT_SOURCES.LOCAL")),s(3),h(m(104,76,"POST_PAGE.IMPORT_SOURCES.GCC")),s(3),h(m(107,78,"POST_PAGE.IMPORT_SOURCES.AMERICAN")),s(3),h(m(110,80,"POST_PAGE.IMPORT_SOURCES.EUROPEAN")),s(3),h(m(113,82,"POST_PAGE.IMPORT_SOURCES.KOREAN")),s(3),h(m(116,84,"POST_PAGE.IMPORT_SOURCES.JAPANESE")),s(4),h(m(120,86,"POST_PAGE.FIELDS.INSURANCE_TYPE")),s(4),h(m(124,88,"POST_PAGE.INSURANCE_TYPES.NONE")),s(3),h(m(127,90,"POST_PAGE.INSURANCE_TYPES.COMPREHENSIVE")),s(3),h(m(130,92,"POST_PAGE.INSURANCE_TYPES.THIRD_PARTY")),s(3),h(m(133,94,"POST_PAGE.INSURANCE_TYPES.EXPIRED")),s(4),h(m(137,96,"POST_PAGE.FIELDS.NEGOTIABLE")),s(3),h(m(140,98,"POST_PAGE.FIELDS.HIDE_PRICE")),s(3),h(m(143,100,"POST_PAGE.FIELDS.UNDER_WARRANTY")),s(3),h(m(146,102,"POST_PAGE.FIELDS.COMPUTER_CHECK")),s(2),g("checked",((n=r.form.get("listing_intent"))==null?null:n.value)==="wanted"),s(),T(" ",m(149,104,"POST_PAGE.FIELDS.WANTED_LISTING")," "),s(4),h(m(153,106,"POST_PAGE.FIELDS.FEATURES")),s(3),P(r.VEH_FEATURES)}}function eo(a,i){if(a&1&&(l(0,"mat-option",7),d(1),p(2,"translatedValue"),o()),a&2){let e=i.$implicit;g("value",e.id),s(),T(" ",Y(2,2,e.translations,"name")||e.slug," ")}}function to(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function io(a,i){if(a&1&&(l(0,"mat-hint",11)(1,"span",38),d(2,"lightbulb"),o(),d(3),p(4,"number"),p(5,"number"),p(6,"translate"),o()),a&2){let e=i;s(3),T(" ",Y(6,5,"POST_PAGE.FIELDS.PRICE_ESTIMATE",Be(8,_i,m(4,1,e.min),m(5,3,e.max),e.count))," ")}}function no(a,i){if(a&1&&(l(0,"mat-option",7),d(1),p(2,"translate"),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(m(2,2,e.labelKey))}}function ao(a,i){if(a&1){let e=F();l(0,"div",1)(1,"mat-form-field",2)(2,"mat-label"),d(3),p(4,"translate"),o(),x(5,"input",79),o(),l(6,"mat-form-field",2)(7,"mat-label"),d(8),p(9,"translate"),o(),x(10,"input",80),o(),l(11,"mat-form-field",2)(12,"mat-label"),d(13),p(14,"translate"),o(),x(15,"textarea",81),o(),l(16,"mat-form-field",2)(17,"mat-label"),d(18),p(19,"translate"),o(),x(20,"textarea",82),o(),l(21,"mat-form-field",5)(22,"mat-label"),d(23),p(24,"translate"),o(),l(25,"mat-select",8),C(26,eo,3,5,"mat-option",7,at),o()(),l(28,"mat-form-field",5)(29,"mat-label"),d(30),p(31,"translate"),o(),l(32,"mat-select",60),C(33,to,2,2,"mat-option",7,B),o()(),l(35,"mat-form-field",5)(36,"mat-label"),d(37),p(38,"translate"),o(),l(39,"input",10),E("focus",function(){D(e);let n=b();return O(n.fetchPriceEstimate())}),o(),y(40,io,7,12,"mat-hint",11),o(),l(41,"mat-form-field",5)(42,"mat-label"),d(43),p(44,"translate"),o(),l(45,"mat-select",12),C(46,no,3,4,"mat-option",7,B),o()()(),l(48,"div",24)(49,"mat-slide-toggle",25),d(50),p(51,"translate"),o(),l(52,"mat-slide-toggle",26),d(53),p(54,"translate"),o()()}if(a&2){let e,t=b();s(3),h(m(4,11,"POST_PAGE.FIELDS.TITLE_AR")),s(5),h(m(9,13,"POST_PAGE.FIELDS.TITLE_EN_OPTIONAL")),s(5),h(m(14,15,"POST_PAGE.FIELDS.DESCRIPTION_AR")),s(5),h(m(19,17,"POST_PAGE.FIELDS.DESCRIPTION_EN_OPTIONAL")),s(5),h(m(24,19,"POST_PAGE.FIELDS.CATEGORY")),s(3),P(t.classifiedCats()),s(4),h(m(31,21,"POST_PAGE.FIELDS.CONDITION")),s(3),P(t.choices.options("classified_condition")),s(4),h(m(38,23,"POST_PAGE.FIELDS.PRICE")),s(3),S((e=t.priceEstimate())?40:-1,e),s(3),h(m(44,25,"POST_PAGE.FIELDS.CURRENCY")),s(3),P(t.CURRENCIES),s(4),h(m(51,27,"POST_PAGE.FIELDS.NEGOTIABLE")),s(3),h(m(54,29,"POST_PAGE.FIELDS.HIDE_PRICE"))}}function ro(a,i){if(a&1&&(l(0,"mat-option",7),d(1),p(2,"translatedValue"),o()),a&2){let e=i.$implicit;g("value",e.id),s(),T(" ",Y(2,2,e.translations,"name")||e.slug," ")}}function oo(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function so(a,i){if(a&1&&(l(0,"mat-option",7),d(1),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(e.label)}}function lo(a,i){if(a&1&&(l(0,"mat-option",7),d(1),p(2,"translate"),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(m(2,2,e.labelKey))}}function co(a,i){if(a&1&&(l(0,"div",1)(1,"mat-form-field",2)(2,"mat-label"),d(3),p(4,"translate"),o(),x(5,"input",79),o(),l(6,"mat-form-field",2)(7,"mat-label"),d(8),p(9,"translate"),o(),x(10,"input",80),o(),l(11,"mat-form-field",2)(12,"mat-label"),d(13),p(14,"translate"),o(),x(15,"textarea",83),o(),l(16,"mat-form-field",2)(17,"mat-label"),d(18),p(19,"translate"),o(),x(20,"textarea",84),o(),l(21,"mat-form-field",5)(22,"mat-label"),d(23),p(24,"translate"),o(),l(25,"mat-select",8),C(26,ro,3,5,"mat-option",7,at),o()(),l(28,"mat-form-field",5)(29,"mat-label"),d(30),p(31,"translate"),o(),l(32,"mat-select",85),C(33,oo,2,2,"mat-option",7,B),o()(),l(35,"mat-form-field",5)(36,"mat-label"),d(37),p(38,"translate"),o(),l(39,"mat-select",86),C(40,so,2,2,"mat-option",7,B),o()(),l(42,"mat-form-field",5)(43,"mat-label"),d(44),p(45,"translate"),o(),l(46,"mat-select",87)(47,"mat-option",88),d(48),p(49,"translate"),o(),l(50,"mat-option",89),d(51),p(52,"translate"),o(),l(53,"mat-option",90),d(54),p(55,"translate"),o()()(),l(56,"mat-form-field",5)(57,"mat-label"),d(58),p(59,"translate"),o(),x(60,"input",91),p(61,"translate"),o(),l(62,"mat-form-field",5)(63,"mat-label"),d(64),p(65,"translate"),o(),x(66,"input",92),o(),l(67,"mat-form-field",5)(68,"mat-label"),d(69),p(70,"translate"),o(),x(71,"input",93),o(),l(72,"mat-form-field",5)(73,"mat-label"),d(74),p(75,"translate"),o(),l(76,"mat-select",12),C(77,lo,3,4,"mat-option",7,B),o()(),l(79,"mat-form-field",5)(80,"mat-label"),d(81),p(82,"translate"),o(),l(83,"mat-select",94)(84,"mat-option",95),d(85),p(86,"translate"),o(),l(87,"mat-option",96),d(88),p(89,"translate"),o(),l(90,"mat-option",97),d(91),p(92,"translate"),o(),l(93,"mat-option",98),d(94),p(95,"translate"),o()()()(),l(96,"div",24)(97,"mat-slide-toggle",99),d(98),p(99,"translate"),o(),l(100,"mat-slide-toggle",100),d(101),p(102,"translate"),o(),l(103,"mat-slide-toggle",101),d(104),p(105,"translate"),o()()),a&2){let e=b();s(3),h(m(4,24,"POST_PAGE.FIELDS.JOB_TITLE_AR")),s(5),h(m(9,26,"POST_PAGE.FIELDS.JOB_TITLE_EN_OPTIONAL")),s(5),h(m(14,28,"POST_PAGE.FIELDS.JOB_DESCRIPTION_AR")),s(5),h(m(19,30,"POST_PAGE.FIELDS.JOB_DESCRIPTION_EN_OPTIONAL")),s(5),h(m(24,32,"POST_PAGE.FIELDS.JOB_CATEGORY")),s(3),P(e.jobCats()),s(4),h(m(31,34,"POST_PAGE.FIELDS.EMPLOYMENT_TYPE")),s(3),P(e.choices.options("job_type")),s(4),h(m(38,36,"POST_PAGE.FIELDS.EXPERIENCE")),s(3),P(e.choices.options("experience_level")),s(4),h(m(45,38,"POST_PAGE.FIELDS.GENDER")),s(4),h(m(49,40,"POST_PAGE.GENDER.ANY")),s(3),h(m(52,42,"POST_PAGE.GENDER.MALE")),s(3),h(m(55,44,"POST_PAGE.GENDER.FEMALE")),s(4),h(m(59,46,"POST_PAGE.FIELDS.NATIONALITY")),s(2),g("placeholder",m(61,48,"POST_PAGE.FIELDS.NATIONALITY_HINT")),s(4),h(m(65,50,"POST_PAGE.FIELDS.MIN_SALARY")),s(5),h(m(70,52,"POST_PAGE.FIELDS.MAX_SALARY")),s(5),h(m(75,54,"POST_PAGE.FIELDS.CURRENCY")),s(3),P(e.CURRENCIES),s(4),h(m(82,56,"POST_PAGE.FIELDS.SALARY_PERIOD")),s(4),h(m(86,58,"POST_PAGE.SALARY_PERIOD.MONTHLY")),s(3),h(m(89,60,"POST_PAGE.SALARY_PERIOD.WEEKLY")),s(3),h(m(92,62,"POST_PAGE.SALARY_PERIOD.DAILY")),s(3),h(m(95,64,"POST_PAGE.SALARY_PERIOD.HOURLY")),s(4),h(m(99,66,"POST_PAGE.FIELDS.HIDE_SALARY")),s(3),h(m(102,68,"POST_PAGE.FIELDS.REMOTE_WORK")),s(3),h(m(105,70,"POST_PAGE.FIELDS.QUICK_APPLY"))}}function po(a,i){if(a&1&&(l(0,"mat-option",7),d(1),p(2,"translatedValue"),o()),a&2){let e=i.$implicit;g("value",e.id),s(),T(" ",Y(2,2,e.translations,"name")||e.slug," ")}}function mo(a,i){if(a&1&&(l(0,"mat-option",7),d(1),p(2,"translate"),o()),a&2){let e=i.$implicit;g("value",e.value),s(),h(m(2,2,e.labelKey))}}function ho(a,i){if(a&1&&(l(0,"div",1)(1,"mat-form-field",2)(2,"mat-label"),d(3),p(4,"translate"),o(),x(5,"input",79),o(),l(6,"mat-form-field",2)(7,"mat-label"),d(8),p(9,"translate"),o(),x(10,"input",80),o(),l(11,"mat-form-field",2)(12,"mat-label"),d(13),p(14,"translate"),o(),x(15,"textarea",83),o(),l(16,"mat-form-field",2)(17,"mat-label"),d(18),p(19,"translate"),o(),x(20,"textarea",84),o(),l(21,"mat-form-field",5)(22,"mat-label"),d(23),p(24,"translate"),o(),l(25,"mat-select",8),C(26,po,3,5,"mat-option",7,at),o()(),l(28,"mat-form-field",5)(29,"mat-label"),d(30),p(31,"translate"),o(),l(32,"mat-select",102)(33,"mat-option",103),d(34),p(35,"translate"),o(),l(36,"mat-option",98),d(37),p(38,"translate"),o(),l(39,"mat-option",104),d(40),p(41,"translate"),o(),l(42,"mat-option",105),d(43),p(44,"translate"),o()()(),l(45,"mat-form-field",5)(46,"mat-label"),d(47),p(48,"translate"),o(),x(49,"input",106),o(),l(50,"mat-form-field",5)(51,"mat-label"),d(52),p(53,"translate"),o(),x(54,"input",107),o(),l(55,"mat-form-field",5)(56,"mat-label"),d(57),p(58,"translate"),o(),l(59,"mat-select",12),C(60,mo,3,4,"mat-option",7,B),o()()(),l(62,"div",24)(63,"mat-slide-toggle",100),d(64),p(65,"translate"),o()()),a&2){let e=b();s(3),h(m(4,14,"POST_PAGE.FIELDS.SERVICE_NAME_AR")),s(5),h(m(9,16,"POST_PAGE.FIELDS.SERVICE_NAME_EN_OPTIONAL")),s(5),h(m(14,18,"POST_PAGE.FIELDS.SERVICE_DESCRIPTION_AR")),s(5),h(m(19,20,"POST_PAGE.FIELDS.SERVICE_DESCRIPTION_EN_OPTIONAL")),s(5),h(m(24,22,"POST_PAGE.FIELDS.CATEGORY")),s(3),P(e.serviceCats()),s(4),h(m(31,24,"POST_PAGE.FIELDS.PRICE_TYPE")),s(4),h(m(35,26,"POST_PAGE.PRICE_TYPES.FIXED")),s(3),h(m(38,28,"POST_PAGE.PRICE_TYPES.HOURLY")),s(3),h(m(41,30,"POST_PAGE.PRICE_TYPES.NEGOTIABLE")),s(3),h(m(44,32,"POST_PAGE.PRICE_TYPES.FREE")),s(4),h(m(48,34,"POST_PAGE.FIELDS.MIN_PRICE")),s(5),h(m(53,36,"POST_PAGE.FIELDS.MAX_PRICE")),s(5),h(m(58,38,"POST_PAGE.FIELDS.CURRENCY")),s(3),P(e.CURRENCIES),s(4),h(m(65,40,"POST_PAGE.FIELDS.CAN_BE_REMOTE"))}}var _o=[{value:"SYP",labelKey:"POST_PAGE.CURRENCIES.SYP"},{value:"USD",labelKey:"POST_PAGE.CURRENCIES.USD"}],uo=[{value:"balcony",labelKey:"POST_PAGE.AMENITIES.BALCONY"},{value:"parking",labelKey:"POST_PAGE.AMENITIES.PARKING"},{value:"elevator",labelKey:"POST_PAGE.AMENITIES.ELEVATOR"},{value:"security",labelKey:"POST_PAGE.AMENITIES.SECURITY"},{value:"swimming_pool",labelKey:"POST_PAGE.AMENITIES.SWIMMING_POOL"},{value:"gym",labelKey:"POST_PAGE.AMENITIES.GYM"},{value:"central_ac",labelKey:"POST_PAGE.AMENITIES.CENTRAL_AC"},{value:"kitchen",labelKey:"POST_PAGE.AMENITIES.KITCHEN"},{value:"maid_room",labelKey:"POST_PAGE.AMENITIES.MAID_ROOM"},{value:"storage",labelKey:"POST_PAGE.AMENITIES.STORAGE"},{value:"garden",labelKey:"POST_PAGE.AMENITIES.GARDEN"},{value:"solar_energy",labelKey:"POST_PAGE.AMENITIES.SOLAR_ENERGY"}],go=[{value:"metro",labelKey:"POST_PAGE.AMENITY_TYPES.METRO"},{value:"bus",labelKey:"POST_PAGE.AMENITY_TYPES.BUS"},{value:"school",labelKey:"POST_PAGE.AMENITY_TYPES.SCHOOL"},{value:"hospital",labelKey:"POST_PAGE.AMENITY_TYPES.HOSPITAL"},{value:"mall",labelKey:"POST_PAGE.AMENITY_TYPES.MALL"},{value:"mosque",labelKey:"POST_PAGE.AMENITY_TYPES.MOSQUE"}],fo=[{value:"abs",label:"ABS"},{value:"airbags",labelKey:"POST_PAGE.VEHICLE_FEATURES.AIRBAGS"},{value:"sunroof",labelKey:"POST_PAGE.VEHICLE_FEATURES.SUNROOF"},{value:"navigation",labelKey:"POST_PAGE.VEHICLE_FEATURES.NAVIGATION"},{value:"bluetooth",labelKey:"POST_PAGE.VEHICLE_FEATURES.BLUETOOTH"},{value:"camera",labelKey:"POST_PAGE.VEHICLE_FEATURES.CAMERA"},{value:"sensors",labelKey:"POST_PAGE.VEHICLE_FEATURES.SENSORS"},{value:"led",labelKey:"POST_PAGE.VEHICLE_FEATURES.LED"},{value:"leather",labelKey:"POST_PAGE.VEHICLE_FEATURES.LEATHER"},{value:"heated_seats",labelKey:"POST_PAGE.VEHICLE_FEATURES.HEATED_SEATS"},{value:"turbo",labelKey:"POST_PAGE.VEHICLE_FEATURES.TURBO"},{value:"sport",labelKey:"POST_PAGE.VEHICLE_FEATURES.SPORT"}],Ht=class a{section;form;choices=u(kn);api=u(yt);makes=w([]);models=w([]);classifiedCats=w([]);jobCats=w([]);serviceCats=w([]);priceEstimate=w(null);nearbyList=w([]);purposeValue=w("");CURRENCIES=_o;PROP_AMENITIES=uo;VEH_FEATURES=fo;NEARBY_AMENITY_TYPES=go;currentYear=new Date().getFullYear();purposeSub;get isRent(){let i=this.purposeValue();return i==="for_rent"||i==="rent"}ngOnInit(){this.loadForSection(this.section)}ngOnChanges(i){if(i.form&&this.form){this.nearbyList.set(this.form.get("nearby")?.value??[]),this.purposeSub?.unsubscribe();let e=this.form.get("purpose");e&&(this.purposeValue.set(e.value??""),this.purposeSub=e.valueChanges.subscribe(t=>this.purposeValue.set(t??""))),this.section==="vehicles"&&this.makes().length&&this._syncModels(this.makes())}i.section&&!i.section.firstChange&&this.loadForSection(this.section)}ngOnDestroy(){this.purposeSub?.unsubscribe()}_syncModels(i){let e=this.form?.get("make")?.value;if(!e)return;let t=i.find(n=>n.id===e);t&&this.models.set(t.models??[])}loadForSection(i){i==="vehicles"&&!this.makes().length&&this.api.get("/vehicles/makes/").subscribe(e=>{this.makes.set(e),this._syncModels(e)}),i==="classifieds"&&!this.classifiedCats().length&&this.api.get("/classifieds/categories/").subscribe(e=>this.classifiedCats.set(e)),i==="jobs"&&!this.jobCats().length&&this.api.get("/jobs/categories/").subscribe(e=>this.jobCats.set(e)),i==="services"&&!this.serviceCats().length&&this.api.get("/services/categories/").subscribe(e=>this.serviceCats.set(e))}fetchPriceEstimate(){let i=this.section;if(!["properties","vehicles","classifieds"].includes(i))return;let e={section:i},t=this.form.get("category")?.value;t&&(e.category=String(t));let n=this.form.get("governorate_id")?.value;n&&(e.governorate_id=String(n)),this.api.get("/core/price-estimate/",e).subscribe({next:r=>this.priceEstimate.set(r?.count>0?r:null),error:()=>this.priceEstimate.set(null)})}onMakeChange(i){let e=this.makes().find(t=>t.id===i);this.models.set(e?.models??[]),this.form.patchValue({model_name:""})}hasAmenity(i){return(this.form.get("amenities")?.value??[]).includes(i)}toggleAmenity(i){let e=this.form.get("amenities")?.value??[],t=e.includes(i)?e.filter(n=>n!==i):[...e,i];this.form.get("amenities")?.setValue(t)}hasFeature(i){return(this.form.get("features")?.value??[]).includes(i)}toggleFeature(i){let e=this.form.get("features")?.value??[],t=e.includes(i)?e.filter(n=>n!==i):[...e,i];this.form.get("features")?.setValue(t)}_setNearby(i){this.nearbyList.set(i),this.form.get("nearby")?.setValue(i)}addNearby(){this._setNearby([...this.nearbyList(),{amenity_type:"metro",name:"",distance_m:null}])}removeNearby(i){this._setNearby(this.nearbyList().filter((e,t)=>t!==i))}updateNearbyType(i,e){let t=[...this.nearbyList()];t[i]=de(ee({},t[i]),{amenity_type:e}),this._setNearby(t)}updateNearbyName(i,e){let t=[...this.nearbyList()];t[i]=de(ee({},t[i]),{name:e}),this._setNearby(t)}updateNearbyDist(i,e){let t=[...this.nearbyList()];t[i]=de(ee({},t[i]),{distance_m:e?parseInt(e,10):null}),this._setNearby(t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=L({type:a,selectors:[["app-post-step2"]],inputs:{section:"section",form:"form"},features:[_e],decls:6,vars:6,consts:[[1,"step2-wrap",3,"formGroup"],[1,"form-grid"],["appearance","outline",1,"span-2"],["matInput","","formControlName","title","maxlength","200",3,"placeholder"],["matInput","","formControlName","description","rows","4",3,"placeholder"],["appearance","outline"],["formControlName","purpose"],[3,"value"],["formControlName","category"],[1,"purpose-strip",3,"purpose-rent","purpose-sale"],["matInput","","type","number","formControlName","price","min","0",3,"focus"],[1,"price-hint"],["formControlName","currency"],["matInput","","type","number","formControlName","area_sqm","min","1"],["matSuffix",""],["matInput","","type","number","formControlName","bedrooms","min","0","max","50"],["matInput","","type","number","formControlName","bathrooms","min","0","max","50"],["matInput","","type","number","formControlName","floor_number"],["matInput","","type","number","formControlName","total_floors"],["formControlName","furnishing"],["formControlName","contract_type"],["value",""],["matInput","","type","number","formControlName","office_capacity","min","1"],["matInput","","formControlName","reference_code","maxlength","60"],[1,"toggles-row"],["formControlName","negotiable"],["formControlName","hide_price"],["formControlName","no_commission"],[1,"amenities-section"],[1,"section-subheading"],[1,"check-grid"],[3,"checked"],[1,"nearby-section"],[1,"nearby-row"],["type","button",1,"nearby-add-btn"],[1,"purpose-strip"],[1,"material-symbols-outlined"],[1,"purpose-hint"],[1,"material-symbols-outlined","hint-icon"],["formControlName","price_period"],["formControlName","deposit"],["matInput","","type","number","formControlName","price_per_sqm","min","0"],["formControlName","kahramaa_included"],["formControlName","internet_included"],[3,"change","checked"],[1,"nearby-select",3,"change","value"],["type","text",1,"nearby-input",3,"input","placeholder","value"],["type","number","min","0","max","50000",1,"nearby-input","nearby-dist",3,"input","placeholder","value"],["type","button",1,"nearby-remove",3,"click"],["type","button",1,"nearby-add-btn",3,"click"],["matInput","","formControlName","title","maxlength","200"],["matInput","","formControlName","description","rows","4"],["formControlName","make",3,"selectionChange"],["formControlName","model_name"],["matInput","","formControlName","model_name",3,"placeholder"],["matInput","","type","number","formControlName","year",3,"min","max"],["matInput","","type","number","formControlName","mileage","min","0"],["formControlName","fuel_type"],["formControlName","gear_type"],["formControlName","body_style"],["formControlName","condition"],["matInput","","formControlName","color_exterior"],["matInput","","formControlName","color_interior"],["matInput","","type","number","formControlName","engine_size","min","0","step","0.1"],["formControlName","import_source"],["value","local"],["value","gcc"],["value","american"],["value","european"],["value","korean"],["value","japanese"],["formControlName","insurance_type"],["value","comprehensive"],["value","third_party"],["value","expired"],["formControlName","under_warranty"],["formControlName","computer_check"],[1,"make-option"],["loading","lazy",1,"make-logo",3,"src","alt"],["matInput","","formControlName","title_ar"],["matInput","","formControlName","title_en"],["matInput","","formControlName","description_ar","rows","4"],["matInput","","formControlName","description_en","rows","3"],["matInput","","formControlName","description_ar","rows","5"],["matInput","","formControlName","description_en","rows","4"],["formControlName","job_type"],["formControlName","experience"],["formControlName","gender"],["value","any"],["value","male"],["value","female"],["matInput","","formControlName","nationality",3,"placeholder"],["matInput","","type","number","formControlName","min_salary","min","0"],["matInput","","type","number","formControlName","max_salary","min","0"],["formControlName","salary_period"],["value","monthly"],["value","weekly"],["value","daily"],["value","hourly"],["formControlName","hide_salary"],["formControlName","is_remote"],["formControlName","quick_apply"],["formControlName","price_type"],["value","fixed"],["value","negotiable"],["value","free"],["matInput","","type","number","formControlName","min_price","min","0"],["matInput","","type","number","formControlName","max_price","min","0"]],template:function(e,t){e&1&&(l(0,"div",0),y(1,Br,130,78),y(2,Jr,157,108),y(3,ao,55,31),y(4,co,106,72),y(5,ho,66,42),o()),e&2&&(g("formGroup",t.form),s(),S(t.section==="properties"?1:-1),s(),S(t.section==="vehicles"?2:-1),s(),S(t.section==="classifieds"?3:-1),s(),S(t.section==="jobs"?4:-1),s(),S(t.section==="services"?5:-1))},dependencies:[Ue,tn,nn,Zi,en,Ct,Pt,on,rn,an,kt,It,Mt,Rt,At,bn,vn,xn,Gt,Nt,qn,jn,xt,Ce,Ft],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block}.make-option[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.make-logo[_ngcontent-%COMP%]{width:24px;height:24px;object-fit:contain;flex-shrink:0;border-radius:2px}.step2-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.purpose-strip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:var(--b-radius-md);font-size:.85rem;font-weight:600;margin-bottom:4px}.purpose-strip[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}.purpose-strip[_ngcontent-%COMP%]   .purpose-hint[_ngcontent-%COMP%]{font-weight:400;font-size:.78rem;opacity:.75;margin-inline-start:4px}.purpose-rent[_ngcontent-%COMP%]{background:color-mix(in srgb,#2196F3 10%,transparent);color:#1565c0}.purpose-sale[_ngcontent-%COMP%]{background:color-mix(in srgb,#4CAF50 10%,transparent);color:#2e7d32}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:0 16px;align-items:start}@media(max-width:600px){.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.span-2[_ngcontent-%COMP%]{grid-column:1/-1}mat-form-field[_ngcontent-%COMP%]{width:100%}.toggles-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;padding:8px 4px}.amenities-section[_ngcontent-%COMP%]{padding:4px 0}.section-subheading[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--b-text-secondary);margin:0 0 10px}.check-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}.price-hint[_ngcontent-%COMP%]{display:flex;align-items:center;gap:3px;color:var(--b-primary);font-size:.72rem}.hint-icon[_ngcontent-%COMP%]{font-size:13px}.nearby-section[_ngcontent-%COMP%]{padding:4px 0}.nearby-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap}.nearby-select[_ngcontent-%COMP%]{flex:0 0 auto;min-width:130px;padding:8px 10px;border:1.5px solid var(--b-border);border-radius:var(--b-radius-sm);background:var(--b-bg);color:var(--b-text-primary);font-size:.875rem;font-family:inherit;outline:none;cursor:pointer}.nearby-select[_ngcontent-%COMP%]:focus{border-color:var(--b-primary)}.nearby-input[_ngcontent-%COMP%]{flex:1;min-width:100px;padding:8px 10px;border:1.5px solid var(--b-border);border-radius:var(--b-radius-sm);background:var(--b-bg);color:var(--b-text-primary);font-size:.875rem;font-family:inherit;outline:none}.nearby-input[_ngcontent-%COMP%]:focus{border-color:var(--b-primary)}.nearby-input[_ngcontent-%COMP%]::placeholder{color:var(--b-text-hint)}.nearby-dist[_ngcontent-%COMP%]{flex:0 0 110px}.nearby-remove[_ngcontent-%COMP%]{flex-shrink:0;width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:50%;cursor:pointer;background:color-mix(in srgb,var(--b-error, #e53935) 10%,transparent);color:var(--b-error, #e53935);transition:background .15s}.nearby-remove[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--b-error, #e53935) 20%,transparent)}.nearby-remove[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:16px}.nearby-add-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:var(--b-radius-pill);border:1.5px dashed var(--b-primary);background:transparent;color:var(--b-primary);font-size:.875rem;font-family:inherit;cursor:pointer;transition:background .15s}.nearby-add-btn[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--b-primary) 8%,transparent)}.nearby-add-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}'],changeDetection:0})};function fi(a){let i=a.cloneNode(!0),e=i.querySelectorAll("[id]"),t=a.nodeName.toLowerCase();i.removeAttribute("id");for(let n=0;n<e.length;n++)e[n].removeAttribute("id");return t==="canvas"?Wn(a,i):(t==="input"||t==="select"||t==="textarea")&&Xn(a,i),Kn("canvas",a,i,Wn),Kn("input, textarea, select",a,i,Xn),i}function Kn(a,i,e,t){let n=i.querySelectorAll(a);if(n.length){let r=e.querySelectorAll(a);for(let c=0;c<n.length;c++)t(n[c],r[c])}}var bo=0;function Xn(a,i){i.type!=="file"&&(i.value=a.value),i.type==="radio"&&i.name&&(i.name=`mat-clone-${i.name}-${bo++}`)}function Wn(a,i){let e=i.getContext("2d");if(e)try{e.drawImage(a,0,0)}catch{}}function Ei(a){let i=a.getBoundingClientRect();return{top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height,x:i.x,y:i.y}}function bi(a,i,e){let{top:t,bottom:n,left:r,right:c}=a;return e>=t&&e<=n&&i>=r&&i<=c}function vo(a,i){let e=i.left<a.left,t=i.left+i.width>a.right,n=i.top<a.top,r=i.top+i.height>a.bottom;return e||t||n||r}function st(a,i,e){a.top+=i,a.bottom=a.top+a.height,a.left+=e,a.right=a.left+a.width}function Qn(a,i,e,t){let{top:n,right:r,bottom:c,left:_,width:f,height:v}=a,k=f*i,K=v*i;return t>n-K&&t<c+K&&e>_-k&&e<r+k}var Yt=class{_document;positions=new Map;constructor(i){this._document=i}clear(){this.positions.clear()}cache(i){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),i.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Ei(e)})})}handleScroll(i){let e=tt(i),t=this.positions.get(e);if(!t)return null;let n=t.scrollPosition,r,c;if(e===this._document){let v=this.getViewportScrollPosition();r=v.top,c=v.left}else r=e.scrollTop,c=e.scrollLeft;let _=n.top-r,f=n.left-c;return this.positions.forEach((v,k)=>{v.clientRect&&e!==k&&e.contains(k)&&st(v.clientRect,_,f)}),n.top=r,n.left=c,{top:_,left:f}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function da(a,i){let e=a.rootNodes;if(e.length===1&&e[0].nodeType===i.ELEMENT_NODE)return e[0];let t=i.createElement("div");return e.forEach(n=>t.appendChild(n)),t}function Ci(a,i,e){for(let t in i)if(i.hasOwnProperty(t)){let n=i[t];n?a.setProperty(t,n,e?.has(t)?"important":""):a.removeProperty(t)}return a}function We(a,i){let e=i?"":"none";Ci(a.style,{"touch-action":i?"":"none","-webkit-user-drag":i?"":"none","-webkit-tap-highlight-color":i?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function Zn(a,i,e){Ci(a.style,{position:i?"":"fixed",top:i?"":"0",opacity:i?"":"0",left:i?"":"-999em"},e)}function $t(a,i){return i&&i!="none"?a+" "+i:a}function Jn(a,i){a.style.width=`${i.width}px`,a.style.height=`${i.height}px`,a.style.transform=lt(i.left,i.top)}function lt(a,i){return`translate3d(${Math.round(a)}px, ${Math.round(i)}px, 0)`}var rt={capture:!0},ui={passive:!1,capture:!0},xo=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,n){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return a})(),Pi=(()=>{class a{_ngZone=u(ne);_document=u(xe);_styleLoader=u(Pe);_renderer=u(ei).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new N;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=w([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new N;pointerUp=new N;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,ui)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(xo),this._activeDragInstances.update(n=>[...n,e]),this._activeDragInstances().length===1)){let n=t.type.startsWith("touch"),r=_=>this.pointerUp.next(_),c=[["scroll",_=>this._scroll.next(_),rt],["selectstart",this._preventDefaultWhileDragging,ui]];n?c.push(["touchend",r,rt],["touchcancel",r,rt]):c.push(["mouseup",r,rt]),n||c.push(["mousemove",_=>this.pointerMove.next(_),ui]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=c.map(([_,f,v])=>this._renderer.listen(this._document,_,f,v))})}}stopDragging(e){this._activeDragInstances.update(t=>{let n=t.indexOf(e);return n>-1?(t.splice(n,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new Zt(n=>this._ngZone.runOutsideAngular(()=>{let r=this._renderer.listen(e,"scroll",c=>{this._activeDragInstances().length&&n.next(c)},rt);return()=>{r()}}))),dt(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ea(a){let i=a.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(a)*i}function yo(a){let i=getComputedStyle(a),e=gi(i,"transition-property"),t=e.find(_=>_==="transform"||_==="all");if(!t)return 0;let n=e.indexOf(t),r=gi(i,"transition-duration"),c=gi(i,"transition-delay");return ea(r[n])+ea(c[n])}function gi(a,i){return a.getPropertyValue(i).split(",").map(t=>t.trim())}var So=new Set(["position"]),vi=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(i,e,t,n,r,c,_,f,v,k){this._document=i,this._rootElement=e,this._direction=t,this._initialDomRect=n,this._previewTemplate=r,this._previewClass=c,this._pickupPositionOnPage=_,this._initialTransform=f,this._zIndex=v,this._renderer=k}attach(i){this._preview=this._createPreview(),i.appendChild(this._preview),ta(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(i){this._preview.style.transform=i}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(i){this._preview.classList.add(i)}getTransitionDuration(){return yo(this._preview)}addEventListener(i,e){return this._renderer.listen(this._preview,i,e)}_createPreview(){let i=this._previewTemplate,e=this._previewClass,t=i?i.template:null,n;if(t&&i){let r=i.matchSize?this._initialDomRect:null,c=i.viewContainer.createEmbeddedView(t,i.context);c.detectChanges(),n=da(c,this._document),this._previewEmbeddedView=c,i.matchSize?Jn(n,r):n.style.transform=lt(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else n=fi(this._rootElement),Jn(n,this._initialDomRect),this._initialTransform&&(n.style.transform=this._initialTransform);return Ci(n.style,{"pointer-events":"none",margin:ta(n)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},So),We(n,!1),n.classList.add("cdk-drag-preview"),n.setAttribute("popover","manual"),n.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(r=>n.classList.add(r)):n.classList.add(e)),n}};function ta(a){return"showPopover"in a}var Eo={passive:!0},ia={passive:!1},Co={passive:!1,capture:!0},Po=800,na="cdk-drag-placeholder",aa=new Set(["position"]);function Io(a,i,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=a.get(Le,null,{optional:!0})||a.get(ei).createRenderer(null,null);return new xi(i,e,a.get(xe),a.get(ne),a.get(ri),a.get(Pi),t)}var xi=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=w(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new N;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=pe.EMPTY;_pointerUpSubscription=pe.EMPTY;_scrollSubscription=pe.EMPTY;_resizeSubscription=pe.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(i){i!==this._disabled&&(this._disabled=i,this._toggleNativeDragInteractions(),this._handles.forEach(e=>We(e,i)))}_disabled=!1;beforeStarted=new N;started=new N;released=new N;ended=new N;entered=new N;exited=new N;dropped=new N;moved=this._moveEvents;data;constrainPosition;constructor(i,e,t,n,r,c,_){this._config=e,this._document=t,this._ngZone=n,this._viewportRuler=r,this._dragDropRegistry=c,this._renderer=_,this.withRootElement(i).withParent(e.parentDragRef||null),this._parentPositions=new Yt(t),c.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(i){this._handles=i.map(t=>ye(t)),this._handles.forEach(t=>We(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(i){return this._previewTemplate=i,this}withPlaceholderTemplate(i){return this._placeholderTemplate=i,this}withRootElement(i){let e=ye(i);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,ia),t.listen(e,"touchstart",this._pointerDown,Eo),t.listen(e,"dragstart",this._nativeDragStart,ia)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(i){return this._boundaryElement=i?ye(i):null,this._resizeSubscription.unsubscribe(),i&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(i){return this._parentDragRef=i,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&vo(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let i=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,n=0;e.left<i.left?t=i.left-e.left:e.right>i.right&&(t=i.right-e.right),e.top<i.top?n=i.top-e.top:e.bottom>i.bottom&&(n=i.bottom-e.bottom);let r=this._activeTransform.x,c=this._activeTransform.y,_=r+t,f=c+n;this._rootElement.style.transform=lt(_,f),this._activeTransform={x:_,y:f},this._passiveTransform={x:_,y:f}}}disableHandle(i){!this._disabledHandles.has(i)&&this._handles.indexOf(i)>-1&&(this._disabledHandles.add(i),We(i,!0))}enableHandle(i){this._disabledHandles.has(i)&&(this._disabledHandles.delete(i),We(i,this.disabled))}withDirection(i){return this._direction=i,this}_withDropContainer(i){this._dropContainer=i}getFreeDragPosition(){let i=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:i.x,y:i.y}}setFreeDragPosition(i){return this._activeTransform={x:0,y:0},this._passiveTransform.x=i.x,this._passiveTransform.y=i.y,this._dropContainer||this._applyRootElementTransform(i.x,i.y),this}withPreviewContainer(i){return this._previewContainer=i,this}_sortFromLastPointerPosition(){let i=this._lastKnownPointerPosition;i&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(i),i)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=i=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,i)}else this.disabled||this._initializeDragSequence(this._rootElement,i)};_pointerMove=i=>{let e=this._getPointerPositionOnPage(i);if(!this._hasStartedDragging()){let n=Math.abs(e.x-this._pickupPositionOnPage.x),r=Math.abs(e.y-this._pickupPositionOnPage.y);if(n+r>=this._config.dragStartThreshold){let _=Date.now()>=this._dragStartTime+this._getDragStartDelay(i),f=this._dropContainer;if(!_){this._endDragSequence(i);return}(!f||!f.isDragging()&&!f.isReceiving())&&(i.cancelable&&i.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(i)))}return}i.cancelable&&i.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else{let n=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,r=this._activeTransform;r.x=t.x-n.x+this._passiveTransform.x,r.y=t.y-n.y+this._passiveTransform.y,this._applyRootElementTransform(r.x,r.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:i,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta})})};_pointerUp=i=>{this._endDragSequence(i)};_endDragSequence(i){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:i}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(i),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(i);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:i})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(i){ot(i)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",ko,Co)}),t){let n=this._rootElement,r=n.parentNode,c=this._placeholder=this._createPlaceholderElement(),_=this._marker=this._marker||this._document.createComment("");r.insertBefore(_,n),this._initialTransform=n.style.transform||"",this._preview=new vi(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(r,e)),Zn(n,!1,aa),this._document.body.appendChild(r.replaceChild(c,n)),this.started.next({source:this,event:i}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:i}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(i,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),n=ot(e),r=!n&&e.button!==0,c=this._rootElement,_=tt(e),f=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+Po>Date.now(),v=n?cn(e):ln(e);if(_&&_.draggable&&e.type==="mousedown"&&e.preventDefault(),t||r||f||v)return;if(this._handles.length){let $=c.style;this._rootElementTapHighlight=$.webkitTapHighlightColor||"",$.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe($=>this._updateOnScroll($)),this._boundaryElement&&(this._boundaryRect=Ei(this._boundaryElement));let k=this._previewTemplate;this._pickupPositionInElement=k&&k.template&&!k.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,i,e);let K=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:K.x,y:K.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(i){Zn(this._rootElement,!0,aa),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),n=this._getPointerPositionOnPage(i),r=this._getDragDistance(n),c=e._isOverContainer(n.x,n.y);this.ended.next({source:this,distance:r,dropPoint:n,event:i}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:c,distance:r,dropPoint:n,event:i}),e.drop(this,t,this._initialIndex,this._initialContainer,c,r,n,i),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:i,y:e},{x:t,y:n}){let r=this._initialContainer._getSiblingContainerFromPosition(this,i,e);!r&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(i,e)&&(r=this._initialContainer),r&&r!==this._dropContainer&&this._ngZone.run(()=>{let c=this._dropContainer.getItemIndex(this),_=this._dropContainer.getItemAtIndex(c+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(r,this._dropContainer,_),this._dropContainer=r,this._dropContainer.enter(this,i,e,r===this._initialContainer&&r.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:r,currentIndex:r.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,n),this._dropContainer._sortItem(this,i,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(i,e):this._applyPreviewTransform(i-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let i=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(i.left,i.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let n=_=>{(!_||this._preview&&tt(_)===this._preview.element&&_.propertyName==="transform")&&(c(),t(),clearTimeout(r))},r=setTimeout(n,e*1.5),c=this._preview.addEventListener("transitionend",n)}))}_createPlaceholderElement(){let i=this._placeholderTemplate,e=i?i.template:null,t;return e?(this._placeholderRef=i.viewContainer.createEmbeddedView(e,i.context),this._placeholderRef.detectChanges(),t=da(this._placeholderRef,this._document)):t=fi(this._rootElement),t.style.pointerEvents="none",t.classList.add(na),t}_getPointerPositionInElement(i,e,t){let n=e===this._rootElement?null:e,r=n?n.getBoundingClientRect():i,c=ot(t)?t.targetTouches[0]:t,_=this._getViewportScrollPosition(),f=c.pageX-r.left-_.left,v=c.pageY-r.top-_.top;return{x:r.left-i.left+f,y:r.top-i.top+v}}_getPointerPositionOnPage(i){let e=this._getViewportScrollPosition(),t=ot(i)?i.touches[0]||i.changedTouches[0]||{pageX:0,pageY:0}:i,n=t.pageX-e.left,r=t.pageY-e.top;if(this._ownerSVGElement){let c=this._ownerSVGElement.getScreenCTM();if(c){let _=this._ownerSVGElement.createSVGPoint();return _.x=n,_.y=r,_.matrixTransform(c.inverse())}}return{x:n,y:r}}_getConstrainedPointerPosition(i){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:n}=this.constrainPosition?this.constrainPosition(i,this,this._initialDomRect,this._pickupPositionInElement):i;if(this.lockAxis==="x"||e==="x"?n=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:r,y:c}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,_=this._boundaryRect,{width:f,height:v}=this._getPreviewRect(),k=_.top+c,K=_.bottom-(v-c),$=_.left+r,ke=_.right-(f-r);t=ra(t,$,ke),n=ra(n,k,K)}return{x:t,y:n}}_updatePointerDirectionDelta(i){let{x:e,y:t}=i,n=this._pointerDirectionDelta,r=this._pointerPositionAtLastDirectionChange,c=Math.abs(e-r.x),_=Math.abs(t-r.y);return c>this._config.pointerDirectionChangeThreshold&&(n.x=e>r.x?1:-1,r.x=e),_>this._config.pointerDirectionChangeThreshold&&(n.y=t>r.y?1:-1,r.y=t),n}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let i=this._handles.length>0||!this.isDragging();i!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=i,We(this._rootElement,i))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(i=>i()),this._rootElementCleanups=void 0}_applyRootElementTransform(i,e){let t=1/this.scale,n=lt(i*t,e*t),r=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=r.transform&&r.transform!="none"?r.transform:""),r.transform=$t(n,this._initialTransform)}_applyPreviewTransform(i,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,n=lt(i,e);this._preview.setTransform($t(n,t))}_getDragDistance(i){let e=this._pickupPositionOnPage;return e?{x:i.x-e.x,y:i.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:i,y:e}=this._passiveTransform;if(i===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),n=this._boundaryElement.getBoundingClientRect();if(n.width===0&&n.height===0||t.width===0&&t.height===0)return;let r=n.left-t.left,c=t.right-n.right,_=n.top-t.top,f=t.bottom-n.bottom;n.width>t.width?(r>0&&(i+=r),c>0&&(i-=c)):i=0,n.height>t.height?(_>0&&(e+=_),f>0&&(e-=f)):e=0,(i!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:i})}_getDragStartDelay(i){let e=this.dragStartDelay;return typeof e=="number"?e:ot(i)?e.touch:e?e.mouse:0}_updateOnScroll(i){let e=this._parentPositions.handleScroll(i);if(e){let t=tt(i);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&st(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Tt(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(i,e){let t=this._previewContainer||"global";if(t==="parent")return i;if(t==="global"){let n=this._document;return e||n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement||n.body}return ye(t)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=i=>{if(this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&i.preventDefault()}else this.disabled||i.preventDefault()};_getTargetHandle(i){return this._handles.find(e=>i.target&&(i.target===e||e.contains(i.target)))}_conditionallyInsertAnchor(i,e,t){if(i===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let n=this._anchor??=fi(this._placeholder);n.classList.remove(na),n.classList.add("cdk-drag-anchor"),n.style.transform="",t?t.before(n):ye(e.element).appendChild(n)}}};function ra(a,i,e){return Math.max(i,Math.min(e,a))}function ot(a){return a.type[0]==="t"}function ko(a){a.preventDefault()}function jt(a,i,e){let t=oa(i,a.length-1),n=oa(e,a.length-1);if(t===n)return;let r=a[t],c=n<t?-1:1;for(let _=t;_!==n;_+=c)a[_]=a[_+c];a[n]=r}function oa(a,i){return Math.max(0,Math.min(i,a))}var qt=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(i){this._dragDropRegistry=i}_previousSwap={drag:null,delta:0,overlaps:!1};start(i){this.withItems(i)}sort(i,e,t,n){let r=this._itemPositions,c=this._getItemIndexFromPointerPosition(i,e,t,n);if(c===-1&&r.length>0)return null;let _=this.orientation==="horizontal",f=r.findIndex(J=>J.drag===i),v=r[c],k=r[f].clientRect,K=v.clientRect,$=f>c?1:-1,ke=this._getItemOffsetPx(k,K,$),Ea=this._getSiblingOffsetPx(f,r,$),Ca=r.slice();return jt(r,f,c),r.forEach((J,Pa)=>{if(Ca[Pa]===J)return;let ki=J.drag===i,Qt=ki?ke:Ea,Ti=ki?i.getPlaceholderElement():J.drag.getRootElement();J.offset+=Qt;let wi=Math.round(J.offset*(1/J.drag.scale));_?(Ti.style.transform=$t(`translate3d(${wi}px, 0, 0)`,J.initialTransform),st(J.clientRect,0,Qt)):(Ti.style.transform=$t(`translate3d(0, ${wi}px, 0)`,J.initialTransform),st(J.clientRect,Qt,0))}),this._previousSwap.overlaps=bi(K,e,t),this._previousSwap.drag=v.drag,this._previousSwap.delta=_?n.x:n.y,{previousIndex:f,currentIndex:c}}enter(i,e,t,n){let r=this._activeDraggables,c=r.indexOf(i),_=i.getPlaceholderElement();c>-1&&r.splice(c,1);let f=n==null||n<0?this._getItemIndexFromPointerPosition(i,e,t):n,v=r[f];if(v===i&&(v=r[f+1]),!v&&(f==null||f===-1||f<r.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(v=r[0]),v&&!this._dragDropRegistry.isDragging(v)){let k=v.getRootElement();k.parentElement.insertBefore(_,k),r.splice(f,0,i)}else this._element.appendChild(_),r.push(i);_.style.transform="",this._cacheItemPositions()}withItems(i){this._activeDraggables=i.slice(),this._cacheItemPositions()}withSortPredicate(i){this._sortPredicate=i}reset(){this._activeDraggables?.forEach(i=>{let e=i.getRootElement();if(e){let t=this._itemPositions.find(n=>n.drag===i)?.initialTransform;e.style.transform=t||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(i){return this._getVisualItemPositions().findIndex(e=>e.drag===i)}getItemAtIndex(i){return this._getVisualItemPositions()[i]?.drag||null}updateOnScroll(i,e){this._itemPositions.forEach(({clientRect:t})=>{st(t,i,e)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(i){this._element=i}_cacheItemPositions(){let i=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return{drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:Ei(t)}}).sort((e,t)=>i?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(i,e,t){let n=this.orientation==="horizontal",r=n?e.left-i.left:e.top-i.top;return t===-1&&(r+=n?e.width-i.width:e.height-i.height),r}_getSiblingOffsetPx(i,e,t){let n=this.orientation==="horizontal",r=e[i].clientRect,c=e[i+t*-1],_=r[n?"width":"height"]*t;if(c){let f=n?"left":"top",v=n?"right":"bottom";t===-1?_-=c.clientRect[f]-r[v]:_+=r[f]-c.clientRect[v]}return _}_shouldEnterAsFirstChild(i,e){if(!this._activeDraggables.length)return!1;let t=this._itemPositions,n=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let c=t[t.length-1].clientRect;return n?i>=c.right:e>=c.bottom}else{let c=t[0].clientRect;return n?i<=c.left:e<=c.top}}_getItemIndexFromPointerPosition(i,e,t,n){let r=this.orientation==="horizontal",c=this._itemPositions.findIndex(({drag:_,clientRect:f})=>{if(_===i)return!1;if(n){let v=r?n.x:n.y;if(_===this._previousSwap.drag&&this._previousSwap.overlaps&&v===this._previousSwap.delta)return!1}return r?e>=Math.floor(f.left)&&e<Math.floor(f.right):t>=Math.floor(f.top)&&t<Math.floor(f.bottom)});return c===-1||!this._sortPredicate(c,i)?-1:c}},yi=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(i,e){this._document=i,this._dragDropRegistry=e}start(i){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let n=e[t];this._relatedNodes.push([n,n.nextSibling])}this.withItems(i)}sort(i,e,t,n){let r=this._getItemIndexFromPointerPosition(i,e,t),c=this._previousSwap;if(r===-1||this._activeItems[r]===i)return null;let _=this._activeItems[r];if(c.drag===_&&c.overlaps&&c.deltaX===n.x&&c.deltaY===n.y)return null;let f=this.getItemIndex(i),v=i.getPlaceholderElement(),k=_.getRootElement();r>f?k.after(v):k.before(v),jt(this._activeItems,f,r);let K=this._getRootNode().elementFromPoint(e,t);return c.deltaX=n.x,c.deltaY=n.y,c.drag=_,c.overlaps=k===K||k.contains(K),{previousIndex:f,currentIndex:r}}enter(i,e,t,n){let r=this._activeItems.indexOf(i);r>-1&&this._activeItems.splice(r,1);let c=n==null||n<0?this._getItemIndexFromPointerPosition(i,e,t):n;c===-1&&(c=this._getClosestItemIndexToPointer(i,e,t));let _=this._activeItems[c];_&&!this._dragDropRegistry.isDragging(_)?(this._activeItems.splice(c,0,i),_.getRootElement().before(i.getPlaceholderElement())):(this._activeItems.push(i),this._element.appendChild(i.getPlaceholderElement()))}withItems(i){this._activeItems=i.slice()}withSortPredicate(i){this._sortPredicate=i}reset(){let i=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[n,r]=this._relatedNodes[t];n.parentNode===i&&n.nextSibling!==r&&(r===null?i.appendChild(n):r.parentNode===i&&i.insertBefore(n,r))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(i){return this._activeItems.indexOf(i)}getItemAtIndex(i){return this._activeItems[i]||null}updateOnScroll(){this._activeItems.forEach(i=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(i){i!==this._element&&(this._element=i,this._rootNode=void 0)}_getItemIndexFromPointerPosition(i,e,t){let n=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),r=n?this._activeItems.findIndex(c=>{let _=c.getRootElement();return n===_||_.contains(n)}):-1;return r===-1||!this._sortPredicate(r,i)?-1:r}_getRootNode(){return this._rootNode||(this._rootNode=Tt(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(i,e,t){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let n=1/0,r=-1;for(let c=0;c<this._activeItems.length;c++){let _=this._activeItems[c];if(_!==i){let{x:f,y:v}=_.getRootElement().getBoundingClientRect(),k=Math.hypot(e-f,t-v);k<n&&(n=k,r=c)}}return r}},sa=.05,pa=.05,ie=(function(a){return a[a.NONE=0]="NONE",a[a.UP=1]="UP",a[a.DOWN=2]="DOWN",a})(ie||{}),Q=(function(a){return a[a.NONE=0]="NONE",a[a.LEFT=1]="LEFT",a[a.RIGHT=2]="RIGHT",a})(Q||{});function To(a,i){return new Si(i,a.get(Pi),a.get(xe),a.get(ne),a.get(ri))}var Si=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new N;entered=new N;exited=new N;dropped=new N;sorted=new N;receivingStarted=new N;receivingStopped=new N;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=pe.EMPTY;_verticalScrollDirection=ie.NONE;_horizontalScrollDirection=Q.NONE;_scrollNode;_stopScrollTimers=new N;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(i,e,t,n,r){this._dragDropRegistry=e,this._ngZone=n,this._viewportRuler=r;let c=this.element=ye(i);this._document=t,this.withOrientation("vertical").withElementContainer(c),e.registerDropContainer(this),this._parentPositions=new Yt(t)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(i,e,t,n){this._draggingStarted(),n==null&&this.sortingDisabled&&(n=this._draggables.indexOf(i)),this._sortStrategy.enter(i,e,t,n),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:i,container:this,currentIndex:this.getItemIndex(i)})}exit(i){this._reset(),this.exited.next({item:i,container:this})}drop(i,e,t,n,r,c,_,f={}){this._reset(),this.dropped.next({item:i,currentIndex:e,previousIndex:t,container:this,previousContainer:n,isPointerOverContainer:r,distance:c,dropPoint:_,event:f})}withItems(i){let e=this._draggables;return this._draggables=i,i.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(n=>n.isDragging()).every(n=>i.indexOf(n)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(i){return this._direction=i,this._sortStrategy instanceof qt&&(this._sortStrategy.direction=i),this}connectedTo(i){return this._siblings=i.slice(),this}withOrientation(i){if(i==="mixed")this._sortStrategy=new yi(this._document,this._dragDropRegistry);else{let e=new qt(this._dragDropRegistry);e.direction=this._direction,e.orientation=i,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(i){let e=this._container;return this._scrollableElements=i.indexOf(e)===-1?[e,...i]:i.slice(),this}withElementContainer(i){if(i===this._container)return this;let e=ye(this.element),t=this._scrollableElements.indexOf(this._container),n=this._scrollableElements.indexOf(i);return t>-1&&this._scrollableElements.splice(t,1),n>-1&&this._scrollableElements.splice(n,1),this._sortStrategy&&this._sortStrategy.withElementContainer(i),this._cachedShadowRoot=null,this._scrollableElements.unshift(i),this._container=i,this}getScrollableParents(){return this._scrollableElements}getItemIndex(i){return this._isDragging?this._sortStrategy.getItemIndex(i):this._draggables.indexOf(i)}getItemAtIndex(i){return this._isDragging?this._sortStrategy.getItemAtIndex(i):this._draggables[i]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(i,e,t,n){if(this.sortingDisabled||!this._domRect||!Qn(this._domRect,sa,e,t))return;let r=this._sortStrategy.sort(i,e,t,n);r&&this.sorted.next({previousIndex:r.previousIndex,currentIndex:r.currentIndex,container:this,item:i})}_startScrollingIfNecessary(i,e){if(this.autoScrollDisabled)return;let t,n=ie.NONE,r=Q.NONE;if(this._parentPositions.positions.forEach((c,_)=>{_===this._document||!c.clientRect||t||Qn(c.clientRect,sa,i,e)&&([n,r]=wo(_,c.clientRect,this._direction,i,e),(n||r)&&(t=_))}),!n&&!r){let{width:c,height:_}=this._viewportRuler.getViewportSize(),f={width:c,height:_,top:0,right:c,bottom:_,left:0};n=ma(f,e),r=ha(f,i),t=window}t&&(n!==this._verticalScrollDirection||r!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=n,this._horizontalScrollDirection=r,this._scrollNode=t,(n||r)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let i=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=i.msScrollSnapType||i.scrollSnapType||"",i.scrollSnapType=i.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let i=this._container.style;i.scrollSnapType=i.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Ai(0,Oi).pipe(Z(this._stopScrollTimers)).subscribe(()=>{let i=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===ie.UP?i.scrollBy(0,-e):this._verticalScrollDirection===ie.DOWN&&i.scrollBy(0,e),this._horizontalScrollDirection===Q.LEFT?i.scrollBy(-e,0):this._horizontalScrollDirection===Q.RIGHT&&i.scrollBy(e,0)})};_isOverContainer(i,e){return this._domRect!=null&&bi(this._domRect,i,e)}_getSiblingContainerFromPosition(i,e,t){return this._siblings.find(n=>n._canReceive(i,e,t))}_canReceive(i,e,t){if(!this._domRect||!bi(this._domRect,e,t)||!this.enterPredicate(i,this))return!1;let n=this._getShadowRoot().elementFromPoint(e,t);return n?n===this._container||this._container.contains(n):!1}_startReceiving(i,e){let t=this._activeSiblings;!t.has(i)&&e.every(n=>this.enterPredicate(n,this)||this._draggables.indexOf(n)>-1)&&(t.add(i),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:i,receiver:this,items:e}))}_stopReceiving(i){this._activeSiblings.delete(i),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:i,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(i=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(i);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let i=Tt(this._container);this._cachedShadowRoot=i||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let i=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,i))}};function ma(a,i){let{top:e,bottom:t,height:n}=a,r=n*pa;return i>=e-r&&i<=e+r?ie.UP:i>=t-r&&i<=t+r?ie.DOWN:ie.NONE}function ha(a,i){let{left:e,right:t,width:n}=a,r=n*pa;return i>=e-r&&i<=e+r?Q.LEFT:i>=t-r&&i<=t+r?Q.RIGHT:Q.NONE}function wo(a,i,e,t,n){let r=ma(i,n),c=ha(i,t),_=ie.NONE,f=Q.NONE;if(r){let v=a.scrollTop;r===ie.UP?v>0&&(_=ie.UP):a.scrollHeight-v>a.clientHeight&&(_=ie.DOWN)}if(c){let v=a.scrollLeft;e==="rtl"?c===Q.RIGHT?v<0&&(f=Q.RIGHT):a.scrollWidth+v>a.clientWidth&&(f=Q.LEFT):c===Q.LEFT?v>0&&(f=Q.LEFT):a.scrollWidth-v>a.clientWidth&&(f=Q.RIGHT)}return[_,f]}var la=new H("CDK_DRAG_PARENT");var Do=new H("CdkDragHandle");var _a=new H("CDK_DRAG_CONFIG"),ua=new H("CdkDropList"),ga=(()=>{class a{element=u(q);dropContainer=u(ua,{optional:!0,skipSelf:!0});_ngZone=u(ne);_viewContainerRef=u(ut);_dir=u(it,{optional:!0});_changeDetectorRef=u(W);_selfHandle=u(Do,{optional:!0,self:!0});_parentDrag=u(la,{optional:!0,skipSelf:!0});_dragDropRegistry=u(Pi);_destroyed=new N;_handles=new Di([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new M;released=new M;ended=new M;entered=new M;exited=new M;dropped=new M;moved=new Zt(e=>{let t=this._dragRef.moved.pipe(me(n=>({source:this,pointerPosition:n.pointerPosition,event:n.event,delta:n.delta,distance:n.distance}))).subscribe(e);return()=>{t.unsubscribe()}});_injector=u(Jt);constructor(){let e=this.dropContainer,t=u(_a,{optional:!0});this._dragRef=Io(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(Z(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){Gi(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let t=e.rootElementSelector,n=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,n&&!n.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t)}_removeHandle(e){let t=this._handles.getValue(),n=t.indexOf(e);n>-1&&(t.splice(n,1),this._handles.next(t))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):ye(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,n=this.dragStartDelay,r=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,c=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof n=="object"&&n?n:ai(n),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(r).withPreviewTemplate(c).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(pt(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let n=this._dragDropRegistry.getDragDirectiveForNode(t);if(n){e.withParent(n._dragRef);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event})})}_assignDefaults(e){let{lockAxis:t,dragStartDelay:n,constrainPosition:r,previewClass:c,boundaryElement:_,draggingDisabled:f,rootElementSelector:v,previewContainer:k}=e;this.disabled=f??!1,this.dragStartDelay=n||0,this.lockAxis=t||null,r&&(this.constrainPosition=r),c&&(this.previewClass=c),_&&(this.boundaryElement=_),v&&(this.rootElementSelector=v),k&&(this.previewContainer=k)}_setupHandlesListener(){this._handles.pipe(Me(e=>{let t=e.map(n=>n.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),Ee(e=>dt(...e.map(t=>t._stateChanges.pipe(he(t))))),Z(this._destroyed)).subscribe(e=>{let t=this._dragRef,n=e.element.nativeElement;e.disabled?t.disableHandle(n):t.enableHandle(n)})}static \u0275fac=function(t){return new(t||a)};static \u0275dir=X({type:a,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,n){t&2&&R("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",A],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",le]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[be([{provide:la,useExisting:a}]),_e]})}return a})(),ca=new H("CdkDropListGroup");var fa=(()=>{class a{element=u(q);_changeDetectorRef=u(W);_scrollDispatcher=u(gn);_dir=u(it,{optional:!0});_group=u(ca,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new N;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=u(Ie).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new M;entered=new M;exited=new M;sorted=new M;_unsortedItems=new Set;constructor(){let e=u(_a,{optional:!0}),t=u(Jt);this._dropListRef=To(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(n,r)=>this.enterPredicate(n.data,r.data),this._dropListRef.sortPredicate=(n,r,c)=>this.sortPredicate(n,r.data,c.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),a._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=a._dropLists.indexOf(this);e>-1&&a._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(he(this._dir.value),Z(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=hn(this.connectedTo).map(n=>{if(typeof n=="string"){let r=a._dropLists.find(c=>c.id===n);return r}return n});if(this._group&&this._group._items.forEach(n=>{t.indexOf(n)===-1&&t.push(n)}),!this._scrollableParentsResolved){let n=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(r=>r.getElementRef().nativeElement);this._dropListRef.withScrollableParents(n),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let n=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(n)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=ai(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(n=>n&&n!==this).map(n=>n._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),dt(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:t,draggingDisabled:n,sortingDisabled:r,listAutoScrollDisabled:c,listOrientation:_}=e;this.disabled=n??!1,this.sortingDisabled=r??!1,this.autoScrollDisabled=c??!1,this.orientation=_||"vertical",this.lockAxis=t||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=X({type:a,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,n){t&2&&(G("id",n.id),R("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",A],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",A],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",A],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",A]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[be([{provide:ca,useValue:void 0},{provide:ua,useExisting:a}])]})}return a})();var Oo=a=>({max:a}),Ro=a=>({name:a}),va=(a,i)=>i.id;function Ao(a,i){a&1&&(l(0,"span",13),d(1),p(2,"translate"),o()),a&2&&(s(),h(m(2,1,"POST_PAGE.PRIMARY_IMAGE")))}function Mo(a,i){if(a&1){let e=F();l(0,"button",16),p(1,"translate"),E("click",function(){D(e);let n=b().$implicit,r=b(2);return O(r.setPrimaryImage.emit(n.id))}),l(2,"span",5),d(3,"star_border"),o()()}a&2&&G("aria-label",m(1,1,"POST_PAGE.SET_PRIMARY"))}function No(a,i){a&1&&(l(0,"span",15)(1,"span",5),d(2,"star"),o()())}function Fo(a,i){if(a&1&&(l(0,"div",11),x(1,"img",12),y(2,Ao,3,3,"span",13),y(3,Mo,4,3,"button",14)(4,No,3,0,"span",15),o()),a&2){let e=i.$implicit,t=b(2);R("is-primary",e.id===t.primaryExistingId),s(),g("src",e.thumbnailUrl,we),s(),S(e.id===t.primaryExistingId?2:-1),s(),S(e.id!==t.primaryExistingId?3:4)}}function Lo(a,i){if(a&1&&(l(0,"p",8)(1,"span",5),d(2,"photo_library"),o(),d(3),p(4,"translate"),o(),l(5,"div",9),C(6,Fo,5,5,"div",10,va),o()),a&2){let e=b();s(3),T(" ",m(4,1,"POST_PAGE.EXISTING_IMAGES")," "),s(3),P(e.existingImages)}}function Go(a,i){a&1&&(l(0,"span",13),d(1),p(2,"translate"),o()),a&2&&(s(),h(m(2,1,"POST_PAGE.PRIMARY_IMAGE")))}function Bo(a,i){if(a&1&&(l(0,"div",22)(1,"span",25),d(2),o(),x(3,"div",26),o()),a&2){let e=b().$implicit;s(2),T("",e.progress,"%"),s(),Re("width",e.progress+"%")}}function zo(a,i){a&1&&(l(0,"div",23)(1,"span",5),d(2,"error"),o()())}function Vo(a,i){if(a&1){let e=F();l(0,"div",20),x(1,"img",21),y(2,Go,3,3,"span",13),y(3,Bo,4,3,"div",22),y(4,zo,3,0,"div",23),l(5,"button",24),p(6,"translate"),E("click",function(){let n=D(e).$implicit,r=b(2);return O(r.remove(n.id))}),l(7,"span",5),d(8,"close"),o()()()}if(a&2){let e=i.$implicit,t=i.$index,n=b(2);R("is-primary",t===0&&!n.existingImages.length),s(),g("src",e.previewUrl,we)("alt",e.name),s(),S(t===0&&!n.existingImages.length?2:-1),s(),S(e.uploading?3:-1),s(),S(e.error?4:-1),s(),G("aria-label",Y(6,8,"POST_PAGE.REMOVE_IMAGE",ve(11,Ro,e.name)))}}function Uo(a,i){if(a&1){let e=F();l(0,"p",8)(1,"span",5),d(2,"drag_indicator"),o(),d(3),p(4,"translate"),o(),l(5,"div",17),E("cdkDropListDropped",function(n){D(e);let r=b();return O(r.reorder(n))}),C(6,Vo,9,13,"div",18,va),o(),l(8,"p",19),d(9),o()}if(a&2){let e=b();s(3),T(" ",m(4,3,"POST_PAGE.REORDER_IMAGES_HINT")," "),s(3),P(e.images),s(3),vt("",e.images.length," / ",e.MAX)}}var ba=20,Ho=10*1024*1024,Yo=.82,Ii=1920,Kt=class a{images=[];imagesChange=new M;existingImages=[];primaryExistingId=null;setPrimaryImage=new M;isDragOver=w(!1);MAX=ba;onDragOver(i){i.preventDefault(),this.isDragOver.set(!0)}onDragLeave(){this.isDragOver.set(!1)}onDrop(i){i.preventDefault(),this.isDragOver.set(!1),this.addFiles(Array.from(i.dataTransfer?.files??[]))}openPicker(i){let e=document.createElement("input");e.type="file",e.accept="image/*",e.multiple=!i,i&&e.setAttribute("capture","environment"),e.onchange=()=>this.addFiles(Array.from(e.files??[])),e.click()}async addFiles(i){let e=ba-this.images.length;if(e<=0)return;let t=i.filter(r=>r.type.startsWith("image/")&&r.size<=Ho).slice(0,e),n=await Promise.all(t.map(async r=>{let c=await this.compress(r);return{id:Math.random().toString(36).slice(2),name:r.name,blob:c,previewUrl:URL.createObjectURL(c),progress:0,uploading:!1,error:!1}}));this.imagesChange.emit([...this.images,...n])}reorder(i){let e=[...this.images];jt(e,i.previousIndex,i.currentIndex),this.imagesChange.emit(e)}remove(i){let e=this.images.find(t=>t.id===i);e&&URL.revokeObjectURL(e.previewUrl),this.imagesChange.emit(this.images.filter(t=>t.id!==i))}compress(i){return new Promise((e,t)=>{let n=URL.createObjectURL(i),r=new Image;r.onload=()=>{URL.revokeObjectURL(n);let{width:c,height:_}=r;c>Ii&&(_=Math.round(_*Ii/c),c=Ii);let f=document.createElement("canvas");f.width=c,f.height=_;let v=f.getContext("2d");v.drawImage(r,0,0,c,_),this.addWatermark(v,c,_),f.toBlob(k=>k?e(k):t(new Error("compress failed")),"image/webp",Yo)},r.onerror=()=>t(new Error("load failed")),r.src=n})}addWatermark(i,e,t){let n="barmha.com",r=Math.max(18,Math.round(Math.min(e,t)*.042));i.save(),i.translate(e/2,t/2),i.rotate(-Math.PI/8),i.font=`600 ${r}px Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.letterSpacing="0.06em",i.shadowColor="rgba(0, 0, 0, 0.25)",i.shadowBlur=Math.round(r*.4),i.shadowOffsetX=0,i.shadowOffsetY=0,i.globalAlpha=.16,i.fillStyle="#ffffff",i.fillText(n,0,0),i.restore()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=L({type:a,selectors:[["app-post-step3"]],inputs:{images:"images",existingImages:"existingImages",primaryExistingId:"primaryExistingId"},outputs:{imagesChange:"imagesChange",setPrimaryImage:"setPrimaryImage"},decls:22,vars:19,consts:[[1,"drop-zone",3,"dragover","dragleave","drop"],[1,"material-symbols-outlined","dz-icon"],[1,"dz-title"],[1,"dz-btns"],["mat-flat-button","","color","primary",3,"click"],[1,"material-symbols-outlined"],["mat-stroked-button","",3,"click"],[1,"dz-hint"],[1,"strip-label"],[1,"thumb-row"],[1,"thumb-item",3,"is-primary"],[1,"thumb-item"],["alt","existing","draggable","false",3,"src"],[1,"primary-label"],["mat-icon-button","",1,"star-btn"],[1,"star-active"],["mat-icon-button","",1,"star-btn",3,"click"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"thumb-row",3,"cdkDropListDropped"],["cdkDrag","",1,"thumb-item",3,"is-primary"],[1,"count-hint"],["cdkDrag","",1,"thumb-item"],["draggable","false",3,"src","alt"],[1,"upload-overlay"],[1,"upload-overlay","error-overlay"],["mat-icon-button","",1,"remove-btn",3,"click"],[1,"upload-pct"],[1,"upload-bar"]],template:function(e,t){e&1&&(l(0,"div",0),E("dragover",function(r){return t.onDragOver(r)})("dragleave",function(){return t.onDragLeave()})("drop",function(r){return t.onDrop(r)}),l(1,"span",1),d(2,"cloud_upload"),o(),l(3,"p",2),d(4),p(5,"translate"),o(),l(6,"div",3)(7,"button",4),E("click",function(){return t.openPicker(!1)}),l(8,"span",5),d(9,"photo_library"),o(),d(10),p(11,"translate"),o(),l(12,"button",6),E("click",function(){return t.openPicker(!0)}),l(13,"span",5),d(14,"photo_camera"),o(),d(15),p(16,"translate"),o()(),l(17,"p",7),d(18),p(19,"translate"),o()(),y(20,Lo,8,3),y(21,Uo,10,5)),e&2&&(R("drag-over",t.isDragOver()),s(4),h(m(5,8,"POST.DROP_IMAGES")),s(6),T(" ",m(11,10,"POST.FROM_GALLERY")," "),s(5),T(" ",m(16,12,"POST.FROM_CAMERA")," "),s(3),T(" ",Y(19,14,"POST_PAGE.IMAGES_HINT",ve(17,Oo,t.MAX))," "),s(2),S(t.existingImages.length?20:-1),s(),S(t.images.length?21:-1))},dependencies:[ga,fa,Ot,Dt,Ce],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block}.drop-zone[_ngcontent-%COMP%]{border:2px dashed var(--b-border);border-radius:var(--b-radius-md);padding:40px 24px;text-align:center;cursor:pointer;transition:border-color .2s,background .2s;display:flex;flex-direction:column;align-items:center;gap:12px}.drop-zone.drag-over[_ngcontent-%COMP%]{border-color:var(--b-primary);background:color-mix(in srgb,var(--b-primary) 6%,transparent)}.dz-icon[_ngcontent-%COMP%]{font-size:56px;color:var(--b-text-hint)}.dz-title[_ngcontent-%COMP%]{margin:0;font-size:1rem;color:var(--b-text-secondary)}.dz-btns[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}.dz-hint[_ngcontent-%COMP%]{margin:0;font-size:.75rem;color:var(--b-text-hint)}.strip-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;font-size:.78rem;color:var(--b-text-secondary);margin:16px 0 8px}.strip-label[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:16px}.thumb-row[_ngcontent-%COMP%]{display:flex;gap:10px;overflow-x:auto;padding-bottom:8px;scrollbar-width:none}.thumb-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.thumb-item[_ngcontent-%COMP%]{position:relative;flex:0 0 100px;height:80px;border-radius:var(--b-radius-sm);overflow:hidden;border:2px solid transparent;cursor:grab;transition:border-color .15s}.thumb-item.is-primary[_ngcontent-%COMP%]{border-color:var(--b-primary)}.thumb-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;pointer-events:none}.primary-label[_ngcontent-%COMP%]{position:absolute;bottom:0;inset-inline:0;background:var(--b-primary);color:#fff;font-size:.62rem;font-weight:700;text-align:center;padding:2px}.upload-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0000008c;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px}.upload-pct[_ngcontent-%COMP%]{color:#fff;font-size:.75rem;font-weight:700}.upload-bar[_ngcontent-%COMP%]{height:3px;background:var(--b-primary);position:absolute;bottom:0;inset-inline-start:0;transition:width .2s}.error-overlay[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{color:#e53935;font-size:28px}.remove-btn[_ngcontent-%COMP%]{position:absolute;top:2px;inset-inline-end:2px;background:#00000080!important;width:24px!important;height:24px!important;line-height:24px!important}.remove-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:14px;color:#fff}.count-hint[_ngcontent-%COMP%]{font-size:.75rem;color:var(--b-text-hint);margin:4px 0 0;text-align:end}.star-btn[_ngcontent-%COMP%]{position:absolute;top:2px;inset-inline-start:2px;background:#00000073!important;width:24px!important;height:24px!important}.star-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:14px;color:#fff}.star-btn[_ngcontent-%COMP%]:hover   .material-symbols-outlined[_ngcontent-%COMP%]{color:#ffd600}.star-active[_ngcontent-%COMP%]{position:absolute;top:4px;inset-inline-start:4px;display:inline-flex;align-items:center;justify-content:center}.star-active[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px;color:#ffd600;filter:drop-shadow(0 0 2px rgba(0,0,0,.6))}.cdk-drag-preview[_ngcontent-%COMP%]{border-radius:var(--b-radius-sm);box-shadow:var(--b-shadow-md);opacity:.85}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.3}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.thumb-row.cdk-drop-list-dragging[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}'],changeDetection:0})};var $o=["mapEl4"],xa=(a,i)=>i.id;function qo(a,i){if(a&1&&(l(0,"mat-option",6),d(1),p(2,"translatedValue"),o()),a&2){let e=i.$implicit;g("value",e.id),s(),T(" ",Y(2,2,e.translations,"name")||e.slug," ")}}function jo(a,i){if(a&1&&(l(0,"mat-option",6),d(1),p(2,"translatedValue"),o()),a&2){let e=i.$implicit;g("value",e.id),s(),T(" ",Y(2,2,e.translations,"name")||e.id," ")}}function Ko(a,i){a&1&&(l(0,"mat-option",13)(1,"span",19),d(2),p(3,"translate"),o()()),a&2&&(g("disabled",!0),s(2),h(m(3,2,"POST_PAGE.NO_LOCATIONS")))}function Xo(a,i){a&1&&(l(0,"mat-hint"),d(1),p(2,"translate"),o()),a&2&&(s(),h(m(2,1,"POST_PAGE.NO_LOCATIONS")))}function Wo(a,i){if(a&1&&(l(0,"span",18),d(1),p(2,"number"),p(3,"number"),o()),a&2){let e,t=b();s(),vt(" ",Y(2,2,(e=t.form.get("lat"))==null?null:e.value,"1.4-4"),", ",Y(3,5,(e=t.form.get("lng"))==null?null:e.value,"1.4-4")," ")}}var Xt=class a{form;section="";set stepActive(i){i&&setTimeout(()=>this.leafletMap?.invalidateSize(!0),300)}locSvc=u(En);governorates=this.locSvc.governorates;locations=this.locSvc.locationsForSelected;locSearch=w("");filteredLocations=ze(()=>{let i=this.locSearch().trim().toLowerCase();return i?this.locations().filter(e=>Object.values(e.translations??{}).map(n=>n?.name??"").join(" ").toLowerCase().includes(i)):this.locations()});mapEl=qi("mapEl4");leafletMap;marker;constructor(){Li(()=>{let i=this.mapEl();i&&!this.leafletMap&&Yi(()=>this.initMap(i.nativeElement))})}ngOnInit(){this.governorates().length?this.preSelectGovernorate():this.locSvc.loadGovernorates().subscribe(()=>{this.preSelectGovernorate()})}preSelectGovernorate(){let i=this.form.get("governorate")?.value;if(i){this.onGovChange(i);return}let e=this.locSvc.selectedGovernorate();e&&(this.form.get("governorate")?.setValue(e),this.onGovChange(e))}ngOnDestroy(){this.leafletMap?.remove(),this.leafletMap=void 0}onLocPanelOpen(i){i||this.locSearch.set("")}onGovChange(i){if(this.locSvc.selectGovernorate(i),this.locSvc.loadLocations(i).subscribe(),this.locSearch.set(""),this.form.patchValue({location_id:null}),this.leafletMap){let e=this.coordsForGov(i);e&&this.leafletMap.flyTo([e.lat,e.lng],e.zoom,{duration:.6})}}coordsForGov(i){let e=this.locSvc.governorates().find(t=>t.id===i);return e?Lt[e.slug]??null:null}async initMap(i){let e=await import("./chunk-KZOYMWUH.js");delete e.Icon.Default.prototype._getIconUrl,e.Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"});let t=this.form.get("lat")?.value,n=this.form.get("lng")?.value,r=13;if(!t||!n){let c=this.locSvc.selectedGovernorate(),_=c?this.coordsForGov(c):null;t=_?.lat??Lt.damascus.lat,n=_?.lng??Lt.damascus.lng,r=_?.zoom??12}this.leafletMap=e.map(i,{center:[t,n],zoom:r,scrollWheelZoom:!1}),e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(this.leafletMap),this.marker=e.marker([t,n],{draggable:!0}).addTo(this.leafletMap),this.marker.on("dragend",()=>{let c=this.marker.getLatLng();this.form.patchValue({lat:c.lat,lng:c.lng})}),this.leafletMap.on("click",c=>{this.marker.setLatLng(c.latlng),this.form.patchValue({lat:c.latlng.lat,lng:c.latlng.lng})}),setTimeout(()=>this.leafletMap?.invalidateSize(!0),350)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=L({type:a,selectors:[["app-post-step4"]],viewQuery:function(e,t){e&1&&Vi(t.mapEl,$o,5),e&2&&Ui()},inputs:{form:"form",section:"section",stepActive:"stepActive"},decls:34,vars:19,consts:[["locSearchInput",""],["mapEl4",""],[1,"loc-wrap",3,"formGroup"],[1,"dropdowns"],["appearance","outline",1,"gov-field"],["formControlName","governorate",3,"selectionChange"],[3,"value"],["appearance","outline",1,"loc-field"],["formControlName","location_id",3,"openedChange"],[1,"loc-search-option",3,"disabled","value"],[1,"loc-search-wrap",3,"click"],[1,"material-symbols-outlined","loc-search-icon"],[1,"loc-search-input",3,"input","keydown.space","click","placeholder","value"],[3,"disabled"],[1,"map-container"],[1,"step4-map"],[1,"map-hint"],[1,"material-symbols-outlined"],["dir","ltr",1,"coords"],[1,"loc-empty"]],template:function(e,t){if(e&1){let n=F();l(0,"div",2)(1,"div",3)(2,"mat-form-field",4)(3,"mat-label"),d(4),p(5,"translate"),o(),l(6,"mat-select",5),E("selectionChange",function(c){return t.onGovChange(c.value)}),C(7,qo,3,5,"mat-option",6,xa),o()(),l(9,"mat-form-field",7)(10,"mat-label"),d(11),p(12,"translate"),o(),l(13,"mat-select",8),E("openedChange",function(c){return t.onLocPanelOpen(c)}),l(14,"mat-option",9)(15,"div",10),E("click",function(c){return c.stopPropagation()}),l(16,"span",11),d(17,"search"),o(),l(18,"input",12,0),p(20,"translate"),E("input",function(){D(n);let c=se(19);return O(t.locSearch.set(c.value))})("keydown.space",function(c){return c.stopPropagation()})("click",function(c){return c.stopPropagation()}),o()()(),C(21,jo,3,5,"mat-option",6,xa),y(23,Ko,4,4,"mat-option",13),o(),y(24,Xo,3,3,"mat-hint"),o()(),l(25,"div",14),x(26,"div",15,1),l(28,"p",16)(29,"span",17),d(30,"drag_pan"),o(),d(31),p(32,"translate"),y(33,Wo,4,8,"span",18),o()()()}if(e&2){let n,r,c;g("formGroup",t.form),s(4),h(m(5,11,"GOVERNORATE.LABEL")),s(3),P(t.governorates()),s(4),h(m(12,13,"POST_PAGE.LOCATION_AREA")),s(3),g("disabled",!0)("value",null),s(4),g("placeholder",m(20,15,"COMMON.SEARCH"))("value",t.locSearch()),s(3),P(t.filteredLocations()),s(2),S(!t.filteredLocations().length&&((n=t.form.get("governorate"))!=null&&n.value)?23:-1),s(),S(!t.locations().length&&((r=t.form.get("governorate"))!=null&&r.value)?24:-1),s(7),T(" ",m(32,17,"POST_PAGE.MAP_HINT")," "),s(2),S((c=t.form.get("lat"))!=null&&c.value?33:-1)}},dependencies:[Ue,Ct,Pt,kt,It,Mt,Rt,At,Gt,Nt,xt,Ce,Ft],styles:["[_nghost-%COMP%]{display:block}.loc-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.dropdowns[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.gov-field[_ngcontent-%COMP%], .loc-field[_ngcontent-%COMP%]{flex:1;min-width:180px}.map-container[_ngcontent-%COMP%]{border-radius:var(--b-radius-md);overflow:hidden;border:1px solid var(--b-border)}.step4-map[_ngcontent-%COMP%]{height:300px;width:100%}.map-hint[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;background:var(--b-surface-dim);padding:8px 12px;font-size:.78rem;color:var(--b-text-secondary);margin:0}.map-hint[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:16px}.coords[_ngcontent-%COMP%]{color:var(--b-text-hint);font-size:.72rem;margin-inline-start:auto}.loc-search-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;border-bottom:1px solid var(--b-border);padding-bottom:4px;margin-bottom:4px}.loc-search-icon[_ngcontent-%COMP%]{font-size:17px;color:var(--b-text-hint);flex-shrink:0}.loc-search-input[_ngcontent-%COMP%]{flex:1;border:none;outline:none;background:transparent;font-size:.9rem;color:var(--b-text-primary);font-family:inherit;min-width:0}.loc-search-input[_ngcontent-%COMP%]::placeholder{color:var(--b-text-hint)}.loc-empty[_ngcontent-%COMP%]{color:var(--b-text-hint);font-size:.85rem}"],changeDetection:0})};var Qo=["stepper"],Zo=a=>({count:a}),Jo=(a,i)=>i.id,Wt=(a,i)=>i.value;function es(a,i){a&1&&(l(0,"span",30),d(1,"check"),o())}function ts(a,i){a&1&&(l(0,"span",30),d(1,"edit"),o())}function is(a,i){a&1&&(d(0),p(1,"translate")),a&2&&h(m(1,1,"POST_PAGE.STEPS.CATEGORY"))}function ns(a,i){if(a&1){let e=F();l(0,"button",34),E("click",function(){let n=D(e).$implicit,r=b(2);return O(r.selectSection(n.id))}),l(1,"span",35),d(2),o(),l(3,"span",36),d(4),p(5,"translate"),o()()}if(a&2){let e=i.$implicit;s(2),h(e.icon),s(2),h(m(5,2,e.labelKey))}}function as(a,i){if(a&1&&(l(0,"p",31),d(1),p(2,"translate"),o(),l(3,"div",32),C(4,ns,6,4,"button",33,Jo),o()),a&2){let e=b();s(),h(m(2,1,"POST_PAGE.SELECT_SECTION")),s(3),P(e.SECTIONS)}}function rs(a,i){if(a&1){let e=F();l(0,"button",41),E("click",function(){let n=D(e).$implicit,r=b(2);return O(r.selectSubType(n.value))}),l(1,"span",42),d(2),o(),d(3),p(4,"translate"),o()}if(a&2){let e,t=i.$implicit,n=b(2);R("selected",((e=n.step1Form.get("sub_type"))==null?null:e.value)===t.value),s(2),h(t.icon),s(),T(" ",m(4,4,t.labelKey)," ")}}function os(a,i){if(a&1){let e=F();l(0,"button",41),E("click",function(){let n=D(e).$implicit,r=b(3);return O(r.selectCategory(n.value))}),l(1,"span",42),d(2),o(),d(3),p(4,"translate"),o()}if(a&2){let e,t=i.$implicit,n=b(3);R("selected",((e=n.step1Form.get("category"))==null?null:e.value)===t.value),s(2),h(t.icon),s(),T(" ",m(4,4,t.labelKey)," ")}}function ss(a,i){if(a&1&&(l(0,"p",43),d(1),p(2,"translate"),o(),l(3,"div",44),C(4,os,5,6,"button",40,Wt),o()),a&2){let e=b(2);s(),h(m(2,1,"POST_PAGE.PROPERTY_TYPE")),s(3),P(e.PROP_CATEGORIES)}}function ls(a,i){if(a&1){let e=F();l(0,"div",37)(1,"button",38),E("click",function(){D(e);let n=b();return O(n.resetSection())}),l(2,"span",25),d(3,"arrow_back"),o()(),l(4,"p",31),d(5),p(6,"translate"),o()(),l(7,"div",39),C(8,rs,5,6,"button",40,Wt),o(),y(10,ss,6,3)}if(a&2){let e,t=b();s(5),h(m(6,2,"POST_PAGE.SELECT_PURPOSE")),s(3),P(t.PROP_PURPOSES),s(2),S((e=t.step1Form.get("sub_type"))!=null&&e.value?10:-1)}}function cs(a,i){if(a&1){let e=F();l(0,"button",41),E("click",function(){let n=D(e).$implicit,r=b(2);return O(r.selectSubType(n.value))}),l(1,"span",42),d(2),o(),d(3),p(4,"translate"),o()}if(a&2){let e,t=i.$implicit,n=b(2);R("selected",((e=n.step1Form.get("sub_type"))==null?null:e.value)===t.value),s(2),h(t.icon),s(),T(" ",m(4,4,t.labelKey)," ")}}function ds(a,i){if(a&1){let e=F();l(0,"div",37)(1,"button",38),E("click",function(){D(e);let n=b();return O(n.resetSection())}),l(2,"span",25),d(3,"arrow_back"),o()(),l(4,"p",31),d(5),p(6,"translate"),o()(),l(7,"div",44),C(8,cs,5,6,"button",40,Wt),o()}if(a&2){let e=b();s(5),h(m(6,1,"POST_PAGE.VEHICLE_TYPE")),s(3),P(e.VEHICLE_TYPES)}}function ps(a,i){if(a&1){let e=F();l(0,"button",41),E("click",function(){let n=D(e).$implicit,r=b(2);return O(r.selectSubType(n.value))}),l(1,"span",42),d(2),o(),d(3),p(4,"translate"),o()}if(a&2){let e,t=i.$implicit,n=b(2);R("selected",((e=n.step1Form.get("sub_type"))==null?null:e.value)===t.value),s(2),h(t.icon),s(),T(" ",m(4,4,t.labelKey)," ")}}function ms(a,i){if(a&1){let e=F();l(0,"div",37)(1,"button",38),E("click",function(){D(e);let n=b();return O(n.resetSection())}),l(2,"span",25),d(3,"arrow_back"),o()(),l(4,"p",31),d(5),p(6,"translate"),o()(),l(7,"div",44),C(8,ps,5,6,"button",40,Wt),o()}if(a&2){let e=b();s(5),h(m(6,1,"POST_PAGE.JOB_TYPE")),s(3),P(e.JOB_TYPES)}}function hs(a,i){if(a&1){let e=F();l(0,"div",37)(1,"button",38),E("click",function(){D(e);let n=b();return O(n.resetSection())}),l(2,"span",25),d(3,"arrow_back"),o()()(),l(4,"div",45)(5,"span",46),d(6),o(),l(7,"p"),d(8),p(9,"translate"),o()()}if(a&2){let e=b();s(6),T(" ",e.selectedSection()==="classifieds"?"sell":"handyman"," "),s(2),h(m(9,2,e.selectedSection()==="classifieds"?"POST_PAGE.CLASSIFIED_CONFIRM":"POST_PAGE.SERVICE_CONFIRM"))}}function _s(a,i){a&1&&(l(0,"div",10)(1,"button",16),d(2),p(3,"translate"),l(4,"span",25),d(5,"arrow_forward"),o()()()),a&2&&(s(2),T(" ",m(3,1,"POST.NEXT")," "))}function us(a,i){a&1&&(d(0),p(1,"translate")),a&2&&h(m(1,1,"POST_PAGE.STEPS.DETAILS"))}function gs(a,i){a&1&&(d(0),p(1,"translate")),a&2&&h(m(1,1,"POST_PAGE.STEPS.IMAGES"))}function fs(a,i){a&1&&(d(0),p(1,"translate")),a&2&&h(m(1,1,"POST_PAGE.STEPS.LOCATION"))}function bs(a,i){a&1&&(d(0),p(1,"translate")),a&2&&h(m(1,1,"POST_PAGE.STEPS.PUBLISH"))}function vs(a,i){if(a&1&&(x(0,"img",21),p(1,"translate")),a&2){let e=b();g("src",e.uploadImages[0].previewUrl,we)("alt",m(1,2,"POST_PAGE.LISTING_IMAGE_ALT"))}}function xs(a,i){a&1&&(l(0,"div",22)(1,"span",25),d(2,"image"),o(),l(3,"span"),d(4),p(5,"translate"),o()()),a&2&&(s(4),h(m(5,1,"POST_PAGE.NO_IMAGES")))}function ys(a,i){a&1&&(l(0,"span",24)(1,"span",25),d(2,"location_on"),o(),d(3),p(4,"translate"),o()),a&2&&(s(3),T(" ",m(4,1,"POST_PAGE.GOVERNORATE_SELECTED")," "))}function Ss(a,i){if(a&1&&(l(0,"span",24)(1,"span",25),d(2,"photo_library"),o(),d(3),p(4,"translate"),o()),a&2){let e=b();s(3),T(" ",Y(4,1,"POST_PAGE.IMAGE_COUNT",ve(4,Zo,e.uploadImages.length))," ")}}function Es(a,i){if(a&1&&(l(0,"div",26),x(1,"mat-progress-bar",47),l(2,"p"),d(3),o()()),a&2){let e=b();s(3),h(e.uploadProgress())}}function Cs(a,i){if(a&1&&(l(0,"div",27)(1,"span",25),d(2,"error_outline"),o(),d(3),o()),a&2){let e=b();s(3),T(" ",e.submitError()," ")}}var ya=[{id:"properties",labelKey:"POST_PAGE.SECTIONS.PROPERTIES",icon:"home_work"},{id:"vehicles",labelKey:"POST_PAGE.SECTIONS.VEHICLES",icon:"directions_car"},{id:"classifieds",labelKey:"POST_PAGE.SECTIONS.CLASSIFIEDS",icon:"sell"},{id:"jobs",labelKey:"POST_PAGE.SECTIONS.JOBS",icon:"work"},{id:"services",labelKey:"POST_PAGE.SECTIONS.SERVICES",icon:"handyman"}],Ps=[{value:"sale",labelKey:"POST_PAGE.PROPERTY_PURPOSES.SALE",icon:"sell"},{value:"rent",labelKey:"POST_PAGE.PROPERTY_PURPOSES.RENT",icon:"key"},{value:"wanted",labelKey:"POST_PAGE.PROPERTY_PURPOSES.WANTED",icon:"search"},{value:"commercial",labelKey:"POST_PAGE.PROPERTY_PURPOSES.COMMERCIAL",icon:"store"}],Is=[{value:"apartment",labelKey:"POST_PAGE.PROPERTY_CATEGORIES.APARTMENT",icon:"apartment"},{value:"villa",labelKey:"POST_PAGE.PROPERTY_CATEGORIES.VILLA",icon:"villa"},{value:"land",labelKey:"POST_PAGE.PROPERTY_CATEGORIES.LAND",icon:"landscape"},{value:"office",labelKey:"POST_PAGE.PROPERTY_CATEGORIES.OFFICE",icon:"business"},{value:"shop",labelKey:"POST_PAGE.PROPERTY_CATEGORIES.SHOP",icon:"storefront"},{value:"building",labelKey:"POST_PAGE.PROPERTY_CATEGORIES.BUILDING",icon:"domain"},{value:"farm",labelKey:"POST_PAGE.PROPERTY_CATEGORIES.FARM",icon:"agriculture"},{value:"other",labelKey:"POST_PAGE.PROPERTY_CATEGORIES.OTHER",icon:"more_horiz"}],ks=[{value:"sale",labelKey:"POST_PAGE.VEHICLE_TYPES.SALE",icon:"directions_car"},{value:"rent",labelKey:"POST_PAGE.VEHICLE_TYPES.RENT",icon:"car_rental"},{value:"commercial",labelKey:"POST_PAGE.VEHICLE_TYPES.COMMERCIAL",icon:"local_shipping"},{value:"motorcycle",labelKey:"POST_PAGE.VEHICLE_TYPES.MOTORCYCLE",icon:"two_wheeler"},{value:"boat",labelKey:"POST_PAGE.VEHICLE_TYPES.BOAT",icon:"directions_boat"}],Ts=[{value:"full_time",labelKey:"POST_PAGE.JOB_TYPES.FULL_TIME",icon:"work"},{value:"part_time",labelKey:"POST_PAGE.JOB_TYPES.PART_TIME",icon:"work_history"},{value:"freelance",labelKey:"POST_PAGE.JOB_TYPES.FREELANCE",icon:"laptop"},{value:"contract",labelKey:"POST_PAGE.JOB_TYPES.CONTRACT",icon:"assignment"}],Sa=class a{stepper;route=u(Xi);router=u(Wi);fb=u(sn);api=u(yt);snack=u(In);cdr=u(W);translate=u(Qi);draftSvc=u(Pn);selectedSection=w("");isEditMode=w(!1);submitting=w(!1);submitError=w("");uploadProgress=w("");step2Valid=w(!1);currentStepIndex=w(0);step2Sub;step1Form;step2Form;step4Form;uploadImages=[];editId="";editData=null;existingImages=[];primaryExistingId=w(null);SECTIONS=ya;PROP_PURPOSES=Ps;PROP_CATEGORIES=Is;VEHICLE_TYPES=ks;JOB_TYPES=Ts;ngOnInit(){this.step1Form=this.fb.group({section:["",I.required],sub_type:[""],category:[""]}),this.step2Form=this.buildStep2Form(""),this.watchStep2Status(),this.step4Form=this.fb.group({governorate:[null],location_id:[null],lat:[null],lng:[null]});let i=this.route.snapshot.paramMap.get("section"),e=this.route.snapshot.paramMap.get("id");i&&e?(this.isEditMode.set(!0),this.editId=e,this.selectedSection.set(i),this.step1Form.patchValue({section:i}),this.step2Form=this.buildStep2Form(i),this.loadEditData(i,e)):this.loadDraft()}ngAfterViewInit(){this.isEditMode()&&this.editData&&setTimeout(()=>{this.stepper.selectedIndex=1,this.cdr.markForCheck()},100)}onStepChange(i){this.currentStepIndex.set(i),this.saveDraft()}selectSection(i){this.selectedSection.set(i),this.step1Form.patchValue({section:i,sub_type:"",category:""}),this.updateStep1Validators(i),this.step2Form=this.buildStep2Form(i),this.watchStep2Status()}resetSection(){this.selectedSection.set(""),this.step1Form.patchValue({section:"",sub_type:"",category:""})}selectSubType(i){this.step1Form.patchValue({sub_type:i});let e=this.selectedSection();if(e==="properties"){let t={sale:"for_sale",rent:"for_rent",wanted:"for_sale",commercial:"for_sale"};this.step2Form.patchValue({purpose:t[i]??i,listing_intent:i==="wanted"?"wanted":"offer"})}e==="vehicles"&&this.step2Form.patchValue({listing_type:i}),e==="jobs"&&this.step2Form.patchValue({job_type:i})}selectCategory(i){if(this.step1Form.patchValue({category:i}),this.selectedSection()==="properties"){let n=new Set(["office","shop","building","warehouse","commercial","store","showroom"]).has(i)?"commercial":i==="international"?"international":"residential";this.step2Form.patchValue({category:n})}else this.step2Form.patchValue({category:i})}updateStep1Validators(i){let e=this.step1Form.get("sub_type");["properties","vehicles","jobs"].includes(i)?e.setValidators(I.required):e.clearValidators(),e.updateValueAndValidity()}previewTitle(){let i=this.selectedSection(),e=this.step2Form.getRawValue();return i==="properties"||i==="vehicles"?e.title??"":e.title_ar??""}sectionLabel(i){let e=ya.find(t=>t.id===i)?.labelKey;return e?this.translate.instant(e):i}watchStep2Status(){this.step2Sub?.unsubscribe(),this.step2Valid.set(this.step2Form.valid),this.step2Sub=this.step2Form.statusChanges.subscribe(()=>{this.step2Valid.set(this.step2Form.valid)})}ngOnDestroy(){this.step2Sub?.unsubscribe(),this.isEditMode()||this.saveDraft()}buildStep2Form(i){let e=this.step1Form?.get("sub_type")?.value??"",t=this.step1Form?.get("category")?.value??"";return i==="properties"?this.fb.group({listing_intent:["offer"],title:["",[I.required,I.minLength(10),I.maxLength(200)]],description:["",[I.required,I.minLength(20)]],purpose:[e,I.required],category:[t,I.required],price:[null],price_per_sqm:[null,[I.min(0)]],currency:["USD"],price_period:["monthly"],negotiable:[!1],hide_price:[!1],area_sqm:[null,[I.min(1),I.max(1e5)]],bedrooms:[null,[I.min(0),I.max(50)]],bathrooms:[null,[I.min(0),I.max(50)]],office_capacity:[null,[I.min(1)]],furnishing:["unfurnished"],contract_type:[""],deposit:[null],floor_number:[null],total_floors:[null],kahramaa_included:[!1],internet_included:[!1],amenities:[[]],no_commission:[!1],reference_code:[""],nearby:[[]]}):i==="vehicles"?this.fb.group({listing_intent:["offer"],title:["",[I.required,I.minLength(5),I.maxLength(200)]],description:["",I.required],listing_type:[e||"sale",I.required],make:[null,I.required],model_name:[""],trim:[""],year:[null,[I.required,I.min(1950),I.max(new Date().getFullYear()+2)]],mileage:[null,I.min(0)],fuel_type:["petrol",I.required],gear_type:["automatic"],body_style:["sedan"],condition:["used",I.required],price:[null],currency:["USD"],negotiable:[!1],hide_price:[!1],engine_size:[null],cylinders:[null],doors:[null],seats:[null],wheel_drive:["front"],color_exterior:[""],color_interior:[""],import_source:[""],insurance_type:[""],features:[[]],under_warranty:[!1],computer_check:[!1]}):i==="classifieds"?this.fb.group({title_ar:["",I.required],title_en:[""],description_ar:["",I.required],description_en:[""],category:[null,I.required],condition:["used",I.required],price:[null],currency:["USD"],negotiable:[!1],hide_price:[!1]}):i==="jobs"?this.fb.group({title_ar:["",I.required],title_en:[""],description_ar:["",I.required],description_en:[""],category:[null,I.required],job_type:[e||"full_time",I.required],experience:["entry",I.required],gender:["any"],nationality:[""],min_salary:[null],max_salary:[null],currency:["USD"],salary_period:["monthly"],hide_salary:[!1],is_remote:[!1],quick_apply:[!1]}):i==="services"?this.fb.group({title_ar:["",I.required],title_en:[""],description_ar:["",I.required],description_en:[""],category:[null,I.required],price_type:["fixed"],min_price:[null],max_price:[null],currency:["USD"],is_remote:[!1]}):this.fb.group({_:[""]})}submit(){if(this.submitting())return;this.submitError.set(""),this.submitting.set(!0),this.uploadProgress.set(this.translate.instant("POST_PAGE.PROGRESS_PUBLISHING"));let i=this.selectedSection(),e=this.buildPayload(),t=this.isEditMode(),n=`/${i}/`;(t?this.api.patch(n+this.editId+"/",e):this.api.post(n,e)).pipe(Ee(c=>{if(!this.uploadImages.length)return U(c);this.uploadProgress.set(this.translate.instant("POST_PAGE.PROGRESS_UPLOADING_IMAGES",{done:0,total:this.uploadImages.length}));let _=this.uploadImages.map((f,v)=>this.uploadImage(i,c.id,f,v));return ct(_).pipe(Te(()=>U([])),Ee(()=>U(c)))}),Te(c=>(this.submitError.set(this.translate.instant("POST_PAGE.SUBMIT_ERROR")),this.submitting.set(!1),this.cdr.markForCheck(),U(null)))).subscribe(c=>{c&&(this.submitting.set(!1),this.clearDraft(),this.snack.open(this.translate.instant(this.isEditMode()?"POST_PAGE.UPDATE_SUCCESS":"POST_PAGE.PUBLISH_SUCCESS"),"",{duration:3e3,panelClass:"snack-success",verticalPosition:"top",horizontalPosition:"center"}),this.router.navigate(["/",i,c.id]))})}uploadImage(i,e,t,n){let r=new FormData;return r.append("image",t.blob,t.name.endsWith(".webp")?t.name:t.name+".webp"),t.uploading=!0,t.progress=0,this.api.upload(`/${i}/${e}/images/`,r).pipe(Te(()=>(t.error=!0,U(null))),Ee(c=>c?(c.type===ni.UploadProgress?(t.progress=Math.round(100*(c.loaded/(c.total??1))),this.uploadProgress.set(this.translate.instant("POST_PAGE.PROGRESS_UPLOADING_IMAGES",{done:n+1,total:this.uploadImages.length})),this.cdr.markForCheck()):c.type===ni.Response&&(t.uploading=!1,t.progress=100),U(c)):U(null)))}buildPayload(){let i=this.selectedSection(),e=this.step2Form.getRawValue(),t=this.step4Form.getRawValue(),n=v=>v!=null?Math.round(v*1e7)/1e7:null,r={location:t.location_id??null,governorate_id:t.governorate??null,latitude:n(t.lat),longitude:n(t.lng)};if(i==="properties"){let v=this.step1Form.get("category")?.value||"";return de(ee(ee({},e),r),{property_type:v})}if(i==="vehicles"){let v=this.step1Form.get("sub_type")?.value||"sale",k={sale:"sale",rent:"rent",commercial:"sale",motorcycle:"sale",boat:"sale"},K={sale:"car",rent:"car",commercial:"commercial",motorcycle:"motorbike",boat:"boat"},$=ke=>ke==null?"":String(ke);return de(ee({},e),{location:t.location_id??null,governorate_id:t.governorate??null,listing_type:k[v]??"sale",category:K[v]??"car",engine_size:$(e.engine_size),trim:$(e.trim),color_exterior:$(e.color_exterior),color_interior:$(e.color_interior),import_source:$(e.import_source),insurance_type:$(e.insurance_type)})}let c=["title_ar","title_en","description_ar","description_en"],_={ar:{title:e.title_ar,description:e.description_ar}};e.title_en&&(_.en={title:e.title_en,description:e.description_en??""});let f=ee({translations:_},r);for(let[v,k]of Object.entries(e))c.includes(v)||(f[v]=k);return i==="services"&&e.price_type==="fixed"&&(f.price=e.min_price??null),f}loadEditData(i,e){this.api.get(`/${i}/${e}/`).pipe(Te(()=>U(null))).subscribe(t=>{if(t){if(this.editData=t,this.step1Form.patchValue({section:i,sub_type:t.purpose??t.listing_type??t.job_type??""}),this.step2Form=this.buildStep2Form(i),this.watchStep2Status(),i==="properties"?this.step2Form.patchValue(t):i==="vehicles"?this.step2Form.patchValue(de(ee({},t),{make:t.make??null})):this.step2Form.patchValue(de(ee({},t),{title_ar:t.translations?.ar?.title??"",title_en:t.translations?.en?.title??"",description_ar:t.translations?.ar?.description??"",description_en:t.translations?.en?.description??""})),this.step4Form.patchValue({governorate:t.governorate_id??null,location_id:t.location??null,lat:t.latitude??null,lng:t.longitude??null}),Array.isArray(t.images)){this.existingImages=t.images.map(r=>({id:r.id,thumbnailUrl:r.card??r.thumbnail??r.image??"",isPrimary:!!r.is_primary}));let n=this.existingImages.find(r=>r.isPrimary);this.primaryExistingId.set(n?.id??this.existingImages[0]?.id??null)}this.cdr.markForCheck()}})}onSetPrimaryImage(i){let e=this.selectedSection();!e||!this.editId||this.api.patch(`/${e}/${this.editId}/`,{primary_image_id:i}).subscribe({next:()=>{this.primaryExistingId.set(i),this.existingImages=this.existingImages.map(t=>de(ee({},t),{isPrimary:t.id===i})),this.cdr.markForCheck(),this.snack.open(this.translate.instant("POST_PAGE.PRIMARY_IMAGE_SET"),void 0,{duration:2e3,panelClass:"snack-success",verticalPosition:"top",horizontalPosition:"center"})}})}saveDraft(){let i=this.selectedSection();i&&this.draftSvc.save({section:i,step1:this.step1Form.value,step2:this.step2Form.value,step4:this.step4Form.value})}loadDraft(){let i=this.draftSvc.draft();i?.section&&(this.selectSection(i.section),this.step1Form.patchValue(i.step1??{}),this.step2Form.patchValue(i.step2??{}),this.step4Form.patchValue(i.step4??{}))}clearDraft(){this.draftSvc.clear()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=L({type:a,selectors:[["app-post"]],viewQuery:function(e,t){if(e&1&&fe(Qo,5),e&2){let n;z(n=V())&&(t.stepper=n.first)}},decls:84,vars:74,consts:[["stepper",""],[1,"post-wrap"],[1,"post-header"],[1,"post-title"],[1,"post-stepper",3,"selectionChange","linear"],["matStepperIcon","done"],["matStepperIcon","edit"],[3,"stepControl","label"],["matStepLabel",""],[1,"step-body"],[1,"step-actions"],[3,"section","form"],["mat-stroked-button","","matStepperPrevious",""],["mat-flat-button","","color","primary","matStepperNext","",3,"disabled"],[3,"label"],[3,"imagesChange","setPrimaryImage","images","existingImages","primaryExistingId"],["mat-flat-button","","color","primary","matStepperNext",""],[3,"form","section","stepActive"],[1,"preview-card"],[1,"preview-title"],["size","large",3,"price","currency"],[1,"preview-img",3,"src","alt"],[1,"preview-no-img"],[1,"preview-specs"],[1,"spec-chip"],[1,"material-symbols-outlined"],[1,"submit-progress"],[1,"submit-error"],["mat-stroked-button","","matStepperPrevious","",3,"disabled"],["mat-flat-button","","color","primary",3,"click","disabled"],[1,"material-symbols-outlined","step-icon-sym"],[1,"step-hint"],[1,"section-grid"],[1,"section-tile"],[1,"section-tile",3,"click"],[1,"material-symbols-outlined","tile-icon"],[1,"tile-label"],[1,"sub-header"],["mat-icon-button","",3,"click"],[1,"tile-row"],[1,"sub-tile",3,"selected"],[1,"sub-tile",3,"click"],[1,"material-symbols-outlined","tile-icon-sm"],[1,"step-hint",2,"margin-top","16px"],[1,"tile-row","wrap"],[1,"section-confirm"],[1,"material-symbols-outlined","confirm-icon"],["mode","indeterminate"]],template:function(e,t){if(e&1&&(l(0,"div",1)(1,"div",2)(2,"h2",3),d(3),p(4,"translate"),o()(),l(5,"mat-stepper",4,0),E("selectionChange",function(r){return t.onStepChange(r.selectedIndex)}),ae(7,es,2,0,"ng-template",5)(8,ts,2,0,"ng-template",6),l(9,"mat-step",7),p(10,"translate"),ae(11,is,2,3,"ng-template",8),l(12,"div",9),y(13,as,6,3),y(14,ls,11,4),y(15,ds,10,3),y(16,ms,10,3),y(17,hs,10,4),y(18,_s,6,3,"div",10),o()(),l(19,"mat-step",7),p(20,"translate"),ae(21,us,2,3,"ng-template",8),l(22,"div",9),x(23,"app-post-step2",11),l(24,"div",10)(25,"button",12),d(26),p(27,"translate"),o(),l(28,"button",13),d(29),p(30,"translate"),o()()()(),l(31,"mat-step",14),p(32,"translate"),ae(33,gs,2,3,"ng-template",8),l(34,"div",9)(35,"app-post-step3",15),E("imagesChange",function(r){return t.uploadImages=r})("setPrimaryImage",function(r){return t.onSetPrimaryImage(r)}),o(),l(36,"div",10)(37,"button",12),d(38),p(39,"translate"),o(),l(40,"button",16),d(41),p(42,"translate"),o()()()(),l(43,"mat-step",7),p(44,"translate"),ae(45,fs,2,3,"ng-template",8),l(46,"div",9),x(47,"app-post-step4",17),l(48,"div",10)(49,"button",12),d(50),p(51,"translate"),o(),l(52,"button",16),d(53),p(54,"translate"),o()()()(),l(55,"mat-step",14),p(56,"translate"),ae(57,bs,2,3,"ng-template",8),l(58,"div",9)(59,"div",18)(60,"h3",19),d(61),p(62,"translate"),o(),x(63,"app-price-badge",20),y(64,vs,2,4,"img",21)(65,xs,6,3,"div",22),l(66,"div",23)(67,"span",24)(68,"span",25),d(69,"category"),o(),d(70),o(),y(71,ys,5,3,"span",24),y(72,Ss,5,6,"span",24),o()(),y(73,Es,4,1,"div",26),y(74,Cs,4,1,"div",27),l(75,"div",10)(76,"button",28),d(77),p(78,"translate"),o(),l(79,"button",29),E("click",function(){return t.submit()}),l(80,"span",25),d(81,"publish"),o(),d(82),p(83,"translate"),o()()()()()()),e&2){let n,r,c;s(3),T(" ",m(4,44,t.isEditMode()?"POST_PAGE.EDIT_TITLE":"POST_PAGE.NEW_TITLE")," "),s(2),g("linear",!0),s(4),g("stepControl",t.step1Form)("label",m(10,46,"POST_PAGE.STEPS.CATEGORY")),s(4),S(t.selectedSection()?-1:13),s(),S(t.selectedSection()==="properties"?14:-1),s(),S(t.selectedSection()==="vehicles"?15:-1),s(),S(t.selectedSection()==="jobs"?16:-1),s(),S(t.selectedSection()==="classifieds"||t.selectedSection()==="services"?17:-1),s(),S(t.step1Form.valid?18:-1),s(),g("stepControl",t.step2Form)("label",m(20,48,"POST_PAGE.STEPS.DETAILS")),s(4),g("section",t.selectedSection())("form",t.step2Form),s(3),h(m(27,50,"POST.PREVIOUS")),s(2),g("disabled",!t.step2Valid()),s(),T(" ",m(30,52,"POST.NEXT")," "),s(2),g("label",m(32,54,"POST_PAGE.STEPS.IMAGES")),s(4),g("images",t.uploadImages)("existingImages",t.existingImages)("primaryExistingId",t.primaryExistingId()),s(3),h(m(39,56,"POST.PREVIOUS")),s(3),h(m(42,58,"POST.NEXT")),s(2),g("stepControl",t.step4Form)("label",m(44,60,"POST_PAGE.STEPS.LOCATION")),s(4),g("form",t.step4Form)("section",t.selectedSection())("stepActive",t.currentStepIndex()===3),s(3),h(m(51,62,"POST.PREVIOUS")),s(3),h(m(54,64,"POST.NEXT")),s(2),g("label",m(56,66,"POST_PAGE.STEPS.PREVIEW")),s(6),T(" ",t.previewTitle()||m(62,68,"POST_PAGE.NO_TITLE_YET")," "),s(2),g("price",((n=t.step2Form.get("price"))==null?null:n.value)??null)("currency",((r=t.step2Form.get("currency"))==null?null:r.value)??"USD"),s(),S(t.uploadImages.length?64:65),s(6),T(" ",t.sectionLabel(t.selectedSection())," "),s(),S((c=t.step4Form.get("governorate"))!=null&&c.value?71:-1),s(),S(t.uploadImages.length?72:-1),s(),S(t.submitting()?73:-1),s(),S(t.submitError()?74:-1),s(2),g("disabled",t.submitting()),s(),T(" ",m(78,70,"POST.PREVIOUS")," "),s(2),g("disabled",t.submitting()),s(3),T(" ",m(83,72,t.isEditMode()?"POST_PAGE.SAVE_CHANGES":"POST.SUBMIT")," ")}},dependencies:[Ue,Vn,di,nt,Un,Hn,ci,Ot,Dt,$n,Ht,Kt,Xt,Cn,Ce],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block}.post-wrap[_ngcontent-%COMP%]{max-width:780px;margin:0 auto;padding:16px}.post-header[_ngcontent-%COMP%]{margin-bottom:16px}.post-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;margin:0;color:var(--b-text-primary)}.post-stepper[_ngcontent-%COMP%]{background:transparent!important}.step-body[_ngcontent-%COMP%]{padding:20px 0;display:flex;flex-direction:column;gap:16px}.step-hint[_ngcontent-%COMP%]{margin:0 0 12px;font-size:.875rem;color:var(--b-text-secondary);font-weight:600}.section-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:12px}.section-tile[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;padding:20px 12px;background:var(--b-surface-card);border:1.5px solid var(--b-border);border-radius:var(--b-radius-md);cursor:pointer;transition:border-color .15s,box-shadow .15s,transform .15s;font-family:inherit;font-size:.9rem;color:var(--b-text-primary)}.section-tile[_ngcontent-%COMP%]:hover{border-color:var(--b-primary);box-shadow:var(--b-shadow-md);transform:translateY(-2px)}.tile-icon[_ngcontent-%COMP%]{font-size:36px;color:var(--b-primary)}.tile-label[_ngcontent-%COMP%]{font-weight:500}.sub-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.tile-row[_ngcontent-%COMP%]{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}.tile-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.tile-row.wrap[_ngcontent-%COMP%]{flex-wrap:wrap;overflow:visible}.sub-tile[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:8px 14px;background:var(--b-surface-card);border:1.5px solid var(--b-border);border-radius:var(--b-radius-pill);cursor:pointer;white-space:nowrap;font-family:inherit;font-size:.85rem;color:var(--b-text-primary);transition:border-color .15s,background .15s}.sub-tile.selected[_ngcontent-%COMP%]{border-color:var(--b-primary);background:color-mix(in srgb,var(--b-primary) 10%,transparent);color:var(--b-primary);font-weight:600}.tile-icon-sm[_ngcontent-%COMP%]{font-size:18px}.section-confirm[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px;color:var(--b-primary)}.section-confirm[_ngcontent-%COMP%]   .confirm-icon[_ngcontent-%COMP%]{font-size:48px}.section-confirm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;font-size:1.1rem;margin:0}.step-actions[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:flex-end;padding-top:8px}.preview-card[_ngcontent-%COMP%]{background:var(--b-surface-card);border:1px solid var(--b-border);border-radius:var(--b-radius-md);padding:20px;display:flex;flex-direction:column;gap:14px}.preview-title[_ngcontent-%COMP%]{margin:0;font-size:1.05rem;font-weight:600;color:var(--b-text-primary)}.preview-img[_ngcontent-%COMP%]{width:100%;max-height:260px;object-fit:cover;border-radius:var(--b-radius-sm)}.preview-no-img[_ngcontent-%COMP%]{height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--b-surface-dim);border-radius:var(--b-radius-sm);gap:6px;color:var(--b-text-hint)}.preview-no-img[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:40px}.preview-specs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.spec-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;background:var(--b-surface-dim);border-radius:var(--b-radius-pill);padding:4px 10px;font-size:.75rem;color:var(--b-text-secondary)}.spec-chip[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:14px}.submit-progress[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.submit-progress[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.875rem;color:var(--b-text-secondary);margin:0;text-align:center}.submit-error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 14px;background:color-mix(in srgb,#E53935 12%,transparent);border-radius:var(--b-radius-sm);color:#e53935;font-size:.875rem}.submit-error[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px}.post-stepper[_ngcontent-%COMP%]     .mat-stepper-horizontal-line{display:none!important}.post-stepper[_ngcontent-%COMP%]     .mat-step-icon-state-done{background-color:var(--b-accent)!important}.step-icon-sym[_ngcontent-%COMP%]{font-size:16px;line-height:1}@media(max-width:768px){.post-wrap[_ngcontent-%COMP%]{padding-bottom:80px}}'],changeDetection:0})};export{Sa as PostComponent};
