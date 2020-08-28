<template>
    <footer class="navBar block">
        <section class="socialWrap">
        <a href="http://www.twitter.com/misuseofmana" target="_blank">
            <p>Twitter</p>
            <img src="@/assets/imgs/twitter.png" alt="twitter icon">
        </a>

        <a target="_blank" href="http://www.instagram.com/misuseofmana">
            <p>Instagram</p>
            <img src="@/assets/imgs/instagram.png" alt="instagram icon">
        </a>

        <a target="_blank" href="mailto:seanyagerart@gmail.com">
            <p>Email</p>
            <img src="@/assets/imgs/email.png" alt="email icon">
        </a>
        <a target="_blank" href="https://discord.gg/82GpmYD">
            <p>Discord</p>
            <img src="@/assets/imgs/discord.png" alt="discord icon - click to join our discord">
        </a>
        </section>
    </footer>
</template>

<script>
    export default {
        name:"NavigationBar"
    }
</script>

<style scoped>
/* DEFAULT STYLES - MOBILE SITE */
 /* Footer Container, Social Icons */
    .navBar {
    }

    .navBar p {
        display:none;
    }
    
    /* Inner Wrapper for Social Icons */
    .socialWrap {
        display:flex;
        justify-content: space-evenly;
        flex-direction:row;
    }

    /* Controls image size of Social Icons */
    .socialWrap img {
        width:50px;
    }

    .socialWrap a:hover {
        filter: hue-rotate(-20deg);
    }

    p {
        margin:10px 0;
        padding:0;
        text-align:center;
        text-decoration:none;
    }
    
    a {
        text-decoration: none;
    }

/* MOBILE PORTRAIT MODE */
@media (min-width: 667px) {
   /* Footer Container, Social Icons */
   .navBar {
   }

   .navBar p {
        display:block;
    }
   
   /* Inner Wrapper for Social Icons */
   .socialWrap {
   }

   /* Controls image size of Social Icons */
   .socialWrap img {
       width:75px;
       margin:10px;
   }
}

/* TABLET STYLES */
@media (min-width: 768px) {
   /* Footer Container, Social Icons */
   .navBar {
   }
   
   /* Inner Wrapper for Social Icons */
   .socialWrap {
   }

   /* Controls image size of Social Icons */
   .socialWrap img {
   }
}
</style>