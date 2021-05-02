<template>
    <img :src="image" height="200" />
</template>
<script>
import image from "../../img/emre_logo.jpeg";

export default {
    data: function() {
        return {
            image: image
        };
    }
};
</script>
