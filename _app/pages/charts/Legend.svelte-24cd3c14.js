import{S as w,i as y,s as S,e as c,k as b,t as j,c as _,a as d,d as u,m as v,h as C,b as g,f,O as q,g as I,I as m,j as D,R as z,T as O}from"../../chunks/vendor-64f33e0e.js";function W(s,e,l){const t=s.slice();return t[8]=e[l],t[10]=l,t}function E(s){let e,l,t,a=s[8]+"",r,i;return{c(){e=c("li"),l=c("div"),t=b(),r=j(a),i=b(),this.h()},l(n){e=_(n,"LI",{class:!0});var o=d(e);l=_(o,"DIV",{class:!0,style:!0}),d(l).forEach(u),t=v(o),r=C(o,a),i=v(o),o.forEach(u),this.h()},h(){g(l,"class","bullet svelte-o1q0c0"),f(l,"background-color",s[1][s[10]]),f(l,"width",(!s[4]&&(s[2]||s[3]&&s[10]!=0)?s[5]:s[6])+"px"),f(l,"height",(s[4]&&(s[2]||s[3]&&s[10]!=0)?s[5]:s[6])+"px"),q(l,"round",s[7]),g(e,"class","svelte-o1q0c0")},m(n,o){I(n,e,o),m(e,l),m(e,t),m(e,r),m(e,i)},p(n,o){o&2&&f(l,"background-color",n[1][n[10]]),o&124&&f(l,"width",(!n[4]&&(n[2]||n[3]&&n[10]!=0)?n[5]:n[6])+"px"),o&124&&f(l,"height",(n[4]&&(n[2]||n[3]&&n[10]!=0)?n[5]:n[6])+"px"),o&128&&q(l,"round",n[7]),o&1&&a!==(a=n[8]+"")&&D(r,a)},d(n){n&&u(e)}}}function R(s){let e,l=s[0],t=[];for(let a=0;a<l.length;a+=1)t[a]=E(W(s,l,a));return{c(){e=c("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=_(a,"UL",{class:!0});var r=d(e);for(let i=0;i<t.length;i+=1)t[i].l(r);r.forEach(u),this.h()},h(){g(e,"class","legend svelte-o1q0c0")},m(a,r){I(a,e,r);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(a,[r]){if(r&255){l=a[0];let i;for(i=0;i<l.length;i+=1){const n=W(a,l,i);t[i]?t[i].p(n,r):(t[i]=E(n),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}},i:z,o:z,d(a){a&&u(e),O(t,a)}}}function T(s,e,l){let{domain:t=null}=e,{colors:a=null}=e,{line:r=!1}=e,{comparison:i=!1}=e,{horizontal:n=!0}=e,{markerWidth:o=2.5}=e,{markerLength:k=13}=e,{round:L=!1}=e;return s.$$set=h=>{"domain"in h&&l(0,t=h.domain),"colors"in h&&l(1,a=h.colors),"line"in h&&l(2,r=h.line),"comparison"in h&&l(3,i=h.comparison),"horizontal"in h&&l(4,n=h.horizontal),"markerWidth"in h&&l(5,o=h.markerWidth),"markerLength"in h&&l(6,k=h.markerLength),"round"in h&&l(7,L=h.round)},[t,a,r,i,n,o,k,L]}class V extends w{constructor(e){super();y(this,e,T,R,S,{domain:0,colors:1,line:2,comparison:3,horizontal:4,markerWidth:5,markerLength:6,round:7})}}export{V as default};
