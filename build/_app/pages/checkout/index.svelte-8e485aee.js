import{S as t,i as a,s as e,e as s,t as r,k as c,c as l,a as o,g as n,d as i,n as u,b as h,f,D as p,F as v,G as d,M as m,N as g,O as E,K as k,h as D,P as b,Q as I}from"../../chunks/vendor-d5083cc4.js";import{c as T}from"../../chunks/tools-3ac95b29.js";function j(t,a,e){const s=t.slice();return s[7]=a[e],s[8]=a,s[9]=e,s}function y(t){let a,e,d,m,g,E,k;return{c(){a=s("p"),e=r("Cart is empty"),d=c(),m=s("p"),g=r("Add tools to cart from the "),E=s("a"),k=r("rental page"),this.h()},l(t){a=l(t,"P",{});var s=o(a);e=n(s,"Cart is empty"),s.forEach(i),d=u(t),m=l(t,"P",{});var r=o(m);g=n(r,"Add tools to cart from the "),E=l(r,"A",{href:!0});var c=o(E);k=n(c,"rental page"),c.forEach(i),r.forEach(i),this.h()},h(){h(E,"href","/rent")},m(t,s){f(t,a,s),p(a,e),f(t,d,s),f(t,m,s),p(m,g),p(m,E),p(E,k)},p:v,d(t){t&&i(a),t&&i(d),t&&i(m)}}}function C(t){let a,e,v,d,m,g,E,b,T,y,C,S,P,U,N,V=t[0],$=[];for(let s=0;s<V.length;s+=1)$[s]=x(j(t,V,s));return{c(){a=c();for(let t=0;t<$.length;t+=1)$[t].c();e=c(),v=s("div"),d=s("h5"),m=r("Total tools: "),g=r(t[1]),E=c(),b=s("h5"),T=r("Total price: FREE"),y=c(),C=s("div"),S=s("button"),P=r("Checkout"),this.h()},l(s){a=u(s);for(let t=0;t<$.length;t+=1)$[t].l(s);e=u(s),v=l(s,"DIV",{class:!0});var r=o(v);d=l(r,"H5",{});var c=o(d);m=n(c,"Total tools: "),g=n(c,t[1]),c.forEach(i),E=u(r),b=l(r,"H5",{});var h=o(b);T=n(h,"Total price: FREE"),h.forEach(i),r.forEach(i),y=u(s),C=l(s,"DIV",{class:!0});var f=o(C);S=l(f,"BUTTON",{class:!0});var p=o(S);P=n(p,"Checkout"),p.forEach(i),f.forEach(i),this.h()},h(){h(v,"class","total svelte-5vsbgj"),h(S,"class","svelte-5vsbgj"),h(C,"class","flex svelte-5vsbgj")},m(t,s){f(t,a,s);for(let a=0;a<$.length;a+=1)$[a].m(t,s);f(t,e,s),f(t,v,s),p(v,d),p(d,m),p(d,g),p(v,E),p(v,b),p(b,T),f(t,y,s),f(t,C,s),p(C,S),p(S,P),U||(N=k(S,"click",A),U=!0)},p(t,a){if(13&a){let s;for(V=t[0],s=0;s<V.length;s+=1){const r=j(t,V,s);$[s]?$[s].p(r,a):($[s]=x(r),$[s].c(),$[s].m(e.parentNode,e))}for(;s<$.length;s+=1)$[s].d(1);$.length=V.length}2&a&&D(g,t[1])},d(t){t&&i(a),I($,t),t&&i(e),t&&i(v),t&&i(y),t&&i(C),U=!1,N()}}}function S(t){let a;return{c(){a=r("DAY")},l(t){a=n(t,"DAY")},m(t,e){f(t,a,e)},d(t){t&&i(a)}}}function P(t){let a;return{c(){a=r("DAYS")},l(t){a=n(t,"DAYS")},m(t,e){f(t,a,e)},d(t){t&&i(a)}}}function x(t){let a,e,v,d,g,I,T,j,y,C,x,U,A,N,V,$,O,w,H,Y,F,B,G,L,M,R,K,Q,W=t[7].title.toUpperCase()+"",q=new Date(`${t[7].pickupdate} 00:00:00`).toLocaleDateString("en-US",t[3])+"",z=t[7].duration+"";function J(){t[4].call(V,t[8],t[9])}function X(t,a){return t[7].duration>1?P:S}let Z=X(t),_=Z(t);function tt(){t[5].call(G,t[8],t[9])}function at(){return t[6](t[9])}return{c(){a=s("div"),e=s("h5"),v=r(W),d=c(),g=s("div"),I=s("img"),y=c(),C=s("div"),x=s("p"),U=r("Pickup: "),A=r(q),N=c(),V=s("input"),$=c(),O=s("div"),w=s("p"),H=r("Duration: "),Y=r(z),F=c(),_.c(),B=c(),G=s("input"),L=c(),M=s("button"),R=r("remove"),this.h()},l(t){a=l(t,"DIV",{class:!0});var s=o(a);e=l(s,"H5",{});var r=o(e);v=n(r,W),r.forEach(i),d=u(s),g=l(s,"DIV",{class:!0});var c=o(g);I=l(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(i),y=u(s),C=l(s,"DIV",{class:!0});var h=o(C);x=l(h,"P",{});var f=o(x);U=n(f,"Pickup: "),A=n(f,q),f.forEach(i),N=u(h),V=l(h,"INPUT",{type:!0,min:!0}),h.forEach(i),$=u(s),O=l(s,"DIV",{class:!0});var p=o(O);w=l(p,"P",{});var m=o(w);H=n(m,"Duration: "),Y=n(m,z),F=u(m),_.l(m),m.forEach(i),B=u(p),G=l(p,"INPUT",{type:!0,min:!0,max:!0}),p.forEach(i),L=u(s),M=l(s,"BUTTON",{class:!0});var E=o(M);R=n(E,"remove"),E.forEach(i),s.forEach(i),this.h()},h(){I.src!==(T=t[7].src)&&h(I,"src",T),h(I,"alt",j=t[7].title),h(I,"class","svelte-5vsbgj"),h(g,"class","image"),h(V,"type","date"),h(V,"min",t[2]),h(C,"class","flex svelte-5vsbgj"),h(G,"type","number"),h(G,"min","1"),h(G,"max","2"),h(O,"class","flex svelte-5vsbgj"),h(M,"class","remove svelte-5vsbgj"),h(a,"class","flexible-grid svelte-5vsbgj")},m(s,r){f(s,a,r),p(a,e),p(e,v),p(a,d),p(a,g),p(g,I),p(a,y),p(a,C),p(C,x),p(x,U),p(x,A),p(C,N),p(C,V),E(V,t[7].pickupdate),p(a,$),p(a,O),p(O,w),p(w,H),p(w,Y),p(w,F),_.m(w,null),p(O,B),p(O,G),E(G,t[7].duration),p(a,L),p(a,M),p(M,R),K||(Q=[k(V,"input",J),k(G,"input",tt),k(M,"click",at)],K=!0)},p(a,e){t=a,1&e&&W!==(W=t[7].title.toUpperCase()+"")&&D(v,W),1&e&&I.src!==(T=t[7].src)&&h(I,"src",T),1&e&&j!==(j=t[7].title)&&h(I,"alt",j),1&e&&q!==(q=new Date(`${t[7].pickupdate} 00:00:00`).toLocaleDateString("en-US",t[3])+"")&&D(A,q),1&e&&E(V,t[7].pickupdate),1&e&&z!==(z=t[7].duration+"")&&D(Y,z),Z!==(Z=X(t))&&(_.d(1),_=Z(t),_&&(_.c(),_.m(w,null))),1&e&&m(G.value)!==t[7].duration&&E(G,t[7].duration)},d(t){t&&i(a),_.d(),K=!1,b(Q)}}}function U(t){let a,e,d,m;function g(t,a){return t[0].length?C:y}let E=g(t),k=E(t);return{c(){a=s("h1"),e=r("Checkout"),d=c(),m=s("section"),k.c(),this.h()},l(t){a=l(t,"H1",{});var s=o(a);e=n(s,"Checkout"),s.forEach(i),d=u(t),m=l(t,"SECTION",{class:!0});var r=o(m);k.l(r),r.forEach(i),this.h()},h(){h(m,"class","cart")},m(t,s){f(t,a,s),p(a,e),f(t,d,s),f(t,m,s),k.m(m,null)},p(t,[a]){E===(E=g(t))&&k?k.p(t,a):(k.d(1),k=E(t),k&&(k.c(),k.m(m,null)))},i:v,o:v,d(t){t&&i(a),t&&i(d),t&&i(m),k.d()}}}function A(){alert("We are still in production. Checkout tools feature to come soon!")}function N(t,a,e){let s,r;d(t,T,(t=>e(0,r=t)));let c=(new Date).toISOString().substr(0,10);return t.$$.update=()=>{1&t.$$.dirty&&e(1,s=r.length)},[r,s,c,{weekday:"long",year:"numeric",month:"long",day:"numeric"},function(t,a){t[a].pickupdate=this.value,T.set(r)},function(t,a){t[a].duration=m(this.value),T.set(r)},t=>{r.splice(t,1),g(T,r=[...r],r)}]}export default class extends t{constructor(t){super(),a(this,t,N,U,e,{})}}
