(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0viG":function(e,t,a){},"4O1U":function(e,t,a){},Aohw:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),i=a("2ii+"),c=(a("YIew"),function(e){return r.a.createElement("div",{className:"post-card"},r.a.createElement("div",{className:"meta-data"},r.a.createElement("span",{className:"author"},e.data.frontmatter.author),r.a.createElement("span",{className:"date"},e.data.frontmatter.date),r.a.createElement("span",{className:"location"},e.data.frontmatter.location)),r.a.createElement("h3",null,e.data.frontmatter.title),r.a.createElement("p",null,e.data.excerpt),r.a.createElement("div",{className:"read-more"},r.a.createElement(i.a,{style:"secondary",text:"Read more"})))})},Dzjk:function(e,t,a){},MAH9:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("wHSu"),r=a("IP2g"),i=a("Wbzz"),c=a("q1tI"),l=a.n(c),o=a("Aohw"),s=(a("0viG"),function(e){var t=Object(i.d)("884203041").allMarkdownRemark.edges.map((function(e,t){return l.a.createElement(o.a,{data:e.node,key:t})}));return l.a.createElement("div",{className:"slider-container"},l.a.createElement("h2",null,e.title),l.a.createElement("div",{className:"slider"},t),l.a.createElement("div",{className:"arrows"},l.a.createElement("a",{href:""},l.a.createElement(r.a,{icon:n.a})),l.a.createElement("a",{href:""},l.a.createElement(r.a,{icon:n.b}))))})},Qozi:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("Wbzz"),r=a("q1tI"),i=a.n(r),c=a("2ii+"),l=a("PLE4"),o=(a("Dzjk"),function(e){return i.a.createElement("div",{className:"episode"},i.a.createElement("img",{src:e.image}),i.a.createElement("div",{className:"episode-content"},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.text),i.a.createElement(l.a,{audio:e.audio})),i.a.createElement("div",{className:"meta"},i.a.createElement("span",{className:"tag"},"Season ".concat(e.season)),i.a.createElement("span",{className:"tag"},"Posted on ".concat(e.date)),i.a.createElement("span",{className:"tag"},e.tags.join(" / "))))});a("kQlK");function s(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,i=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=function(e){var t=Object(n.d)("3661649044").allEpisodesJson.nodes,a=function(e){return e.map((function(e){return i.a.createElement(o,d({key:e.id},e,{image:e.image.publicURL,audio:e.audio.publicURL}))}))},l=u(Object(r.useState)(a(s(t.slice(0,3)))),2),m=l[0],f=l[1],p=u(Object(r.useState)(!1),2),E=p[0],y=p[1],b=u(Object(r.useState)(t.length>3),2),g=b[0],v=b[1];return Object(r.useEffect)((function(){if(E&&g){var e=m.length,n=e<t.length?t.slice(e,e+3):[];f([].concat(s(m),s(a(s(n))))),y(!1)}}),[E,g]),Object(r.useEffect)((function(){var e=m.length<t.length;v(e)}),[m]),m.length?i.a.createElement("section",{className:"episodes-container"},i.a.createElement("div",{className:"top"},i.a.createElement("h2",{className:e.latest?void 0:"single"},e.title),e.latest&&i.a.createElement(c.a,{style:"primary",text:"View All",onClick:function(){return Object(n.c)("/episodes")}})),m,g&&i.a.createElement("div",{className:"more"},i.a.createElement(c.a,{style:"secondary",text:"Show more episodes",onClick:function(){y(!0)}}))):null}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Qozi"),c=(a("SkwN"),a("MAH9")),l=a("wHSu"),o=a("IP2g");a("m+lH");function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,i=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var m=function(e){var t=s(Object(n.useState)(["/images/75095@2x.png","/images/mike-dorner-sf_1ZDA1YFw-unsplash@2x.png","/images/1683@2x.png","/images/2857@2x.png","/images/sina-katirachi-sj5nVJSfYl4-unsplash@2x.png","/images/451@2x.png","/images/markus-spiske-UJwcQ3xeFHo-unsplash@2x.png","/images/1841@2x.png","/images/15@2x.png","/images/1670@2x.png"]),2),a=t[0];t[1];return r.a.createElement("div",{className:"carousel-container"},r.a.createElement("h2",null,e.title),r.a.createElement("div",{className:"feeds-box"},a.map((function(e,t){return r.a.createElement("div",{className:"feed",key:t},r.a.createElement("img",{src:e}),r.a.createElement("div",{className:"overlay"},r.a.createElement("a",{href:""},r.a.createElement(o.a,{icon:l.e,className:"link"}))))}))))},f=a("nyHU"),d=a("Xhe4"),p=a("s4cb");t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{hero:!0}),r.a.createElement(i.a,{title:"Latest Episodes",latest:!0}),r.a.createElement(c.a,{title:"Blog Posts"}),r.a.createElement(m,null),r.a.createElement(f.a,{title:"New Episode Every Week!",subtitle:"Loremipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed."}),r.a.createElement(p.a,null))}},SkwN:function(e,t,a){},YIew:function(e,t,a){},kQlK:function(e,t,a){},"m+lH":function(e,t,a){},nyHU:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("wHSu"),r=a("IP2g"),i=a("q1tI"),c=a.n(i),l=a("2ii+"),o=(a("4O1U"),function(e){return c.a.createElement(c.a.Fragment,null,e.text,c.a.createElement(r.a,{icon:e.icon}))}),s=function(e){return c.a.createElement("section",{className:"subscribe"},c.a.createElement("h2",null,e.title),c.a.createElement("p",null,e.subtitle),c.a.createElement("div",{className:"cta-subscribe"},c.a.createElement("form",{action:""},c.a.createElement("input",{type:"email",placeholder:"Type Your Email"}),c.a.createElement(l.a,{type:"submit",style:"primary",text:c.a.createElement(o,{text:"Subscribe ",icon:n.b})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d082088f5d7d71b1a3aa.js.map