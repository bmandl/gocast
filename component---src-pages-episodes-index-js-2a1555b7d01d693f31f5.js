(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Dzjk:function(e,t,n){},Qozi:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("Wbzz"),i=n("q1tI"),r=n.n(i),o=n("2ii+"),s=n("PLE4"),l=(n("Dzjk"),function(e){return r.a.createElement("div",{className:"episode"},r.a.createElement("img",{src:e.image}),r.a.createElement("div",{className:"episode-content"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.text),r.a.createElement(s.a,null)),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"tag"},"Season ".concat(e.season)),r.a.createElement("span",{className:"tag"},"Posted on ".concat(e.date)),r.a.createElement("span",{className:"tag"},e.tags.join(" / "))))});n("kQlK");function m(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){i=!0,r=l}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return n}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=function(e){var t=Object(a.d)("3796125276").allEpisodesJson.nodes,n=function(e){return e.map((function(e){return r.a.createElement(l,p({key:e.id},e,{image:e.image.publicURL}))}))},s=c(Object(i.useState)(n(m(t.slice(0,3)))),2),u=s[0],d=s[1],f=c(Object(i.useState)(!1),2),g=f[0],y=f[1],b=c(Object(i.useState)(t.length>3),2),v=b[0],h=b[1];return Object(i.useEffect)((function(){if(g&&v){var e=u.length,a=e<t.length?t.slice(e,e+3):[];d([].concat(m(u),m(n(m(a))))),y(!1)}}),[g,v]),Object(i.useEffect)((function(){var e=u.length<t.length;h(e)}),[u]),u.length?r.a.createElement("section",{className:"episodes-container"},r.a.createElement("div",{className:"top"},r.a.createElement("h2",{className:e.latest?void 0:"single"},e.title),e.latest&&r.a.createElement(o.a,{style:"primary",text:"View All",onClick:function(){return Object(a.c)("/episodes")}})),u,v&&r.a.createElement("div",{className:"more"},r.a.createElement(o.a,{style:"secondary",text:"Show more episodes",onClick:function(){y(!0)}}))):null}},aJp9:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("Qozi"),o=n("hkGW");t.default=function(){return i.a.createElement(o.a,{title:"Episodes",page:!0},i.a.createElement(r.a,{title:"All Podcast Episodes",episodes:[{id:0,img:"/images/dog.png",title:"Visiting my best friend's city for first time",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on Sep 3, 2020","audio / goodbyes / life"]},{id:1,img:"/images/book.png",title:"An interesting read I definitely recommend",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on July 29, 2020","audio / goodbyes / life"]},{id:2,img:"/images/door.png",title:"What if all my adventures go back home?",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on Sep 11, 2020","audio / goodbyes / life"]},{id:3,img:"/images/tower.png",title:"Visiting my best friend's city for first time",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on Sep 11, 2020","audio / goodbyes / life"]},{id:4,img:"/images/field.png",title:"An interesting read I definitely recommend",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on Sep 11, 2020","audio / goodbyes / life"]}]}))}},hkGW:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("Xhe4"),o=n("s4cb");t.a=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,e),e.children,i.a.createElement(o.a,null))}},kQlK:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-episodes-index-js-2a1555b7d01d693f31f5.js.map