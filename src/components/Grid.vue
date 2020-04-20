<template>
  <div class="container">
    <div v-if="showLoader" class="row">
      <div class="col-12">
        <Grid-Loader />
      </div>
    </div>
    <div v-else class="row">
      <div class="col-12">
        <ul v-for="character in characters">
          <li>{{ character.name }}</li>
        </ul>
      </div>
    </div>
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
