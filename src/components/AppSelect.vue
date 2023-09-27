<script>
import { state } from '../state';
export default {
    name: 'AppSelect',
    emits: 'mySelect',
    data() {
        return {
            state
        }
    }
}
</script>
<template>
    <select id="archetype" @change="state.fetchData" v-model="state.archetype_name" class="form-select">
        <option value="" disabled>Searc Archetype</option>
        <option v-for="archetype_name in state.archetypes_name" :value="archetype_name.archetype_name">
            {{ archetype_name.archetype_name }}
        </option>

    </select>
</template>

<style ></style>