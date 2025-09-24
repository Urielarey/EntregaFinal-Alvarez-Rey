function oT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function aT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Nd={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function lT(){if(Fg)return Se;Fg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function A(P){return P===null||typeof P!="object"?null:(P=I&&P[I]||P["@@iterator"],typeof P=="function"?P:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,q={};function j(P,G,le){this.props=P,this.context=G,this.refs=q,this.updater=le||z}j.prototype.isReactComponent={},j.prototype.setState=function(P,G){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,G,"setState")},j.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function te(){}te.prototype=j.prototype;function ae(P,G,le){this.props=P,this.context=G,this.refs=q,this.updater=le||z}var se=ae.prototype=new te;se.constructor=ae,$(se,j.prototype),se.isPureReactComponent=!0;var Ee=Array.isArray,Ve=Object.prototype.hasOwnProperty,Pe={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function S(P,G,le){var ge,Te={},Le=null,Oe=null;if(G!=null)for(ge in G.ref!==void 0&&(Oe=G.ref),G.key!==void 0&&(Le=""+G.key),G)Ve.call(G,ge)&&!V.hasOwnProperty(ge)&&(Te[ge]=G[ge]);var Me=arguments.length-2;if(Me===1)Te.children=le;else if(1<Me){for(var be=Array(Me),Ot=0;Ot<Me;Ot++)be[Ot]=arguments[Ot+2];Te.children=be}if(P&&P.defaultProps)for(ge in Me=P.defaultProps,Me)Te[ge]===void 0&&(Te[ge]=Me[ge]);return{$$typeof:n,type:P,key:Le,ref:Oe,props:Te,_owner:Pe.current}}function C(P,G){return{$$typeof:n,type:P.type,key:G,ref:P.ref,props:P.props,_owner:P._owner}}function D(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function O(P){var G={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(le){return G[le]})}var x=/\/+/g;function R(P,G){return typeof P=="object"&&P!==null&&P.key!=null?O(""+P.key):G.toString(36)}function nt(P,G,le,ge,Te){var Le=typeof P;(Le==="undefined"||Le==="boolean")&&(P=null);var Oe=!1;if(P===null)Oe=!0;else switch(Le){case"string":case"number":Oe=!0;break;case"object":switch(P.$$typeof){case n:case e:Oe=!0}}if(Oe)return Oe=P,Te=Te(Oe),P=ge===""?"."+R(Oe,0):ge,Ee(Te)?(le="",P!=null&&(le=P.replace(x,"$&/")+"/"),nt(Te,G,le,"",function(Ot){return Ot})):Te!=null&&(D(Te)&&(Te=C(Te,le+(!Te.key||Oe&&Oe.key===Te.key?"":(""+Te.key).replace(x,"$&/")+"/")+P)),G.push(Te)),1;if(Oe=0,ge=ge===""?".":ge+":",Ee(P))for(var Me=0;Me<P.length;Me++){Le=P[Me];var be=ge+R(Le,Me);Oe+=nt(Le,G,le,be,Te)}else if(be=A(P),typeof be=="function")for(P=be.call(P),Me=0;!(Le=P.next()).done;)Le=Le.value,be=ge+R(Le,Me++),Oe+=nt(Le,G,le,be,Te);else if(Le==="object")throw G=String(P),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Oe}function Dt(P,G,le){if(P==null)return P;var ge=[],Te=0;return nt(P,ge,"","",function(Le){return G.call(le,Le,Te++)}),ge}function Vt(P){if(P._status===-1){var G=P._result;G=G(),G.then(function(le){(P._status===0||P._status===-1)&&(P._status=1,P._result=le)},function(le){(P._status===0||P._status===-1)&&(P._status=2,P._result=le)}),P._status===-1&&(P._status=0,P._result=G)}if(P._status===1)return P._result.default;throw P._result}var ze={current:null},ee={transition:null},fe={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Pe};return Se.Children={map:Dt,forEach:function(P,G,le){Dt(P,function(){G.apply(this,arguments)},le)},count:function(P){var G=0;return Dt(P,function(){G++}),G},toArray:function(P){return Dt(P,function(G){return G})||[]},only:function(P){if(!D(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Se.Component=j,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=ae,Se.StrictMode=i,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Se.cloneElement=function(P,G,le){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ge=$({},P.props),Te=P.key,Le=P.ref,Oe=P._owner;if(G!=null){if(G.ref!==void 0&&(Le=G.ref,Oe=Pe.current),G.key!==void 0&&(Te=""+G.key),P.type&&P.type.defaultProps)var Me=P.type.defaultProps;for(be in G)Ve.call(G,be)&&!V.hasOwnProperty(be)&&(ge[be]=G[be]===void 0&&Me!==void 0?Me[be]:G[be])}var be=arguments.length-2;if(be===1)ge.children=le;else if(1<be){Me=Array(be);for(var Ot=0;Ot<be;Ot++)Me[Ot]=arguments[Ot+2];ge.children=Me}return{$$typeof:n,type:P.type,key:Te,ref:Le,props:ge,_owner:Oe}},Se.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},Se.createElement=S,Se.createFactory=function(P){var G=S.bind(null,P);return G.type=P,G},Se.createRef=function(){return{current:null}},Se.forwardRef=function(P){return{$$typeof:f,render:P}},Se.isValidElement=D,Se.lazy=function(P){return{$$typeof:E,_payload:{_status:-1,_result:P},_init:Vt}},Se.memo=function(P,G){return{$$typeof:y,type:P,compare:G===void 0?null:G}},Se.startTransition=function(P){var G=ee.transition;ee.transition={};try{P()}finally{ee.transition=G}},Se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Se.useCallback=function(P,G){return ze.current.useCallback(P,G)},Se.useContext=function(P){return ze.current.useContext(P)},Se.useDebugValue=function(){},Se.useDeferredValue=function(P){return ze.current.useDeferredValue(P)},Se.useEffect=function(P,G){return ze.current.useEffect(P,G)},Se.useId=function(){return ze.current.useId()},Se.useImperativeHandle=function(P,G,le){return ze.current.useImperativeHandle(P,G,le)},Se.useInsertionEffect=function(P,G){return ze.current.useInsertionEffect(P,G)},Se.useLayoutEffect=function(P,G){return ze.current.useLayoutEffect(P,G)},Se.useMemo=function(P,G){return ze.current.useMemo(P,G)},Se.useReducer=function(P,G,le){return ze.current.useReducer(P,G,le)},Se.useRef=function(P){return ze.current.useRef(P)},Se.useState=function(P){return ze.current.useState(P)},Se.useSyncExternalStore=function(P,G,le){return ze.current.useSyncExternalStore(P,G,le)},Se.useTransition=function(){return ze.current.useTransition()},Se.version="18.2.0",Se}var Ug;function B_(){return Ug||(Ug=1,Nd.exports=lT()),Nd.exports}var Y=B_();const U=aT(Y),uT=oT({__proto__:null,default:U},[Y]);var Hu={},Dd={exports:{}},Zt={},Vd={exports:{}},Od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function cT(){return Bg||(Bg=1,(function(n){function e(ee,fe){var P=ee.length;ee.push(fe);e:for(;0<P;){var G=P-1>>>1,le=ee[G];if(0<o(le,fe))ee[G]=fe,ee[P]=le,P=G;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var fe=ee[0],P=ee.pop();if(P!==fe){ee[0]=P;e:for(var G=0,le=ee.length,ge=le>>>1;G<ge;){var Te=2*(G+1)-1,Le=ee[Te],Oe=Te+1,Me=ee[Oe];if(0>o(Le,P))Oe<le&&0>o(Me,Le)?(ee[G]=Me,ee[Oe]=P,G=Oe):(ee[G]=Le,ee[Te]=P,G=Te);else if(Oe<le&&0>o(Me,P))ee[G]=Me,ee[Oe]=P,G=Oe;else break e}}return fe}function o(ee,fe){var P=ee.sortIndex-fe.sortIndex;return P!==0?P:ee.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var g=[],y=[],E=1,I=null,A=3,z=!1,$=!1,q=!1,j=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(ee){for(var fe=t(y);fe!==null;){if(fe.callback===null)i(y);else if(fe.startTime<=ee)i(y),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(y)}}function Ee(ee){if(q=!1,se(ee),!$)if(t(g)!==null)$=!0,Vt(Ve);else{var fe=t(y);fe!==null&&ze(Ee,fe.startTime-ee)}}function Ve(ee,fe){$=!1,q&&(q=!1,te(S),S=-1),z=!0;var P=A;try{for(se(fe),I=t(g);I!==null&&(!(I.expirationTime>fe)||ee&&!O());){var G=I.callback;if(typeof G=="function"){I.callback=null,A=I.priorityLevel;var le=G(I.expirationTime<=fe);fe=n.unstable_now(),typeof le=="function"?I.callback=le:I===t(g)&&i(g),se(fe)}else i(g);I=t(g)}if(I!==null)var ge=!0;else{var Te=t(y);Te!==null&&ze(Ee,Te.startTime-fe),ge=!1}return ge}finally{I=null,A=P,z=!1}}var Pe=!1,V=null,S=-1,C=5,D=-1;function O(){return!(n.unstable_now()-D<C)}function x(){if(V!==null){var ee=n.unstable_now();D=ee;var fe=!0;try{fe=V(!0,ee)}finally{fe?R():(Pe=!1,V=null)}}else Pe=!1}var R;if(typeof ae=="function")R=function(){ae(x)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Dt=nt.port2;nt.port1.onmessage=x,R=function(){Dt.postMessage(null)}}else R=function(){j(x,0)};function Vt(ee){V=ee,Pe||(Pe=!0,R())}function ze(ee,fe){S=j(function(){ee(n.unstable_now())},fe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){$||z||($=!0,Vt(Ve))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(ee){switch(A){case 1:case 2:case 3:var fe=3;break;default:fe=A}var P=A;A=fe;try{return ee()}finally{A=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,fe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var P=A;A=ee;try{return fe()}finally{A=P}},n.unstable_scheduleCallback=function(ee,fe,P){var G=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?G+P:G):P=G,ee){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=P+le,ee={id:E++,callback:fe,priorityLevel:ee,startTime:P,expirationTime:le,sortIndex:-1},P>G?(ee.sortIndex=P,e(y,ee),t(g)===null&&ee===t(y)&&(q?(te(S),S=-1):q=!0,ze(Ee,P-G))):(ee.sortIndex=le,e(g,ee),$||z||($=!0,Vt(Ve))),ee},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ee){var fe=A;return function(){var P=A;A=fe;try{return ee.apply(this,arguments)}finally{A=P}}}})(Od)),Od}var zg;function hT(){return zg||(zg=1,Vd.exports=cT()),Vd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function dT(){if(jg)return Zt;jg=1;var n=B_(),e=hT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function A(r){return g.call(I,r)?!0:g.call(E,r)?!1:y.test(r)?I[r]=!0:(E[r]=!0,!1)}function z(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function $(r,s,a,c){if(s===null||typeof s>"u"||z(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){j[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];j[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){j[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){j[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){j[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){j[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){j[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){j[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){j[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function ae(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(te,ae);j[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(te,ae);j[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(te,ae);j[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){j[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),j.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){j[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function se(r,s,a,c){var d=j.hasOwnProperty(s)?j[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?A(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var Ee=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ve=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),O=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ee=Symbol.iterator;function fe(r){return r===null||typeof r!="object"?null:(r=ee&&r[ee]||r["@@iterator"],typeof r=="function"?r:null)}var P=Object.assign,G;function le(r){if(G===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);G=s&&s[1]||""}return`
`+G+r}var ge=!1;function Te(r,s){if(!r||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(F){var c=F}Reflect.construct(r,[],s)}else{try{s.call()}catch(F){c=F}r.call(s.prototype)}else{try{throw Error()}catch(F){c=F}r()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,T=m.length-1;1<=v&&0<=T&&d[v]!==m[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==m[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==m[T]){var k=`
`+d[v].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=v&&0<=T);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?le(r):""}function Le(r){switch(r.tag){case 5:return le(r.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return r=Te(r.type,!1),r;case 11:return r=Te(r.type.render,!1),r;case 1:return r=Te(r.type,!0),r;default:return""}}function Oe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case V:return"Fragment";case Pe:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case nt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case x:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Dt:return s=r.displayName||null,s!==null?s:Oe(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return Oe(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function be(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ot(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ns(r){var s=Ot(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function pr(r){r._valueTracker||(r._valueTracker=Ns(r))}function Ds(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=Ot(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function jr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Mi(r,s){var a=s.checked;return P({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Vs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=be(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Yo(r,s){s=s.checked,s!=null&&se(r,"checked",s,!1)}function Xo(r,s){Yo(r,s);var a=be(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Os(r,s.type,a):s.hasOwnProperty("defaultValue")&&Os(r,s.type,be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Dl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Os(r,s,a){(s!=="number"||jr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var mr=Array.isArray;function gr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+be(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Jo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return P({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function xs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(mr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:be(a)}}function Ls(r,s){var a=be(s.value),c=be(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Zo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ht(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ht(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,ea=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function $r(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fi=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(r){Fi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),bi[s]=bi[r]})});function ta(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||bi.hasOwnProperty(r)&&bi[r]?(""+s).trim():s+"px"}function na(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ta(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var ra=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(r,s){if(s){if(ra[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function sa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function Ms(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var bs=null,hn=null,Hn=null;function Fs(r){if(r=ka(r)){if(typeof bs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=au(s),bs(r.stateNode,r.type,s))}}function Gn(r){hn?Hn?Hn.push(r):Hn=[r]:hn=r}function oa(){if(hn){var r=hn,s=Hn;if(Hn=hn=null,Fs(r),s)for(r=0;r<s.length;r++)Fs(s[r])}}function Bi(r,s){return r(s)}function aa(){}var _r=!1;function la(r,s,a){if(_r)return r(s,a);_r=!0;try{return Bi(r,s,a)}finally{_r=!1,(hn!==null||Hn!==null)&&(aa(),oa())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var c=au(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Us=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){Us=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Us=!1}function zi(r,s,a,c,d,m,v,T,k){var F=Array.prototype.slice.call(arguments,3);try{s.apply(a,F)}catch(Q){this.onError(Q)}}var ji=!1,Bs=null,Rn=!1,ua=null,ih={onError:function(r){ji=!0,Bs=r}};function zs(r,s,a,c,d,m,v,T,k){ji=!1,Bs=null,zi.apply(ih,arguments)}function Vl(r,s,a,c,d,m,v,T,k){if(zs.apply(this,arguments),ji){if(ji){var F=Bs;ji=!1,Bs=null}else throw Error(t(198));Rn||(Rn=!0,ua=F)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function $i(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Pn(r){if(Cn(r)!==r)throw Error(t(188))}function Ol(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Pn(d),r;if(m===c)return Pn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=m;break}if(T===c){v=!0,c=d,a=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===a){v=!0,a=m,c=d;break}if(T===c){v=!0,c=m,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ca(r){return r=Ol(r),r!==null?js(r):null}function js(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=js(r);if(s!==null)return s;r=r.sibling}return null}var $s=e.unstable_scheduleCallback,ha=e.unstable_cancelCallback,xl=e.unstable_shouldYield,sh=e.unstable_requestPaint,$e=e.unstable_now,Ll=e.unstable_getCurrentPriorityLevel,qi=e.unstable_ImmediatePriority,qr=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,da=e.unstable_LowPriority,Ml=e.unstable_IdlePriority,Wi=null,nn=null;function bl(r){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Wi,r,void 0,(r.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Ul,fa=Math.log,Fl=Math.LN2;function Ul(r){return r>>>=0,r===0?32:31-(fa(r)/Fl|0)|0}var qs=64,Ws=4194304;function Wr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Hi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,m=r.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Wr(T):(m&=v,m!==0&&(c=Wr(m)))}else v=a&~d,v!==0?c=Wr(v):m!==0&&(c=Wr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-jt(s),d=1<<a,c|=r[a],s&=~d;return c}function oh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes;0<m;){var v=31-jt(m),T=1<<v,k=d[v];k===-1?((T&a)===0||(T&c)!==0)&&(d[v]=oh(T,s)):k<=s&&(r.expiredLanes|=T),m&=~T}}function rn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Gi(){var r=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),r}function Hr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Gr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-jt(s),r[s]=a}function je(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-jt(a),m=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~m}}function Kr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-jt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var ke=0;function Qr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Bl,Hs,zl,jl,$l,pa=!1,Kn=[],Tt=null,kn=null,Nn=null,Yr=new Map,fn=new Map,Qn=[],ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ql(r,s){switch(r){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Yr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(s.pointerId)}}function Ht(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=ka(s),s!==null&&Hs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function lh(r,s,a,c,d){switch(s){case"focusin":return Tt=Ht(Tt,r,s,a,c,d),!0;case"dragenter":return kn=Ht(kn,r,s,a,c,d),!0;case"mouseover":return Nn=Ht(Nn,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Yr.set(m,Ht(Yr.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,fn.set(m,Ht(fn.get(m)||null,r,s,a,c,d)),!0}return!1}function Wl(r){var s=Ji(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=$i(a),s!==null){r.blockedOn=s,$l(r.priority,function(){zl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Gs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Ui=c,a.target.dispatchEvent(c),Ui=null}else return s=ka(a),s!==null&&Hs(s),r.blockedOn=a,!1;s.shift()}return!0}function Ki(r,s,a){Er(r)&&a.delete(s)}function Hl(){pa=!1,Tt!==null&&Er(Tt)&&(Tt=null),kn!==null&&Er(kn)&&(kn=null),Nn!==null&&Er(Nn)&&(Nn=null),Yr.forEach(Ki),fn.forEach(Ki)}function Dn(r,s){r.blockedOn===s&&(r.blockedOn=null,pa||(pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hl)))}function Vn(r){function s(d){return Dn(d,r)}if(0<Kn.length){Dn(Kn[0],r);for(var a=1;a<Kn.length;a++){var c=Kn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Tt!==null&&Dn(Tt,r),kn!==null&&Dn(kn,r),Nn!==null&&Dn(Nn,r),Yr.forEach(s),fn.forEach(s),a=0;a<Qn.length;a++)c=Qn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Qn.length&&(a=Qn[0],a.blockedOn===null);)Wl(a),a.blockedOn===null&&Qn.shift()}var wr=Ee.ReactCurrentBatchConfig,Xr=!0;function Qe(r,s,a,c){var d=ke,m=wr.transition;wr.transition=null;try{ke=1,ma(r,s,a,c)}finally{ke=d,wr.transition=m}}function uh(r,s,a,c){var d=ke,m=wr.transition;wr.transition=null;try{ke=4,ma(r,s,a,c)}finally{ke=d,wr.transition=m}}function ma(r,s,a,c){if(Xr){var d=Gs(r,s,a,c);if(d===null)Eh(r,s,c,Qi,a),ql(r,c);else if(lh(d,r,s,a,c))c.stopPropagation();else if(ql(r,c),s&4&&-1<ah.indexOf(r)){for(;d!==null;){var m=ka(d);if(m!==null&&Bl(m),m=Gs(r,s,a,c),m===null&&Eh(r,s,c,Qi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Eh(r,s,c,null,a)}}var Qi=null;function Gs(r,s,a,c){if(Qi=null,r=Ms(c),r=Ji(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=$i(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Qi=r,null}function ga(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ll()){case qi:return 1;case qr:return 4;case dn:case da:return 16;case Ml:return 536870912;default:return 16}default:return 16}}var sn=null,Ks=null,Gt=null;function ya(){if(Gt)return Gt;var r,s=Ks,a=s.length,c,d="value"in sn?sn.value:sn.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return Gt=d.slice(r,1<c?1-c:void 0)}function Qs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Yn(){return!0}function _a(){return!1}function St(r){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in r)r.hasOwnProperty(T)&&(a=r[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Yn:_a,this.isPropagationStopped=_a,this}return P(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=St(On),Xn=P({},On,{view:0,detail:0}),ch=St(Xn),Xs,Ir,Jr,Yi=P({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Jr&&(Jr&&r.type==="mousemove"?(Xs=r.screenX-Jr.screenX,Ir=r.screenY-Jr.screenY):Ir=Xs=0,Jr=r),Xs)},movementY:function(r){return"movementY"in r?r.movementY:Ir}}),Js=St(Yi),va=P({},Yi,{dataTransfer:0}),Gl=St(va),Zs=P({},Xn,{relatedTarget:0}),eo=St(Zs),Kl=P({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=St(Kl),Ql=P({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Yl=St(Ql),Xl=P({},On,{data:0}),Ea=St(Xl),to={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Jl[r])?!!s[r]:!1}function Jn(){return Zl}var u=P({},Xn,{key:function(r){if(r.key){var s=to[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Qs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$t[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(r){return r.type==="keypress"?Qs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Qs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=St(u),_=P({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=St(_),L=P({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn}),B=St(L),Z=P({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=St(Z),ft=P({},Yi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=St(ft),_t=[9,13,27,32],ot=f&&"CompositionEvent"in window,pn=null;f&&"documentMode"in document&&(pn=document.documentMode);var on=f&&"TextEvent"in window&&!pn,Xi=f&&(!ot||pn&&8<pn&&11>=pn),no=" ",Dp=!1;function Vp(r,s){switch(r){case"keyup":return _t.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ro=!1;function rI(r,s){switch(r){case"compositionend":return Op(s);case"keypress":return s.which!==32?null:(Dp=!0,no);case"textInput":return r=s.data,r===no&&Dp?null:r;default:return null}}function iI(r,s){if(ro)return r==="compositionend"||!ot&&Vp(r,s)?(r=ya(),Gt=Ks=sn=null,ro=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Xi&&s.locale!=="ko"?null:s.data;default:return null}}var sI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!sI[r.type]:s==="textarea"}function Lp(r,s,a,c){Gn(c),s=iu(s,"onChange"),0<s.length&&(a=new Ys("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var wa=null,Ia=null;function oI(r){Zp(r,0)}function eu(r){var s=lo(r);if(Ds(s))return r}function aI(r,s){if(r==="change")return s}var Mp=!1;if(f){var hh;if(f){var dh="oninput"in document;if(!dh){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),dh=typeof bp.oninput=="function"}hh=dh}else hh=!1;Mp=hh&&(!document.documentMode||9<document.documentMode)}function Fp(){wa&&(wa.detachEvent("onpropertychange",Up),Ia=wa=null)}function Up(r){if(r.propertyName==="value"&&eu(Ia)){var s=[];Lp(s,Ia,r,Ms(r)),la(oI,s)}}function lI(r,s,a){r==="focusin"?(Fp(),wa=s,Ia=a,wa.attachEvent("onpropertychange",Up)):r==="focusout"&&Fp()}function uI(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return eu(Ia)}function cI(r,s){if(r==="click")return eu(s)}function hI(r,s){if(r==="input"||r==="change")return eu(s)}function dI(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var xn=typeof Object.is=="function"?Object.is:dI;function Ta(r,s){if(xn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!xn(r[d],s[d]))return!1}return!0}function Bp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function zp(r,s){var a=Bp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bp(a)}}function jp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?jp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function $p(){for(var r=window,s=jr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=jr(r.document)}return s}function fh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function fI(r){var s=$p(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&jp(a.ownerDocument.documentElement,a)){if(c!==null&&fh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!r.extend&&m>c&&(d=c,c=m,m=d),d=zp(a,m);var v=zp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),m>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var pI=f&&"documentMode"in document&&11>=document.documentMode,io=null,ph=null,Sa=null,mh=!1;function qp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mh||io==null||io!==jr(c)||(c=io,"selectionStart"in c&&fh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Sa&&Ta(Sa,c)||(Sa=c,c=iu(ph,"onSelect"),0<c.length&&(s=new Ys("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=io)))}function tu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var so={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},gh={},Wp={};f&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function nu(r){if(gh[r])return gh[r];if(!so[r])return r;var s=so[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Wp)return gh[r]=s[a];return r}var Hp=nu("animationend"),Gp=nu("animationiteration"),Kp=nu("animationstart"),Qp=nu("transitionend"),Yp=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(r,s){Yp.set(r,s),l(s,[r])}for(var yh=0;yh<Xp.length;yh++){var _h=Xp[yh],mI=_h.toLowerCase(),gI=_h[0].toUpperCase()+_h.slice(1);Zr(mI,"on"+gI)}Zr(Hp,"onAnimationEnd"),Zr(Gp,"onAnimationIteration"),Zr(Kp,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(Qp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function Jp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Vl(c,s,void 0,r),r.currentTarget=null}function Zp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var T=c[v],k=T.instance,F=T.currentTarget;if(T=T.listener,k!==m&&d.isPropagationStopped())break e;Jp(d,T,F),m=k}else for(v=0;v<c.length;v++){if(T=c[v],k=T.instance,F=T.currentTarget,T=T.listener,k!==m&&d.isPropagationStopped())break e;Jp(d,T,F),m=k}}}if(Rn)throw r=ua,Rn=!1,ua=null,r}function He(r,s){var a=s[Rh];a===void 0&&(a=s[Rh]=new Set);var c=r+"__bubble";a.has(c)||(em(s,r,2,!1),a.add(c))}function vh(r,s,a){var c=0;s&&(c|=4),em(a,r,c,s)}var ru="_reactListening"+Math.random().toString(36).slice(2);function Ra(r){if(!r[ru]){r[ru]=!0,i.forEach(function(a){a!=="selectionchange"&&(yI.has(a)||vh(a,!1,r),vh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[ru]||(s[ru]=!0,vh("selectionchange",!1,s))}}function em(r,s,a,c){switch(ga(s)){case 1:var d=Qe;break;case 4:d=uh;break;default:d=ma}a=d.bind(null,s,a,r),d=void 0,!Us||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Eh(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Ji(T),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}T=T.parentNode}}c=c.return}la(function(){var F=m,Q=Ms(a),X=[];e:{var K=Yp.get(r);if(K!==void 0){var ne=Ys,ue=r;switch(r){case"keypress":if(Qs(a)===0)break e;case"keydown":case"keyup":ne=p;break;case"focusin":ue="focus",ne=eo;break;case"focusout":ue="blur",ne=eo;break;case"beforeblur":case"afterblur":ne=eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=B;break;case Hp:case Gp:case Kp:ne=Tr;break;case Qp:ne=Be;break;case"scroll":ne=ch;break;case"wheel":ne=Ne;break;case"copy":case"cut":case"paste":ne=Yl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=w}var ce=(s&4)!==0,it=!ce&&r==="scroll",M=ce?K!==null?K+"Capture":null:K;ce=[];for(var N=F,b;N!==null;){b=N;var J=b.stateNode;if(b.tag===5&&J!==null&&(b=J,M!==null&&(J=rt(N,M),J!=null&&ce.push(Ca(N,J,b)))),it)break;N=N.return}0<ce.length&&(K=new ne(K,ue,null,a,Q),X.push({event:K,listeners:ce}))}}if((s&7)===0){e:{if(K=r==="mouseover"||r==="pointerover",ne=r==="mouseout"||r==="pointerout",K&&a!==Ui&&(ue=a.relatedTarget||a.fromElement)&&(Ji(ue)||ue[Sr]))break e;if((ne||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,ne?(ue=a.relatedTarget||a.toElement,ne=F,ue=ue?Ji(ue):null,ue!==null&&(it=Cn(ue),ue!==it||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ne=null,ue=F),ne!==ue)){if(ce=Js,J="onMouseLeave",M="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(ce=w,J="onPointerLeave",M="onPointerEnter",N="pointer"),it=ne==null?K:lo(ne),b=ue==null?K:lo(ue),K=new ce(J,N+"leave",ne,a,Q),K.target=it,K.relatedTarget=b,J=null,Ji(Q)===F&&(ce=new ce(M,N+"enter",ue,a,Q),ce.target=b,ce.relatedTarget=it,J=ce),it=J,ne&&ue)t:{for(ce=ne,M=ue,N=0,b=ce;b;b=oo(b))N++;for(b=0,J=M;J;J=oo(J))b++;for(;0<N-b;)ce=oo(ce),N--;for(;0<b-N;)M=oo(M),b--;for(;N--;){if(ce===M||M!==null&&ce===M.alternate)break t;ce=oo(ce),M=oo(M)}ce=null}else ce=null;ne!==null&&tm(X,K,ne,ce,!1),ue!==null&&it!==null&&tm(X,it,ue,ce,!0)}}e:{if(K=F?lo(F):window,ne=K.nodeName&&K.nodeName.toLowerCase(),ne==="select"||ne==="input"&&K.type==="file")var he=aI;else if(xp(K))if(Mp)he=hI;else{he=uI;var pe=lI}else(ne=K.nodeName)&&ne.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(he=cI);if(he&&(he=he(r,F))){Lp(X,he,a,Q);break e}pe&&pe(r,K,F),r==="focusout"&&(pe=K._wrapperState)&&pe.controlled&&K.type==="number"&&Os(K,"number",K.value)}switch(pe=F?lo(F):window,r){case"focusin":(xp(pe)||pe.contentEditable==="true")&&(io=pe,ph=F,Sa=null);break;case"focusout":Sa=ph=io=null;break;case"mousedown":mh=!0;break;case"contextmenu":case"mouseup":case"dragend":mh=!1,qp(X,a,Q);break;case"selectionchange":if(pI)break;case"keydown":case"keyup":qp(X,a,Q)}var me;if(ot)e:{switch(r){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else ro?Vp(r,a)&&(ve="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Xi&&a.locale!=="ko"&&(ro||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&ro&&(me=ya()):(sn=Q,Ks="value"in sn?sn.value:sn.textContent,ro=!0)),pe=iu(F,ve),0<pe.length&&(ve=new Ea(ve,r,null,a,Q),X.push({event:ve,listeners:pe}),me?ve.data=me:(me=Op(a),me!==null&&(ve.data=me)))),(me=on?rI(r,a):iI(r,a))&&(F=iu(F,"onBeforeInput"),0<F.length&&(Q=new Ea("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:F}),Q.data=me))}Zp(X,s)})}function Ca(r,s,a){return{instance:r,listener:s,currentTarget:a}}function iu(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=rt(r,a),m!=null&&c.unshift(Ca(r,m,d)),m=rt(r,s),m!=null&&c.push(Ca(r,m,d))),r=r.return}return c}function oo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function tm(r,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var T=a,k=T.alternate,F=T.stateNode;if(k!==null&&k===c)break;T.tag===5&&F!==null&&(T=F,d?(k=rt(a,m),k!=null&&v.unshift(Ca(a,k,T))):d||(k=rt(a,m),k!=null&&v.push(Ca(a,k,T)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var _I=/\r\n?/g,vI=/\u0000|\uFFFD/g;function nm(r){return(typeof r=="string"?r:""+r).replace(_I,`
`).replace(vI,"")}function su(r,s,a){if(s=nm(s),nm(r)!==s&&a)throw Error(t(425))}function ou(){}var wh=null,Ih=null;function Th(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,EI=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,wI=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(r){return rm.resolve(null).then(r).catch(II)}:Sh;function II(r){setTimeout(function(){throw r})}function Ah(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Vn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Vn(s)}function ei(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function im(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ao=Math.random().toString(36).slice(2),Zn="__reactFiber$"+ao,Pa="__reactProps$"+ao,Sr="__reactContainer$"+ao,Rh="__reactEvents$"+ao,TI="__reactListeners$"+ao,SI="__reactHandles$"+ao;function Ji(r){var s=r[Zn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Sr]||a[Zn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=im(r);r!==null;){if(a=r[Zn])return a;r=im(r)}return s}r=a,a=r.parentNode}return null}function ka(r){return r=r[Zn]||r[Sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function lo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function au(r){return r[Pa]||null}var Ch=[],uo=-1;function ti(r){return{current:r}}function Ge(r){0>uo||(r.current=Ch[uo],Ch[uo]=null,uo--)}function qe(r,s){uo++,Ch[uo]=r.current,r.current=s}var ni={},xt=ti(ni),Kt=ti(!1),Zi=ni;function co(r,s){var a=r.type.contextTypes;if(!a)return ni;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(r){return r=r.childContextTypes,r!=null}function lu(){Ge(Kt),Ge(xt)}function sm(r,s,a){if(xt.current!==ni)throw Error(t(168));qe(xt,s),qe(Kt,a)}function om(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return P({},a,c)}function uu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ni,Zi=xt.current,qe(xt,r),qe(Kt,Kt.current),!0}function am(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=om(r,s,Zi),c.__reactInternalMemoizedMergedChildContext=r,Ge(Kt),Ge(xt),qe(xt,r)):Ge(Kt),qe(Kt,a)}var Ar=null,cu=!1,Ph=!1;function lm(r){Ar===null?Ar=[r]:Ar.push(r)}function AI(r){cu=!0,lm(r)}function ri(){if(!Ph&&Ar!==null){Ph=!0;var r=0,s=ke;try{var a=Ar;for(ke=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ar=null,cu=!1}catch(d){throw Ar!==null&&(Ar=Ar.slice(r+1)),$s(qi,ri),d}finally{ke=s,Ph=!1}}return null}var ho=[],fo=0,hu=null,du=0,mn=[],gn=0,es=null,Rr=1,Cr="";function ts(r,s){ho[fo++]=du,ho[fo++]=hu,hu=r,du=s}function um(r,s,a){mn[gn++]=Rr,mn[gn++]=Cr,mn[gn++]=es,es=r;var c=Rr;r=Cr;var d=32-jt(c)-1;c&=~(1<<d),a+=1;var m=32-jt(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Rr=1<<32-jt(s)+d|a<<d|c,Cr=m+r}else Rr=1<<m|a<<d|c,Cr=r}function kh(r){r.return!==null&&(ts(r,1),um(r,1,0))}function Nh(r){for(;r===hu;)hu=ho[--fo],ho[fo]=null,du=ho[--fo],ho[fo]=null;for(;r===es;)es=mn[--gn],mn[gn]=null,Cr=mn[--gn],mn[gn]=null,Rr=mn[--gn],mn[gn]=null}var an=null,ln=null,Ye=!1,Ln=null;function cm(r,s){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function hm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,an=r,ln=ei(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,an=r,ln=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=es!==null?{id:Rr,overflow:Cr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,an=r,ln=null,!0):!1;default:return!1}}function Dh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Vh(r){if(Ye){var s=ln;if(s){var a=s;if(!hm(r,s)){if(Dh(r))throw Error(t(418));s=ei(a.nextSibling);var c=an;s&&hm(r,s)?cm(c,a):(r.flags=r.flags&-4097|2,Ye=!1,an=r)}}else{if(Dh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,an=r}}}function dm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;an=r}function fu(r){if(r!==an)return!1;if(!Ye)return dm(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Th(r.type,r.memoizedProps)),s&&(s=ln)){if(Dh(r))throw fm(),Error(t(418));for(;s;)cm(r,s),s=ei(s.nextSibling)}if(dm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){ln=ei(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}ln=null}}else ln=an?ei(r.stateNode.nextSibling):null;return!0}function fm(){for(var r=ln;r;)r=ei(r.nextSibling)}function po(){ln=an=null,Ye=!1}function Oh(r){Ln===null?Ln=[r]:Ln.push(r)}var RI=Ee.ReactCurrentBatchConfig;function Mn(r,s){if(r&&r.defaultProps){s=P({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}var pu=ti(null),mu=null,mo=null,xh=null;function Lh(){xh=mo=mu=null}function Mh(r){var s=pu.current;Ge(pu),r._currentValue=s}function bh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function go(r,s){mu=r,xh=mo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Yt=!0),r.firstContext=null)}function yn(r){var s=r._currentValue;if(xh!==r)if(r={context:r,memoizedValue:s,next:null},mo===null){if(mu===null)throw Error(t(308));mo=r,mu.dependencies={lanes:0,firstContext:r}}else mo=mo.next=r;return s}var ns=null;function Fh(r){ns===null?ns=[r]:ns.push(r)}function pm(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Fh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Pr(r,c)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ii=!1;function Uh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function kr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function si(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(xe&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Pr(r,a)}return d=c.interleaved,d===null?(s.next=s,Fh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Pr(r,a)}function gu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Kr(r,a)}}function gm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function yu(r,s,a,c){var d=r.updateQueue;ii=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var k=T,F=k.next;k.next=null,v===null?m=F:v.next=F,v=k;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=F:T.next=F,Q.lastBaseUpdate=k))}if(m!==null){var X=d.baseState;v=0,Q=F=k=null,T=m;do{var K=T.lane,ne=T.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:ne,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ue=r,ce=T;switch(K=s,ne=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(ne,X,K);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,K=typeof ue=="function"?ue.call(ne,X,K):ue,K==null)break e;X=P({},X,K);break e;case 2:ii=!0}}T.callback!==null&&T.lane!==0&&(r.flags|=64,K=d.effects,K===null?d.effects=[T]:K.push(T))}else ne={eventTime:ne,lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(F=Q=ne,k=X):Q=Q.next=ne,v|=K;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;K=T,T=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(k=X),d.baseState=k,d.firstBaseUpdate=F,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);ss|=v,r.lanes=v,r.memoizedState=X}}function ym(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var _m=new n.Component().refs;function Bh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:P({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var _u={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=ui(r),m=kr(c,d);m.payload=s,a!=null&&(m.callback=a),s=si(r,m,d),s!==null&&(Un(s,r,d,c),gu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=ui(r),m=kr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=si(r,m,d),s!==null&&(Un(s,r,d,c),gu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),c=ui(r),d=kr(a,c);d.tag=2,s!=null&&(d.callback=s),s=si(r,d,c),s!==null&&(Un(s,r,c,a),gu(s,r,c))}};function vm(r,s,a,c,d,m,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!Ta(a,c)||!Ta(d,m):!0}function Em(r,s,a){var c=!1,d=ni,m=s.contextType;return typeof m=="object"&&m!==null?m=yn(m):(d=Qt(s)?Zi:xt.current,c=s.contextTypes,m=(c=c!=null)?co(r,d):ni),s=new s(a,m),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_u,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=m),s}function wm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&_u.enqueueReplaceState(s,s.state,null)}function zh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs=_m,Uh(r);var m=s.contextType;typeof m=="object"&&m!==null?d.context=yn(m):(m=Qt(s)?Zi:xt.current,d.context=co(r,m)),d.state=r.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Bh(r,s,m,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&_u.enqueueReplaceState(d,d.state,null),yu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Na(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,m=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var T=d.refs;T===_m&&(T=d.refs={}),v===null?delete T[m]:T[m]=v},s._stringRef=m,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function vu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Im(r){var s=r._init;return s(r._payload)}function Tm(r){function s(M,N){if(r){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!r)return null;for(;N!==null;)s(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=hi(M,N),M.index=0,M.sibling=null,M}function m(M,N,b){return M.index=b,r?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function v(M){return r&&M.alternate===null&&(M.flags|=2),M}function T(M,N,b,J){return N===null||N.tag!==6?(N=Sd(b,M.mode,J),N.return=M,N):(N=d(N,b),N.return=M,N)}function k(M,N,b,J){var he=b.type;return he===V?Q(M,N,b.props.children,J,b.key):N!==null&&(N.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Vt&&Im(he)===N.type)?(J=d(N,b.props),J.ref=Na(M,N,b),J.return=M,J):(J=Fu(b.type,b.key,b.props,null,M.mode,J),J.ref=Na(M,N,b),J.return=M,J)}function F(M,N,b,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Ad(b,M.mode,J),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function Q(M,N,b,J,he){return N===null||N.tag!==7?(N=us(b,M.mode,J,he),N.return=M,N):(N=d(N,b),N.return=M,N)}function X(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Sd(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ve:return b=Fu(N.type,N.key,N.props,null,M.mode,b),b.ref=Na(M,null,N),b.return=M,b;case Pe:return N=Ad(N,M.mode,b),N.return=M,N;case Vt:var J=N._init;return X(M,J(N._payload),b)}if(mr(N)||fe(N))return N=us(N,M.mode,b,null),N.return=M,N;vu(M,N)}return null}function K(M,N,b,J){var he=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return he!==null?null:T(M,N,""+b,J);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ve:return b.key===he?k(M,N,b,J):null;case Pe:return b.key===he?F(M,N,b,J):null;case Vt:return he=b._init,K(M,N,he(b._payload),J)}if(mr(b)||fe(b))return he!==null?null:Q(M,N,b,J,null);vu(M,b)}return null}function ne(M,N,b,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(b)||null,T(N,M,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Ve:return M=M.get(J.key===null?b:J.key)||null,k(N,M,J,he);case Pe:return M=M.get(J.key===null?b:J.key)||null,F(N,M,J,he);case Vt:var pe=J._init;return ne(M,N,b,pe(J._payload),he)}if(mr(J)||fe(J))return M=M.get(b)||null,Q(N,M,J,he,null);vu(N,J)}return null}function ue(M,N,b,J){for(var he=null,pe=null,me=N,ve=N=0,wt=null;me!==null&&ve<b.length;ve++){me.index>ve?(wt=me,me=null):wt=me.sibling;var Fe=K(M,me,b[ve],J);if(Fe===null){me===null&&(me=wt);break}r&&me&&Fe.alternate===null&&s(M,me),N=m(Fe,N,ve),pe===null?he=Fe:pe.sibling=Fe,pe=Fe,me=wt}if(ve===b.length)return a(M,me),Ye&&ts(M,ve),he;if(me===null){for(;ve<b.length;ve++)me=X(M,b[ve],J),me!==null&&(N=m(me,N,ve),pe===null?he=me:pe.sibling=me,pe=me);return Ye&&ts(M,ve),he}for(me=c(M,me);ve<b.length;ve++)wt=ne(me,M,ve,b[ve],J),wt!==null&&(r&&wt.alternate!==null&&me.delete(wt.key===null?ve:wt.key),N=m(wt,N,ve),pe===null?he=wt:pe.sibling=wt,pe=wt);return r&&me.forEach(function(di){return s(M,di)}),Ye&&ts(M,ve),he}function ce(M,N,b,J){var he=fe(b);if(typeof he!="function")throw Error(t(150));if(b=he.call(b),b==null)throw Error(t(151));for(var pe=he=null,me=N,ve=N=0,wt=null,Fe=b.next();me!==null&&!Fe.done;ve++,Fe=b.next()){me.index>ve?(wt=me,me=null):wt=me.sibling;var di=K(M,me,Fe.value,J);if(di===null){me===null&&(me=wt);break}r&&me&&di.alternate===null&&s(M,me),N=m(di,N,ve),pe===null?he=di:pe.sibling=di,pe=di,me=wt}if(Fe.done)return a(M,me),Ye&&ts(M,ve),he;if(me===null){for(;!Fe.done;ve++,Fe=b.next())Fe=X(M,Fe.value,J),Fe!==null&&(N=m(Fe,N,ve),pe===null?he=Fe:pe.sibling=Fe,pe=Fe);return Ye&&ts(M,ve),he}for(me=c(M,me);!Fe.done;ve++,Fe=b.next())Fe=ne(me,M,ve,Fe.value,J),Fe!==null&&(r&&Fe.alternate!==null&&me.delete(Fe.key===null?ve:Fe.key),N=m(Fe,N,ve),pe===null?he=Fe:pe.sibling=Fe,pe=Fe);return r&&me.forEach(function(sT){return s(M,sT)}),Ye&&ts(M,ve),he}function it(M,N,b,J){if(typeof b=="object"&&b!==null&&b.type===V&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ve:e:{for(var he=b.key,pe=N;pe!==null;){if(pe.key===he){if(he=b.type,he===V){if(pe.tag===7){a(M,pe.sibling),N=d(pe,b.props.children),N.return=M,M=N;break e}}else if(pe.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Vt&&Im(he)===pe.type){a(M,pe.sibling),N=d(pe,b.props),N.ref=Na(M,pe,b),N.return=M,M=N;break e}a(M,pe);break}else s(M,pe);pe=pe.sibling}b.type===V?(N=us(b.props.children,M.mode,J,b.key),N.return=M,M=N):(J=Fu(b.type,b.key,b.props,null,M.mode,J),J.ref=Na(M,N,b),J.return=M,M=J)}return v(M);case Pe:e:{for(pe=b.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else s(M,N);N=N.sibling}N=Ad(b,M.mode,J),N.return=M,M=N}return v(M);case Vt:return pe=b._init,it(M,N,pe(b._payload),J)}if(mr(b))return ue(M,N,b,J);if(fe(b))return ce(M,N,b,J);vu(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=Sd(b,M.mode,J),N.return=M,M=N),v(M)):a(M,N)}return it}var yo=Tm(!0),Sm=Tm(!1),Da={},er=ti(Da),Va=ti(Da),Oa=ti(Da);function rs(r){if(r===Da)throw Error(t(174));return r}function jh(r,s){switch(qe(Oa,s),qe(Va,r),qe(er,Da),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:dt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=dt(s,r)}Ge(er),qe(er,s)}function _o(){Ge(er),Ge(Va),Ge(Oa)}function Am(r){rs(Oa.current);var s=rs(er.current),a=dt(s,r.type);s!==a&&(qe(Va,r),qe(er,a))}function $h(r){Va.current===r&&(Ge(er),Ge(Va))}var Xe=ti(0);function Eu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var qh=[];function Wh(){for(var r=0;r<qh.length;r++)qh[r]._workInProgressVersionPrimary=null;qh.length=0}var wu=Ee.ReactCurrentDispatcher,Hh=Ee.ReactCurrentBatchConfig,is=0,Je=null,pt=null,vt=null,Iu=!1,xa=!1,La=0,CI=0;function Lt(){throw Error(t(321))}function Gh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!xn(r[a],s[a]))return!1;return!0}function Kh(r,s,a,c,d,m){if(is=m,Je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,wu.current=r===null||r.memoizedState===null?DI:VI,r=a(c,d),xa){m=0;do{if(xa=!1,La=0,25<=m)throw Error(t(301));m+=1,vt=pt=null,s.updateQueue=null,wu.current=OI,r=a(c,d)}while(xa)}if(wu.current=Au,s=pt!==null&&pt.next!==null,is=0,vt=pt=Je=null,Iu=!1,s)throw Error(t(300));return r}function Qh(){var r=La!==0;return La=0,r}function tr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Je.memoizedState=vt=r:vt=vt.next=r,vt}function _n(){if(pt===null){var r=Je.alternate;r=r!==null?r.memoizedState:null}else r=pt.next;var s=vt===null?Je.memoizedState:vt.next;if(s!==null)vt=s,pt=r;else{if(r===null)throw Error(t(310));pt=r,r={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?Je.memoizedState=vt=r:vt=vt.next=r}return vt}function Ma(r,s){return typeof s=="function"?s(r):s}function Yh(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=pt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var T=v=null,k=null,F=m;do{var Q=F.lane;if((is&Q)===Q)k!==null&&(k=k.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:r(c,F.action);else{var X={lane:Q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};k===null?(T=k=X,v=c):k=k.next=X,Je.lanes|=Q,ss|=Q}F=F.next}while(F!==null&&F!==m);k===null?v=c:k.next=T,xn(c,s.memoizedState)||(Yt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=k,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do m=d.lane,Je.lanes|=m,ss|=m,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Xh(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=r(m,v.action),v=v.next;while(v!==d);xn(m,s.memoizedState)||(Yt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function Rm(){}function Cm(r,s){var a=Je,c=_n(),d=s(),m=!xn(c.memoizedState,d);if(m&&(c.memoizedState=d,Yt=!0),c=c.queue,Jh(Nm.bind(null,a,c,r),[r]),c.getSnapshot!==s||m||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,ba(9,km.bind(null,a,c,d,s),void 0,null),Et===null)throw Error(t(349));(is&30)!==0||Pm(a,s,d)}return d}function Pm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function km(r,s,a,c){s.value=a,s.getSnapshot=c,Dm(s)&&Vm(r)}function Nm(r,s,a){return a(function(){Dm(s)&&Vm(r)})}function Dm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!xn(r,a)}catch{return!0}}function Vm(r){var s=Pr(r,1);s!==null&&Un(s,r,1,-1)}function Om(r){var s=tr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:r},s.queue=r,r=r.dispatch=NI.bind(null,Je,r),[s.memoizedState,r]}function ba(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function xm(){return _n().memoizedState}function Tu(r,s,a,c){var d=tr();Je.flags|=r,d.memoizedState=ba(1|s,a,void 0,c===void 0?null:c)}function Su(r,s,a,c){var d=_n();c=c===void 0?null:c;var m=void 0;if(pt!==null){var v=pt.memoizedState;if(m=v.destroy,c!==null&&Gh(c,v.deps)){d.memoizedState=ba(s,a,m,c);return}}Je.flags|=r,d.memoizedState=ba(1|s,a,m,c)}function Lm(r,s){return Tu(8390656,8,r,s)}function Jh(r,s){return Su(2048,8,r,s)}function Mm(r,s){return Su(4,2,r,s)}function bm(r,s){return Su(4,4,r,s)}function Fm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Um(r,s,a){return a=a!=null?a.concat([r]):null,Su(4,4,Fm.bind(null,s,r),a)}function Zh(){}function Bm(r,s){var a=_n();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Gh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function zm(r,s){var a=_n();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Gh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function jm(r,s,a){return(is&21)===0?(r.baseState&&(r.baseState=!1,Yt=!0),r.memoizedState=a):(xn(a,s)||(a=Gi(),Je.lanes|=a,ss|=a,r.baseState=!0),s)}function PI(r,s){var a=ke;ke=a!==0&&4>a?a:4,r(!0);var c=Hh.transition;Hh.transition={};try{r(!1),s()}finally{ke=a,Hh.transition=c}}function $m(){return _n().memoizedState}function kI(r,s,a){var c=ui(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},qm(r))Wm(s,a);else if(a=pm(r,s,a,c),a!==null){var d=Wt();Un(a,r,c,d),Hm(a,s,c)}}function NI(r,s,a){var c=ui(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(qm(r))Wm(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,T=m(v,a);if(d.hasEagerState=!0,d.eagerState=T,xn(T,v)){var k=s.interleaved;k===null?(d.next=d,Fh(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=pm(r,s,d,c),a!==null&&(d=Wt(),Un(a,r,c,d),Hm(a,s,c))}}function qm(r){var s=r.alternate;return r===Je||s!==null&&s===Je}function Wm(r,s){xa=Iu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Hm(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Kr(r,a)}}var Au={readContext:yn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},DI={readContext:yn,useCallback:function(r,s){return tr().memoizedState=[r,s===void 0?null:s],r},useContext:yn,useEffect:Lm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Tu(4194308,4,Fm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Tu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Tu(4,2,r,s)},useMemo:function(r,s){var a=tr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=tr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=kI.bind(null,Je,r),[c.memoizedState,r]},useRef:function(r){var s=tr();return r={current:r},s.memoizedState=r},useState:Om,useDebugValue:Zh,useDeferredValue:function(r){return tr().memoizedState=r},useTransition:function(){var r=Om(!1),s=r[0];return r=PI.bind(null,r[1]),tr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Je,d=tr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Et===null)throw Error(t(349));(is&30)!==0||Pm(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,Lm(Nm.bind(null,c,m,r),[r]),c.flags|=2048,ba(9,km.bind(null,c,m,a,s),void 0,null),a},useId:function(){var r=tr(),s=Et.identifierPrefix;if(Ye){var a=Cr,c=Rr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=La++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=CI++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},VI={readContext:yn,useCallback:Bm,useContext:yn,useEffect:Jh,useImperativeHandle:Um,useInsertionEffect:Mm,useLayoutEffect:bm,useMemo:zm,useReducer:Yh,useRef:xm,useState:function(){return Yh(Ma)},useDebugValue:Zh,useDeferredValue:function(r){var s=_n();return jm(s,pt.memoizedState,r)},useTransition:function(){var r=Yh(Ma)[0],s=_n().memoizedState;return[r,s]},useMutableSource:Rm,useSyncExternalStore:Cm,useId:$m,unstable_isNewReconciler:!1},OI={readContext:yn,useCallback:Bm,useContext:yn,useEffect:Jh,useImperativeHandle:Um,useInsertionEffect:Mm,useLayoutEffect:bm,useMemo:zm,useReducer:Xh,useRef:xm,useState:function(){return Xh(Ma)},useDebugValue:Zh,useDeferredValue:function(r){var s=_n();return pt===null?s.memoizedState=r:jm(s,pt.memoizedState,r)},useTransition:function(){var r=Xh(Ma)[0],s=_n().memoizedState;return[r,s]},useMutableSource:Rm,useSyncExternalStore:Cm,useId:$m,unstable_isNewReconciler:!1};function vo(r,s){try{var a="",c=s;do a+=Le(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:s,stack:d,digest:null}}function ed(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function td(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var xI=typeof WeakMap=="function"?WeakMap:Map;function Gm(r,s,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Vu||(Vu=!0,gd=c),td(r,s)},a}function Km(r,s,a){a=kr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){td(r,s)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){td(r,s),typeof c!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Qm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new xI;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=KI.bind(null,r,s,a),s.then(r,r))}function Ym(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Xm(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=kr(-1,1),s.tag=2,si(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var LI=Ee.ReactCurrentOwner,Yt=!1;function qt(r,s,a,c){s.child=r===null?Sm(s,null,a,c):yo(s,r.child,a,c)}function Jm(r,s,a,c,d){a=a.render;var m=s.ref;return go(s,d),c=Kh(r,s,a,c,m,d),a=Qh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Nr(r,s,d)):(Ye&&a&&kh(s),s.flags|=1,qt(r,s,c,d),s.child)}function Zm(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Td(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,eg(r,s,m,c,d)):(r=Fu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,(r.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ta,a(v,c)&&r.ref===s.ref)return Nr(r,s,d)}return s.flags|=1,r=hi(m,c),r.ref=s.ref,r.return=s,s.child=r}function eg(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(Ta(m,c)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=c=m,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Yt=!0);else return s.lanes=r.lanes,Nr(r,s,d)}return nd(r,s,a,c,d)}function tg(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(wo,un),un|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,qe(wo,un),un|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,qe(wo,un),un|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,qe(wo,un),un|=c;return qt(r,s,d,a),s.child}function ng(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function nd(r,s,a,c,d){var m=Qt(a)?Zi:xt.current;return m=co(s,m),go(s,d),a=Kh(r,s,a,c,m,d),c=Qh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Nr(r,s,d)):(Ye&&c&&kh(s),s.flags|=1,qt(r,s,a,d),s.child)}function rg(r,s,a,c,d){if(Qt(a)){var m=!0;uu(s)}else m=!1;if(go(s,d),s.stateNode===null)Cu(r,s),Em(s,a,c),zh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,T=s.memoizedProps;v.props=T;var k=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=yn(F):(F=Qt(a)?Zi:xt.current,F=co(s,F));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||k!==F)&&wm(s,v,c,F),ii=!1;var K=s.memoizedState;v.state=K,yu(s,c,v,d),k=s.memoizedState,T!==c||K!==k||Kt.current||ii?(typeof Q=="function"&&(Bh(s,a,Q,c),k=s.memoizedState),(T=ii||vm(s,a,T,c,K,k,F))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),v.props=c,v.state=k,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,mm(r,s),T=s.memoizedProps,F=s.type===s.elementType?T:Mn(s.type,T),v.props=F,X=s.pendingProps,K=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=yn(k):(k=Qt(a)?Zi:xt.current,k=co(s,k));var ne=a.getDerivedStateFromProps;(Q=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==X||K!==k)&&wm(s,v,c,k),ii=!1,K=s.memoizedState,v.state=K,yu(s,c,v,d);var ue=s.memoizedState;T!==X||K!==ue||Kt.current||ii?(typeof ne=="function"&&(Bh(s,a,ne,c),ue=s.memoizedState),(F=ii||vm(s,a,F,c,K,ue,k)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=k,c=F):(typeof v.componentDidUpdate!="function"||T===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),c=!1)}return rd(r,s,a,c,m,d)}function rd(r,s,a,c,d,m){ng(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&am(s,a,!1),Nr(r,s,m);c=s.stateNode,LI.current=s;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=yo(s,r.child,null,m),s.child=yo(s,null,T,m)):qt(r,s,T,m),s.memoizedState=c.state,d&&am(s,a,!0),s.child}function ig(r){var s=r.stateNode;s.pendingContext?sm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&sm(r,s.context,!1),jh(r,s.containerInfo)}function sg(r,s,a,c,d){return po(),Oh(d),s.flags|=256,qt(r,s,a,c),s.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(r){return{baseLanes:r,cachePool:null,transitions:null}}function og(r,s,a){var c=s.pendingProps,d=Xe.current,m=!1,v=(s.flags&128)!==0,T;if((T=v)||(T=r!==null&&r.memoizedState===null?!1:(d&2)!==0),T?(m=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),qe(Xe,d&1),r===null)return Vh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Uu(v,c,0,null),r=us(r,c,a,null),m.return=s,r.return=s,m.sibling=r,s.child=m,s.child.memoizedState=sd(a),s.memoizedState=id,r):od(s,v));if(d=r.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return MI(r,s,v,c,T,d,a);if(m){m=c.fallback,v=s.mode,d=r.child,T=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=hi(d,k),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?m=hi(T,m):(m=us(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=r.child.memoizedState,v=v===null?sd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=r.childLanes&~a,s.memoizedState=id,c}return m=r.child,r=m.sibling,c=hi(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function od(r,s){return s=Uu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ru(r,s,a,c){return c!==null&&Oh(c),yo(s,r.child,null,a),r=od(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function MI(r,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=ed(Error(t(422))),Ru(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=Uu({mode:"visible",children:c.children},d,0,null),m=us(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&yo(s,r.child,null,v),s.child.memoizedState=sd(v),s.memoizedState=id,m);if((s.mode&1)===0)return Ru(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,m=Error(t(419)),c=ed(m,c,void 0),Ru(r,s,v,c)}if(T=(v&r.childLanes)!==0,Yt||T){if(c=Et,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Pr(r,d),Un(c,r,d,-1))}return Id(),c=ed(Error(t(421))),Ru(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=QI.bind(null,r),d._reactRetry=s,null):(r=m.treeContext,ln=ei(d.nextSibling),an=s,Ye=!0,Ln=null,r!==null&&(mn[gn++]=Rr,mn[gn++]=Cr,mn[gn++]=es,Rr=r.id,Cr=r.overflow,es=s),s=od(s,c.children),s.flags|=4096,s)}function ag(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),bh(r.return,s,a)}function ad(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function lg(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(qt(r,s,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ag(r,a,s);else if(r.tag===19)ag(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(qe(Xe,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Eu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),ad(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Eu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}ad(s,!0,a,null,m);break;case"together":ad(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Cu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ss|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=hi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=hi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function bI(r,s,a){switch(s.tag){case 3:ig(s),po();break;case 5:Am(s);break;case 1:Qt(s.type)&&uu(s);break;case 4:jh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;qe(pu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(qe(Xe,Xe.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?og(r,s,a):(qe(Xe,Xe.current&1),r=Nr(r,s,a),r!==null?r.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return lg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Xe,Xe.current),c)break;return null;case 22:case 23:return s.lanes=0,tg(r,s,a)}return Nr(r,s,a)}var ug,ld,cg,hg;ug=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ld=function(){},cg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,rs(er.current);var m=null;switch(a){case"input":d=Mi(r,d),c=Mi(r,c),m=[];break;case"select":d=P({},d,{value:void 0}),c=P({},c,{value:void 0}),m=[];break;case"textarea":d=Jo(r,d),c=Jo(r,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=ou)}ia(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in c){var k=c[F];if(T=d?.[F],c.hasOwnProperty(F)&&k!==T&&(k!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&T[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(F,a)),a=k;else F==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,T=T?T.__html:void 0,k!=null&&T!==k&&(m=m||[]).push(F,k)):F==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(F,""+k):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(k!=null&&F==="onScroll"&&He("scroll",r),m||T===k||(m=[])):(m=m||[]).push(F,k))}a&&(m=m||[]).push("style",a);var F=m;(s.updateQueue=F)&&(s.flags|=4)}},hg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Fa(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function FI(r,s,a){var c=s.pendingProps;switch(Nh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Qt(s.type)&&lu(),Mt(s),null;case 3:return c=s.stateNode,_o(),Ge(Kt),Ge(xt),Wh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(fu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ln!==null&&(vd(Ln),Ln=null))),ld(r,s),Mt(s),null;case 5:$h(s);var d=rs(Oa.current);if(a=s.type,r!==null&&s.stateNode!=null)cg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=rs(er.current),fu(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[Zn]=s,c[Pa]=m,r=(s.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<Aa.length;d++)He(Aa[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":Vs(c,m),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},He("invalid",c);break;case"textarea":xs(c,m),He("invalid",c)}ia(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var T=m[v];v==="children"?typeof T=="string"?c.textContent!==T&&(m.suppressHydrationWarning!==!0&&su(c.textContent,T,r),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(m.suppressHydrationWarning!==!0&&su(c.textContent,T,r),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&He("scroll",c)}switch(a){case"input":pr(c),Dl(c,m,!0);break;case"textarea":pr(c),Zo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=ou)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ht(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[Zn]=s,r[Pa]=c,ug(r,s,!1,!1),s.stateNode=r;e:{switch(v=sa(a,c),a){case"dialog":He("cancel",r),He("close",r),d=c;break;case"iframe":case"object":case"embed":He("load",r),d=c;break;case"video":case"audio":for(d=0;d<Aa.length;d++)He(Aa[d],r);d=c;break;case"source":He("error",r),d=c;break;case"img":case"image":case"link":He("error",r),He("load",r),d=c;break;case"details":He("toggle",r),d=c;break;case"input":Vs(r,c),d=Mi(r,c),He("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=P({},c,{value:void 0}),He("invalid",r);break;case"textarea":xs(r,c),d=Jo(r,c),He("invalid",r);break;default:d=c}ia(a,d),T=d;for(m in T)if(T.hasOwnProperty(m)){var k=T[m];m==="style"?na(r,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ea(r,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&$r(r,k):typeof k=="number"&&$r(r,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&He("scroll",r):k!=null&&se(r,m,k,v))}switch(a){case"input":pr(r),Dl(r,c,!1);break;case"textarea":pr(r),Zo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+be(c.value));break;case"select":r.multiple=!!c.multiple,m=c.value,m!=null?gr(r,!!c.multiple,m,!1):c.defaultValue!=null&&gr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ou)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)hg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=rs(Oa.current),rs(er.current),fu(s)){if(c=s.stateNode,a=s.memoizedProps,c[Zn]=s,(m=c.nodeValue!==a)&&(r=an,r!==null))switch(r.tag){case 3:su(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&su(c.nodeValue,a,(r.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Zn]=s,s.stateNode=c}return Mt(s),null;case 13:if(Ge(Xe),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&ln!==null&&(s.mode&1)!==0&&(s.flags&128)===0)fm(),po(),s.flags|=98560,m=!1;else if(m=fu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Zn]=s}else po(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),m=!1}else Ln!==null&&(vd(Ln),Ln=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Xe.current&1)!==0?mt===0&&(mt=3):Id())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return _o(),ld(r,s),r===null&&Ra(s.stateNode.containerInfo),Mt(s),null;case 10:return Mh(s.type._context),Mt(s),null;case 17:return Qt(s.type)&&lu(),Mt(s),null;case 19:if(Ge(Xe),m=s.memoizedState,m===null)return Mt(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)Fa(m,!1);else{if(mt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=Eu(r),v!==null){for(s.flags|=128,Fa(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,r=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,r=v.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),s.child}r=r.sibling}m.tail!==null&&$e()>Io&&(s.flags|=128,c=!0,Fa(m,!1),s.lanes=4194304)}else{if(!c)if(r=Eu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Fa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ye)return Mt(s),null}else 2*$e()-m.renderingStartTime>Io&&a!==1073741824&&(s.flags|=128,c=!0,Fa(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=$e(),s.sibling=null,a=Xe.current,qe(Xe,c?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return wd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(un&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function UI(r,s){switch(Nh(s),s.tag){case 1:return Qt(s.type)&&lu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return _o(),Ge(Kt),Ge(xt),Wh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return $h(s),null;case 13:if(Ge(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));po()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Xe),null;case 4:return _o(),null;case 10:return Mh(s.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var Pu=!1,bt=!1,BI=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Eo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(r,s,c)}else a.current=null}function ud(r,s,a){try{a()}catch(c){et(r,s,c)}}var dg=!1;function zI(r,s){if(wh=Xr,r=$p(),fh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,T=-1,k=-1,F=0,Q=0,X=r,K=null;t:for(;;){for(var ne;X!==a||d!==0&&X.nodeType!==3||(T=v+d),X!==m||c!==0&&X.nodeType!==3||(k=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(ne=X.firstChild)!==null;)K=X,X=ne;for(;;){if(X===r)break t;if(K===a&&++F===d&&(T=v),K===m&&++Q===c&&(k=v),(ne=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=ne}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ih={focusedElem:r,selectionRange:a},Xr=!1,oe=s;oe!==null;)if(s=oe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,oe=r;else for(;oe!==null;){s=oe;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,it=ue.memoizedState,M=s.stateNode,N=M.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Mn(s.type,ce),it);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=s.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){et(s,s.return,J)}if(r=s.sibling,r!==null){r.return=s.return,oe=r;break}oe=s.return}return ue=dg,dg=!1,ue}function Ua(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var m=d.destroy;d.destroy=void 0,m!==void 0&&ud(s,a,m)}d=d.next}while(d!==c)}}function ku(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function cd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function fg(r){var s=r.alternate;s!==null&&(r.alternate=null,fg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Zn],delete s[Pa],delete s[Rh],delete s[TI],delete s[SI])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function pg(r){return r.tag===5||r.tag===3||r.tag===4}function mg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||pg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function hd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ou));else if(c!==4&&(r=r.child,r!==null))for(hd(r,s,a),r=r.sibling;r!==null;)hd(r,s,a),r=r.sibling}function dd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(dd(r,s,a),r=r.sibling;r!==null;)dd(r,s,a),r=r.sibling}var At=null,bn=!1;function oi(r,s,a){for(a=a.child;a!==null;)gg(r,s,a),a=a.sibling}function gg(r,s,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Wi,a)}catch{}switch(a.tag){case 5:bt||Eo(a,s);case 6:var c=At,d=bn;At=null,oi(r,s,a),At=c,bn=d,At!==null&&(bn?(r=At,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(bn?(r=At,a=a.stateNode,r.nodeType===8?Ah(r.parentNode,a):r.nodeType===1&&Ah(r,a),Vn(r)):Ah(At,a.stateNode));break;case 4:c=At,d=bn,At=a.stateNode.containerInfo,bn=!0,oi(r,s,a),At=c,bn=d;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&ud(a,s,v),d=d.next}while(d!==c)}oi(r,s,a);break;case 1:if(!bt&&(Eo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){et(a,s,T)}oi(r,s,a);break;case 21:oi(r,s,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,oi(r,s,a),bt=c):oi(r,s,a);break;default:oi(r,s,a)}}function yg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new BI),s.forEach(function(c){var d=YI.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Fn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=r,v=s,T=v;e:for(;T!==null;){switch(T.tag){case 5:At=T.stateNode,bn=!1;break e;case 3:At=T.stateNode.containerInfo,bn=!0;break e;case 4:At=T.stateNode.containerInfo,bn=!0;break e}T=T.return}if(At===null)throw Error(t(160));gg(m,v,d),At=null,bn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(F){et(d,s,F)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)_g(s,r),s=s.sibling}function _g(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Fn(s,r),nr(r),c&4){try{Ua(3,r,r.return),ku(3,r)}catch(ce){et(r,r.return,ce)}try{Ua(5,r,r.return)}catch(ce){et(r,r.return,ce)}}break;case 1:Fn(s,r),nr(r),c&512&&a!==null&&Eo(a,a.return);break;case 5:if(Fn(s,r),nr(r),c&512&&a!==null&&Eo(a,a.return),r.flags&32){var d=r.stateNode;try{$r(d,"")}catch(ce){et(r,r.return,ce)}}if(c&4&&(d=r.stateNode,d!=null)){var m=r.memoizedProps,v=a!==null?a.memoizedProps:m,T=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{T==="input"&&m.type==="radio"&&m.name!=null&&Yo(d,m),sa(T,v);var F=sa(T,m);for(v=0;v<k.length;v+=2){var Q=k[v],X=k[v+1];Q==="style"?na(d,X):Q==="dangerouslySetInnerHTML"?ea(d,X):Q==="children"?$r(d,X):se(d,Q,X,F)}switch(T){case"input":Xo(d,m);break;case"textarea":Ls(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?gr(d,!!m.multiple,ne,!1):K!==!!m.multiple&&(m.defaultValue!=null?gr(d,!!m.multiple,m.defaultValue,!0):gr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Pa]=m}catch(ce){et(r,r.return,ce)}}break;case 6:if(Fn(s,r),nr(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,m=r.memoizedProps;try{d.nodeValue=m}catch(ce){et(r,r.return,ce)}}break;case 3:if(Fn(s,r),nr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(s.containerInfo)}catch(ce){et(r,r.return,ce)}break;case 4:Fn(s,r),nr(r);break;case 13:Fn(s,r),nr(r),d=r.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(md=$e())),c&4&&yg(r);break;case 22:if(Q=a!==null&&a.memoizedState!==null,r.mode&1?(bt=(F=bt)||Q,Fn(s,r),bt=F):Fn(s,r),nr(r),c&8192){if(F=r.memoizedState!==null,(r.stateNode.isHidden=F)&&!Q&&(r.mode&1)!==0)for(oe=r,Q=r.child;Q!==null;){for(X=oe=Q;oe!==null;){switch(K=oe,ne=K.child,K.tag){case 0:case 11:case 14:case 15:Ua(4,K,K.return);break;case 1:Eo(K,K.return);var ue=K.stateNode;if(typeof ue.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){et(c,a,ce)}}break;case 5:Eo(K,K.return);break;case 22:if(K.memoizedState!==null){wg(X);continue}}ne!==null?(ne.return=K,oe=ne):wg(X)}Q=Q.sibling}e:for(Q=null,X=r;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,F?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(T=X.stateNode,k=X.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,T.style.display=ta("display",v))}catch(ce){et(r,r.return,ce)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=F?"":X.memoizedProps}catch(ce){et(r,r.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Fn(s,r),nr(r),c&4&&yg(r);break;case 21:break;default:Fn(s,r),nr(r)}}function nr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(pg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&($r(d,""),c.flags&=-33);var m=mg(r);dd(r,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=mg(r);hd(r,T,v);break;default:throw Error(t(161))}}catch(k){et(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function jI(r,s,a){oe=r,vg(r)}function vg(r,s,a){for(var c=(r.mode&1)!==0;oe!==null;){var d=oe,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Pu;if(!v){var T=d.alternate,k=T!==null&&T.memoizedState!==null||bt;T=Pu;var F=bt;if(Pu=v,(bt=k)&&!F)for(oe=d;oe!==null;)v=oe,k=v.child,v.tag===22&&v.memoizedState!==null?Ig(d):k!==null?(k.return=v,oe=k):Ig(d);for(;m!==null;)oe=m,vg(m),m=m.sibling;oe=d,Pu=T,bt=F}Eg(r)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,oe=m):Eg(r)}}function Eg(r){for(;oe!==null;){var s=oe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:bt||ku(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!bt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&ym(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}ym(s,v,a)}break;case 5:var T=s.stateNode;if(a===null&&s.flags&4){a=T;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var F=s.alternate;if(F!==null){var Q=F.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Vn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||s.flags&512&&cd(s)}catch(K){et(s,s.return,K)}}if(s===r){oe=null;break}if(a=s.sibling,a!==null){a.return=s.return,oe=a;break}oe=s.return}}function wg(r){for(;oe!==null;){var s=oe;if(s===r){oe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,oe=a;break}oe=s.return}}function Ig(r){for(;oe!==null;){var s=oe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{ku(4,s)}catch(k){et(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(k){et(s,d,k)}}var m=s.return;try{cd(s)}catch(k){et(s,m,k)}break;case 5:var v=s.return;try{cd(s)}catch(k){et(s,v,k)}}}catch(k){et(s,s.return,k)}if(s===r){oe=null;break}var T=s.sibling;if(T!==null){T.return=s.return,oe=T;break}oe=s.return}}var $I=Math.ceil,Nu=Ee.ReactCurrentDispatcher,fd=Ee.ReactCurrentOwner,vn=Ee.ReactCurrentBatchConfig,xe=0,Et=null,at=null,Rt=0,un=0,wo=ti(0),mt=0,Ba=null,ss=0,Du=0,pd=0,za=null,Xt=null,md=0,Io=1/0,Dr=null,Vu=!1,gd=null,ai=null,Ou=!1,li=null,xu=0,ja=0,yd=null,Lu=-1,Mu=0;function Wt(){return(xe&6)!==0?$e():Lu!==-1?Lu:Lu=$e()}function ui(r){return(r.mode&1)===0?1:(xe&2)!==0&&Rt!==0?Rt&-Rt:RI.transition!==null?(Mu===0&&(Mu=Gi()),Mu):(r=ke,r!==0||(r=window.event,r=r===void 0?16:ga(r.type)),r)}function Un(r,s,a,c){if(50<ja)throw ja=0,yd=null,Error(t(185));Gr(r,a,c),((xe&2)===0||r!==Et)&&(r===Et&&((xe&2)===0&&(Du|=a),mt===4&&ci(r,Rt)),Jt(r,c),a===1&&xe===0&&(s.mode&1)===0&&(Io=$e()+500,cu&&ri()))}function Jt(r,s){var a=r.callbackNode;vr(r,s);var c=Hi(r,r===Et?Rt:0);if(c===0)a!==null&&ha(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ha(a),s===1)r.tag===0?AI(Sg.bind(null,r)):lm(Sg.bind(null,r)),wI(function(){(xe&6)===0&&ri()}),a=null;else{switch(Qr(c)){case 1:a=qi;break;case 4:a=qr;break;case 16:a=dn;break;case 536870912:a=Ml;break;default:a=dn}a=Vg(a,Tg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Tg(r,s){if(Lu=-1,Mu=0,(xe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(To()&&r.callbackNode!==a)return null;var c=Hi(r,r===Et?Rt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=bu(r,c);else{s=c;var d=xe;xe|=2;var m=Rg();(Et!==r||Rt!==s)&&(Dr=null,Io=$e()+500,as(r,s));do try{HI();break}catch(T){Ag(r,T)}while(!0);Lh(),Nu.current=m,xe=d,at!==null?s=0:(Et=null,Rt=0,s=mt)}if(s!==0){if(s===2&&(d=rn(r),d!==0&&(c=d,s=_d(r,d))),s===1)throw a=Ba,as(r,0),ci(r,c),Jt(r,$e()),a;if(s===6)ci(r,c);else{if(d=r.current.alternate,(c&30)===0&&!qI(d)&&(s=bu(r,c),s===2&&(m=rn(r),m!==0&&(c=m,s=_d(r,m))),s===1))throw a=Ba,as(r,0),ci(r,c),Jt(r,$e()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ls(r,Xt,Dr);break;case 3:if(ci(r,c),(c&130023424)===c&&(s=md+500-$e(),10<s)){if(Hi(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Wt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Sh(ls.bind(null,r,Xt,Dr),s);break}ls(r,Xt,Dr);break;case 4:if(ci(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-jt(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*$I(c/1960))-c,10<c){r.timeoutHandle=Sh(ls.bind(null,r,Xt,Dr),c);break}ls(r,Xt,Dr);break;case 5:ls(r,Xt,Dr);break;default:throw Error(t(329))}}}return Jt(r,$e()),r.callbackNode===a?Tg.bind(null,r):null}function _d(r,s){var a=za;return r.current.memoizedState.isDehydrated&&(as(r,s).flags|=256),r=bu(r,s),r!==2&&(s=Xt,Xt=a,s!==null&&vd(s)),r}function vd(r){Xt===null?Xt=r:Xt.push.apply(Xt,r)}function qI(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!xn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ci(r,s){for(s&=~pd,s&=~Du,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-jt(s),c=1<<a;r[a]=-1,s&=~c}}function Sg(r){if((xe&6)!==0)throw Error(t(327));To();var s=Hi(r,0);if((s&1)===0)return Jt(r,$e()),null;var a=bu(r,s);if(r.tag!==0&&a===2){var c=rn(r);c!==0&&(s=c,a=_d(r,c))}if(a===1)throw a=Ba,as(r,0),ci(r,s),Jt(r,$e()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ls(r,Xt,Dr),Jt(r,$e()),null}function Ed(r,s){var a=xe;xe|=1;try{return r(s)}finally{xe=a,xe===0&&(Io=$e()+500,cu&&ri())}}function os(r){li!==null&&li.tag===0&&(xe&6)===0&&To();var s=xe;xe|=1;var a=vn.transition,c=ke;try{if(vn.transition=null,ke=1,r)return r()}finally{ke=c,vn.transition=a,xe=s,(xe&6)===0&&ri()}}function wd(){un=wo.current,Ge(wo)}function as(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,EI(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Nh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&lu();break;case 3:_o(),Ge(Kt),Ge(xt),Wh();break;case 5:$h(c);break;case 4:_o();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:Mh(c.type._context);break;case 22:case 23:wd()}a=a.return}if(Et=r,at=r=hi(r.current,null),Rt=un=s,mt=0,Ba=null,pd=Du=ss=0,Xt=za=null,ns!==null){for(s=0;s<ns.length;s++)if(a=ns[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}ns=null}return r}function Ag(r,s){do{var a=at;try{if(Lh(),wu.current=Au,Iu){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Iu=!1}if(is=0,vt=pt=Je=null,xa=!1,La=0,fd.current=null,a===null||a.return===null){mt=1,Ba=s,at=null;break}e:{var m=r,v=a.return,T=a,k=s;if(s=Rt,T.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var F=k,Q=T,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ne=Ym(v);if(ne!==null){ne.flags&=-257,Xm(ne,v,T,m,s),ne.mode&1&&Qm(m,F,s),s=ne,k=F;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if((s&1)===0){Qm(m,F,s),Id();break e}k=Error(t(426))}}else if(Ye&&T.mode&1){var it=Ym(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Xm(it,v,T,m,s),Oh(vo(k,T));break e}}m=k=vo(k,T),mt!==4&&(mt=2),za===null?za=[m]:za.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var M=Gm(m,k,s);gm(m,M);break e;case 1:T=k;var N=m.type,b=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ai===null||!ai.has(b)))){m.flags|=65536,s&=-s,m.lanes|=s;var J=Km(m,T,s);gm(m,J);break e}}m=m.return}while(m!==null)}Pg(a)}catch(he){s=he,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function Rg(){var r=Nu.current;return Nu.current=Au,r===null?Au:r}function Id(){(mt===0||mt===3||mt===2)&&(mt=4),Et===null||(ss&268435455)===0&&(Du&268435455)===0||ci(Et,Rt)}function bu(r,s){var a=xe;xe|=2;var c=Rg();(Et!==r||Rt!==s)&&(Dr=null,as(r,s));do try{WI();break}catch(d){Ag(r,d)}while(!0);if(Lh(),xe=a,Nu.current=c,at!==null)throw Error(t(261));return Et=null,Rt=0,mt}function WI(){for(;at!==null;)Cg(at)}function HI(){for(;at!==null&&!xl();)Cg(at)}function Cg(r){var s=Dg(r.alternate,r,un);r.memoizedProps=r.pendingProps,s===null?Pg(r):at=s,fd.current=null}function Pg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=FI(a,s,un),a!==null){at=a;return}}else{if(a=UI(a,s),a!==null){a.flags&=32767,at=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{mt=6,at=null;return}}if(s=s.sibling,s!==null){at=s;return}at=s=r}while(s!==null);mt===0&&(mt=5)}function ls(r,s,a){var c=ke,d=vn.transition;try{vn.transition=null,ke=1,GI(r,s,a,c)}finally{vn.transition=d,ke=c}return null}function GI(r,s,a,c){do To();while(li!==null);if((xe&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(je(r,m),r===Et&&(at=Et=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ou||(Ou=!0,Vg(dn,function(){return To(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=vn.transition,vn.transition=null;var v=ke;ke=1;var T=xe;xe|=4,fd.current=null,zI(r,a),_g(a,r),fI(Ih),Xr=!!wh,Ih=wh=null,r.current=a,jI(a),sh(),xe=T,ke=v,vn.transition=m}else r.current=a;if(Ou&&(Ou=!1,li=r,xu=d),m=r.pendingLanes,m===0&&(ai=null),bl(a.stateNode),Jt(r,$e()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Vu)throw Vu=!1,r=gd,gd=null,r;return(xu&1)!==0&&r.tag!==0&&To(),m=r.pendingLanes,(m&1)!==0?r===yd?ja++:(ja=0,yd=r):ja=0,ri(),null}function To(){if(li!==null){var r=Qr(xu),s=vn.transition,a=ke;try{if(vn.transition=null,ke=16>r?16:r,li===null)var c=!1;else{if(r=li,li=null,xu=0,(xe&6)!==0)throw Error(t(331));var d=xe;for(xe|=4,oe=r.current;oe!==null;){var m=oe,v=m.child;if((oe.flags&16)!==0){var T=m.deletions;if(T!==null){for(var k=0;k<T.length;k++){var F=T[k];for(oe=F;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:Ua(8,Q,m)}var X=Q.child;if(X!==null)X.return=Q,oe=X;else for(;oe!==null;){Q=oe;var K=Q.sibling,ne=Q.return;if(fg(Q),Q===F){oe=null;break}if(K!==null){K.return=ne,oe=K;break}oe=ne}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}oe=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,oe=v;else e:for(;oe!==null;){if(m=oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ua(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,oe=M;break e}oe=m.return}}var N=r.current;for(oe=N;oe!==null;){v=oe;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,oe=b;else e:for(v=N;oe!==null;){if(T=oe,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:ku(9,T)}}catch(he){et(T,T.return,he)}if(T===v){oe=null;break e}var J=T.sibling;if(J!==null){J.return=T.return,oe=J;break e}oe=T.return}}if(xe=d,ri(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Wi,r)}catch{}c=!0}return c}finally{ke=a,vn.transition=s}}return!1}function kg(r,s,a){s=vo(a,s),s=Gm(r,s,1),r=si(r,s,1),s=Wt(),r!==null&&(Gr(r,1,s),Jt(r,s))}function et(r,s,a){if(r.tag===3)kg(r,r,a);else for(;s!==null;){if(s.tag===3){kg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ai===null||!ai.has(c))){r=vo(a,r),r=Km(s,r,1),s=si(s,r,1),r=Wt(),s!==null&&(Gr(s,1,r),Jt(s,r));break}}s=s.return}}function KI(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,Et===r&&(Rt&a)===a&&(mt===4||mt===3&&(Rt&130023424)===Rt&&500>$e()-md?as(r,0):pd|=a),Jt(r,s)}function Ng(r,s){s===0&&((r.mode&1)===0?s=1:(s=Ws,Ws<<=1,(Ws&130023424)===0&&(Ws=4194304)));var a=Wt();r=Pr(r,s),r!==null&&(Gr(r,s,a),Jt(r,a))}function QI(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Ng(r,a)}function YI(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Ng(r,a)}var Dg;Dg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Kt.current)Yt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Yt=!1,bI(r,s,a);Yt=(r.flags&131072)!==0}else Yt=!1,Ye&&(s.flags&1048576)!==0&&um(s,du,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Cu(r,s),r=s.pendingProps;var d=co(s,xt.current);go(s,a),d=Kh(null,s,c,r,d,a);var m=Qh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qt(c)?(m=!0,uu(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Uh(s),d.updater=_u,s.stateNode=d,d._reactInternals=s,zh(s,c,r,a),s=rd(null,s,c,!0,m,a)):(s.tag=0,Ye&&m&&kh(s),qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Cu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=JI(c),r=Mn(c,r),d){case 0:s=nd(null,s,c,r,a);break e;case 1:s=rg(null,s,c,r,a);break e;case 11:s=Jm(null,s,c,r,a);break e;case 14:s=Zm(null,s,c,Mn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),nd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),rg(r,s,c,d,a);case 3:e:{if(ig(s),r===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,mm(r,s),yu(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=vo(Error(t(423)),s),s=sg(r,s,c,a,d);break e}else if(c!==d){d=vo(Error(t(424)),s),s=sg(r,s,c,a,d);break e}else for(ln=ei(s.stateNode.containerInfo.firstChild),an=s,Ye=!0,Ln=null,a=Sm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(po(),c===d){s=Nr(r,s,a);break e}qt(r,s,c,a)}s=s.child}return s;case 5:return Am(s),r===null&&Vh(s),c=s.type,d=s.pendingProps,m=r!==null?r.memoizedProps:null,v=d.children,Th(c,d)?v=null:m!==null&&Th(c,m)&&(s.flags|=32),ng(r,s),qt(r,s,v,a),s.child;case 6:return r===null&&Vh(s),null;case 13:return og(r,s,a);case 4:return jh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=yo(s,null,c,a):qt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),Jm(r,s,c,d,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,qe(pu,c._currentValue),c._currentValue=v,m!==null)if(xn(m.value,v)){if(m.children===d.children&&!Kt.current){s=Nr(r,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var T=m.dependencies;if(T!==null){v=m.child;for(var k=T.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=kr(-1,a&-a),k.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var Q=F.pending;Q===null?k.next=k:(k.next=Q.next,Q.next=k),F.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),bh(m.return,a,s),T.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),bh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}qt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,go(s,a),d=yn(d),c=c(d),s.flags|=1,qt(r,s,c,a),s.child;case 14:return c=s.type,d=Mn(c,s.pendingProps),d=Mn(c.type,d),Zm(r,s,c,d,a);case 15:return eg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),Cu(r,s),s.tag=1,Qt(c)?(r=!0,uu(s)):r=!1,go(s,a),Em(s,c,d),zh(s,c,d,a),rd(null,s,c,!0,r,a);case 19:return lg(r,s,a);case 22:return tg(r,s,a)}throw Error(t(156,s.tag))};function Vg(r,s){return $s(r,s)}function XI(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(r,s,a,c){return new XI(r,s,a,c)}function Td(r){return r=r.prototype,!(!r||!r.isReactComponent)}function JI(r){if(typeof r=="function")return Td(r)?1:0;if(r!=null){if(r=r.$$typeof,r===x)return 11;if(r===Dt)return 14}return 2}function hi(r,s){var a=r.alternate;return a===null?(a=En(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Fu(r,s,a,c,d,m){var v=2;if(c=r,typeof r=="function")Td(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case V:return us(a.children,d,m,s);case S:v=8,d|=8;break;case C:return r=En(12,a,s,d|2),r.elementType=C,r.lanes=m,r;case R:return r=En(13,a,s,d),r.elementType=R,r.lanes=m,r;case nt:return r=En(19,a,s,d),r.elementType=nt,r.lanes=m,r;case ze:return Uu(a,d,m,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:v=10;break e;case O:v=9;break e;case x:v=11;break e;case Dt:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=En(v,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function us(r,s,a,c){return r=En(7,r,c,s),r.lanes=a,r}function Uu(r,s,a,c){return r=En(22,r,c,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function Sd(r,s,a){return r=En(6,r,null,s),r.lanes=a,r}function Ad(r,s,a){return s=En(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function ZI(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Rd(r,s,a,c,d,m,v,T,k){return r=new ZI(r,s,a,T,k),s===1?(s=1,m===!0&&(s|=8)):s=0,m=En(3,null,null,s),r.current=m,m.stateNode=r,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uh(m),r}function eT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Og(r){if(!r)return ni;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Qt(a))return om(r,a,s)}return s}function xg(r,s,a,c,d,m,v,T,k){return r=Rd(a,c,!0,r,d,m,v,T,k),r.context=Og(null),a=r.current,c=Wt(),d=ui(a),m=kr(c,d),m.callback=s??null,si(a,m,d),r.current.lanes=d,Gr(r,d,c),Jt(r,c),r}function Bu(r,s,a,c){var d=s.current,m=Wt(),v=ui(d);return a=Og(a),s.context===null?s.context=a:s.pendingContext=a,s=kr(m,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=si(d,s,v),r!==null&&(Un(r,d,v,m),gu(r,d,v)),v}function zu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Lg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Cd(r,s){Lg(r,s),(r=r.alternate)&&Lg(r,s)}function tT(){return null}var Mg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Pd(r){this._internalRoot=r}ju.prototype.render=Pd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Bu(r,s,null,null)},ju.prototype.unmount=Pd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;os(function(){Bu(null,r,null,null)}),s[Sr]=null}};function ju(r){this._internalRoot=r}ju.prototype.unstable_scheduleHydration=function(r){if(r){var s=jl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Qn.length&&s!==0&&s<Qn[a].priority;a++);Qn.splice(a,0,r),a===0&&Wl(r)}};function kd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function $u(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function bg(){}function nT(r,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var F=zu(v);m.call(F)}}var v=xg(s,c,r,0,null,!1,!1,"",bg);return r._reactRootContainer=v,r[Sr]=v.current,Ra(r.nodeType===8?r.parentNode:r),os(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=zu(k);T.call(F)}}var k=Rd(r,0,!1,null,null,!1,!1,"",bg);return r._reactRootContainer=k,r[Sr]=k.current,Ra(r.nodeType===8?r.parentNode:r),os(function(){Bu(s,k,a,c)}),k}function qu(r,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var T=d;d=function(){var k=zu(v);T.call(k)}}Bu(s,v,r,d)}else v=nT(a,s,r,d,c);return zu(v)}Bl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Wr(s.pendingLanes);a!==0&&(Kr(s,a|1),Jt(s,$e()),(xe&6)===0&&(Io=$e()+500,ri()))}break;case 13:os(function(){var c=Pr(r,1);if(c!==null){var d=Wt();Un(c,r,1,d)}}),Cd(r,1)}},Hs=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=Wt();Un(s,r,134217728,a)}Cd(r,134217728)}},zl=function(r){if(r.tag===13){var s=ui(r),a=Pr(r,s);if(a!==null){var c=Wt();Un(a,r,s,c)}Cd(r,s)}},jl=function(){return ke},$l=function(r,s){var a=ke;try{return ke=r,s()}finally{ke=a}},bs=function(r,s,a){switch(s){case"input":if(Xo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=au(c);if(!d)throw Error(t(90));Ds(c),Xo(c,d)}}}break;case"textarea":Ls(r,a);break;case"select":s=a.value,s!=null&&gr(r,!!a.multiple,s,!1)}},Bi=Ed,aa=os;var rT={usingClientEntryPoint:!1,Events:[ka,lo,au,Gn,oa,Ed]},$a={findFiberByHostInstance:Ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iT={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ca(r),r===null?null:r.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||tT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{Wi=Wu.inject(iT),nn=Wu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT,Zt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(s))throw Error(t(200));return eT(r,s,null,a)},Zt.createRoot=function(r,s){if(!kd(r))throw Error(t(299));var a=!1,c="",d=Mg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Rd(r,1,!1,null,null,a,!1,c,d),r[Sr]=s.current,Ra(r.nodeType===8?r.parentNode:r),new Pd(s)},Zt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ca(s),r=r===null?null:r.stateNode,r},Zt.flushSync=function(r){return os(r)},Zt.hydrate=function(r,s,a){if(!$u(s))throw Error(t(200));return qu(null,r,s,!0,a)},Zt.hydrateRoot=function(r,s,a){if(!kd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Mg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=xg(s,null,r,1,a??null,d,!1,m,v),r[Sr]=s.current,Ra(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new ju(s)},Zt.render=function(r,s,a){if(!$u(s))throw Error(t(200));return qu(null,r,s,!1,a)},Zt.unmountComponentAtNode=function(r){if(!$u(r))throw Error(t(40));return r._reactRootContainer?(os(function(){qu(null,null,r,!1,function(){r._reactRootContainer=null,r[Sr]=null})}),!0):!1},Zt.unstable_batchedUpdates=Ed,Zt.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!$u(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return qu(r,s,a,!1,c)},Zt.version="18.2.0-next-9e3b772b8-20220608",Zt}var $g;function z_(){if($g)return Dd.exports;$g=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Dd.exports=dT(),Dd.exports}var qg;function fT(){if(qg)return Hu;qg=1;var n=z_();return Hu.createRoot=n.createRoot,Hu.hydrateRoot=n.hydrateRoot,Hu}var pT=fT();z_();/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},il.apply(this,arguments)}var _i;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(_i||(_i={}));const Wg="popstate";function mT(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return ef("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:uc(o)}return yT(e,t,null,n)}function tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Vf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gT(){return Math.random().toString(36).substr(2,8)}function Hg(n,e){return{usr:n.state,key:n.key,idx:e}}function ef(n,e,t,i){return t===void 0&&(t=null),il({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?zo(e):e,{state:t,key:e&&e.key||i||gT()})}function uc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function zo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function yT(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=_i.Pop,g=null,y=E();y==null&&(y=0,h.replaceState(il({},h.state,{idx:y}),""));function E(){return(h.state||{idx:null}).idx}function I(){f=_i.Pop;let j=E(),te=j==null?null:j-y;y=j,g&&g({action:f,location:q.location,delta:te})}function A(j,te){f=_i.Push;let ae=ef(q.location,j,te);y=E()+1;let se=Hg(ae,y),Ee=q.createHref(ae);try{h.pushState(se,"",Ee)}catch(Ve){if(Ve instanceof DOMException&&Ve.name==="DataCloneError")throw Ve;o.location.assign(Ee)}l&&g&&g({action:f,location:q.location,delta:1})}function z(j,te){f=_i.Replace;let ae=ef(q.location,j,te);y=E();let se=Hg(ae,y),Ee=q.createHref(ae);h.replaceState(se,"",Ee),l&&g&&g({action:f,location:q.location,delta:0})}function $(j){let te=o.location.origin!=="null"?o.location.origin:o.location.href,ae=typeof j=="string"?j:uc(j);return tt(te,"No window.location.(origin|href) available to create URL for href: "+ae),new URL(ae,te)}let q={get action(){return f},get location(){return n(o,h)},listen(j){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Wg,I),g=j,()=>{o.removeEventListener(Wg,I),g=null}},createHref(j){return e(o,j)},createURL:$,encodeLocation(j){let te=$(j);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:A,replace:z,go(j){return h.go(j)}};return q}var Gg;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Gg||(Gg={}));function _T(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?zo(e):e,o=sl(i.pathname||"/",t);if(o==null)return null;let l=j_(n);vT(l);let h=null;for(let f=0;h==null&&f<l.length;++f)h=PT(l[f],NT(o));return h}function j_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(tt(g.relativePath.startsWith(i),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(i.length));let y=Ei([i,g.relativePath]),E=t.concat(g);l.children&&l.children.length>0&&(tt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),j_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:RT(y,l.index),routesMeta:E})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of $_(l.path))o(l,h,g)}),e}function $_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=$_(i.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>n.startsWith("/")&&g===""?"/":g)}function vT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:CT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const ET=/^:\w+$/,wT=3,IT=2,TT=1,ST=10,AT=-2,Kg=n=>n==="*";function RT(n,e){let t=n.split("/"),i=t.length;return t.some(Kg)&&(i+=AT),e&&(i+=IT),t.filter(o=>!Kg(o)).reduce((o,l)=>o+(ET.test(l)?wT:l===""?TT:ST),i)}function CT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function PT(n,e){let{routesMeta:t}=n,i={},o="/",l=[];for(let h=0;h<t.length;++h){let f=t[h],g=h===t.length-1,y=o==="/"?e:e.slice(o.length)||"/",E=tf({path:f.relativePath,caseSensitive:f.caseSensitive,end:g},y);if(!E)return null;Object.assign(i,E.params);let I=f.route;l.push({params:i,pathname:Ei([o,E.pathname]),pathnameBase:xT(Ei([o,E.pathnameBase])),route:I}),E.pathnameBase!=="/"&&(o=Ei([o,E.pathnameBase]))}return l}function tf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=kT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,E,I)=>{let{paramName:A,isOptional:z}=E;if(A==="*"){let q=f[I]||"";h=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const $=f[I];return z&&!$?y[A]=void 0:y[A]=DT($||"",A),y},{}),pathname:l,pathnameBase:h,pattern:n}}function kT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Vf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(h,f,g)=>(i.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function NT(n){try{return decodeURI(n)}catch(e){return Vf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function DT(n,e){try{return decodeURIComponent(n)}catch(t){return Vf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function sl(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function VT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?zo(n):n;return{pathname:t?t.startsWith("/")?t:OT(t,e):e,search:LT(i),hash:MT(o)}}function OT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function xd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function q_(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function W_(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=zo(n):(o=il({},n),tt(!o.pathname||!o.pathname.includes("?"),xd("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),xd("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),xd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else if(i){let I=e[e.length-1].replace(/^\//,"").split("/");if(h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),I.pop();o.pathname=A.join("/")}f="/"+I.join("/")}else{let I=e.length-1;if(h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),I-=1;o.pathname=A.join("/")}f=I>=0?e[I]:"/"}let g=VT(o,f),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(y||E)&&(g.pathname+="/"),g}const Ei=n=>n.join("/").replace(/\/\/+/g,"/"),xT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),LT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,MT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const H_=["post","put","patch","delete"];new Set(H_);const FT=["get",...H_];new Set(FT);/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cc(){return cc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},cc.apply(this,arguments)}const Oc=Y.createContext(null),G_=Y.createContext(null),Is=Y.createContext(null),xc=Y.createContext(null),Oi=Y.createContext({outlet:null,matches:[],isDataRoute:!1}),K_=Y.createContext(null);function UT(n,e){let{relative:t}=e===void 0?{}:e;gl()||tt(!1);let{basename:i,navigator:o}=Y.useContext(Is),{hash:l,pathname:h,search:f}=Lc(n,{relative:t}),g=h;return i!=="/"&&(g=h==="/"?i:Ei([i,h])),o.createHref({pathname:g,search:f,hash:l})}function gl(){return Y.useContext(xc)!=null}function yl(){return gl()||tt(!1),Y.useContext(xc).location}function Q_(n){Y.useContext(Is).static||Y.useLayoutEffect(n)}function Of(){let{isDataRoute:n}=Y.useContext(Oi);return n?JT():BT()}function BT(){gl()||tt(!1);let n=Y.useContext(Oc),{basename:e,navigator:t}=Y.useContext(Is),{matches:i}=Y.useContext(Oi),{pathname:o}=yl(),l=JSON.stringify(q_(i).map(g=>g.pathnameBase)),h=Y.useRef(!1);return Q_(()=>{h.current=!0}),Y.useCallback(function(g,y){if(y===void 0&&(y={}),!h.current)return;if(typeof g=="number"){t.go(g);return}let E=W_(g,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Ei([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}function Y_(){let{matches:n}=Y.useContext(Oi),e=n[n.length-1];return e?e.params:{}}function Lc(n,e){let{relative:t}=e===void 0?{}:e,{matches:i}=Y.useContext(Oi),{pathname:o}=yl(),l=JSON.stringify(q_(i).map(h=>h.pathnameBase));return Y.useMemo(()=>W_(n,JSON.parse(l),o,t==="path"),[n,l,o,t])}function zT(n,e){return jT(n,e)}function jT(n,e,t){gl()||tt(!1);let{navigator:i}=Y.useContext(Is),{matches:o}=Y.useContext(Oi),l=o[o.length-1],h=l?l.params:{};l&&l.pathname;let f=l?l.pathnameBase:"/";l&&l.route;let g=yl(),y;if(e){var E;let q=typeof e=="string"?zo(e):e;f==="/"||(E=q.pathname)!=null&&E.startsWith(f)||tt(!1),y=q}else y=g;let I=y.pathname||"/",A=f==="/"?I:I.slice(f.length)||"/",z=_T(n,{pathname:A}),$=GT(z&&z.map(q=>Object.assign({},q,{params:Object.assign({},h,q.params),pathname:Ei([f,i.encodeLocation?i.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?f:Ei([f,i.encodeLocation?i.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),o,t);return e&&$?Y.createElement(xc.Provider,{value:{location:cc({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:_i.Pop}},$):$}function $T(){let n=XT(),e=bT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:o},t):null,null)}const qT=Y.createElement($T,null);class WT extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?Y.createElement(Oi.Provider,{value:this.props.routeContext},Y.createElement(K_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HT(n){let{routeContext:e,match:t,children:i}=n,o=Y.useContext(Oc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Y.createElement(Oi.Provider,{value:e},i)}function GT(n,e,t){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n==null){var o;if((o=t)!=null&&o.errors)n=t.matches;else return null}let l=n,h=(i=t)==null?void 0:i.errors;if(h!=null){let f=l.findIndex(g=>g.route.id&&h?.[g.route.id]);f>=0||tt(!1),l=l.slice(0,Math.min(l.length,f+1))}return l.reduceRight((f,g,y)=>{let E=g.route.id?h?.[g.route.id]:null,I=null;t&&(I=g.route.errorElement||qT);let A=e.concat(l.slice(0,y+1)),z=()=>{let $;return E?$=I:g.route.Component?$=Y.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=f,Y.createElement(HT,{match:g,routeContext:{outlet:f,matches:A,isDataRoute:t!=null},children:$})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?Y.createElement(WT,{location:t.location,revalidation:t.revalidation,component:I,error:E,children:z(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):z()},null)}var X_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(X_||{}),J_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(J_||{});function KT(n){let e=Y.useContext(Oc);return e||tt(!1),e}function QT(n){let e=Y.useContext(G_);return e||tt(!1),e}function YT(n){let e=Y.useContext(Oi);return e||tt(!1),e}function Z_(n){let e=YT(),t=e.matches[e.matches.length-1];return t.route.id||tt(!1),t.route.id}function XT(){var n;let e=Y.useContext(K_),t=QT(),i=Z_();return e||((n=t.errors)==null?void 0:n[i])}function JT(){let{router:n}=KT(X_.UseNavigateStable),e=Z_(J_.UseNavigateStable),t=Y.useRef(!1);return Q_(()=>{t.current=!0}),Y.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,cc({fromRouteId:e},l)))},[n,e])}function rr(n){tt(!1)}function ZT(n){let{basename:e="/",children:t=null,location:i,navigationType:o=_i.Pop,navigator:l,static:h=!1}=n;gl()&&tt(!1);let f=e.replace(/^\/*/,"/"),g=Y.useMemo(()=>({basename:f,navigator:l,static:h}),[f,l,h]);typeof i=="string"&&(i=zo(i));let{pathname:y="/",search:E="",hash:I="",state:A=null,key:z="default"}=i,$=Y.useMemo(()=>{let q=sl(y,f);return q==null?null:{location:{pathname:q,search:E,hash:I,state:A,key:z},navigationType:o}},[f,y,E,I,A,z,o]);return $==null?null:Y.createElement(Is.Provider,{value:g},Y.createElement(xc.Provider,{children:t,value:$}))}function e0(n){let{children:e,location:t}=n;return zT(nf(e),t)}new Promise(()=>{});function nf(n,e){e===void 0&&(e=[]);let t=[];return Y.Children.forEach(n,(i,o)=>{if(!Y.isValidElement(i))return;let l=[...e,o];if(i.type===Y.Fragment){t.push.apply(t,nf(i.props.children,l));return}i.type!==rr&&tt(!1),!i.props.index||!i.props.children||tt(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=nf(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hc(){return hc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},hc.apply(this,arguments)}function ev(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function t0(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function n0(n,e){return n.button===0&&(!e||e==="_self")&&!t0(n)}const r0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],i0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],s0=Y.createContext({isTransitioning:!1}),o0="startTransition",Qg=uT[o0];function a0(n){let{basename:e,children:t,future:i,window:o}=n,l=Y.useRef();l.current==null&&(l.current=mT({window:o,v5Compat:!0}));let h=l.current,[f,g]=Y.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},E=Y.useCallback(I=>{y&&Qg?Qg(()=>g(I)):g(I)},[g,y]);return Y.useLayoutEffect(()=>h.listen(E),[h,E]),Y.createElement(ZT,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h})}const l0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",u0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ai=Y.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:g,to:y,preventScrollReset:E,unstable_viewTransition:I}=e,A=ev(e,r0),{basename:z}=Y.useContext(Is),$,q=!1;if(typeof y=="string"&&u0.test(y)&&($=y,l0))try{let se=new URL(window.location.href),Ee=y.startsWith("//")?new URL(se.protocol+y):new URL(y),Ve=sl(Ee.pathname,z);Ee.origin===se.origin&&Ve!=null?y=Ve+Ee.search+Ee.hash:q=!0}catch{}let j=UT(y,{relative:o}),te=h0(y,{replace:h,state:f,target:g,preventScrollReset:E,relative:o,unstable_viewTransition:I});function ae(se){i&&i(se),se.defaultPrevented||te(se)}return Y.createElement("a",hc({},A,{href:$||j,onClick:q||l?i:ae,ref:t,target:g}))}),qa=Y.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:h=!1,style:f,to:g,unstable_viewTransition:y,children:E}=e,I=ev(e,i0),A=Lc(g,{relative:I.relative}),z=yl(),$=Y.useContext(G_),{navigator:q}=Y.useContext(Is),j=$!=null&&d0(A)&&y===!0,te=q.encodeLocation?q.encodeLocation(A).pathname:A.pathname,ae=z.pathname,se=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;o||(ae=ae.toLowerCase(),se=se?se.toLowerCase():null,te=te.toLowerCase());const Ee=te!=="/"&&te.endsWith("/")?te.length-1:te.length;let Ve=ae===te||!h&&ae.startsWith(te)&&ae.charAt(Ee)==="/",Pe=se!=null&&(se===te||!h&&se.startsWith(te)&&se.charAt(te.length)==="/"),V={isActive:Ve,isPending:Pe,isTransitioning:j},S=Ve?i:void 0,C;typeof l=="function"?C=l(V):C=[l,Ve?"active":null,Pe?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let D=typeof f=="function"?f(V):f;return Y.createElement(Ai,hc({},I,{"aria-current":S,className:C,ref:t,style:D,to:g,unstable_viewTransition:y}),typeof E=="function"?E(V):E)});var rf;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(rf||(rf={}));var Yg;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Yg||(Yg={}));function c0(n){let e=Y.useContext(Oc);return e||tt(!1),e}function h0(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,unstable_viewTransition:f}=e===void 0?{}:e,g=Of(),y=yl(),E=Lc(n,{relative:h});return Y.useCallback(I=>{if(n0(I,t)){I.preventDefault();let A=i!==void 0?i:uc(y)===uc(E);g(n,{replace:A,state:o,preventScrollReset:l,relative:h,unstable_viewTransition:f})}},[y,g,E,i,o,t,n,l,h,f])}function d0(n,e){e===void 0&&(e={});let t=Y.useContext(s0);t==null&&tt(!1);let{basename:i}=c0(rf.useViewTransitionState),o=Lc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=sl(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=sl(t.nextLocation.pathname,i)||t.nextLocation.pathname;return tf(o.pathname,h)!=null||tf(o.pathname,l)!=null}const tv=Y.createContext();function _l(){return Y.useContext(tv)}function f0({children:n}){const[e,t]=Y.useState([]);function i(g,y){t(E=>E.find(A=>A.id===g.id)?E.map(A=>A.id===g.id?{...A,quantity:A.quantity+y}:A):[...E,{...g,quantity:y}])}function o(g){t(y=>y.filter(E=>E.id!==g))}function l(){t([])}const h=e.reduce((g,y)=>g+y.quantity,0),f=e.reduce((g,y)=>g+y.quantity*y.price,0);return U.createElement(tv.Provider,{value:{items:e,addItem:i,removeItem:o,clearCart:l,totalItems:h,totalPrice:f}},n)}function p0(){const{totalItems:n}=_l();return U.createElement(Ai,{to:"/cart",className:"cartwidget"},"🛒 ",U.createElement("span",{className:"badge"},n))}const m0=()=>{};var Xg={};/**
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
 */const nv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},g0=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,E=l>>2,I=(l&3)<<4|f>>4;let A=(f&15)<<2|y>>6,z=y&63;g||(z=64,h||(A=64)),i.push(t[E],t[I],t[A],t[z])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):g0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||I==null)throw new y0;const A=l<<2|f>>4;if(i.push(A),y!==64){const z=f<<4&240|y>>2;if(i.push(z),I!==64){const $=y<<6&192|I;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class y0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _0=function(n){const e=nv(n);return rv.encodeByteArray(e,!0)},dc=function(n){return _0(n).replace(/\./g,"")},iv=function(n){try{return rv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function v0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const E0=()=>v0().__FIREBASE_DEFAULTS__,w0=()=>{if(typeof process>"u"||typeof Xg>"u")return;const n=Xg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},I0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&iv(n[1]);return e&&JSON.parse(e)},Mc=()=>{try{return m0()||E0()||w0()||I0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sv=n=>Mc()?.emulatorHosts?.[n],T0=n=>{const e=sv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ov=()=>Mc()?.config,av=n=>Mc()?.[`_${n}`];/**
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
 */class S0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function jo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lv(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function A0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[dc(JSON.stringify(t)),dc(JSON.stringify(h)),""].join(".")}const Xa={};function R0(){const n={prod:[],emulator:[]};for(const e of Object.keys(Xa))Xa[e]?n.emulator.push(e):n.prod.push(e);return n}function C0(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Jg=!1;function uv(n,e){if(typeof window>"u"||typeof document>"u"||!jo(window.location.host)||Xa[n]===e||Xa[n]||Jg)return;Xa[n]=e;function t(A){return`__firebase__banner__${A}`}const i="__firebase__banner",l=R0().prod.length>0;function h(){const A=document.getElementById(i);A&&A.remove()}function f(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function g(A,z){A.setAttribute("width","24"),A.setAttribute("id",z),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function y(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Jg=!0,h()},A}function E(A,z){A.setAttribute("id",z),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function I(){const A=C0(i),z=t("text"),$=document.getElementById(z)||document.createElement("span"),q=t("learnmore"),j=document.getElementById(q)||document.createElement("a"),te=t("preprendIcon"),ae=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const se=A.element;f(se),E(j,q);const Ee=y();g(ae,te),se.append(ae,$,j,Ee),document.body.appendChild(se)}l?($.innerText="Preview backend disconnected.",ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function P0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function k0(){const n=Mc()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function N0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function D0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function V0(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function O0(){return!k0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hv(){try{return typeof indexedDB=="object"}catch{return!1}}function dv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}function x0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const L0="FirebaseError";class Wn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=L0,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?M0(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Wn(o,f,i)}}function M0(n,e){return n.replace(b0,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const b0=/\{\$([^}]+)}/g;function F0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ri(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Zg(l)&&Zg(h)){if(!Ri(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Zg(n){return n!==null&&typeof n=="object"}/**
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
 */function vl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Wa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ha(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function U0(n,e){const t=new B0(n,e);return t.subscribe.bind(t)}class B0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");z0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Ld),o.error===void 0&&(o.error=Ld),o.complete===void 0&&(o.complete=Ld);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ld(){}/**
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
 */const j0=1e3,$0=2,q0=14400*1e3,W0=.5;function ey(n,e=j0,t=$0){const i=e*Math.pow(t,n),o=Math.round(W0*i*(Math.random()-.5)*2);return Math.min(q0,i+o)}/**
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
 */function kt(n){return n&&n._delegate?n._delegate:n}class jn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class H0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new S0;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(K0(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:G0(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function G0(n){return n===ds?void 0:n}function K0(n){return n.instantiationMode==="EAGER"}/**
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
 */class Q0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new H0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ae||(Ae={}));const Y0={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},X0=Ae.INFO,J0={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},Z0=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=J0[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=X0,this._logHandler=Z0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const eS=(n,e)=>e.some(t=>n instanceof t);let ty,ny;function tS(){return ty||(ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nS(){return ny||(ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fv=new WeakMap,sf=new WeakMap,pv=new WeakMap,Md=new WeakMap,xf=new WeakMap;function rS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(wi(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&fv.set(t,n)}).catch(()=>{}),xf.set(e,n),e}function iS(n){if(sf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});sf.set(n,e)}let of={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sS(n){of=n(of)}function oS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(bd(this),e,...t);return pv.set(i,e.sort?e.sort():[e]),wi(i)}:nS().includes(n)?function(...e){return n.apply(bd(this),e),wi(fv.get(this))}:function(...e){return wi(n.apply(bd(this),e))}}function aS(n){return typeof n=="function"?oS(n):(n instanceof IDBTransaction&&iS(n),eS(n,tS())?new Proxy(n,of):n)}function wi(n){if(n instanceof IDBRequest)return rS(n);if(Md.has(n))return Md.get(n);const e=aS(n);return e!==n&&(Md.set(n,e),xf.set(e,n)),e}const bd=n=>xf.get(n);function mv(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=wi(h);return i&&h.addEventListener("upgradeneeded",g=>{i(wi(h.result),g.oldVersion,g.newVersion,wi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const lS=["get","getKey","getAll","getAllKeys","count"],uS=["put","add","delete","clear"],Fd=new Map;function ry(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fd.get(e))return Fd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=uS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||lS.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Fd.set(e,l),l}sS(n=>({...n,get:(e,t,i)=>ry(e,t)||n.get(e,t,i),has:(e,t)=>!!ry(e,t)||n.has(e,t)}));/**
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
 */class cS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function hS(n){return n.getComponent()?.type==="VERSION"}const af="@firebase/app",iy="0.14.2";/**
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
 */const Fr=new bc("@firebase/app"),dS="@firebase/app-compat",fS="@firebase/analytics-compat",pS="@firebase/analytics",mS="@firebase/app-check-compat",gS="@firebase/app-check",yS="@firebase/auth",_S="@firebase/auth-compat",vS="@firebase/database",ES="@firebase/data-connect",wS="@firebase/database-compat",IS="@firebase/functions",TS="@firebase/functions-compat",SS="@firebase/installations",AS="@firebase/installations-compat",RS="@firebase/messaging",CS="@firebase/messaging-compat",PS="@firebase/performance",kS="@firebase/performance-compat",NS="@firebase/remote-config",DS="@firebase/remote-config-compat",VS="@firebase/storage",OS="@firebase/storage-compat",xS="@firebase/firestore",LS="@firebase/ai",MS="@firebase/firestore-compat",bS="firebase",FS="12.2.0";/**
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
 */const lf="[DEFAULT]",US={[af]:"fire-core",[dS]:"fire-core-compat",[pS]:"fire-analytics",[fS]:"fire-analytics-compat",[gS]:"fire-app-check",[mS]:"fire-app-check-compat",[yS]:"fire-auth",[_S]:"fire-auth-compat",[vS]:"fire-rtdb",[ES]:"fire-data-connect",[wS]:"fire-rtdb-compat",[IS]:"fire-fn",[TS]:"fire-fn-compat",[SS]:"fire-iid",[AS]:"fire-iid-compat",[RS]:"fire-fcm",[CS]:"fire-fcm-compat",[PS]:"fire-perf",[kS]:"fire-perf-compat",[NS]:"fire-rc",[DS]:"fire-rc-compat",[VS]:"fire-gcs",[OS]:"fire-gcs-compat",[xS]:"fire-fst",[MS]:"fire-fst-compat",[LS]:"fire-vertex","fire-js":"fire-js",[bS]:"fire-js-all"};/**
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
 */const fc=new Map,BS=new Map,uf=new Map;function sy(n,e){try{n.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hr(n){const e=n.name;if(uf.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;uf.set(e,n);for(const t of fc.values())sy(t,n);for(const t of BS.values())sy(t,n);return!0}function Ss(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const zS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new Ts("app","Firebase",zS);/**
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
 */class jS{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
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
 */const $o=FS;function Lf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:lf,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ii.create("bad-app-name",{appName:String(o)});if(t||(t=ov()),!t)throw Ii.create("no-options");const l=fc.get(o);if(l){if(Ri(t,l.options)&&Ri(i,l.config))return l;throw Ii.create("duplicate-app",{appName:o})}const h=new Q0(o);for(const g of uf.values())h.addComponent(g);const f=new jS(t,i,h);return fc.set(o,f),f}function Mf(n=lf){const e=fc.get(n);if(!e&&n===lf&&ov())return Lf();if(!e)throw Ii.create("no-app",{appName:n});return e}function Sn(n,e,t){let i=US[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(h.join(" "));return}hr(new jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $S="firebase-heartbeat-database",qS=1,ol="firebase-heartbeat-store";let Ud=null;function gv(){return Ud||(Ud=mv($S,qS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ol)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ii.create("idb-open",{originalErrorMessage:n.message})})),Ud}async function WS(n){try{const t=(await gv()).transaction(ol),i=await t.objectStore(ol).get(yv(n));return await t.done,i}catch(e){if(e instanceof Wn)Fr.warn(e.message);else{const t=Ii.create("idb-get",{originalErrorMessage:e?.message});Fr.warn(t.message)}}}async function oy(n,e){try{const i=(await gv()).transaction(ol,"readwrite");await i.objectStore(ol).put(e,yv(n)),await i.done}catch(t){if(t instanceof Wn)Fr.warn(t.message);else{const i=Ii.create("idb-set",{originalErrorMessage:t?.message});Fr.warn(i.message)}}}function yv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const HS=1024,GS=30;class KS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new YS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ay();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>GS){const o=XS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Fr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ay(),{heartbeatsToSend:t,unsentEntries:i}=QS(this._heartbeatsCache.heartbeats),o=dc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Fr.warn(e),""}}}function ay(){return new Date().toISOString().substring(0,10)}function QS(n,e=HS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),ly(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ly(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class YS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hv()?dv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await WS(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return oy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return oy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ly(n){return dc(JSON.stringify({version:2,heartbeats:n})).length}function XS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function JS(n){hr(new jn("platform-logger",e=>new cS(e),"PRIVATE")),hr(new jn("heartbeat",e=>new KS(e),"PRIVATE")),Sn(af,iy,n),Sn(af,iy,"esm2020"),Sn("fire-js","")}JS("");var ZS="firebase",eA="12.2.1";/**
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
 */Sn(ZS,eA,"app");function _v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tA=_v,vv=new Ts("auth","Firebase",_v());/**
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
 */const pc=new bc("@firebase/auth");function nA(n,...e){pc.logLevel<=Ae.WARN&&pc.warn(`Auth (${$o}): ${n}`,...e)}function Zu(n,...e){pc.logLevel<=Ae.ERROR&&pc.error(`Auth (${$o}): ${n}`,...e)}/**
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
 */function $n(n,...e){throw bf(n,...e)}function sr(n,...e){return bf(n,...e)}function Ev(n,e,t){const i={...tA(),[e]:t};return new Ts("auth","Firebase",i).create(e,{appName:n.name})}function Lr(n){return Ev(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return vv.create(n,...e)}function ye(n,e,...t){if(!n)throw bf(e,...t)}function Or(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Zu(e),new Error(e)}function Ur(n,e){n||Or(e)}/**
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
 */function cf(){return typeof self<"u"&&self.location?.href||""}function rA(){return uy()==="http:"||uy()==="https:"}function uy(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function iA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rA()||cv()||"connection"in navigator)?navigator.onLine:!0}function sA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class El{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=P0()||D0()}get(){return iA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ff(n,e){Ur(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lA=new El(3e4,6e4);function xi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Li(n,e,t,i,o={}){return Iv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=vl({key:n.config.apiKey,...h}).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:g,...l};return N0()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&jo(n.emulatorConfig.host)&&(y.credentials="include"),wv.fetch()(await Tv(n,n.config.apiHost,t,f),y)})}async function Iv(n,e,t){n._canInitEmulator=!1;const i={...oA,...e};try{const o=new cA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Gu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gu(n,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Gu(n,"email-already-in-use",h);if(g==="USER_DISABLED")throw Gu(n,"user-disabled",h);const E=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Ev(n,E,y);$n(n,E)}}catch(o){if(o instanceof Wn)throw o;$n(n,"network-request-failed",{message:String(o)})}}async function wl(n,e,t,i,o={}){const l=await Li(n,e,t,i,o);return"mfaPendingCredential"in l&&$n(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Tv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?Ff(n.config,o):`${n.config.apiScheme}://${o}`;return aA.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function uA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(sr(this.auth,"network-request-failed")),lA.get())})}}function Gu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=sr(n,e,i);return o.customData._tokenResponse=t,o}function cy(n){return n!==void 0&&n.enterprise!==void 0}class hA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dA(n,e){return Li(n,"GET","/v2/recaptchaConfig",xi(n,e))}/**
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
 */async function fA(n,e){return Li(n,"POST","/v1/accounts:delete",e)}async function mc(n,e){return Li(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ja(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pA(n,e=!1){const t=kt(n),i=await t.getIdToken(e),o=Uf(i);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:Ja(Bd(o.auth_time)),issuedAtTime:Ja(Bd(o.iat)),expirationTime:Ja(Bd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Bd(n){return Number(n)*1e3}function Uf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const o=iv(t);return o?JSON.parse(o):(Zu("Failed to decode base64 JWT payload"),null)}catch(o){return Zu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function hy(n){const e=Uf(n);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function al(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Wn&&mA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function mA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class gA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ja(this.lastLoginAt),this.creationTime=Ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gc(n){const e=n.auth,t=await n.getIdToken(),i=await al(n,mc(e,{idToken:t}));ye(i?.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=o.providerUserInfo?.length?Sv(o.providerUserInfo):[],h=_A(n.providerData,l),f=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!h?.length,y=f?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new hf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function yA(n){const e=kt(n);await gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _A(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Sv(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function vA(n,e){const t=await Iv(n,{},async()=>{const i=vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await Tv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return n.emulatorConfig&&jo(n.emulatorConfig.host)&&(g.credentials="include"),wv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function EA(n,e){return Li(n,"POST","/v2/accounts:revokeToken",xi(n,e))}/**
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
 */class ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=hy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await vA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new ko;return i&&(ye(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ko,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
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
 */function fi(n,e){ye(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Bn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new gA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new hf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await al(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pA(this,e)}reload(){return yA(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await gc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await al(this,fA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:I,emailVerified:A,isAnonymous:z,providerData:$,stsTokenManager:q}=t;ye(I&&q,e,"internal-error");const j=ko.fromJSON(this.name,q);ye(typeof I=="string",e,"internal-error"),fi(i,e.name),fi(o,e.name),ye(typeof A=="boolean",e,"internal-error"),ye(typeof z=="boolean",e,"internal-error"),fi(l,e.name),fi(h,e.name),fi(f,e.name),fi(g,e.name),fi(y,e.name),fi(E,e.name);const te=new Bn({uid:I,auth:e,email:o,emailVerified:A,displayName:i,isAnonymous:z,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:j,createdAt:y,lastLoginAt:E});return $&&Array.isArray($)&&(te.providerData=$.map(ae=>({...ae}))),g&&(te._redirectEventId=g),te}static async _fromIdTokenResponse(e,t,i=!1){const o=new ko;o.updateFromServerResponse(t);const l=new Bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await gc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Sv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new ko;f.updateFromIdToken(i);const g=new Bn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new hf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,y),g}}/**
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
 */const dy=new Map;function xr(n){Ur(n instanceof Function,"Expected a class definition");let e=dy.get(n);return e?(Ur(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dy.set(n,e),e)}/**
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
 */class Av{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Av.type="NONE";const fy=Av;/**
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
 */function ec(n,e,t){return`firebase:${n}:${e}:${t}`}class No{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ec(this.userKey,o.apiKey,l),this.fullPersistenceKey=ec("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await mc(this.auth,{idToken:e}).catch(()=>{});return t?Bn._fromGetAccountInfoResponse(this.auth,t,e):null}return Bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new No(xr(fy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||xr(fy);const h=ec(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(h);if(E){let I;if(typeof E=="string"){const A=await mc(e,{idToken:E}).catch(()=>{});if(!A)break;I=await Bn._fromGetAccountInfoResponse(e,A,E)}else I=Bn._fromJSON(e,E);y!==l&&(f=I),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new No(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new No(l,e,i))}}/**
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
 */function py(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dv(e))return"Blackberry";if(Vv(e))return"Webos";if(Cv(e))return"Safari";if((e.includes("chrome/")||Pv(e))&&!e.includes("edge/"))return"Chrome";if(Nv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Rv(n=zt()){return/firefox\//i.test(n)}function Cv(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pv(n=zt()){return/crios\//i.test(n)}function kv(n=zt()){return/iemobile/i.test(n)}function Nv(n=zt()){return/android/i.test(n)}function Dv(n=zt()){return/blackberry/i.test(n)}function Vv(n=zt()){return/webos/i.test(n)}function Bf(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wA(n=zt()){return Bf(n)&&!!window.navigator?.standalone}function IA(){return V0()&&document.documentMode===10}function Ov(n=zt()){return Bf(n)||Nv(n)||Vv(n)||Dv(n)||/windows phone/i.test(n)||kv(n)}/**
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
 */function xv(n,e=[]){let t;switch(n){case"Browser":t=py(zt());break;case"Worker":t=`${py(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$o}/${i}`}/**
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
 */class TA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function SA(n,e={}){return Li(n,"GET","/v2/passwordPolicy",xi(n,e))}/**
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
 */const AA=6;class RA{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??AA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class CA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new my(this),this.idTokenSubscription=new my(this),this.beforeStateQueue=new TA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await No.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await mc(this,{idToken:e}),i=await Bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(wn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=i?._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(Lr(this));const t=e?kt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SA(this),t=new RA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await EA(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&nA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function As(n){return kt(n)}class my{constructor(e){this.auth=e,this.observer=null,this.addObserver=U0(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PA(n){Fc=n}function Lv(n){return Fc.loadJS(n)}function kA(){return Fc.recaptchaEnterpriseScript}function NA(){return Fc.gapiScript}function DA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class VA{constructor(){this.enterprise=new OA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class OA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const xA="recaptcha-enterprise",Mv="NO_RECAPTCHA";class LA{constructor(e){this.type=xA,this.auth=As(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{dA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new hA(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;cy(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(Mv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VA().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&cy(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=kA();g.length!==0&&(g+=f),Lv(g).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function gy(n,e,t,i=!1,o=!1){const l=new LA(n);let h;if(o)h=Mv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function df(n,e,t,i,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await gy(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await gy(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(l)})}/**
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
 */function MA(n,e){const t=Ss(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ri(l,e??{}))return o;$n(o,"already-initialized")}return t.initialize({options:e})}function bA(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(xr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function FA(n,e,t){const i=As(n);ye(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=bv(e),{host:h,port:f}=UA(e),g=f===null?"":`:${f}`,y={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ye(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ye(Ri(y,i.config.emulator)&&Ri(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,jo(h)?(lv(`${l}//${h}${g}`),uv("Auth",!0)):BA()}function bv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function UA(n){const e=bv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:yy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:yy(h)}}}function yy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function BA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class zf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function zA(n,e){return Li(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jA(n,e){return wl(n,"POST","/v1/accounts:signInWithPassword",xi(n,e))}/**
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
 */async function $A(n,e){return wl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}async function qA(n,e){return wl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}/**
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
 */class ll extends zf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ll(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ll(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return df(e,t,"signInWithPassword",jA);case"emailLink":return $A(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return df(e,i,"signUpPassword",zA);case"emailLink":return qA(e,{idToken:t,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Do(n,e){return wl(n,"POST","/v1/accounts:signInWithIdp",xi(n,e))}/**
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
 */const WA="http://localhost";class gs extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new gs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Do(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Do(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Do(e,t)}buildRequest(){const e={requestUri:WA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vl(t)}return e}}/**
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
 */function HA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GA(n){const e=Wa(Ha(n)).link,t=e?Wa(Ha(e)).deep_link_id:null,i=Wa(Ha(n)).deep_link_id;return(i?Wa(Ha(i)).link:null)||i||t||e||n}class jf{constructor(e){const t=Wa(Ha(e)),i=t.apiKey??null,o=t.oobCode??null,l=HA(t.mode??null);ye(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=GA(e);try{return new jf(t)}catch{return null}}}/**
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
 */class qo{constructor(){this.providerId=qo.PROVIDER_ID}static credential(e,t){return ll._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=jf.parseLink(t);return ye(i,"argument-error"),ll._fromEmailAndCode(e,i.code,i.tenantId)}}qo.PROVIDER_ID="password";qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Il extends Fv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pi extends Il{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
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
 */class mi extends Il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return mi.credential(t,i)}catch{return null}}}mi.GOOGLE_SIGN_IN_METHOD="google.com";mi.PROVIDER_ID="google.com";/**
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
 */class gi extends Il{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
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
 */class yi extends Il{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
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
 */async function KA(n,e){return wl(n,"POST","/v1/accounts:signUp",xi(n,e))}/**
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
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Bn._fromIdTokenResponse(e,i,o),h=_y(i);return new ys({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=_y(i);return new ys({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function _y(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class yc extends Wn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,yc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new yc(e,t,i,o)}}function Uv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?yc._fromErrorAndOperation(n,l,e,i):l})}async function QA(n,e,t=!1){const i=await al(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ys._forOperation(n,"link",i)}/**
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
 */async function YA(n,e,t=!1){const{auth:i}=n;if(wn(i.app))return Promise.reject(Lr(i));const o="reauthenticate";try{const l=await al(n,Uv(i,o,e,n),t);ye(l.idToken,i,"internal-error");const h=Uf(l.idToken);ye(h,i,"internal-error");const{sub:f}=h;return ye(n.uid===f,i,"user-mismatch"),ys._forOperation(n,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&$n(i,"user-mismatch"),l}}/**
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
 */async function Bv(n,e,t=!1){if(wn(n.app))return Promise.reject(Lr(n));const i="signIn",o=await Uv(n,i,e),l=await ys._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function XA(n,e){return Bv(As(n),e)}/**
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
 */async function zv(n){const e=As(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JA(n,e,t){if(wn(n.app))return Promise.reject(Lr(n));const i=As(n),h=await df(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KA).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&zv(n),g}),f=await ys._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function ZA(n,e,t){return wn(n.app)?Promise.reject(Lr(n)):XA(kt(n),qo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&zv(n),i})}function eR(n,e,t,i){return kt(n).onIdTokenChanged(e,t,i)}function tR(n,e,t){return kt(n).beforeAuthStateChanged(e,t)}function nR(n,e,t,i){return kt(n).onAuthStateChanged(e,t,i)}function rR(n){return kt(n).signOut()}const _c="__sak";/**
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
 */class jv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_c,"1"),this.storage.removeItem(_c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iR=1e3,sR=10;class $v extends jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);IA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,sR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},iR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$v.type="LOCAL";const oR=$v;/**
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
 */class qv extends jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qv.type="SESSION";const Wv=qv;/**
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
 */function aR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Uc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),g=await aR(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
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
 */function $f(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class lR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const y=$f("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(I){const A=I;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function or(){return window}function uR(n){or().location.href=n}/**
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
 */function Hv(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function cR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hR(){return navigator?.serviceWorker?.controller||null}function dR(){return Hv()?self:null}/**
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
 */const Gv="firebaseLocalStorageDb",fR=1,vc="firebaseLocalStorage",Kv="fbase_key";class Tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bc(n,e){return n.transaction([vc],e?"readwrite":"readonly").objectStore(vc)}function pR(){const n=indexedDB.deleteDatabase(Gv);return new Tl(n).toPromise()}function ff(){const n=indexedDB.open(Gv,fR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(vc,{keyPath:Kv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(vc)?e(i):(i.close(),await pR(),e(await ff()))})})}async function vy(n,e,t){const i=Bc(n,!0).put({[Kv]:e,value:t});return new Tl(i).toPromise()}async function mR(n,e){const t=Bc(n,!1).get(e),i=await new Tl(t).toPromise();return i===void 0?null:i.value}function Ey(n,e){const t=Bc(n,!0).delete(e);return new Tl(t).toPromise()}const gR=800,yR=3;class Qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ff(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>yR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(dR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await cR(),!this.activeServiceWorker)return;this.sender=new lR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ff();return await vy(e,_c,"1"),await Ey(e,_c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>vy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>mR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ey(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Bc(o,!1).getAll();return new Tl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qv.type="LOCAL";const _R=Qv;new El(3e4,6e4);/**
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
 */function vR(n,e){return e?xr(e):(ye(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class qf extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Do(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Do(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Do(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ER(n){return Bv(n.auth,new qf(n),n.bypassAuthState)}function wR(n){const{auth:e,user:t}=n;return ye(t,e,"internal-error"),YA(t,new qf(n),n.bypassAuthState)}async function IR(n){const{auth:e,user:t}=n;return ye(t,e,"internal-error"),QA(t,new qf(n),n.bypassAuthState)}/**
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
 */class Yv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ER;case"linkViaPopup":case"linkViaRedirect":return IR;case"reauthViaPopup":case"reauthViaRedirect":return wR;default:$n(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TR=new El(2e3,1e4);class Po extends Yv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Po.currentPopupAction&&Po.currentPopupAction.cancel(),Po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Po.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TR.get())};e()}}Po.currentPopupAction=null;/**
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
 */const SR="pendingRedirect",tc=new Map;class AR extends Yv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const i=await RR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RR(n,e){const t=kR(e),i=PR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function CR(n,e){tc.set(n._key(),e)}function PR(n){return xr(n._redirectPersistence)}function kR(n){return ec(SR,n.config.apiKey,n.name)}async function NR(n,e,t=!1){if(wn(n.app))return Promise.reject(Lr(n));const i=As(n),o=vR(i,e),h=await new AR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const DR=600*1e3;class VR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Xv(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(sr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DR&&this.cachedEventUids.clear(),this.cachedEventUids.has(wy(e))}saveEventToCache(e){this.cachedEventUids.add(wy(e)),this.lastProcessedEventTime=Date.now()}}function wy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xv({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function OR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xv(n);default:return!1}}/**
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
 */async function xR(n,e={}){return Li(n,"GET","/v1/projects",e)}/**
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
 */const LR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MR=/^https?/;async function bR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xR(n);for(const t of e)try{if(FR(t))return}catch{}$n(n,"unauthorized-domain")}function FR(n){const e=cf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!MR.test(t))return!1;if(LR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const UR=new El(3e4,6e4);function Iy(){const n=or().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BR(n){return new Promise((e,t)=>{function i(){Iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iy(),t(sr(n,"network-request-failed"))},timeout:UR.get()})}if(or().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(or().gapi?.load)i();else{const o=DA("iframefcb");return or()[o]=()=>{gapi.load?i():t(sr(n,"network-request-failed"))},Lv(`${NA()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw nc=null,e})}let nc=null;function zR(n){return nc=nc||BR(n),nc}/**
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
 */const jR=new El(5e3,15e3),$R="__/auth/iframe",qR="emulator/auth/iframe",WR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(n){const e=n.config;ye(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ff(e,qR):`https://${n.config.authDomain}/${$R}`,i={apiKey:e.apiKey,appName:n.name,v:$o},o=HR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${vl(i).slice(1)}`}async function KR(n){const e=await zR(n),t=or().gapi;return ye(t,n,"internal-error"),e.open({where:document.body,url:GR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=sr(n,"network-request-failed"),f=or().setTimeout(()=>{l(h)},jR.get());function g(){or().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const QR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,XR=600,JR="_blank",ZR="http://localhost";class Ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e1(n,e,t,i=YR,o=XR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...QR,width:i.toString(),height:o.toString(),top:l,left:h},y=zt().toLowerCase();t&&(f=Pv(y)?JR:t),Rv(y)&&(e=e||ZR,g.scrollbars="yes");const E=Object.entries(g).reduce((A,[z,$])=>`${A}${z}=${$},`,"");if(wA(y)&&f!=="_self")return t1(e||"",f),new Ty(null);const I=window.open(e||"",f,E);ye(I,n,"popup-blocked");try{I.focus()}catch{}return new Ty(I)}function t1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const n1="__/auth/handler",r1="emulator/auth/handler",i1=encodeURIComponent("fac");async function Sy(n,e,t,i,o,l){ye(n.config.authDomain,n,"auth-domain-config-required"),ye(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:$o,eventId:o};if(e instanceof Fv){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",F0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))h[E]=I}if(e instanceof Il){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await n._getAppCheckToken(),y=g?`#${i1}=${encodeURIComponent(g)}`:"";return`${s1(n)}?${vl(f).slice(1)}${y}`}function s1({config:n}){return n.emulator?Ff(n,r1):`https://${n.authDomain}/${n1}`}/**
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
 */const zd="webStorageSupport";class o1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wv,this._completeRedirectFn=NR,this._overrideRedirectResult=CR}async _openPopup(e,t,i,o){Ur(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await Sy(e,t,i,cf(),o);return e1(e,l,$f())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Sy(e,t,i,cf(),o);return uR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Ur(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await KR(e),i=new VR(e);return t.register("authEvent",o=>(ye(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zd,{type:zd},o=>{const l=o?.[0]?.[zd];l!==void 0&&t(!!l),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ov()||Cv()||Bf()}}const a1=o1;var Ay="@firebase/auth",Ry="1.11.0";/**
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
 */class l1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function u1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c1(n){hr(new jn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xv(n)},y=new CA(i,o,l,g);return bA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),hr(new jn("auth-internal",e=>{const t=As(e.getProvider("auth").getImmediate());return(i=>new l1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Ay,Ry,u1(n)),Sn(Ay,Ry,"esm2020")}/**
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
 */const h1=300,d1=av("authIdTokenMaxAge")||h1;let Cy=null;const f1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>d1)return;const o=t?.token;Cy!==o&&(Cy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function p1(n=Mf()){const e=Ss(n,"auth");if(e.isInitialized())return e.getImmediate();const t=MA(n,{popupRedirectResolver:a1,persistence:[_R,oR,Wv]}),i=av("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=f1(l.toString());tR(t,h,()=>h(t.currentUser)),eR(t,f=>h(f))}}const o=sv("auth");return o&&FA(t,`http://${o}`),t}function m1(){return document.getElementsByTagName("head")?.[0]??document}PA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=sr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",m1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c1("Browser");const jd={BASE_URL:"/EntregaFinal-Alvarez-Rey/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyCWwCML7b3FRkWra3IlfnPH3LNpQ42lN9Y",VITE_FIREBASE_APP_ID:"1:520661083542:web:daa1df86197f4a8e2ca9b7",VITE_FIREBASE_AUTH_DOMAIN:"vrbags-7a7fb.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-5LWCTWHDSV",VITE_FIREBASE_MESSAGING_SENDER_ID:"520661083542",VITE_FIREBASE_PROJECT_ID:"vrbags-7a7fb",VITE_FIREBASE_STORAGE_BUCKET:"vrbags-7a7fb.appspot.com"};var $d={};function cs(n){try{if(typeof import.meta<"u"&&jd&&jd[n])return jd[n]}catch{}try{if(typeof process<"u"&&$d&&$d[n])return $d[n]}catch{}}const Py={apiKey:cs("VITE_FIREBASE_API_KEY"),authDomain:cs("VITE_FIREBASE_AUTH_DOMAIN"),projectId:cs("VITE_FIREBASE_PROJECT_ID"),storageBucket:cs("VITE_FIREBASE_STORAGE_BUCKET"),messagingSenderId:cs("VITE_FIREBASE_MESSAGING_SENDER_ID"),appId:cs("VITE_FIREBASE_APP_ID"),measurementId:cs("VITE_FIREBASE_MEASUREMENT_ID")};let Vr=null;try{if(Py.projectId){const n=Lf(Py);Vr=p1(n)}}catch(n){console.warn("Firebase Auth init failed",n)}const Jv=Y.createContext();function Sl(){return Y.useContext(Jv)}function g1({children:n}){const[e,t]=Y.useState(null),[i,o]=Y.useState(!0);Y.useEffect(()=>{if(!Vr){o(!1);return}return nR(Vr,y=>{t(y),o(!1)})},[]);const l=(g,y)=>Vr?JA(Vr,g,y):Promise.reject(new Error("Auth not initialized")),h=(g,y)=>Vr?ZA(Vr,g,y):Promise.reject(new Error("Auth not initialized")),f=()=>Vr?rR(Vr):Promise.reject(new Error("Auth not initialized"));return U.createElement(Jv.Provider,{value:{user:e,loading:i,register:l,login:h,logout:f}},n)}const y1=[{id:"bolsos",label:"Bolsos"},{id:"mochilas",label:"Mochilas"},{id:"riñoneras",label:"Riñoneras"}];function _1(){const{user:n,logout:e}=Sl();return U.createElement("nav",{className:"navbar"},U.createElement("div",{style:{display:"flex",alignItems:"center",gap:16}},U.createElement(qa,{to:"/",className:"logo"},"VRBAGS"),U.createElement(qa,{to:"/"},"Todos"),y1.map(t=>U.createElement(qa,{key:t.id,to:`/category/${t.id}`},t.label))),U.createElement("div",{style:{display:"flex",alignItems:"center",gap:12}},n?U.createElement(U.Fragment,null,U.createElement("span",{style:{marginRight:8}},n.email),U.createElement(qa,{to:"/orders",className:"btn"},"Mis órdenes"),U.createElement("button",{className:"btn",onClick:e},"Salir")):U.createElement(qa,{to:"/login",className:"btn"},"Ingresar"),U.createElement(p0,null)))}const Zv="@firebase/installations",Wf="0.6.19";/**
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
 */const eE=1e4,tE=`w:${Wf}`,nE="FIS_v2",v1="https://firebaseinstallations.googleapis.com/v1",E1=3600*1e3,w1="installations",I1="Installations";/**
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
 */const T1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_s=new Ts(w1,I1,T1);function rE(n){return n instanceof Wn&&n.code.includes("request-failed")}/**
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
 */function iE({projectId:n}){return`${v1}/projects/${n}/installations`}function sE(n){return{token:n.token,requestStatus:2,expiresIn:A1(n.expiresIn),creationTime:Date.now()}}async function oE(n,e){const i=(await e.json()).error;return _s.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function aE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function S1(n,{refreshToken:e}){const t=aE(n);return t.append("Authorization",R1(e)),t}async function lE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function A1(n){return Number(n.replace("s","000"))}function R1(n){return`${nE} ${n}`}/**
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
 */async function C1({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=iE(n),o=aE(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:nE,appId:n.appId,sdkVersion:tE},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await lE(()=>fetch(i,f));if(g.ok){const y=await g.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:sE(y.authToken)}}else throw await oE("Create Installation",g)}/**
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
 */function uE(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function P1(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const k1=/^[cdef][\w-]{21}$/,pf="";function N1(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=D1(n);return k1.test(t)?t:pf}catch{return pf}}function D1(n){return P1(n).substr(0,22)}/**
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
 */function zc(n){return`${n.appName}!${n.appId}`}/**
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
 */const cE=new Map;function hE(n,e){const t=zc(n);dE(t,e),V1(t,e)}function dE(n,e){const t=cE.get(n);if(t)for(const i of t)i(e)}function V1(n,e){const t=O1();t&&t.postMessage({key:n,fid:e}),x1()}let fs=null;function O1(){return!fs&&"BroadcastChannel"in self&&(fs=new BroadcastChannel("[Firebase] FID Change"),fs.onmessage=n=>{dE(n.data.key,n.data.fid)}),fs}function x1(){cE.size===0&&fs&&(fs.close(),fs=null)}/**
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
 */const L1="firebase-installations-database",M1=1,vs="firebase-installations-store";let qd=null;function Hf(){return qd||(qd=mv(L1,M1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vs)}}})),qd}async function Ec(n,e){const t=zc(n),o=(await Hf()).transaction(vs,"readwrite"),l=o.objectStore(vs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&hE(n,e.fid),e}async function fE(n){const e=zc(n),i=(await Hf()).transaction(vs,"readwrite");await i.objectStore(vs).delete(e),await i.done}async function jc(n,e){const t=zc(n),o=(await Hf()).transaction(vs,"readwrite"),l=o.objectStore(vs),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&hE(n,f.fid),f}/**
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
 */async function Gf(n){let e;const t=await jc(n.appConfig,i=>{const o=b1(i),l=F1(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===pf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function b1(n){const e=n||{fid:N1(),registrationStatus:0};return pE(e)}function F1(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(_s.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=U1(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:B1(n)}:{installationEntry:e}}async function U1(n,e){try{const t=await C1(n,e);return Ec(n.appConfig,t)}catch(t){throw rE(t)&&t.customData.serverCode===409?await fE(n.appConfig):await Ec(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function B1(n){let e=await ky(n.appConfig);for(;e.registrationStatus===1;)await uE(100),e=await ky(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Gf(n);return i||t}return e}function ky(n){return jc(n,e=>{if(!e)throw _s.create("installation-not-found");return pE(e)})}function pE(n){return z1(n)?{fid:n.fid,registrationStatus:0}:n}function z1(n){return n.registrationStatus===1&&n.registrationTime+eE<Date.now()}/**
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
 */async function j1({appConfig:n,heartbeatServiceProvider:e},t){const i=$1(n,t),o=S1(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:tE,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await lE(()=>fetch(i,f));if(g.ok){const y=await g.json();return sE(y)}else throw await oE("Generate Auth Token",g)}function $1(n,{fid:e}){return`${iE(n)}/${e}/authTokens:generate`}/**
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
 */async function Kf(n,e=!1){let t;const i=await jc(n.appConfig,l=>{if(!mE(l))throw _s.create("not-registered");const h=l.authToken;if(!e&&H1(h))return l;if(h.requestStatus===1)return t=q1(n,e),l;{if(!navigator.onLine)throw _s.create("app-offline");const f=K1(l);return t=W1(n,f),f}});return t?await t:i.authToken}async function q1(n,e){let t=await Ny(n.appConfig);for(;t.authToken.requestStatus===1;)await uE(100),t=await Ny(n.appConfig);const i=t.authToken;return i.requestStatus===0?Kf(n,e):i}function Ny(n){return jc(n,e=>{if(!mE(e))throw _s.create("not-registered");const t=e.authToken;return Q1(t)?{...e,authToken:{requestStatus:0}}:e})}async function W1(n,e){try{const t=await j1(n,e),i={...e,authToken:t};return await Ec(n.appConfig,i),t}catch(t){if(rE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await fE(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Ec(n.appConfig,i)}throw t}}function mE(n){return n!==void 0&&n.registrationStatus===2}function H1(n){return n.requestStatus===2&&!G1(n)}function G1(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+E1}function K1(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Q1(n){return n.requestStatus===1&&n.requestTime+eE<Date.now()}/**
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
 */async function Y1(n){const e=n,{installationEntry:t,registrationPromise:i}=await Gf(e);return i?i.catch(console.error):Kf(e).catch(console.error),t.fid}/**
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
 */async function X1(n,e=!1){const t=n;return await J1(t),(await Kf(t,e)).token}async function J1(n){const{registrationPromise:e}=await Gf(n);e&&await e}/**
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
 */function Z1(n){if(!n||!n.options)throw Wd("App Configuration");if(!n.name)throw Wd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Wd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Wd(n){return _s.create("missing-app-config-values",{valueName:n})}/**
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
 */const gE="installations",eC="installations-internal",tC=n=>{const e=n.getProvider("app").getImmediate(),t=Z1(e),i=Ss(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},nC=n=>{const e=n.getProvider("app").getImmediate(),t=Ss(e,gE).getImmediate();return{getId:()=>Y1(t),getToken:o=>X1(t,o)}};function rC(){hr(new jn(gE,tC,"PUBLIC")),hr(new jn(eC,nC,"PRIVATE"))}rC();Sn(Zv,Wf);Sn(Zv,Wf,"esm2020");/**
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
 */const wc="analytics",iC="firebase_id",sC="origin",oC=60*1e3,aC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qf="https://www.googletagmanager.com/gtag/js";/**
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
 */const tn=new bc("@firebase/analytics");/**
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
 */const lC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cn=new Ts("analytics","Analytics",lC);/**
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
 */function uC(n){if(!n.startsWith(Qf)){const e=cn.create("invalid-gtag-resource",{gtagURL:n});return tn.warn(e.message),""}return n}function yE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function cC(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function hC(n,e){const t=cC("firebase-js-sdk-policy",{createScriptURL:uC}),i=document.createElement("script"),o=`${Qf}?l=${n}&id=${e}`;i.src=t?t?.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function dC(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function fC(n,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const g=(await yE(t)).find(y=>y.measurementId===o);g&&await e[g.appId]}}catch(f){tn.error(f)}n("config",o,l)}async function pC(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await yE(t);for(const g of h){const y=f.find(I=>I.measurementId===g),E=y&&e[y.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){tn.error(l)}}function mC(n,e,t,i){async function o(l,...h){try{if(l==="event"){const[f,g]=h;await pC(n,e,t,f,g)}else if(l==="config"){const[f,g]=h;await fC(n,e,t,i,f,g)}else if(l==="consent"){const[f,g]=h;n("consent",f,g)}else if(l==="get"){const[f,g,y]=h;n("get",f,g,y)}else if(l==="set"){const[f]=h;n("set",f)}else n(l,...h)}catch(f){tn.error(f)}}return o}function gC(n,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=mC(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function yC(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Qf)&&t.src.includes(n))return t;return null}/**
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
 */const _C=30,vC=1e3;class EC{constructor(e={},t=vC){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const _E=new EC;function wC(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function IC(n){const{appId:e,apiKey:t}=n,i={method:"GET",headers:wC(t)},o=aC.replace("{app-id}",e),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let h="";try{const f=await l.json();f.error?.message&&(h=f.error.message)}catch{}throw cn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function TC(n,e=_E,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw cn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw cn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new RC;return setTimeout(async()=>{f.abort()},oC),vE({appId:i,apiKey:o,measurementId:l},h,f,e)}async function vE(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=_E){const{appId:l,measurementId:h}=n;try{await SC(i,e)}catch(f){if(h)return tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:l,measurementId:h};throw f}try{const f=await IC(n);return o.deleteThrottleMetadata(l),f}catch(f){const g=f;if(!AC(g)){if(o.deleteThrottleMetadata(l),h)return tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:l,measurementId:h};throw f}const y=Number(g?.customData?.httpStatus)===503?ey(t,o.intervalMillis,_C):ey(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return o.setThrottleMetadata(l,E),tn.debug(`Calling attemptFetch again in ${y} millis`),vE(n,E,i,o)}}function SC(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function AC(n){if(!(n instanceof Wn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class RC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function CC(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,h={...i,send_to:l};n("event",t,h)}}/**
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
 */async function PC(){if(hv())try{await dv()}catch(n){return tn.warn(cn.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return tn.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kC(n,e,t,i,o,l,h){const f=TC(n);f.then(A=>{t[A.measurementId]=A.appId,n.options.measurementId&&A.measurementId!==n.options.measurementId&&tn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>tn.error(A)),e.push(f);const g=PC().then(A=>{if(A)return i.getId()}),[y,E]=await Promise.all([f,g]);yC(l)||hC(l,y.measurementId),o("js",new Date);const I=h?.config??{};return I[sC]="firebase",I.update=!0,E!=null&&(I[iC]=E),o("config",y.measurementId,I),y.measurementId}/**
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
 */class NC{constructor(e){this.app=e}_delete(){return delete Za[this.app.options.appId],Promise.resolve()}}let Za={},Dy=[];const Vy={};let Hd="dataLayer",DC="gtag",Oy,EE,xy=!1;function VC(){const n=[];if(cv()&&n.push("This is a browser extension environment."),x0()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=cn.create("invalid-analytics-context",{errorInfo:e});tn.warn(t.message)}}function OC(n,e,t){VC();const i=n.options.appId;if(!i)throw cn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cn.create("no-api-key");if(Za[i]!=null)throw cn.create("already-exists",{id:i});if(!xy){dC(Hd);const{wrappedGtag:l,gtagCore:h}=gC(Za,Dy,Vy,Hd,DC);EE=l,Oy=h,xy=!0}return Za[i]=kC(n,Dy,Vy,e,Oy,Hd,t),new NC(n)}function xC(n=Mf()){n=kt(n);const e=Ss(n,wc);return e.isInitialized()?e.getImmediate():LC(n)}function LC(n,e={}){const t=Ss(n,wc);if(t.isInitialized()){const o=t.getImmediate();if(Ri(e,t.getOptions()))return o;throw cn.create("already-initialized")}return t.initialize({options:e})}function MC(n,e,t,i){n=kt(n),CC(EE,Za[n.app.options.appId],e,t,i).catch(o=>tn.error(o))}const Ly="@firebase/analytics",My="0.10.18";function bC(){hr(new jn(wc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return OC(i,o,t)},"PUBLIC")),hr(new jn("analytics-internal",n,"PRIVATE")),Sn(Ly,My),Sn(Ly,My,"esm2020");function n(e){try{const t=e.getProvider(wc).getImmediate();return{logEvent:(i,o,l)=>MC(t,i,o,l)}}catch(t){throw cn.create("interop-component-reg-failed",{reason:t})}}}bC();var by=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ti,wE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,S){function C(){}C.prototype=S.prototype,V.D=S.prototype,V.prototype=new C,V.prototype.constructor=V,V.C=function(D,O,x){for(var R=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)R[nt-2]=arguments[nt];return S.prototype[O].apply(D,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,S,C){C||(C=0);var D=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)D[O]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(O=0;16>O;++O)D[O]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=V.g[0],C=V.g[1],O=V.g[2];var x=V.g[3],R=S+(x^C&(O^x))+D[0]+3614090360&4294967295;S=C+(R<<7&4294967295|R>>>25),R=x+(O^S&(C^O))+D[1]+3905402710&4294967295,x=S+(R<<12&4294967295|R>>>20),R=O+(C^x&(S^C))+D[2]+606105819&4294967295,O=x+(R<<17&4294967295|R>>>15),R=C+(S^O&(x^S))+D[3]+3250441966&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(x^C&(O^x))+D[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=x+(O^S&(C^O))+D[5]+1200080426&4294967295,x=S+(R<<12&4294967295|R>>>20),R=O+(C^x&(S^C))+D[6]+2821735955&4294967295,O=x+(R<<17&4294967295|R>>>15),R=C+(S^O&(x^S))+D[7]+4249261313&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(x^C&(O^x))+D[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=x+(O^S&(C^O))+D[9]+2336552879&4294967295,x=S+(R<<12&4294967295|R>>>20),R=O+(C^x&(S^C))+D[10]+4294925233&4294967295,O=x+(R<<17&4294967295|R>>>15),R=C+(S^O&(x^S))+D[11]+2304563134&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(x^C&(O^x))+D[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=x+(O^S&(C^O))+D[13]+4254626195&4294967295,x=S+(R<<12&4294967295|R>>>20),R=O+(C^x&(S^C))+D[14]+2792965006&4294967295,O=x+(R<<17&4294967295|R>>>15),R=C+(S^O&(x^S))+D[15]+1236535329&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(O^x&(C^O))+D[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=x+(C^O&(S^C))+D[6]+3225465664&4294967295,x=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(x^S))+D[11]+643717713&4294967295,O=x+(R<<14&4294967295|R>>>18),R=C+(x^S&(O^x))+D[0]+3921069994&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(O^x&(C^O))+D[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=x+(C^O&(S^C))+D[10]+38016083&4294967295,x=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(x^S))+D[15]+3634488961&4294967295,O=x+(R<<14&4294967295|R>>>18),R=C+(x^S&(O^x))+D[4]+3889429448&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(O^x&(C^O))+D[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=x+(C^O&(S^C))+D[14]+3275163606&4294967295,x=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(x^S))+D[3]+4107603335&4294967295,O=x+(R<<14&4294967295|R>>>18),R=C+(x^S&(O^x))+D[8]+1163531501&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(O^x&(C^O))+D[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=x+(C^O&(S^C))+D[2]+4243563512&4294967295,x=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(x^S))+D[7]+1735328473&4294967295,O=x+(R<<14&4294967295|R>>>18),R=C+(x^S&(O^x))+D[12]+2368359562&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(C^O^x)+D[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=x+(S^C^O)+D[8]+2272392833&4294967295,x=S+(R<<11&4294967295|R>>>21),R=O+(x^S^C)+D[11]+1839030562&4294967295,O=x+(R<<16&4294967295|R>>>16),R=C+(O^x^S)+D[14]+4259657740&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(C^O^x)+D[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=x+(S^C^O)+D[4]+1272893353&4294967295,x=S+(R<<11&4294967295|R>>>21),R=O+(x^S^C)+D[7]+4139469664&4294967295,O=x+(R<<16&4294967295|R>>>16),R=C+(O^x^S)+D[10]+3200236656&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(C^O^x)+D[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=x+(S^C^O)+D[0]+3936430074&4294967295,x=S+(R<<11&4294967295|R>>>21),R=O+(x^S^C)+D[3]+3572445317&4294967295,O=x+(R<<16&4294967295|R>>>16),R=C+(O^x^S)+D[6]+76029189&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(C^O^x)+D[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=x+(S^C^O)+D[12]+3873151461&4294967295,x=S+(R<<11&4294967295|R>>>21),R=O+(x^S^C)+D[15]+530742520&4294967295,O=x+(R<<16&4294967295|R>>>16),R=C+(O^x^S)+D[2]+3299628645&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(O^(C|~x))+D[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=x+(C^(S|~O))+D[7]+1126891415&4294967295,x=S+(R<<10&4294967295|R>>>22),R=O+(S^(x|~C))+D[14]+2878612391&4294967295,O=x+(R<<15&4294967295|R>>>17),R=C+(x^(O|~S))+D[5]+4237533241&4294967295,C=O+(R<<21&4294967295|R>>>11),R=S+(O^(C|~x))+D[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=x+(C^(S|~O))+D[3]+2399980690&4294967295,x=S+(R<<10&4294967295|R>>>22),R=O+(S^(x|~C))+D[10]+4293915773&4294967295,O=x+(R<<15&4294967295|R>>>17),R=C+(x^(O|~S))+D[1]+2240044497&4294967295,C=O+(R<<21&4294967295|R>>>11),R=S+(O^(C|~x))+D[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=x+(C^(S|~O))+D[15]+4264355552&4294967295,x=S+(R<<10&4294967295|R>>>22),R=O+(S^(x|~C))+D[6]+2734768916&4294967295,O=x+(R<<15&4294967295|R>>>17),R=C+(x^(O|~S))+D[13]+1309151649&4294967295,C=O+(R<<21&4294967295|R>>>11),R=S+(O^(C|~x))+D[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=x+(C^(S|~O))+D[11]+3174756917&4294967295,x=S+(R<<10&4294967295|R>>>22),R=O+(S^(x|~C))+D[2]+718787259&4294967295,O=x+(R<<15&4294967295|R>>>17),R=C+(x^(O|~S))+D[9]+3951481745&4294967295,V.g[0]=V.g[0]+S&4294967295,V.g[1]=V.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,V.g[2]=V.g[2]+O&4294967295,V.g[3]=V.g[3]+x&4294967295}i.prototype.u=function(V,S){S===void 0&&(S=V.length);for(var C=S-this.blockSize,D=this.B,O=this.h,x=0;x<S;){if(O==0)for(;x<=C;)o(this,V,x),x+=this.blockSize;if(typeof V=="string"){for(;x<S;)if(D[O++]=V.charCodeAt(x++),O==this.blockSize){o(this,D),O=0;break}}else for(;x<S;)if(D[O++]=V[x++],O==this.blockSize){o(this,D),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var S=1;S<V.length-8;++S)V[S]=0;var C=8*this.o;for(S=V.length-8;S<V.length;++S)V[S]=C&255,C/=256;for(this.u(V),V=Array(16),S=C=0;4>S;++S)for(var D=0;32>D;D+=8)V[C++]=this.g[S]>>>D&255;return V};function l(V,S){var C=f;return Object.prototype.hasOwnProperty.call(C,V)?C[V]:C[V]=S(V)}function h(V,S){this.h=S;for(var C=[],D=!0,O=V.length-1;0<=O;O--){var x=V[O]|0;D&&x==S||(C[O]=x,D=!1)}this.g=C}var f={};function g(V){return-128<=V&&128>V?l(V,function(S){return new h([S|0],0>S?-1:0)}):new h([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return I;if(0>V)return j(y(-V));for(var S=[],C=1,D=0;V>=C;D++)S[D]=V/C|0,C*=4294967296;return new h(S,0)}function E(V,S){if(V.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V.charAt(0)=="-")return j(E(V.substring(1),S));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(S,8)),D=I,O=0;O<V.length;O+=8){var x=Math.min(8,V.length-O),R=parseInt(V.substring(O,O+x),S);8>x?(x=y(Math.pow(S,x)),D=D.j(x).add(y(R))):(D=D.j(C),D=D.add(y(R)))}return D}var I=g(0),A=g(1),z=g(16777216);n=h.prototype,n.m=function(){if(q(this))return-j(this).m();for(var V=0,S=1,C=0;C<this.g.length;C++){var D=this.i(C);V+=(0<=D?D:4294967296+D)*S,S*=4294967296}return V},n.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if($(this))return"0";if(q(this))return"-"+j(this).toString(V);for(var S=y(Math.pow(V,6)),C=this,D="";;){var O=Ee(C,S).g;C=te(C,O.j(S));var x=((0<C.g.length?C.g[0]:C.h)>>>0).toString(V);if(C=O,$(C))return x+D;for(;6>x.length;)x="0"+x;D=x+D}},n.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function $(V){if(V.h!=0)return!1;for(var S=0;S<V.g.length;S++)if(V.g[S]!=0)return!1;return!0}function q(V){return V.h==-1}n.l=function(V){return V=te(this,V),q(V)?-1:$(V)?0:1};function j(V){for(var S=V.g.length,C=[],D=0;D<S;D++)C[D]=~V.g[D];return new h(C,~V.h).add(A)}n.abs=function(){return q(this)?j(this):this},n.add=function(V){for(var S=Math.max(this.g.length,V.g.length),C=[],D=0,O=0;O<=S;O++){var x=D+(this.i(O)&65535)+(V.i(O)&65535),R=(x>>>16)+(this.i(O)>>>16)+(V.i(O)>>>16);D=R>>>16,x&=65535,R&=65535,C[O]=R<<16|x}return new h(C,C[C.length-1]&-2147483648?-1:0)};function te(V,S){return V.add(j(S))}n.j=function(V){if($(this)||$(V))return I;if(q(this))return q(V)?j(this).j(j(V)):j(j(this).j(V));if(q(V))return j(this.j(j(V)));if(0>this.l(z)&&0>V.l(z))return y(this.m()*V.m());for(var S=this.g.length+V.g.length,C=[],D=0;D<2*S;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(var O=0;O<V.g.length;O++){var x=this.i(D)>>>16,R=this.i(D)&65535,nt=V.i(O)>>>16,Dt=V.i(O)&65535;C[2*D+2*O]+=R*Dt,ae(C,2*D+2*O),C[2*D+2*O+1]+=x*Dt,ae(C,2*D+2*O+1),C[2*D+2*O+1]+=R*nt,ae(C,2*D+2*O+1),C[2*D+2*O+2]+=x*nt,ae(C,2*D+2*O+2)}for(D=0;D<S;D++)C[D]=C[2*D+1]<<16|C[2*D];for(D=S;D<2*S;D++)C[D]=0;return new h(C,0)};function ae(V,S){for(;(V[S]&65535)!=V[S];)V[S+1]+=V[S]>>>16,V[S]&=65535,S++}function se(V,S){this.g=V,this.h=S}function Ee(V,S){if($(S))throw Error("division by zero");if($(V))return new se(I,I);if(q(V))return S=Ee(j(V),S),new se(j(S.g),j(S.h));if(q(S))return S=Ee(V,j(S)),new se(j(S.g),S.h);if(30<V.g.length){if(q(V)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var C=A,D=S;0>=D.l(V);)C=Ve(C),D=Ve(D);var O=Pe(C,1),x=Pe(D,1);for(D=Pe(D,2),C=Pe(C,2);!$(D);){var R=x.add(D);0>=R.l(V)&&(O=O.add(C),x=R),D=Pe(D,1),C=Pe(C,1)}return S=te(V,O.j(S)),new se(O,S)}for(O=I;0<=V.l(S);){for(C=Math.max(1,Math.floor(V.m()/S.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),x=y(C),R=x.j(S);q(R)||0<R.l(V);)C-=D,x=y(C),R=x.j(S);$(x)&&(x=A),O=O.add(x),V=te(V,R)}return new se(O,V)}n.A=function(V){return Ee(this,V).h},n.and=function(V){for(var S=Math.max(this.g.length,V.g.length),C=[],D=0;D<S;D++)C[D]=this.i(D)&V.i(D);return new h(C,this.h&V.h)},n.or=function(V){for(var S=Math.max(this.g.length,V.g.length),C=[],D=0;D<S;D++)C[D]=this.i(D)|V.i(D);return new h(C,this.h|V.h)},n.xor=function(V){for(var S=Math.max(this.g.length,V.g.length),C=[],D=0;D<S;D++)C[D]=this.i(D)^V.i(D);return new h(C,this.h^V.h)};function Ve(V){for(var S=V.g.length+1,C=[],D=0;D<S;D++)C[D]=V.i(D)<<1|V.i(D-1)>>>31;return new h(C,V.h)}function Pe(V,S){var C=S>>5;S%=32;for(var D=V.g.length-C,O=[],x=0;x<D;x++)O[x]=0<S?V.i(x+C)>>>S|V.i(x+C+1)<<32-S:V.i(x+C);return new h(O,V.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,wE=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,Ti=h}).apply(typeof by<"u"?by:typeof self<"u"?self:typeof window<"u"?window:{});var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var IE,Ga,TE,rc,mf,SE,AE,RE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ku=="object"&&Ku];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in _))break e;_=_[L]}u=u[u.length-1],w=_[u],p=p(w),p!=w&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var _=0,w=!1,L={next:function(){if(!w&&_<u.length){var B=_++;return{value:p(B,u[B]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,_){return u.call.apply(u.bind,arguments)}function I(u,p,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function A(u,p,_){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:I,A.apply(null,arguments)}function z(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function $(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,L,B){for(var Z=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)Z[Be-2]=arguments[Be];return p.prototype[L].apply(w,Z)}}function q(u){const p=u.length;if(0<p){const _=Array(p);for(let w=0;w<p;w++)_[w]=u[w];return _}return[]}function j(u,p){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(g(w)){const L=u.length||0,B=w.length||0;u.length=L+B;for(let Z=0;Z<B;Z++)u[L+Z]=w[Z]}else u.push(w)}}class te{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ae(u){return/^[\s\xa0]*$/.test(u)}function se(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function Ee(u){return Ee[" "](u),u}Ee[" "]=function(){};var Ve=se().indexOf("Gecko")!=-1&&!(se().toLowerCase().indexOf("webkit")!=-1&&se().indexOf("Edge")==-1)&&!(se().indexOf("Trident")!=-1||se().indexOf("MSIE")!=-1)&&se().indexOf("Edge")==-1;function Pe(u,p,_){for(const w in u)p.call(_,u[w],w,u)}function V(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function S(u){const p={};for(const _ in u)p[_]=u[_];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(u,p){let _,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(_ in w)u[_]=w[_];for(let B=0;B<C.length;B++)_=C[B],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function O(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function x(u){f.setTimeout(()=>{throw u},0)}function R(){var u=fe;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class nt{constructor(){this.h=this.g=null}add(p,_){const w=Dt.get();w.set(p,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Dt=new te(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ee=!1,fe=new nt,P=()=>{const u=f.Promise.resolve(void 0);ze=()=>{u.then(G)}};var G=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){x(_)}var p=Dt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Te=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,p),f.removeEventListener("test",_,p)}catch{}return u})();function Le(u,p){if(ge.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ve){e:{try{Ee(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Oe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Le.aa.h.call(this)}}$(Le,ge);var Oe={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),be=0;function Ot(u,p,_,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!w,this.ha=L,this.key=++be,this.da=this.fa=!1}function Ns(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,p,_,w,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var Z=jr(u,p,w,L);return-1<Z?(p=u[Z],_||(p.fa=!1)):(p=new Ot(p,this.src,B,!!w,L),p.fa=_,u.push(p)),p};function Ds(u,p){var _=p.type;if(_ in u.g){var w=u.g[_],L=Array.prototype.indexOf.call(w,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(w,L,1),B&&(Ns(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function jr(u,p,_,w){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==p&&B.capture==!!_&&B.ha==w)return L}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),Vs={};function Yo(u,p,_,w,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Yo(u,p[B],_,w,L);return null}return _=Zo(_),u&&u[Me]?u.K(p,_,y(w)?!!w.capture:!1,L):Xo(u,p,_,!1,w,L)}function Xo(u,p,_,w,L,B){if(!p)throw Error("Invalid event type");var Z=y(L)?!!L.capture:!!L,Be=xs(u);if(Be||(u[Mi]=Be=new pr(u)),_=Be.add(p,_,w,Z,B),_.proxy)return _;if(w=Dl(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Te||(L=Z),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(gr(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Dl(){function u(_){return p.call(u.src,u.listener,_)}const p=Jo;return u}function Os(u,p,_,w,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)Os(u,p[B],_,w,L);else w=y(w)?!!w.capture:!!w,_=Zo(_),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],_=jr(B,_,w,L),-1<_&&(Ns(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=xs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=jr(p,_,w,L)),(_=-1<u?p[u]:null)&&mr(_))}function mr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])Ds(p.i,u);else{var _=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(_,w,u.capture):p.detachEvent?p.detachEvent(gr(_),w):p.addListener&&p.removeListener&&p.removeListener(w),(_=xs(p))?(Ds(_,u),_.h==0&&(_.src=null,p[Mi]=null)):Ns(u)}}}function gr(u){return u in Vs?Vs[u]:Vs[u]="on"+u}function Jo(u,p){if(u.da)u=!0;else{p=new Le(p,this);var _=u.listener,w=u.ha||u.src;u.fa&&mr(u),u=_.call(w,p)}return u}function xs(u){return u=u[Mi],u instanceof pr?u:null}var Ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zo(u){return typeof u=="function"?u:(u[Ls]||(u[Ls]=function(p){return u.handleEvent(p)}),u[Ls])}function ht(){le.call(this),this.i=new pr(this),this.M=this,this.F=null}$(ht,le),ht.prototype[Me]=!0,ht.prototype.removeEventListener=function(u,p,_,w){Os(this,u,p,_,w)};function dt(u,p){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new ge(p,u);else if(p instanceof ge)p.target=p.target||u;else{var L=p;p=new ge(w,u),D(p,L)}if(L=!0,_)for(var B=_.length-1;0<=B;B--){var Z=p.g=_[B];L=yr(Z,w,!0,p)&&L}if(Z=p.g=u,L=yr(Z,w,!0,p)&&L,L=yr(Z,w,!1,p)&&L,_)for(B=0;B<_.length;B++)Z=p.g=_[B],L=yr(Z,w,!1,p)&&L}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],w=0;w<_.length;w++)Ns(_[w]);delete u.g[p],u.h--}}this.F=null},ht.prototype.K=function(u,p,_,w){return this.i.add(String(u),p,!1,_,w)},ht.prototype.L=function(u,p,_,w){return this.i.add(String(u),p,!0,_,w)};function yr(u,p,_,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var Z=p[B];if(Z&&!Z.da&&Z.capture==_){var Be=Z.listener,ft=Z.ha||Z.src;Z.fa&&Ds(u.i,Z),L=Be.call(ft,w)!==!1&&L}}return L&&!w.defaultPrevented}function ea(u,p,_){if(typeof u=="function")_&&(u=A(u,_));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function $r(u){u.g=ea(()=>{u.g=null,u.i&&(u.i=!1,$r(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class bi extends le{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:$r(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(u){le.call(this),this.h=u,this.g={}}$(Fi,le);var ta=[];function na(u){Pe(u.g,function(p,_){this.g.hasOwnProperty(_)&&mr(p)},u),u.g={}}Fi.prototype.N=function(){Fi.aa.N.call(this),na(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ra=f.JSON.stringify,ia=f.JSON.parse,sa=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ui(){}Ui.prototype.h=null;function Ms(u){return u.h||(u.h=u.i())}function bs(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){ge.call(this,"d")}$(Hn,ge);function Fs(){ge.call(this,"c")}$(Fs,ge);var Gn={},oa=null;function Bi(){return oa=oa||new ht}Gn.La="serverreachability";function aa(u){ge.call(this,Gn.La,u)}$(aa,ge);function _r(u){const p=Bi();dt(p,new aa(p))}Gn.STAT_EVENT="statevent";function la(u,p){ge.call(this,Gn.STAT_EVENT,u),this.stat=p}$(la,ge);function rt(u){const p=Bi();dt(p,new la(p,u))}Gn.Ma="timingevent";function Us(u,p){ge.call(this,Gn.Ma,u),this.size=p}$(Us,ge);function An(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function zi(){this.g=!0}zi.prototype.xa=function(){this.g=!1};function ji(u,p,_,w,L,B){u.info(function(){if(u.g)if(B)for(var Z="",Be=B.split("&"),ft=0;ft<Be.length;ft++){var Ne=Be[ft].split("=");if(1<Ne.length){var _t=Ne[0];Ne=Ne[1];var ot=_t.split("_");Z=2<=ot.length&&ot[1]=="type"?Z+(_t+"="+Ne+"&"):Z+(_t+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+_+`
`+Z})}function Bs(u,p,_,w,L,B,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+_+`
`+B+" "+Z})}function Rn(u,p,_,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+ih(u,_)+(w?" "+w:"")})}function ua(u,p){u.info(function(){return"TIMEOUT: "+p})}zi.prototype.info=function(){};function ih(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return ra(_)}catch{return p}}var zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function $i(){}$($i,Ui),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},Cn=new $i;function Pn(u,p,_,w){this.j=u,this.i=p,this.l=_,this.R=w||1,this.U=new Fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ol}function Ol(){this.i=null,this.g="",this.h=!1}var ca={},js={};function $s(u,p,_){u.L=1,u.v=Kr(rn(p)),u.m=_,u.P=!0,ha(u,null)}function ha(u,p){u.F=Date.now(),$e(u),u.A=rn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Yr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Ol,u.g=Xl(u.j,_?p:null,!u.m),0<u.O&&(u.M=new bi(A(u.Y,u,u.g),u.O)),p=u.U,_=u.g,w=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(ta[0]=L.toString()),L=ta);for(var B=0;B<L.length;B++){var Z=Yo(_,L[B],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),_r(),ji(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Gt(u)==3?p.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Gt(this.g);var p=this.g.Ba();const pn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ya(this.g)))){this.J||ot!=4||p==7||(p==8||0>=pn?_r(3):_r(2)),qi(this);var _=this.g.Z();this.X=_;t:if(xl(this)){var w=ya(this.g);u="";var L=w.length,B=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),qr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(B&&p==L-1)});w.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=_==200,Bs(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,ft=this.g;if((Be=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae(Be)){var Ne=Be;break t}}Ne=null}if(_=Ne)Rn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,da(this,_);else{this.o=!1,this.s=3,rt(12),dn(this),qr(this);break e}}if(this.P){_=!0;let on;for(;!this.J&&this.C<Z.length;)if(on=sh(this,Z),on==js){ot==4&&(this.s=4,rt(14),_=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(on==ca){this.s=4,rt(15),Rn(this.i,this.l,Z,"[Invalid Chunk]"),_=!1;break}else Rn(this.i,this.l,on,null),da(this,on);if(xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||Z.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)Rn(this.i,this.l,Z,"[Invalid Chunked Response]"),dn(this),qr(this);else if(0<Z.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),va(_t),_t.M=!0,rt(11))}}else Rn(this.i,this.l,Z,null),da(this,Z);ot==4&&dn(this),this.o&&!this.J&&(ot==4?eo(this.j,this):(this.o=!1,$e(this)))}else Qs(this.g),_==400&&0<Z.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),dn(this),qr(this)}}}catch{}finally{}};function xl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function sh(u,p){var _=u.C,w=p.indexOf(`
`,_);return w==-1?js:(_=Number(p.substring(_,w)),isNaN(_)?ca:(w+=1,w+_>p.length?js:(p=p.slice(w,w+_),u.C=w+_,p)))}Pn.prototype.cancel=function(){this.J=!0,dn(this)};function $e(u){u.S=Date.now()+u.I,Ll(u,u.I)}function Ll(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(A(u.ba,u),p)}function qi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ua(this.i,this.A),this.L!=2&&(_r(),rt(17)),dn(this),this.s=2,qr(this)):Ll(this,this.S-u)};function qr(u){u.j.G==0||u.J||eo(u.j,u)}function dn(u){qi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,na(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function da(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||jt(_.h,u))){if(!u.K&&jt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Zs(_),On(_);else break e;Js(_),rt(18)}}else _.za=L[1],0<_.za-_.T&&37500>L[2]&&_.F&&_.v==0&&!_.C&&(_.C=An(A(_.Za,_),6e3));if(1>=bl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Tr(_,11)}else if((u.K||_.g==u)&&Zs(_),!ae(p))for(L=_.Da.g.parse(p),p=0;p<L.length;p++){let Ne=L[p];if(_.T=Ne[0],Ne=Ne[1],_.G==2)if(Ne[0]=="c"){_.K=Ne[1],_.ia=Ne[2];const _t=Ne[3];_t!=null&&(_.la=_t,_.j.info("VER="+_.la));const ot=Ne[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const pn=Ne[5];pn!=null&&typeof pn=="number"&&0<pn&&(w=1.5*pn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const on=u.g;if(on){const Xi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var B=w.h;B.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(fa(B,B.h),B.h=null))}if(w.D){const no=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(w.ya=no,je(w.I,w.D,no))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var Z=u;if(w.qa=Yl(w,w.J?w.ia:null,w.W),Z.K){Fl(w.h,Z);var Be=Z,ft=w.L;ft&&(Be.I=ft),Be.B&&(qi(Be),$e(Be)),w.g=Z}else Yi(w);0<_.i.length&&Xn(_)}else Ne[0]!="stop"&&Ne[0]!="close"||Tr(_,7);else _.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Tr(_,7):St(_):Ne[0]!="noop"&&_.l&&_.l.ta(Ne),_.v=0)}}_r(4)}catch{}}var Ml=class{constructor(u,p){this.g=u,this.map=p}};function Wi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function bl(u){return u.h?1:u.g?u.g.size:0}function jt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function fa(u,p){u.g?u.g.add(p):u.h=p}function Fl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Wi.prototype.cancel=function(){if(this.i=Ul(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ul(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return q(u.i)}function qs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],_=u.length,w=0;w<_;w++)p.push(u[w]);return p}p=[],_=0;for(w in u)p[_++]=u[w];return p}function Ws(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const w in u)p[_++]=w;return p}}}function Wr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Ws(u),w=qs(u),L=w.length,B=0;B<L;B++)p.call(void 0,w[B],_&&_[B],u)}var Hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oh(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),L=null;if(0<=w){var B=u[_].substring(0,w);L=u[_].substring(w+1)}else B=u[_];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function vr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof vr){this.h=u.h,Gi(this,u.j),this.o=u.o,this.g=u.g,Hr(this,u.s),this.l=u.l;var p=u.i,_=new Kn;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Gr(this,_),this.m=u.m}else u&&(p=String(u).match(Hi))?(this.h=!1,Gi(this,p[1]||"",!0),this.o=ke(p[2]||""),this.g=ke(p[3]||"",!0),Hr(this,p[4]),this.l=ke(p[5]||"",!0),Gr(this,p[6]||"",!0),this.m=ke(p[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}vr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Qr(p,Hs,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Qr(p,Hs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Qr(_,_.charAt(0)=="/"?jl:zl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Qr(_,pa)),u.join("")};function rn(u){return new vr(u)}function Gi(u,p,_){u.j=_?ke(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Hr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Gr(u,p,_){p instanceof Kn?(u.i=p,Qn(u.i,u.h)):(_||(p=Qr(p,$l)),u.i=new Kn(p,u.h))}function je(u,p,_){u.i.set(p,_)}function Kr(u){return je(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qr(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,Bl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Hs=/[#\/\?@]/g,zl=/[#\?:]/g,jl=/[#\?]/g,$l=/[#\?@]/g,pa=/#/g;function Kn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Tt(u){u.g||(u.g=new Map,u.h=0,u.i&&oh(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=Kn.prototype,n.add=function(u,p){Tt(this),this.i=null,u=fn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function kn(u,p){Tt(u),p=fn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Nn(u,p){return Tt(u),p=fn(u,p),u.g.has(p)}n.forEach=function(u,p){Tt(this),this.g.forEach(function(_,w){_.forEach(function(L){u.call(p,L,w,this)},this)},this)},n.na=function(){Tt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let w=0;w<p.length;w++){const L=u[w];for(let B=0;B<L.length;B++)_.push(p[w])}return _},n.V=function(u){Tt(this);let p=[];if(typeof u=="string")Nn(this,u)&&(p=p.concat(this.g.get(fn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return Tt(this),this.i=null,u=fn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Yr(u,p,_){kn(u,p),0<_.length&&(u.i=null,u.g.set(fn(u,p),q(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var w=p[_];const B=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var L=B;Z[w]!==""&&(L+="="+encodeURIComponent(String(Z[w]))),u.push(L)}}return this.i=u.join("&")};function fn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Qn(u,p){p&&!u.j&&(Tt(u),u.i=null,u.g.forEach(function(_,w){var L=w.toLowerCase();w!=L&&(kn(this,w),Yr(this,L,_))},u)),u.j=p}function ah(u,p){const _=new zi;if(f.Image){const w=new Image;w.onload=z(Ht,_,"TestLoadImage: loaded",!0,p,w),w.onerror=z(Ht,_,"TestLoadImage: error",!1,p,w),w.onabort=z(Ht,_,"TestLoadImage: abort",!1,p,w),w.ontimeout=z(Ht,_,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function ql(u,p){const _=new zi,w=new AbortController,L=setTimeout(()=>{w.abort(),Ht(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(B=>{clearTimeout(L),B.ok?Ht(_,"TestPingServer: ok",!0,p):Ht(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Ht(_,"TestPingServer: error",!1,p)})}function Ht(u,p,_,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(_)}catch{}}function lh(){this.g=new sa}function Wl(u,p,_){const w=_||"";try{Wr(u,function(L,B){let Z=L;y(L)&&(Z=ra(L)),p.push(w+B+"="+encodeURIComponent(Z))})}catch(L){throw p.push(w+"type="+encodeURIComponent("_badmap")),L}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}$(Er,Ui),Er.prototype.g=function(){return new Ki(this.l,this.j)},Er.prototype.i=(function(u){return function(){return u}})({});function Ki(u,p){ht.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ki,ht),n=Ki.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Vn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Dn(this):Vn(this),this.readyState==3&&Hl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},n.Qa=function(u){this.g&&(this.response=u,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Vn(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Vn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let p="";return Pe(u,function(_,w){p+=w,p+=":",p+=_,p+=`\r
`}),p}function Xr(u,p,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=wr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):je(u,p,_))}function Qe(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Qe,ht);var uh=/^https?$/i,ma=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ms(this.o):Ms(Cn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){Qi(this,B);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)_.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const B of w.keys())_.set(B,w.get(B));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ma,p,void 0))||w||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of _)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ks(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Qi(this,B)}};function Qi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Gs(u),sn(u)}function Gs(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),sn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ga(this):this.bb())},n.bb=function(){ga(this)};function ga(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)ea(u.Ea,0,u);else if(dt(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var w;if(w=Z===0){var L=String(u.D).match(Hi)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),w=!uh.test(L?L.toLowerCase():"")}_=w}if(_)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var B=2<Gt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Gs(u)}}finally{sn(u)}}}}function sn(u,p){if(u.g){Ks(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||dt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Ks(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),ia(p)}};function ya(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Qs(u){const p={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(ae(u[w]))continue;var _=O(u[w]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=p[L]||[];p[L]=B,B.push(_)}V(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function _a(u){this.Aa=0,this.i=[],this.j=new zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,u),this.cb=Yn("retryDelaySeedMs",1e4,u),this.Wa=Yn("forwardChannelMaxRetries",2,u),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Wi(u&&u.concurrentRequestLimit),this.Da=new lh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_a.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,w){rt(0),this.W=u,this.H=p||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Yl(this,null,this.W),Xn(this)};function St(u){if(Ys(u),u.G==3){var p=u.U++,_=rn(u.I);if(je(_,"SID",u.K),je(_,"RID",p),je(_,"TYPE","terminate"),Ir(u,_),p=new Pn(u,u.j,p),p.L=2,p.v=Kr(rn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=p.v,_=!0),_||(p.g=Xl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),$e(p)}Ql(u)}function On(u){u.g&&(va(u),u.g.cancel(),u.g=null)}function Ys(u){On(u),u.u&&(f.clearTimeout(u.u),u.u=null),Zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Xn(u){if(!nn(u.h)&&!u.s){u.s=!0;var p=u.Ga;ze||P(),ee||(ze(),ee=!0),fe.add(p,u),u.B=0}}function ch(u,p){return bl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(A(u.Ga,u,p),Kl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Pn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),D(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=Jr(this,L,p),_=rn(this.I),je(_,"RID",u),je(_,"CVER",22),this.D&&je(_,"X-HTTP-Session-Id",this.D),Ir(this,_),B&&(this.O?p="headers="+encodeURIComponent(String(wr(B)))+"&"+p:this.m&&Xr(_,this.m,B)),fa(this.h,L),this.Ua&&je(_,"TYPE","init"),this.P?(je(_,"$req",p),je(_,"SID","null"),L.T=!0,$s(L,_,null)):$s(L,_,p),this.G=2}}else this.G==3&&(u?Xs(this,u):this.i.length==0||nn(this.h)||Xs(this))};function Xs(u,p){var _;p?_=p.l:_=u.U++;const w=rn(u.I);je(w,"SID",u.K),je(w,"RID",_),je(w,"AID",u.T),Ir(u,w),u.m&&u.o&&Xr(w,u.m,u.o),_=new Pn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Jr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),fa(u.h,_),$s(_,w,p)}function Ir(u,p){u.H&&Pe(u.H,function(_,w){je(p,w,_)}),u.l&&Wr({},function(_,w){je(p,w,_)})}function Jr(u,p,_){_=Math.min(u.i.length,_);var w=u.l?A(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const Z=["count="+_];B==-1?0<_?(B=L[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let Be=!0;for(let ft=0;ft<_;ft++){let Ne=L[ft].g;const _t=L[ft].map;if(Ne-=B,0>Ne)B=Math.max(0,L[ft].g-100),Be=!1;else try{Wl(_t,Z,"req"+Ne+"_")}catch{w&&w(_t)}}if(Be){w=Z.join("&");break e}}}return u=u.i.splice(0,_),p.D=u,w}function Yi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ze||P(),ee||(ze(),ee=!0),fe.add(p,u),u.v=0}}function Js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(A(u.Fa,u),Kl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(A(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),On(this),Gl(this))};function va(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Gl(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=rn(u.qa);je(p,"RID","rpc"),je(p,"SID",u.K),je(p,"AID",u.T),je(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&je(p,"TO",u.ja),je(p,"TYPE","xmlhttp"),Ir(u,p),u.m&&u.o&&Xr(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Kr(rn(p)),_.m=null,_.P=!0,ha(_,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Js(this),rt(19))};function Zs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function eo(u,p){var _=null;if(u.g==p){Zs(u),va(u),u.g=null;var w=2}else if(jt(u.h,p))_=p.D,Fl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;w=Bi(),dt(w,new Us(w,_)),Xn(u)}else Yi(u);else if(L=p.s,L==3||L==0&&0<p.X||!(w==1&&ch(u,p)||w==2&&Js(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),L){case 1:Tr(u,5);break;case 4:Tr(u,10);break;case 3:Tr(u,6);break;default:Tr(u,2)}}}function Kl(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function Tr(u,p){if(u.j.info("Error code "+p),p==2){var _=A(u.fb,u),w=u.Xa;const L=!w;w=new vr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Gi(w,"https"),Kr(w),L?ah(w.toString(),_):ql(w.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(p),Ql(u),Ys(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Ql(u){if(u.G=0,u.ka=[],u.l){const p=Ul(u.h);(p.length!=0||u.i.length!=0)&&(j(u.ka,p),j(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function Yl(u,p,_){var w=_ instanceof vr?rn(_):new vr(_);if(w.g!="")p&&(w.g=p+"."+w.g),Hr(w,w.s);else{var L=f.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new vr(null);w&&Gi(B,w),p&&(B.g=p),L&&Hr(B,L),_&&(B.l=_),w=B}return _=u.D,p=u.ya,_&&p&&je(w,_,p),je(w,"VER",u.la),Ir(u,w),w}function Xl(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Qe(new Er({eb:_})):new Qe(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ea(){}n=Ea.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function to(){}to.prototype.g=function(u,p){return new $t(u,p)};function $t(u,p){ht.call(this),this.g=new _a(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ae(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ae(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Jn(this)}$($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){St(this.g)},$t.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ra(u),u=_);p.i.push(new Ml(p.Ya++,u)),p.G==3&&Xn(p)},$t.prototype.N=function(){this.g.l=null,delete this.j,St(this.g),delete this.g,$t.aa.N.call(this)};function Jl(u){Hn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}$(Jl,Hn);function Zl(){Fs.call(this),this.status=1}$(Zl,Fs);function Jn(u){this.g=u}$(Jn,Ea),Jn.prototype.ua=function(){dt(this.g,"a")},Jn.prototype.ta=function(u){dt(this.g,new Jl(u))},Jn.prototype.sa=function(u){dt(this.g,new Zl)},Jn.prototype.ra=function(){dt(this.g,"b")},to.prototype.createWebChannel=to.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,RE=function(){return new to},AE=function(){return Bi()},SE=Gn,mf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zs.NO_ERROR=0,zs.TIMEOUT=8,zs.HTTP_ERROR=6,rc=zs,Vl.COMPLETE="complete",TE=Vl,bs.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ga=bs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,IE=Qe}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});const Fy="@firebase/firestore",Uy="4.9.1";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Wo="12.2.0";/**
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
 */const Es=new bc("@firebase/firestore");function So(){return Es.logLevel}function ie(n,...e){if(Es.logLevel<=Ae.DEBUG){const t=e.map(Yf);Es.debug(`Firestore (${Wo}): ${n}`,...t)}}function Br(n,...e){if(Es.logLevel<=Ae.ERROR){const t=e.map(Yf);Es.error(`Firestore (${Wo}): ${n}`,...t)}}function xo(n,...e){if(Es.logLevel<=Ae.WARN){const t=e.map(Yf);Es.warn(`Firestore (${Wo}): ${n}`,...t)}}function Yf(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function _e(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,CE(n,i,t)}function CE(n,e,t){let i=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Br(i),new Error(i)}function Ue(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||CE(e,o,i)}function Ie(n,e){return n}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class PE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class UC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class BC{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Mr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Mr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string",31837,{l:i}),new PE(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class zC{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jC{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new zC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class By{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $C{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const i=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new By(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new By(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Xf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=qC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Re(n,e){return n<e?-1:n>e?1:0}function gf(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return Gd(o)===Gd(l)?Re(o,l):Gd(o)?1:-1}return Re(n.length,e.length)}const WC=55296,HC=57343;function Gd(n){const e=n.charCodeAt(0);return e>=WC&&e<=HC}function Lo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const zy="__name__";class ir{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=ir.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const i=ir.isNumericId(e),o=ir.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):gf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ti.fromString(e.substring(4,e.length-2))}}class We extends ir{construct(e,t,i){return new We(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new re(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const GC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends ir{construct(e,t,i){return new Pt(e,t,i)}static isValidIdentifier(e){return GC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zy}static keyField(){return new Pt([zy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new re(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new re(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new re(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(We.fromString(e))}static fromName(e){return new de(We.fromString(e).popFirst(5))}static empty(){return new de(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new We(e.slice()))}}/**
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
 */function kE(n,e,t){if(!t)throw new re(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function KC(n,e,t,i){if(e===!0&&i===!0)throw new re(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jy(n){if(!de.isDocumentKey(n))throw new re(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $y(n){if(de.isDocumentKey(n))throw new re(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function NE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $c(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_e(12329,{type:typeof n})}function Mo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$c(n);throw new re(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ct(n,e){const t={typeString:n};return e&&(t.value=e),t}function Al(n,e){if(!NE(n))throw new re(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new re(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const qy=-62135596800,Wy=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Wy);return new Ke(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qy)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wy}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Al(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:ct("string",Ke._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Ke(0,0))}static max(){return new we(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ul=-1;function QC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new Ke(t+1,0):new Ke(t,i));return new Ci(o,de.empty(),e)}function YC(n){return new Ci(n.readTime,n.key,ul)}class Ci{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ci(we.min(),de.empty(),ul)}static max(){return new Ci(we.max(),de.empty(),ul)}}function XC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
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
 */const JC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ho(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==JC)throw n;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,i)=>{t(e)}))}static reject(e){return new H(((t,i)=>{i(e)}))}static waitFor(e){return new H(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next((o=>o?H.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new H(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((E=>{h[y]=E,++f,f===l&&i(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function eP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Go(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class qc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qc.ce=-1;/**
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
 */const Jf=-1;function Wc(n){return n==null}function Ic(n){return n===0&&1/n==-1/0}function tP(n){return typeof n=="number"&&Number.isInteger(n)&&!Ic(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const DE="";function nP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Hy(e)),e=rP(n.get(t),e);return Hy(e)}function rP(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case DE:t+="";break;default:t+=l}}return t}function Hy(n){return n+DE+""}/**
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
 */function Gy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function VE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qu(this.root,e,this.comparator,!0)}}class Qu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Ct.RED,this.left=o??Ct.EMPTY,this.right=l??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Ct(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ky(this.data.getIterator())}getIteratorFrom(e){return new Ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new yt(Pt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Lo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class OE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new OE("Invalid base64 string: "+l):l}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const iP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(n){if(Ue(!!n,39018),typeof n=="string"){let e=0;const t=iP.exec(n);if(Ue(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ki(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
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
 */const xE="server_timestamp",LE="__type__",ME="__previous_value__",bE="__local_write_time__";function Zf(n){return(n?.mapValue?.fields||{})[LE]?.stringValue===xE}function Hc(n){const e=n.mapValue.fields[ME];return Zf(e)?Hc(e):e}function cl(n){const e=Pi(n.mapValue.fields[bE].timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class sP{constructor(e,t,i,o,l,h,f,g,y,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E}}const Tc="(default)";class hl{constructor(e,t){this.projectId=e,this.database=t||Tc}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database===Tc}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const FE="__type__",oP="__max__",Yu={mapValue:{}},UE="__vector__",Sc="value";function Ni(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zf(n)?4:lP(n)?9007199254740991:aP(n)?10:11:_e(28295,{value:n})}function dr(n,e){if(n===e)return!0;const t=Ni(n);if(t!==Ni(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return cl(n).isEqual(cl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Pi(o.timestampValue),f=Pi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return ki(o.bytesValue).isEqual(ki(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?Ic(h)===Ic(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return Lo(n.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Gy(h)!==Gy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!dr(h[g],f[g])))return!1;return!0})(n,e);default:return _e(52216,{left:n})}}function dl(n,e){return(n.values||[]).find((t=>dr(t,e)))!==void 0}function bo(n,e){if(n===e)return 0;const t=Ni(n),i=Ni(e);if(t!==i)return Re(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=st(l.integerValue||l.doubleValue),g=st(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return Qy(n.timestampValue,e.timestampValue);case 4:return Qy(cl(n),cl(e));case 5:return gf(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=ki(l),g=ki(h);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let y=0;y<f.length&&y<g.length;y++){const E=Re(f[y],g[y]);if(E!==0)return E}return Re(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Re(st(l.latitude),st(h.latitude));return f!==0?f:Re(st(l.longitude),st(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Yy(n.arrayValue,e.arrayValue);case 10:return(function(l,h){const f=l.fields||{},g=h.fields||{},y=f[Sc]?.arrayValue,E=g[Sc]?.arrayValue,I=Re(y?.values?.length||0,E?.values?.length||0);return I!==0?I:Yy(y,E)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Yu.mapValue&&h===Yu.mapValue)return 0;if(l===Yu.mapValue)return 1;if(h===Yu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=h.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let I=0;I<g.length&&I<E.length;++I){const A=gf(g[I],E[I]);if(A!==0)return A;const z=bo(f[g[I]],y[E[I]]);if(z!==0)return z}return Re(g.length,E.length)})(n.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function Qy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=Pi(n),i=Pi(e),o=Re(t.seconds,i.seconds);return o!==0?o:Re(t.nanos,i.nanos)}function Yy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=bo(t[o],i[o]);if(l)return l}return Re(t.length,i.length)}function Fo(n){return yf(n)}function yf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Pi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ki(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return de.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=yf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${yf(t.fields[h])}`;return o+"}"})(n.mapValue):_e(61005,{value:n})}function ic(n){switch(Ni(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hc(n);return e?16+ic(e):16;case 5:return 2*n.stringValue.length;case 6:return ki(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+ic(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Rs(i.fields,((l,h)=>{o+=l.length+ic(h)})),o})(n.mapValue);default:throw _e(13486,{value:n})}}function Xy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function _f(n){return!!n&&"integerValue"in n}function ep(n){return!!n&&"arrayValue"in n}function Jy(n){return!!n&&"nullValue"in n}function Zy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sc(n){return!!n&&"mapValue"in n}function aP(n){return(n?.mapValue?.fields||{})[FE]?.stringValue===UE}function el(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Rs(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=el(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=el(n.arrayValue.values[t]);return e}return{...n}}function lP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===oP}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(t)}setAll(e){let t=Pt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=el(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];sc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Rs(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new In(el(this.value))}}function BE(n){const e=[];return Rs(n.fields,((t,i)=>{const o=new Pt([t]);if(sc(i)){const l=BE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new zn(e)}/**
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
 */class Bt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,we.min(),we.min(),we.min(),In.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,we.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,we.min(),we.min(),In.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,we.min(),we.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ac{constructor(e,t){this.position=e,this.inclusive=t}}function e_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=de.comparator(de.fromName(h.referenceValue),t.key):i=bo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function t_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Rc{constructor(e,t="asc"){this.field=e,this.dir=t}}function uP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class zE{}class ut extends zE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new hP(e,t,i):t==="array-contains"?new pP(e,i):t==="in"?new mP(e,i):t==="not-in"?new gP(e,i):t==="array-contains-any"?new yP(e,i):new ut(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new dP(e,i):new fP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bo(t,this.value)):t!==null&&Ni(this.value)===Ni(t)&&this.matchesComparison(bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends zE{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qn(e,t)}matches(e){return jE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function jE(n){return n.op==="and"}function $E(n){return cP(n)&&jE(n)}function cP(n){for(const e of n.filters)if(e instanceof qn)return!1;return!0}function vf(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+Fo(n.value);if($E(n))return n.filters.map((e=>vf(e))).join(",");{const e=n.filters.map((t=>vf(t))).join(",");return`${n.op}(${e})`}}function qE(n,e){return n instanceof ut?(function(i,o){return o instanceof ut&&i.op===o.op&&i.field.isEqual(o.field)&&dr(i.value,o.value)})(n,e):n instanceof qn?(function(i,o){return o instanceof qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&qE(h,o.filters[f])),!0):!1})(n,e):void _e(19439)}function WE(n){return n instanceof ut?(function(t){return`${t.field.canonicalString()} ${t.op} ${Fo(t.value)}`})(n):n instanceof qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(WE).join(" ,")+"}"})(n):"Filter"}class hP extends ut{constructor(e,t,i){super(e,t,i),this.key=de.fromName(i.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class dP extends ut{constructor(e,t){super(e,"in",t),this.keys=HE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class fP extends ut{constructor(e,t){super(e,"not-in",t),this.keys=HE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function HE(n,e){return(e.arrayValue?.values||[]).map((t=>de.fromName(t.referenceValue)))}class pP extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ep(t)&&dl(t.arrayValue,this.value)}}class mP extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dl(this.value.arrayValue,t)}}class gP extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dl(this.value.arrayValue,t)}}class yP extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ep(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>dl(this.value.arrayValue,i)))}}/**
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
 */class _P{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function n_(n,e=null,t=[],i=[],o=null,l=null,h=null){return new _P(n,e,t,i,o,l,h)}function tp(n){const e=Ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>vf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Wc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Fo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Fo(i))).join(",")),e.Te=t}return e.Te}function np(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!uP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!t_(n.startAt,e.startAt)&&t_(n.endAt,e.endAt)}function Ef(n){return de.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Rl{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function vP(n,e,t,i,o,l,h,f){return new Rl(n,e,t,i,o,l,h,f)}function rp(n){return new Rl(n)}function r_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function GE(n){return n.collectionGroup!==null}function tl(n){const e=Ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new yt(Pt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Rc(l,i))})),t.has(Pt.keyField().canonicalString())||e.Ie.push(new Rc(Pt.keyField(),i))}return e.Ie}function ar(n){const e=Ie(n);return e.Ee||(e.Ee=EP(e,tl(n))),e.Ee}function EP(n,e){if(n.limitType==="F")return n_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Rc(o.field,l)}));const t=n.endAt?new Ac(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ac(n.startAt.position,n.startAt.inclusive):null;return n_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function wf(n,e){const t=n.filters.concat([e]);return new Rl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function If(n,e,t){return new Rl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Gc(n,e){return np(ar(n),ar(e))&&n.limitType===e.limitType}function KE(n){return`${tp(ar(n))}|lt:${n.limitType}`}function Ao(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>WE(o))).join(", ")}]`),Wc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Fo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Fo(o))).join(",")),`Target(${i})`})(ar(n))}; limitType=${n.limitType})`}function Kc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):de.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of tl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const y=e_(h,f,g);return h.inclusive?y<=0:y<0})(i.startAt,tl(i),o)||i.endAt&&!(function(h,f,g){const y=e_(h,f,g);return h.inclusive?y>=0:y>0})(i.endAt,tl(i),o))})(n,e)}function wP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function QE(n){return(e,t)=>{let i=!1;for(const o of tl(n)){const l=IP(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function IP(n,e,t){const i=n.field.isKeyField()?de.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),y=f.data.field(l);return g!==null&&y!==null?bo(g,y):_e(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:n.dir})}}/**
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
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return VE(this.inner)}size(){return this.innerSize}}/**
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
 */const TP=new Ze(de.comparator);function zr(){return TP}const YE=new Ze(de.comparator);function Ka(...n){let e=YE;for(const t of n)e=e.insert(t.key,t);return e}function XE(n){let e=YE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ps(){return nl()}function JE(){return nl()}function nl(){return new Cs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const SP=new Ze(de.comparator),AP=new yt(de.comparator);function Ce(...n){let e=AP;for(const t of n)e=e.add(t);return e}const RP=new yt(Re);function CP(){return RP}/**
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
 */function ip(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function ZE(n){return{integerValue:""+n}}function PP(n,e){return tP(e)?ZE(e):ip(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Qc{constructor(){this._=void 0}}function kP(n,e,t){return n instanceof fl?(function(o,l){const h={fields:{[LE]:{stringValue:xE},[bE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Zf(l)&&(l=Hc(l)),l&&(h.fields[ME]=l),{mapValue:h}})(t,e):n instanceof pl?tw(n,e):n instanceof ml?nw(n,e):(function(o,l){const h=ew(o,l),f=i_(h)+i_(o.Ae);return _f(h)&&_f(o.Ae)?ZE(f):ip(o.serializer,f)})(n,e)}function NP(n,e,t){return n instanceof pl?tw(n,e):n instanceof ml?nw(n,e):t}function ew(n,e){return n instanceof Cc?(function(i){return _f(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class fl extends Qc{}class pl extends Qc{constructor(e){super(),this.elements=e}}function tw(n,e){const t=rw(e);for(const i of n.elements)t.some((o=>dr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class ml extends Qc{constructor(e){super(),this.elements=e}}function nw(n,e){let t=rw(e);for(const i of n.elements)t=t.filter((o=>!dr(o,i)));return{arrayValue:{values:t}}}class Cc extends Qc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function i_(n){return st(n.integerValue||n.doubleValue)}function rw(n){return ep(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class DP{constructor(e,t){this.field=e,this.transform=t}}function VP(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof pl&&o instanceof pl||i instanceof ml&&o instanceof ml?Lo(i.elements,o.elements,dr):i instanceof Cc&&o instanceof Cc?dr(i.Ae,o.Ae):i instanceof fl&&o instanceof fl})(n.transform,e.transform)}class OP{constructor(e,t){this.version=e,this.transformResults=t}}class br{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new br}static exists(e){return new br(void 0,e)}static updateTime(e){return new br(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yc{}function iw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ow(n.key,br.none()):new Cl(n.key,n.data,br.none());{const t=n.data,i=In.empty();let o=new yt(Pt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Ps(n.key,i,new zn(o.toArray()),br.none())}}function xP(n,e,t){n instanceof Cl?(function(o,l,h){const f=o.value.clone(),g=o_(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Ps?(function(o,l,h){if(!oc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=o_(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(sw(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function rl(n,e,t,i){return n instanceof Cl?(function(l,h,f,g){if(!oc(l.precondition,h))return f;const y=l.value.clone(),E=a_(l.fieldTransforms,g,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Ps?(function(l,h,f,g){if(!oc(l.precondition,h))return f;const y=a_(l.fieldTransforms,g,h),E=h.data;return E.setAll(sw(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(n,e,t,i):(function(l,h,f){return oc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function LP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=ew(i.transform,o||null);l!=null&&(t===null&&(t=In.empty()),t.set(i.field,l))}return t||null}function s_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Lo(i,o,((l,h)=>VP(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cl extends Yc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ps extends Yc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function sw(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function o_(n,e,t){const i=new Map;Ue(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,NP(h,f,t[o]))}return i}function a_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,kP(l,h,e))}return i}class ow extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MP extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&xP(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=JE();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=iw(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&Lo(this.mutations,e.mutations,((t,i)=>s_(t,i)))&&Lo(this.baseMutations,e.baseMutations,((t,i)=>s_(t,i)))}}class sp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return SP})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new sp(e,t,i,o)}}/**
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
 */class FP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class UP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var lt,De;function BP(n){switch(n){case W.OK:return _e(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return _e(15467,{code:n})}}function aw(n){if(n===void 0)return Br("GRPC error has no .code"),W.UNKNOWN;switch(n){case lt.OK:return W.OK;case lt.CANCELLED:return W.CANCELLED;case lt.UNKNOWN:return W.UNKNOWN;case lt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case lt.INTERNAL:return W.INTERNAL;case lt.UNAVAILABLE:return W.UNAVAILABLE;case lt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case lt.NOT_FOUND:return W.NOT_FOUND;case lt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case lt.ABORTED:return W.ABORTED;case lt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case lt.DATA_LOSS:return W.DATA_LOSS;default:return _e(39323,{code:n})}}(De=lt||(lt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zP(){return new TextEncoder}/**
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
 */const jP=new Ti([4294967295,4294967295],0);function l_(n){const e=zP().encode(n),t=new wE;return t.update(e),new Uint8Array(t.digest())}function u_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ti([t,i],0),new Ti([o,l],0)]}class op{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Qa(`Invalid padding: ${t}`);if(i<0)throw new Qa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Qa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Qa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ti.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Ti.fromNumber(i)));return o.compare(jP)===1&&(o=new Ti([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=l_(e),[i,o]=u_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new op(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=l_(e),[i,o]=u_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Pl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Xc(we.min(),o,new Ze(Re),zr(),Ce())}}class Pl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Pl(i,t,Ce(),Ce(),Ce())}}/**
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
 */class ac{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class lw{constructor(e,t){this.targetId=e,this.Ce=t}}class uw{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class c_{constructor(){this.ve=0,this.Fe=h_(),this.Me=Nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),i=Ce();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new Pl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=h_()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $P{constructor(e){this.Ge=e,this.ze=new Map,this.je=zr(),this.Je=Xu(),this.He=Xu(),this.Ye=new Ze(Re)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Ef(l))if(i===0){const h=new de(l.path);this.et(t,h,Bt.newNoDocument(h,we.min()))}else Ue(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=ki(i).toUint8Array()}catch(g){if(g instanceof OE)return xo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new op(h,o,l)}catch(g){return xo(g instanceof Qa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&Ef(f.target)){const g=new de(f.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Bt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=Ce();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new Xc(e,t,this.Ye,this.je,i);return this.je=zr(),this.Je=Xu(),this.He=Xu(),this.Ye=new Ze(Re),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new c_,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new yt(Re),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new yt(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new c_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Xu(){return new Ze(de.comparator)}function h_(){return new Ze(de.comparator)}const qP={asc:"ASCENDING",desc:"DESCENDING"},WP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HP={and:"AND",or:"OR"};class GP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tf(n,e){return n.useProto3Json||Wc(e)?e:{value:e}}function Pc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function KP(n,e){return Pc(n,e.toTimestamp())}function lr(n){return Ue(!!n,49232),we.fromTimestamp((function(t){const i=Pi(t);return new Ke(i.seconds,i.nanos)})(n))}function ap(n,e){return Sf(n,e).canonicalString()}function Sf(n,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function hw(n){const e=We.fromString(n);return Ue(gw(e),10190,{key:e.toString()}),e}function Af(n,e){return ap(n.databaseId,e.path)}function Kd(n,e){const t=hw(e);if(t.get(1)!==n.databaseId.projectId)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new de(fw(t))}function dw(n,e){return ap(n.databaseId,e)}function QP(n){const e=hw(n);return e.length===4?We.emptyPath():fw(e)}function Rf(n){return new We(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fw(n){return Ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function d_(n,e,t){return{name:Af(n,e),fields:t.value.mapValue.fields}}function YP(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,E){return y.useProto3Json?(Ue(E===void 0||typeof E=="string",58123),Nt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Nt.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const E=y.code===void 0?W.UNKNOWN:aw(y.code);return new re(E,y.message||"")})(h);t=new uw(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Kd(n,i.document.name),l=lr(i.document.updateTime),h=i.document.createTime?lr(i.document.createTime):we.min(),f=new In({mapValue:{fields:i.document.fields}}),g=Bt.newFoundDocument(o,l,h,f),y=i.targetIds||[],E=i.removedTargetIds||[];t=new ac(y,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Kd(n,i.document),l=i.readTime?lr(i.readTime):we.min(),h=Bt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new ac([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Kd(n,i.document),l=i.removedTargetIds||[];t=new ac([],l,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new UP(o,l),f=i.targetId;t=new lw(f,h)}}return t}function XP(n,e){let t;if(e instanceof Cl)t={update:d_(n,e.key,e.value)};else if(e instanceof ow)t={delete:Af(n,e.key)};else if(e instanceof Ps)t={update:d_(n,e.key,e.data),updateMask:ok(e.fieldMask)};else{if(!(e instanceof MP))return _e(16599,{Vt:e.type});t={verify:Af(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof fl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof pl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ml)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Cc)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw _e(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:KP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(n,e.precondition)),t}function JP(n,e){return n&&n.length>0?(Ue(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?lr(o.updateTime):lr(l);return h.isEqual(we.min())&&(h=lr(l)),new OP(h,o.transformResults||[])})(t,e)))):[]}function ZP(n,e){return{documents:[dw(n,e.path)]}}function ek(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=dw(n,o);const l=(function(y){if(y.length!==0)return mw(qn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((E=>(function(A){return{field:Ro(A.field),direction:rk(A.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Tf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function tk(n){let e=QP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(I){const A=pw(I);return A instanceof qn&&$E(A)?A.getFilters():[A]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((A=>(function($){return new Rc(Co($.field),(function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(A)))})(t.orderBy));let f=null;t.limit&&(f=(function(I){let A;return A=typeof I=="object"?I.value:I,Wc(A)?null:A})(t.limit));let g=null;t.startAt&&(g=(function(I){const A=!!I.before,z=I.values||[];return new Ac(z,A)})(t.startAt));let y=null;return t.endAt&&(y=(function(I){const A=!I.before,z=I.values||[];return new Ac(z,A)})(t.endAt)),vP(e,o,h,l,f,"F",g,y)}function nk(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pw(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Co(t.unaryFilter.field);return ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Co(t.unaryFilter.field);return ut.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Co(t.unaryFilter.field);return ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Co(t.unaryFilter.field);return ut.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ut.create(Co(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qn.create(t.compositeFilter.filters.map((i=>pw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(n):_e(30097,{filter:n})}function rk(n){return qP[n]}function ik(n){return WP[n]}function sk(n){return HP[n]}function Ro(n){return{fieldPath:n.canonicalString()}}function Co(n){return Pt.fromServerFormat(n.fieldPath)}function mw(n){return n instanceof ut?(function(t){if(t.op==="=="){if(Zy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NAN"}};if(Jy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NAN"}};if(Jy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(t.field),op:ik(t.op),value:t.value}}})(n):n instanceof qn?(function(t){const i=t.getFilters().map((o=>mw(o)));return i.length===1?i[0]:{compositeFilter:{op:sk(t.op),filters:i}}})(n):_e(54877,{filter:n})}function ok(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class vi{constructor(e,t,i,o,l=we.min(),h=we.min(),f=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ak{constructor(e){this.yt=e}}function lk(n){const e=tk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?If(e,e.limit,"L"):e}/**
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
 */class uk{constructor(){this.Cn=new ck}addToCollectionParentIndex(e,t){return this.Cn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ci.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class ck{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new yt(We.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new yt(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const f_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yw=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(yw,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class Uo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Uo(0)}static cr(){return new Uo(-1)}}/**
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
 */const p_="LruGarbageCollector",hk=1048576;function m_([n,e],[t,i]){const o=Re(n,t);return o===0?Re(e,i):o}class dk{constructor(e){this.Ir=e,this.buffer=new yt(m_),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();m_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(p_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Go(t)?ie(p_,"Ignoring IndexedDB error during garbage collection: ",t):await Ho(t)}await this.Vr(3e5)}))}}class pk{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(qc.ce);const i=new dk(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(f_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),f_):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,l,h,f,g,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(i=I,f=Date.now(),this.removeTargets(e,i,t)))).next((I=>(l=I,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((I=>(y=Date.now(),So()<=Ae.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${I} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I}))))}}function mk(n,e){return new pk(n,e)}/**
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
 */class gk{constructor(){this.changes=new Cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class yk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class _k{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&rl(i.mutation,o,zn.empty(),Ke.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ce()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ce()){const o=ps();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Ka();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=ps();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ce())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=zr();const h=nl(),f=(function(){return nl()})();return t.forEach(((g,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Ps)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),rl(E.mutation,y,E.mutation.getFieldMask(),Ke.now())):h.set(y.key,zn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,E)=>h.set(y,E))),t.forEach(((y,E)=>f.set(y,new yk(E,h.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=nl();let o=new Ze(((h,f)=>h-f)),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let E=i.get(g)||zn.empty();E=f.applyToLocalView(y,E),i.set(g,E);const I=(o.get(f.batchId)||Ce()).add(g);o=o.insert(f.batchId,I)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,E=g.value,I=JE();E.forEach((A=>{if(!l.has(A)){const z=iw(t.get(A),i.get(A));z!==null&&I.set(A,z),l=l.add(A)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,I))}return H.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):GE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):H.resolve(ps());let f=ul,g=l;return h.next((y=>H.forEach(y,((E,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((A=>{g=g.insert(E,A)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,Ce()))).next((E=>({batchId:f,changes:XE(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((i=>{let o=Ka();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ka();return this.indexManager.getCollectionParents(e,l).next((f=>H.forEach(f,(g=>{const y=(function(I,A){return new Rl(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((E=>{E.forEach(((I,A)=>{h=h.insert(I,A)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Bt.newInvalidDocument(E)))}));let f=Ka();return h.forEach(((g,y)=>{const E=l.get(g);E!==void 0&&rl(E.mutation,y,zn.empty(),Ke.now()),Kc(t,y)&&(f=f.insert(g,y))})),f}))}}/**
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
 */class vk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return H.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:lk(o.bundledQuery),readTime:lr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class Ek{constructor(){this.overlays=new Ze(de.comparator),this.qr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ps();return H.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=ps(),l=t.length+1,h=new de(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new Ze(((y,E)=>y-E));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=ps(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=ps(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,E)=>f.set(y,E))),!(f.size()>=o)););return H.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new FP(t,i));let l=this.qr.get(t);l===void 0&&(l=Ce(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class wk{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class lp{constructor(){this.Qr=new yt(It.$r),this.Ur=new yt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new It(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new de(new We([])),i=new It(t,e),o=new It(t,e+1),l=[];return this.Ur.forEachInRange([i,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new We([])),i=new It(t,e),o=new It(t,e+1);let l=Ce();return this.Ur.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new It(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Re(e.Yr,t.Yr)}static Kr(e,t){return Re(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
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
 */class Ik{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new yt(It.$r)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new bP(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Zr=this.Zr.add(new It(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Jf:this.tr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,o],(h=>{const f=this.Xr(h.Yr);l.push(f)})),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new yt(Re);return t.forEach((o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(f=>{i=i.add(f.Yr)}))})),H.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;de.isDocumentKey(l)||(l=l.child(""));const h=new It(new de(l),0);let f=new yt(Re);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Yr)),!0)}),h),H.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return H.forEach(t.mutations,(o=>{const l=new It(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new It(t,0),o=this.Zr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Tk{constructor(e){this.ri=e,this.docs=(function(){return new Ze(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=zr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=zr();const h=t.path,f=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||XC(YC(E),i)<=0||(o.has(E.key)||Kc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ii(e,t){return H.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new Sk(this)}getSize(e){return H.resolve(this.size)}}class Sk extends gk{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),H.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Ak{constructor(e){this.persistence=e,this.si=new Cs((t=>tp(t)),np),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.oi=0,this._i=new lp,this.targetCount=0,this.ai=Uo.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),H.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Uo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Pr(t),H.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.si.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),H.waitFor(l).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),H.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this._i.containsKey(t))}}/**
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
 */class _w{constructor(e,t){this.ui={},this.overlays={},this.ci=new qc(0),this.li=!1,this.li=!0,this.hi=new wk,this.referenceDelegate=e(this),this.Pi=new Ak(this),this.indexManager=new uk,this.remoteDocumentCache=(function(o){return new Tk(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new ak(t),this.Ii=new vk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ek,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new Ik(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){ie("MemoryPersistence","Starting transaction:",e);const o=new Rk(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return H.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class Rk extends ZC{constructor(e){super(),this.currentSequenceNumber=e}}class up{constructor(e){this.persistence=e,this.Ri=new lp,this.Vi=null}static mi(e){return new up(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.fi,(i=>{const o=de.fromPath(i);return this.gi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class kc{constructor(e,t){this.persistence=e,this.pi=new Cs((i=>nP(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=mk(this,t)}static mi(e,t){return new kc(e,t)}Ei(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return H.forEach(this.pi,((i,o)=>this.br(e,i,o).next((l=>l?H.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((f=>{f||(i++,l.removeEntry(h,we.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ic(e.data.value)),t}br(e,t,i){return H.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class cp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=Ce(),o=Ce();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new cp(e,t.fromCache,i,o)}}/**
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
 */class Ck{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Pk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return O0()?8:eP(zt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new Ck;return this.Ss(e,t,h).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,h,f.size)}))})).next((()=>l.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(So()<=Ae.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),H.resolve()):(So()<=Ae.DEBUG&&ie("QueryEngine","Query:",Ao(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(So()<=Ae.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):H.resolve())}ys(e,t){if(r_(t))return H.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=If(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Ce(...l);return this.ps.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const y=this.Ds(t,f);return this.Cs(t,y,h,g.readTime)?this.ys(e,If(t,null,"F")):this.vs(e,y,t,g)}))))})))))}ws(e,t,i,o){return r_(t)||o.isEqual(we.min())?H.resolve(null):this.ps.getDocuments(e,i).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,i,o)?H.resolve(null):(So()<=Ae.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ao(t)),this.vs(e,h,t,QC(o,ul)).next((f=>f)))}))}Ds(e,t){let i=new yt(QE(e));return t.forEach(((o,l)=>{Kc(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,i){return So()<=Ae.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Ao(t)),this.ps.getDocumentsMatchingQuery(e,t,Ci.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const hp="LocalStore",kk=3e8;class Nk{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new Ze(Re),this.xs=new Cs((l=>tp(l)),np),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _k(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Dk(n,e,t,i){return new Nk(n,e,t,i)}async function vw(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Ce();for(const y of o){h.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(i,g).next((y=>({Ls:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function Vk(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,E){const I=y.batch,A=I.keys();let z=H.resolve();return A.forEach(($=>{z=z.next((()=>E.getEntry(g,$))).next((q=>{const j=y.docVersions.get($);Ue(j!==null,48541),q.version.compareTo(j)<0&&(I.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),E.addEntry(q)))}))})),z.next((()=>f.mutationQueue.removeMutationBatch(g,I)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Ce();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Ew(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Ok(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const f=[];e.targetChanges.forEach(((E,I)=>{const A=o.get(I);if(!A)return;f.push(t.Pi.removeMatchingKeys(l,E.removedDocuments,I).next((()=>t.Pi.addMatchingKeys(l,E.addedDocuments,I))));let z=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?z=z.withResumeToken(Nt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,i)),o=o.insert(I,z),(function(q,j,te){return q.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=kk?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0})(A,z,E)&&f.push(t.Pi.updateTargetData(l,z))}));let g=zr(),y=Ce();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(xk(l,h,e.documentUpdates).next((E=>{g=E.ks,y=E.qs}))),!i.isEqual(we.min())){const E=t.Pi.getLastRemoteSnapshotVersion(l).next((I=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return H.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.Ms=o,l)))}function xk(n,e,t){let i=Ce(),o=Ce();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=zr();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ie(hp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function Lk(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Jf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Mk(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((l=>l?(o=l,H.resolve(o)):t.Pi.allocateTargetId(i).next((h=>(o=new vi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function Cf(n,e,t){const i=Ie(n),o=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Go(h))throw h;ie(hp,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function g_(n,e,t){const i=Ie(n);let o=we.min(),l=Ce();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,E){const I=Ie(g),A=I.xs.get(E);return A!==void 0?H.resolve(I.Ms.get(A)):I.Pi.getTargetData(y,E)})(i,h,ar(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Fs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:Ce()))).next((f=>(bk(i,wP(e),f),{documents:f,Qs:l})))))}function bk(n,e,t){let i=n.Os.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Os.set(e,i)}class y_{constructor(){this.activeTargetIds=CP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fk{constructor(){this.Mo=new y_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new y_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Uk{Oo(e){}shutdown(){}}/**
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
 */const __="ConnectivityMonitor";class v_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(__,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(__,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ju=null;function Pf(){return Ju===null?Ju=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ju++,"0x"+Ju.toString(16)}/**
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
 */const Qd="RestConnection",Bk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===Tc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,l){const h=Pf(),f=this.zo(e,t.toUriEncodedString());ie(Qd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,l);const{host:y}=new URL(f),E=jo(y);return this.Jo(e,f,g,i,E).then((I=>(ie(Qd,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw xo(Qd,`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",i),I}))}Ho(e,t,i,o,l,h){return this.Go(e,t,i,o,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const i=Bk[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
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
 */class jk{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ft="WebChannelConnection";class $k extends zk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,l){const h=Pf();return new Promise(((f,g)=>{const y=new IE;y.setWithCredentials(!0),y.listenOnce(TE.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case rc.NO_ERROR:const I=y.getResponseJson();ie(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),f(I);break;case rc.TIMEOUT:ie(Ft,`RPC '${e}' ${h} timed out`),g(new re(W.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const A=y.getStatus();if(ie(Ft,`RPC '${e}' ${h} failed with status:`,A,"response text:",y.getResponseText()),A>0){let z=y.getResponseJson();Array.isArray(z)&&(z=z[0]);const $=z?.error;if($&&$.status&&$.message){const q=(function(te){const ae=te.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ae)>=0?ae:W.UNKNOWN})($.status);g(new re(q,$.message))}else g(new re(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new re(W.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ie(Ft,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ie(Ft,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",E,i,15)}))}T_(e,t,i){const o=Pf(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=RE(),f=AE(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const E=l.join("");ie(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,g);const I=h.createWebChannel(E,g);this.I_(I);let A=!1,z=!1;const $=new jk({Yo:j=>{z?ie(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(A||(ie(Ft,`Opening RPC '${e}' stream ${o} transport.`),I.open(),A=!0),ie(Ft,`RPC '${e}' stream ${o} sending:`,j),I.send(j))},Zo:()=>I.close()}),q=(j,te,ae)=>{j.listen(te,(se=>{try{ae(se)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return q(I,Ga.EventType.OPEN,(()=>{z||(ie(Ft,`RPC '${e}' stream ${o} transport opened.`),$.o_())})),q(I,Ga.EventType.CLOSE,(()=>{z||(z=!0,ie(Ft,`RPC '${e}' stream ${o} transport closed`),$.a_(),this.E_(I))})),q(I,Ga.EventType.ERROR,(j=>{z||(z=!0,xo(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,j.name,"Message:",j.message),$.a_(new re(W.UNAVAILABLE,"The operation could not be completed")))})),q(I,Ga.EventType.MESSAGE,(j=>{if(!z){const te=j.data[0];Ue(!!te,16349);const ae=te,se=ae?.error||ae[0]?.error;if(se){ie(Ft,`RPC '${e}' stream ${o} received error:`,se);const Ee=se.status;let Ve=(function(S){const C=lt[S];if(C!==void 0)return aw(C)})(Ee),Pe=se.message;Ve===void 0&&(Ve=W.INTERNAL,Pe="Unknown error status: "+Ee+" with message "+se.message),z=!0,$.a_(new re(Ve,Pe)),I.close()}else ie(Ft,`RPC '${e}' stream ${o} received:`,te),$.u_(te)}})),q(f,SE.STAT_EVENT,(j=>{j.stat===mf.PROXY?ie(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===mf.NOPROXY&&ie(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Yd(){return typeof document<"u"?document:null}/**
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
 */function Jc(n){return new GP(n,!0)}/**
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
 */class ww{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const E_="PersistentStream";class Iw{constructor(e,t,i,o,l,h,f,g){this.Mi=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ww(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new re(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(E_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(E_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qk extends Iw{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=YP(this.serializer,e),i=(function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?lr(h.readTime):we.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=Rf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=Ef(g)?{documents:ZP(l,g)}:{query:ek(l,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=cw(l,h.resumeToken);const y=Tf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=Pc(l,h.snapshotVersion.toTimestamp());const y=Tf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=nk(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=Rf(this.serializer),t.removeTarget=e,this.q_(t)}}class Wk extends Iw{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=JP(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Rf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>XP(this.serializer,i)))};this.q_(t)}}/**
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
 */class Hk{}class Gk extends Hk{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,Sf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re(W.UNKNOWN,l.toString())}))}Ho(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Ho(e,Sf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new re(W.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Kk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Br(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ws="RemoteStore";class Qk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{i.enqueueAndForget((async()=>{ks(this)&&(ie(ws,"Restarting streams for network reachability change."),await(async function(g){const y=Ie(g);y.Ea.add(4),await kl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Zc(y)})(this))}))})),this.Ra=new Kk(i,o)}}async function Zc(n){if(ks(n))for(const e of n.da)await e(!0)}async function kl(n){for(const e of n.da)await e(!1)}function Tw(n,e){const t=Ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),mp(t)?pp(t):Ko(t).O_()&&fp(t,e))}function dp(n,e){const t=Ie(n),i=Ko(t);t.Ia.delete(e),i.O_()&&Sw(t,e),t.Ia.size===0&&(i.O_()?i.L_():ks(t)&&t.Ra.set("Unknown"))}function fp(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ko(n).Y_(e)}function Sw(n,e){n.Va.Ue(e),Ko(n).Z_(e)}function pp(n){n.Va=new $P({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ko(n).start(),n.Ra.ua()}function mp(n){return ks(n)&&!Ko(n).x_()&&n.Ia.size>0}function ks(n){return Ie(n).Ea.size===0}function Aw(n){n.Va=void 0}async function Yk(n){n.Ra.set("Online")}async function Xk(n){n.Ia.forEach(((e,t)=>{fp(n,e)}))}async function Jk(n,e){Aw(n),mp(n)?(n.Ra.ha(e),pp(n)):n.Ra.set("Unknown")}async function Zk(n,e,t){if(n.Ra.set("Online"),e instanceof uw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ia.delete(f),o.Va.removeTarget(f))})(n,e)}catch(i){ie(ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Nc(n,i)}else if(e instanceof ac?n.Va.Ze(e):e instanceof lw?n.Va.st(e):n.Va.tt(e),!t.isEqual(we.min()))try{const i=await Ew(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Va.Tt(h);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ia.get(y);E&&l.Ia.set(y,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,y)=>{const E=l.Ia.get(g);if(!E)return;l.Ia.set(g,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),Sw(l,g);const I=new vi(E.target,g,y,E.sequenceNumber);fp(l,I)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ie(ws,"Failed to raise snapshot:",i),await Nc(n,i)}}async function Nc(n,e,t){if(!Go(e))throw e;n.Ea.add(1),await kl(n),n.Ra.set("Offline"),t||(t=()=>Ew(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ie(ws,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Zc(n)}))}function Rw(n,e){return e().catch((t=>Nc(n,t,e)))}async function eh(n){const e=Ie(n),t=Di(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jf;for(;eN(e);)try{const o=await Lk(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,tN(e,o)}catch(o){await Nc(e,o)}Cw(e)&&Pw(e)}function eN(n){return ks(n)&&n.Ta.length<10}function tN(n,e){n.Ta.push(e);const t=Di(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Cw(n){return ks(n)&&!Di(n).x_()&&n.Ta.length>0}function Pw(n){Di(n).start()}async function nN(n){Di(n).ra()}async function rN(n){const e=Di(n);for(const t of n.Ta)e.ea(t.mutations)}async function iN(n,e,t){const i=n.Ta.shift(),o=sp.from(i,e,t);await Rw(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await eh(n)}async function sN(n,e){e&&Di(n).X_&&await(async function(i,o){if((function(h){return BP(h)&&h!==W.ABORTED})(o.code)){const l=i.Ta.shift();Di(i).B_(),await Rw(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await eh(i)}})(n,e),Cw(n)&&Pw(n)}async function w_(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),ie(ws,"RemoteStore received new credentials");const i=ks(t);t.Ea.add(3),await kl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Zc(t)}async function oN(n,e){const t=Ie(n);e?(t.Ea.delete(2),await Zc(t)):e||(t.Ea.add(2),await kl(t),t.Ra.set("Unknown"))}function Ko(n){return n.ma||(n.ma=(function(t,i,o){const l=Ie(t);return l.sa(),new qk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Xo:Yk.bind(null,n),t_:Xk.bind(null,n),r_:Jk.bind(null,n),H_:Zk.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),mp(n)?pp(n):n.Ra.set("Unknown")):(await n.ma.stop(),Aw(n))}))),n.ma}function Di(n){return n.fa||(n.fa=(function(t,i,o){const l=Ie(t);return l.sa(),new Wk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:nN.bind(null,n),r_:sN.bind(null,n),ta:rN.bind(null,n),na:iN.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await eh(n)):(await n.fa.stop(),n.Ta.length>0&&(ie(ws,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class gp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new gp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yp(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Go(n))return new re(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||de.comparator(t.key,i.key):(t,i)=>de.comparator(t.key,i.key),this.keyedMap=Ka(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class I_{constructor(){this.ga=new Ze(de.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Bo{constructor(e,t,i,o,l,h,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Bo(e,t,Vo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class aN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class lN{constructor(){this.queries=T_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=T_(),l.forEach(((h,f)=>{for(const g of f.Sa)g.onError(i)}))})(this,new re(W.ABORTED,"Firestore shutting down"))}}function T_(){return new Cs((n=>KE(n)),Gc)}async function kw(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new aN,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=yp(h,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&_p(t)}async function Nw(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function uN(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&_p(t)}function cN(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function _p(n){n.Ca.forEach((e=>{e.next()}))}var kf,S_;(S_=kf||(kf={})).Ma="default",S_.Cache="cache";class Dw{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Bo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kf.Cache}}/**
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
 */class Vw{constructor(e){this.key=e}}class Ow{constructor(e){this.key=e}}class hN{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=QE(e),this.tu=new Vo(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new I_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,I)=>{const A=o.get(E),z=Kc(this.query,I)?I:null,$=!!A&&this.mutatedKeys.has(A.key),q=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let j=!1;A&&z?A.data.isEqual(z.data)?$!==q&&(i.track({type:3,doc:z}),j=!0):this.su(A,z)||(i.track({type:2,doc:z}),j=!0,(g&&this.eu(z,g)>0||y&&this.eu(z,y)<0)&&(f=!0)):!A&&z?(i.track({type:0,doc:z}),j=!0):A&&!z&&(i.track({type:1,doc:A}),j=!0,(g||y)&&(f=!0)),j&&(z?(h=h.add(z),l=q?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{tu:h,iu:i,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,I)=>(function(z,$){const q=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:j})}};return q(z)-q($)})(E.type,I.type)||this.eu(E.doc,I.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,h.length!==0||y?{snapshot:new Bo(this.query,e.tu,l,h,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new I_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new Ow(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new Vw(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Bo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const vp="SyncEngine";class dN{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class fN{constructor(e){this.key=e,this.hu=!1}}class pN{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Cs((f=>KE(f)),Gc),this.Iu=new Map,this.Eu=new Set,this.du=new Ze(de.comparator),this.Au=new Map,this.Ru=new lp,this.Vu={},this.mu=new Map,this.fu=Uo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function mN(n,e,t=!0){const i=Uw(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await xw(i,e,t,!0),o}async function gN(n,e){const t=Uw(n);await xw(t,e,!0,!1)}async function xw(n,e,t,i){const o=await Mk(n.localStore,ar(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await yN(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&Tw(n.remoteStore,o),f}async function yN(n,e,t,i,o){n.pu=(I,A,z)=>(async function(q,j,te,ae){let se=j.view.ru(te);se.Cs&&(se=await g_(q.localStore,j.query,!1).then((({documents:V})=>j.view.ru(V,se))));const Ee=ae&&ae.targetChanges.get(j.targetId),Ve=ae&&ae.targetMismatches.get(j.targetId)!=null,Pe=j.view.applyChanges(se,q.isPrimaryClient,Ee,Ve);return R_(q,j.targetId,Pe.au),Pe.snapshot})(n,I,A,z);const l=await g_(n.localStore,e,!0),h=new hN(e,l.Qs),f=h.ru(l.documents),g=Pl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,g);R_(n,t,y.au);const E=new dN(e,t,h);return n.Tu.set(e,E),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function _N(n,e,t){const i=Ie(n),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((h=>!Gc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Cf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&dp(i.remoteStore,o.targetId),Nf(i,o.targetId)})).catch(Ho)):(Nf(i,o.targetId),await Cf(i.localStore,o.targetId,!0))}async function vN(n,e){const t=Ie(n),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),dp(t.remoteStore,i.targetId))}async function EN(n,e,t){const i=CN(n);try{const o=await(function(h,f){const g=Ie(h),y=Ke.now(),E=f.reduce(((z,$)=>z.add($.key)),Ce());let I,A;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let $=zr(),q=Ce();return g.Ns.getEntries(z,E).next((j=>{$=j,$.forEach(((te,ae)=>{ae.isValidDocument()||(q=q.add(te))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,$))).next((j=>{I=j;const te=[];for(const ae of f){const se=LP(ae,I.get(ae.key).overlayedDocument);se!=null&&te.push(new Ps(ae.key,se,BE(se.value.mapValue),br.exists(!0)))}return g.mutationQueue.addMutationBatch(z,y,te,f)})).next((j=>{A=j;const te=j.applyToLocalDocumentSet(I,q);return g.documentOverlayCache.saveOverlays(z,j.batchId,te)}))})).then((()=>({batchId:A.batchId,changes:XE(I)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let y=h.Vu[h.currentUser.toKey()];y||(y=new Ze(Re)),y=y.insert(f,g),h.Vu[h.currentUser.toKey()]=y})(i,o.batchId,t),await Nl(i,o.changes),await eh(i.remoteStore)}catch(o){const l=yp(o,"Failed to persist write");t.reject(l)}}async function Lw(n,e){const t=Ie(n);try{const i=await Ok(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ue(h.hu,14607):o.removedDocuments.size>0&&(Ue(h.hu,42227),h.hu=!1))})),await Nl(t,i,e)}catch(i){await Ho(i)}}function A_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Ie(h);g.onlineState=f;let y=!1;g.queries.forEach(((E,I)=>{for(const A of I.Sa)A.va(f)&&(y=!0)})),y&&_p(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function wN(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new Ze(de.comparator);h=h.insert(l,Bt.newNoDocument(l,we.min()));const f=Ce().add(l),g=new Xc(we.min(),new Map,new Ze(Re),h,f);await Lw(i,g),i.du=i.du.remove(l),i.Au.delete(e),Ep(i)}else await Cf(i.localStore,e,!1).then((()=>Nf(i,e,t))).catch(Ho)}async function IN(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await Vk(t.localStore,e);bw(t,i,null),Mw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Nl(t,o)}catch(o){await Ho(o)}}async function TN(n,e,t){const i=Ie(n);try{const o=await(function(h,f){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return g.mutationQueue.lookupMutationBatch(y,f).next((I=>(Ue(I!==null,37113),E=I.keys(),g.mutationQueue.removeMutationBatch(y,I)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>g.localDocuments.getDocuments(y,E)))}))})(i.localStore,e);bw(i,e,t),Mw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Nl(i,o)}catch(o){await Ho(o)}}function Mw(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function bw(n,e,t){const i=Ie(n);let o=i.Vu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function Nf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((i=>{n.Ru.containsKey(i)||Fw(n,i)}))}function Fw(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(dp(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Ep(n))}function R_(n,e,t){for(const i of t)i instanceof Vw?(n.Ru.addReference(i.key,e),SN(n,i)):i instanceof Ow?(ie(vp,"Document no longer in limbo: "+i.key),n.Ru.removeReference(i.key,e),n.Ru.containsKey(i.key)||Fw(n,i.key)):_e(19791,{wu:i})}function SN(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Eu.has(i)||(ie(vp,"New document in limbo: "+t),n.Eu.add(i),Ep(n))}function Ep(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new de(We.fromString(e)),i=n.fu.next();n.Au.set(i,new fN(t)),n.du=n.du.insert(t,i),Tw(n.remoteStore,new vi(ar(rp(t.path)),i,"TargetPurposeLimboResolution",qc.ce))}}async function Nl(n,e,t){const i=Ie(n),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{h.push(i.pu(g,e,t).then((y=>{if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:t?.targetChanges.get(g.targetId)?.current;i.sharedClientState.updateQueryState(g.targetId,E?"current":"not-current")}if(y){o.push(y);const E=cp.As(g.targetId,y);l.push(E)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,y){const E=Ie(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>H.forEach(y,(A=>H.forEach(A.Es,(z=>E.persistence.referenceDelegate.addReference(I,A.targetId,z))).next((()=>H.forEach(A.ds,(z=>E.persistence.referenceDelegate.removeReference(I,A.targetId,z)))))))))}catch(I){if(!Go(I))throw I;ie(hp,"Failed to update sequence numbers: "+I)}for(const I of y){const A=I.targetId;if(!I.fromCache){const z=E.Ms.get(A),$=z.snapshotVersion,q=z.withLastLimboFreeSnapshotVersion($);E.Ms=E.Ms.insert(A,q)}}})(i.localStore,l))}async function AN(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){ie(vp,"User change. New user:",e.toKey());const i=await vw(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new re(W.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Nl(t,i.Ls)}}function RN(n,e){const t=Ie(n),i=t.Au.get(e);if(i&&i.hu)return Ce().add(i.key);{let o=Ce();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function Uw(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wN.bind(null,e),e.Pu.H_=uN.bind(null,e.eventManager),e.Pu.yu=cN.bind(null,e.eventManager),e}function CN(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TN.bind(null,e),e}class Dc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Dk(this.persistence,new Pk,e.initialUser,this.serializer)}Cu(e){return new _w(up.mi,this.serializer)}Du(e){return new Fk}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Dc.provider={build:()=>new Dc};class PN extends Dc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof kc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new fk(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new _w((i=>kc.mi(i,t)),this.serializer)}}class Df{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>A_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=AN.bind(null,this.syncEngine),await oN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new lN})()}createDatastore(e){const t=Jc(e.databaseInfo.databaseId),i=(function(l){return new $k(l)})(e.databaseInfo);return(function(l,h,f,g){return new Gk(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new Qk(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>A_(this.syncEngine,t,0)),(function(){return v_.v()?new v_:new Uk})())}createSyncEngine(e,t){return(function(o,l,h,f,g,y,E){const I=new pN(o,l,h,f,g,y);return E&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Ie(t);ie(ws,"RemoteStore shutting down."),i.Ea.add(5),await kl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Df.provider={build:()=>new Df};/**
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
 *//**
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
 */class Bw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Vi="FirestoreClient";class kN{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Xf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{ie(Vi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ie(Vi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=yp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Xd(n,e){n.asyncQueue.verifyOperationInProgress(),ie(Vi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await vw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function C_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await NN(n);ie(Vi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>w_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>w_(e.remoteStore,o))),n._onlineComponents=e}async function NN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ie(Vi,"Using user provided OfflineComponentProvider");try{await Xd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;xo("Error using user provided cache. Falling back to memory cache: "+t),await Xd(n,new Dc)}}else ie(Vi,"Using default OfflineComponentProvider"),await Xd(n,new PN(void 0));return n._offlineComponents}async function zw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ie(Vi,"Using user provided OnlineComponentProvider"),await C_(n,n._uninitializedComponentsProvider._online)):(ie(Vi,"Using default OnlineComponentProvider"),await C_(n,new Df))),n._onlineComponents}function DN(n){return zw(n).then((e=>e.syncEngine))}async function jw(n){const e=await zw(n),t=e.eventManager;return t.onListen=mN.bind(null,e.syncEngine),t.onUnlisten=_N.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vN.bind(null,e.syncEngine),t}function VN(n,e,t={}){const i=new Mr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const E=new Bw({next:A=>{E.Nu(),h.enqueueAndForget((()=>Nw(l,I)));const z=A.docs.has(f);!z&&A.fromCache?y.reject(new re(W.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&A.fromCache&&g&&g.source==="server"?y.reject(new re(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(A)},error:A=>y.reject(A)}),I=new Dw(rp(f.path),E,{includeMetadataChanges:!0,qa:!0});return kw(l,I)})(await jw(n),n.asyncQueue,e,t,i))),i.promise}function ON(n,e,t={}){const i=new Mr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const E=new Bw({next:A=>{E.Nu(),h.enqueueAndForget((()=>Nw(l,I))),A.fromCache&&g.source==="server"?y.reject(new re(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(A)},error:A=>y.reject(A)}),I=new Dw(f,E,{includeMetadataChanges:!0,qa:!0});return kw(l,I)})(await jw(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function $w(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const P_=new Map;/**
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
 */const qw="firestore.googleapis.com",k_=!0;class N_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qw,this.ssl=k_}else this.host=e.host,this.ssl=e.ssl??k_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hk)throw new re(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$w(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class th{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new FC;switch(i.type){case"firstParty":return new jC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new re(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=P_.get(t);i&&(ie("ComponentProvider","Removing Datastore"),P_.delete(t),i.terminate())})(this),Promise.resolve()}}function xN(n,e,t,i={}){n=Mo(n,th);const o=jo(e),l=n._getSettings(),h={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&(lv(`https://${f}`),uv("Firestore",!0)),l.host!==qw&&l.host!==f&&xo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!Ri(g,h)&&(n._setSettings(g),i.mockUserToken)){let y,E;if(typeof i.mockUserToken=="string")y=i.mockUserToken,E=Ut.MOCK_USER;else{y=A0(i.mockUserToken,n._app?.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new re(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Ut(I)}n._authCredentials=new UC(new PE(y,E))}}/**
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
 */class Qo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Qo(this.firestore,e,this._query)}}class gt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Al(t,gt._jsonSchema))return new gt(e,i||null,new de(We.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:ct("string",gt._jsonSchemaVersion),referencePath:ct("string")};class Si extends Qo{constructor(e,t,i){super(e,t,rp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new de(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function wp(n,e,...t){if(n=kt(n),kE("collection","path",e),n instanceof th){const i=We.fromString(e,...t);return $y(i),new Si(n,null,i)}{if(!(n instanceof gt||n instanceof Si))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return $y(i),new Si(n.firestore,null,i)}}function Ww(n,e,...t){if(n=kt(n),arguments.length===1&&(e=Xf.newId()),kE("doc","path",e),n instanceof th){const i=We.fromString(e,...t);return jy(i),new gt(n,null,new de(i))}{if(!(n instanceof gt||n instanceof Si))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return jy(i),new gt(n.firestore,n instanceof Si?n.converter:null,new de(i))}}/**
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
 */const D_="AsyncQueue";class V_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ww(this,"async_queue_retry"),this._c=()=>{const i=Yd();i&&ie(D_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Yd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Yd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Mr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Go(e))throw e;ie(D_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Br("INTERNAL UNHANDLED ERROR: ",O_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=gp.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:O_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function O_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class nh extends th{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new V_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V_(e),this._firestoreClient=void 0,await e}}}function LN(n,e){const t=typeof n=="object"?n:Mf(),i=typeof n=="string"?n:Tc,o=Ss(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=T0("firestore");l&&xN(o,...l)}return o}function Ip(n){if(n._terminated)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||MN(n),n._firestoreClient}function MN(n){const e=n._freezeSettings(),t=(function(o,l,h,f){return new sP(o,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$w(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new kN(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Nt.fromBase64String(e))}catch(t){throw new re(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Al(e,Tn._jsonSchema))return Tn.fromBase64String(e.bytes)}}Tn._jsonSchemaVersion="firestore/bytes/1.0",Tn._jsonSchema={type:ct("string",Tn._jsonSchemaVersion),bytes:ct("string")};/**
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
 */class Tp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sp{constructor(e){this._methodName=e}}/**
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
 */class ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ur._jsonSchemaVersion}}static fromJSON(e){if(Al(e,ur._jsonSchema))return new ur(e.latitude,e.longitude)}}ur._jsonSchemaVersion="firestore/geoPoint/1.0",ur._jsonSchema={type:ct("string",ur._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class cr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:cr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Al(e,cr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new cr(e.vectorValues);throw new re(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cr._jsonSchemaVersion="firestore/vectorValue/1.0",cr._jsonSchema={type:ct("string",cr._jsonSchemaVersion),vectorValues:ct("object")};/**
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
 */const bN=/^__.*__$/;class FN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cl(e,this.data,t,this.fieldTransforms)}}function Hw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:n})}}class Ap{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Vc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Hw(this.Ac)&&bN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class UN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Jc(e)}Cc(e,t,i,o=!1){return new Ap({Ac:e,methodName:t,Dc:i,path:Pt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gw(n){const e=n._freezeSettings(),t=Jc(n._databaseId);return new UN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function BN(n,e,t,i,o,l={}){const h=n.Cc(l.merge||l.mergeFields?2:0,e,t,o);Yw("Data must be an object, but it was:",h,i);const f=Kw(i,h);let g,y;if(l.merge)g=new zn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const I of l.mergeFields){const A=jN(e,I,t);if(!h.contains(A))throw new re(W.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);qN(E,A)||E.push(A)}g=new zn(E),y=h.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,y=h.fieldTransforms;return new FN(new In(f),g,y)}class Rp extends Sp{_toFieldTransform(e){return new DP(e.path,new fl)}isEqual(e){return e instanceof Rp}}function zN(n,e,t,i=!1){return Cp(t,n.Cc(i?4:3,e))}function Cp(n,e){if(Qw(n=kt(n)))return Yw("Unsupported field value:",e,n),Kw(n,e);if(n instanceof Sp)return(function(i,o){if(!Hw(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Cp(f,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=kt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return PP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ke.fromDate(i);return{timestampValue:Pc(o.serializer,l)}}if(i instanceof Ke){const l=new Ke(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Pc(o.serializer,l)}}if(i instanceof ur)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Tn)return{bytesValue:cw(o.serializer,i._byteString)};if(i instanceof gt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ap(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof cr)return(function(h,f){return{mapValue:{fields:{[FE]:{stringValue:UE},[Sc]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw f.Sc("VectorValues must only contain numeric values.");return ip(f.serializer,y)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${$c(i)}`)})(n,e)}function Kw(n,e){const t={};return VE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(n,((i,o)=>{const l=Cp(o,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function Qw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ke||n instanceof ur||n instanceof Tn||n instanceof gt||n instanceof Sp||n instanceof cr)}function Yw(n,e,t){if(!Qw(t)||!NE(t)){const i=$c(t);throw i==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+i)}}function jN(n,e,t){if((e=kt(e))instanceof Tp)return e._internalPath;if(typeof e=="string")return Xw(n,e);throw Vc("Field path arguments must be of type string or ",n,!1,void 0,t)}const $N=new RegExp("[~\\*/\\[\\]]");function Xw(n,e,t){if(e.search($N)>=0)throw Vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Tp(...e.split("."))._internalPath}catch{throw Vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new re(W.INVALID_ARGUMENT,f+n+g)}function qN(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Jw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class WN extends Jw{data(){return super.data()}}function Pp(n,e){return typeof e=="string"?Xw(n,e):e instanceof Tp?e._internalPath:e._delegate._internalPath}/**
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
 */function HN(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new re(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kp{}class GN extends kp{}function KN(n,e,...t){let i=[];e instanceof kp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof Np)).length,f=l.filter((g=>g instanceof rh)).length;if(h>1||h>0&&f>0)throw new re(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class rh extends GN{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new rh(e,t,i)}_apply(e){const t=this._parse(e);return Zw(e._query,t),new Qo(e.firestore,e.converter,wf(e._query,t))}_parse(e){const t=Gw(e.firestore);return(function(l,h,f,g,y,E,I){let A;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new re(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){L_(I,E);const $=[];for(const q of I)$.push(x_(g,l,q));A={arrayValue:{values:$}}}else A=x_(g,l,I)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||L_(I,E),A=zN(f,h,I,E==="in"||E==="not-in");return ut.create(y,E,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function QN(n,e,t){const i=e,o=Pp("where",n);return rh._create(o,i,t)}class Np extends kp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Np(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)Zw(h,g),h=wf(h,g)})(e._query,t),new Qo(e.firestore,e.converter,wf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function x_(n,e,t){if(typeof(t=kt(t))=="string"){if(t==="")throw new re(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!GE(e)&&t.indexOf("/")!==-1)throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(We.fromString(t));if(!de.isDocumentKey(i))throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Xy(n,new de(i))}if(t instanceof gt)return Xy(n,t._key);throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$c(t)}.`)}function L_(n,e){if(!Array.isArray(n)||n.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zw(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class YN{convertValue(e,t="none"){switch(Ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Rs(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){const t=e.fields?.[Sc].arrayValue?.values?.map((i=>st(i.doubleValue)));return new cr(t)}convertGeoPoint(e){return new ur(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Hc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const t=Pi(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=We.fromString(e);Ue(gw(i),9688,{name:e});const o=new hl(i.get(1),i.get(3)),l=new de(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function XN(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class Ya{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends Jw{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Pp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ms._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:ct("string",ms._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class lc extends ms{data(e={}){return super.data(e)}}class Oo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ya(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new lc(this._firestore,this._userDataWriter,i.key,i,new Ya(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ya(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ya(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:JN(f.type),doc:g,oldIndex:y,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:n})}}/**
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
 */function ZN(n){n=Mo(n,gt);const e=Mo(n.firestore,nh);return VN(Ip(e),n._key).then((t=>nD(e,n,t)))}Oo._jsonSchemaVersion="firestore/querySnapshot/1.0",Oo._jsonSchema={type:ct("string",Oo._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class eI extends YN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function tI(n){n=Mo(n,Qo);const e=Mo(n.firestore,nh),t=Ip(e),i=new eI(e);return HN(n._query),ON(t,n._query).then((o=>new Oo(e,i,n,o)))}function eD(n,e){const t=Mo(n.firestore,nh),i=Ww(n),o=XN(n.converter,e);return tD(t,[BN(Gw(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,br.exists(!1))]).then((()=>i))}function tD(n,e){return(function(i,o){const l=new Mr;return i.asyncQueue.enqueueAndForget((async()=>EN(await DN(i),o,l))),l.promise})(Ip(n),e)}function nD(n,e,t){const i=t.docs.get(e._key),o=new eI(n);return new ms(n,o,e._key,i,new Ya(t.hasPendingWrites,t.fromCache),e.converter)}function rD(){return new Rp("serverTimestamp")}(function(e,t=!0){(function(o){Wo=o})($o),hr(new jn("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new nh(new BC(i.getProvider("auth-internal")),new $C(h,i.getProvider("app-check-internal")),(function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new re(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(y.options.projectId,E)})(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Sn(Fy,Uy,e),Sn(Fy,Uy,"esm2020")})();const nI=[{id:"1",title:"Camiseta React",category:"ropa",price:25,description:"Camiseta oficial de React."},{id:"2",title:"Taza JS",category:"hogar",price:10,description:"Taza con logo de JS."},{id:"3",title:"Auriculares",category:"electronica",price:75,description:"Auriculares con cancelación."},{id:"4",title:"Pantalón",category:"ropa",price:40,description:"Pantalón cómodo."}];function M_(){return new Promise(n=>{setTimeout(()=>n(nI),500)})}function b_(n){return new Promise((e,t)=>{setTimeout(()=>{const i=nI.find(o=>o.id===n);i?e(i):t(new Error("Producto no encontrado"))},400)})}const Jd={BASE_URL:"/EntregaFinal-Alvarez-Rey/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyCWwCML7b3FRkWra3IlfnPH3LNpQ42lN9Y",VITE_FIREBASE_APP_ID:"1:520661083542:web:daa1df86197f4a8e2ca9b7",VITE_FIREBASE_AUTH_DOMAIN:"vrbags-7a7fb.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-5LWCTWHDSV",VITE_FIREBASE_MESSAGING_SENDER_ID:"520661083542",VITE_FIREBASE_PROJECT_ID:"vrbags-7a7fb",VITE_FIREBASE_STORAGE_BUCKET:"vrbags-7a7fb.appspot.com"};var Zd={};function hs(n,e=""){try{if(typeof import.meta<"u"&&Jd&&Jd[n])return Jd[n]}catch{}try{if(typeof process<"u"&&Zd&&Zd[n])return Zd[n]}catch{}return e}const F_={apiKey:hs("VITE_FIREBASE_API_KEY"),authDomain:hs("VITE_FIREBASE_AUTH_DOMAIN"),projectId:hs("VITE_FIREBASE_PROJECT_ID"),storageBucket:hs("VITE_FIREBASE_STORAGE_BUCKET"),messagingSenderId:hs("VITE_FIREBASE_MESSAGING_SENDER_ID"),appId:hs("VITE_FIREBASE_APP_ID"),measurementId:hs("VITE_FIREBASE_MEASUREMENT_ID")};let fr=null;try{if(F_.projectId){const n=Lf(F_);try{xC(n)}catch{}fr=LN(n)}}catch(n){console.error("Firebase init failed, using mock",n),fr=null}async function iD(){if(!fr)return M_();try{const n=wp(fr,"products");return(await tI(n)).docs.map(t=>({id:t.id,...t.data()}))}catch(n){return console.error("Firestore getProducts failed, falling back to mock",n),M_()}}async function sD(n){if(!fr)return b_(n);try{const e=Ww(fr,"products",n),t=await ZN(e);if(t.exists())return{id:t.id,...t.data()};throw new Error("not found")}catch(e){return console.error("Firestore getProductById failed, falling back to mock",e),b_(n)}}async function oD(n){if(!fr)return await new Promise(e=>setTimeout(e,300)),"MOCK-"+Math.random().toString(36).slice(2,9).toUpperCase();try{const e=wp(fr,"orders");return(await eD(e,{...n,createdAt:rD()})).id}catch(e){return console.error("Firestore createOrder failed, fallback to mock id",e),await new Promise(t=>setTimeout(t,300)),"MOCK-"+Math.random().toString(36).slice(2,9).toUpperCase()}}async function aD(n){if(!fr)return[];try{const e=wp(fr,"orders"),t=KN(e,QN("buyer.uid","==",n));return(await tI(t)).docs.map(o=>({id:o.id,...o.data()}))}catch(e){return console.error("Firestore getOrdersByUser failed",e),[]}}function lD({item:n}){return U.createElement("div",{className:"card"},U.createElement("h3",null,n.title),U.createElement("p",null,n.category," • $",n.price),U.createElement(Ai,{to:`/item/${n.id}`,className:"btn"},"Ver detalle"))}function uD({items:n}){return n.length?U.createElement("div",{className:"grid"},n.map(e=>U.createElement(lD,{key:e.id,item:e}))):U.createElement("p",null,"No hay productos para mostrar.")}function U_(){const{categoryId:n}=Y_(),[e,t]=Y.useState([]),[i,o]=Y.useState(!0),[l,h]=Y.useState(null);return Y.useEffect(()=>{o(!0),h(null),iD().then(f=>{t(n?f.filter(g=>g.category===n):f)}).catch(f=>{h("No se pudo conectar a Firestore. Mostrando productos de prueba.")}).finally(()=>o(!1))},[n]),U.createElement("div",{style:{padding:20}},i?U.createElement("p",null,"Cargando productos..."):U.createElement(U.Fragment,null,l&&U.createElement("div",{style:{color:"red",marginBottom:8}},l),U.createElement(uD,{items:e})))}function cD({stock:n=0,initial:e=1,product:t}){const[i,o]=Y.useState(e),[l,h]=Y.useState(!1),{addItem:f}=_l(),g=()=>o(I=>Math.min(n,I+1)),y=()=>o(I=>Math.max(1,I-1));function E(){f(t,i),h(!0)}return l?U.createElement("p",null,"Producto agregado al carrito."):U.createElement("div",{style:{marginTop:10}},U.createElement("div",{className:"count"},U.createElement("button",{onClick:y},"-"),U.createElement("span",null,i),U.createElement("button",{onClick:g},"+")),U.createElement("button",{className:"btn primary",style:{marginTop:8},onClick:E},"Agregar al carrito"))}function hD({item:n}){return U.createElement("div",{style:{padding:20}},U.createElement("h2",null,n.title),U.createElement("p",null,U.createElement("strong",null,"Categoría:")," ",n.category),U.createElement("p",null,U.createElement("strong",null,"Precio:")," $",n.price),U.createElement("p",null,n.description),U.createElement(cD,{stock:10,initial:1,product:n}))}function dD(){const{itemId:n}=Y_(),[e,t]=Y.useState(null),[i,o]=Y.useState(!0),[l,h]=Y.useState(null);return Y.useEffect(()=>{o(!0),h(null),sD(n).then(f=>t(f)).catch(f=>h(f.message)).finally(()=>o(!1))},[n]),i?U.createElement("p",{style:{padding:20}},"Cargando detalle..."):l?U.createElement("p",{style:{padding:20}},"Error: ",l):U.createElement(hD,{item:e})}function fD(){const[n,e]=Y.useState(""),[t,i]=Y.useState(""),[o,l]=Y.useState(null),{login:h}=Sl(),f=Of();function g(y){y.preventDefault(),l(null),h(n,t).then(()=>f("/")).catch(E=>{console.error("Login error",E),l(E)})}return U.createElement("div",{style:{padding:20}},U.createElement("h2",null,"Login"),U.createElement("form",{onSubmit:g,style:{display:"grid",gap:8,maxWidth:400}},U.createElement("input",{value:n,onChange:y=>e(y.target.value),placeholder:"Email",required:!0}),U.createElement("input",{value:t,onChange:y=>i(y.target.value),placeholder:"Password",type:"password",required:!0}),U.createElement("button",{className:"btn primary",type:"submit"},"Ingresar")),o&&U.createElement("div",{style:{color:"red",marginTop:8}},U.createElement("strong",null,"Error:")," ",o.code||o.message,o.message==="Auth not initialized"&&U.createElement("div",null,"La autenticación no está inicializada. Verifica la conexión con Firebase y las variables de entorno.")),U.createElement("p",null,"¿No tenés cuenta? ",U.createElement(Ai,{to:"/register"},"Registrate")))}function pD(){const[n,e]=Y.useState(""),[t,i]=Y.useState(""),{register:o}=Sl(),l=Of(),[h,f]=Y.useState(null);function g(y){y.preventDefault(),f(null),o(n,t).then(()=>l("/")).catch(E=>{console.error("Register error",E),f(E)})}return U.createElement("div",{style:{padding:20}},U.createElement("h2",null,"Register"),U.createElement("form",{onSubmit:g,style:{display:"grid",gap:8,maxWidth:400}},U.createElement("input",{value:n,onChange:y=>e(y.target.value),placeholder:"Email",required:!0}),U.createElement("input",{value:t,onChange:y=>i(y.target.value),placeholder:"Password",type:"password",required:!0}),U.createElement("button",{className:"btn primary",type:"submit"},"Crear cuenta")),h&&U.createElement("div",{style:{color:"red",marginTop:8}},U.createElement("strong",null,"Error:")," ",h.code||h.message,h.message==="Auth not initialized"&&U.createElement("div",null,"La autenticación no está inicializada. Verifica la conexión con Firebase y las variables de entorno.")),U.createElement("p",null,"¿Ya tenés cuenta? ",U.createElement(Ai,{to:"/login"},"Ingresar")))}function mD(){const{user:n}=Sl(),[e,t]=Y.useState([]);return Y.useEffect(()=>{n&&aD(n.uid).then(t)},[n]),n?U.createElement("div",{style:{padding:20}},U.createElement("h2",null,"Mis órdenes"),e.length===0?U.createElement("p",null,"No tenés órdenes todavía."):e.map(i=>U.createElement("div",{key:i.id,style:{border:"1px solid #ddd",padding:8,marginBottom:8}},U.createElement("h4",null,"Orden ",i.id),U.createElement("p",null,"Total: $",i.total),U.createElement("p",null,"Items:"),U.createElement("ul",null,i.items.map(o=>U.createElement("li",{key:o.id},o.title," x ",o.quantity)))))):U.createElement("div",{style:{padding:20}},U.createElement("p",null,"Debes ingresar para ver tus órdenes."))}function gD({item:n}){const{removeItem:e}=_l();return U.createElement("div",{style:{borderBottom:"1px solid #ddd",padding:8}},U.createElement("h4",null,n.title),U.createElement("p",null,"Cantidad: ",n.quantity," • Precio unitario: $",n.price," • Subtotal: $",n.quantity*n.price),U.createElement("button",{className:"btn",onClick:()=>e(n.id)},"Eliminar"))}function yD(){const{items:n,totalPrice:e,clearCart:t}=_l();return n.length?U.createElement("div",{style:{padding:20}},U.createElement("h2",null,"Carrito"),n.map(i=>U.createElement(gD,{key:i.id,item:i})),U.createElement("h3",null,"Total: $",e),U.createElement("div",{style:{display:"flex",gap:8}},U.createElement(Ai,{to:"/checkout",className:"btn primary"},"Finalizar compra"),U.createElement("button",{className:"btn",onClick:t},"Vaciar carrito"))):U.createElement("div",{style:{padding:20}},U.createElement("p",null,"El carrito está vacío."),U.createElement(Ai,{to:"/"},"Volver al catálogo"))}function _D(){const{items:n,totalPrice:e,clearCart:t}=_l(),{user:i}=Sl(),[o,l]=Y.useState(""),[h,f]=Y.useState(""),[g,y]=Y.useState(null);function E(I){if(I.preventDefault(),!i){alert("Debes ingresar para completar la compra");return}const A={buyer:{name:o,email:h,uid:i.uid,userEmail:i.email},items:n.map(z=>({id:z.id,title:z.title,price:z.price,quantity:z.quantity})),total:e};y("...generando..."),oD(A).then(z=>{y(z),t()}).catch(z=>{console.error("createOrder error",z),y("ERROR")})}return g?U.createElement("div",{style:{padding:20}},U.createElement("h2",null,"Gracias por tu compra, ",o,"!"),U.createElement("p",null,"Tu id de orden es: ",U.createElement("strong",null,g)),U.createElement("p",null,"Se enviará un correo a: ",h)):i?U.createElement("div",{style:{padding:20}},U.createElement("h2",null,"Checkout"),U.createElement("p",null,"Total a pagar: $",e),U.createElement("form",{onSubmit:E,style:{display:"grid",gap:8,maxWidth:400}},U.createElement("input",{placeholder:"Nombre",value:o,onChange:I=>l(I.target.value),required:!0}),U.createElement("input",{placeholder:"Email",value:h,onChange:I=>f(I.target.value),type:"email",required:!0}),U.createElement("button",{className:"btn primary",type:"submit"},"Confirmar compra"))):U.createElement("div",{style:{padding:20}},U.createElement("p",null,"Debes ",U.createElement(Ai,{to:"/login"},"ingresar")," para finalizar la compra."))}function vD(){return U.createElement("h2",{style:{padding:20}},"404 - Página no encontrada")}function ED(){return U.createElement(g1,null,U.createElement(f0,null,U.createElement("div",null,U.createElement(_1,null),U.createElement(e0,null,U.createElement(rr,{path:"/",element:U.createElement(U_,null)}),U.createElement(rr,{path:"/category/:categoryId",element:U.createElement(U_,null)}),U.createElement(rr,{path:"/item/:itemId",element:U.createElement(dD,null)}),U.createElement(rr,{path:"/cart",element:U.createElement(yD,null)}),U.createElement(rr,{path:"/checkout",element:U.createElement(_D,null)}),U.createElement(rr,{path:"/orders",element:U.createElement(mD,null)}),U.createElement(rr,{path:"/login",element:U.createElement(fD,null)}),U.createElement(rr,{path:"/register",element:U.createElement(pD,null)}),U.createElement(rr,{path:"*",element:U.createElement(vD,null)})))))}pT.createRoot(document.getElementById("root")).render(U.createElement(U.StrictMode,null,U.createElement(a0,null,U.createElement(ED,null))));
