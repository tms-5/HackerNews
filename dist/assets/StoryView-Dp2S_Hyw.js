import{o as r,c as l,i as p,a as c,t as i,n as _,d as m,r as f,B as g,H as b,C as k,x as C,g as y,l as B,F as h,e as S}from"./index-ChyuIwED.js";import{S as I,_ as d}from"./enum--DImcrnD.js";const $={props:{buttonLabel:{type:String,default:"Button"},buttonImage:{type:String,default:""},buttonClass:{type:String,default:""},onClick:{type:Function,default:()=>{}},style:{type:String,default:I.Default}},methods:{clickHandler(){this.onClick()}}},H=["src"];function v(t,e,o,a,u,s){return r(),l("button",{class:_(["button-component",o.buttonClass,`button--${o.style}`]),onClick:e[0]||(e[0]=(...n)=>s.clickHandler&&s.clickHandler(...n))},[o.buttonImage?(r(),l("img",{key:0,src:o.buttonImage,alt:"Button Image"},null,8,H)):p("",!0),c("span",null,i(o.buttonLabel),1)],2)}const L=d($,[["render",v]]),N=m({setup(){const t=f(null),e=k(),o=C(),a=parseInt(e.params.id);g(()=>{if(a){const s=b.getInstance();try{const n=s.findStoryById(a);t.value=n||null}catch(n){console.error("Erro ao buscar a história:",n)}}});function u(){o.go(-1)}return{story:t,goToHome:u}},components:{ButtonComponent:L}}),V={key:0,class:"c-white"},w=["innerHTML"],E={key:1};function F(t,e,o,a,u,s){const n=y("ButtonComponent");return r(),l(h,null,[B(n,{buttonLabel:"Voltar",onClick:t.goToHome},null,8,["onClick"]),t.story?(r(),l("div",V,[c("h2",null,i(t.story.title),1),c("p",null,"Por: "+i(t.story.by),1),c("p",null,"Pontuação: "+i(t.story.score),1),c("div",{innerHTML:t.story.url},null,8,w)])):(r(),l("div",E,"Carregando história..."))],64)}const T=d(N,[["render",F]]),x=m({components:{StoryById:T}});function D(t,e,o,a,u,s){const n=y("StoryById");return r(),S(n)}const R=d(x,[["render",D]]);export{R as default};