// ==UserScript==
// @name         Іmage-Helper
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Скрипт для відкриття фото у високій якості
// @author       Микола Б.

// @match        https://*.lagguitars.com/*small*
// @match        https://cherryxtrfy.com/wp/wp-content/uploads/*
// @match        https://*.rozetka.com.ua/goods/images/big/*
// @match        https://cdn0.it4profit.com/*
// @match        https://www.keychron.com/cdn/*
// @match        https://cdn.shopify.com/s/*

// @updateURL    https://raw.githubusercontent.com/ObiNicklasson/ContentTools/main/image-helper.user.js
// @downloadURL  https://raw.githubusercontent.com/ObiNicklasson/ContentTools/main/image-helper.user.js
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
    if (
        location.hostname.includes("rozetka.com.ua") &&
        location.href.includes("/goods/images/big/")
    ) {
        location.href = location.href.replace("big", "original");
    }

    // ===== lorgar =====
    if (
        location.hostname === "cdn0.it4profit.com" &&
        /h:\d+\/rt:fill\/w:\d+\//.test(location.href)
    ) {
        location.href = location.href.replace(/h:\d+\/rt:fill\/w:\d+\//, "");
    }

    // ===== keychron =====
        if (
        (location.hostname === "www.keychron.com" && location.pathname.startsWith("/cdn/")) ||
        (location.hostname === "cdn.shopify.com" && location.pathname.startsWith("/s/"))
    ) {
        if (location.search !== "") {
            location.href = location.href.replace(location.search, "");
        }
    }

})();
