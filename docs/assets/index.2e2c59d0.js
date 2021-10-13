import{s as H,t as U,d as P,a as m,b as F,c as G,r as J}from"./vendor.8802af71.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(t){if(t.ep)return;t.ep=!0;const l=a(t);fetch(t.href,l)}};M();const Y="_App_12zvd_2",K="_header_12zvd_9",Q="_appbody_12zvd_13",D="_form_12zvd_26",V="_headmargin_12zvd_33",W="_column_12zvd_38",X="_prColumn_12zvd_61",Z="_label_12zvd_66",ee="_subinfo_12zvd_74",te="_required_12zvd_81",ie="_filled_12zvd_97",le="_visible_12zvd_101",ne="_invisible_12zvd_106",se="_fixed_12zvd_115",oe="_blob_12zvd_119",re="_transform_12zvd_1",ae="_movement_12zvd_1",ce="_mini_12zvd_147",de="_large_12zvd_152",me="_logo_12zvd_162",_e="_thankblob_12zvd_177",fe="_thankmessage_12zvd_183",ue="_agreementswitch_12zvd_194",be="_checkbox_12zvd_210",ve="_agreement_12zvd_194",he="_buttonBelow_12zvd_222",pe="_inlineBlock_12zvd_227",$e="_footer_12zvd_231",ge="_linkbox_12zvd_236",ye="_link_12zvd_236",ke="_about_12zvd_251",xe="_twitter_12zvd_257",ze="_op_12zvd_262",Be="_content_12zvd_264",Le="_ed_12zvd_266",Ee="_serif_12zvd_269",we="_serifBold_12zvd_275";var e={App:Y,header:K,appbody:Q,form:D,headmargin:V,column:W,prColumn:X,label:Z,subinfo:ee,required:te,filled:ie,visible:le,invisible:ne,fixed:se,blob:oe,transform:re,movement:ae,mini:ce,large:de,logo:me,thankblob:_e,thankmessage:fe,agreementswitch:ue,checkbox:be,agreement:ve,buttonBelow:he,inlineBlock:pe,footer:$e,linkbox:ge,link:ye,about:ke,twitter:xe,op:ze,content:Be,ed:Le,serif:Ee,serifBold:we};H.polyfill();let x=[];const z=document.getElementsByClassName(e.required);function B(){const i=document.getElementById("app"),n=document.getElementById("blob"),a=Array.from(document.getElementsByClassName(e.op)),r=Array.from(document.getElementsByClassName(e.content));async function t(){a.forEach(o=>o.classList.remove(e.invisible)),n.classList.remove(e.mini)}async function l(){setTimeout(()=>i.classList.remove(e.scLock),200)}async function c(){try{const o=await t();await l(o)}catch(o){}}n.disabled=!0,n.classList.contains(e.mini)?(r.forEach(o=>o.classList.replace(e.visible,e.invisible)),scroll({top:0,left:0,behavior:"smooth"}),setTimeout(()=>c(),400)):(i.classList.add(e.scLock),n.classList.add(e.mini),scroll({top:0,left:0,behavior:"smooth"}),setTimeout(()=>scroll(0,0),390),setTimeout(()=>{scroll({top:0,left:0,behavior:"smooth"}),a.forEach(o=>o.classList.add(e.invisible)),r.forEach(o=>o.classList.replace(e.invisible,e.visible))},400)),setTimeout(()=>{n.disabled=!1},400)}function Ne(){const i=document.getElementById("blob"),n=Array.from(document.getElementsByClassName(e.ed)),a=Array.from(document.getElementsByClassName(e.content));i.classList.replace(e.mini,e.large),a.forEach(r=>r.classList.replace(e.visible,e.invisible)),clearTimeout(x),x=setTimeout(function(){n.forEach(r=>r.classList.remove(e.invisible))},400)}function Se(){this.checked?z[1].classList.add(e.filled):z[1].classList.remove(e.filled)}function Ce(){}var Ae="/majipoem/assets/logo.27d13b32.svg";const qe=U(`<div id="app"><header><button style="background-color:#000000" id="blob"></button><img class="${e.logo} ${e.op}" alt="logo"></header><div><form class="${e.form} ${e.invisible} ${e.content}" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse" method="post" target="hidden_iframe"><iframe style="display:none" id="hidden_iframe" name="hidden_iframe"></iframe><label class="${e.column} ${e.label} ${e.serifBold}" for="title">\u984C\u540D<p class="${e.subinfo} ${e.serif}">\u7A7A\u6B04\u306F\u300E\u7121\u984C\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="title" name="entry.1866521228" type="text" placeholder="\u300E\u7121\u984C\u300F"></label><label class="${e.column} ${e.label} ${e.serifBold}" for="poem">\u672C\u6587<p class="${e.subinfo} ${e.required} ${e.inlineBlock}">\u5FC5\u9808</p><textarea id="poem" name="entry.1602729063" required=""></textarea></label><label class="${e.column} ${e.label} ${e.serifBold}" for="name">\u8457\u8005\u540D<p class="${e.subinfo} ${e.serif}">\u7A7A\u6B04\u306F\u300E\u533F\u540D\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="name" name="entry.1285093387" type="text" placeholder="\u300E\u533F\u540D\u300F"></label><label class="${e.column} ${e.label} ${e.serifBold}" for="addition">\u4ED8\u8A18<p class="${e.subinfo} ${e.serif}">\u89E3\u8AAC\u3084\u88DC\u8DB3\u306A\u3069\u306F\u3053\u3061\u3089\u3078</p><textarea id="addition" name="entry.2007810462"></textarea></label><label class="${e.column} ${e.label} ${e.serifBold}" for="link">\u30EA\u30F3\u30AF<p class="${e.subinfo} ${e.serif}">SNS\u3084\u30B5\u30A4\u30C8\u306EURL\u306F\u3053\u3061\u3089\u3078</p><input id="link" name="entry.272121178" type="url" placeholder="https://"></label><input type="hidden" name="entry.26876002" value=""><div class="${e.column} ${e.prColumn}"><button class="${e.agreementswitch} ${e.serif}" id="agreement" type="button">\u5229\u7528\u898F\u7D04\u3092\u8AAD\u3080</button><hr><label class="${e.column} ${e.label}" style="margin-left=2em" for="check"><input class="${e.inlineBlock} ${e.checkbox}" id="check" type="checkbox" required><p class="${e.subinfo} ${e.required} ${e.inlineBlock}">\u5FC5\u9808</p><p class="${e.agreement} ${e.inlineBlock}">\u5229\u7528\u898F\u7D04\u306B\u540C\u610F\u3057\u307E\u3059\u3002</p></label></div><button name="button" type="submit" value="\u9001\u4FE1">\u9001\u4FE1</button></form></div><div class="${e.footer} ${e.invisible} ${e.content}"><div class="${e.linkbox}"><a class="${e.link} ${e.about}" href="https://twitter.com/majipoem" target="_blank" rel="author">\u307F\u3093\u306A\u306E\u30DE\u30B8\u30DD\u30A8\u30E0\u306B\u3064\u3044\u3066</a><a class="${e.link} ${e.twitter}" href="https://twitter.com/majipoem" target="_blank" rel="author">Twitter</a></div></div><div class="${e.visible} ${e.invisible} ${e.thankblob} ${e.ed}"><div style="background-color:#f4f4f4;pointer-events:none"><p>\u6295\u7A3F\u3055\u308C\u307E\u3057\u305F\u3002</p></div></div></div>`);window.onscroll=()=>{document.getElementById("app").classList.contains(e.scLock)||B()};function Ie(){return(()=>{const i=qe.cloneNode(!0),n=i.firstChild,a=n.firstChild,r=a.nextSibling,t=n.nextSibling,l=t.firstChild,c=l.firstChild,o=c.nextSibling,E=o.nextSibling,w=E.nextSibling,N=w.nextSibling,S=N.nextSibling,C=S.nextSibling,f=C.nextSibling,u=f.firstChild,A=u.nextSibling,q=A.nextSibling,I=q.firstChild,T=f.nextSibling,O=t.nextSibling,R=O.nextSibling,b=R.firstChild,j=b.firstChild;return m(a,"click",B,!0),F(r,"src",Ae),m(l,"submit",Ne),m(u,"click",Ce,!0),m(I,"change",Se),G(s=>{const v=e.App,h=e.header,p=e.blob,$=e.appbody,g=e.buttonBelow,y=e.blob,k=e.thankmessage;return v!==s._v$&&(i.className=s._v$=v),h!==s._v$2&&(n.className=s._v$2=h),p!==s._v$3&&(a.className=s._v$3=p),$!==s._v$4&&(t.className=s._v$4=$),g!==s._v$5&&(T.className=s._v$5=g),y!==s._v$6&&(b.className=s._v$6=y),k!==s._v$7&&(j.className=s._v$7=k),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),i})()}P(["click"]);J(Ie,document.getElementById("root"));const _=108,d=document.getElementsByTagName("textarea"),L=document.getElementsByClassName(e.required);function Te(){this.style.height="auto",this.scrollHeight>_?this.style.height=this.scrollHeight+"px":this.style.height=_+"px"}function Oe(){this.value==""?L[0].classList.remove(e.filled):L[0].classList.add(e.filled)}d[0].addEventListener("input",Oe,!1);for(let i=0;i<d.length;i++)d[i].value==""?d[i].setAttribute("style","height:"+_+"px;overflow-y:hidden;"):d[i].setAttribute("style","height:"+d[i].scrollHeight+"px;overflow-y:hidden;"),d[i].addEventListener("input",Te,!1);