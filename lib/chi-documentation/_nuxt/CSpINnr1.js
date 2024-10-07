import{_ as w}from"./mvJWdFug.js";import{_ as h}from"./DgLonKwk.js";import{_ as x}from"./BkwV5a8Q.js";import{e as m,o as c,h as b,w as o,a as t,b as s,j as v,r as $,x as g,d as u,c as _,i as B,t as F,n as M,k as H,F as C,z as q}from"./XHLcbYGS.js";import{_ as z}from"./BuiarGnj.js";import"./Dkz40PA2.js";import"./DmiqoanI.js";import"./DlAUqK2U.js";import"./9VbNuw5f.js";import"./D4Yj6ayr.js";import"./eT-97QUK.js";import"./LQxRI0Hd.js";import"./De0T8KV-.js";const k=m({__name:"_base",setup(d){const p=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="file01" aria-label="Choose file">
<label for="file01">No file chosen</label>
<script>
var inputFiles = document.querySelectorAll('input[type="file"].chi-file-input');

Array.prototype.forEach.call(inputFiles, function(input) {
  var label = input.nextElementSibling;

  input.addEventListener('change', function(e) {
    var fileName = '';

    if (this.files && this.files.length > 1) {
      fileName = this.files.length + ' files selected';
    } else {
      fileName = e.target.value.split('\\').pop();
    }

    if (fileName) {
      label.innerHTML = fileName;
    }
  });
});
<\/script>`};return(r,e)=>{const n=h,a=x;return c(),b(a,{title:"Base",id:"base",tabs:p},{example:o(()=>e[0]||(e[0]=[t("input",{class:"chi-file-input",type:"file",id:"file01","aria-label":"Choose file"},null,-1),t("label",{for:"file01"},"No file chosen",-1)])),"code-webcomponent":o(()=>[s(n,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[e[1]||(e[1]=t("div",{class:"chi-tab__description -text--grey"},"This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below.",-1)),s(n,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),A=m({__name:"_disabled",setup(d){const p=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="unique-id-di1" aria-label="Choose file" disabled>
<label for="unique-id-di1">No file chosen</label>

<script>
var inputFiles = document.querySelectorAll('input[type="file"].chi-file-input');

Array.prototype.forEach.call(inputFiles, function(input) {
  var label = input.nextElementSibling;

  input.addEventListener('change', function(e) {
    var fileName = '';

    if (this.files && this.files.length > 1) {
      fileName = this.files.length + ' files selected';
    } else {
      fileName = e.target.value.split('\\').pop();
    }

    if (fileName) {
      label.innerHTML = fileName;
    }
  });
});
<\/script>`};return(r,e)=>{const n=h,a=x;return c(),b(a,{title:"Disabled",id:"disabled",tabs:p},{example:o(()=>e[0]||(e[0]=[t("input",{class:"chi-file-input",id:"unique-id-di1",type:"file","aria-label":"Choose file",disabled:""},null,-1),t("label",{for:"unique-id-di1"},"No file chosen",-1)])),"code-webcomponent":o(()=>[s(n,{lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[e[1]||(e[1]=t("div",{class:"chi-tab__description -text--grey"},"This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below.",-1)),s(n,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),J={class:"-text"},j=["innerHTML"],I={class:"-text--bold -mt--0"},V=["id"],W=["for"],Y=m({__name:"_sizes",setup(d){const p=["xs","sm","md","lg"],l=["xs","sm","md","lg","xl"],r=v(),e=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={portal:p,centurylink:l,lumen:l},a=$(v()),S=g(()=>n[a.value.toLowerCase()].map(i=>`
<!-- -${i} -->
<input type="file" class="chi-file-input -${i}" id="example-file-input_${i}" aria-label="Choose file">
<label for="example-file-input_${i}">No file chosen</label>
`).join("")),T=g(()=>n[a.value.toLowerCase()].map(i=>`<code>-${i}</code>`).join());return(y,i)=>{const N=h,L=x;return c(),b(L,{title:"Sizes",id:"sizes",tabs:e},{"example-description":o(()=>[t("p",J,[i[0]||(i[0]=u("File inputs support sizes:")),t("span",{innerHTML:T.value},null,8,j),i[1]||(i[1]=u(". The default size is ")),i[2]||(i[2]=t("code",null,"-md",-1)),i[3]||(i[3]=u("."))])]),example:o(()=>[(c(!0),_(C,null,B(n[H(r)],(f,E)=>(c(),_("div",{class:"-p--2",key:E},[t("p",I,"-"+F(f),1),t("input",{class:M(`chi-file-input -${f}`),type:"file",id:`example-file-${f}`,"aria-label":"Choose file"},null,10,V),t("label",{for:`example-file-${f}`},"No file chosen",8,W)]))),128))]),"code-htmlblueprint":o(()=>[s(N,{lang:"html",code:S.value},null,8,["code"])]),_:1})}}}),D=m({__name:"index",setup(d){return(p,l)=>(c(),_(C,null,[l[0]||(l[0]=t("h2",null,"Examples",-1)),l[1]||(l[1]=t("p",{class:"-text"},[u("To render a file input, apply the class "),t("code",null,"chi-file-input"),u("to an "),t("code",null,'input type="file"'),u(" and add a label next to it.")],-1)),s(k),s(A),s(Y)],64))}}),ne=m({__name:"index",setup(d){const p=()=>{document.querySelectorAll('input[type="file"].chi-file-input').forEach(r=>{const e=r.nextElementSibling;r.addEventListener("change",n=>{const a=n.target.value.split("\\").pop();e&&a&&(e.innerHTML=a)})})};return q(()=>{p()}),(l,r)=>{const e=w;return c(),b(e,{title:"File input",description:"File inputs are used to select one or more files from a user's device storage."},{examples:o(()=>[s(D)]),accessibility:o(()=>[s(z)]),_:1})}}});export{ne as default};
