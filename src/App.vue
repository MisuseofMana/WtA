<template>
  <div id="app">
      <transition name="fade" mode="out-in">
      <section key="intro" class="fullScreen flex" v-if="!interaction">
        <img class="rings" @click.prevent="playSound()" src="@/assets/imgs/rings.gif" alt="">
      </section>
      
      <div key="main" v-else>
        <section class="fullScreen">
            <section class="gridCont">

              <header>WELCOME TO AMARA</header>

              <section class="aboutAmara">
               <p>
“Welcome to Amara” is a high production dramatic retelling of a play by post campaign. We are Sean and Andy, a GM/Player duo exploring the unique world of Amara. Amara is a sword and sorcery realm with carefully crafted lore to uncover, and a growing cast of diverse characters.
</p>
<p>
The storyline follows the main character Ydna, a traveling bard caught up in a flurry of proving grounds quests from his Coterie captain, Orric. Ydna is a curious drifter, who’s joined Eyien’s co-op militia, “The Coterie”.
</p>
<p>
Along the way we discover much about Amara and the city of Eyien, uncover secrets that threaten the kingdom, and piece together the mysterious forces surrounding Eyien.
</p>
              </section>
            </section>
        </section>

        <section class="witchMagic">
          <img src="@/assets/imgs/witchcraft.gif" alt="">
        </section>
      </div>
      </transition>
  </div>
</template>

<script>

import "@/assets/styles/globals.css";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      interaction: true,
    }
  },
  methods: {
    playSound() {
        this.interaction = !this.interaction;
          var audio = new Audio(require('@/assets/audio/introspection.wav'));
          audio.loop = true;
          audio.play();
    }
  }
}
</script>

<style>
#app {
  height:100vh;
  width:100vw;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullScreen {
  height:100vh;
  width:100vw;
}

.headerSize {
  height: 10vh;
  width: 50vw;
}

.rings {
  height:100px;
  width:100px;
  cursor: pointer;
}

.gridCont {
  display:grid;
  height:50vh;
  width:50vw;
  min-width:768px;
  background:rgba(255,255,255,.2);
  grid-template-columns: 70% 30%;
  grid-template-rows: 50% 50%;
  column-gap: 20px;
  row-gap: 20px;
  padding:10px;
}

.aboutAmara p{
  grid-column: 1/2;
  grid-row: 1/2;
  font-size:18px;
  font-family: 'Roboto Condensed', sans-serif;
  color:rgb(25,15,50);
  margin:0;
  padding:5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
