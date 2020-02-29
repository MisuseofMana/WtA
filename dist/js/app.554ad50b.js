(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/WtA/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"075c":function(t,e,r){t.exports=r.p+"img/wta-icon.bea61cb2.jpg"},4359:function(t,e,r){t.exports=r.p+"img/instagram.1ef8320b.png"},"4dfa":function(t,e,r){t.exports=r.p+"img/discord.1bad3a68.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.interaction?a("div",{key:"main"},[a("section",{staticClass:"flex fullScreen"},[a("section",{staticClass:"gridCont"},[a("header",{staticClass:"gridHeader"},[t._v("WELCOME TO AMARA")]),a("section",{staticClass:"aboutAmara"},[a("h1",[t._v("A Dungeon World Dramatic Performance Podcast")]),a("p",[t._v(" “Welcome to Amara” is a high production dramatic retelling of a play by post campaign. We are Sean and Andy, a GM/Player duo exploring the unique world of Amara. Amara is a sword and sorcery realm with carefully crafted lore to uncover, and a growing cast of diverse characters. ")]),a("p",[t._v(" The storyline follows the main character Ydna, a traveling bard caught up in a flurry of proving grounds quests from his Coterie captain, Orric. Ydna is a curious drifter, who’s joined Eyien’s co-op militia, “The Coterie”. ")]),a("p",[t._v(" Along the way we discover much about Amara and the city of Eyien, uncover secrets that threaten the kingdom, and piece together the mysterious forces surrounding Eyien. ")]),a("h2",[t._v("Season 1 Arriving Mid 2020")])]),a("section",{staticClass:"discordLink"},[a("p",{staticClass:"center"},[t._v(' Join our discord server for early access. Listen to the podcast before it airs, and help us shape the future of "Welcome to Amara" ')]),a("a",{attrs:{href:"https://discord.gg/82GpmYD"}},[a("img",{attrs:{src:r("4dfa"),alt:"discord icon - click to join our discord"}})])]),a("aside",{staticClass:"aside"},[a("img",{attrs:{src:r("075c"),alt:""}})]),a("footer",{staticClass:"footer"},[a("a",{attrs:{href:"http://www.twitter.com/misuseofmana",target:"_blank"}},[a("img",{attrs:{src:r("77df"),alt:"twitter icon"}})]),a("a",{attrs:{target:"_blank",href:"http://www.instagram.com/misuseofmana"}},[a("img",{attrs:{src:r("4359"),alt:"instagram icon"}})]),a("a",{attrs:{target:"_blank",href:"mailto:seanyagerart@gmail.com"}},[a("img",{attrs:{src:r("8ae3"),alt:"email icon"}})]),a("a",{attrs:{target:"_blank",href:"https://discord.gg/82GpmYD"}},[a("img",{attrs:{src:r("4dfa"),alt:"discord icon - click to join our discord"}})])])])]),a("section",{staticClass:"witchMagic"})]):a("section",{key:"intro",staticClass:"fullScreenCenter flexCenter"},[a("img",{staticClass:"rings",attrs:{src:r("7ae8"),alt:""},on:{click:function(e){return e.preventDefault(),t.playSound()}}})])])],1)},i=[],o=(r("ea1e"),{name:"App",components:{},data:function(){return{interaction:!1}},methods:{playSound:function(){this.interaction=!this.interaction;var t=new Audio(r("5dfe"));t.play(),this.playMusic()},playMusic:function(){setTimeout((function(){var t=new Audio(r("e61d"));t.loop=!0,t.play()}),4e3)}}}),s=o,c=(r("034f"),r("2877")),u=Object(c["a"])(s,n,i,!1,null,null,null),l=u.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(l)}}).$mount("#app")},"5dfe":function(t,e,r){t.exports=r.p+"media/wave.b384486b.wav"},"77df":function(t,e,r){t.exports=r.p+"img/twitter.d75ff2cc.png"},"7ae8":function(t,e,r){t.exports=r.p+"img/rings.1b618d51.gif"},"85ec":function(t,e,r){},"8ae3":function(t,e,r){t.exports=r.p+"img/email.e7c58519.png"},e61d:function(t,e,r){t.exports=r.p+"media/introspection.3a293555.wav"},ea1e:function(t,e,r){}});
//# sourceMappingURL=app.554ad50b.js.map