<template>
    <section>
        <img class="rings" @click.once="login()" src="@/assets/imgs/rings.gif" alt="Amaran rings which mark a criminal of Eyein">
        <img class="headphones" src="@/assets/imgs/headphones.png" alt="Please use Headphones for the full Welcome to Amara experience.">
      </section>
</template>

<script>
    export default {
        name: "introRings",
        methods: {
            login() {
            this.$emit('login');
            },  
        },
        destroyed: function () {
            this.transAudio.volume = 0.3;
            this.transAudio.play();
        }
    }
</script>

<style lang="scss" scoped>

</style>