import{S as H,i as J,s as K,$ as T,l as I,t as N,a0 as w,a as C,h as P,d as g,b as r,f as m,g as v,I as A,O as L,j as Q,R as O,T as U,F as X,W as E}from"../../../chunks/vendor-64f33e0e.js";function V(l,e,f){const n=l.slice();return n[22]=e[f],n[24]=f,n}function W(l){let e,f,n;return{c(){e=T("line"),this.h()},l(t){e=w(t,"line",{class:!0,x2:!0,y1:!0,y2:!0,style:!0}),C(e).forEach(g),this.h()},h(){r(e,"class","gridline svelte-f7wn4m"),r(e,"x2","100%"),r(e,"y1",f=l[7]+(l[13]?l[14].bandwidth()/2:0)),r(e,"y2",n=l[7]+(l[13]?l[14].bandwidth()/2:0)),m(e,"stroke",l[3]),L(e,"dashed",l[2])},m(t,i){v(t,e,i)},p(t,i){i&24704&&f!==(f=t[7]+(t[13]?t[14].bandwidth()/2:0))&&r(e,"y1",f),i&24704&&n!==(n=t[7]+(t[13]?t[14].bandwidth()/2:0))&&r(e,"y2",n),i&8&&m(e,"stroke",t[3]),i&4&&L(e,"dashed",t[2])},d(t){t&&g(e)}}}function z(l){let e,f,n,t;return{c(){e=T("line"),this.h()},l(i){e=w(i,"line",{class:!0,x1:!0,x2:!0,y1:!0,y2:!0,style:!0}),C(e).forEach(g),this.h()},h(){r(e,"class","tick-mark svelte-f7wn4m"),r(e,"x1","0"),r(e,"x2",f=l[13]?-6:6),r(e,"y1",n=l[7]+(l[13]?l[14].bandwidth()/2:0)),r(e,"y2",t=l[7]+(l[13]?l[14].bandwidth()/2:0)),m(e,"stroke",l[3])},m(i,u){v(i,e,u)},p(i,u){u&8192&&f!==(f=i[13]?-6:6)&&r(e,"x2",f),u&24704&&n!==(n=i[7]+(i[13]?i[14].bandwidth()/2:0))&&r(e,"y1",n),u&24704&&t!==(t=i[7]+(i[13]?i[14].bandwidth()/2:0))&&r(e,"y2",t),u&8&&m(e,"stroke",i[3])},d(i){i&&g(e)}}}function G(l){let e,f,n,t=(l[24]==l[15].length-1?l[11]+l[5](l[22])+l[12]:l[5](l[22]))+"",i,u,_,d,y,c,h=l[1]!==!1&&W(l),o=l[0]===!0&&z(l);return{c(){e=T("g"),h&&h.c(),f=I(),o&&o.c(),n=T("text"),i=N(t),this.h()},l(a){e=w(a,"g",{class:!0,transform:!0});var k=C(e);h&&h.l(k),f=I(),o&&o.l(k),n=w(k,"text",{x:!0,y:!0,dx:!0,dy:!0,style:!0});var b=C(n);i=P(b,t),b.forEach(g),k.forEach(g),this.h()},h(){r(n,"x",l[6]),r(n,"y",u=l[7]+(l[13]?l[14].bandwidth()/2:0)),r(n,"dx",_=l[13]?-4:l[8]),r(n,"dy",d=l[13]?4:l[9]),m(n,"text-anchor",l[13]?"end":l[10]),m(n,"fill",l[4]),r(e,"class",y="tick tick-"+l[22]+" svelte-f7wn4m"),r(e,"transform",c="translate("+(l[17][0]+(l[13]?l[16].left:0))+", "+l[14](l[22])+")")},m(a,k){v(a,e,k),h&&h.m(e,null),A(e,f),o&&o.m(e,null),A(e,n),A(n,i)},p(a,k){a[1]!==!1?h?h.p(a,k):(h=W(a),h.c(),h.m(e,f)):h&&(h.d(1),h=null),a[0]===!0?o?o.p(a,k):(o=z(a),o.c(),o.m(e,n)):o&&(o.d(1),o=null),k&38944&&t!==(t=(a[24]==a[15].length-1?a[11]+a[5](a[22])+a[12]:a[5](a[22]))+"")&&Q(i,t),k&64&&r(n,"x",a[6]),k&24704&&u!==(u=a[7]+(a[13]?a[14].bandwidth()/2:0))&&r(n,"y",u),k&8448&&_!==(_=a[13]?-4:a[8])&&r(n,"dx",_),k&8704&&d!==(d=a[13]?4:a[9])&&r(n,"dy",d),k&9216&&m(n,"text-anchor",a[13]?"end":a[10]),k&16&&m(n,"fill",a[4]),k&32768&&y!==(y="tick tick-"+a[22]+" svelte-f7wn4m")&&r(e,"class",y),k&253952&&c!==(c="translate("+(a[17][0]+(a[13]?a[16].left:0))+", "+a[14](a[22])+")")&&r(e,"transform",c)},d(a){a&&g(e),h&&h.d(),o&&o.d()}}}function Z(l){let e,f,n=l[15],t=[];for(let i=0;i<n.length;i+=1)t[i]=G(V(l,n,i));return{c(){e=T("g");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=w(i,"g",{class:!0,transform:!0});var u=C(e);for(let _=0;_<t.length;_+=1)t[_].l(u);u.forEach(g),this.h()},h(){r(e,"class","axis y-axis"),r(e,"transform",f="translate("+-l[16].left+", 0)")},m(i,u){v(i,e,u);for(let _=0;_<t.length;_+=1)t[_].m(e,null)},p(i,[u]){if(u&262143){n=i[15];let _;for(_=0;_<n.length;_+=1){const d=V(i,n,_);t[_]?t[_].p(d,u):(t[_]=G(d),t[_].c(),t[_].m(e,null))}for(;_<t.length;_+=1)t[_].d(1);t.length=n.length}u&65536&&f!==(f="translate("+-i[16].left+", 0)")&&r(e,"transform",f)},i:O,o:O,d(i){i&&g(e),U(t,i)}}}function x(l,e,f){let n,t,i,u,_;const{padding:d,xRange:y,yScale:c}=X("LayerCake");E(l,d,s=>f(16,u=s)),E(l,y,s=>f(17,_=s)),E(l,c,s=>f(14,i=s));let{ticks:h=4}=e,{tickMarks:o=!1}=e,{gridlines:a=!0}=e,{tickDashed:k=!1}=e,{tickColor:b="#bbb"}=e,{textColor:D="#666"}=e,{formatTick:M=s=>s}=e,{xTick:S=0}=e,{yTick:R=0}=e,{dxTick:Y=0}=e,{dyTick:j=-4}=e,{textAnchor:q="start"}=e,{prefix:B=""}=e,{suffix:F=""}=e;return l.$$set=s=>{"ticks"in s&&f(21,h=s.ticks),"tickMarks"in s&&f(0,o=s.tickMarks),"gridlines"in s&&f(1,a=s.gridlines),"tickDashed"in s&&f(2,k=s.tickDashed),"tickColor"in s&&f(3,b=s.tickColor),"textColor"in s&&f(4,D=s.textColor),"formatTick"in s&&f(5,M=s.formatTick),"xTick"in s&&f(6,S=s.xTick),"yTick"in s&&f(7,R=s.yTick),"dxTick"in s&&f(8,Y=s.dxTick),"dyTick"in s&&f(9,j=s.dyTick),"textAnchor"in s&&f(10,q=s.textAnchor),"prefix"in s&&f(11,B=s.prefix),"suffix"in s&&f(12,F=s.suffix)},l.$$.update=()=>{l.$$.dirty&16384&&f(13,n=typeof i.bandwidth=="function"),l.$$.dirty&2121728&&f(15,t=Array.isArray(h)?h:n?i.domain():typeof h=="function"?h(i.ticks()):i.ticks(h))},[o,a,k,b,D,M,S,R,Y,j,q,B,F,n,i,t,u,_,d,y,c,h]}class $ extends H{constructor(e){super();J(this,e,x,Z,K,{ticks:21,tickMarks:0,gridlines:1,tickDashed:2,tickColor:3,textColor:4,formatTick:5,xTick:6,yTick:7,dxTick:8,dyTick:9,textAnchor:10,prefix:11,suffix:12})}}export{$ as default};
