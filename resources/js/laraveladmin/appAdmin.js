import Vue from "vue";
import vuetify from "../../plugins/vuetify";
import router from "./router";
import AppAdmin from "./AppAdmin.vue";

require("../bootstrap");

const app = new Vue({
    el: "#app",
    vuetify,
    router,
    render: h => h(AppAdmin)
});
