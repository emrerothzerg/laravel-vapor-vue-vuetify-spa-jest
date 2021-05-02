import Vue from "vue";
import VueRouter from "vue-router";
import Hello from "./pages/Hello.vue";
import Home from "./pages/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/hello",
            name: "hello",
            component: Hello
        }
    ]
});

export default router;
