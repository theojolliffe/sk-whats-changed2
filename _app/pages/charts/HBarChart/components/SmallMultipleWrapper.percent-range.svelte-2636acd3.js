import{S as L,i as k,s as v,X as A,Y as G,Z as D,w as g,x as c,y as _,q as $,o as x,B as b,a2 as h,_ as q,k as d,m as w,g as y,d as S}from"../../../../chunks/vendor-64f33e0e.js";import B from"./AxisY.svelte-68cd0c3b.js";import C from"./AxisX.svelte-9a91136e.js";/* empty css                                                                 */import X from"./LabelsAge.svelte-dee59946.js";/* empty css                                                             */import Y from"./Bar.svelte-b8b365b4.js";function H(l){let a,n,t,s,f,o,u,i;return a=new B({props:{nu:l[1]}}),t=new C({}),f=new Y({}),f.$on("hover",l[4]),u=new X({props:{hovered:l[2],ageLabel:l[3]}}),{c(){g(a.$$.fragment),n=d(),g(t.$$.fragment),s=d(),g(f.$$.fragment),o=d(),g(u.$$.fragment)},l(e){c(a.$$.fragment,e),n=w(e),c(t.$$.fragment,e),s=w(e),c(f.$$.fragment,e),o=w(e),c(u.$$.fragment,e)},m(e,m){_(a,e,m),y(e,n,m),_(t,e,m),y(e,s,m),_(f,e,m),y(e,o,m),_(u,e,m),i=!0},p(e,m){const p={};m&2&&(p.nu=e[1]),a.$set(p);const r={};m&4&&(r.hovered=e[2]),m&8&&(r.ageLabel=e[3]),u.$set(r)},i(e){i||($(a.$$.fragment,e),$(t.$$.fragment,e),$(f.$$.fragment,e),$(u.$$.fragment,e),i=!0)},o(e){x(a.$$.fragment,e),x(t.$$.fragment,e),x(f.$$.fragment,e),x(u.$$.fragment,e),i=!1},d(e){b(a,e),e&&S(n),b(t,e),e&&S(s),b(f,e),e&&S(o),b(u,e)}}}function I(l){let a,n;return a=new q({props:{$$slots:{default:[H]},$$scope:{ctx:l}}}),{c(){g(a.$$.fragment)},l(t){c(a.$$.fragment,t)},m(t,s){_(a,t,s),n=!0},p(t,s){const f={};s&1038&&(f.$$scope={dirty:s,ctx:t}),a.$set(f)},i(t){n||($(a.$$.fragment,t),n=!0)},o(t){x(a.$$.fragment,t),n=!1},d(t){b(a,t)}}}function M(l){let a,n;return a=new A({props:{ssr:!0,padding:{top:40,right:6,bottom:2,left:60},x:"y",y:"x",data:l[0],xScale:G(),yScale:D().paddingInner([.05]).round(!0),xDomain:[0,100],yDomain:l[0][0].map(E).reverse(),height:300,$$slots:{default:[I]},$$scope:{ctx:l}}}),{c(){g(a.$$.fragment)},l(t){c(a.$$.fragment,t)},m(t,s){_(a,t,s),n=!0},p(t,[s]){const f={};s&1&&(f.data=t[0]),s&1&&(f.yDomain=t[0][0].map(E).reverse()),s&1038&&(f.$$scope={dirty:s,ctx:t}),a.$set(f)},i(t){n||($(a.$$.fragment,t),n=!0)},o(t){x(a.$$.fragment,t),n=!1},d(t){b(a,t)}}}const E=l=>l.x;function W(l,a,n){let{data:t}=a,{labels:s}=a,{nu:f}=a,{fullExtents:o}=a,{scale:u}=a,{extentGetters:i}=a,e=null,m=!0;h(t,i);function p(r){n(2,e=r.detail.id),n(3,m=r)}return console.log("data",t[0].map(r=>r.x)),l.$$set=r=>{"data"in r&&n(0,t=r.data),"labels"in r&&n(5,s=r.labels),"nu"in r&&n(1,f=r.nu),"fullExtents"in r&&n(6,o=r.fullExtents),"scale"in r&&n(7,u=r.scale),"extentGetters"in r&&n(8,i=r.extentGetters)},[t,f,e,m,p,s,o,u,i]}class O extends L{constructor(a){super();k(this,a,W,M,v,{data:0,labels:5,nu:1,fullExtents:6,scale:7,extentGetters:8})}}export{O as default};
