"use strict";(self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[]).push([[937],{6959:function(e,t,r){r.d(t,{Z:function(){return u}});r(1703);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=r(6265),a=r.n(c);const s=a().create({baseURL:"http://localhost:5000/api/posts/",headers:{"Content-type":"application/json"}});var i=s;class n{constructor(){o(this,"_id",void 0),o(this,"title",void 0),o(this,"description",void 0),o(this,"author",void 0),o(this,"completed",void 0)}}class l extends n{getProjects(){return i.get("/")}getProjectApi(e){return i.get(`/${e}`)}createProjectApi(e){return i.post("/",e)}updateProjectApi(e,t){return i.put(`/${e}`,t)}deleteProjectApi(e){return i["delete"](`/${e}`)}}var d=new l;const p=()=>{const e=async()=>{const e=d.getProjects().then((e=>e.data)).catch((e=>{throw e}));return e},t=async(e,t,r,o)=>{const c={title:e,description:t,author:r,completed:o},a=d.createProjectApi(c).catch((e=>{throw e}));return a},r=async e=>{const t=d.getProjectApi(e).then((e=>{let t=e.data;return t})).catch((e=>{throw e}));return t},o=async e=>{const t=d.deleteProjectApi(e).then((e=>e.data)).catch((e=>{throw e}));return t},c=async(e,t,r,o,c)=>{const a={title:t,description:r,author:o,completed:c},s=d.updateProjectApi(e,a).then((e=>e)).catch((e=>{throw console.log(e.message),new Error(e)}));return s},a=async(e,t,r,o,c)=>{const a={title:t,description:r,author:o,completed:c},s=d.updateProjectApi(e,a).then((e=>e)).catch((e=>{throw e}));return s};return{getData:e,addProjects:t,deleteProject:o,getProject:r,updateProject:c,updateStatus:a}};var u=p},33:function(e,t,r){r.d(t,{Z:function(){return p}});var o=r(3396);const c={class:"border shadow py-2 mr-5 ml-5 px-10 rounded lg:w-10/12 sm:w-full md:w-full border"},a=(0,o.uE)('<div class="animate-pulse flex space-x-4"><div class="flex-1 space-y-6 py-1"><div class="h-2 bg-slate-200 rounded"></div><div class="space-y-3"><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-200 rounded col-span-2"></div><div class="h-2 bg-slate-200 rounded col-span-1"></div></div><div class="h-2 bg-slate-200 rounded"></div></div></div></div>',1),s=[a];function i(e,t){return(0,o.wg)(),(0,o.iD)("div",c,s)}var n=r(89);const l={},d=(0,n.Z)(l,[["render",i]]);var p=d},2934:function(e,t,r){r.d(t,{Z:function(){return w}});var o=r(3396),c=r(7139),a=r(9242),s=r(4870);const i={class:"project shadow py-5 px-10 ml-5 mr-5 mt-3 rounded border w-10/12"},n={class:"actions flex justify-between"},l={key:0},d={class:"material-icons cursor-pointer edit px-1 text-yellow-500 hover:text-yellow-600"},p=(0,o.Uk)("edit"),u={key:1},v=(0,o._)("span",{class:"material-icons done px-1 text-lime-600 hover:text-lime-700"},"check_circle",-1),m=[v],h={key:0,class:"details"};var g=(0,o.aZ)({__name:"SingleProject",props:["project","id"],emits:["openDialog","deleteProj","updateDialog","updateStatus","task"],setup(e,{emit:t}){const r=e,v=(0,s.iH)(!1),g=(0,s.iH)(!1),j=e=>{g.value=!0;const o={_id:e,title:r.project.title,description:r.project.description,completed:g.value};t("task",o)},w=e=>{t("openDialog"),t("deleteProj",e)};return(e,t)=>{const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",n,[(0,o._)("h3",{onClick:t[0]||(t[0]=e=>v.value=!v.value),class:"cursor-pointer"},(0,c.zw)(r.project.title),1),r.project.completed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("span",{class:"material-icons cursor-pointer done px-1 text-lime-600 hover:text-lime-700",onClick:t[1]||(t[1]=e=>j(r.project._id))},"done"),(0,o._)("span",d,[(0,o.Wm)(s,{to:{name:"editProject",params:{id:r.project._id}}},{default:(0,o.w5)((()=>[p])),_:1},8,["to"])]),(0,o._)("span",{class:"material-icons cursor-pointer delete px-1 text-red-600 hover:text-red-800",onClick:t[2]||(t[2]=e=>w(r.project._id))},"delete ")])),r.project.completed?((0,o.wg)(),(0,o.iD)("div",u,m)):(0,o.kq)("",!0)]),(0,o.Wm)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[v.value?((0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("p",null,(0,c.zw)(r.project.description),1)])):(0,o.kq)("",!0)])),_:1})])}}});const j=g;var w=j},7937:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var o=r(3396),c=r(9242),a=r(4870),s=r(6959),i=r(33),n=r(2934);const l={key:0,class:"mt-5 grid justify-items-center"},d={key:1},p={class:"ongoing mx-20 sm:mx-2 sm:mb-4"};var u=(0,o.aZ)({__name:"TaskCompleted",setup(e){const{getData:t}=(0,s.Z)(),r=(0,a.iH)(!1);let u=(0,a.iH)([]);const v=async()=>{r.value=!0,u.value=await t().catch((e=>{console.log(e)})).finally((()=>{r.value=!1}))};return(0,o.bv)((()=>{v()})),(e,t)=>r.value?((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(i.Z)])):((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",p,[(0,o.Wm)(c.W3,{name:"fade",tag:"p"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,a.SU)(u),(e=>((0,o.wg)(),(0,o.iD)("span",{class:"list-items grid justify-items-center",key:e._id},[e.completed?((0,o.wg)(),(0,o.j4)(n.Z,{key:0,project:e},null,8,["project"])):(0,o.kq)("",!0)])))),128))])),_:1})])]))}});const v=u;var m=v}}]);
//# sourceMappingURL=937.6d6b6687.js.map