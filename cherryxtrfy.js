(function(url) {
'use strict';

const regex = /-\d+x\d+(?=\.\w{3,4}$)/;

// Перевіряємо, чи URL з правильного сайту та чи потрібно видаляти розмірний суфікс
if (!url.startsWith("https://cherryxtrfy.com/wp/wp-content/uploads/") || !regex.test(url)) {
return url;
}

// Видаляємо розмірний суфікс, якщо він є
return url.replace(regex, "");
})("вставте_ваш_URL_тут");
