(function(){const dt=document.createElement("link").relList;if(dt&&dt.supports&&dt.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))v(N);new MutationObserver(N=>{for(const k of N)if(k.type==="childList")for(const ht of k.addedNodes)ht.tagName==="LINK"&&ht.rel==="modulepreload"&&v(ht)}).observe(document,{childList:!0,subtree:!0});function F(N){const k={};return N.integrity&&(k.integrity=N.integrity),N.referrerPolicy&&(k.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?k.credentials="include":N.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function v(N){if(N.ep)return;N.ep=!0;const k=F(N);fetch(N.href,k)}})();var af={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr;function Jh(){if(mr)return Su;mr=1;var M=Symbol.for("react.transitional.element"),dt=Symbol.for("react.fragment");function F(v,N,k){var ht=null;if(k!==void 0&&(ht=""+k),N.key!==void 0&&(ht=""+N.key),"key"in N){k={};for(var Nt in N)Nt!=="key"&&(k[Nt]=N[Nt])}else k=N;return N=k.ref,{$$typeof:M,type:v,key:ht,ref:N!==void 0?N:null,props:k}}return Su.Fragment=dt,Su.jsx=F,Su.jsxs=F,Su}var hr;function kh(){return hr||(hr=1,af.exports=Jh()),af.exports}var Bt=kh(),uf={exports:{}},x={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr;function Wh(){if(vr)return x;vr=1;var M=Symbol.for("react.transitional.element"),dt=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Nt=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),st=Symbol.iterator;function kt(o){return o===null||typeof o!="object"?null:(o=st&&o[st]||o["@@iterator"],typeof o=="function"?o:null)}var Yt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qt=Object.assign,Ol={};function Wt(o,E,z){this.props=o,this.context=E,this.refs=Ol,this.updater=z||Yt}Wt.prototype.isReactComponent={},Wt.prototype.setState=function(o,E){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,E,"setState")},Wt.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function kl(){}kl.prototype=Wt.prototype;function Ht(o,E,z){this.props=o,this.context=E,this.refs=Ol,this.updater=z||Yt}var il=Ht.prototype=new kl;il.constructor=Ht,qt(il,Wt.prototype),il.isPureReactComponent=!0;var El=Array.isArray;function jt(){}var V={H:null,A:null,T:null,S:null},Qt=Object.prototype.hasOwnProperty;function Tl(o,E,z){var D=z.ref;return{$$typeof:M,type:o,key:E,ref:D!==void 0?D:null,props:z}}function Ge(o,E){return Tl(o.type,E,o.props)}function Al(o){return typeof o=="object"&&o!==null&&o.$$typeof===M}function Gt(o){var E={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(z){return E[z]})}var be=/\/+/g;function Ul(o,E){return typeof o=="object"&&o!==null&&o.key!=null?Gt(""+o.key):E.toString(36)}function gl(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(jt,jt):(o.status="pending",o.then(function(E){o.status==="pending"&&(o.status="fulfilled",o.value=E)},function(E){o.status==="pending"&&(o.status="rejected",o.reason=E)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function S(o,E,z,D,B){var Q=typeof o;(Q==="undefined"||Q==="boolean")&&(o=null);var I=!1;if(o===null)I=!0;else switch(Q){case"bigint":case"string":case"number":I=!0;break;case"object":switch(o.$$typeof){case M:case dt:I=!0;break;case $:return I=o._init,S(I(o._payload),E,z,D,B)}}if(I)return B=B(o),I=D===""?"."+Ul(o,0):D,El(B)?(z="",I!=null&&(z=I.replace(be,"$&/")+"/"),S(B,E,z,"",function(_a){return _a})):B!=null&&(Al(B)&&(B=Ge(B,z+(B.key==null||o&&o.key===B.key?"":(""+B.key).replace(be,"$&/")+"/")+I)),E.push(B)),1;I=0;var Rt=D===""?".":D+":";if(El(o))for(var vt=0;vt<o.length;vt++)D=o[vt],Q=Rt+Ul(D,vt),I+=S(D,E,z,Q,B);else if(vt=kt(o),typeof vt=="function")for(o=vt.call(o),vt=0;!(D=o.next()).done;)D=D.value,Q=Rt+Ul(D,vt++),I+=S(D,E,z,Q,B);else if(Q==="object"){if(typeof o.then=="function")return S(gl(o),E,z,D,B);throw E=String(o),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return I}function A(o,E,z){if(o==null)return o;var D=[],B=0;return S(o,D,"","",function(Q){return E.call(z,Q,B++)}),D}function R(o){if(o._status===-1){var E=o._result;E=E(),E.then(function(z){(o._status===0||o._status===-1)&&(o._status=1,o._result=z)},function(z){(o._status===0||o._status===-1)&&(o._status=2,o._result=z)}),o._status===-1&&(o._status=0,o._result=E)}if(o._status===1)return o._result.default;throw o._result}var lt=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},nt={map:A,forEach:function(o,E,z){A(o,function(){E.apply(this,arguments)},z)},count:function(o){var E=0;return A(o,function(){E++}),E},toArray:function(o){return A(o,function(E){return E})||[]},only:function(o){if(!Al(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return x.Activity=q,x.Children=nt,x.Component=Wt,x.Fragment=F,x.Profiler=N,x.PureComponent=Ht,x.StrictMode=v,x.Suspense=H,x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,x.__COMPILER_RUNTIME={__proto__:null,c:function(o){return V.H.useMemoCache(o)}},x.cache=function(o){return function(){return o.apply(null,arguments)}},x.cacheSignal=function(){return null},x.cloneElement=function(o,E,z){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var D=qt({},o.props),B=o.key;if(E!=null)for(Q in E.key!==void 0&&(B=""+E.key),E)!Qt.call(E,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&E.ref===void 0||(D[Q]=E[Q]);var Q=arguments.length-2;if(Q===1)D.children=z;else if(1<Q){for(var I=Array(Q),Rt=0;Rt<Q;Rt++)I[Rt]=arguments[Rt+2];D.children=I}return Tl(o.type,B,D)},x.createContext=function(o){return o={$$typeof:ht,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:k,_context:o},o},x.createElement=function(o,E,z){var D,B={},Q=null;if(E!=null)for(D in E.key!==void 0&&(Q=""+E.key),E)Qt.call(E,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(B[D]=E[D]);var I=arguments.length-2;if(I===1)B.children=z;else if(1<I){for(var Rt=Array(I),vt=0;vt<I;vt++)Rt[vt]=arguments[vt+2];B.children=Rt}if(o&&o.defaultProps)for(D in I=o.defaultProps,I)B[D]===void 0&&(B[D]=I[D]);return Tl(o,Q,B)},x.createRef=function(){return{current:null}},x.forwardRef=function(o){return{$$typeof:Nt,render:o}},x.isValidElement=Al,x.lazy=function(o){return{$$typeof:$,_payload:{_status:-1,_result:o},_init:R}},x.memo=function(o,E){return{$$typeof:T,type:o,compare:E===void 0?null:E}},x.startTransition=function(o){var E=V.T,z={};V.T=z;try{var D=o(),B=V.S;B!==null&&B(z,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(jt,lt)}catch(Q){lt(Q)}finally{E!==null&&z.types!==null&&(E.types=z.types),V.T=E}},x.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},x.use=function(o){return V.H.use(o)},x.useActionState=function(o,E,z){return V.H.useActionState(o,E,z)},x.useCallback=function(o,E){return V.H.useCallback(o,E)},x.useContext=function(o){return V.H.useContext(o)},x.useDebugValue=function(){},x.useDeferredValue=function(o,E){return V.H.useDeferredValue(o,E)},x.useEffect=function(o,E){return V.H.useEffect(o,E)},x.useEffectEvent=function(o){return V.H.useEffectEvent(o)},x.useId=function(){return V.H.useId()},x.useImperativeHandle=function(o,E,z){return V.H.useImperativeHandle(o,E,z)},x.useInsertionEffect=function(o,E){return V.H.useInsertionEffect(o,E)},x.useLayoutEffect=function(o,E){return V.H.useLayoutEffect(o,E)},x.useMemo=function(o,E){return V.H.useMemo(o,E)},x.useOptimistic=function(o,E){return V.H.useOptimistic(o,E)},x.useReducer=function(o,E,z){return V.H.useReducer(o,E,z)},x.useRef=function(o){return V.H.useRef(o)},x.useState=function(o){return V.H.useState(o)},x.useSyncExternalStore=function(o,E,z){return V.H.useSyncExternalStore(o,E,z)},x.useTransition=function(){return V.H.useTransition()},x.version="19.2.4",x}var yr;function of(){return yr||(yr=1,uf.exports=Wh()),uf.exports}var Ar=of(),nf={exports:{}},pu={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr;function Fh(){return gr||(gr=1,(function(M){function dt(S,A){var R=S.length;S.push(A);t:for(;0<R;){var lt=R-1>>>1,nt=S[lt];if(0<N(nt,A))S[lt]=A,S[R]=nt,R=lt;else break t}}function F(S){return S.length===0?null:S[0]}function v(S){if(S.length===0)return null;var A=S[0],R=S.pop();if(R!==A){S[0]=R;t:for(var lt=0,nt=S.length,o=nt>>>1;lt<o;){var E=2*(lt+1)-1,z=S[E],D=E+1,B=S[D];if(0>N(z,R))D<nt&&0>N(B,z)?(S[lt]=B,S[D]=R,lt=D):(S[lt]=z,S[E]=R,lt=E);else if(D<nt&&0>N(B,R))S[lt]=B,S[D]=R,lt=D;else break t}}return A}function N(S,A){var R=S.sortIndex-A.sortIndex;return R!==0?R:S.id-A.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;M.unstable_now=function(){return k.now()}}else{var ht=Date,Nt=ht.now();M.unstable_now=function(){return ht.now()-Nt}}var H=[],T=[],$=1,q=null,st=3,kt=!1,Yt=!1,qt=!1,Ol=!1,Wt=typeof setTimeout=="function"?setTimeout:null,kl=typeof clearTimeout=="function"?clearTimeout:null,Ht=typeof setImmediate<"u"?setImmediate:null;function il(S){for(var A=F(T);A!==null;){if(A.callback===null)v(T);else if(A.startTime<=S)v(T),A.sortIndex=A.expirationTime,dt(H,A);else break;A=F(T)}}function El(S){if(qt=!1,il(S),!Yt)if(F(H)!==null)Yt=!0,jt||(jt=!0,Gt());else{var A=F(T);A!==null&&gl(El,A.startTime-S)}}var jt=!1,V=-1,Qt=5,Tl=-1;function Ge(){return Ol?!0:!(M.unstable_now()-Tl<Qt)}function Al(){if(Ol=!1,jt){var S=M.unstable_now();Tl=S;var A=!0;try{t:{Yt=!1,qt&&(qt=!1,kl(V),V=-1),kt=!0;var R=st;try{l:{for(il(S),q=F(H);q!==null&&!(q.expirationTime>S&&Ge());){var lt=q.callback;if(typeof lt=="function"){q.callback=null,st=q.priorityLevel;var nt=lt(q.expirationTime<=S);if(S=M.unstable_now(),typeof nt=="function"){q.callback=nt,il(S),A=!0;break l}q===F(H)&&v(H),il(S)}else v(H);q=F(H)}if(q!==null)A=!0;else{var o=F(T);o!==null&&gl(El,o.startTime-S),A=!1}}break t}finally{q=null,st=R,kt=!1}A=void 0}}finally{A?Gt():jt=!1}}}var Gt;if(typeof Ht=="function")Gt=function(){Ht(Al)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Ul=be.port2;be.port1.onmessage=Al,Gt=function(){Ul.postMessage(null)}}else Gt=function(){Wt(Al,0)};function gl(S,A){V=Wt(function(){S(M.unstable_now())},A)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(S){S.callback=null},M.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qt=0<S?Math.floor(1e3/S):5},M.unstable_getCurrentPriorityLevel=function(){return st},M.unstable_next=function(S){switch(st){case 1:case 2:case 3:var A=3;break;default:A=st}var R=st;st=A;try{return S()}finally{st=R}},M.unstable_requestPaint=function(){Ol=!0},M.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var R=st;st=S;try{return A()}finally{st=R}},M.unstable_scheduleCallback=function(S,A,R){var lt=M.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?lt+R:lt):R=lt,S){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=R+nt,S={id:$++,callback:A,priorityLevel:S,startTime:R,expirationTime:nt,sortIndex:-1},R>lt?(S.sortIndex=R,dt(T,S),F(H)===null&&S===F(T)&&(qt?(kl(V),V=-1):qt=!0,gl(El,R-lt))):(S.sortIndex=nt,dt(H,S),Yt||kt||(Yt=!0,jt||(jt=!0,Gt()))),S},M.unstable_shouldYield=Ge,M.unstable_wrapCallback=function(S){var A=st;return function(){var R=st;st=A;try{return S.apply(this,arguments)}finally{st=R}}}})(ff)),ff}var Sr;function $h(){return Sr||(Sr=1,cf.exports=Fh()),cf.exports}var sf={exports:{}},Ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr;function Ih(){if(pr)return Ct;pr=1;var M=of();function dt(H){var T="https://react.dev/errors/"+H;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var $=2;$<arguments.length;$++)T+="&args[]="+encodeURIComponent(arguments[$])}return"Minified React error #"+H+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var v={d:{f:F,r:function(){throw Error(dt(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},N=Symbol.for("react.portal");function k(H,T,$){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:q==null?null:""+q,children:H,containerInfo:T,implementation:$}}var ht=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Nt(H,T){if(H==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v,Ct.createPortal=function(H,T){var $=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(dt(299));return k(H,T,null,$)},Ct.flushSync=function(H){var T=ht.T,$=v.p;try{if(ht.T=null,v.p=2,H)return H()}finally{ht.T=T,v.p=$,v.d.f()}},Ct.preconnect=function(H,T){typeof H=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,v.d.C(H,T))},Ct.prefetchDNS=function(H){typeof H=="string"&&v.d.D(H)},Ct.preinit=function(H,T){if(typeof H=="string"&&T&&typeof T.as=="string"){var $=T.as,q=Nt($,T.crossOrigin),st=typeof T.integrity=="string"?T.integrity:void 0,kt=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;$==="style"?v.d.S(H,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:q,integrity:st,fetchPriority:kt}):$==="script"&&v.d.X(H,{crossOrigin:q,integrity:st,fetchPriority:kt,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Ct.preinitModule=function(H,T){if(typeof H=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var $=Nt(T.as,T.crossOrigin);v.d.M(H,{crossOrigin:$,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&v.d.M(H)},Ct.preload=function(H,T){if(typeof H=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var $=T.as,q=Nt($,T.crossOrigin);v.d.L(H,$,{crossOrigin:q,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Ct.preloadModule=function(H,T){if(typeof H=="string")if(T){var $=Nt(T.as,T.crossOrigin);v.d.m(H,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:$,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else v.d.m(H)},Ct.requestFormReset=function(H){v.d.r(H)},Ct.unstable_batchedUpdates=function(H,T){return H(T)},Ct.useFormState=function(H,T,$){return ht.H.useFormState(H,T,$)},Ct.useFormStatus=function(){return ht.H.useHostTransitionStatus()},Ct.version="19.2.4",Ct}var br;function Ph(){if(br)return sf.exports;br=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(dt){console.error(dt)}}return M(),sf.exports=Ih(),sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er;function t0(){if(Er)return pu;Er=1;var M=$h(),dt=of(),F=Ph();function v(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function k(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function ht(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function Nt(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function H(t){if(k(t)!==t)throw Error(v(188))}function T(t){var l=t.alternate;if(!l){if(l=k(t),l===null)throw Error(v(188));return l!==t?null:t}for(var e=t,a=l;;){var u=e.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){e=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===e)return H(u),t;if(n===a)return H(u),l;n=n.sibling}throw Error(v(188))}if(e.return!==a.return)e=u,a=n;else{for(var i=!1,c=u.child;c;){if(c===e){i=!0,e=u,a=n;break}if(c===a){i=!0,a=u,e=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===e){i=!0,e=n,a=u;break}if(c===a){i=!0,a=n,e=u;break}c=c.sibling}if(!i)throw Error(v(189))}}if(e.alternate!==a)throw Error(v(190))}if(e.tag!==3)throw Error(v(188));return e.stateNode.current===e?t:l}function $(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=$(t),l!==null)return l;t=t.sibling}return null}var q=Object.assign,st=Symbol.for("react.element"),kt=Symbol.for("react.transitional.element"),Yt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),Wt=Symbol.for("react.profiler"),kl=Symbol.for("react.consumer"),Ht=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),El=Symbol.for("react.suspense"),jt=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Tl=Symbol.for("react.activity"),Ge=Symbol.for("react.memo_cache_sentinel"),Al=Symbol.iterator;function Gt(t){return t===null||typeof t!="object"?null:(t=Al&&t[Al]||t["@@iterator"],typeof t=="function"?t:null)}var be=Symbol.for("react.client.reference");function Ul(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===be?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qt:return"Fragment";case Wt:return"Profiler";case Ol:return"StrictMode";case El:return"Suspense";case jt:return"SuspenseList";case Tl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Yt:return"Portal";case Ht:return t.displayName||"Context";case kl:return(t._context.displayName||"Context")+".Consumer";case il:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return l=t.displayName||null,l!==null?l:Ul(t.type)||"Memo";case Qt:l=t._payload,t=t._init;try{return Ul(t(l))}catch{}}return null}var gl=Array.isArray,S=dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},lt=[],nt=-1;function o(t){return{current:t}}function E(t){0>nt||(t.current=lt[nt],lt[nt]=null,nt--)}function z(t,l){nt++,lt[nt]=t.current,t.current=l}var D=o(null),B=o(null),Q=o(null),I=o(null);function Rt(t,l){switch(z(Q,l),z(B,t),z(D,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Bd(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Bd(l),t=Yd(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}E(D),z(D,t)}function vt(){E(D),E(B),E(Q)}function _a(t){t.memoizedState!==null&&z(I,t);var l=D.current,e=Yd(l,t.type);l!==e&&(z(B,t),z(D,e))}function bu(t){B.current===t&&(E(D),E(B)),I.current===t&&(E(I),hu._currentValue=R)}var Qn,df;function Ee(t){if(Qn===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);Qn=l&&l[1]||"",df=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qn+t+df}var Gn=!1;function Xn(t,l){if(!t||Gn)return"";Gn=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(y){var h=y}Reflect.construct(t,[],b)}else{try{b.call()}catch(y){h=y}t.call(b.prototype)}}else{try{throw Error()}catch(y){h=y}(b=t())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(y){if(y&&h&&typeof y.stack=="string")return[y.stack,h.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),m=c.split(`
`);for(u=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;u<m.length&&!m[u].includes("DetermineComponentFrameRoot");)u++;if(a===f.length||u===m.length)for(a=f.length-1,u=m.length-1;1<=a&&0<=u&&f[a]!==m[u];)u--;for(;1<=a&&0<=u;a--,u--)if(f[a]!==m[u]){if(a!==1||u!==1)do if(a--,u--,0>u||f[a]!==m[u]){var g=`
`+f[a].replace(" at new "," at ");return t.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",t.displayName)),g}while(1<=a&&0<=u);break}}}finally{Gn=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ee(e):""}function zr(t,l){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==l&&l!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Xn(t.type,!1);case 11:return Xn(t.type.render,!1);case 1:return Xn(t.type,!0);case 31:return Ee("Activity");default:return""}}function rf(t){try{var l="",e=null;do l+=zr(t,e),e=t,t=t.return;while(t);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ln=Object.prototype.hasOwnProperty,Zn=M.unstable_scheduleCallback,Vn=M.unstable_cancelCallback,_r=M.unstable_shouldYield,Mr=M.unstable_requestPaint,Ft=M.unstable_now,Dr=M.unstable_getCurrentPriorityLevel,mf=M.unstable_ImmediatePriority,hf=M.unstable_UserBlockingPriority,Eu=M.unstable_NormalPriority,Or=M.unstable_LowPriority,vf=M.unstable_IdlePriority,Ur=M.log,Hr=M.unstable_setDisableYieldValue,Ma=null,$t=null;function Wl(t){if(typeof Ur=="function"&&Hr(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(Ma,t)}catch{}}var It=Math.clz32?Math.clz32:qr,Cr=Math.log,Nr=Math.LN2;function qr(t){return t>>>=0,t===0?32:31-(Cr(t)/Nr|0)|0}var Tu=256,Au=262144,zu=4194304;function Te(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _u(t,l,e){var a=t.pendingLanes;if(a===0)return 0;var u=0,n=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?u=Te(a):(i&=c,i!==0?u=Te(i):e||(e=c&~t,e!==0&&(u=Te(e))))):(c=a&~n,c!==0?u=Te(c):i!==0?u=Te(i):e||(e=a&~t,e!==0&&(u=Te(e)))),u===0?0:l!==0&&l!==u&&(l&n)===0&&(n=u&-u,e=l&-l,n>=e||n===32&&(e&4194048)!==0)?l:u}function Da(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function Rr(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yf(){var t=zu;return zu<<=1,(zu&62914560)===0&&(zu=4194304),t}function wn(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Oa(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xr(t,l,e,a,u,n){var i=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,m=t.hiddenUpdates;for(e=i&~e;0<e;){var g=31-It(e),b=1<<g;c[g]=0,f[g]=-1;var h=m[g];if(h!==null)for(m[g]=null,g=0;g<h.length;g++){var y=h[g];y!==null&&(y.lane&=-536870913)}e&=~b}a!==0&&gf(t,a,0),n!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=n&~(i&~l))}function gf(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var a=31-It(l);t.entangledLanes|=l,t.entanglements[a]=t.entanglements[a]|1073741824|e&261930}function Sf(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var a=31-It(e),u=1<<a;u&l|t[a]&l&&(t[a]|=l),e&=~u}}function pf(t,l){var e=l&-l;return e=(e&42)!==0?1:Kn(e),(e&(t.suspendedLanes|l))!==0?0:e}function Kn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bf(){var t=A.p;return t!==0?t:(t=window.event,t===void 0?32:ir(t.type))}function Ef(t,l){var e=A.p;try{return A.p=t,l()}finally{A.p=e}}var Fl=Math.random().toString(36).slice(2),_t="__reactFiber$"+Fl,Xt="__reactProps$"+Fl,Xe="__reactContainer$"+Fl,kn="__reactEvents$"+Fl,Br="__reactListeners$"+Fl,Yr="__reactHandles$"+Fl,Tf="__reactResources$"+Fl,Ua="__reactMarker$"+Fl;function Wn(t){delete t[_t],delete t[Xt],delete t[kn],delete t[Br],delete t[Yr]}function Le(t){var l=t[_t];if(l)return l;for(var e=t.parentNode;e;){if(l=e[Xe]||e[_t]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=Vd(t);t!==null;){if(e=t[_t])return e;t=Vd(t)}return l}t=e,e=t.parentNode}return null}function Ze(t){if(t=t[_t]||t[Xe]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function Ha(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(v(33))}function Ve(t){var l=t[Tf];return l||(l=t[Tf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function At(t){t[Ua]=!0}var Af=new Set,zf={};function Ae(t,l){we(t,l),we(t+"Capture",l)}function we(t,l){for(zf[t]=l,t=0;t<l.length;t++)Af.add(l[t])}var jr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_f={},Mf={};function Qr(t){return Ln.call(Mf,t)?!0:Ln.call(_f,t)?!1:jr.test(t)?Mf[t]=!0:(_f[t]=!0,!1)}function Mu(t,l,e){if(Qr(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function Du(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function Hl(t,l,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+a)}}function cl(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Df(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Gr(t,l,e){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,n=a.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return u.call(this)},set:function(i){e=""+i,n.call(this,i)}}),Object.defineProperty(t,l,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function Fn(t){if(!t._valueTracker){var l=Df(t)?"checked":"value";t._valueTracker=Gr(t,l,""+t[l])}}function Of(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),a="";return t&&(a=Df(t)?t.checked?"true":"false":t.value),t=a,t!==e?(l.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xr=/[\n"\\]/g;function fl(t){return t.replace(Xr,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function $n(t,l,e,a,u,n,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),l!=null?i==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+cl(l)):t.value!==""+cl(l)&&(t.value=""+cl(l)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),l!=null?In(t,i,cl(l)):e!=null?In(t,i,cl(e)):a!=null&&t.removeAttribute("value"),u==null&&n!=null&&(t.defaultChecked=!!n),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+cl(c):t.removeAttribute("name")}function Uf(t,l,e,a,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),l!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||l!=null)){Fn(t);return}e=e!=null?""+cl(e):"",l=l!=null?""+cl(l):e,c||l===t.value||(t.value=l),t.defaultValue=l}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Fn(t)}function In(t,l,e){l==="number"&&Ou(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Ke(t,l,e,a){if(t=t.options,l){l={};for(var u=0;u<e.length;u++)l["$"+e[u]]=!0;for(e=0;e<t.length;e++)u=l.hasOwnProperty("$"+t[e].value),t[e].selected!==u&&(t[e].selected=u),u&&a&&(t[e].defaultSelected=!0)}else{for(e=""+cl(e),l=null,u=0;u<t.length;u++){if(t[u].value===e){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}l!==null||t[u].disabled||(l=t[u])}l!==null&&(l.selected=!0)}}function Hf(t,l,e){if(l!=null&&(l=""+cl(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+cl(e):""}function Cf(t,l,e,a){if(l==null){if(a!=null){if(e!=null)throw Error(v(92));if(gl(a)){if(1<a.length)throw Error(v(93));a=a[0]}e=a}e==null&&(e=""),l=e}e=cl(l),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a),Fn(t)}function Je(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var Lr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nf(t,l,e){var a=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":a?t.setProperty(l,e):typeof e!="number"||e===0||Lr.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function qf(t,l,e){if(l!=null&&typeof l!="object")throw Error(v(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in l)a=l[u],l.hasOwnProperty(u)&&e[u]!==a&&Nf(t,u,a)}else for(var n in l)l.hasOwnProperty(n)&&Nf(t,n,l[n])}function Pn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(t){return Vr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Cl(){}var ti=null;function li(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ke=null,We=null;function Rf(t){var l=Ze(t);if(l&&(t=l.stateNode)){var e=t[Xt]||null;t:switch(t=l.stateNode,l.type){case"input":if($n(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+fl(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var a=e[l];if(a!==t&&a.form===t.form){var u=a[Xt]||null;if(!u)throw Error(v(90));$n(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(l=0;l<e.length;l++)a=e[l],a.form===t.form&&Of(a)}break t;case"textarea":Hf(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&Ke(t,!!e.multiple,l,!1)}}}var ei=!1;function xf(t,l,e){if(ei)return t(l,e);ei=!0;try{var a=t(l);return a}finally{if(ei=!1,(ke!==null||We!==null)&&(gn(),ke&&(l=ke,t=We,We=ke=null,Rf(l),t)))for(l=0;l<t.length;l++)Rf(t[l])}}function Ca(t,l){var e=t.stateNode;if(e===null)return null;var a=e[Xt]||null;if(a===null)return null;e=a[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(v(231,l,typeof e));return e}var Nl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if(Nl)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){ai=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{ai=!1}var $l=null,ui=null,Hu=null;function Bf(){if(Hu)return Hu;var t,l=ui,e=l.length,a,u="value"in $l?$l.value:$l.textContent,n=u.length;for(t=0;t<e&&l[t]===u[t];t++);var i=e-t;for(a=1;a<=i&&l[e-a]===u[n-a];a++);return Hu=u.slice(t,1<a?1-a:void 0)}function Cu(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function Yf(){return!1}function Lt(t){function l(e,a,u,n,i){this._reactName=e,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Nu:Yf,this.isPropagationStopped=Yf,this}return q(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),l}var ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=Lt(ze),qa=q({},ze,{view:0,detail:0}),wr=Lt(qa),ni,ii,Ra,Ru=q({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ra&&(Ra&&t.type==="mousemove"?(ni=t.screenX-Ra.screenX,ii=t.screenY-Ra.screenY):ii=ni=0,Ra=t),ni)},movementY:function(t){return"movementY"in t?t.movementY:ii}}),jf=Lt(Ru),Kr=q({},Ru,{dataTransfer:0}),Jr=Lt(Kr),kr=q({},qa,{relatedTarget:0}),ci=Lt(kr),Wr=q({},ze,{animationName:0,elapsedTime:0,pseudoElement:0}),Fr=Lt(Wr),$r=q({},ze,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ir=Lt($r),Pr=q({},ze,{data:0}),Qf=Lt(Pr),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=em[t])?!!l[t]:!1}function fi(){return am}var um=q({},qa,{key:function(t){if(t.key){var l=tm[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(t){return t.type==="keypress"?Cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nm=Lt(um),im=q({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=Lt(im),cm=q({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),fm=Lt(cm),sm=q({},ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),om=Lt(sm),dm=q({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rm=Lt(dm),mm=q({},ze,{newState:0,oldState:0}),hm=Lt(mm),vm=[9,13,27,32],si=Nl&&"CompositionEvent"in window,xa=null;Nl&&"documentMode"in document&&(xa=document.documentMode);var ym=Nl&&"TextEvent"in window&&!xa,Xf=Nl&&(!si||xa&&8<xa&&11>=xa),Lf=" ",Zf=!1;function Vf(t,l){switch(t){case"keyup":return vm.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fe=!1;function gm(t,l){switch(t){case"compositionend":return wf(l);case"keypress":return l.which!==32?null:(Zf=!0,Lf);case"textInput":return t=l.data,t===Lf&&Zf?null:t;default:return null}}function Sm(t,l){if(Fe)return t==="compositionend"||!si&&Vf(t,l)?(t=Bf(),Hu=ui=$l=null,Fe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return Xf&&l.locale!=="ko"?null:l.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!pm[t.type]:l==="textarea"}function Jf(t,l,e,a){ke?We?We.push(a):We=[a]:ke=a,l=zn(l,"onChange"),0<l.length&&(e=new qu("onChange","change",null,e,a),t.push({event:e,listeners:l}))}var Ba=null,Ya=null;function bm(t){Hd(t,0)}function xu(t){var l=Ha(t);if(Of(l))return t}function kf(t,l){if(t==="change")return l}var Wf=!1;if(Nl){var oi;if(Nl){var di="oninput"in document;if(!di){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),di=typeof Ff.oninput=="function"}oi=di}else oi=!1;Wf=oi&&(!document.documentMode||9<document.documentMode)}function $f(){Ba&&(Ba.detachEvent("onpropertychange",If),Ya=Ba=null)}function If(t){if(t.propertyName==="value"&&xu(Ya)){var l=[];Jf(l,Ya,t,li(t)),xf(bm,l)}}function Em(t,l,e){t==="focusin"?($f(),Ba=l,Ya=e,Ba.attachEvent("onpropertychange",If)):t==="focusout"&&$f()}function Tm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(Ya)}function Am(t,l){if(t==="click")return xu(l)}function zm(t,l){if(t==="input"||t==="change")return xu(l)}function _m(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var Pt=typeof Object.is=="function"?Object.is:_m;function ja(t,l){if(Pt(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),a=Object.keys(l);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var u=e[a];if(!Ln.call(l,u)||!Pt(t[u],l[u]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ts(t,l){var e=Pf(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=l&&a>=l)return{node:e,offset:l-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Pf(e)}}function ls(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?ls(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function es(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Ou(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=Ou(t.document)}return l}function ri(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var Mm=Nl&&"documentMode"in document&&11>=document.documentMode,$e=null,mi=null,Qa=null,hi=!1;function as(t,l,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;hi||$e==null||$e!==Ou(a)||(a=$e,"selectionStart"in a&&ri(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&ja(Qa,a)||(Qa=a,a=zn(mi,"onSelect"),0<a.length&&(l=new qu("onSelect","select",null,l,e),t.push({event:l,listeners:a}),l.target=$e)))}function _e(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var Ie={animationend:_e("Animation","AnimationEnd"),animationiteration:_e("Animation","AnimationIteration"),animationstart:_e("Animation","AnimationStart"),transitionrun:_e("Transition","TransitionRun"),transitionstart:_e("Transition","TransitionStart"),transitioncancel:_e("Transition","TransitionCancel"),transitionend:_e("Transition","TransitionEnd")},vi={},us={};Nl&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete Ie.animationend.animation,delete Ie.animationiteration.animation,delete Ie.animationstart.animation),"TransitionEvent"in window||delete Ie.transitionend.transition);function Me(t){if(vi[t])return vi[t];if(!Ie[t])return t;var l=Ie[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in us)return vi[t]=l[e];return t}var ns=Me("animationend"),is=Me("animationiteration"),cs=Me("animationstart"),Dm=Me("transitionrun"),Om=Me("transitionstart"),Um=Me("transitioncancel"),fs=Me("transitionend"),ss=new Map,yi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yi.push("scrollEnd");function Sl(t,l){ss.set(t,l),Ae(l,[t])}var Bu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},sl=[],Pe=0,gi=0;function Yu(){for(var t=Pe,l=gi=Pe=0;l<t;){var e=sl[l];sl[l++]=null;var a=sl[l];sl[l++]=null;var u=sl[l];sl[l++]=null;var n=sl[l];if(sl[l++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&os(e,u,n)}}function ju(t,l,e,a){sl[Pe++]=t,sl[Pe++]=l,sl[Pe++]=e,sl[Pe++]=a,gi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Si(t,l,e,a){return ju(t,l,e,a),Qu(t)}function De(t,l){return ju(t,null,null,l),Qu(t)}function os(t,l,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var u=!1,n=t.return;n!==null;)n.childLanes|=e,a=n.alternate,a!==null&&(a.childLanes|=e),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(u=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,u&&l!==null&&(u=31-It(e),t=n.hiddenUpdates,a=t[u],a===null?t[u]=[l]:a.push(l),l.lane=e|536870912),n):null}function Qu(t){if(50<cu)throw cu=0,Dc=null,Error(v(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var ta={};function Hm(t,l,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tl(t,l,e,a){return new Hm(t,l,e,a)}function pi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ql(t,l){var e=t.alternate;return e===null?(e=tl(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function ds(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function Gu(t,l,e,a,u,n){var i=0;if(a=t,typeof t=="function")pi(t)&&(i=1);else if(typeof t=="string")i=xh(t,e,D.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Tl:return t=tl(31,e,l,u),t.elementType=Tl,t.lanes=n,t;case qt:return Oe(e.children,u,n,l);case Ol:i=8,u|=24;break;case Wt:return t=tl(12,e,l,u|2),t.elementType=Wt,t.lanes=n,t;case El:return t=tl(13,e,l,u),t.elementType=El,t.lanes=n,t;case jt:return t=tl(19,e,l,u),t.elementType=jt,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ht:i=10;break t;case kl:i=9;break t;case il:i=11;break t;case V:i=14;break t;case Qt:i=16,a=null;break t}i=29,e=Error(v(130,t===null?"null":typeof t,"")),a=null}return l=tl(i,e,l,u),l.elementType=t,l.type=a,l.lanes=n,l}function Oe(t,l,e,a){return t=tl(7,t,a,l),t.lanes=e,t}function bi(t,l,e){return t=tl(6,t,null,l),t.lanes=e,t}function rs(t){var l=tl(18,null,null,0);return l.stateNode=t,l}function Ei(t,l,e){return l=tl(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var ms=new WeakMap;function ol(t,l){if(typeof t=="object"&&t!==null){var e=ms.get(t);return e!==void 0?e:(l={value:t,source:l,stack:rf(l)},ms.set(t,l),l)}return{value:t,source:l,stack:rf(l)}}var la=[],ea=0,Xu=null,Ga=0,dl=[],rl=0,Il=null,zl=1,_l="";function Rl(t,l){la[ea++]=Ga,la[ea++]=Xu,Xu=t,Ga=l}function hs(t,l,e){dl[rl++]=zl,dl[rl++]=_l,dl[rl++]=Il,Il=t;var a=zl;t=_l;var u=32-It(a)-1;a&=~(1<<u),e+=1;var n=32-It(l)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,zl=1<<32-It(l)+u|e<<u|a,_l=n+t}else zl=1<<n|e<<u|a,_l=t}function Ti(t){t.return!==null&&(Rl(t,1),hs(t,1,0))}function Ai(t){for(;t===Xu;)Xu=la[--ea],la[ea]=null,Ga=la[--ea],la[ea]=null;for(;t===Il;)Il=dl[--rl],dl[rl]=null,_l=dl[--rl],dl[rl]=null,zl=dl[--rl],dl[rl]=null}function vs(t,l){dl[rl++]=zl,dl[rl++]=_l,dl[rl++]=Il,zl=l.id,_l=l.overflow,Il=t}var Mt=null,ct=null,w=!1,Pl=null,ml=!1,zi=Error(v(519));function te(t){var l=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xa(ol(l,t)),zi}function ys(t){var l=t.stateNode,e=t.type,a=t.memoizedProps;switch(l[_t]=t,l[Xt]=a,e){case"dialog":X("cancel",l),X("close",l);break;case"iframe":case"object":case"embed":X("load",l);break;case"video":case"audio":for(e=0;e<su.length;e++)X(su[e],l);break;case"source":X("error",l);break;case"img":case"image":case"link":X("error",l),X("load",l);break;case"details":X("toggle",l);break;case"input":X("invalid",l),Uf(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":X("invalid",l);break;case"textarea":X("invalid",l),Cf(l,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||a.suppressHydrationWarning===!0||Rd(l.textContent,e)?(a.popover!=null&&(X("beforetoggle",l),X("toggle",l)),a.onScroll!=null&&X("scroll",l),a.onScrollEnd!=null&&X("scrollend",l),a.onClick!=null&&(l.onclick=Cl),l=!0):l=!1,l||te(t,!0)}function gs(t){for(Mt=t.return;Mt;)switch(Mt.tag){case 5:case 31:case 13:ml=!1;return;case 27:case 3:ml=!0;return;default:Mt=Mt.return}}function aa(t){if(t!==Mt)return!1;if(!w)return gs(t),w=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Lc(t.type,t.memoizedProps)),e=!e),e&&ct&&te(t),gs(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));ct=Zd(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));ct=Zd(t)}else l===27?(l=ct,he(t.type)?(t=Jc,Jc=null,ct=t):ct=l):ct=Mt?vl(t.stateNode.nextSibling):null;return!0}function Ue(){ct=Mt=null,w=!1}function _i(){var t=Pl;return t!==null&&(Kt===null?Kt=t:Kt.push.apply(Kt,t),Pl=null),t}function Xa(t){Pl===null?Pl=[t]:Pl.push(t)}var Mi=o(null),He=null,xl=null;function le(t,l,e){z(Mi,l._currentValue),l._currentValue=e}function Bl(t){t._currentValue=Mi.current,E(Mi)}function Di(t,l,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),t===e)break;t=t.return}}function Oi(t,l,e,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=u;for(var f=0;f<l.length;f++)if(c.context===l[f]){n.lanes|=e,c=n.alternate,c!==null&&(c.lanes|=e),Di(n.return,e,t),a||(i=null);break t}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(v(341));i.lanes|=e,n=i.alternate,n!==null&&(n.lanes|=e),Di(i,e,t),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ua(t,l,e,a){t=null;for(var u=l,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(v(387));if(i=i.memoizedProps,i!==null){var c=u.type;Pt(u.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(u===I.current){if(i=u.alternate,i===null)throw Error(v(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(hu):t=[hu])}u=u.return}t!==null&&Oi(l,t,e,a),l.flags|=262144}function Lu(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ce(t){He=t,xl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dt(t){return Ss(He,t)}function Zu(t,l){return He===null&&Ce(t),Ss(t,l)}function Ss(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},xl===null){if(t===null)throw Error(v(308));xl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else xl=xl.next=l;return e}var Cm=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},Nm=M.unstable_scheduleCallback,qm=M.unstable_NormalPriority,St={$$typeof:Ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ui(){return{controller:new Cm,data:new Map,refCount:0}}function La(t){t.refCount--,t.refCount===0&&Nm(qm,function(){t.controller.abort()})}var Za=null,Hi=0,na=0,ia=null;function Rm(t,l){if(Za===null){var e=Za=[];Hi=0,na=qc(),ia={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Hi++,l.then(ps,ps),l}function ps(){if(--Hi===0&&Za!==null){ia!==null&&(ia.status="fulfilled");var t=Za;Za=null,na=0,ia=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function xm(t,l){var e=[],a={status:"pending",value:null,reason:null,then:function(u){e.push(u)}};return t.then(function(){a.status="fulfilled",a.value=l;for(var u=0;u<e.length;u++)(0,e[u])(l)},function(u){for(a.status="rejected",a.reason=u,u=0;u<e.length;u++)(0,e[u])(void 0)}),a}var bs=S.S;S.S=function(t,l){ud=Ft(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&Rm(t,l),bs!==null&&bs(t,l)};var Ne=o(null);function Ci(){var t=Ne.current;return t!==null?t:it.pooledCache}function Vu(t,l){l===null?z(Ne,Ne.current):z(Ne,l.pool)}function Es(){var t=Ci();return t===null?null:{parent:St._currentValue,pool:t}}var ca=Error(v(460)),Ni=Error(v(474)),wu=Error(v(542)),Ku={then:function(){}};function Ts(t){return t=t.status,t==="fulfilled"||t==="rejected"}function As(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(Cl,Cl),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,_s(t),t;default:if(typeof l.status=="string")l.then(Cl,Cl);else{if(t=it,t!==null&&100<t.shellSuspendCounter)throw Error(v(482));t=l,t.status="pending",t.then(function(a){if(l.status==="pending"){var u=l;u.status="fulfilled",u.value=a}},function(a){if(l.status==="pending"){var u=l;u.status="rejected",u.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,_s(t),t}throw Re=l,ca}}function qe(t){try{var l=t._init;return l(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Re=e,ca):e}}var Re=null;function zs(){if(Re===null)throw Error(v(459));var t=Re;return Re=null,t}function _s(t){if(t===ca||t===wu)throw Error(v(483))}var fa=null,Va=0;function Ju(t){var l=Va;return Va+=1,fa===null&&(fa=[]),As(fa,t,l)}function wa(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function ku(t,l){throw l.$$typeof===st?Error(v(525)):(t=Object.prototype.toString.call(l),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Ms(t){function l(d,s){if(t){var r=d.deletions;r===null?(d.deletions=[s],d.flags|=16):r.push(s)}}function e(d,s){if(!t)return null;for(;s!==null;)l(d,s),s=s.sibling;return null}function a(d){for(var s=new Map;d!==null;)d.key!==null?s.set(d.key,d):s.set(d.index,d),d=d.sibling;return s}function u(d,s){return d=ql(d,s),d.index=0,d.sibling=null,d}function n(d,s,r){return d.index=r,t?(r=d.alternate,r!==null?(r=r.index,r<s?(d.flags|=67108866,s):r):(d.flags|=67108866,s)):(d.flags|=1048576,s)}function i(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,s,r,p){return s===null||s.tag!==6?(s=bi(r,d.mode,p),s.return=d,s):(s=u(s,r),s.return=d,s)}function f(d,s,r,p){var U=r.type;return U===qt?g(d,s,r.props.children,p,r.key):s!==null&&(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Qt&&qe(U)===s.type)?(s=u(s,r.props),wa(s,r),s.return=d,s):(s=Gu(r.type,r.key,r.props,null,d.mode,p),wa(s,r),s.return=d,s)}function m(d,s,r,p){return s===null||s.tag!==4||s.stateNode.containerInfo!==r.containerInfo||s.stateNode.implementation!==r.implementation?(s=Ei(r,d.mode,p),s.return=d,s):(s=u(s,r.children||[]),s.return=d,s)}function g(d,s,r,p,U){return s===null||s.tag!==7?(s=Oe(r,d.mode,p,U),s.return=d,s):(s=u(s,r),s.return=d,s)}function b(d,s,r){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=bi(""+s,d.mode,r),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case kt:return r=Gu(s.type,s.key,s.props,null,d.mode,r),wa(r,s),r.return=d,r;case Yt:return s=Ei(s,d.mode,r),s.return=d,s;case Qt:return s=qe(s),b(d,s,r)}if(gl(s)||Gt(s))return s=Oe(s,d.mode,r,null),s.return=d,s;if(typeof s.then=="function")return b(d,Ju(s),r);if(s.$$typeof===Ht)return b(d,Zu(d,s),r);ku(d,s)}return null}function h(d,s,r,p){var U=s!==null?s.key:null;if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return U!==null?null:c(d,s,""+r,p);if(typeof r=="object"&&r!==null){switch(r.$$typeof){case kt:return r.key===U?f(d,s,r,p):null;case Yt:return r.key===U?m(d,s,r,p):null;case Qt:return r=qe(r),h(d,s,r,p)}if(gl(r)||Gt(r))return U!==null?null:g(d,s,r,p,null);if(typeof r.then=="function")return h(d,s,Ju(r),p);if(r.$$typeof===Ht)return h(d,s,Zu(d,r),p);ku(d,r)}return null}function y(d,s,r,p,U){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return d=d.get(r)||null,c(s,d,""+p,U);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case kt:return d=d.get(p.key===null?r:p.key)||null,f(s,d,p,U);case Yt:return d=d.get(p.key===null?r:p.key)||null,m(s,d,p,U);case Qt:return p=qe(p),y(d,s,r,p,U)}if(gl(p)||Gt(p))return d=d.get(r)||null,g(s,d,p,U,null);if(typeof p.then=="function")return y(d,s,r,Ju(p),U);if(p.$$typeof===Ht)return y(d,s,r,Zu(s,p),U);ku(s,p)}return null}function _(d,s,r,p){for(var U=null,K=null,O=s,j=s=0,Z=null;O!==null&&j<r.length;j++){O.index>j?(Z=O,O=null):Z=O.sibling;var J=h(d,O,r[j],p);if(J===null){O===null&&(O=Z);break}t&&O&&J.alternate===null&&l(d,O),s=n(J,s,j),K===null?U=J:K.sibling=J,K=J,O=Z}if(j===r.length)return e(d,O),w&&Rl(d,j),U;if(O===null){for(;j<r.length;j++)O=b(d,r[j],p),O!==null&&(s=n(O,s,j),K===null?U=O:K.sibling=O,K=O);return w&&Rl(d,j),U}for(O=a(O);j<r.length;j++)Z=y(O,d,j,r[j],p),Z!==null&&(t&&Z.alternate!==null&&O.delete(Z.key===null?j:Z.key),s=n(Z,s,j),K===null?U=Z:K.sibling=Z,K=Z);return t&&O.forEach(function(pe){return l(d,pe)}),w&&Rl(d,j),U}function C(d,s,r,p){if(r==null)throw Error(v(151));for(var U=null,K=null,O=s,j=s=0,Z=null,J=r.next();O!==null&&!J.done;j++,J=r.next()){O.index>j?(Z=O,O=null):Z=O.sibling;var pe=h(d,O,J.value,p);if(pe===null){O===null&&(O=Z);break}t&&O&&pe.alternate===null&&l(d,O),s=n(pe,s,j),K===null?U=pe:K.sibling=pe,K=pe,O=Z}if(J.done)return e(d,O),w&&Rl(d,j),U;if(O===null){for(;!J.done;j++,J=r.next())J=b(d,J.value,p),J!==null&&(s=n(J,s,j),K===null?U=J:K.sibling=J,K=J);return w&&Rl(d,j),U}for(O=a(O);!J.done;j++,J=r.next())J=y(O,d,j,J.value,p),J!==null&&(t&&J.alternate!==null&&O.delete(J.key===null?j:J.key),s=n(J,s,j),K===null?U=J:K.sibling=J,K=J);return t&&O.forEach(function(Kh){return l(d,Kh)}),w&&Rl(d,j),U}function ut(d,s,r,p){if(typeof r=="object"&&r!==null&&r.type===qt&&r.key===null&&(r=r.props.children),typeof r=="object"&&r!==null){switch(r.$$typeof){case kt:t:{for(var U=r.key;s!==null;){if(s.key===U){if(U=r.type,U===qt){if(s.tag===7){e(d,s.sibling),p=u(s,r.props.children),p.return=d,d=p;break t}}else if(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Qt&&qe(U)===s.type){e(d,s.sibling),p=u(s,r.props),wa(p,r),p.return=d,d=p;break t}e(d,s);break}else l(d,s);s=s.sibling}r.type===qt?(p=Oe(r.props.children,d.mode,p,r.key),p.return=d,d=p):(p=Gu(r.type,r.key,r.props,null,d.mode,p),wa(p,r),p.return=d,d=p)}return i(d);case Yt:t:{for(U=r.key;s!==null;){if(s.key===U)if(s.tag===4&&s.stateNode.containerInfo===r.containerInfo&&s.stateNode.implementation===r.implementation){e(d,s.sibling),p=u(s,r.children||[]),p.return=d,d=p;break t}else{e(d,s);break}else l(d,s);s=s.sibling}p=Ei(r,d.mode,p),p.return=d,d=p}return i(d);case Qt:return r=qe(r),ut(d,s,r,p)}if(gl(r))return _(d,s,r,p);if(Gt(r)){if(U=Gt(r),typeof U!="function")throw Error(v(150));return r=U.call(r),C(d,s,r,p)}if(typeof r.then=="function")return ut(d,s,Ju(r),p);if(r.$$typeof===Ht)return ut(d,s,Zu(d,r),p);ku(d,r)}return typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint"?(r=""+r,s!==null&&s.tag===6?(e(d,s.sibling),p=u(s,r),p.return=d,d=p):(e(d,s),p=bi(r,d.mode,p),p.return=d,d=p),i(d)):e(d,s)}return function(d,s,r,p){try{Va=0;var U=ut(d,s,r,p);return fa=null,U}catch(O){if(O===ca||O===wu)throw O;var K=tl(29,O,null,d.mode);return K.lanes=p,K.return=d,K}finally{}}}var xe=Ms(!0),Ds=Ms(!1),ee=!1;function qi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ri(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ae(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ue(t,l,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(W&2)!==0){var u=a.pending;return u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l,l=Qu(t),os(t,null,e),l}return ju(t,a,l,e),Qu(t)}function Ka(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,Sf(t,e)}}function xi(t,l){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var u=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,e=e.next}while(e!==null);n===null?u=n=l:n=n.next=l}else u=n=l;e={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var Bi=!1;function Ja(){if(Bi){var t=ia;if(t!==null)throw t}}function ka(t,l,e,a){Bi=!1;var u=t.updateQueue;ee=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,m=f.next;f.next=null,i===null?n=m:i.next=m,i=f;var g=t.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==i&&(c===null?g.firstBaseUpdate=m:c.next=m,g.lastBaseUpdate=f))}if(n!==null){var b=u.baseState;i=0,g=m=f=null,c=n;do{var h=c.lane&-536870913,y=h!==c.lane;if(y?(L&h)===h:(a&h)===h){h!==0&&h===na&&(Bi=!0),g!==null&&(g=g.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var _=t,C=c;h=l;var ut=e;switch(C.tag){case 1:if(_=C.payload,typeof _=="function"){b=_.call(ut,b,h);break t}b=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=C.payload,h=typeof _=="function"?_.call(ut,b,h):_,h==null)break t;b=q({},b,h);break t;case 2:ee=!0}}h=c.callback,h!==null&&(t.flags|=64,y&&(t.flags|=8192),y=u.callbacks,y===null?u.callbacks=[h]:y.push(h))}else y={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(m=g=y,f=b):g=g.next=y,i|=h;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;y=c,c=y.next,y.next=null,u.lastBaseUpdate=y,u.shared.pending=null}}while(!0);g===null&&(f=b),u.baseState=f,u.firstBaseUpdate=m,u.lastBaseUpdate=g,n===null&&(u.shared.lanes=0),se|=i,t.lanes=i,t.memoizedState=b}}function Os(t,l){if(typeof t!="function")throw Error(v(191,t));t.call(l)}function Us(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Os(e[t],l)}var sa=o(null),Wu=o(0);function Hs(t,l){t=wl,z(Wu,t),z(sa,l),wl=t|l.baseLanes}function Yi(){z(Wu,wl),z(sa,sa.current)}function ji(){wl=Wu.current,E(sa),E(Wu)}var ll=o(null),hl=null;function ne(t){var l=t.alternate;z(yt,yt.current&1),z(ll,t),hl===null&&(l===null||sa.current!==null||l.memoizedState!==null)&&(hl=t)}function Qi(t){z(yt,yt.current),z(ll,t),hl===null&&(hl=t)}function Cs(t){t.tag===22?(z(yt,yt.current),z(ll,t),hl===null&&(hl=t)):ie()}function ie(){z(yt,yt.current),z(ll,ll.current)}function el(t){E(ll),hl===t&&(hl=null),E(yt)}var yt=o(0);function Fu(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||wc(e)||Kc(e)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Yl=0,Y=null,et=null,pt=null,$u=!1,oa=!1,Be=!1,Iu=0,Wa=0,da=null,Bm=0;function rt(){throw Error(v(321))}function Gi(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!Pt(t[e],l[e]))return!1;return!0}function Xi(t,l,e,a,u,n){return Yl=n,Y=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,S.H=t===null||t.memoizedState===null?vo:ec,Be=!1,n=e(a,u),Be=!1,oa&&(n=qs(l,e,a,u)),Ns(t),n}function Ns(t){S.H=Ia;var l=et!==null&&et.next!==null;if(Yl=0,pt=et=Y=null,$u=!1,Wa=0,da=null,l)throw Error(v(300));t===null||bt||(t=t.dependencies,t!==null&&Lu(t)&&(bt=!0))}function qs(t,l,e,a){Y=t;var u=0;do{if(oa&&(da=null),Wa=0,oa=!1,25<=u)throw Error(v(301));if(u+=1,pt=et=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}S.H=yo,n=l(e,a)}while(oa);return n}function Ym(){var t=S.H,l=t.useState()[0];return l=typeof l.then=="function"?Fa(l):l,t=t.useState()[0],(et!==null?et.memoizedState:null)!==t&&(Y.flags|=1024),l}function Li(){var t=Iu!==0;return Iu=0,t}function Zi(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function Vi(t){if($u){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}$u=!1}Yl=0,pt=et=Y=null,oa=!1,Wa=Iu=0,da=null}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Y.memoizedState=pt=t:pt=pt.next=t,pt}function gt(){if(et===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var l=pt===null?Y.memoizedState:pt.next;if(l!==null)pt=l,et=t;else{if(t===null)throw Y.alternate===null?Error(v(467)):Error(v(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},pt===null?Y.memoizedState=pt=t:pt=pt.next=t}return pt}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(t){var l=Wa;return Wa+=1,da===null&&(da=[]),t=As(da,t,l),l=Y,(pt===null?l.memoizedState:pt.next)===null&&(l=l.alternate,S.H=l===null||l.memoizedState===null?vo:ec),t}function tn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fa(t);if(t.$$typeof===Ht)return Dt(t)}throw Error(v(438,String(t)))}function wi(t){var l=null,e=Y.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var a=Y.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(u){return u.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=Pu(),Y.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),a=0;a<t;a++)e[a]=Ge;return l.index++,e}function jl(t,l){return typeof l=="function"?l(t):l}function ln(t){var l=gt();return Ki(l,et,t)}function Ki(t,l,e){var a=t.queue;if(a===null)throw Error(v(311));a.lastRenderedReducer=e;var u=t.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}l.baseQueue=u=n,a.pending=null}if(n=t.baseState,u===null)t.memoizedState=n;else{l=u.next;var c=i=null,f=null,m=l,g=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(L&b)===b:(Yl&b)===b){var h=m.revertLane;if(h===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===na&&(g=!0);else if((Yl&h)===h){m=m.next,h===na&&(g=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=b,i=n):f=f.next=b,Y.lanes|=h,se|=h;b=m.action,Be&&e(n,b),n=m.hasEagerState?m.eagerState:e(n,b)}else h={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=h,i=n):f=f.next=h,Y.lanes|=b,se|=b;m=m.next}while(m!==null&&m!==l);if(f===null?i=n:f.next=c,!Pt(n,t.memoizedState)&&(bt=!0,g&&(e=ia,e!==null)))throw e;t.memoizedState=n,t.baseState=i,t.baseQueue=f,a.lastRenderedState=n}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Ji(t){var l=gt(),e=l.queue;if(e===null)throw Error(v(311));e.lastRenderedReducer=t;var a=e.dispatch,u=e.pending,n=l.memoizedState;if(u!==null){e.pending=null;var i=u=u.next;do n=t(n,i.action),i=i.next;while(i!==u);Pt(n,l.memoizedState)||(bt=!0),l.memoizedState=n,l.baseQueue===null&&(l.baseState=n),e.lastRenderedState=n}return[n,a]}function Rs(t,l,e){var a=Y,u=gt(),n=w;if(n){if(e===void 0)throw Error(v(407));e=e()}else e=l();var i=!Pt((et||u).memoizedState,e);if(i&&(u.memoizedState=e,bt=!0),u=u.queue,Fi(Ys.bind(null,a,u,t),[t]),u.getSnapshot!==l||i||pt!==null&&pt.memoizedState.tag&1){if(a.flags|=2048,ra(9,{destroy:void 0},Bs.bind(null,a,u,e,l),null),it===null)throw Error(v(349));n||(Yl&127)!==0||xs(a,l,e)}return e}function xs(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=Y.updateQueue,l===null?(l=Pu(),Y.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function Bs(t,l,e,a){l.value=e,l.getSnapshot=a,js(l)&&Qs(t)}function Ys(t,l,e){return e(function(){js(l)&&Qs(t)})}function js(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!Pt(t,e)}catch{return!0}}function Qs(t){var l=De(t,2);l!==null&&Jt(l,t,2)}function ki(t){var l=xt();if(typeof t=="function"){var e=t;if(t=e(),Be){Wl(!0);try{e()}finally{Wl(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:t},l}function Gs(t,l,e,a){return t.baseState=e,Ki(t,et,typeof a=="function"?a:jl)}function jm(t,l,e,a,u){if(un(t))throw Error(v(485));if(t=l.action,t!==null){var n={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};S.T!==null?e(!0):n.isTransition=!1,a(n),e=l.pending,e===null?(n.next=l.pending=n,Xs(l,n)):(n.next=e.next,l.pending=e.next=n)}}function Xs(t,l){var e=l.action,a=l.payload,u=t.state;if(l.isTransition){var n=S.T,i={};S.T=i;try{var c=e(u,a),f=S.S;f!==null&&f(i,c),Ls(t,l,c)}catch(m){Wi(t,l,m)}finally{n!==null&&i.types!==null&&(n.types=i.types),S.T=n}}else try{n=e(u,a),Ls(t,l,n)}catch(m){Wi(t,l,m)}}function Ls(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Zs(t,l,a)},function(a){return Wi(t,l,a)}):Zs(t,l,e)}function Zs(t,l,e){l.status="fulfilled",l.value=e,Vs(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,Xs(t,e)))}function Wi(t,l,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=e,Vs(l),l=l.next;while(l!==a)}t.action=null}function Vs(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function ws(t,l){return l}function Ks(t,l){if(w){var e=it.formState;if(e!==null){t:{var a=Y;if(w){if(ct){l:{for(var u=ct,n=ml;u.nodeType!==8;){if(!n){u=null;break l}if(u=vl(u.nextSibling),u===null){u=null;break l}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){ct=vl(u.nextSibling),a=u.data==="F!";break t}}te(a)}a=!1}a&&(l=e[0])}}return e=xt(),e.memoizedState=e.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:l},e.queue=a,e=ro.bind(null,Y,a),a.dispatch=e,a=ki(!1),n=lc.bind(null,Y,!1,a.queue),a=xt(),u={state:l,dispatch:null,action:t,pending:null},a.queue=u,e=jm.bind(null,Y,u,n,e),u.dispatch=e,a.memoizedState=t,[l,e,!1]}function Js(t){var l=gt();return ks(l,et,t)}function ks(t,l,e){if(l=Ki(t,l,ws)[0],t=ln(jl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Fa(l)}catch(i){throw i===ca?wu:i}else a=l;l=gt();var u=l.queue,n=u.dispatch;return e!==l.memoizedState&&(Y.flags|=2048,ra(9,{destroy:void 0},Qm.bind(null,u,e),null)),[a,n,t]}function Qm(t,l){t.action=l}function Ws(t){var l=gt(),e=et;if(e!==null)return ks(l,e,t);gt(),l=l.memoizedState,e=gt();var a=e.queue.dispatch;return e.memoizedState=t,[l,a,!1]}function ra(t,l,e,a){return t={tag:t,create:e,deps:a,inst:l,next:null},l=Y.updateQueue,l===null&&(l=Pu(),Y.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,l.lastEffect=t),t}function Fs(){return gt().memoizedState}function en(t,l,e,a){var u=xt();Y.flags|=t,u.memoizedState=ra(1|l,{destroy:void 0},e,a===void 0?null:a)}function an(t,l,e,a){var u=gt();a=a===void 0?null:a;var n=u.memoizedState.inst;et!==null&&a!==null&&Gi(a,et.memoizedState.deps)?u.memoizedState=ra(l,n,e,a):(Y.flags|=t,u.memoizedState=ra(1|l,n,e,a))}function $s(t,l){en(8390656,8,t,l)}function Fi(t,l){an(2048,8,t,l)}function Gm(t){Y.flags|=4;var l=Y.updateQueue;if(l===null)l=Pu(),Y.updateQueue=l,l.events=[t];else{var e=l.events;e===null?l.events=[t]:e.push(t)}}function Is(t){var l=gt().memoizedState;return Gm({ref:l,nextImpl:t}),function(){if((W&2)!==0)throw Error(v(440));return l.impl.apply(void 0,arguments)}}function Ps(t,l){return an(4,2,t,l)}function to(t,l){return an(4,4,t,l)}function lo(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function eo(t,l,e){e=e!=null?e.concat([t]):null,an(4,4,lo.bind(null,l,t),e)}function $i(){}function ao(t,l){var e=gt();l=l===void 0?null:l;var a=e.memoizedState;return l!==null&&Gi(l,a[1])?a[0]:(e.memoizedState=[t,l],t)}function uo(t,l){var e=gt();l=l===void 0?null:l;var a=e.memoizedState;if(l!==null&&Gi(l,a[1]))return a[0];if(a=t(),Be){Wl(!0);try{t()}finally{Wl(!1)}}return e.memoizedState=[a,l],a}function Ii(t,l,e){return e===void 0||(Yl&1073741824)!==0&&(L&261930)===0?t.memoizedState=l:(t.memoizedState=e,t=id(),Y.lanes|=t,se|=t,e)}function no(t,l,e,a){return Pt(e,l)?e:sa.current!==null?(t=Ii(t,e,a),Pt(t,l)||(bt=!0),t):(Yl&42)===0||(Yl&1073741824)!==0&&(L&261930)===0?(bt=!0,t.memoizedState=e):(t=id(),Y.lanes|=t,se|=t,l)}function io(t,l,e,a,u){var n=A.p;A.p=n!==0&&8>n?n:8;var i=S.T,c={};S.T=c,lc(t,!1,l,e);try{var f=u(),m=S.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var g=xm(f,a);$a(t,l,g,nl(t))}else $a(t,l,a,nl(t))}catch(b){$a(t,l,{then:function(){},status:"rejected",reason:b},nl())}finally{A.p=n,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Xm(){}function Pi(t,l,e,a){if(t.tag!==5)throw Error(v(476));var u=co(t).queue;io(t,u,l,R,e===null?Xm:function(){return fo(t),e(a)})}function co(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:R},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function fo(t){var l=co(t);l.next===null&&(l=t.alternate.memoizedState),$a(t,l.next.queue,{},nl())}function tc(){return Dt(hu)}function so(){return gt().memoizedState}function oo(){return gt().memoizedState}function Lm(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=nl();t=ae(e);var a=ue(l,t,e);a!==null&&(Jt(a,l,e),Ka(a,l,e)),l={cache:Ui()},t.payload=l;return}l=l.return}}function Zm(t,l,e){var a=nl();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},un(t)?mo(l,e):(e=Si(t,l,e,a),e!==null&&(Jt(e,t,a),ho(e,l,a)))}function ro(t,l,e){var a=nl();$a(t,l,e,a)}function $a(t,l,e,a){var u={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(un(t))mo(l,u);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=l.lastRenderedReducer,n!==null))try{var i=l.lastRenderedState,c=n(i,e);if(u.hasEagerState=!0,u.eagerState=c,Pt(c,i))return ju(t,l,u,0),it===null&&Yu(),!1}catch{}finally{}if(e=Si(t,l,u,a),e!==null)return Jt(e,t,a),ho(e,l,a),!0}return!1}function lc(t,l,e,a){if(a={lane:2,revertLane:qc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},un(t)){if(l)throw Error(v(479))}else l=Si(t,e,a,2),l!==null&&Jt(l,t,2)}function un(t){var l=t.alternate;return t===Y||l!==null&&l===Y}function mo(t,l){oa=$u=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function ho(t,l,e){if((e&4194048)!==0){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,Sf(t,e)}}var Ia={readContext:Dt,use:tn,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt};Ia.useEffectEvent=rt;var vo={readContext:Dt,use:tn,useCallback:function(t,l){return xt().memoizedState=[t,l===void 0?null:l],t},useContext:Dt,useEffect:$s,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,en(4194308,4,lo.bind(null,l,t),e)},useLayoutEffect:function(t,l){return en(4194308,4,t,l)},useInsertionEffect:function(t,l){en(4,2,t,l)},useMemo:function(t,l){var e=xt();l=l===void 0?null:l;var a=t();if(Be){Wl(!0);try{t()}finally{Wl(!1)}}return e.memoizedState=[a,l],a},useReducer:function(t,l,e){var a=xt();if(e!==void 0){var u=e(l);if(Be){Wl(!0);try{e(l)}finally{Wl(!1)}}}else u=l;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Zm.bind(null,Y,t),[a.memoizedState,t]},useRef:function(t){var l=xt();return t={current:t},l.memoizedState=t},useState:function(t){t=ki(t);var l=t.queue,e=ro.bind(null,Y,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:$i,useDeferredValue:function(t,l){var e=xt();return Ii(e,t,l)},useTransition:function(){var t=ki(!1);return t=io.bind(null,Y,t.queue,!0,!1),xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var a=Y,u=xt();if(w){if(e===void 0)throw Error(v(407));e=e()}else{if(e=l(),it===null)throw Error(v(349));(L&127)!==0||xs(a,l,e)}u.memoizedState=e;var n={value:e,getSnapshot:l};return u.queue=n,$s(Ys.bind(null,a,n,t),[t]),a.flags|=2048,ra(9,{destroy:void 0},Bs.bind(null,a,n,e,l),null),e},useId:function(){var t=xt(),l=it.identifierPrefix;if(w){var e=_l,a=zl;e=(a&~(1<<32-It(a)-1)).toString(32)+e,l="_"+l+"R_"+e,e=Iu++,0<e&&(l+="H"+e.toString(32)),l+="_"}else e=Bm++,l="_"+l+"r_"+e.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:tc,useFormState:Ks,useActionState:Ks,useOptimistic:function(t){var l=xt();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=lc.bind(null,Y,!0,e),e.dispatch=l,[t,l]},useMemoCache:wi,useCacheRefresh:function(){return xt().memoizedState=Lm.bind(null,Y)},useEffectEvent:function(t){var l=xt(),e={impl:t};return l.memoizedState=e,function(){if((W&2)!==0)throw Error(v(440));return e.impl.apply(void 0,arguments)}}},ec={readContext:Dt,use:tn,useCallback:ao,useContext:Dt,useEffect:Fi,useImperativeHandle:eo,useInsertionEffect:Ps,useLayoutEffect:to,useMemo:uo,useReducer:ln,useRef:Fs,useState:function(){return ln(jl)},useDebugValue:$i,useDeferredValue:function(t,l){var e=gt();return no(e,et.memoizedState,t,l)},useTransition:function(){var t=ln(jl)[0],l=gt().memoizedState;return[typeof t=="boolean"?t:Fa(t),l]},useSyncExternalStore:Rs,useId:so,useHostTransitionStatus:tc,useFormState:Js,useActionState:Js,useOptimistic:function(t,l){var e=gt();return Gs(e,et,t,l)},useMemoCache:wi,useCacheRefresh:oo};ec.useEffectEvent=Is;var yo={readContext:Dt,use:tn,useCallback:ao,useContext:Dt,useEffect:Fi,useImperativeHandle:eo,useInsertionEffect:Ps,useLayoutEffect:to,useMemo:uo,useReducer:Ji,useRef:Fs,useState:function(){return Ji(jl)},useDebugValue:$i,useDeferredValue:function(t,l){var e=gt();return et===null?Ii(e,t,l):no(e,et.memoizedState,t,l)},useTransition:function(){var t=Ji(jl)[0],l=gt().memoizedState;return[typeof t=="boolean"?t:Fa(t),l]},useSyncExternalStore:Rs,useId:so,useHostTransitionStatus:tc,useFormState:Ws,useActionState:Ws,useOptimistic:function(t,l){var e=gt();return et!==null?Gs(e,et,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:wi,useCacheRefresh:oo};yo.useEffectEvent=Is;function ac(t,l,e,a){l=t.memoizedState,e=e(a,l),e=e==null?l:q({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var uc={enqueueSetState:function(t,l,e){t=t._reactInternals;var a=nl(),u=ae(a);u.payload=l,e!=null&&(u.callback=e),l=ue(t,u,a),l!==null&&(Jt(l,t,a),Ka(l,t,a))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var a=nl(),u=ae(a);u.tag=1,u.payload=l,e!=null&&(u.callback=e),l=ue(t,u,a),l!==null&&(Jt(l,t,a),Ka(l,t,a))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=nl(),a=ae(e);a.tag=2,l!=null&&(a.callback=l),l=ue(t,a,e),l!==null&&(Jt(l,t,e),Ka(l,t,e))}};function go(t,l,e,a,u,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,n,i):l.prototype&&l.prototype.isPureReactComponent?!ja(e,a)||!ja(u,n):!0}function So(t,l,e,a){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,a),l.state!==t&&uc.enqueueReplaceState(l,l.state,null)}function Ye(t,l){var e=l;if("ref"in l){e={};for(var a in l)a!=="ref"&&(e[a]=l[a])}if(t=t.defaultProps){e===l&&(e=q({},e));for(var u in t)e[u]===void 0&&(e[u]=t[u])}return e}function po(t){Bu(t)}function bo(t){console.error(t)}function Eo(t){Bu(t)}function nn(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function To(t,l,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nc(t,l,e){return e=ae(e),e.tag=3,e.payload={element:null},e.callback=function(){nn(t,l)},e}function Ao(t){return t=ae(t),t.tag=3,t}function zo(t,l,e,a){var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;t.payload=function(){return u(n)},t.callback=function(){To(l,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){To(l,e,a),typeof u!="function"&&(oe===null?oe=new Set([this]):oe.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Vm(t,l,e,a,u){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=e.alternate,l!==null&&ua(l,e,u,!0),e=ll.current,e!==null){switch(e.tag){case 31:case 13:return hl===null?Sn():e.alternate===null&&mt===0&&(mt=3),e.flags&=-257,e.flags|=65536,e.lanes=u,a===Ku?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([a]):l.add(a),Hc(t,a,u)),!1;case 22:return e.flags|=65536,a===Ku?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([a]):e.add(a)),Hc(t,a,u)),!1}throw Error(v(435,e.tag))}return Hc(t,a,u),Sn(),!1}if(w)return l=ll.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=u,a!==zi&&(t=Error(v(422),{cause:a}),Xa(ol(t,e)))):(a!==zi&&(l=Error(v(423),{cause:a}),Xa(ol(l,e))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=ol(a,e),u=nc(t.stateNode,a,u),xi(t,u),mt!==4&&(mt=2)),!1;var n=Error(v(520),{cause:a});if(n=ol(n,e),iu===null?iu=[n]:iu.push(n),mt!==4&&(mt=2),l===null)return!0;a=ol(a,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=u&-u,e.lanes|=t,t=nc(e.stateNode,a,t),xi(e,t),!1;case 1:if(l=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(oe===null||!oe.has(n))))return e.flags|=65536,u&=-u,e.lanes|=u,u=Ao(u),zo(u,t,e,a),xi(e,u),!1}e=e.return}while(e!==null);return!1}var ic=Error(v(461)),bt=!1;function Ot(t,l,e,a){l.child=t===null?Ds(l,null,e,a):xe(l,t.child,e,a)}function _o(t,l,e,a,u){e=e.render;var n=l.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Ce(l),a=Xi(t,l,e,i,n,u),c=Li(),t!==null&&!bt?(Zi(t,l,u),Ql(t,l,u)):(w&&c&&Ti(l),l.flags|=1,Ot(t,l,a,u),l.child)}function Mo(t,l,e,a,u){if(t===null){var n=e.type;return typeof n=="function"&&!pi(n)&&n.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=n,Do(t,l,n,a,u)):(t=Gu(e.type,null,a,l,l.mode,u),t.ref=l.ref,t.return=l,l.child=t)}if(n=t.child,!hc(t,u)){var i=n.memoizedProps;if(e=e.compare,e=e!==null?e:ja,e(i,a)&&t.ref===l.ref)return Ql(t,l,u)}return l.flags|=1,t=ql(n,a),t.ref=l.ref,t.return=l,l.child=t}function Do(t,l,e,a,u){if(t!==null){var n=t.memoizedProps;if(ja(n,a)&&t.ref===l.ref)if(bt=!1,l.pendingProps=a=n,hc(t,u))(t.flags&131072)!==0&&(bt=!0);else return l.lanes=t.lanes,Ql(t,l,u)}return cc(t,l,e,a,u)}function Oo(t,l,e,a){var u=a.children,n=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(n=n!==null?n.baseLanes|e:e,t!==null){for(a=l.child=t.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~n}else a=0,l.child=null;return Uo(t,l,n,e,a)}if((e&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vu(l,n!==null?n.cachePool:null),n!==null?Hs(l,n):Yi(),Cs(l);else return a=l.lanes=536870912,Uo(t,l,n!==null?n.baseLanes|e:e,e,a)}else n!==null?(Vu(l,n.cachePool),Hs(l,n),ie(),l.memoizedState=null):(t!==null&&Vu(l,null),Yi(),ie());return Ot(t,l,u,e),l.child}function Pa(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Uo(t,l,e,a,u){var n=Ci();return n=n===null?null:{parent:St._currentValue,pool:n},l.memoizedState={baseLanes:e,cachePool:n},t!==null&&Vu(l,null),Yi(),Cs(l),t!==null&&ua(t,l,a,!0),l.childLanes=u,null}function cn(t,l){return l=sn({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function Ho(t,l,e){return xe(l,t.child,null,e),t=cn(l,l.pendingProps),t.flags|=2,el(l),l.memoizedState=null,t}function wm(t,l,e){var a=l.pendingProps,u=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(w){if(a.mode==="hidden")return t=cn(l,a),l.lanes=536870912,Pa(null,t);if(Qi(l),(t=ct)?(t=Ld(t,ml),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Il!==null?{id:zl,overflow:_l}:null,retryLane:536870912,hydrationErrors:null},e=rs(t),e.return=l,l.child=e,Mt=l,ct=null)):t=null,t===null)throw te(l);return l.lanes=536870912,null}return cn(l,a)}var n=t.memoizedState;if(n!==null){var i=n.dehydrated;if(Qi(l),u)if(l.flags&256)l.flags&=-257,l=Ho(t,l,e);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(v(558));else if(bt||ua(t,l,e,!1),u=(e&t.childLanes)!==0,bt||u){if(a=it,a!==null&&(i=pf(a,e),i!==0&&i!==n.retryLane))throw n.retryLane=i,De(t,i),Jt(a,t,i),ic;Sn(),l=Ho(t,l,e)}else t=n.treeContext,ct=vl(i.nextSibling),Mt=l,w=!0,Pl=null,ml=!1,t!==null&&vs(l,t),l=cn(l,a),l.flags|=4096;return l}return t=ql(t.child,{mode:a.mode,children:a.children}),t.ref=l.ref,l.child=t,t.return=l,t}function fn(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(v(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function cc(t,l,e,a,u){return Ce(l),e=Xi(t,l,e,a,void 0,u),a=Li(),t!==null&&!bt?(Zi(t,l,u),Ql(t,l,u)):(w&&a&&Ti(l),l.flags|=1,Ot(t,l,e,u),l.child)}function Co(t,l,e,a,u,n){return Ce(l),l.updateQueue=null,e=qs(l,a,e,u),Ns(t),a=Li(),t!==null&&!bt?(Zi(t,l,n),Ql(t,l,n)):(w&&a&&Ti(l),l.flags|=1,Ot(t,l,e,n),l.child)}function No(t,l,e,a,u){if(Ce(l),l.stateNode===null){var n=ta,i=e.contextType;typeof i=="object"&&i!==null&&(n=Dt(i)),n=new e(a,n),l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=uc,l.stateNode=n,n._reactInternals=l,n=l.stateNode,n.props=a,n.state=l.memoizedState,n.refs={},qi(l),i=e.contextType,n.context=typeof i=="object"&&i!==null?Dt(i):ta,n.state=l.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ac(l,e,i,a),n.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&uc.enqueueReplaceState(n,n.state,null),ka(l,a,n,u),Ja(),n.state=l.memoizedState),typeof n.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(t===null){n=l.stateNode;var c=l.memoizedProps,f=Ye(e,c);n.props=f;var m=n.context,g=e.contextType;i=ta,typeof g=="object"&&g!==null&&(i=Dt(g));var b=e.getDerivedStateFromProps;g=typeof b=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,g||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||m!==i)&&So(l,n,a,i),ee=!1;var h=l.memoizedState;n.state=h,ka(l,a,n,u),Ja(),m=l.memoizedState,c||h!==m||ee?(typeof b=="function"&&(ac(l,e,b,a),m=l.memoizedState),(f=ee||go(l,e,f,a,h,m,i))?(g||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(l.flags|=4194308)):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=m),n.props=a,n.state=m,n.context=i,a=f):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{n=l.stateNode,Ri(t,l),i=l.memoizedProps,g=Ye(e,i),n.props=g,b=l.pendingProps,h=n.context,m=e.contextType,f=ta,typeof m=="object"&&m!==null&&(f=Dt(m)),c=e.getDerivedStateFromProps,(m=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==b||h!==f)&&So(l,n,a,f),ee=!1,h=l.memoizedState,n.state=h,ka(l,a,n,u),Ja();var y=l.memoizedState;i!==b||h!==y||ee||t!==null&&t.dependencies!==null&&Lu(t.dependencies)?(typeof c=="function"&&(ac(l,e,c,a),y=l.memoizedState),(g=ee||go(l,e,g,a,h,y,f)||t!==null&&t.dependencies!==null&&Lu(t.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,y,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,y,f)),typeof n.componentDidUpdate=="function"&&(l.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=y),n.props=a,n.state=y,n.context=f,a=g):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(l.flags|=1024),a=!1)}return n=a,fn(t,l),a=(l.flags&128)!==0,n||a?(n=l.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:n.render(),l.flags|=1,t!==null&&a?(l.child=xe(l,t.child,null,u),l.child=xe(l,null,e,u)):Ot(t,l,e,u),l.memoizedState=n.state,t=l.child):t=Ql(t,l,u),t}function qo(t,l,e,a){return Ue(),l.flags|=256,Ot(t,l,e,a),l.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(t){return{baseLanes:t,cachePool:Es()}}function oc(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=ul),t}function Ro(t,l,e){var a=l.pendingProps,u=!1,n=(l.flags&128)!==0,i;if((i=n)||(i=t!==null&&t.memoizedState===null?!1:(yt.current&2)!==0),i&&(u=!0,l.flags&=-129),i=(l.flags&32)!==0,l.flags&=-33,t===null){if(w){if(u?ne(l):ie(),(t=ct)?(t=Ld(t,ml),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Il!==null?{id:zl,overflow:_l}:null,retryLane:536870912,hydrationErrors:null},e=rs(t),e.return=l,l.child=e,Mt=l,ct=null)):t=null,t===null)throw te(l);return Kc(t)?l.lanes=32:l.lanes=536870912,null}var c=a.children;return a=a.fallback,u?(ie(),u=l.mode,c=sn({mode:"hidden",children:c},u),a=Oe(a,u,e,null),c.return=l,a.return=l,c.sibling=a,l.child=c,a=l.child,a.memoizedState=sc(e),a.childLanes=oc(t,i,e),l.memoizedState=fc,Pa(null,a)):(ne(l),dc(l,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)l.flags&256?(ne(l),l.flags&=-257,l=rc(t,l,e)):l.memoizedState!==null?(ie(),l.child=t.child,l.flags|=128,l=null):(ie(),c=a.fallback,u=l.mode,a=sn({mode:"visible",children:a.children},u),c=Oe(c,u,e,null),c.flags|=2,a.return=l,c.return=l,a.sibling=c,l.child=a,xe(l,t.child,null,e),a=l.child,a.memoizedState=sc(e),a.childLanes=oc(t,i,e),l.memoizedState=fc,l=Pa(null,a));else if(ne(l),Kc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,a=Error(v(419)),a.stack="",a.digest=i,Xa({value:a,source:null,stack:null}),l=rc(t,l,e)}else if(bt||ua(t,l,e,!1),i=(e&t.childLanes)!==0,bt||i){if(i=it,i!==null&&(a=pf(i,e),a!==0&&a!==f.retryLane))throw f.retryLane=a,De(t,a),Jt(i,t,a),ic;wc(c)||Sn(),l=rc(t,l,e)}else wc(c)?(l.flags|=192,l.child=t.child,l=null):(t=f.treeContext,ct=vl(c.nextSibling),Mt=l,w=!0,Pl=null,ml=!1,t!==null&&vs(l,t),l=dc(l,a.children),l.flags|=4096);return l}return u?(ie(),c=a.fallback,u=l.mode,f=t.child,m=f.sibling,a=ql(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,m!==null?c=ql(m,c):(c=Oe(c,u,e,null),c.flags|=2),c.return=l,a.return=l,a.sibling=c,l.child=a,Pa(null,a),a=l.child,c=t.child.memoizedState,c===null?c=sc(e):(u=c.cachePool,u!==null?(f=St._currentValue,u=u.parent!==f?{parent:f,pool:f}:u):u=Es(),c={baseLanes:c.baseLanes|e,cachePool:u}),a.memoizedState=c,a.childLanes=oc(t,i,e),l.memoizedState=fc,Pa(t.child,a)):(ne(l),e=t.child,t=e.sibling,e=ql(e,{mode:"visible",children:a.children}),e.return=l,e.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=e,l.memoizedState=null,e)}function dc(t,l){return l=sn({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function sn(t,l){return t=tl(22,t,null,l),t.lanes=0,t}function rc(t,l,e){return xe(l,t.child,null,e),t=dc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function xo(t,l,e){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l),Di(t.return,l,e)}function mc(t,l,e,a,u,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:u,treeForkCount:n}:(i.isBackwards=l,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=u,i.treeForkCount=n)}function Bo(t,l,e){var a=l.pendingProps,u=a.revealOrder,n=a.tail;a=a.children;var i=yt.current,c=(i&2)!==0;if(c?(i=i&1|2,l.flags|=128):i&=1,z(yt,i),Ot(t,l,a,e),a=w?Ga:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xo(t,e,l);else if(t.tag===19)xo(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(e=l.child,u=null;e!==null;)t=e.alternate,t!==null&&Fu(t)===null&&(u=e),e=e.sibling;e=u,e===null?(u=l.child,l.child=null):(u=e.sibling,e.sibling=null),mc(l,!1,u,e,n,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,u=l.child,l.child=null;u!==null;){if(t=u.alternate,t!==null&&Fu(t)===null){l.child=u;break}t=u.sibling,u.sibling=e,e=u,u=t}mc(l,!0,e,null,n,a);break;case"together":mc(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function Ql(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),se|=l.lanes,(e&l.childLanes)===0)if(t!==null){if(ua(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(v(153));if(l.child!==null){for(t=l.child,e=ql(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=ql(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function hc(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Lu(t)))}function Km(t,l,e){switch(l.tag){case 3:Rt(l,l.stateNode.containerInfo),le(l,St,t.memoizedState.cache),Ue();break;case 27:case 5:_a(l);break;case 4:Rt(l,l.stateNode.containerInfo);break;case 10:le(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Qi(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(ne(l),l.flags|=128,null):(e&l.child.childLanes)!==0?Ro(t,l,e):(ne(l),t=Ql(t,l,e),t!==null?t.sibling:null);ne(l);break;case 19:var u=(t.flags&128)!==0;if(a=(e&l.childLanes)!==0,a||(ua(t,l,e,!1),a=(e&l.childLanes)!==0),u){if(a)return Bo(t,l,e);l.flags|=128}if(u=l.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(yt,yt.current),a)break;return null;case 22:return l.lanes=0,Oo(t,l,e,l.pendingProps);case 24:le(l,St,t.memoizedState.cache)}return Ql(t,l,e)}function Yo(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)bt=!0;else{if(!hc(t,e)&&(l.flags&128)===0)return bt=!1,Km(t,l,e);bt=(t.flags&131072)!==0}else bt=!1,w&&(l.flags&1048576)!==0&&hs(l,Ga,l.index);switch(l.lanes=0,l.tag){case 16:t:{var a=l.pendingProps;if(t=qe(l.elementType),l.type=t,typeof t=="function")pi(t)?(a=Ye(t,a),l.tag=1,l=No(null,l,t,a,e)):(l.tag=0,l=cc(null,l,t,a,e));else{if(t!=null){var u=t.$$typeof;if(u===il){l.tag=11,l=_o(null,l,t,a,e);break t}else if(u===V){l.tag=14,l=Mo(null,l,t,a,e);break t}}throw l=Ul(t)||t,Error(v(306,l,""))}}return l;case 0:return cc(t,l,l.type,l.pendingProps,e);case 1:return a=l.type,u=Ye(a,l.pendingProps),No(t,l,a,u,e);case 3:t:{if(Rt(l,l.stateNode.containerInfo),t===null)throw Error(v(387));a=l.pendingProps;var n=l.memoizedState;u=n.element,Ri(t,l),ka(l,a,null,e);var i=l.memoizedState;if(a=i.cache,le(l,St,a),a!==n.cache&&Oi(l,[St],e,!0),Ja(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},l.updateQueue.baseState=n,l.memoizedState=n,l.flags&256){l=qo(t,l,a,e);break t}else if(a!==u){u=ol(Error(v(424)),l),Xa(u),l=qo(t,l,a,e);break t}else{switch(t=l.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ct=vl(t.firstChild),Mt=l,w=!0,Pl=null,ml=!0,e=Ds(l,null,a,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Ue(),a===u){l=Ql(t,l,e);break t}Ot(t,l,a,e)}l=l.child}return l;case 26:return fn(t,l),t===null?(e=kd(l.type,null,l.pendingProps,null))?l.memoizedState=e:w||(e=l.type,t=l.pendingProps,a=_n(Q.current).createElement(e),a[_t]=l,a[Xt]=t,Ut(a,e,t),At(a),l.stateNode=a):l.memoizedState=kd(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return _a(l),t===null&&w&&(a=l.stateNode=wd(l.type,l.pendingProps,Q.current),Mt=l,ml=!0,u=ct,he(l.type)?(Jc=u,ct=vl(a.firstChild)):ct=u),Ot(t,l,l.pendingProps.children,e),fn(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&w&&((u=a=ct)&&(a=Th(a,l.type,l.pendingProps,ml),a!==null?(l.stateNode=a,Mt=l,ct=vl(a.firstChild),ml=!1,u=!0):u=!1),u||te(l)),_a(l),u=l.type,n=l.pendingProps,i=t!==null?t.memoizedProps:null,a=n.children,Lc(u,n)?a=null:i!==null&&Lc(u,i)&&(l.flags|=32),l.memoizedState!==null&&(u=Xi(t,l,Ym,null,null,e),hu._currentValue=u),fn(t,l),Ot(t,l,a,e),l.child;case 6:return t===null&&w&&((t=e=ct)&&(e=Ah(e,l.pendingProps,ml),e!==null?(l.stateNode=e,Mt=l,ct=null,t=!0):t=!1),t||te(l)),null;case 13:return Ro(t,l,e);case 4:return Rt(l,l.stateNode.containerInfo),a=l.pendingProps,t===null?l.child=xe(l,null,a,e):Ot(t,l,a,e),l.child;case 11:return _o(t,l,l.type,l.pendingProps,e);case 7:return Ot(t,l,l.pendingProps,e),l.child;case 8:return Ot(t,l,l.pendingProps.children,e),l.child;case 12:return Ot(t,l,l.pendingProps.children,e),l.child;case 10:return a=l.pendingProps,le(l,l.type,a.value),Ot(t,l,a.children,e),l.child;case 9:return u=l.type._context,a=l.pendingProps.children,Ce(l),u=Dt(u),a=a(u),l.flags|=1,Ot(t,l,a,e),l.child;case 14:return Mo(t,l,l.type,l.pendingProps,e);case 15:return Do(t,l,l.type,l.pendingProps,e);case 19:return Bo(t,l,e);case 31:return wm(t,l,e);case 22:return Oo(t,l,e,l.pendingProps);case 24:return Ce(l),a=Dt(St),t===null?(u=Ci(),u===null&&(u=it,n=Ui(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=e),u=n),l.memoizedState={parent:a,cache:u},qi(l),le(l,St,u)):((t.lanes&e)!==0&&(Ri(t,l),ka(l,null,null,e),Ja()),u=t.memoizedState,n=l.memoizedState,u.parent!==a?(u={parent:a,cache:a},l.memoizedState=u,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=u),le(l,St,a)):(a=n.cache,le(l,St,a),a!==u.cache&&Oi(l,[St],e,!0))),Ot(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(v(156,l.tag))}function Gl(t){t.flags|=4}function vc(t,l,e,a,u){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(od())t.flags|=8192;else throw Re=Ku,Ni}else t.flags&=-16777217}function jo(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pd(l))if(od())t.flags|=8192;else throw Re=Ku,Ni}function on(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?yf():536870912,t.lanes|=l,ya|=l)}function tu(t,l){if(!w)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ft(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(l)for(var u=t.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=e,l}function Jm(t,l,e){var a=l.pendingProps;switch(Ai(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(l),null;case 1:return ft(l),null;case 3:return e=l.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Bl(St),vt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(aa(l)?Gl(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,_i())),ft(l),null;case 26:var u=l.type,n=l.memoizedState;return t===null?(Gl(l),n!==null?(ft(l),jo(l,n)):(ft(l),vc(l,u,null,a,e))):n?n!==t.memoizedState?(Gl(l),ft(l),jo(l,n)):(ft(l),l.flags&=-16777217):(t=t.memoizedProps,t!==a&&Gl(l),ft(l),vc(l,u,t,a,e)),null;case 27:if(bu(l),e=Q.current,u=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Gl(l);else{if(!a){if(l.stateNode===null)throw Error(v(166));return ft(l),null}t=D.current,aa(l)?ys(l):(t=wd(u,a,e),l.stateNode=t,Gl(l))}return ft(l),null;case 5:if(bu(l),u=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Gl(l);else{if(!a){if(l.stateNode===null)throw Error(v(166));return ft(l),null}if(n=D.current,aa(l))ys(l);else{var i=_n(Q.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?i.createElement(u,{is:a.is}):i.createElement(u)}}n[_t]=l,n[Xt]=a;t:for(i=l.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break t;for(;i.sibling===null;){if(i.return===null||i.return===l)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}l.stateNode=n;t:switch(Ut(n,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Gl(l)}}return ft(l),vc(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,e),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==a&&Gl(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(v(166));if(t=Q.current,aa(l)){if(t=l.stateNode,e=l.memoizedProps,a=null,u=Mt,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[_t]=l,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Rd(t.nodeValue,e)),t||te(l,!0)}else t=_n(t).createTextNode(a),t[_t]=l,l.stateNode=t}return ft(l),null;case 31:if(e=l.memoizedState,t===null||t.memoizedState!==null){if(a=aa(l),e!==null){if(t===null){if(!a)throw Error(v(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(557));t[_t]=l}else Ue(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;ft(l),t=!1}else e=_i(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return l.flags&256?(el(l),l):(el(l),null);if((l.flags&128)!==0)throw Error(v(558))}return ft(l),null;case 13:if(a=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=aa(l),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(v(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(v(317));u[_t]=l}else Ue(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;ft(l),u=!1}else u=_i(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return l.flags&256?(el(l),l):(el(l),null)}return el(l),(l.flags&128)!==0?(l.lanes=e,l):(e=a!==null,t=t!==null&&t.memoizedState!==null,e&&(a=l.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)),e!==t&&e&&(l.child.flags|=8192),on(l,l.updateQueue),ft(l),null);case 4:return vt(),t===null&&Yc(l.stateNode.containerInfo),ft(l),null;case 10:return Bl(l.type),ft(l),null;case 19:if(E(yt),a=l.memoizedState,a===null)return ft(l),null;if(u=(l.flags&128)!==0,n=a.rendering,n===null)if(u)tu(a,!1);else{if(mt!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(n=Fu(t),n!==null){for(l.flags|=128,tu(a,!1),t=n.updateQueue,l.updateQueue=t,on(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)ds(e,t),e=e.sibling;return z(yt,yt.current&1|2),w&&Rl(l,a.treeForkCount),l.child}t=t.sibling}a.tail!==null&&Ft()>vn&&(l.flags|=128,u=!0,tu(a,!1),l.lanes=4194304)}else{if(!u)if(t=Fu(n),t!==null){if(l.flags|=128,u=!0,t=t.updateQueue,l.updateQueue=t,on(l,t),tu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!w)return ft(l),null}else 2*Ft()-a.renderingStartTime>vn&&e!==536870912&&(l.flags|=128,u=!0,tu(a,!1),l.lanes=4194304);a.isBackwards?(n.sibling=l.child,l.child=n):(t=a.last,t!==null?t.sibling=n:l.child=n,a.last=n)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ft(),t.sibling=null,e=yt.current,z(yt,u?e&1|2:e&1),w&&Rl(l,a.treeForkCount),t):(ft(l),null);case 22:case 23:return el(l),ji(),a=l.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(e&536870912)!==0&&(l.flags&128)===0&&(ft(l),l.subtreeFlags&6&&(l.flags|=8192)):ft(l),e=l.updateQueue,e!==null&&on(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==e&&(l.flags|=2048),t!==null&&E(Ne),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Bl(St),ft(l),null;case 25:return null;case 30:return null}throw Error(v(156,l.tag))}function km(t,l){switch(Ai(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Bl(St),vt(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return bu(l),null;case 31:if(l.memoizedState!==null){if(el(l),l.alternate===null)throw Error(v(340));Ue()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(el(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(v(340));Ue()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return E(yt),null;case 4:return vt(),null;case 10:return Bl(l.type),null;case 22:case 23:return el(l),ji(),t!==null&&E(Ne),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Bl(St),null;case 25:return null;default:return null}}function Qo(t,l){switch(Ai(l),l.tag){case 3:Bl(St),vt();break;case 26:case 27:case 5:bu(l);break;case 4:vt();break;case 31:l.memoizedState!==null&&el(l);break;case 13:el(l);break;case 19:E(yt);break;case 10:Bl(l.type);break;case 22:case 23:el(l),ji(),t!==null&&E(Ne);break;case 24:Bl(St)}}function lu(t,l){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var u=a.next;e=u;do{if((e.tag&t)===t){a=void 0;var n=e.create,i=e.inst;a=n(),i.destroy=a}e=e.next}while(e!==u)}}catch(c){tt(l,l.return,c)}}function ce(t,l,e){try{var a=l.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=l;var f=e,m=c;try{m()}catch(g){tt(u,f,g)}}}a=a.next}while(a!==n)}}catch(g){tt(l,l.return,g)}}function Go(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{Us(l,e)}catch(a){tt(t,t.return,a)}}}function Xo(t,l,e){e.props=Ye(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){tt(t,l,a)}}function eu(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(u){tt(t,l,u)}}function Ml(t,l){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(u){tt(t,l,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(u){tt(t,l,u)}else e.current=null}function Lo(t){var l=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(u){tt(t,t.return,u)}}function yc(t,l,e){try{var a=t.stateNode;yh(a,t.type,e,l),a[Xt]=l}catch(u){tt(t,t.return,u)}}function Zo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&he(t.type)||t.tag===4}function gc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Zo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&he(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sc(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=Cl));else if(a!==4&&(a===27&&he(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(Sc(t,l,e),t=t.sibling;t!==null;)Sc(t,l,e),t=t.sibling}function dn(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(a!==4&&(a===27&&he(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(dn(t,l,e),t=t.sibling;t!==null;)dn(t,l,e),t=t.sibling}function Vo(t){var l=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,u=l.attributes;u.length;)l.removeAttributeNode(u[0]);Ut(l,a,e),l[_t]=t,l[Xt]=e}catch(n){tt(t,t.return,n)}}var Xl=!1,Et=!1,pc=!1,wo=typeof WeakSet=="function"?WeakSet:Set,zt=null;function Wm(t,l){if(t=t.containerInfo,Gc=Nn,t=es(t),ri(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break t}var i=0,c=-1,f=-1,m=0,g=0,b=t,h=null;l:for(;;){for(var y;b!==e||u!==0&&b.nodeType!==3||(c=i+u),b!==n||a!==0&&b.nodeType!==3||(f=i+a),b.nodeType===3&&(i+=b.nodeValue.length),(y=b.firstChild)!==null;)h=b,b=y;for(;;){if(b===t)break l;if(h===e&&++m===u&&(c=i),h===n&&++g===a&&(f=i),(y=b.nextSibling)!==null)break;b=h,h=b.parentNode}b=y}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Xc={focusedElem:t,selectionRange:e},Nn=!1,zt=l;zt!==null;)if(l=zt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,zt=t;else for(;zt!==null;){switch(l=zt,n=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)u=t[e],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,e=l,u=n.memoizedProps,n=n.memoizedState,a=e.stateNode;try{var _=Ye(e.type,u);t=a.getSnapshotBeforeUpdate(_,n),a.__reactInternalSnapshotBeforeUpdate=t}catch(C){tt(e,e.return,C)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)Vc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(v(163))}if(t=l.sibling,t!==null){t.return=l.return,zt=t;break}zt=l.return}}function Ko(t,l,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Zl(t,e),a&4&&lu(5,e);break;case 1:if(Zl(t,e),a&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(i){tt(e,e.return,i)}else{var u=Ye(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(u,l,t.__reactInternalSnapshotBeforeUpdate)}catch(i){tt(e,e.return,i)}}a&64&&Go(e),a&512&&eu(e,e.return);break;case 3:if(Zl(t,e),a&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{Us(t,l)}catch(i){tt(e,e.return,i)}}break;case 27:l===null&&a&4&&Vo(e);case 26:case 5:Zl(t,e),l===null&&a&4&&Lo(e),a&512&&eu(e,e.return);break;case 12:Zl(t,e);break;case 31:Zl(t,e),a&4&&Wo(t,e);break;case 13:Zl(t,e),a&4&&Fo(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=uh.bind(null,e),zh(t,e))));break;case 22:if(a=e.memoizedState!==null||Xl,!a){l=l!==null&&l.memoizedState!==null||Et,u=Xl;var n=Et;Xl=a,(Et=l)&&!n?Vl(t,e,(e.subtreeFlags&8772)!==0):Zl(t,e),Xl=u,Et=n}break;case 30:break;default:Zl(t,e)}}function Jo(t){var l=t.alternate;l!==null&&(t.alternate=null,Jo(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&Wn(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,Zt=!1;function Ll(t,l,e){for(e=e.child;e!==null;)ko(t,l,e),e=e.sibling}function ko(t,l,e){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ma,e)}catch{}switch(e.tag){case 26:Et||Ml(e,l),Ll(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Et||Ml(e,l);var a=ot,u=Zt;he(e.type)&&(ot=e.stateNode,Zt=!1),Ll(t,l,e),du(e.stateNode),ot=a,Zt=u;break;case 5:Et||Ml(e,l);case 6:if(a=ot,u=Zt,ot=null,Ll(t,l,e),ot=a,Zt=u,ot!==null)if(Zt)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(e.stateNode)}catch(n){tt(e,l,n)}else try{ot.removeChild(e.stateNode)}catch(n){tt(e,l,n)}break;case 18:ot!==null&&(Zt?(t=ot,Gd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),za(t)):Gd(ot,e.stateNode));break;case 4:a=ot,u=Zt,ot=e.stateNode.containerInfo,Zt=!0,Ll(t,l,e),ot=a,Zt=u;break;case 0:case 11:case 14:case 15:ce(2,e,l),Et||ce(4,e,l),Ll(t,l,e);break;case 1:Et||(Ml(e,l),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Xo(e,l,a)),Ll(t,l,e);break;case 21:Ll(t,l,e);break;case 22:Et=(a=Et)||e.memoizedState!==null,Ll(t,l,e),Et=a;break;default:Ll(t,l,e)}}function Wo(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{za(t)}catch(e){tt(l,l.return,e)}}}function Fo(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{za(t)}catch(e){tt(l,l.return,e)}}function Fm(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new wo),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new wo),l;default:throw Error(v(435,t.tag))}}function rn(t,l){var e=Fm(t);l.forEach(function(a){if(!e.has(a)){e.add(a);var u=nh.bind(null,t,a);a.then(u,u)}})}function Vt(t,l){var e=l.deletions;if(e!==null)for(var a=0;a<e.length;a++){var u=e[a],n=t,i=l,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(he(c.type)){ot=c.stateNode,Zt=!1;break t}break;case 5:ot=c.stateNode,Zt=!1;break t;case 3:case 4:ot=c.stateNode.containerInfo,Zt=!0;break t}c=c.return}if(ot===null)throw Error(v(160));ko(n,i,u),ot=null,Zt=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)$o(l,t),l=l.sibling}var pl=null;function $o(t,l){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vt(l,t),wt(t),a&4&&(ce(3,t,t.return),lu(3,t),ce(5,t,t.return));break;case 1:Vt(l,t),wt(t),a&512&&(Et||e===null||Ml(e,e.return)),a&64&&Xl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var u=pl;if(Vt(l,t),wt(t),a&512&&(Et||e===null||Ml(e,e.return)),a&4){var n=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,u=u.ownerDocument||u;l:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ua]||n[_t]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),Ut(n,a,e),n[_t]=t,At(n),a=n;break t;case"link":var i=$d("link","href",u).get(a+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break l}}n=u.createElement(a),Ut(n,a,e),u.head.appendChild(n);break;case"meta":if(i=$d("meta","content",u).get(a+(e.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break l}}n=u.createElement(a),Ut(n,a,e),u.head.appendChild(n);break;default:throw Error(v(468,a))}n[_t]=t,At(n),a=n}t.stateNode=a}else Id(u,t.type,t.stateNode);else t.stateNode=Fd(u,a,t.memoizedProps);else n!==a?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,a===null?Id(u,t.type,t.stateNode):Fd(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&yc(t,t.memoizedProps,e.memoizedProps)}break;case 27:Vt(l,t),wt(t),a&512&&(Et||e===null||Ml(e,e.return)),e!==null&&a&4&&yc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Vt(l,t),wt(t),a&512&&(Et||e===null||Ml(e,e.return)),t.flags&32){u=t.stateNode;try{Je(u,"")}catch(_){tt(t,t.return,_)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,yc(t,u,e!==null?e.memoizedProps:u)),a&1024&&(pc=!0);break;case 6:if(Vt(l,t),wt(t),a&4){if(t.stateNode===null)throw Error(v(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(_){tt(t,t.return,_)}}break;case 3:if(On=null,u=pl,pl=Mn(l.containerInfo),Vt(l,t),pl=u,wt(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{za(l.containerInfo)}catch(_){tt(t,t.return,_)}pc&&(pc=!1,Io(t));break;case 4:a=pl,pl=Mn(t.stateNode.containerInfo),Vt(l,t),wt(t),pl=a;break;case 12:Vt(l,t),wt(t);break;case 31:Vt(l,t),wt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,rn(t,a)));break;case 13:Vt(l,t),wt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(hn=Ft()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,rn(t,a)));break;case 22:u=t.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,m=Xl,g=Et;if(Xl=m||u,Et=g||f,Vt(l,t),Et=g,Xl=m,wt(t),a&8192)t:for(l=t.stateNode,l._visibility=u?l._visibility&-2:l._visibility|1,u&&(e===null||f||Xl||Et||je(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){f=e=l;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var b=f.memoizedProps.style,h=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(_){tt(f,f.return,_)}}}else if(l.tag===6){if(e===null){f=l;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){tt(f,f.return,_)}}}else if(l.tag===18){if(e===null){f=l;try{var y=f.stateNode;u?Xd(y,!0):Xd(f.stateNode,!1)}catch(_){tt(f,f.return,_)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,rn(t,e))));break;case 19:Vt(l,t),wt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,rn(t,a)));break;case 30:break;case 21:break;default:Vt(l,t),wt(t)}}function wt(t){var l=t.flags;if(l&2){try{for(var e,a=t.return;a!==null;){if(Zo(a)){e=a;break}a=a.return}if(e==null)throw Error(v(160));switch(e.tag){case 27:var u=e.stateNode,n=gc(t);dn(t,n,u);break;case 5:var i=e.stateNode;e.flags&32&&(Je(i,""),e.flags&=-33);var c=gc(t);dn(t,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,m=gc(t);Sc(t,m,f);break;default:throw Error(v(161))}}catch(g){tt(t,t.return,g)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function Io(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;Io(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Zl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Ko(t,l.alternate,l),l=l.sibling}function je(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:ce(4,l,l.return),je(l);break;case 1:Ml(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&Xo(l,l.return,e),je(l);break;case 27:du(l.stateNode);case 26:case 5:Ml(l,l.return),je(l);break;case 22:l.memoizedState===null&&je(l);break;case 30:je(l);break;default:je(l)}t=t.sibling}}function Vl(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,u=t,n=l,i=n.flags;switch(n.tag){case 0:case 11:case 15:Vl(u,n,e),lu(4,n);break;case 1:if(Vl(u,n,e),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(m){tt(a,a.return,m)}if(a=n,u=a.updateQueue,u!==null){var c=a.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)Os(f[u],c)}catch(m){tt(a,a.return,m)}}e&&i&64&&Go(n),eu(n,n.return);break;case 27:Vo(n);case 26:case 5:Vl(u,n,e),e&&a===null&&i&4&&Lo(n),eu(n,n.return);break;case 12:Vl(u,n,e);break;case 31:Vl(u,n,e),e&&i&4&&Wo(u,n);break;case 13:Vl(u,n,e),e&&i&4&&Fo(u,n);break;case 22:n.memoizedState===null&&Vl(u,n,e),eu(n,n.return);break;case 30:break;default:Vl(u,n,e)}l=l.sibling}}function bc(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&La(e))}function Ec(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&La(t))}function bl(t,l,e,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)Po(t,l,e,a),l=l.sibling}function Po(t,l,e,a){var u=l.flags;switch(l.tag){case 0:case 11:case 15:bl(t,l,e,a),u&2048&&lu(9,l);break;case 1:bl(t,l,e,a);break;case 3:bl(t,l,e,a),u&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&La(t)));break;case 12:if(u&2048){bl(t,l,e,a),t=l.stateNode;try{var n=l.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){tt(l,l.return,f)}}else bl(t,l,e,a);break;case 31:bl(t,l,e,a);break;case 13:bl(t,l,e,a);break;case 23:break;case 22:n=l.stateNode,i=l.alternate,l.memoizedState!==null?n._visibility&2?bl(t,l,e,a):au(t,l):n._visibility&2?bl(t,l,e,a):(n._visibility|=2,ma(t,l,e,a,(l.subtreeFlags&10256)!==0||!1)),u&2048&&bc(i,l);break;case 24:bl(t,l,e,a),u&2048&&Ec(l.alternate,l);break;default:bl(t,l,e,a)}}function ma(t,l,e,a,u){for(u=u&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var n=t,i=l,c=e,f=a,m=i.flags;switch(i.tag){case 0:case 11:case 15:ma(n,i,c,f,u),lu(8,i);break;case 23:break;case 22:var g=i.stateNode;i.memoizedState!==null?g._visibility&2?ma(n,i,c,f,u):au(n,i):(g._visibility|=2,ma(n,i,c,f,u)),u&&m&2048&&bc(i.alternate,i);break;case 24:ma(n,i,c,f,u),u&&m&2048&&Ec(i.alternate,i);break;default:ma(n,i,c,f,u)}l=l.sibling}}function au(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,a=l,u=a.flags;switch(a.tag){case 22:au(e,a),u&2048&&bc(a.alternate,a);break;case 24:au(e,a),u&2048&&Ec(a.alternate,a);break;default:au(e,a)}l=l.sibling}}var uu=8192;function ha(t,l,e){if(t.subtreeFlags&uu)for(t=t.child;t!==null;)td(t,l,e),t=t.sibling}function td(t,l,e){switch(t.tag){case 26:ha(t,l,e),t.flags&uu&&t.memoizedState!==null&&Bh(e,pl,t.memoizedState,t.memoizedProps);break;case 5:ha(t,l,e);break;case 3:case 4:var a=pl;pl=Mn(t.stateNode.containerInfo),ha(t,l,e),pl=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=uu,uu=16777216,ha(t,l,e),uu=a):ha(t,l,e));break;default:ha(t,l,e)}}function ld(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function nu(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];zt=a,ad(a,t)}ld(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ed(t),t=t.sibling}function ed(t){switch(t.tag){case 0:case 11:case 15:nu(t),t.flags&2048&&ce(9,t,t.return);break;case 3:nu(t);break;case 12:nu(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,mn(t)):nu(t);break;default:nu(t)}}function mn(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];zt=a,ad(a,t)}ld(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:ce(8,l,l.return),mn(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,mn(l));break;default:mn(l)}t=t.sibling}}function ad(t,l){for(;zt!==null;){var e=zt;switch(e.tag){case 0:case 11:case 15:ce(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:La(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,zt=a;else t:for(e=t;zt!==null;){a=zt;var u=a.sibling,n=a.return;if(Jo(a),a===e){zt=null;break t}if(u!==null){u.return=n,zt=u;break t}zt=n}}}var $m={getCacheForType:function(t){var l=Dt(St),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e},cacheSignal:function(){return Dt(St).controller.signal}},Im=typeof WeakMap=="function"?WeakMap:Map,W=0,it=null,G=null,L=0,P=0,al=null,fe=!1,va=!1,Tc=!1,wl=0,mt=0,se=0,Qe=0,Ac=0,ul=0,ya=0,iu=null,Kt=null,zc=!1,hn=0,ud=0,vn=1/0,yn=null,oe=null,Tt=0,de=null,ga=null,Kl=0,_c=0,Mc=null,nd=null,cu=0,Dc=null;function nl(){return(W&2)!==0&&L!==0?L&-L:S.T!==null?qc():bf()}function id(){if(ul===0)if((L&536870912)===0||w){var t=Au;Au<<=1,(Au&3932160)===0&&(Au=262144),ul=t}else ul=536870912;return t=ll.current,t!==null&&(t.flags|=32),ul}function Jt(t,l,e){(t===it&&(P===2||P===9)||t.cancelPendingCommit!==null)&&(Sa(t,0),re(t,L,ul,!1)),Oa(t,e),((W&2)===0||t!==it)&&(t===it&&((W&2)===0&&(Qe|=e),mt===4&&re(t,L,ul,!1)),Dl(t))}function cd(t,l,e){if((W&6)!==0)throw Error(v(327));var a=!e&&(l&127)===0&&(l&t.expiredLanes)===0||Da(t,l),u=a?lh(t,l):Uc(t,l,!0),n=a;do{if(u===0){va&&!a&&re(t,l,0,!1);break}else{if(e=t.current.alternate,n&&!Pm(e)){u=Uc(t,l,!1),n=!1;continue}if(u===2){if(n=l,t.errorRecoveryDisabledLanes&n)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){l=i;t:{var c=t;u=iu;var f=c.current.memoizedState.isDehydrated;if(f&&(Sa(c,i).flags|=256),i=Uc(c,i,!1),i!==2){if(Tc&&!f){c.errorRecoveryDisabledLanes|=n,Qe|=n,u=4;break t}n=Kt,Kt=u,n!==null&&(Kt===null?Kt=n:Kt.push.apply(Kt,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){Sa(t,0),re(t,l,0,!0);break}t:{switch(a=t,n=u,n){case 0:case 1:throw Error(v(345));case 4:if((l&4194048)!==l)break;case 6:re(a,l,ul,!fe);break t;case 2:Kt=null;break;case 3:case 5:break;default:throw Error(v(329))}if((l&62914560)===l&&(u=hn+300-Ft(),10<u)){if(re(a,l,ul,!fe),_u(a,0,!0)!==0)break t;Kl=l,a.timeoutHandle=jd(fd.bind(null,a,e,Kt,yn,zc,l,ul,Qe,ya,fe,n,"Throttled",-0,0),u);break t}fd(a,e,Kt,yn,zc,l,ul,Qe,ya,fe,n,null,-0,0)}}break}while(!0);Dl(t)}function fd(t,l,e,a,u,n,i,c,f,m,g,b,h,y){if(t.timeoutHandle=-1,b=l.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Cl},td(l,n,b);var _=(n&62914560)===n?hn-Ft():(n&4194048)===n?ud-Ft():0;if(_=Yh(b,_),_!==null){Kl=n,t.cancelPendingCommit=_(yd.bind(null,t,l,n,e,a,u,i,c,f,g,b,null,h,y)),re(t,n,i,!m);return}}yd(t,l,n,e,a,u,i,c,f)}function Pm(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var u=e[a],n=u.getSnapshot;u=u.value;try{if(!Pt(n(),u))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function re(t,l,e,a){l&=~Ac,l&=~Qe,t.suspendedLanes|=l,t.pingedLanes&=~l,a&&(t.warmLanes|=l),a=t.expirationTimes;for(var u=l;0<u;){var n=31-It(u),i=1<<n;a[n]=-1,u&=~i}e!==0&&gf(t,e,l)}function gn(){return(W&6)===0?(fu(0),!1):!0}function Oc(){if(G!==null){if(P===0)var t=G.return;else t=G,xl=He=null,Vi(t),fa=null,Va=0,t=G;for(;t!==null;)Qo(t.alternate,t),t=t.return;G=null}}function Sa(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,ph(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Kl=0,Oc(),it=t,G=e=ql(t.current,null),L=l,P=0,al=null,fe=!1,va=Da(t,l),Tc=!1,ya=ul=Ac=Qe=se=mt=0,Kt=iu=null,zc=!1,(l&8)!==0&&(l|=l&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=l;0<a;){var u=31-It(a),n=1<<u;l|=t[u],a&=~n}return wl=l,Yu(),e}function sd(t,l){Y=null,S.H=Ia,l===ca||l===wu?(l=zs(),P=3):l===Ni?(l=zs(),P=4):P=l===ic?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,al=l,G===null&&(mt=1,nn(t,ol(l,t.current)))}function od(){var t=ll.current;return t===null?!0:(L&4194048)===L?hl===null:(L&62914560)===L||(L&536870912)!==0?t===hl:!1}function dd(){var t=S.H;return S.H=Ia,t===null?Ia:t}function rd(){var t=S.A;return S.A=$m,t}function Sn(){mt=4,fe||(L&4194048)!==L&&ll.current!==null||(va=!0),(se&134217727)===0&&(Qe&134217727)===0||it===null||re(it,L,ul,!1)}function Uc(t,l,e){var a=W;W|=2;var u=dd(),n=rd();(it!==t||L!==l)&&(yn=null,Sa(t,l)),l=!1;var i=mt;t:do try{if(P!==0&&G!==null){var c=G,f=al;switch(P){case 8:Oc(),i=6;break t;case 3:case 2:case 9:case 6:ll.current===null&&(l=!0);var m=P;if(P=0,al=null,pa(t,c,f,m),e&&va){i=0;break t}break;default:m=P,P=0,al=null,pa(t,c,f,m)}}th(),i=mt;break}catch(g){sd(t,g)}while(!0);return l&&t.shellSuspendCounter++,xl=He=null,W=a,S.H=u,S.A=n,G===null&&(it=null,L=0,Yu()),i}function th(){for(;G!==null;)md(G)}function lh(t,l){var e=W;W|=2;var a=dd(),u=rd();it!==t||L!==l?(yn=null,vn=Ft()+500,Sa(t,l)):va=Da(t,l);t:do try{if(P!==0&&G!==null){l=G;var n=al;l:switch(P){case 1:P=0,al=null,pa(t,l,n,1);break;case 2:case 9:if(Ts(n)){P=0,al=null,hd(l);break}l=function(){P!==2&&P!==9||it!==t||(P=7),Dl(t)},n.then(l,l);break t;case 3:P=7;break t;case 4:P=5;break t;case 7:Ts(n)?(P=0,al=null,hd(l)):(P=0,al=null,pa(t,l,n,7));break;case 5:var i=null;switch(G.tag){case 26:i=G.memoizedState;case 5:case 27:var c=G;if(i?Pd(i):c.stateNode.complete){P=0,al=null;var f=c.sibling;if(f!==null)G=f;else{var m=c.return;m!==null?(G=m,pn(m)):G=null}break l}}P=0,al=null,pa(t,l,n,5);break;case 6:P=0,al=null,pa(t,l,n,6);break;case 8:Oc(),mt=6;break t;default:throw Error(v(462))}}eh();break}catch(g){sd(t,g)}while(!0);return xl=He=null,S.H=a,S.A=u,W=e,G!==null?0:(it=null,L=0,Yu(),mt)}function eh(){for(;G!==null&&!_r();)md(G)}function md(t){var l=Yo(t.alternate,t,wl);t.memoizedProps=t.pendingProps,l===null?pn(t):G=l}function hd(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=Co(e,l,l.pendingProps,l.type,void 0,L);break;case 11:l=Co(e,l,l.pendingProps,l.type.render,l.ref,L);break;case 5:Vi(l);default:Qo(e,l),l=G=ds(l,wl),l=Yo(e,l,wl)}t.memoizedProps=t.pendingProps,l===null?pn(t):G=l}function pa(t,l,e,a){xl=He=null,Vi(l),fa=null,Va=0;var u=l.return;try{if(Vm(t,u,l,e,L)){mt=1,nn(t,ol(e,t.current)),G=null;return}}catch(n){if(u!==null)throw G=u,n;mt=1,nn(t,ol(e,t.current)),G=null;return}l.flags&32768?(w||a===1?t=!0:va||(L&536870912)!==0?t=!1:(fe=t=!0,(a===2||a===9||a===3||a===6)&&(a=ll.current,a!==null&&a.tag===13&&(a.flags|=16384))),vd(l,t)):pn(l)}function pn(t){var l=t;do{if((l.flags&32768)!==0){vd(l,fe);return}t=l.return;var e=Jm(l.alternate,l,wl);if(e!==null){G=e;return}if(l=l.sibling,l!==null){G=l;return}G=l=t}while(l!==null);mt===0&&(mt=5)}function vd(t,l){do{var e=km(t.alternate,t);if(e!==null){e.flags&=32767,G=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){G=t;return}G=t=e}while(t!==null);mt=6,G=null}function yd(t,l,e,a,u,n,i,c,f){t.cancelPendingCommit=null;do bn();while(Tt!==0);if((W&6)!==0)throw Error(v(327));if(l!==null){if(l===t.current)throw Error(v(177));if(n=l.lanes|l.childLanes,n|=gi,xr(t,e,n,i,c,f),t===it&&(G=it=null,L=0),ga=l,de=t,Kl=e,_c=n,Mc=u,nd=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ih(Eu,function(){return Ed(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,u=A.p,A.p=2,i=W,W|=4;try{Wm(t,l,e)}finally{W=i,A.p=u,S.T=a}}Tt=1,gd(),Sd(),pd()}}function gd(){if(Tt===1){Tt=0;var t=de,l=ga,e=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var a=A.p;A.p=2;var u=W;W|=4;try{$o(l,t);var n=Xc,i=es(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&ls(c.ownerDocument.documentElement,c)){if(f!==null&&ri(c)){var m=f.start,g=f.end;if(g===void 0&&(g=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(g,c.value.length);else{var b=c.ownerDocument||document,h=b&&b.defaultView||window;if(h.getSelection){var y=h.getSelection(),_=c.textContent.length,C=Math.min(f.start,_),ut=f.end===void 0?C:Math.min(f.end,_);!y.extend&&C>ut&&(i=ut,ut=C,C=i);var d=ts(c,C),s=ts(c,ut);if(d&&s&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)){var r=b.createRange();r.setStart(d.node,d.offset),y.removeAllRanges(),C>ut?(y.addRange(r),y.extend(s.node,s.offset)):(r.setEnd(s.node,s.offset),y.addRange(r))}}}}for(b=[],y=c;y=y.parentNode;)y.nodeType===1&&b.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var p=b[c];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}Nn=!!Gc,Xc=Gc=null}finally{W=u,A.p=a,S.T=e}}t.current=l,Tt=2}}function Sd(){if(Tt===2){Tt=0;var t=de,l=ga,e=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var a=A.p;A.p=2;var u=W;W|=4;try{Ko(t,l.alternate,l)}finally{W=u,A.p=a,S.T=e}}Tt=3}}function pd(){if(Tt===4||Tt===3){Tt=0,Mr();var t=de,l=ga,e=Kl,a=nd;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Tt=5:(Tt=0,ga=de=null,bd(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(oe=null),Jn(e),l=l.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ma,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=S.T,u=A.p,A.p=2,S.T=null;try{for(var n=t.onRecoverableError,i=0;i<a.length;i++){var c=a[i];n(c.value,{componentStack:c.stack})}}finally{S.T=l,A.p=u}}(Kl&3)!==0&&bn(),Dl(t),u=t.pendingLanes,(e&261930)!==0&&(u&42)!==0?t===Dc?cu++:(cu=0,Dc=t):cu=0,fu(0)}}function bd(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,La(l)))}function bn(){return gd(),Sd(),pd(),Ed()}function Ed(){if(Tt!==5)return!1;var t=de,l=_c;_c=0;var e=Jn(Kl),a=S.T,u=A.p;try{A.p=32>e?32:e,S.T=null,e=Mc,Mc=null;var n=de,i=Kl;if(Tt=0,ga=de=null,Kl=0,(W&6)!==0)throw Error(v(331));var c=W;if(W|=4,ed(n.current),Po(n,n.current,i,e),W=c,fu(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ma,n)}catch{}return!0}finally{A.p=u,S.T=a,bd(t,l)}}function Td(t,l,e){l=ol(e,l),l=nc(t.stateNode,l,2),t=ue(t,l,2),t!==null&&(Oa(t,2),Dl(t))}function tt(t,l,e){if(t.tag===3)Td(t,t,e);else for(;l!==null;){if(l.tag===3){Td(l,t,e);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(oe===null||!oe.has(a))){t=ol(e,t),e=Ao(2),a=ue(l,e,2),a!==null&&(zo(e,a,l,t),Oa(a,2),Dl(a));break}}l=l.return}}function Hc(t,l,e){var a=t.pingCache;if(a===null){a=t.pingCache=new Im;var u=new Set;a.set(l,u)}else u=a.get(l),u===void 0&&(u=new Set,a.set(l,u));u.has(e)||(Tc=!0,u.add(e),t=ah.bind(null,t,l,e),l.then(t,t))}function ah(t,l,e){var a=t.pingCache;a!==null&&a.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,it===t&&(L&e)===e&&(mt===4||mt===3&&(L&62914560)===L&&300>Ft()-hn?(W&2)===0&&Sa(t,0):Ac|=e,ya===L&&(ya=0)),Dl(t)}function Ad(t,l){l===0&&(l=yf()),t=De(t,l),t!==null&&(Oa(t,l),Dl(t))}function uh(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),Ad(t,e)}function nh(t,l){var e=0;switch(t.tag){case 31:case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(e=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(v(314))}a!==null&&a.delete(l),Ad(t,e)}function ih(t,l){return Zn(t,l)}var En=null,ba=null,Cc=!1,Tn=!1,Nc=!1,me=0;function Dl(t){t!==ba&&t.next===null&&(ba===null?En=ba=t:ba=ba.next=t),Tn=!0,Cc||(Cc=!0,fh())}function fu(t,l){if(!Nc&&Tn){Nc=!0;do for(var e=!1,a=En;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-It(42|t)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,Dd(a,n))}else n=L,n=_u(a,a===it?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Da(a,n)||(e=!0,Dd(a,n));a=a.next}while(e);Nc=!1}}function ch(){zd()}function zd(){Tn=Cc=!1;var t=0;me!==0&&Sh()&&(t=me);for(var l=Ft(),e=null,a=En;a!==null;){var u=a.next,n=_d(a,l);n===0?(a.next=null,e===null?En=u:e.next=u,u===null&&(ba=e)):(e=a,(t!==0||(n&3)!==0)&&(Tn=!0)),a=u}Tt!==0&&Tt!==5||fu(t),me!==0&&(me=0)}function _d(t,l){for(var e=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var i=31-It(n),c=1<<i,f=u[i];f===-1?((c&e)===0||(c&a)!==0)&&(u[i]=Rr(c,l)):f<=l&&(t.expiredLanes|=c),n&=~c}if(l=it,e=L,e=_u(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===l&&(P===2||P===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Vn(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Da(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(a!==null&&Vn(a),Jn(e)){case 2:case 8:e=hf;break;case 32:e=Eu;break;case 268435456:e=vf;break;default:e=Eu}return a=Md.bind(null,t),e=Zn(e,a),t.callbackPriority=l,t.callbackNode=e,l}return a!==null&&a!==null&&Vn(a),t.callbackPriority=2,t.callbackNode=null,2}function Md(t,l){if(Tt!==0&&Tt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(bn()&&t.callbackNode!==e)return null;var a=L;return a=_u(t,t===it?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(cd(t,a,l),_d(t,Ft()),t.callbackNode!=null&&t.callbackNode===e?Md.bind(null,t):null)}function Dd(t,l){if(bn())return null;cd(t,l,!0)}function fh(){bh(function(){(W&6)!==0?Zn(mf,ch):zd()})}function qc(){if(me===0){var t=na;t===0&&(t=Tu,Tu<<=1,(Tu&261888)===0&&(Tu=256)),me=t}return me}function Od(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Uu(""+t)}function Ud(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function sh(t,l,e,a,u){if(l==="submit"&&e&&e.stateNode===u){var n=Od((u[Xt]||null).action),i=a.submitter;i&&(l=(l=i[Xt]||null)?Od(l.formAction):i.getAttribute("formAction"),l!==null&&(n=l,i=null));var c=new qu("action","action",null,a,u);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(me!==0){var f=i?Ud(u,i):new FormData(u);Pi(e,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?Ud(u,i):new FormData(u),Pi(e,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var Rc=0;Rc<yi.length;Rc++){var xc=yi[Rc],oh=xc.toLowerCase(),dh=xc[0].toUpperCase()+xc.slice(1);Sl(oh,"on"+dh)}Sl(ns,"onAnimationEnd"),Sl(is,"onAnimationIteration"),Sl(cs,"onAnimationStart"),Sl("dblclick","onDoubleClick"),Sl("focusin","onFocus"),Sl("focusout","onBlur"),Sl(Dm,"onTransitionRun"),Sl(Om,"onTransitionStart"),Sl(Um,"onTransitionCancel"),Sl(fs,"onTransitionEnd"),we("onMouseEnter",["mouseout","mouseover"]),we("onMouseLeave",["mouseout","mouseover"]),we("onPointerEnter",["pointerout","pointerover"]),we("onPointerLeave",["pointerout","pointerover"]),Ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function Hd(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],u=a.event;a=a.listeners;t:{var n=void 0;if(l)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(g){Bu(g)}u.currentTarget=null,n=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,m=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(g){Bu(g)}u.currentTarget=null,n=f}}}}function X(t,l){var e=l[kn];e===void 0&&(e=l[kn]=new Set);var a=t+"__bubble";e.has(a)||(Cd(l,t,2,!1),e.add(a))}function Bc(t,l,e){var a=0;l&&(a|=4),Cd(e,t,a,l)}var An="_reactListening"+Math.random().toString(36).slice(2);function Yc(t){if(!t[An]){t[An]=!0,Af.forEach(function(e){e!=="selectionchange"&&(rh.has(e)||Bc(e,!1,t),Bc(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[An]||(l[An]=!0,Bc("selectionchange",!1,l))}}function Cd(t,l,e,a){switch(ir(l)){case 2:var u=Gh;break;case 8:u=Xh;break;default:u=Ic}e=u.bind(null,l,e,t),u=void 0,!ai||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(l,e,{capture:!0,passive:u}):t.addEventListener(l,e,!0):u!==void 0?t.addEventListener(l,e,{passive:u}):t.addEventListener(l,e,!1)}function jc(t,l,e,a,u){var n=a;if((l&1)===0&&(l&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Le(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=n=i;continue t}c=c.parentNode}}a=a.return}xf(function(){var m=n,g=li(e),b=[];t:{var h=ss.get(t);if(h!==void 0){var y=qu,_=t;switch(t){case"keypress":if(Cu(e)===0)break t;case"keydown":case"keyup":y=nm;break;case"focusin":_="focus",y=ci;break;case"focusout":_="blur",y=ci;break;case"beforeblur":case"afterblur":y=ci;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Jr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=fm;break;case ns:case is:case cs:y=Fr;break;case fs:y=om;break;case"scroll":case"scrollend":y=wr;break;case"wheel":y=rm;break;case"copy":case"cut":case"paste":y=Ir;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Gf;break;case"toggle":case"beforetoggle":y=hm}var C=(l&4)!==0,ut=!C&&(t==="scroll"||t==="scrollend"),d=C?h!==null?h+"Capture":null:h;C=[];for(var s=m,r;s!==null;){var p=s;if(r=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||r===null||d===null||(p=Ca(s,d),p!=null&&C.push(ou(s,p,r))),ut)break;s=s.return}0<C.length&&(h=new y(h,_,null,e,g),b.push({event:h,listeners:C}))}}if((l&7)===0){t:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&e!==ti&&(_=e.relatedTarget||e.fromElement)&&(Le(_)||_[Xe]))break t;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(_=e.relatedTarget||e.toElement,y=m,_=_?Le(_):null,_!==null&&(ut=k(_),C=_.tag,_!==ut||C!==5&&C!==27&&C!==6)&&(_=null)):(y=null,_=m),y!==_)){if(C=jf,p="onMouseLeave",d="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(C=Gf,p="onPointerLeave",d="onPointerEnter",s="pointer"),ut=y==null?h:Ha(y),r=_==null?h:Ha(_),h=new C(p,s+"leave",y,e,g),h.target=ut,h.relatedTarget=r,p=null,Le(g)===m&&(C=new C(d,s+"enter",_,e,g),C.target=r,C.relatedTarget=ut,p=C),ut=p,y&&_)l:{for(C=mh,d=y,s=_,r=0,p=d;p;p=C(p))r++;p=0;for(var U=s;U;U=C(U))p++;for(;0<r-p;)d=C(d),r--;for(;0<p-r;)s=C(s),p--;for(;r--;){if(d===s||s!==null&&d===s.alternate){C=d;break l}d=C(d),s=C(s)}C=null}else C=null;y!==null&&Nd(b,h,y,C,!1),_!==null&&ut!==null&&Nd(b,ut,_,C,!0)}}t:{if(h=m?Ha(m):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var K=kf;else if(Kf(h))if(Wf)K=zm;else{K=Tm;var O=Em}else y=h.nodeName,!y||y.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&Pn(m.elementType)&&(K=kf):K=Am;if(K&&(K=K(t,m))){Jf(b,K,e,g);break t}O&&O(t,h,m),t==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&In(h,"number",h.value)}switch(O=m?Ha(m):window,t){case"focusin":(Kf(O)||O.contentEditable==="true")&&($e=O,mi=m,Qa=null);break;case"focusout":Qa=mi=$e=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,as(b,e,g);break;case"selectionchange":if(Mm)break;case"keydown":case"keyup":as(b,e,g)}var j;if(si)t:{switch(t){case"compositionstart":var Z="onCompositionStart";break t;case"compositionend":Z="onCompositionEnd";break t;case"compositionupdate":Z="onCompositionUpdate";break t}Z=void 0}else Fe?Vf(t,e)&&(Z="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(Z="onCompositionStart");Z&&(Xf&&e.locale!=="ko"&&(Fe||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Fe&&(j=Bf()):($l=g,ui="value"in $l?$l.value:$l.textContent,Fe=!0)),O=zn(m,Z),0<O.length&&(Z=new Qf(Z,t,null,e,g),b.push({event:Z,listeners:O}),j?Z.data=j:(j=wf(e),j!==null&&(Z.data=j)))),(j=ym?gm(t,e):Sm(t,e))&&(Z=zn(m,"onBeforeInput"),0<Z.length&&(O=new Qf("onBeforeInput","beforeinput",null,e,g),b.push({event:O,listeners:Z}),O.data=j)),sh(b,t,m,e,g)}Hd(b,l)})}function ou(t,l,e){return{instance:t,listener:l,currentTarget:e}}function zn(t,l){for(var e=l+"Capture",a=[];t!==null;){var u=t,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Ca(t,e),u!=null&&a.unshift(ou(t,u,n)),u=Ca(t,l),u!=null&&a.push(ou(t,u,n))),t.tag===3)return a;t=t.return}return[]}function mh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Nd(t,l,e,a,u){for(var n=l._reactName,i=[];e!==null&&e!==a;){var c=e,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||m===null||(f=m,u?(m=Ca(e,n),m!=null&&i.unshift(ou(e,m,f))):u||(m=Ca(e,n),m!=null&&i.push(ou(e,m,f)))),e=e.return}i.length!==0&&t.push({event:l,listeners:i})}var hh=/\r\n?/g,vh=/\u0000|\uFFFD/g;function qd(t){return(typeof t=="string"?t:""+t).replace(hh,`
`).replace(vh,"")}function Rd(t,l){return l=qd(l),qd(t)===l}function at(t,l,e,a,u,n){switch(e){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||Je(t,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&Je(t,""+a);break;case"className":Du(t,"class",a);break;case"tabIndex":Du(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Du(t,e,a);break;case"style":qf(t,a,n);break;case"data":if(l!=="object"){Du(t,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Uu(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(l!=="input"&&at(t,l,"name",u.name,u,null),at(t,l,"formEncType",u.formEncType,u,null),at(t,l,"formMethod",u.formMethod,u,null),at(t,l,"formTarget",u.formTarget,u,null)):(at(t,l,"encType",u.encType,u,null),at(t,l,"method",u.method,u,null),at(t,l,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Uu(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=Cl);break;case"onScroll":a!=null&&X("scroll",t);break;case"onScrollEnd":a!=null&&X("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(v(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(v(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Uu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":X("beforetoggle",t),X("toggle",t),Mu(t,"popover",a);break;case"xlinkActuate":Hl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Hl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Hl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Hl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Hl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Hl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Hl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Hl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Hl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Zr.get(e)||e,Mu(t,e,a))}}function Qc(t,l,e,a,u,n){switch(e){case"style":qf(t,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(v(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(v(60));t.innerHTML=e}}break;case"children":typeof a=="string"?Je(t,a):(typeof a=="number"||typeof a=="bigint")&&Je(t,""+a);break;case"onScroll":a!=null&&X("scroll",t);break;case"onScrollEnd":a!=null&&X("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Cl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zf.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(u=e.endsWith("Capture"),l=e.slice(2,u?e.length-7:void 0),n=t[Xt]||null,n=n!=null?n[e]:null,typeof n=="function"&&t.removeEventListener(l,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,a,u);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):Mu(t,e,a)}}}function Ut(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",t),X("load",t);var a=!1,u=!1,n;for(n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,l));default:at(t,l,n,i,e,null)}}u&&at(t,l,"srcSet",e.srcSet,e,null),a&&at(t,l,"src",e.src,e,null);return;case"input":X("invalid",t);var c=n=i=u=null,f=null,m=null;for(a in e)if(e.hasOwnProperty(a)){var g=e[a];if(g!=null)switch(a){case"name":u=g;break;case"type":i=g;break;case"checked":f=g;break;case"defaultChecked":m=g;break;case"value":n=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(v(137,l));break;default:at(t,l,a,g,e,null)}}Uf(t,n,c,f,m,i,u,!1);return;case"select":X("invalid",t),a=i=n=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:at(t,l,u,c,e,null)}l=n,e=i,t.multiple=!!a,l!=null?Ke(t,!!a,l,!1):e!=null&&Ke(t,!!a,e,!0);return;case"textarea":X("invalid",t),n=u=a=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(v(91));break;default:at(t,l,i,c,e,null)}Cf(t,a,u,n);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(a=e[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:at(t,l,f,a,e,null)}return;case"dialog":X("beforetoggle",t),X("toggle",t),X("cancel",t),X("close",t);break;case"iframe":case"object":X("load",t);break;case"video":case"audio":for(a=0;a<su.length;a++)X(su[a],t);break;case"image":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"embed":case"source":case"link":X("error",t),X("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in e)if(e.hasOwnProperty(m)&&(a=e[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,l));default:at(t,l,m,a,e,null)}return;default:if(Pn(l)){for(g in e)e.hasOwnProperty(g)&&(a=e[g],a!==void 0&&Qc(t,l,g,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&at(t,l,c,a,e,null))}function yh(t,l,e,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,m=null,g=null;for(y in e){var b=e[y];if(e.hasOwnProperty(y)&&b!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":f=b;default:a.hasOwnProperty(y)||at(t,l,y,null,a,b)}}for(var h in a){var y=a[h];if(b=e[h],a.hasOwnProperty(h)&&(y!=null||b!=null))switch(h){case"type":n=y;break;case"name":u=y;break;case"checked":m=y;break;case"defaultChecked":g=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(v(137,l));break;default:y!==b&&at(t,l,h,y,a,b)}}$n(t,i,c,f,m,g,n,u);return;case"select":y=i=c=h=null;for(n in e)if(f=e[n],e.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":y=f;default:a.hasOwnProperty(n)||at(t,l,n,null,a,f)}for(u in a)if(n=a[u],f=e[u],a.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":h=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&at(t,l,u,n,a,f)}l=c,e=i,a=y,h!=null?Ke(t,!!e,h,!1):!!a!=!!e&&(l!=null?Ke(t,!!e,l,!0):Ke(t,!!e,e?[]:"",!1));return;case"textarea":y=h=null;for(c in e)if(u=e[c],e.hasOwnProperty(c)&&u!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:at(t,l,c,null,a,u)}for(i in a)if(u=a[i],n=e[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":h=u;break;case"defaultValue":y=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(v(91));break;default:u!==n&&at(t,l,i,u,a,n)}Hf(t,h,y);return;case"option":for(var _ in e)if(h=e[_],e.hasOwnProperty(_)&&h!=null&&!a.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:at(t,l,_,null,a,h)}for(f in a)if(h=a[f],y=e[f],a.hasOwnProperty(f)&&h!==y&&(h!=null||y!=null))switch(f){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:at(t,l,f,h,a,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in e)h=e[C],e.hasOwnProperty(C)&&h!=null&&!a.hasOwnProperty(C)&&at(t,l,C,null,a,h);for(m in a)if(h=a[m],y=e[m],a.hasOwnProperty(m)&&h!==y&&(h!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(v(137,l));break;default:at(t,l,m,h,a,y)}return;default:if(Pn(l)){for(var ut in e)h=e[ut],e.hasOwnProperty(ut)&&h!==void 0&&!a.hasOwnProperty(ut)&&Qc(t,l,ut,void 0,a,h);for(g in a)h=a[g],y=e[g],!a.hasOwnProperty(g)||h===y||h===void 0&&y===void 0||Qc(t,l,g,h,a,y);return}}for(var d in e)h=e[d],e.hasOwnProperty(d)&&h!=null&&!a.hasOwnProperty(d)&&at(t,l,d,null,a,h);for(b in a)h=a[b],y=e[b],!a.hasOwnProperty(b)||h===y||h==null&&y==null||at(t,l,b,h,a,y)}function xd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var u=e[a],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&xd(i)){for(i=0,c=u.responseEnd,a+=1;a<e.length;a++){var f=e[a],m=f.startTime;if(m>c)break;var g=f.transferSize,b=f.initiatorType;g&&xd(b)&&(f=f.responseEnd,i+=g*(f<c?1:(c-m)/(f-m)))}if(--a,l+=8*(n+i)/(u.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Gc=null,Xc=null;function _n(t){return t.nodeType===9?t:t.ownerDocument}function Bd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yd(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Lc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Zc=null;function Sh(){var t=window.event;return t&&t.type==="popstate"?t===Zc?!1:(Zc=t,!0):(Zc=null,!1)}var jd=typeof setTimeout=="function"?setTimeout:void 0,ph=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,bh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(t){return Qd.resolve(null).then(t).catch(Eh)}:jd;function Eh(t){setTimeout(function(){throw t})}function he(t){return t==="head"}function Gd(t,l){var e=l,a=0;do{var u=e.nextSibling;if(t.removeChild(e),u&&u.nodeType===8)if(e=u.data,e==="/$"||e==="/&"){if(a===0){t.removeChild(u),za(l);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")du(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,du(e);for(var n=e.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||e.removeChild(n),n=i}}else e==="body"&&du(t.ownerDocument.body);e=u}while(e);za(l)}function Xd(t,l){var e=t;t=0;do{var a=e.nextSibling;if(e.nodeType===1?l?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(l?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=a}while(e)}function Vc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Vc(e),Wn(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Th(t,l,e,a){for(;t.nodeType===1;){var u=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ua])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=vl(t.nextSibling),t===null)break}return null}function Ah(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=vl(t.nextSibling),t===null))return null;return t}function Ld(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=vl(t.nextSibling),t===null))return null;return t}function wc(t){return t.data==="$?"||t.data==="$~"}function Kc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zh(t,l){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||e.readyState!=="loading")l();else{var a=function(){l(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function vl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var Jc=null;function Zd(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(l===0)return vl(t.nextSibling);l--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||l++}t=t.nextSibling}return null}function Vd(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(l===0)return t;l--}else e!=="/$"&&e!=="/&"||l++}t=t.previousSibling}return null}function wd(t,l,e){switch(l=_n(e),t){case"html":if(t=l.documentElement,!t)throw Error(v(452));return t;case"head":if(t=l.head,!t)throw Error(v(453));return t;case"body":if(t=l.body,!t)throw Error(v(454));return t;default:throw Error(v(451))}}function du(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Wn(t)}var yl=new Map,Kd=new Set;function Mn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Jl=A.d;A.d={f:_h,r:Mh,D:Dh,C:Oh,L:Uh,m:Hh,X:Nh,S:Ch,M:qh};function _h(){var t=Jl.f(),l=gn();return t||l}function Mh(t){var l=Ze(t);l!==null&&l.tag===5&&l.type==="form"?fo(l):Jl.r(t)}var Ea=typeof document>"u"?null:document;function Jd(t,l,e){var a=Ea;if(a&&typeof l=="string"&&l){var u=fl(l);u='link[rel="'+t+'"][href="'+u+'"]',typeof e=="string"&&(u+='[crossorigin="'+e+'"]'),Kd.has(u)||(Kd.add(u),t={rel:t,crossOrigin:e,href:l},a.querySelector(u)===null&&(l=a.createElement("link"),Ut(l,"link",t),At(l),a.head.appendChild(l)))}}function Dh(t){Jl.D(t),Jd("dns-prefetch",t,null)}function Oh(t,l){Jl.C(t,l),Jd("preconnect",t,l)}function Uh(t,l,e){Jl.L(t,l,e);var a=Ea;if(a&&t&&l){var u='link[rel="preload"][as="'+fl(l)+'"]';l==="image"&&e&&e.imageSrcSet?(u+='[imagesrcset="'+fl(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(u+='[imagesizes="'+fl(e.imageSizes)+'"]')):u+='[href="'+fl(t)+'"]';var n=u;switch(l){case"style":n=Ta(t);break;case"script":n=Aa(t)}yl.has(n)||(t=q({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),yl.set(n,t),a.querySelector(u)!==null||l==="style"&&a.querySelector(ru(n))||l==="script"&&a.querySelector(mu(n))||(l=a.createElement("link"),Ut(l,"link",t),At(l),a.head.appendChild(l)))}}function Hh(t,l){Jl.m(t,l);var e=Ea;if(e&&t){var a=l&&typeof l.as=="string"?l.as:"script",u='link[rel="modulepreload"][as="'+fl(a)+'"][href="'+fl(t)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Aa(t)}if(!yl.has(n)&&(t=q({rel:"modulepreload",href:t},l),yl.set(n,t),e.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(mu(n)))return}a=e.createElement("link"),Ut(a,"link",t),At(a),e.head.appendChild(a)}}}function Ch(t,l,e){Jl.S(t,l,e);var a=Ea;if(a&&t){var u=Ve(a).hoistableStyles,n=Ta(t);l=l||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(ru(n)))c.loading=5;else{t=q({rel:"stylesheet",href:t,"data-precedence":l},e),(e=yl.get(n))&&kc(t,e);var f=i=a.createElement("link");At(f),Ut(f,"link",t),f._p=new Promise(function(m,g){f.onload=m,f.onerror=g}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Dn(i,l,a)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function Nh(t,l){Jl.X(t,l);var e=Ea;if(e&&t){var a=Ve(e).hoistableScripts,u=Aa(t),n=a.get(u);n||(n=e.querySelector(mu(u)),n||(t=q({src:t,async:!0},l),(l=yl.get(u))&&Wc(t,l),n=e.createElement("script"),At(n),Ut(n,"link",t),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function qh(t,l){Jl.M(t,l);var e=Ea;if(e&&t){var a=Ve(e).hoistableScripts,u=Aa(t),n=a.get(u);n||(n=e.querySelector(mu(u)),n||(t=q({src:t,async:!0,type:"module"},l),(l=yl.get(u))&&Wc(t,l),n=e.createElement("script"),At(n),Ut(n,"link",t),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function kd(t,l,e,a){var u=(u=Q.current)?Mn(u):null;if(!u)throw Error(v(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=Ta(e.href),e=Ve(u).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Ta(e.href);var n=Ve(u).hoistableStyles,i=n.get(t);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,i),(n=u.querySelector(ru(t)))&&!n._p&&(i.instance=n,i.state.loading=5),yl.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},yl.set(t,e),n||Rh(u,t,e,i.state))),l&&a===null)throw Error(v(528,""));return i}if(l&&a!==null)throw Error(v(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Aa(e),e=Ve(u).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,t))}}function Ta(t){return'href="'+fl(t)+'"'}function ru(t){return'link[rel="stylesheet"]['+t+"]"}function Wd(t){return q({},t,{"data-precedence":t.precedence,precedence:null})}function Rh(t,l,e,a){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=t.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),Ut(l,"link",e),At(l),t.head.appendChild(l))}function Aa(t){return'[src="'+fl(t)+'"]'}function mu(t){return"script[async]"+t}function Fd(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var a=t.querySelector('style[data-href~="'+fl(e.href)+'"]');if(a)return l.instance=a,At(a),a;var u=q({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),At(a),Ut(a,"style",u),Dn(a,e.precedence,t),l.instance=a;case"stylesheet":u=Ta(e.href);var n=t.querySelector(ru(u));if(n)return l.state.loading|=4,l.instance=n,At(n),n;a=Wd(e),(u=yl.get(u))&&kc(a,u),n=(t.ownerDocument||t).createElement("link"),At(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ut(n,"link",a),l.state.loading|=4,Dn(n,e.precedence,t),l.instance=n;case"script":return n=Aa(e.src),(u=t.querySelector(mu(n)))?(l.instance=u,At(u),u):(a=e,(u=yl.get(n))&&(a=q({},e),Wc(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),At(u),Ut(u,"link",a),t.head.appendChild(u),l.instance=u);case"void":return null;default:throw Error(v(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,Dn(a,e.precedence,t));return l.instance}function Dn(t,l,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===l)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(t,n.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function kc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function Wc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var On=null;function $d(t,l,e){if(On===null){var a=new Map,u=On=new Map;u.set(e,a)}else u=On,a=u.get(e),a||(a=new Map,u.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),u=0;u<e.length;u++){var n=e[u];if(!(n[Ua]||n[_t]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(l)||"";i=t+i;var c=a.get(i);c?c.push(n):a.set(i,[n])}}return a}function Id(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function xh(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return t=l.disabled,typeof l.precedence=="string"&&t==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function Pd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Bh(t,l,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=Ta(a.href),n=l.querySelector(ru(u));if(n){l=n._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=Un.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=n,At(n);return}n=l.ownerDocument||l,a=Wd(a),(u=yl.get(u))&&kc(a,u),n=n.createElement("link"),At(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ut(n,"link",a),e.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Un.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}var Fc=0;function Yh(t,l){return t.stylesheets&&t.count===0&&Cn(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var a=setTimeout(function(){if(t.stylesheets&&Cn(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+l);0<t.imgBytes&&Fc===0&&(Fc=62500*gh());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Cn(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Fc?50:800)+l);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function Un(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hn=null;function Cn(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hn=new Map,l.forEach(jh,t),Hn=null,Un.call(t))}function jh(t,l){if(!(l.state.loading&4)){var e=Hn.get(t);if(e)var a=e.get(null);else{e=new Map,Hn.set(t,e);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}u=l.instance,i=u.getAttribute("data-precedence"),n=e.get(i)||a,n===a&&e.set(null,u),e.set(i,u),this.count++,a=Un.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),l.state.loading|=4}}var hu={$$typeof:Ht,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function Qh(t,l,e,a,u,n,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.hiddenUpdates=wn(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function tr(t,l,e,a,u,n,i,c,f,m,g,b){return t=new Qh(t,l,e,i,f,m,g,b,c),l=1,n===!0&&(l|=24),n=tl(3,null,null,l),t.current=n,n.stateNode=t,l=Ui(),l.refCount++,t.pooledCache=l,l.refCount++,n.memoizedState={element:a,isDehydrated:e,cache:l},qi(n),t}function lr(t){return t?(t=ta,t):ta}function er(t,l,e,a,u,n){u=lr(u),a.context===null?a.context=u:a.pendingContext=u,a=ae(l),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=ue(t,a,l),e!==null&&(Jt(e,t,l),Ka(e,t,l))}function ar(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function $c(t,l){ar(t,l),(t=t.alternate)&&ar(t,l)}function ur(t){if(t.tag===13||t.tag===31){var l=De(t,67108864);l!==null&&Jt(l,t,67108864),$c(t,67108864)}}function nr(t){if(t.tag===13||t.tag===31){var l=nl();l=Kn(l);var e=De(t,l);e!==null&&Jt(e,t,l),$c(t,l)}}var Nn=!0;function Gh(t,l,e,a){var u=S.T;S.T=null;var n=A.p;try{A.p=2,Ic(t,l,e,a)}finally{A.p=n,S.T=u}}function Xh(t,l,e,a){var u=S.T;S.T=null;var n=A.p;try{A.p=8,Ic(t,l,e,a)}finally{A.p=n,S.T=u}}function Ic(t,l,e,a){if(Nn){var u=Pc(a);if(u===null)jc(t,l,a,qn,e),cr(t,a);else if(Zh(u,t,l,e,a))a.stopPropagation();else if(cr(t,a),l&4&&-1<Lh.indexOf(t)){for(;u!==null;){var n=Ze(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=Te(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-It(i);c.entanglements[1]|=f,i&=~f}Dl(n),(W&6)===0&&(vn=Ft()+500,fu(0))}}break;case 31:case 13:c=De(n,2),c!==null&&Jt(c,n,2),gn(),$c(n,2)}if(n=Pc(a),n===null&&jc(t,l,a,qn,e),n===u)break;u=n}u!==null&&a.stopPropagation()}else jc(t,l,a,null,e)}}function Pc(t){return t=li(t),tf(t)}var qn=null;function tf(t){if(qn=null,t=Le(t),t!==null){var l=k(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=ht(l),t!==null)return t;t=null}else if(e===31){if(t=Nt(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return qn=t,null}function ir(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dr()){case mf:return 2;case hf:return 8;case Eu:case Or:return 32;case vf:return 268435456;default:return 32}default:return 32}}var lf=!1,ve=null,ye=null,ge=null,vu=new Map,yu=new Map,Se=[],Lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cr(t,l){switch(t){case"focusin":case"focusout":ve=null;break;case"dragenter":case"dragleave":ye=null;break;case"mouseover":case"mouseout":ge=null;break;case"pointerover":case"pointerout":vu.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":yu.delete(l.pointerId)}}function gu(t,l,e,a,u,n){return t===null||t.nativeEvent!==n?(t={blockedOn:l,domEventName:e,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},l!==null&&(l=Ze(l),l!==null&&ur(l)),t):(t.eventSystemFlags|=a,l=t.targetContainers,u!==null&&l.indexOf(u)===-1&&l.push(u),t)}function Zh(t,l,e,a,u){switch(l){case"focusin":return ve=gu(ve,t,l,e,a,u),!0;case"dragenter":return ye=gu(ye,t,l,e,a,u),!0;case"mouseover":return ge=gu(ge,t,l,e,a,u),!0;case"pointerover":var n=u.pointerId;return vu.set(n,gu(vu.get(n)||null,t,l,e,a,u)),!0;case"gotpointercapture":return n=u.pointerId,yu.set(n,gu(yu.get(n)||null,t,l,e,a,u)),!0}return!1}function fr(t){var l=Le(t.target);if(l!==null){var e=k(l);if(e!==null){if(l=e.tag,l===13){if(l=ht(e),l!==null){t.blockedOn=l,Ef(t.priority,function(){nr(e)});return}}else if(l===31){if(l=Nt(e),l!==null){t.blockedOn=l,Ef(t.priority,function(){nr(e)});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rn(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=Pc(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);ti=a,e.target.dispatchEvent(a),ti=null}else return l=Ze(e),l!==null&&ur(l),t.blockedOn=e,!1;l.shift()}return!0}function sr(t,l,e){Rn(t)&&e.delete(l)}function Vh(){lf=!1,ve!==null&&Rn(ve)&&(ve=null),ye!==null&&Rn(ye)&&(ye=null),ge!==null&&Rn(ge)&&(ge=null),vu.forEach(sr),yu.forEach(sr)}function xn(t,l){t.blockedOn===l&&(t.blockedOn=null,lf||(lf=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,Vh)))}var Bn=null;function or(t){Bn!==t&&(Bn=t,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){Bn===t&&(Bn=null);for(var l=0;l<t.length;l+=3){var e=t[l],a=t[l+1],u=t[l+2];if(typeof a!="function"){if(tf(a||e)===null)continue;break}var n=Ze(e);n!==null&&(t.splice(l,3),l-=3,Pi(n,{pending:!0,data:u,method:e.method,action:a},a,u))}}))}function za(t){function l(f){return xn(f,t)}ve!==null&&xn(ve,t),ye!==null&&xn(ye,t),ge!==null&&xn(ge,t),vu.forEach(l),yu.forEach(l);for(var e=0;e<Se.length;e++){var a=Se[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Se.length&&(e=Se[0],e.blockedOn===null);)fr(e),e.blockedOn===null&&Se.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var u=e[a],n=e[a+1],i=u[Xt]||null;if(typeof n=="function")i||or(e);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Xt]||null)c=i.formAction;else if(tf(u)!==null)continue}else c=i.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),or(e)}}}function dr(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function l(){u!==null&&(u(),u=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),u!==null&&(u(),u=null)}}}function ef(t){this._internalRoot=t}Yn.prototype.render=ef.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(v(409));var e=l.current,a=nl();er(e,a,t,l,null,null)},Yn.prototype.unmount=ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;er(t.current,2,null,t,null,null),gn(),l[Xe]=null}};function Yn(t){this._internalRoot=t}Yn.prototype.unstable_scheduleHydration=function(t){if(t){var l=bf();t={blockedOn:null,target:t,priority:l};for(var e=0;e<Se.length&&l!==0&&l<Se[e].priority;e++);Se.splice(e,0,t),e===0&&fr(t)}};var rr=dt.version;if(rr!=="19.2.4")throw Error(v(527,rr,"19.2.4"));A.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=T(l),t=t!==null?$(t):null,t=t===null?null:t.stateNode,t};var wh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jn.isDisabled&&jn.supportsFiber)try{Ma=jn.inject(wh),$t=jn}catch{}}return pu.createRoot=function(t,l){if(!N(t))throw Error(v(299));var e=!1,a="",u=po,n=bo,i=Eo;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(n=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError)),l=tr(t,1,!1,null,null,e,a,null,u,n,i,dr),t[Xe]=l.current,Yc(t),new ef(l)},pu.hydrateRoot=function(t,l,e){if(!N(t))throw Error(v(299));var a=!1,u="",n=po,i=bo,c=Eo,f=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(u=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),l=tr(t,1,!0,l,e??null,a,u,f,n,i,c,dr),l.context=lr(null),e=l.current,a=nl(),a=Kn(a),u=ae(a),u.callback=null,ue(e,u,a),e=a,l.current.lanes=e,Oa(l,e),Dl(l),t[Xe]=l.current,Yc(t),new Yn(l)},pu.version="19.2.4",pu}var Tr;function l0(){if(Tr)return nf.exports;Tr=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(dt){console.error(dt)}}return M(),nf.exports=t0(),nf.exports}var e0=l0();function a0(){const[M,dt]=Ar.useState(null),F=[{id:1,question:"1. Define data communication and explain its components.",answer:"",codeExample:`
1️⃣ Definition of Data Communication

Data Communication means transferring data (information) from one device to another device through a 
communication medium like cable, wireless, or network.

👉 In simple words:
Data communication is the process of sending and receiving data between two or more devices.

📌 Example:

Sending email
Chatting on WhatsApp
Opening a website
Transferring a file between computers

All these use data communication.



Components of Data Communication

  There are 5 main components of data communication.


1️⃣ Sender (Source)

The sender is the device that sends the data.

📌 Example

Computer
Mobile phone
Laptop

Example: When you send a message, your phone is the sender.



2️⃣ Receiver (Destination)

The receiver is the device that receives the data.

📌 Example

Another computer
Mobile phone
Server

Example: When your friend receives your message, their phone is the receiver.



3️⃣ Message (Data)

The message is the information that is sent from sender to receiver.

📌 Examples of message:

Text
Image
Video
Audio
File

Example: A WhatsApp message or email is the message.



4️⃣ Transmission Medium

The transmission medium is the path through which data travels.

📌 Types of medium:

Twisted pair cable
Coaxial cable
Optical fiber
Wireless (WiFi, radio waves)

Example: WiFi or Internet cable.



5️⃣ Protocol

A protocol is a set of rules that control data communication.

It tells:

How data is sent
How data is received
How errors are handled

📌 Examples of protocols:

HTTP
TCP
IP
FTP

Example: When you open a website, HTTP protocol is used.



📊 Diagram (for exam)

Sender  →  Transmission Medium  →  Receiver
   |             |                   |
 Message ------ Protocol Rules ------



⭐ Short Exam Answer (4–5 lines)

Data Communication is the process of transmitting data between two or more devices through a 
communication medium such as cables or wireless networks.


Components of Data Communication:

  1. Sender – device that sends data
  2. Receiver – device that receives data
  3. Message – information being sent
  4. Transmission Medium – path used to send data
  5. Protocol – rules that control communication
      
      `},{id:2,question:"2. differentiate between analog signals and digital signal",answer:"",codeExample:`
| Analog Signal                                                         | Digital Signal                                                              |
| ----------------------------------------------------------------------| ----------------------------------------------------------------------------|
| Analog signal is a continuous signal that changes smoothly over time. | Digital signal is a discrete signal that represents data using 0 and 1.     |
| It has a smooth waveform.                                             | It has a square waveform.                                                   |
| It can have infinite values in a range.                               | It has limited values (0 and 1).                                            |
| It is more affected by noise and interference.                        | It is less affected by noise.                                               |
| It is less reliable due to noise.                                     | It is more reliable and accurate.                                           |
| Example: Human voice, radio signals.                                  | Example: Computer data, internet signals.                                   |


Short Answer (for writing in exam)

Analog signal is a continuous signal that changes smoothly over time.
Digital signal is a discrete signal that represents data using binary values (0 and 1).
      `},{id:3,question:"3. Explain the concept of multiplexing and list its types.",answer:"",codeExample:`
Multiplexing (Simple Meaning)

Multiplexing means sending many signals using one communication line.

👉 In simple words:
  
  Many devices share one channel to send data.

Example

Think about a highway.

  Many cars travel on one road.
  Same way, many data signals travel on one cable/network.

So this process is called Multiplexing.


How it works

1️⃣ At the sender, signals are combined by a device called Multiplexer (MUX).
2️⃣ Data travels through one channel.
3️⃣ At the receiver, signals are separated by Demultiplexer (DEMUX).


Simple idea:

Signal1 \\
Signal2  >  MUX  →  One Channel  →  DEMUX  → Separate Signals
Signal3 /


Types of Multiplexing


1️⃣ Frequency Division Multiplexing (FDM)

In FDM, different signals use different frequencies.

Example:

📻 Radio stations

Radio 1 → 90 MHz
Radio 2 → 94 MHz
Radio 3 → 98 MHz

All use same air, but different frequencies.


2️⃣ Time Division Multiplexing (TDM)

In TDM, signals use the same channel but at different times.

Example:

Time1 → User A data
Time2 → User B data
Time3 → User C data

Like taking turns.


3️⃣ Wavelength Division Multiplexing (WDM)

Used in optical fiber.
Different signals use different light wavelengths.
Example: Internet in fiber cables.


4️⃣ Orthogonal Frequency Division Multiplexing (OFDM)

Used in modern wireless networks.

Example:

WiFi
4G / 5G
Digital TV



Very Short Exam Answer (Write This)

Multiplexing is a technique that allows multiple signals to be transmitted through a single communication 
channel. A Multiplexer (MUX) combines the signals at the sender and a Demultiplexer (DEMUX) separates 
them at the receiver.


Types of Multiplexing:

  Frequency Division Multiplexing (FDM)
  Time Division Multiplexing (TDM)
  Wavelength Division Multiplexing (WDM)
  Orthogonal Frequency Division Multiplexing (OFDM)
      
      
      `},{id:4,question:"4. Define bandwidth and frequency with suitable examples.",answer:"",codeExample:`
Frequency

Frequency is the number of times a signal repeats (cycles) in one second.

It shows how fast a signal changes.
Unit of frequency is Hertz (Hz).

Example

If a signal repeats 100 times in one second, the frequency is 100 Hz.
Radio stations use different frequencies (like 90 MHz, 94 MHz).



Bandwidth

Bandwidth is the range of frequencies that a communication channel can carry.

In simple words:
It is the difference between highest frequency and lowest frequency.


Formula

Bandwidth = Highest Frequency − Lowest Frequency


Example

If a channel can transmit signals from 1000 Hz to 5000 Hz

Bandwidth = 5000 − 1000
Bandwidth = 4000 Hz

Example:

  Internet connection bandwidth
  TV channels transmission



Short Exam Answer

Frequency is the number of cycles of a signal per second and is measured in Hertz (Hz).
Example: A signal repeating 100 times per second has a frequency of 100 Hz.

Bandwidth is the range of frequencies that a communication channel can transmit.
Example: If a channel transmits from 1000 Hz to 5000 Hz, the bandwidth is 4000 Hz.
      `},{id:5,question:"5. List different types of transmission media used in networks.",answer:"",codeExample:`
Types of Transmission Media Used in Networks

Transmission media is the path or channel through which data travels from sender to receiver.

Example: cables or wireless signals used to send data.



Types of Transmission Media

There are two main types:


1️⃣ Guided Media (Wired)

In this type, data travels through physical cables.

Types:

• Twisted Pair Cable

Two copper wires twisted together
Used in telephone lines and LAN

Example: Internet cables in homes.


• Coaxial Cable

Thick cable with copper core
Used in cable TV and internet

Example: Cable TV connection.


• Optical Fiber Cable

Uses light signals to transmit data
Very fast and long-distance communication

Example: High-speed internet networks.



2️⃣ Unguided Media (Wireless)

In this type, data travels through air (no cables).

Types:


• Radio Waves

Used in radio broadcasting and WiFi


• Microwaves

Used in satellite communication and mobile networks


• Infrared

Used for short distance communication

Example: TV remote control.




Short Exam Answer

Transmission media is the path through which data is transmitted between devices in a network.

Types of transmission media:

Guided Media (Wired)

Twisted Pair Cable
Coaxial Cable
Optical Fiber

Unguided Media (Wireless)

Radio Waves
Microwaves
Infrared
      
      `},{id:6,question:"6.What is circuit switching? give one real-time example. ",answer:"",codeExample:`
Circuit Switching

Circuit Switching is a communication method in which a dedicated path (connection) is established 
between sender and receiver before data transmission starts.

This path remains reserved for the entire communication until the communication ends.


👉 In simple words:
A direct connection is created between two devices and stays active during the whole communication.



Example (Real-time)

📞 Telephone Call

When you make a phone call:

  1. A direct connection (circuit) is established between two phones.
  2. The connection stays active during the whole call.
  3. After the call ends, the connection is released.

This is an example of circuit switching.



Short Exam Answer

Circuit Switching is a communication technique in which a dedicated communication path is established 
between sender and receiver before data transmission and remains active until the communication ends.

Example:
A telephone call is a real-time example of circuit switching.
      
      `},{id:7,question:"7. Define framing in the Data Link Layer.",answer:"",codeExample:`
Framing in Data Link Layer

Framing is the process of dividing the data into small units called frames before transmission over the 
network.

In the Data Link Layer, data received from the Network Layer is broken into frames so that it can be 
transmitted properly.

👉 In simple words:
Framing means converting data into frames (small blocks) for transmission.


Why Framing is Needed

To organize data properly
To detect errors
To identify the start and end of data



Example

Suppose a message is:

HELLO WORLD


The Data Link Layer may divide it into frames like:

Frame1 → HEL
Frame2 → LO 
Frame3 → WOR
Frame4 → LD

These frames are sent one by one through the network.


Short Exam Answer

Framing is a process in the Data Link Layer in which data received from the Network Layer is divided into 
smaller units called frames for transmission.

It helps in proper data transfer and error detection.
      
      
      `},{id:8,question:"8. What is error detection in data communication?",answer:"",codeExample:`
What is “Transmitted”?

Transmitted means sent from one device to another device.

Example:

  When you send a WhatsApp message, the message is transmitted from your phone to your friend’s 
  phone.

So:

Transmission = Sending data



Error Detection (Very Simple Meaning)

Error detection means checking whether the data changed while sending.

Sometimes when data is transmitted (sent) through network, it may change because of noise or signal 
problems.

So the receiver checks the data to see if there is an error.


Simple Example

Sender sends data:

  1011

But receiver gets:

  1001


The data changed during transmission.

So the system detects an error.
This process is called Error Detection.


Why Error Detection is Used

To check if data is correct
To detect mistakes in data
To ensure reliable communication


Short Exam Answer (Write This)

Error detection is the process of identifying errors in data during transmission from sender to receiver.
Errors may occur due to noise or interference in the communication channel.
It helps to check whether the received data is correct or not.
      
      `},{id:9,question:"9. Define CSMA/CD protocol.",answer:"",codeExample:`
CSMA/CD Protocol

CSMA/CD stands for Carrier Sense Multiple Access with Collision Detection.

It is a protocol used in computer networks (especially Ethernet) to control how devices share the 
communication channel.


👉 In simple words:

Before sending data, a device checks whether the channel is free or busy.
If the channel is free, it sends the data.
If two devices send data at the same time, a collision occurs, and the devices stop and send data again 
later.


How CSMA/CD Works

1️⃣ A device listens to the channel (carrier sense).
2️⃣ If the channel is free, it sends the data.
3️⃣ If two devices send data at the same time, a collision occurs.
4️⃣ The devices detect the collision and stop sending.
5️⃣ After some time, they send the data again.


Example

In a LAN network, many computers share the same cable.

  Computer A checks the cable → free → sends data.
  Computer B also sends data at the same time → collision occurs.
  Both computers stop and try again later.



Short Exam Answer

CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is a network protocol used in Ethernet 
networks.

It allows multiple devices to share the same communication channel by checking if the channel is free 
before transmitting data and detecting collisions during transmission.
      
      `},{id:10,question:"10. What is packet switching and where is it used?",answer:"",codeExample:`
Packet Switching

Packet Switching is a communication method in which data is divided into small parts called packets 
before transmission.

Each packet travels separately through the network and is reassembled at the receiver to form the original 
message.

👉 In simple words:
A large message is broken into small packets and sent through the network.


Example

Suppose you send a message:

HELLO


It may be divided like this:

Packet1 → HE  
Packet2 → LL  
Packet3 → O

These packets travel through the network and are combined again at the receiver.


Where Packet Switching is Used

Packet switching is mainly used in:

Internet
Email services
Web browsing
Online messaging (WhatsApp, chat apps)



Short Exam Answer

Packet switching is a data communication method in which data is divided into small packets and 
transmitted separately through the network.
At the receiver, the packets are reassembled to form the original message.
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:8888,question:"Mid Paper.",answer:"",codeExample:`
=========================================
DATA COMMUNICATION & NETWORKING
(EASY + DETAILED ANSWERS)
=========================================


-----------------------------------------
Q1 (a) (i)
Define Port and write port number of FTP
-----------------------------------------

Answer:
A port is a number used to identify a specific
service or application running on a computer.

Just like a house has different rooms,
a computer has different ports for different services.

Example:
HTTP → Port 80
FTP → Port 21

So,
FTP Port Number = 21


-----------------------------------------
Q1 (a) (ii)
What is HTTP?
-----------------------------------------

Answer:
HTTP (HyperText Transfer Protocol) is a protocol
used to load web pages on the internet.

When you open a website in browser,
HTTP helps send request and receive data.

Example:
When you open Google, HTTP is used.


-----------------------------------------
Q1 (a) (iii)
Define Flow Control
-----------------------------------------

Answer:
Flow control is used to control the speed of
data transmission between sender and receiver.

If sender sends data too fast,
receiver may get overloaded.

So flow control keeps balance.


-----------------------------------------
Q1 (b) MCQ Explanation
-----------------------------------------

1. Application Layer:
Because it directly interacts with user.

2. TCP is reliable:
Because it checks errors and ensures delivery.

3. Presentation Layer:
Handles encryption and compression.

4. Flow control prevents:
Network overload.

5. Congestion control:
Prevents network overload.

6. HTTP:
Used to open web pages.

7. Full Duplex:
Data flows both directions at same time.


-----------------------------------------
Q2 (a) (i)
Circuit Switching vs Packet Switching
-----------------------------------------

Circuit Switching:

- A fixed path is created before communication
- Data flows continuously
- Example: Telephone call

Packet Switching:

- Data is divided into small packets
- Each packet travels separately
- Example: Internet

Easy idea:
Circuit = One fixed road
Packet = Many different roads


-----------------------------------------
Q2 (a) (ii)
TCP Three-Way Handshake
-----------------------------------------

Answer:

This is a process to establish connection
between client and server.

Steps:

1. SYN:
Client says → "Can I connect?"

2. SYN-ACK:
Server replies → "Yes, I am ready"

3. ACK:
Client says → "OK, let's start"

Now connection is established.


-----------------------------------------
Q2 (b) (i)
Multiplexing with types
-----------------------------------------

Answer:

Multiplexing means combining many signals
into one channel to save bandwidth.

Types:

1. FDM:
Different frequencies used

2. TDM:
Different time slots used

3. WDM:
Used in optical fiber


-----------------------------------------
Q2 (b) (ii)
Packet Switching (Easy Explanation)
-----------------------------------------

Answer:

In packet switching:

- Data is broken into small packets
- Each packet travels separately
- At destination, packets are combined

Advantage:
Fast and efficient

Example:
Sending WhatsApp messages


-----------------------------------------
Q3 (i)
Which is better? (Circuit vs Packet)
-----------------------------------------

Answer:

Packet Switching is better because:

1. Uses bandwidth efficiently
2. No need of fixed path
3. Can handle many users
4. More reliable

So modern internet uses packet switching.


-----------------------------------------
Q3 (ii)
FTP works but HTTP not working
-----------------------------------------

Answer:

Possible reasons:

1. Port 80 blocked
2. Website server down
3. DNS problem
4. Firewall blocking HTTP
5. Browser issue

Meaning:
File transfer works but web access fails.


-----------------------------------------
Q3 (iii)
HTTP vs FTP (Large Files)
-----------------------------------------

Answer:

HTTP:
- Used for web browsing
- Not good for large files

FTP:
- Designed for file transfer
- Supports large files easily

Conclusion:
FTP is better for large files.



-----------------------------------------
Q4 (a)
Congestion Control in Streaming
-----------------------------------------

Answer:

When many users use internet,
network becomes slow → buffering happens.

Congestion control helps by:

1. Reducing data speed
2. Avoiding packet loss
3. Managing traffic

Result:
Video runs smoothly.



-----------------------------------------
Q4 (b)
Role of DNS and failure
-----------------------------------------

Answer:

DNS converts website name into IP address.

Example:
google.com → IP address

Role:
Helps us access websites easily.

If DNS fails:

1. Website will not open
2. Internet feels slow
3. Error messages appear


-----------------------------------------


OR

-----------------------------------------

Application Layer Protocols
-----------------------------------------

Answer:

Application layer provides services to users.

Examples:

HTTP → Web browsing  
FTP → File transfer  
SMTP → Email  

Importance:

1. Helps communication
2. Used by users directly
3. Enables internet services
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. Character Count Method",answer:"",codeExample:`
#include <stdio.h>
#include <string.h>

int main()
{
    char data[100];
    int length;

    // Accept the data from the user
    printf("Enter the data: ");
    scanf("%s", data);

    // Calculate the length of the data
    length = strlen(data);

    // Display the frame using character count
    printf("Frame to be transmitted:
");

    // First element is the count
    printf("%d ", length);

    // Display the characters
    for(int i = 0; i < length; i++)
    {
        printf("%c ", data[i]);
    }

    printf("
");

    return 0;
}




Output
Enter the data: HELLO
Frame to be transmitted:
5 H E L L O

      `},{id:2.2,question:"2. TCP Client – Server Communication",answer:"",codeExample:`
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

int main()
{
    int server_fd, new_socket;
    struct sockaddr_in address;
    char buffer[1024] = {0};
    char message[] = "Hello from Server";

    // Create socket
    server_fd = socket(AF_INET, SOCK_STREAM, 0);

    // Define address
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(8080);

    // Bind socket
    bind(server_fd, (struct sockaddr *)&address, sizeof(address));

    // Listen for connections
    listen(server_fd, 3);

    printf("Server waiting for connection...
");

    // Accept connection
    new_socket = accept(server_fd, NULL, NULL);

    // Read message from client
    read(new_socket, buffer, 1024);
    printf("Message from client: %s
", buffer);

    // Send reply
    send(new_socket, message, strlen(message), 0);

    close(new_socket);
    close(server_fd);

    return 0;
}

TCP Client Code
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

int main()
{
    int sock;
    struct sockaddr_in serv_addr;
    char message[] = "Hello Server";
    char buffer[1024] = {0};

    // Create socket
    sock = socket(AF_INET, SOCK_STREAM, 0);

    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(8080);

    // Convert IP address
    inet_pton(AF_INET, "127.0.0.1", &serv_addr.sin_addr);

    // Connect to server
    connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr));

    // Send message
    send(sock, message, strlen(message), 0);

    // Receive reply
    read(sock, buffer, 1024);

    printf("Message from server: %s
", buffer);

    close(sock);

    return 0;
}



Output
Server Side
Server waiting for connection...
Message from client: Hello Server
Client Side
Message from server: Hello from Server

      `},{id:3.3,question:"3. UDP Client – Server Communication",answer:"",codeExample:`
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>

int main()
{
    int sockfd;
    struct sockaddr_in server, client;
    char buffer[1024];
    socklen_t len;

    sockfd = socket(AF_INET, SOCK_DGRAM, 0);

    server.sin_family = AF_INET;
    server.sin_addr.s_addr = INADDR_ANY;
    server.sin_port = htons(8080);

    bind(sockfd, (struct sockaddr *)&server, sizeof(server));

    printf("UDP Server waiting...
");

    len = sizeof(client);

    recvfrom(sockfd, buffer, 1024, 0, (struct sockaddr *)&client, &len);

    printf("Message from client: %s
", buffer);

    char reply[] = "Hello from UDP Server";

    sendto(sockfd, reply, strlen(reply), 0, (struct sockaddr *)&client, len);

    return 0;
}

UDP Client Code
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>

int main()
{
    int sockfd;
    struct sockaddr_in server;
    char message[] = "Hello UDP Server";
    char buffer[1024];
    socklen_t len;

    sockfd = socket(AF_INET, SOCK_DGRAM, 0);

    server.sin_family = AF_INET;
    server.sin_port = htons(8080);
    server.sin_addr.s_addr = inet_addr("127.0.0.1");

    sendto(sockfd, message, strlen(message), 0, (struct sockaddr *)&server, sizeof(server));

    len = sizeof(server);

    recvfrom(sockfd, buffer, 1024, 0, (struct sockaddr *)&server, &len);

    printf("Reply from server: %s
", buffer);

    return 0;
}



Output
Reply from server: Hello from UDP Server

      
      `},{id:4.4,question:"4. File Sharing using TCP",answer:"",codeExample:`
#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

int main()
{
    int server_fd, new_socket;
    struct sockaddr_in address;
    FILE *fp;
    char data[1024];

    server_fd = socket(AF_INET, SOCK_STREAM, 0);

    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(8080);

    bind(server_fd, (struct sockaddr *)&address, sizeof(address));

    listen(server_fd, 3);

    printf("Server waiting...
");

    new_socket = accept(server_fd, NULL, NULL);

    fp = fopen("file.txt", "r");

    while(fgets(data, sizeof(data), fp))
    {
        send(new_socket, data, sizeof(data), 0);
    }

    fclose(fp);
    close(new_socket);

    return 0;
}

Client Code
#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

int main()
{
    int sock;
    struct sockaddr_in serv_addr;
    char buffer[1024];
    FILE *fp;

    sock = socket(AF_INET, SOCK_STREAM, 0);

    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(8080);
    serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");

    connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr));

    fp = fopen("received.txt", "w");

    while(read(sock, buffer, sizeof(buffer)) > 0)
    {
        fprintf(fp, "%s", buffer);
    }

    fclose(fp);

    return 0;
}



Output
Server waiting...
File transferred successfully
Client receives received.txt file.

      `},{id:5.5,question:"5. Bit Stuffing",answer:"",codeExample:`
#include <stdio.h>

int main()
{
    int data[100], stuffed[200];
    int n, i, j = 0, count = 0;

    printf("Enter number of bits: ");
    scanf("%d", &n);

    printf("Enter bits:
");

    for(i = 0; i < n; i++)
    scanf("%d", &data[i]);

    for(i = 0; i < n; i++)
    {
        stuffed[j] = data[i];
        j++;

        if(data[i] == 1)
        count++;
        else
        count = 0;

        if(count == 5)
        {
            stuffed[j] = 0;
            j++;
            count = 0;
        }
    }

    printf("Stuffed data:
");

    for(i = 0; i < j; i++)
    printf("%d", stuffed[i]);

    return 0;
}



Output

Enter number of bits: 6
Enter bits:
1 1 1 1 1 0

Stuffed data:
1111100

      
      `},{id:6.6,question:"6. Byte Stuffing",answer:"",codeExample:`
#include <stdio.h>

int main()
{
    char data[100];
    int i;

    printf("Enter the data string: ");
    scanf("%s", data);

    printf("Stuffed data:
");

    printf("F "); // Frame start

    for(i = 0; data[i] != '\0'; i++)
    {
        if(data[i] == 'F' || data[i] == 'E')
        printf("E ");   // Escape character

        printf("%c ", data[i]);
    }

    printf(" F"); // Frame end

    return 0;
}



Output
Enter the data string: HELLO

Stuffed data:
F H E L L O F

      
      `},{id:7.7,question:"7. Leaky Bucket Algorithm",answer:"",codeExample:`
def leaky_bucket(packets, bucket_size, output_rate):
 bucket = 0
 for i in range(len(packets)):
  print(f"
Packet {i+1}: {packets[i]}")
  if bucket + packets[i] > bucket_size:
    print("Bucket Overflow! Packet Dropped")
  else:
    bucket += packets[i]
    print("Packet added. Bucket size:", bucket)
  bucket -= output_rate
  if bucket < 0:
    bucket = 0
  print("After transmission, bucket size:", bucket)

      
# Example
packets = [4, 2, 6, 3, 5]
leaky_bucket(packets, bucket_size=10, output_rate=3)



Sample Output

Packet 1: 4
Packet added. Bucket size: 4
After transmission, bucket size: 1
      `},{id:8.8,question:"8. Token Bucket Algorithm",answer:"",codeExample:`
def token_bucket(packets, bucket_size, token_rate):

    tokens = bucket_size

    for i in range(len(packets)):

        tokens = min(bucket_size, tokens + token_rate)

        print(f"
Packet {i+1}: {packets[i]}")
        print("Available tokens:", tokens)

        if tokens >= packets[i]:
            tokens -= packets[i]
            print("Packet transmitted")

        else:
            print("Packet dropped (not enough tokens)")


# Example
packets = [4, 2, 6, 3, 5]

token_bucket(packets, bucket_size=10, token_rate=3)
      `},{id:9.9,question:"9. Longitudinal Redundancy Check (LRC)",answer:"",codeExample:`
def lrc(data):

    result = data[0]

    for i in range(1, len(data)):

        temp = ""

        for j in range(len(data[i])):

            if result[j] == data[i][j]:
                temp += '0'

            else:
                temp += '1'

        result = temp

    return result


# Example
data = ["1101", "1011", "1001"]

print("LRC:", lrc(data))
      
      `},{id:10.1,question:"10. Cyclic Redundancy Check (CRC)",answer:"",codeExample:`
def xor(a, b):

    result = ""

    for i in range(1, len(b)):

        if a[i] == b[i]:
            result += "0"

        else:
            result += "1"

    return result


def mod2div(dividend, divisor):

    pick = len(divisor)

    tmp = dividend[0:pick]

    while pick < len(dividend):

        if tmp[0] == '1':
            tmp = xor(divisor, tmp) + dividend[pick]

        else:
            tmp = xor('0' * pick, tmp) + dividend[pick]

        pick += 1

    if tmp[0] == '1':
        tmp = xor(divisor, tmp)

    else:
        tmp = xor('0' * pick, tmp)

    return tmp


def encode(data, key):

    appended = data + '0' * (len(key) - 1)

    remainder = mod2div(appended, key)

    return data + remainder


def check(data, key):

    remainder = mod2div(data, key)

    return remainder


# Example
data = "1101"
key = "1011"

codeword = encode(data, key)

print("Transmitted:", codeword)

if check(codeword, key) == "0" * (len(key) - 1):
    print("No error")

else:
    print("Error detected")
      `},{id:11.11,question:"11. Vertical Redundancy Check (VRC)",answer:"",codeExample:`
def vrc(data):

    count = data.count('1')

    if count % 2 == 0:
        return data + '0'

    else:
        return data + '1'


# Example
data = "1101"

print("VRC:", vrc(data))
      `},{id:12.12,question:"12. Hamming Code",answer:"",codeExample:`
def hamming_encode(data):

    m = len(data)

    r = 0

    while (2 ** r < m + r + 1):
        r += 1

    res = ['0'] * (m + r)

    j = 0

    for i in range(1, len(res) + 1):

        if i & (i - 1) != 0:
            res[i - 1] = data[j]
            j += 1

    for i in range(r):

        pos = 2 ** i

        val = 0

        for j in range(1, len(res) + 1):

            if j & pos:
                val ^= int(res[j - 1])

        res[pos - 1] = str(val)

    return ''.join(res)


# Example
data = "1011"

print("Hamming Code:", hamming_encode(data))
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],v=N=>{dt(M===N?null:N)};return Bt.jsxs("div",{className:"app-container",children:[Bt.jsx("h1",{children:"Data Communication & Networking Interview Questions"}),Bt.jsx("div",{className:"questions-container",children:F.map(N=>Bt.jsxs("div",{className:"question-item",children:[Bt.jsx("button",{className:`question-button ${M===N.id?"active":""}`,onClick:()=>v(N.id),children:N.question}),M===N.id&&Bt.jsxs("div",{className:"answer-container",children:[Bt.jsxs("div",{className:"answer",children:[Bt.jsx("h3",{children:"Answer:"}),Bt.jsx("p",{children:N.answer})]}),N.codeExample&&Bt.jsxs("div",{className:"code-example",children:[Bt.jsx("h3",{children:"Code Example:"}),Bt.jsx("pre",{children:Bt.jsx("code",{children:N.codeExample})})]})]})]},N.id))})]})}e0.createRoot(document.getElementById("root")).render(Bt.jsx(Ar.StrictMode,{children:Bt.jsx(a0,{})}));
