<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <Logo />
            </v-col>
            <v-col class="mb-4">
                <Title msg="Emre Laravel Boilerplate" />
                <Description />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Logo from "../../components/Logo.vue";
import Title from "../../components/Title.vue";
import Description from "../../components/Description.vue";
export default {
    name: "Home",
    components: { Logo, Title, Description }
};
</script>
