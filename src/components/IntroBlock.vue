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
                Episodes release every Wednesday!
            </h2>    
            
            <hr>

            <h2>
                We are Sean and Andy, a GM/Player duo exploring the unique high fantasy world of Amara.
            </h2> 
            

            <p>
                "Welcome to Amara" the podcast, is a sword and sorcery high production dramatic retelling of a play by post Dungeon World campaign.  It's a realm with carefully crafted lore to uncover, featuring a growing cast of diverse characters of fast friends, malignatnt baddies and beasts alike.
            </p>

            <p>
                Eyien is where we begin, it’s the place to be for security and for power in Amara. Within Eyien resides a group of swordsmen, mages, and varlets, known as “The Coterie”. Along the way we discover, and breath in the city of Eyien. We uncover supressed and guarded secrets that threaten the kingdom's safety. 
            </p>



            <p>
                Relax and share in our discover as you immerse yourself into our world. Listen to us piece together the mysterious forces surrounding this grand city of opportunity and potential.
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
    text-align:center;
}

.infoWrap img {
    width:250px;
    padding:10px 20px;
    margin: 0 auto;
    float:left;
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