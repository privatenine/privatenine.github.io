<<<<<<<< HEAD:assets/token-drop-67290aa3.browser.esm-d2c226b4.js
import{aa as f,a9 as t,ab as i,as as d,aw as c,ac as w,ad as W,bu as C,af as v,ag as y,al as b,am as T,ak as A,ai as R,an as S,ao as E,bb as F,aq as D,ar as V}from"./index-36bd711b.js";import{S as k}from"./erc-20-standard-6e80fd68.browser.esm-8bc7d559.js";class p extends k{constructor(a,r,n){var o;let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new f(a,r,h,l);super(u,n,g),o=this,t(this,"abi",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"encoder",void 0),t(this,"estimator",void 0),t(this,"sales",void 0),t(this,"platformFees",void 0),t(this,"events",void 0),t(this,"claimConditions",void 0),t(this,"interceptor",void 0),t(this,"claim",i(async function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o.claimTo.prepare(await o.contractWrapper.getSignerAddress(),e,s)})),t(this,"claimTo",i(async function(e,s){let m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return o.erc20.claimTo.prepare(e,s,{checkERC20Allowance:m})})),t(this,"delegateTo",i(async e=>d.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await c(e)]}))),t(this,"burnTokens",i(async e=>this.erc20.burn.prepare(e))),t(this,"burnFrom",i(async(e,s)=>this.erc20.burnFrom.prepare(e,s))),this.abi=w.parse(h||[]),this.metadata=new W(this.contractWrapper,C,this.storage),this.app=new v(this.contractWrapper,this.metadata,this.storage),this.roles=new y(this.contractWrapper,p.contractRoles),this.encoder=new b(this.contractWrapper),this.estimator=new T(this.contractWrapper),this.events=new A(this.contractWrapper),this.sales=new R(this.contractWrapper),this.platformFees=new S(this.contractWrapper),this.interceptor=new E(this.contractWrapper),this.claimConditions=new F(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(a){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(await c(a)))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(a){return await this.contractWrapper.readContract.delegates(await c(a))}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(D("transfer"),V)}async prepare(a,r,n){return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:a,args:r,overrides:n})}async call(a,r,n){return this.contractWrapper.call(a,r,n)}}t(p,"contractRoles",["admin","transfer"]);export{p as TokenDrop};
========
import{aa as f,a9 as t,ab as i,as as d,aw as c,ac as w,ad as W,bu as C,af as v,ag as y,al as b,am as T,ak as A,ai as R,an as S,ao as E,bb as F,aq as D,ar as V}from"./index-dcdd3112.js";import{S as k}from"./erc-20-standard-6e80fd68.browser.esm-02ee4f78.js";class p extends k{constructor(a,r,n){var o;let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new f(a,r,h,l);super(u,n,g),o=this,t(this,"abi",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"encoder",void 0),t(this,"estimator",void 0),t(this,"sales",void 0),t(this,"platformFees",void 0),t(this,"events",void 0),t(this,"claimConditions",void 0),t(this,"interceptor",void 0),t(this,"claim",i(async function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o.claimTo.prepare(await o.contractWrapper.getSignerAddress(),e,s)})),t(this,"claimTo",i(async function(e,s){let m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return o.erc20.claimTo.prepare(e,s,{checkERC20Allowance:m})})),t(this,"delegateTo",i(async e=>d.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await c(e)]}))),t(this,"burnTokens",i(async e=>this.erc20.burn.prepare(e))),t(this,"burnFrom",i(async(e,s)=>this.erc20.burnFrom.prepare(e,s))),this.abi=w.parse(h||[]),this.metadata=new W(this.contractWrapper,C,this.storage),this.app=new v(this.contractWrapper,this.metadata,this.storage),this.roles=new y(this.contractWrapper,p.contractRoles),this.encoder=new b(this.contractWrapper),this.estimator=new T(this.contractWrapper),this.events=new A(this.contractWrapper),this.sales=new R(this.contractWrapper),this.platformFees=new S(this.contractWrapper),this.interceptor=new E(this.contractWrapper),this.claimConditions=new F(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(a){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(await c(a)))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(a){return await this.contractWrapper.readContract.delegates(await c(a))}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(D("transfer"),V)}async prepare(a,r,n){return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:a,args:r,overrides:n})}async call(a,r,n){return this.contractWrapper.call(a,r,n)}}t(p,"contractRoles",["admin","transfer"]);export{p as TokenDrop};
>>>>>>>> 42283da000438c28bee8c5de2f71b47afea1dd2a:assets/token-drop-67290aa3.browser.esm-6677e314.js
