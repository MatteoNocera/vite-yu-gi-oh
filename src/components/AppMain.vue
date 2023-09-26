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
                <select class="form-select" aria-label="Default select example">
                    <option selected>Alien</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

            </div>


            <AppContents></AppContents>
            <!-- contents -->

        </div>
    </div>
</template>
