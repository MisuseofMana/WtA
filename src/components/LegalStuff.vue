<template>
     <section class="legal block">
        <section>
            <p>
                "Welcome to Amara" is a product of "Misuse of Mana LLC" &copy; | No portion of this website or the content it represents may be reproduced in any 
                manner whatsoever without the express permission from the authors, except in the case of short excerpts used for review. 
                | <a href="http://www.seanyager.com" target="_blank"> seanyager.com </a>
            </p>
            
            <p>
                Site Updated July 15th 2020
            </p>
        
            <p>
            Special thank you to freesound.org user <a href="https://freesound.org/people/trundlefly/" target="_blank">trundlefly</a>, 
            and the website <a href="https://www.purple-planet.com/" target="_blank">purple-planet.com</a> for providing audio.
            </p>
        </section>
    </section>
</template>

<script>
    export default {
        name: "LegalStuff",
    }
</script>

<style scoped>
/* DEFAULT STYLES */
    .legal{
        z-index:999;
        text-align:center;
        font-size:14px;
        display:block;
        font-family:"Roboto Condensed", sans-serif;
    }
    
    .legal p {
        font-size:14px;
    }
  
/* MOBILE PORTRAIT MODE */
@media (min-width: 667px) {
   .legal{
   }

}

/* TABLET STYLES */
@media (min-width: 768px) {
   .legal{
   }
}
</style>