!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["video/full-description"]=n():e["video/full-description"]=n()}(self,(function(){return function(){var e={629:function(e,n,t){var o=t(645)((function(e){return e[1]}));o.push([e.id,".video-desc .info,\n.video-desc .desc-info,\n.video-desc-v1 .desc-info,\n.play-up-info .play-up-self {\n  height: auto !important;\n}\n\n.video-desc .btn,\n.video-desc .toggle-btn,\n.video-desc-v1 .toggle-btn,\n.play-up-info .play-up-self-btn {\n  display: none !important;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var s=this[i][0];null!=s&&(r[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},524:function(e,n,t){var o=t(629);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)};var o={};return function(){"use strict";t.d(o,{component:function(){return a}});var e=coreApis.utils.urls,n=coreApis.observer,r=coreApis.spinQuery,i=coreApis.style,s=t(524),c=t.n(s);const u="fullVideoDescription",d=()=>{(0,i.addStyle)(c(),u),(0,n.videoChange)((async()=>{const e=await(0,r.select)(".video-desc, .video-desc-v1");if(!e)return;const n=await(0,r.sq)((()=>dq(e,'[report-id="abstract_spread"], .toggle-btn')),(e=>"none"!==e.style.display));null==n||n.click()}))},a={name:u,entry:d,reload:d,unload:()=>{(0,i.removeStyle)(u)},displayName:"展开视频简介",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"总是展开完整的视频简介."},urlInclude:e.videoAndBangumiUrls,commitHash:"124fff7f99d2437df482016133ef933bd1d837b3",coreVersion:"2.4.0"}}(),o=o.component}()}));