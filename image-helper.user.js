// ==UserScript==
// @name         Іmage-Helper (Main)
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Головний скрипт
// @author       Микола Б.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ===== lagguitars =====
    if (location.hostname.includes("lagguitars.com") && /small/.test(location.href)) {
        location.href = location.href.replace("small", "large");
    }

    // ===== cherryxtrfy =====
    if (location.hostname.includes("cherryxtrfy.com") && location.pathname.startsWith("/wp/wp-content/uploads/")) {
        const regex = /-\d+x\d+(?=\.\w{3,4}$)/;
        if (regex.test(location.href)) {
            location.href = location.href.replace(regex, "");
        }
    }

    // ===== Rozetka =====
    if (location.hostname.includes("rozetka.com.ua") && /goods\/images\/big/.test(location.href)) {
    location.href = location.href.replace("big", "original");
    }  

})();
