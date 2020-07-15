<template>
<section>
    <section @click.once="login()" class="entrance">
        <img class="logo" src="@/assets/imgs/s1-wta-icon.png" alt="">
        <br>
        <p class="smallTitle">A FANTASY REALM - A PODCAST</p>
        <h1>A PERFORMANCE</h1>
        <p>CLICK HERE TO INVESTIGATE AMARA FOR YOURSELF.</p>
    </section>
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

<style scoped>

.logo {
    width:300px;
}
    .entrance {
        background-color: var(--background);
        height:600px;
        width:700px;
        margin-top:20px;
        margin-bottom:20px;
        display:flex;
    }
    p {
        color:var(--main-color);
        margin:5px 0 0px 0;
    }
    h1, .smallTitle {
        color: var(--main-color);
        text-align:center;
        margin:0 0 0 0;
    }
    h1 {
        font-size:50px;
    }
</style>