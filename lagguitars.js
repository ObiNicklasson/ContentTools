// lagguitars.js

(function() {
    'use strict';
    if (location.hostname.includes("lagguitars.com") && /small/.test(location.href)) {
        location.href = location.href.replace("small", "large");
    }
})();
