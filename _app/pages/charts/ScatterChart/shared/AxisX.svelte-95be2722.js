import{S as K,i as N,s as P,$ as b,l as O,t as Q,a0 as w,a as C,h as U,d as c,b as r,f as m,g as A,I as D,O as v,j as Y,R as V,T as Z,F as x,W as M}from"../../../../chunks/vendor-64f33e0e.js";function W(t,e,f){const i=t.slice();return i[24]=e[f],i[26]=f,i}function z(t){let e,f;return{c(){e=b("line"),this.h()},l(i){e=w(i,"line",{class:!0,y1:!0,y2:!0,x1:!0,x2:!0,style:!0}),C(e).forEach(c),this.h()},h(){r(e,"class","gridline svelte-r9f2bw"),r(e,"y1",f=t[17]*-1),r(e,"y2","0"),r(e,"x1","0"),r(e,"x2","0"),m(e,"stroke",t[3]),v(e,"dashed",t[1])},m(i,l){A(i,e,l)},p(i,l){l&131072&&f!==(f=i[17]*-1)&&r(e,"y1",f),l&8&&m(e,"stroke",i[3]),l&2&&v(e,"dashed",i[1])},d(i){i&&c(e)}}}function G(t){let e,f,i;return{c(){e=b("line"),this.h()},l(l){e=w(l,"line",{class:!0,y1:!0,y2:!0,x1:!0,x2:!0,style:!0}),C(e).forEach(c),this.h()},h(){r(e,"class","tick-mark svelte-r9f2bw"),r(e,"y1",0),r(e,"y2",6),r(e,"x1",f=t[7]||t[13]?t[14].bandwidth()/2:0),r(e,"x2",i=t[7]||t[13]?t[14].bandwidth()/2:0),m(e,"stroke",t[3])},m(l,h){A(l,e,h)},p(l,h){h&24704&&f!==(f=l[7]||l[13]?l[14].bandwidth()/2:0)&&r(e,"x1",f),h&24704&&i!==(i=l[7]||l[13]?l[14].bandwidth()/2:0)&&r(e,"x2",i),h&8&&m(e,"stroke",l[3])},d(l){l&&c(e)}}}function H(t){let e,f,i,l=(t[26]==t[15].length-1?t[11]+t[5](t[24])+t[12]:t[5](t[24]))+"",h,a,o,y,d,k=t[0]!==!1&&z(t),_=t[2]===!0&&G(t);return{c(){e=b("g"),k&&k.c(),f=O(),_&&_.c(),i=b("text"),h=Q(l),this.h()},l(s){e=w(s,"g",{class:!0,transform:!0});var u=C(e);k&&k.l(u),f=O(),_&&_.l(u),i=w(u,"text",{x:!0,y:!0,dx:!0,dy:!0,"text-anchor":!0,style:!0,class:!0});var T=C(i);h=U(T,l),T.forEach(c),u.forEach(c),this.h()},h(){r(i,"x",a=t[7]||t[13]?t[14].bandwidth()/2:0),r(i,"y",t[8]),r(i,"dx",t[9]),r(i,"dy",t[10]),r(i,"text-anchor",o=t[21](t[26])),m(i,"fill",t[4]),r(i,"class","svelte-r9f2bw"),r(e,"class",y="tick tick-"+t[24]+" svelte-r9f2bw"),r(e,"transform",d="translate("+t[14](t[24])+","+t[16][0]+")")},m(s,u){A(s,e,u),k&&k.m(e,null),D(e,f),_&&_.m(e,null),D(e,i),D(i,h)},p(s,u){s[0]!==!1?k?k.p(s,u):(k=z(s),k.c(),k.m(e,f)):k&&(k.d(1),k=null),s[2]===!0?_?_.p(s,u):(_=G(s),_.c(),_.m(e,i)):_&&(_.d(1),_=null),u&38944&&l!==(l=(s[26]==s[15].length-1?s[11]+s[5](s[24])+s[12]:s[5](s[24]))+"")&&Y(h,l),u&24704&&a!==(a=s[7]||s[13]?s[14].bandwidth()/2:0)&&r(i,"x",a),u&256&&r(i,"y",s[8]),u&512&&r(i,"dx",s[9]),u&1024&&r(i,"dy",s[10]),u&16&&m(i,"fill",s[4]),u&32768&&y!==(y="tick tick-"+s[24]+" svelte-r9f2bw")&&r(e,"class",y),u&114688&&d!==(d="translate("+s[14](s[24])+","+s[16][0]+")")&&r(e,"transform",d)},d(s){s&&c(e),k&&k.d(),_&&_.d()}}}function p(t){let e,f=t[15],i=[];for(let l=0;l<f.length;l+=1)i[l]=H(W(t,f,l));return{c(){e=b("g");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){e=w(l,"g",{class:!0});var h=C(e);for(let a=0;a<i.length;a+=1)i[a].l(h);h.forEach(c),this.h()},h(){r(e,"class","axis x-axis svelte-r9f2bw"),v(e,"snapTicks",t[6])},m(l,h){A(l,e,h);for(let a=0;a<i.length;a+=1)i[a].m(e,null)},p(l,[h]){if(h&2359231){f=l[15];let a;for(a=0;a<f.length;a+=1){const o=W(l,f,a);i[a]?i[a].p(o,h):(i[a]=H(o),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=f.length}h&64&&v(e,"snapTicks",l[6])},i:V,o:V,d(l){l&&c(e),Z(i,l)}}}function $(t,e,f){let i,l,h,a,o;const{width:y,height:d,xScale:k,yRange:_}=x("LayerCake");M(t,d,n=>f(17,o=n)),M(t,k,n=>f(14,h=n)),M(t,_,n=>f(16,a=n));let{gridlines:s=!0}=e,{tickDashed:u=!1}=e,{tickMarks:T=!1}=e,{tickColor:S="#bbb"}=e,{textColor:R="#666"}=e,{formatTick:X=n=>n}=e,{snapTicks:E=!1}=e,{ticks:g=void 0}=e,{xTick:j=void 0}=e,{yTick:q=16}=e,{dxTick:B=0}=e,{dyTick:F=0}=e,{prefix:I=""}=e,{suffix:L=""}=e;function J(n){if(E===!0){if(n===0)return"start";if(n===l.length-1)return"end"}return"middle"}return t.$$set=n=>{"gridlines"in n&&f(0,s=n.gridlines),"tickDashed"in n&&f(1,u=n.tickDashed),"tickMarks"in n&&f(2,T=n.tickMarks),"tickColor"in n&&f(3,S=n.tickColor),"textColor"in n&&f(4,R=n.textColor),"formatTick"in n&&f(5,X=n.formatTick),"snapTicks"in n&&f(6,E=n.snapTicks),"ticks"in n&&f(22,g=n.ticks),"xTick"in n&&f(7,j=n.xTick),"yTick"in n&&f(8,q=n.yTick),"dxTick"in n&&f(9,B=n.dxTick),"dyTick"in n&&f(10,F=n.dyTick),"prefix"in n&&f(11,I=n.prefix),"suffix"in n&&f(12,L=n.suffix)},t.$$.update=()=>{t.$$.dirty&16384&&f(13,i=typeof h.bandwidth=="function"),t.$$.dirty&4218880&&f(15,l=Array.isArray(g)?g:i?h.domain():typeof g=="function"?g(h.ticks()):h.ticks(g))},[s,u,T,S,R,X,E,j,q,B,F,I,L,i,h,l,a,o,d,k,_,J,g]}class ie extends K{constructor(e){super();N(this,e,$,p,P,{gridlines:0,tickDashed:1,tickMarks:2,tickColor:3,textColor:4,formatTick:5,snapTicks:6,ticks:22,xTick:7,yTick:8,dxTick:9,dyTick:10,prefix:11,suffix:12})}}export{ie as default};
