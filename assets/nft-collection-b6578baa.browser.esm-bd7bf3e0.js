<<<<<<<< HEAD:assets/nft-collection-b6578baa.browser.esm-1b033d3b.js
import{aa as m,a9 as t,ab as s,ac as u,ad as l,b8 as g,af as W,ag as w,ah as C,ai as f,al as v,am as y,ak as T,an as b,ao as R,b9 as S,ap as E,aq as A,ar as B,as as F}from"./index-36bd711b.js";import{S as M}from"./erc-721-standard-3562493a.browser.esm-08a578ff.js";class o extends M{constructor(a,e,n){let p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new m(a,e,c,p);super(d,n,h),t(this,"abi",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"encoder",void 0),t(this,"estimator",void 0),t(this,"events",void 0),t(this,"sales",void 0),t(this,"platformFees",void 0),t(this,"royalties",void 0),t(this,"owner",void 0),t(this,"signature",void 0),t(this,"interceptor",void 0),t(this,"mint",s(async r=>this.erc721.mint.prepare(r))),t(this,"mintTo",s(async(r,i)=>this.erc721.mintTo.prepare(r,i))),t(this,"mintBatch",s(async r=>this.erc721.mintBatch.prepare(r))),t(this,"mintBatchTo",s(async(r,i)=>this.erc721.mintBatchTo.prepare(r,i))),t(this,"burn",s(r=>this.erc721.burn.prepare(r))),this.abi=u.parse(c||[]),this.metadata=new l(this.contractWrapper,g,this.storage),this.app=new W(this.contractWrapper,this.metadata,this.storage),this.roles=new w(this.contractWrapper,o.contractRoles),this.royalties=new C(this.contractWrapper,this.metadata),this.sales=new f(this.contractWrapper),this.encoder=new v(this.contractWrapper),this.estimator=new y(this.contractWrapper),this.events=new T(this.contractWrapper),this.platformFees=new b(this.contractWrapper),this.interceptor=new R(this.contractWrapper),this.signature=new S(this.contractWrapper,this.storage),this.owner=new E(this.contractWrapper)}onNetworkUpdated(a){this.contractWrapper.updateSignerOrProvider(a)}getAddress(){return this.contractWrapper.readContract.address}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(A("transfer"),B)}async getMintTransaction(a,e){return this.erc721.getMintTransaction(a,e)}async prepare(a,e,n){return F.fromContractWrapper({contractWrapper:this.contractWrapper,method:a,args:e,overrides:n})}async call(a,e,n){return this.contractWrapper.call(a,e,n)}}t(o,"contractRoles",["admin","minter","transfer"]);export{o as NFTCollection};
========
import{aa as m,a9 as t,ab as s,ac as u,ad as l,b8 as g,af as W,ag as w,ah as C,ai as f,al as v,am as y,ak as T,an as b,ao as R,b9 as S,ap as E,aq as A,ar as B,as as F}from"./index-dcdd3112.js";import{S as M}from"./erc-721-standard-3562493a.browser.esm-cc980f39.js";class o extends M{constructor(a,e,n){let p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new m(a,e,c,p);super(d,n,h),t(this,"abi",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"encoder",void 0),t(this,"estimator",void 0),t(this,"events",void 0),t(this,"sales",void 0),t(this,"platformFees",void 0),t(this,"royalties",void 0),t(this,"owner",void 0),t(this,"signature",void 0),t(this,"interceptor",void 0),t(this,"mint",s(async r=>this.erc721.mint.prepare(r))),t(this,"mintTo",s(async(r,i)=>this.erc721.mintTo.prepare(r,i))),t(this,"mintBatch",s(async r=>this.erc721.mintBatch.prepare(r))),t(this,"mintBatchTo",s(async(r,i)=>this.erc721.mintBatchTo.prepare(r,i))),t(this,"burn",s(r=>this.erc721.burn.prepare(r))),this.abi=u.parse(c||[]),this.metadata=new l(this.contractWrapper,g,this.storage),this.app=new W(this.contractWrapper,this.metadata,this.storage),this.roles=new w(this.contractWrapper,o.contractRoles),this.royalties=new C(this.contractWrapper,this.metadata),this.sales=new f(this.contractWrapper),this.encoder=new v(this.contractWrapper),this.estimator=new y(this.contractWrapper),this.events=new T(this.contractWrapper),this.platformFees=new b(this.contractWrapper),this.interceptor=new R(this.contractWrapper),this.signature=new S(this.contractWrapper,this.storage),this.owner=new E(this.contractWrapper)}onNetworkUpdated(a){this.contractWrapper.updateSignerOrProvider(a)}getAddress(){return this.contractWrapper.readContract.address}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(A("transfer"),B)}async getMintTransaction(a,e){return this.erc721.getMintTransaction(a,e)}async prepare(a,e,n){return F.fromContractWrapper({contractWrapper:this.contractWrapper,method:a,args:e,overrides:n})}async call(a,e,n){return this.contractWrapper.call(a,e,n)}}t(o,"contractRoles",["admin","minter","transfer"]);export{o as NFTCollection};
>>>>>>>> 42283da000438c28bee8c5de2f71b47afea1dd2a:assets/nft-collection-b6578baa.browser.esm-bd7bf3e0.js
