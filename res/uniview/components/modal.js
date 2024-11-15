/*! Cortona3D Solo Universal Viewer bundle - modal, Copyright (c) 2015-2023 Paragraphics Ltd. (http://www.cortona3d.com/) */
define((function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=26)}({0:function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:h(f,e),references:1}),r.push(u)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,v=0;function h(n,e){var t,r,o;if(e.singleton){var i=v++;t=m||(m=l(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(n,e),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},1:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},26:function(n,e,t){var r;void 0===(r=function(n,e,r){t(27),r.exports=function(n,e,t){var r=this,o=e.i18n||{close:"OK"},i=e.hideDismissButton?"":n.button({classList:"role-close",onclick:l},o.close),a=e.hideDismissButton&&!e.footerContent?"":n.container(".skin-modal-footer",e.footerContent,i),c=n.container(".skin-modal.cortona3dsolo-popover",n.create(".skin-modal-panel",n.container(".skin-modal-title",e.title||""),n.container(".skin-modal-content",e.content||""),a));if(!e.disableAutoDismiss&&e.hideDismissButton){var s=function(n){c.removeEventListener("mousedown",s),l()};c.addEventListener("mousedown",s)}function l(){c&&(r.remove(),r.emit("closed"),t.dispatch("uniview.component.modal.closed",r),c=null)}n.once("modal.close",(function(){l(),r.removeListener("close",l)})),this.once("close",(function(){l(),n.removeListener("modal.close",l)}));var u=a&&a.querySelector(".role-close")||i;return u&&(c.setAttribute("tabindex","-1"),c.addEventListener("focus",(function(){u.focus()}))),c.addEventListener("keydown",(function(n){switch(n.keyCode){case 27:r.emit("close"),n.preventDefault()}n.stopPropagation()})),this.exports(c)}}.call(e,t,e,n))||(n.exports=r)},27:function(n,e,t){var r=t(0),o=t(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},28:function(n,e,t){(e=t(1)(!1)).push([n.i,".skin-modal {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,.33);\r\n    z-index: 1000;\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.skin-modal:focus {\r\n    outline: none;\r\n}\r\n\r\n.skin-modal-panel {\r\n    position: relative;\r\n    box-shadow: 2px 4px 28px rgba(0,0,0,0.25), 2px 4px 10px rgba(0,0,0,0.22);\r\n    background-color: #FFF;\r\n    color: #000;\r\n    min-width: 300px;\r\n    max-width: 80%;\r\n    max-height: 90%;\r\n    padding: 0;\r\n    flex-direction: column;\r\n    display: flex;\r\n}\r\n\r\n.skin-modal-title {\r\n   font-size: 1.2em;\r\n   font-weight: bold;\r\n   padding: .4em .5em;\r\n   background-color: #ccc; \r\n   color: #000;\r\n   min-height: .5em;\r\n   flex-shrink: 0;\r\n}\r\n\r\n.skin-modal.error pre {\r\n    font-family: inherit;\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.skin-modal.error .skin-modal-title,\r\n.skin-modal.warning .skin-modal-title {\r\n    background-color: #bd2024;\r\n    color: #fff;\r\n}\r\n\r\n.skin-modal.caution .skin-modal-title {\r\n    background-color: #ff7900;\r\n    color: #000;\r\n}\r\n\r\n.skin-modal.note .skin-modal-title {\r\n    background-color: #004488;\r\n    color: #fff;\r\n}\r\n\r\n.skin-modal.note:before,\r\n.skin-modal.caution:before,\r\n.skin-modal.error:before {\r\n    display: none;\r\n}\r\n\r\n.skin-modal-content.skin-container {\r\n    display: block;\r\n    padding: 1em 2em;\r\n    overflow-y: auto;\r\n}\r\n\r\n.skin-modal-content .accent {\r\n    font-weight: bold;\r\n}\r\n\r\n.skin-modal-footer {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    padding: .5em;\r\n    min-height: fit-content;\r\n}\r\n\r\n",""]),n.exports=e}})}));