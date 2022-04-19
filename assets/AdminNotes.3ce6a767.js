import{M as V,F as x,N as k,O as R,E as P,P as S,Q as B,R as z}from"./el-table-column.e3edc911.js";import{_ as F,r as w,d as T,e as U,f as l,x as o,m as a,t as D,j as I,y as f}from"./index.75fd350e.js";import"./axios.b36cc3bd.js";import{N as u}from"./note.7c430d03.js";import{E as m}from"./index.4e26c43d.js";const y=w([]),h=async()=>{try{const{data:{data:s}}=await u.index();y.value=s}catch(s){console.log(s)}},M={setup(){h();const s=w({content:""}),n=w(!1),_=()=>{n.value=!0},e=()=>{n.value=!1},g=()=>{s.value={content:""},e()},v=t=>{s.value=t,_()},d=async t=>{try{const{data:{status:i}}=await u.delete(t);if(i)throw Error("\u522A\u9664\u5931\u6557");h(),m.success({title:"Success",message:"\u522A\u9664\u6D3E\u8ECA\u5099\u8A3B\u6210\u529F"})}catch(i){m.success({title:"Error",message:`\u522A\u9664\u6D3E\u8ECA\u5099\u8A3B\u5931\u6557${i.message}`})}},r=t=>u.update(t,s.value),p=()=>u.create(s.value);return{note:s,notes:y,editRow:v,deleteRow:d,dialogVisible:n,showEditPage:_,closeEditPage:e,handleClose:g,onSubmit:async()=>{try{const{id:t}=s.value;let i=null;if(t?i=await r(t):i=await p(),i.data.status)throw Error("\u5931\u6557");e(),h(),m.success({title:"\u6210\u529F",message:`${t?"\u66F4\u65B0":"\u65B0\u589E"}\u5B8C\u6210`})}catch(t){m.error({title:"Error",message:t.message})}},addNote:()=>{s.value={content:""},_()}}}},j={class:"row"},A=l("div",{class:"col-3"},[l("h1",{class:"mr-2"}," \u6D3E\u8ECA\u6CE8\u610F\u4E8B\u9805 ")],-1),O={class:"col-2"},Q={class:"row"},q={class:"col"},G={class:"cell"},H=f(" \u7DE8\u8F2F "),J=f(" \u522A\u9664 "),K={class:"row"},L={class:"col"},W={class:"dialog-footer"},X=f("\u53D6\u6D88"),Y=f("\u78BA\u5B9A");function Z(s,n,_,e,g,v){const d=V,r=x,p=k,b=R,E=P,t=S,i=B,C=z;return T(),U("div",null,[l("div",j,[A,l("div",O,[l("button",{class:"btn btn-primary mt-1",onClick:n[0]||(n[0]=(...c)=>e.addNote&&e.addNote(...c))}," \u65B0\u589E ")])]),l("div",Q,[l("div",q,[o(b,{data:e.notes,stripe:"",style:{width:"100%"}},{default:a(()=>[o(d,{"header-align":"center",align:"center",label:"\u9805\u6B21",width:"80"},{default:a(c=>[l("div",G,D(c.$index+1),1)]),_:1}),o(d,{prop:"content",label:"\u8AAA\u660E","header-align":"center"}),o(d,{label:"\u64CD\u4F5C",width:"150"},{default:a(c=>[o(r,{type:"info",size:"small",onClick:I(N=>e.editRow(c.row),["prevent"])},{default:a(()=>[H]),_:2},1032,["onClick"]),o(p,{title:"\u78BA\u5B9A\u522A\u9664?",onConfirm:N=>e.deleteRow(c.row.id)},{reference:a(()=>[o(r,{type:"danger",size:"small"},{default:a(()=>[J]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])])]),l("div",K,[l("div",L,[o(C,{modelValue:e.dialogVisible,"onUpdate:modelValue":n[2]||(n[2]=c=>e.dialogVisible=c),title:"\u6CE8\u610F\u4E8B\u9805","before-close":e.handleClose},{footer:a(()=>[l("span",W,[o(r,{onClick:e.closeEditPage},{default:a(()=>[X]),_:1},8,["onClick"]),o(r,{type:"primary",onClick:e.onSubmit},{default:a(()=>[Y]),_:1},8,["onClick"])])]),default:a(()=>[o(i,{model:e.note,"label-width":"50px"},{default:a(()=>[o(t,{label:"\u8AAA\u660E"},{default:a(()=>[o(E,{modelValue:e.note.content,"onUpdate:modelValue":n[1]||(n[1]=c=>e.note.content=c),type:"textarea",autosize:{minRows:10,maxRows:10}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","before-close"])])])])}var ae=F(M,[["render",Z]]);export{ae as default};