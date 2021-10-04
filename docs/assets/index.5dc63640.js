import{t as Y,d as z,a as P,s as K,c as Q,r as D}from"./vendor.d519e032.js";const V=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}};V();const W="_App_or0ma_1",X="_header_or0ma_12",Z="_form_or0ma_30",ee="_headmargin_or0ma_34",te="_column_or0ma_39",ne="_short_or0ma_73",ie="_visible_or0ma_137",oe="_invisible_or0ma_142",le="_link_or0ma_151",se="_blob_or0ma_156",ae="_transform_or0ma_1",re="_movement_or0ma_1",de="_mini_or0ma_226",me="_large_or0ma_235",ce="_logo_or0ma_245",ve="_thankmessage_or0ma_266",_e="_submit_or0ma_279";var t={App:W,header:X,form:Z,headmargin:ee,column:te,short:ne,visible:ie,invisible:oe,link:le,blob:se,transform:ae,movement:re,mini:de,large:me,logo:ce,thankmessage:ve,submit:_e},d=null,R=null;function ue(){const l=document.getElementById("blob"),i=document.getElementById("form"),s=document.getElementById("logo");clearTimeout(d),l.disabled=!0,l.className==t.blob?(l.classList.add(t.mini),d=setTimeout(function(){s.classList.add(t.invisible),i.classList.remove(t.invisible),i.classList.add(t.visible)},400)):(i.classList.remove(t.visible),i.classList.add(t.invisible),d=setTimeout(function(){s.classList.remove(t.invisible),l.classList.remove(t.mini)},400)),clearTimeout(R),R=setTimeout(function(){l.disabled=!1},400)}function be(){const l=document.getElementById("blob"),i=document.getElementById("appbody"),s=document.getElementById("thankblob");l.classList.remove(t.mini),i.classList.add(t.invisible),l.classList.add(t.large),clearTimeout(d),d=setTimeout(function(){s.classList.remove(t.invisible)},400)}var fe="/majipoem/assets/logo.53d9d1b7.svg";const ge=Y('<div id="app"><header><button id="blob" style="background-color:#000000"></button><img id="logo" alt="logo"></header><div></div><appbody id="appbody"><form id="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse" method="post" target="hidden_iframe"><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe><div><label for="title">\u984C\u540D</label><input type="text" id="title" name="entry.1866521228" placeholder="\u984C\u540D\uFF08\u7A7A\u6B04\u306E\u5834\u5408\u306F \u7121\u984C \u3068\u306A\u308A\u307E\u3059\uFF09\uFF1A"></div><div><label for="poem">\u672C\u6587</label><textarea id="poem" name="entry.1602729063" placeholder="\u672C\u6587\uFF08\u5165\u529B\u5FC5\u9808\uFF09\uFF1A" required=""></textarea></div><div><label for="name">\u8457\u8005\u540D</label><input type="text" id="name" name="entry.1285093387" placeholder="\u8457\u8005\u540D\uFF08\u7A7A\u6B04\u306E\u5834\u5408\u306F \u533F\u540D \u3068\u306A\u308A\u307E\u3059\uFF09\uFF1A"></div><div><label for="addition">\u4ED8\u8A18</label><textarea id="addition" name="entry.2007810462" placeholder="\u4ED8\u8A18\uFF1A"></textarea></div><div><label for="link">\u30EA\u30F3\u30AF</label><input type="text" id="link" name="entry.272121178" placeholder="\u30EA\u30F3\u30AF\uFF1A"></div><p><button type="submit" name="button" value="\u9001\u4FE1">\u9001\u4FE1</button></p></form></appbody><thankblob id="thankblob"><div style="background-color:#f4f4f4; pointer-events:none;"><p>\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002</p></div></thankblob></div>');function $e(){let l=window.innerHeight*.01;return document.documentElement.style.setProperty("--vh",`${l}px`),window.addEventListener("resize",()=>{l=window.innerHeight*.01,document.documentElement.style.setProperty("--vh",`${l}px`)}),(()=>{const i=ge.cloneNode(!0),s=i.firstChild,a=s.firstChild,n=a.nextSibling,o=s.nextSibling,r=o.nextSibling,m=r.firstChild,U=m.firstChild,c=U.nextSibling,j=c.firstChild,q=j.nextSibling,_=c.nextSibling,v=_.nextSibling,F=v.firstChild,G=F.nextSibling,u=v.nextSibling,b=u.nextSibling,H=b.nextSibling,J=H.firstChild,f=r.nextSibling,g=f.firstChild,M=g.firstChild;return P(a,"click",ue,!0),K(n,"src",fe),P(m,"submit",be),Q(e=>{const $=t.App,h=t.header,y=t.blob,p=t.logo,N=t.headmargin,x=`${t.form||""} ${t.invisible||""}`,L=t.column,k=t.short,E=t.column,S=t.column,I=t.short,B=t.column,C=t.column,T=t.submit,w=t.invisible,A=t.blob,O=t.thankmessage;return $!==e._v$&&(i.className=e._v$=$),h!==e._v$2&&(s.className=e._v$2=h),y!==e._v$3&&(a.className=e._v$3=y),p!==e._v$4&&(n.className=e._v$4=p),N!==e._v$5&&(o.className=e._v$5=N),x!==e._v$6&&(m.className=e._v$6=x),L!==e._v$7&&(c.className=e._v$7=L),k!==e._v$8&&(q.className=e._v$8=k),E!==e._v$9&&(_.className=e._v$9=E),S!==e._v$10&&(v.className=e._v$10=S),I!==e._v$11&&(G.className=e._v$11=I),B!==e._v$12&&(u.className=e._v$12=B),C!==e._v$13&&(b.className=e._v$13=C),T!==e._v$14&&(J.className=e._v$14=T),w!==e._v$15&&(f.className=e._v$15=w),A!==e._v$16&&(g.className=e._v$16=A),O!==e._v$17&&(M.className=e._v$17=O),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0}),i})()}z(["click"]);D($e,document.getElementById("root"));
