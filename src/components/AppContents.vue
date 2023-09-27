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
        state.fetchData()
    }
}
</script>
<template>
    <div class="contents bg-white p-5">
        <div class="banner bg-black text-white p-3">
            Found 39 card
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 justify-content-between  m-0 g-3">

            <AppCard v-for="card in state.cards" :name="card.name" :path="card.card_images[0].image_url"
                :archetype="card.archetype">
            </AppCard>
            <!-- Card -->

        </div>
    </div>
</template>


<style></style>