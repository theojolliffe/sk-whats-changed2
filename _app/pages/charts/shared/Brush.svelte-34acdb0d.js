import{S as U,i as z,s as A,e as y,k as I,c as L,a as k,d as c,m as T,b as D,f as d,g,P as v,ah as _,U as j,R as V,ai as b,ac as F}from"../../../chunks/vendor-64f33e0e.js";function B(l){let s,i,m,o,e,r,a;return{c(){s=y("div"),i=I(),m=y("div"),o=I(),e=y("div"),this.h()},l(t){s=L(t,"DIV",{class:!0,style:!0}),k(s).forEach(c),i=T(t),m=L(t,"DIV",{class:!0,style:!0}),k(m).forEach(c),o=T(t),e=L(t,"DIV",{class:!0,style:!0}),k(e).forEach(c),this.h()},h(){D(s,"class","brush-inner svelte-1m1nhvc"),d(s,"left",l[3]+"%"),d(s,"right",l[2]+"%"),D(m,"class","brush-handle svelte-1m1nhvc"),d(m,"left",l[3]+"%"),D(e,"class","brush-handle svelte-1m1nhvc"),d(e,"right",l[2]+"%")},m(t,h){g(t,s,h),g(t,i,h),g(t,m,h),g(t,o,h),g(t,e,h),r||(a=[v(s,"mousedown",_(l[5])),v(s,"touchstart",_(l[5])),v(m,"mousedown",_(l[6])),v(m,"touchstart",_(l[6])),v(e,"mousedown",_(l[7])),v(e,"touchstart",_(l[7]))],r=!0)},p(t,h){h&8&&d(s,"left",t[3]+"%"),h&4&&d(s,"right",t[2]+"%"),h&8&&d(m,"left",t[3]+"%"),h&4&&d(e,"right",t[2]+"%")},d(t){t&&c(s),t&&c(i),t&&c(m),t&&c(o),t&&c(e),r=!1,j(a)}}}function G(l){let s,i,m,o=l[0]!==null&&B(l);return{c(){s=y("div"),o&&o.c(),this.h()},l(e){s=L(e,"DIV",{class:!0});var r=k(s);o&&o.l(r),r.forEach(c),this.h()},h(){D(s,"class","brush-outer svelte-1m1nhvc")},m(e,r){g(e,s,r),o&&o.m(s,null),l[9](s),i||(m=[v(s,"mousedown",_(l[4])),v(s,"touchstart",_(l[4]))],i=!0)},p(e,[r]){e[0]!==null?o?o.p(e,r):(o=B(e),o.c(),o.m(s,null)):o&&(o.d(1),o=null)},i:V,o:V,d(e){e&&c(s),o&&o.d(),l[9](null),i=!1,j(m)}}}function H(l,s,i){let m,o,{min:e}=s,{max:r}=s,a;const t=n=>{const{left:u,right:w}=a.getBoundingClientRect();return b((n-u)/(w-u),0,1)},h=n=>u=>{if(u.type==="touchstart"){if(u.touches.length!==1)return;u=u.touches[0]}const w=u.identifier,P={min:e,max:r,p:t(u.clientX)},p=f=>{f.type==="touchmove"&&(f.changedTouches.length!==1||(f=f.changedTouches[0],f.identifier!==w))||n(P,t(f.clientX))},E=f=>{if(f.type==="touchend"){if(f.changedTouches.length!==1||f.changedTouches[0].identifier!==w)return}else f.target===a&&C();window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",E),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",E)};window.addEventListener("mousemove",p),window.addEventListener("mouseup",E),window.addEventListener("touchmove",p),window.addEventListener("touchend",E)},C=()=>{i(0,e=null),i(8,r=null)},M=h((n,u)=>{i(0,e=b(Math.min(n.p,u),0,1)),i(8,r=b(Math.max(n.p,u),0,1))}),R=h((n,u)=>{const w=b(u-n.p,-n.min,1-n.max);i(0,e=n.min+w),i(8,r=n.max+w)}),S=h((n,u)=>{i(0,e=u>n.max?n.max:u),i(8,r=u>n.max?u:n.max)}),X=h((n,u)=>{i(0,e=u<n.min?u:n.min),i(8,r=u<n.min?n.min:u)});function q(n){F[n?"unshift":"push"](()=>{a=n,i(1,a)})}return l.$$set=n=>{"min"in n&&i(0,e=n.min),"max"in n&&i(8,r=n.max)},l.$$.update=()=>{l.$$.dirty&1&&i(3,m=100*e),l.$$.dirty&256&&i(2,o=100*(1-r))},[e,a,o,m,M,R,S,X,r,q]}class K extends U{constructor(s){super();z(this,s,H,G,A,{min:0,max:8})}}export{K as default};
