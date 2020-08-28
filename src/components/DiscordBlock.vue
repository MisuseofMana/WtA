<template>
    <a class="discordLinkWrap" href="https://discord.gg/82GpmYD">
        <section class="discordLink">
            <section>
                <p>
                    Join our <strong>Dungeon World community</strong> where you can get more goodies and help us shape the future of <strong>"Welcome to Amara"</strong>.
                </p>

                <p>
                    <strong>Click this box to visit our Discord.</strong>
                </p>
            </section>

            <img src="@/assets/imgs/discord.png" alt="discord icon - click to join our discord">
        
        </section>
    </a>
</template>

<script>
    export default {
        name:"DiscordBlock"
    }
</script>

<style scoped>
/* DEFAULT STYLES - MOBILE SITE */
/* Flex Container For Discord Link */
    /* Removes Underline from discord text */
    .discordLinkWrap {
        display:block;
        text-decoration: none;
        background: var(--background);
        color:var(--main-color);
        margin:10px 0;
    }
    
    .discordLink {
        display:flex;
        justify-content: space-around;
        align-items: center;
        padding:20px;
        text-align:center;
    }

    /* Discord Link Text Size */
    .discordLink p {
        font-size:14px;
        padding:0 20px
    }

    /* Changes size of discord icon image */
    .discordLink img {
        width:100px;
        padding:0 20px;
    }
    
    /* Hover Response for discord block */
    .discordLinkWrap:hover {
        color:rgb(225, 0, 255);
        background:var(--link-background);
    }

/* MOBILE PORTRAIT MODE */
@media (min-width: 667px) {
     /* Removes Underline from discord text */
   .discordLinkWrap {
   }
    
    /* Flex Container For Discord Link */
   .discordLink {
   }

   /* Discord Link Text Size */
   .discordLink p {
       font-size:17px;
   }

   /* Changes size of discord icon image */
   .discordLink img {
       width:120px;
       margin:0;
   }
}

/* TABLET STYLES */
@media (min-width: 768px) {
    /* Removes Underline from discord text */
   .discordLinkWrap {
   }
 
 /* Flex Container For Discord Link */
   .discordLink {
   }

   /* Discord Link Text Size */
   .discordLink p {
   }

   /* Changes size of discord icon image */
   .discordLink img {
   }
}
</style>