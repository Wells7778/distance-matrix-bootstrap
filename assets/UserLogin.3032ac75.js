import{_ as g,u as b,J as w,E as v,r as d,d as h,e as y,f as s,w as u,v as m}from"./index.7275cb80.js";import{i as E}from"./axios.8bfb5abf.js";import{E as f}from"./index.4c5ebeb1.js";var k={login:n=>E({url:"/admin/login",method:"POST",data:n})};const x={setup(){const n=b(),o=w(),c=v("mapStore"),{signIn:t,signOut:l}=c,r=d(""),a=d("");return{account:r,password:a,login:async()=>{var i;try{const e={account:r.value,password:a.value},{data:{status:p}}=await k.login(e);if(p)throw Error();t();const _=((i=o==null?void 0:o.query)==null?void 0:i.redirect)||"/";n.go(_),f.success({title:"\u767B\u5165\u6210\u529F",message:"\u5DF2\u6210\u529F\u767B\u5165"})}catch(e){l(),f.error({title:"\u767B\u5165\u5931\u6557",message:"\u5E33\u865F\u5BC6\u78BC\u932F\u8AA4"}),console.log(e)}}}}},P={class:"container"},U={class:"row"},B={class:"col-6 offset-3"},S={class:"form-outline mb-4"},V=s("label",{class:"form-label",for:"account"},"Account",-1),N={class:"form-outline mb-4"},O=s("label",{class:"form-label",for:"password"},"Password",-1);function R(n,o,c,t,l,r){return h(),y("div",P,[s("div",U,[s("div",B,[s("form",null,[s("div",S,[u(s("input",{id:"account","onUpdate:modelValue":o[0]||(o[0]=a=>t.account=a),type:"email",class:"form-control"},null,512),[[m,t.account]]),V]),s("div",N,[u(s("input",{id:"password","onUpdate:modelValue":o[1]||(o[1]=a=>t.password=a),type:"password",class:"form-control"},null,512),[[m,t.password]]),O]),s("button",{type:"button",class:"btn btn-primary btn-block mb-4",onClick:o[2]||(o[2]=(...a)=>t.login&&t.login(...a))}," \u767B\u5165 ")])])])])}var D=g(x,[["render",R]]);export{D as default};
