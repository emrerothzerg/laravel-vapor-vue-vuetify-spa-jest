const mix = require("laravel-mix");
require("vuetifyjs-mix-extension");

mix.js("resources/js/laravelemployer/appEmployer.js", "public/js").vue();
mix.js("resources/js/laraveladmin/appAdmin.js", "public/js").vue();
mix.js("resources/js/laravelwww/appWWW.js", "public/js").vue();
