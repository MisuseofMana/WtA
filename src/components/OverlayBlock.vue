<template>
    <section class="overlayWrapper blockDarker">
        <div key="secretBox" class="easterout"> {{ secret }} </div>
    </section>
</template>

<script>
    const delay = d =>
	new Promise(resolve => {
		window.setTimeout(resolve, d);
    });

    export default {
        name:'OverlayBlock',
        data() {
            return {
                secret: 'TYPE',
                easteregg: 'songbook',
                quenEasterEgg: 'spellbook'
            }
        },
        methods: {
        checkSecret(userPressed) {
                if ( this.secret.length >= 9 ) {
                    this.secret = this.secret + userPressed;
                    this.secret = this.secret.slice(1,10);
                }
                else {
                    if(this.secret == 'TYPE') {
                        this.secret = userPressed;
                    }
                    else{
                        this.secret = this.secret + userPressed;
                    }
                }
                this.isSolved(this.secret);
            },
            async isSolved(check) {
                await delay(1000);
                if (check == this.easteregg) {
                        this.$emit('secretSolve');
                        console.log('YDNA')
                    }
                else if (check == this.quenEasterEgg) {
                    this.$emit('quenSecretSolve');
                    console.log('QUEN')
                }
            }
        },
        mounted() {
            let self = this;
            window.addEventListener('keyup', function(ev){
                if (ev.which <= 90 && ev.which >= 65)
                {
                    let keyPress = ev.key.toLowerCase();
                    self.checkSecret(keyPress);
                }
                else if (ev.which == 8) {
                  self.secret = "";
                }
            });
        },
    }
</script>

<style scoped>
/* DEFAULT STYLES */
/* Bottom of page rings container */
    .overlayWrapper {
        z-index:999;
        display:flex;
        height:50vh;
        width:50vw;
        flex-direction:column;
        position:fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: solid 5px rgb(255, 89, 200);
    }

    /* Controls the runes size in the footer */
    .overlayWrapper .runish{
        width:50%;
        margin:0 auto;
    }

    .easterout {
    color:#F3B808;
    font-family: runes;
    font-size:2em;
    text-align:center;
    letter-spacing: 2px;
    text-transform:uppercase;
    display:flex;
    flex-direction:column;
    position:fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* MOBILE PORT STYLES */
@media (min-width: 667px) {
/* Bottom of page rings container */
   .overlayWrapper {
   }

   /* Controls the runes size in the footer */
   .overlayWrapper .runish {
   }
}

/* TABLET STYLES */
@media (min-width: 768px) {
 /* Bottom of page rings container */
   .overlayWrapper {
   }

   .easterout{
        font-size:3em;
   }

   /* Controls the runes size in the footer */
   .overlayWrapper .runish{
   }

   .easterout{
        font-size:6em;
   }
}
</style>