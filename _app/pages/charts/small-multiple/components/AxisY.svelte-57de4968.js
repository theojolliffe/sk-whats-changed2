import{S as K,i as M,s as P,$ as y,a0 as b,a as T,d as k,b as o,g as C,t as Q,h as U,f as N,I as O,O as V,j as X,T as Z,l as W,R as z,F as x,W as w}from"../../../../chunks/vendor-64f33e0e.js";function D(t,l,e){const n=t.slice();return n[24]=l[e],n[26]=e,n}function G(t){let l,e,n=t[13],i=[];for(let a=0;a<n.length;a+=1)i[a]=J(D(t,n,a));return{c(){l=y("g");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){l=b(a,"g",{class:!0,transform:!0});var h=T(l);for(let _=0;_<i.length;_+=1)i[_].l(h);h.forEach(k),this.h()},h(){o(l,"class","axis y-axis"),o(l,"transform",e="translate("+-t[14].left+", 0)")},m(a,h){C(a,l,h);for(let _=0;_<i.length;_+=1)i[_].m(l,null)},p(a,h){if(h&65023){n=a[13];let _;for(_=0;_<n.length;_+=1){const c=D(a,n,_);i[_]?i[_].p(c,h):(i[_]=J(c),i[_].c(),i[_].m(l,null))}for(;_<i.length;_+=1)i[_].d(1);i.length=n.length}h&16384&&e!==(e="translate("+-a[14].left+", 0)")&&o(l,"transform",e)},d(a){a&&k(l),Z(i,a)}}}function H(t){let l,e,n;return{c(){l=y("line"),this.h()},l(i){l=b(i,"line",{x2:!0,y1:!0,y2:!0,stroke:!0,class:!0}),T(l).forEach(k),this.h()},h(){o(l,"x2","100%"),o(l,"y1",e=t[2]+(t[11]?t[12].bandwidth()/2:0)),o(l,"y2",n=t[2]+(t[11]?t[12].bandwidth()/2:0)),o(l,"stroke",t[6]),o(l,"class","svelte-1ypvook"),V(l,"baseline",t[8])},m(i,a){C(i,l,a)},p(i,a){a&6148&&e!==(e=i[2]+(i[11]?i[12].bandwidth()/2:0))&&o(l,"y1",e),a&6148&&n!==(n=i[2]+(i[11]?i[12].bandwidth()/2:0))&&o(l,"y2",n),a&64&&o(l,"stroke",i[6]),a&256&&V(l,"baseline",i[8])},d(i){i&&k(l)}}}function J(t){let l,e,n=t[10][t[24]].label+"",i,a,h,_,c,d,g,r=t[0]!==!1&&H(t);return{c(){l=y("g"),r&&r.c(),e=y("text"),i=Q(n),this.h()},l(s){l=b(s,"g",{class:!0,transform:!0});var u=T(l);r&&r.l(u),e=b(u,"text",{x:!0,y:!0,dx:!0,dy:!0,fill:!0,style:!0});var m=T(e);i=U(m,n),m.forEach(k),u.forEach(k),this.h()},h(){o(e,"x",a=t[1]-10),o(e,"y",h=t[2]+(t[11]?t[12].bandwidth()/2:0)-3),o(e,"dx",_=t[11]?3:t[3]),o(e,"dy",c=t[11]?4:t[4]),o(e,"fill",t[7]),N(e,"text-anchor",t[11]?"end":t[5]),o(l,"class",d="tick tick-"+t[24]+" svelte-1ypvook"),o(l,"transform",g="translate("+(t[15][0]+(t[11]?t[14].left:0))+", "+t[12](t[24])+")")},m(s,u){C(s,l,u),r&&r.m(l,null),O(l,e),O(e,i)},p(s,u){s[0]!==!1?r?r.p(s,u):(r=H(s),r.c(),r.m(l,e)):r&&(r.d(1),r=null),u&9216&&n!==(n=s[10][s[24]].label+"")&&X(i,n),u&2&&a!==(a=s[1]-10)&&o(e,"x",a),u&6148&&h!==(h=s[2]+(s[11]?s[12].bandwidth()/2:0)-3)&&o(e,"y",h),u&2056&&_!==(_=s[11]?3:s[3])&&o(e,"dx",_),u&2064&&c!==(c=s[11]?4:s[4])&&o(e,"dy",c),u&128&&o(e,"fill",s[7]),u&2080&&N(e,"text-anchor",s[11]?"end":s[5]),u&8192&&d!==(d="tick tick-"+s[24]+" svelte-1ypvook")&&o(l,"class",d),u&63488&&g!==(g="translate("+(s[15][0]+(s[11]?s[14].left:0))+", "+s[12](s[24])+")")&&o(l,"transform",g)},d(s){s&&k(l),r&&r.d()}}}function p(t){let l,e=t[9]==0&&G(t);return{c(){e&&e.c(),l=W()},l(n){e&&e.l(n),l=W()},m(n,i){e&&e.m(n,i),C(n,l,i)},p(n,[i]){n[9]==0?e?e.p(n,i):(e=G(n),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i:z,o:z,d(n){e&&e.d(n),n&&k(l)}}}function $(t,l,e){let n,i,a,h,_;const{padding:c,xRange:d,xScale:g,yScale:r}=x("LayerCake");w(t,c,f=>e(14,h=f)),w(t,d,f=>e(15,_=f)),w(t,r,f=>e(12,a=f));let{ticks:s=4}=l,{prefix:u=""}=l,{suffix:m=""}=l,{gridlines:A=!1}=l,{formatTick:v=f=>f}=l,{xTick:S=0}=l,{yTick:E=0}=l,{dxTick:R=0}=l,{dyTick:Y=-4}=l,{textAnchor:j="start"}=l,{lineColor:q="#aaa"}=l,{textColor:B="#666"}=l,{solid:F=!1}=l,{nu:I}=l,{topics:L}=l;return t.$$set=f=>{"ticks"in f&&e(19,s=f.ticks),"prefix"in f&&e(20,u=f.prefix),"suffix"in f&&e(21,m=f.suffix),"gridlines"in f&&e(0,A=f.gridlines),"formatTick"in f&&e(22,v=f.formatTick),"xTick"in f&&e(1,S=f.xTick),"yTick"in f&&e(2,E=f.yTick),"dxTick"in f&&e(3,R=f.dxTick),"dyTick"in f&&e(4,Y=f.dyTick),"textAnchor"in f&&e(5,j=f.textAnchor),"lineColor"in f&&e(6,q=f.lineColor),"textColor"in f&&e(7,B=f.textColor),"solid"in f&&e(8,F=f.solid),"nu"in f&&e(9,I=f.nu),"topics"in f&&e(10,L=f.topics)},t.$$.update=()=>{t.$$.dirty&4096&&e(11,n=typeof a.bandwidth=="function"),t.$$.dirty&530432&&e(13,i=Array.isArray(s)?s:n?a.domain():a.ticks(s))},[A,S,E,R,Y,j,q,B,F,I,L,n,a,i,h,_,c,d,r,s,u,m,v]}class le extends K{constructor(l){super();M(this,l,$,p,P,{ticks:19,prefix:20,suffix:21,gridlines:0,formatTick:22,xTick:1,yTick:2,dxTick:3,dyTick:4,textAnchor:5,lineColor:6,textColor:7,solid:8,nu:9,topics:10})}}export{le as default};
