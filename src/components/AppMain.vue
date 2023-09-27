<script>
import AppContents from './AppContents.vue';
import { state } from '../state.js'

export default {
    name: 'AppMain',
    emits: ['archetypeSelect'],
    data() {
        return {
            state
        }
    },
    components: {
        AppContents
    },
    created() {
        state.fetchArchetype()
    }
}
</script>

<template>
    <div id="app_main">
        <div class="container">

            <div class="py-4 col-3">
                <select id="archetype" @change="$emit('archetypeSelect')" v-model="state.archetype_name"
                    class="form-select">
                    <option placeholder="Searc Archetype" disabled>Searc Archetype</option>
                    <option v-for="archetype_name in state.archetypes_name" :value="archetype_name.archetype_name">{{
                        archetype_name.archetype_name }}</option>

                </select>

            </div>


            <AppContents></AppContents>
            <!-- contents -->

        </div>
    </div>
</template>
