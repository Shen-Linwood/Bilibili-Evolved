!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/gift-box"]=t():n["live/gift-box"]=t()}(self,(function(){return function(){var n={481:function(n,t,e){var r=e(645)((function(n){return n[1]}));r.push([n.id,".full-win-gift-btn-wrapper.full-win-gift-btn-wrapper {\n  position: relative;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap {\n  right: -28px;\n  bottom: calc(100% + 3px);\n  color: #666;\n  font-size: 12px;\n  line-height: 1.4;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap .text {\n  margin: auto;\n  padding: auto;\n  color: inherit;\n  cursor: inherit;\n  line-height: inherit;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap .popup::before, .full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap .popup::after {\n  left: auto;\n  right: calc(1em + 33px);\n  transform: translateX(50%);\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package {\n  margin: auto;\n  width: auto;\n  height: auto;\n  color: inherit;\n  fill: inherit;\n  background: inherit !important;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package .bag-icon {\n  display: none;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package span {\n  font-size: inherit;\n  line-height: 36px;\n  padding: 0 6px;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package span:hover {\n  color: #fff;\n}",""]),n.exports=r},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(n,e,r){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var l=this[o][0];null!=l&&(i[l]=!0)}for(var a=0;a<n.length;a++){var u=[].concat(n[a]);r&&i[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},550:function(n,t,e){var r=e(481);r&&r.__esModule&&(r=r.default),n.exports="string"==typeof r?r:r.toString()}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)};var r={};return function(){"use strict";e.d(r,{component:function(){return m}});var n=coreApis.componentApis.live.liveControlBar,t=coreApis.componentApis.define,i=coreApis.spinQuery,o=coreApis.style,l=coreApis.utils.urls,a=e(550),u=e.n(a);const f="player-full-win",c="full-win-gift-btn-wrapper",p="liveGiftBox";let s=null,d=null,g=null;function w(){return document.body.classList.contains(f)}function b(n,t){const e=dq(n,".right-area");if(e){const n=document.createElement("div");n.className=c,n.appendChild(t),e.appendChild(n)}else console.warn("[liveGiftBox] .right-area could not be found in control bar")}function v(n,t){return function(n){function t(n){const t=w();return t===n.oldValue.split(" ").includes(f)?null:t}const e=new MutationObserver((e=>{for(const r of e){const e=t(r);null!==e&&n(e)}}));return null==e||e.observe(document.body,{attributes:!0,attributeFilter:["class"],attributeOldValue:!0}),()=>e.disconnect()}((e=>{e?function(n){const t=dq(".control-area");t&&b(t,n)}(n):function(n,t){t.appendChild(n)}(n,t)}))}async function h(){(0,o.addStyle)(u(),p);const n=await async function(){const n=await(0,i.select)(".z-gift-package",{maxRetry:15,queryInterval:200});return n||console.warn("[liveGiftBox] the parent element of gift button not found"),n}();s=null==n?void 0:n.children[0],n&&s&&(d=v(s,n),g=function(n){const t=dq("#live-player");if(!t)return console.warn("[liveGiftBox] live player not found"),null;function e(){dq(".full-win-gift-btn-wrapper .wrap")&&n.click()}return t.addEventListener("mouseleave",e),()=>t.removeEventListener("mouseleave",e)}(s))}const m=(0,t.defineComponentMetadata)({name:p,displayName:"直播全屏包裹",description:{"zh-CN":"在直播的网页全屏(不能是全屏)模式下往控制栏添加包裹按钮."},urlInclude:l.liveUrls,tags:[componentsTags.live],entry:function(){(0,n.waitForControlBar)({callback:function(n){const t=w();s&&t&&b(n,s)}}),h()},reload:h,unload:function(){var n,t;null===(n=g)||void 0===n||n.call(null),g=null,null===(t=d)||void 0===t||t.call(null),d=null,s=null,(0,o.removeStyle)(p)},commitHash:"19e1c4bf5755cfb0fa5ffbe4c6a67b0e419d5352",coreVersion:"2.4.1"})}(),r=r.component}()}));