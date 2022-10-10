"use strict";(self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[]).push([[601],{6601:function(e,s,a){a.r(s),a.d(s,{default:function(){return P}});var l=a(3396),o=a(9242),r=a(7139),t=a(4870),i=a(6677),n=a(4966),u=a(2483),c=a(5421);const d=e=>((0,l.dD)("data-v-c685aeb8"),e=e(),(0,l.Cn)(),e),p={class:"grid grid-cols-12 mt-40",id:"login-wrapper"},m=d((()=>(0,l._)("div",{class:"col-span-6 bg-gray-200 flex items-center flex-col"},[(0,l._)("h1",{class:"text-2xl mt-10 py-5"},"JFE Techno Manila"),(0,l._)("img",{src:i,class:""})],-1))),v={class:"flex flex-col col-span-6 px-5 py-5"},b=d((()=>(0,l._)("h1",{class:"text-3xl mt-10 mb-20 text-center font-medium"},"Welcome Back",-1))),f=d((()=>(0,l._)("img",{src:n},null,-1))),g=d((()=>(0,l._)("span",{class:"ml-2"},"sign in with google",-1))),w=[f,g],h=d((()=>(0,l._)("div",{class:"flex items-center mt-5 mb-5"},[(0,l._)("div",{class:"flex-grow h-px bg-gray-200"}),(0,l._)("span",{class:"flex-shrink text-sm text-gray-400 px-4 font-medium uppercase"},"or login with email"),(0,l._)("div",{class:"flex-grow h-px bg-gray-200"})],-1))),x={key:0,class:"pb-2 px-1"},_={class:"text-red-600"};var y=(0,l.aZ)({__name:"SignIn",setup(e){const s=(0,u.tv)(),a=(0,t.iH)(!1),i=(0,t.iH)(!1),n=(0,t.iH)();let d=(0,t.iH)({email:"",password:""});const f=()=>{const e=(0,c.v0)();(0,c.e5)(e,d.value.email,d.value.password).then((()=>{s.push("/")})).catch((e=>{if(""!==d.value.email&&""!==d.value.password)switch(e.code){case"auth/invalid-email":n.value="Please enter a valid email address",a.value=!0;break;case"auth/user-not-found":n.value="No account with that email was found",a.value=!0;break;case"auth/wrong-password":n.value="Password is incorrect",i.value=!0;break;default:n.value="Email or password is incorrect",a.value=!0,i.value=!0;break}else if(""!==d.value.email&&""===d.value.password)switch(e.code){case"auth/wrong-password":n.value="Password is incorrect",i.value=!0,a.value=!1;break;default:n.value="Password is incorrect",i.value=!0,a.value=!1;break}else n.value="Email or Password should not be empty",a.value=!0,i.value=!0}))},g=()=>{const e=new c.hJ;(0,c.rh)((0,c.v0)(),e).then((e=>{console.log(e.user.displayName),s.push("/")})).catch((e=>{console.log(e.message)}))};return(e,s)=>((0,l.wg)(),(0,l.iD)("div",p,[m,(0,l._)("div",v,[(0,l._)("form",{onSubmit:s[2]||(s[2]=(0,o.iM)((()=>{}),["prevent"]))},[b,(0,l._)("div",{onClick:g,class:"flex items-center justify-center w-full shadow-md border-solid border-2 border-gray-100 py-3 uppercase text-blue-800 font-bold text-sm rounded cursor-pointer mb-5"},w),h,(0,l.wy)((0,l._)("input",{type:"text",class:(0,r.C_)(["input mb-5 w-full border border-1 border-slate-200 py-4 pl-2 pr-3 outline-none focus:outline-hidden focus:border-b-2 focus:border-slate-500 focus:transition-all focus:ring-0 sm:text-sm",[a.value?"errorClass":"borderClass"]]),placeholder:"Email","onUpdate:modelValue":s[0]||(s[0]=e=>(0,t.SU)(d).email=e)},null,2),[[o.nr,(0,t.SU)(d).email]]),(0,l.wy)((0,l._)("input",{type:"password",class:(0,r.C_)(["input mb-5 w-full border border-1 border-slate-200 py-4 pl-2 pr-3 outline-none focus:outline-hidden focus:border-b-2 focus:border-slate-500 focus:transition-all focus:ring-0 sm:text-sm",[i.value?"errorClass":"borderClass"]]),placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=e=>(0,t.SU)(d).password=e)},null,2),[[o.nr,(0,t.SU)(d).password]]),n.value?((0,l.wg)(),(0,l.iD)("div",x,[(0,l._)("span",_,(0,r.zw)(n.value),1)])):(0,l.kq)("",!0),(0,l._)("button",{onClick:f,class:"w-full bg-indigo-800 py-3 rounded text-white uppercase font-bold hover:bg-indigo-900"},"login")],32)])]))}}),k=a(89);const C=(0,k.Z)(y,[["__scopeId","data-v-c685aeb8"]]);var P=C},4966:function(e,s,a){e.exports=a.p+"img/google.82317b6d.svg"},6677:function(e,s,a){e.exports=a.p+"img/team.24dbb7c9.svg"}}]);
//# sourceMappingURL=601.bbbf419b.js.map