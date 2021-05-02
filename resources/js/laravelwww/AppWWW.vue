<template>
    <v-app>
        <br /><br />
        <h1 style="text-align:center;">
            Emre Rothzerg<br /><br />WWW PAGE<br /><br />Laravel Vue Vuetify
            Vapor with multiple domains and SPAs
        </h1>

        <p style="text-align:center;">
            <router-link :to="{ name: 'home' }">Homepage</router-link> |
            <router-link :to="{ name: 'hello' }">Hello World page</router-link>
        </p>
        <div class="container">
            <div>
                Api call:<br />
                <b>URL Path:</b> {{ ajaxURL }}
                <br />
                <b>Message:</b> {{ ajaxMessage }}<br /><br />
            </div>
            <router-view></router-view>
        </div>
    </v-app>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            ajaxURL: "/api/www/emre",
            ajaxMessage: ""
        };
    },
    created() {
        axios.get(this.ajaxURL).then(response => {
            this.ajaxMessage = response.data;
        });
    }
};
</script>
