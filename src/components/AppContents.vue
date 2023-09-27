<script>
import AppCard from './AppCard.vue';

import { state } from '../state.js'

export default {
    name: 'AppContents',
    data() {
        return {
            state
        }
    },
    components: {
        AppCard
    },
    created() {

        //console.log(state);
        //setTimeout(state.fetchData(), 2000); //non funziona
        state.fetchData()
    }
}
</script>
<template>
    <div class="contents bg-white p-5">
        <div class="banner bg-black text-white p-3">
            Found 39 card
        </div>
        <div v-if="state.cards != null" class="row row-cols-1 row-cols-sm-2 row-cols-md-5 justify-content-between m-0 g-3">

            <AppCard v-for="card in state.cards" :name="card.name" :path="card.card_images[0].image_url"
                :archetype="card.archetype">
            </AppCard>
            <!-- Card -->

        </div>
        <div v-else class="loader text-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
            <span>...Loading...</span>
        </div>
    </div>
</template>


<style></style>