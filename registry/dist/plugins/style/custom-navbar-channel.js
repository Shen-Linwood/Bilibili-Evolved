!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["style/custom-navbar-channel"]=n():e["style/custom-navbar-channel"]=n()}(self,(function(){return function(){"use strict";var e={207:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var o=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"navbar-channel",attrs:{"data-channel-id":e.channelId}},[e._v("频道")])};o._withStripped=!0;var r=coreApis.ajax;var a=function(e,n,t,o,r,a,i,s){var c,l="function"==typeof e?e.options:e;if(n&&(l.render=n,l.staticRenderFns=t,l._compiled=!0),o&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,n){return c.call(n),d(e,n)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}(Vue.extend({data:()=>({channelId:null}),async created(){const{channel_id:e}=await(0,r.bilibiliApi)((0,r.getJsonWithCredentials)("https://api.bilibili.com/x/web-interface/web/channel/red"));e&&(this.channelId=e)}}),o,[],!1,null,null,null);a.options.__file="registry/lib/plugins/style/custom-navbar-channel/NavbarChannel.vue";var i=a.exports}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){t.d(o,{plugin:function(){return n}});var e=coreApis.settings;const n={name:"customNavbar.items.channel",displayName:"自定义顶栏 - 频道",description:"为自定义顶栏添加一个频道入口.",async setup(n){let{addData:o}=n;o("customNavbar.items",(n=>{const o="https://www.bilibili.com/v/channel/",r="channel";n.push({name:"channel",displayName:"频道",content:()=>Promise.resolve().then(t.bind(t,207)),clickAction:()=>{const n=dq(".navbar-channel[data-channel-id]").getAttribute("data-channel-id");window.open(n?`${o}${n}`:o,(()=>{const{options:n}=(0,e.getComponentSettings)("customNavbar");return r in n.openInNewTabOverrides?n.openInNewTabOverrides[r]:n.openInNewTab})()?"_blank":"_self")}})}))},commitHash:"19e1c4bf5755cfb0fa5ffbe4c6a67b0e419d5352",coreVersion:"2.4.1"}}(),o=o.plugin}()}));