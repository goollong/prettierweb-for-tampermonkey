// ==UserScript==
// @name         Prettier Web
// @namespace    http://tampermonkey.net/
// @version      1.0.0-20250101
// @description  自用的用于调整和美化一些网站展示效果的油猴脚本。
// @author       GoolLong
// @match        *://kimi.moonshot.cn/*
// @match        *://share.dmhy.org/topics/view/*
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

(function () {
  'use strict'

  const url = unsafeWindow.location.href

  // 调整 Kimi 聊天的消息框宽度
  if (url === 'https://kimi.moonshot.cn/' || url.includes('kimi.moonshot.cn/chat/')) {
    GM_addStyle(`
      .css-jdjpte {
        max-width: 90% !important;
      }
    `)

  // 调整 动漫花园 详情页中图片的最大宽度
  } else if (url.includes('share.dmhy.org/topics/view/')) {
    GM_addStyle(`
      .topic-nfo img {
        max-width: 80%;
      }
    `)
  }
})()
