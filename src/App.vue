<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',

  data() {
    return {


    }
  },


  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <!-- header -->


  <AppMain></AppMain>
  <!-- main -->
</template>


<style lang="scss"></style>