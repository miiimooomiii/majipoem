import{t as ae,d as re,a as g,s as de,c as ce,r as me}from"./vendor.d519e032.js";const fe=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};fe();const ue="_App_1ez1f_1",ve="_header_1ez1f_10",_e="_form_1ez1f_34",be="_headmargin_1ez1f_41",ge="_column_1ez1f_46",$e="_subinfo_1ez1f_73",he="_required_1ez1f_86",ye="_requiredAm_1ez1f_99",pe="_filled_1ez1f_112",xe="_visible_1ez1f_171",Ne="_invisible_1ez1f_176",Le="_link_1ez1f_185",ke="_blob_1ez1f_190",ze="_transform_1ez1f_1",Se="_movement_1ez1f_1",Ee="_mini_1ez1f_313",qe="_large_1ez1f_318",Ae="_logo_1ez1f_328",Ce="_thankmessage_1ez1f_349",Ie="_agreement_1ez1f_360",Be="_submit_1ez1f_374";var e={App:ue,header:ve,form:_e,headmargin:be,column:ge,subinfo:$e,required:he,requiredAm:ye,filled:pe,visible:xe,invisible:Ne,link:Le,blob:ke,transform:ze,movement:Se,mini:Ee,large:qe,logo:Ae,thankmessage:Ce,agreement:Ie,submit:Be},c=null,M=null;const Y=document.getElementsByClassName(e.requiredAm);function Te(){const i=document.getElementById("blob"),l=document.getElementById("form"),o=document.getElementById("logo");clearTimeout(c),i.disabled=!0,i.className==e.blob?(i.classList.add(e.mini),c=setTimeout(function(){o.classList.add(e.invisible),l.classList.remove(e.invisible),l.classList.add(e.visible)},400)):(l.classList.remove(e.visible),l.classList.add(e.invisible),c=setTimeout(function(){o.classList.remove(e.invisible),i.classList.remove(e.mini)},400)),clearTimeout(M),M=setTimeout(function(){i.disabled=!1},400)}function Oe(){const i=document.getElementById("blob"),l=document.getElementById("form"),o=document.getElementById("thankblob");i.classList.remove(e.mini),l.classList.remove(e.visible),l.classList.add(e.invisible),i.classList.add(e.large),clearTimeout(c),c=setTimeout(function(){o.classList.remove(e.invisible),o.classList.add(e.visible)},400)}function Re(){this.checked?Y[0].classList.add(e.filled):Y[0].classList.remove(e.filled)}var we="/majipoem/assets/logo.53d9d1b7.svg";const He=ae('<div id="app"><header><button id="blob" style="background-color:#000000"></button><img id="logo" alt="logo"></header><appbody id="appbody"><form id="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse" method="post" target="hidden_iframe"><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe><label for="title">\u984C\u540D<p>\u7A7A\u6B04\u306F\u300E\u7121\u984C\u300F\u3068\u306A\u308A\u307E\u3059</p><input type="text" id="title" name="entry.1866521228" placeholder="\u300E\u7121\u984C\u300F"></label><label for="poem">\u672C\u6587<p>\u5FC5\u9808</p><textarea id="poem" name="entry.1602729063" required=""></textarea></label><label for="name">\u8457\u8005\u540D<p>\u7A7A\u6B04\u306F\u300E\u533F\u540D\u300F\u3068\u306A\u308A\u307E\u3059</p><input type="text" id="name" name="entry.1285093387" placeholder="\u300E\u533F\u540D\u300F"></label><label for="addition">\u4ED8\u8A18<p>\u89E3\u8AAC\u3084\u88DC\u8DB3\u306A\u3069\u306F\u3053\u3061\u3089\u3078</p><textarea id="addition" name="entry.2007810462"></textarea></label><label for="link">\u30EA\u30F3\u30AF<p>SNS\u3084\u30B5\u30A4\u30C8\u306EURL\u306F\u3053\u3061\u3089\u3078</p><input type="url" id="link" name="entry.272121178" placeholder="https://"></label><label for="check"><input id="check" type="checkbox" required><p>\u5FC5\u9808</p><p>\u5229\u7528\u898F\u7D04\u306B\u540C\u610F\u3057\u307E\u3059\u3002</p></label><button type="submit" name="button" value="\u9001\u4FE1">\u9001\u4FE1</button></form></appbody><thankblob id="thankblob"><div style="background-color:#f4f4f4; pointer-events:none;"><p>\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002</p></div></thankblob></div>');function Ue(){return(()=>{const i=He.cloneNode(!0),l=i.firstChild,o=l.firstChild,r=o.nextSibling,n=l.nextSibling,s=n.firstChild,d=s.firstChild,m=d.nextSibling,Q=m.firstChild,D=Q.nextSibling,f=m.nextSibling,V=f.firstChild,W=V.nextSibling,u=f.nextSibling,X=u.firstChild,Z=X.nextSibling,v=u.nextSibling,ee=v.firstChild,te=ee.nextSibling,_=v.nextSibling,ie=_.firstChild,ne=ie.nextSibling,b=_.nextSibling,h=b.firstChild,y=h.nextSibling,le=y.nextSibling,se=b.nextSibling,p=n.nextSibling,x=p.firstChild,oe=x.firstChild;return g(o,"click",Te,!0),de(r,"src",we),g(s,"submit",Oe),g(h,"change",Re),ce(t=>{const N=e.App,L=e.header,k=e.blob,z=e.logo,S=`${e.form||""} ${e.invisible||""}`,E=e.column,q=e.subinfo,A=e.column,C=`${e.subinfo||""} ${e.required||""}`,I=e.column,B=e.subinfo,T=e.column,O=e.subinfo,R=e.column,w=e.subinfo,H=e.column,U=`${e.subinfo||""} ${e.requiredAm||""}`,P=e.agreement,j=e.submit,F=e.invisible,G=e.blob,J=e.thankmessage;return N!==t._v$&&(i.className=t._v$=N),L!==t._v$2&&(l.className=t._v$2=L),k!==t._v$3&&(o.className=t._v$3=k),z!==t._v$4&&(r.className=t._v$4=z),S!==t._v$5&&(s.className=t._v$5=S),E!==t._v$6&&(m.className=t._v$6=E),q!==t._v$7&&(D.className=t._v$7=q),A!==t._v$8&&(f.className=t._v$8=A),C!==t._v$9&&(W.className=t._v$9=C),I!==t._v$10&&(u.className=t._v$10=I),B!==t._v$11&&(Z.className=t._v$11=B),T!==t._v$12&&(v.className=t._v$12=T),O!==t._v$13&&(te.className=t._v$13=O),R!==t._v$14&&(_.className=t._v$14=R),w!==t._v$15&&(ne.className=t._v$15=w),H!==t._v$16&&(b.className=t._v$16=H),U!==t._v$17&&(y.className=t._v$17=U),P!==t._v$18&&(le.className=t._v$18=P),j!==t._v$19&&(se.className=t._v$19=j),F!==t._v$20&&(p.className=t._v$20=F),G!==t._v$21&&(x.className=t._v$21=G),J!==t._v$22&&(oe.className=t._v$22=J),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0}),i})()}re(["click"]);me(Ue,document.getElementById("root"));const $=108,a=document.getElementsByTagName("textarea"),K=document.getElementsByClassName(e.required);function Pe(){this.style.height="auto",this.scrollHeight>$?this.style.height=this.scrollHeight+"px":this.style.height=$+"px"}function je(){this.value==""?K[0].classList.remove(e.filled):K[0].classList.add(e.filled)}a[0].addEventListener("input",je,!1);for(let i=0;i<a.length;i++)a[i].value==""?a[i].setAttribute("style","height:"+$+"px;overflow-y:hidden;"):a[i].setAttribute("style","height:"+a[i].scrollHeight+"px;overflow-y:hidden;"),a[i].addEventListener("input",Pe,!1);