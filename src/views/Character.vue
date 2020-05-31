<template>
  <div id="view-home">
    <TheNavbar :to-hide-navigations="true">
      <router-link
        :to="charactersSearchHomepage"
        class="nav-link page-scroll"
      >{{ $t('navbar.goBack') }}</router-link>
    </TheNavbar>
    <TheHeader />
    <div class="container view-character">
      <h1>{{ character.name }} </h1>
      <p>This character is portrayed by {{ character.portrayed }}</p>
    </div>
    <TheFooter />
    <TheCopyright />
  </div>
</template>

<script>
  import {
    navbarSections,
    routerRoutes,
  } from '../mixins/data.js';

  import TheNavbar from '../components/TheNavbar.vue';
  import TheHeader from '../components/TheHeader.vue';
  import TheFooter from '../components/TheFooter.vue';
  import TheCopyright from '../components/TheCopyright.vue';

  export default {
    components: {
      TheNavbar,
      TheHeader,
      TheFooter,
      TheCopyright,
    },
    props: {
      character: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      console.log('Character page details from prop', this.character);
    },
    computed: {
      charactersSearchHomepage() {
        return {
          name: routerRoutes.home.name,
          hash: navbarSections.characters,
        };
      },
    },
  };
</script>

<style scoped>
  .view-character {
    padding-top: 0.5rem;
  }
</style>
