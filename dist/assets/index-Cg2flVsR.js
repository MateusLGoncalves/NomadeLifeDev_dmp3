function Ry(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ny(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rp={exports:{}},qo={},ip={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var is=Symbol.for("react.element"),Oy=Symbol.for("react.portal"),Ly=Symbol.for("react.fragment"),xy=Symbol.for("react.strict_mode"),Dy=Symbol.for("react.profiler"),My=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),jy=Symbol.for("react.forward_ref"),Fy=Symbol.for("react.suspense"),by=Symbol.for("react.memo"),zy=Symbol.for("react.lazy"),qd=Symbol.iterator;function $y(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,ap={};function Hr(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||sp}Hr.prototype.isReactComponent={};Hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lp(){}lp.prototype=Hr.prototype;function Mu(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||sp}var Uu=Mu.prototype=new lp;Uu.constructor=Mu;op(Uu,Hr.prototype);Uu.isPureReactComponent=!0;var Qd=Array.isArray,up=Object.prototype.hasOwnProperty,ju={current:null},cp={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)up.call(t,r)&&!cp.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),h=0;h<u;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:is,type:e,key:s,ref:a,props:i,_owner:ju.current}}function By(e,t){return{$$typeof:is,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===is}function Vy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xd=/\/+/g;function Wa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vy(""+e.key):t.toString(36)}function Qs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case is:case Oy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Wa(a,0):r,Qd(i)?(n="",e!=null&&(n=e.replace(Xd,"$&/")+"/"),Qs(i,t,n,"",function(h){return h})):i!=null&&(Fu(i)&&(i=By(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Xd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Qd(e))for(var u=0;u<e.length;u++){s=e[u];var c=r+Wa(s,u);a+=Qs(s,t,n,c,i)}else if(c=$y(e),typeof c=="function")for(e=c.call(e),u=0;!(s=e.next()).done;)s=s.value,c=r+Wa(s,u++),a+=Qs(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ns(e,t,n){if(e==null)return e;var r=[],i=0;return Qs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Hy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Xs={transition:null},Wy={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Xs,ReactCurrentOwner:ju};function hp(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Ns,forEach:function(e,t,n){Ns(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ns(e,function(){t++}),t},toArray:function(e){return Ns(e,function(t){return t})||[]},only:function(e){if(!Fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Hr;W.Fragment=Ly;W.Profiler=Dy;W.PureComponent=Mu;W.StrictMode=xy;W.Suspense=Fy;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wy;W.act=hp;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=op({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)up.call(t,c)&&!cp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];r.children=u}return{$$typeof:is,type:e.type,key:i,ref:s,props:r,_owner:a}};W.createContext=function(e){return e={$$typeof:Uy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:My,_context:e},e.Consumer=e};W.createElement=dp;W.createFactory=function(e){var t=dp.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:jy,render:e}};W.isValidElement=Fu;W.lazy=function(e){return{$$typeof:zy,_payload:{_status:-1,_result:e},_init:Hy}};W.memo=function(e,t){return{$$typeof:by,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Xs.transition;Xs.transition={};try{e()}finally{Xs.transition=t}};W.unstable_act=hp;W.useCallback=function(e,t){return je.current.useCallback(e,t)};W.useContext=function(e){return je.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return je.current.useDeferredValue(e)};W.useEffect=function(e,t){return je.current.useEffect(e,t)};W.useId=function(){return je.current.useId()};W.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return je.current.useMemo(e,t)};W.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};W.useRef=function(e){return je.current.useRef(e)};W.useState=function(e){return je.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return je.current.useTransition()};W.version="18.3.1";ip.exports=W;var z=ip.exports;const Ky=Ny(z),Gy=Ry({__proto__:null,default:Ky},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=z,Qy=Symbol.for("react.element"),Xy=Symbol.for("react.fragment"),Yy=Object.prototype.hasOwnProperty,Jy=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zy={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Yy.call(t,r)&&!Zy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qy,type:e,key:s,ref:a,props:i,_owner:Jy.current}}qo.Fragment=Xy;qo.jsx=fp;qo.jsxs=fp;rp.exports=qo;var j=rp.exports,pp={exports:{}},Ye={},gp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,V){var H=b.length;b.push(V);e:for(;0<H;){var ie=H-1>>>1,Y=b[ie];if(0<i(Y,V))b[ie]=V,b[H]=Y,H=ie;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var V=b[0],H=b.pop();if(H!==V){b[0]=H;e:for(var ie=0,Y=b.length,ue=Y>>>1;ie<ue;){var Nt=2*(ie+1)-1,Ot=b[Nt],Lt=Nt+1,xt=b[Lt];if(0>i(Ot,H))Lt<Y&&0>i(xt,Ot)?(b[ie]=xt,b[Lt]=H,ie=Lt):(b[ie]=Ot,b[Nt]=H,ie=Nt);else if(Lt<Y&&0>i(xt,H))b[ie]=xt,b[Lt]=H,ie=Lt;else break e}}return V}function i(b,V){var H=b.sortIndex-V.sortIndex;return H!==0?H:b.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var c=[],h=[],_=1,m=null,S=3,N=!1,R=!1,O=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(b){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=b)r(h),V.sortIndex=V.expirationTime,t(c,V);else break;V=n(h)}}function L(b){if(O=!1,T(b),!R)if(n(c)!==null)R=!0,Yr(U);else{var V=n(h);V!==null&&Rt(L,V.startTime-b)}}function U(b,V){R=!1,O&&(O=!1,I(p),p=-1),N=!0;var H=S;try{for(T(V),m=n(c);m!==null&&(!(m.expirationTime>V)||b&&!k());){var ie=m.callback;if(typeof ie=="function"){m.callback=null,S=m.priorityLevel;var Y=ie(m.expirationTime<=V);V=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===n(c)&&r(c),T(V)}else r(c);m=n(c)}if(m!==null)var ue=!0;else{var Nt=n(h);Nt!==null&&Rt(L,Nt.startTime-V),ue=!1}return ue}finally{m=null,S=H,N=!1}}var F=!1,v=null,p=-1,g=5,E=-1;function k(){return!(e.unstable_now()-E<g)}function P(){if(v!==null){var b=e.unstable_now();E=b;var V=!0;try{V=v(!0,b)}finally{V?w():(F=!1,v=null)}}else F=!1}var w;if(typeof y=="function")w=function(){y(P)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,On=Ze.port2;Ze.port1.onmessage=P,w=function(){On.postMessage(null)}}else w=function(){x(P,0)};function Yr(b){v=b,F||(F=!0,w())}function Rt(b,V){p=x(function(){b(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){R||N||(R=!0,Yr(U))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(b){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var H=S;S=V;try{return b()}finally{S=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,V){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var H=S;S=b;try{return V()}finally{S=H}},e.unstable_scheduleCallback=function(b,V,H){var ie=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,b){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=H+Y,b={id:_++,callback:V,priorityLevel:b,startTime:H,expirationTime:Y,sortIndex:-1},H>ie?(b.sortIndex=H,t(h,b),n(c)===null&&b===n(h)&&(O?(I(p),p=-1):O=!0,Rt(L,H-ie))):(b.sortIndex=Y,t(c,b),R||N||(R=!0,Yr(U))),b},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(b){var V=S;return function(){var H=S;S=V;try{return b.apply(this,arguments)}finally{S=H}}}})(mp);gp.exports=mp;var e0=gp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=z,Xe=e0;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vp=new Set,Ui={};function tr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(Ui[e]=t,e=0;e<t.length;e++)vp.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=Object.prototype.hasOwnProperty,n0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yd={},Jd={};function r0(e){return Nl.call(Jd,e)?!0:Nl.call(Yd,e)?!1:n0.test(e)?Jd[e]=!0:(Yd[e]=!0,!1)}function i0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function s0(e,t,n,r){if(t===null||typeof t>"u"||i0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bu=/[\-:]([a-z])/g;function zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bu,zu);Ee[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bu,zu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bu,zu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function $u(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(s0(t,n,i,r)&&(n=null),r||i===null?r0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xt=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),hr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),Ol=Symbol.for("react.profiler"),yp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),Hu=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),_p=Symbol.for("react.offscreen"),Zd=Symbol.iterator;function di(e){return e===null||typeof e!="object"?null:(e=Zd&&e[Zd]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Ka;function wi(e){if(Ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ka=t&&t[1]||""}return`
`+Ka+e}var Ga=!1;function qa(e,t){if(!e||Ga)return"";Ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,u=s.length-1;1<=a&&0<=u&&i[a]!==s[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==s[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==s[u]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=u);break}}}finally{Ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wi(e):""}function o0(e){switch(e.tag){case 5:return wi(e.type);case 16:return wi("Lazy");case 13:return wi("Suspense");case 19:return wi("SuspenseList");case 0:case 2:case 15:return e=qa(e.type,!1),e;case 11:return e=qa(e.type.render,!1),e;case 1:return e=qa(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case hr:return"Portal";case Ol:return"Profiler";case Bu:return"StrictMode";case Ll:return"Suspense";case xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wp:return(e.displayName||"Context")+".Consumer";case yp:return(e._context.displayName||"Context")+".Provider";case Vu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hu:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function a0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l0(e){var t=Ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ls(e){e._valueTracker||(e._valueTracker=l0(e))}function Sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ml(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function eh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ip(e,t){t=t.checked,t!=null&&$u(e,"checked",t,!1)}function Ul(e,t){Ip(e,t);var n=kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function th(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _i=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(_i(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kn(n)}}function Tp(e,t){var n=kn(t.value),r=kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xs,Cp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xs=xs||document.createElement("div"),xs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u0=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){u0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ki[t]=ki[e]})});function Pp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ki.hasOwnProperty(e)&&ki[e]?(""+t).trim():t+"px"}function Ap(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var c0=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(c0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,Cr=null,Pr=null;function ih(e){if(e=as(e)){if(typeof Vl!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Zo(t),Vl(e.stateNode,e.type,t))}}function Rp(e){Cr?Pr?Pr.push(e):Pr=[e]:Cr=e}function Np(){if(Cr){var e=Cr,t=Pr;if(Pr=Cr=null,ih(e),t)for(e=0;e<t.length;e++)ih(t[e])}}function Op(e,t){return e(t)}function Lp(){}var Qa=!1;function xp(e,t,n){if(Qa)return e(t,n);Qa=!0;try{return Op(e,t,n)}finally{Qa=!1,(Cr!==null||Pr!==null)&&(Lp(),Np())}}function Fi(e,t){var n=e.stateNode;if(n===null)return null;var r=Zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Hl=!1;if(Wt)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{Hl=!1}function d0(e,t,n,r,i,s,a,u,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(_){this.onError(_)}}var Ci=!1,po=null,go=!1,Wl=null,h0={onError:function(e){Ci=!0,po=e}};function f0(e,t,n,r,i,s,a,u,c){Ci=!1,po=null,d0.apply(h0,arguments)}function p0(e,t,n,r,i,s,a,u,c){if(f0.apply(this,arguments),Ci){if(Ci){var h=po;Ci=!1,po=null}else throw Error(D(198));go||(go=!0,Wl=h)}}function nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sh(e){if(nr(e)!==e)throw Error(D(188))}function g0(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sh(i),e;if(s===r)return sh(i),t;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=s;break}if(u===r){a=!0,r=i,n=s;break}u=u.sibling}if(!a){for(u=s.child;u;){if(u===n){a=!0,n=s,r=i;break}if(u===r){a=!0,r=s,n=i;break}u=u.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Mp(e){return e=g0(e),e!==null?Up(e):null}function Up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Up(e);if(t!==null)return t;e=e.sibling}return null}var jp=Xe.unstable_scheduleCallback,oh=Xe.unstable_cancelCallback,m0=Xe.unstable_shouldYield,v0=Xe.unstable_requestPaint,de=Xe.unstable_now,y0=Xe.unstable_getCurrentPriorityLevel,Ku=Xe.unstable_ImmediatePriority,Fp=Xe.unstable_UserBlockingPriority,mo=Xe.unstable_NormalPriority,w0=Xe.unstable_LowPriority,bp=Xe.unstable_IdlePriority,Qo=null,Tt=null;function _0(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:I0,E0=Math.log,S0=Math.LN2;function I0(e){return e>>>=0,e===0?32:31-(E0(e)/S0|0)|0}var Ds=64,Ms=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~i;u!==0?r=Ei(u):(s&=a,s!==0&&(r=Ei(s)))}else a=n&~i,a!==0?r=Ei(a):s!==0&&(r=Ei(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function T0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-ft(s),u=1<<a,c=i[a];c===-1?(!(u&n)||u&r)&&(i[a]=T0(u,t)):c<=t&&(e.expiredLanes|=u),s&=~u}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zp(){var e=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),e}function Xa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ss(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function C0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Gu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function $p(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bp,qu,Vp,Hp,Wp,Gl=!1,Us=[],gn=null,mn=null,vn=null,bi=new Map,zi=new Map,on=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(t.pointerId)}}function fi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=as(t),t!==null&&qu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function A0(e,t,n,r,i){switch(t){case"focusin":return gn=fi(gn,e,t,n,r,i),!0;case"dragenter":return mn=fi(mn,e,t,n,r,i),!0;case"mouseover":return vn=fi(vn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return bi.set(s,fi(bi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zi.set(s,fi(zi.get(s)||null,e,t,n,r,i)),!0}return!1}function Kp(e){var t=Fn(e.target);if(t!==null){var n=nr(t);if(n!==null){if(t=n.tag,t===13){if(t=Dp(n),t!==null){e.blockedOn=t,Wp(e.priority,function(){Vp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=as(n),t!==null&&qu(t),e.blockedOn=n,!1;t.shift()}return!0}function lh(e,t,n){Ys(e)&&n.delete(t)}function R0(){Gl=!1,gn!==null&&Ys(gn)&&(gn=null),mn!==null&&Ys(mn)&&(mn=null),vn!==null&&Ys(vn)&&(vn=null),bi.forEach(lh),zi.forEach(lh)}function pi(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,R0)))}function $i(e){function t(i){return pi(i,e)}if(0<Us.length){pi(Us[0],e);for(var n=1;n<Us.length;n++){var r=Us[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&pi(gn,e),mn!==null&&pi(mn,e),vn!==null&&pi(vn,e),bi.forEach(t),zi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Kp(n),n.blockedOn===null&&on.shift()}var Ar=Xt.ReactCurrentBatchConfig,yo=!0;function N0(e,t,n,r){var i=X,s=Ar.transition;Ar.transition=null;try{X=1,Qu(e,t,n,r)}finally{X=i,Ar.transition=s}}function O0(e,t,n,r){var i=X,s=Ar.transition;Ar.transition=null;try{X=4,Qu(e,t,n,r)}finally{X=i,Ar.transition=s}}function Qu(e,t,n,r){if(yo){var i=ql(e,t,n,r);if(i===null)ol(e,t,r,wo,n),ah(e,r);else if(A0(i,e,t,n,r))r.stopPropagation();else if(ah(e,r),t&4&&-1<P0.indexOf(e)){for(;i!==null;){var s=as(i);if(s!==null&&Bp(s),s=ql(e,t,n,r),s===null&&ol(e,t,r,wo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var wo=null;function ql(e,t,n,r){if(wo=null,e=Wu(r),e=Fn(e),e!==null)if(t=nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function Gp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y0()){case Ku:return 1;case Fp:return 4;case mo:case w0:return 16;case bp:return 536870912;default:return 16}default:return 16}}var hn=null,Xu=null,Js=null;function qp(){if(Js)return Js;var e,t=Xu,n=t.length,r,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Js=i.slice(e,1<r?1-r:void 0)}function Zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function uh(){return!1}function Je(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?js:uh,this.isPropagationStopped=uh,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=Je(Wr),os=ae({},Wr,{view:0,detail:0}),L0=Je(os),Ya,Ja,gi,Xo=ae({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gi&&(gi&&e.type==="mousemove"?(Ya=e.screenX-gi.screenX,Ja=e.screenY-gi.screenY):Ja=Ya=0,gi=e),Ya)},movementY:function(e){return"movementY"in e?e.movementY:Ja}}),ch=Je(Xo),x0=ae({},Xo,{dataTransfer:0}),D0=Je(x0),M0=ae({},os,{relatedTarget:0}),Za=Je(M0),U0=ae({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=Je(U0),F0=ae({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b0=Je(F0),z0=ae({},Wr,{data:0}),dh=Je(z0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V0[e])?!!t[e]:!1}function Ju(){return H0}var W0=ae({},os,{key:function(e){if(e.key){var t=$0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(e){return e.type==="keypress"?Zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=Je(W0),G0=ae({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=Je(G0),q0=ae({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),Q0=Je(q0),X0=ae({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=Je(X0),J0=ae({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=Je(J0),ew=[9,13,27,32],Zu=Wt&&"CompositionEvent"in window,Pi=null;Wt&&"documentMode"in document&&(Pi=document.documentMode);var tw=Wt&&"TextEvent"in window&&!Pi,Qp=Wt&&(!Zu||Pi&&8<Pi&&11>=Pi),fh=" ",ph=!1;function Xp(e,t){switch(e){case"keyup":return ew.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function nw(e,t){switch(e){case"compositionend":return Yp(t);case"keypress":return t.which!==32?null:(ph=!0,fh);case"textInput":return e=t.data,e===fh&&ph?null:e;default:return null}}function rw(e,t){if(pr)return e==="compositionend"||!Zu&&Xp(e,t)?(e=qp(),Js=Xu=hn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qp&&t.locale!=="ko"?null:t.data;default:return null}}var iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!iw[e.type]:t==="textarea"}function Jp(e,t,n,r){Rp(r),t=_o(t,"onChange"),0<t.length&&(n=new Yu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ai=null,Bi=null;function sw(e){ug(e,0)}function Yo(e){var t=vr(e);if(Sp(t))return e}function ow(e,t){if(e==="change")return t}var Zp=!1;if(Wt){var el;if(Wt){var tl="oninput"in document;if(!tl){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),tl=typeof mh.oninput=="function"}el=tl}else el=!1;Zp=el&&(!document.documentMode||9<document.documentMode)}function vh(){Ai&&(Ai.detachEvent("onpropertychange",eg),Bi=Ai=null)}function eg(e){if(e.propertyName==="value"&&Yo(Bi)){var t=[];Jp(t,Bi,e,Wu(e)),xp(sw,t)}}function aw(e,t,n){e==="focusin"?(vh(),Ai=t,Bi=n,Ai.attachEvent("onpropertychange",eg)):e==="focusout"&&vh()}function lw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Bi)}function uw(e,t){if(e==="click")return Yo(t)}function cw(e,t){if(e==="input"||e==="change")return Yo(t)}function dw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:dw;function Vi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nl.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function yh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wh(e,t){var n=yh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yh(n)}}function tg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ng(){for(var e=window,t=fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fo(e.document)}return t}function ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hw(e){var t=ng(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tg(n.ownerDocument.documentElement,n)){if(r!==null&&ec(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=wh(n,s);var a=wh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fw=Wt&&"documentMode"in document&&11>=document.documentMode,gr=null,Ql=null,Ri=null,Xl=!1;function _h(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||gr==null||gr!==fo(r)||(r=gr,"selectionStart"in r&&ec(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Vi(Ri,r)||(Ri=r,r=_o(Ql,"onSelect"),0<r.length&&(t=new Yu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function Fs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},nl={},rg={};Wt&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Jo(e){if(nl[e])return nl[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rg)return nl[e]=t[n];return e}var ig=Jo("animationend"),sg=Jo("animationiteration"),og=Jo("animationstart"),ag=Jo("transitionend"),lg=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){lg.set(e,t),tr(t,[e])}for(var rl=0;rl<Eh.length;rl++){var il=Eh[rl],pw=il.toLowerCase(),gw=il[0].toUpperCase()+il.slice(1);Pn(pw,"on"+gw)}Pn(ig,"onAnimationEnd");Pn(sg,"onAnimationIteration");Pn(og,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(ag,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function Sh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,p0(r,t,void 0,e),e.currentTarget=null}function ug(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],c=u.instance,h=u.currentTarget;if(u=u.listener,c!==s&&i.isPropagationStopped())break e;Sh(i,u,h),s=c}else for(a=0;a<r.length;a++){if(u=r[a],c=u.instance,h=u.currentTarget,u=u.listener,c!==s&&i.isPropagationStopped())break e;Sh(i,u,h),s=c}}}if(go)throw e=Wl,go=!1,Wl=null,e}function te(e,t){var n=t[tu];n===void 0&&(n=t[tu]=new Set);var r=e+"__bubble";n.has(r)||(cg(t,e,2,!1),n.add(r))}function sl(e,t,n){var r=0;t&&(r|=4),cg(n,e,r,t)}var bs="_reactListening"+Math.random().toString(36).slice(2);function Hi(e){if(!e[bs]){e[bs]=!0,vp.forEach(function(n){n!=="selectionchange"&&(mw.has(n)||sl(n,!1,e),sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bs]||(t[bs]=!0,sl("selectionchange",!1,t))}}function cg(e,t,n,r){switch(Gp(t)){case 1:var i=N0;break;case 4:i=O0;break;default:i=Qu}n=i.bind(null,t,n,e),i=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;u!==null;){if(a=Fn(u),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}u=u.parentNode}}r=r.return}xp(function(){var h=s,_=Wu(n),m=[];e:{var S=lg.get(e);if(S!==void 0){var N=Yu,R=e;switch(e){case"keypress":if(Zs(n)===0)break e;case"keydown":case"keyup":N=K0;break;case"focusin":R="focus",N=Za;break;case"focusout":R="blur",N=Za;break;case"beforeblur":case"afterblur":N=Za;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Q0;break;case ig:case sg:case og:N=j0;break;case ag:N=Y0;break;case"scroll":N=L0;break;case"wheel":N=Z0;break;case"copy":case"cut":case"paste":N=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=hh}var O=(t&4)!==0,x=!O&&e==="scroll",I=O?S!==null?S+"Capture":null:S;O=[];for(var y=h,T;y!==null;){T=y;var L=T.stateNode;if(T.tag===5&&L!==null&&(T=L,I!==null&&(L=Fi(y,I),L!=null&&O.push(Wi(y,L,T)))),x)break;y=y.return}0<O.length&&(S=new N(S,R,null,n,_),m.push({event:S,listeners:O}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",S&&n!==Bl&&(R=n.relatedTarget||n.fromElement)&&(Fn(R)||R[Kt]))break e;if((N||S)&&(S=_.window===_?_:(S=_.ownerDocument)?S.defaultView||S.parentWindow:window,N?(R=n.relatedTarget||n.toElement,N=h,R=R?Fn(R):null,R!==null&&(x=nr(R),R!==x||R.tag!==5&&R.tag!==6)&&(R=null)):(N=null,R=h),N!==R)){if(O=ch,L="onMouseLeave",I="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(O=hh,L="onPointerLeave",I="onPointerEnter",y="pointer"),x=N==null?S:vr(N),T=R==null?S:vr(R),S=new O(L,y+"leave",N,n,_),S.target=x,S.relatedTarget=T,L=null,Fn(_)===h&&(O=new O(I,y+"enter",R,n,_),O.target=T,O.relatedTarget=x,L=O),x=L,N&&R)t:{for(O=N,I=R,y=0,T=O;T;T=dr(T))y++;for(T=0,L=I;L;L=dr(L))T++;for(;0<y-T;)O=dr(O),y--;for(;0<T-y;)I=dr(I),T--;for(;y--;){if(O===I||I!==null&&O===I.alternate)break t;O=dr(O),I=dr(I)}O=null}else O=null;N!==null&&Ih(m,S,N,O,!1),R!==null&&x!==null&&Ih(m,x,R,O,!0)}}e:{if(S=h?vr(h):window,N=S.nodeName&&S.nodeName.toLowerCase(),N==="select"||N==="input"&&S.type==="file")var U=ow;else if(gh(S))if(Zp)U=cw;else{U=lw;var F=aw}else(N=S.nodeName)&&N.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(U=uw);if(U&&(U=U(e,h))){Jp(m,U,n,_);break e}F&&F(e,S,h),e==="focusout"&&(F=S._wrapperState)&&F.controlled&&S.type==="number"&&jl(S,"number",S.value)}switch(F=h?vr(h):window,e){case"focusin":(gh(F)||F.contentEditable==="true")&&(gr=F,Ql=h,Ri=null);break;case"focusout":Ri=Ql=gr=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,_h(m,n,_);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":_h(m,n,_)}var v;if(Zu)e:{switch(e){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else pr?Xp(e,n)&&(p="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Qp&&n.locale!=="ko"&&(pr||p!=="onCompositionStart"?p==="onCompositionEnd"&&pr&&(v=qp()):(hn=_,Xu="value"in hn?hn.value:hn.textContent,pr=!0)),F=_o(h,p),0<F.length&&(p=new dh(p,e,null,n,_),m.push({event:p,listeners:F}),v?p.data=v:(v=Yp(n),v!==null&&(p.data=v)))),(v=tw?nw(e,n):rw(e,n))&&(h=_o(h,"onBeforeInput"),0<h.length&&(_=new dh("onBeforeInput","beforeinput",null,n,_),m.push({event:_,listeners:h}),_.data=v))}ug(m,t)})}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _o(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fi(e,n),s!=null&&r.unshift(Wi(e,s,i)),s=Fi(e,t),s!=null&&r.push(Wi(e,s,i))),e=e.return}return r}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ih(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var u=n,c=u.alternate,h=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&h!==null&&(u=h,i?(c=Fi(n,s),c!=null&&a.unshift(Wi(n,c,u))):i||(c=Fi(n,s),c!=null&&a.push(Wi(n,c,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var vw=/\r\n?/g,yw=/\u0000|\uFFFD/g;function Th(e){return(typeof e=="string"?e:""+e).replace(vw,`
`).replace(yw,"")}function zs(e,t,n){if(t=Th(t),Th(e)!==t&&n)throw Error(D(425))}function Eo(){}var Yl=null,Jl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,ww=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,_w=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(e){return kh.resolve(null).then(e).catch(Ew)}:eu;function Ew(e){setTimeout(function(){throw e})}function al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),St="__reactFiber$"+Kr,Ki="__reactProps$"+Kr,Kt="__reactContainer$"+Kr,tu="__reactEvents$"+Kr,Sw="__reactListeners$"+Kr,Iw="__reactHandles$"+Kr;function Fn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ch(e);e!==null;){if(n=e[St])return n;e=Ch(e)}return t}e=n,n=e.parentNode}return null}function as(e){return e=e[St]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Zo(e){return e[Ki]||null}var nu=[],yr=-1;function An(e){return{current:e}}function ne(e){0>yr||(e.current=nu[yr],nu[yr]=null,yr--)}function Z(e,t){yr++,nu[yr]=e.current,e.current=t}var Cn={},Oe=An(Cn),$e=An(!1),Wn=Cn;function Ur(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function So(){ne($e),ne(Oe)}function Ph(e,t,n){if(Oe.current!==Cn)throw Error(D(168));Z(Oe,t),Z($e,n)}function dg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,a0(e)||"Unknown",i));return ae({},n,r)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Wn=Oe.current,Z(Oe,e),Z($e,$e.current),!0}function Ah(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=dg(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,ne($e),ne(Oe),Z(Oe,e)):ne($e),Z($e,n)}var jt=null,ea=!1,ll=!1;function hg(e){jt===null?jt=[e]:jt.push(e)}function Tw(e){ea=!0,hg(e)}function Rn(){if(!ll&&jt!==null){ll=!0;var e=0,t=X;try{var n=jt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,ea=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),jp(Ku,Rn),i}finally{X=t,ll=!1}}return null}var wr=[],_r=0,To=null,ko=0,tt=[],nt=0,Kn=null,Ft=1,bt="";function Mn(e,t){wr[_r++]=ko,wr[_r++]=To,To=e,ko=t}function fg(e,t,n){tt[nt++]=Ft,tt[nt++]=bt,tt[nt++]=Kn,Kn=e;var r=Ft;e=bt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var s=32-ft(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ft=1<<32-ft(t)+i|n<<i|r,bt=s+e}else Ft=1<<s|n<<i|r,bt=e}function tc(e){e.return!==null&&(Mn(e,1),fg(e,1,0))}function nc(e){for(;e===To;)To=wr[--_r],wr[_r]=null,ko=wr[--_r],wr[_r]=null;for(;e===Kn;)Kn=tt[--nt],tt[nt]=null,bt=tt[--nt],tt[nt]=null,Ft=tt[--nt],tt[nt]=null}var qe=null,Ke=null,re=!1,ht=null;function pg(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ke=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kn!==null?{id:Ft,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ke=null,!0):!1;default:return!1}}function ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function iu(e){if(re){var t=Ke;if(t){var n=t;if(!Rh(e,t)){if(ru(e))throw Error(D(418));t=yn(n.nextSibling);var r=qe;t&&Rh(e,t)?pg(r,n):(e.flags=e.flags&-4097|2,re=!1,qe=e)}}else{if(ru(e))throw Error(D(418));e.flags=e.flags&-4097|2,re=!1,qe=e}}}function Nh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function $s(e){if(e!==qe)return!1;if(!re)return Nh(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=Ke)){if(ru(e))throw gg(),Error(D(418));for(;t;)pg(e,t),t=yn(t.nextSibling)}if(Nh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=qe?yn(e.stateNode.nextSibling):null;return!0}function gg(){for(var e=Ke;e;)e=yn(e.nextSibling)}function jr(){Ke=qe=null,re=!1}function rc(e){ht===null?ht=[e]:ht.push(e)}var kw=Xt.ReactCurrentBatchConfig;function mi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var u=i.refs;a===null?delete u[s]:u[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Bs(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oh(e){var t=e._init;return t(e._payload)}function mg(e){function t(I,y){if(e){var T=I.deletions;T===null?(I.deletions=[y],I.flags|=16):T.push(y)}}function n(I,y){if(!e)return null;for(;y!==null;)t(I,y),y=y.sibling;return null}function r(I,y){for(I=new Map;y!==null;)y.key!==null?I.set(y.key,y):I.set(y.index,y),y=y.sibling;return I}function i(I,y){return I=Sn(I,y),I.index=0,I.sibling=null,I}function s(I,y,T){return I.index=T,e?(T=I.alternate,T!==null?(T=T.index,T<y?(I.flags|=2,y):T):(I.flags|=2,y)):(I.flags|=1048576,y)}function a(I){return e&&I.alternate===null&&(I.flags|=2),I}function u(I,y,T,L){return y===null||y.tag!==6?(y=gl(T,I.mode,L),y.return=I,y):(y=i(y,T),y.return=I,y)}function c(I,y,T,L){var U=T.type;return U===fr?_(I,y,T.props.children,L,T.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===rn&&Oh(U)===y.type)?(L=i(y,T.props),L.ref=mi(I,y,T),L.return=I,L):(L=oo(T.type,T.key,T.props,null,I.mode,L),L.ref=mi(I,y,T),L.return=I,L)}function h(I,y,T,L){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=ml(T,I.mode,L),y.return=I,y):(y=i(y,T.children||[]),y.return=I,y)}function _(I,y,T,L,U){return y===null||y.tag!==7?(y=Vn(T,I.mode,L,U),y.return=I,y):(y=i(y,T),y.return=I,y)}function m(I,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=gl(""+y,I.mode,T),y.return=I,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Os:return T=oo(y.type,y.key,y.props,null,I.mode,T),T.ref=mi(I,null,y),T.return=I,T;case hr:return y=ml(y,I.mode,T),y.return=I,y;case rn:var L=y._init;return m(I,L(y._payload),T)}if(_i(y)||di(y))return y=Vn(y,I.mode,T,null),y.return=I,y;Bs(I,y)}return null}function S(I,y,T,L){var U=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return U!==null?null:u(I,y,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Os:return T.key===U?c(I,y,T,L):null;case hr:return T.key===U?h(I,y,T,L):null;case rn:return U=T._init,S(I,y,U(T._payload),L)}if(_i(T)||di(T))return U!==null?null:_(I,y,T,L,null);Bs(I,T)}return null}function N(I,y,T,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(T)||null,u(y,I,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Os:return I=I.get(L.key===null?T:L.key)||null,c(y,I,L,U);case hr:return I=I.get(L.key===null?T:L.key)||null,h(y,I,L,U);case rn:var F=L._init;return N(I,y,T,F(L._payload),U)}if(_i(L)||di(L))return I=I.get(T)||null,_(y,I,L,U,null);Bs(y,L)}return null}function R(I,y,T,L){for(var U=null,F=null,v=y,p=y=0,g=null;v!==null&&p<T.length;p++){v.index>p?(g=v,v=null):g=v.sibling;var E=S(I,v,T[p],L);if(E===null){v===null&&(v=g);break}e&&v&&E.alternate===null&&t(I,v),y=s(E,y,p),F===null?U=E:F.sibling=E,F=E,v=g}if(p===T.length)return n(I,v),re&&Mn(I,p),U;if(v===null){for(;p<T.length;p++)v=m(I,T[p],L),v!==null&&(y=s(v,y,p),F===null?U=v:F.sibling=v,F=v);return re&&Mn(I,p),U}for(v=r(I,v);p<T.length;p++)g=N(v,I,p,T[p],L),g!==null&&(e&&g.alternate!==null&&v.delete(g.key===null?p:g.key),y=s(g,y,p),F===null?U=g:F.sibling=g,F=g);return e&&v.forEach(function(k){return t(I,k)}),re&&Mn(I,p),U}function O(I,y,T,L){var U=di(T);if(typeof U!="function")throw Error(D(150));if(T=U.call(T),T==null)throw Error(D(151));for(var F=U=null,v=y,p=y=0,g=null,E=T.next();v!==null&&!E.done;p++,E=T.next()){v.index>p?(g=v,v=null):g=v.sibling;var k=S(I,v,E.value,L);if(k===null){v===null&&(v=g);break}e&&v&&k.alternate===null&&t(I,v),y=s(k,y,p),F===null?U=k:F.sibling=k,F=k,v=g}if(E.done)return n(I,v),re&&Mn(I,p),U;if(v===null){for(;!E.done;p++,E=T.next())E=m(I,E.value,L),E!==null&&(y=s(E,y,p),F===null?U=E:F.sibling=E,F=E);return re&&Mn(I,p),U}for(v=r(I,v);!E.done;p++,E=T.next())E=N(v,I,p,E.value,L),E!==null&&(e&&E.alternate!==null&&v.delete(E.key===null?p:E.key),y=s(E,y,p),F===null?U=E:F.sibling=E,F=E);return e&&v.forEach(function(P){return t(I,P)}),re&&Mn(I,p),U}function x(I,y,T,L){if(typeof T=="object"&&T!==null&&T.type===fr&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Os:e:{for(var U=T.key,F=y;F!==null;){if(F.key===U){if(U=T.type,U===fr){if(F.tag===7){n(I,F.sibling),y=i(F,T.props.children),y.return=I,I=y;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===rn&&Oh(U)===F.type){n(I,F.sibling),y=i(F,T.props),y.ref=mi(I,F,T),y.return=I,I=y;break e}n(I,F);break}else t(I,F);F=F.sibling}T.type===fr?(y=Vn(T.props.children,I.mode,L,T.key),y.return=I,I=y):(L=oo(T.type,T.key,T.props,null,I.mode,L),L.ref=mi(I,y,T),L.return=I,I=L)}return a(I);case hr:e:{for(F=T.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){n(I,y.sibling),y=i(y,T.children||[]),y.return=I,I=y;break e}else{n(I,y);break}else t(I,y);y=y.sibling}y=ml(T,I.mode,L),y.return=I,I=y}return a(I);case rn:return F=T._init,x(I,y,F(T._payload),L)}if(_i(T))return R(I,y,T,L);if(di(T))return O(I,y,T,L);Bs(I,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(n(I,y.sibling),y=i(y,T),y.return=I,I=y):(n(I,y),y=gl(T,I.mode,L),y.return=I,I=y),a(I)):n(I,y)}return x}var Fr=mg(!0),vg=mg(!1),Co=An(null),Po=null,Er=null,ic=null;function sc(){ic=Er=Po=null}function oc(e){var t=Co.current;ne(Co),e._currentValue=t}function su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){Po=e,ic=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(ic!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Po===null)throw Error(D(308));Er=e,Po.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var bn=null;function ac(e){bn===null?bn=[e]:bn.push(e)}function yg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ac(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,ac(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}function Lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ao(e,t,n,r){var i=e.updateQueue;sn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,h=c.next;c.next=null,a===null?s=h:a.next=h,a=c;var _=e.alternate;_!==null&&(_=_.updateQueue,u=_.lastBaseUpdate,u!==a&&(u===null?_.firstBaseUpdate=h:u.next=h,_.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;a=0,_=h=c=null,u=s;do{var S=u.lane,N=u.eventTime;if((r&S)===S){_!==null&&(_=_.next={eventTime:N,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=e,O=u;switch(S=t,N=n,O.tag){case 1:if(R=O.payload,typeof R=="function"){m=R.call(N,m,S);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=O.payload,S=typeof R=="function"?R.call(N,m,S):R,S==null)break e;m=ae({},m,S);break e;case 2:sn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,S=i.effects,S===null?i.effects=[u]:S.push(u))}else N={eventTime:N,lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},_===null?(h=_=N,c=m):_=_.next=N,a|=S;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;S=u,u=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(_===null&&(c=m),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=_,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);qn|=a,e.lanes=a,e.memoizedState=m}}function xh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var ls={},kt=An(ls),Gi=An(ls),qi=An(ls);function zn(e){if(e===ls)throw Error(D(174));return e}function uc(e,t){switch(Z(qi,t),Z(Gi,e),Z(kt,ls),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bl(t,e)}ne(kt),Z(kt,t)}function br(){ne(kt),ne(Gi),ne(qi)}function _g(e){zn(qi.current);var t=zn(kt.current),n=bl(t,e.type);t!==n&&(Z(Gi,e),Z(kt,n))}function cc(e){Gi.current===e&&(ne(kt),ne(Gi))}var se=An(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function dc(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var to=Xt.ReactCurrentDispatcher,cl=Xt.ReactCurrentBatchConfig,Gn=0,oe=null,fe=null,me=null,No=!1,Ni=!1,Qi=0,Cw=0;function ke(){throw Error(D(321))}function hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function fc(e,t,n,r,i,s){if(Gn=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?Nw:Ow,e=n(r,i),Ni){s=0;do{if(Ni=!1,Qi=0,25<=s)throw Error(D(301));s+=1,me=fe=null,t.updateQueue=null,to.current=Lw,e=n(r,i)}while(Ni)}if(to.current=Oo,t=fe!==null&&fe.next!==null,Gn=0,me=fe=oe=null,No=!1,t)throw Error(D(300));return e}function pc(){var e=Qi!==0;return Qi=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function at(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,fe=e;else{if(e===null)throw Error(D(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function Xi(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=at(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var u=a=null,c=null,h=s;do{var _=h.lane;if((Gn&_)===_)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:_,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(u=c=m,a=r):c=c.next=m,oe.lanes|=_,qn|=_}h=h.next}while(h!==null&&h!==s);c===null?a=r:c.next=u,gt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,oe.lanes|=s,qn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hl(e){var t=at(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);gt(s,t.memoizedState)||(ze=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Eg(){}function Sg(e,t){var n=oe,r=at(),i=t(),s=!gt(r.memoizedState,i);if(s&&(r.memoizedState=i,ze=!0),r=r.queue,gc(kg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Yi(9,Tg.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(D(349));Gn&30||Ig(n,t,i)}return i}function Ig(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tg(e,t,n,r){t.value=n,t.getSnapshot=r,Cg(t)&&Pg(e)}function kg(e,t,n){return n(function(){Cg(t)&&Pg(e)})}function Cg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Pg(e){var t=Gt(e,1);t!==null&&pt(t,e,1,-1)}function Dh(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Rw.bind(null,oe,e),[t.memoizedState,e]}function Yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ag(){return at().memoizedState}function no(e,t,n,r){var i=Et();oe.flags|=e,i.memoizedState=Yi(1|t,n,void 0,r===void 0?null:r)}function ta(e,t,n,r){var i=at();r=r===void 0?null:r;var s=void 0;if(fe!==null){var a=fe.memoizedState;if(s=a.destroy,r!==null&&hc(r,a.deps)){i.memoizedState=Yi(t,n,s,r);return}}oe.flags|=e,i.memoizedState=Yi(1|t,n,s,r)}function Mh(e,t){return no(8390656,8,e,t)}function gc(e,t){return ta(2048,8,e,t)}function Rg(e,t){return ta(4,2,e,t)}function Ng(e,t){return ta(4,4,e,t)}function Og(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lg(e,t,n){return n=n!=null?n.concat([e]):null,ta(4,4,Og.bind(null,t,e),n)}function mc(){}function xg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mg(e,t,n){return Gn&21?(gt(n,t)||(n=zp(),oe.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function Pw(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{X=n,cl.transition=r}}function Ug(){return at().memoizedState}function Aw(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jg(e))Fg(t,n);else if(n=yg(e,t,n,r),n!==null){var i=Ue();pt(n,e,r,i),bg(n,t,r)}}function Rw(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jg(e))Fg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,u=s(a,n);if(i.hasEagerState=!0,i.eagerState=u,gt(u,a)){var c=t.interleaved;c===null?(i.next=i,ac(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=yg(e,t,i,r),n!==null&&(i=Ue(),pt(n,e,r,i),bg(n,t,r))}}function jg(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Fg(e,t){Ni=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}var Oo={readContext:ot,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Nw={readContext:ot,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Mh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,Og.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Aw.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Dh,useDebugValue:mc,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Dh(!1),t=e[0];return e=Pw.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=Et();if(re){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),ve===null)throw Error(D(349));Gn&30||Ig(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Mh(kg.bind(null,r,s,e),[e]),r.flags|=2048,Yi(9,Tg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Et(),t=ve.identifierPrefix;if(re){var n=bt,r=Ft;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ow={readContext:ot,useCallback:xg,useContext:ot,useEffect:gc,useImperativeHandle:Lg,useInsertionEffect:Rg,useLayoutEffect:Ng,useMemo:Dg,useReducer:dl,useRef:Ag,useState:function(){return dl(Xi)},useDebugValue:mc,useDeferredValue:function(e){var t=at();return Mg(t,fe.memoizedState,e)},useTransition:function(){var e=dl(Xi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:Sg,useId:Ug,unstable_isNewReconciler:!1},Lw={readContext:ot,useCallback:xg,useContext:ot,useEffect:gc,useImperativeHandle:Lg,useInsertionEffect:Rg,useLayoutEffect:Ng,useMemo:Dg,useReducer:hl,useRef:Ag,useState:function(){return hl(Xi)},useDebugValue:mc,useDeferredValue:function(e){var t=at();return fe===null?t.memoizedState=e:Mg(t,fe.memoizedState,e)},useTransition:function(){var e=hl(Xi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:Sg,useId:Ug,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ou(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var na={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=En(e),s=Vt(r,i);s.payload=t,n!=null&&(s.callback=n),t=wn(e,s,i),t!==null&&(pt(t,e,i,r),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=En(e),s=Vt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=wn(e,s,i),t!==null&&(pt(t,e,i,r),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=En(e),i=Vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=wn(e,i,r),t!==null&&(pt(t,e,r,n),eo(t,e,r))}};function Uh(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,s):!0}function zg(e,t,n){var r=!1,i=Cn,s=t.contextType;return typeof s=="object"&&s!==null?s=ot(s):(i=Be(t)?Wn:Oe.current,r=t.contextTypes,s=(r=r!=null)?Ur(e,i):Cn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=na,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function jh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&na.enqueueReplaceState(t,t.state,null)}function au(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},lc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ot(s):(s=Be(t)?Wn:Oe.current,i.context=Ur(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ou(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&na.enqueueReplaceState(i,i.state,null),Ao(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var n="",r=t;do n+=o0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xw=typeof WeakMap=="function"?WeakMap:Map;function $g(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xo||(xo=!0,yu=r),lu(e,t)},n}function Bg(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){lu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lu(e,t),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Fh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Gw.bind(null,e,t,n),t.then(e,e))}function bh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var Dw=Xt.ReactCurrentOwner,ze=!1;function Me(e,t,n,r){t.child=e===null?vg(t,null,n,r):Fr(t,e.child,n,r)}function $h(e,t,n,r,i){n=n.render;var s=t.ref;return Rr(t,i),r=fc(e,t,n,r,s,i),n=pc(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(re&&n&&tc(t),t.flags|=1,Me(e,t,r,i),t.child)}function Bh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Tc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Vg(e,t,s,r,i)):(e=oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(a,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=Sn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Vg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Vi(s,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,qt(e,t,i)}return uu(e,t,n,r,i)}function Hg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Ir,We),We|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Ir,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Ir,We),We|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Z(Ir,We),We|=r;return Me(e,t,i,n),t.child}function Wg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function uu(e,t,n,r,i){var s=Be(n)?Wn:Oe.current;return s=Ur(t,s),Rr(t,i),n=fc(e,t,n,r,s,i),r=pc(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(re&&r&&tc(t),t.flags|=1,Me(e,t,n,i),t.child)}function Vh(e,t,n,r,i){if(Be(n)){var s=!0;Io(t)}else s=!1;if(Rr(t,i),t.stateNode===null)ro(e,t),zg(t,n,r),au(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var c=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=ot(h):(h=Be(n)?Wn:Oe.current,h=Ur(t,h));var _=n.getDerivedStateFromProps,m=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||c!==h)&&jh(t,a,r,h),sn=!1;var S=t.memoizedState;a.state=S,Ao(t,r,a,i),c=t.memoizedState,u!==r||S!==c||$e.current||sn?(typeof _=="function"&&(ou(t,n,_,r),c=t.memoizedState),(u=sn||Uh(t,n,u,r,S,c,h))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=h,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,wg(e,t),u=t.memoizedProps,h=t.type===t.elementType?u:ct(t.type,u),a.props=h,m=t.pendingProps,S=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ot(c):(c=Be(n)?Wn:Oe.current,c=Ur(t,c));var N=n.getDerivedStateFromProps;(_=typeof N=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==m||S!==c)&&jh(t,a,r,c),sn=!1,S=t.memoizedState,a.state=S,Ao(t,r,a,i);var R=t.memoizedState;u!==m||S!==R||$e.current||sn?(typeof N=="function"&&(ou(t,n,N,r),R=t.memoizedState),(h=sn||Uh(t,n,h,r,S,R,c)||!1)?(_||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,R,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,R,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=R),a.props=r,a.state=R,a.context=c,r=h):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return cu(e,t,n,r,s,i)}function cu(e,t,n,r,i,s){Wg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ah(t,n,!1),qt(e,t,s);r=t.stateNode,Dw.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Fr(t,e.child,null,s),t.child=Fr(t,null,u,s)):Me(e,t,u,s),t.memoizedState=r.state,i&&Ah(t,n,!0),t.child}function Kg(e){var t=e.stateNode;t.pendingContext?Ph(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ph(e,t.context,!1),uc(e,t.containerInfo)}function Hh(e,t,n,r,i){return jr(),rc(i),t.flags|=256,Me(e,t,n,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0};function hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gg(e,t,n){var r=t.pendingProps,i=se.current,s=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(se,i&1),e===null)return iu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=sa(a,r,0,null),e=Vn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=hu(n),t.memoizedState=du,e):vc(t,a));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Mw(e,t,a,r,u,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Sn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=Sn(u,s):(s=Vn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?hu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=du,r}return s=e.child,e=s.sibling,r=Sn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vc(e,t){return t=sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vs(e,t,n,r){return r!==null&&rc(r),Fr(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mw(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(D(422))),Vs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=sa({mode:"visible",children:r.children},i,0,null),s=Vn(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Fr(t,e.child,null,a),t.child.memoizedState=hu(a),t.memoizedState=du,s);if(!(t.mode&1))return Vs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(D(419)),r=fl(s,r,void 0),Vs(e,t,a,r)}if(u=(a&e.childLanes)!==0,ze||u){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gt(e,i),pt(r,e,i,-1))}return Ic(),r=fl(Error(D(421))),Vs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ke=yn(i.nextSibling),qe=t,re=!0,ht=null,e!==null&&(tt[nt++]=Ft,tt[nt++]=bt,tt[nt++]=Kn,Ft=e.id,bt=e.overflow,Kn=t),t=vc(t,r.children),t.flags|=4096,t)}function Wh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),su(e.return,t,n)}function pl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Me(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wh(e,n,t);else if(e.tag===19)Wh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pl(t,!0,n,null,s);break;case"together":pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uw(e,t,n){switch(t.tag){case 3:Kg(t),jr();break;case 5:_g(t);break;case 1:Be(t.type)&&Io(t);break;case 4:uc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Z(Co,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Gg(e,t,n):(Z(se,se.current&1),e=qt(e,t,n),e!==null?e.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Hg(e,t,n)}return qt(e,t,n)}var Qg,fu,Xg,Yg;Qg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fu=function(){};Xg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn(kt.current);var s=null;switch(n){case"input":i=Ml(e,i),r=Ml(e,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Fl(e,i),r=Fl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}zl(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var u=i[h];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ui.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var c=r[h];if(u=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&c!==u&&(c!=null||u!=null))if(h==="style")if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&te("scroll",e),s||u===c||(s=[])):(s=s||[]).push(h,c))}n&&(s=s||[]).push("style",n);var h=s;(t.updateQueue=h)&&(t.flags|=4)}};Yg=function(e,t,n,r){n!==r&&(t.flags|=4)};function vi(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jw(e,t,n){var r=t.pendingProps;switch(nc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Be(t.type)&&So(),Ce(t),null;case 3:return r=t.stateNode,br(),ne($e),ne(Oe),dc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Eu(ht),ht=null))),fu(e,t),Ce(t),null;case 5:cc(t);var i=zn(qi.current);if(n=t.type,e!==null&&t.stateNode!=null)Xg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ce(t),null}if(e=zn(kt.current),$s(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[St]=t,r[Ki]=s,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)te(Si[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":eh(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":nh(r,s),te("invalid",r)}zl(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,u,e),i=["children",""+u]):Ui.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&te("scroll",r)}switch(n){case"input":Ls(r),th(r,s,!0);break;case"textarea":Ls(r),rh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[St]=t,e[Ki]=r,Qg(e,t,!1,!1),t.stateNode=e;e:{switch(a=$l(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)te(Si[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":eh(e,r),i=Ml(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),te("invalid",e);break;case"textarea":nh(e,r),i=Fl(e,r),te("invalid",e);break;default:i=r}zl(n,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?Ap(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cp(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ji(e,c):typeof c=="number"&&ji(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ui.hasOwnProperty(s)?c!=null&&s==="onScroll"&&te("scroll",e):c!=null&&$u(e,s,c,a))}switch(n){case"input":Ls(e),th(e,r,!1);break;case"textarea":Ls(e),rh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?kr(e,!!r.multiple,s,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Yg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=zn(qi.current),zn(kt.current),$s(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(s=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:zs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ce(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ke!==null&&t.mode&1&&!(t.flags&128))gg(),jr(),t.flags|=98560,s=!1;else if(s=$s(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(D(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[St]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else ht!==null&&(Eu(ht),ht=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?pe===0&&(pe=3):Ic())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return br(),fu(e,t),e===null&&Hi(t.stateNode.containerInfo),Ce(t),null;case 10:return oc(t.type._context),Ce(t),null;case 17:return Be(t.type)&&So(),Ce(t),null;case 19:if(ne(se),s=t.memoizedState,s===null)return Ce(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)vi(s,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ro(e),a!==null){for(t.flags|=128,vi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&de()>$r&&(t.flags|=128,r=!0,vi(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ro(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!re)return Ce(t),null}else 2*de()-s.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,vi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=de(),t.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Fw(e,t){switch(nc(t),t.tag){case 1:return Be(t.type)&&So(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),ne($e),ne(Oe),dc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cc(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return br(),null;case 10:return oc(t.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var Hs=!1,Ae=!1,bw=typeof WeakSet=="function"?WeakSet:Set,$=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function pu(e,t,n){try{n()}catch(r){le(e,t,r)}}var Kh=!1;function zw(e,t){if(Yl=yo,e=ng(),ec(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,u=-1,c=-1,h=0,_=0,m=e,S=null;t:for(;;){for(var N;m!==n||i!==0&&m.nodeType!==3||(u=a+i),m!==s||r!==0&&m.nodeType!==3||(c=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(N=m.firstChild)!==null;)S=m,m=N;for(;;){if(m===e)break t;if(S===n&&++h===i&&(u=a),S===s&&++_===r&&(c=a),(N=m.nextSibling)!==null)break;m=S,S=m.parentNode}m=N}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},yo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var R=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var O=R.memoizedProps,x=R.memoizedState,I=t.stateNode,y=I.getSnapshotBeforeUpdate(t.elementType===t.type?O:ct(t.type,O),x);I.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(L){le(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return R=Kh,Kh=!1,R}function Oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&pu(t,n,s)}i=i.next}while(i!==r)}}function ra(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jg(e){var t=e.alternate;t!==null&&(e.alternate=null,Jg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Ki],delete t[tu],delete t[Sw],delete t[Iw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zg(e){return e.tag===5||e.tag===3||e.tag===4}function Gh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}var we=null,dt=!1;function tn(e,t,n){for(n=n.child;n!==null;)em(e,t,n),n=n.sibling}function em(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:Ae||Sr(n,t);case 6:var r=we,i=dt;we=null,tn(e,t,n),we=r,dt=i,we!==null&&(dt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(dt?(e=we,n=n.stateNode,e.nodeType===8?al(e.parentNode,n):e.nodeType===1&&al(e,n),$i(e)):al(we,n.stateNode));break;case 4:r=we,i=dt,we=n.stateNode.containerInfo,dt=!0,tn(e,t,n),we=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&pu(n,t,a),i=i.next}while(i!==r)}tn(e,t,n);break;case 1:if(!Ae&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){le(n,t,u)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,tn(e,t,n),Ae=r):tn(e,t,n);break;default:tn(e,t,n)}}function qh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bw),t.forEach(function(r){var i=Qw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:we=u.stateNode,dt=!1;break e;case 3:we=u.stateNode.containerInfo,dt=!0;break e;case 4:we=u.stateNode.containerInfo,dt=!0;break e}u=u.return}if(we===null)throw Error(D(160));em(s,a,i),we=null,dt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){le(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tm(t,e),t=t.sibling}function tm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),_t(e),r&4){try{Oi(3,e,e.return),ra(3,e)}catch(O){le(e,e.return,O)}try{Oi(5,e,e.return)}catch(O){le(e,e.return,O)}}break;case 1:ut(t,e),_t(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(ut(t,e),_t(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var i=e.stateNode;try{ji(i,"")}catch(O){le(e,e.return,O)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&Ip(i,s),$l(u,a);var h=$l(u,s);for(a=0;a<c.length;a+=2){var _=c[a],m=c[a+1];_==="style"?Ap(i,m):_==="dangerouslySetInnerHTML"?Cp(i,m):_==="children"?ji(i,m):$u(i,_,m,h)}switch(u){case"input":Ul(i,s);break;case"textarea":Tp(i,s);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var N=s.value;N!=null?kr(i,!!s.multiple,N,!1):S!==!!s.multiple&&(s.defaultValue!=null?kr(i,!!s.multiple,s.defaultValue,!0):kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ki]=s}catch(O){le(e,e.return,O)}}break;case 6:if(ut(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(O){le(e,e.return,O)}}break;case 3:if(ut(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(O){le(e,e.return,O)}break;case 4:ut(t,e),_t(e);break;case 13:ut(t,e),_t(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_c=de())),r&4&&qh(e);break;case 22:if(_=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(h=Ae)||_,ut(t,e),Ae=h):ut(t,e),_t(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!_&&e.mode&1)for($=e,_=e.child;_!==null;){for(m=$=_;$!==null;){switch(S=$,N=S.child,S.tag){case 0:case 11:case 14:case 15:Oi(4,S,S.return);break;case 1:Sr(S,S.return);var R=S.stateNode;if(typeof R.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,R.props=t.memoizedProps,R.state=t.memoizedState,R.componentWillUnmount()}catch(O){le(r,n,O)}}break;case 5:Sr(S,S.return);break;case 22:if(S.memoizedState!==null){Xh(m);continue}}N!==null?(N.return=S,$=N):Xh(m)}_=_.sibling}e:for(_=null,m=e;;){if(m.tag===5){if(_===null){_=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=Pp("display",a))}catch(O){le(e,e.return,O)}}}else if(m.tag===6){if(_===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(O){le(e,e.return,O)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;_===m&&(_=null),m=m.return}_===m&&(_=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ut(t,e),_t(e),r&4&&qh(e);break;case 21:break;default:ut(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zg(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ji(i,""),r.flags&=-33);var s=Gh(e);vu(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=Gh(e);mu(e,u,a);break;default:throw Error(D(161))}}catch(c){le(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $w(e,t,n){$=e,nm(e)}function nm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Hs;if(!a){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Ae;u=Hs;var h=Ae;if(Hs=a,(Ae=c)&&!h)for($=i;$!==null;)a=$,c=a.child,a.tag===22&&a.memoizedState!==null?Yh(i):c!==null?(c.return=a,$=c):Yh(i);for(;s!==null;)$=s,nm(s),s=s.sibling;$=i,Hs=u,Ae=h}Qh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Qh(e)}}function Qh(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||ra(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&xh(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xh(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var _=h.memoizedState;if(_!==null){var m=_.dehydrated;m!==null&&$i(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ae||t.flags&512&&gu(t)}catch(S){le(t,t.return,S)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Xh(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Yh(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ra(4,t)}catch(c){le(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){le(t,i,c)}}var s=t.return;try{gu(t)}catch(c){le(t,s,c)}break;case 5:var a=t.return;try{gu(t)}catch(c){le(t,a,c)}}}catch(c){le(t,t.return,c)}if(t===e){$=null;break}var u=t.sibling;if(u!==null){u.return=t.return,$=u;break}$=t.return}}var Bw=Math.ceil,Lo=Xt.ReactCurrentDispatcher,yc=Xt.ReactCurrentOwner,it=Xt.ReactCurrentBatchConfig,G=0,ve=null,he=null,_e=0,We=0,Ir=An(0),pe=0,Ji=null,qn=0,ia=0,wc=0,Li=null,be=null,_c=0,$r=1/0,Ut=null,xo=!1,yu=null,_n=null,Ws=!1,fn=null,Do=0,xi=0,wu=null,io=-1,so=0;function Ue(){return G&6?de():io!==-1?io:io=de()}function En(e){return e.mode&1?G&2&&_e!==0?_e&-_e:kw.transition!==null?(so===0&&(so=zp()),so):(e=X,e!==0||(e=window.event,e=e===void 0?16:Gp(e.type)),e):1}function pt(e,t,n,r){if(50<xi)throw xi=0,wu=null,Error(D(185));ss(e,n,r),(!(G&2)||e!==ve)&&(e===ve&&(!(G&2)&&(ia|=n),pe===4&&an(e,_e)),Ve(e,r),n===1&&G===0&&!(t.mode&1)&&($r=de()+500,ea&&Rn()))}function Ve(e,t){var n=e.callbackNode;k0(e,t);var r=vo(e,e===ve?_e:0);if(r===0)n!==null&&oh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oh(n),t===1)e.tag===0?Tw(Jh.bind(null,e)):hg(Jh.bind(null,e)),_w(function(){!(G&6)&&Rn()}),n=null;else{switch($p(r)){case 1:n=Ku;break;case 4:n=Fp;break;case 16:n=mo;break;case 536870912:n=bp;break;default:n=mo}n=cm(n,rm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rm(e,t){if(io=-1,so=0,G&6)throw Error(D(327));var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var r=vo(e,e===ve?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mo(e,r);else{t=r;var i=G;G|=2;var s=sm();(ve!==e||_e!==t)&&(Ut=null,$r=de()+500,Bn(e,t));do try{Ww();break}catch(u){im(e,u)}while(!0);sc(),Lo.current=s,G=i,he!==null?t=0:(ve=null,_e=0,t=pe)}if(t!==0){if(t===2&&(i=Kl(e),i!==0&&(r=i,t=_u(e,i))),t===1)throw n=Ji,Bn(e,0),an(e,r),Ve(e,de()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Vw(i)&&(t=Mo(e,r),t===2&&(s=Kl(e),s!==0&&(r=s,t=_u(e,s))),t===1))throw n=Ji,Bn(e,0),an(e,r),Ve(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Un(e,be,Ut);break;case 3:if(an(e,r),(r&130023424)===r&&(t=_c+500-de(),10<t)){if(vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=eu(Un.bind(null,e,be,Ut),t);break}Un(e,be,Ut);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ft(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bw(r/1960))-r,10<r){e.timeoutHandle=eu(Un.bind(null,e,be,Ut),r);break}Un(e,be,Ut);break;case 5:Un(e,be,Ut);break;default:throw Error(D(329))}}}return Ve(e,de()),e.callbackNode===n?rm.bind(null,e):null}function _u(e,t){var n=Li;return e.current.memoizedState.isDehydrated&&(Bn(e,t).flags|=256),e=Mo(e,t),e!==2&&(t=be,be=n,t!==null&&Eu(t)),e}function Eu(e){be===null?be=e:be.push.apply(be,e)}function Vw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~wc,t&=~ia,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Jh(e){if(G&6)throw Error(D(327));Nr();var t=vo(e,0);if(!(t&1))return Ve(e,de()),null;var n=Mo(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=_u(e,r))}if(n===1)throw n=Ji,Bn(e,0),an(e,t),Ve(e,de()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,be,Ut),Ve(e,de()),null}function Ec(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&($r=de()+500,ea&&Rn())}}function Qn(e){fn!==null&&fn.tag===0&&!(G&6)&&Nr();var t=G;G|=1;var n=it.transition,r=X;try{if(it.transition=null,X=1,e)return e()}finally{X=r,it.transition=n,G=t,!(G&6)&&Rn()}}function Sc(){We=Ir.current,ne(Ir)}function Bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ww(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(nc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:br(),ne($e),ne(Oe),dc();break;case 5:cc(r);break;case 4:br();break;case 13:ne(se);break;case 19:ne(se);break;case 10:oc(r.type._context);break;case 22:case 23:Sc()}n=n.return}if(ve=e,he=e=Sn(e.current,null),_e=We=t,pe=0,Ji=null,wc=ia=qn=0,be=Li=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}bn=null}return e}function im(e,t){do{var n=he;try{if(sc(),to.current=Oo,No){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}No=!1}if(Gn=0,me=fe=oe=null,Ni=!1,Qi=0,yc.current=null,n===null||n.return===null){pe=1,Ji=t,he=null;break}e:{var s=e,a=n.return,u=n,c=t;if(t=_e,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,_=u,m=_.tag;if(!(_.mode&1)&&(m===0||m===11||m===15)){var S=_.alternate;S?(_.updateQueue=S.updateQueue,_.memoizedState=S.memoizedState,_.lanes=S.lanes):(_.updateQueue=null,_.memoizedState=null)}var N=bh(a);if(N!==null){N.flags&=-257,zh(N,a,u,s,t),N.mode&1&&Fh(s,h,t),t=N,c=h;var R=t.updateQueue;if(R===null){var O=new Set;O.add(c),t.updateQueue=O}else R.add(c);break e}else{if(!(t&1)){Fh(s,h,t),Ic();break e}c=Error(D(426))}}else if(re&&u.mode&1){var x=bh(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),zh(x,a,u,s,t),rc(zr(c,u));break e}}s=c=zr(c,u),pe!==4&&(pe=2),Li===null?Li=[s]:Li.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var I=$g(s,c,t);Lh(s,I);break e;case 1:u=c;var y=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(_n===null||!_n.has(T)))){s.flags|=65536,t&=-t,s.lanes|=t;var L=Bg(s,u,t);Lh(s,L);break e}}s=s.return}while(s!==null)}am(n)}catch(U){t=U,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function sm(){var e=Lo.current;return Lo.current=Oo,e===null?Oo:e}function Ic(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||!(qn&268435455)&&!(ia&268435455)||an(ve,_e)}function Mo(e,t){var n=G;G|=2;var r=sm();(ve!==e||_e!==t)&&(Ut=null,Bn(e,t));do try{Hw();break}catch(i){im(e,i)}while(!0);if(sc(),G=n,Lo.current=r,he!==null)throw Error(D(261));return ve=null,_e=0,pe}function Hw(){for(;he!==null;)om(he)}function Ww(){for(;he!==null&&!m0();)om(he)}function om(e){var t=um(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?am(e):he=t,yc.current=null}function am(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fw(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,he=null;return}}else if(n=jw(n,t,We),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);pe===0&&(pe=5)}function Un(e,t,n){var r=X,i=it.transition;try{it.transition=null,X=1,Kw(e,t,n,r)}finally{it.transition=i,X=r}return null}function Kw(e,t,n,r){do Nr();while(fn!==null);if(G&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(C0(e,s),e===ve&&(he=ve=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ws||(Ws=!0,cm(mo,function(){return Nr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var a=X;X=1;var u=G;G|=4,yc.current=null,zw(e,n),tm(n,e),hw(Jl),yo=!!Yl,Jl=Yl=null,e.current=n,$w(n),v0(),G=u,X=a,it.transition=s}else e.current=n;if(Ws&&(Ws=!1,fn=e,Do=i),s=e.pendingLanes,s===0&&(_n=null),_0(n.stateNode),Ve(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xo)throw xo=!1,e=yu,yu=null,e;return Do&1&&e.tag!==0&&Nr(),s=e.pendingLanes,s&1?e===wu?xi++:(xi=0,wu=e):xi=0,Rn(),null}function Nr(){if(fn!==null){var e=$p(Do),t=it.transition,n=X;try{if(it.transition=null,X=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,Do=0,G&6)throw Error(D(331));var i=G;for(G|=4,$=e.current;$!==null;){var s=$,a=s.child;if($.flags&16){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var h=u[c];for($=h;$!==null;){var _=$;switch(_.tag){case 0:case 11:case 15:Oi(8,_,s)}var m=_.child;if(m!==null)m.return=_,$=m;else for(;$!==null;){_=$;var S=_.sibling,N=_.return;if(Jg(_),_===h){$=null;break}if(S!==null){S.return=N,$=S;break}$=N}}}var R=s.alternate;if(R!==null){var O=R.child;if(O!==null){R.child=null;do{var x=O.sibling;O.sibling=null,O=x}while(O!==null)}}$=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,$=a;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var y=e.current;for($=y;$!==null;){a=$;var T=a.child;if(a.subtreeFlags&2064&&T!==null)T.return=a,$=T;else e:for(a=y;$!==null;){if(u=$,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ra(9,u)}}catch(U){le(u,u.return,U)}if(u===a){$=null;break e}var L=u.sibling;if(L!==null){L.return=u.return,$=L;break e}$=u.return}}if(G=i,Rn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Qo,e)}catch{}r=!0}return r}finally{X=n,it.transition=t}}return!1}function Zh(e,t,n){t=zr(n,t),t=$g(e,t,1),e=wn(e,t,1),t=Ue(),e!==null&&(ss(e,1,t),Ve(e,t))}function le(e,t,n){if(e.tag===3)Zh(e,e,n);else for(;t!==null;){if(t.tag===3){Zh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=zr(n,e),e=Bg(t,e,1),t=wn(t,e,1),e=Ue(),t!==null&&(ss(t,1,e),Ve(t,e));break}}t=t.return}}function Gw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(_e&n)===n&&(pe===4||pe===3&&(_e&130023424)===_e&&500>de()-_c?Bn(e,0):wc|=n),Ve(e,t)}function lm(e,t){t===0&&(e.mode&1?(t=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):t=1);var n=Ue();e=Gt(e,t),e!==null&&(ss(e,t,n),Ve(e,n))}function qw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lm(e,n)}function Qw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),lm(e,n)}var um;um=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,Uw(e,t,n);ze=!!(e.flags&131072)}else ze=!1,re&&t.flags&1048576&&fg(t,ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var i=Ur(t,Oe.current);Rr(t,n),i=fc(null,t,r,e,i,n);var s=pc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(s=!0,Io(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lc(t),i.updater=na,t.stateNode=i,i._reactInternals=t,au(t,r,e,n),t=cu(null,t,r,!0,s,n)):(t.tag=0,re&&s&&tc(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yw(r),e=ct(r,e),i){case 0:t=uu(null,t,r,e,n);break e;case 1:t=Vh(null,t,r,e,n);break e;case 11:t=$h(null,t,r,e,n);break e;case 14:t=Bh(null,t,r,ct(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),uu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Vh(e,t,r,i,n);case 3:e:{if(Kg(t),e===null)throw Error(D(387));r=t.pendingProps,s=t.memoizedState,i=s.element,wg(e,t),Ao(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=zr(Error(D(423)),t),t=Hh(e,t,r,n,i);break e}else if(r!==i){i=zr(Error(D(424)),t),t=Hh(e,t,r,n,i);break e}else for(Ke=yn(t.stateNode.containerInfo.firstChild),qe=t,re=!0,ht=null,n=vg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){t=qt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return _g(t),e===null&&iu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Zl(r,i)?a=null:s!==null&&Zl(r,s)&&(t.flags|=32),Wg(e,t),Me(e,t,a,n),t.child;case 6:return e===null&&iu(t),null;case 13:return Gg(e,t,n);case 4:return uc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),$h(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Z(Co,r._currentValue),r._currentValue=a,s!==null)if(gt(s.value,a)){if(s.children===i.children&&!$e.current){t=qt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){a=s.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Vt(-1,n&-n),c.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var _=h.pending;_===null?c.next=c:(c.next=_.next,_.next=c),h.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),su(s.return,n,t),u.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(D(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),su(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=ot(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),Bh(e,t,r,i,n);case 15:return Vg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),ro(e,t),t.tag=1,Be(r)?(e=!0,Io(t)):e=!1,Rr(t,n),zg(t,r,i),au(t,r,i,n),cu(null,t,r,!0,e,n);case 19:return qg(e,t,n);case 22:return Hg(e,t,n)}throw Error(D(156,t.tag))};function cm(e,t){return jp(e,t)}function Xw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new Xw(e,t,n,r)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yw(e){if(typeof e=="function")return Tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vu)return 11;if(e===Hu)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Tc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fr:return Vn(n.children,i,s,t);case Bu:a=8,i|=8;break;case Ol:return e=rt(12,n,t,i|2),e.elementType=Ol,e.lanes=s,e;case Ll:return e=rt(13,n,t,i),e.elementType=Ll,e.lanes=s,e;case xl:return e=rt(19,n,t,i),e.elementType=xl,e.lanes=s,e;case _p:return sa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yp:a=10;break e;case wp:a=9;break e;case Vu:a=11;break e;case Hu:a=14;break e;case rn:a=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Vn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function sa(e,t,n,r){return e=rt(22,e,r,t),e.elementType=_p,e.lanes=n,e.stateNode={isHidden:!1},e}function gl(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xa(0),this.expirationTimes=Xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kc(e,t,n,r,i,s,a,u,c){return e=new Jw(e,t,n,u,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(s),e}function Zw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dm(e){if(!e)return Cn;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(Be(n))return dg(e,n,t)}return t}function hm(e,t,n,r,i,s,a,u,c){return e=kc(n,r,!0,e,i,s,a,u,c),e.context=dm(null),n=e.current,r=Ue(),i=En(n),s=Vt(r,i),s.callback=t??null,wn(n,s,i),e.current.lanes=i,ss(e,i,r),Ve(e,r),e}function oa(e,t,n,r){var i=t.current,s=Ue(),a=En(i);return n=dm(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(i,t,a),e!==null&&(pt(e,i,a,s),eo(e,i,a)),a}function Uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cc(e,t){ef(e,t),(e=e.alternate)&&ef(e,t)}function e_(){return null}var fm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pc(e){this._internalRoot=e}aa.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));oa(e,t,null,null)};aa.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){oa(null,e,null,null)}),t[Kt]=null}};function aa(e){this._internalRoot=e}aa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&Kp(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function la(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tf(){}function t_(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Uo(a);s.call(h)}}var a=hm(t,r,e,0,null,!1,!1,"",tf);return e._reactRootContainer=a,e[Kt]=a.current,Hi(e.nodeType===8?e.parentNode:e),Qn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var h=Uo(c);u.call(h)}}var c=kc(e,0,!1,null,null,!1,!1,"",tf);return e._reactRootContainer=c,e[Kt]=c.current,Hi(e.nodeType===8?e.parentNode:e),Qn(function(){oa(t,c,n,r)}),c}function ua(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var u=i;i=function(){var c=Uo(a);u.call(c)}}oa(t,a,e,i)}else a=t_(n,t,e,i,r);return Uo(a)}Bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ei(t.pendingLanes);n!==0&&(Gu(t,n|1),Ve(t,de()),!(G&6)&&($r=de()+500,Rn()))}break;case 13:Qn(function(){var r=Gt(e,1);if(r!==null){var i=Ue();pt(r,e,1,i)}}),Cc(e,1)}};qu=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=Ue();pt(t,e,134217728,n)}Cc(e,134217728)}};Vp=function(e){if(e.tag===13){var t=En(e),n=Gt(e,t);if(n!==null){var r=Ue();pt(n,e,t,r)}Cc(e,t)}};Hp=function(){return X};Wp=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Vl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zo(r);if(!i)throw Error(D(90));Sp(r),Ul(r,i)}}}break;case"textarea":Tp(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};Op=Ec;Lp=Qn;var n_={usingClientEntryPoint:!1,Events:[as,vr,Zo,Rp,Np,Ec]},yi={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r_={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mp(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||e_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{Qo=Ks.inject(r_),Tt=Ks}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(t))throw Error(D(200));return Zw(e,t,null,n)};Ye.createRoot=function(e,t){if(!Ac(e))throw Error(D(299));var n=!1,r="",i=fm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=kc(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,Hi(e.nodeType===8?e.parentNode:e),new Pc(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Mp(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Qn(e)};Ye.hydrate=function(e,t,n){if(!la(t))throw Error(D(200));return ua(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Ac(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=fm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=hm(t,null,e,1,n??null,i,!1,s,a),e[Kt]=t.current,Hi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new aa(t)};Ye.render=function(e,t,n){if(!la(t))throw Error(D(200));return ua(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!la(e))throw Error(D(40));return e._reactRootContainer?(Qn(function(){ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Ec;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!la(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return ua(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function pm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pm)}catch(e){console.error(e)}}pm(),pp.exports=Ye;var i_=pp.exports,gm,nf=i_;gm=nf.createRoot,nf.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}var pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pn||(pn={}));const rf="popstate";function s_(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:u}=r.location;return Su("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vm(i)}return a_(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function o_(){return Math.random().toString(36).substr(2,8)}function sf(e,t){return{usr:e.state,key:e.key,idx:t}}function Su(e,t,n,r){return n===void 0&&(n=null),Zi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Gr(t):t,{state:n,key:t&&t.key||r||o_()})}function vm(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function a_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,u=pn.Pop,c=null,h=_();h==null&&(h=0,a.replaceState(Zi({},a.state,{idx:h}),""));function _(){return(a.state||{idx:null}).idx}function m(){u=pn.Pop;let x=_(),I=x==null?null:x-h;h=x,c&&c({action:u,location:O.location,delta:I})}function S(x,I){u=pn.Push;let y=Su(O.location,x,I);h=_()+1;let T=sf(y,h),L=O.createHref(y);try{a.pushState(T,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(L)}s&&c&&c({action:u,location:O.location,delta:1})}function N(x,I){u=pn.Replace;let y=Su(O.location,x,I);h=_();let T=sf(y,h),L=O.createHref(y);a.replaceState(T,"",L),s&&c&&c({action:u,location:O.location,delta:0})}function R(x){let I=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof x=="string"?x:vm(x);return y=y.replace(/ $/,"%20"),ge(I,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,I)}let O={get action(){return u},get location(){return e(i,a)},listen(x){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(rf,m),c=x,()=>{i.removeEventListener(rf,m),c=null}},createHref(x){return t(i,x)},createURL:R,encodeLocation(x){let I=R(x);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:S,replace:N,go(x){return a.go(x)}};return O}var of;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(of||(of={}));function l_(e,t,n){return n===void 0&&(n="/"),u_(e,t,n,!1)}function u_(e,t,n,r){let i=typeof t=="string"?Gr(t):t,s=_m(i.pathname||"/",n);if(s==null)return null;let a=ym(e);c_(a);let u=null;for(let c=0;u==null&&c<a.length;++c){let h=E_(s);u=w_(a[c],h,r)}return u}function ym(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let h=Hn([r,c.relativePath]),_=n.concat(c);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),ym(s.children,t,_,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:v_(h,s.index),routesMeta:_})};return e.forEach((s,a)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))i(s,a);else for(let c of wm(s.path))i(s,a,c)}),t}function wm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=wm(r.join("/")),u=[];return u.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&u.push(...a),u.map(c=>e.startsWith("/")&&c===""?"/":c)}function c_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const d_=/^:[\w-]+$/,h_=3,f_=2,p_=1,g_=10,m_=-2,af=e=>e==="*";function v_(e,t){let n=e.split("/"),r=n.length;return n.some(af)&&(r+=m_),t&&(r+=f_),n.filter(i=>!af(i)).reduce((i,s)=>i+(d_.test(s)?h_:s===""?p_:g_),r)}function y_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function w_(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let u=0;u<r.length;++u){let c=r[u],h=u===r.length-1,_=s==="/"?t:t.slice(s.length)||"/",m=lf({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},_),S=c.route;if(!m&&h&&n&&!r[r.length-1].route.index&&(m=lf({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},_)),!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:Hn([s,m.pathname]),pathnameBase:P_(Hn([s,m.pathnameBase])),route:S}),m.pathnameBase!=="/"&&(s=Hn([s,m.pathnameBase]))}return a}function lf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=__(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((h,_,m)=>{let{paramName:S,isOptional:N}=_;if(S==="*"){let O=u[m]||"";a=s.slice(0,s.length-O.length).replace(/(.)\/+$/,"$1")}const R=u[m];return N&&!R?h[S]=void 0:h[S]=(R||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:e}}function __(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,c)=>(r.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function E_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _m(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function S_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Gr(e):e;return{pathname:n?n.startsWith("/")?n:I_(n,t):t,search:A_(r),hash:R_(i)}}function I_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function k_(e,t){let n=T_(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function C_(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Gr(e):(i=Zi({},e),ge(!i.pathname||!i.pathname.includes("?"),vl("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),vl("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),vl("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,u;if(a==null)u=n;else{let m=t.length-1;if(!r&&a.startsWith("..")){let S=a.split("/");for(;S[0]==="..";)S.shift(),m-=1;i.pathname=S.join("/")}u=m>=0?t[m]:"/"}let c=S_(i,u),h=a&&a!=="/"&&a.endsWith("/"),_=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(h||_)&&(c.pathname+="/"),c}const Hn=e=>e.join("/").replace(/\/\/+/g,"/"),P_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,R_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function N_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Em=["post","put","patch","delete"];new Set(Em);const O_=["get",...Em];new Set(O_);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}const Rc=z.createContext(null),L_=z.createContext(null),ca=z.createContext(null),da=z.createContext(null),qr=z.createContext({outlet:null,matches:[],isDataRoute:!1}),Sm=z.createContext(null);function ha(){return z.useContext(da)!=null}function Im(){return ha()||ge(!1),z.useContext(da).location}function Tm(e){z.useContext(ca).static||z.useLayoutEffect(e)}function x_(){let{isDataRoute:e}=z.useContext(qr);return e?K_():D_()}function D_(){ha()||ge(!1);let e=z.useContext(Rc),{basename:t,future:n,navigator:r}=z.useContext(ca),{matches:i}=z.useContext(qr),{pathname:s}=Im(),a=JSON.stringify(k_(i,n.v7_relativeSplatPath)),u=z.useRef(!1);return Tm(()=>{u.current=!0}),z.useCallback(function(h,_){if(_===void 0&&(_={}),!u.current)return;if(typeof h=="number"){r.go(h);return}let m=C_(h,JSON.parse(a),s,_.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Hn([t,m.pathname])),(_.replace?r.replace:r.push)(m,_.state,_)},[t,r,a,s,e])}function M_(e,t){return U_(e,t)}function U_(e,t,n,r){ha()||ge(!1);let{navigator:i}=z.useContext(ca),{matches:s}=z.useContext(qr),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let h=Im(),_;if(t){var m;let x=typeof t=="string"?Gr(t):t;c==="/"||(m=x.pathname)!=null&&m.startsWith(c)||ge(!1),_=x}else _=h;let S=_.pathname||"/",N=S;if(c!=="/"){let x=c.replace(/^\//,"").split("/");N="/"+S.replace(/^\//,"").split("/").slice(x.length).join("/")}let R=l_(e,{pathname:N}),O=$_(R&&R.map(x=>Object.assign({},x,{params:Object.assign({},u,x.params),pathname:Hn([c,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:Hn([c,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return t&&O?z.createElement(da.Provider,{value:{location:es({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:pn.Pop}},O):O}function j_(){let e=W_(),t=N_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:i},n):null,null)}const F_=z.createElement(j_,null);class b_ extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?z.createElement(qr.Provider,{value:this.props.routeContext},z.createElement(Sm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z_(e){let{routeContext:t,match:n,children:r}=e,i=z.useContext(Rc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(qr.Provider,{value:t},r)}function $_(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,u=(i=n)==null?void 0:i.errors;if(u!=null){let _=a.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);_>=0||ge(!1),a=a.slice(0,Math.min(a.length,_+1))}let c=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let _=0;_<a.length;_++){let m=a[_];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=_),m.route.id){let{loaderData:S,errors:N}=n,R=m.route.loader&&S[m.route.id]===void 0&&(!N||N[m.route.id]===void 0);if(m.route.lazy||R){c=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((_,m,S)=>{let N,R=!1,O=null,x=null;n&&(N=u&&m.route.id?u[m.route.id]:void 0,O=m.route.errorElement||F_,c&&(h<0&&S===0?(R=!0,x=null):h===S&&(R=!0,x=m.route.hydrateFallbackElement||null)));let I=t.concat(a.slice(0,S+1)),y=()=>{let T;return N?T=O:R?T=x:m.route.Component?T=z.createElement(m.route.Component,null):m.route.element?T=m.route.element:T=_,z.createElement(z_,{match:m,routeContext:{outlet:_,matches:I,isDataRoute:n!=null},children:T})};return n&&(m.route.ErrorBoundary||m.route.errorElement||S===0)?z.createElement(b_,{location:n.location,revalidation:n.revalidation,component:O,error:N,children:y(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):y()},null)}var km=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(km||{}),jo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(jo||{});function B_(e){let t=z.useContext(Rc);return t||ge(!1),t}function V_(e){let t=z.useContext(L_);return t||ge(!1),t}function H_(e){let t=z.useContext(qr);return t||ge(!1),t}function Cm(e){let t=H_(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function W_(){var e;let t=z.useContext(Sm),n=V_(jo.UseRouteError),r=Cm(jo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function K_(){let{router:e}=B_(km.UseNavigateStable),t=Cm(jo.UseNavigateStable),n=z.useRef(!1);return Tm(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,es({fromRouteId:t},s)))},[e,t])}function ao(e){ge(!1)}function G_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=pn.Pop,navigator:s,static:a=!1,future:u}=e;ha()&&ge(!1);let c=t.replace(/^\/*/,"/"),h=z.useMemo(()=>({basename:c,navigator:s,static:a,future:es({v7_relativeSplatPath:!1},u)}),[c,u,s,a]);typeof r=="string"&&(r=Gr(r));let{pathname:_="/",search:m="",hash:S="",state:N=null,key:R="default"}=r,O=z.useMemo(()=>{let x=_m(_,c);return x==null?null:{location:{pathname:x,search:m,hash:S,state:N,key:R},navigationType:i}},[c,_,m,S,N,R,i]);return O==null?null:z.createElement(ca.Provider,{value:h},z.createElement(da.Provider,{children:n,value:O}))}function q_(e){let{children:t,location:n}=e;return M_(Iu(t),n)}new Promise(()=>{});function Iu(e,t){t===void 0&&(t=[]);let n=[];return z.Children.forEach(e,(r,i)=>{if(!z.isValidElement(r))return;let s=[...t,i];if(r.type===z.Fragment){n.push.apply(n,Iu(r.props.children,s));return}r.type!==ao&&ge(!1),!r.props.index||!r.props.children||ge(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Iu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Q_="6";try{window.__reactRouterVersion=Q_}catch{}const X_="startTransition",uf=Gy[X_];function Y_(e){let{basename:t,children:n,future:r,window:i}=e,s=z.useRef();s.current==null&&(s.current=s_({window:i,v5Compat:!0}));let a=s.current,[u,c]=z.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},_=z.useCallback(m=>{h&&uf?uf(()=>c(m)):c(m)},[c,h]);return z.useLayoutEffect(()=>a.listen(_),[a,_]),z.createElement(G_,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:a,future:r})}var cf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(cf||(cf={}));var df;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(df||(df={}));const J_="_navbar_1h37t_1",Z_="_brand_1h37t_9",e1="_links_list_1h37t_18",t1="_active_1h37t_27",n1="_logout_1h37t_31",yl={navbar:J_,brand:Z_,links_list:e1,active:t1,logout:n1},r1=()=>j.jsx(j.Fragment,{children:j.jsxs("nav",{className:yl.navbar,children:[j.jsxs("div",{className:yl.brand,children:["Nomade ",j.jsx("span",{children:"DEV"})]}),j.jsxs("ul",{className:yl.links_list,children:[j.jsx("li",{children:j.jsx("a",{href:"Home",children:"Home"})}),j.jsx("li",{children:j.jsx("a",{href:"Login",children:"Login"})}),j.jsx("li",{children:j.jsx("a",{href:"Register",children:"Register"})}),j.jsx("li",{children:j.jsx("a",{href:"#",children:"New Post"})}),j.jsx("li",{children:j.jsx("a",{href:"#",children:"Dashboard"})}),j.jsx("li",{children:j.jsx("a",{href:"#",children:"About"})}),j.jsx("li",{children:j.jsx("a",{href:"#",children:"Exit"})})]})]})}),i1="_footer_7hztp_1",s1={footer:i1},o1=()=>j.jsx(j.Fragment,{children:j.jsxs("footer",{className:s1.footer,children:[j.jsx("h3",{children:"Plataforma para desenvolvedores que tem o espírito livre!"}),j.jsx("p",{children:"Nomade Developers © 2024"})]})}),a1="_login_ftsr9_1",l1={login:a1};var hf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},u1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],u=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Am={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,u=a?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,_=s>>2,m=(s&3)<<4|u>>4;let S=(u&15)<<2|h>>6,N=h&63;c||(N=64,a||(S=64)),r.push(n[_],n[m],n[S],n[N])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):u1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],u=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||u==null||h==null||m==null)throw new c1;const S=s<<2|u>>4;if(r.push(S),h!==64){const N=u<<4&240|h>>2;if(r.push(N),m!==64){const R=h<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class c1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d1=function(e){const t=Pm(e);return Am.encodeByteArray(t,!0)},Fo=function(e){return d1(e).replace(/\./g,"")},Rm=function(e){try{return Am.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=()=>h1().__FIREBASE_DEFAULTS__,p1=()=>{if(typeof process>"u"||typeof hf>"u")return;const e=hf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},g1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Rm(e[1]);return t&&JSON.parse(t)},Nc=()=>{try{return f1()||p1()||g1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Nm=e=>{var t,n;return(n=(t=Nc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},m1=e=>{const t=Nm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Om=()=>{var e;return(e=Nc())===null||e===void 0?void 0:e.config},Lm=e=>{var t;return(t=Nc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Fo(JSON.stringify(n)),Fo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function xm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function _1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E1(){const e=Le();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Dm(){try{return typeof indexedDB=="object"}catch{return!1}}function Mm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function S1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="FirebaseError";class yt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=I1,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?T1(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new yt(i,u,r)}}function T1(e,t){return e.replace(k1,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const k1=/\{\$([^}]+)}/g;function C1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ts(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(ff(s)&&ff(a)){if(!ts(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ff(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ii(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Ti(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function P1(e,t){const n=new A1(e,t);return n.subscribe.bind(n)}class A1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");R1(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=wl),i.error===void 0&&(i.error=wl),i.complete===void 0&&(i.complete=wl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function wl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=1e3,O1=2,L1=4*60*60*1e3,x1=.5;function pf(e,t=N1,n=O1){const r=t*Math.pow(n,e),i=Math.round(x1*r*(Math.random()-.5)*2);return Math.min(L1,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e){return e&&e._delegate?e._delegate:e}class mt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new v1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(U1(t))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=jn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=jn){return this.instances.has(t)}getOptions(t=jn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=jn){return this.component?this.component.multipleInstances?t:jn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M1(e){return e===jn?void 0:e}function U1(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new D1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Q||(Q={}));const F1={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},b1=Q.INFO,z1={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},$1=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=z1[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fa{constructor(t){this.name=t,this._logLevel=b1,this._logHandler=$1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?F1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const B1=(e,t)=>t.some(n=>e instanceof n);let gf,mf;function V1(){return gf||(gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H1(){return mf||(mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Um=new WeakMap,Tu=new WeakMap,jm=new WeakMap,_l=new WeakMap,Oc=new WeakMap;function W1(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(In(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Um.set(n,e)}).catch(()=>{}),Oc.set(t,e),t}function K1(e){if(Tu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Tu.set(e,t)}let ku={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Tu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function G1(e){ku=e(ku)}function q1(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(El(this),t,...n);return jm.set(r,t.sort?t.sort():[t]),In(r)}:H1().includes(e)?function(...t){return e.apply(El(this),t),In(Um.get(this))}:function(...t){return In(e.apply(El(this),t))}}function Q1(e){return typeof e=="function"?q1(e):(e instanceof IDBTransaction&&K1(e),B1(e,V1())?new Proxy(e,ku):e)}function In(e){if(e instanceof IDBRequest)return W1(e);if(_l.has(e))return _l.get(e);const t=Q1(e);return t!==e&&(_l.set(e,t),Oc.set(t,e)),t}const El=e=>Oc.get(e);function Fm(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),u=In(a);return r&&a.addEventListener("upgradeneeded",c=>{r(In(a.result),c.oldVersion,c.newVersion,In(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const X1=["get","getKey","getAll","getAllKeys","count"],Y1=["put","add","delete","clear"],Sl=new Map;function vf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Sl.get(t))return Sl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Y1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||X1.includes(n)))return;const s=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(u.shift())),(await Promise.all([h[n](...u),i&&c.done]))[0]};return Sl.set(t,s),s}G1(e=>({...e,get:(t,n,r)=>vf(t,n)||e.get(t,n,r),has:(t,n)=>!!vf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Z1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Z1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Cu="@firebase/app",yf="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new fa("@firebase/app"),eE="@firebase/app-compat",tE="@firebase/analytics-compat",nE="@firebase/analytics",rE="@firebase/app-check-compat",iE="@firebase/app-check",sE="@firebase/auth",oE="@firebase/auth-compat",aE="@firebase/database",lE="@firebase/database-compat",uE="@firebase/functions",cE="@firebase/functions-compat",dE="@firebase/installations",hE="@firebase/installations-compat",fE="@firebase/messaging",pE="@firebase/messaging-compat",gE="@firebase/performance",mE="@firebase/performance-compat",vE="@firebase/remote-config",yE="@firebase/remote-config-compat",wE="@firebase/storage",_E="@firebase/storage-compat",EE="@firebase/firestore",SE="@firebase/vertexai-preview",IE="@firebase/firestore-compat",TE="firebase",kE="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="[DEFAULT]",CE={[Cu]:"fire-core",[eE]:"fire-core-compat",[nE]:"fire-analytics",[tE]:"fire-analytics-compat",[iE]:"fire-app-check",[rE]:"fire-app-check-compat",[sE]:"fire-auth",[oE]:"fire-auth-compat",[aE]:"fire-rtdb",[lE]:"fire-rtdb-compat",[uE]:"fire-fn",[cE]:"fire-fn-compat",[dE]:"fire-iid",[hE]:"fire-iid-compat",[fE]:"fire-fcm",[pE]:"fire-fcm-compat",[gE]:"fire-perf",[mE]:"fire-perf-compat",[vE]:"fire-rc",[yE]:"fire-rc-compat",[wE]:"fire-gcs",[_E]:"fire-gcs-compat",[EE]:"fire-fst",[IE]:"fire-fst-compat",[SE]:"fire-vertex","fire-js":"fire-js",[TE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map,PE=new Map,Au=new Map;function wf(e,t){try{e.container.addComponent(t)}catch(n){Xn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function At(e){const t=e.name;if(Au.has(t))return Xn.debug(`There were multiple attempts to register component ${t}.`),!1;Au.set(t,e);for(const n of bo.values())wf(n,e);for(const n of PE.values())wf(n,e);return!0}function ir(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function It(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new rr("app","Firebase",AE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=kE;function bm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Tn.create("bad-app-name",{appName:String(i)});if(n||(n=Om()),!n)throw Tn.create("no-options");const s=bo.get(i);if(s){if(ts(n,s.options)&&ts(r,s.config))return s;throw Tn.create("duplicate-app",{appName:i})}const a=new j1(i);for(const c of Au.values())a.addComponent(c);const u=new RE(n,r,a);return bo.set(i,u),u}function Lc(e=Pu){const t=bo.get(e);if(!t&&e===Pu&&Om())return bm();if(!t)throw Tn.create("no-app",{appName:e});return t}function st(e,t,n){var r;let i=(r=CE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${t}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xn.warn(u.join(" "));return}At(new mt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="firebase-heartbeat-database",OE=1,ns="firebase-heartbeat-store";let Il=null;function zm(){return Il||(Il=Fm(NE,OE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ns)}catch(n){console.warn(n)}}}}).catch(e=>{throw Tn.create("idb-open",{originalErrorMessage:e.message})})),Il}async function LE(e){try{const n=(await zm()).transaction(ns),r=await n.objectStore(ns).get($m(e));return await n.done,r}catch(t){if(t instanceof yt)Xn.warn(t.message);else{const n=Tn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Xn.warn(n.message)}}}async function _f(e,t){try{const r=(await zm()).transaction(ns,"readwrite");await r.objectStore(ns).put(t,$m(e)),await r.done}catch(n){if(n instanceof yt)Xn.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function $m(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=1024,DE=30*24*60*60*1e3;class ME{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ef();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=DE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ef(),{heartbeatsToSend:r,unsentEntries:i}=UE(this._heartbeatsCache.heartbeats),s=Fo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ef(){return new Date().toISOString().substring(0,10)}function UE(e,t=xE){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Sf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dm()?Mm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _f(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _f(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Sf(e){return Fo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e){At(new mt("platform-logger",t=>new J1(t),"PRIVATE")),At(new mt("heartbeat",t=>new ME(t),"PRIVATE")),st(Cu,yf,e),st(Cu,yf,"esm2017"),st("fire-js","")}FE("");var bE="firebase",zE="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st(bE,zE,"app");const Bm="@firebase/installations",xc="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=1e4,Hm=`w:${xc}`,Wm="FIS_v2",$E="https://firebaseinstallations.googleapis.com/v1",BE=60*60*1e3,VE="installations",HE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yn=new rr(VE,HE,WE);function Km(e){return e instanceof yt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm({projectId:e}){return`${$E}/projects/${e}/installations`}function qm(e){return{token:e.token,requestStatus:2,expiresIn:GE(e.expiresIn),creationTime:Date.now()}}async function Qm(e,t){const r=(await t.json()).error;return Yn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Xm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function KE(e,{refreshToken:t}){const n=Xm(e);return n.append("Authorization",qE(t)),n}async function Ym(e){const t=await e();return t.status>=500&&t.status<600?e():t}function GE(e){return Number(e.replace("s","000"))}function qE(e){return`${Wm} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Gm(e),i=Xm(e),s=t.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:Wm,appId:e.appId,sdkVersion:Hm},u={method:"POST",headers:i,body:JSON.stringify(a)},c=await Ym(()=>fetch(r,u));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:qm(h.authToken)}}else throw await Qm("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=/^[cdef][\w-]{21}$/,Ru="";function JE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ZE(e);return YE.test(n)?n:Ru}catch{return Ru}}function ZE(e){return XE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new Map;function ev(e,t){const n=pa(e);tv(n,t),eS(n,t)}function tv(e,t){const n=Zm.get(e);if(n)for(const r of n)r(t)}function eS(e,t){const n=tS();n&&n.postMessage({key:e,fid:t}),nS()}let $n=null;function tS(){return!$n&&"BroadcastChannel"in self&&($n=new BroadcastChannel("[Firebase] FID Change"),$n.onmessage=e=>{tv(e.data.key,e.data.fid)}),$n}function nS(){Zm.size===0&&$n&&($n.close(),$n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="firebase-installations-database",iS=1,Jn="firebase-installations-store";let Tl=null;function Dc(){return Tl||(Tl=Fm(rS,iS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Jn)}}})),Tl}async function zo(e,t){const n=pa(e),i=(await Dc()).transaction(Jn,"readwrite"),s=i.objectStore(Jn),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&ev(e,t.fid),t}async function nv(e){const t=pa(e),r=(await Dc()).transaction(Jn,"readwrite");await r.objectStore(Jn).delete(t),await r.done}async function ga(e,t){const n=pa(e),i=(await Dc()).transaction(Jn,"readwrite"),s=i.objectStore(Jn),a=await s.get(n),u=t(a);return u===void 0?await s.delete(n):await s.put(u,n),await i.done,u&&(!a||a.fid!==u.fid)&&ev(e,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(e){let t;const n=await ga(e.appConfig,r=>{const i=sS(r),s=oS(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Ru?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function sS(e){const t=e||{fid:JE(),registrationStatus:0};return rv(t)}function oS(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Yn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=aS(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:lS(e)}:{installationEntry:t}}async function aS(e,t){try{const n=await QE(e,t);return zo(e.appConfig,n)}catch(n){throw Km(n)&&n.customData.serverCode===409?await nv(e.appConfig):await zo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function lS(e){let t=await If(e.appConfig);for(;t.registrationStatus===1;)await Jm(100),t=await If(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Mc(e);return r||n}return t}function If(e){return ga(e,t=>{if(!t)throw Yn.create("installation-not-found");return rv(t)})}function rv(e){return uS(e)?{fid:e.fid,registrationStatus:0}:e}function uS(e){return e.registrationStatus===1&&e.registrationTime+Vm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS({appConfig:e,heartbeatServiceProvider:t},n){const r=dS(e,n),i=KE(e,n),s=t.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:Hm,appId:e.appId}},u={method:"POST",headers:i,body:JSON.stringify(a)},c=await Ym(()=>fetch(r,u));if(c.ok){const h=await c.json();return qm(h)}else throw await Qm("Generate Auth Token",c)}function dS(e,{fid:t}){return`${Gm(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(e,t=!1){let n;const r=await ga(e.appConfig,s=>{if(!iv(s))throw Yn.create("not-registered");const a=s.authToken;if(!t&&pS(a))return s;if(a.requestStatus===1)return n=hS(e,t),s;{if(!navigator.onLine)throw Yn.create("app-offline");const u=mS(s);return n=fS(e,u),u}});return n?await n:r.authToken}async function hS(e,t){let n=await Tf(e.appConfig);for(;n.authToken.requestStatus===1;)await Jm(100),n=await Tf(e.appConfig);const r=n.authToken;return r.requestStatus===0?Uc(e,t):r}function Tf(e){return ga(e,t=>{if(!iv(t))throw Yn.create("not-registered");const n=t.authToken;return vS(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function fS(e,t){try{const n=await cS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await zo(e.appConfig,r),n}catch(n){if(Km(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await zo(e.appConfig,r)}throw n}}function iv(e){return e!==void 0&&e.registrationStatus===2}function pS(e){return e.requestStatus===2&&!gS(e)}function gS(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+BE}function mS(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function vS(e){return e.requestStatus===1&&e.requestTime+Vm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(e){const t=e,{installationEntry:n,registrationPromise:r}=await Mc(t);return r?r.catch(console.error):Uc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(e,t=!1){const n=e;return await _S(n),(await Uc(n,t)).token}async function _S(e){const{registrationPromise:t}=await Mc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(e){if(!e||!e.options)throw kl("App Configuration");if(!e.name)throw kl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw kl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function kl(e){return Yn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="installations",SS="installations-internal",IS=e=>{const t=e.getProvider("app").getImmediate(),n=ES(t),r=ir(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TS=e=>{const t=e.getProvider("app").getImmediate(),n=ir(t,sv).getImmediate();return{getId:()=>yS(n),getToken:i=>wS(n,i)}};function kS(){At(new mt(sv,IS,"PUBLIC")),At(new mt(SS,TS,"PRIVATE"))}kS();st(Bm,xc);st(Bm,xc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="analytics",CS="firebase_id",PS="origin",AS=60*1e3,RS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new fa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new rr("analytics","Analytics",NS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(e){if(!e.startsWith(jc)){const t=Qe.create("invalid-gtag-resource",{gtagURL:e});return He.warn(t.message),""}return e}function ov(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function LS(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function xS(e,t){const n=LS("firebase-js-sdk-policy",{createScriptURL:OS}),r=document.createElement("script"),i=`${jc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function DS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function MS(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const c=(await ov(n)).find(h=>h.measurementId===i);c&&await t[c.appId]}}catch(u){He.error(u)}e("config",i,s)}async function US(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const u=await ov(n);for(const c of a){const h=u.find(m=>m.measurementId===c),_=h&&t[h.appId];if(_)s.push(_);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){He.error(s)}}function jS(e,t,n,r){async function i(s,...a){try{if(s==="event"){const[u,c]=a;await US(e,t,n,u,c)}else if(s==="config"){const[u,c]=a;await MS(e,t,n,r,u,c)}else if(s==="consent"){const[u,c]=a;e("consent",u,c)}else if(s==="get"){const[u,c,h]=a;e("get",u,c,h)}else if(s==="set"){const[u]=a;e("set",u)}else e(s,...a)}catch(u){He.error(u)}}return i}function FS(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=jS(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function bS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(jc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=30,$S=1e3;class BS{constructor(t={},n=$S){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const av=new BS;function VS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function HS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:VS(r)},s=RS.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let u="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(u=c.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function WS(e,t=av,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Qe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Qe.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new qS;return setTimeout(async()=>{u.abort()},AS),lv({appId:r,apiKey:i,measurementId:s},a,u,t)}async function lv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=av){var s;const{appId:a,measurementId:u}=e;try{await KS(r,t)}catch(c){if(u)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:u};throw c}try{const c=await HS(e);return i.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!GS(h)){if(i.deleteThrottleMetadata(a),u)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw c}const _=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?pf(n,i.intervalMillis,zS):pf(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+_,backoffCount:n+1};return i.setThrottleMetadata(a,m),He.debug(`Calling attemptFetch again in ${_} millis`),lv(e,m,r,i)}}function KS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Qe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function GS(e){if(!(e instanceof yt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class qS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function QS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(){if(Dm())try{await Mm()}catch(e){return He.warn(Qe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return He.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YS(e,t,n,r,i,s,a){var u;const c=WS(e);c.then(N=>{n[N.measurementId]=N.appId,e.options.measurementId&&N.measurementId!==e.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>He.error(N)),t.push(c);const h=XS().then(N=>{if(N)return r.getId()}),[_,m]=await Promise.all([c,h]);bS(s)||xS(s,_.measurementId),i("js",new Date);const S=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return S[PS]="firebase",S.update=!0,m!=null&&(S[CS]=m),i("config",_.measurementId,S),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(t){this.app=t}_delete(){return delete Di[this.app.options.appId],Promise.resolve()}}let Di={},kf=[];const Cf={};let Cl="dataLayer",ZS="gtag",Pf,uv,Af=!1;function eI(){const e=[];if(xm()&&e.push("This is a browser extension environment."),S1()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Qe.create("invalid-analytics-context",{errorInfo:t});He.warn(n.message)}}function tI(e,t,n){eI();const r=e.options.appId;if(!r)throw Qe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if(Di[r]!=null)throw Qe.create("already-exists",{id:r});if(!Af){DS(Cl);const{wrappedGtag:s,gtagCore:a}=FS(Di,kf,Cf,Cl,ZS);uv=s,Pf=a,Af=!0}return Di[r]=YS(e,kf,Cf,t,Pf,Cl,n),new JS(e)}function nI(e=Lc()){e=wt(e);const t=ir(e,$o);return t.isInitialized()?t.getImmediate():rI(e)}function rI(e,t={}){const n=ir(e,$o);if(n.isInitialized()){const i=n.getImmediate();if(ts(t,n.getOptions()))return i;throw Qe.create("already-initialized")}return n.initialize({options:t})}function iI(e,t,n,r){e=wt(e),QS(uv,Di[e.app.options.appId],t,n,r).catch(i=>He.error(i))}const Rf="@firebase/analytics",Nf="0.10.7";function sI(){At(new mt($o,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return tI(r,i,n)},"PUBLIC")),At(new mt("analytics-internal",e,"PRIVATE")),st(Rf,Nf),st(Rf,Nf,"esm2017");function e(t){try{const n=t.getProvider($o).getImmediate();return{logEvent:(r,i,s)=>iI(n,r,i,s)}}catch(n){throw Qe.create("interop-component-reg-failed",{reason:n})}}}sI();var Of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cv;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(E,k,P){for(var w=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)w[Ze-2]=arguments[Ze];return p.prototype[k].apply(E,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,g){g||(g=0);var E=Array(16);if(typeof p=="string")for(var k=0;16>k;++k)E[k]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(k=0;16>k;++k)E[k]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],k=v.g[2];var P=v.g[3],w=p+(P^g&(k^P))+E[0]+3614090360&4294967295;p=g+(w<<7&4294967295|w>>>25),w=P+(k^p&(g^k))+E[1]+3905402710&4294967295,P=p+(w<<12&4294967295|w>>>20),w=k+(g^P&(p^g))+E[2]+606105819&4294967295,k=P+(w<<17&4294967295|w>>>15),w=g+(p^k&(P^p))+E[3]+3250441966&4294967295,g=k+(w<<22&4294967295|w>>>10),w=p+(P^g&(k^P))+E[4]+4118548399&4294967295,p=g+(w<<7&4294967295|w>>>25),w=P+(k^p&(g^k))+E[5]+1200080426&4294967295,P=p+(w<<12&4294967295|w>>>20),w=k+(g^P&(p^g))+E[6]+2821735955&4294967295,k=P+(w<<17&4294967295|w>>>15),w=g+(p^k&(P^p))+E[7]+4249261313&4294967295,g=k+(w<<22&4294967295|w>>>10),w=p+(P^g&(k^P))+E[8]+1770035416&4294967295,p=g+(w<<7&4294967295|w>>>25),w=P+(k^p&(g^k))+E[9]+2336552879&4294967295,P=p+(w<<12&4294967295|w>>>20),w=k+(g^P&(p^g))+E[10]+4294925233&4294967295,k=P+(w<<17&4294967295|w>>>15),w=g+(p^k&(P^p))+E[11]+2304563134&4294967295,g=k+(w<<22&4294967295|w>>>10),w=p+(P^g&(k^P))+E[12]+1804603682&4294967295,p=g+(w<<7&4294967295|w>>>25),w=P+(k^p&(g^k))+E[13]+4254626195&4294967295,P=p+(w<<12&4294967295|w>>>20),w=k+(g^P&(p^g))+E[14]+2792965006&4294967295,k=P+(w<<17&4294967295|w>>>15),w=g+(p^k&(P^p))+E[15]+1236535329&4294967295,g=k+(w<<22&4294967295|w>>>10),w=p+(k^P&(g^k))+E[1]+4129170786&4294967295,p=g+(w<<5&4294967295|w>>>27),w=P+(g^k&(p^g))+E[6]+3225465664&4294967295,P=p+(w<<9&4294967295|w>>>23),w=k+(p^g&(P^p))+E[11]+643717713&4294967295,k=P+(w<<14&4294967295|w>>>18),w=g+(P^p&(k^P))+E[0]+3921069994&4294967295,g=k+(w<<20&4294967295|w>>>12),w=p+(k^P&(g^k))+E[5]+3593408605&4294967295,p=g+(w<<5&4294967295|w>>>27),w=P+(g^k&(p^g))+E[10]+38016083&4294967295,P=p+(w<<9&4294967295|w>>>23),w=k+(p^g&(P^p))+E[15]+3634488961&4294967295,k=P+(w<<14&4294967295|w>>>18),w=g+(P^p&(k^P))+E[4]+3889429448&4294967295,g=k+(w<<20&4294967295|w>>>12),w=p+(k^P&(g^k))+E[9]+568446438&4294967295,p=g+(w<<5&4294967295|w>>>27),w=P+(g^k&(p^g))+E[14]+3275163606&4294967295,P=p+(w<<9&4294967295|w>>>23),w=k+(p^g&(P^p))+E[3]+4107603335&4294967295,k=P+(w<<14&4294967295|w>>>18),w=g+(P^p&(k^P))+E[8]+1163531501&4294967295,g=k+(w<<20&4294967295|w>>>12),w=p+(k^P&(g^k))+E[13]+2850285829&4294967295,p=g+(w<<5&4294967295|w>>>27),w=P+(g^k&(p^g))+E[2]+4243563512&4294967295,P=p+(w<<9&4294967295|w>>>23),w=k+(p^g&(P^p))+E[7]+1735328473&4294967295,k=P+(w<<14&4294967295|w>>>18),w=g+(P^p&(k^P))+E[12]+2368359562&4294967295,g=k+(w<<20&4294967295|w>>>12),w=p+(g^k^P)+E[5]+4294588738&4294967295,p=g+(w<<4&4294967295|w>>>28),w=P+(p^g^k)+E[8]+2272392833&4294967295,P=p+(w<<11&4294967295|w>>>21),w=k+(P^p^g)+E[11]+1839030562&4294967295,k=P+(w<<16&4294967295|w>>>16),w=g+(k^P^p)+E[14]+4259657740&4294967295,g=k+(w<<23&4294967295|w>>>9),w=p+(g^k^P)+E[1]+2763975236&4294967295,p=g+(w<<4&4294967295|w>>>28),w=P+(p^g^k)+E[4]+1272893353&4294967295,P=p+(w<<11&4294967295|w>>>21),w=k+(P^p^g)+E[7]+4139469664&4294967295,k=P+(w<<16&4294967295|w>>>16),w=g+(k^P^p)+E[10]+3200236656&4294967295,g=k+(w<<23&4294967295|w>>>9),w=p+(g^k^P)+E[13]+681279174&4294967295,p=g+(w<<4&4294967295|w>>>28),w=P+(p^g^k)+E[0]+3936430074&4294967295,P=p+(w<<11&4294967295|w>>>21),w=k+(P^p^g)+E[3]+3572445317&4294967295,k=P+(w<<16&4294967295|w>>>16),w=g+(k^P^p)+E[6]+76029189&4294967295,g=k+(w<<23&4294967295|w>>>9),w=p+(g^k^P)+E[9]+3654602809&4294967295,p=g+(w<<4&4294967295|w>>>28),w=P+(p^g^k)+E[12]+3873151461&4294967295,P=p+(w<<11&4294967295|w>>>21),w=k+(P^p^g)+E[15]+530742520&4294967295,k=P+(w<<16&4294967295|w>>>16),w=g+(k^P^p)+E[2]+3299628645&4294967295,g=k+(w<<23&4294967295|w>>>9),w=p+(k^(g|~P))+E[0]+4096336452&4294967295,p=g+(w<<6&4294967295|w>>>26),w=P+(g^(p|~k))+E[7]+1126891415&4294967295,P=p+(w<<10&4294967295|w>>>22),w=k+(p^(P|~g))+E[14]+2878612391&4294967295,k=P+(w<<15&4294967295|w>>>17),w=g+(P^(k|~p))+E[5]+4237533241&4294967295,g=k+(w<<21&4294967295|w>>>11),w=p+(k^(g|~P))+E[12]+1700485571&4294967295,p=g+(w<<6&4294967295|w>>>26),w=P+(g^(p|~k))+E[3]+2399980690&4294967295,P=p+(w<<10&4294967295|w>>>22),w=k+(p^(P|~g))+E[10]+4293915773&4294967295,k=P+(w<<15&4294967295|w>>>17),w=g+(P^(k|~p))+E[1]+2240044497&4294967295,g=k+(w<<21&4294967295|w>>>11),w=p+(k^(g|~P))+E[8]+1873313359&4294967295,p=g+(w<<6&4294967295|w>>>26),w=P+(g^(p|~k))+E[15]+4264355552&4294967295,P=p+(w<<10&4294967295|w>>>22),w=k+(p^(P|~g))+E[6]+2734768916&4294967295,k=P+(w<<15&4294967295|w>>>17),w=g+(P^(k|~p))+E[13]+1309151649&4294967295,g=k+(w<<21&4294967295|w>>>11),w=p+(k^(g|~P))+E[4]+4149444226&4294967295,p=g+(w<<6&4294967295|w>>>26),w=P+(g^(p|~k))+E[11]+3174756917&4294967295,P=p+(w<<10&4294967295|w>>>22),w=k+(p^(P|~g))+E[2]+718787259&4294967295,k=P+(w<<15&4294967295|w>>>17),w=g+(P^(k|~p))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(k+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,E=this.B,k=this.h,P=0;P<p;){if(k==0)for(;P<=g;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<p;)if(E[k++]=v.charCodeAt(P++),k==this.blockSize){i(this,E),k=0;break}}else for(;P<p;)if(E[k++]=v[P++],k==this.blockSize){i(this,E),k=0;break}}this.h=k,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var E=0;32>E;E+=8)v[g++]=this.g[p]>>>E&255;return v};function s(v,p){var g=u;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function a(v,p){this.h=p;for(var g=[],E=!0,k=v.length-1;0<=k;k--){var P=v[k]|0;E&&P==p||(g[k]=P,E=!1)}this.g=g}var u={};function c(v){return-128<=v&&128>v?s(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return x(h(-v));for(var p=[],g=1,E=0;v>=g;E++)p[E]=v/g|0,g*=4294967296;return new a(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return x(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(p,8)),E=m,k=0;k<v.length;k+=8){var P=Math.min(8,v.length-k),w=parseInt(v.substring(k,k+P),p);8>P?(P=h(Math.pow(p,P)),E=E.j(P).add(h(w))):(E=E.j(g),E=E.add(h(w)))}return E}var m=c(0),S=c(1),N=c(16777216);e=a.prototype,e.m=function(){if(O(this))return-x(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var E=this.i(g);v+=(0<=E?E:4294967296+E)*p,p*=4294967296}return v},e.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(O(this))return"-"+x(this).toString(v);for(var p=h(Math.pow(v,6)),g=this,E="";;){var k=L(g,p).g;g=I(g,k.j(p));var P=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=k,R(g))return P+E;for(;6>P.length;)P="0"+P;E=P+E}},e.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function O(v){return v.h==-1}e.l=function(v){return v=I(this,v),O(v)?-1:R(v)?0:1};function x(v){for(var p=v.g.length,g=[],E=0;E<p;E++)g[E]=~v.g[E];return new a(g,~v.h).add(S)}e.abs=function(){return O(this)?x(this):this},e.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],E=0,k=0;k<=p;k++){var P=E+(this.i(k)&65535)+(v.i(k)&65535),w=(P>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);E=w>>>16,P&=65535,w&=65535,g[k]=w<<16|P}return new a(g,g[g.length-1]&-2147483648?-1:0)};function I(v,p){return v.add(x(p))}e.j=function(v){if(R(this)||R(v))return m;if(O(this))return O(v)?x(this).j(x(v)):x(x(this).j(v));if(O(v))return x(this.j(x(v)));if(0>this.l(N)&&0>v.l(N))return h(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],E=0;E<2*p;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var k=0;k<v.g.length;k++){var P=this.i(E)>>>16,w=this.i(E)&65535,Ze=v.i(k)>>>16,On=v.i(k)&65535;g[2*E+2*k]+=w*On,y(g,2*E+2*k),g[2*E+2*k+1]+=P*On,y(g,2*E+2*k+1),g[2*E+2*k+1]+=w*Ze,y(g,2*E+2*k+1),g[2*E+2*k+2]+=P*Ze,y(g,2*E+2*k+2)}for(E=0;E<p;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=p;E<2*p;E++)g[E]=0;return new a(g,0)};function y(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function T(v,p){this.g=v,this.h=p}function L(v,p){if(R(p))throw Error("division by zero");if(R(v))return new T(m,m);if(O(v))return p=L(x(v),p),new T(x(p.g),x(p.h));if(O(p))return p=L(v,x(p)),new T(x(p.g),p.h);if(30<v.g.length){if(O(v)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=S,E=p;0>=E.l(v);)g=U(g),E=U(E);var k=F(g,1),P=F(E,1);for(E=F(E,2),g=F(g,2);!R(E);){var w=P.add(E);0>=w.l(v)&&(k=k.add(g),P=w),E=F(E,1),g=F(g,1)}return p=I(v,k.j(p)),new T(k,p)}for(k=m;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),P=h(g),w=P.j(p);O(w)||0<w.l(v);)g-=E,P=h(g),w=P.j(p);R(P)&&(P=S),k=k.add(P),v=I(v,w)}return new T(k,v)}e.A=function(v){return L(this,v).h},e.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],E=0;E<p;E++)g[E]=this.i(E)&v.i(E);return new a(g,this.h&v.h)},e.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],E=0;E<p;E++)g[E]=this.i(E)|v.i(E);return new a(g,this.h|v.h)},e.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],E=0;E<p;E++)g[E]=this.i(E)^v.i(E);return new a(g,this.h^v.h)};function U(v){for(var p=v.g.length+1,g=[],E=0;E<p;E++)g[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(g,v.h)}function F(v,p){var g=p>>5;p%=32;for(var E=v.g.length-g,k=[],P=0;P<E;P++)k[P]=0<p?v.i(P+g)>>>p|v.i(P+g+1)<<32-p:v.i(P+g);return new a(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=_,cv=a}).apply(typeof Of<"u"?Of:typeof self<"u"?self:typeof window<"u"?window:{});var Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gs=="object"&&Gs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,l){if(l)e:{var d=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var C=o[f];if(!(C in d))break e;d=d[C]}o=o[o.length-1],f=d[o],l=l(f),l!=f&&l!=null&&t(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,f=!1,C={next:function(){if(!f&&d<o.length){var A=d++;return{value:l(A,o[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function _(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,f),o.apply(l,C)}}return function(){return o.apply(l,arguments)}}function S(o,l,d){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:m,S.apply(null,arguments)}function N(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function R(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(f,C,A){for(var M=Array(arguments.length-2),J=2;J<arguments.length;J++)M[J-2]=arguments[J];return l.prototype[C].apply(f,M)}}function O(o){const l=o.length;if(0<l){const d=Array(l);for(let f=0;f<l;f++)d[f]=o[f];return d}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(c(f)){const C=o.length||0,A=f.length||0;o.length=C+A;for(let M=0;M<A;M++)o[C+M]=f[M]}else o.push(f)}}class I{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function y(o){return/^[\s\xa0]*$/.test(o)}function T(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var U=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function F(o,l,d){for(const f in o)l.call(d,o[f],f,o)}function v(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function p(o){const l={};for(const d in o)l[d]=o[d];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let d,f;for(let C=1;C<arguments.length;C++){f=arguments[C];for(d in f)o[d]=f[d];for(let A=0;A<g.length;A++)d=g[A],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function k(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function P(o){u.setTimeout(()=>{throw o},0)}function w(){var o=V;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ze{constructor(){this.h=this.g=null}add(l,d){const f=On.get();f.set(l,d),this.h?this.h.next=f:this.g=f,this.h=f}}var On=new I(()=>new Yr,o=>o.reset());class Yr{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Rt,b=!1,V=new Ze,H=()=>{const o=u.Promise.resolve(void 0);Rt=()=>{o.then(ie)}};var ie=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){P(d)}var l=On;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}b=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Nt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function Ot(o,l){if(ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(U){e:{try{L(l.nodeName);var C=!0;break e}catch{}C=!1}C||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Lt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ot.aa.h.call(this)}}R(Ot,ue);var Lt={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var xt="closure_listenable_"+(1e6*Math.random()|0),Xv=0;function Yv(o,l,d,f,C){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!f,this.ha=C,this.key=++Xv,this.da=this.fa=!1}function gs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ms(o){this.src=o,this.g={},this.h=0}ms.prototype.add=function(o,l,d,f,C){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var M=Ea(o,l,f,C);return-1<M?(l=o[M],d||(l.fa=!1)):(l=new Yv(l,this.src,A,!!f,C),l.fa=d,o.push(l)),l};function _a(o,l){var d=l.type;if(d in o.g){var f=o.g[d],C=Array.prototype.indexOf.call(f,l,void 0),A;(A=0<=C)&&Array.prototype.splice.call(f,C,1),A&&(gs(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ea(o,l,d,f){for(var C=0;C<o.length;++C){var A=o[C];if(!A.da&&A.listener==l&&A.capture==!!d&&A.ha==f)return C}return-1}var Sa="closure_lm_"+(1e6*Math.random()|0),Ia={};function Yc(o,l,d,f,C){if(Array.isArray(l)){for(var A=0;A<l.length;A++)Yc(o,l[A],d,f,C);return null}return d=ed(d),o&&o[xt]?o.K(l,d,h(f)?!!f.capture:!!f,C):Jv(o,l,d,!1,f,C)}function Jv(o,l,d,f,C,A){if(!l)throw Error("Invalid event type");var M=h(C)?!!C.capture:!!C,J=ka(o);if(J||(o[Sa]=J=new ms(o)),d=J.add(l,d,f,M,A),d.proxy)return d;if(f=Zv(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)Nt||(C=M),C===void 0&&(C=!1),o.addEventListener(l.toString(),f,C);else if(o.attachEvent)o.attachEvent(Zc(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Zv(){function o(d){return l.call(o.src,o.listener,d)}const l=ey;return o}function Jc(o,l,d,f,C){if(Array.isArray(l))for(var A=0;A<l.length;A++)Jc(o,l[A],d,f,C);else f=h(f)?!!f.capture:!!f,d=ed(d),o&&o[xt]?(o=o.i,l=String(l).toString(),l in o.g&&(A=o.g[l],d=Ea(A,d,f,C),-1<d&&(gs(A[d]),Array.prototype.splice.call(A,d,1),A.length==0&&(delete o.g[l],o.h--)))):o&&(o=ka(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ea(l,d,f,C)),(d=-1<o?l[o]:null)&&Ta(d))}function Ta(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[xt])_a(l.i,o);else{var d=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(d,f,o.capture):l.detachEvent?l.detachEvent(Zc(d),f):l.addListener&&l.removeListener&&l.removeListener(f),(d=ka(l))?(_a(d,o),d.h==0&&(d.src=null,l[Sa]=null)):gs(o)}}}function Zc(o){return o in Ia?Ia[o]:Ia[o]="on"+o}function ey(o,l){if(o.da)o=!0;else{l=new Ot(l,this);var d=o.listener,f=o.ha||o.src;o.fa&&Ta(o),o=d.call(f,l)}return o}function ka(o){return o=o[Sa],o instanceof ms?o:null}var Ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function ed(o){return typeof o=="function"?o:(o[Ca]||(o[Ca]=function(l){return o.handleEvent(l)}),o[Ca])}function Se(){Y.call(this),this.i=new ms(this),this.M=this,this.F=null}R(Se,Y),Se.prototype[xt]=!0,Se.prototype.removeEventListener=function(o,l,d,f){Jc(this,o,l,d,f)};function xe(o,l){var d,f=o.F;if(f)for(d=[];f;f=f.F)d.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new ue(l,o);else if(l instanceof ue)l.target=l.target||o;else{var C=l;l=new ue(f,o),E(l,C)}if(C=!0,d)for(var A=d.length-1;0<=A;A--){var M=l.g=d[A];C=vs(M,f,!0,l)&&C}if(M=l.g=o,C=vs(M,f,!0,l)&&C,C=vs(M,f,!1,l)&&C,d)for(A=0;A<d.length;A++)M=l.g=d[A],C=vs(M,f,!1,l)&&C}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],f=0;f<d.length;f++)gs(d[f]);delete o.g[l],o.h--}}this.F=null},Se.prototype.K=function(o,l,d,f){return this.i.add(String(o),l,!1,d,f)},Se.prototype.L=function(o,l,d,f){return this.i.add(String(o),l,!0,d,f)};function vs(o,l,d,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var C=!0,A=0;A<l.length;++A){var M=l[A];if(M&&!M.da&&M.capture==d){var J=M.listener,ye=M.ha||M.src;M.fa&&_a(o.i,M),C=J.call(ye,f)!==!1&&C}}return C&&!f.defaultPrevented}function td(o,l,d){if(typeof o=="function")d&&(o=S(o,d));else if(o&&typeof o.handleEvent=="function")o=S(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function nd(o){o.g=td(()=>{o.g=null,o.i&&(o.i=!1,nd(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class ty extends Y{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:nd(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jr(o){Y.call(this),this.h=o,this.g={}}R(Jr,Y);var rd=[];function id(o){F(o.g,function(l,d){this.g.hasOwnProperty(d)&&Ta(l)},o),o.g={}}Jr.prototype.N=function(){Jr.aa.N.call(this),id(this)},Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pa=u.JSON.stringify,ny=u.JSON.parse,ry=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Aa(){}Aa.prototype.h=null;function sd(o){return o.h||(o.h=o.i())}function iy(){}var Zr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ra(){ue.call(this,"d")}R(Ra,ue);function Na(){ue.call(this,"c")}R(Na,ue);var or={},od=null;function Oa(){return od=od||new Se}or.La="serverreachability";function ad(o){ue.call(this,or.La,o)}R(ad,ue);function ei(o){const l=Oa();xe(l,new ad(l))}or.STAT_EVENT="statevent";function ld(o,l){ue.call(this,or.STAT_EVENT,o),this.stat=l}R(ld,ue);function De(o){const l=Oa();xe(l,new ld(l,o))}or.Ma="timingevent";function ud(o,l){ue.call(this,or.Ma,o),this.size=l}R(ud,ue);function ti(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function ni(){this.g=!0}ni.prototype.xa=function(){this.g=!1};function sy(o,l,d,f,C,A){o.info(function(){if(o.g)if(A)for(var M="",J=A.split("&"),ye=0;ye<J.length;ye++){var q=J[ye].split("=");if(1<q.length){var Ie=q[0];q=q[1];var Te=Ie.split("_");M=2<=Te.length&&Te[1]=="type"?M+(Ie+"="+q+"&"):M+(Ie+"=redacted&")}}else M=null;else M=A;return"XMLHTTP REQ ("+f+") [attempt "+C+"]: "+l+`
`+d+`
`+M})}function oy(o,l,d,f,C,A,M){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+C+"]: "+l+`
`+d+`
`+A+" "+M})}function ar(o,l,d,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+ly(o,d)+(f?" "+f:"")})}function ay(o,l){o.info(function(){return"TIMEOUT: "+l})}ni.prototype.info=function(){};function ly(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var f=d[o];if(!(2>f.length)){var C=f[1];if(Array.isArray(C)&&!(1>C.length)){var A=C[0];if(A!="noop"&&A!="stop"&&A!="close")for(var M=1;M<C.length;M++)C[M]=""}}}}return Pa(d)}catch{return l}}var La={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xa;function ys(){}R(ys,Aa),ys.prototype.g=function(){return new XMLHttpRequest},ys.prototype.i=function(){return{}},xa=new ys;function Jt(o,l,d,f){this.j=o,this.i=l,this.l=d,this.R=f||1,this.U=new Jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cd}function cd(){this.i=null,this.g="",this.h=!1}var dd={},Da={};function Ma(o,l,d){o.L=1,o.v=Ss(Dt(l)),o.m=d,o.P=!0,hd(o,null)}function hd(o,l){o.F=Date.now(),ws(o),o.A=Dt(o.v);var d=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Cd(d.i,"t",f),o.C=0,d=o.j.J,o.h=new cd,o.g=Hd(o.j,d?l:null,!o.m),0<o.O&&(o.M=new ty(S(o.Y,o,o.g),o.O)),l=o.U,d=o.g,f=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(rd[0]=C.toString()),C=rd);for(var A=0;A<C.length;A++){var M=Yc(d,C[A],f||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),ei(),sy(o.i,o.u,o.A,o.l,o.R,o.m)}Jt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Mt(o)==3?l.j():this.Y(o)},Jt.prototype.Y=function(o){try{if(o==this.g)e:{const Te=Mt(this.g);var l=this.g.Ba();const cr=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||xd(this.g)))){this.J||Te!=4||l==7||(l==8||0>=cr?ei(3):ei(2)),Ua(this);var d=this.g.Z();this.X=d;t:if(fd(this)){var f=xd(this.g);o="";var C=f.length,A=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),ri(this);var M="";break t}this.h.i=new u.TextDecoder}for(l=0;l<C;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(A&&l==C-1)});f.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,oy(this.i,this.u,this.A,this.l,this.R,Te,d),this.o){if(this.T&&!this.K){t:{if(this.g){var J,ye=this.g;if((J=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(J)){var q=J;break t}}q=null}if(d=q)ar(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ja(this,d);else{this.o=!1,this.s=3,De(12),Ln(this),ri(this);break e}}if(this.P){d=!0;let lt;for(;!this.J&&this.C<M.length;)if(lt=cy(this,M),lt==Da){Te==4&&(this.s=4,De(14),d=!1),ar(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==dd){this.s=4,De(15),ar(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else ar(this.i,this.l,lt,null),ja(this,lt);if(fd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||M.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)ar(this.i,this.l,M,"[Invalid Chunked Response]"),Ln(this),ri(this);else if(0<M.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Va(Ie),Ie.M=!0,De(11))}}else ar(this.i,this.l,M,null),ja(this,M);Te==4&&Ln(this),this.o&&!this.J&&(Te==4?zd(this.j,this):(this.o=!1,ws(this)))}else Py(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Ln(this),ri(this)}}}catch{}finally{}};function fd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function cy(o,l){var d=o.C,f=l.indexOf(`
`,d);return f==-1?Da:(d=Number(l.substring(d,f)),isNaN(d)?dd:(f+=1,f+d>l.length?Da:(l=l.slice(f,f+d),o.C=f+d,l)))}Jt.prototype.cancel=function(){this.J=!0,Ln(this)};function ws(o){o.S=Date.now()+o.I,pd(o,o.I)}function pd(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ti(S(o.ba,o),l)}function Ua(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Jt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ay(this.i,this.A),this.L!=2&&(ei(),De(17)),Ln(this),this.s=2,ri(this)):pd(this,this.S-o)};function ri(o){o.j.G==0||o.J||zd(o.j,o)}function Ln(o){Ua(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,id(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ja(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Fa(d.h,o))){if(!o.K&&Fa(d.h,o)&&d.G==3){try{var f=d.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var C=f;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)As(d),Cs(d);else break e;Ba(d),De(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=ti(S(d.Za,d),6e3));if(1>=vd(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Dn(d,11)}else if((o.K||d.g==o)&&As(d),!y(l))for(C=d.Da.g.parse(l),l=0;l<C.length;l++){let q=C[l];if(d.T=q[0],q=q[1],d.G==2)if(q[0]=="c"){d.K=q[1],d.ia=q[2];const Ie=q[3];Ie!=null&&(d.la=Ie,d.j.info("VER="+d.la));const Te=q[4];Te!=null&&(d.Aa=Te,d.j.info("SVER="+d.Aa));const cr=q[5];cr!=null&&typeof cr=="number"&&0<cr&&(f=1.5*cr,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const lt=o.g;if(lt){const Rs=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rs){var A=f.h;A.g||Rs.indexOf("spdy")==-1&&Rs.indexOf("quic")==-1&&Rs.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(ba(A,A.h),A.h=null))}if(f.D){const Ha=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ha&&(f.ya=Ha,ee(f.I,f.D,Ha))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var M=o;if(f.qa=Vd(f,f.J?f.ia:null,f.W),M.K){yd(f.h,M);var J=M,ye=f.L;ye&&(J.I=ye),J.B&&(Ua(J),ws(J)),f.g=M}else Fd(f);0<d.i.length&&Ps(d)}else q[0]!="stop"&&q[0]!="close"||Dn(d,7);else d.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Dn(d,7):$a(d):q[0]!="noop"&&d.l&&d.l.ta(q),d.v=0)}}ei(4)}catch{}}var dy=class{constructor(o,l){this.g=o,this.map=l}};function gd(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function md(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function vd(o){return o.h?1:o.g?o.g.size:0}function Fa(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ba(o,l){o.g?o.g.add(l):o.h=l}function yd(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}gd.prototype.cancel=function(){if(this.i=wd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function wd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return O(o.i)}function hy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,f=0;f<d;f++)l.push(o[f]);return l}l=[],d=0;for(f in o)l[d++]=o[f];return l}function fy(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const f in o)l[d++]=f;return l}}}function _d(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=fy(o),f=hy(o),C=f.length,A=0;A<C;A++)l.call(void 0,f[A],d&&d[A],o)}var Ed=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function py(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var f=o[d].indexOf("="),C=null;if(0<=f){var A=o[d].substring(0,f);C=o[d].substring(f+1)}else A=o[d];l(A,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function xn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof xn){this.h=o.h,_s(this,o.j),this.o=o.o,this.g=o.g,Es(this,o.s),this.l=o.l;var l=o.i,d=new oi;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Sd(this,d),this.m=o.m}else o&&(l=String(o).match(Ed))?(this.h=!1,_s(this,l[1]||"",!0),this.o=ii(l[2]||""),this.g=ii(l[3]||"",!0),Es(this,l[4]),this.l=ii(l[5]||"",!0),Sd(this,l[6]||"",!0),this.m=ii(l[7]||"")):(this.h=!1,this.i=new oi(null,this.h))}xn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(si(l,Id,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(si(l,Id,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(si(d,d.charAt(0)=="/"?vy:my,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",si(d,wy)),o.join("")};function Dt(o){return new xn(o)}function _s(o,l,d){o.j=d?ii(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Es(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Sd(o,l,d){l instanceof oi?(o.i=l,_y(o.i,o.h)):(d||(l=si(l,yy)),o.i=new oi(l,o.h))}function ee(o,l,d){o.i.set(l,d)}function Ss(o){return ee(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ii(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function si(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,gy),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Id=/[#\/\?@]/g,my=/[#\?:]/g,vy=/[#\?]/g,yy=/[#\?@]/g,wy=/#/g;function oi(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Zt(o){o.g||(o.g=new Map,o.h=0,o.i&&py(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}e=oi.prototype,e.add=function(o,l){Zt(this),this.i=null,o=lr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Td(o,l){Zt(o),l=lr(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function kd(o,l){return Zt(o),l=lr(o,l),o.g.has(l)}e.forEach=function(o,l){Zt(this),this.g.forEach(function(d,f){d.forEach(function(C){o.call(l,C,f,this)},this)},this)},e.na=function(){Zt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let f=0;f<l.length;f++){const C=o[f];for(let A=0;A<C.length;A++)d.push(l[f])}return d},e.V=function(o){Zt(this);let l=[];if(typeof o=="string")kd(this,o)&&(l=l.concat(this.g.get(lr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},e.set=function(o,l){return Zt(this),this.i=null,o=lr(this,o),kd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},e.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Cd(o,l,d){Td(o,l),0<d.length&&(o.i=null,o.g.set(lr(o,l),O(d)),o.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var f=l[d];const A=encodeURIComponent(String(f)),M=this.V(f);for(f=0;f<M.length;f++){var C=A;M[f]!==""&&(C+="="+encodeURIComponent(String(M[f]))),o.push(C)}}return this.i=o.join("&")};function lr(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function _y(o,l){l&&!o.j&&(Zt(o),o.i=null,o.g.forEach(function(d,f){var C=f.toLowerCase();f!=C&&(Td(this,f),Cd(this,C,d))},o)),o.j=l}function Ey(o,l){const d=new ni;if(u.Image){const f=new Image;f.onload=N(en,d,"TestLoadImage: loaded",!0,l,f),f.onerror=N(en,d,"TestLoadImage: error",!1,l,f),f.onabort=N(en,d,"TestLoadImage: abort",!1,l,f),f.ontimeout=N(en,d,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Sy(o,l){const d=new ni,f=new AbortController,C=setTimeout(()=>{f.abort(),en(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(C),A.ok?en(d,"TestPingServer: ok",!0,l):en(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(C),en(d,"TestPingServer: error",!1,l)})}function en(o,l,d,f,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),f(d)}catch{}}function Iy(){this.g=new ry}function Ty(o,l,d){const f=d||"";try{_d(o,function(C,A){let M=C;h(C)&&(M=Pa(C)),l.push(f+A+"="+encodeURIComponent(M))})}catch(C){throw l.push(f+"type="+encodeURIComponent("_badmap")),C}}function Is(o){this.l=o.Ub||null,this.j=o.eb||!1}R(Is,Aa),Is.prototype.g=function(){return new Ts(this.l,this.j)},Is.prototype.i=function(o){return function(){return o}}({});function Ts(o,l){Se.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ts,Se),e=Ts.prototype,e.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,li(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ai(this):li(this),this.readyState==3&&Pd(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,ai(this))},e.Qa=function(o){this.g&&(this.response=o,ai(this))},e.ga=function(){this.g&&ai(this)};function ai(o){o.readyState=4,o.l=null,o.j=null,o.v=null,li(o)}e.setRequestHeader=function(o,l){this.u.append(o,l)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function li(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ad(o){let l="";return F(o,function(d,f){l+=f,l+=":",l+=d,l+=`\r
`}),l}function za(o,l,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=Ad(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ee(o,l,d))}function ce(o){Se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ce,Se);var ky=/^https?$/i,Cy=["POST","PUT"];e=ce.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,l,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xa.g(),this.v=this.o?sd(this.o):sd(xa),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(A){Rd(this,A);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var C in f)d.set(C,f[C]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())d.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(A=>A.toLowerCase()=="content-type"),C=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Cy,l,void 0))||f||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,M]of d)this.g.setRequestHeader(A,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ld(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){Rd(this,A)}};function Rd(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Nd(o),ks(o)}function Nd(o){o.A||(o.A=!0,xe(o,"complete"),xe(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xe(this,"complete"),xe(this,"abort"),ks(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ks(this,!0)),ce.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Od(this):this.bb())},e.bb=function(){Od(this)};function Od(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Mt(o)!=4||o.Z()!=2)){if(o.u&&Mt(o)==4)td(o.Ea,0,o);else if(xe(o,"readystatechange"),Mt(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var f;if(f=M===0){var C=String(o.D).match(Ed)[1]||null;!C&&u.self&&u.self.location&&(C=u.self.location.protocol.slice(0,-1)),f=!ky.test(C?C.toLowerCase():"")}d=f}if(d)xe(o,"complete"),xe(o,"success");else{o.m=6;try{var A=2<Mt(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",Nd(o)}}finally{ks(o)}}}}function ks(o,l){if(o.g){Ld(o);const d=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||xe(o,"ready");try{d.onreadystatechange=f}catch{}}}function Ld(o){o.I&&(u.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Mt(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),ny(l)}};function xd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Py(o){const l={};o=(o.g&&2<=Mt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(y(o[f]))continue;var d=k(o[f]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const A=l[C]||[];l[C]=A,A.push(d)}v(l,function(f){return f.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ui(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Dd(o){this.Aa=0,this.i=[],this.j=new ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ui("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ui("baseRetryDelayMs",5e3,o),this.cb=ui("retryDelaySeedMs",1e4,o),this.Wa=ui("forwardChannelMaxRetries",2,o),this.wa=ui("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new gd(o&&o.concurrentRequestLimit),this.Da=new Iy,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Dd.prototype,e.la=8,e.G=1,e.connect=function(o,l,d,f){De(0),this.W=o,this.H=l||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=Vd(this,null,this.W),Ps(this)};function $a(o){if(Md(o),o.G==3){var l=o.U++,d=Dt(o.I);if(ee(d,"SID",o.K),ee(d,"RID",l),ee(d,"TYPE","terminate"),ci(o,d),l=new Jt(o,o.j,l),l.L=2,l.v=Ss(Dt(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=Hd(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ws(l)}Bd(o)}function Cs(o){o.g&&(Va(o),o.g.cancel(),o.g=null)}function Md(o){Cs(o),o.u&&(u.clearTimeout(o.u),o.u=null),As(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ps(o){if(!md(o.h)&&!o.s){o.s=!0;var l=o.Ga;Rt||H(),b||(Rt(),b=!0),V.add(l,o),o.B=0}}function Ay(o,l){return vd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ti(S(o.Ga,o,l),$d(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Jt(this,this.j,o);let A=this.o;if(this.S&&(A?(A=p(A),E(A,this.S)):A=this.S),this.m!==null||this.O||(C.H=A,A=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=jd(this,C,l),d=Dt(this.I),ee(d,"RID",o),ee(d,"CVER",22),this.D&&ee(d,"X-HTTP-Session-Id",this.D),ci(this,d),A&&(this.O?l="headers="+encodeURIComponent(String(Ad(A)))+"&"+l:this.m&&za(d,this.m,A)),ba(this.h,C),this.Ua&&ee(d,"TYPE","init"),this.P?(ee(d,"$req",l),ee(d,"SID","null"),C.T=!0,Ma(C,d,null)):Ma(C,d,l),this.G=2}}else this.G==3&&(o?Ud(this,o):this.i.length==0||md(this.h)||Ud(this))};function Ud(o,l){var d;l?d=l.l:d=o.U++;const f=Dt(o.I);ee(f,"SID",o.K),ee(f,"RID",d),ee(f,"AID",o.T),ci(o,f),o.m&&o.o&&za(f,o.m,o.o),d=new Jt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=jd(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ba(o.h,d),Ma(d,f,l)}function ci(o,l){o.H&&F(o.H,function(d,f){ee(l,f,d)}),o.l&&_d({},function(d,f){ee(l,f,d)})}function jd(o,l,d){d=Math.min(o.i.length,d);var f=o.l?S(o.l.Na,o.l,o):null;e:{var C=o.i;let A=-1;for(;;){const M=["count="+d];A==-1?0<d?(A=C[0].g,M.push("ofs="+A)):A=0:M.push("ofs="+A);let J=!0;for(let ye=0;ye<d;ye++){let q=C[ye].g;const Ie=C[ye].map;if(q-=A,0>q)A=Math.max(0,C[ye].g-100),J=!1;else try{Ty(Ie,M,"req"+q+"_")}catch{f&&f(Ie)}}if(J){f=M.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,f}function Fd(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Rt||H(),b||(Rt(),b=!0),V.add(l,o),o.v=0}}function Ba(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ti(S(o.Fa,o),$d(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,bd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ti(S(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Cs(this),bd(this))};function Va(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function bd(o){o.g=new Jt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Dt(o.qa);ee(l,"RID","rpc"),ee(l,"SID",o.K),ee(l,"AID",o.T),ee(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ee(l,"TO",o.ja),ee(l,"TYPE","xmlhttp"),ci(o,l),o.m&&o.o&&za(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ss(Dt(l)),d.m=null,d.P=!0,hd(d,o)}e.Za=function(){this.C!=null&&(this.C=null,Cs(this),Ba(this),De(19))};function As(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function zd(o,l){var d=null;if(o.g==l){As(o),Va(o),o.g=null;var f=2}else if(Fa(o.h,l))d=l.D,yd(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var C=o.B;f=Oa(),xe(f,new ud(f,d)),Ps(o)}else Fd(o);else if(C=l.s,C==3||C==0&&0<l.X||!(f==1&&Ay(o,l)||f==2&&Ba(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),C){case 1:Dn(o,5);break;case 4:Dn(o,10);break;case 3:Dn(o,6);break;default:Dn(o,2)}}}function $d(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Dn(o,l){if(o.j.info("Error code "+l),l==2){var d=S(o.fb,o),f=o.Xa;const C=!f;f=new xn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||_s(f,"https"),Ss(f),C?Ey(f.toString(),d):Sy(f.toString(),d)}else De(2);o.G=0,o.l&&o.l.sa(l),Bd(o),Md(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Bd(o){if(o.G=0,o.ka=[],o.l){const l=wd(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Vd(o,l,d){var f=d instanceof xn?Dt(d):new xn(d);if(f.g!="")l&&(f.g=l+"."+f.g),Es(f,f.s);else{var C=u.location;f=C.protocol,l=l?l+"."+C.hostname:C.hostname,C=+C.port;var A=new xn(null);f&&_s(A,f),l&&(A.g=l),C&&Es(A,C),d&&(A.l=d),f=A}return d=o.D,l=o.ya,d&&l&&ee(f,d,l),ee(f,"VER",o.la),ci(o,f),f}function Hd(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ce(new Is({eb:d})):new ce(o.pa),l.Ha(o.J),l}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wd(){}e=Wd.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function et(o,l){Se.call(this),this.g=new Dd(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!y(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new ur(this)}R(et,Se),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){$a(this.g)},et.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Pa(o),o=d);l.i.push(new dy(l.Ya++,o)),l.G==3&&Ps(l)},et.prototype.N=function(){this.g.l=null,delete this.j,$a(this.g),delete this.g,et.aa.N.call(this)};function Kd(o){Ra.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}R(Kd,Ra);function Gd(){Na.call(this),this.status=1}R(Gd,Na);function ur(o){this.g=o}R(ur,Wd),ur.prototype.ua=function(){xe(this.g,"a")},ur.prototype.ta=function(o){xe(this.g,new Kd(o))},ur.prototype.sa=function(o){xe(this.g,new Gd)},ur.prototype.ra=function(){xe(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,La.NO_ERROR=0,La.TIMEOUT=8,La.HTTP_ERROR=6,uy.COMPLETE="complete",iy.EventType=Zr,Zr.OPEN="a",Zr.CLOSE="b",Zr.ERROR="c",Zr.MESSAGE="d",Se.prototype.listen=Se.prototype.K,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha}).apply(typeof Gs<"u"?Gs:typeof self<"u"?self:typeof window<"u"?window:{});const Lf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new fa("@firebase/firestore");function Ge(e,...t){if(Br.logLevel<=Q.DEBUG){const n=t.map(bc);Br.debug(`Firestore (${cs}): ${e}`,...n)}}function Fc(e,...t){if(Br.logLevel<=Q.ERROR){const n=t.map(bc);Br.error(`Firestore (${cs}): ${e}`,...n)}}function oI(e,...t){if(Br.logLevel<=Q.WARN){const n=t.map(bc);Br.warn(`Firestore (${cs}): ${e}`,...n)}}function bc(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(e="Unexpected state"){const t=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+e;throw Fc(t),new Error(t)}function Nu(e,t){e||zc()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ne extends yt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class aI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class lI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uI{constructor(t){this.t=t,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Or,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{Ge("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(Ge("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Or)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Ge("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Nu(typeof r.accessToken=="string"),new dv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Nu(t===null||typeof t=="string"),new Pe(t)}}class cI{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dI{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new cI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hI{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fI{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&Ge("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Ge("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{Ge("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Ge("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Nu(typeof n.token=="string"),this.R=n.token,new hI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=pI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function hv(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(t,n,r,i,s,a,u,c,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h}}class Bo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Bo&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xf,K;(K=xf||(xf={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new cv([4294967295,4294967295],0);function Pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ai=t,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&Ge("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const a=Date.now()+r,u=new $c(t,n,a,i,s);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ne(Re.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yI(e,t){if(Fc("AsyncQueue",`${t}: ${e}`),hv(e))return new Ne(Re.UNAVAILABLE,`${t}: ${e}`);throw e}var Df,Mf;(Mf=Df||(Df={})).X_="default",Mf.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=gI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Ge("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Ge("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ne(Re.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=yI(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new Map;function _I(e,t,n,r){if(t===!0&&r===!0)throw new Ne(Re.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function EI(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":zc()}function SI(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ne(Re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=EI(e);throw new Ne(Re.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ne(Re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ne(Re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_I("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fv((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ne(Re.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ne(Re.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ne(Re.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class pv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ne(Re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ne(Re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aI;switch(r.type){case"firstParty":return new dI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ne(Re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Uf.get(n);r&&(Ge("ComponentProvider","Removing Datastore"),Uf.delete(n),r.terminate())}(this),Promise.resolve()}}function II(e,t,n,r={}){var i;const s=(e=SI(e,pv))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&oI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let u,c;if(typeof r.mockUserToken=="string")u=r.mockUserToken,c=Pe.MOCK_USER;else{u=y1(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Ne(Re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pe(h)}e._authCredentials=new lI(new dv(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new vI(this,"async_queue_retry"),this.Tu=()=>{const n=Pl();n&&Ge("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const t=Pl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const n=Pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Or;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!hv(t))throw t;Ge("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const n=this._u.then(()=>(this.hu=!0,t().catch(r=>{this.lu=r,this.hu=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Fc("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(t,n,r){this.Eu(),this.Iu.indexOf(t)>-1&&(n=0);const i=$c.createAndSchedule(this,t,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&zc()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const n of this.cu)if(n.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const n=this.cu.indexOf(t);this.cu.splice(n,1)}}class kI extends pv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new TI}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||PI(this),this._firestoreClient.terminate()}}function CI(e,t){const n=typeof e=="object"?e:Lc(),r=typeof e=="string"?e:"(default)",i=ir(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=m1("firestore");s&&II(i,...s)}return i}function PI(e){var t,n,r;const i=e._freezeSettings(),s=function(u,c,h,_){return new mI(u,c,h,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,fv(_.experimentalLongPollingOptions),_.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new wI(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){cs=i})(Qr),At(new mt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new kI(new uI(r.getProvider("auth-internal")),new fI(r.getProvider("app-check-internal")),function(h,_){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Ne(Re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(h.options.projectId,_)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),st(Lf,"4.6.5",t),st(Lf,"4.6.5","esm2017")})();const AI={apiKey:"AIzaSyCoeFQCEkHjz1cioB8GqpRfgvfyqGZMMyE",authDomain:"nomadelide-mi.firebaseapp.com",projectId:"nomadelide-mi",storageBucket:"nomadelide-mi.appspot.com",messagingSenderId:"877452353809",appId:"1:877452353809:web:e866bda9e55985a66facb0",measurementId:"G-51VE8SHWR1"},gv=bm(AI);nI(gv);CI(gv);function Bc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function mv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RI=mv,vv=new rr("auth","Firebase",mv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new fa("@firebase/auth");function NI(e,...t){Vo.logLevel<=Q.WARN&&Vo.warn(`Auth (${Qr}): ${e}`,...t)}function lo(e,...t){Vo.logLevel<=Q.ERROR&&Vo.error(`Auth (${Qr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,...t){throw Vc(e,...t)}function Ct(e,...t){return Vc(e,...t)}function yv(e,t,n){const r=Object.assign(Object.assign({},RI()),{[t]:n});return new rr("auth","Firebase",r).create(t,{appName:e.name})}function Ht(e){return yv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return vv.create(e,...t)}function B(e,t,...n){if(!e)throw Vc(t,...n)}function zt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw lo(t),new Error(t)}function Qt(e,t){e||zt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function OI(){return Ff()==="http:"||Ff()==="https:"}function Ff(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OI()||xm()||"connection"in navigator)?navigator.onLine:!0}function xI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n){this.shortDelay=t,this.longDelay=n,Qt(n>t,"Short delay should be less than long delay!"),this.isMobile=w1()||_1()}get(){return LI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(e,t){Qt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new ds(3e4,6e4);function Nn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Yt(e,t,n,r,i={}){return _v(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const u=us(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),wv.fetch()(Ev(e,e.config.apiHost,n,u),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function _v(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},DI),t);try{const i=new jI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw qs(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[c,h]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qs(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw qs(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw qs(e,"user-disabled",a);const _=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw yv(e,_,h);vt(e,_)}}catch(i){if(i instanceof yt)throw i;vt(e,"network-request-failed",{message:String(i)})}}async function hs(e,t,n,r,i={}){const s=await Yt(e,t,n,r,i);return"mfaPendingCredential"in s&&vt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ev(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Hc(e.config,i):`${e.config.apiScheme}://${i}`}function UI(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),MI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(e,t,r);return i.customData._tokenResponse=n,i}function bf(e){return e!==void 0&&e.enterprise!==void 0}class FI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return UI(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function bI(e,t){return Yt(e,"GET","/v2/recaptchaConfig",Nn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(e,t){return Yt(e,"POST","/v1/accounts:delete",t)}async function Sv(e,t){return Yt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function $I(e,t=!1){const n=wt(e),r=await n.getIdToken(t),i=Wc(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mi(Al(i.auth_time)),issuedAtTime:Mi(Al(i.iat)),expirationTime:Mi(Al(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Al(e){return Number(e)*1e3}function Wc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rm(n);return i?JSON.parse(i):(lo("Failed to decode base64 JWT payload"),null)}catch(i){return lo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zf(e){const t=Wc(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof yt&&BI(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function BI({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Vr(e,Sv(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Iv(s.providerUserInfo):[],u=WI(e.providerData,a),c=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(u!=null&&u.length),_=c?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Lu(s.createdAt,s.lastLoginAt),isAnonymous:_};Object.assign(e,m)}async function HI(e){const t=wt(e);await Ho(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function WI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Iv(e){return e.map(t=>{var{providerId:n}=t,r=Bc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(e,t){const n=await _v(e,{},async()=>{const r=us({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=Ev(e,i,"/v1/token",`key=${s}`),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",wv.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GI(e,t){return Yt(e,"POST","/v2/accounts:revokeToken",Nn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):zf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){B(t.length!==0,"internal-error");const n=zf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Lr;return r&&(B(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class $t{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Bc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return $I(this,t)}reload(){return HI(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $t(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(Ht(this.auth));const t=await this.getIdToken();return await Vr(this,zI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,u,c,h,_;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,S=(i=n.email)!==null&&i!==void 0?i:void 0,N=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(u=n.tenantId)!==null&&u!==void 0?u:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:T,emailVerified:L,isAnonymous:U,providerData:F,stsTokenManager:v}=n;B(T&&v,t,"internal-error");const p=Lr.fromJSON(this.name,v);B(typeof T=="string",t,"internal-error"),nn(m,t.name),nn(S,t.name),B(typeof L=="boolean",t,"internal-error"),B(typeof U=="boolean",t,"internal-error"),nn(N,t.name),nn(R,t.name),nn(O,t.name),nn(x,t.name),nn(I,t.name),nn(y,t.name);const g=new $t({uid:T,auth:t,email:S,emailVerified:L,displayName:m,isAnonymous:U,photoURL:R,phoneNumber:N,tenantId:O,stsTokenManager:p,createdAt:I,lastLoginAt:y});return F&&Array.isArray(F)&&(g.providerData=F.map(E=>Object.assign({},E))),x&&(g._redirectEventId=x),g}static async _fromIdTokenResponse(t,n,r=!1){const i=new Lr;i.updateFromServerResponse(n);const s=new $t({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ho(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Iv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Lr;u.updateFromIdToken(r);const c=new $t({uid:i.localId,auth:t,stsTokenManager:u,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Map;function Bt(e){Qt(e instanceof Function,"Expected a class definition");let t=$f.get(e);return t?(Qt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$f.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Tv.type="NONE";const Bf=Tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e,t,n){return`firebase:${e}:${t}:${n}`}class xr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=uo(this.userKey,i.apiKey,s),this.fullPersistenceKey=uo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$t._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new xr(Bt(Bf),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Bt(Bf);const a=uo(r,t.config.apiKey,t.name);let u=null;for(const h of n)try{const _=await h._get(a);if(_){const m=$t._fromJSON(t,_);h!==s&&(u=m),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new xr(s,t,r):(s=c[0],u&&await s._set(a,u.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new xr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(kv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Rv(t))return"Blackberry";if(Nv(t))return"Webos";if(Kc(t))return"Safari";if((t.includes("chrome/")||Cv(t))&&!t.includes("edge/"))return"Chrome";if(Av(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kv(e=Le()){return/firefox\//i.test(e)}function Kc(e=Le()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cv(e=Le()){return/crios\//i.test(e)}function Pv(e=Le()){return/iemobile/i.test(e)}function Av(e=Le()){return/android/i.test(e)}function Rv(e=Le()){return/blackberry/i.test(e)}function Nv(e=Le()){return/webos/i.test(e)}function ma(e=Le()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function qI(e=Le()){var t;return ma(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function QI(){return E1()&&document.documentMode===10}function Ov(e=Le()){return ma(e)||Av(e)||Nv(e)||Rv(e)||/windows phone/i.test(e)||Pv(e)}function XI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(e,t=[]){let n;switch(e){case"Browser":n=Vf(Le());break;case"Worker":n=`${Vf(Le())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,u)=>{try{const c=t(s);a(c)}catch(c){u(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(e,t={}){return Yt(e,"GET","/v2/passwordPolicy",Nn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=6;class eT{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:ZI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hf(this),this.idTokenSubscription=new Hf(this),this.beforeStateQueue=new YI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Sv(this,{idToken:t}),r=await $t._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(It(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===u)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ho(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=xI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(It(this.app))return Promise.reject(Ht(this));const n=t?wt(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(Ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return It(this.app)?Promise.reject(Ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await JI(this),n=new eT(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new rr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Bt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Lv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&NI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function sr(e){return wt(e)}class Hf{constructor(t){this.auth=t,this.observer=null,this.addObserver=P1(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nT(e){va=e}function xv(e){return va.loadJS(e)}function rT(){return va.recaptchaEnterpriseScript}function iT(){return va.gapiScript}function sT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const oT="recaptcha-enterprise",aT="NO_RECAPTCHA";class lT{constructor(t){this.type=oT,this.auth=sr(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{bI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const h=new FI(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{u(c)})})}function i(s,a,u){const c=window.grecaptcha;bf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(h=>{a(h)}).catch(()=>{a(aT)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(u=>{if(!n&&bf(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=rT();c.length!==0&&(c+=u),xv(c).then(()=>{i(u,s,a)}).catch(h=>{a(h)})}}).catch(u=>{a(u)})})}}async function Wf(e,t,n,r=!1){const i=new lT(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function xu(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Wf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Wf(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(e,t){const n=ir(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ts(s,t??{}))return i;vt(i,"already-initialized")}return n.initialize({options:t})}function cT(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function dT(e,t,n){const r=sr(e);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Dv(t),{host:a,port:u}=hT(t),c=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),fT()}function Dv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function hT(e){const t=Dv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kf(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Kf(a)}}}function Kf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function fT(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(t){return zt("not implemented")}_linkToIdToken(t,n){return zt("not implemented")}_getReauthenticationResolver(t){return zt("not implemented")}}async function pT(e,t){return Yt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(e,t){return hs(e,"POST","/v1/accounts:signInWithPassword",Nn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(e,t){return hs(e,"POST","/v1/accounts:signInWithEmailLink",Nn(e,t))}async function vT(e,t){return hs(e,"POST","/v1/accounts:signInWithEmailLink",Nn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Gc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new rs(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new rs(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xu(t,n,"signInWithPassword",gT);case"emailLink":return mT(t,{email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xu(t,r,"signUpPassword",pT);case"emailLink":return vT(t,{idToken:n,email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(e,t){return hs(e,"POST","/v1/accounts:signInWithIdp",Nn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="http://localhost";class Zn extends Gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Zn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Bc(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Zn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Dr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Dr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Dr(t,n)}buildRequest(){const t={requestUri:yT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=us(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _T(e){const t=Ii(Ti(e)).link,n=t?Ii(Ti(t)).deep_link_id:null,r=Ii(Ti(e)).deep_link_id;return(r?Ii(Ti(r)).link:null)||r||n||t||e}class qc{constructor(t){var n,r,i,s,a,u;const c=Ii(Ti(t)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,_=(r=c.oobCode)!==null&&r!==void 0?r:null,m=wT((i=c.mode)!==null&&i!==void 0?i:null);B(h&&_&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=_,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=c.tenantId)!==null&&u!==void 0?u:null}static parseLink(t){const n=_T(t);try{return new qc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(t,n){return rs._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=qc.parseLink(n);return B(r,"argument-error"),rs._fromEmailAndCode(t,r.code,r.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Mv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends fs{constructor(){super("facebook.com")}static credential(t){return Zn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ln.credentialFromTaggedObject(t)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ln.credential(t.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Zn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends fs{constructor(){super("github.com")}static credential(t){return Zn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cn.credential(t.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends fs{constructor(){super("twitter.com")}static credential(t,n){return Zn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(e,t){return hs(e,"POST","/v1/accounts:signUp",Nn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await $t._fromIdTokenResponse(t,r,i),a=Gf(r);return new er({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Gf(r);return new er({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Gf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends yt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Wo(t,n,r,i)}}function Uv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wo._fromErrorAndOperation(e,s,t,r):s})}async function ST(e,t,n=!1){const r=await Vr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return er._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(e,t,n=!1){const{auth:r}=e;if(It(r.app))return Promise.reject(Ht(r));const i="reauthenticate";try{const s=await Vr(e,Uv(r,i,t,e),n);B(s.idToken,r,"internal-error");const a=Wc(s.idToken);B(a,r,"internal-error");const{sub:u}=a;return B(e.uid===u,r,"user-mismatch"),er._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(e,t,n=!1){if(It(e.app))return Promise.reject(Ht(e));const r="signIn",i=await Uv(e,r,t),s=await er._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function TT(e,t){return jv(sr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(e){const t=sr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function kT(e,t,n){if(It(e.app))return Promise.reject(Ht(e));const r=sr(e),a=await xu(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ET).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Fv(e),c}),u=await er._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function CT(e,t,n){return It(e.app)?Promise.reject(Ht(e)):TT(wt(e),Xr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fv(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(e,t){return Yt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=wt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await Vr(r,PT(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const u=r.providerData.find(({providerId:c})=>c==="password");u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function RT(e,t,n,r){return wt(e).onIdTokenChanged(t,n,r)}function NT(e,t,n){return wt(e).beforeAuthStateChanged(t,n)}function OT(e){return wt(e).signOut()}const Ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(){const e=Le();return Kc(e)||ma(e)}const xT=1e3,DT=10;class zv extends bv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LT()&&XI(),this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);QI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,DT):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},xT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}zv.type="LOCAL";const MT=zv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v extends bv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}$v.type="SESSION";const Bv=$v;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ya(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async h=>h(n.origin,s)),c=await UT(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,c)=>{const h=Qc("",20);i.port1.start();const _=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const S=m;if(S.data.eventId===h)switch(S.data.status){case"ack":clearTimeout(_),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(S.data.response);break;default:clearTimeout(_),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function FT(e){Pt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function bT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function $T(){return Vv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="firebaseLocalStorageDb",BT=1,Go="firebaseLocalStorage",Wv="fbase_key";class ps{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wa(e,t){return e.transaction([Go],t?"readwrite":"readonly").objectStore(Go)}function VT(){const e=indexedDB.deleteDatabase(Hv);return new ps(e).toPromise()}function Du(){const e=indexedDB.open(Hv,BT);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Go,{keyPath:Wv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Go)?t(r):(r.close(),await VT(),t(await Du()))})})}async function qf(e,t,n){const r=wa(e,!0).put({[Wv]:t,value:n});return new ps(r).toPromise()}async function HT(e,t){const n=wa(e,!1).get(t),r=await new ps(n).toPromise();return r===void 0?null:r.value}function Qf(e,t){const n=wa(e,!0).delete(t);return new ps(n).toPromise()}const WT=800,KT=3;class Kv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Du(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>KT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance($T()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await bT(),!this.activeServiceWorker)return;this.sender=new jT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||zT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Du();return await qf(t,Ko,"1"),await Qf(t,Ko),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>HT(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=wa(i,!1).getAll();return new ps(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kv.type="LOCAL";const GT=Kv;new ds(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(e,t){return t?Bt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends Gc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Dr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Dr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function QT(e){return jv(e.auth,new Xc(e),e.bypassAuthState)}function XT(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),IT(n,new Xc(e),e.bypassAuthState)}async function YT(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),ST(n,new Xc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return QT;case"linkViaPopup":case"linkViaRedirect":return YT;case"reauthViaPopup":case"reauthViaRedirect":return XT;default:vt(this.auth,"internal-error")}}resolve(t){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=new ds(2e3,1e4);class Tr extends Gv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const t=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,JT.get())};t()}}Tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="pendingRedirect",co=new Map;class ek extends Gv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=co.get(this.auth._key());if(!t){try{const r=await tk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}co.set(this.auth._key(),t)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tk(e,t){const n=ik(t),r=rk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nk(e,t){co.set(e._key(),t)}function rk(e){return Bt(e._redirectPersistence)}function ik(e){return uo(ZT,e.config.apiKey,e.name)}async function sk(e,t,n=!1){if(It(e.app))return Promise.reject(Ht(e));const r=sr(e),i=qT(r,t),a=await new ek(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=10*60*1e3;class ak{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!qv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ok&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xf(t))}saveEventToCache(t){this.cachedEventUids.add(Xf(t)),this.lastProcessedEventTime=Date.now()}}function Xf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function qv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function lk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(e,t={}){return Yt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dk=/^https?/;async function hk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await uk(e);for(const n of t)try{if(fk(n))return}catch{}vt(e,"unauthorized-domain")}function fk(e){const t=Ou(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!dk.test(n))return!1;if(ck.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=new ds(3e4,6e4);function Yf(){const e=Pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function gk(e){return new Promise((t,n)=>{var r,i,s;function a(){Yf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(Ct(e,"network-request-failed"))},timeout:pk.get()})}if(!((i=(r=Pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Pt().gapi)===null||s===void 0)&&s.load)a();else{const u=sT("iframefcb");return Pt()[u]=()=>{gapi.load?a():n(Ct(e,"network-request-failed"))},xv(`${iT()}?onload=${u}`).catch(c=>n(c))}}).catch(t=>{throw ho=null,t})}let ho=null;function mk(e){return ho=ho||gk(e),ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new ds(5e3,15e3),yk="__/auth/iframe",wk="emulator/auth/iframe",_k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ek=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sk(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Hc(t,wk):`https://${e.config.authDomain}/${yk}`,r={apiKey:t.apiKey,appName:e.name,v:Qr},i=Ek.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${us(r).slice(1)}`}async function Ik(e){const t=await mk(e),n=Pt().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:Sk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_k,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ct(e,"network-request-failed"),u=Pt().setTimeout(()=>{s(a)},vk.get());function c(){Pt().clearTimeout(u),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kk=500,Ck=600,Pk="_blank",Ak="http://localhost";class Jf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rk(e,t,n,r=kk,i=Ck){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},Tk),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Le().toLowerCase();n&&(u=Cv(h)?Pk:n),kv(h)&&(t=t||Ak,c.scrollbars="yes");const _=Object.entries(c).reduce((S,[N,R])=>`${S}${N}=${R},`,"");if(qI(h)&&u!=="_self")return Nk(t||"",u),new Jf(null);const m=window.open(t||"",u,_);B(m,e,"popup-blocked");try{m.focus()}catch{}return new Jf(m)}function Nk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="__/auth/handler",Lk="emulator/auth/handler",xk=encodeURIComponent("fac");async function Zf(e,t,n,r,i,s){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(t instanceof Mv){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",C1(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[_,m]of Object.entries({}))a[_]=m}if(t instanceof fs){const _=t.getScopes().filter(m=>m!=="");_.length>0&&(a.scopes=_.join(","))}e.tenantId&&(a.tid=e.tenantId);const u=a;for(const _ of Object.keys(u))u[_]===void 0&&delete u[_];const c=await e._getAppCheckToken(),h=c?`#${xk}=${encodeURIComponent(c)}`:"";return`${Dk(e)}?${us(u).slice(1)}${h}`}function Dk({config:e}){return e.emulator?Hc(e,Lk):`https://${e.authDomain}/${Ok}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="webStorageSupport";class Mk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bv,this._completeRedirectFn=sk,this._overrideRedirectResult=nk}async _openPopup(t,n,r,i){var s;Qt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Zf(t,n,r,Ou(),i);return Rk(t,a,Qc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Zf(t,n,r,Ou(),i);return FT(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Ik(t),r=new ak(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Rl,{type:Rl},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rl];a!==void 0&&n(!!a),vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ov()||Kc()||ma()}}const Uk=Mk;var ep="@firebase/auth",tp="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bk(e){At(new mt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:u,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lv(e)},h=new tT(r,i,s,c);return cT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),At(new mt("auth-internal",t=>{const n=sr(t.getProvider("auth").getImmediate());return(r=>new jk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(ep,tp,Fk(e)),st(ep,tp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=5*60,$k=Lm("authIdTokenMaxAge")||zk;let np=null;const Bk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$k)return;const i=n==null?void 0:n.token;np!==i&&(np=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vk(e=Lc()){const t=ir(e,"auth");if(t.isInitialized())return t.getImmediate();const n=uT(e,{popupRedirectResolver:Uk,persistence:[GT,MT,Bv]}),r=Lm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Bk(s.toString());NT(n,a,()=>a(n.currentUser)),RT(n,u=>a(u))}}const i=Nm("auth");return i&&dT(n,`http://${i}`),n}function Hk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}nT({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Hk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bk("Browser");const Qv=()=>{const[e,t]=z.useState(null),[n,r]=z.useState(null),[i,s]=z.useState(!1),a=Vk();async function u(_){r(!0),t(null);try{const{user:m}=await kT(a,_.email,_.password);return await AT(m,{displayName:_.displayName}),r(!1),m}catch(m){console.error(m.message),console.table(typeof m.message);let S;m.message.include("Password")?S="A senha precisa conter ao menos 6 caracteres.":m.message.include("email-already")?S="E-mail já cadastrado em nosso sistema.":S="Ocorreu um erro, tente novamente mais tarde.",r(!1),t(S)}}const c=async _=>{r(!0),t(null);try{await CT(a,_.email,_.password),r(!1)}catch(m){console.error(m.message),console.table(typeof m.message);let S;m.message.include("invalid-login-credentials")?S="Este usuário não tem registro em nossos sistemas":m.message.include("wrong-password")?S="Existe algum erro em suas credenciais de login":S="Ocorreu um erro, tente novamente mais tarde.",r(!1),t(S)}},h=()=>{OT(a)};return z.useEffect(()=>()=>s(!0),[]),{auth:a,createUser:u,error:e,loading:n,logout:h,login:c}},Wk=()=>{const[e,t]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),{login:a,error:u,loading:c}=Qv(),h=x_(),_=async m=>{m.preventDefault(),s("");const N=await a({email:e,password:n});console.table(N),h("/post/create")};return z.useEffect(()=>{u&&s(u)},[u]),j.jsxs("div",{className:l1.login,children:[j.jsx("h1",{children:"Entrar no Nomade Life"}),j.jsx("p",{children:"Entre no ambiente e compartilhe suas experiências"}),j.jsxs("form",{onSubmit:_,children:[j.jsxs("label",{children:[j.jsx("span",{children:"E-mail:"}),j.jsx("input",{type:"email",name:"email",required:!0,value:e,onChange:m=>t(m.target.value),placeholder:"Entre com seu e-mail"})]}),j.jsxs("label",{children:[j.jsx("span",{children:"Senha:"}),j.jsx("input",{type:"password",name:"password",required:!0,value:n,onChange:m=>r(m.target.value),placeholder:"Entre com sua senha"})]}),!c&&j.jsx("button",{className:"btn",children:"Login"}),c&&j.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),i&&j.jsx("p",{className:"error",children:i})]})]})},Kk="/logo-quadrada.png",Gk=()=>j.jsx("div",{children:j.jsx("img",{src:Kk,alt:"Logo da desenvolvedora"})}),qk={},Qk=()=>{const[e,t]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[a,u]=z.useState(""),[c,h]=z.useState(null),{createUser:_,error:m,loading:S}=Qv(),N=O=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(O),R=async O=>{O.preventDefault(),h("");const x={displayName:e,email:n,password:i,confirmPassword:a};if(i!==a){h("As senhas devem ser iguais");return}if(!N(n)){h("Email inválido");return}try{await _(x)}catch{h("Erro ao criar seu usuário. Tente novamente.")}};return z.useEffect(()=>{m&&h(m)},[m]),j.jsxs("div",{className:qk.register,children:[j.jsx("h1",{children:"Crie sua conta em nossa Plataforma"}),j.jsxs("form",{action:"",onSubmit:R,children:[j.jsxs("label",{htmlFor:"",children:[j.jsx("span",{children:"Nome:"}),j.jsx("input",{type:"text",name:"displayName",required:!0,placeholder:"Nome de usuário",value:e,onChange:O=>t(O.target.value)})]}),j.jsxs("label",{htmlFor:"",children:[j.jsx("span",{children:"Email:"}),j.jsx("input",{type:"email",name:"email",required:!0,placeholder:"Email de usuário",value:n,onChange:O=>r(O.target.value)})]}),j.jsxs("label",{htmlFor:"",children:[j.jsx("span",{children:"Senha:"}),j.jsx("input",{type:"password",name:"password",required:!0,placeholder:"Senha muito curta, mínimo 6 caracteres",value:i,onChange:O=>s(O.target.value)})]}),j.jsxs("label",{htmlFor:"",children:[j.jsx("span",{children:"Confirmar Senha:"}),j.jsx("input",{type:"password",name:"confirmPassword",required:!0,placeholder:"Confirme sua Senha",value:a,onChange:O=>u(O.target.value)})]}),!S&&j.jsx("button",{type:"submit",className:"btn",children:"Cadastrar"}),S&&j.jsx("button",{type:"submit",disabled:!0,className:"btn",children:"Carregando..."}),c&&j.jsx("p",{className:"error",children:c})]})]})};function Xk(){return j.jsx(j.Fragment,{children:j.jsxs(Y_,{children:[j.jsx(r1,{}),j.jsx("div",{className:"container",children:j.jsxs(q_,{children:[j.jsx(ao,{path:"/Home",element:j.jsx(Gk,{})}),j.jsx(ao,{path:"/login",element:j.jsx(Wk,{})}),j.jsx(ao,{path:"/register",element:j.jsx(Qk,{})})]})}),j.jsx(o1,{})]})})}gm(document.getElementById("root")).render(j.jsx(z.StrictMode,{children:j.jsx(Xk,{})}));
