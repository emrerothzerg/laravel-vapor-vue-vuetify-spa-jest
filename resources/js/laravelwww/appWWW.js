import Vue from "vue";
import vuetify from "../../plugins/vuetify";
import router from "./router";
import AppWWW from "./AppWWW.vue";

require("../bootstrap");

const app = new Vue({
    el: "#app",
    vuetify,
    router,
    render: h => h(AppWWW)
});
