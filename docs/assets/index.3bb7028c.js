import{t as v,s as m,c as g,r as b}from"./vendor.27a77c73.js";const $=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};$();const h="_App_g14s3_1",p="_logobox_g14s3_5",y="_logo_g14s3_5",N="_header_g14s3_24",x="_link_g14s3_34",A="_blob_g14s3_39",L="_transform_g14s3_1",k="_movement_g14s3_1";var n={App:h,logobox:p,logo:y,header:N,link:x,blob:A,transform:L,movement:k},O="/majipoem/assets/logo.2301471d.svg";const S=v('<div><header><logobox><div></div><img alt="logo"></logobox><a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a></header></div>');function j(){return(()=>{const i=S.cloneNode(!0),r=i.firstChild,s=r.firstChild,l=s.firstChild,e=l.nextSibling,t=s.nextSibling;return m(e,"src",O),g(o=>{const d=n.App,a=n.header,c=n.logobox,_=n.blob,f=n.logo,u=n.link;return d!==o._v$&&(i.className=o._v$=d),a!==o._v$2&&(r.className=o._v$2=a),c!==o._v$3&&(s.className=o._v$3=c),_!==o._v$4&&(l.className=o._v$4=_),f!==o._v$5&&(e.className=o._v$5=f),u!==o._v$6&&(t.className=o._v$6=u),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),i})()}b(j,document.getElementById("root"));