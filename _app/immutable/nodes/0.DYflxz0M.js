import{a as d,t as u}from"../chunks/disclose-version.CwNlqkvO.js";import{X as h,Y as l,T as g,Z as y,_ as b,U as c,L as N,$ as m,a0 as A,p as T,f as j,q as w,c as E,s as n,r as S}from"../chunks/runtime.D9T_9Rq1.js";import{b as i}from"../chunks/paths.4nK-tRu8.js";function $(a,r,...s){var t=a,o=y,e;h(()=>{o!==(o=r())&&(e&&(b(e),e=null),e=g(()=>o(t,...s)))},l),c&&(t=N)}function p(a,r,s,t){var o=a.__attributes??(a.__attributes={});c&&(o[r]=a.getAttribute(r),a.nodeName==="LINK")||o[r]!==(o[r]=s)&&(s==null?a.removeAttribute(r):typeof s!="string"&&k(a).includes(r)?a[r]=s:a.setAttribute(r,s))}var f=new Map;function k(a){var r=f.get(a.nodeName);if(r)return r;f.set(a.nodeName,r=[]);for(var s,t=a,o=Element.prototype;o!==t;){s=A(t);for(var e in s)s[e].set&&r.push(e);t=m(t)}return r}const q=!0,F="always",R=Object.freeze(Object.defineProperty({__proto__:null,prerender:q,trailingSlash:F},Symbol.toStringTag,{value:"Module"}));var L=u('<nav class="svelte-lk9qf8"><a>home</a> <a>projects</a> <a>scrap</a></nav> <!>',1);function x(a,r){T(r,!0);var s=L(),t=j(s),o=E(t);p(o,"href",`${i??""}/`);var e=n(o,2);p(e,"href",`${i??""}/projects`);var _=n(e,2);p(_,"href",`${i??""}/scrap`),S(t);var v=n(t,2);$(v,()=>r.children),d(a,s),w()}export{x as component,R as universal};