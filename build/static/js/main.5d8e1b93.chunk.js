(this["webpackJsonpsaatchi-site-main"]=this["webpackJsonpsaatchi-site-main"]||[]).push([[0],{23:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(0),i=n.n(o),s=n(16),a=n.n(s),j=(n(23),n(8)),r=n(2),u=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"Home - test"}),Object(c.jsx)(j.b,{to:"/posts/1",children:"Take me to post 1"})]})},b=function(){return Object(c.jsx)("div",{children:"Work"})},d=function(){return Object(c.jsx)("div",{children:"People"})},h=function(){return Object(c.jsx)("div",{children:"404"})},p=n(14),l=function(){var t=Object(r.g)().id,e=Object(o.useState)(!0),n=Object(p.a)(e,2),i=n[0],s=n[1],a=Object(o.useState)([]),j=Object(p.a)(a,2),u=j[0],b=j[1];Object(o.useEffect)((function(){i?void fetch("../data/fakeData.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){s((function(){return!1})),b((function(){return t}))})):(console.log("useeffect",u),console.log(t))}),[u]);var d=Object(r.f)();return Object(c.jsx)(c.Fragment,{children:!i&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:["Post ",t]}),Object(c.jsx)("button",{onClick:function(){d.push("/")},children:"we are leaving"})]})})};n(29);var O=function(){return Object(c.jsx)(j.a,{children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{path:"/",exact:!0,component:u}),Object(c.jsx)(r.a,{path:"/work",exact:!0,component:b}),Object(c.jsx)(r.a,{path:"/people",exact:!0,component:d}),Object(c.jsx)(r.a,{path:"/posts/:id",exact:!0,component:l}),Object(c.jsx)(r.a,{path:"/",component:h})]})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),i(t),s(t)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.5d8e1b93.chunk.js.map