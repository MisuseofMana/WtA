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
        metaInfo: {
              // if no subcomponents specify a metaInfo.title, this title will be used
            title: 'Spellbook',
        },
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

<style scoped>
/* DEFAULT STYLES - MOBILE SITE */
       .easter {
        width:100vw;
        height:100vh;
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
        margin:0 auto;
        overflow-x: hidden;
        text-align:center;
    }

    .easter h1 {
        font-size:25px;
        width:90%;
        margin:0 auto 20px auto;
        padding:10px;
    }

    .easter h1:hover {
        color:rgb(225, 0, 255);
        cursor:pointer;
    }

    .flipbook {
        width:400px;
        height:425px;
    }
    
   


/* MOBILE PORTRAIT MODE */
@media (min-width: 667px) {
    
    .easter h1 {

    }

    .easter h1:hover {
    }

    .flipbook {
        width:655px;
        height:550px;
    }
}

/* TABLET STYLES */
@media (min-width: 768px) {
    .easter h1 {
        font-size:20px;
        width:90%;
        margin:0 auto 20px auto;
        padding:10px;
        text-align:center;
        
    }

    .easter h1:hover {
    }

    .flipbook {
        width:855px;
        height:550px;
    }
}

</style>