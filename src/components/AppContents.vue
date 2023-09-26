<script>
import AppCard from './AppCard.vue';

export default {
    name: 'AppContents',
    components: {
        AppCard
    }
}
</script>
<template>
    <div class="contents bg-white p-5">
        <div class="banner bg-black text-white p-3">
            Found 39 card
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 justify-content-between justify-content-md-center">

            <AppCard></AppCard>
            <!-- Card -->

        </div>
    </div>
</template>


<style></style>