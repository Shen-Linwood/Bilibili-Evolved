!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download"]=t():e["video/download"]=t()}(globalThis,(()=>(()=>{var e,t,n={979:(e,t,n)=>{var i=n(355)((function(e){return e[1]}));i.push([e.id,".download-video-panel {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  font-size: 12px;\n  padding: 6px;\n  top: 100px;\n  left: 50%;\n  transform: translateX(-50%) scale(0.95);\n  transition: 0.2s ease-out;\n  z-index: 1000;\n  width: 320px;\n  height: calc(100vh - 200px);\n  display: flex;\n  flex-direction: column;\n}\nbody.dark .download-video-panel {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .download-video-panel {\n  background-color: #282828;\n  color: #eee;\n}\n.download-video-panel.open {\n  transform: translateX(-50%);\n}\n.download-video-panel .be-textbox,\n.download-video-panel .be-textarea {\n  flex-grow: 1;\n}\n.download-video-panel-header {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  border-bottom: 1px solid rgba(136, 136, 136, 0.1333333333);\n  padding: 6px 0;\n  margin: 0 6px;\n}\n.download-video-panel-header .title {\n  font-size: 16px;\n  font-weight: bold;\n  flex-grow: 1;\n  margin: 0 8px;\n}\n.download-video-panel-header .be-button {\n  padding: 4px;\n}\n.download-video-panel-content {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 0;\n  flex: 1 0 0;\n  padding: 12px 6px;\n  align-items: flex-start;\n}\n.download-video-panel-content::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.download-video-panel-content > :not(:first-child) {\n  margin-top: 12px;\n}\n.download-video-panel .download-video-config-item {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.download-video-panel .download-video-config-item .download-video-config-title {\n  margin-right: 8px;\n}\n.download-video-panel .download-video-config-item.error {\n  color: #e57373;\n}\n.download-video-panel .download-video-config-section {\n  align-self: stretch;\n}\n.download-video-panel .download-video-config-description {\n  color: rgba(136, 136, 136, 0.8666666667);\n  margin-top: 4px;\n}\n.download-video-panel .download-video-config-description a {\n  color: var(--theme-color-70);\n}\n.download-video-panel-footer {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  border-top: 1px solid rgba(136, 136, 136, 0.1333333333);\n  padding: 6px 0;\n  margin: 0 6px;\n  justify-content: center;\n}\n.download-video-panel .run-download {\n  font-size: 13px;\n  padding: 6px 12px;\n}",""]),e.exports=i},424:(e,t,n)=>{var i=n(355)((function(e){return e[1]}));i.push([e.id,".episodes-picker-header {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.episodes-picker-checked-ratio {\n  flex-grow: 1;\n  margin-left: 4px;\n}\n.episodes-picker-actions {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.episodes-picker-actions .be-button {\n  padding: 4px;\n}\n.episodes-picker-actions .be-button.invert-selection .be-icon {\n  font-size: 14px;\n}\n.episodes-picker-actions .be-button.select-all .be-icon, .episodes-picker-actions .be-button.deselect-all .be-icon {\n  transform: translateY(1px);\n}\n.episodes-picker-items {\n  max-height: 400px;\n  overflow: auto;\n}\n.episodes-picker-items:not(:empty) {\n  margin-top: 4px;\n  border: 1px solid rgba(136, 136, 136, 0.2666666667);\n  border-radius: 6px;\n}\n.episodes-picker-items .be-check-box {\n  padding: 2px 6px;\n}\n.episodes-picker-items .episode-duration {\n  margin-right: 4px;\n  text-align: right;\n  flex: 1 1 0;\n  opacity: 0.5;\n}",""]),e.exports=i},54:(e,t,n)=>{var i=n(355)((function(e){return e[1]}));i.push([e.id,".single-video-info.download-video-config-section {\n  position: relative;\n  height: 125px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.single-video-info.download-video-config-section img {\n  height: 125px;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.single-video-info.download-video-config-section img.shadow {\n  position: absolute;\n  filter: blur(8px) brightness(0.8);\n  transform: scaleY(0.95) translateY(4px);\n  z-index: -1;\n  opacity: 0.3;\n}",""]),e.exports=i},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var s=this[a][0];null!=s&&(o[s]=!0)}for(var r=0;r<e.length;r++){var d=[].concat(e[r]);i&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},648:(e,t,n)=>{"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],l=n[d]||0,c="".concat(d," ").concat(l);n[d]=l+1;var p=r(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(s[p].references++,s[p].updater(u)):s.push({identifier:c,updater:v(u,t),references:1}),i.push(c)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,p=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function f(e,t,n){var i=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,m=0;function v(e,t){var n,i,o;if(t.singleton){var a=m++;n=h||(h=l(t)),i=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else n=l(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=r(n[i]);s[o].references--}for(var a=d(e,t),l=0;l<n.length;l++){var c=r(n[l]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}n=a}}}},591:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>de});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VPopup",{staticClass:"download-video-panel",attrs:{fixed:"","trigger-element":e.triggerElement},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("div",{staticClass:"download-video-panel-header"},[n("VIcon",{attrs:{icon:"mdi-download"}}),e._v(" "),n("div",{staticClass:"title"},[e._v("下载视频")]),e._v(" "),n("VButton",{attrs:{type:"transparent",title:"关闭"},on:{click:function(t){e.open=!1}}},[n("VIcon",{attrs:{icon:"mdi-close",size:20}})],1)],1),e._v(" "),n("div",{staticClass:"download-video-panel-content"},[e.selectedInput?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("输入源:")]),e._v(" "),n("VDropdown",{attrs:{items:e.inputs},model:{value:e.selectedInput,callback:function(t){e.selectedInput=t},expression:"selectedInput"}})],1):e._e(),e._v(" "),0===e.inputs.length?n("div",{staticClass:"download-video-config-item error"},[e._v("\n      没有匹配的输入源, 请确保安装了适合此页面的插件.\n    ")]):e._e(),e._v(" "),e.selectedInput&&e.selectedInput.component?n(e.selectedInput.component,{ref:"inputOptions",tag:"component"}):e._e(),e._v(" "),e.selectedApi?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("格式:")]),e._v(" "),n("VDropdown",{attrs:{items:e.apis},model:{value:e.selectedApi,callback:function(t){e.selectedApi=t},expression:"selectedApi"}})],1):e._e(),e._v(" "),e.selectedApi&&e.selectedApi.description?n("div",{staticClass:"download-video-config-description",domProps:{innerHTML:e._s(e.selectedApi.description)}}):e._e(),e._v(" "),e.selectedQuality?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("清晰度:")]),e._v(" "),n("VDropdown",{attrs:{items:e.filteredQualities},on:{change:function(t){return e.saveSelectedQuality()}},model:{value:e.selectedQuality,callback:function(t){e.selectedQuality=t},expression:"selectedQuality"}})],1):e._e(),e._v(" "),!e.testData.multiple&&e.selectedQuality?[e.testData.videoInfo?n("div",{staticClass:"download-video-config-description"},[e._v("\n        预计大小: "+e._s(e.formatFileSize(e.testData.videoInfo.totalSize))+"\n      ")]):e._e(),e._v(" "),null===e.testData.videoInfo?n("div",{staticClass:"download-video-config-description"},[e._v("\n        正在计算大小\n      ")]):e._e()]:e._e(),e._v(" "),n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("使用备用下载地址:")]),e._v(" "),n("SwitchBox",{model:{value:e.useBackupUrls,callback:function(t){e.useBackupUrls=t},expression:"useBackupUrls"}})],1),e._v(" "),e._l(e.assetsWithOptions,(function(e){return n(e.component,{key:e.name,ref:"assetsOptions",refInFor:!0,tag:"component",attrs:{name:e.name}})})),e._v(" "),e.selectedOutput?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("输出方式:")]),e._v(" "),n("VDropdown",{attrs:{items:e.outputs},model:{value:e.selectedOutput,callback:function(t){e.selectedOutput=t},expression:"selectedOutput"}})],1):e._e(),e._v(" "),e.selectedOutput&&e.selectedOutput.description?n("div",{staticClass:"download-video-config-description",domProps:{innerHTML:e._s(e.selectedOutput.description)}}):e._e(),e._v(" "),e.selectedOutput&&e.selectedOutput.component?n(e.selectedOutput.component,{ref:"outputOptions",tag:"component"}):e._e()],2),e._v(" "),n("div",{staticClass:"download-video-panel-footer"},[n("VButton",{staticClass:"run-download",attrs:{type:"primary",disabled:!e.canStartDownload},on:{click:function(t){return e.startDownload(e.$refs.outputOptions,e.selectedOutput)}}},[e._v("\n      开始\n    ")])],1)])};i._withStripped=!0;const o=coreApis.settings,a=coreApis.utils;var s=n(414);const r=coreApis.utils.formatters,d=coreApis.ui,l=coreApis.pluginApis.data,c=coreApis.componentApis.video.videoQuality,p=coreApis.toast,u=coreApis.utils.title,f=coreApis.ajax,h=coreApis.utils.urls;var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"episodes-picker download-video-config-section"},[n("div",{staticClass:"episodes-picker-header"},[n("div",{staticClass:"episodes-picker-title"},[e._v("选集:")]),e._v(" "),n("div",{staticClass:"episodes-picker-checked-ratio"},[e._v("\n      "+e._s(e.checkedRatio)+"\n    ")]),e._v(" "),n("div",{staticClass:"episodes-picker-actions"},[n("VButton",{staticClass:"select-all",attrs:{title:"全选",type:"transparent"},on:{click:function(t){e.forEachItem((function(e){return e.isChecked=!0}))}}},[n("VIcon",{attrs:{size:16,icon:"mdi-checkbox-multiple-marked-circle"}})],1),e._v(" "),n("VButton",{staticClass:"deselect-all",attrs:{title:"全不选",type:"transparent"},on:{click:function(t){e.forEachItem((function(e){return e.isChecked=!1}))}}},[n("VIcon",{attrs:{size:16,icon:"mdi-checkbox-multiple-blank-circle-outline"}})],1),e._v(" "),n("VButton",{staticClass:"invert-selection",attrs:{title:"反选",type:"transparent"},on:{click:function(t){e.forEachItem((function(e){return e.isChecked=!e.isChecked}))}}},[n("VIcon",{attrs:{size:16,icon:"mdi-circle-slice-4"}})],1)],1)]),e._v(" "),n("div",{staticClass:"episodes-picker-items"},e._l(e.episodeItems,(function(t,i){return n("div",{key:t.key,staticClass:"episodes-picker-item"},[n("CheckBox",{attrs:{"icon-position":"left","data-aid":t.inputItem.aid,"data-cid":t.inputItem.cid,"data-bvid":t.inputItem.bvid},nativeOn:{click:function(n){return e.shiftSelect(n,t,i)}},model:{value:t.isChecked,callback:function(n){e.$set(t,"isChecked",n)},expression:"item.isChecked"}},[n("span",{staticClass:"episode-title"},[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),t.durationText?n("span",{staticClass:"episode-duration"},[e._v("\n          "+e._s(t.durationText)+"\n        ")]):e._e()])],1)})),0)])};m._withStripped=!0;const v=Vue.extend({components:{VButton:d.VButton,VIcon:d.VIcon,CheckBox:d.CheckBox},props:{api:{type:Function,required:!0}},data:()=>({episodeItems:[],maxCheckedItems:32,lastCheckedEpisodeIndex:-1}),computed:{checkedRatio(){return`(${this.episodeItems.filter((e=>e.isChecked)).length}/${this.episodeItems.length})`},inputItems(){return this.episodeItems.map((e=>e.inputItem))},checkedInputItems(){return this.episodeItems.filter((e=>e.isChecked)).map((e=>e.inputItem))}},created(){this.getEpisodeItems()},methods:{shiftSelect(e,t,n){e.shiftKey&&-1!==this.lastCheckedEpisodeIndex?e.shiftKey&&-1!==this.lastCheckedEpisodeIndex&&(this.episodeItems.slice(Math.min(this.lastCheckedEpisodeIndex,n)+1,Math.max(this.lastCheckedEpisodeIndex,n)).forEach((e=>{e.isChecked=!e.isChecked})),this.lastCheckedEpisodeIndex=n,e.preventDefault()):this.lastCheckedEpisodeIndex=n},forEachItem(e){this.episodeItems.forEach(e)},async getEpisodeItems(){this.episodeItems.length>0||(this.episodeItems=await this.api(this))}}});var g=n(648),w=n.n(g),b=n(424),y=n.n(b),x={insert:"head",singleton:!1};w()(y(),x);y().locals;var _=n(769),k=(0,_.Z)(v,m,[],!1,null,null,null);k.options.__file="registry/lib/components/video/download/inputs/EpisodesPicker.vue";const I=k.exports,C=e=>Vue.extend({computed:{checkedInputItems(){return this.$refs.picker.checkedInputItems}},render:t=>t(I,{props:{api:e},ref:"picker"})}),A={name:"bangumi.batch",displayName:"当前番剧 (多P)",match:h.bangumiUrls,batch:!0,getInputs:async e=>e?.checkedInputItems??[],component:async()=>C((async e=>{const t=document.querySelector("meta[property='og:url']");if(null===t)return(0,s.logError)("获取番剧数据失败: 无法找到 Season ID"),[];const n=t.getAttribute("content")?.match(/play\/ss(\d+)/)?.[1];if(void 0===n)return(0,s.logError)("获取番剧数据失败: 无法解析 Season ID"),[];const i=await(0,f.getJson)(`https://api.bilibili.com/pgc/web/season/section?season_id=${n}`);if(0!==i.code)return(0,s.logError)(`获取番剧数据失败: 无法获取番剧集数列表, message=${i.message}`),[];const a=i.result.main_section.episodes;return a.map(((t,n)=>{const i=t.long_title?t.title:(n+1).toString(),s=t.long_title?t.long_title:t.title;return{key:t.cid,title:`${i} - ${s}`,isChecked:n<e.maxCheckedItems,inputItem:{aid:t.aid,cid:t.cid,title:(0,u.formatTitle)((0,o.getGeneralSettings)().batchFilenameFormat,!1,{ep:s,cid:t.cid,aid:t.aid,n:(0,r.formatNumber)(parseFloat(i),a.length)??i}),allowQualityDrop:!0}}}))}))},V={name:"video.batch",displayName:"当前视频 (多P)",match:h.videoUrls,batch:!0,getInputs:async e=>e?.checkedInputItems??[],component:async()=>C((async e=>{const{aid:t}=unsafeWindow,n=`https://api.bilibili.com/x/web-interface/view?aid=${t}`,i=await(0,f.getJsonWithCredentials)(n);if(0!==i.code)return(0,s.logError)(`获取视频选集列表失败, message = ${i.message}`),[];const{pages:a}=i.data;return void 0===a?((0,s.logError)("获取视频选集列表失败, 没有找到选集信息."),[]):a.map(((n,i)=>({key:n.cid,title:`P${n.page} ${n.part}`,isChecked:i<e.maxCheckedItems,durationText:(0,r.formatDuration)(n.duration),inputItem:{allowQualityDrop:!0,title:(0,u.formatTitle)((0,o.getGeneralSettings)().batchFilenameFormat,!1,{cid:n.cid,n:(0,r.formatNumber)(n.page,a.length),ep:n.part}),cid:n.cid,aid:t}})))}))},S={name:"video",displayName:"当前视频",match:h.videoUrls,getInputs:async()=>[{aid:unsafeWindow.aid,cid:unsafeWindow.cid,title:(0,u.getFriendlyTitle)(!0)}],component:()=>Promise.resolve().then(n.bind(n,172)).then((e=>e.default))},E=coreApis.utils.sort,D=(e,t)=>{e.quality&&t.currentQuality.value!==e.quality.value&&(e.allowQualityDrop?console.warn(`'${e.title}' 不支持选择的清晰度${e.quality.displayName}, 已降级为${t.currentQuality.displayName}`):(e=>{if(c.vipRequiredQualities.find((t=>t.value===e)))throw new Error("您选择的清晰度需要大会员, 请更改清晰度后重试.");if(c.loginRequiredQualities.find((t=>t.value===e)))throw new Error("您选择的清晰度需要先登录.");throw new Error("获取下载链接失败, 请尝试更换清晰度或更换格式.")})(e.quality.value))},O=coreApis.download;function $(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class U{constructor(e){$(this,"input",void 0),$(this,"fragments",void 0),$(this,"qualities",void 0),$(this,"currentQuality",void 0),$(this,"jsonData",void 0),Object.assign(this,e)}get totalSize(){return lodash.sumBy(this.fragments,(e=>e.size))}get totalLength(){return lodash.sumBy(this.fragments,(e=>e.length))}get titledFragments(){return this.fragments.map(((e,t)=>{const n=this.fragments.filter((t=>t.extension===e.extension)).length>1?` - ${(0,r.formatNumber)(t+1,this.fragments.length)}`:"";return{...e,title:`${this.input.title}${n}${e.extension}`}}))}}class j{constructor(e){this.infos=e,$(this,"inputs",[]),$(this,"extraAssets",[]),this.inputs=e.map((e=>e.input))}get isSingleVideo(){return this.inputs.length<2}async downloadExtraAssets(){console.log("[downloadExtraAssets]",this.extraAssets);const e=`${(0,u.getFriendlyTitle)(!1)}.zip`;await new O.DownloadPackage(this.extraAssets).emit(e)}}const T=e=>`https://api.bilibili.com/x/player/playurl?${e}`,q=e=>`https://api.bilibili.com/pgc/player/web/playurl?${e}`,P={video:".mp4",audio:".m4a",flacAudio:".flac"};let Q;!function(e){e.Avc="AVC/H.264",e.Hevc="HEVC/H.265",e.Av1="AV1"}(Q||(Q={}));const N=e=>({url:e.downloadUrl,backupUrls:e.backupUrls,length:e.duration,size:Math.trunc(e.bandWidth*e.duration/8),extension:P[e.type]??".m4s"}),B=e=>{const{videoDashes:t,audioDashes:n,videoCodec:i}=e,o=[];if(0!==t.length){const e=e=>e.videoCodec===i;if(t.some(e)){const n=t.filter(e).sort((0,E.ascendingSort)((e=>e.bandWidth)))[0];o.push(N(n))}else o.push(N(t.sort((0,E.ascendingSort)((e=>e.bandWidth)))[0]))}if(0!==n.length){const e=n.sort((0,E.descendingSort)((e=>e.bandWidth)))[0];o.push(N(e))}return o},z=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{codec:n=Q.Avc,filters:i}=t,o={video:()=>!0,audio:()=>!0,...i},{aid:s,cid:r,quality:d}=e,l={avid:s,cid:r,qn:d?.value??"",otype:"json",fourk:1,fnver:0,fnval:4048},p=h.bangumiUrls.some((e=>(0,a.matchUrlPattern)(e))),u=p?q((0,a.formData)(l)):T((0,a.formData)(l)),m=await(0,f.bilibiliApi)((0,f.getJsonWithCredentials)(u),"获取视频链接失败");if(!m.dash)throw new Error("此视频没有 dash 格式, 请改用其他格式.");const v=c.allQualities.find((e=>e.value===m.quality)),{duration:g,video:w,audio:b,dolby:y,flac:x}=m.dash,_=e=>{switch(e){case 12:return Q.Hevc;case 13:return Q.Av1;default:return Q.Avc}},k=w.filter((e=>e.id===v.value)).map((e=>({type:"video",videoCodec:_(e.codecid),quality:v,width:e.width,height:e.height,codecs:e.codecs,codecId:e.codecid,bandWidth:e.bandwidth,frameRate:e.frameRate,backupUrls:(e.backupUrl||e.backup_url||[]).map((e=>e.replace("http:","https:"))),downloadUrl:(e.baseUrl||e.base_url||"").replace("http:","https:"),duration:g}))).filter((e=>o.video(e))),I=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"audio";return{type:t,bandWidth:e.bandwidth,codecs:e.codecs,codecId:e.codecid??0,backupUrls:(e.backupUrl||e.backup_url||[]).map((e=>e.replace("http:","https:"))),downloadUrl:(e.baseUrl||e.base_url||"").replace("http:","https:"),duration:g}},C=(b||[]).map((e=>I(e))).filter((e=>o.audio(e)));y&&C.push(...y.audio?.map((e=>I(e)))??[]),x&&C.push(...x.audio?[I(x.audio,"flacAudio")]:[]);const A=B({audioDashes:C,videoDashes:k,videoCodec:n}),V=m.accept_quality.map((e=>c.allQualities.find((t=>t.value===e)))).filter((e=>void 0!==e)),S=new U({input:e,jsonData:m,fragments:A,qualities:V,currentQuality:v});return D(e,S),S},W={name:"video.dash.avc",displayName:"dash (AVC/H.264)",description:"音画分离的 mp4 格式, 编码为 H.264, 体积较大, 兼容性较好. 下载后可以合并为单个 mp4 文件. 如果视频源没有此编码, 则会自动选择其他同清晰度的编码格式.",downloadVideoInfo:async e=>z(e,{codec:Q.Avc})},F={name:"video.dash.hevc",displayName:"dash (HEVC/H.265)",description:"音画分离的 mp4 格式, 编码为 H.265, 体积中等, 兼容性较差. 下载后可以合并为单个 mp4 文件. 如果视频源没有此编码, 则会自动选择其他同清晰度的编码格式.",downloadVideoInfo:async e=>z(e,{codec:Q.Hevc})},M={name:"video.dash.av1",displayName:"dash (AV1)",description:"音画分离的 mp4 格式, 编码为 AV1, 体积较小, 兼容性中等. 下载后可以合并为单个 mp4 文件. 如果视频源没有此编码, 则会自动选择其他同清晰度的编码格式.",downloadVideoInfo:async e=>z(e,{codec:Q.Av1})},H={name:"video.dash.audio",displayName:"dash (仅音频)",description:"仅下载视频中的音频轨道.",downloadVideoInfo:async e=>z(e,{filters:{video:()=>!1}})},R=(e,t)=>{const n=e=>t.length>e?t[e]:t[t.length-1];return{fragments:e.durl.map(((e,t)=>({length:e.length,size:e.size,url:e.url,backupUrls:e.backup_url,extension:n(t)}))),qualities:e.accept_quality.map((e=>c.allQualities.find((t=>t.value===e)))).filter((e=>void 0!==e)),currentQuality:c.allQualities.find((t=>t.value===e.quality))}},L={name:"video.flv",displayName:"flv",description:"使用 flv 格式下载, 兼容 H.264 编码. 支持的清晰度相比于 dash 会少很多.",downloadVideoInfo:e=>(async e=>{const{aid:t,cid:n,quality:i}=e,o={avid:t,cid:n,qn:i?.value??"",otype:"json"},s=h.bangumiUrls.some((e=>(0,a.matchUrlPattern)(e)))?q((0,a.formData)(o)):T((0,a.formData)(o)),r=await(0,f.bilibiliApi)((0,f.getJsonWithCredentials)(s),"获取视频链接失败"),d=new U({input:e,jsonData:r,...R(r,[".flv"])});return D(e,d),d})(e)},G={name:"toast",displayName:"Toast",description:"弹一条消息显示出下载链接, 右键新标签页打开就可以下载. 链接有 referer 限制, 复制无用, 且不能保留视频文件名.",runAction:async e=>{const t=e.infos.flatMap((e=>e.titledFragments)),n=t.map((e=>e.url)).join("\n");p.Toast.show(t.map((e=>`<a class="link" href="${e.url}" download="${e.title}">${e.title}</a>`)).join("\n"),"下载视频"),console.log(n),console.log(e)}},J=coreApis.runtimeLibrary,Z={name:"steamSaver",displayName:"StreamSaver",description:'使用 StreamSaver 输出到本地文件, 下载过程中请勿关闭页面. 注意: 需要浏览器允许来自 jimmywarting.github.io (StreamSaver 的网站) 的第三方 cookie, 详细原因见 <a href="https://github.com/jimmywarting/StreamSaver.js?#how-does-it-work" target="blank">How does it work</a>, 否则弹出的链接点击后会没有反应.',runAction:async e=>{const t=await J.StreamSaverLibrary,n=e.infos.flatMap((e=>e.titledFragments)),i=p.Toast.show(n.map(((e,t)=>`<a class="link" data-index="${t}">${e.title}</a>`)).join("\n"),"下载视频"),o=await i.element;dqa(o,"a[data-index]").forEach((e=>{e.addEventListener("click",(async()=>{const{index:i}=e.dataset,{title:o,url:a,size:s}=n[i],r=t.createWriteStream(o,{size:s}),d=await fetch(a);await d.body.pipeTo(r)}))}))}},[X]=(0,l.registerAndGetData)("downloadVideo.inputs",[S,V,A]),[Y]=(0,l.registerAndGetData)("downloadVideo.apis",[L,W,F,M,H]),[K]=(0,l.registerAndGetData)("downloadVideo.assets",[]),[ee]=(0,l.registerAndGetData)("downloadVideo.outputs",[G,Z]),{basicConfig:te}=(0,o.getComponentSettings)("downloadVideo").options,ne=e=>e.filter((e=>e.match?.some((e=>(0,a.matchUrlPattern)(e)))??!0)),ie=Vue.extend({components:{VPopup:d.VPopup,VButton:d.VButton,VDropdown:d.VDropdown,VIcon:d.VIcon,SwitchBox:d.SwitchBox},props:{triggerElement:{required:!0}},data(){const e=te.output,t=te.useBackupUrls;return{open:!1,busy:!1,testData:{videoInfo:null,multiple:!1},assets:K,qualities:[],selectedQuality:void 0,inputs:[],selectedInput:void 0,apis:[],selectedApi:void 0,outputs:ee,selectedOutput:ee.find((t=>t.name===e))||ee[0],useBackupUrls:t||!1}},computed:{assetsWithOptions(){return this.assets.filter((e=>e.component))},filteredQualities(){return 0===this.qualities.length?c.allQualities:this.qualities},canStartDownload(){if(this.busy||!this.open)return!1;return!Object.entries(this).filter((e=>{let[t]=e;return t.startsWith("selected")})).some((e=>{let[,t]=e;return!t}))}},watch:{selectedInput(e){void 0!==e&&this.updateTestVideoInfo()},selectedApi(e){void 0!==e&&(this.updateTestVideoInfo(),te.api=e.name)},selectedOutput(e){void 0!==e&&(te.output=e.name)},useBackupUrls(e){void 0!==e&&(te.useBackupUrls=e)}},mounted(){coreApis.observer.videoChange((()=>{this.selectedInput=void 0,this.selectedApi=void 0;const e=ne(X);this.inputs=e,this.selectedInput=e[0];const t=ne(Y);this.apis=t;const n=t.find((e=>e.name===te.api));this.selectedApi=n||t[0]}))},methods:{formatFileSize:r.formatFileSize,saveSelectedQuality(){const e=this.selectedQuality;void 0!==e&&(te.quality=e.value,this.updateTestVideoInfo())},async getVideoItems(){const e=this.selectedInput;return await e.getInputs(this.$refs.inputOptions)},async updateTestVideoInfo(){if(!this.selectedInput||!this.selectedApi)return;this.testData.videoInfo=null;const e=this.selectedInput,t=e.getTestInput?.()??{aid:unsafeWindow.aid,cid:unsafeWindow.cid,title:(0,u.getFriendlyTitle)(!0)};console.log("[updateTestVideoInfo]",t),this.testData.multiple=e.batch;const n=this.selectedApi;try{const e=await n.downloadVideoInfo(t);this.qualities=e.qualities;if((!this.selectedQuality||!e.qualities.some((e=>e.value===this.selectedQuality.value)))&&(this.selectedQuality=e.qualities[0],te.quality)){const[t]=e.qualities.filter((e=>e.value<=te.quality));t&&(this.selectedQuality=t)}t.quality=this.selectedQuality;const i=await n.downloadVideoInfo(t);this.testData.videoInfo=i}catch(e){console.error("[updateTestVideoInfo] failed",e),this.testData.videoInfo=void 0}},async startDownload(e,t){try{this.busy=!0;const n=this.selectedInput,i=this.selectedApi,o=await n.getInputs(this.$refs.inputOptions);if(0===o.length)return void p.Toast.info("未接收到视频, 如果输入源支持批量, 请至少选择一个视频.","下载视频",3e3);o.forEach((e=>{e.quality=this.selectedQuality}));const a=await Promise.all(o.map((e=>i.downloadVideoInfo(e))));if(0===a.length||0===lodash.sumBy(a,(e=>e.fragments.length)))return void p.Toast.info("未接收到可下载数据, 请检查输入源和格式是否适用于当前视频.","下载视频",3e3);this.useBackupUrls&&a.forEach((e=>{e.fragments.forEach((e=>{e.url=e.backupUrls&&0!==e.backupUrls.length?e.backupUrls.at(0):e.url}))}));const s=new j(a),r=(await Promise.all(K.map((e=>e.getAssets(a,this.$refs.assetsOptions.find((t=>t.$attrs.name===e.name))))))).flat();s.extraAssets.push(...r),await s.downloadExtraAssets(),await t.runAction(s,e)}catch(e){(0,s.logError)(e)}finally{this.busy=!1}}}});var oe=n(979),ae=n.n(oe),se={insert:"head",singleton:!1};w()(ae(),se);ae().locals;var re=(0,_.Z)(ie,i,[],!1,null,null,null);re.options.__file="registry/lib/components/video/download/DownloadVideo.vue";const de=re.exports},454:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multiple-widgets"},[n("DefaultWidget",{ref:"button",attrs:{name:"下载视频",icon:"mdi-download"},on:{mouseover:function(t){return e.createDownloadPanel()},click:function(t){return e.toggleDownloadPanel()}}})],1)};let o;i._withStripped=!0;const a=Vue.extend({components:{DefaultWidget:coreApis.ui.DefaultWidget},methods:{async createDownloadPanel(){if(!o){const e=document.createElement("div");document.body.appendChild(e);const t=await Promise.resolve().then(n.bind(n,591)).then((e=>e.default));o=new t({propsData:{triggerElement:this.$refs.button}}).$mount(e)}},async toggleDownloadPanel(){o&&(o.open=!o.open)}}});var s=(0,n(769).Z)(a,i,[],!1,null,null,null);s.options.__file="registry/lib/components/video/download/Widget.vue";const r=s.exports},172:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single-video-info download-video-config-section"},[e.imageUrl?n("img",{staticClass:"shadow",attrs:{src:e.imageUrl}}):e._e(),e._v(" "),e.imageUrl?n("img",{attrs:{src:e.imageUrl}}):e._e()])};i._withStripped=!0;const o=coreApis.observer;var a=n(414);const s=coreApis.componentApis.video.videoInfo,r=Vue.extend({data:()=>({imageUrl:""}),created(){(0,o.videoChange)((async()=>{const{aid:e}=unsafeWindow,t=new s.VideoInfo(e);try{await t.fetchInfo()}catch(e){throw(0,a.logError)(e),e}this.imageUrl=t.coverUrl.replace("http:","https:")}))}});var d=n(648),l=n.n(d),c=n(54),p=n.n(c),u={insert:"head",singleton:!1};l()(p(),u);p().locals;var f=(0,n(769).Z)(r,i,[],!1,null,null,null);f.options.__file="registry/lib/components/video/download/inputs/video/SingleVideoInfo.vue";const h=f.exports},769:(e,t,n)=>{"use strict";function i(e,t,n,i,o,a,s,r){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),s?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=d):o&&(d=r?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,t){return d.call(t),c(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,d):[d]}return{exports:e,options:l}}n.d(t,{Z:()=>i})},8:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=8,e.exports=t},198:e=>{"use strict";e.exports="在功能面板中添加下载视频支持. 请注意:\n- 不能下载超出账号权限的视频, 例如非大会员下载大会员清晰度视频, 或者大陆地区网络下载港澳台地区番剧, 都是不可以的.\n- 请勿短时间进行大量下载, 以免遭到 b 站 IP 封禁.\n"},414:e=>{"use strict";e.exports=coreApis.utils.log}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var a=Object.create(null);o.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var r=2&i&&n;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((e=>s[e]=()=>n[e]));return s.default=()=>n,o.d(a,s),a},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.d(a,{component:()=>n});const e=coreApis.componentApis.define,t=coreApis.spinQuery,n=(0,e.defineComponentMetadata)({name:"downloadVideo",displayName:"下载视频",entry:none,reload:none,unload:none,widget:{component:()=>Promise.resolve().then(o.bind(o,454)).then((e=>e.default)),condition:()=>(0,t.hasVideo)()},tags:[componentsTags.video],options:{basicConfig:{defaultValue:{},displayName:"基础配置",hidden:!0}},commitHash:"93cdffde01d6c7dc2a537a7f9c1a9f9d57c17c92",coreVersion:"2.6.3",description:(()=>{const e=o(8);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(o.t.bind(o,198,17)).then((e=>e.default))}})()})})(),a=a.component})()));