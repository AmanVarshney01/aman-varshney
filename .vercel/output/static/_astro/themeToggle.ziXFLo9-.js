import{d,c as g,a as h,g as l,i as u,b as f,e as c,r as k,s as m,t as s}from"./web.4NQvbWIR.js";const $=s("<button>"),E=s('<img alt="light mode"width=20 height=20>'),_=s('<img alt="dark mode"width=20 height=20>'),p=()=>{let e;return typeof localStorage<"u"&&localStorage.getItem("theme")?e=localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches?e="dark":e="light",e},S=e=>{const[t,o]=g(p()),n=()=>{o(t()==="light"?"dark":"light")};return h(()=>{t()==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",t())},[t]),(()=>{const r=l($);return r.$$click=n,u(r,(()=>{const i=f(()=>t()==="dark");return()=>i()?(()=>{const a=l(E);return c(()=>m(a,"src",e.lightImage)),a})():(()=>{const a=l(_);return c(()=>m(a,"src",e.darkImage)),a})()})()),k(),r})()};d(["click"]);export{S as default};