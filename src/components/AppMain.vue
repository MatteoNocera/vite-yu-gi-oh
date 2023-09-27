<script>
import AppContents from './AppContents.vue';

export default {
    name: 'AppMain',
    components: {
        AppContents
    }
}
</script>

<template>
    <div id="app_main">
        <div class="container">

            <div class="py-4 col-3">
                <select id="archetype" class="form-select" aria-label="Default select example">
                    <option selected>Searc Archetype</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

            </div>


            <AppContents></AppContents>
            <!-- contents -->

        </div>
    </div>
</template>
