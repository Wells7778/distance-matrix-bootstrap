var ut=Object.defineProperty,dt=Object.defineProperties;var ct=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var me=(t,e,r)=>e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,x=(t,e)=>{for(var r in e||(e={}))ge.call(e,r)&&me(t,r,e[r]);if(I)for(var r of I(e))ye.call(e,r)&&me(t,r,e[r]);return t},D=(t,e)=>dt(t,ct(e));var be=(t,e)=>{var r={};for(var i in t)ge.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&I)for(var i of I(t))e.indexOf(i)<0&&ye.call(t,i)&&(r[i]=t[i]);return r};import{u as ft,r as h,z as k,A as Le,p as Ue,q as Ie,d as oe,l as ae,x as De,B as se,C as _,D as z,E as O,G as N,H as V,n as Me,w as pt,k as ht,F as vt,c as mt,I as gt,o as Fe}from"./index.290208ce.js";var le={exports:{}},ze=function(e,r){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(r,n)}},yt=ze,q=Object.prototype.toString;function ue(t){return Array.isArray(t)}function ne(t){return typeof t=="undefined"}function bt(t){return t!==null&&!ne(t)&&t.constructor!==null&&!ne(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function He(t){return q.call(t)==="[object ArrayBuffer]"}function wt(t){return q.call(t)==="[object FormData]"}function Ct(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&He(t.buffer),e}function St(t){return typeof t=="string"}function Et(t){return typeof t=="number"}function Je(t){return t!==null&&typeof t=="object"}function H(t){if(q.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Ot(t){return q.call(t)==="[object Date]"}function kt(t){return q.call(t)==="[object File]"}function qt(t){return q.call(t)==="[object Blob]"}function Ve(t){return q.call(t)==="[object Function]"}function xt(t){return Je(t)&&Ve(t.pipe)}function Rt(t){return q.call(t)==="[object URLSearchParams]"}function Nt(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Pt(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function de(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),ue(t))for(var r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function ie(){var t={};function e(n,a){H(t[a])&&H(n)?t[a]=ie(t[a],n):H(n)?t[a]=ie({},n):ue(n)?t[a]=n.slice():t[a]=n}for(var r=0,i=arguments.length;r<i;r++)de(arguments[r],e);return t}function $t(t,e,r){return de(e,function(n,a){r&&typeof n=="function"?t[a]=yt(n,r):t[a]=n}),t}function At(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var g={isArray:ue,isArrayBuffer:He,isBuffer:bt,isFormData:wt,isArrayBufferView:Ct,isString:St,isNumber:Et,isObject:Je,isPlainObject:H,isUndefined:ne,isDate:Ot,isFile:kt,isBlob:qt,isFunction:Ve,isStream:xt,isURLSearchParams:Rt,isStandardBrowserEnv:Pt,forEach:de,merge:ie,extend:$t,trim:Nt,stripBOM:At},P=g;function we(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ke=function(e,r,i){if(!r)return e;var n;if(i)n=i(r);else if(P.isURLSearchParams(r))n=r.toString();else{var a=[];P.forEach(r,function(d,p){d===null||typeof d=="undefined"||(P.isArray(d)?p=p+"[]":d=[d],P.forEach(d,function(l){P.isDate(l)?l=l.toISOString():P.isObject(l)&&(l=JSON.stringify(l)),a.push(we(p)+"="+we(l))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Tt=g;function K(){this.handlers=[]}K.prototype.use=function(e,r,i){return this.handlers.push({fulfilled:e,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};K.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};K.prototype.forEach=function(e){Tt.forEach(this.handlers,function(i){i!==null&&e(i)})};var _t=K,jt=g,Bt=function(e,r){jt.forEach(e,function(n,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[a])})},We=function(e,r,i,n,a){return e.config=r,i&&(e.code=i),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Lt=We,Ge=function(e,r,i,n,a){var s=new Error(e);return Lt(s,r,i,n,a)},Ut=Ge,It=function(e,r,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):r(Ut("Request failed with status code "+i.status,i.config,null,i.request,i))},M=g,Dt=M.isStandardBrowserEnv()?function(){return{write:function(r,i,n,a,s,u){var d=[];d.push(r+"="+encodeURIComponent(i)),M.isNumber(n)&&d.push("expires="+new Date(n).toGMTString()),M.isString(a)&&d.push("path="+a),M.isString(s)&&d.push("domain="+s),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){var i=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Mt=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Ft=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},zt=Mt,Ht=Ft,Jt=function(e,r){return e&&!zt(r)?Ht(e,r):r},Y=g,Vt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Kt=function(e){var r={},i,n,a;return e&&Y.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),i=Y.trim(u.substr(0,a)).toLowerCase(),n=Y.trim(u.substr(a+1)),i){if(r[i]&&Vt.indexOf(i)>=0)return;i==="set-cookie"?r[i]=(r[i]?r[i]:[]).concat([n]):r[i]=r[i]?r[i]+", "+n:n}}),r},Ce=g,Wt=Ce.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),i;function n(a){var s=a;return e&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return i=n(window.location.href),function(s){var u=Ce.isString(s)?n(s):s;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}();function ce(t){this.message=t}ce.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};ce.prototype.__CANCEL__=!0;var W=ce,F=g,Xt=It,Gt=Dt,Zt=Ke,Qt=Jt,Yt=Kt,er=Wt,ee=Ge,tr=Xe,rr=W,Se=function(e){return new Promise(function(i,n){var a=e.data,s=e.headers,u=e.responseType,d;function p(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}F.isFormData(a)&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",c=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+c)}var f=Qt(e.baseURL,e.url);o.open(e.method.toUpperCase(),Zt(f,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function C(){if(!!o){var m="getAllResponseHeaders"in o?Yt(o.getAllResponseHeaders()):null,b=!u||u==="text"||u==="json"?o.responseText:o.response,E={data:b,status:o.status,statusText:o.statusText,headers:m,config:e,request:o};Xt(function(j){i(j),p()},function(j){n(j),p()},E),o=null}}if("onloadend"in o?o.onloadend=C:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(C)},o.onabort=function(){!o||(n(ee("Request aborted",e,"ECONNABORTED",o)),o=null)},o.onerror=function(){n(ee("Network Error",e,null,o)),o=null},o.ontimeout=function(){var b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",E=e.transitional||tr;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),n(ee(b,e,E.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",o)),o=null},F.isStandardBrowserEnv()){var S=(e.withCredentials||er(f))&&e.xsrfCookieName?Gt.read(e.xsrfCookieName):void 0;S&&(s[e.xsrfHeaderName]=S)}"setRequestHeader"in o&&F.forEach(s,function(b,E){typeof a=="undefined"&&E.toLowerCase()==="content-type"?delete s[E]:o.setRequestHeader(E,b)}),F.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(m){!o||(n(!m||m&&m.type?new rr("canceled"):m),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),a||(a=null),o.send(a)})},v=g,Ee=Bt,nr=We,ir=Xe,or={"Content-Type":"application/x-www-form-urlencoded"};function Oe(t,e){!v.isUndefined(t)&&v.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function ar(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Se),t}function sr(t,e,r){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(t)}var X={transitional:ir,adapter:ar(),transformRequest:[function(e,r){return Ee(r,"Accept"),Ee(r,"Content-Type"),v.isFormData(e)||v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)?e:v.isArrayBufferView(e)?e.buffer:v.isURLSearchParams(e)?(Oe(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):v.isObject(e)||r&&r["Content-Type"]==="application/json"?(Oe(r,"application/json"),sr(e)):e}],transformResponse:[function(e){var r=this.transitional||X.transitional,i=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&v.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?nr(s,this,"E_JSON_PARSE"):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};v.forEach(["delete","get","head"],function(e){X.headers[e]={}});v.forEach(["post","put","patch"],function(e){X.headers[e]=v.merge(or)});var fe=X,lr=g,ur=fe,dr=function(e,r,i){var n=this||ur;return lr.forEach(i,function(s){e=s.call(n,e,r)}),e},Ze=function(e){return!!(e&&e.__CANCEL__)},ke=g,te=dr,cr=Ze,fr=fe,pr=W;function re(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new pr("canceled")}var hr=function(e){re(e),e.headers=e.headers||{},e.data=te.call(e,e.data,e.headers,e.transformRequest),e.headers=ke.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ke.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||fr.adapter;return r(e).then(function(n){return re(e),n.data=te.call(e,n.data,n.headers,e.transformResponse),n},function(n){return cr(n)||(re(e),n&&n.response&&(n.response.data=te.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},y=g,Qe=function(e,r){r=r||{};var i={};function n(o,l){return y.isPlainObject(o)&&y.isPlainObject(l)?y.merge(o,l):y.isPlainObject(l)?y.merge({},l):y.isArray(l)?l.slice():l}function a(o){if(y.isUndefined(r[o])){if(!y.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],r[o])}function s(o){if(!y.isUndefined(r[o]))return n(void 0,r[o])}function u(o){if(y.isUndefined(r[o])){if(!y.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,r[o])}function d(o){if(o in r)return n(e[o],r[o]);if(o in e)return n(void 0,e[o])}var p={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:d};return y.forEach(Object.keys(e).concat(Object.keys(r)),function(l){var c=p[l]||a,f=c(l);y.isUndefined(f)&&c!==d||(i[l]=f)}),i},Ye={version:"0.26.1"},vr=Ye.version,pe={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){pe[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});var qe={};pe.transitional=function(e,r,i){function n(a,s){return"[Axios v"+vr+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,u){if(e===!1)throw new Error(n(s," has been removed"+(r?" in "+r:"")));return r&&!qe[s]&&(qe[s]=!0,console.warn(n(s," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,s,u):!0}};function mr(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var i=Object.keys(t),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var u=t[a],d=u===void 0||s(u,a,t);if(d!==!0)throw new TypeError("option "+a+" must be "+d);continue}if(r!==!0)throw Error("Unknown option "+a)}}var gr={assertOptions:mr,validators:pe},et=g,yr=Ke,xe=_t,Re=hr,G=Qe,tt=gr,$=tt.validators;function L(t){this.defaults=t,this.interceptors={request:new xe,response:new xe}}L.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=G(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var i=r.transitional;i!==void 0&&tt.assertOptions(i,{silentJSONParsing:$.transitional($.boolean),forcedJSONParsing:$.transitional($.boolean),clarifyTimeoutError:$.transitional($.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(r)===!1||(a=a&&f.synchronous,n.unshift(f.fulfilled,f.rejected))});var s=[];this.interceptors.response.forEach(function(f){s.push(f.fulfilled,f.rejected)});var u;if(!a){var d=[Re,void 0];for(Array.prototype.unshift.apply(d,n),d=d.concat(s),u=Promise.resolve(r);d.length;)u=u.then(d.shift(),d.shift());return u}for(var p=r;n.length;){var o=n.shift(),l=n.shift();try{p=o(p)}catch(c){l(c);break}}try{u=Re(p)}catch(c){return Promise.reject(c)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};L.prototype.getUri=function(e){return e=G(this.defaults,e),yr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};et.forEach(["delete","get","head","options"],function(e){L.prototype[e]=function(r,i){return this.request(G(i||{},{method:e,url:r,data:(i||{}).data}))}});et.forEach(["post","put","patch"],function(e){L.prototype[e]=function(r,i,n){return this.request(G(n||{},{method:e,url:r,data:i}))}});var br=L,wr=W;function A(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(i){if(!!r._listeners){var n,a=r._listeners.length;for(n=0;n<a;n++)r._listeners[n](i);r._listeners=null}}),this.promise.then=function(i){var n,a=new Promise(function(s){r.subscribe(s),n=s}).then(i);return a.cancel=function(){r.unsubscribe(n)},a},t(function(n){r.reason||(r.reason=new wr(n),e(r.reason))})}A.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};A.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};A.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};A.source=function(){var e,r=new A(function(n){e=n});return{token:r,cancel:e}};var Cr=A,Sr=function(e){return function(i){return e.apply(null,i)}},Er=g,Or=function(e){return Er.isObject(e)&&e.isAxiosError===!0},Ne=g,kr=ze,J=br,qr=Qe,xr=fe;function rt(t){var e=new J(t),r=kr(J.prototype.request,e);return Ne.extend(r,J.prototype,e),Ne.extend(r,e),r.create=function(n){return rt(qr(t,n))},r}var w=rt(xr);w.Axios=J;w.Cancel=W;w.CancelToken=Cr;w.isCancel=Ze;w.VERSION=Ye.version;w.all=function(e){return Promise.all(e)};w.spread=Sr;w.isAxiosError=Or;le.exports=w;le.exports.default=w;var Rr=le.exports;const Pe=localStorage.getItem("token"),nt={baseURL:"https://staging-distance-api.tms-project.one/api/v1/"};Pe&&(nt.headers={Authorization:`Bearer ${Pe}`});const B=Rr.create(nt);B.interceptors.response.use(t=>(t.data.data.api_token&&localStorage.setItem("token",t.data.data.api_token),t.status===403&&(localStorage.removeItem("token"),ft().push("/login")),t),t=>Promise.reject(t));var Dr={index:()=>B({url:"/queries"}),new:t=>B({url:"/queries/new",params:t}),show:t=>B({url:`/queries/${t}`}),create:t=>B({url:"/queries",method:"POST",data:t})};let Z=Symbol("map"),Q=Symbol("api"),it=Symbol("marker"),ot=Symbol("mapTilesLoaded"),$e=h(null),T="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var Nr=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var i;if(Array.isArray(e)){var n=e.length;if(n!=r.length)return!1;for(i=n;i--!==0;)if(!t(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();var a=Object.keys(e);if(n=a.length,n!==Object.keys(r).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[i]))return!1;for(i=n;i--!==0;)if(n=a[i],!t(e[n],r[n]))return!1;return!0}return e!==e&&r!==r};class R{constructor({apiKey:e,channel:r,client:i,id:n="__googleMapsScriptId",libraries:a=[],language:s,region:u,version:d,mapIds:p,nonce:o,retries:l=3,url:c="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=d,this.apiKey=e,this.channel=r,this.client=i,this.id=n||"__googleMapsScriptId",this.libraries=a,this.language=s,this.region=u,this.mapIds=p,this.nonce=o,this.retries=l,this.url=c,R.instance){if(!Nr(this.options,R.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(R.instance.options)}`);return R.instance}R.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,r)=>{this.loadCallback(i=>{i?r(i.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),r=document.createElement("script");r.id=this.id,r.type="text/javascript",r.src=e,r.onerror=this.loadErrorCallback.bind(this),r.defer=!0,r.async=!0,this.nonce&&(r.nonce=this.nonce),document.head.appendChild(r)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}let Ae="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var at=k({props:{apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:Ae,setup(t,{emit:e}){let r=h(null),i=h(!1),n=h(null),a=h(null),s=h(!1);z(Z,n),z(Q,a),z(ot,s);let u=()=>{const o=x({},t);Object.keys(o).forEach(c=>{o[c]===void 0&&delete o[c]});var l=c=>{var f;return c?{position:(f=a.value)===null||f===void 0?void 0:f.ControlPosition[c]}:{}};return l={scaleControlOptions:t.scaleControlStyle?{style:t.scaleControlStyle}:{},panControlOptions:l(t.panControlPosition),zoomControlOptions:l(t.zoomControlPosition),rotateControlOptions:l(t.rotateControlPosition),streetViewControlOptions:l(t.streetViewControlPosition),fullscreenControlOptions:l(t.fullscreenControlPosition),disableDefaultUI:t.disableDefaultUi},x(x({},o),l)},d=N([a,n],([o,l])=>{o&&l&&(o.event.addListenerOnce(l,"tilesloaded",()=>{s.value=!0}),setTimeout(d,0))},{immediate:!0}),p=()=>{try{const{apiKey:o,region:l,version:c,language:f,libraries:C}=t;$e.value=new R({apiKey:o,region:l,version:c,language:f,libraries:C})}catch(o){console.error(o)}};return Fe(()=>{p(),$e.value.load().then(()=>{a.value=google.maps,n.value=new google.maps.Map(r.value,u()),Ae.forEach(l=>{var c;(c=n.value)===null||c===void 0||c.addListener(l,f=>e(l,f))}),i.value=!0;let o=Object.keys(t).filter(l=>!["center","zoom"].includes(l)).map(l=>_(t,l));N([()=>t.center,()=>t.zoom,...o],([l,c],[f,C])=>{var S,m,b;let ve=u(),{center:E,zoom:he}=ve,j=be(ve,["center","zoom"]);(S=n.value)===null||S===void 0||S.setOptions(j),c!==void 0&&c!==C&&((m=n.value)===null||m===void 0||m.setZoom(c)),c=!f||l.lng!==f.lng||l.lat!==f.lat,l&&c&&((b=n.value)===null||b===void 0||b.panTo(l))})})}),V(()=>{var o;s.value=!1,n.value&&((o=a.value)===null||o===void 0||o.event.clearInstanceListeners(n.value))}),{mapRef:r,ready:i,map:n,api:a,mapTilesLoaded:s}}});function st(t,e){if(e===void 0&&(e={}),e=e.insertAt,t&&typeof document!="undefined"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}st(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let Pr=Le("data-v-177d06e3");Ue("data-v-177d06e3");let $r={ref:"mapRef",class:"mapdiv"};Ie();let Ar=Pr(t=>(oe(),ae("div",null,[De("div",$r,null,512),se(t.$slots,"default",{ready:t.ready,map:t.map,api:t.api,mapTilesLoaded:t.mapTilesLoaded},void 0,!0)])));at.render=Ar;at.__scopeId="data-v-177d06e3";let U=(t,e,r,i)=>{let n=null;const a=h(null),s=O(Z,h(null)),u=O(Q,h(null));return N([s,r],(d,[p,o])=>{d=JSON.stringify(r.value)!==JSON.stringify(o)||s.value!==p,s.value&&u.value&&d&&(n?(n.setOptions(r.value),n.setMap(s.value)):(a.value=n=new u.value[t](D(x({},r.value),{map:s.value})),e.forEach(l=>{n==null||n.addListener(l,c=>i(l,c))})))},{immediate:!0}),V(()=>{var d;n&&((d=u.value)===null||d===void 0||d.event.clearInstanceListeners(n),n.setMap(null))}),a},Te="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var Mr=k({name:"Marker",props:{options:{type:Object,required:!0}},emits:Te,setup(t,{emit:e,expose:r,slots:i}){return t=_(t,"options"),e=U("Marker",Te,t,e),z(it,e),r({marker:e}),()=>{var n;return(n=i.default)===null||n===void 0?void 0:n.call(i)}}});k({name:"Polyline",props:{options:{type:Object,required:!0}},emits:T,setup(t,{emit:e}){return t=_(t,"options"),{polyline:U("Polyline",T,t,e)}},render:()=>null});k({name:"Polygon",props:{options:{type:Object,required:!0}},emits:T,setup(t,{emit:e}){return t=_(t,"options"),{polygon:U("Polygon",T,t,e)}},render:()=>null});let _e=T.concat(["bounds_changed"]);k({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:_e,setup(t,{emit:e}){return t=_(t,"options"),{rectangle:U("Rectangle",_e,t,e)}},render:()=>null});let je=T.concat(["center_changed","radius_changed"]);k({name:"Circle",props:{options:{type:Object,required:!0}},emits:je,setup(t,{emit:e}){return t=_(t,"options"),{circle:U("Circle",je,t,e)}},render:()=>null});var Tr=k({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(t,{emit:e}){let r=h(null),i=O(Z,h(null)),n=O(Q,h(null)),a=O(ot,h(!1)),s=h(!1),u=N([a,n,r],([o,l,c])=>{l&&o&&c&&(d(t.position),s.value=!0,e("content:loaded"),setTimeout(u,0))},{immediate:!0}),d=o=>{i.value&&n.value&&r.value&&i.value.controls[n.value.ControlPosition[o]].push(r.value)},p=o=>{if(i.value&&n.value){let l=null;o=n.value.ControlPosition[o],i.value.controls[o].forEach((c,f)=>{c===r.value&&(l=f)}),l!==null&&i.value.controls[o].removeAt(l)}};return V(()=>p(t.position)),N(()=>t.position,(o,l)=>{p(l),d(o)}),N(()=>t.index,o=>{o&&r.value&&(r.value.index=t.index)}),{controlRef:r,showContent:s}}});let _r={ref:"controlRef"};Tr.render=function(t){return oe(),ae(vt,null,[Me(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),pt(De("div",_r,[se(t.$slots,"default")],512),[[ht,t.showContent]])],2112)};let Be="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var lt=k({props:{options:{type:Object,default:()=>({})}},emits:Be,setup(t,{slots:e,emit:r}){let i,n=h(),a=h(),s=O(Z,h(null)),u=O(Q,h(null)),d=O(it,h(null)),p,o=mt(()=>{var l;return(l=e.default)===null||l===void 0?void 0:l.call(e).some(c=>c.type!==gt)});return Fe(()=>{N([s,()=>t.options],([,l],[c,f])=>{c=JSON.stringify(l)!==JSON.stringify(f)||s.value!==c,s.value&&u.value&&c&&(i?(i.setOptions(D(x({},l),{content:o.value?a.value:l.content})),d.value||i.open({map:s.value})):(n.value=i=new u.value.InfoWindow(D(x({},l),{content:o.value?a.value:l.content})),d.value?p=d.value.addListener("click",()=>{i.open({map:s.value,anchor:d.value})}):i.open({map:s.value}),Be.forEach(C=>{i==null||i.addListener(C,S=>r(C,S))})))},{immediate:!0})}),V(()=>{var l;p&&p.remove(),i&&((l=u.value)===null||l===void 0||l.event.clearInstanceListeners(i),i.close())}),{infoWindow:n,infoWindowRef:a,hasSlotContent:o,anchor:d}}});st(`
.info-window-content[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-content[data-v-5b373d6e] {
  display: block;
}
`);let jr=Le("data-v-5b373d6e");Ue("data-v-5b373d6e");let Br={key:0,ref:"infoWindowRef",class:"info-window-content"};Ie();let Lr=jr(t=>t.hasSlotContent?(oe(),ae("div",Br,[se(t.$slots,"default",{},void 0,!0)],512)):Me("v-if",!0));lt.render=Lr;lt.__scopeId="data-v-5b373d6e";export{at as A,Mr as H,Dr as Q,B as i};
