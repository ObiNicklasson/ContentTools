// ==UserScript==
// @name         Image URL Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Автоматично відкриває повнорозмірні зображення, прибираючи -числоxчисло з URL.
// @author       Your Name
// @match        *://*/*
// @icon         https://example.com/icon.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const regex = /-\d+x\d+(?=\.\w{3,4}$)/;
    if (regex.test(location.href)) {
        location.href = location.href.replace(regex, "");
    }
})();
