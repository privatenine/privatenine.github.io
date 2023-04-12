import{ab as u,aa as t,ac as s,ad as m,ae as g,au as y,ag as W,ah as w,ai as C,aj as v,am as f,an as T,al as S,ao as A,ap as b,av as R,aq as E,ar as B,as as F,at as M}from"./index-04a2f2d3.js";import{S as O}from"./erc-1155-standard-ad8a6a10.browser.esm-d61c3071.js";class o extends O{constructor(r,n,i){let p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new u(r,n,c,p);super(d,i,h),t(this,"abi",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"sales",void 0),t(this,"platformFees",void 0),t(this,"encoder",void 0),t(this,"estimator",void 0),t(this,"events",void 0),t(this,"royalties",void 0),t(this,"signature",void 0),t(this,"interceptor",void 0),t(this,"owner",void 0),t(this,"mint",s(async a=>this.erc1155.mint.prepare(a))),t(this,"mintTo",s(async(a,e)=>this.erc1155.mintTo.prepare(a,e))),t(this,"mintAdditionalSupply",s(async(a,e)=>this.erc1155.mintAdditionalSupply.prepare(a,e))),t(this,"mintAdditionalSupplyTo",s(async(a,e,l)=>this.erc1155.mintAdditionalSupplyTo.prepare(a,e,l))),t(this,"mintBatch",s(async a=>this.erc1155.mintBatch.prepare(a))),t(this,"mintBatchTo",s(async(a,e)=>this.erc1155.mintBatchTo.prepare(a,e))),t(this,"burn",s(async(a,e)=>this.erc1155.burn.prepare(a,e))),this.abi=m.parse(c||[]),this.metadata=new g(this.contractWrapper,y,this.storage),this.app=new W(this.contractWrapper,this.metadata,this.storage),this.roles=new w(this.contractWrapper,o.contractRoles),this.royalties=new C(this.contractWrapper,this.metadata),this.sales=new v(this.contractWrapper),this.encoder=new f(this.contractWrapper),this.estimator=new T(this.contractWrapper),this.events=new S(this.contractWrapper),this.platformFees=new A(this.contractWrapper),this.interceptor=new b(this.contractWrapper),this.signature=new R(this.contractWrapper,this.storage,this.roles),this.owner=new E(this.contractWrapper)}onNetworkUpdated(r){this.contractWrapper.updateSignerOrProvider(r)}getAddress(){return this.contractWrapper.readContract.address}async getAll(r){return this.erc1155.getAll(r)}async getOwned(r){return this.erc1155.getOwned(r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(B("transfer"),F)}async getMintTransaction(r,n){return this.erc1155.getMintTransaction(r,n)}async prepare(r,n,i){return M.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:n,overrides:i})}async call(r,n,i){return this.contractWrapper.call(r,n,i)}}t(o,"contractRoles",["admin","minter","transfer"]);export{o as Edition};
