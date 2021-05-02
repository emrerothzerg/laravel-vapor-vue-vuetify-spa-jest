import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
    icons: {
        iconfont: "md" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
        themes: {
            light: {
                primary: "#1f82bd",
                primaryblue: "#2196f3",
                themeblue: "#2196f3",
                success: "#11b719",
                warning: "#f39c12",
                info: "#1db9aa",
                danger: "#e63c3c",
                dark: "#323f46",
                secondary: "#eaeff5",
                default: "#ffffff",
                defaultgray: "#d7dfea"
            }
        },
        options: {
            customProperties: true
        }
    }
});
export default vuetify;
