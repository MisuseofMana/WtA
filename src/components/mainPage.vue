<template>
    <div key="main" class="main">

            <section class="gridCont">

              <header class="headerText">
                <h1>
                  WELCOME TO AMARA
                </h1>
              </header>

              <!-- Main Content of Site - About Amara, and images -->
              <main class="aboutAmara">
                  
                  <img class="headerImg" src="@/assets/imgs/wta-icon.jpg" alt="">

                <section class="podcastDescription">
                  
                  <section class="podcastIntro">
           

                  <h2>A Dungeon World Dramatic Performance Podcast</h2>
                    <hr>
                    

                    <p>
                    “Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign. 
                    We are <strong><em>Sean (The GM)</em></strong> and <strong><em>Andy (Along for the Ride)</em></strong>, a GM/Player duo exploring the unique high fantasy world of Amara.
                    </p>
                      

                    <p>
                    Amara is a sword and sorcery realm with carefully crafted lore to uncover, featuring a growing cast of diverse characters of beasts and fast friends.
                    <img class="imageSize floatL" src="@/assets/imgs/amaranmap.png"/>
                    In Amara, there are humans, living among other humanoids scattered across the realm in settlements and villages and unstable camps.
                    At the neck of a prominent peninsula sits <strong>Eyien</strong> (pronounced YEE-in), it’s the city of cities, home to the <em>Ember King of Amara, King Rense.</em>
                    The title has been held by countless women and men before him. The Ember King's Rule is just and fair, leading Eyien into its immense prosperity.
                    </p>


                    <p>
                    Eyien is where <strong>“Welcome to Amara”</strong> begins, 
                    <img class="imageSize floatR" src="@/assets/imgs/banditspink.jpg"/>
                    it’s the place to be for security and for power in Amara.
                    Within Eyien resides a group of soldiers and mages known as “The Coterie”.
                    They’re a group sworn to Loyalty under King Rense, and magically bound to the city.
                    The Coterie is tasked with defending and supporting their home.
                    They defend Eyien with impunity, proud to be part of something bigger than themselves. 
                    <img class="floatL imageSize" src="@/assets/imgs/ydnaQuen.jpg"/>
                    </p>

                    
                    <p>
                    Our main character Ydna (played by Andy) is a low ranking member of this Coterie, roped into a secret quest far beyond his intention, along with a young mage woman named Quen. Their quest is rife with world ending consequences and threats. 
                    Ydna is a traveling bard a curious drifter, caught up in a flurry of proving grounds quests from his Coterie captain, Orric, the kings emmissary and conduit. 
                    <img class="floatR imageSize" src="@/assets/imgs/cursepink.jpg"/>
                    Above all else Ydna is on a bardic journey to honor his grandfather, hoping to meet exemplary figures and experience all the realm of Amara 
                    has to offer. He records most, but not all of his discoveries, in his <em>songbook</em> hoping to someday become part of the legends he's read about so eagerly.
                    </p>

                    <p>
                    Along the way we discover much about Amara and the city of Eyien, 
                    <img class="floatL imageSize" src="@/assets/imgs/goblinspink.jpg"/>
                    uncover secrets that threaten the kingdom, and piece together the mysterious forces surrounding 
                    this grand city of opportunity and potential in "Welcome to Amara".
                    </p>
                  </section>

                  <section class="floatR signature">
                  <p>Thanks for reading,</p>
                  <h1>-Sean &amp; Andy</h1>
                  </section>

                </section>

              </main>

              <section class="podcastSignoff">
                  
                    <h1>Season 1 Arrives Mid 2020</h1>
                    
                    <img class="center bigImage" src="@/assets/imgs/arri.png"/>

                    <h1>"See You in Amara"</h1>
                  
                </section>

              <a class="discordLinkWrap" href="https://discord.gg/82GpmYD">
              <section class="discordLink"> 

                <section>
                <p>
                  <strong>Listen to the podcast before it's released to the public</strong> and help us shape the future of "Welcome to Amara".
                </p>
                <p>
                  <strong>Click this box</strong> to join our growing discord server for early access. 
                </p>
                </section>
                  <img src="@/assets/imgs/discord.png" alt="discord icon - click to join our discord">
              </section>
              </a>

              <footer class="footer">
                  <section class="socialWrap">
                  <a href="http://www.twitter.com/misuseofmana" target="_blank">
                    <img src="@/assets/imgs/twitter.png" alt="twitter icon">
                  </a>
                  <a target="_blank" href="http://www.instagram.com/misuseofmana">
                      <img src="@/assets/imgs/instagram.png" alt="instagram icon">
                  </a>
                  <a target="_blank" href="mailto:seanyagerart@gmail.com">
                    <img src="@/assets/imgs/email.png" alt="email icon">
                  </a>
                  <!-- <a target="_blank" href="https://discord.gg/82GpmYD">
                    <img src="@/assets/imgs/discord.png" alt="discord icon - click to join our discord">
                  </a> -->
                  </section>
              </footer>

              <section class="legal">
                <section>
                  "Welcome to Amara" is a product of "Misuse of Mana LLC" &copy; | No portion of this website or the content it represents may be reproduced in any 
                  manner whatsoever without the express permission from the authors, except in the case of short excerpts used for review. 
                  | <a href="http://www.seanyager.com" target="_blank"> seanyager.com </a> | Site Updated Feb 2020 
                  <br>
                  <br>
                    Special thank you to freesound.org user <a href="https://freesound.org/people/trundlefly/" target="_blank">trundlefly</a>, 
                    and the website <a href="https://www.purple-planet.com/" target="_blank">purple-planet.com</a> for providing audio.
                </section>
                </section>

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

    const delay = d =>
	new Promise(resolve => {
		window.setTimeout(resolve, d);
    });
    
    export default {
        data() {
            return {
                mainMusic: new Audio(require('@/assets/audio/introspection.mp3')),
                secret: '',
                easteregg: 'songbook',
                quenEasterEgg: 'spellbook'
            }
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
        created: function () {
            this.mainMusic.volume = 0.3;
            this.mainMusic.loop = true;
            this.mainMusic.play();
        },
        destroyed: function () {
            this.mainMusic.pause();
            this.transAudio.volume = 0.3;
            this.transAudio.play();
        }
    }
</script>

<style lang="scss" scoped>

</style>