(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))m(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const S of g.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&m(S)}).observe(document,{childList:!0,subtree:!0});function s(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function m(d){if(d.ep)return;d.ep=!0;const g=s(d);fetch(d.href,g)}})();var Ql={exports:{}},Pr={},ql={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function Lf(){if(rc)return Z;rc=1;var l=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.iterator;function N(h){return h===null||typeof h!="object"?null:(h=z&&h[z]||h["@@iterator"],typeof h=="function"?h:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,A={};function I(h,b,J){this.props=h,this.context=b,this.refs=A,this.updater=J||D}I.prototype.isReactComponent={},I.prototype.setState=function(h,b){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,b,"setState")},I.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function $(){}$.prototype=I.prototype;function K(h,b,J){this.props=h,this.context=b,this.refs=A,this.updater=J||D}var W=K.prototype=new $;W.constructor=K,O(W,I.prototype),W.isPureReactComponent=!0;var te=Array.isArray,se=Object.prototype.hasOwnProperty,we={current:null},he={key:!0,ref:!0,__self:!0,__source:!0};function _e(h,b,J){var ee,re={},oe=null,ue=null;if(b!=null)for(ee in b.ref!==void 0&&(ue=b.ref),b.key!==void 0&&(oe=""+b.key),b)se.call(b,ee)&&!he.hasOwnProperty(ee)&&(re[ee]=b[ee]);var le=arguments.length-2;if(le===1)re.children=J;else if(1<le){for(var pe=Array(le),Ke=0;Ke<le;Ke++)pe[Ke]=arguments[Ke+2];re.children=pe}if(h&&h.defaultProps)for(ee in le=h.defaultProps,le)re[ee]===void 0&&(re[ee]=le[ee]);return{$$typeof:l,type:h,key:oe,ref:ue,props:re,_owner:we.current}}function ke(h,b){return{$$typeof:l,type:h.type,key:b,ref:h.ref,props:h.props,_owner:h._owner}}function Ne(h){return typeof h=="object"&&h!==null&&h.$$typeof===l}function mt(h){var b={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(J){return b[J]})}var ht=/\/+/g;function Ge(h,b){return typeof h=="object"&&h!==null&&h.key!=null?mt(""+h.key):b.toString(36)}function lt(h,b,J,ee,re){var oe=typeof h;(oe==="undefined"||oe==="boolean")&&(h=null);var ue=!1;if(h===null)ue=!0;else switch(oe){case"string":case"number":ue=!0;break;case"object":switch(h.$$typeof){case l:case u:ue=!0}}if(ue)return ue=h,re=re(ue),h=ee===""?"."+Ge(ue,0):ee,te(re)?(J="",h!=null&&(J=h.replace(ht,"$&/")+"/"),lt(re,b,J,"",function(Ke){return Ke})):re!=null&&(Ne(re)&&(re=ke(re,J+(!re.key||ue&&ue.key===re.key?"":(""+re.key).replace(ht,"$&/")+"/")+h)),b.push(re)),1;if(ue=0,ee=ee===""?".":ee+":",te(h))for(var le=0;le<h.length;le++){oe=h[le];var pe=ee+Ge(oe,le);ue+=lt(oe,b,J,pe,re)}else if(pe=N(h),typeof pe=="function")for(h=pe.call(h),le=0;!(oe=h.next()).done;)oe=oe.value,pe=ee+Ge(oe,le++),ue+=lt(oe,b,J,pe,re);else if(oe==="object")throw b=String(h),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ue}function gt(h,b,J){if(h==null)return h;var ee=[],re=0;return lt(h,ee,"","",function(oe){return b.call(J,oe,re++)}),ee}function Ue(h){if(h._status===-1){var b=h._result;b=b(),b.then(function(J){(h._status===0||h._status===-1)&&(h._status=1,h._result=J)},function(J){(h._status===0||h._status===-1)&&(h._status=2,h._result=J)}),h._status===-1&&(h._status=0,h._result=b)}if(h._status===1)return h._result.default;throw h._result}var xe={current:null},M={transition:null},Y={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:M,ReactCurrentOwner:we};function B(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:gt,forEach:function(h,b,J){gt(h,function(){b.apply(this,arguments)},J)},count:function(h){var b=0;return gt(h,function(){b++}),b},toArray:function(h){return gt(h,function(b){return b})||[]},only:function(h){if(!Ne(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},Z.Component=I,Z.Fragment=s,Z.Profiler=d,Z.PureComponent=K,Z.StrictMode=m,Z.Suspense=k,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Z.act=B,Z.cloneElement=function(h,b,J){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var ee=O({},h.props),re=h.key,oe=h.ref,ue=h._owner;if(b!=null){if(b.ref!==void 0&&(oe=b.ref,ue=we.current),b.key!==void 0&&(re=""+b.key),h.type&&h.type.defaultProps)var le=h.type.defaultProps;for(pe in b)se.call(b,pe)&&!he.hasOwnProperty(pe)&&(ee[pe]=b[pe]===void 0&&le!==void 0?le[pe]:b[pe])}var pe=arguments.length-2;if(pe===1)ee.children=J;else if(1<pe){le=Array(pe);for(var Ke=0;Ke<pe;Ke++)le[Ke]=arguments[Ke+2];ee.children=le}return{$$typeof:l,type:h.type,key:re,ref:oe,props:ee,_owner:ue}},Z.createContext=function(h){return h={$$typeof:S,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:g,_context:h},h.Consumer=h},Z.createElement=_e,Z.createFactory=function(h){var b=_e.bind(null,h);return b.type=h,b},Z.createRef=function(){return{current:null}},Z.forwardRef=function(h){return{$$typeof:E,render:h}},Z.isValidElement=Ne,Z.lazy=function(h){return{$$typeof:T,_payload:{_status:-1,_result:h},_init:Ue}},Z.memo=function(h,b){return{$$typeof:x,type:h,compare:b===void 0?null:b}},Z.startTransition=function(h){var b=M.transition;M.transition={};try{h()}finally{M.transition=b}},Z.unstable_act=B,Z.useCallback=function(h,b){return xe.current.useCallback(h,b)},Z.useContext=function(h){return xe.current.useContext(h)},Z.useDebugValue=function(){},Z.useDeferredValue=function(h){return xe.current.useDeferredValue(h)},Z.useEffect=function(h,b){return xe.current.useEffect(h,b)},Z.useId=function(){return xe.current.useId()},Z.useImperativeHandle=function(h,b,J){return xe.current.useImperativeHandle(h,b,J)},Z.useInsertionEffect=function(h,b){return xe.current.useInsertionEffect(h,b)},Z.useLayoutEffect=function(h,b){return xe.current.useLayoutEffect(h,b)},Z.useMemo=function(h,b){return xe.current.useMemo(h,b)},Z.useReducer=function(h,b,J){return xe.current.useReducer(h,b,J)},Z.useRef=function(h){return xe.current.useRef(h)},Z.useState=function(h){return xe.current.useState(h)},Z.useSyncExternalStore=function(h,b,J){return xe.current.useSyncExternalStore(h,b,J)},Z.useTransition=function(){return xe.current.useTransition()},Z.version="18.3.1",Z}var oc;function na(){return oc||(oc=1,ql.exports=Lf()),ql.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ic;function jf(){if(ic)return Pr;ic=1;var l=na(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function S(E,k,x){var T,z={},N=null,D=null;x!==void 0&&(N=""+x),k.key!==void 0&&(N=""+k.key),k.ref!==void 0&&(D=k.ref);for(T in k)m.call(k,T)&&!g.hasOwnProperty(T)&&(z[T]=k[T]);if(E&&E.defaultProps)for(T in k=E.defaultProps,k)z[T]===void 0&&(z[T]=k[T]);return{$$typeof:u,type:E,key:N,ref:D,props:z,_owner:d.current}}return Pr.Fragment=s,Pr.jsx=S,Pr.jsxs=S,Pr}var lc;function Tf(){return lc||(lc=1,Ql.exports=jf()),Ql.exports}var C=Tf(),_=na(),Qo={},Gl={exports:{}},qe={},Kl={exports:{}},Yl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function Of(){return ac||(ac=1,function(l){function u(M,Y){var B=M.length;M.push(Y);e:for(;0<B;){var h=B-1>>>1,b=M[h];if(0<d(b,Y))M[h]=Y,M[B]=b,B=h;else break e}}function s(M){return M.length===0?null:M[0]}function m(M){if(M.length===0)return null;var Y=M[0],B=M.pop();if(B!==Y){M[0]=B;e:for(var h=0,b=M.length,J=b>>>1;h<J;){var ee=2*(h+1)-1,re=M[ee],oe=ee+1,ue=M[oe];if(0>d(re,B))oe<b&&0>d(ue,re)?(M[h]=ue,M[oe]=B,h=oe):(M[h]=re,M[ee]=B,h=ee);else if(oe<b&&0>d(ue,B))M[h]=ue,M[oe]=B,h=oe;else break e}}return Y}function d(M,Y){var B=M.sortIndex-Y.sortIndex;return B!==0?B:M.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var S=Date,E=S.now();l.unstable_now=function(){return S.now()-E}}var k=[],x=[],T=1,z=null,N=3,D=!1,O=!1,A=!1,I=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(M){for(var Y=s(x);Y!==null;){if(Y.callback===null)m(x);else if(Y.startTime<=M)m(x),Y.sortIndex=Y.expirationTime,u(k,Y);else break;Y=s(x)}}function te(M){if(A=!1,W(M),!O)if(s(k)!==null)O=!0,Ue(se);else{var Y=s(x);Y!==null&&xe(te,Y.startTime-M)}}function se(M,Y){O=!1,A&&(A=!1,$(_e),_e=-1),D=!0;var B=N;try{for(W(Y),z=s(k);z!==null&&(!(z.expirationTime>Y)||M&&!mt());){var h=z.callback;if(typeof h=="function"){z.callback=null,N=z.priorityLevel;var b=h(z.expirationTime<=Y);Y=l.unstable_now(),typeof b=="function"?z.callback=b:z===s(k)&&m(k),W(Y)}else m(k);z=s(k)}if(z!==null)var J=!0;else{var ee=s(x);ee!==null&&xe(te,ee.startTime-Y),J=!1}return J}finally{z=null,N=B,D=!1}}var we=!1,he=null,_e=-1,ke=5,Ne=-1;function mt(){return!(l.unstable_now()-Ne<ke)}function ht(){if(he!==null){var M=l.unstable_now();Ne=M;var Y=!0;try{Y=he(!0,M)}finally{Y?Ge():(we=!1,he=null)}}else we=!1}var Ge;if(typeof K=="function")Ge=function(){K(ht)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,gt=lt.port2;lt.port1.onmessage=ht,Ge=function(){gt.postMessage(null)}}else Ge=function(){I(ht,0)};function Ue(M){he=M,we||(we=!0,Ge())}function xe(M,Y){_e=I(function(){M(l.unstable_now())},Y)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(M){M.callback=null},l.unstable_continueExecution=function(){O||D||(O=!0,Ue(se))},l.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<M?Math.floor(1e3/M):5},l.unstable_getCurrentPriorityLevel=function(){return N},l.unstable_getFirstCallbackNode=function(){return s(k)},l.unstable_next=function(M){switch(N){case 1:case 2:case 3:var Y=3;break;default:Y=N}var B=N;N=Y;try{return M()}finally{N=B}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var B=N;N=M;try{return Y()}finally{N=B}},l.unstable_scheduleCallback=function(M,Y,B){var h=l.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?h+B:h):B=h,M){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=B+b,M={id:T++,callback:Y,priorityLevel:M,startTime:B,expirationTime:b,sortIndex:-1},B>h?(M.sortIndex=B,u(x,M),s(k)===null&&M===s(x)&&(A?($(_e),_e=-1):A=!0,xe(te,B-h))):(M.sortIndex=b,u(k,M),O||D||(O=!0,Ue(se))),M},l.unstable_shouldYield=mt,l.unstable_wrapCallback=function(M){var Y=N;return function(){var B=N;N=Y;try{return M.apply(this,arguments)}finally{N=B}}}}(Yl)),Yl}var sc;function If(){return sc||(sc=1,Kl.exports=Of()),Kl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc;function zf(){if(uc)return qe;uc=1;var l=na(),u=If();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,d={};function g(e,t){S(e,t),S(e+"Capture",t)}function S(e,t){for(d[e]=t,e=0;e<t.length;e++)m.add(t[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},z={};function N(e){return k.call(z,e)?!0:k.call(T,e)?!1:x.test(e)?z[e]=!0:(T[e]=!0,!1)}function D(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O(e,t,n,r){if(t===null||typeof t>"u"||D(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($,K);I[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($,K);I[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($,K);I[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,n,r){var o=I.hasOwnProperty(t)?I[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O(t,n,o,r)&&(n=null),r||o===null?N(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var te=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),we=Symbol.for("react.portal"),he=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),Ne=Symbol.for("react.provider"),mt=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),M=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,h;function b(e){if(h===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);h=t&&t[1]||""}return`
`+h+e}var J=!1;function ee(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var o=w.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,c=i.length-1;1<=a&&0<=c&&o[a]!==i[c];)c--;for(;1<=a&&0<=c;a--,c--)if(o[a]!==i[c]){if(a!==1||c!==1)do if(a--,c--,0>c||o[a]!==i[c]){var f=`
`+o[a].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=a&&0<=c);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?b(e):""}function re(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case he:return"Fragment";case we:return"Portal";case ke:return"Profiler";case _e:return"StrictMode";case Ge:return"Suspense";case lt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mt:return(e.displayName||"Context")+".Consumer";case Ne:return(e._context.displayName||"Context")+".Provider";case ht:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gt:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(t);case 8:return t===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ke(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Ke(e))}function ua(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zo(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ca(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function da(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function ei(e,t){da(e,t);var n=le(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&ti(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ti(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function gn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Vn(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function ma(e,t){var n=le(t.value),r=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ha(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ga(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ga(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,ya=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){Oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function va(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function wa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=va(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ic=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,t){if(t){if(Ic[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,yn=null,vn=null;function ka(e){if(e=pr(e)){if(typeof si!="function")throw Error(s(280));var t=e.stateNode;t&&(t=lo(t),si(e.stateNode,e.type,t))}}function xa(e){yn?vn?vn.push(e):vn=[e]:yn=e}function Sa(){if(yn){var e=yn,t=vn;if(vn=yn=null,ka(e),t)for(e=0;e<t.length;e++)ka(t[e])}}function Ea(e,t){return e(t)}function Ca(){}var ui=!1;function _a(e,t,n){if(ui)return e(t,n);ui=!0;try{return Ea(e,t,n)}finally{ui=!1,(yn!==null||vn!==null)&&(Ca(),Sa())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=lo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var ci=!1;if(E)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){ci=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{ci=!1}function zc(e,t,n,r,o,i,a,c,f){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(P){this.onError(P)}}var Gn=!1,Mr=null,Fr=!1,di=null,Dc={onError:function(e){Gn=!0,Mr=e}};function $c(e,t,n,r,o,i,a,c,f){Gn=!1,Mr=null,zc.apply(Dc,arguments)}function Mc(e,t,n,r,o,i,a,c,f){if($c.apply(this,arguments),Gn){if(Gn){var w=Mr;Gn=!1,Mr=null}else throw Error(s(198));Fr||(Fr=!0,di=w)}}function en(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ra(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ba(e){if(en(e)!==e)throw Error(s(188))}function Fc(e){var t=e.alternate;if(!t){if(t=en(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ba(o),e;if(i===r)return ba(o),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,c=o.child;c;){if(c===n){a=!0,n=o,r=i;break}if(c===r){a=!0,r=o,n=i;break}c=c.sibling}if(!a){for(c=i.child;c;){if(c===n){a=!0,n=i,r=o;break}if(c===r){a=!0,r=i,n=o;break}c=c.sibling}if(!a)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Pa(e){return e=Fc(e),e!==null?Na(e):null}function Na(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Na(e);if(t!==null)return t;e=e.sibling}return null}var La=u.unstable_scheduleCallback,ja=u.unstable_cancelCallback,Ac=u.unstable_shouldYield,Uc=u.unstable_requestPaint,Ee=u.unstable_now,Bc=u.unstable_getCurrentPriorityLevel,fi=u.unstable_ImmediatePriority,Ta=u.unstable_UserBlockingPriority,Ar=u.unstable_NormalPriority,Vc=u.unstable_LowPriority,Oa=u.unstable_IdlePriority,Ur=null,yt=null;function Hc(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ur,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:qc,Wc=Math.log,Qc=Math.LN2;function qc(e){return e>>>=0,e===0?32:31-(Wc(e)/Qc|0)|0}var Br=64,Vr=4194304;function Kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~o;c!==0?r=Kn(c):(i&=a,i!==0&&(r=Kn(i)))}else a=n&~o,a!==0?r=Kn(a):i!==0&&(r=Kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),o=1<<n,r|=e[n],t&=~o;return r}function Gc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),c=1<<a,f=o[a];f===-1?(!(c&n)||c&r)&&(o[a]=Gc(c,t)):f<=t&&(e.expiredLanes|=c),i&=~c}}function pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ia(){var e=Br;return Br<<=1,!(Br&4194240)&&(Br=64),e}function mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function Yc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function hi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ae=0;function za(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Da,gi,$a,Ma,Fa,yi=!1,Wr=[],It=null,zt=null,Dt=null,Xn=new Map,Jn=new Map,$t=[],Xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Aa(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Zn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&gi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Jc(e,t,n,r,o){switch(t){case"focusin":return It=Zn(It,e,t,n,r,o),!0;case"dragenter":return zt=Zn(zt,e,t,n,r,o),!0;case"mouseover":return Dt=Zn(Dt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Xn.set(i,Zn(Xn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Jn.set(i,Zn(Jn.get(i)||null,e,t,n,r,o)),!0}return!1}function Ua(e){var t=tn(e.target);if(t!==null){var n=en(t);if(n!==null){if(t=n.tag,t===13){if(t=Ra(n),t!==null){e.blockedOn=t,Fa(e.priority,function(){$a(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);li=r,n.target.dispatchEvent(r),li=null}else return t=pr(n),t!==null&&gi(t),e.blockedOn=n,!1;t.shift()}return!0}function Ba(e,t,n){Qr(e)&&n.delete(t)}function Zc(){yi=!1,It!==null&&Qr(It)&&(It=null),zt!==null&&Qr(zt)&&(zt=null),Dt!==null&&Qr(Dt)&&(Dt=null),Xn.forEach(Ba),Jn.forEach(Ba)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,yi||(yi=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Zc)))}function tr(e){function t(o){return er(o,e)}if(0<Wr.length){er(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&er(It,e),zt!==null&&er(zt,e),Dt!==null&&er(Dt,e),Xn.forEach(t),Jn.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Ua(n),n.blockedOn===null&&$t.shift()}var wn=te.ReactCurrentBatchConfig,qr=!0;function ed(e,t,n,r){var o=ae,i=wn.transition;wn.transition=null;try{ae=1,vi(e,t,n,r)}finally{ae=o,wn.transition=i}}function td(e,t,n,r){var o=ae,i=wn.transition;wn.transition=null;try{ae=4,vi(e,t,n,r)}finally{ae=o,wn.transition=i}}function vi(e,t,n,r){if(qr){var o=wi(e,t,n,r);if(o===null)Di(e,t,r,Gr,n),Aa(e,r);else if(Jc(o,e,t,n,r))r.stopPropagation();else if(Aa(e,r),t&4&&-1<Xc.indexOf(e)){for(;o!==null;){var i=pr(o);if(i!==null&&Da(i),i=wi(e,t,n,r),i===null&&Di(e,t,r,Gr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Di(e,t,r,null,n)}}var Gr=null;function wi(e,t,n,r){if(Gr=null,e=ai(r),e=tn(e),e!==null)if(t=en(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ra(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bc()){case fi:return 1;case Ta:return 4;case Ar:case Vc:return 16;case Oa:return 536870912;default:return 16}default:return 16}}var Mt=null,ki=null,Kr=null;function Ha(){if(Kr)return Kr;var e,t=ki,n=t.length,r,o="value"in Mt?Mt.value:Mt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Kr=o.slice(e,1<r?1-r:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function Wa(){return!1}function Ye(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xr:Wa,this.isPropagationStopped=Wa,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=Ye(kn),nr=B({},kn,{view:0,detail:0}),nd=Ye(nr),Si,Ei,rr,Jr=B({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Si=e.screenX-rr.screenX,Ei=e.screenY-rr.screenY):Ei=Si=0,rr=e),Si)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),Qa=Ye(Jr),rd=B({},Jr,{dataTransfer:0}),od=Ye(rd),id=B({},nr,{relatedTarget:0}),Ci=Ye(id),ld=B({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=Ye(ld),sd=B({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ud=Ye(sd),cd=B({},kn,{data:0}),qa=Ye(cd),dd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pd[e])?!!t[e]:!1}function _i(){return md}var hd=B({},nr,{key:function(e){if(e.key){var t=dd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_i,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=Ye(hd),yd=B({},Jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ga=Ye(yd),vd=B({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_i}),wd=Ye(vd),kd=B({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=Ye(kd),Sd=B({},Jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ed=Ye(Sd),Cd=[9,13,27,32],Ri=E&&"CompositionEvent"in window,or=null;E&&"documentMode"in document&&(or=document.documentMode);var _d=E&&"TextEvent"in window&&!or,Ka=E&&(!Ri||or&&8<or&&11>=or),Ya=" ",Xa=!1;function Ja(e,t){switch(e){case"keyup":return Cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Za(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Rd(e,t){switch(e){case"compositionend":return Za(t);case"keypress":return t.which!==32?null:(Xa=!0,Ya);case"textInput":return e=t.data,e===Ya&&Xa?null:e;default:return null}}function bd(e,t){if(xn)return e==="compositionend"||!Ri&&Ja(e,t)?(e=Ha(),Kr=ki=Mt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ka&&t.locale!=="ko"?null:t.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pd[e.type]:t==="textarea"}function ts(e,t,n,r){xa(r),t=ro(t,"onChange"),0<t.length&&(n=new xi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,lr=null;function Nd(e){ws(e,0)}function Zr(e){var t=Rn(e);if(ua(t))return e}function Ld(e,t){if(e==="change")return t}var ns=!1;if(E){var bi;if(E){var Pi="oninput"in document;if(!Pi){var rs=document.createElement("div");rs.setAttribute("oninput","return;"),Pi=typeof rs.oninput=="function"}bi=Pi}else bi=!1;ns=bi&&(!document.documentMode||9<document.documentMode)}function os(){ir&&(ir.detachEvent("onpropertychange",is),lr=ir=null)}function is(e){if(e.propertyName==="value"&&Zr(lr)){var t=[];ts(t,lr,e,ai(e)),_a(Nd,t)}}function jd(e,t,n){e==="focusin"?(os(),ir=t,lr=n,ir.attachEvent("onpropertychange",is)):e==="focusout"&&os()}function Td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zr(lr)}function Od(e,t){if(e==="click")return Zr(t)}function Id(e,t){if(e==="input"||e==="change")return Zr(t)}function zd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:zd;function ar(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!k.call(t,o)||!st(e[o],t[o]))return!1}return!0}function ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var n=ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ls(n)}}function ss(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ss(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function us(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function Ni(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dd(e){var t=us(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ss(n.ownerDocument.documentElement,n)){if(r!==null&&Ni(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=as(n,i);var a=as(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $d=E&&"documentMode"in document&&11>=document.documentMode,Sn=null,Li=null,sr=null,ji=!1;function cs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ji||Sn==null||Sn!==Dr(r)||(r=Sn,"selectionStart"in r&&Ni(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&ar(sr,r)||(sr=r,r=ro(Li,"onSelect"),0<r.length&&(t=new xi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},Ti={},ds={};E&&(ds=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function to(e){if(Ti[e])return Ti[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ds)return Ti[e]=t[n];return e}var fs=to("animationend"),ps=to("animationiteration"),ms=to("animationstart"),hs=to("transitionend"),gs=new Map,ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){gs.set(e,t),g(t,[e])}for(var Oi=0;Oi<ys.length;Oi++){var Ii=ys[Oi],Md=Ii.toLowerCase(),Fd=Ii[0].toUpperCase()+Ii.slice(1);Ft(Md,"on"+Fd)}Ft(fs,"onAnimationEnd"),Ft(ps,"onAnimationIteration"),Ft(ms,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(hs,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ad=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function vs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mc(r,t,void 0,e),e.currentTarget=null}function ws(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],f=c.instance,w=c.currentTarget;if(c=c.listener,f!==i&&o.isPropagationStopped())break e;vs(o,c,w),i=f}else for(a=0;a<r.length;a++){if(c=r[a],f=c.instance,w=c.currentTarget,c=c.listener,f!==i&&o.isPropagationStopped())break e;vs(o,c,w),i=f}}}if(Fr)throw e=di,Fr=!1,di=null,e}function de(e,t){var n=t[Bi];n===void 0&&(n=t[Bi]=new Set);var r=e+"__bubble";n.has(r)||(ks(t,e,2,!1),n.add(r))}function zi(e,t,n){var r=0;t&&(r|=4),ks(n,e,r,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[no]){e[no]=!0,m.forEach(function(n){n!=="selectionchange"&&(Ad.has(n)||zi(n,!1,e),zi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,zi("selectionchange",!1,t))}}function ks(e,t,n,r){switch(Va(t)){case 1:var o=ed;break;case 4:o=td;break;default:o=vi}n=o.bind(null,t,n,e),o=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Di(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var f=a.tag;if((f===3||f===4)&&(f=a.stateNode.containerInfo,f===o||f.nodeType===8&&f.parentNode===o))return;a=a.return}for(;c!==null;){if(a=tn(c),a===null)return;if(f=a.tag,f===5||f===6){r=i=a;continue e}c=c.parentNode}}r=r.return}_a(function(){var w=i,P=ai(n),L=[];e:{var R=gs.get(e);if(R!==void 0){var F=xi,V=e;switch(e){case"keypress":if(Yr(n)===0)break e;case"keydown":case"keyup":F=gd;break;case"focusin":V="focus",F=Ci;break;case"focusout":V="blur",F=Ci;break;case"beforeblur":case"afterblur":F=Ci;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=wd;break;case fs:case ps:case ms:F=ad;break;case hs:F=xd;break;case"scroll":F=nd;break;case"wheel":F=Ed;break;case"copy":case"cut":case"paste":F=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Ga}var H=(t&4)!==0,Ce=!H&&e==="scroll",y=H?R!==null?R+"Capture":null:R;H=[];for(var p=w,v;p!==null;){v=p;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,y!==null&&(j=Qn(p,y),j!=null&&H.push(dr(p,j,v)))),Ce)break;p=p.return}0<H.length&&(R=new F(R,V,null,n,P),L.push({event:R,listeners:H}))}}if(!(t&7)){e:{if(R=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",R&&n!==li&&(V=n.relatedTarget||n.fromElement)&&(tn(V)||V[Ct]))break e;if((F||R)&&(R=P.window===P?P:(R=P.ownerDocument)?R.defaultView||R.parentWindow:window,F?(V=n.relatedTarget||n.toElement,F=w,V=V?tn(V):null,V!==null&&(Ce=en(V),V!==Ce||V.tag!==5&&V.tag!==6)&&(V=null)):(F=null,V=w),F!==V)){if(H=Qa,j="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(H=Ga,j="onPointerLeave",y="onPointerEnter",p="pointer"),Ce=F==null?R:Rn(F),v=V==null?R:Rn(V),R=new H(j,p+"leave",F,n,P),R.target=Ce,R.relatedTarget=v,j=null,tn(P)===w&&(H=new H(y,p+"enter",V,n,P),H.target=v,H.relatedTarget=Ce,j=H),Ce=j,F&&V)t:{for(H=F,y=V,p=0,v=H;v;v=Cn(v))p++;for(v=0,j=y;j;j=Cn(j))v++;for(;0<p-v;)H=Cn(H),p--;for(;0<v-p;)y=Cn(y),v--;for(;p--;){if(H===y||y!==null&&H===y.alternate)break t;H=Cn(H),y=Cn(y)}H=null}else H=null;F!==null&&xs(L,R,F,H,!1),V!==null&&Ce!==null&&xs(L,Ce,V,H,!0)}}e:{if(R=w?Rn(w):window,F=R.nodeName&&R.nodeName.toLowerCase(),F==="select"||F==="input"&&R.type==="file")var Q=Ld;else if(es(R))if(ns)Q=Id;else{Q=Td;var q=jd}else(F=R.nodeName)&&F.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(Q=Od);if(Q&&(Q=Q(e,w))){ts(L,Q,n,P);break e}q&&q(e,R,w),e==="focusout"&&(q=R._wrapperState)&&q.controlled&&R.type==="number"&&ti(R,"number",R.value)}switch(q=w?Rn(w):window,e){case"focusin":(es(q)||q.contentEditable==="true")&&(Sn=q,Li=w,sr=null);break;case"focusout":sr=Li=Sn=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,cs(L,n,P);break;case"selectionchange":if($d)break;case"keydown":case"keyup":cs(L,n,P)}var G;if(Ri)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else xn?Ja(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&(Ka&&n.locale!=="ko"&&(xn||X!=="onCompositionStart"?X==="onCompositionEnd"&&xn&&(G=Ha()):(Mt=P,ki="value"in Mt?Mt.value:Mt.textContent,xn=!0)),q=ro(w,X),0<q.length&&(X=new qa(X,e,null,n,P),L.push({event:X,listeners:q}),G?X.data=G:(G=Za(n),G!==null&&(X.data=G)))),(G=_d?Rd(e,n):bd(e,n))&&(w=ro(w,"onBeforeInput"),0<w.length&&(P=new qa("onBeforeInput","beforeinput",null,n,P),L.push({event:P,listeners:w}),P.data=G))}ws(L,t)})}function dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qn(e,n),i!=null&&r.unshift(dr(e,i,o)),i=Qn(e,t),i!=null&&r.push(dr(e,i,o))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xs(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var c=n,f=c.alternate,w=c.stateNode;if(f!==null&&f===r)break;c.tag===5&&w!==null&&(c=w,o?(f=Qn(n,i),f!=null&&a.unshift(dr(n,f,c))):o||(f=Qn(n,i),f!=null&&a.push(dr(n,f,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ud=/\r\n?/g,Bd=/\u0000|\uFFFD/g;function Ss(e){return(typeof e=="string"?e:""+e).replace(Ud,`
`).replace(Bd,"")}function oo(e,t,n){if(t=Ss(t),Ss(e)!==t&&n)throw Error(s(425))}function io(){}var $i=null,Mi=null;function Fi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout=="function"?setTimeout:void 0,Vd=typeof clearTimeout=="function"?clearTimeout:void 0,Es=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof Es<"u"?function(e){return Es.resolve(null).then(e).catch(Wd)}:Ai;function Wd(e){setTimeout(function(){throw e})}function Ui(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);tr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),vt="__reactFiber$"+_n,fr="__reactProps$"+_n,Ct="__reactContainer$"+_n,Bi="__reactEvents$"+_n,Qd="__reactListeners$"+_n,qd="__reactHandles$"+_n;function tn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cs(e);e!==null;){if(n=e[vt])return n;e=Cs(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[vt]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function lo(e){return e[fr]||null}var Vi=[],bn=-1;function Ut(e){return{current:e}}function fe(e){0>bn||(e.current=Vi[bn],Vi[bn]=null,bn--)}function ce(e,t){bn++,Vi[bn]=e.current,e.current=t}var Bt={},ze=Ut(Bt),Be=Ut(!1),nn=Bt;function Pn(e,t){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function ao(){fe(Be),fe(ze)}function _s(e,t,n){if(ze.current!==Bt)throw Error(s(168));ce(ze,t),ce(Be,n)}function Rs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(s(108,ue(e)||"Unknown",o));return B({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,nn=ze.current,ce(ze,e),ce(Be,Be.current),!0}function bs(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Rs(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,fe(Be),fe(ze),ce(ze,e)):fe(Be),ce(Be,n)}var _t=null,uo=!1,Hi=!1;function Ps(e){_t===null?_t=[e]:_t.push(e)}function Gd(e){uo=!0,Ps(e)}function Vt(){if(!Hi&&_t!==null){Hi=!0;var e=0,t=ae;try{var n=_t;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,uo=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),La(fi,Vt),o}finally{ae=t,Hi=!1}}return null}var Nn=[],Ln=0,co=null,fo=0,et=[],tt=0,rn=null,Rt=1,bt="";function on(e,t){Nn[Ln++]=fo,Nn[Ln++]=co,co=e,fo=t}function Ns(e,t,n){et[tt++]=Rt,et[tt++]=bt,et[tt++]=rn,rn=e;var r=Rt;e=bt;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Rt=1<<32-at(t)+o|n<<o|r,bt=i+e}else Rt=1<<i|n<<o|r,bt=e}function Wi(e){e.return!==null&&(on(e,1),Ns(e,1,0))}function Qi(e){for(;e===co;)co=Nn[--Ln],Nn[Ln]=null,fo=Nn[--Ln],Nn[Ln]=null;for(;e===rn;)rn=et[--tt],et[tt]=null,bt=et[--tt],et[tt]=null,Rt=et[--tt],et[tt]=null}var Xe=null,Je=null,me=!1,ut=null;function Ls(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Je=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:Rt,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Je=null,!0):!1;default:return!1}}function qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gi(e){if(me){var t=Je;if(t){var n=t;if(!js(e,t)){if(qi(e))throw Error(s(418));t=At(n.nextSibling);var r=Xe;t&&js(e,t)?Ls(r,n):(e.flags=e.flags&-4097|2,me=!1,Xe=e)}}else{if(qi(e))throw Error(s(418));e.flags=e.flags&-4097|2,me=!1,Xe=e}}}function Ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function po(e){if(e!==Xe)return!1;if(!me)return Ts(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fi(e.type,e.memoizedProps)),t&&(t=Je)){if(qi(e))throw Os(),Error(s(418));for(;t;)Ls(e,t),t=At(t.nextSibling)}if(Ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Xe?At(e.stateNode.nextSibling):null;return!0}function Os(){for(var e=Je;e;)e=At(e.nextSibling)}function jn(){Je=Xe=null,me=!1}function Ki(e){ut===null?ut=[e]:ut.push(e)}var Kd=te.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var c=o.refs;a===null?delete c[i]:c[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Is(e){var t=e._init;return t(e._payload)}function zs(e){function t(y,p){if(e){var v=y.deletions;v===null?(y.deletions=[p],y.flags|=16):v.push(p)}}function n(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function o(y,p){return y=Xt(y,p),y.index=0,y.sibling=null,y}function i(y,p,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<p?(y.flags|=2,p):v):(y.flags|=2,p)):(y.flags|=1048576,p)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,p,v,j){return p===null||p.tag!==6?(p=Al(v,y.mode,j),p.return=y,p):(p=o(p,v),p.return=y,p)}function f(y,p,v,j){var Q=v.type;return Q===he?P(y,p,v.props.children,j,v.key):p!==null&&(p.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ue&&Is(Q)===p.type)?(j=o(p,v.props),j.ref=mr(y,p,v),j.return=y,j):(j=Mo(v.type,v.key,v.props,null,y.mode,j),j.ref=mr(y,p,v),j.return=y,j)}function w(y,p,v,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ul(v,y.mode,j),p.return=y,p):(p=o(p,v.children||[]),p.return=y,p)}function P(y,p,v,j,Q){return p===null||p.tag!==7?(p=pn(v,y.mode,j,Q),p.return=y,p):(p=o(p,v),p.return=y,p)}function L(y,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Al(""+p,y.mode,v),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case se:return v=Mo(p.type,p.key,p.props,null,y.mode,v),v.ref=mr(y,null,p),v.return=y,v;case we:return p=Ul(p,y.mode,v),p.return=y,p;case Ue:var j=p._init;return L(y,j(p._payload),v)}if(Vn(p)||Y(p))return p=pn(p,y.mode,v,null),p.return=y,p;mo(y,p)}return null}function R(y,p,v,j){var Q=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return Q!==null?null:c(y,p,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case se:return v.key===Q?f(y,p,v,j):null;case we:return v.key===Q?w(y,p,v,j):null;case Ue:return Q=v._init,R(y,p,Q(v._payload),j)}if(Vn(v)||Y(v))return Q!==null?null:P(y,p,v,j,null);mo(y,v)}return null}function F(y,p,v,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number")return y=y.get(v)||null,c(p,y,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case se:return y=y.get(j.key===null?v:j.key)||null,f(p,y,j,Q);case we:return y=y.get(j.key===null?v:j.key)||null,w(p,y,j,Q);case Ue:var q=j._init;return F(y,p,v,q(j._payload),Q)}if(Vn(j)||Y(j))return y=y.get(v)||null,P(p,y,j,Q,null);mo(p,j)}return null}function V(y,p,v,j){for(var Q=null,q=null,G=p,X=p=0,Te=null;G!==null&&X<v.length;X++){G.index>X?(Te=G,G=null):Te=G.sibling;var ie=R(y,G,v[X],j);if(ie===null){G===null&&(G=Te);break}e&&G&&ie.alternate===null&&t(y,G),p=i(ie,p,X),q===null?Q=ie:q.sibling=ie,q=ie,G=Te}if(X===v.length)return n(y,G),me&&on(y,X),Q;if(G===null){for(;X<v.length;X++)G=L(y,v[X],j),G!==null&&(p=i(G,p,X),q===null?Q=G:q.sibling=G,q=G);return me&&on(y,X),Q}for(G=r(y,G);X<v.length;X++)Te=F(G,y,X,v[X],j),Te!==null&&(e&&Te.alternate!==null&&G.delete(Te.key===null?X:Te.key),p=i(Te,p,X),q===null?Q=Te:q.sibling=Te,q=Te);return e&&G.forEach(function(Jt){return t(y,Jt)}),me&&on(y,X),Q}function H(y,p,v,j){var Q=Y(v);if(typeof Q!="function")throw Error(s(150));if(v=Q.call(v),v==null)throw Error(s(151));for(var q=Q=null,G=p,X=p=0,Te=null,ie=v.next();G!==null&&!ie.done;X++,ie=v.next()){G.index>X?(Te=G,G=null):Te=G.sibling;var Jt=R(y,G,ie.value,j);if(Jt===null){G===null&&(G=Te);break}e&&G&&Jt.alternate===null&&t(y,G),p=i(Jt,p,X),q===null?Q=Jt:q.sibling=Jt,q=Jt,G=Te}if(ie.done)return n(y,G),me&&on(y,X),Q;if(G===null){for(;!ie.done;X++,ie=v.next())ie=L(y,ie.value,j),ie!==null&&(p=i(ie,p,X),q===null?Q=ie:q.sibling=ie,q=ie);return me&&on(y,X),Q}for(G=r(y,G);!ie.done;X++,ie=v.next())ie=F(G,y,X,ie.value,j),ie!==null&&(e&&ie.alternate!==null&&G.delete(ie.key===null?X:ie.key),p=i(ie,p,X),q===null?Q=ie:q.sibling=ie,q=ie);return e&&G.forEach(function(Nf){return t(y,Nf)}),me&&on(y,X),Q}function Ce(y,p,v,j){if(typeof v=="object"&&v!==null&&v.type===he&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case se:e:{for(var Q=v.key,q=p;q!==null;){if(q.key===Q){if(Q=v.type,Q===he){if(q.tag===7){n(y,q.sibling),p=o(q,v.props.children),p.return=y,y=p;break e}}else if(q.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ue&&Is(Q)===q.type){n(y,q.sibling),p=o(q,v.props),p.ref=mr(y,q,v),p.return=y,y=p;break e}n(y,q);break}else t(y,q);q=q.sibling}v.type===he?(p=pn(v.props.children,y.mode,j,v.key),p.return=y,y=p):(j=Mo(v.type,v.key,v.props,null,y.mode,j),j.ref=mr(y,p,v),j.return=y,y=j)}return a(y);case we:e:{for(q=v.key;p!==null;){if(p.key===q)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(y,p.sibling),p=o(p,v.children||[]),p.return=y,y=p;break e}else{n(y,p);break}else t(y,p);p=p.sibling}p=Ul(v,y.mode,j),p.return=y,y=p}return a(y);case Ue:return q=v._init,Ce(y,p,q(v._payload),j)}if(Vn(v))return V(y,p,v,j);if(Y(v))return H(y,p,v,j);mo(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(y,p.sibling),p=o(p,v),p.return=y,y=p):(n(y,p),p=Al(v,y.mode,j),p.return=y,y=p),a(y)):n(y,p)}return Ce}var Tn=zs(!0),Ds=zs(!1),ho=Ut(null),go=null,On=null,Yi=null;function Xi(){Yi=On=go=null}function Ji(e){var t=ho.current;fe(ho),e._currentValue=t}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){go=e,Yi=On=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Yi!==e)if(e={context:e,memoizedValue:t,next:null},On===null){if(go===null)throw Error(s(308));On=e,go.dependencies={lanes:0,firstContext:e}}else On=On.next=e;return t}var ln=null;function el(e){ln===null?ln=[e]:ln.push(e)}function $s(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,el(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ms(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Pt(e,n)}return o=r.interleaved,o===null?(t.next=t,el(r)):(t.next=o.next,o.next=t),r.interleaved=t,Pt(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hi(e,n)}}function Fs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vo(e,t,n,r){var o=e.updateQueue;Ht=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var f=c,w=f.next;f.next=null,a===null?i=w:a.next=w,a=f;var P=e.alternate;P!==null&&(P=P.updateQueue,c=P.lastBaseUpdate,c!==a&&(c===null?P.firstBaseUpdate=w:c.next=w,P.lastBaseUpdate=f))}if(i!==null){var L=o.baseState;a=0,P=w=f=null,c=i;do{var R=c.lane,F=c.eventTime;if((r&R)===R){P!==null&&(P=P.next={eventTime:F,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var V=e,H=c;switch(R=t,F=n,H.tag){case 1:if(V=H.payload,typeof V=="function"){L=V.call(F,L,R);break e}L=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=H.payload,R=typeof V=="function"?V.call(F,L,R):V,R==null)break e;L=B({},L,R);break e;case 2:Ht=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,R=o.effects,R===null?o.effects=[c]:R.push(c))}else F={eventTime:F,lane:R,tag:c.tag,payload:c.payload,callback:c.callback,next:null},P===null?(w=P=F,f=L):P=P.next=F,a|=R;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;R=c,c=R.next,R.next=null,o.lastBaseUpdate=R,o.shared.pending=null}}while(!0);if(P===null&&(f=L),o.baseState=f,o.firstBaseUpdate=w,o.lastBaseUpdate=P,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);un|=a,e.lanes=a,e.memoizedState=L}}function As(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(s(191,o));o.call(r)}}}var hr={},wt=Ut(hr),gr=Ut(hr),yr=Ut(hr);function an(e){if(e===hr)throw Error(s(174));return e}function nl(e,t){switch(ce(yr,t),ce(gr,e),ce(wt,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}fe(wt),ce(wt,t)}function zn(){fe(wt),fe(gr),fe(yr)}function Us(e){an(yr.current);var t=an(wt.current),n=ri(t,e.type);t!==n&&(ce(gr,e),ce(wt,n))}function rl(e){gr.current===e&&(fe(wt),fe(gr))}var ge=Ut(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ol=[];function il(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var ko=te.ReactCurrentDispatcher,ll=te.ReactCurrentBatchConfig,sn=0,ye=null,be=null,Le=null,xo=!1,vr=!1,wr=0,Yd=0;function De(){throw Error(s(321))}function al(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function sl(e,t,n,r,o,i){if(sn=i,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?ef:tf,e=n(r,o),vr){i=0;do{if(vr=!1,wr=0,25<=i)throw Error(s(301));i+=1,Le=be=null,t.updateQueue=null,ko.current=nf,e=n(r,o)}while(vr)}if(ko.current=Co,t=be!==null&&be.next!==null,sn=0,Le=be=ye=null,xo=!1,t)throw Error(s(300));return e}function ul(){var e=wr!==0;return wr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ye.memoizedState=Le=e:Le=Le.next=e,Le}function rt(){if(be===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Le===null?ye.memoizedState:Le.next;if(t!==null)Le=t,be=e;else{if(e===null)throw Error(s(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Le===null?ye.memoizedState=Le=e:Le=Le.next=e}return Le}function kr(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=rt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var c=a=null,f=null,w=i;do{var P=w.lane;if((sn&P)===P)f!==null&&(f=f.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var L={lane:P,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};f===null?(c=f=L,a=r):f=f.next=L,ye.lanes|=P,un|=P}w=w.next}while(w!==null&&w!==i);f===null?a=r:f.next=c,st(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ye.lanes|=i,un|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=rt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);st(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bs(){}function Vs(e,t){var n=ye,r=rt(),o=t(),i=!st(r.memoizedState,o);if(i&&(r.memoizedState=o,He=!0),r=r.queue,fl(Qs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,xr(9,Ws.bind(null,n,r,o,t),void 0,null),je===null)throw Error(s(349));sn&30||Hs(n,t,o)}return o}function Hs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ws(e,t,n,r){t.value=n,t.getSnapshot=r,qs(t)&&Gs(e)}function Qs(e,t,n){return n(function(){qs(t)&&Gs(e)})}function qs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Gs(e){var t=Pt(e,1);t!==null&&pt(t,e,1,-1)}function Ks(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zd.bind(null,ye,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ys(){return rt().memoizedState}function So(e,t,n,r){var o=kt();ye.flags|=e,o.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function Eo(e,t,n,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(be!==null){var a=be.memoizedState;if(i=a.destroy,r!==null&&al(r,a.deps)){o.memoizedState=xr(t,n,i,r);return}}ye.flags|=e,o.memoizedState=xr(1|t,n,i,r)}function Xs(e,t){return So(8390656,8,e,t)}function fl(e,t){return Eo(2048,8,e,t)}function Js(e,t){return Eo(4,2,e,t)}function Zs(e,t){return Eo(4,4,e,t)}function eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tu(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4,4,eu.bind(null,t,e),n)}function pl(){}function nu(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&al(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ru(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&al(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ou(e,t,n){return sn&21?(st(n,t)||(n=Ia(),ye.lanes|=n,un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function Xd(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{ae=n,ll.transition=r}}function iu(){return rt().memoizedState}function Jd(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lu(e))au(t,n);else if(n=$s(e,t,n,r),n!==null){var o=Ae();pt(n,e,r,o),su(n,t,r)}}function Zd(e,t,n){var r=Kt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lu(e))au(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,c=i(a,n);if(o.hasEagerState=!0,o.eagerState=c,st(c,a)){var f=t.interleaved;f===null?(o.next=o,el(t)):(o.next=f.next,f.next=o),t.interleaved=o;return}}catch{}finally{}n=$s(e,t,o,r),n!==null&&(o=Ae(),pt(n,e,r,o),su(n,t,r))}}function lu(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function au(e,t){vr=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function su(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hi(e,n)}}var Co={readContext:nt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},ef={readContext:nt,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Xs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jd.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Ks,useDebugValue:pl,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Ks(!1),t=e[0];return e=Xd.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,o=kt();if(me){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),je===null)throw Error(s(349));sn&30||Hs(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Xs(Qs.bind(null,r,i,e),[e]),r.flags|=2048,xr(9,Ws.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=je.identifierPrefix;if(me){var n=bt,r=Rt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tf={readContext:nt,useCallback:nu,useContext:nt,useEffect:fl,useImperativeHandle:tu,useInsertionEffect:Js,useLayoutEffect:Zs,useMemo:ru,useReducer:cl,useRef:Ys,useState:function(){return cl(kr)},useDebugValue:pl,useDeferredValue:function(e){var t=rt();return ou(t,be.memoizedState,e)},useTransition:function(){var e=cl(kr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Bs,useSyncExternalStore:Vs,useId:iu,unstable_isNewReconciler:!1},nf={readContext:nt,useCallback:nu,useContext:nt,useEffect:fl,useImperativeHandle:tu,useInsertionEffect:Js,useLayoutEffect:Zs,useMemo:ru,useReducer:dl,useRef:Ys,useState:function(){return dl(kr)},useDebugValue:pl,useDeferredValue:function(e){var t=rt();return be===null?t.memoizedState=e:ou(t,be.memoizedState,e)},useTransition:function(){var e=dl(kr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Bs,useSyncExternalStore:Vs,useId:iu,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?en(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Kt(e),i=Nt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(pt(t,e,o,r),yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Kt(e),i=Nt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(pt(t,e,o,r),yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Kt(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(pt(t,e,r,n),yo(t,e,r))}};function uu(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(o,i):!0}function cu(e,t,n){var r=!1,o=Bt,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(o=Ve(t)?nn:ze.current,r=t.contextTypes,i=(r=r!=null)?Pn(e,o):Bt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function du(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},tl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nt(i):(i=Ve(t)?nn:ze.current,o.context=Pn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ml(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&_o.enqueueReplaceState(o,o.state,null),vo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dn(e,t){try{var n="",r=t;do n+=re(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rf=typeof WeakMap=="function"?WeakMap:Map;function fu(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){To||(To=!0,Tl=r),yl(e,t)},n}function pu(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){yl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){yl(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=vf.bind(null,e,t,n),t.then(e,e))}function hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var of=te.ReactCurrentOwner,He=!1;function Fe(e,t,n,r){t.child=e===null?Ds(t,null,n,r):Tn(t,e.child,n,r)}function yu(e,t,n,r,o){n=n.render;var i=t.ref;return In(t,o),r=sl(e,t,n,r,i,o),n=ul(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(me&&n&&Wi(t),t.flags|=1,Fe(e,t,r,o),t.child)}function vu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Fl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,wu(e,t,i,r,o)):(e=Mo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(a,r)&&e.ref===t.ref)return Lt(e,t,o)}return t.flags|=1,e=Xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function wu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ar(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Lt(e,t,o)}return vl(e,t,n,r,o)}function ku(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Mn,Ze),Ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Mn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ce(Mn,Ze),Ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ce(Mn,Ze),Ze|=r;return Fe(e,t,o,n),t.child}function xu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vl(e,t,n,r,o){var i=Ve(n)?nn:ze.current;return i=Pn(t,i),In(t,o),n=sl(e,t,n,r,i,o),r=ul(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(me&&r&&Wi(t),t.flags|=1,Fe(e,t,n,o),t.child)}function Su(e,t,n,r,o){if(Ve(n)){var i=!0;so(t)}else i=!1;if(In(t,o),t.stateNode===null)bo(e,t),cu(t,n,r),hl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var f=a.context,w=n.contextType;typeof w=="object"&&w!==null?w=nt(w):(w=Ve(n)?nn:ze.current,w=Pn(t,w));var P=n.getDerivedStateFromProps,L=typeof P=="function"||typeof a.getSnapshotBeforeUpdate=="function";L||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||f!==w)&&du(t,a,r,w),Ht=!1;var R=t.memoizedState;a.state=R,vo(t,r,a,o),f=t.memoizedState,c!==r||R!==f||Be.current||Ht?(typeof P=="function"&&(ml(t,n,P,r),f=t.memoizedState),(c=Ht||uu(t,n,c,r,R,f,w))?(L||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=w,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ms(e,t),c=t.memoizedProps,w=t.type===t.elementType?c:ct(t.type,c),a.props=w,L=t.pendingProps,R=a.context,f=n.contextType,typeof f=="object"&&f!==null?f=nt(f):(f=Ve(n)?nn:ze.current,f=Pn(t,f));var F=n.getDerivedStateFromProps;(P=typeof F=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==L||R!==f)&&du(t,a,r,f),Ht=!1,R=t.memoizedState,a.state=R,vo(t,r,a,o);var V=t.memoizedState;c!==L||R!==V||Be.current||Ht?(typeof F=="function"&&(ml(t,n,F,r),V=t.memoizedState),(w=Ht||uu(t,n,w,r,R,V,f)||!1)?(P||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,V,f),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,V,f)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=V),a.props=r,a.state=V,a.context=f,r=w):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),r=!1)}return wl(e,t,n,r,i,o)}function wl(e,t,n,r,o,i){xu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&bs(t,n,!1),Lt(e,t,i);r=t.stateNode,of.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Tn(t,e.child,null,i),t.child=Tn(t,null,c,i)):Fe(e,t,c,i),t.memoizedState=r.state,o&&bs(t,n,!0),t.child}function Eu(e){var t=e.stateNode;t.pendingContext?_s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_s(e,t.context,!1),nl(e,t.containerInfo)}function Cu(e,t,n,r,o){return jn(),Ki(o),t.flags|=256,Fe(e,t,n,r),t.child}var kl={dehydrated:null,treeContext:null,retryLane:0};function xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function _u(e,t,n){var r=t.pendingProps,o=ge.current,i=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ce(ge,o&1),e===null)return Gi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Fo(a,r,0,null),e=pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xl(n),t.memoizedState=kl,e):Sl(t,a));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return lf(e,t,a,r,c,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,c=o.sibling;var f={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=Xt(o,f),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?i=Xt(c,i):(i=pn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?xl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=kl,r}return i=e.child,e=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sl(e,t){return t=Fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,n,r){return r!==null&&Ki(r),Tn(t,e.child,null,n),e=Sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lf(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(s(422))),Ro(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Fo({mode:"visible",children:r.children},o,0,null),i=pn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Tn(t,e.child,null,a),t.child.memoizedState=xl(a),t.memoizedState=kl,i);if(!(t.mode&1))return Ro(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(s(419)),r=gl(i,r,void 0),Ro(e,t,a,r)}if(c=(a&e.childLanes)!==0,He||c){if(r=je,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Pt(e,o),pt(r,e,o,-1))}return Ml(),r=gl(Error(s(421))),Ro(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Je=At(o.nextSibling),Xe=t,me=!0,ut=null,e!==null&&(et[tt++]=Rt,et[tt++]=bt,et[tt++]=rn,Rt=e.id,bt=e.overflow,rn=t),t=Sl(t,r.children),t.flags|=4096,t)}function Ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function El(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function bu(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Fe(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,n,t);else if(e.tag===19)Ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ge,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&wo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),El(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&wo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}El(t,!0,n,null,i);break;case"together":El(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function af(e,t,n){switch(t.tag){case 3:Eu(t),jn();break;case 5:Us(t);break;case 1:Ve(t.type)&&so(t);break;case 4:nl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ce(ho,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?_u(e,t,n):(ce(ge,ge.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,ku(e,t,n)}return Lt(e,t,n)}var Pu,Cl,Nu,Lu;Pu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Cl=function(){},Nu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,an(wt.current);var i=null;switch(n){case"input":o=Zo(e,o),r=Zo(e,r),i=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":o=ni(e,o),r=ni(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=io)}oi(n,r);var a;n=null;for(w in o)if(!r.hasOwnProperty(w)&&o.hasOwnProperty(w)&&o[w]!=null)if(w==="style"){var c=o[w];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(d.hasOwnProperty(w)?i||(i=[]):(i=i||[]).push(w,null));for(w in r){var f=r[w];if(c=o!=null?o[w]:void 0,r.hasOwnProperty(w)&&f!==c&&(f!=null||c!=null))if(w==="style")if(c){for(a in c)!c.hasOwnProperty(a)||f&&f.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in f)f.hasOwnProperty(a)&&c[a]!==f[a]&&(n||(n={}),n[a]=f[a])}else n||(i||(i=[]),i.push(w,n)),n=f;else w==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,c=c?c.__html:void 0,f!=null&&c!==f&&(i=i||[]).push(w,f)):w==="children"?typeof f!="string"&&typeof f!="number"||(i=i||[]).push(w,""+f):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(d.hasOwnProperty(w)?(f!=null&&w==="onScroll"&&de("scroll",e),i||c===f||(i=[])):(i=i||[]).push(w,f))}n&&(i=i||[]).push("style",n);var w=i;(t.updateQueue=w)&&(t.flags|=4)}},Lu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sf(e,t,n){var r=t.pendingProps;switch(Qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return Ve(t.type)&&ao(),$e(t),null;case 3:return r=t.stateNode,zn(),fe(Be),fe(ze),il(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(zl(ut),ut=null))),Cl(e,t),$e(t),null;case 5:rl(t);var o=an(yr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return $e(t),null}if(e=an(wt.current),po(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[vt]=t,r[fr]=i,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(o=0;o<ur.length;o++)de(ur[o],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":ca(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":pa(r,i),de("invalid",r)}oi(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,c,e),o=["children",""+c]):d.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&de("scroll",r)}switch(n){case"input":zr(r),fa(r,i,!0);break;case"textarea":zr(r),ha(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=io)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ga(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[vt]=t,e[fr]=r,Pu(e,t,!1,!1),t.stateNode=e;e:{switch(a=ii(n,r),n){case"dialog":de("cancel",e),de("close",e),o=r;break;case"iframe":case"object":case"embed":de("load",e),o=r;break;case"video":case"audio":for(o=0;o<ur.length;o++)de(ur[o],e);o=r;break;case"source":de("error",e),o=r;break;case"img":case"image":case"link":de("error",e),de("load",e),o=r;break;case"details":de("toggle",e),o=r;break;case"input":ca(e,r),o=Zo(e,r),de("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),de("invalid",e);break;case"textarea":pa(e,r),o=ni(e,r),de("invalid",e);break;default:o=r}oi(n,o),c=o;for(i in c)if(c.hasOwnProperty(i)){var f=c[i];i==="style"?wa(e,f):i==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&ya(e,f)):i==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Hn(e,f):typeof f=="number"&&Hn(e,""+f):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(d.hasOwnProperty(i)?f!=null&&i==="onScroll"&&de("scroll",e):f!=null&&W(e,i,f,a))}switch(n){case"input":zr(e),fa(e,r,!1);break;case"textarea":zr(e),ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+le(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?gn(e,!!r.multiple,i,!1):r.defaultValue!=null&&gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=an(yr.current),an(wt.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(i=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return $e(t),null;case 13:if(fe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&Je!==null&&t.mode&1&&!(t.flags&128))Os(),jn(),t.flags|=98560,i=!1;else if(i=po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[vt]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),i=!1}else ut!==null&&(zl(ut),ut=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Pe===0&&(Pe=3):Ml())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return zn(),Cl(e,t),e===null&&cr(t.stateNode.containerInfo),$e(t),null;case 10:return Ji(t.type._context),$e(t),null;case 17:return Ve(t.type)&&ao(),$e(t),null;case 19:if(fe(ge),i=t.memoizedState,i===null)return $e(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Sr(i,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wo(e),a!==null){for(t.flags|=128,Sr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ee()>Fn&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=wo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!me)return $e(t),null}else 2*Ee()-i.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ee(),t.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return $l(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function uf(e,t){switch(Qi(t),t.tag){case 1:return Ve(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),fe(Be),fe(ze),il(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rl(t),null;case 13:if(fe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ge),null;case 4:return zn(),null;case 10:return Ji(t.type._context),null;case 22:case 23:return $l(),null;case 24:return null;default:return null}}var Po=!1,Me=!1,cf=typeof WeakSet=="function"?WeakSet:Set,U=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function _l(e,t,n){try{n()}catch(r){Se(e,t,r)}}var ju=!1;function df(e,t){if($i=qr,e=us(),Ni(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,c=-1,f=-1,w=0,P=0,L=e,R=null;t:for(;;){for(var F;L!==n||o!==0&&L.nodeType!==3||(c=a+o),L!==i||r!==0&&L.nodeType!==3||(f=a+r),L.nodeType===3&&(a+=L.nodeValue.length),(F=L.firstChild)!==null;)R=L,L=F;for(;;){if(L===e)break t;if(R===n&&++w===o&&(c=a),R===i&&++P===r&&(f=a),(F=L.nextSibling)!==null)break;L=R,R=L.parentNode}L=F}n=c===-1||f===-1?null:{start:c,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mi={focusedElem:e,selectionRange:n},qr=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var V=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var H=V.memoizedProps,Ce=V.memoizedState,y=t.stateNode,p=y.getSnapshotBeforeUpdate(t.elementType===t.type?H:ct(t.type,H),Ce);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(j){Se(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return V=ju,ju=!1,V}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&_l(t,n,i)}o=o.next}while(o!==r)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tu(e){var t=e.alternate;t!==null&&(e.alternate=null,Tu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[fr],delete t[Bi],delete t[Qd],delete t[qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ou(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=io));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}var Oe=null,dt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)zu(e,t,n),n=n.sibling}function zu(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ur,n)}catch{}switch(n.tag){case 5:Me||$n(n,t);case 6:var r=Oe,o=dt;Oe=null,Qt(e,t,n),Oe=r,dt=o,Oe!==null&&(dt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(dt?(e=Oe,n=n.stateNode,e.nodeType===8?Ui(e.parentNode,n):e.nodeType===1&&Ui(e,n),tr(e)):Ui(Oe,n.stateNode));break;case 4:r=Oe,o=dt,Oe=n.stateNode.containerInfo,dt=!0,Qt(e,t,n),Oe=r,dt=o;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&_l(n,t,a),o=o.next}while(o!==r)}Qt(e,t,n);break;case 1:if(!Me&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Se(n,t,c)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Qt(e,t,n),Me=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cf),t.forEach(function(r){var o=kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:Oe=c.stateNode,dt=!1;break e;case 3:Oe=c.stateNode.containerInfo,dt=!0;break e;case 4:Oe=c.stateNode.containerInfo,dt=!0;break e}c=c.return}if(Oe===null)throw Error(s(160));zu(i,a,o),Oe=null,dt=!1;var f=o.alternate;f!==null&&(f.return=null),o.return=null}catch(w){Se(o,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$u(t,e),t=t.sibling}function $u(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),xt(e),r&4){try{Er(3,e,e.return),No(3,e)}catch(H){Se(e,e.return,H)}try{Er(5,e,e.return)}catch(H){Se(e,e.return,H)}}break;case 1:ft(t,e),xt(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(ft(t,e),xt(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var o=e.stateNode;try{Hn(o,"")}catch(H){Se(e,e.return,H)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,c=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&da(o,i),ii(c,a);var w=ii(c,i);for(a=0;a<f.length;a+=2){var P=f[a],L=f[a+1];P==="style"?wa(o,L):P==="dangerouslySetInnerHTML"?ya(o,L):P==="children"?Hn(o,L):W(o,P,L,w)}switch(c){case"input":ei(o,i);break;case"textarea":ma(o,i);break;case"select":var R=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var F=i.value;F!=null?gn(o,!!i.multiple,F,!1):R!==!!i.multiple&&(i.defaultValue!=null?gn(o,!!i.multiple,i.defaultValue,!0):gn(o,!!i.multiple,i.multiple?[]:"",!1))}o[fr]=i}catch(H){Se(e,e.return,H)}}break;case 6:if(ft(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(H){Se(e,e.return,H)}}break;case 3:if(ft(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(H){Se(e,e.return,H)}break;case 4:ft(t,e),xt(e);break;case 13:ft(t,e),xt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(jl=Ee())),r&4&&Du(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(w=Me)||P,ft(t,e),Me=w):ft(t,e),xt(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!P&&e.mode&1)for(U=e,P=e.child;P!==null;){for(L=U=P;U!==null;){switch(R=U,F=R.child,R.tag){case 0:case 11:case 14:case 15:Er(4,R,R.return);break;case 1:$n(R,R.return);var V=R.stateNode;if(typeof V.componentWillUnmount=="function"){r=R,n=R.return;try{t=r,V.props=t.memoizedProps,V.state=t.memoizedState,V.componentWillUnmount()}catch(H){Se(r,n,H)}}break;case 5:$n(R,R.return);break;case 22:if(R.memoizedState!==null){Au(L);continue}}F!==null?(F.return=R,U=F):Au(L)}P=P.sibling}e:for(P=null,L=e;;){if(L.tag===5){if(P===null){P=L;try{o=L.stateNode,w?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=L.stateNode,f=L.memoizedProps.style,a=f!=null&&f.hasOwnProperty("display")?f.display:null,c.style.display=va("display",a))}catch(H){Se(e,e.return,H)}}}else if(L.tag===6){if(P===null)try{L.stateNode.nodeValue=w?"":L.memoizedProps}catch(H){Se(e,e.return,H)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;P===L&&(P=null),L=L.return}P===L&&(P=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:ft(t,e),xt(e),r&4&&Du(e);break;case 21:break;default:ft(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ou(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hn(o,""),r.flags&=-33);var i=Iu(e);Pl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,c=Iu(e);bl(e,c,a);break;default:throw Error(s(161))}}catch(f){Se(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ff(e,t,n){U=e,Mu(e)}function Mu(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var o=U,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Po;if(!a){var c=o.alternate,f=c!==null&&c.memoizedState!==null||Me;c=Po;var w=Me;if(Po=a,(Me=f)&&!w)for(U=o;U!==null;)a=U,f=a.child,a.tag===22&&a.memoizedState!==null?Uu(o):f!==null?(f.return=a,U=f):Uu(o);for(;i!==null;)U=i,Mu(i),i=i.sibling;U=o,Po=c,Me=w}Fu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,U=i):Fu(e)}}function Fu(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||No(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&As(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}As(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var P=w.memoizedState;if(P!==null){var L=P.dehydrated;L!==null&&tr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Me||t.flags&512&&Rl(t)}catch(R){Se(t,t.return,R)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Au(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Uu(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{No(4,t)}catch(f){Se(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(f){Se(t,o,f)}}var i=t.return;try{Rl(t)}catch(f){Se(t,i,f)}break;case 5:var a=t.return;try{Rl(t)}catch(f){Se(t,a,f)}}}catch(f){Se(t,t.return,f)}if(t===e){U=null;break}var c=t.sibling;if(c!==null){c.return=t.return,U=c;break}U=t.return}}var pf=Math.ceil,Lo=te.ReactCurrentDispatcher,Nl=te.ReactCurrentOwner,ot=te.ReactCurrentBatchConfig,ne=0,je=null,Re=null,Ie=0,Ze=0,Mn=Ut(0),Pe=0,Cr=null,un=0,jo=0,Ll=0,_r=null,We=null,jl=0,Fn=1/0,jt=null,To=!1,Tl=null,qt=null,Oo=!1,Gt=null,Io=0,Rr=0,Ol=null,zo=-1,Do=0;function Ae(){return ne&6?Ee():zo!==-1?zo:zo=Ee()}function Kt(e){return e.mode&1?ne&2&&Ie!==0?Ie&-Ie:Kd.transition!==null?(Do===0&&(Do=Ia()),Do):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Va(e.type)),e):1}function pt(e,t,n,r){if(50<Rr)throw Rr=0,Ol=null,Error(s(185));Yn(e,n,r),(!(ne&2)||e!==je)&&(e===je&&(!(ne&2)&&(jo|=n),Pe===4&&Yt(e,Ie)),Qe(e,r),n===1&&ne===0&&!(t.mode&1)&&(Fn=Ee()+500,uo&&Vt()))}function Qe(e,t){var n=e.callbackNode;Kc(e,t);var r=Hr(e,e===je?Ie:0);if(r===0)n!==null&&ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ja(n),t===1)e.tag===0?Gd(Vu.bind(null,e)):Ps(Vu.bind(null,e)),Hd(function(){!(ne&6)&&Vt()}),n=null;else{switch(za(r)){case 1:n=fi;break;case 4:n=Ta;break;case 16:n=Ar;break;case 536870912:n=Oa;break;default:n=Ar}n=Xu(n,Bu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bu(e,t){if(zo=-1,Do=0,ne&6)throw Error(s(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Hr(e,e===je?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var o=ne;ne|=2;var i=Wu();(je!==e||Ie!==t)&&(jt=null,Fn=Ee()+500,dn(e,t));do try{gf();break}catch(c){Hu(e,c)}while(!0);Xi(),Lo.current=i,ne=o,Re!==null?t=0:(je=null,Ie=0,t=Pe)}if(t!==0){if(t===2&&(o=pi(e),o!==0&&(r=o,t=Il(e,o))),t===1)throw n=Cr,dn(e,0),Yt(e,r),Qe(e,Ee()),n;if(t===6)Yt(e,r);else{if(o=e.current.alternate,!(r&30)&&!mf(o)&&(t=$o(e,r),t===2&&(i=pi(e),i!==0&&(r=i,t=Il(e,i))),t===1))throw n=Cr,dn(e,0),Yt(e,r),Qe(e,Ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:fn(e,We,jt);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=jl+500-Ee(),10<t)){if(Hr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ai(fn.bind(null,e,We,jt),t);break}fn(e,We,jt);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-at(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pf(r/1960))-r,10<r){e.timeoutHandle=Ai(fn.bind(null,e,We,jt),r);break}fn(e,We,jt);break;case 5:fn(e,We,jt);break;default:throw Error(s(329))}}}return Qe(e,Ee()),e.callbackNode===n?Bu.bind(null,e):null}function Il(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=$o(e,t),e!==2&&(t=We,We=n,t!==null&&zl(t)),e}function zl(e){We===null?We=e:We.push.apply(We,e)}function mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!st(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~Ll,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Vu(e){if(ne&6)throw Error(s(327));An();var t=Hr(e,0);if(!(t&1))return Qe(e,Ee()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=pi(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=Cr,dn(e,0),Yt(e,t),Qe(e,Ee()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,We,jt),Qe(e,Ee()),null}function Dl(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(Fn=Ee()+500,uo&&Vt())}}function cn(e){Gt!==null&&Gt.tag===0&&!(ne&6)&&An();var t=ne;ne|=1;var n=ot.transition,r=ae;try{if(ot.transition=null,ae=1,e)return e()}finally{ae=r,ot.transition=n,ne=t,!(ne&6)&&Vt()}}function $l(){Ze=Mn.current,fe(Mn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vd(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Qi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:zn(),fe(Be),fe(ze),il();break;case 5:rl(r);break;case 4:zn();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:Ji(r.type._context);break;case 22:case 23:$l()}n=n.return}if(je=e,Re=e=Xt(e.current,null),Ie=Ze=t,Pe=0,Cr=null,Ll=jo=un=0,We=_r=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}ln=null}return e}function Hu(e,t){do{var n=Re;try{if(Xi(),ko.current=Co,xo){for(var r=ye.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xo=!1}if(sn=0,Le=be=ye=null,vr=!1,wr=0,Nl.current=null,n===null||n.return===null){Pe=1,Cr=t,Re=null;break}e:{var i=e,a=n.return,c=n,f=t;if(t=Ie,c.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=f,P=c,L=P.tag;if(!(P.mode&1)&&(L===0||L===11||L===15)){var R=P.alternate;R?(P.updateQueue=R.updateQueue,P.memoizedState=R.memoizedState,P.lanes=R.lanes):(P.updateQueue=null,P.memoizedState=null)}var F=hu(a);if(F!==null){F.flags&=-257,gu(F,a,c,i,t),F.mode&1&&mu(i,w,t),t=F,f=w;var V=t.updateQueue;if(V===null){var H=new Set;H.add(f),t.updateQueue=H}else V.add(f);break e}else{if(!(t&1)){mu(i,w,t),Ml();break e}f=Error(s(426))}}else if(me&&c.mode&1){var Ce=hu(a);if(Ce!==null){!(Ce.flags&65536)&&(Ce.flags|=256),gu(Ce,a,c,i,t),Ki(Dn(f,c));break e}}i=f=Dn(f,c),Pe!==4&&(Pe=2),_r===null?_r=[i]:_r.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=fu(i,f,t);Fs(i,y);break e;case 1:c=f;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qt===null||!qt.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=pu(i,c,t);Fs(i,j);break e}}i=i.return}while(i!==null)}qu(n)}catch(Q){t=Q,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Wu(){var e=Lo.current;return Lo.current=Co,e===null?Co:e}function Ml(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),je===null||!(un&268435455)&&!(jo&268435455)||Yt(je,Ie)}function $o(e,t){var n=ne;ne|=2;var r=Wu();(je!==e||Ie!==t)&&(jt=null,dn(e,t));do try{hf();break}catch(o){Hu(e,o)}while(!0);if(Xi(),ne=n,Lo.current=r,Re!==null)throw Error(s(261));return je=null,Ie=0,Pe}function hf(){for(;Re!==null;)Qu(Re)}function gf(){for(;Re!==null&&!Ac();)Qu(Re)}function Qu(e){var t=Yu(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?qu(e):Re=t,Nl.current=null}function qu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uf(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Re=null;return}}else if(n=sf(n,t,Ze),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Pe===0&&(Pe=5)}function fn(e,t,n){var r=ae,o=ot.transition;try{ot.transition=null,ae=1,yf(e,t,n,r)}finally{ot.transition=o,ae=r}return null}function yf(e,t,n,r){do An();while(Gt!==null);if(ne&6)throw Error(s(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Yc(e,i),e===je&&(Re=je=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,Xu(Ar,function(){return An(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var a=ae;ae=1;var c=ne;ne|=4,Nl.current=null,df(e,n),$u(n,e),Dd(Mi),qr=!!$i,Mi=$i=null,e.current=n,ff(n),Uc(),ne=c,ae=a,ot.transition=i}else e.current=n;if(Oo&&(Oo=!1,Gt=e,Io=o),i=e.pendingLanes,i===0&&(qt=null),Hc(n.stateNode),Qe(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(To)throw To=!1,e=Tl,Tl=null,e;return Io&1&&e.tag!==0&&An(),i=e.pendingLanes,i&1?e===Ol?Rr++:(Rr=0,Ol=e):Rr=0,Vt(),null}function An(){if(Gt!==null){var e=za(Io),t=ot.transition,n=ae;try{if(ot.transition=null,ae=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Io=0,ne&6)throw Error(s(331));var o=ne;for(ne|=4,U=e.current;U!==null;){var i=U,a=i.child;if(U.flags&16){var c=i.deletions;if(c!==null){for(var f=0;f<c.length;f++){var w=c[f];for(U=w;U!==null;){var P=U;switch(P.tag){case 0:case 11:case 15:Er(8,P,i)}var L=P.child;if(L!==null)L.return=P,U=L;else for(;U!==null;){P=U;var R=P.sibling,F=P.return;if(Tu(P),P===w){U=null;break}if(R!==null){R.return=F,U=R;break}U=F}}}var V=i.alternate;if(V!==null){var H=V.child;if(H!==null){V.child=null;do{var Ce=H.sibling;H.sibling=null,H=Ce}while(H!==null)}}U=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,U=a;else e:for(;U!==null;){if(i=U,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Er(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,U=y;break e}U=i.return}}var p=e.current;for(U=p;U!==null;){a=U;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,U=v;else e:for(a=p;U!==null;){if(c=U,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:No(9,c)}}catch(Q){Se(c,c.return,Q)}if(c===a){U=null;break e}var j=c.sibling;if(j!==null){j.return=c.return,U=j;break e}U=c.return}}if(ne=o,Vt(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ur,e)}catch{}r=!0}return r}finally{ae=n,ot.transition=t}}return!1}function Gu(e,t,n){t=Dn(n,t),t=fu(e,t,1),e=Wt(e,t,1),t=Ae(),e!==null&&(Yn(e,1,t),Qe(e,t))}function Se(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=Dn(n,e),e=pu(t,e,1),t=Wt(t,e,1),e=Ae(),t!==null&&(Yn(t,1,e),Qe(t,e));break}}t=t.return}}function vf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ie&n)===n&&(Pe===4||Pe===3&&(Ie&130023424)===Ie&&500>Ee()-jl?dn(e,0):Ll|=n),Qe(e,t)}function Ku(e,t){t===0&&(e.mode&1?(t=Vr,Vr<<=1,!(Vr&130023424)&&(Vr=4194304)):t=1);var n=Ae();e=Pt(e,t),e!==null&&(Yn(e,t,n),Qe(e,n))}function wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),Ku(e,n)}var Yu;Yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,af(e,t,n);He=!!(e.flags&131072)}else He=!1,me&&t.flags&1048576&&Ns(t,fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var o=Pn(t,ze.current);In(t,n),o=sl(null,t,r,e,o,n);var i=ul();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,so(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,tl(t),o.updater=_o,t.stateNode=o,o._reactInternals=t,hl(t,r,e,n),t=wl(null,t,r,!0,i,n)):(t.tag=0,me&&i&&Wi(t),Fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Sf(r),e=ct(r,e),o){case 0:t=vl(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=yu(null,t,r,e,n);break e;case 14:t=vu(null,t,r,ct(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),vl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Su(e,t,r,o,n);case 3:e:{if(Eu(t),e===null)throw Error(s(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Ms(e,t),vo(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Dn(Error(s(423)),t),t=Cu(e,t,r,n,o);break e}else if(r!==o){o=Dn(Error(s(424)),t),t=Cu(e,t,r,n,o);break e}else for(Je=At(t.stateNode.containerInfo.firstChild),Xe=t,me=!0,ut=null,n=Ds(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===o){t=Lt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Us(t),e===null&&Gi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Fi(r,o)?a=null:i!==null&&Fi(r,i)&&(t.flags|=32),xu(e,t),Fe(e,t,a,n),t.child;case 6:return e===null&&Gi(t),null;case 13:return _u(e,t,n);case 4:return nl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),yu(e,t,r,o,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ce(ho,r._currentValue),r._currentValue=a,i!==null)if(st(i.value,a)){if(i.children===o.children&&!Be.current){t=Lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){a=i.child;for(var f=c.firstContext;f!==null;){if(f.context===r){if(i.tag===1){f=Nt(-1,n&-n),f.tag=2;var w=i.updateQueue;if(w!==null){w=w.shared;var P=w.pending;P===null?f.next=f:(f.next=P.next,P.next=f),w.pending=f}}i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),Zi(i.return,n,t),c.lanes|=n;break}f=f.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(s(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Zi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,In(t,n),o=nt(o),r=r(o),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),vu(e,t,r,o,n);case 15:return wu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),bo(e,t),t.tag=1,Ve(r)?(e=!0,so(t)):e=!1,In(t,n),cu(t,r,o),hl(t,r,o,n),wl(null,t,r,!0,e,n);case 19:return bu(e,t,n);case 22:return ku(e,t,n)}throw Error(s(156,t.tag))};function Xu(e,t){return La(e,t)}function xf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new xf(e,t,n,r)}function Fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sf(e){if(typeof e=="function")return Fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ht)return 11;if(e===gt)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mo(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Fl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case he:return pn(n.children,o,i,t);case _e:a=8,o|=8;break;case ke:return e=it(12,n,t,o|2),e.elementType=ke,e.lanes=i,e;case Ge:return e=it(13,n,t,o),e.elementType=Ge,e.lanes=i,e;case lt:return e=it(19,n,t,o),e.elementType=lt,e.lanes=i,e;case xe:return Fo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ne:a=10;break e;case mt:a=9;break e;case ht:a=11;break e;case gt:a=14;break e;case Ue:a=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=it(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function pn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Fo(e,t,n,r){return e=it(22,e,r,t),e.elementType=xe,e.lanes=n,e.stateNode={isHidden:!1},e}function Al(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Ul(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ef(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bl(e,t,n,r,o,i,a,c,f){return e=new Ef(e,t,n,c,f),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tl(i),e}function Cf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ju(e){if(!e)return Bt;e=e._reactInternals;e:{if(en(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Rs(e,n,t)}return t}function Zu(e,t,n,r,o,i,a,c,f){return e=Bl(n,r,!0,e,o,i,a,c,f),e.context=Ju(null),n=e.current,r=Ae(),o=Kt(n),i=Nt(r,o),i.callback=t??null,Wt(n,i,o),e.current.lanes=o,Yn(e,o,r),Qe(e,r),e}function Ao(e,t,n,r){var o=t.current,i=Ae(),a=Kt(o);return n=Ju(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,a),e!==null&&(pt(e,o,a,i),yo(e,o,a)),a}function Uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ec(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vl(e,t){ec(e,t),(e=e.alternate)&&ec(e,t)}function _f(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}Bo.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ao(e,t,null,null)},Bo.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Ao(null,e,null,null)}),t[Ct]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ma();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&Ua(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nc(){}function Rf(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var w=Uo(a);i.call(w)}}var a=Zu(t,r,e,0,null,!1,!1,"",nc);return e._reactRootContainer=a,e[Ct]=a.current,cr(e.nodeType===8?e.parentNode:e),cn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var w=Uo(f);c.call(w)}}var f=Bl(e,0,!1,null,null,!1,!1,"",nc);return e._reactRootContainer=f,e[Ct]=f.current,cr(e.nodeType===8?e.parentNode:e),cn(function(){Ao(t,f,n,r)}),f}function Ho(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var c=o;o=function(){var f=Uo(a);c.call(f)}}Ao(t,a,e,o)}else a=Rf(n,t,e,o,r);return Uo(a)}Da=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kn(t.pendingLanes);n!==0&&(hi(t,n|1),Qe(t,Ee()),!(ne&6)&&(Fn=Ee()+500,Vt()))}break;case 13:cn(function(){var r=Pt(e,1);if(r!==null){var o=Ae();pt(r,e,1,o)}}),Vl(e,1)}},gi=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Ae();pt(t,e,134217728,n)}Vl(e,134217728)}},$a=function(e){if(e.tag===13){var t=Kt(e),n=Pt(e,t);if(n!==null){var r=Ae();pt(n,e,t,r)}Vl(e,t)}},Ma=function(){return ae},Fa=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}},si=function(e,t,n){switch(t){case"input":if(ei(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=lo(r);if(!o)throw Error(s(90));ua(r),ei(r,o)}}}break;case"textarea":ma(e,n);break;case"select":t=n.value,t!=null&&gn(e,!!n.multiple,t,!1)}},Ea=Dl,Ca=cn;var bf={usingClientEntryPoint:!1,Events:[pr,Rn,lo,xa,Sa,Dl]},br={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pf={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pa(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||_f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Ur=Wo.inject(Pf),yt=Wo}catch{}}return qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf,qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(t))throw Error(s(200));return Cf(e,t,null,n)},qe.createRoot=function(e,t){if(!Wl(e))throw Error(s(299));var n=!1,r="",o=tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bl(e,1,!1,null,null,n,!1,r,o),e[Ct]=t.current,cr(e.nodeType===8?e.parentNode:e),new Hl(t)},qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Pa(t),e=e===null?null:e.stateNode,e},qe.flushSync=function(e){return cn(e)},qe.hydrate=function(e,t,n){if(!Vo(t))throw Error(s(200));return Ho(null,e,t,!0,n)},qe.hydrateRoot=function(e,t,n){if(!Wl(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=tc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Zu(t,null,e,1,n??null,o,!1,i,a),e[Ct]=t.current,cr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bo(t)},qe.render=function(e,t,n){if(!Vo(t))throw Error(s(200));return Ho(null,e,t,!1,n)},qe.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(s(40));return e._reactRootContainer?(cn(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1},qe.unstable_batchedUpdates=Dl,qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vo(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ho(e,t,n,!1,r)},qe.version="18.3.1-next-f1338f8080-20240426",qe}var cc;function Df(){if(cc)return Gl.exports;cc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Gl.exports=zf(),Gl.exports}var dc;function $f(){if(dc)return Qo;dc=1;var l=Df();return Qo.createRoot=l.createRoot,Qo.hydrateRoot=l.hydrateRoot,Qo}var Mf=$f();function mn({list:l,selectedItem:u,setSelectedItem:s}){return C.jsx(C.Fragment,{children:!!l.length&&C.jsx(C.Fragment,{children:C.jsx("nav",{children:C.jsx("ul",{className:"flex flex-row flex-wrap gap-5 place-content-center border-2 border-black p-2 rounded-xl",children:l.map(m=>C.jsx("li",{className:`font-bold px-3 py-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer ${u===m&&"active"}`,onClick:()=>{s(m)},children:m},m))})})})})}let Ff=()=>C.jsx("pre",{children:`
      # client logic is light than server logic 
        - make it separated from html code  
        - client logic can be reached by user   
      # action when element is on viewport ( seen )
      # each software must has its own privacy policy ( use generator service  ) 
      # super global variables => $_ENV
      # protocol://domainName-OR-ip:port/resource /* https port 443 */
      # portal application means customer use it to make actions
      # The web is an open environment unlike mobile that is more secure 
      # events :
        * @keyup @keydown @click.prevent  @mouseover @mousemove
      # inspect tool has very powerful options  
        * offline service worker in networks tab 
        * slow speed connection
        * network to get request info
      # debug mode & debug side bar & debug console
        * in VSCode used for debugging in front & back & any code
      # form best practices  
        - autocomplete 
        - confirm deletion alert 
        - show error & validation messages 
        - show success message 
        - show loading message
        - remember enctype=”multipart/form-data” when sending files in forms ( $_FILES )
        - preview image before uploading
          <form> 
            <input type="file" onchange="preview()"> 
            <img id="frame" src="" width="100px" height="100px"/> 
          </form>
          function preview() { frame.src=URL.createObjectURL(event.target.files[0]); }
        - to customize upload input style 
          $ input::file-selector-button {  } 
          $ OR make a hidden file input & custom visible element with js  

      # software requirement specifications (SRS)

      # important html 
        * <img src="image.jpg" loading="lazy" alt="Description">
        * <dialog> &&& <progress> &&& <menu>

      # common between front & backend 
        * routing
        * auth handling 
        * form validation  ( front => html & js code not only html )
        * reuse ( [ 
              back => traits & services & abstract class & interface  ,
              front => classes & components & utils 
            ] )

      # errors types :  
        * sometimes vscode has mislead syntax errors  ( correct but marked as error)
        * usually with message 
          - syntax 
          - runtime  
        * usually without message
          - logical 

      # code notes :
        * <input> & <datalist>  to make autocomplete or searchable select

  `}),Af=()=>C.jsx("pre",{children:`
# Git is offline software like any programming language 
  ** github is remote cloud for git 

# Unix-based interface ( bash ) is used in linux  [ default shell ] & mac 
  ** BUT windows uses cmd

# gitKraken ( good GUI of git )

# public repo is visible for all 
  ** but private repo is visible for collaborators only 

# HEAD refers to the last commit on your current branch.

# default branch on local git on first local commit is master 
  **  but on remote github is main 

# many branch cases  : 

  ** branch is used to have many code versions & histories at same time
  ** You are in a team => ( branch [member name] for each member  )  
  ** Live Server => branch test server for testing server and not crash it 

# code status

  Working Area 
    Staging Area
      Local Repository
        Remote Repository

************************************************************************************************ 

# terminal commands :

  --help  // Top & Best
  pwd ( print working directory  )
  ls -a // show a list of all including hidden files 
  touch new-file.txt
  cat new-file.txt  // catch file and get its content
  mkdir new-folder
  rm deleted-file.txt
  rm -rf deleted-folder // -rf => remove folder
  code . 

************************************************************************************************ 

# git commands : 

    init

    config user.name // get git name 
    config --global user.name “Your Git Name” // set git name globally
    config --global user.email “Your Git Email”

    status // files status

    log  // commit history
    log --oneline // one line commit history

    add file.txt 
    add . 
    add file1.txt file2.txt 
    add folder/ 
    add -u // stage only updates from tracked files only not new nor untracked

    commit // open txt editor to write long msg 
    commit -m “ short message “
    commit --amend // undo last commit
    commit -a -m “ short message “  // make “git add -u” then commit

    branch // view all branches
    branch -r // view all remote branches
    branch <branch-name>  // create new branch 
    branch (-d | -D) <branch-name> // delete branch
    branch ( -m | -M ) <branch-name> // rename ( move to new branch )

    # checkout makes million things  ( use with commits & branches )
    
    checkout  <branch-name>  // change to branch  && discard changes
    checkout  <remote-name>/<branch-name>  
      // change to remote  branch to see something with detached HEAD
    
    checkout HEAD~1 // remove current HEAD one commit before it
    checkout HEAD <file-name> // reset this file to current HEAD
    checkout -- <file-name> // reset this file to last commit
    
    checkout   <frist-7-chars-in-commit-hash>
      // to get a copy of a previous commit  
      // checkout to a previous commit && use detached HEAD
      // then you should move it to new branch to edit
      // then re-attach HEAD by switch and merge

    switch   <branch-name>  // change to branch without discard unstaged changes
    switch  -  // reattach detached HEAD
    switch -c  <branch-name>  // create new branch and switch to it

    merge <branch-name>  // merge this branch to the current branch 

    diff // difference after last commit ( unstaged only )
    diff <--staged OR --cached > // difference after last commit ( staged only )
    diff HEAD < optional file-name > // difference after last commit ( staged & unstaged )
    diff <branch1>..<branch2> // difference between branches
    diff <4abc45>..<commitHex2> // difference between commits

    stash <optional save> 
    // save staged & unstaged changes without a commit
    // used to change branch without errors
    stash pop // return stages changes from inside its branch
    stash apply // return stages changes from inside other branch
    stash list  // view all stashed changes 
    stash apply <stash-id>  // apply specific stash from stash list  ex.stash@{2}
    stash drop <stash-id>  // delete specific stash from stash list  ex.stash@{0}
    stash clear // delete all stashed list

    restore <file-name> 
      // discard unstaged changes after HEAD
    restore --source <commit-hash> <file-name> 
      // restore specific commit file version 
    restore --staged <file-name> 
      // restore staged changes // discard changes after staged
    
    // reset used with local changes 
    reset <commit-hash>  // delete commits after it and put its changes in unstaged
    reset --hard <commit-hash>  // delete commits after it and delete commits' changes
    // undo all staged and unstaged changes : 
    reset --hard HEAD
    reset --hard origin/main


    // revert used with remote changes 
    revert <commit-hash>  // reverse commits after it and make new commit for the team

    // rebasing is used to rewrite history ( merging tool or cleanup tool ) 
    /** 
      * commits of current branch will not be added to other branch  
        but commits of current branch will be rewritten to be on tip of the other branch's commits in the current one only 
      * hash of commits of current will be changes
      * don't rebase commits that pushed to github because others may have used it
      * interactive rebase enable you to manipulate commits in history like rename or delete or merge  
        ( pick to remain as it OR reword to rename OR fixup to merge with previous and delete previous )
    */

    rebase <other-branch>  // rewrite current branch's commits from other
    rebase -i HEAD~4  // go to interactive mode 4 commits before end in HEAD

************************************************************************************************ 
# github : 
* low update internet speed causes push errors 
* you can connect to github using tokens OR SSH ( unique device connection ) 

github gists is similar to github repo but simpler with less features

github pull request => used to ask the admin to merge your branch with the main one if the policy says this 

github commands : 

  clone <remote-repo-url>

  config --local user.name “Ali”  // set user name locally for current project
  config --global user.email “a@a.a” // set user email globally for your PC
  config --global alias.sts status // make sts as alisa for status keyword

  remote -v // view current remotes
  remote add <name> <url> 
  remote set-url <name> <url>
  remote rename  <old-name> <new-name>
  remote remove <name>

  push <remote-name> <local-&-remote-branch-name>
  push <remote-name> <local-branch-name>:<remote-branch-name>
  push -u <remote-name> <branch-name> // set upstream to use push only in future
  push // used if we setted upstream usign -u  that save configration

  pull <remote-name> <branch-name>

  fetch <remote-name>  // all remote branches updates 
  fetch <remote-name> <remote-branch>   // one remote branches updates 

  tag // list of all tags in whole repo 
  tag  <new-name>// add new lightweight tag to HEAD
  tag -a <new-name>// add new annotated -explained with message- tag to HEAD
  tag  <new-name> <commit-hash>// add new tag to specific previous commit
  tag  <new-name> <commit-hash> -f // rewrite commit tag
  tag -d <tag-name>// delete specific tag
  // we can write tag name instead of commit hash 
  // there is only 1 tag per 1 commit 
  checkout <tag-name> // show commit of this tag
  show <tag-name> // show tag details
  push origin <tag-name> // push specific tag
  push origin --tags // push all local tags 
  push origin main -f  // force push to the repo  

  clean -Xfdn  // preview ignored files and folders that will be deleted
  clean -Xfd  // delete ignored files and folders

***********************************************************************************************************************

pull request to GUI merging on github

We can make branch protection roles 

Fork
  Github can make personal copy of other's repo and this copy is called fork and is able to make pull request between the two repositories.
  and you can pull from the original origin repo then push to fork upstream repo and pull request from fork to original

.gitignore 
  file.txt
  folder/  // all directory  &&& if write without '/' will consider it a file  
  *.css   // all css files 

markdown
  there is markdown docs
  you can reach syntax by examples like search spaCy package repo on github for readme example
  use markdown demo website to see result & examples 
  h1-h6  #-######
  **bold** *italic* marked  \`\`\`  highlighted code \`\`\`   
  ( ctrl  + shift + p ) then choose ( markdown open preview )  

semantic version release number : majorRelease.minorRelease.patchRelease

Hashing is one-way function ex “ali” => converted always to “ASFADGFAGFAGF” but “ASFADGFAGFAGF” can't converted to ali 

Git used SHA-1  40 digits Hexa

git save file versions by hashing them 


************************************************************************************************
# github examples  :
$ init & push : 
  echo "# MyRepo" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://AliRedaGomaa01:token@github.com/haithamabdallah/new-board.git
  git push -u origin main

$ pull : 
  git init
  git branch -M main
  git remote add origin https://AliRedaGomaa01:token@github.com/haithamabdallah/sky-board.git  
  git pull origin main

$ ssh connection & ssh key :  
( repo's remote ssh link is not like remote http link )
  - search in google "github ssh"  to reach github docs 
  - execute command => ssh-keygen -t ed25519 -C "your_email@example.com"
  - a file will be generated in "/c/Users/YOU/.ssh/id_ALGORITHM"
  - copy the content of this file with extension .pub 
  - put it in your github settings > SSH and GPG keys > new SSH key 


    `}),Uf=()=>C.jsx("pre",{children:`    
# important info

  * framework VS library
    - framework has enough builtin tools for development basics but in libraries you must need 3rd parties
      $ some frameworks has more than tool to make the same thing ||| also make detailed tools foreach simple or complex feature
      $ so use only basics of the framework that is similar to other frameworks
      $ deep dive in advanced tools after using it in a job 
      $ one of cons of some frameworks like laravel & angular ( many ways to do the same thing )
  
  * async code is executed in a virtual parallel thread BUT sync in the main thread

  * https important status codes ( 200-201  ** 301 ** 401-103-404-422 ** 500 )
  
  * the importance of states is the reload of specific parts not whole the page 

  * remember => trigger event  , execute BE code , render FE code , show data


    `}),Bf=()=>C.jsx("pre",{children:`

************************************************************************************************
I only use design as a tool in web development
************************************************************************************************
# basics & common 

* UI/UX design tools => figma - adobexd - sketch

************************************************************************************************

# figma
  * UI/UX process steps ( make your service design depends on the client usage experience & successful competitors ) :
    1- making docs for brain storm ideas & tech. requirements 
      $ [ UX ] [ priority to real user { people interview & survey } ] 
    2- sketching & designing  

  * depends on frames inside sections 
  
  *  info :
    - multiple components ( reusable instances “parts” ) [ switch between its items ] - detach -   instance
    - properties ( instant options ) vs variants ( instatnt type )
    - grouping & sections & frames 
    - draw illustration using pen 
    - shapes intersection 
    - image mask => equals frames in canva
    - site map : hierarchical diagrams like tree show navigation in pages
    - color palette => colors you will use in your project
    - figma pages => app page - assets page (components)
    - onboarding page { first page on opening app }
    - design patterns => solutions for common design problems
    - user flow => wire frame => prototype 
      $ user flow : explain features like registration process or searching process
      $ wire frames : pages content like ( home , cart , account ) pages     
      $ prototype ( show in mockups) ( declare [user actions ] Ex. hover )


  * plugins 
    -  images => ( unsplash - freepik ) 
    -  icons => ( material - iconify - streamline ) 
    - illustration graphs => ( blush - illustrations - streamline )   
    - content real to fill content  
    - LottieFiles for animated gifs   
    - remove bg 

    
  * tips & best practices : 
    - use grid & rulers 
    - take ideas from competitors & well designed websites & templates 
    - explain details ( not be lazy )
    -  ( variation ) using many color & sizes & fonts in one part
    - get a continuous feedback team & client  
    - many design options to choose one from them 
    - inputs and interactive feedback ( invalid - valid )
    - use motions => by modify opacity of frame items ( opacity - position - size - rotate - color - effects & filterss ) 
    - use responsive
      $ responsive  ====>>> auto layout & fill container  
      $ constrains ( auto responsive width and height ) 
    - use centralized control & reusability  
      $ local styles Ex. primary color 
      $ variants
      $ components
    - consider all people cases 
      $ accessability & difficulties 
      $ children & ages 
      $ different background & education & jobs
      $ tech knowledge level    
    - use figma community for => 
      $ swm icons 
      $ pre-made components & widgets
    

    
************************************************************************************************

# Canva : 
  * girl photo cropped in circle Frame ( graphic or shape ) or Mockup ( real life item 
    - Ex. t-shirt or mobile  )  or Grid to set a photo background
  * filters 
  * info graphics are charts declare some info or some written data in a pretty way
  * make a backup of any graphic projects as if you were using github
  * canva can make and edit (  photos and pdfs and videos & gifs )  
  * start with a pre-made template because they are made perfectly & properly so use them  
  * search for canva colors website => to choose colors based on design theories
  * search for “ image remove bg free “ in gooogle to get websites do this
  * video is ( extremely splitted ) short clips has 
    1- transition between them 
    2- animated text on it
    3- attached external audios 


      `}),Vf=()=>C.jsx("pre",{children:`

# styling tips 
  * consider dark mode styling
  * use color variables for whole app
  * prepared templates save a lot of time  
  * NO WEBSITE PAGE WITHOUT ICONS 
  * use bootstrap with sass OR use tailwind ( don't use both )
  * RGBA => opacity for background color only 
    - but opacity for element & its content   

# basics
  * cascading ( [apply the inline then the last then default] & inherit from parent )
  * css can reduce using imperative js styling like =>  a:hover &&& <a onMouseOver="">
  * selectors 
    - simple ( element - class - id  ) 
    - attribute a[target="_blank"] element[attribute*=value]
    - combinator ( group ',' &  Descendant ' ' &   Child combinator '>'  & [immediately after only] sibling combinator '+' &  [all after] sibling combinator '~'  ) 
    - pseudo 
      $ classes 
      $ elements

    - pseudo class ( virtual states (( describe )) the element ( :hover :root  ) )  
      $ input:focus :disabled :invalid
      $ :not('.anySelector')  :has('.anySelector') 	.bothUlOl:is(ul, ol) .bothUlOl:where(ul, ol)
      $ :first-child => the first sibling of this type
      $ :lang(ar) && :dir(rtl)
      $ .secondInsideParent:nth-child(2) && .secondInsideDocument:nth-of-type(2)

    - pseudo element ( select specific (( content ))  inside an element ( ::before{ content:"" } ::after ) )
    - not all properties applied on it ( only : color , ... ) 
      $ ::first-line ::first-letter

# Units
  * absolute  ( px , cm , in )
    - pixel depends on screen resolution 
      $ low -> pixel = one device dot 
      $ high -> pixel = multiple device dots 
  * relative  ( em , rem , vw , vh , % relative to parent  )

# priority : 
  - !important keyword ( use rarely )
  - inline style  
  - css specificity => more specific = higher priority ex. #myDiv vs myParent div#myDiv.myDiv
  - latest

# CSS Math Functions
  - width: calc(100% - 100px);
  - width: max(50%, 300px);
  - 

# Notes
  *  tr:nth-child(even) {background-color: #f2f2f2;} // for siblings only 
    - BUT tr:nth-type(even) {background-color: #f2f2f2;} // for whole document
  * outline-offset => space between border & outline
  * box model => element default box is ( border + padding + dimensions ) 
  * layout manipulate using 
    $ margin auto
    $ dir 
    $ position 
    $ inline & inline-block 
    $ float 
    $ flex 
    $ grid 
    $ column-count
    
# property notes
  * variables => :root {--blue: #1e90ff;} .container {color: var(--blue);} // we can manipulate it using javascript
  * text-shadow  &&& box-shadow
  * flex => wrap-reverse & row-reverse => to edit items order 
  * not all properties & values are common between flex & grid  
  * cursor
  * text-shadow VS   box-shadow: 0 0 10px 5px lightblue, 0 0 15px 10px black;  
    // blur : pixeled background color   // spread : all area increase  
  * list-style-image: url('sqpurple.gif');
  * max & min width to adapt layout overflow
  * overflow-wrap => for long words
  * border radius : 15px/50px ;
  * white-space: nowrap;  overflow: hidden;  text-overflow: clip OR ellipsis; // loerom ...
  * word-break: keep-all; word-wrap: break-word; // for breaking long words 
  * writing-mode  //  vertical or horizontal 
  * font-stretch
  * transform : translate , scale , rotate , skew , 
    // transform-origin  // scaleX(-1) to reverse img in x direction
    - 3d => rotateZ()
  * clip-path: circle(50%); shape-outside: circle(45%); 
    // ex. circle  img with wrapped text
  * object-fit & object-position => to control aspect ratio of image & video
  * mask-image  ( gradient or SVG or PNG  )
  * column-count => divide text in div cross multi columns
  * resize => enable user to control box size like textarea
  * outline-offset => space between border & outline
  * img filters : 
    - filter: blur(2px)
    - brightness(150%)
    - contrast(0.5)
    - drop-shadow(8px 8px 10px gray)
    - opacity(0.3)
    - saturate(200%)
    - grayscale(0.5) // colors
    - hue-rotate(90deg)  // colors
    - invert(0.3) // colors
    - sepia() // colors
  
# css rules :
  - @font-face { }
  - @keyframes  { }
  - @media screen and (max-width: 600px) { }

# fonts : 
  * font: italic small-caps bold 12px/30px Georgia, serif; /* font-size/line-height */
  * use 2 fonts from two families not only one 
    - one of them is for special headings only ,, the other for rest of the site (ex. Merriweather , Georgia) 
    - more if website is big 
    - search for font pairing in web
    - google fonts ( perfect for headers ) 
      $ abril fatface
      $ ubuntu  
      $ cinzel
      $ spectral

# icons : 
  * <i> OR <svg>
  * fontawesome
  * bootstrap icons 
  * google icons

# theme template & good designs & inspire 
  * search in google free web templates 
  * live websites & competitors  ( inspect & source code )
  * behance - dribble - printerest 
  * https://www.w3schools.com/w3css/w3css_templates.asp
  * https://envato.com 
  * https://themeforest.net/
  * https://www.canva.com/
  * https://creativemarket.com/
  * https://www.templatemonster.com/
  
# examples
  *  .center {
        height: 200px;
        position: relative;
        border: 3px solid green;
      }

      .center p {
        margin: 0;
        position: absolute;
        top: 50%; // 50% of its parent container 
        left: 50%;
        transform: translate(-50%, -50%); // 50% of its dimensions
      }
      `}),Hf=()=>C.jsx("pre",{children:`
          
      `});function Wf(){return C.jsx("pre",{children:`
# place-items
# flex  ( grow & shrink & wrap ) & grid ( rows & cols & span ) & order   
# position & float & z-index 
# font  (weight - size - upperCase ) & decoration 
# colors  & gradient 
# borders & rounded & outline  
# between space and divide 
# responsive => measure units - align - w & h - mobile first 
# cursor - <html class=”scroll-smooth”>

# img ( object-fit ) & background image 
  * ( cover or contain or auto ) 
  * ( top center right ) 
  * ( repeat -norepeat ) 
  * ( aspect-square ) 
  * (filters =>  blur - brightness - contract - grayscale )

# transition & animate 
  * hover:color-red-200/20  transition transition-[100ms] 
  * translate-x-[10px] scale-[1.7]  rotate-[17deg]
  * animate-spin ( spin pulse ping bounce )  

# shadow [x_y_blur_spread_color] 
  * shadow-[3px_3px_3px_0px_rgb(0,0,0,0.3),-3px_-3px_3px_0px_rgb(0,0,0,0.3)]

# btns & forms 
  *  hover focus active group-hover  
  * placeholder:md-text-xl

# special syntax
  * before:[css] hover:[css]  
  * color-[white_!important]
  * [&>*]:text-black [&_*]:text-black 
  * [combinator selectors]:[css_code]  ====>>> [&_*]:[color:black!important] 
  * min-[640px]:text-white md:text-white
  * dark:bg-white  **** <html class=”dark” >  tailwind config => darkMode: 'class' or activate it by system 

# Directives & layers =>
  * base  => html original elements 
  * component => new custom classes 
  * utilities =>  override tailwind classes & use native raw css 
      
      `})}let Qf=()=>C.jsx("pre",{children:`
          
      `}),qf=()=>C.jsx("pre",{children:`

# notes 
  * chain method => method in the class returns "this" keyword to enabling use of other method after calling it
  * this keyword refers to the instant of the class or sometimes the class 
  * sometimes we can use methods as secondary constructors for the class as in dart 
  * abstract class ( extended class only ) => not for  
    - having constructor 
    - having instance object variable 
    - call its method & attributes as static
      
      `});function Gf(){return C.jsx(C.Fragment,{children:`
# remember always that each html element is a dom object with properties & methods
# arrow fnc is not block scoped ( fix ( this ) issues )
# some array methods returns new array (Ex. filter()) && others edit the origin one (Ex. splice())
# we can use eslint local config file for each project 
# Code notes
  * {"  (cbFn) => { cbFn(); }"}
  * use spread operator to avoid immutables
  * convert type => !!myStr  ,,, +"1" 
  * console.dir( myobject ) // print object props and methods 


    
    `})}function Kf(){return C.jsx(C.Fragment,{children:`
# TS  built on js (dynamically types) and is compiled to js to be used on browser
# it prevents unexpected behavior & unexpected errors
# it gives errors only in type-script-file when coding
# it's compiled to normal js without type errors

# commands : 
  * npm install typescript ts-node  // install typescript & ts-node globally
  * tsc --init  // initialize tsconfig.json
  * tsc <tsFile.ts> // compile ts file
  * tsc // compile all ts files

# define types
  * type inference => it inits the type dynamically for simple type ex. => let myVar = 'ali';
  * interface MyCustomType2 { key1 : string ; key2 : string[] ; }   // can be implemented by classes
  * type MyCustomType = string | string[]  
    const myVar : MyCustomType = "myVal";
  * casting => "1" as number 
  * it defines class attributes types with privatable Ex.
    - class MyClass { attr1 : string ; private attr2 : number ; constructor ( public attr3: string  ) { } }   
  * myFnCall<{ name!: 'Ali'|'Ahmed'|'unionType' , age?: number }[] | undefined>( myArr )  
    - parameter variable type validation on call 
  * myFnDef( par1: string , par2 : any ) : returnType { fnBody } 
    - return type & params type hints on define 
  * myVar?: ReturnType<typeof anyObject>;  
    - gets the type of this object that will be assigned later to this variable
  * @ClassType{  } Class ClassName {}
  * generic ( general not specific ) 
    - accept more than one of any type like array , function params when calling
    - its items has any as a default type
    - used with complex types 
    - Ex
        let myArr : Array<string | number> = [];
        function identity<T>(arg: T): T { return arg; } 
          // means all arg & params & return should be one type
        console.log(identity<number>(10));  // Output: 10
        console.log(identity<string>("Hello")); 


      `})}function Yf(){const l=["Web Basics","Github","Theoretical","Design","Css","Tailwind","OOP","Javascript","Typescript"],[u,s]=_.useState("Web Basics");return C.jsxs(C.Fragment,{children:[C.jsx(mn,{list:l,selectedItem:u,setSelectedItem:s}),u==="Web Basics"&&C.jsx(Ff,{}),u==="Github"&&C.jsx(Af,{}),u==="Theoretical"&&C.jsx(Uf,{}),u==="Design"&&C.jsx(Bf,{}),u==="Css"&&C.jsx(Vf,{}),u==="Bootstrap"&&C.jsx(Hf,{}),u==="Tailwind"&&C.jsx(Wf,{}),u==="Sass"&&C.jsx(Qf,{}),u==="OOP"&&C.jsx(qf,{}),u==="Javascript"&&C.jsx(Gf,{}),u==="Typescript"&&C.jsx(Kf,{})]})}function Xf(){return C.jsx("pre",{children:`
# Authentication
  * storeToken & user in global state
  * conditionally define routes by token state

# design 
  * Arabic font => Amiri  && English font => playfair display
      `})}function Jf(){return C.jsx("pre",{children:`
# basic info :
  * In Backend I can work with Firebase Or local Sqlite  Or remote web server
  * In cross platform we depend on prepared tools that fit IOS & Android &&& a custom combination of these tools
  * onboarding screen => contains swiper for users who use app for the first time & usually contains instruction and illustrations


# notes :
  * Vysor for mirroring mobile screen on pc


# running code :
  * we can use Android Emulator ( android studio ) OR IOS simulator ( Mac & Xcode mobile app )

# Routing & Navigation :
  * we can navigate using Global State
  * stack means push to front

# FCM
  * FCM stands for Firebase Cloud Messaging,   used for pushing updates
    - use get for normal fetch and Future type response
    - but use listen & snapshot for realtime to get Stream type response ( queue of Future )

# notifications
  * we can use flutter_local_notifications use firebase_messaging for sending notifications
  * we can notify specific user using firebase_messaging & firebase console and this action responses are
  * we can response in background while app is closed

# native device features ( camera , gps , ... )

# platforms: 
  * integrate native code into cross-platform app
  * can write specific code for each platform
`})}function Zf(){return C.jsx("pre",{children:`      
# basic info :
  * MVVM
  * SPA Single Page Application , SFC Single File Component
  * most FE frameworks uses CLI 
  * async http request ( Ajax )
  * component life cycle  ( we must destroy continuous tasks before component is destroyed)
  * lazy loading ( route path component - assets  )
  * parent fragment is preferred
  * interactive => respond to user actions 
  * reactive live  immediately response  without reloading with state => using js proxies
  * Teleporting => changing component rendering place in the DOM.
  * remember Astro.js => SSR frontend framework
  * dispatch  OR emit new event 
  
  * the build process enhances code 
    - build tools ( webpack ex. react-scripts  ***  vite )
      $ collect assets 
      $ bundling 
      $ hot reload 
      $ minify & compress 
      $ work on all browsers 
      $ more secure 
    - "scripts": {
      "build": "vite build",
      "postbuild": "copy .htaccess dist\\.htaccess"
      } 

  * data hydration => passing the endpoint server data as props to the page component

  * props may be passed from parent to child and from child to parent  

  * SPA rendered in one app root in one basic file
    - uses virtual DOM & small components  
      $ that updates only specific pieces of code not whole the dom
    - has one root & inject components into it
  
  * child slots & parent layout inheritance 
  * animating ( native css js )
  * state :
    - global & local state
    - computed
  * common folder names :
    - util 


# auth : 
  * store bearer token in localstorage and use it in every auth request header 
  * token expiration duration

# Deployment  : 
  * client side rendering : always redirect all paths to index.html  in build folder  

# debugging :
  * browser extension  ex. angular debug 
  * debug mode from source tab in inspect mode and choose line to stop at
  * vscode debug mode
  * 






`})}function ep(){return C.jsx("pre",{children:`
# basic info 
  * REACT uses ((  Build Process )) means your written code not executed as it & compiled before executing
  * use function-based ( default )  and can use class-based  
    - component function can't be async  
  * using extra datatype called jsx
  * basic topics : components & children & parent fragment & root element & looping using map & key attribute
  * browser extensions : React devTools && redux dev tool
  * normal css is not scoped in react BUT moduled classes are scoped 
  * React strict mode execute any component twice on mounted  to detect error 
  * createPortals ( teleporting ) : you write code in a place and render it in another 
  * normal code outside component function is not rerendered on updating state 
    - it's is common between all instants with the value of first render & not updated when component reload 
    - BUT when defining inside component using refs define variable onmounting only without redefining on rerendering 
  * key attribute is used with loops and used to rerendered when it changes dynamically ( Do not use array index !!! )
  * there is difference between React onClick={} && DOM onclick="" 

# data sharing 
  
  * props { any js value even if object or function } & state & context & redux 
  * left shared states up to pass status to parent  BUT this make alot of rerendered 
  * derived values => values derived from state or props
  * state types : local state – cross component state ( prop drilling ) – app wide state
  * 

# Global state :
  - we can manage global state using  ( context with reducers , redux toolkit , custom hook  )
  - if I have many actions on one state like ADD_ITEM , UPDATE_ITEM so I use useReduce not useState ( managing complex state logic  )
  - context  is stored in share  OR  store  OR  context folder 
  - normal context issues : many nested providers if split context - very complex if collected them
  - redux : state central manager  && redux-toolkit is more easier

# Router : 
  * react router v+6 : 
  * ( router means if path == “ “  => return <MyComponent  />   )  
  * path , id , element for jsx code 
  * <Link > & <NavLink> for active class & end attribute to make active for “/” only not “/*”  
  * useNavigate( ) and redirect( )  to navigate in script  programatically
  * Layout Inheretence  < Outlet /> and childrens   
  * dynamic path and useParams 
  * relative”ali” vs absolute”/ali” path  
  * nested relative paths
  * replace history 
  * make routes as object { name => path } to use route name like laravel  
  * action for submit form *** BUT loader for fetch data *** AND both to reduce states

    -  loader Ex. 
      const returnedFromLoaderFunction =  useLoaderData();
      and we can use dynamic route params as this 
      export function loader( { params } ) {   params.id }  // for '/:id'
    - action Ex. :  ( called dynamically when submitting the form )  
      <Form method=”post”> from react router   )
      export function async action  (  { request } ) { 
      const formData = await request.formData();
      const submittedData = Object.fromEntries( formData ); 
      axios().then( return redirect('/') ).catch } 

# Hooks : ( useXYZ )

  * ( !! must be inside component directly and not nested scoped !! )  
  * useState :
    - rerender component ui jsx only when variable's value change 
    - setStatus( prevStat => !prevStat ) is instantly not scheduled 
    - to make a copy not a shortcut setImmutableArray ( prevParentArr => [ …prevParentArr , [key] : 'newval' ]  ) 
  * useEffect : 
    - life cycle events && update ref from ui  
    - best practice: reduce it
    - onmounted => useEffect( … , [ ] ) , 
    - onupdated  => useEffect( … , [state] ) , 
    - onunmounted => useEffect( () => {  return () => { … }  }  , [ ] )
  * useMemo  => like useEffect but state and props not updated inside 
    - memo only is used to wrap jsx to prevent unnecessary rerendering  
  * useCallback is prevent redefining a function  
  * useRef is to shortcut ui elements and store it in variable ***** update script only not ui
    - import { forwardRef } from 'react';
      const test = forwardRef( function componentFunction ( { …props } , ref ) {} ); 
      export default test
  *  useImperativeHandle : 
    - used with forwardRef 
    - to expose component instance with properties or methods to the parent component we use useImperativeHandle()

  #  Enhance Performance & Optimize  

    * check for non useful rerender and redefine using “console.log “
    * million js package makes react 70% faster 
    * optimizing by lazy loading : by inline import 
        //  import image from “./path”< image src={ image } /> // 
        < image src={ ( ) => import('./path-OR-link').then( ( image ) => image  ) } />
              
        import MyFn from “./path”  // const MyFn =  lazy( ( ) => import( './path' ) )

        import { myFn } from “./path” ; <input onChange={myFn} /> // 
        <input onChange={ ( ) => import('./path').then( ( module ) => module.myFn  ) } />

    # examples 

    import image from “./assets/myimg.png” 
    import myobjectarrayofprops from '“./assets/data.js”'
    import './assets/mystyle.css'
    import MyComp1 from “./Dir/MyComp1.jsx”
    import classes from “./MyStyle.module.css ”

    function Header ( { firstName = 'default' , …props } )  { 
      jscode ;
      const BtnsChild = props.btnsChild
      const BtnsContainer = props.btnsContainer;
      cont MyJsx = <div> hello </div>
        return  ( 
          <div className={props.className} id={props.id} onClick={props.onClick} style={ { 'text-align' : 'center' , fontSize : '12px' }  } >  
            {/* html here */} 
            <BtnsContainer> <BtnsChild /> </BtnsContainer>
            { js code } 
            <img src=”img.png” alt=”file stored in public and accessible from user” />
            <img src={ image }  alt=”file stored in src/ not available for user as url” />
            { props.mytext }
            { props.children } 
          </div> 
    ) 
    }

    function App ()  { 
        return  ( {/* html here */} 
        <Header mytext='hello' 
          { …myObjectArrayOfProps[0] }
          { name:'ali' }  
          className='active' 
          id='active' 
          onClick={ myFunc }
          btnsChild={ <> child jsx here </>   }
          btnsContainer='div' // can be also btnsContainer={MyComponent}
          key=”unique” 
          >
          { child jsx here  }  
        </Header >
    {/* html here */} ) }





      `})}function tp(){return C.jsx("pre",{children:`
# basic info 
  * Framework : built on react ******* for fullstack application
  * has differences in components compared to react =>
    - <Image /> component to enhance image  
    - NavLink is not exist but can be made manually  
  * server “use Server”; (default)  …. or client “use client”; directive 
  
  * data caching 
    - uses aws s3  for media to override cached after building
    - caches data so we use =>  revalidatePath( “”/my-path” ) => to refetch data and overrides cached one

  * Routing
    - Has its own built-in routing using filesystem 
    - server side rendering
    - reserved files 
        * page.js => for path’s main content
        * layout.js => Create a new layout that wraps sibling and nested pages
        * not-found.js => Fallback page for "Not Found" errors 
        * error.js => Fallback page for other errors 
        * loading.js => Fallback page which is shown fetching data
        * route.js => API route (NOT return JSX code but data Ex JSON format)

      `})}function np(){return C.jsx("pre",{children:`
# basic info :

  * has many built in declarative tools ( low usage of 3rd packages ) 
  * ( options - composition ) API Types
    - we use "this" keywords many times in option api unlike composition "this" is not defined
    - composition uses ref (primitive value) & reactive (reference value) 
    - setup is executed in life cycle  before ( created & mounted ) 
  * using <template> & <script setup > & <style scoped>
  * event modifiers : @click.prevent=”” @click.stop="" @keyup.enter=””
  * watchers  =>  computed , watch , watchEffect
  * dynamic component & use <keep-alive> to cache => <component :is=”compName”></component> 
  * loop “key” is used to make component unique inside the loop *** SO *** if it changed component will change *** AND *** is used also if duplicated errors occurred
  * special global variables : $route $router $events $refs
  * computed properties : methods that use cache and are rerendered only when dependencies change {{ myComputed }}  BUT this <p>{{ normalMethod() }}<p> is rerendered on every change 

# forms :
  - <form @submit.prevent="submit">
  - const destroy = (id) => if( confirm( ' Are you sure ? ') ) 
    { Inertia.delete(route( 'posts.destroy' , id )
  - we must send files with POST Not PATCH & use @change="getFile" not @change="getFile()"
  <input type="file" id="file" @change="getFile" accept="image/*">
      const getFile = (e)=>{form.file = e.target.files[0]};
      const submit = (e) => {
          form.submit('post','/t',{preserveScroll:true , 
          onSuccess: form.reset(),
          forceFormData:true,
      });



# directives : 

  * v-model “2 way binding” * v-once ”no listen to value update”
    $ checkbox & multi select from official docs in form
    $ v-model:lazy "modifiers"
  * v-bind:attr :attr 
  * v-on:click @click - @submit.prevent=”” {default action => reload}
  * v-for & :key
  * v-if * v-else-if * v-else * v-show 
  * v-text * v-html 
  * refs 

# passing data  :  

  * to child => 
    - using component call attributes & props ( type - required - default - validator )
    - using routing (ex. passing via inertia)
  * to parent => by emitting custom events 
  * provide & inject ( ex. functions & object  ) // to send data to all descendants
  * VueX or Pinia  ( global state manager )
  * making components global  
  * custom plugins ( to share data between all components [options api only] )

# lifeCycle hooks:  

  * (beforecreate - create )< replace by setup( ) > - beforemount 
  * mounted , beforeupdated , updated 
  * beforeunmounted , unmounted

# component inheritance :

  * <div v-if=”$slots.name”> <slot name=”name” :myprop=”ali”> <p> default </p> </slot> </div> 
  * <template #default=”slotprops” > html </template>
  * <template v-slot:name > html </template>

# reusable helper functions to share data & methods ( like traits in laravel ) : 

  * mixins for options api 
  * composable or custom hooks for  composition api 
  * ./hooks/useXyx.js like useRouter && useStore

# Composition API : 

  * depending on => setup(  ) {  return { } }  
  * at it => ref is reactive because there are no reference data 
  * computed properties is considered refs  
  * items in reactive objects are not reactive 
    - but we can convert them to refs using toRefs or computed property  
    - Ex. myObj.name  props.key  NOT CORRECT 
    
# State :
    
  * in composition api :
    - ref for primary value [ string , number ]  
    - reactive for reference value [ object , array , function ]   
  * in options api :
    - data already is reactive 
  * VueX:
    - uses createStore  - state() { return { data1 : val1 } } 
    - mutations: { fn1 () { } } getters: { fn1 () { } } $store.commit()  
    - actions: { fn1 () { } }  $store.dispatch()
    - modules for global state files 
    - namespace to call nested stored by its module name
  * performance :
    - computed property to reduce rerendering  { functions return property }
    - many rerender => watch('refval', code ) , watchEffect( code and monitor all dependencies changes )

    
# Routing :

  * registering -  <router-view> <router-link> - nested routes & children - route name - pages folder -  fallback route
  * passing data : 
  * dynamic paths & enable path parameters as props 
  * query params </path?xyz=xyz>  
  * meta property to pass data to $route.meta 
  * route slots
  * navigating using ( links - programmatically ) - active link - redirect - navigation scroll behavior
  * navigation guard and middleware & route  life cycle  
    - (  beforeeach - beforeenter beforeRouteEnter *** beforeleave - beforeRouteLeave -  afterEach )

# optimizing : 

  * const globalComponent = definingAsyncComponent ( ( ) => import( '/path' )  )
  * const routerComponent = ( ) => import( '/path' )  

# code notes :

  <input @input=”setName( $event , param1 )” >
  function setName( event , param1  ) { }
  
  :style=”{borderColor : condition ? 'red' : '#ccc' }”
  :class=”{ bg-brimary : true , active : condition }”
  <li v-for=”( value , key , index ) in object”   :key=”idenx”>
  <Input v-bind={ myObj }  />
  
  watch( [ var1 , var2 ] , function ( newVals , oldVals   ) {
    console.log( ' old var1 : ' +  oldVals[0] )
    console.log( ' new var2 : ' +  newVals[1] )
  }  )
  
  <router-view v-slot=””slotProps”>
    <div class=”parent”> <component :is=”slotProps.Component”> </div>
  </router-view>
  router.isReady().then( () => { app.mount('#app') } )
  
  setup  ( props , context  )  { // convert props to _ if not used  
    context.emit( 'my-event' , myVar )

  <script setup> 
  defineProps({ user: Object }) ;  usePage().props.user) ;
  OR  const props = defineProps({ user: Object }) ; props.user ;
  <\/script>

  <script setup> defineOptions({ layout: Layout }) <\/script>
  // use layout in options to make it Persistent & not reloaded 
      //   when reload the component *** or use it as a component child 

  <script>    <\/script>
  <script setup> <\/script>
  <template>    </template>
  <style> </style>

  <script> export default {  props : { name : String , users : Object }  , 
  components : { Link } , layout : Layout  , setup () { return  } } <\/script>

  ___________________
  Watchers for execute functions
  ___________________
  watch([ refVar  ,  ()=>reactiveVar.key1 ] , async ()=>{} )
  watchEffect(async () => {code includes any ref or reactive values } })
  const stopwatch = watch ( var , ()=>{ code }  ) 
  stopwatch() ; // to stop watching 



  ___________________
  layout & slots inheriting
  ___________________
  <script setup>
  import Layout from './Layout/AuthenticatedLayout.vue'; 
  import MyComponent from './MyComponent.vue' ;  
  <\/script>
  <template>
    <Layout>     <MyComponent  />       </Layout>  
  // if two tags we use <my-component> </my-component>
  </template>

  <template>  <slot />  </template>

  
  <div v-if="$slots.myName">
    <slot name="myName" > 
      optional default content shown if slot not passed
    </slot >
  </div>  
  <AnyName> <template #myName>html</template> </AnyName>

  v-if=”$slots.myName”
  ---------------- 
  <Component :is=”boolVal ? 'Link' : 'span' > 


      `})}function rp(){return C.jsx("pre",{children:`      
# basics
  * angular is perfect for many options and high performance
  * angular material is a pre-made components ( forms , icons ), ready for direct use   ( widely used )
  * uses ( services - models - interfaces - dependency injection )
  * uses pipes to filter OR format OR transform variable data like : ex.  price | number:1.1-2 | currency:EUR 
    - every filter has documentation
  * host element is the element used as a parent of the component content
  * directives ( ngModel - *ngIf - *ngFor )  // '*' means wrap with template
  * we can make custom ( pipe - directives ) 
  * there are many ways to inject services  USING provider ( to the root ---- to the component element ---- others) 
  * not using axios for http requests and use builtin HttpClient that returns Observable Stream 
  * it has own form validator system using FormControl & Validators
  * deferring component to be rendered when it's on viewport Ex. flash sale timer  
  * we can cache assets & urls from angular config file
  * angular schematics ( ng add ... - ng generate ... - ng update ...  )
  * angular builders ( ng build - ng test - ng lint - ng deploy  )
  
# views 
  * stand alone component & imports for each one  VS modules & global import
  
# state  & properties
  * in previous angular was managing state using OOP  *** BUT *** signals make it better performance & less code 
  * uses events to pass data to parent 
  * uses ( Inputs with signal && output with event ) to handle components data sharing
  * signals is two way binding local state  [ mySignal() ** mySignal.set() ** mySignal().update( prev => prev + 1 ) ]
    - ( set - update )  methods
    - constructor() { effect( _ => console.log( mySignal() ))} // watch signal value and execute code onchange
  * template variable is like a ref  used inside template to catch element  [[[ defined && called inside html file ]]]
  * we can use (( two way binding )) OR (( refs )) OR OOP to update from input values 
  * RxJs library & observables => subscribe & listen to streams of data update synchronously  Ex. interval() of count increment
    - we must unsubscribe from any subscription on destroying the component  
  * other forms data handling approach => 
    - ReactiveFormModule 
      + FormGroup for forms 
      + FormArray for checkbox inputs 
      + FormControl 
      + Validators
  * NgRx for global state management system like Redux 
    - reducers to handle actions & change state 
    - effects as events on state changes

# performance 
  * onPush component => rerendered only when its inputs change NOT with every parent update
  * Stand alone => imports only every needed components & providers & dependency for itself *** BUT *** Modules import all components with centralized import for providers
  * The module is a group of components   *** AND ***  stand alone component  can be used in modules except the root component

# commands
  * ng g c folder/component-name 

# building & deployment 
  * can be built as  ( SSR app --  SPA ( CSR ) -- SSG static site generation  )   
      `})}function op(){return C.jsx("pre",{children:`
# basic info :
  * we consider any function with return type of Future as a promise myFn().then().catchError()
  * in flutter widget tree  BUT in HTML DOM
  * more  UI customizable than other cross
  * uses  widget with properties & identifiers 
  * Larger size than native *** little less speed ***  limited
  * You can control syntax errors using analysis_options.yaml and search for dart linters
  * responsive => handle different screen sizes 
    - but adaptive => handle difference between platforms like touch in mobile & mouse in web
  * when importing a file we got all imported file content in the destination file
    - Ex. when import constants file and edit its content it affects all the app. 
  * uses its own rendering engine (Skia), 
    - apps look the same across devices, even if the platform's UI changes. 
    - multi platform apps based on one single codebase

# styling :
  * Theme & color scheme  Search ThemeData for global style of app 

# state & 2way binding :
  * Stateful widget => widget Class + state Class [  constructor + initState + setState   ] 
  * Use Form & formkey & Controller & Fields for validate & more features without stateful
  * there are controllers & global key for several widgets like  ( form - scaffold - page view )  
  * to access properties passed to stateful widget we use widget.propName 
  * split stateful part in the widget in a separate widget to prevent unnecessary reload
  * stateful widget lifecycle => initState() , build() & setState() , dipose( ) 


# start : 
  * install flutter SDK software development kit 
  * ( android studio ) for android emulator  && ( Xcode )  for is ios simulator 
  * use main ( runApp( ) ) in main.dart  to describe ( Widget Tree ) 

# Navigation : 
  * Navigator.push( context , MaterialPageRoute( builder: MyScreen( ) ) )
  * Navigator.pop( context  )
  * Navigator.pushAndRemoveUntil( context , MaterialPageRoute( builder: MyScreen( ) , 
  * ( Route<dynamic> route ) => false  )

# type-safe :
  * String? myString; myString = 'a' ;  
    print( myString! ); print( myString ?? ' '); 
  * late String myString; 
    // means  I will assign it soon and initialize it with null
  * use int.tryParse() instead of int.parse()
  * types can be [ built in , 3rd parties , user custom ] 
  * you should create model classes for custom data type ( Ex. Meal )  
  * int , double , String  , bool , List , Map , Enum , 
    - Widget , Function() , Object
  * dynamic Vs var Vs final Vs const  ( typing - caching - redeclare - reassign )
  * bool myBool = myVar is int || myVar is! String
  * grand parent object 
    - 29 => int & num & Object
    - MaterialApp => MaterialApp & Widget & Object    
  * Generic type Ex. contains nested types 
  * create model class for mixed maps & lists 

# arguments 
  * position argument fn ( a , [ b ]  ) { }  fn  ( 1 , 2 ) 
    // a required , b optional  
  * named argument fn ( {required a ,b } ) { } fn( a: 1 , b:2 ) 
    // a required , b optional
  * fn (a , [ b = 5 ] ) { }  
    // fn ( { a , b = 5 }  ) 

# debug :
  * debugging from
    - debug console in vscode terminal panel   
    - run in debug tool 
    - ctrl + shift + p then open flutter devTool in browser

# code notes : 
  * List.of( myList ).map( );  this called chaining ( calling method after a method )
  * constrained widget that limited by parent dimension
  * keys => widget state identifier 
  * Add Directional to convert ( right , left ) to ( start , end ) Ex. AlignmentDirectional 
  * cascade ( make object and access it )  MyClass()..method() /* equals in php */ (new MyClass())->method()

# packages : 
  * external packages  => pub.dev website    /// pub package manager /// or search in google flutter packages
  * SQ F Lite => local database on mobile
  * official google font package
  * shared_prefences => cache store 
  * GlobalState  => Riverpod 3rd Package ***** or bloc && flutter_bloc packages (cubit)
  * AJAX => pub http package OR pub Dio package
  * open website frame -> web view package 
  * swiper => PageView.builder()  && SmoothPageIndecator packages
  * slider => carousel_slider package
  * notify msg => flutter toast 
  * firebase ( search in google flutterfire ) => firebase_core package
  * responsive_builder
  * pub Location package  ,,,, Google maps API  ,,, Google Geocoding API
  * Pub image_picker  package 


# performance :
  * use const to cache every thing  Ex. static widget  

****************************************************************************************

******************************
######## Dart Examples ###########
******************************
  * Json => json.encode() &&  json.decode()
  * type coercion => int.tryParse(‘1’)
  * console logging  => print() 
  * computed properties => getters 
  
  * dart oop :  

    class MyClass extends ParentClass  { 
      final String myProp ;
      static final String myProp2;
      MyClass ( { this.myProp , parentProp } ) : super( parentProp )
      if (  nullableVar == null ) return ;  nullableVar! ; means I am sure I prevent it from being null 

    @override 
    void parentMethod ( string para1 ) {
    super.parentMethod(string para1)
    // code
    }
  } 

  ************************************************************************************************

*************************************
######## Flutter Examples ###########
*************************************

# search in  google => flutter widget catalog

# material design [ Root => MaterialApp(
                          debugShowCheckedModeBanner : false ,
                          theme : ThemeData (   ) , // can control all main buildin widget style in light mode
                          darkTheme : ThemeData ( ) ,
                          themeMode: ThemeMode.dark , 
                          home: ,
                          )
                                
                          Screen => Scaffold( 
                          appBar : AppBar( leading: , title :  , actions : [ ] , elevation :   10 ) , 
                          body: MyWidget ( 
                            Text ( “ my text “,
                              style : Theme.of(context).textTheme.headline5.copyWith ( color : colors.black )
                            )  ) ,
                          floatingActionButton : , // button float on right bottom
                          bottomNavigationBar : 
                          BottomNavigationBar( items : [BottomNavigationItem( icon :, label : ,  )]  ) ,
                          ) ]
                          Screen => Scaffold( body: SafeArea ( child :  ) ) ]
# widget() 

  * alignment :  
      Column( mainAxisSize:  ,  children : [ ]  ) 
      Row( mainAxisAlignment: , crossAxisAlignment : ,  children : [ ] ) 
      Expanded( flex : 3 ,  child:  
      Stack ( alignment : Alignment.bottomCenter,  children : [ ]  ) 
      // equals position absolute
      Wrap ( children : [ ]  ) 
      // equals flex wrap
      Center( child : )  
      Card( ) 
      css grid => GridView() 

  * div : 
    Container( decoration : BoxDecoration( )   , width : double.infinity ,
    Container( color : color.balck.withOpacity( 0.1 )  , height : double.infinity ) 

    padding : EdgeInsetsDirectional.only( top: 10 , bottom : 10 , start : 10 , end : 10   )  ) 
    padding : EdgeInsets.symetric( vertical : 10  , horizintal : 10 )
    padding : EdgeInsets.all( )

  * Text( maxLines : 2 , overflow : TextOverflow.ellipsis  ) 

  * SingleChildScrollView ( scrollDirection : Axis.vertical , child :  ) 

  * images :
    Image.asset( ‘relative/path’ , width: 300 , color: Color.red ) 
    Image( image : NetworkImage( )  fit : boxFit.cover )
    CircleAvatar( ) 

    * ListView => 
      Container( height : 100 , child :  ListView.separated ( 
        scrollDirection : Axis.horizontal , 
        itemBuilder : ( context , index ) => myWidget(myList[index]) ,
        separatorBuilder : ( context , index ) => SizedBox( width : 20) ,
        itemCount : myList.length ,
      )    )

    * spacer() takes all the space between two elements ,, works like sizedBox but without give value
    * margin => SizedBox()
      

    * forms : 
      TextField < form input >  ,, TextFormWidget , DropDownFormField 
      ShowModal  , ShowDatePicker , ShowDialog , snackBar (like toaster )
      Form()

      TextFormField ( decoration : InputDecoration ( hintText :  , labelText : ,

      keyboardType: TextInputType.number  , 
      obsecureText : true . // for password 

      border : OutlineInputBorder ( ) , 
      prefixIcon: , suffexIcon:  , 

      controller : myVarController , 
      // before widget => var myVarController = TextInputController()  
      onFieldSubmitted : ( value ) { } , 
      onChanged : ( value ) { }  ) )

      * smooth scroll => any scrollable widgets takes identifier (physics : BouncingScrollPhysics() ,)

      * Dissmasable => can be deleted by swapped left 

      * scroll => SingleChildScrollView 

      * loading => circularProgressIndeicator() 
      * progress => LinearProgressIndicator()
      
      * responsive layout => MediaQuery && LayoutBuilder 

      * <tappable ot touchable   === >>> InkWell  OR GestureDetector  

      * range input => Slider( value :  , min : , max :  ; onChange:  ) 

      * FutureBuilder : build returned date from async fnc

      * Navigator <push & pop>

      * ElevatedButton DropDownButton TextButton( onPressed :  , child:  ) IconButton ( icon : , onPressed :  )


`})}function ip(){return C.jsx("pre",{children:`
      
# basic info :
  * depends on React jsx & flex box
  * uses js bridge before compiling
  * see docs to start new app
  * we can use with Expo OR with React CLI
  * You must see your work on both IOS And Android because of different execution
  * rely on component api

# basic topics :


# styling :
  * not inheriting cascading
  * not scrollable and pressable by default
  * rely on flex
  * fonts : expo install expo-front
  * statusbar ( notification bar ) : light & dark
  * loading spinner :  {"<ActivityIndicator >"}
  * icons : expo vector icons & IonIcons
  * useLayoutEffect use sometimes instead of useEffect to prevent layout refresh
  * Dimensions API  
    - ( window “ excluding statusbar “ )  &&& use it with state for ( orientation )  
    - screen orientation ⇒   useWindowDimenstions( )  , keyboardAvoidingView  , separate component part foreach width
    

# platform :
  * pressable : android ripple effect ( hover opacity ) & IOS (  style callback func )
  * android Elevation && ios shadow

# running code on mobile :
  * we can run using expo go mobile app

# packages :
  * react dev tools

# Navigation =>  
  - react navigation docs 
  - no url but buttons && push to front 
  - Stack OR Drawer OR Tabs 
  - Nested Navigator  
  - drawers & tabs 
  - options ( title & headerStyle ) & screenOptions ( all screens ) && setOptions ( inside screen  ) 
  - navigation props 
  - dynamic route     
  - useNavigation( ).replace( 'screenName' )

# basic components :
  * StyleSheet
  * ScrollView & View
  * Text
  * InputText
  * Image
  * Button
  * FlatList ( lazy loading [ render seen only ] --- scrollable )
  * Platform.OS
  * notes :
    - can't use View  inside Text but use Text inside Text

# native features :
  * native mobile feature ( camera , location , device storage  )
  * expo-camera expo-location expo-xyz ( more advanced feature )
  *  you can gain permission of each platform before

  * location
    - make it as UI code "show map" & UX code "get info"
    - expo-location package
    - getCurrentPositionAsync()
    - useForegroundPermission()
    - get map image for latitude & longitude from google console
    - expo install react-native-map  for pick a place from map
    - google map geocode to get human readable address

  * storage :
    - expo-SQLite package => for local Database
    - react native asyncStorage => for cached

  * camera images 
    - expo-image-picker package  
    - launchCameraAsync({ quality:0.5 , aspect: [ 16:9 ] , allowsEditing : true  })  
    - useCameraPermissions() 
    - PermissionStatus.UNDETERMINED

  * notification
    - expo notification  &&& setNotificationHandler( )  &&& scheduleNotificationAsync( )
    - local on device or push on push server

# folders & structure :
  * screens
  * components/ui
  * constants to manage colors
      `})}function lp(){return C.jsx("pre",{children:`

*****************
# frontend  ( search for laravel docs Blade ) :
*****************
  * laravel has blade template engine &&& ( livewire - albine ) as frontend libraries
  * inertia prevents 
    - two repos on github 
    - subdomain for front or back 
    - ssr & perfect meta tags 
    - no api & postman time )
  * inertia ( react - vue ) => $page.props   OR usePage().props 
    - preserve state => means not to update ( inputs - props ) 
    - <Head>  <title> my title</title> <meta /> </Head>
    - HandleInertiaRequests => middleware to share data between all inertia pages  like  
      $ share between views in AppServiceProvider
      $ may be used to pass flash messages
      $ $page.props.flash.message  OR usePage().props.flash.message
    - uses ziggy to access route names 
    - in script usePage() but in template {{ $page }} 
    - <Link href="/logout" method="post"  :data="{ foo: bar }"  preserve-state preserve-scroll 
      :class="$'{' $page.url === '/users' || $page.component === 'Users/Index' ? 'active' : '' }"> Logout </Link>
    - use router library to navigate & send requests
      $ router.visit(url, options including Method )
      $ router options 
          { method: 'get',   data: {},   replace: false,  forceFormData: true,   
          preserveScroll: false,   only: [],   headers: {},   
          onBefore: () => confirm('Are…?') , onProgress: progress => {}, 
          onSuccess: page => {} ,  onError: errors => {}} 

  * blade template engine :
    - {{ request()->routeIs('dashboard') ? “active” : "" }}  // returns text
    - {!! $user->isAdmin ? 'checked' : '' !!} // returns html
    - directives ==>> 
      - @php 
      - @extend @include('posts.index' , [ 'posts' => $posts ] ) 
      - @stack & @push & @perpend 
        $ use with styles & scripts
        $ may used as a teleport & send a part to other place 
      - @section & @yield use with layouts & views
      - @csrf @method('patch')
      - @if @error @endif @foreelse @empty @can 
      - @foreach( $arr as $key => $val ) @while(true)  
        $ @continue(true) @break(true)  $loop->index $loop->count 
      - {{string}} {!! htmlCode !!}
    * escaping ==>> @@if()  ::class    
    * <script> var app = JSON.parse( <?php echo json_encode($array); ?> );  <\/script>
    * Active Nav Link => if ($request->is('admin/*')) if ($request->routeIs('admin.*')) 

    * return Inertia::render('Post/Show', [  'post' => $post->only(   'id',    'title',   ), 
      'edit_url' => route('posts.edit', $post),  'canEdit' => auth()->id() === $post->user_id ]);
    // returned data is visible in the client console ,,  less data means load faster & more secure

    * @foreach ($errors->all() as $key => $error).

    * forms : 
      - <input type="hidden" name="_token" value="{{ csrf_token() }}">  	 
      - <input type="hidden" name="_method" value="PUT">		
      -  input names - input errors - value="{{ old('username') }} 
      
      `})}function ap(){const l=["Common","Common Web","React","Next","Vue","Angular","Laravel","Common Mobile","Flutter","React Native"],[u,s]=_.useState("Common");return C.jsxs(C.Fragment,{children:[C.jsx(mn,{list:l,selectedItem:u,setSelectedItem:s}),u==="Common"&&C.jsx(Xf,{}),u==="Common Mobile"&&C.jsx(Jf,{}),u==="Common Web"&&C.jsx(Zf,{}),u==="React"&&C.jsx(ep,{}),u==="Next"&&C.jsx(tp,{}),u==="Vue"&&C.jsx(np,{}),u==="Angular"&&C.jsx(rp,{}),u==="Laravel"&&C.jsx(lp,{}),u==="Flutter"&&C.jsx(op,{}),u==="React Native"&&C.jsx(ip,{})]})}function sp(){return C.jsx("pre",{children:`    
# basics info

  * backend is used when we 
    - need a database ( Ex dynamic websites reached from many devices  )  
    - integrate secret 3rd apis 
    - implement complex secret logic
  * the best practice is to reduce request numbers & reduce response size
  * multi tenancy  means the same code with separate database records for each client
  * Huge data quantity not affect as text but as UI rendering
  * queues & job & schedules tasks & cron jobs
  * thin controllers &&& fat models  
  * focused controller on one thing *** NOT *** one controller for all things
  * Single Action controller   =>  public function __invoke(){}
  * Route Model Binding ( bind the route parameter to the DB model  )
  * Service Provider => code executed on every request before middlewares 
  * authorization => policies & gates 
  * centralized control & reuse =>
    - traits 
    - events & listeners 
    - services 
  * mini resources with small response size *** is better than *** one big respose resource
    - many requests is better than big responses     
  * html structure multiply responded arrays' size
  * we must use 
    - env variables for values changes based on environment & secret values
    - logging for http requests ( ex. morgan in express ) 
  * we must reform & refactor data before sending it as api to protect sensitive data ( laravel resource )
  * there are some prepared validation but you also can make you custom ones   

### basics topics

  # schedule code & commands

  # SMS & whatsapp  => twilio

  # terminal :
    * install anyPkg@version

  # performance 
    * lazy loading of data
    * type hint

  # Files Handling 
    * form files & storage -- pdf -- excel 
    * project's file-path handling  ( public - views - storage )

  #  Cookies && Sessions && Cache

    * Cookies 
      - stored on browser 
      - handled by requests & responses 

    * sessions
      - it's unique foreach authenticated user
      - usually stored in database && and at the same time has cookie on browser
      - Node uses 3rd package => express-session
      - used to handle sensitive data like auth & user

  * Routing
    - request ( url & header & body & method ) --- middleware --- server logic && database --- response ( status & header & body & method )
    - dynamic paths & path parameters & filter routes by param types
    - Route prefix & Route name
    - grouping
    - share data to all responses or all views
    - large data pagination 
    - redirecting [internal - external] & flash messages

  * views ( template engines )

  * file system & file management

  * Authentication  && security
    - middleware {/* => */} auth (api or web) & guest & throttle
    - password validation rules
    - password hashing ( & compare with hashed )
    - Admin multi Auth
    - API Auth && CORS
    - 3-party auth ( facebook - google )
    - use both client & server validation :  client reduces requests to server but it's overridable 
    - it's impossible to prevent hacking 100% but we try to make it more difficult & requires higher skills
    - don't take user input in a script area ( sql injection - html & js script ) 
    - recaptcha  ( robotic attack )
  
  # API 
    * might be for mobile app OR Single Page web app OR service
    * Stateless => 
      - depends on every request (tokens) not temporary storage (sessions)   
      - data in request & response are in json  
    * use CSRF (cross-site request forgery ) for fullstack app with non GET requests (gives 419 error code)
      - csrf ensures that the request came from your website 
        $ not from another fake website ( not optional )
      - CORS is used 
        $ when the front & the back are not on the same domain  
        $ for RESTfull app to validate frontend request's ( domain - method - headers)
        $ by setting headers to each response 
    * jwt 
      - sign unique data for each use Ex ( email , id ) 
      - we can decode them and use them using our custom-secret-key to verify the data 

  * notifications :
    - specific device by device token & firebase
    - broadcast for all devices  
    - sms & whatsapp & emails 
    - database 
    - read status 

  * payment
    - stripe ( search stripe payments docs )
    - braintree & paypal
    - "paysky" OR "paymob" OR "fawrypay"
    - steps of payment after checkout
      * collect payment method ---- then verify it
      * charge amount from method ---- then manage payments in database 

  * patterns MVC  ( model : database , view : UI , controllers : connector )

  * automated testing => test code using code  

### notes
  # template engine  
    * server html
    * easy & fast & beautiful syntax 
    * shortcuts & less lines
    * layout inheritance & less repeats

    `})}function up(){return C.jsx("pre",{children:`
# main info 
  * Django is widely used with big projects 

# commands
  * use docs to install 
  * run server {/* => */}  python manage.py runserver
  * start child app {/* => */} python manage.py startapp featureName
  * django-admin equals {/* => */} php artisan

# views 
  * put each view file in a folder with unique name 
      `})}function cp(){return C.jsx("div",{children:C.jsx("pre",{children:`
# some info

  * Npm package manager of node
  * node is server side js runner and also nodemon  ** BUT ** Deno is for both js & ts ** & *** developed by the same node developer ** & *** it's more secure
  * express is a node web server with prepared ( many functions , tools , and rules )
    - light , fast , huge community
    - default pattern MVC
  * sending email is after configuring email server
  * use exports.key & require *** OR *** make app type => "module" in package.json  and use import & export  
  
# error handling

  * global error   app.use((err, req, res , next) => { res.status(404).json({ err });})
  * global not found  app.all( "*" , (req, res, next) => { const err = new Error (" msg " ) ; next(err.message); }) 
  * disable errors on production mode 
  * handling app exceptions =>  process.on('UnhandledRejection' , () => {} )  // to listen on errors like database connection 

# terminal cmds

  * npm install {"<package>"}
  * npm init {"== >>>"} start node project
  * node app.js {"== >>>"} run file as build
  * nodemon app.js  {"== >>>"} run file as dev & listen to file changes

# env & app defineConfig

  * app.set('view engine' , 'ejs')


# dependencies

  * use --save with development & production dependencies  ( default )
  &nbsp; &nbsp; but use --save-dev for development dependencies


#  packages  ( almost every thing is via package )

  * express
  * nodemon
  * body-parser
  * morgan => logging & error handler 
  * multer => file handler 
  * sharp => image processing ( resize - change format or quality - ... )

# routing

  * using “use( “/” , {"() => "}  ) “  represent fallback for all paths , but if use get method if specify
  * in linux file paths is “folder/file” but in windows “folder\file”  SO we use sendFile( path.join( __dirname , “folder” , “file” ) )
  {"// dirname is path of current file"}
  {"// and you can make rootpath.js in util folder to give you path of root file"}


# app structure

  *  public folder {"=>"} for assets which is accessible by users ( css , js , imgs )
      -  to access files in public we must use {/* =>> */} express.static( ) function


# views

  *  express template engines are ( EJS --- pug --- handlebars  )
    - they are used as external packages and have their own docs
  
# websocket => establish a listening channel for server updates
  * use socket.io package on client & server sides      

# graphQL ( package used with many languages not only js )
  * a special pattern to make API like MVC 
  * frontend developer can customize returned response ( full query language for client ) 
  * default use is to handle json data only ( not files )
    - save the image first on server then the user uses the image url
  * stateless api with higher priority flexibility
  * uses schema ( for routing )  && resolvers ( for controllers )
  * uses one endpoint with POST method for the data ( detect responses from request body )
  * typed language  
    - operation types ( Query for GET method & database getting - Mutation for other methods & database editing - subscription for websocket connections  )
  * can be tested using postman or using a feature in it enable graphical GUI like docs for your api 


  # Deployment Notes 
    $ detect your node version in package.json using "engine" keyword
    $ packages ( for hosting provides without service management )
      * helmet package to add security headers to your response 
      * compression to reduce size of assets ( css , js , imgs )  in response 
      * morgan to make logging for server requests
      * search for manually apply SSL certificate on your app
  
  # suggested hosting providers :
    * heroku
    * digitalocean
    * aws
    * vercel
        `})})}function dp(){return C.jsx("pre",{children:`

#  important info
  * life cycle 
    - composer autoload
    - bootstrap/app.php
    - service container
    - http kernels & console kernels 
  * install php extension in ubuntu  => sudo apt-get install php8.2-dom
  * recommended => 'starter kit' 
  * update env.example continuously
  * many services have config file => php artisan config:publish --all
  * composer ( package manager ) , tinker ( php code in terminal ) , artisan ( command handler ) 
  * seeding & factories ( Faker ) 
  * request files to validate request data 
  * queues => background jobs & tasks ( async )
  * to reach php.info location 
    - for  apache  => execute phpinfo() in your laravel code or tinker
    - for terminal CMD => execute php -ini in your terminal  

# php :
  * super global variables => $_ENV $_GET $_SERVER 

#  some error handling  :
  * composer dump-autoload  // errors can't find or resolve file
  * composer clear-cache // some errors
  * php artisan optimize:clear
  * restart vite  // vite directive the latest before </head> end

# commands :
  * php artisan *** OR *** php artisan list => get all artisan commands
  * php artisan --version => get laravel version
  * php artisan about => get info about opened project
  * php artisan down // maintenance ** down to enable  mode && up to disable mode 
  * php artisan env:encrypt --key=3UVsEgGVK36XN82KKeyLFMhvosbZN1aF => encrypt env file to share it via VSC  
    $ php artisan env:decrypt --key=3UVsEgGVK36XN82KKeyLFMhvosbZN1aF
  
# packages : (  packagist.org  )
  * laravel/installer => laravel CLI
  * debugbar
  * telescope
  * trans
  * socialite
  * spatia ( media - multi tenant  )
  * breeze & jetstream
  * passport & sanctum
  * Carbon ( data & time ) [ diffForHumans ] 
  * intervention image photo filters & image edit 
  * cashier stripe.com for visa cards 
  * paypal checkout srmklive
  * pusher notifications 
  * leaflet.js maps  
  * ffmpeg video & image 
  * amazon aws s3 
  * chart.js charts  
  * datatables.js features for tables   
  * filament ( for admin panels )

  
# code tips & tricks :
  * (object) $myArr  => to solve $myArr->id  errors
  * logging [ie. storage/lararvel.log ] => 
      info('data should be passed to the log file') 
      *** OR ***  logger('message')
  * always use try{}catch(){} && DB::beginTransaction() DB::commit() DB::rollback()  with db insert & update queries
  * action([UserController::class, 'profile'], ['id' => 1]);  / get the uri of the function
  * (new UserController)->store();  // call a function in a controller
  * $validator = Validator::make($request->all(), $rules);
    - if ($validator->fails()) { return redirect('post/create')->withErrors($validator)->withInput();}
    - you can add new error messages with key value &&& can put them under bag 'key' &&& can customize messages 
    - or you can customize the response of this specific type error 
  * performace : 
    - eager loading & lazy loading 
    - use query cache ( redis ) 
    - use pagination & filter & search features in your tables
    - indexing & unique 
    - telescope & debugbar 

# validation  : 
  * sending specific errors to frontend (custom error messages)
  * you must specify specific min & max for each field 
  * Validator::make( $request->all(), $rules , $customMessages ) && $validator->fails(); &&  $validator->validated();
  * top rules : 
    - custom rule function  
    - 'regex:/^[A-Za-z]+$/'
    - 'regex:/^[{Arabic}]+$/u'
    - 'not_regex:/^.+$/i' 
  * other rules ( search for laravel validation rules ) : 
    - nullable , missing, present , sometimes { means apply other rules if presented & can be missed }
    - 'required' , 'required_if:inputName,value'
    - exclude_if:has_appointment,false // means don't make validation for it 
    - accepted , declined , 'string' , 'email' 
    - 'boolean' , 'json' , 'array' , 'numeric'
    - 'file' , 'image' , 'size:2048', 'extensions:jpg,png', 'mimes:jpg,png'
    - 'in:enum1,enum2', 'not_in:foo,bar' 
    - 'exists:table,column' ,  'unique:table,column'  ((( makes a query from the database )))
    - 'max:num' , 'min:num' , 'in:val1,val2'  
    - 'end_date' => 'required|date|date_format:Y-m-d',
    - 'url' => 'url:http,https',
    - 'array.key1' => required|string;
    - 'images' => required|array;
    - 'images' => required|array:key1,key2; means must has only those keys 
    - 'images.*' => 'required|image|max:2048|mimes:gif,jpg,jpeg,svg,webp|dimensions:ratio=1/1';
    - 'person.*.email' => 'email|unique:users',
    - size:12  , max , min  // with integer means digits & with array means length & with files means file size
    - Rule::exists('staff')->where(function (Builder $query) {return $query->where('account_id', 1);}),
    - Rule::unique('users' , 'email_address')->ignore($this->id , 'columnName')->where(function (Builder $query) {return $query->where('account_id', 1);}),  
      $ $this->id refers to request()->id  may be $this->anyAttribute
      $ ignore must be used to ignore current value on update
    - confirm password : 
      $ 'password'=>'confirmed'  && input name : password_confirmation 
    - Password::min(8)
        ->letters()
        ->numbers()
        ->symbols()
        ->mixedCase()
        ->uncompromised()

# localization : 
  * php artisan lang:publish { errors & etc }
  * packages => laravel lang && laravel translatable

# forms : 
  * images & files :
    - empty file input scenario OR replace old one scenario
    - override deleting to delete the files with the record deletion if exists
    - make file system driver config => public
    - search for best code to rename image file  

# security :
  * gates & policies & abort_if() abort()
  * APP_KEY in .env is responsible for encrypt & decrypt
  * guards => Auth::guard('admin')->check()z  middleware('auth:admin')
  * guards means separate session storage & providers means different database storage  


      `})}function fp(){const l=["Common","Express","Laravel"],[u,s]=_.useState("Common");return C.jsxs(C.Fragment,{children:[C.jsx(mn,{list:l,selectedItem:u,setSelectedItem:s}),u==="Common"&&C.jsx(sp,{}),u==="Django"&&C.jsx(up,{}),u==="Express"&&C.jsx(cp,{}),u==="Laravel"&&C.jsx(dp,{})]})}function pp(){return C.jsx("pre",{children:`
# Basics Info
  * you can download SQL server on you machine OR get it as software service like XXAMP , LARAGON
  * we make a connect between app & server ALSO we call server before every query
  * ORM Object Relational Mapping

# difference between SQL & NoSQL
  * the difference is structure & schema & content validation PLUS relations
  * if you not follow structure in SQL you get error unlike NoSQL that is is schema-less
  * NoSQL has no or low relations unlike SQL
  * NoSQL duplicate data
  * NoSQL more size but best performance
  * SQL uses many table |||| but NoSQL merges data in a few collections
  * SQL => records in tables  ||||||| noSQL => documents in collections 
  * SQL server has limits in read & write per second but NoSQL has massive performance

# database scaling
  * vertical : more powerful one server  ( SQL & NoSQL )
  * horizontal : many low powerful servers ( NoSQL Only )

# firebase :
  * firebase contains ( realtime notification FCM - sms messages - storage ) 
  
# relations :  
  * one-one 
  * one-many 
  * many-many 
  * morph-one
  * morph-many

      `})}function mp(){return C.jsx("pre",{})}function hp(){return C.jsx("pre",{children:`
      
# basics
  * ORM & 3rd libraries : sequelize library with mysql2 library ( SQL )
  * ODM (Object Document Mapper) : Mongoose ( NSQL )
  * Sequelize & Mongooose has their own doc.
  * we use mongoose middleware to make actions on database events like save and update and get  
  * when using mongoose 
    - the schema in the model file is for ODM 
    - not for the database because its schemaless

# nosql & mongo DB
  * we can use local ( compass )  || OR || hosted ( atlas ) [ preferred ] 
  * making relations makes preference slow so reduce it in nosql
  * we using free mongodb atlas to manage DB
  * we use mongodb compass to get GUI of you DB 

# Create & Edit Schema 
  

# Table Relations   
  * use populate to handle relations 

# CRUD Data 

# validation :
  * we validate that id is mongoId type 
    `})}function gp(){return C.jsx("pre",{children:`
# important info 
  * we can use mongo DB with laravel & eloquent by using 3rd parties

# code notes :
  * $book->isDirty('isbn') 
    - $category = new Category();  $category->name = $request->name  ;  $category->save() ;
  * use User::query()->count(); NOT DB::table('users')->count(); NOT User::count(); 

      `})}function yp(){const l=["Common","Express","Laravel"],[u,s]=_.useState("Common");return C.jsxs(C.Fragment,{children:[C.jsx(mn,{list:l,selectedItem:u,setSelectedItem:s}),u==="Common"&&C.jsx(pp,{}),u==="Django"&&C.jsx(mp,{}),u==="Express"&&C.jsx(hp,{}),u==="Laravel"&&C.jsx(gp,{})]})}function vp(){return C.jsx("pre",{children:`
# important info
  * test on a real device before start publishing
  * you must see the official doc of the used technology & of the store 
`})}function wp(){return C.jsx("pre",{children:`
# free host for static websites ( no DB - no server logic )  => ( github pages - w3school - firebase google )

# hosting config :
  * reserve the domain as soon as possible & try to use a unique strange name
  * ssl to encrypt server-client communication 
  * connect server to github   
  * prepare DB config 

# general deploying tips :
  * delete all extra unneeded files ( imgs - assets ) 
  * delete all extra data ( test database data ) 
  * ignore unneeded local files 
  * build frontend projects with server code script
  * describe you project in README file  ( multi lang ) with ( after install steps )
  * compress ( packages [ node , php ] - build folder )  "large-file-count" 
    - send it using github

# after pull from github  :
  * making .env file with your custom config 
    - time zone 
    - APP_URL http(s) 
    - DB config 
    - mail server  
    - APP_ENV=production  
    - APP_DEBUG=false  
    - 3rd api party configuration ( ex. stripe  )
  * composer install - 
  * php artisan key:generate
  * npm install - 
  * npm run build -  
  * cron jobs ( queue work )
  * php artisan migrate --seed
  * php artisan storage:link 
  * prepare maintenance mode option 
  * caching => php artisan optimize 
  * htaccess file 

# cronjob
  * hostinger
    - /usr/bin/php /home/u12332445678/domains/yourDomain.com/public_html/artisan queue:work --timeout=60 --stop-when-empty
    - /usr/bin/php /home/u12332445678/domains/yourDomain.com/public_html/artisan schedule:work

# scala : 
  * /usr/bin/php82 /usr/bin/composer install 


# htaccess
    - redirecting
$ to file 
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php [L,QSA]
</IfModule>

$ to folder 
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld$ [NC,OR]
RewriteCond %{HTTP_HOST} ^www.domain.tld$
RewriteCond %{REQUEST_URI} !subdirectory/
RewriteRule (.*) /subdirectory/$1 [L]
</IfModule>
****
OR briefly
****
<IfModule mod_rewrite.c>
  RewriteEngine on
  RewriteCond %{REQUEST_URI} !public/
  RewriteRule (.*) /public/$1 [L]
</IfModule>

  - redirecting ngnix : \\ =>     <FilesMatch \\.php$>
      SetHandler proxy:fcgi://skybusiness-php83
    </FilesMatch> 
      
- redirecting SPA :

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} -s [OR]
  RewriteCond %{REQUEST_FILENAME} -l [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^.*$ - [NC,L]
  RewriteRule ^(.*) /index.html [NC,L]
</IfModule>

      `})}function kp(){const l=["Web","Mobile"],[u,s]=_.useState("Web");return C.jsxs(C.Fragment,{children:[C.jsx(mn,{list:l,selectedItem:u,setSelectedItem:s}),u==="Web"&&C.jsx(wp,{}),u==="Mobile"&&C.jsx(vp,{})]})}function xp(){return C.jsx("pre",{children:`

# basics info
  * the success keys in marketing are 
    - unique customer benefit or solving a problems
    - reaching right audience not every one && specified not general
    - building trust with your customer 
  * competitors are main key in optimizing marketing 
  * You must know what pros & cons that clients are searching for in your service
  * social media are a very powerful tool  
  * analytical tools 
  * lead magnet => (attention -> interest -> desire -> action )
    - out of the box  hooks -> attracting effective story  -> call to action ( offer )
    - client feedback is very important 
  * permanent email subscribers
    
  * ask ai chat to suggest the website  domain 
  
# analytical tools (very important) :
  * google analytics
  * google search console
  * similarweb.com
  * ads.google.com  & trends.google.com  (for keywords) 


      `})}let Sp=()=>C.jsx("pre",{children:`     
# General : 
  * be aware when use addons - beware of hackers
  * All their idea => make website using GUI with zero code

# Wordpress ( .org NOT .com )  : 
  * xxamp ( loaclhost/folder ) ( loaclhost/folder/wp-login ) 
  * themes  (Sydney theme) & customize & widgets 
  * pages & posts & categories 
  * plugins  ( all backend tasks  ) ( woocommerce plugin — betheme shop theme ) 
    - ( for any feature you want [ front or back or any ] search in it Ex. =>  payment - orders - form - ... )
  * settings
  * duplicator to duplicate the site on the host 
    
# Magento :
  * (domain/admin) 
  * Download open source from community tab
  * Blocks & Widget & Extensions & Themes ( shoppro theme )  

# Joomla ( .org NOT .com )  :
  * ( domian/administrator ) 
  * ( articles - menus - components - Extensions [ plugins & modules & templates & langs ] ) 
    * 
# Drupal ( .org NOT .com ) :
  * ( domain/admin )
  * download - paste in xxamp and rename - make new database - ( localhost/folder )
  * different name ( pages => views  & categories => taxonomies … )

# shopify : 
  stopped in minute 30 at first video
  https://www.youtube.com/watch?v=ICFXS5WIS3Y
  https://www.youtube.com/watch?v=GeOearToWEo
  
      `}),Ep=()=>C.jsx("pre",{children:`
* use server side rendering 
  - inertia => semi server side rendering 
* use all possible meta tags 
* results depends on : 
  - history & cookies SO use incognito
  - location in browser setting & language  
* follow best practices
* make website responsive 
* use SEO measurement tools
* using marketing strategies is 500% important than using SEO 
* redirecting is not good for SEO
* the website should be fast in speed test ( < 3 seconds ) 
  - gtmetrix.com to test speed 

* not depends only on the code but also on the next tips
  - brand name repetition & uniqueness
  - clear chosen domain 
  - frequent searching from users in Search Engines
  - How long  was it deployed  from ? ( months - years - ... )

* on page SEO :
  - keywords : ads.google.com ( by keyword , by website )  , mozBar chrome extension 
  - we should use unique meta tags & title for each path
  - h1 to h6 is used to index the structure of the page
  - repeat most used keywords in the content
  - content punctuation & grammar is important
  - formatting content to be eye friendly &  responsive
  - follow best practices like => image alt text , close tags 
  - keyword & domain & title => short without repeat 
  - Yoast SEO for wordpress to give feedback for each page
  - use internal & external links in your articles 
  - optimize images & compress its size (imagecompressor.com) 

* marketing tools : 
  - email : mailchimp
`});function Cp(){const l=["Common","CMS","SEO"],[u,s]=_.useState("Common");return C.jsxs(C.Fragment,{children:[C.jsx(mn,{list:l,selectedItem:u,setSelectedItem:s}),u==="Common"&&C.jsx(xp,{}),u==="CMS"&&C.jsx(Sp,{}),u==="SEO"&&C.jsx(Ep,{})]})}function _p(){const l=["Basics","Frontend","Backend","Database","Deployment","Marketing"],[u,s]=_.useState("Basics");return C.jsx(C.Fragment,{children:C.jsx("div",{className:"min-h-screen min-w-screen box-border p-2 md:p-5 flex flex-col",children:C.jsxs("div",{className:"border-8 border-black h-full w-full relative grow p-2 md:p-5 flex flex-col gap-5",children:[C.jsx(mn,{list:l,selectedItem:u,setSelectedItem:s}),u==="Basics"&&C.jsx(Yf,{}),u==="Frontend"&&C.jsx(ap,{}),u==="Backend"&&C.jsx(fp,{}),u==="Database"&&C.jsx(yp,{}),u==="Deployment"&&C.jsx(kp,{}),u==="Marketing"&&C.jsx(Cp,{})]})})})}var Nr={},fc;function Rp(){if(fc)return Nr;fc=1,Object.defineProperty(Nr,"__esModule",{value:!0}),Nr.parse=S,Nr.serialize=x;const l=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,u=/^[\u0021-\u003A\u003C-\u007E]*$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,m=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,g=(()=>{const N=function(){};return N.prototype=Object.create(null),N})();function S(N,D){const O=new g,A=N.length;if(A<2)return O;const I=(D==null?void 0:D.decode)||T;let $=0;do{const K=N.indexOf("=",$);if(K===-1)break;const W=N.indexOf(";",$),te=W===-1?A:W;if(K>te){$=N.lastIndexOf(";",K-1)+1;continue}const se=E(N,$,K),we=k(N,K,se),he=N.slice(se,we);if(O[he]===void 0){let _e=E(N,K+1,te),ke=k(N,te,_e);const Ne=I(N.slice(_e,ke));O[he]=Ne}$=te+1}while($<A);return O}function E(N,D,O){do{const A=N.charCodeAt(D);if(A!==32&&A!==9)return D}while(++D<O);return O}function k(N,D,O){for(;D>O;){const A=N.charCodeAt(--D);if(A!==32&&A!==9)return D+1}return O}function x(N,D,O){const A=(O==null?void 0:O.encode)||encodeURIComponent;if(!l.test(N))throw new TypeError(`argument name is invalid: ${N}`);const I=A(D);if(!u.test(I))throw new TypeError(`argument val is invalid: ${D}`);let $=N+"="+I;if(!O)return $;if(O.maxAge!==void 0){if(!Number.isInteger(O.maxAge))throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);$+="; Max-Age="+O.maxAge}if(O.domain){if(!s.test(O.domain))throw new TypeError(`option domain is invalid: ${O.domain}`);$+="; Domain="+O.domain}if(O.path){if(!m.test(O.path))throw new TypeError(`option path is invalid: ${O.path}`);$+="; Path="+O.path}if(O.expires){if(!z(O.expires)||!Number.isFinite(O.expires.valueOf()))throw new TypeError(`option expires is invalid: ${O.expires}`);$+="; Expires="+O.expires.toUTCString()}if(O.httpOnly&&($+="; HttpOnly"),O.secure&&($+="; Secure"),O.partitioned&&($+="; Partitioned"),O.priority)switch(typeof O.priority=="string"?O.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${O.priority}`)}if(O.sameSite)switch(typeof O.sameSite=="string"?O.sameSite.toLowerCase():O.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${O.sameSite}`)}return $}function T(N){if(N.indexOf("%")===-1)return N;try{return decodeURIComponent(N)}catch{return N}}function z(N){return d.call(N)==="[object Date]"}return Nr}Rp();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pc="popstate";function bp(l={}){function u(m,d){let{pathname:g,search:S,hash:E}=m.location;return Zl("",{pathname:g,search:S,hash:E},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(m,d){return typeof d=="string"?d:jr(d)}return Np(u,s,null,l)}function ve(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function St(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Pp(){return Math.random().toString(36).substring(2,10)}function mc(l,u){return{usr:l.state,key:l.key,idx:u}}function Zl(l,u,s=null,m){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?Un(u):u,state:s,key:u&&u.key||m||Pp()}}function jr({pathname:l="/",search:u="",hash:s=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function Un(l){let u={};if(l){let s=l.indexOf("#");s>=0&&(u.hash=l.substring(s),l=l.substring(0,s));let m=l.indexOf("?");m>=0&&(u.search=l.substring(m),l=l.substring(0,m)),l&&(u.pathname=l)}return u}function Np(l,u,s,m={}){let{window:d=document.defaultView,v5Compat:g=!1}=m,S=d.history,E="POP",k=null,x=T();x==null&&(x=0,S.replaceState({...S.state,idx:x},""));function T(){return(S.state||{idx:null}).idx}function z(){E="POP";let I=T(),$=I==null?null:I-x;x=I,k&&k({action:E,location:A.location,delta:$})}function N(I,$){E="PUSH";let K=Zl(A.location,I,$);x=T()+1;let W=mc(K,x),te=A.createHref(K);try{S.pushState(W,"",te)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;d.location.assign(te)}g&&k&&k({action:E,location:A.location,delta:1})}function D(I,$){E="REPLACE";let K=Zl(A.location,I,$);x=T();let W=mc(K,x),te=A.createHref(K);S.replaceState(W,"",te),g&&k&&k({action:E,location:A.location,delta:0})}function O(I){let $=d.location.origin!=="null"?d.location.origin:d.location.href,K=typeof I=="string"?I:jr(I);return K=K.replace(/ $/,"%20"),ve($,`No window.location.(origin|href) available to create URL for href: ${K}`),new URL(K,$)}let A={get action(){return E},get location(){return l(d,S)},listen(I){if(k)throw new Error("A history only accepts one active listener");return d.addEventListener(pc,z),k=I,()=>{d.removeEventListener(pc,z),k=null}},createHref(I){return u(d,I)},createURL:O,encodeLocation(I){let $=O(I);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:N,replace:D,go(I){return S.go(I)}};return A}function vc(l,u,s="/"){return Lp(l,u,s,!1)}function Lp(l,u,s,m){let d=typeof u=="string"?Un(u):u,g=Zt(d.pathname||"/",s);if(g==null)return null;let S=wc(l);jp(S);let E=null;for(let k=0;E==null&&k<S.length;++k){let x=Bp(g);E=Ap(S[k],x,m)}return E}function wc(l,u=[],s=[],m=""){let d=(g,S,E)=>{let k={relativePath:E===void 0?g.path||"":E,caseSensitive:g.caseSensitive===!0,childrenIndex:S,route:g};k.relativePath.startsWith("/")&&(ve(k.relativePath.startsWith(m),`Absolute route path "${k.relativePath}" nested under path "${m}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(m.length));let x=Tt([m,k.relativePath]),T=s.concat(k);g.children&&g.children.length>0&&(ve(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),wc(g.children,u,T,x)),!(g.path==null&&!g.index)&&u.push({path:x,score:Mp(x,g.index),routesMeta:T})};return l.forEach((g,S)=>{var E;if(g.path===""||!((E=g.path)!=null&&E.includes("?")))d(g,S);else for(let k of kc(g.path))d(g,S,k)}),u}function kc(l){let u=l.split("/");if(u.length===0)return[];let[s,...m]=u,d=s.endsWith("?"),g=s.replace(/\?$/,"");if(m.length===0)return d?[g,""]:[g];let S=kc(m.join("/")),E=[];return E.push(...S.map(k=>k===""?g:[g,k].join("/"))),d&&E.push(...S),E.map(k=>l.startsWith("/")&&k===""?"/":k)}function jp(l){l.sort((u,s)=>u.score!==s.score?s.score-u.score:Fp(u.routesMeta.map(m=>m.childrenIndex),s.routesMeta.map(m=>m.childrenIndex)))}var Tp=/^:[\w-]+$/,Op=3,Ip=2,zp=1,Dp=10,$p=-2,hc=l=>l==="*";function Mp(l,u){let s=l.split("/"),m=s.length;return s.some(hc)&&(m+=$p),u&&(m+=Ip),s.filter(d=>!hc(d)).reduce((d,g)=>d+(Tp.test(g)?Op:g===""?zp:Dp),m)}function Fp(l,u){return l.length===u.length&&l.slice(0,-1).every((m,d)=>m===u[d])?l[l.length-1]-u[u.length-1]:0}function Ap(l,u,s=!1){let{routesMeta:m}=l,d={},g="/",S=[];for(let E=0;E<m.length;++E){let k=m[E],x=E===m.length-1,T=g==="/"?u:u.slice(g.length)||"/",z=Yo({path:k.relativePath,caseSensitive:k.caseSensitive,end:x},T),N=k.route;if(!z&&x&&s&&!m[m.length-1].route.index&&(z=Yo({path:k.relativePath,caseSensitive:k.caseSensitive,end:!1},T)),!z)return null;Object.assign(d,z.params),S.push({params:d,pathname:Tt([g,z.pathname]),pathnameBase:Qp(Tt([g,z.pathnameBase])),route:N}),z.pathnameBase!=="/"&&(g=Tt([g,z.pathnameBase]))}return S}function Yo(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,m]=Up(l.path,l.caseSensitive,l.end),d=u.match(s);if(!d)return null;let g=d[0],S=g.replace(/(.)\/+$/,"$1"),E=d.slice(1);return{params:m.reduce((x,{paramName:T,isOptional:z},N)=>{if(T==="*"){let O=E[N]||"";S=g.slice(0,g.length-O.length).replace(/(.)\/+$/,"$1")}const D=E[N];return z&&!D?x[T]=void 0:x[T]=(D||"").replace(/%2F/g,"/"),x},{}),pathname:g,pathnameBase:S,pattern:l}}function Up(l,u=!1,s=!0){St(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let m=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,E,k)=>(m.push({paramName:E,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(m.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),m]}function Bp(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return St(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function Zt(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,m=l.charAt(s);return m&&m!=="/"?null:l.slice(s)||"/"}function Vp(l,u="/"){let{pathname:s,search:m="",hash:d=""}=typeof l=="string"?Un(l):l;return{pathname:s?s.startsWith("/")?s:Hp(s,u):u,search:qp(m),hash:Gp(d)}}function Hp(l,u){let s=u.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Xl(l,u,s,m){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(m)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wp(l){return l.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function xc(l){let u=Wp(l);return u.map((s,m)=>m===u.length-1?s.pathname:s.pathnameBase)}function Sc(l,u,s,m=!1){let d;typeof l=="string"?d=Un(l):(d={...l},ve(!d.pathname||!d.pathname.includes("?"),Xl("?","pathname","search",d)),ve(!d.pathname||!d.pathname.includes("#"),Xl("#","pathname","hash",d)),ve(!d.search||!d.search.includes("#"),Xl("#","search","hash",d)));let g=l===""||d.pathname==="",S=g?"/":d.pathname,E;if(S==null)E=s;else{let z=u.length-1;if(!m&&S.startsWith("..")){let N=S.split("/");for(;N[0]==="..";)N.shift(),z-=1;d.pathname=N.join("/")}E=z>=0?u[z]:"/"}let k=Vp(d,E),x=S&&S!=="/"&&S.endsWith("/"),T=(g||S===".")&&s.endsWith("/");return!k.pathname.endsWith("/")&&(x||T)&&(k.pathname+="/"),k}var Tt=l=>l.join("/").replace(/\/\/+/g,"/"),Qp=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),qp=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Gp=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Kp(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var Ec=["POST","PUT","PATCH","DELETE"];new Set(Ec);var Yp=["GET",...Ec];new Set(Yp);var Bn=_.createContext(null);Bn.displayName="DataRouter";var Xo=_.createContext(null);Xo.displayName="DataRouterState";var Cc=_.createContext({isTransitioning:!1});Cc.displayName="ViewTransition";var Xp=_.createContext(new Map);Xp.displayName="Fetchers";var Jp=_.createContext(null);Jp.displayName="Await";var Et=_.createContext(null);Et.displayName="Navigation";var Tr=_.createContext(null);Tr.displayName="Location";var Ot=_.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var ra=_.createContext(null);ra.displayName="RouteError";function Zp(l,{relative:u}={}){ve(Or(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:m}=_.useContext(Et),{hash:d,pathname:g,search:S}=Ir(l,{relative:u}),E=g;return s!=="/"&&(E=g==="/"?s:Tt([s,g])),m.createHref({pathname:E,search:S,hash:d})}function Or(){return _.useContext(Tr)!=null}function hn(){return ve(Or(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Tr).location}var _c="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rc(l){_.useContext(Et).static||_.useLayoutEffect(l)}function em(){let{isDataRoute:l}=_.useContext(Ot);return l?pm():tm()}function tm(){ve(Or(),"useNavigate() may be used only in the context of a <Router> component.");let l=_.useContext(Bn),{basename:u,navigator:s}=_.useContext(Et),{matches:m}=_.useContext(Ot),{pathname:d}=hn(),g=JSON.stringify(xc(m)),S=_.useRef(!1);return Rc(()=>{S.current=!0}),_.useCallback((k,x={})=>{if(St(S.current,_c),!S.current)return;if(typeof k=="number"){s.go(k);return}let T=Sc(k,JSON.parse(g),d,x.relative==="path");l==null&&u!=="/"&&(T.pathname=T.pathname==="/"?u:Tt([u,T.pathname])),(x.replace?s.replace:s.push)(T,x.state,x)},[u,s,g,d,l])}_.createContext(null);function Ir(l,{relative:u}={}){let{matches:s}=_.useContext(Ot),{pathname:m}=hn(),d=JSON.stringify(xc(s));return _.useMemo(()=>Sc(l,JSON.parse(d),m,u==="path"),[l,d,m,u])}function nm(l,u){return bc(l,u)}function bc(l,u,s,m){var K;ve(Or(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d,static:g}=_.useContext(Et),{matches:S}=_.useContext(Ot),E=S[S.length-1],k=E?E.params:{},x=E?E.pathname:"/",T=E?E.pathnameBase:"/",z=E&&E.route;{let W=z&&z.path||"";Pc(x,!z||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let N=hn(),D;if(u){let W=typeof u=="string"?Un(u):u;ve(T==="/"||((K=W.pathname)==null?void 0:K.startsWith(T)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${W.pathname}" was given in the \`location\` prop.`),D=W}else D=N;let O=D.pathname||"/",A=O;if(T!=="/"){let W=T.replace(/^\//,"").split("/");A="/"+O.replace(/^\//,"").split("/").slice(W.length).join("/")}let I=!g&&s&&s.matches&&s.matches.length>0?s.matches:vc(l,{pathname:A});St(z||I!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),St(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=am(I&&I.map(W=>Object.assign({},W,{params:Object.assign({},k,W.params),pathname:Tt([T,d.encodeLocation?d.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?T:Tt([T,d.encodeLocation?d.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),S,s,m);return u&&$?_.createElement(Tr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},$):$}function rm(){let l=fm(),u=Kp(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,m="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:m},g={padding:"2px 4px",backgroundColor:m},S=null;return console.error("Error handled by React Router default ErrorBoundary:",l),S=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:g},"ErrorBoundary")," or"," ",_.createElement("code",{style:g},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},u),s?_.createElement("pre",{style:d},s):null,S)}var om=_.createElement(rm,null),im=class extends _.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){console.error("React Router caught the following error during render",l,u)}render(){return this.state.error!==void 0?_.createElement(Ot.Provider,{value:this.props.routeContext},_.createElement(ra.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function lm({routeContext:l,match:u,children:s}){let m=_.useContext(Bn);return m&&m.static&&m.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=u.route.id),_.createElement(Ot.Provider,{value:l},s)}function am(l,u=[],s=null,m=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(u.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let d=l,g=s==null?void 0:s.errors;if(g!=null){let k=d.findIndex(x=>x.route.id&&(g==null?void 0:g[x.route.id])!==void 0);ve(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,k+1))}let S=!1,E=-1;if(s)for(let k=0;k<d.length;k++){let x=d[k];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(E=k),x.route.id){let{loaderData:T,errors:z}=s,N=x.route.loader&&!T.hasOwnProperty(x.route.id)&&(!z||z[x.route.id]===void 0);if(x.route.lazy||N){S=!0,E>=0?d=d.slice(0,E+1):d=[d[0]];break}}}return d.reduceRight((k,x,T)=>{let z,N=!1,D=null,O=null;s&&(z=g&&x.route.id?g[x.route.id]:void 0,D=x.route.errorElement||om,S&&(E<0&&T===0?(Pc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,O=null):E===T&&(N=!0,O=x.route.hydrateFallbackElement||null)));let A=u.concat(d.slice(0,T+1)),I=()=>{let $;return z?$=D:N?$=O:x.route.Component?$=_.createElement(x.route.Component,null):x.route.element?$=x.route.element:$=k,_.createElement(lm,{match:x,routeContext:{outlet:k,matches:A,isDataRoute:s!=null},children:$})};return s&&(x.route.ErrorBoundary||x.route.errorElement||T===0)?_.createElement(im,{location:s.location,revalidation:s.revalidation,component:D,error:z,children:I(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):I()},null)}function oa(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sm(l){let u=_.useContext(Bn);return ve(u,oa(l)),u}function um(l){let u=_.useContext(Xo);return ve(u,oa(l)),u}function cm(l){let u=_.useContext(Ot);return ve(u,oa(l)),u}function ia(l){let u=cm(l),s=u.matches[u.matches.length-1];return ve(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function dm(){return ia("useRouteId")}function fm(){var m;let l=_.useContext(ra),u=um("useRouteError"),s=ia("useRouteError");return l!==void 0?l:(m=u.errors)==null?void 0:m[s]}function pm(){let{router:l}=sm("useNavigate"),u=ia("useNavigate"),s=_.useRef(!1);return Rc(()=>{s.current=!0}),_.useCallback(async(d,g={})=>{St(s.current,_c),s.current&&(typeof d=="number"?l.navigate(d):await l.navigate(d,{fromRouteId:u,...g}))},[l,u])}var gc={};function Pc(l,u,s){!u&&!gc[l]&&(gc[l]=!0,St(!1,s))}_.memo(mm);function mm({routes:l,future:u,state:s}){return bc(l,void 0,s,u)}function ea(l){ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hm({basename:l="/",children:u=null,location:s,navigationType:m="POP",navigator:d,static:g=!1}){ve(!Or(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=l.replace(/^\/*/,"/"),E=_.useMemo(()=>({basename:S,navigator:d,static:g,future:{}}),[S,d,g]);typeof s=="string"&&(s=Un(s));let{pathname:k="/",search:x="",hash:T="",state:z=null,key:N="default"}=s,D=_.useMemo(()=>{let O=Zt(k,S);return O==null?null:{location:{pathname:O,search:x,hash:T,state:z,key:N},navigationType:m}},[S,k,x,T,z,N,m]);return St(D!=null,`<Router basename="${S}"> is not able to match the URL "${k}${x}${T}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:_.createElement(Et.Provider,{value:E},_.createElement(Tr.Provider,{children:u,value:D}))}function gm({children:l,location:u}){return nm(ta(l),u)}function ta(l,u=[]){let s=[];return _.Children.forEach(l,(m,d)=>{if(!_.isValidElement(m))return;let g=[...u,d];if(m.type===_.Fragment){s.push.apply(s,ta(m.props.children,g));return}ve(m.type===ea,`[${typeof m.type=="string"?m.type:m.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ve(!m.props.index||!m.props.children,"An index route cannot have child routes.");let S={id:m.props.id||g.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,hydrateFallbackElement:m.props.hydrateFallbackElement,HydrateFallback:m.props.HydrateFallback,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.hasErrorBoundary===!0||m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(S.children=ta(m.props.children,g)),s.push(S)}),s}var Go="get",Ko="application/x-www-form-urlencoded";function Jo(l){return l!=null&&typeof l.tagName=="string"}function ym(l){return Jo(l)&&l.tagName.toLowerCase()==="button"}function vm(l){return Jo(l)&&l.tagName.toLowerCase()==="form"}function wm(l){return Jo(l)&&l.tagName.toLowerCase()==="input"}function km(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function xm(l,u){return l.button===0&&(!u||u==="_self")&&!km(l)}var qo=null;function Sm(){if(qo===null)try{new FormData(document.createElement("form"),0),qo=!1}catch{qo=!0}return qo}var Em=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jl(l){return l!=null&&!Em.has(l)?(St(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ko}"`),null):l}function Cm(l,u){let s,m,d,g,S;if(vm(l)){let E=l.getAttribute("action");m=E?Zt(E,u):null,s=l.getAttribute("method")||Go,d=Jl(l.getAttribute("enctype"))||Ko,g=new FormData(l)}else if(ym(l)||wm(l)&&(l.type==="submit"||l.type==="image")){let E=l.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let k=l.getAttribute("formaction")||E.getAttribute("action");if(m=k?Zt(k,u):null,s=l.getAttribute("formmethod")||E.getAttribute("method")||Go,d=Jl(l.getAttribute("formenctype"))||Jl(E.getAttribute("enctype"))||Ko,g=new FormData(E,l),!Sm()){let{name:x,type:T,value:z}=l;if(T==="image"){let N=x?`${x}.`:"";g.append(`${N}x`,"0"),g.append(`${N}y`,"0")}else x&&g.append(x,z)}}else{if(Jo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Go,m=null,d=Ko,S=l}return g&&d==="text/plain"&&(S=g,g=void 0),{action:m,method:s.toLowerCase(),encType:d,formData:g,body:S}}function la(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}async function _m(l,u){if(l.id in u)return u[l.id];try{let s=await import(l.module);return u[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Rm(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function bm(l,u,s){let m=await Promise.all(l.map(async d=>{let g=u.routes[d.route.id];if(g){let S=await _m(g,s);return S.links?S.links():[]}return[]}));return jm(m.flat(1).filter(Rm).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function yc(l,u,s,m,d,g){let S=(k,x)=>s[x]?k.route.id!==s[x].route.id:!0,E=(k,x)=>{var T;return s[x].pathname!==k.pathname||((T=s[x].route.path)==null?void 0:T.endsWith("*"))&&s[x].params["*"]!==k.params["*"]};return g==="assets"?u.filter((k,x)=>S(k,x)||E(k,x)):g==="data"?u.filter((k,x)=>{var z;let T=m.routes[k.route.id];if(!T||!T.hasLoader)return!1;if(S(k,x)||E(k,x))return!0;if(k.route.shouldRevalidate){let N=k.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((z=s[0])==null?void 0:z.params)||{},nextUrl:new URL(l,window.origin),nextParams:k.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function Pm(l,u){return Nm(l.map(s=>{let m=u.routes[s.route.id];if(!m)return[];let d=[m.module];return m.imports&&(d=d.concat(m.imports)),d}).flat(1))}function Nm(l){return[...new Set(l)]}function Lm(l){let u={},s=Object.keys(l).sort();for(let m of s)u[m]=l[m];return u}function jm(l,u){let s=new Set;return new Set(u),l.reduce((m,d)=>{let g=JSON.stringify(Lm(d));return s.has(g)||(s.add(g),m.push({key:g,link:d})),m},[])}function Tm(l){let u=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u.pathname==="/"?u.pathname="_root.data":u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function Om(){let l=_.useContext(Bn);return la(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Im(){let l=_.useContext(Xo);return la(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var aa=_.createContext(void 0);aa.displayName="FrameworkContext";function Nc(){let l=_.useContext(aa);return la(l,"You must render this element inside a <HydratedRouter> element"),l}function zm(l,u){let s=_.useContext(aa),[m,d]=_.useState(!1),[g,S]=_.useState(!1),{onFocus:E,onBlur:k,onMouseEnter:x,onMouseLeave:T,onTouchStart:z}=u,N=_.useRef(null);_.useEffect(()=>{if(l==="render"&&S(!0),l==="viewport"){let A=$=>{$.forEach(K=>{S(K.isIntersecting)})},I=new IntersectionObserver(A,{threshold:.5});return N.current&&I.observe(N.current),()=>{I.disconnect()}}},[l]),_.useEffect(()=>{if(m){let A=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(A)}}},[m]);let D=()=>{d(!0)},O=()=>{d(!1),S(!1)};return s?l!=="intent"?[g,N,{}]:[g,N,{onFocus:Lr(E,D),onBlur:Lr(k,O),onMouseEnter:Lr(x,D),onMouseLeave:Lr(T,O),onTouchStart:Lr(z,D)}]:[!1,N,{}]}function Lr(l,u){return s=>{l&&l(s),s.defaultPrevented||u(s)}}function Dm({page:l,...u}){let{router:s}=Om(),m=_.useMemo(()=>vc(s.routes,l,s.basename),[s.routes,l,s.basename]);return m?_.createElement(Mm,{page:l,matches:m,...u}):null}function $m(l){let{manifest:u,routeModules:s}=Nc(),[m,d]=_.useState([]);return _.useEffect(()=>{let g=!1;return bm(l,u,s).then(S=>{g||d(S)}),()=>{g=!0}},[l,u,s]),m}function Mm({page:l,matches:u,...s}){let m=hn(),{manifest:d,routeModules:g}=Nc(),{loaderData:S,matches:E}=Im(),k=_.useMemo(()=>yc(l,u,E,d,m,"data"),[l,u,E,d,m]),x=_.useMemo(()=>yc(l,u,E,d,m,"assets"),[l,u,E,d,m]),T=_.useMemo(()=>{if(l===m.pathname+m.search+m.hash)return[];let D=new Set,O=!1;if(u.forEach(I=>{var K;let $=d.routes[I.route.id];!$||!$.hasLoader||(!k.some(W=>W.route.id===I.route.id)&&I.route.id in S&&((K=g[I.route.id])!=null&&K.shouldRevalidate)||$.hasClientLoader?O=!0:D.add(I.route.id))}),D.size===0)return[];let A=Tm(l);return O&&D.size>0&&A.searchParams.set("_routes",u.filter(I=>D.has(I.route.id)).map(I=>I.route.id).join(",")),[A.pathname+A.search]},[S,m,d,k,u,l,g]),z=_.useMemo(()=>Pm(x,d),[x,d]),N=$m(x);return _.createElement(_.Fragment,null,T.map(D=>_.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...s})),z.map(D=>_.createElement("link",{key:D,rel:"modulepreload",href:D,...s})),N.map(({key:D,link:O})=>_.createElement("link",{key:D,...O})))}function Fm(...l){return u=>{l.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var Lc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lc&&(window.__reactRouterVersion="7.1.5")}catch{}function Am({basename:l,children:u,window:s}){let m=_.useRef();m.current==null&&(m.current=bp({window:s,v5Compat:!0}));let d=m.current,[g,S]=_.useState({action:d.action,location:d.location}),E=_.useCallback(k=>{_.startTransition(()=>S(k))},[S]);return _.useLayoutEffect(()=>d.listen(E),[d,E]),_.createElement(hm,{basename:l,children:u,location:g.location,navigationType:g.action,navigator:d})}var jc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sa=_.forwardRef(function({onClick:u,discover:s="render",prefetch:m="none",relative:d,reloadDocument:g,replace:S,state:E,target:k,to:x,preventScrollReset:T,viewTransition:z,...N},D){let{basename:O}=_.useContext(Et),A=typeof x=="string"&&jc.test(x),I,$=!1;if(typeof x=="string"&&A&&(I=x,Lc))try{let ke=new URL(window.location.href),Ne=x.startsWith("//")?new URL(ke.protocol+x):new URL(x),mt=Zt(Ne.pathname,O);Ne.origin===ke.origin&&mt!=null?x=mt+Ne.search+Ne.hash:$=!0}catch{St(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=Zp(x,{relative:d}),[W,te,se]=zm(m,N),we=Hm(x,{replace:S,state:E,target:k,preventScrollReset:T,relative:d,viewTransition:z});function he(ke){u&&u(ke),ke.defaultPrevented||we(ke)}let _e=_.createElement("a",{...N,...se,href:I||K,onClick:$||g?u:he,ref:Fm(D,te),target:k,"data-discover":!A&&s==="render"?"true":void 0});return W&&!A?_.createElement(_.Fragment,null,_e,_.createElement(Dm,{page:K})):_e});sa.displayName="Link";var Um=_.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:m="",end:d=!1,style:g,to:S,viewTransition:E,children:k,...x},T){let z=Ir(S,{relative:x.relative}),N=hn(),D=_.useContext(Xo),{navigator:O,basename:A}=_.useContext(Et),I=D!=null&&Km(z)&&E===!0,$=O.encodeLocation?O.encodeLocation(z).pathname:z.pathname,K=N.pathname,W=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;s||(K=K.toLowerCase(),W=W?W.toLowerCase():null,$=$.toLowerCase()),W&&A&&(W=Zt(W,A)||W);const te=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let se=K===$||!d&&K.startsWith($)&&K.charAt(te)==="/",we=W!=null&&(W===$||!d&&W.startsWith($)&&W.charAt($.length)==="/"),he={isActive:se,isPending:we,isTransitioning:I},_e=se?u:void 0,ke;typeof m=="function"?ke=m(he):ke=[m,se?"active":null,we?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let Ne=typeof g=="function"?g(he):g;return _.createElement(sa,{...x,"aria-current":_e,className:ke,ref:T,style:Ne,to:S,viewTransition:E},typeof k=="function"?k(he):k)});Um.displayName="NavLink";var Bm=_.forwardRef(({discover:l="render",fetcherKey:u,navigate:s,reloadDocument:m,replace:d,state:g,method:S=Go,action:E,onSubmit:k,relative:x,preventScrollReset:T,viewTransition:z,...N},D)=>{let O=qm(),A=Gm(E,{relative:x}),I=S.toLowerCase()==="get"?"get":"post",$=typeof E=="string"&&jc.test(E),K=W=>{if(k&&k(W),W.defaultPrevented)return;W.preventDefault();let te=W.nativeEvent.submitter,se=(te==null?void 0:te.getAttribute("formmethod"))||S;O(te||W.currentTarget,{fetcherKey:u,method:se,navigate:s,replace:d,state:g,relative:x,preventScrollReset:T,viewTransition:z})};return _.createElement("form",{ref:D,method:I,action:A,onSubmit:m?k:K,...N,"data-discover":!$&&l==="render"?"true":void 0})});Bm.displayName="Form";function Vm(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tc(l){let u=_.useContext(Bn);return ve(u,Vm(l)),u}function Hm(l,{target:u,replace:s,state:m,preventScrollReset:d,relative:g,viewTransition:S}={}){let E=em(),k=hn(),x=Ir(l,{relative:g});return _.useCallback(T=>{if(xm(T,u)){T.preventDefault();let z=s!==void 0?s:jr(k)===jr(x);E(l,{replace:z,state:m,preventScrollReset:d,relative:g,viewTransition:S})}},[k,E,x,s,m,u,l,d,g,S])}var Wm=0,Qm=()=>`__${String(++Wm)}__`;function qm(){let{router:l}=Tc("useSubmit"),{basename:u}=_.useContext(Et),s=dm();return _.useCallback(async(m,d={})=>{let{action:g,method:S,encType:E,formData:k,body:x}=Cm(m,u);if(d.navigate===!1){let T=d.fetcherKey||Qm();await l.fetch(T,s,d.action||g,{preventScrollReset:d.preventScrollReset,formData:k,body:x,formMethod:d.method||S,formEncType:d.encType||E,flushSync:d.flushSync})}else await l.navigate(d.action||g,{preventScrollReset:d.preventScrollReset,formData:k,body:x,formMethod:d.method||S,formEncType:d.encType||E,replace:d.replace,state:d.state,fromRouteId:s,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,u,s])}function Gm(l,{relative:u}={}){let{basename:s}=_.useContext(Et),m=_.useContext(Ot);ve(m,"useFormAction must be used inside a RouteContext");let[d]=m.matches.slice(-1),g={...Ir(l||".",{relative:u})},S=hn();if(l==null){g.search=S.search;let E=new URLSearchParams(g.search),k=E.getAll("index");if(k.some(T=>T==="")){E.delete("index"),k.filter(z=>z).forEach(z=>E.append("index",z));let T=E.toString();g.search=T?`?${T}`:""}}return(!l||l===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(g.pathname=g.pathname==="/"?s:Tt([s,g.pathname])),jr(g)}function Km(l,u={}){let s=_.useContext(Cc);ve(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:m}=Tc("useViewTransitionState"),d=Ir(l,{relative:u.relative});if(!s.isTransitioning)return!1;let g=Zt(s.currentLocation.pathname,m)||s.currentLocation.pathname,S=Zt(s.nextLocation.pathname,m)||s.nextLocation.pathname;return Yo(d.pathname,S)!=null||Yo(d.pathname,g)!=null}new TextEncoder;function Ym(){return C.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center",children:[C.jsx("h1",{className:"text-6xl font-bold text-gray-800",children:"404"}),C.jsx("p",{className:"mt-2 text-lg text-gray-600",children:"Page Not Found"}),C.jsx(sa,{to:"/",className:"mt-4 text-blue-500 hover:underline",children:"Go Back Home"})]})}function Xm(){return C.jsx(C.Fragment,{children:C.jsx(Am,{children:C.jsxs(gm,{children:[C.jsx(ea,{path:"/",element:C.jsx(_p,{})}),C.jsx(ea,{path:"*",element:C.jsx(Ym,{})})]})})})}Mf.createRoot(document.getElementById("root")).render(C.jsx(_.StrictMode,{children:C.jsx(Xm,{})}));
