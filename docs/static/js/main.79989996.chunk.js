(this["webpackJsonpgit-expert-app"]=this["webpackJsonpgit-expert-app"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(1),c=n(8),i=n.n(c),s=(n(16),n(2)),u=n(10),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>=2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(7),d=function(t){var e=t.title,n=t.url;return Object(r.jsxs)("div",{className:"card animate__animated animate__zoomIn",children:[Object(r.jsx)("img",{src:n,alt:e}),Object(r.jsx)("p",{children:e})]})},p=n(6),b=n.n(p),l=n(9),f=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,r,a,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=10&q=".concat(encodeURI(e),"&api_key=ny4rqMozw2oNYva8p5bSnnUuCsU74U6z"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),c=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:e}),i&&"Cargando...",Object(r.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(a.createElement)(d,Object(j.a)(Object(j.a)({},t),{},{key:t.id}))}))})]})},m=function(){var t=Object(a.useState)(["Simpson"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(o,{setCategories:c}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(O,{category:t},t)}))})]})};i.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.79989996.chunk.js.map