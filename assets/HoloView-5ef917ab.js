import{_ as U,u as R,r as p,a as j,o as D,b as q,c as A,d as P,e as L,f as M,w as H,g as _,h as r,i as e,n as d,j as n,k as s,l as c,m as i,T as O,v as N,p as h,q as $,s as Y}from"./index-9120e9aa.js";function V(b){const o=window.innerHeight||document.documentElement.clientHeight,{top:v,bottom:g}=b.getBoundingClientRect();return v<=o&&g>=0}const G="/assets/HOLOCUBE_03-7f6b98e1.jpg",J="/assets/HOLOCUBE_04-5e8553ab.jpg",K="/assets/Holocube_6-2c20c2e2.png",Q="/assets/Holocube_7-19616de9.png",W="/assets/Holocube_8-667ba29f.png",X="/assets/HOLOCUBE_10-5f5b82a3.jpg",Z="/assets/HOLOCUBE_12-e8a20af1.jpg";const t=b=>($("data-v-4c3a11bc"),b=b(),Y(),b),ee={key:0,style:{width:"100vw",height:"100vh"}},te={key:1,class:"main"},se={class:"img-wrapper"},oe=t(()=>e("br",null,null,-1)),le={class:"blk-bg flex-center-horizontal"},ne={key:0},ie=t(()=>e("br",null,null,-1)),ae=t(()=>e("span",{class:"fw"},"five-axis CNC machine ",-1)),ce={key:1},de=t(()=>e("br",null,null,-1)),_e={key:2},re=t(()=>e("br",null,null,-1)),ue=t(()=>e("span",null,null,-1)),me=t(()=>e("span",null," ",-1)),he=["src"],fe=t(()=>e("img",{class:"img-box",src:G},null,-1)),pe=t(()=>e("img",{class:"img-box",src:J},null,-1)),be={class:"blk-bg flex-center-horizontal"},ve=t(()=>e("br",null,null,-1)),ge=["src"],we=t(()=>e("span",null," ",-1)),xe={key:0},ye=t(()=>e("span",{class:"fw"},"lead screw structure ",-1)),ke=t(()=>e("br",null,null,-1)),Ce={key:1},Ee=t(()=>e("br",null,null,-1)),Fe={key:2},He=t(()=>e("span",null,null,-1)),Be=t(()=>e("span",null," ",-1)),Le=t(()=>e("span",null,null,-1)),Oe={class:"blk-bg flex-center-horizontal"},Ne={class:d({"stream-height1":!0})},Ve={key:0},ze=t(()=>e("br",null,null,-1)),Ie=t(()=>e("span",{class:"fw"},"five-axis CNC machine ",-1)),Se={key:1},Te=t(()=>e("br",null,null,-1)),Ue={key:2},Re=t(()=>e("br",null,null,-1)),je=t(()=>e("span",null,null,-1)),De=t(()=>e("span",null," ",-1)),qe=t(()=>e("img",{class:"img-stream1",src:K},null,-1)),Ae={class:"blk-bg flex-center-horizontal"},Pe={class:d({"stream-height1":!0})},Me={key:0},$e=t(()=>e("br",null,null,-1)),Ye=t(()=>e("span",{class:"fw"},"five-axis CNC machine ",-1)),Ge={key:1},Je=t(()=>e("br",null,null,-1)),Ke={key:2},Qe=t(()=>e("br",null,null,-1)),We=t(()=>e("span",null,null,-1)),Xe=t(()=>e("span",null," ",-1)),Ze=t(()=>e("img",{class:"img-stream2",src:Q},null,-1)),et={class:"blk-bg flex-center-horizontal"},tt=t(()=>e("img",{style:{width:"100%"},src:W},null,-1)),st=t(()=>e("img",{class:"img-box",src:X},null,-1)),ot={class:"blk-bg flex-center-horizontal"},lt=t(()=>e("span",{class:"fw"},"80+ ",-1)),nt=t(()=>e("br",null,null,-1)),it=t(()=>e("span",{class:"fw"},"240 ",-1)),at=t(()=>e("img",{class:"img-box",src:Z},null,-1)),ct={__name:"HoloView",setup(b){const o=R(),v=p(!1);j(),p(1),p(0);const g=p(new URL("/img/anima1/完整版.27.1.png",self.location).href),F=p(new URL("/img/anima2/holocube animation_00000.png",self.location).href),w=p([]);function z(){let u=[];for(let a=1;a<103;a++)u.push(`/img/anima1/完整版.27.${a}.png`);return u}const x=p([]);function I(){let u=[];for(let a=0;a<150;a++){let l="";for(let f=0;f<5-a.toString().length;f++)l+="0";l+=a,u.push(`/img/anima2/holocube animation_${l}.png`)}return u}D(()=>{w.value=z(),x.value=I()}),q(async()=>{v.value=!0;const a=w.value.concat(x.value).map(l=>A(()=>import(l),[]));Promise.all(a).then(()=>{v.value=!1,window.addEventListener("scroll",B)})}),P(()=>{window.removeEventListener("scroll",B)});function B(){window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,S(),T()}const y=p(!1),k=p(!1);function S(){let u=document.getElementsByClassName("anima1-box")[0];if(V(u)){const{top:a,height:l}=u.getBoundingClientRect(),f=l/2,C=l/102,E=a+f;if(0<E<l){const m=102-parseInt(E/C);m<0?g.value=w.value[1]:0<m&&m<102?g.value=w.value[m]:m>102&&(g.value=w.value[101]),m>30?y.value=!0:y.value=!1}}}function T(){let u=document.getElementsByClassName("anima2-box")[0];if(V(u)){const{top:a,height:l}=u.getBoundingClientRect(),f=l/2,C=l/149,E=a+f;if(0<E<l){const m=149-parseInt(E/C);m<0?F.value=x.value[1]:0<m&&m<149?F.value=x.value[m]:m>149&&(F.value=x.value[149]),m>130?k.value=!0:k.value=!1}}}return(u,a)=>{const l=L("el-timeline-item"),f=L("el-timeline"),C=M("loading");return v.value?H((_(),r("div",ee,null,512)),[[C,v.value]]):(_(),r("div",te,[e("div",se,[e("div",{class:d(["ft3",n(o)==="desktop"?"img-text":"img-text-m"])},[s("HOLOCUBE"),oe,s("buy")],2)]),e("div",le,[e("div",{class:d(["text-center ft3 pt200 pb100",n(o)==="desktop"?"f66":"f24"])},"Crafted with presision",2),c(O,{name:"fade"},{default:i(()=>[e("div",{class:d({"timeline-height":y.value,"timeline-margin":!y.value})},[H(c(f,null,{default:i(()=>[c(l,{"hide-timestamp":""},{dot:i(()=>[ue]),default:i(()=>[e("div",{class:d(["ft2 text6e pb200",n(o)==="mobile"?"f12":""])},[s(" Each holocube’s aluminium "),n(o)==="mobile"?(_(),r("br",ne)):h("",!0),s("alloy body is made by a "),ie,ae,n(o)==="mobile"?(_(),r("br",ce)):h("",!0),s("in over four hours, with diamond "),de,s(" cut edges and soft exquisitely "),n(o)==="mobile"?(_(),r("br",_e)):h("",!0),s("polished chamfers for a "),re,s(" smooth and solid feel. ")],2)]),_:1}),c(l,{color:"#FFF"},{default:i(()=>[me]),_:1})]),_:1},512),[[N,y.value]])],2)]),_:1}),e("img",{class:"anima1-box",src:g.value},null,8,he)]),fe,pe,e("div",be,[e("div",{class:d(["text-center ft3 pt200 pb100",n(o)==="desktop"?"f66":"f24"])},[s("Silky smooth "),ve,s("lifting and lowering")],2),e("img",{class:"anima2-box",src:F.value},null,8,ge),c(O,{name:"fade"},{default:i(()=>[e("div",{class:d({"timeline-height2":k.value,"timeline-margin2":!k.value})},[H(c(f,null,{default:i(()=>[c(l,{color:"#FFF"},{default:i(()=>[we]),_:1}),c(l,{"hide-timestamp":"",style:{"padding-bottom":"0"}},{dot:i(()=>[He]),default:i(()=>[e("div",{class:d(["ft2 text6e pt200",n(o)==="mobile"?"f12":""])},[s(" Fully customized high-precision "),n(o)==="mobile"?(_(),r("br",xe)):h("",!0),ye,s("ensures that"),ke,s(" the glass cube can be perfectly "),n(o)==="mobile"?(_(),r("br",Ce)):h("",!0),s("lifted to protecting the glass from"),Ee,s(" accidental scratches when the "),n(o)==="mobile"?(_(),r("br",Fe)):h("",!0),s("Holocube is turned off. ")],2)]),_:1}),c(l,{color:"#FFF","hide-timestamp":""},{dot:i(()=>[Le]),default:i(()=>[Be]),_:1})]),_:1},512),[[N,k.value]])],2)]),_:1})]),e("div",Oe,[e("div",{class:d(["text-center ft3 pt200 pb100",n(o)==="desktop"?"f66":"f24"])},"Crafted with presision",2),e("div",Ne,[c(f,null,{default:i(()=>[c(l,{"hide-timestamp":""},{dot:i(()=>[je]),default:i(()=>[e("div",{class:d(["ft2 text6e pb400",n(o)==="mobile"?"f12":""])},[s(" Each holocube’s aluminium "),n(o)==="mobile"?(_(),r("br",Ve)):h("",!0),s("alloy body is made by a "),ze,Ie,n(o)==="mobile"?(_(),r("br",Se)):h("",!0),s("in over four hours, with diamond "),Te,s(" cut edges and soft exquisitely "),n(o)==="mobile"?(_(),r("br",Ue)):h("",!0),s("polished chamfers for a "),Re,s(" smooth and solid feel. ")],2)]),_:1}),c(l,{color:"#FFF"},{default:i(()=>[De]),_:1})]),_:1})]),qe]),e("div",Ae,[e("div",{class:d(["text-center ft3 pt200 pb100",n(o)==="desktop"?"f66":"f24"])},"Make digital alive",2),e("div",Pe,[c(f,{class:"r-timeline"},{default:i(()=>[c(l,{"hide-timestamp":""},{dot:i(()=>[We]),default:i(()=>[e("div",{class:d(["ft2 text6e pb200",n(o)==="mobile"?"f12":""])},[s(" Each holocube’s aluminium "),n(o)==="mobile"?(_(),r("br",Me)):h("",!0),s("alloy body is made by a "),$e,Ye,n(o)==="mobile"?(_(),r("br",Ge)):h("",!0),s("in over four hours, with diamond "),Je,s(" cut edges and soft exquisitely "),n(o)==="mobile"?(_(),r("br",Ke)):h("",!0),s("polished chamfers for a "),Qe,s(" smooth and solid feel. ")],2)]),_:1}),c(l,{color:"#FFF"},{default:i(()=>[Xe]),_:1})]),_:1})]),Ze]),e("div",et,[e("div",{class:d(["text-center ft3 pt200 pb100",n(o)==="desktop"?"f66":"f24"])},"Crafted with presision",2),tt]),st,e("div",ot,[e("div",{class:d(["text-center ft3 pt200 pb200",n(o)==="desktop"?"f48":"f24"]),style:{color:"#6E6E73"}},[s(" Over "),lt,s("prototyes with up to "),nt,it,s("times testing ")],2)]),at]))}}},_t=U(ct,[["__scopeId","data-v-4c3a11bc"]]);export{_t as default};
