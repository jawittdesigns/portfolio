(function(t){function e(e){for(var o,a,s=e[0],c=e[1],u=e[2],f=0,l=[];f<s.length;f++)a=s[f],r[a]&&l.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({contact:"contact",projects:"projects",submition:"submition"}[t]||t)+"."+{contact:"deafbeec",projects:"1f587972",submition:"c3e3548d"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={contact:1,projects:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var o="css/"+({contact:"contact",projects:"projects",submition:"submition"}[t]||t)+"."+{contact:"e3f47d1f",projects:"39f71981",submition:"31d6cfe0"}[t]+".css",a=c.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],u=s.getAttribute("data-href");if(u===o||u===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.request=o,n(r)},l.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){a[t]=0}));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=i);var u,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,f.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0308":function(t,e,n){var o={"./default.js":"10e2","./index.js":"2a74"};function a(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="0308"},"07f0":function(t,e,n){"use strict";var o=n("5875"),a=n.n(o);a.a},"106f":function(t,e,n){},"10e2":function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return o}),n.d(e,"getters",function(){return a}),n.d(e,"mutations",function(){return r}),n.d(e,"actions",function(){return i});var o={},a={},r={},i={}},2591:function(t,e,n){"use strict";var o=n("c368"),a=n.n(o);a.a},"2a74":function(t,e,n){"use strict";n.r(e);var o=n("c93e"),a=(n("a481"),n("28a5"),n("ac6a"),n("bba4")),r=n.n(a),i=n("0308"),s={modules:{}};i.keys().forEach(function(t){if("./index.js"!==t){var e=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(r.a),n=c(s,e),a=n.modules;a[e.pop()]=Object(o["a"])({namespaced:!0},i(t))}function c(t,e){if(1===e.length)return t;var n=e.shift();return t.modules[n]=Object(o["a"])({modules:{}},t.modules[n]),c(t.modules[n],e)}}),e["default"]=s.modules},"35af":function(t,e,n){},4200:function(t,e,n){},"4b03":function(t,e,n){"use strict";var o=n("5b7f"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Layout",[n("Header",{attrs:{slot:"header"},slot:"header"},[n("Branding"),n("Nav")],1),n("Main",{attrs:{slot:"main"},slot:"main"},[n("transition",{attrs:{name:"router-animation","enter-active-class":"animated fadeInRight delay-1s faster","leave-active-class":"animated fadeOutLeft faster"}},[n("router-view",{key:t.$route.fullPath})],1)],1),n("Footer",{attrs:{slot:"footer"},slot:"footer"},[n("Copyright")],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"layout"}},[t._t("header",[n("p",[t._v("Header")])]),t._t("main",[n("p",[t._v("Main")])]),t._t("footer",[n("p",[t._v("Footer")])])],2)},s=[],c={name:"mainLayout",components:{},props:{},data:function(){return{}},methods:{},computed:{},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},u=c,f=(n("89d3"),n("2877")),l=Object(f["a"])(u,i,s,!1,null,null,null);l.options.__file="MainLayout.vue";var d=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",t._b({class:t.attr.class,attrs:{id:t.attr.id}},"header",t.attr.attrs,!1),[t._t("default",[n("p",[t._v("Header")])])],2)},m=[],b={name:"mainLayoutHeader",components:{},props:{attr:{type:Object,default:function(){return{id:"header",class:"header",attrs:{role:"banner"}}}}},data:function(){return{}},methods:{},computed:{},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},v=b,h=(n("ffba"),Object(f["a"])(v,p,m,!1,null,null,null));h.options.__file="Header.vue";var _=h.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",t._b({class:t.setClass,attrs:{id:t.setID}},"main",t.setAttr,!1),[t._t("default",[n("p",[t._v("Main")])])],2)},g=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("p",[t._v("\n    I'm a Full Stack Web Developer hailing from Columbus Ohio, USA. I enjoy spending hours in front of a computer writing code, watching cheesy B movies, discovering new craft beer, and listening to all types of podcasts. I've been building websites for about 17 years with almost a decade of professional experience in the Web Development industry.\n  ")]),n("p",[t._v("\n    I spend a lot of time learning new techniques to bring my clients the best web apps and websites possible. My one and only goal is to create web-based applications and websites that have the best user experience. User experience can make or break a web application or website. I understand that and that's why building the best user experience is my goal.\n  ")]),n("div",{staticClass:"social"},[n("a",{staticClass:"social__links",attrs:{href:"https://www.linkedin.com/in/jason-witt-58488445/"}},[n("font-awesome-icon",{staticClass:"social__icons",attrs:{icon:["fab","twitter"]}})],1),n("a",{staticClass:"social__links",attrs:{href:"https://twitter.com/JasonAWitt"}},[n("font-awesome-icon",{staticClass:"social__icons",attrs:{icon:["fab","linkedin"]}})],1),n("a",{staticClass:"social__links",attrs:{href:"https://github.com/jawittdesigns"}},[n("font-awesome-icon",{staticClass:"social__icons",attrs:{icon:["fab","github"]}})],1)])])},j=[],C={name:"about"},O=C,x=(n("6bdd"),Object(f["a"])(O,w,j,!1,null,"65da4c3b",null));x.options.__file="About.vue";var k=x.exports,E={name:"mainLayoutMain",components:{About:k},props:{setID:{type:String,default:"main"},setClass:{type:String,default:"main"},setAttr:{type:Object,default:function(){return{role:"main"}}}},data:function(){return{}},methods:{},computed:{},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},M=E,A=(n("4b03"),Object(f["a"])(M,y,g,!1,null,"dde57fe4",null));A.options.__file="Main.vue";var D=A.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",t._b({class:t.setClass,attrs:{id:t.setID}},"footer",t.setAttr,!1),[t._t("default",[n("p",[t._v("Footer")])])],2)},$=[],N={name:"mainLayoutFooter",components:{},props:{setID:{type:String,default:"footer"},setClass:{type:String,default:"footer"},setAttr:{type:Object,default:function(){return{role:"contentinfo"}}}},data:function(){return{}},methods:{},computed:{},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},P=N,I=(n("ff68"),Object(f["a"])(P,S,$,!1,null,"012da8de",null));I.options.__file="Footer.vue";var L=I.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav",attrs:{id:"nav",role:"navigation"}},[n("router-link",{staticClass:"nav__item",attrs:{to:"projects"}},[t._v("Projects")]),n("router-link",{staticClass:"nav__item",attrs:{to:"contact"}},[t._v("Contact")])],1)},T=[],U={name:"mainNav",components:{},props:{},data:function(){return{}},methods:{},computed:{},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},B=U,H=(n("fc9b"),Object(f["a"])(B,F,T,!1,null,"ec3be574",null));H.options.__file="MainNav.vue";var J=H.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"branding",attrs:{id:"branding"}},[n("h1",{staticClass:"branding__heading"},[n("router-link",{staticClass:"branding__heading--link",attrs:{to:"/"}},[t._v("Jason Witt")])],1)])},q=[],Y={name:"",components:{},props:{},data:function(){return{}},methods:{},computed:{},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},R=Y,z=(n("2591"),Object(f["a"])(R,W,q,!1,null,null,null));z.options.__file="Branding.vue";var G=z.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright",attrs:{id:"copyright"}},[t._v(t._s(t.siteName())+" © "+t._s(t.currentYear()))])},Q=[],V={name:"copyright",methods:{siteName:function(){return"Jason Witt"},currentYear:function(){return(new Date).getFullYear()}}},X=V,Z=Object(f["a"])(X,K,Q,!1,null,null,null);Z.options.__file="Copyright.vue";var tt=Z.exports,et={name:"app",components:{Layout:d,Header:_,Main:D,Footer:L,Nav:J,Branding:G,Copyright:tt}},nt=et,ot=(n("5c0b"),Object(f["a"])(nt,a,r,!1,null,null,null));ot.options.__file="App.vue";var at=ot.exports,rt=n("8afe"),it=n("8c4f"),st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home page",attrs:{id:"home"}},[n("About")],1)},ct=[],ut={name:"home",components:{About:k}},ft=ut,lt=(n("07f0"),Object(f["a"])(ft,st,ct,!1,null,"6b6037e8",null));lt.options.__file="Home.vue";var dt=lt.exports,pt=[{path:"/",name:"home",title:"Home",component:dt},{path:"/projects",name:"projects",title:"Projects",component:function(){return n.e("projects").then(n.bind(null,"acca"))}},{path:"/contact",name:"contact",title:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/contact/submition",name:"submition",title:"Submition",component:function(){return n.e("submition").then(n.bind(null,"eeb6"))}}];o["a"].use(it["a"]);var mt=[{path:"*",redirect:"/"}],bt=new it["a"]({mode:"history",base:"/",routes:mt.concat(Object(rt["a"])(pt))}),vt=n("2f62"),ht=n("2a74");o["a"].use(vt["a"]);var _t=new vt["a"].Store({modules:ht["default"]}),yt=_t,gt=n("ecee"),wt=n("f2d1"),jt=n("7a55");gt["library"].add(wt["c"],wt["b"],wt["a"]),o["a"].component("font-awesome-icon",jt["FontAwesomeIcon"]),o["a"].config.productionTip=!1,new o["a"]({router:bt,store:yt,render:function(t){return t(at)}}).$mount("#app")},5875:function(t,e,n){},"5b7f":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var o=n("106f"),a=n.n(o);a.a},"6bdd":function(t,e,n){"use strict";var o=n("c53b"),a=n.n(o);a.a},"89d3":function(t,e,n){"use strict";var o=n("d93a"),a=n.n(o);a.a},b0d2:function(t,e,n){},c368:function(t,e,n){},c53b:function(t,e,n){},d93a:function(t,e,n){},fc9b:function(t,e,n){"use strict";var o=n("b0d2"),a=n.n(o);a.a},ff68:function(t,e,n){"use strict";var o=n("35af"),a=n.n(o);a.a},ffba:function(t,e,n){"use strict";var o=n("4200"),a=n.n(o);a.a}});
//# sourceMappingURL=app.d214a8d1.js.map