(function(){"use strict";var e={2990:function(e,t,n){var r=n(9242),o=n(3396),a=n(7139),i=n(4870);const c=e=>((0,o.dD)("data-v-65a84c19"),e=e(),(0,o.Cn)(),e),s={class:"grid justify-items-center grid-flow-col mt-10 gap-4",id:"tabMenu"},u=c((()=>(0,o._)("a",null,[(0,o._)("span",{class:"material-icons"},"checklist")],-1))),l=c((()=>(0,o._)("span",{class:"material-icons"},"task_alt",-1))),d=c((()=>(0,o._)("span",{class:"material-icons"},"post_add",-1))),f={class:"px-4"};var p=(0,o.aZ)({__name:"TabMenu",emits:["clikedNav"],setup(e,{emit:t}){(0,i.iH)(!0),(0,i.iH)(!1),(0,i.iH)(!1);const n=e=>{"checklist"===e?(t("clikedNav","checkList"),console.log("click check")):"task"===e?(t("clikedNav","task"),console.log("click task")):"settings"===e&&(t("clikedNav","settings"),console.log("click settings"))};return(e,t)=>{const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("ul",s,[(0,o.Wm)(r,{to:"/",class:"px-4"},{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(r,{to:"/task-completed",class:"px-4"},{default:(0,o.w5)((()=>[l])),_:1}),(0,o.Wm)(r,{to:"/project",class:"px-4"},{default:(0,o.w5)((()=>[d])),_:1}),(0,o._)("li",f,[(0,o._)("span",{class:"material-icons",onClick:t[0]||(t[0]=e=>n("settings"))},"settings")])])])}}}),m=n(89);const h=(0,m.Z)(p,[["__scopeId","data-v-65a84c19"]]);var v=h,b=n(5421),g=n(2483);const y={class:"bg-gray-600 py-5 uppercase text-white"},k={class:"container mx-auto flex justify-between font-bold w-full"},w=(0,o.Uk)("jfetm"),_={class:"flex space-x-4"};var x=(0,o.aZ)({__name:"NavbarComponent",setup(e){const t=(0,g.tv)(),n=(0,i.iH)(!1);let r;const a=()=>{(0,b.w7)(r).then((()=>{t.push("/login")}))};return(0,o.bv)((()=>{r=(0,b.v0)(),(0,b.Aj)(r,(e=>{n.value=!!e}))})),(e,t)=>{const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",y,[(0,o._)("div",k,[(0,o._)("div",null,[(0,o.Wm)(r,{to:"/",class:"px-2"},{default:(0,o.w5)((()=>[w])),_:1})]),(0,o._)("div",_,[n.value?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:a,class:"uppercase pr-2"},"Sign Out")):(0,o.kq)("",!0)])])])}}});const j=(0,m.Z)(x,[["__scopeId","data-v-b304912e"]]);var O=j;const A={class:"app"},S={class:"container mx-auto"},C={key:0,class:"upper-item"},N={id:"date",class:"text-7xl text-red-400 font-bold sm:text-center md:text-center text-center mt-5"},E={id:"date",class:"text-3xl text-red-400 font-bold sm:text-center md:text-center text-center mb-1"},M={id:"date",class:"text-xl text-gray-400 font-bold sm:text-center md:text-center text-center"};var D=(0,o.aZ)({__name:"App",setup(e){const t=new Date,n=t.toLocaleDateString("default",{weekday:"long"}),r=t.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"],s=c[t.getMonth()],u=t.getFullYear();return(e,t)=>{const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.$route.meta.hideNavbar?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(O,{key:0})),(0,o._)("div",A,[(0,o._)("div",S,[e.$route.meta.hideMainLogo?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("h1",N,(0,a.zw)((0,i.SU)(r)),1),(0,o._)("h1",E,(0,a.zw)((0,i.SU)(n)),1),(0,o._)("h1",M,(0,a.zw)((0,i.SU)(s))+" , "+(0,a.zw)((0,i.SU)(u)),1),(0,o.Wm)(v)])),(0,o.Wm)(c)])])],64)}}});const P=(0,m.Z)(D,[["__scopeId","data-v-5d9fb84e"]]);var q=P;const I=[{path:"/",name:"home",component:()=>n.e(692).then(n.bind(n,5692)),meta:{requiresAuth:!0}},{path:"/project",name:"project",component:()=>n.e(162).then(n.bind(n,8162)),meta:{requiresAuth:!0}},{path:"/task-completed",name:"task-completed",component:()=>n.e(937).then(n.bind(n,7937)),meta:{requiresAuth:!0}},{path:"/:id",name:"editProject",component:()=>n.e(14).then(n.bind(n,9014)),meta:{requiresAuth:!0}},{path:"/register",name:"register",component:()=>n.e(213).then(n.bind(n,2213)),meta:{hideNavbar:!0,hideMainLogo:!0}},{path:"/login",name:"login",component:()=>n.e(601).then(n.bind(n,6601)),meta:{hideNavbar:!0,hideMainLogo:!0}},{path:"/:pathMatch(.*)*",redirect:"/login"}],L=(0,g.p7)({history:(0,g.PO)("/"),routes:I}),T=()=>new Promise(((e,t)=>{const n=(0,b.Aj)((0,b.v0)(),(t=>{n(),e(t)}),t)}));L.beforeEach((async(e,t,n)=>{e.matched.some((e=>e.meta.requiresAuth))?await T()?n():n("/login"):n()}));var H=L,Z=n(6265),F=n.n(Z),U=n(6423),W=n(4275);const z={apiKey:"AIzaSyCsXwadglpNccVPBrmqNHt3yQHipkH_-yI",authDomain:"todo-ceb51.firebaseapp.com",projectId:"todo-ceb51",storageBucket:"todo-ceb51.appspot.com",messagingSenderId:"926542903835",appId:"1:926542903835:web:84127aca517d5450c896be",measurementId:"G-5269R9P1E8"};(0,W.ZF)(z);const B=(0,r.ri)(q);B.use(H),B.mount("#app"),B.use(U.Z,F())}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{14:"00b07d85",162:"8aa441e1",213:"d7e4500f",601:"bbbf419b",692:"9af7151c",937:"6d6b6687"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{14:"af0c982b",162:"6d9ca511",213:"acbe333f",601:"97750ee8",692:"0272d71d",937:"324fc774"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="todo-app:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(t(i,c))return o();e(r,c,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={14:1,162:1,213:1,601:1,692:1,937:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],s=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2990)}));r=n.O(r)})();
//# sourceMappingURL=app.0d4053d5.js.map