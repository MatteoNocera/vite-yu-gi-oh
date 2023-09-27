<script>
import { state } from '../state.js'

export default {
    name: 'AppCard',
    data() {
        return {
            state
        }
    },
    props: {
        name: String,
        archetype: String,
        path: String

    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100 p-0">
            <img class="" :src="path" alt="Title">
            <div class="card-body text-center">
                <h6 class="card-title text-white text-uppercase">{{ name }}</h6>
                <p class="card-text">{{ archetype }}</p>
            </div>
        </div>
    </div>
</template>



<style></style>