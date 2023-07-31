/*! For license information please see fb9536e9.730aa35f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[601734],{759235:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=n(824246),o=n(511151);const i={id:"plugin-permission-common.permissionevaluator.authorizeconditional",title:"PermissionEvaluator.authorizeConditional()",description:"API reference for PermissionEvaluator.authorizeConditional()"},s=void 0,a={unversionedId:"reference/plugin-permission-common.permissionevaluator.authorizeconditional",id:"reference/plugin-permission-common.permissionevaluator.authorizeconditional",title:"PermissionEvaluator.authorizeConditional()",description:"API reference for PermissionEvaluator.authorizeConditional()",source:"@site/../docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permissionevaluator.authorizeconditional",permalink:"/docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.permissionevaluator.authorizeconditional",title:"PermissionEvaluator.authorizeConditional()",description:"API reference for PermissionEvaluator.authorizeConditional()"}},c={},u=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",i:"i"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:(0,t.jsx)(r.code,{children:"PermissionEvaluator"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional",children:(0,t.jsx)(r.code,{children:"authorizeConditional"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Evaluates ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermissions"})," and returns both definitive and conditional decisions, depending on the configured ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),". This method is useful when the caller needs more control over the processing of conditional decisions. For example, a plugin backend may want to use ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"conditions"})," in a database query instead of evaluating each resource in memory."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"authorizeConditional(requests: QueryPermissionRequest[], options?: EvaluatorRequestOptions): Promise<QueryPermissionResponse[]>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"requests"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.querypermissionrequest",children:"QueryPermissionRequest"}),"[]"]}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.evaluatorrequestoptions",children:"EvaluatorRequestOptions"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.i,{children:"(Optional)"})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.querypermissionresponse",children:"QueryPermissionResponse"}),"[]>"]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(a[u]=i[u]);if(r){s=r(i);for(var l=0;l<s.length;l++)t.call(i,s[l])&&(a[s[l]]=i[s[l]])}}return a}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,i={},u=null,l=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,t)&&!c.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:s.current}}r.jsx=u,r.jsxs=u},541535:(e,r,n)=>{var t=n(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,a=60110,c=60112;r.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),a=f("react.context"),c=f("react.forward_ref"),r.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||m}function v(){}function j(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var g=j.prototype=new v;g.constructor=j,t(g,y.prototype),g.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,n){var t,i={},s=null,a=null;if(null!=r)for(t in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(s=""+r.key),r)_.call(r,t)&&!x.hasOwnProperty(t)&&(i[t]=r[t]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(t in c=e.defaultProps)void 0===i[t]&&(i[t]=c[t]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function k(e,r,n,t,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===t?"."+E(c,0):t,Array.isArray(s)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),k(s,r,n,"",(function(e){return e}))):null!=s&&(O(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),r.push(s)),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+E(a=e[u],u);c+=k(a,r,n,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=k(a=a.value,r,n,l=t+E(a,u++),s);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function C(e,r,n){if(null==e)return e;var t=[],o=0;return k(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function S(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var z={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:C,forEach:function(e,r,n){C(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=y,r.PureComponent=j,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var i=t({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,c=b.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in r)_.call(r,l)&&!x.hasOwnProperty(l)&&(i[l]=void 0===r[l]&&void 0!==u?u[l]:r[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:S}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>a,ah:()=>i});var t=n(667294);const o=t.createContext({});function i(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function a({components:e,children:r,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),t.createElement(o.Provider,{value:a},r)}}}]);