var A=Object.defineProperty;var N=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var q=(r,e,t)=>e in r?A(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,E=(r,e)=>{for(var t in e||(e={}))D.call(e,t)&&q(r,t,e[t]);if(N)for(var t of N(e))H.call(e,t)&&q(r,t,e[t]);return r};import{S as I,i as J,s as K,$ as O,a0 as Q,a as U,d as S,b as h,g as X,l as L,R as M,T as V,F as Y,W as s,al as Z,as as v,ao as P,an as p,at as $}from"../../../chunks/vendor-64f33e0e.js";function R(r,e,t){const c=r.slice();return c[23]=e[t],c}function T(r){let e,t,c,l,i;return{c(){e=O("circle"),this.h()},l(o){e=Q(o,"circle",{class:!0,r:!0,fill:!0,"stroke-width":!0,stroke:!0,cx:!0,cy:!0});var a=U(e);a.forEach(S),this.h()},h(){h(e,"class","node"),h(e,"r",t=r[3](r[23])),h(e,"fill",c=r[0]||r[5](r[23])),h(e,"stroke-width",r[1]),h(e,"stroke",r[2]),h(e,"cx",l=r[23].x),h(e,"cy",i=r[23].y)},m(o,a){X(o,e,a)},p(o,a){a&24&&t!==(t=o[3](o[23]))&&h(e,"r",t),a&49&&c!==(c=o[0]||o[5](o[23]))&&h(e,"fill",c),a&2&&h(e,"stroke-width",o[1]),a&4&&h(e,"stroke",o[2]),a&16&&l!==(l=o[23].x)&&h(e,"cx",l),a&16&&i!==(i=o[23].y)&&h(e,"cy",i)},d(o){o&&S(e)}}}function ee(r){let e,t=r[4],c=[];for(let l=0;l<t.length;l+=1)c[l]=T(R(r,t,l));return{c(){for(let l=0;l<c.length;l+=1)c[l].c();e=L()},l(l){for(let i=0;i<c.length;i+=1)c[i].l(l);e=L()},m(l,i){for(let o=0;o<c.length;o+=1)c[o].m(l,i);X(l,e,i)},p(l,[i]){if(i&63){t=l[4];let o;for(o=0;o<t.length;o+=1){const a=R(l,t,o);c[o]?c[o].p(a,i):(c[o]=T(a),c[o].c(),c[o].m(e.parentNode,e))}for(;o<c.length;o+=1)c[o].d(1);c.length=t.length}},i:M,o:M,d(l){V(c,l),l&&S(e)}}}function te(r,e,t){let c,l,i,o,a,m,k;const{data:y,width:C,height:B,xScale:b,xGet:w,rGet:G,zGet:W}=Y("LayerCake");s(r,y,n=>t(20,m=n)),s(r,C,n=>t(17,l=n)),s(r,B,n=>t(16,c=n)),s(r,b,n=>t(18,o=n)),s(r,w,n=>t(19,a=n)),s(r,G,n=>t(3,i=n)),s(r,W,n=>t(5,k=n));let{manyBodyStrength:f=5}=e,{xStrength:u=.1}=e,{nodeColor:x=void 0}=e,{nodeStrokeWidth:d=1}=e,{nodeStrokeColor:z="#fff"}=e,{groupBy:g=!0}=e;const j=m.map(n=>E({},n)),_=Z(j);let F=[];return _.on("tick",()=>{t(4,F=_.nodes())}),r.$$set=n=>{"manyBodyStrength"in n&&t(13,f=n.manyBodyStrength),"xStrength"in n&&t(14,u=n.xStrength),"nodeColor"in n&&t(0,x=n.nodeColor),"nodeStrokeWidth"in n&&t(1,d=n.nodeStrokeWidth),"nodeStrokeColor"in n&&t(2,z=n.nodeStrokeColor),"groupBy"in n&&t(15,g=n.groupBy)},r.$$.update=()=>{r.$$.dirty&1040394&&_.force("x",v().x(n=>g===!0?a(n)+o.bandwidth()/2:l/2).strength(u)).force("center",P(l/2,c/2)).force("charge",p().strength(f)).force("collision",$().radius(n=>i(n)+d/2)).force("center",P(l/2,c/2)).alpha(1).restart()},[x,d,z,i,F,k,y,C,B,b,w,G,W,f,u,g,c,l,o,a]}class ne extends I{constructor(e){super();J(this,e,te,ee,K,{manyBodyStrength:13,xStrength:14,nodeColor:0,nodeStrokeWidth:1,nodeStrokeColor:2,groupBy:15})}}export{ne as default};
