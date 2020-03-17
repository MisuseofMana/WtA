<template>
    <div class="easter">
        <h1 @click="backHome()">BACK TO HOMEPAGE</h1>
        <div class="bookContainer">
          <quen-spell-book></quen-spell-book>
        </div>
    </div>
</template>

<script>
import quenSpellBook from '@/components/quenSpellBook';

    export default {
        name: 'quenEasterEgg',
        data() {
            return {
                secretMusic: new Audio(require('@/assets/audio/etherealEternity.mp3')),
            }
        },
        components: {
            quenSpellBook,
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