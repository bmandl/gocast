(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9+mB":function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("Qozi"),o=a("hkGW");t.default=function(){return n.a.createElement(o.a,{title:"Episodes",page:!0},n.a.createElement(r.a,{title:"All Podcast Episodes",episodes:[{id:0,img:"/images/dog.png",title:"Visiting my best friend's city for first time",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on Sep 3, 2020","audio / goodbyes / life"]},{id:1,img:"/images/book.png",title:"An interesting read I definitely recommend",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on July 29, 2020","audio / goodbyes / life"]},{id:2,img:"/images/door.png",title:"What if all my adventures go back home?",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on Sep 11, 2020","audio / goodbyes / life"]},{id:3,img:"/images/tower.png",title:"Visiting my best friend's city for first time",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on Sep 11, 2020","audio / goodbyes / life"]},{id:4,img:"/images/field.png",title:"An interesting read I definitely recommend",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",tags:["Season 1","Posted on Sep 11, 2020","audio / goodbyes / life"]}]}))}},Dzjk:function(e,t,a){},Qozi:function(e,t,a){"use strict";var i=a("Wbzz"),n=a("q1tI"),r=a.n(n),o=a("17x9"),s=a.n(o),l=a("2ii+"),d=a("PLE4"),u=(a("Dzjk"),function(e){var t=e.image,a=e.title,i=e.text,n=e.audio,o=e.season,s=e.date,l=e.tags;return r.a.createElement("div",{className:"episode"},r.a.createElement("img",{alt:"Episode",src:t}),r.a.createElement("div",{className:"episode-content"},r.a.createElement("h3",null,a),r.a.createElement("p",null,i),r.a.createElement(d.a,{audio:n})),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"tag"},"Season ".concat(o)),r.a.createElement("span",{className:"tag"},"Posted on ".concat(s)),r.a.createElement("span",{className:"tag"},l.join(" / "))))});u.propTypes={image:s.a.string.isRequired,title:s.a.string.isRequired,text:s.a.string.isRequired,audio:s.a.string.isRequired,season:s.a.string.isRequired,date:s.a.instanceOf(Date).isRequired,tags:s.a.arrayOf(s.a.string).isRequired};var m=u;a("kQlK");function c(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],i=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(l){n=!0,r=l}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}return a}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}var y=function(e){var t=e.latest,a=e.title,o=Object(i.d)("3661649044").allEpisodesJson.nodes,s=function(e){return e.map((function(e){var t=e.date,a=e.tags,i=e.text,n=e.season,o=e.image,s=e.audio;return r.a.createElement(m,{key:e.id,title:e.title,date:t,tags:a,text:i,season:n,image:o.publicURL,audio:s.publicURL})}))},d=p(Object(n.useState)(s(c(o.slice(0,3)))),2),u=d[0],g=d[1],f=p(Object(n.useState)(!1),2),y=f[0],b=f[1],v=p(Object(n.useState)(o.length>3),2),h=v[0],E=v[1];return Object(n.useEffect)((function(){if(y&&h){var e=u.length,t=e<o.length?o.slice(e,e+3):[];g([].concat(c(u),c(s(c(t))))),b(!1)}}),[y,h]),Object(n.useEffect)((function(){var e=u.length<o.length;E(e)}),[u]),u.length?r.a.createElement("section",{className:"episodes-container"},r.a.createElement("div",{className:"top"},r.a.createElement("h2",{className:t?void 0:"single"},a),t&&r.a.createElement(l.a,{stylying:"primary",text:"View All",onClick:function(){return Object(i.c)("/episodes")}})),u,h&&r.a.createElement("div",{className:"more"},r.a.createElement(l.a,{styling:"secondary",text:"Show more episodes",onClick:function(){b(!0)}}))):null};y.propTypes={latest:s.a.bool,title:s.a.string.isRequired},y.defaultProps={latest:!1};t.a=y},hkGW:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("17x9"),o=a.n(r),s=a("Xhe4"),l=a("s4cb"),d=function(e){var t=e.hero,a=e.page,i=e.title,r=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{hero:t,page:a,title:i}),r,n.a.createElement(l.a,null))};d.propTypes={hero:o.a.bool,page:o.a.bool,title:o.a.string.isRequired,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired},d.defaultProps={hero:!1,page:!0},t.a=d},kQlK:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-episodes-index-jsx-da78a1f97a94152e4daa.js.map