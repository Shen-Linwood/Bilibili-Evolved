!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/image-exporter"]=t():e["utils/image-exporter"]=t()}(globalThis,(()=>(()=>{var e,t,o={727:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f});var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("DefaultWidget",{attrs:{name:"导出图片",icon:"mdi-export",disabled:e.busy},on:{click:function(t){return e.exportImages()}}})};n._withStripped=!0;var r=o(375),s=o(444);const i=coreApis.settings;var a=o(391),c=o(605);const l=coreApis.utils.log;var u=o(674);const d=coreApis.ui;var p=function(e,t,o,n,r,s,i,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=o,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}(Vue.extend({components:{DefaultWidget:d.DefaultWidget},data:()=>({busy:!1}),methods:{async exportImages(){const{columnFormat:e}=(0,i.getComponentSettings)("imageExporter").options,t=a.Toast.info("下载中...","导出图片");this.busy=!0;try{const o=[],n=dq(".banner-image .card-image__image"),i=(0,c.retrieveImageUrl)(n);i&&(o.push({...i,name:`${(0,u.formatTitle)(e,!1,{n:"1"})}${i.extension}`}),console.log(n,i,o));if(dqa('.article-content .img-box img:not([class*="cut-off-"])').forEach((t=>{const n=(0,c.retrieveImageUrl)(t);n&&o.push({...n,name:`${(0,u.formatTitle)(e,!1,{n:(o.length+1).toString()})}${n.extension}`})})),0===o.length)return void a.Toast.info("此页面没有检测到任何可导出图片.","图片导出");let l=0;const d=await Promise.all(o.map((async e=>{let{url:n}=e;const s=await(0,r.getBlob)(n);return l++,t.message=`下载中... (${l}/${o.length})`,s}))),p=new s.DownloadPackage;d.forEach(((e,t)=>p.add(o[t].name,e))),await p.emit(`${(0,u.formatTitle)(e,!1,{n:""})}.zip`)}catch(e){(0,l.logError)(e)}finally{this.busy=!1,t.close()}}}}),n,[],!1,null,null,null);const f=p.exports},79:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=79,e.exports=t},87:e=>{"use strict";e.exports="可以批量导出某个地方的图片, 目前支持动态和专栏.\n\n动态文件名变量:\n- `user`: 用户名\n- `originalUser`: 被转发用户名, 如果不是转发类型的动态则等于 `user`\n- `id`: 动态 ID\n- `n`: 第 n 张图\n\n专栏文件名变量:\n- `title`: 专栏标题\n- `n`: 第 n 张图"},375:e=>{"use strict";e.exports=coreApis.ajax},444:e=>{"use strict";e.exports=coreApis.download},391:e=>{"use strict";e.exports=coreApis.toast},674:e=>{"use strict";e.exports=coreApis.utils.title},605:e=>{"use strict";e.exports=coreApis.utils}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return o[e](s,s.exports,r),s.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var s=Object.create(null);r.r(s);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,r.d(s,i),s},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";r.d(s,{component:()=>d});const e=coreApis.componentApis.define;var t=r(605);const o=coreApis.utils.urls,n=coreApis.componentApis.feeds.api;var i=r(375),a=r(444),c=r(391),l=r(674);const u=(0,e.defineOptionsMetadata)({columnFormat:{defaultValue:"[title][ - n]",displayName:"专栏图片命名格式"},feedFormat:{defaultValue:"[user][ - id][ - n]",displayName:"动态图片命名格式"}}),d=(0,e.defineComponentMetadata)({name:"imageExporter",displayName:"图片批量导出",tags:[componentsTags.feeds,componentsTags.utils],entry:async e=>{await(async e=>{let{settings:{options:r}}=e;if(!o.feedsUrls.some((e=>(0,t.matchUrlPattern)(e))))return;(0,n.forEachFeedsCard)({added:e=>{(0,n.addMenuItem)(e,{className:"image-export",text:"导出图片",action:async()=>{const o=[];if(dqa(e.element,".main-content .img-content, .bili-album__preview__picture__img").forEach((e=>{const n=(0,t.retrieveImageUrl)(e);n&&!o.some((e=>{let{url:t}=e;return t===n.url}))&&o.push(n)})),0===o.length)return void c.Toast.info("此条动态没有检测到任何图片.","导出图片");const n=c.Toast.info("下载中...","导出图片");let s=0;const u=await Promise.all(o.map((async e=>{let{url:t}=e;const r=await(0,i.getBlob)(t);return s++,n.message=`下载中... (${s}/${o.length})`,r}))),d=new a.DownloadPackage,{feedFormat:p}=r;u.forEach(((t,n)=>{const r={user:e.username,id:e.id,originalUser:e.repostUsername??e.username,n:(n+1).toString()};d.add(`${(0,l.formatTitle)(p,!1,r)}${o[n].extension}`,t)})),n.close();const f={user:e.username,id:e.id,originalUser:e.repostUsername??e.username,n:""};await d.emit(`${(0,l.formatTitle)(p,!1,f)}.zip`)}})}})})(e)},widget:{condition:()=>o.columnUrls.some((e=>(0,t.matchUrlPattern)(e))),component:()=>Promise.resolve().then(r.bind(r,727)).then((e=>e.default))},urlInclude:[...o.feedsUrls,...o.columnUrls],options:u,commitHash:"2810c1ab94a3f2a69962b96f93e25e991bc14b6f",coreVersion:"2.8.7",description:(()=>{const e=r(79);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,87,17)).then((e=>e.default))}})()})})(),s=s.component})()));