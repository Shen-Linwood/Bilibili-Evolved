!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-toggle-subtitle"]=t():e["utils/keymap-toggle-subtitle"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>i});const o=coreApis.componentApis.video.playerAgent,i={name:"keymap.actions.toggleSubtitle",displayName:"快捷键扩展 - 开关 CC 字幕",description:'在快捷键的动作列表里添加一个 "开关 CC 字幕".',setup:e=>{let{addData:t}=e;t("keymap.actions",(e=>{e.toggleSubtitle={displayName:"开关 CC 字幕",run:async()=>{const e=o.playerAgent.query.control.buttons.subtitle.sync();return e?.click(),e}}})),t("keymap.presets",((e,t)=>{e.toggleSubtitle="shift c",t.YouTube.toggleSubtitle="c",t.YouTube.coin="",t.PotPlayer.toggleSubtitle="alt h"}))},commitHash:"2810c1ab94a3f2a69962b96f93e25e991bc14b6f",coreVersion:"2.8.7"};return t=t.plugin})()));