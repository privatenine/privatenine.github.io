import{_ as U,u as R,r as p,a as j,o as D,b as q,c as A,d as M,e as O,f as P,w as H,g as d,h as _,i as e,n as c,j as l,k as s,l as a,m as i,T as L,v as N,p as m,q as $,s as Y}from"./index-9ec3385d.js";function V(v){const o=window.innerHeight||document.documentElement.clientHeight,{top:b,bottom:g}=v.getBoundingClientRect();return b<=o&&g>=0}const G="/assets/HOLOCUBE_03-7f6b98e1.jpg",J="/assets/HOLOCUBE_04-5e8553ab.jpg",K="/assets/Holocube_6-2c20c2e2.png",Q="/assets/Holocube_7-19616de9.png",W="/assets/Holocube_8-667ba29f.png",X="/assets/HOLOCUBE_10-5f5b82a3.jpg",Z="/assets/HOLOCUBE_12-e8a20af1.jpg";const t=v=>($("data-v-c2618897"),v=v(),Y(),v),ee={key:0,style:{width:"100vw",height:"100vh"}},te={key:1,class:"main"},se={class:"img-wrapper"},oe=t(()=>e("br",null,null,-1)),le={class:"blk-bg flex-center-horizontal"},ne={key:0},ie=t(()=>e("br",null,null,-1)),ae=t(()=>e("span",{class:"fw"},"five-axis CNC machine ",-1)),ce={key:1},de=t(()=>e("br",null,null,-1)),_e={key:2},ue=t(()=>e("br",null,null,-1)),re=t(()=>e("span",null,null,-1)),he=t(()=>e("span",null," ",-1)),me=["src"],fe=t(()=>e("img",{class:"img-box",src:G},null,-1)),pe=t(()=>e("img",{class:"img-box",src:J},null,-1)),be={class:"blk-bg flex-center-horizontal"},ve=t(()=>e("br",null,null,-1)),ge=["src"],we=t(()=>e("span",null," ",-1)),xe={key:0},ye=t(()=>e("span",{class:"fw"},"lead screw structure ",-1)),ke=t(()=>e("br",null,null,-1)),Ce={key:1},Ee=t(()=>e("br",null,null,-1)),Fe={key:2},He=t(()=>e("span",null,null,-1)),Be=t(()=>e("span",null," ",-1)),Oe=t(()=>e("span",null,null,-1)),Le={class:"blk-bg flex-center-horizontal"},Ne={class:c({"stream-height1":!0})},Ve={key:0},ze=t(()=>e("br",null,null,-1)),Ie=t(()=>e("span",{class:"fw"},"five-axis CNC machine ",-1)),Se={key:1},Te=t(()=>e("br",null,null,-1)),Ue={key:2},Re=t(()=>e("br",null,null,-1)),je=t(()=>e("span",null,null,-1)),De=t(()=>e("span",null," ",-1)),qe=t(()=>e("img",{class:"img-stream1",src:K},null,-1)),Ae={class:"blk-bg flex-center-horizontal"},Me={class:c({"stream-height1":!0})},Pe={key:0},$e=t(()=>e("br",null,null,-1)),Ye=t(()=>e("span",{class:"fw"},"five-axis CNC machine ",-1)),Ge={key:1},Je=t(()=>e("br",null,null,-1)),Ke={key:2},Qe=t(()=>e("br",null,null,-1)),We=t(()=>e("span",null,null,-1)),Xe=t(()=>e("span",null," ",-1)),Ze=t(()=>e("img",{class:"img-stream2",src:Q},null,-1)),et={class:"blk-bg flex-center-horizontal"},tt=t(()=>e("img",{style:{width:"100%"},src:W},null,-1)),st=t(()=>e("img",{class:"img-box",src:X},null,-1)),ot={class:"blk-bg flex-center-horizontal"},lt=t(()=>e("span",{class:"fw"},"80+ ",-1)),nt=t(()=>e("br",null,null,-1)),it=t(()=>e("span",{class:"fw"},"240 ",-1)),at=t(()=>e("img",{class:"img-box",src:Z},null,-1)),ct={__name:"HoloView",setup(v){const o=R(),b=p(!1);j(),p(1),p(0);const g=p(new URL("/img/anima1/完整版.27.1.png",self.location).href),C=p(new URL("/img/anima2/holocube animation_00000.png",self.location).href),E=p([]);function z(){let u=[];for(let r=1;r<103;r++)u.push(`/img/anima1/完整版.27.${r}.png`);return u}const F=p([]);function I(){let u=[];for(let r=0;r<150;r++){let n="";for(let f=0;f<5-r.toString().length;f++)n+="0";n+=r,u.push(`/img/anima2/holocube animation_${n}.png`)}return u}D(()=>{E.value=z(),F.value=I()}),q(async()=>{b.value=!0,A(()=>import("./images-5d13476a.js"),[]).then(u=>{b.value=!1,window.addEventListener("scroll",B)}).catch(b.value=!1)}),M(()=>{window.removeEventListener("scroll",B)});function B(){window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,S(),T()}const w=p(!1),x=p(!1);function S(){let u=document.getElementsByClassName("anima1-box")[0];if(V(u)){const{top:r,height:n}=u.getBoundingClientRect(),f=n/2,y=n/102,k=r+f;if(0<k<n){const h=102-parseInt(k/y);h<0?g.value=E.value[1]:0<h&&h<102?g.value=E.value[h]:h>102&&(g.value=E.value[101]),h>30?w.value=!0:w.value=!1}}}function T(){let u=document.getElementsByClassName("anima2-box")[0];if(V(u)){const{top:r,height:n}=u.getBoundingClientRect(),f=n/2,y=n/149,k=r+f;if(0<k<n){const h=149-parseInt(k/y);h<0?C.value=F.value[1]:0<h&&h<149?C.value=F.value[h]:h>149&&(C.value=F.value[149]),h>130?x.value=!0:x.value=!1}}}return(u,r)=>{const n=O("el-timeline-item"),f=O("el-timeline"),y=P("loading");return b.value?H((d(),_("div",ee,null,512)),[[y,b.value]]):(d(),_("div",te,[e("div",se,[e("div",{class:c(["ft3",l(o)==="desktop"?"img-text":"img-text-m"])},[s("HOLOCUBE"),oe,s("buy")],2)]),e("div",le,[e("div",{class:c(["text-center ft3 pt200 pb100",l(o)==="desktop"?"f66":"f24"])},"Crafted with presision",2),a(L,{name:"fade"},{default:i(()=>[e("div",{class:c({"timeline-height":w.value,"timeline-margin":!w.value})},[H(a(f,null,{default:i(()=>[a(n,{"hide-timestamp":""},{dot:i(()=>[re]),default:i(()=>[e("div",{class:c(["ft2 text6e pb200",l(o)==="mobile"?"f12":""])},[s(" Each holocube’s aluminium "),l(o)==="mobile"?(d(),_("br",ne)):m("",!0),s("alloy body is made by a "),ie,ae,l(o)==="mobile"?(d(),_("br",ce)):m("",!0),s("in over four hours, with diamond "),de,s(" cut edges and soft exquisitely "),l(o)==="mobile"?(d(),_("br",_e)):m("",!0),s("polished chamfers for a "),ue,s(" smooth and solid feel. ")],2)]),_:1}),a(n,{color:"#FFF"},{default:i(()=>[he]),_:1})]),_:1},512),[[N,w.value]])],2)]),_:1}),e("img",{class:"anima1-box",src:g.value},null,8,me)]),fe,pe,e("div",be,[e("div",{class:c(["text-center ft3 pt200 pb100",l(o)==="desktop"?"f66":"f24"])},[s("Silky smooth "),ve,s("lifting and lowering")],2),e("img",{class:"anima2-box",src:C.value},null,8,ge),a(L,{name:"fade"},{default:i(()=>[e("div",{class:c({"timeline-height2":x.value,"timeline-margin2":!x.value})},[H(a(f,null,{default:i(()=>[a(n,{color:"#FFF"},{default:i(()=>[we]),_:1}),a(n,{"hide-timestamp":"",style:{"padding-bottom":"0"}},{dot:i(()=>[He]),default:i(()=>[e("div",{class:c(["ft2 text6e pt200",l(o)==="mobile"?"f12":""])},[s(" Fully customized high-precision "),l(o)==="mobile"?(d(),_("br",xe)):m("",!0),ye,s("ensures that"),ke,s(" the glass cube can be perfectly "),l(o)==="mobile"?(d(),_("br",Ce)):m("",!0),s("lifted to protecting the glass from"),Ee,s(" accidental scratches when the "),l(o)==="mobile"?(d(),_("br",Fe)):m("",!0),s("Holocube is turned off. ")],2)]),_:1}),a(n,{color:"#FFF","hide-timestamp":""},{dot:i(()=>[Oe]),default:i(()=>[Be]),_:1})]),_:1},512),[[N,x.value]])],2)]),_:1})]),e("div",Le,[e("div",{class:c(["text-center ft3 pt200 pb100",l(o)==="desktop"?"f66":"f24"])},"Crafted with presision",2),e("div",Ne,[a(f,null,{default:i(()=>[a(n,{"hide-timestamp":""},{dot:i(()=>[je]),default:i(()=>[e("div",{class:c(["ft2 text6e pb400",l(o)==="mobile"?"f12":""])},[s(" Each holocube’s aluminium "),l(o)==="mobile"?(d(),_("br",Ve)):m("",!0),s("alloy body is made by a "),ze,Ie,l(o)==="mobile"?(d(),_("br",Se)):m("",!0),s("in over four hours, with diamond "),Te,s(" cut edges and soft exquisitely "),l(o)==="mobile"?(d(),_("br",Ue)):m("",!0),s("polished chamfers for a "),Re,s(" smooth and solid feel. ")],2)]),_:1}),a(n,{color:"#FFF"},{default:i(()=>[De]),_:1})]),_:1})]),qe]),e("div",Ae,[e("div",{class:c(["text-center ft3 pt200 pb100",l(o)==="desktop"?"f66":"f24"])},"Make digital alive",2),e("div",Me,[a(f,{class:"r-timeline"},{default:i(()=>[a(n,{"hide-timestamp":""},{dot:i(()=>[We]),default:i(()=>[e("div",{class:c(["ft2 text6e pb200",l(o)==="mobile"?"f12":""])},[s(" Each holocube’s aluminium "),l(o)==="mobile"?(d(),_("br",Pe)):m("",!0),s("alloy body is made by a "),$e,Ye,l(o)==="mobile"?(d(),_("br",Ge)):m("",!0),s("in over four hours, with diamond "),Je,s(" cut edges and soft exquisitely "),l(o)==="mobile"?(d(),_("br",Ke)):m("",!0),s("polished chamfers for a "),Qe,s(" smooth and solid feel. ")],2)]),_:1}),a(n,{color:"#FFF"},{default:i(()=>[Xe]),_:1})]),_:1})]),Ze]),e("div",et,[e("div",{class:c(["text-center ft3 pt200 pb100",l(o)==="desktop"?"f66":"f24"])},"Crafted with presision",2),tt]),st,e("div",ot,[e("div",{class:c(["text-center ft3 pt200 pb200",l(o)==="desktop"?"f48":"f24"]),style:{color:"#6E6E73"}},[s(" Over "),lt,s("prototyes with up to "),nt,it,s("times testing ")],2)]),at]))}}},_t=U(ct,[["__scopeId","data-v-c2618897"]]);export{_t as default};
