!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-toggle-player-light"]=t():e["utils/keymap-toggle-player-light"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>i});const o=coreApis.componentApis.video.playerLight,i={name:"keymap.actions.togglePlayerLight",displayName:"快捷键扩展 - 开关灯",description:'在快捷键的动作列表里添加一个 "开关灯".',setup:e=>{let{addData:t}=e;t("keymap.actions",(e=>{e.togglePlayerLight={displayName:"开关灯",run:async()=>{(0,o.toggleLight)()}}})),t("keymap.presets",(e=>{e.togglePlayerLight="shift l"}))},commitHash:"04685315d5fff6c0966bdbab2b70ce7630e3b028",coreVersion:"2.8.7"};return t=t.plugin})()));