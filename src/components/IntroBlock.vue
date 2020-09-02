<template>
    <div class="infoWrap block">
        <section>
            <img src="@/assets/imgs/s1-wta-icon.png" alt="">
        </section>

        <section class="content">
            <h1>
                Season One is out now! 
            </h1>


            <h2>
                <span class="tick">E</span>pisodes release every Wed<span class="tick">n</span>esday!
            </h2>    
            
            <hr>

            <h2>
                We are Sean and Andy, a GM/Player duo exploring <span class="tick">t</span>h<span class="tick">e</span> unique high fantasy wo<span class="tick">r</span>ld of Amara.
            </h2> 
            

            <p>
                "Welcome <span class="tick">t</span>o Amara" t<span class="tick">h</span>e podcast, is a sword and sorc<span class="tick">e</span>ry h<span class="tick">i</span>gh productio<span class="tick">n</span> dramatic retelling of a play by post Dungeon World campaign.  It'<span class="tick">s</span> a realm wi<span class="tick">t</span>h ca<span class="tick">r</span>efully crafted lore to <span class="tick">u</span>ncover, featuring a growing cast of diverse characters of fast friends, <span class="tick">m</span>alignant baddi<span class="tick">e</span>s a<span class="tick">n</span>d beas<span class="tick">t</span>s alike.
            </p>

            <p>
                Eyien is where we begin, it’s the place to be for <span class="tick">s</span>ecurity and for power in Amara. Within Eyien resides a group of swordsmen, mages, and varlets, known as “The Coterie”. Along the way we discover, and breathe in the city of Eyien. We uncover supressed and guarded secrets that threaten the kingdom's safety. 
            </p>

            <p>
                Relax and share in our discovery as you immerse yourself into our world. Listen to us piece together the mysterious forces surrounding this grand city of opportunity and potential.
            </p>

            <h2>See you in Amara,</h2>

            <h1>-Sean &amp; Andy</h1>
        </section>
    </div>
</template>

<script>
    export default {
        name:"IntroBlock"
    }
</script>

<style scoped>

.content h1 {
    text-align:center;
    font-size:20px;
}

.content h2 {
    font-size:14px;
    text-align:center;
}

.content p {
    font-size:22px;
    text-align:center;
}

.infoWrap img {
    width:250px;
    padding:10px 20px;
    margin: 0 auto;
    float:left;
}

.tick {
    display: inline-block;
    position: relative;
    white-space: nowrap;
}
.tick::before {
    content: '.';
    white-space: nowrap;
    display: inline-block;
    position: absolute;
    bottom: -0.2em;
    font-size:8px;
    left: 0;
    text-align: center;
    width: 100%;
}

@media (min-width: 667px) {
.content h1 {
    font-size:30px;
    text-align:left;
}

.content h2 {
    font-size:20px;
    text-align:left;
}

.content p {
    text-align:left;
}

}

/* TABLET STYLES */
@media (min-width: 768px) {
.content h1 {
    font-size:40px;
}

.content h2 {
    font-size:30px;
}
}
</style>