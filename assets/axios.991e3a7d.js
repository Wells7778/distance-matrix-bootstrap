import{u as Ce}from"./index.fb821783.js";var F={exports:{}},ie=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}},Re=ie,E=Object.prototype.toString;function H(r){return Array.isArray(r)}function k(r){return typeof r=="undefined"}function Oe(r){return r!==null&&!k(r)&&r.constructor!==null&&!k(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function oe(r){return E.call(r)==="[object ArrayBuffer]"}function xe(r){return E.call(r)==="[object FormData]"}function Ae(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&oe(r.buffer),e}function $e(r){return typeof r=="string"}function Ne(r){return typeof r=="number"}function ue(r){return r!==null&&typeof r=="object"}function N(r){if(E.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function ge(r){return E.call(r)==="[object Date]"}function Te(r){return E.call(r)==="[object File]"}function Pe(r){return E.call(r)==="[object Blob]"}function fe(r){return E.call(r)==="[object Function]"}function Ue(r){return ue(r)&&fe(r.pipe)}function je(r){return E.call(r)==="[object URLSearchParams]"}function Be(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Le(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function M(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),H(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function I(){var r={};function e(n,i){N(r[i])&&N(n)?r[i]=I(r[i],n):N(n)?r[i]=I({},n):H(n)?r[i]=n.slice():r[i]=n}for(var t=0,a=arguments.length;t<a;t++)M(arguments[t],e);return r}function De(r,e,t){return M(e,function(n,i){t&&typeof n=="function"?r[i]=Re(n,t):r[i]=n}),r}function _e(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:H,isArrayBuffer:oe,isBuffer:Oe,isFormData:xe,isArrayBufferView:Ae,isString:$e,isNumber:Ne,isObject:ue,isPlainObject:N,isUndefined:k,isDate:ge,isFile:Te,isBlob:Pe,isFunction:fe,isStream:Ue,isURLSearchParams:je,isStandardBrowserEnv:Le,forEach:M,merge:I,extend:De,trim:Be,stripBOM:_e},C=h;function K(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var le=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(C.isURLSearchParams(t))n=t.toString();else{var i=[];C.forEach(t,function(f,m){f===null||typeof f=="undefined"||(C.isArray(f)?m=m+"[]":f=[f],C.forEach(f,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),i.push(K(m)+"="+K(l))}))}),n=i.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},qe=h;function T(){this.handlers=[]}T.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};T.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};T.prototype.forEach=function(e){qe.forEach(this.handlers,function(a){a!==null&&e(a)})};var ke=T,Ie=h,Fe=function(e,t){Ie.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})},ce=function(e,t,a,n,i){return e.config=t,a&&(e.code=a),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},de={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},He=ce,he=function(e,t,a,n,i){var o=new Error(e);return He(o,t,a,n,i)},Me=he,Je=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(Me("Request failed with status code "+a.status,a.config,null,a.request,a))},A=h,ze=A.isStandardBrowserEnv()?function(){return{write:function(t,a,n,i,o,u){var f=[];f.push(t+"="+encodeURIComponent(a)),A.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),A.isString(i)&&f.push("path="+i),A.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ve=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},We=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Xe=Ve,Ke=We,Ge=function(e,t){return e&&!Xe(t)?Ke(e,t):t},L=h,Ye=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Qe=function(e){var t={},a,n,i;return e&&L.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=L.trim(u.substr(0,i)).toLowerCase(),n=L.trim(u.substr(i+1)),a){if(t[a]&&Ye.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},G=h,Ze=G.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=G.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function J(r){this.message=r}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var P=J,$=h,er=Je,rr=ze,tr=le,nr=Ge,ar=Qe,sr=Ze,D=he,ir=de,or=P,Y=function(e){return new Promise(function(a,n){var i=e.data,o=e.headers,u=e.responseType,f;function m(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}$.isFormData(i)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+y)}var d=nr(e.baseURL,e.url);s.open(e.method.toUpperCase(),tr(d,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function W(){if(!!s){var v="getAllResponseHeaders"in s?ar(s.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?s.responseText:s.response,w={data:S,status:s.status,statusText:s.statusText,headers:v,config:e,request:s};er(function(B){a(B),m()},function(B){n(B),m()},w),s=null}}if("onloadend"in s?s.onloadend=W:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(W)},s.onabort=function(){!s||(n(D("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){n(D("Network Error",e,null,s)),s=null},s.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",w=e.transitional||ir;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(D(S,e,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},$.isStandardBrowserEnv()){var X=(e.withCredentials||sr(d))&&e.xsrfCookieName?rr.read(e.xsrfCookieName):void 0;X&&(o[e.xsrfHeaderName]=X)}"setRequestHeader"in s&&$.forEach(o,function(S,w){typeof i=="undefined"&&w.toLowerCase()==="content-type"?delete o[w]:s.setRequestHeader(w,S)}),$.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(v){!s||(n(!v||v&&v.type?new or("canceled"):v),s.abort(),s=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),i||(i=null),s.send(i)})},c=h,Q=Fe,ur=ce,fr=de,lr={"Content-Type":"application/x-www-form-urlencoded"};function Z(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function cr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=Y),r}function dr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var U={transitional:fr,adapter:cr(),transformRequest:[function(e,t){return Q(t,"Accept"),Q(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(Z(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(Z(t,"application/json"),dr(e)):e}],transformResponse:[function(e){var t=this.transitional||U.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?ur(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){U.headers[e]={}});c.forEach(["post","put","patch"],function(e){U.headers[e]=c.merge(lr)});var z=U,hr=h,pr=z,mr=function(e,t,a){var n=this||pr;return hr.forEach(a,function(o){e=o.call(n,e,t)}),e},pe=function(e){return!!(e&&e.__CANCEL__)},ee=h,_=mr,vr=pe,yr=z,br=P;function q(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new br("canceled")}var Er=function(e){q(e),e.headers=e.headers||{},e.data=_.call(e,e.data,e.headers,e.transformRequest),e.headers=ee.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ee.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||yr.adapter;return t(e).then(function(n){return q(e),n.data=_.call(e,n.data,n.headers,e.transformResponse),n},function(n){return vr(n)||(q(e),n&&n.response&&(n.response.data=_.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,me=function(e,t){t=t||{};var a={};function n(s,l){return p.isPlainObject(s)&&p.isPlainObject(l)?p.merge(s,l):p.isPlainObject(l)?p.merge({},l):p.isArray(l)?l.slice():l}function i(s){if(p.isUndefined(t[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(e[s],t[s])}function o(s){if(!p.isUndefined(t[s]))return n(void 0,t[s])}function u(s){if(p.isUndefined(t[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(void 0,t[s])}function f(s){if(s in t)return n(e[s],t[s]);if(s in e)return n(void 0,e[s])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var y=m[l]||i,d=y(l);p.isUndefined(d)&&y!==f||(a[l]=d)}),a},ve={version:"0.26.1"},wr=ve.version,V={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){V[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var re={};V.transitional=function(e,t,a){function n(i,o){return"[Axios v"+wr+"] Transitional option '"+i+"'"+o+(a?". "+a:"")}return function(i,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!re[o]&&(re[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,u):!0}};function Sr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var i=a[n],o=e[i];if(o){var u=r[i],f=u===void 0||o(u,i,r);if(f!==!0)throw new TypeError("option "+i+" must be "+f);continue}if(t!==!0)throw Error("Unknown option "+i)}}var Cr={assertOptions:Sr,validators:V},ye=h,Rr=le,te=ke,ne=Er,j=me,be=Cr,R=be.validators;function x(r){this.defaults=r,this.interceptors={request:new te,response:new te}}x.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=j(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&be.assertOptions(a,{silentJSONParsing:R.transitional(R.boolean),forcedJSONParsing:R.transitional(R.boolean),clarifyTimeoutError:R.transitional(R.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(i=i&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!i){var f=[ne,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var m=t;n.length;){var s=n.shift(),l=n.shift();try{m=s(m)}catch(y){l(y);break}}try{u=ne(m)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};x.prototype.getUri=function(e){return e=j(this.defaults,e),Rr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ye.forEach(["delete","get","head","options"],function(e){x.prototype[e]=function(t,a){return this.request(j(a||{},{method:e,url:t,data:(a||{}).data}))}});ye.forEach(["post","put","patch"],function(e){x.prototype[e]=function(t,a,n){return this.request(j(n||{},{method:e,url:t,data:a}))}});var Or=x,xr=P;function O(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,i=t._listeners.length;for(n=0;n<i;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(o){t.subscribe(o),n=o}).then(a);return i.cancel=function(){t.unsubscribe(n)},i},r(function(n){t.reason||(t.reason=new xr(n),e(t.reason))})}O.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};O.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};O.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};O.source=function(){var e,t=new O(function(n){e=n});return{token:t,cancel:e}};var Ar=O,$r=function(e){return function(a){return e.apply(null,a)}},Nr=h,gr=function(e){return Nr.isObject(e)&&e.isAxiosError===!0},ae=h,Tr=ie,g=Or,Pr=me,Ur=z;function Ee(r){var e=new g(r),t=Tr(g.prototype.request,e);return ae.extend(t,g.prototype,e),ae.extend(t,e),t.create=function(n){return Ee(Pr(r,n))},t}var b=Ee(Ur);b.Axios=g;b.Cancel=P;b.CancelToken=Ar;b.isCancel=pe;b.VERSION=ve.version;b.all=function(e){return Promise.all(e)};b.spread=$r;b.isAxiosError=gr;F.exports=b;F.exports.default=b;var jr=F.exports;const se=localStorage.getItem("token"),we={baseURL:"https://distance-api.tms-project.one/api/v1/"};se&&(we.headers={Authorization:`Bearer ${se}`});const Br=jr.create(we);Br.interceptors.response.use(r=>{var e,t;return(t=(e=r.data)==null?void 0:e.data)!=null&&t.api_token&&localStorage.setItem("token",r.data.data.api_token),r},r=>(r.response.status===401&&(localStorage.removeItem("token"),Ce().push("/login")),Promise.reject(r)));export{Br as i};