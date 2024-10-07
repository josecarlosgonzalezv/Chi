import{_ as j}from"./mvJWdFug.js";import{_ as A}from"./DgLonKwk.js";import{_ as w}from"./BkwV5a8Q.js";import{e as h,o as c,h as x,w as s,a as i,d as e,c as m,i as y,F as _,n as f,t as C,l as $,b as o,p as B,r as L,q as E,k as I}from"./XHLcbYGS.js";import{_ as S}from"./4gWfHeLI.js";import"./Dkz40PA2.js";import"./DmiqoanI.js";import"./DlAUqK2U.js";import"./9VbNuw5f.js";import"./D4Yj6ayr.js";import"./eT-97QUK.js";import"./LQxRI0Hd.js";import"./De0T8KV-.js";const H={class:"chi-grid"},M={key:0,class:"-mb--1 chi-col -w--6 -w-sm--4 -w-md--6 -w-lg--4 -w-xl--3"},W={class:"chi-avatar-group"},z=h({__name:"_avatar-groups",setup(b){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t=["grey","red","pink","purple","indigo","navy","blue","cyan","teal","green","yellow","orange","secondary","primary"],v={webcomponent:"",htmlblueprint:`<div class="chi-avatar-group">
  <div class="chi-avatar">L</div>Label text
</div>`};return(l,r)=>{const n=A,g=w;return c(),x(g,{title:"Avatar Groups",id:"avatar-groups",tabs:d},{"example-description":s(()=>r[0]||(r[0]=[i("p",{class:"-text"},[e("Use avatar groups to group multiple avatars or add descriptive text such as a users name. Render an avatar group by wrapping an avatar in the class "),i("code",null,"chi-avatar-group"),e(".")],-1)])),example:s(()=>[i("div",H,[(c(),m(_,null,y(t,u=>(c(),m(_,null,[u!=="secondary"?(c(),m("div",M,[i("div",W,[i("div",{class:f(`chi-avatar -${u}`)},"L",2),e("Label "+C(u),1)])])):$("",!0)],64))),64))])]),"code-webcomponent":s(()=>[o(n,{lang:"html",code:v.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[o(n,{lang:"html",code:v.htmlblueprint},null,8,["code"])]),_:1})}}}),U=h({__name:"_base",setup(b){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<div class="chi-avatar">
  <img src="path/to/image.jpg" alt="avatar">
</div>`};return(v,l)=>{const r=A,n=w;return c(),x(n,{title:"Base",id:"base",tabs:d},{example:s(()=>l[0]||(l[0]=[i("div",{class:"chi-avatar"},[i("img",{src:S,alt:"avatar"})],-1)])),"code-webcomponent":s(()=>[o(r,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[o(r,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),N={class:"-text"},V=["href"],F={class:"-p--0"},R={class:"chi-grid -align-items--end"},q={key:0,class:"chi-col -w--2 -text--center"},D={key:0,class:"chi-icon icon-user","aria-hidden":"true"},G={class:"-text"},P=h({__name:"_color-customization",setup(b){const d=B().public.baseUrl,t=L(!1),v=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l=[{active:!0,id:"initial",label:"Initial"},{id:"icon",label:"Icon"}],r=["grey","red","pink","purple","indigo","navy","blue","cyan","teal","green","yellow","orange","secondary","primary"],n={webcomponent:"",htmlblueprint:{initial:`<div class="chi-avatar -grey">AA</div>
<div class="chi-avatar -red">AA</div>
<div class="chi-avatar -pink">AA</div>
<div class="chi-avatar -purple">AA</div>
<div class="chi-avatar -indigo">AA</div>
<div class="chi-avatar -navy">AA</div>
<div class="chi-avatar -blue">AA</div>
<div class="chi-avatar -cyan">AA</div>
<div class="chi-avatar -teal">AA</div>
<div class="chi-avatar -green">AA</div>
<div class="chi-avatar -yellow">AA</div>
<div class="chi-avatar -orange">AA</div>
<div class="chi-avatar -primary">AA</div>`,icon:`<div class="chi-avatar -grey">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -red">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -pink">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -purple">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -indigo">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -navy">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -blue">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -cyan">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -teal">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -green">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -yellow">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -orange">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -primary">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`}},g=u=>{t.value=u.id==="icon"};return(u,a)=>{const T=A,k=w;return c(),x(k,{title:"Color",id:"color",tabs:v,headTabs:l,onChiHeadTabsChange:g},E({"example-description":s(()=>[i("p",N,[a[0]||(a[0]=e("Both icon and initial avatars support ")),i("a",{href:`${I(d)}foundations/color/`},"Chi colors",8,V),a[1]||(a[1]=e(". To color an icon, apply any of the following color classes: ")),a[2]||(a[2]=i("code",null,"-grey",-1)),a[3]||(a[3]=e(", ")),a[4]||(a[4]=i("code",null,"-red",-1)),a[5]||(a[5]=e(", ")),a[6]||(a[6]=i("code",null,"-pink",-1)),a[7]||(a[7]=e(", ")),a[8]||(a[8]=i("code",null,"-purple",-1)),a[9]||(a[9]=e(", ")),a[10]||(a[10]=i("code",null,"-indigo",-1)),a[11]||(a[11]=e(", ")),a[12]||(a[12]=i("code",null,"-navy",-1)),a[13]||(a[13]=e(", ")),a[14]||(a[14]=i("code",null,"-blue",-1)),a[15]||(a[15]=e(", ")),a[16]||(a[16]=i("code",null,"-teal",-1)),a[17]||(a[17]=e(", ")),a[18]||(a[18]=i("code",null,"-green",-1)),a[19]||(a[19]=e(", ")),a[20]||(a[20]=i("code",null,"-yellow",-1)),a[21]||(a[21]=e(", ")),a[22]||(a[22]=i("code",null,"-orange",-1)),a[23]||(a[23]=e(", ")),a[24]||(a[24]=i("code",null,"-secondary",-1)),a[25]||(a[25]=e(", ")),a[26]||(a[26]=i("code",null,"-primary",-1))])]),example:s(()=>[i("div",F,[i("div",R,[(c(),m(_,null,y(r,p=>(c(),m(_,null,[p!=="secondary"?(c(),m("div",q,[i("div",{class:f(`chi-avatar -${p}`)},[e(C(t.value?"":"AA"),1),t.value?(c(),m("i",D)):$("",!0)],2),i("p",G,C(p),1)])):$("",!0)],64))),64))])])]),_:2},[y(l,p=>({name:`code-color-${p.id}-htmlblueprint`,fn:s(()=>[o(T,{lang:"html",code:n.htmlblueprint[p.id]},null,8,["code"])])}))]),1024)}}}),J={class:"-text"},K=["href"],O={class:"chi-grid"},Q={class:"chi-col -w--2 -w-sm--1"},X={class:"chi-avatar"},Y=h({__name:"_icon-avatar",setup(b){const d=B().public.baseUrl,t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],v=["user","users","atom"],l={webcomponent:"",htmlblueprint:`<div class="chi-avatar">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`};return(r,n)=>{const g=A,u=w;return c(),x(u,{title:"Icon Avatars",id:"icon-avatars",tabs:t},{"example-description":s(()=>[i("p",J,[n[0]||(n[0]=e("Icon avatars can be used when an image is not available. To use, wrap any ")),i("a",{href:`${I(d)}components/icon/`},"Chi icon",8,K),n[1]||(n[1]=e(" with ")),n[2]||(n[2]=i("code",null,"chi-avatar",-1)),n[3]||(n[3]=e("."))])]),example:s(()=>[i("div",O,[(c(),m(_,null,y(v,a=>i("div",Q,[i("div",X,[i("i",{class:f(`chi-icon icon-${a}`),"aria-hidden":"true"},null,2)])])),64))])]),"code-webcomponent":s(()=>[o(g,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[o(g,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),Z=h({__name:"_initial-avatar",setup(b){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:'<div class="chi-avatar">AA</div>'};return(v,l)=>{const r=A,n=w;return c(),x(n,{title:"Initial Avatars",id:"initial-avatars",tabs:d},{"example-description":s(()=>l[0]||(l[0]=[i("p",{class:"-text"},[e("Initial avatars can also be used when an image is not available. They are more versatile than icon avatars and support up to two letters. Text utility classes such as "),i("code",null,"-text--uppercase"),e(", "),i("code",null,"-text--lowercase"),e(", and "),i("code",null,"-text--capitalized"),e(" can be applied to force specific casing.")],-1)])),example:s(()=>l[1]||(l[1]=[i("div",{class:"chi-grid"},[i("div",{class:"chi-col -w--2 -w-sm--1"},[i("div",{class:"chi-avatar"},"AA")]),i("div",{class:"chi-col -w--2 -w-sm--1"},[i("div",{class:"chi-avatar"},"M")])],-1)])),"code-webcomponent":s(()=>[o(r,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[o(r,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),ii=h({__name:"_light-transparent",setup(b){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<div class="-bg--black">
  <div class="chi-avatar -light">AA</div>
  <div class="chi-avatar -secondary -transparent">AA</div>
  <div class="chi-avatar -light">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
  <div class="chi-avatar -secondary -transparent">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
</div>`};return(v,l)=>{const r=A,n=w;return c(),x(n,{title:"Light and transparent background",additionalClasses:"-bg--black",id:"light-transparent",tabs:d},{"example-description":s(()=>l[0]||(l[0]=[i("p",{class:"-text"},"Both icon and initial avatars support light and transparent versions for dark backgrounds.",-1)])),example:s(()=>l[1]||(l[1]=[i("div",{class:"chi-grid -align-items--end"},[i("div",{class:"chi-col -w--3 -text--center"},[i("div",{class:"chi-avatar -light"},"AA")]),i("div",{class:"chi-col -w--3 -text--center"},[i("div",{class:"chi-avatar -secondary -transparent"},"AA")]),i("div",{class:"chi-col -w--3 -text--center"},[i("div",{class:"chi-avatar -light"},[i("i",{class:"chi-icon icon-user","aria-hidden":"true"})])]),i("div",{class:"chi-col -w--3 -text--center"},[i("div",{class:"chi-avatar -secondary -transparent"},[i("i",{class:"chi-icon icon-user","aria-hidden":"true"})])])],-1)])),"code-webcomponent":s(()=>[o(r,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[o(r,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),ai={class:"-p--0"},ei={class:"chi-grid -align-items--end"},ti={key:0,class:"chi-icon icon-user","aria-hidden":"true"},si={key:1,src:S,alt:"avatar"},ni={class:"-text"},li=h({__name:"_sizes",setup(b){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t=[{active:!0,id:"initial",label:"Initial"},{id:"icon",label:"Icon"},{id:"image",label:"Image"}],v=["xs","sm","sm--2","sm--3","md","lg","xl","xxl"],l={xs:["4","3","1"],sm:["4","3","1"],"sm--2":["4","3","1"],"sm--3":["4","3","1"],md:["4","2","1"],lg:["4","3","2"],xl:["6","3","2"],xxl:["6","4","3"]},r={webcomponent:"",htmlblueprint:{initial:`<div class="chi-avatar -xs">AA</div>
<div class="chi-avatar -sm">AA</div>
<div class="chi-avatar -sm--2">AA</div>
<div class="chi-avatar -sm--3">AA</div>
<div class="chi-avatar -md">AA</div>
<div class="chi-avatar -lg">AA</div>
<div class="chi-avatar -xl">AA</div>
<div class="chi-avatar -xxl">AA</div>`,icon:`<div class="chi-avatar -xs">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -sm">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -sm--2">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -sm--3">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -md">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -lg">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -xl">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -xxl">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`,image:`<div class="chi-avatar -xs">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -sm">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -sm--2">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -sm--3">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -md">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -lg">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -xl">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -xxl">
  <img src="path/to/image.jpg">
</div>`}},n=L("initial"),g=u=>{n.value=u.id};return(u,a)=>{const T=A,k=w;return c(),x(k,{title:"Size",id:"size",tabs:d,headTabs:t,onChiHeadTabsChange:g},E({"example-description":s(()=>[a[0]||(a[0]=i("p",{class:"-text"},[e("All three avatar styles support a full spectrum of sizes: "),i("code",null,"-xs"),e(", "),i("code",null,"-sm"),e(", "),i("code",null,"-sm--2"),e(", "),i("code",null,"-sm--3"),e(", "),i("code",null,"-md"),e(", "),i("code",null,"-lg"),e(", "),i("code",null,"-xl"),e(", "),i("code",null,"-xxl"),e(". "),i("code",null,"-md"),e(" is the default size.")],-1))]),example:s(()=>[i("div",ai,[i("div",ei,[(c(),m(_,null,y(v,p=>i("div",{class:f(`chi-col -w--${l[p][0]} -w-lg--${l[p][1]} -w-xl--${l[p][2]} -text--center`)},[i("div",{class:f(`chi-avatar -${p}`)},[e(C(n.value==="initial"?"AA":""),1),n.value==="icon"?(c(),m("i",ti)):$("",!0),n.value==="image"?(c(),m("img",si)):$("",!0)],2),i("p",ni,C(p),1)],2)),64))])])]),_:2},[y(t,p=>({name:`code-size-${p.id}-htmlblueprint`,fn:s(()=>[o(T,{lang:"html",code:r.htmlblueprint[p.id]},null,8,["code"])])}))]),1024)}}}),oi=h({__name:"index",setup(b){return(d,t)=>(c(),m(_,null,[t[0]||(t[0]=i("h2",null,"Examples",-1)),t[1]||(t[1]=i("p",{class:"-text"},[e("To render an avatar, apply the class "),i("code",null,"chi-avatar"),e(" to a div element and place an image inside.")],-1)),o(U),o(Y),o(Z),t[2]||(t[2]=i("h2",null,"Customizations",-1)),o(P),o(ii),o(li),o(z)],64))}}),wi=h({__name:"index",setup(b){return(d,t)=>{const v=j;return c(),x(v,{title:"Avatar",description:"Avatars are used to represent users, groups, and entities."},{examples:s(()=>[o(oi)]),_:1})}}});export{wi as default};
