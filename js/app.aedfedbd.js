(function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],p=0,m=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00d0":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAArCAYAAAAws+DcAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGnWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTAxVDEzOjI1OjQ2LTA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAzLTAxVDEzOjI1OjQ2LTA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0wMVQxMzoyNTo0Ni0wNjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZjlhMmIxMi05OWNjLTM4NDktYTIyNS0zODM5ODlkMmQwMmIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZDcxOTlmNS01Yjc0LTRlNGYtODdhMi1jOWYzMGE1MjFiOGIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjhjMmI2Zi1mN2U1LTI3NGMtYjc5Yi1lNzQ4MjQ5MmE5ZGIiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyOGMyYjZmLWY3ZTUtMjc0Yy1iNzliLWU3NDgyNDkyYTlkYiIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0wMVQxMzoyNTo0Ni0wNjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZjlhMmIxMi05OWNjLTM4NDktYTIyNS0zODM5ODlkMmQwMmIiIHN0RXZ0OndoZW49IjIwMjAtMDMtMDFUMTM6MjU6NDYtMDY6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJOT1QgQUxMIFJJTkdFRCBBUkUgTElBUlMiIHBob3Rvc2hvcDpMYXllclRleHQ9Ik5PVCBBTEwgUklOR0VEIEFSRSBMSUFSUyIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Smsw9wAABKtJREFUeJzt3c1x6zYUhuHPmSyYBRd2CWnBLsF3hg3EJSQlWCVclRCXEDXAzKiEqIVbQrRgFtwpC0EeGjrgrwhB4vvMeENLAAmAxzR5AD4cDgcBAOL56do7AABLQ+AFgMgIvAAQ2c/+hv/+/uVXSc/e5n1e1NuqzH4zytjlRf1Dkqoy+z6k8ryoV+57Vp1tPuscoyqzV0mPQ8usyuxR0qu/PS/qTaDMfV7U27Y6Je2tMiVt86Let+1Px75afbV1dVn9u258r60vPj87oM5Hq8y8qDc96/TtGt8dO+ZG1znGTGPuPVDmqW2s37f5mHhezdX/g8dc17kTiDmnOGeNqc62CR1HXtQr/1naWeCV9Lukd2/briqzb5L+Mj6/lrRyA8T/XquqzNaugaw626wlrYbU5fmu8wbqU+arjDaoyuwpUOZO0ktHnTurTElvkkad6K4vQmU+y+hfty8K/D702Sl1qiqzJ9f/XXX61pI2E8fcqDqH1OWZY8xZJ3pzPwf/cZE0KvDO3P9jxlxXX7XFOWtf+rRN6DjXOl5gfeJWAwBERuAFgMgIvAAQGYEXACIj8AJAZAReAIjMSie7tGZqiykv6pVLuehlSn7r0llt7bXnh46pMydWuk4sb4Htu8D2k7WM9COpc+yYaUs964wuL+oXl1LV3NZ1buwkfQuUd63zKpkxlxf13qXqnW2/ZD0xAm+vvECCaTxtbe2SxE8TYoYk389h9CSSCd+bkqsb3ZjjTO1cS2zMRWmfGIG3k5th418R7/Ki/iMwi2TSLKIlczOozto0L+oX4+M3KzCmeh1nVWb/GJs3odlT19J23nR8zxwDklanmZZLVpXZnzqfeHLR/k8i8CowpbBlZtLUWURLFmzr1K6EJhp1nG7MWbO9UgxIoX0d+72rX20m4lnn7XPR/ufhGu7VPf0RuTTa5soIvLhXoxd7WYDkHhQuTaxbDf5TS0np3eQHgBiiBN7mU0sAWLpUHq4lw0pn4cocc2LMzSPldrXu8X7omLje/Jmy9u3NcAsZ/+v/BBZbRoMb0P64eVOa2QDJYMzNw6WhWu06W+aGW2T/yf+xgr11xWulUuzFDXl0s1KUJo0b8riRmrYx2feKOhR4rTcUfAzcPyxIS871lMBLHjeScqm5BVHu8YbeqcZVC4AlivVwzXynWuOdS0AS3CIp1uI83GrDxZDVAHj4TwxzY+YaAERG4AWAyLjVgHtlLmrOM4XP+9jWEofcx46EwIu75KapL2Lizxgu2R9XQuDFYM3ZP6leQYZmKKW6vzHdYtvcwpgbIsY93nfZCce4Tc/6OgXTmsVzbe8ypotq5imjN+JL/+k2pinfwpgbhIdrABAZgRcAIiPwAkBkBF4AiIzACwCRXSydzCVlD0rAbqSFWOv97lrKnJpOEirTTLoPfN630fmi3332c0qdppaFXrY6PiHu9f67nn16idSe0HrPbdtnGXNDyhpo7Jjb6rig/Bfu2LuOYejxzJWm1Xsyy5Ax1xEfuuq03gN5+t2YMTeo7R4Oh8PXDQ8PZ3l+p51N+VUasUxpg1C73ou2tmHs3D/6OOwszvobAADz4h4vAERG4AWAyP4HdfZlpOTXpdEAAAAASUVORK5CYII="},"075c":function(t,e,a){t.exports=a.p+"img/wta-icon.bea61cb2.jpg"},"0f58":function(t,e,a){t.exports=a.p+"media/magicPortal.c3571054.mp3"},"23aa":function(t,e,a){},4359:function(t,e,a){t.exports=a.p+"img/instagram.1ef8320b.png"},"4dfa":function(t,e,a){t.exports=a.p+"img/discord.1bad3a68.png"},"53b9":function(t,e,a){t.exports=a.p+"img/amaranmap.078f88d3.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.interaction?i("div",{key:"main",staticClass:"main"},[i("section",{staticClass:"gridCont"},[i("header",{staticClass:"headerText"},[i("h1",[t._v(" WELCOME TO AMARA ")])]),i("main",{staticClass:"aboutAmara"},[i("img",{staticClass:"headerImg",attrs:{src:a("075c"),alt:""}}),i("section",{staticClass:"podcastDescription"},[i("section",{staticClass:"podcastIntro"},[i("h2",[t._v("A Dungeon World Dramatic Performance Podcast")]),i("hr"),i("p",[t._v(" “Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign. We are "),i("strong",[i("em",[t._v("Sean (The GM)")])]),t._v(" and "),i("strong",[i("em",[t._v("Andy (Along for the Ride)")])]),t._v(", a GM/Player duo exploring the unique high fantasy world of Amara. ")]),i("p",[t._v(" Amara is a sword and sorcery realm with carefully crafted lore to uncover, featuring a growing cast of diverse characters of beasts and fast friends. "),i("img",{staticClass:"imageSize floatL",attrs:{src:a("53b9")}}),t._v(" In Amara, there are humans, living among other humanoids scattered across the realm in settlements and villages and unstable camps. At the neck of a prominent peninsula sits "),i("strong",[t._v("Eyien")]),t._v(" (pronounced YEE-in), it’s the city of cities, home to the "),i("em",[t._v("Ember King of Amara, King Rense.")]),t._v(" The title has been held by countless women and men before him. The Ember King's Rule is just and fair, leading Eyien into its immense prosperity. ")]),i("p",[t._v(" Eyien is where "),i("strong",[t._v("“Welcome to Amara”")]),t._v(" begins, "),i("img",{staticClass:"imageSize floatR",attrs:{src:a("8a2e")}}),t._v(" it’s the place to be for security and for power in Amara. Within Eyien resides a group of soldiers and mages known as “The Coterie”. They’re a group sworn to Loyalty under King Rense, and magically bound to the city. The Coterie is tasked with defending and supporting their home. They defend Eyien with impunity, proud to be part of something bigger than themselves. "),i("img",{staticClass:"floatL imageSize",attrs:{src:a("5987")}})]),i("p",[t._v(" Our main character Ydna (played by Andy) is a low ranking member of this Coterie, roped into a secret quest far beyond his intention, along with a young mage woman named Quen. Their quest is rife with world ending consequences and threats. Ydna is a traveling bard a curious drifter, caught up in a flurry of proving grounds quests from his Coterie captain, Orric, the kings emmissary and conduit. "),i("img",{staticClass:"floatR imageSize",attrs:{src:a("caec")}}),t._v(" Above all else Ydna is on a bardic journey to honor his grandfather, hoping to meet exemplary figures and experience all the realm of Amara has to offer. He records most, but not all of his discoveries, in his "),i("em",[t._v("songbook")]),t._v(" hoping to someday become part of the legends he's read about so eagerly. ")]),i("p",[t._v(" Along the way we discover much about Amara and the city of Eyien, "),i("img",{staticClass:"floatL imageSize",attrs:{src:a("7030")}}),t._v(' uncover secrets that threaten the kingdom, and piece together the mysterious forces surrounding this grand city of opportunity and potential in "Welcome to Amara". ')])]),i("section",{staticClass:"floatR signature"},[i("p",[t._v("Thanks for reading,")]),i("h1",[t._v("-Sean & Andy")])])])]),i("section",{staticClass:"podcastSignoff"},[i("h1",[t._v("Season 1 Arrives Mid 2020")]),i("img",{staticClass:"center bigImage",attrs:{src:a("75e8")}}),i("h1",[t._v('"See You in Amara"')])]),i("a",{staticClass:"discordLinkWrap",attrs:{href:"https://discord.gg/82GpmYD"}},[i("section",{staticClass:"discordLink"},[i("section",[i("p",[i("strong",[t._v("Listen to the podcast before it's released to the public")]),t._v(' and help us shape the future of "Welcome to Amara". ')]),i("p",[i("strong",[t._v("Click this box")]),t._v(" to join our growing discord server for early access. ")])]),i("img",{attrs:{src:a("4dfa"),alt:"discord icon - click to join our discord"}})])]),i("footer",{staticClass:"footer"},[i("section",{staticClass:"socialWrap"},[i("a",{attrs:{href:"http://www.twitter.com/misuseofmana",target:"_blank"}},[i("img",{attrs:{src:a("77df"),alt:"twitter icon"}})]),i("a",{attrs:{target:"_blank",href:"http://www.instagram.com/misuseofmana"}},[i("img",{attrs:{src:a("4359"),alt:"instagram icon"}})]),i("a",{attrs:{target:"_blank",href:"mailto:seanyagerart@gmail.com"}},[i("img",{attrs:{src:a("8ae3"),alt:"email icon"}})])])]),i("section",{staticClass:"legal"},[i("section",[t._v(' "Welcome to Amara" is a product of "Misuse of Mana LLC" © | No portion of this website or the content it represents may be reproduced in any manner whatsoever without the express permission from the authors, except in the case of short excerpts used for review. | '),i("a",{attrs:{href:"http://www.seanyager.com",target:"_blank"}},[t._v(" seanyager.com ")]),t._v(" | Site Updated Feb 2020 "),i("br"),i("br"),t._v(" Special thank you to freesound.org user "),i("a",{attrs:{href:"https://freesound.org/people/alanmcki/",target:"_blank"}},[t._v("alanmcki")]),t._v(" and the website "),i("a",{attrs:{href:"https://www.purple-planet.com/",target:"_blank"}},[t._v("purple-planet.com")]),t._v(" for providing audio. ")])]),i("section",{staticClass:"footerRings"},[i("img",{staticClass:"runish",attrs:{src:a("00d0"),alt:"a message from beyond the veil"}}),i("img",{staticClass:"smallRings",attrs:{src:a("7ae8"),alt:"rings that mark a criminal of Eyien"}})])]),i("section",{staticClass:"witchMagic"})]):i("section",{key:"intro",staticClass:"introRings"},[i("img",{staticClass:"rings",attrs:{src:a("7ae8"),alt:""},on:{click:function(e){return e.preventDefault(),t.playSound()}}})])])],1)},o=[],r=(a("f95d"),a("23aa"),a("8393"),a("a804"),a("fc2a"),{name:"welcomeToAmara",title:"Welcome To Amara",components:{},data:function(){return{interaction:!1}},methods:{playSound:function(){this.interaction=!this.interaction;var t=new Audio(a("0f58"));t.play(),this.playMusic()},playMusic:function(){setTimeout((function(){var t=new Audio(a("91d9"));t.loop=!0,t.play()}),5e3)}}}),s=r,c=a("2877"),l=Object(c["a"])(s,n,o,!1,null,null,null),u=l.exports;function p(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var m={created:function(){var t=p(this);t&&(document.title=t)}};i["a"].mixin(m),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(u)}}).$mount("#app")},5987:function(t,e,a){t.exports=a.p+"img/ydnaQuen.aeb6080d.jpg"},7030:function(t,e,a){t.exports=a.p+"img/goblinspink.ec98c5b1.jpg"},"75e8":function(t,e,a){t.exports=a.p+"img/arri.4e39cc9f.png"},"77df":function(t,e,a){t.exports=a.p+"img/twitter.d75ff2cc.png"},"7ae8":function(t,e,a){t.exports=a.p+"img/rings.1b618d51.gif"},8393:function(t,e,a){},"8a2e":function(t,e,a){t.exports=a.p+"img/banditspink.861523e4.jpg"},"8ae3":function(t,e,a){t.exports=a.p+"img/email.7119bc54.png"},"91d9":function(t,e,a){t.exports=a.p+"media/introspection.3a293555.mp3"},a804:function(t,e,a){},caec:function(t,e,a){t.exports=a.p+"img/cursepink.002a298c.jpg"},f95d:function(t,e,a){},fc2a:function(t,e,a){}});
//# sourceMappingURL=app.aedfedbd.js.map