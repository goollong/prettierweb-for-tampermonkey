// ==UserScript==
// @name         Prettier Web
// @namespace    http://tampermonkey.net/
// @version      1.0.5-20250522
// @description  自用的用于调整和美化一些网站展示效果的油猴脚本。
// @author       GoolLong
// @match        *://kimi.com/*
// @match        *://chat.deepseek.com/*
// @match        *://github.com/*
// @match        *://share.dmhy.org/topics/view/*
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

(function () {
  'use strict'

  const url = unsafeWindow.location.href

  // 调整 Kimi 聊天的消息框宽度
  if (url === 'https://www.kimi.com/' || url.includes('www.kimi.com/chat/')) {
    GM_addStyle(`
      .chat-content-list {
        max-width: 92% !important;
      }
    `)

  // 调整 DeepSeek 聊天的消息框宽度
  } else if (url === 'https://chat.deepseek.com/' || url.includes('chat.deepseek.com/a/chat/')) {
    GM_addStyle(`
      :root {
        --message-list-max-width: 100% !important;
      }
    `)

  // 调整 github.com 仓库页面"代码"标签页的最大宽度
  } else if (url.includes('github.com/')) {
    GM_addStyle(`
      .container-xl {
        max-width: 100%;
      }
      .react-repos-overview-margin {
        margin-right: 0;
      }
      .markdown-body.container-lg {
        max-width: 100%;
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
