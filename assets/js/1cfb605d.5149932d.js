/*! For license information please see 1cfb605d.5149932d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[3522],{63937:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var n=r(824246),o=r(511151);const i={id:"plugin-cicd-statistics.entitycicdstatisticscontent",title:"EntityCicdStatisticsContent",description:"API reference for EntityCicdStatisticsContent"},c=void 0,s={unversionedId:"reference/plugin-cicd-statistics.entitycicdstatisticscontent",id:"reference/plugin-cicd-statistics.entitycicdstatisticscontent",title:"EntityCicdStatisticsContent",description:"API reference for EntityCicdStatisticsContent",source:"@site/../docs/reference/plugin-cicd-statistics.entitycicdstatisticscontent.md",sourceDirName:"reference",slug:"/reference/plugin-cicd-statistics.entitycicdstatisticscontent",permalink:"/docs/reference/plugin-cicd-statistics.entitycicdstatisticscontent",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cicd-statistics.entitycicdstatisticscontent.md",tags:[],version:"current",frontMatter:{id:"plugin-cicd-statistics.entitycicdstatisticscontent",title:"EntityCicdStatisticsContent",description:"API reference for EntityCicdStatisticsContent"}},u={},a=[];function f(t){const e=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(e.a,{href:"/docs/reference/plugin-cicd-statistics",children:(0,n.jsx)(e.code,{children:"@backstage/plugin-cicd-statistics"})})," > ",(0,n.jsx)(e.a,{href:"/docs/reference/plugin-cicd-statistics.entitycicdstatisticscontent",children:(0,n.jsx)(e.code,{children:"EntityCicdStatisticsContent"})})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.b,{children:"Signature:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-typescript",children:'EntityCicdStatisticsContent: typeof import("./entity-page").EntityPageCicdCharts\n'})})]})}const l=function(t={}){const{wrapper:e}=Object.assign({},(0,o.ah)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(f,t)})):f(t)}},862525:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(t,o){for(var i,c,s=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),u=1;u<arguments.length;u++){for(var a in i=Object(arguments[u]))r.call(i,a)&&(s[a]=i[a]);if(e){c=e(i);for(var f=0;f<c.length;f++)n.call(i,c[f])&&(s[c[f]]=i[c[f]])}}return s}},371426:(t,e,r)=>{r(862525);var n=r(827378),o=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),e.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,r){var n,i={},a=null,f=null;for(n in void 0!==r&&(a=""+r),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(f=e.ref),e)s.call(e,n)&&!u.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:a,ref:f,props:i,_owner:c.current}}e.jsx=a,e.jsxs=a},541535:(t,e,r)=>{var n=r(862525),o=60103,i=60106;e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114;var c=60109,s=60110,u=60112;e.Suspense=60113;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),e.Fragment=l("react.fragment"),e.StrictMode=l("react.strict_mode"),e.Profiler=l("react.profiler"),c=l("react.provider"),s=l("react.context"),u=l("react.forward_ref"),e.Suspense=l("react.suspense"),a=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function v(t,e,r){this.props=t,this.context=e,this.refs=h,this.updater=r||y}function m(){}function g(t,e,r){this.props=t,this.context=e,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(d(85));this.updater.enqueueSetState(this,t,e,"setState")},v.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},m.prototype=v.prototype;var _=g.prototype=new m;_.constructor=g,n(_,v.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function S(t,e,r){var n,i={},c=null,s=null;if(null!=e)for(n in void 0!==e.ref&&(s=e.ref),void 0!==e.key&&(c=""+e.key),e)j.call(e,n)&&!C.hasOwnProperty(n)&&(i[n]=e[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];i.children=a}if(t&&t.defaultProps)for(n in u=t.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:t,key:c,ref:s,props:i,_owner:b.current}}function E(t){return"object"==typeof t&&null!==t&&t.$$typeof===o}var O=/\/+/g;function k(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function w(t,e,r,n,c){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var u=!1;if(null===t)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case i:u=!0}}if(u)return c=c(u=t),t=""===n?"."+k(u,0):n,Array.isArray(c)?(r="",null!=t&&(r=t.replace(O,"$&/")+"/"),w(c,e,r,"",(function(t){return t}))):null!=c&&(E(c)&&(c=function(t,e){return{$$typeof:o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(c,r+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+t)),e.push(c)),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var a=0;a<t.length;a++){var f=n+k(s=t[a],a);u+=w(s,e,r,f,c)}else if(f=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=p&&t[p]||t["@@iterator"])?t:null}(t),"function"==typeof f)for(t=f.call(t),a=0;!(s=t.next()).done;)u+=w(s=s.value,e,r,f=n+k(s,a++),c);else if("object"===s)throw e=""+t,Error(d(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return u}function x(t,e,r){if(null==t)return t;var n=[],o=0;return w(t,n,"","",(function(t){return e.call(r,t,o++)})),n}function P(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var $={current:null};function R(){var t=$.current;if(null===t)throw Error(d(321));return t}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};e.Children={map:x,forEach:function(t,e,r){x(t,(function(){e.apply(this,arguments)}),r)},count:function(t){var e=0;return x(t,(function(){e++})),e},toArray:function(t){return x(t,(function(t){return t}))||[]},only:function(t){if(!E(t))throw Error(d(143));return t}},e.Component=v,e.PureComponent=g,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,e.cloneElement=function(t,e,r){if(null==t)throw Error(d(267,t));var i=n({},t.props),c=t.key,s=t.ref,u=t._owner;if(null!=e){if(void 0!==e.ref&&(s=e.ref,u=b.current),void 0!==e.key&&(c=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(f in e)j.call(e,f)&&!C.hasOwnProperty(f)&&(i[f]=void 0===e[f]&&void 0!==a?a[f]:e[f])}var f=arguments.length-2;if(1===f)i.children=r;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];i.children=a}return{$$typeof:o,type:t.type,key:c,ref:s,props:i,_owner:u}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:s,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:t},t.Consumer=t},e.createElement=S,e.createFactory=function(t){var e=S.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:u,render:t}},e.isValidElement=E,e.lazy=function(t){return{$$typeof:f,_payload:{_status:-1,_result:t},_init:P}},e.memo=function(t,e){return{$$typeof:a,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return R().useCallback(t,e)},e.useContext=function(t,e){return R().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return R().useEffect(t,e)},e.useImperativeHandle=function(t,e,r){return R().useImperativeHandle(t,e,r)},e.useLayoutEffect=function(t,e){return R().useLayoutEffect(t,e)},e.useMemo=function(t,e){return R().useMemo(t,e)},e.useReducer=function(t,e,r){return R().useReducer(t,e,r)},e.useRef=function(t){return R().useRef(t)},e.useState=function(t){return R().useState(t)},e.version="17.0.2"},827378:(t,e,r)=>{t.exports=r(541535)},824246:(t,e,r)=>{t.exports=r(371426)},511151:(t,e,r)=>{r.d(e,{Zo:()=>s,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(t){const e=n.useContext(o);return n.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const c={};function s({components:t,children:e,disableParentContext:r}){let s;return s=r?"function"==typeof t?t({}):t||c:i(t),n.createElement(o.Provider,{value:s},e)}}}]);