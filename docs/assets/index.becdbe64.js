import{t as K,d as Q,a as P,s as z,c as D,r as H}from"./vendor.d519e032.js";const V=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};V();const W="_App_1g6le_1",X="_header_1g6le_11",Z="_headmargin_1g6le_30",ee="_column_1g6le_35",te="_short_1g6le_68",ne="_invisible_1g6le_131",ie="_link_1g6le_140",le="_blob_1g6le_145",oe="_transform_1g6le_1",se="_movement_1g6le_1",ae="_mini_1g6le_215",de="_large_1g6le_224",re="_logo_1g6le_234",ce="_thankmessage_1g6le_255",me="_submit_1g6le_268";var t={App:W,header:X,headmargin:Z,column:ee,short:te,invisible:ne,link:ie,blob:le,transform:oe,movement:se,mini:ae,large:de,logo:re,thankmessage:ce,submit:me},r=null,U=null;function ve(){const l=document.getElementById("blob"),o=document.getElementById("appbody"),s=document.getElementById("logo");clearTimeout(r),l.disabled=!0,l.className==t.blob?(l.classList.add(t.mini),r=setTimeout(function(){s.classList.add(t.invisible),o.classList.remove(t.invisible)},400)):(o.classList.add(t.invisible),r=setTimeout(function(){s.classList.remove(t.invisible),l.classList.remove(t.mini)},400)),clearTimeout(U),U=setTimeout(function(){l.disabled=!1},400)}function _e(){const l=document.getElementById("blob"),o=document.getElementById("appbody"),s=document.getElementById("thankblob");l.classList.remove(t.mini),o.classList.add(t.invisible),l.classList.add(t.large),clearTimeout(r),r=setTimeout(function(){s.classList.remove(t.invisible)},400)}var ue="/majipoem/assets/logo.53d9d1b7.svg";const be=K('<div><header><button id="blob" style="background-color:#000000"></button><img id="logo" alt="logo"></header><appbody id="appbody"><div></div><form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse" method="post" target="hidden_iframe"><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe><div><label for="title">\u984C\u540D</label><input type="text" id="title" name="entry.1866521228" placeholder="\u984C\u540D\uFF08\u7A7A\u6B04\u306E\u5834\u5408\u306F \u7121\u984C \u3068\u306A\u308A\u307E\u3059\uFF09\uFF1A"></div><div><label for="poem">\u672C\u6587</label><textarea id="poem" name="entry.1602729063" placeholder="\u672C\u6587\uFF08\u5165\u529B\u5FC5\u9808\uFF09\uFF1A" required=""></textarea></div><div><label for="name">\u8457\u8005\u540D</label><input type="text" id="name" name="entry.1285093387" placeholder="\u8457\u8005\u540D\uFF08\u7A7A\u6B04\u306E\u5834\u5408\u306F \u533F\u540D \u3068\u306A\u308A\u307E\u3059\uFF09\uFF1A"></div><div><label for="addition">\u4ED8\u8A18</label><textarea id="addition" name="entry.2007810462" placeholder="\u4ED8\u8A18\uFF1A"></textarea></div><div><label for="link">\u30EA\u30F3\u30AF</label><input type="text" id="link" name="entry.272121178" placeholder="\u30EA\u30F3\u30AF\uFF1A"></div><p><button type="submit" name="button" value="\u9001\u4FE1">\u9001\u4FE1</button></p></form></appbody><thankblob id="thankblob"><div style="background-color:#f4f4f4; pointer-events:none;"><p>\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002</p></div></thankblob></div>');function fe(){return(()=>{const l=be.cloneNode(!0),o=l.firstChild,s=o.firstChild,d=s.nextSibling,n=o.nextSibling,i=n.firstChild,a=i.nextSibling,j=a.firstChild,c=j.nextSibling,q=c.firstChild,w=q.nextSibling,v=c.nextSibling,m=v.nextSibling,F=m.firstChild,G=F.nextSibling,_=m.nextSibling,u=_.nextSibling,J=u.nextSibling,M=J.firstChild,b=n.nextSibling,f=b.firstChild,Y=f.firstChild;return P(s,"click",ve,!0),z(d,"src",ue),P(a,"submit",_e),D(e=>{const g=t.App,$=t.header,h=t.blob,y=t.logo,p=t.invisible,N=t.headmargin,x=t.form,k=t.column,L=t.short,E=t.column,S=t.column,I=t.short,B=t.column,C=t.column,T=t.submit,A=t.invisible,O=t.blob,R=t.thankmessage;return g!==e._v$&&(l.className=e._v$=g),$!==e._v$2&&(o.className=e._v$2=$),h!==e._v$3&&(s.className=e._v$3=h),y!==e._v$4&&(d.className=e._v$4=y),p!==e._v$5&&(n.className=e._v$5=p),N!==e._v$6&&(i.className=e._v$6=N),x!==e._v$7&&(a.className=e._v$7=x),k!==e._v$8&&(c.className=e._v$8=k),L!==e._v$9&&(w.className=e._v$9=L),E!==e._v$10&&(v.className=e._v$10=E),S!==e._v$11&&(m.className=e._v$11=S),I!==e._v$12&&(G.className=e._v$12=I),B!==e._v$13&&(_.className=e._v$13=B),C!==e._v$14&&(u.className=e._v$14=C),T!==e._v$15&&(M.className=e._v$15=T),A!==e._v$16&&(b.className=e._v$16=A),O!==e._v$17&&(f.className=e._v$17=O),R!==e._v$18&&(Y.className=e._v$18=R),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0}),l})()}Q(["click"]);H(fe,document.getElementById("root"));
