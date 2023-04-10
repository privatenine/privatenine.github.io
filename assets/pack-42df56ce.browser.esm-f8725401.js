import{bc as g,bd as V,be as L,bf as R,bg as D,bh as z,aX as j,a8 as T,a7 as n,a9 as C,aa as K,ab as B,bi as Q,ad as Y,ae as H,af as G,aj as X,ak as Z,ai as q,am as J,an as tt,ao as et,ap as at,a0 as k,aO as P,aP as W,aw as rt,b4 as nt,aH as M,aq as A,a$ as st,bj as ot,bk as x,au as U,bl as ct,bm as it,b5 as dt}from"./index-f68689b7.js";import{S as pt}from"./erc-1155-standard-ad8a6a10.browser.esm-5ea03696.js";const ut=[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],S=g.object({contractAddress:V}),lt=S.extend({quantity:L}),ht=S.extend({tokenId:R}),mt=S.extend({tokenId:R,quantity:R}),F=lt.omit({quantity:!0}).extend({quantityPerReward:L}),$=ht,_=mt.omit({quantity:!0}).extend({quantityPerReward:R}),gt=F.extend({totalRewards:R.default("1")}),yt=$,wt=_.extend({totalRewards:R.default("1")});g.object({erc20Rewards:g.array(F).default([]),erc721Rewards:g.array($).default([]),erc1155Rewards:g.array(_).default([])});const N=g.object({erc20Rewards:g.array(gt).default([]),erc721Rewards:g.array(yt).default([]),erc1155Rewards:g.array(wt).default([])}),ft=N.extend({packMetadata:D,rewardsPerPack:R.default("1"),openStartTime:z.default(new Date)});class kt{constructor(e,a,o,s,r){var p=this;let h=arguments.length>5&&arguments[5]!==void 0?arguments[5]:new T(e,a,ot,s);n(this,"featureName",x.name),n(this,"contractWrapper",void 0),n(this,"storage",void 0),n(this,"chainId",void 0),n(this,"events",void 0),n(this,"open",C(async function(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;return A.fromContractWrapper({contractWrapper:p.contractWrapper,method:"openPack",args:[i,t],overrides:{gasLimit:c},parse:d=>{let u=k.from(0);try{u=p.contractWrapper.parseLogs("PackOpenRequested",d==null?void 0:d.logs)[0].args.requestId}catch{}return{receipt:d,id:u}}})})),n(this,"claimRewards",C(async function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5e5;return A.fromContractWrapper({contractWrapper:p.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:i},parse:async t=>{const c=p.contractWrapper.parseLogs("PackOpened",t==null?void 0:t.logs);if(c.length===0)throw new Error("PackOpened event not found");const d=c[0].args.rewardUnitsDistributed;return await p.parseRewards(d)}})})),this.contractWrapper=h,this.storage=o,this.chainId=r,this.events=new q(this.contractWrapper)}onNetworkUpdated(e){this.contractWrapper.updateSignerOrProvider(e)}getAddress(){return this.contractWrapper.readContract.address}async parseRewards(e){const a=[],o=[],s=[];for(const r of e)switch(r.tokenType){case 0:{const p=await P(this.contractWrapper.getProvider(),r.assetContract);a.push({contractAddress:r.assetContract,quantityPerReward:W(r.totalAmount,p.decimals).toString()});break}case 1:{o.push({contractAddress:r.assetContract,tokenId:r.tokenId.toString()});break}case 2:{s.push({contractAddress:r.assetContract,tokenId:r.tokenId.toString(),quantityPerReward:r.totalAmount.toString()});break}}return{erc20Rewards:a,erc721Rewards:o,erc1155Rewards:s}}async addPackOpenEventListener(e){return this.events.addEventListener("PackOpened",async a=>{e(a.data.packId.toString(),a.data.opener,await this.parseRewards(a.data.rewardUnitsDistributed))})}async canClaimRewards(e){const a=await U(e||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.readContract.canClaimRewards(a)}async openAndClaim(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;const s=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[e,a,o],{gasLimit:k.from(5e5)});let r=k.from(0);try{r=this.contractWrapper.parseLogs("PackOpenRequested",s==null?void 0:s.logs)[0].args.requestId}catch{}return{receipt:s,id:r}}async getLinkBalance(){return this.getLinkContract().balanceOf(this.contractWrapper.readContract.address)}async transferLink(e){await this.getLinkContract().transfer(this.contractWrapper.readContract.address,e)}getLinkContract(){const e=ct[this.chainId];if(!e)throw new Error(`No LINK token address found for chainId ${this.chainId}`);const a=new T(this.contractWrapper.getSignerOrProvider(),e,ut,this.contractWrapper.options);return new it(a,this.storage,this.chainId)}}class I extends pt{get vrf(){return j(this._vrf,x)}constructor(e,a,o){var s;let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new T(e,a,p,r.gasless&&"openzeppelin"in r.gasless?{...r,gasless:{openzeppelin:{...r.gasless.openzeppelin,useEOAForwarder:!0}}}:r);super(i,o,h),s=this,n(this,"abi",void 0),n(this,"metadata",void 0),n(this,"app",void 0),n(this,"roles",void 0),n(this,"encoder",void 0),n(this,"events",void 0),n(this,"estimator",void 0),n(this,"royalties",void 0),n(this,"interceptor",void 0),n(this,"owner",void 0),n(this,"_vrf",void 0),n(this,"create",C(async t=>{const c=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(c,t)})),n(this,"addPackContents",C(async(t,c)=>{const d=await this.contractWrapper.getSignerAddress(),u=await N.parseAsync(c),{contents:y,numOfRewardUnits:b}=await this.toPackContentArgs(u);return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,y,b,d],parse:m=>{const w=this.contractWrapper.parseLogs("PackUpdated",m==null?void 0:m.logs);if(w.length===0)throw new Error("PackUpdated event not found");const f=w[0].args.packId;return{id:f,receipt:m,data:()=>this.erc1155.get(f)}}})})),n(this,"createTo",C(async(t,c)=>{const d=await dt(c.packMetadata,this.storage),u=await ft.parseAsync(c),{erc20Rewards:y,erc721Rewards:b,erc1155Rewards:m}=u,w={erc20Rewards:y,erc721Rewards:b,erc1155Rewards:m},{contents:f,numOfRewardUnits:l}=await this.toPackContentArgs(w);return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[f,l,d,u.openStartTime,u.rewardsPerPack,await U(t)],parse:v=>{const E=this.contractWrapper.parseLogs("PackCreated",v==null?void 0:v.logs);if(E.length===0)throw new Error("PackCreated event not found");const O=E[0].args.packId;return{id:O,receipt:v,data:()=>this.erc1155.get(O)}}})})),n(this,"open",C(async function(t){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;if(s._vrf)throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return A.fromContractWrapper({contractWrapper:s.contractWrapper,method:"openPack",args:[t,c],overrides:{gasLimit:d},parse:async u=>{const y=s.contractWrapper.parseLogs("PackOpened",u==null?void 0:u.logs);if(y.length===0)throw new Error("PackOpened event not found");const b=y[0].args.rewardUnitsDistributed,m=[],w=[],f=[];for(const l of b)switch(l.tokenType){case 0:{const v=await P(s.contractWrapper.getProvider(),l.assetContract);m.push({contractAddress:l.assetContract,quantityPerReward:W(l.totalAmount,v.decimals).toString()});break}case 1:{w.push({contractAddress:l.assetContract,tokenId:l.tokenId.toString()});break}case 2:{f.push({contractAddress:l.assetContract,tokenId:l.tokenId.toString(),quantityPerReward:l.totalAmount.toString()});break}}return{erc20Rewards:m,erc721Rewards:w,erc1155Rewards:f}}})})),this.abi=K.parse(p||[]),this.metadata=new B(this.contractWrapper,Q,this.storage),this.app=new Y(this.contractWrapper,this.metadata,this.storage),this.roles=new H(this.contractWrapper,I.contractRoles),this.royalties=new G(this.contractWrapper,this.metadata),this.encoder=new X(this.contractWrapper),this.estimator=new Z(this.contractWrapper),this.events=new q(this.contractWrapper),this.interceptor=new J(this.contractWrapper),this.owner=new tt(this.contractWrapper),this._vrf=this.detectVrf()}onNetworkUpdated(e){var a;this.contractWrapper.updateSignerOrProvider(e),(a=this._vrf)==null||a.onNetworkUpdated(e)}getAddress(){return this.contractWrapper.readContract.address}async get(e){return this.erc1155.get(e)}async getAll(e){return this.erc1155.getAll(e)}async getOwned(e){return this.erc1155.getOwned(e)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(et("transfer"),at)}async getPackContents(e){const{contents:a,perUnitAmounts:o}=await this.contractWrapper.readContract.getPackContents(e),s=[],r=[],p=[];for(let h=0;h<a.length;h++){const i=a[h],t=o[h];switch(i.tokenType){case 0:{const c=await P(this.contractWrapper.getProvider(),i.assetContract),d=W(t,c.decimals),u=W(k.from(i.totalAmount).div(t),c.decimals);s.push({contractAddress:i.assetContract,quantityPerReward:d,totalRewards:u});break}case 1:{r.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString()});break}case 2:{p.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString(),quantityPerReward:t.toString(),totalRewards:k.from(i.totalAmount).div(t).toString()});break}}}return{erc20Rewards:s,erc721Rewards:r,erc1155Rewards:p}}async toPackContentArgs(e){const a=[],o=[],{erc20Rewards:s,erc721Rewards:r,erc1155Rewards:p}=e,h=this.contractWrapper.getProvider(),i=await this.contractWrapper.getSignerAddress();for(const t of s){const d=(await rt(h,t.quantityPerReward,t.contractAddress)).mul(t.totalRewards);if(!await nt(this.contractWrapper,t.contractAddress,d))throw new Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${d});

`);o.push(t.totalRewards),a.push({assetContract:t.contractAddress,tokenType:0,totalAmount:d,tokenId:0})}for(const t of r){if(!await M(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,i))throw new Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});

`);o.push("1"),a.push({assetContract:t.contractAddress,tokenType:1,totalAmount:1,tokenId:t.tokenId})}for(const t of p){if(!await M(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,i))throw new Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);o.push(t.totalRewards),a.push({assetContract:t.contractAddress,tokenType:2,totalAmount:k.from(t.quantityPerReward).mul(k.from(t.totalRewards)),tokenId:t.tokenId})}return{contents:a,numOfRewardUnits:o}}async prepare(e,a,o){return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:a,overrides:o})}async call(e,a,o){return this.contractWrapper.call(e,a,o)}detectVrf(){if(st(this.contractWrapper,"PackVRF"))return new kt(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.readContract.address,this.storage,this.contractWrapper.options,this.chainId)}}n(I,"contractRoles",["admin","minter","asset","transfer"]);export{I as Pack};
