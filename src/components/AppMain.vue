<script>
import AppContents from './AppContents.vue';
import { state } from '../state.js'
import AppSelect from './AppSelect.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    components: {
        AppContents,
        AppSelect
    },
    created() {
        state.fetchArchetype();

    }/* ,
    methods: {
        filteredArchetype() {
            const selectedArchetypeUrl = this.state.base_url + `&archetype=${this.state.archetype_name}`;
            console.log(selectedArchetypeUrl);
        } 
    } */
}
</script>

<template>
    <div id="app_main">
        <div class="container">

            <div class="py-4 col-3">
                <!-- <select id="archetype" @change="state.fetchData" v-model="state.archetype_name" class="form-select">
                    <option value="" disabled>Searc Archetype</option>
                    <option v-for="archetype_name in state.archetypes_name" :value="archetype_name.archetype_name">
                        {{ archetype_name.archetype_name }}
                    </option>

                </select> -->
                <AppSelect></AppSelect>

            </div>


            <AppContents></AppContents>
            <!-- contents -->

        </div>
    </div>
</template>
