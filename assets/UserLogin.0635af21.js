import{_ as g,u as b,J as w,E as v,r as d,d as h,e as y,f as t,w as u,v as m}from"./index.c98e0b17.js";import{i as x}from"./axios.1f7f2a9f.js";import{E as p}from"./index.53ec1829.js";var E={login:n=>x({url:"/admin/login",method:"POST",data:n})};const k={setup(){const n=b(),o=w(),c=v("mapStore"),{signIn:s,signOut:l}=c,r=d(""),a=d("");return{account:r,password:a,login:async()=>{var i;try{const e={account:r.value,password:a.value},{data:{status:f}}=await E.login(e);if(f)throw Error();s();const _=((i=o==null?void 0:o.query)==null?void 0:i.redirect)||"/distance-matrix-bootstrap/";n.push(_),n.go(),p.success({title:"\u767B\u5165\u6210\u529F",message:"\u5DF2\u6210\u529F\u767B\u5165"})}catch(e){l(),p.error({title:"\u767B\u5165\u5931\u6557",message:"\u5E33\u865F\u5BC6\u78BC\u932F\u8AA4"}),console.log(e)}}}}},P={class:"container"},U={class:"row"},B={class:"col-6 offset-3"},S={class:"form-outline mb-4"},V=t("label",{class:"form-label",for:"account"},"Account",-1),N={class:"form-outline mb-4"},O=t("label",{class:"form-label",for:"password"},"Password",-1);function R(n,o,c,s,l,r){return h(),y("div",P,[t("div",U,[t("div",B,[t("form",null,[t("div",S,[u(t("input",{id:"account","onUpdate:modelValue":o[0]||(o[0]=a=>s.account=a),type:"email",class:"form-control"},null,512),[[m,s.account]]),V]),t("div",N,[u(t("input",{id:"password","onUpdate:modelValue":o[1]||(o[1]=a=>s.password=a),type:"password",class:"form-control"},null,512),[[m,s.password]]),O]),t("button",{type:"button",class:"btn btn-primary btn-block mb-4",onClick:o[2]||(o[2]=(...a)=>s.login&&s.login(...a))}," \u767B\u5165 ")])])])])}var D=g(k,[["render",R]]);export{D as default};
