(this.webpackJsonpcreditcardvalidate=this.webpackJsonpcreditcardvalidate||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(25),s=n.n(c),i=(n(31),n(5)),d=n(26),o=n.n(d),l=n(1),u=function(){var e=[],t=Object(r.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),d=Object(i.a)(s,2),u=d[0],b=d[1],j=Object(r.useState)(!0),p=Object(i.a)(j,2),O=p[0],x=p[1],C=Object(r.useState)(!0),v=Object(i.a)(C,2),f=v[0],h=v[1],g=function(e){!function(e){var t=new XMLHttpRequest;t.onload=function(){var n=t.responseText;console.log(n);for(var r=n.split("\n"),a=0;a<r.length;a++)r[a]=r[a].trim().toUpperCase();console.log(r),-1===r.indexOf(e.trim().toUpperCase())&&""!==e?(b("\u2705"),h(!1)):-1!==r.indexOf(e.trim().toUpperCase())?(b("\u274c (Blacklisted Country)"),h(!0)):(b("\u274c"),h(!0))},t.open("GET","blacklistedCountries.txt"),t.send()}(e)};return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsxs)("pre",{children:[Object(l.jsx)("h2",{children:"Validate and Save Credit Card below"}),Object(l.jsx)("input",{type:"text",placeholder:"Enter Credit Card Number",onChange:function(e){return t=e.target.value,void(o.a.isCreditCard(t)?(c("\u2705"),x(!1)):(c("\u274c"),x(!0)));var t},id:"creditCardNumber"}),Object(l.jsxs)("span",{children:[a,Object(l.jsx)("br",{})]}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{disabled:O,placeholder:"Enter Country",type:"text",onChange:function(e){return g(e.target.value)}}),Object(l.jsxs)("span",{children:[u,Object(l.jsx)("br",{})]}),Object(l.jsx)("button",{type:"save",disabled:f,id:"saveButton",onClick:function(t){var n=document.getElementById("creditCardNumber").value;console.log(e);var r=document.getElementById("savedCards");t.preventDefault(),0===e.length||-1===e.indexOf(n.trim())?(e.push(n),r.value=e.join("\n")):alert("The Credit Card number "+n+" already exists, please try a different one")},children:"Save Information"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{id:"savedCards",disabled:!0,rows:"4",cols:"50"})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),b()},31:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.514ee620.chunk.js.map