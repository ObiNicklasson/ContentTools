// cherryxtrfy.js

(function() {
    'use strict';
    if (location.hostname.includes("cherryxtrfy.com") && location.pathname.startsWith("/wp/wp-content/uploads/")) {
        // Регекс шукає "-числоxчисло" перед розширенням
        const regex = /-\d+x\d+(?=\.\w{3,4}$)/;

        if (regex.test(location.href)) {
            location.href = location.href.replace(regex, "");
        }
    }
})();
