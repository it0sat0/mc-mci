(function(e){function t(t){for(var r,a,u=t[0],i=t[1],c=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"14564f18"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"2695fb68"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"sign"},[n("div",{staticClass:"signin"},[n("h2",[e._v("Sign in")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.INusername,expression:"INusername"}],attrs:{type:"text",placeholder:"Email Adress"},domProps:{value:e.INusername},on:{input:function(t){t.target.composing||(e.INusername=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.INpassword,expression:"INpassword"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.INpassword},on:{input:function(t){t.target.composing||(e.INpassword=t.target.value)}}}),n("button",{on:{click:e.signIn}},[e._v("login")])]),n("div",{staticClass:"signup"},[n("h2",[e._v("Sign up")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.UPusername,expression:"UPusername"}],attrs:{type:"text",placeholder:"Email Adress"},domProps:{value:e.UPusername},on:{input:function(t){t.target.composing||(e.UPusername=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.UPpassword,expression:"UPpassword"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.UPpassword},on:{input:function(t){t.target.composing||(e.UPpassword=t.target.value)}}}),n("button",{on:{click:e.signUp}},[e._v("register")])])]),e._v(" ページ番号："+e._s(this.userPageNum)+" "),n("router-view")],1)},o=[],s=n("1da1"),u=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("2591")),i=n("bc3a"),c=n.n(i),l={name:"HelloWorld",data:function(){return{UPusername:"",UPpassword:"",INusername:"",INpassword:"",message:"",userPageNum:"",logoutText:""}},methods:{signUp:function(){u["a"].auth().createUserWithEmailAndPassword(this.UPusername,this.UPpassword).then((function(e){alert("Create account: ",e.email)})).catch((function(e){alert(e.message)}))},signIn:function(){var e=this;u["a"].auth().signInWithEmailAndPassword(this.INusername,this.INpassword).then((function(t){e.emailRequest(e.INusername),e.$_setuseremail(e.INusername),e.setIdRequest(e.INusername),e.$router.push("/about").catch((function(){})),console.log(t)}),(function(e){alert(e.message)}))},emailRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams,n.append("name",t),e.next=4,c.a.post("http://localhost:8040/postEmail",n);case 4:r=e.sent,this.userPageNum=r.data;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),setIdRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams,n.append("name",t),e.next=4,c.a.post("http://localhost:8040/setIDs",n);case 4:r=e.sent,console.log(r.data);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},p=l,d=(n("034f"),n("2877")),m=Object(d["a"])(p,a,o,!1,null,null,null),f=m.exports,h=n("8c4f");r["default"].use(h["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/hello",name:"HelloWorld",component:function(){return n.e("about").then(n.bind(null,"fdab"))}}],v=new h["a"]({routes:g});v.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r?u["a"].auth().onAuthStateChanged((function(t){t?n():n({path:"/signin",query:{redirect:e.fullPath}})})):n()}));var w=v,b=n("67b0"),y=n("5c96"),P=n.n(y),$=(n("0fae"),n("c3ff")),I=n.n($);r["default"].use(P.a,{locale:I.a}),r["default"].config.productionTip=!1,r["default"].use(b["a"]);var N={apiKey:"AIzaSyDtlCIqqF6czrMGhi566mCKrbOIxr4gyDk",authDomain:"twitch-mci.firebaseapp.com",projectId:"twitch-mci",storageBucket:"twitch-mci.appspot.com",messagingSenderId:"155279917408",appId:"1:155279917408:web:155c589c5adc35f3739e05"};u["a"].initializeApp(N);var _=new r["default"]({data:{$useremail:"",$channel:"",$username:"",$password:""}});r["default"].mixin({methods:{$_getuseremail:function(){return _.$data.$useremail},$_setuseremail:function(e){_.$data.$useremail=e},$_getchannel:function(){return _.$data.$channel},$_setchannel:function(e){_.$data.$channel=e},$_getusername:function(){return _.$data.$username},$_setusername:function(e){console.log(e),_.$data.$username=e},$_getpassword:function(){return _.$data.$password},$_setpassword:function(e){_.$data.$password=e}}}),new r["default"]({router:w,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.7cb68647.js.map