<template>
    <div key="main" class="main">

            <section class="gridCont">

              <header-block/>
              <social-media/>
              <navigation-bar/>
              <legal-stuff/>

              

             

                <section class="footerRings">
                        <div key="secretBox" class="easterout"> {{ secret }} </div>
                  <img class="runish" src="@/assets/imgs/runish.png" alt="a message from beyond the veil">
                  <img class="smallRings" src="@/assets/imgs/rings.gif" alt="rings that mark a criminal of Eyien">
                </section>
              
            </section>
        
          <section class="witchMagic"></section>
      </div>
</template>

<script>
  import HeaderBlock from "./HeaderBlock"
  import SocialMedia from "./SocialMedia"
  import NavigationBar from "./NavigationBar"
  import LegalStuff from "./LegalStuff"

    const delay = d =>
	new Promise(resolve => {
		window.setTimeout(resolve, d);
    });
    
    export default {
      components: {
        HeaderBlock,
        SocialMedia,
        NavigationBar,
        LegalStuff,
      },
        data() {
            return {
                mainMusic: new Audio(require('@/assets/audio/introspection.mp3')),
                secret: '',
                easteregg: 'songbook',
                quenEasterEgg: 'spellbook'
            }
        },
        
          metaInfo: {
            title: 'Welcome To Amara',
             meta: [
              { charset: 'utf-8' },
              { property:"og:type", content:"website" },
              { property:"og:image", content:"https://www.welcometoamara.com/s1-wta-icon.jpg" },
              { property:"og:url", content:"https://www.welcometoamara.com" },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { name:"keywords", content:"Fantasy, Podcast, Drama, Dungeon, World, Dungeon World, Dungeon World Podcast, Welcome, Amara, Story, Storytelling, RPG, Dungeons, Dragons" },
              { name: 'author', content: 'Sean Yager' },
              { name: 'og:description', content: '“Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign. We are Sean (The GM) and Andy (Along for the Ride), a GM/Player duo exploring the unique high fantasy world of Amara.'},
            ],
          },
        name: 'mainPage',
        methods: {
        checkSecret(userPressed) {
                if ( this.secret.length >= 9 ) {
                    this.secret = this.secret + userPressed;
                    this.secret = this.secret.slice(1,10);
                }
                else {
                    this.secret = this.secret + userPressed;
                }
                this.isSolved(this.secret);
            },
            async isSolved(check) {
                await delay(1000);
                if (check == this.easteregg) {
                        this.$emit('secretSolve');
                    }
                else if (check == this.quenEasterEgg) {
                    this.$emit('quenSecretSolve');
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
                  console.log("backspaced")
                }
            });
        },
        destroyed: function () {
            this.mainMusic.pause();
            this.transAudio.volume = 0.3;
            this.transAudio.play();
        }
    }
</script>

<style scoped>
/* DEFAULT STYLES */

/* TABLET STYLES */
@media (min-width: 768px) {

}

/* MOBILE PORTRAIT MODE */
@media (min-width: 667px) {

}
</style>