import{_ as d}from"./DgLonKwk.js";import{_ as r}from"./BkwV5a8Q.js";import{e as b,f as p,g as h,o as _,h as m,w as e,a,b as l}from"./XHLcbYGS.js";const v={class:"chi-card",ref:"card"},L=b({__name:"_with_tabs",setup(u){const c=p("card");h(()=>{c.value&&chi.tab(c.value.querySelectorAll(".chi-tabs-panel .chi-tabs"))});const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div class="chi-card">
  <div class="chi-card__tabs">
    <ul class="chi-tabs">
      <li class="-active"><a href="#tab1">Active Tab</a></li>
      <li><a href="#tab2">Tab Link</a></li>
      <li><a href="#tab3">Tab Link</a></li>
    </ul>
  </div>
  <div class="chi-card__content chi-tabs-panel -active" id="tab1" role="tabpanel">
    <div class="chi-card__caption">Tab 1 content</div>
  </div>
  <div class="chi-card__content chi-tabs-panel" id="tab2" role="tabpanel">
    <div class="chi-card__caption">Tab 2 content</div>
  </div>
  <div class="chi-card__content chi-tabs-panel" id="tab3" role="tabpanel">
    <div class="chi-card__caption">Tab 3 content</div>
  </div>
</div>

<script>
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      chi.tab(document.querySelectorAll('.chi-tabs-panel .chi-tabs'));
    }
  );
<\/script>`};return(f,t)=>{const n=d,o=r;return _(),m(o,{title:"With tabs",id:"with_tabs_portal",tabs:s},{"example-description":e(()=>t[0]||(t[0]=[a("p",{class:"-text"},"Use portal themed cards with tabs for organizing Enterprise Portal card content into separate but related views.",-1)])),example:e(()=>[a("div",v,t[1]||(t[1]=[a("div",{class:"chi-card__tabs"},[a("ul",{class:"chi-tabs"},[a("li",{class:"-active"},[a("a",{href:"#tab1"},"Active Tab")]),a("li",null,[a("a",{href:"#tab2"},"Tab Link")]),a("li",null,[a("a",{href:"#tab3"},"Tab Link")])])],-1),a("div",{class:"chi-card__content chi-tabs-panel -active",id:"tab1",role:"tabpanel"},[a("div",{class:"chi-card__caption"},"Tab 1 content")],-1),a("div",{class:"chi-card__content chi-tabs-panel",id:"tab2",role:"tabpanel"},[a("div",{class:"chi-card__caption"},"Tab 2 content")],-1),a("div",{class:"chi-card__content chi-tabs-panel",id:"tab3",role:"tabpanel"},[a("div",{class:"chi-card__caption"},"Tab 3 content")],-1)]),512)]),"code-webcomponent":e(()=>[l(n,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":e(()=>[l(n,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}});export{L as _};
