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
    <div class="card">
        <img class="card-img-top" :src="path" alt="Title">
        <div class="card-body">
            <h4 class="card-title">{{ name }}</h4>
            <p class="card-text">{{ archetype }}</p>
        </div>
    </div>
</template>



<style></style>