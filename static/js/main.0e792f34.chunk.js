(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),i=c(2),r=c(1),s=(c(9),c(0)),l=function(e){var t=e.newList,c=e.total,a=e.perPage,n=e.currentPage,i=e.setCurrentPage,l=e.setInfo,o=e.items,j=o.indexOf(t[0])+1,d=o.indexOf(t[t.length-1])+1;Object(r.useEffect)((function(){l("Page ".concat(n," (items ").concat(j," - ").concat(d," of ").concat(o.length,")"))}),[n,j,d,o.length,l]);var u=Math.ceil(c/a),h=1===n,b=n===u,m=Array.from({length:u}).map((function(e,t){return t}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("ul",{className:"pagination",children:[Object(s.jsx)("li",{className:"page-item ".concat(h?"disabled":""),children:Object(s.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":h,onClick:function(){h||i(n-1)},children:"\xab"})}),m.map((function(e){return Object(s.jsx)("li",{className:"page-item".concat(n===e+1?" active":""),children:Object(s.jsx)("a",{"data-cy":"pageLink",href:"#".concat(e+1),onClick:function(){i(e+1)},className:"page-link",children:e+1})},e)})),Object(s.jsx)("li",{className:"page-item ".concat(b?"disabled":""),children:Object(s.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":b,onClick:function(){b||i(n+1)},children:"\xbb"})})]}),Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};var o=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,42).map((function(e){return"Item ".concat(e)})),j=function(){var e=Object(r.useState)(5),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(1),j=Object(i.a)(n,2),d=j[0],u=j[1],h=Object(r.useState)("Page 1 (items 1 - 5 of ".concat(o.length,")")),b=Object(i.a)(h,2),m=b[0],p=b[1],g=1!==d?(d-1)*c:0,f=o.slice(g,g+c),O=o.length;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Items with Pagination"}),Object(s.jsx)("p",{className:"lead","data-cy":"info",children:m}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(s.jsxs)("select",{value:c,"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){return function(e){u(1),a(+e.target.value)}(e)},children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})}),Object(s.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(s.jsx)(l,{newList:f,total:O,perPage:c,currentPage:d,setCurrentPage:u,setInfo:p,items:o})]})};n.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.0e792f34.chunk.js.map