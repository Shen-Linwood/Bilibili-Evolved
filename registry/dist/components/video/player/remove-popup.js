!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/remove-popup"]=o():e["video/player/remove-popup"]=o()}(self,(function(){return function(){var e,o,p={926:function(e,o,p){var r=p(645)((function(e){return e[1]}));r.push([e.id,"body.remove-player-popup-combo-likes .bilibili-player-video-popup-three,\nbody.remove-player-popup-combo-likes .bilibili-player-video-popup-three-animate,\nbody.remove-player-popup-combo-likes .bilibili-player-video-popup-follow,\nbody.remove-player-popup-combo-likes .bilibili-player-video-popup-there-cyc,\nbody.remove-player-popup-combo-likes .bpx-player-popup-three,\nbody.remove-player-popup-combo-likes .bpx-player-popup-animate,\nbody.remove-player-popup-combo-likes .bpx-player-popup-follow,\nbody.remove-player-popup-combo-likes .bpx-player-popup-cyc {\n  display: none !important;\n}\nbody.remove-player-popup-related-videos .bilibili-player-video-link,\nbody.remove-player-popup-related-videos .bilibili-player-link,\nbody.remove-player-popup-related-videos .bpx-player-link {\n  display: none !important;\n}\nbody.remove-player-popup-votes .bilibili-player-video-popup-vote,\nbody.remove-player-popup-votes .bpx-player-popup-dm-close,\nbody.remove-player-popup-votes .bpx-player-popup-dm-shrink,\nbody.remove-player-popup-votes .bpx-player-popup-vote {\n  display: none !important;\n}\nbody.remove-player-popup-rates .bilibili-player-score,\nbody.remove-player-popup-rates .bpx-player-popup-dm-close,\nbody.remove-player-popup-rates .bpx-player-score-summary-wrap,\nbody.remove-player-popup-rates .bpx-player-score {\n  display: none !important;\n}\nbody.remove-player-popup-reservations .bpx-player-reserve {\n  display: none !important;\n}",""]),e.exports=r},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var p=e(o);return o[2]?"@media ".concat(o[2]," {").concat(p,"}"):p})).join("")},
// eslint-disable-next-line func-names
o.i=function(e,p,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var t={};if(r)for(var n=0;n<this.length;n++){
// eslint-disable-next-line prefer-destructuring
var a=this[n][0];null!=a&&(t[a]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);r&&t[l[0]]||(p&&(l[2]?l[2]="".concat(p," and ").concat(l[2]):l[2]=p),o.push(l))}},o}},695:function(e,o,p){var r=p(926);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={id:e,exports:{}};return p[e](n,n.exports,t),n.exports}o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},t.t=function(p,r){if(1&r&&(p=this(p)),8&r)return p;if("object"==typeof p&&p){if(4&r&&p.__esModule)return p;if(16&r&&"function"==typeof p.then)return p}var n=Object.create(null);t.r(n);var a={};e=e||[null,o({}),o([]),o(o)];for(var i=2&r&&p;"object"==typeof i&&!~e.indexOf(i);i=o(i))Object.getOwnPropertyNames(i).forEach((function(e){a[e]=function(){return p[e]}}));return a.default=function(){return p},t.d(n,a),n},t.d=function(e,o){for(var p in o)t.o(o,p)&&!t.o(e,p)&&Object.defineProperty(e,p,{enumerable:!0,get:o[p]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){"use strict";t.d(n,{component:function(){return r}});var e=coreApis.settings,o=coreApis.utils.urls;const p="removePlayerPopup",r={name:p,entry:o=>{let{settings:p,metadata:r}=o;const{options:t}=p,{kebabCase:n}=lodash;Object.keys(t).forEach((o=>{(0,e.addComponentListener)(`${r.name}.${o}`,(e=>{document.body.classList.toggle(`${n(r.name)}-${n(o)}`,e)}),!0)}))},instantStyles:[{name:p,style:()=>Promise.resolve().then(t.t.bind(t,695,23))}],displayName:"删除视频弹窗",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"删除视频播放器中出现的各种弹窗, 类别可在选项中分别选择."},urlInclude:o.playerUrls,options:{votes:{defaultValue:!1,displayName:"投票"},relatedVideos:{defaultValue:!0,displayName:"关联视频"},comboLikes:{defaultValue:!0,displayName:"关注/三连"},rates:{defaultValue:!0,displayName:"评分"},reservations:{defaultValue:!0,displayName:"预告"}},commitHash:"19e1c4bf5755cfb0fa5ffbe4c6a67b0e419d5352",coreVersion:"2.4.1"}}(),n=n.component}()}));