import{S as w,i as C,s as S,$ as b,a0 as j,a as D,d as h,b as s,g as k,R as p,T as E,F,W as u}from"../../../chunks/vendor-64f33e0e.js";function y(a,t,l){const n=a.slice();return n[10]=t[l],n}function v(a){let t,l,n;return{c(){t=b("circle"),this.h()},l(e){t=j(e,"circle",{cx:!0,cy:!0,r:!0,class:!0});var i=D(t);i.forEach(h),this.h()},h(){s(t,"cx",l=a[2](a[10])[0]),s(t,"cy",n=a[2](a[10])[1]),s(t,"r",a[1]),s(t,"class","svelte-uw2d5h")},m(e,i){k(e,t,i)},p(e,i){i&5&&l!==(l=e[2](e[10])[0])&&s(t,"cx",l),i&5&&n!==(n=e[2](e[10])[1])&&s(t,"cy",n),i&2&&s(t,"r",e[1])},d(e){e&&h(t)}}}function M(a){let t,l=a[0],n=[];for(let e=0;e<l.length;e+=1)n[e]=v(y(a,l,e));return{c(){t=b("g");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=j(e,"g",{class:!0});var i=D(t);for(let c=0;c<n.length;c+=1)n[c].l(i);i.forEach(h),this.h()},h(){s(t,"class","points")},m(e,i){k(e,t,i);for(let c=0;c<n.length;c+=1)n[c].m(t,null)},p(e,[i]){if(i&7){l=e[0];let c;for(c=0;c<l.length;c+=1){const o=y(e,l,c);n[c]?n[c].p(o,i):(n[c]=v(o),n[c].c(),n[c].m(t,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=l.length}},i:p,o:p,d(e){e&&h(t),E(n,e)}}}function P(a,t,l){let n,e,i,c;const{data:o,width:f,height:g}=F("LayerCake");u(a,o,r=>l(7,e=r)),u(a,f,r=>l(9,c=r)),u(a,g,r=>l(8,i=r));let{projection:_}=t,{pointsData:m=[]}=t,{r:d=5}=t;return a.$$set=r=>{"projection"in r&&l(6,_=r.projection),"pointsData"in r&&l(0,m=r.pointsData),"r"in r&&l(1,d=r.r)},a.$$.update=()=>{a.$$.dirty&960&&l(2,n=_().fitSize([c,i],e))},[m,d,n,o,f,g,_,e,i,c]}class z extends w{constructor(t){super();C(this,t,P,M,S,{projection:6,pointsData:0,r:1})}}export{z as default};
