(function(e){function n(n){for(var a,s,u=n[0],i=n[1],c=n[2],l=0,d=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(n);while(d.length)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,s=1;s<t.length;s++){var i=t[s];0!==r[i]&&(a=!1)}a&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},r={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0a262415":"ead7a344","chunk-25f5dc7c":"d6cbaf77","chunk-2d0b2205":"403711fe","chunk-2d21a3d2":"e4f0fc74","chunk-38572c92":"f06cc660","chunk-03aa3702":"259b5241","chunk-2e794002":"621104aa","chunk-94f0aa5a":"1ca19e32"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var c=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,t[1](c)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var p=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("3ebb")},"3ebb":function(e,n,t){var a=t("e31a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=t("499e").default;r("61bc0355",a,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div"),t("form",{ref:"contactform",on:{submit:function(n){return n.preventDefault(),e.onFormSubmit()}}},[t("div",{staticClass:"sign"},[t("div",{staticClass:"signin"},[t("h2",[e._v("Sign in")]),t("el-input",{attrs:{placeholder:"Email Adress"},model:{value:e.INusername,callback:function(n){e.INusername=n},expression:"INusername"}}),t("el-input",{attrs:{placeholder:"Password"},model:{value:e.INpassword,callback:function(n){e.INpassword=n},expression:"INpassword"}}),t("el-button",{attrs:{type:"primary"},on:{click:e.signIn}},[e._v("login")])],1),t("div",{staticClass:"signup"},[t("h2",[e._v("Sign up")]),t("el-input",{attrs:{placeholder:"Email Adress"},model:{value:e.UPusername,callback:function(n){e.UPusername=n},expression:"UPusername"}}),t("el-input",{attrs:{placeholder:"Password"},model:{value:e.UPpassword,callback:function(n){e.UPpassword=n},expression:"UPpassword"}}),t("el-select",{attrs:{placeholder:"Gender"},model:{value:e.gender,callback:function(n){e.gender=n},expression:"gender"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" Age:"),t("el-input-number",{attrs:{"controls-position":"right",min:0,max:100},model:{value:e.age,callback:function(n){e.age=n},expression:"age"}}),t("el-button",{attrs:{type:"primary"},on:{click:e.signUp}},[e._v("register")])],1)]),e._m(0)]),t("router-view")],1)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" This site is protected by reCAPTCHA and the Google "),t("a",{attrs:{href:"https://policies.google.com/privacy"}},[e._v("Privacy Policy")]),e._v(" and "),t("a",{attrs:{href:"https://policies.google.com/terms"}},[e._v("Terms of Service")]),e._v(" apply. ")])}],s=t("1da1"),u=(t("d3b7"),t("3ca3"),t("ddb0"),t("9861"),t("96cf"),t("2591")),i=t("bc3a"),c=t.n(i),l={name:"HelloWorld",data:function(){return{UPusername:"",UPpassword:"",INusername:"",INpassword:"",message:"",userPageNum:"",logoutText:"",options:[{value:"m",label:"男性(male)"},{value:"f",label:"女性(female)"}],gender:"",age:"",company:""}},methods:{signUp:function(){var e=this;u["a"].auth().createUserWithEmailAndPassword(this.UPusername,this.UPpassword).then((function(n){var t=u["a"].database(),a="userData";t.ref(a).push({email:e.UPusername,gender:e.gender,age:e.age}),alert("Create account: ",n.email),e.INusername=e.UPusername,e.INpassword=e.UPpassword,e.signIn()})).catch((function(e){alert(e.message)}))},signIn:function(){var e=this;u["a"].auth().signInWithEmailAndPassword(this.INusername,this.INpassword).then((function(n){e.$_setuseremail(e.INusername),e.setIdRequest(e.INusername),e.emailRequest(e.INusername),e.INusername="",e.INpassword="",e.UPusername="",e.UPpassword="",e.gender="",e.age="",e.$router.push("/quest").catch((function(){})),console.log(n)}),(function(e){alert(e.message)}))},onFormSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var t,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$recaptchaLoaded();case 2:return n.next=4,e.$recaptcha("login");case 4:t=n.sent,a=new FormData(e.$refs.contactform),a.append("recaptcha-token",t),c.a.post("/your-form-endpoint",a).then((function(e){alert(e.message)}),(function(e){alert(e.message)}));case 8:case"end":return n.stop()}}),n)})))()},emailRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new URLSearchParams,t.append("name",n),e.next=4,c.a.post("http://localhost:8040/postEmail",t);case 4:a=e.sent,this.userPageNum=a.data,"空きがありませんでした"==a.data?this.$router.push("/stay").catch((function(){})):this.$router.push("/quest").catch((function(){}));case 7:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}(),setIdRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new URLSearchParams,t.append("name",n),e.next=4,c.a.post("http://localhost:8040/setIDs",t);case 4:a=e.sent,this.company=a.data,console.log(a.data),this.$_setchannel(a.data.channels),this.$_setusername(a.data.username),this.$_setpassword(a.data.password);case 10:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}()}},p=l,d=(t("034f"),t("2877")),f=Object(d["a"])(p,r,o,!1,null,null,null),h=f.exports,m=t("8c4f");a["default"].use(m["a"]);var g=[{path:"/",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return Promise.all([t.e("chunk-38572c92"),t.e("chunk-2e794002")]).then(t.bind(null,"f820"))}},{path:"/stay",name:"Stay",component:function(){return t.e("chunk-2d0b2205").then(t.bind(null,"237e"))}},{path:"/hello",name:"HelloWorld",component:function(){return t.e("chunk-0a262415").then(t.bind(null,"fdab"))}},{path:"/ui1",name:"ui1",component:function(){return Promise.all([t.e("chunk-38572c92"),t.e("chunk-94f0aa5a")]).then(t.bind(null,"f4db"))}},{path:"/ui2",name:"ui2",component:function(){return Promise.all([t.e("chunk-38572c92"),t.e("chunk-03aa3702")]).then(t.bind(null,"c3a4"))}},{path:"/quest",name:"quset",component:function(){return t.e("chunk-25f5dc7c").then(t.bind(null,"2061"))}}],v=new m["a"]({routes:g});v.beforeEach((function(e,n,t){var a=e.matched.some((function(e){return e.meta.requiresAuth}));a?u["a"].auth().onAuthStateChanged((function(n){n?t():t({path:"/signin",query:{redirect:e.fullPath}})})):t()}));var b=v,w=t("67b0"),y=t("5c96"),k=t.n(y),$=(t("0fae"),t("c3ff")),P=t.n($);a["default"].use(k.a,{locale:P.a});var _=t("760d");a["default"].config.productionTip=!1,a["default"].use(w["a"]),a["default"].use(_["VueReCaptcha"],{siteKey:"6LcUnyEdAAAAAKRXGR7W6kHSO2JePFoIdGl3NM_a",loaderOptions:{autoHideBadge:!0}});var x={apiKey:"AIzaSyDtlCIqqF6czrMGhi566mCKrbOIxr4gyDk",authDomain:"twitch-mci.firebaseapp.com",databaseURL:"https://twitch-mci-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"twitch-mci",storageBucket:"twitch-mci.appspot.com",messagingSenderId:"155279917408",appId:"1:155279917408:web:155c589c5adc35f3739e05"},I=u["a"].initializeApp(x);console.log(I);var U=new a["default"]({data:{$useremail:"",$channel:"",$username:"",$password:""}});a["default"].mixin({methods:{$_getuseremail:function(){return U.$data.$useremail},$_setuseremail:function(e){U.$data.$useremail=e},$_getchannel:function(){return U.$data.$channel},$_setchannel:function(e){U.$data.$channel=e},$_getusername:function(){return U.$data.$username},$_setusername:function(e){U.$data.$username=e},$_getpassword:function(){return U.$data.$password},$_setpassword:function(e){U.$data.$password=e}}}),new a["default"]({router:b,render:function(e){return e(h)}}).$mount("#app")},e31a:function(e,n,t){var a=t("24fb");n=a(!1),n.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}h1,h2{font-weight:400}ul{list-style-type:none;padding:0}li{display:inline-block;margin:0 10px}a{color:#42b983}.signin,.signup{margin:20px;flex-flow:column nowrap}.sign,.signin,.signup{display:flex;justify-content:center;align-items:center}input{margin:5px 0;padding:5px}",""]),e.exports=n}});
//# sourceMappingURL=app.29d796a4.js.map