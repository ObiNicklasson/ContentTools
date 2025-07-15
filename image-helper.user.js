// ==UserScript==
// @name         Іmage-Helper
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  Головний скрипт для відкриття фото у високій якості на потрібних сайтах
// @author       Микола Б.

// @match        https://*.lagguitars.com/*small*
// @match        https://cherryxtrfy.com/wp/wp-content/uploads/*
// @match        https://*.rozetka.com.ua/goods/images/big/*

// @updateURL    https://github.com/ObiNicklasson/ContentTools/blob/main/image-helper.user.js
// @downloadURL  https://github.com/ObiNicklasson/ContentTools/blob/main/image-helper.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ===== lagguitars =====
    if (
        location.hostname.includes("lagguitars.com") &&
        location.href.includes("small")
    ) {
        location.href = location.href.replace("small", "large");
    }

    // ===== cherryxtrfy =====
    if (location.hostname.includes("cherryxtrfy.com")) {
        const regex = /-\d+x\d+(?=\.\w{3,4}$)/;
        if (regex.test(location.href)) {
            location.href = location.href.replace(regex, "");
        }
    }

    // ===== Rozetka =====
    if (location.hostname.includes("rozetka.com.ua")) {
        location.href = location.href.replace("big", "original");
    }

})();
