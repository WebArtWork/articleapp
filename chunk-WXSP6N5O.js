import{j as D}from"./chunk-76THLDRW.js";import{F as w,G as a,Ja as B,M as I,Na as k,S,Va as h,Ya as F,Za as b,_a as j,bb as f,da as x,fa as C,gb as M,nb as N,o as p,p as y,pb as q,r as l,s as _,t as g,u as A}from"./chunk-FG5CMVYC.js";var R=(()=>{let t=class t{constructor(){this.createParentIdToChildrenIds=(i,s,r)=>()=>{for(let e in i)for(let o=i[e].length-1;o>=0;o--)s.find(m=>Array.isArray(m[r])?m[r].includes(i[e][o]._id):m[r]===i[e][o]._id)||i[e].splice(o,1);for(let e of s)!e[r]||!e[r]?.length||(Array.isArray(e[r])?e[r].forEach(o=>{i[o]=i[o]||[],i[o].find(m=>m._id===e._id)||i[o].push(e)}):(i[e[r]]=i[e[r]]||[],i[e[r]].find(o=>o._id===e._id)||i[e[r]].push(e)))}}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let c=t;return c})();var E=(()=>{let t=class t extends F{constructor(i,s,r,e){super({name:"articlecomment"},i,s,r,e),this._helper=_(R),this.articlecomments=[],this.commentsByArticleId={},this.setCommentsByArticleId=this._helper.createParentIdToChildrenIds(this.commentsByArticleId,this.articlecomments,"article"),this.get().subscribe(o=>{this.articlecomments.push(...o),this.setCommentsByArticleId()}),e.on("articlecomment_create").subscribe(o=>{this.articlecomments.push(o),this.setCommentsByArticleId()}),e.on("articlecomment_delete").subscribe(o=>{this.articlecomments.splice(this.articlecomments.findIndex(m=>m._id===o._id),1),this.setCommentsByArticleId()})}};t.\u0275fac=function(s){return new(s||t)(l(j),l(b),l(f),l(h))},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let c=t;return c})();var v=(()=>{let t=class t{get rows(){return this.articleId?this._sa.commentsByArticleId[this.articleId]||[]:this._sa.articlecomments}constructor(i,s,r,e,o,m){this._translate=i,this._alert=s,this._sa=r,this._form=e,this._core=o,this._router=m,this.columns=["content"],this.articleId=this._router.url.includes("/comments/")?this._router.url.replace("/comments/",""):"",this.form=this._form.getForm("comments",{formId:"comments",title:"Comments",components:[{name:"Text",key:"content",focused:!0,fields:[{name:"Placeholder",value:"fill comments content"},{name:"Label",value:"Content"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(n,u)=>{this.articleId&&(n.article=this.articleId),this._sa.create(n),u()}})},update:n=>{this._form.modal(this.form,[],n).then(u=>{this._core.copy(u,n),this._sa.update(n)})},delete:n=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Articlecomment?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sa.delete(n)}}]})},buttons:[{icon:"cloud_download",click:n=>{this._form.modalUnique("comments","url",n)}}]}}};t.\u0275fac=function(s){return new(s||t)(a(M),a(f),a(E),a(q),a(h),a(B))},t.\u0275cmp=g({type:t,selectors:[["ng-component"]],decls:2,vars:4,consts:[["title","Comments",3,"columns","config","rows"]],template:function(s,r){s&1&&(x(0),S(1,"wtable",0)),s&2&&(C("",r.articleId,`
`),w(),I("columns",r.columns)("config",r.config)("rows",r.rows))},dependencies:[N]});let c=t;return c})();var U=[{path:"",component:v},{path:":articlecomment",component:v}],P=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=A({type:t}),t.\u0275inj=y({imports:[k.forChild(U),D]});let c=t;return c})();export{P as CommentsModule};
