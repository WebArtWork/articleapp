import{Aa as d,Ga as u,Ja as l,Ka as m,La as p,Oa as f,j as n,m as i,va as c}from"./chunk-4ZWMSXGZ.js";var P=(()=>{let t=class t extends l{constructor(e,s,r,a,g){super({name:"user"},e,s,r,a),this._router=g,this.roles=d.roles||["admin"],this.mode="",this.users=[],this.user=localStorage.getItem("waw_user")?JSON.parse(localStorage.getItem("waw_user")):this.new(),this._changingPassword=!1,this.store=s,this.http=e,this.alert=r,this.core=a,this.http.header("token")&&(this.fetch({},{name:"me"}).subscribe(this.setUser.bind(this)),this.load()),this.store.get("mode",h=>{h&&this.setMode(h)})}load(){this.get().subscribe(e=>this.users.push(...e))}setMode(e=""){e?(this.store.set("mode",e),document.body.parentNode.classList.add(e)):(this.store.remove("mode"),document.body.parentNode.classList.remove("dark")),this.mode=e}setUser(e){this.user=e,localStorage.setItem("waw_user",JSON.stringify(e)),this.core.complete("us.user")}role(e){return!!(this.user?.is||{})[e]}updateMe(){this.setUser(this.user),this.update(this.user)}updateMeAfterWhile(){this.setUser(this.user),this.updateAfterWhile(this.user)}changePassword(e,s){this._changingPassword||(this._changingPassword=!0,this.http.post("/api/user/changePassword",{newPass:s,oldPass:e},r=>{this._changingPassword=!1,r?this.alert.info({text:"Successfully changed password"}):this.alert.error({text:"Incorrect current password"})}))}logout(){this.user=this.new(),localStorage.removeItem("waw_user"),this._router.navigateByUrl("/sign"),this.http.remove("token"),setTimeout(()=>{location.reload()},100)}updateAdmin(e){this.update(e,{name:"admin"})}deleteAdmin(e){this.delete(e,{name:"admin"})}};t.\u0275fac=function(s){return new(s||t)(i(p),i(m),i(f),i(u),i(c))},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();export{P as a};
