(function(e){function t(t){for(var a,r,s=t[0],c=t[1],i=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},u=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-14f3178a":"dc80be99","chunk-2d0b2205":"813f943d","chunk-2d21a3d2":"19ef4e06","chunk-38fae13c":"762ea93b"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-14f3178a":1,"chunk-38fae13c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-14f3178a":"c4f9813a","chunk-2d0b2205":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-38fae13c":"b7d69cbd"}[e]+".css",o=c.p+a,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],p.parentNode.removeChild(p),n(u)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"sign"},[n("div",{staticClass:"signin"},[n("h2",[e._v("Sign in")]),n("el-input",{attrs:{placeholder:"Email Adress"},model:{value:e.INusername,callback:function(t){e.INusername=t},expression:"INusername"}}),n("el-input",{attrs:{placeholder:"Password"},model:{value:e.INpassword,callback:function(t){e.INpassword=t},expression:"INpassword"}}),n("el-button",{attrs:{type:"primary"},on:{click:e.signIn}},[e._v("login")])],1),n("div",{staticClass:"signup"},[n("h2",[e._v("Sign up")]),n("el-input",{attrs:{placeholder:"Email Adress"},model:{value:e.UPusername,callback:function(t){e.UPusername=t},expression:"UPusername"}}),n("el-input",{attrs:{placeholder:"Password"},model:{value:e.UPpassword,callback:function(t){e.UPpassword=t},expression:"UPpassword"}}),n("el-select",{attrs:{placeholder:"Gender"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" Age:"),n("el-input-number",{attrs:{"controls-position":"right",min:0,max:100},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}}),n("el-button",{attrs:{type:"primary"},on:{click:e.signUp}},[e._v("register")])],1)]),e._v(" ページ番号："+e._s(this.userPageNum)+" "),n("router-view")],1)},o=[],u=n("1da1"),s=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("2591")),c=n("bc3a"),i=n.n(c),l={name:"HelloWorld",data:function(){return{UPusername:"",UPpassword:"",INusername:"",INpassword:"",message:"",userPageNum:"",logoutText:"",options:[{value:"m",label:"男性(male)"},{value:"f",label:"女性(female)"}],gender:"",age:""}},methods:{signUp:function(){var e=this;s["a"].auth().createUserWithEmailAndPassword(this.UPusername,this.UPpassword).then((function(t){var n=s["a"].database(),a="userData";n.ref(a).push({email:e.UPusername,gender:e.gender,age:e.age}),alert("Create account: ",t.email)})).catch((function(e){alert(e.message)}))},signIn:function(){var e=this;s["a"].auth().signInWithEmailAndPassword(this.INusername,this.INpassword).then((function(t){e.$_setuseremail(e.INusername),e.setIdRequest(e.INusername),e.emailRequest(e.INusername),e.$router.push("/about").catch((function(){})),console.log(t)}),(function(e){alert(e.message)}))},emailRequest:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams,n.append("name",t),e.next=4,i.a.post("http://localhost:8040/postEmail",n);case 4:a=e.sent,this.userPageNum=a.data,"空きがありませんでした"==a.data?this.$router.push("/stay").catch((function(){})):this.$router.push("/about").catch((function(){}));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),setIdRequest:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams,n.append("name",t),e.next=4,i.a.post("http://localhost:8040/setIDs",n);case 4:a=e.sent,console.log(a.data);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},d=l,p=(n("034f"),n("2877")),f=Object(p["a"])(d,r,o,!1,null,null,null),h=f.exports,m=n("8c4f");a["default"].use(m["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-14f3178a").then(n.bind(null,"f820"))}},{path:"/stay",name:"Stay",component:function(){return n.e("chunk-2d0b2205").then(n.bind(null,"237e"))}},{path:"/hello",name:"HelloWorld",component:function(){return n.e("chunk-38fae13c").then(n.bind(null,"fdab"))}}],b=new m["a"]({routes:g});b.beforeEach((function(e,t,n){var a=e.matched.some((function(e){return e.meta.requiresAuth}));a?s["a"].auth().onAuthStateChanged((function(t){t?n():n({path:"/signin",query:{redirect:e.fullPath}})})):n()}));var v=b,w=n("67b0"),y=n("5c96"),k=n.n(y),$=(n("0fae"),n("c3ff")),P=n.n($);a["default"].use(k.a,{locale:P.a}),a["default"].config.productionTip=!1,a["default"].use(w["a"]);var _={apiKey:"AIzaSyDtlCIqqF6czrMGhi566mCKrbOIxr4gyDk",authDomain:"twitch-mci.firebaseapp.com",databaseURL:"https://twitch-mci-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"twitch-mci",storageBucket:"twitch-mci.appspot.com",messagingSenderId:"155279917408",appId:"1:155279917408:web:155c589c5adc35f3739e05"},I=s["a"].initializeApp(_);console.log(I);var x=new a["default"]({data:{$useremail:"",$channel:"",$username:"",$password:""}});a["default"].mixin({methods:{$_getuseremail:function(){return x.$data.$useremail},$_setuseremail:function(e){x.$data.$useremail=e},$_getchannel:function(){return x.$data.$channel},$_setchannel:function(e){x.$data.$channel=e},$_getusername:function(){return x.$data.$username},$_setusername:function(e){console.log(e),x.$data.$username=e},$_getpassword:function(){return x.$data.$password},$_setpassword:function(e){x.$data.$password=e}}}),new a["default"]({router:v,render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.f53ffc9e.js.map