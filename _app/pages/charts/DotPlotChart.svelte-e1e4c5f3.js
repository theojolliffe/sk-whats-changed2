import{S as C,i as S,s as E,X as P,Z as z,a4 as L,e as q,w as u,k as b,c as A,a as I,x as g,d as p,m as h,b as K,f as k,g as d,y as _,q as m,o as $,B as c,_ as R,l as w,n as X,p as j,R as B,a5 as F}from"../../chunks/vendor-64f33e0e.js";import H from"./DotPlot.svelte-a89076b0.js";import N from"./DotLabels.svelte-e952d051.js";import O from"./AxisX.svelte-a11f3eca.js";import V from"./AxisY.svelte-df3c8560.js";import Y from"./Legend.svelte-24cd3c14.js";function Z(l){let a,s,r,f,n,e;return a=new O({}),r=new V({props:{gridlines:!1}}),n=new H({}),{c(){u(a.$$.fragment),s=b(),u(r.$$.fragment),f=b(),u(n.$$.fragment)},l(t){g(a.$$.fragment,t),s=h(t),g(r.$$.fragment,t),f=h(t),g(n.$$.fragment,t)},m(t,i){_(a,t,i),d(t,s,i),_(r,t,i),d(t,f,i),_(n,t,i),e=!0},p:B,i(t){e||(m(a.$$.fragment,t),m(r.$$.fragment,t),m(n.$$.fragment,t),e=!0)},o(t){$(a.$$.fragment,t),$(r.$$.fragment,t),$(n.$$.fragment,t),e=!1},d(t){c(a,t),t&&p(s),c(r,t),t&&p(f),c(n,t)}}}function D(l){let a,s;return a=new F({props:{$$slots:{default:[G]},$$scope:{ctx:l}}}),{c(){u(a.$$.fragment)},l(r){g(a.$$.fragment,r)},m(r,f){_(a,r,f),s=!0},i(r){s||(m(a.$$.fragment,r),s=!0)},o(r){$(a.$$.fragment,r),s=!1},d(r){c(a,r)}}}function G(l){let a,s;return a=new N({}),{c(){u(a.$$.fragment)},l(r){g(a.$$.fragment,r)},m(r,f){_(a,r,f),s=!0},i(r){s||(m(a.$$.fragment,r),s=!0)},o(r){$(a.$$.fragment,r),s=!1},d(r){c(a,r)}}}function J(l){let a,s,r,f;a=new R({props:{$$slots:{default:[Z]},$$scope:{ctx:l}}});let n=l[2]&&D(l);return{c(){u(a.$$.fragment),s=b(),n&&n.c(),r=w()},l(e){g(a.$$.fragment,e),s=h(e),n&&n.l(e),r=w()},m(e,t){_(a,e,t),d(e,s,t),n&&n.m(e,t),d(e,r,t),f=!0},p(e,t){const i={};t&64&&(i.$$scope={dirty:t,ctx:e}),a.$set(i),e[2]?n?t&4&&m(n,1):(n=D(e),n.c(),m(n,1),n.m(r.parentNode,r)):n&&(X(),$(n,1,1,()=>{n=null}),j())},i(e){f||(m(a.$$.fragment,e),m(n),f=!0)},o(e){$(a.$$.fragment,e),$(n),f=!1},d(e){c(a,e),e&&p(s),n&&n.d(e),e&&p(r)}}}function M(l){let a,s,r,f,n;return s=new P({props:{padding:{right:0,bottom:20,left:0},x:l[3],y,yScale:z().paddingInner([.05]).round(!0),yDomain:l[0].map(l[5]),xPadding:[15,0],zScale:L(),zDomain:l[3],zRange:l[4],data:l[0],$$slots:{default:[J]},$$scope:{ctx:l}}}),f=new Y({props:{domain:l[3],colors:l[4]}}),{c(){a=q("div"),u(s.$$.fragment),r=b(),u(f.$$.fragment),this.h()},l(e){a=A(e,"DIV",{class:!0,style:!0});var t=I(a);g(s.$$.fragment,t),t.forEach(p),r=h(e),g(f.$$.fragment,e),this.h()},h(){K(a,"class","chart-container svelte-ivcd9i"),k(a,"height",l[1]+"px")},m(e,t){d(e,a,t),_(s,a,null),d(e,r,t),_(f,e,t),n=!0},p(e,[t]){const i={};t&1&&(i.yDomain=e[0].map(e[5])),t&1&&(i.data=e[0]),t&68&&(i.$$scope={dirty:t,ctx:e}),s.$set(i),(!n||t&2)&&k(a,"height",e[1]+"px")},i(e){n||(m(s.$$.fragment,e),m(f.$$.fragment,e),n=!0)},o(e){$(s.$$.fragment,e),$(f.$$.fragment,e),n=!1},d(e){e&&p(a),c(s),e&&p(r),c(f,e)}}}const y="label";function Q(l,a,s){let{data:r}=a,{height:f=400}=a,{labels:n=!1}=a;const e=Object.keys(r[0]).filter(o=>o!==y),t=["#DF0667","#3C388E","#2166ac","#b2182b","grey"];r.forEach(o=>{e.forEach(v=>{o[v]=+o[v]})});const i=o=>o[y];return l.$$set=o=>{"data"in o&&s(0,r=o.data),"height"in o&&s(1,f=o.height),"labels"in o&&s(2,n=o.labels)},[r,f,n,e,t,i]}class ae extends C{constructor(a){super();S(this,a,Q,M,E,{data:0,height:1,labels:2})}}export{ae as default};
