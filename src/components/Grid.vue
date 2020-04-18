<template>
  <div class="container">
    <Grid-Loader v-if="showLoader"/>
    <ul v-else v-for="character in characters">
      <li>{{ character.name }}</li>
    </ul>
  </div>
</template>

<script>
  import Loader from './Loader.vue';

  export default {
    components: {
      'Grid-Loader': Loader,
    },
    props: {
      showLoader: Boolean,
      characters: Array,
    },
  };
</script>
