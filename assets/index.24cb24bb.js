var le=Object.defineProperty,se=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var M=(t,e,o)=>e in t?le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,y=(t,e)=>{for(var o in e||(e={}))R.call(e,o)&&M(t,o,e[o]);if(O)for(var o of O(e))A.call(e,o)&&M(t,o,e[o]);return t},_=(t,e)=>se(t,ae(e));var K=(t,e)=>{var o={};for(var i in t)R.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&O)for(var i of O(t))e.indexOf(i)<0&&A.call(t,i)&&(o[i]=t[i]);return o};import{i as j}from"./axios.cd36f051.js";import{r as c,z as m,A as W,p as Z,q as H,d as L,l as T,x as Q,B as $,C as w,D as B,E as g,G as C,H as I,n as X,w as de,k as ue,F as ce,c as pe,I as he,o as Y}from"./index.082afcd2.js";var Be={index:()=>j({url:"/queries"}),new:t=>j({url:"/queries/new",params:t}),show:t=>j({url:`/queries/${t}`}),create:t=>j({url:"/queries",method:"POST",data:t})};let P=Symbol("map"),x=Symbol("api"),ee=Symbol("marker"),te=Symbol("mapTilesLoaded"),V=c(null),k="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var ve=function t(e,o){if(e===o)return!0;if(e&&o&&typeof e=="object"&&typeof o=="object"){if(e.constructor!==o.constructor)return!1;var i;if(Array.isArray(e)){var n=e.length;if(n!=o.length)return!1;for(i=n;i--!==0;)if(!t(e[i],o[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();var d=Object.keys(e);if(n=d.length,n!==Object.keys(o).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(o,d[i]))return!1;for(i=n;i--!==0;)if(n=d[i],!t(e[n],o[n]))return!1;return!0}return e!==e&&o!==o};class f{constructor({apiKey:e,channel:o,client:i,id:n="__googleMapsScriptId",libraries:d=[],language:a,region:h,version:u,mapIds:v,nonce:l,retries:r=3,url:s="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=u,this.apiKey=e,this.channel=o,this.client=i,this.id=n||"__googleMapsScriptId",this.libraries=d,this.language=a,this.region=h,this.mapIds=v,this.nonce=l,this.retries=r,this.url=s,f.instance){if(!ve(this.options,f.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(f.instance.options)}`);return f.instance}f.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,o)=>{this.loadCallback(i=>{i?o(i.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),o=document.createElement("script");o.id=this.id,o.type="text/javascript",o.src=e,o.onerror=this.loadErrorCallback.bind(this),o.defer=!0,o.async=!0,this.nonce&&(o.nonce=this.nonce),document.head.appendChild(o)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}let D="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var oe=m({props:{apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:D,setup(t,{emit:e}){let o=c(null),i=c(!1),n=c(null),d=c(null),a=c(!1);B(P,n),B(x,d),B(te,a);let h=()=>{const l=y({},t);Object.keys(l).forEach(s=>{l[s]===void 0&&delete l[s]});var r=s=>{var p;return s?{position:(p=d.value)===null||p===void 0?void 0:p.ControlPosition[s]}:{}};return r={scaleControlOptions:t.scaleControlStyle?{style:t.scaleControlStyle}:{},panControlOptions:r(t.panControlPosition),zoomControlOptions:r(t.zoomControlPosition),rotateControlOptions:r(t.rotateControlPosition),streetViewControlOptions:r(t.streetViewControlPosition),fullscreenControlOptions:r(t.fullscreenControlPosition),disableDefaultUI:t.disableDefaultUi},y(y({},l),r)},u=C([d,n],([l,r])=>{l&&r&&(l.event.addListenerOnce(r,"tilesloaded",()=>{a.value=!0}),setTimeout(u,0))},{immediate:!0}),v=()=>{try{const{apiKey:l,region:r,version:s,language:p,libraries:b}=t;V.value=new f({apiKey:l,region:r,version:s,language:p,libraries:b})}catch(l){console.error(l)}};return Y(()=>{v(),V.value.load().then(()=>{d.value=google.maps,n.value=new google.maps.Map(o.value,h()),D.forEach(r=>{var s;(s=n.value)===null||s===void 0||s.addListener(r,p=>e(r,p))}),i.value=!0;let l=Object.keys(t).filter(r=>!["center","zoom"].includes(r)).map(r=>w(t,r));C([()=>t.center,()=>t.zoom,...l],([r,s],[p,b])=>{var S,E,N;let z=h(),{center:Se,zoom:qe}=z,ne=K(z,["center","zoom"]);(S=n.value)===null||S===void 0||S.setOptions(ne),s!==void 0&&s!==b&&((E=n.value)===null||E===void 0||E.setZoom(s)),s=!p||r.lng!==p.lng||r.lat!==p.lat,r&&s&&((N=n.value)===null||N===void 0||N.panTo(r))})})}),I(()=>{var l;a.value=!1,n.value&&((l=d.value)===null||l===void 0||l.event.clearInstanceListeners(n.value))}),{mapRef:o,ready:i,map:n,api:d,mapTilesLoaded:a}}});function ie(t,e){if(e===void 0&&(e={}),e=e.insertAt,t&&typeof document!="undefined"){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}ie(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let ge=W("data-v-177d06e3");Z("data-v-177d06e3");let me={ref:"mapRef",class:"mapdiv"};H();let ye=ge(t=>(L(),T("div",null,[Q("div",me,null,512),$(t.$slots,"default",{ready:t.ready,map:t.map,api:t.api,mapTilesLoaded:t.mapTilesLoaded},void 0,!0)])));oe.render=ye;oe.__scopeId="data-v-177d06e3";let q=(t,e,o,i)=>{let n=null;const d=c(null),a=g(P,c(null)),h=g(x,c(null));return C([a,o],(u,[v,l])=>{u=JSON.stringify(o.value)!==JSON.stringify(l)||a.value!==v,a.value&&h.value&&u&&(n?(n.setOptions(o.value),n.setMap(a.value)):(d.value=n=new h.value[t](_(y({},o.value),{map:a.value})),e.forEach(r=>{n==null||n.addListener(r,s=>i(r,s))})))},{immediate:!0}),I(()=>{var u;n&&((u=h.value)===null||u===void 0||u.event.clearInstanceListeners(n),n.setMap(null))}),d},U="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var Ie=m({name:"Marker",props:{options:{type:Object,required:!0}},emits:U,setup(t,{emit:e,expose:o,slots:i}){return t=w(t,"options"),e=q("Marker",U,t,e),B(ee,e),o({marker:e}),()=>{var n;return(n=i.default)===null||n===void 0?void 0:n.call(i)}}});m({name:"Polyline",props:{options:{type:Object,required:!0}},emits:k,setup(t,{emit:e}){return t=w(t,"options"),{polyline:q("Polyline",k,t,e)}},render:()=>null});m({name:"Polygon",props:{options:{type:Object,required:!0}},emits:k,setup(t,{emit:e}){return t=w(t,"options"),{polygon:q("Polygon",k,t,e)}},render:()=>null});let F=k.concat(["bounds_changed"]);m({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:F,setup(t,{emit:e}){return t=w(t,"options"),{rectangle:q("Rectangle",F,t,e)}},render:()=>null});let J=k.concat(["center_changed","radius_changed"]);m({name:"Circle",props:{options:{type:Object,required:!0}},emits:J,setup(t,{emit:e}){return t=w(t,"options"),{circle:q("Circle",J,t,e)}},render:()=>null});var fe=m({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(t,{emit:e}){let o=c(null),i=g(P,c(null)),n=g(x,c(null)),d=g(te,c(!1)),a=c(!1),h=C([d,n,o],([l,r,s])=>{r&&l&&s&&(u(t.position),a.value=!0,e("content:loaded"),setTimeout(h,0))},{immediate:!0}),u=l=>{i.value&&n.value&&o.value&&i.value.controls[n.value.ControlPosition[l]].push(o.value)},v=l=>{if(i.value&&n.value){let r=null;l=n.value.ControlPosition[l],i.value.controls[l].forEach((s,p)=>{s===o.value&&(r=p)}),r!==null&&i.value.controls[l].removeAt(r)}};return I(()=>v(t.position)),C(()=>t.position,(l,r)=>{v(r),u(l)}),C(()=>t.index,l=>{l&&o.value&&(o.value.index=t.index)}),{controlRef:o,showContent:a}}});let Ce={ref:"controlRef"};fe.render=function(t){return L(),T(ce,null,[X(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),de(Q("div",Ce,[$(t.$slots,"default")],512),[[ue,t.showContent]])],2112)};let G="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var re=m({props:{options:{type:Object,default:()=>({})}},emits:G,setup(t,{slots:e,emit:o}){let i,n=c(),d=c(),a=g(P,c(null)),h=g(x,c(null)),u=g(ee,c(null)),v,l=pe(()=>{var r;return(r=e.default)===null||r===void 0?void 0:r.call(e).some(s=>s.type!==he)});return Y(()=>{C([a,()=>t.options],([,r],[s,p])=>{s=JSON.stringify(r)!==JSON.stringify(p)||a.value!==s,a.value&&h.value&&s&&(i?(i.setOptions(_(y({},r),{content:l.value?d.value:r.content})),u.value||i.open({map:a.value})):(n.value=i=new h.value.InfoWindow(_(y({},r),{content:l.value?d.value:r.content})),u.value?v=u.value.addListener("click",()=>{i.open({map:a.value,anchor:u.value})}):i.open({map:a.value}),G.forEach(b=>{i==null||i.addListener(b,S=>o(b,S))})))},{immediate:!0})}),I(()=>{var r;v&&v.remove(),i&&((r=h.value)===null||r===void 0||r.event.clearInstanceListeners(i),i.close())}),{infoWindow:n,infoWindowRef:d,hasSlotContent:l,anchor:u}}});ie(`
.info-window-content[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-content[data-v-5b373d6e] {
  display: block;
}
`);let be=W("data-v-5b373d6e");Z("data-v-5b373d6e");let ke={key:0,ref:"infoWindowRef",class:"info-window-content"};H();let we=be(t=>t.hasSlotContent?(L(),T("div",ke,[$(t.$slots,"default",{},void 0,!0)],512)):X("v-if",!0));re.render=we;re.__scopeId="data-v-5b373d6e";export{oe as A,Ie as H,Be as Q};
