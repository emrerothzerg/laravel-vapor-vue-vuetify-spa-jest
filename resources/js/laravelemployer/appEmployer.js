import Vue from "vue";
import vuetify from "../../plugins/vuetify";
import router from "./router";
import AppEmployer from "./AppEmployer.vue";

require("../bootstrap");

const app = new Vue({
    el: "#app",
    vuetify,
    router,
    render: h => h(AppEmployer)
});
