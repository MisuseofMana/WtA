<template>
    <div class="easter">
        <h1 @click="backHome()">BACK TO HOMEPAGE</h1>
        <div class="bookContainer">
          <ydna-songbook></ydna-songbook>
        </div>
    </div>
</template>

<script>
import ydnaSongbook from '@/components/ydnaSongbook';

    export default {
        name: 'easterEgg',
        data() {
            return {
                secretMusic: new Audio(require('@/assets/audio/crystalWaters.mp3')),
            }
        },
        components: {
            ydnaSongbook,
        },
        methods: {
            backHome(){
                this.$emit('backHome');
            }
        },
        created: function () {
            this.secretMusic.volume=0.4;
            this.secretMusic.loop = true;
            this.secretMusic.play();
        },
        destroyed: function () {
            this.secretMusic.pause();
            this.transAudio.volume = 0.3;
            this.transAudio.play();
        }
    }
</script>

<style lang="scss" scoped>

</style>