!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/ip-show"]=t():e["utils/ip-show"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,i={206:e=>{e.exports=coreApis.componentApis.utils.commentApis}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,s),n.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(i,o){if(1&o&&(i=this(i)),8&o)return i;if("object"==typeof i&&i){if(4&o&&i.__esModule)return i;if(16&o&&"function"==typeof i.then)return i}var n=Object.create(null);s.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var r=2&o&&i;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((e=>a[e]=()=>i[e]));return a.default=()=>i,s.d(n,a),n},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{s.d(n,{component:()=>c});const e=coreApis.componentApis.define;let t,i=2;const o=function(e,i,o){const s=this._parentBlacklistDom(e,i,o),n=[`<div class="con ${o===i?"no-border":""}">`,`<div class="user">${this._createNickNameDom(e)}`,this._createLevelLink(e),this._identity(e.mid,e.assist,e.member.fans_detail),`${this._createNameplate(e.member.nameplate)+this._createUserSailing(e)}</div>`,this._createMsgContent(e),this._createPerfectReply(e),'<div class="info">',this._createPlatformDom(e.content.plat),'<span class="time-location">','<span class="reply-time">'.concat(this._formateTime(e.ctime),"</span>"),e?.reply_control?.location?`<span class="reply-location">${e?.reply_control?.location||""}</span>`:"","</span>",e.lottery_id?"":`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like?e.like:""}</span></span>`,e.lottery_id?"":`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,e.lottery_id?"":this._createReplyBtn(e.rcount),e.lottery_id&&e.mid!==t.userStatus.mid?"":`<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>${this._canSetTop(e)?`<li class="set-top">${e.isUpTop?"取消置顶":"设为置顶"}</li>`:""}${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)&&!e.isTop?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,this._createLotteryContent(e.content),this._createVoteContent(e.content),this._createTags(e),"</div>",'<div class="reply-box">',this._createSubReplyList(e.replies,e.rcount,!1,e.rpid,e.folder&&e.folder.has_folded,e.reply_control),"</div>",'<div class="paging-box">',"</div>","</div>"].join("");return e.state===t.blacklistCode?s:n},a=function(e,t){return[`<div class="reply-item reply-wrap" data-id="${e.rpid}" data-index="${t}">`,this._createSubReplyUserFace(e),'<div class="reply-con">','<div class="user">',this._createNickNameDom(e),this._createLevelLink(e),this._identity(e.mid),this._createSubMsgContent(e),"</div>","</div>",'<div class="info">','<span class="time-location">','<span class="reply-time">'.concat(this._formateTime(e.ctime),"</span>"),e?.reply_control?.location?`<span class="reply-location">${e?.reply_control?.location||""}</span>`:"","</span>",`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like?e.like:""}</span></span>`,`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,'<span class="reply btn-hover">回复</span>',`<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,"</div>","</div>"].join("")},r=new MutationObserver((e=>{e.forEach((()=>{void 0!==unsafeWindow.bbComment&&(t=unsafeWindow.bbComment,t.prototype._createListCon=o,t.prototype._createSubReplyItem=a,i=1,r.disconnect())}))}));r.observe(document.head,{childList:!0});const l=e=>{e.forEach((e=>{const t=(e=>{const t=e.__vueParentComponent?.props;return(t?.reply??t?.subReply)?.reply_control?.location??void 0})(e.element);if(void 0!==t){const i=e.element.querySelector(".reply-info>.reply-time")??e.element.querySelector(".sub-reply-info>.sub-reply-time");if(0===i.childElementCount){const e=document.createElement("span");e.style.marginLeft="5px",e.innerText=t,i.appendChild(e)}}}))},c=(0,e.defineComponentMetadata)({name:"ipShow",author:{name:"Light_Quanta",link:"https://github.com/LightQuanta"},displayName:"评论区IP属地显示",tags:[componentsTags.utils],entry:async()=>{const{forEachCommentItem:e}=await Promise.resolve().then(s.t.bind(s,206,23));e({added:e=>{2===i&&(l([e,...e.replies]),e.addEventListener("repliesUpdate",(e=>l(e.detail))))}})},description:{"zh-CN":"在评论区显示评论的IP属地信息"},commitHash:"04685315d5fff6c0966bdbab2b70ce7630e3b028",coreVersion:"2.8.7"})})(),n=n.component})()));