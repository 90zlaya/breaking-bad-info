<template>
  <div class="container">
    <Grid-Loader/>
  </div>
</template>

<script>
  import Loader from './Loader.vue';

  export default {
    components: {
      'Grid-Loader': Loader,
    },
  };
</script>
