<template>
    <header class="headerText block">
        <h1>
            WELCOME TO AMARA
        </h1>
    </header>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>

<style scoped>
/* DEFAULT STYLES - MOBILE SITE */
.headerText {
    display:block;
    font-size:12px;
    background: var(--background);
    color:var(--main-color);
    text-align: center;
}

h1 {
    margin:0;
    font-size:2em;
}

/* MOBILE PORTRAIT MODE */
@media (min-width: 667px) {
    .headerText {
        font-size:15px;
    }
}

/* TABLET STYLES */
@media (min-width: 768px) {
    .headerText {
       font-size:19px;
   }
}
</style>