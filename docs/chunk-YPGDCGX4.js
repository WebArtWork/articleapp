import{i as x}from"./chunk-4MVVYH4U.js";import{A as n,E as v,Ga as m,Ja as y,K as b,Ka as C,La as I,Oa as f,Sa as _,Za as w,ab as S,j as d,k as u,m as l,n as h,o as g,za as j}from"./chunk-4ZWMSXGZ.js";var k=(()=>{let t=class t extends y{constructor(o,e,s,c){super({name:"articletag"},o,e,s,c),this.articletags=[],this.get().subscribe(a=>this.articletags.push(...a)),c.on("articletag_create").subscribe(a=>{this.articletags.push(a)}),c.on("articletag_delete").subscribe(a=>{this.articletags.splice(this.articletags.findIndex(r=>r._id===a._id),1)})}};t.\u0275fac=function(e){return new(e||t)(l(I),l(C),l(f),l(m))},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var F=(()=>{let t=class t{get rows(){return this._sa.articletags}constructor(o,e,s,c,a){this._translate=o,this._alert=e,this._sa=s,this._form=c,this._core=a,this.columns=["name","description"],this.form=this._form.getForm("tags",{formId:"tags",title:"Tags",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill tags title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill tags description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(r,p)=>{this._sa.create(r),p()}})},update:r=>{this._form.modal(this.form,[],r).then(p=>{this._core.copy(p,r),this._sa.update(r)})},delete:r=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this cservice?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sa.delete(r)}}]})},buttons:[{icon:"cloud_download",click:r=>{this._form.modalUnique("tags","url",r)}}]}}};t.\u0275fac=function(e){return new(e||t)(n(_),n(f),n(k),n(S),n(m))},t.\u0275cmp=h({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Tags",3,"columns","config","rows"]],template:function(e,s){e&1&&b(0,"wtable",0),e&2&&v("columns",s.columns)("config",s.config)("rows",s.rows)},dependencies:[w]});let i=t;return i})();var D=[{path:"",component:F}],z=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g({type:t}),t.\u0275inj=u({imports:[j.forChild(D),x]});let i=t;return i})();export{z as TagsModule};
