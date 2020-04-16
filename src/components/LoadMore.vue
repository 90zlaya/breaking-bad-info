<template>
  <div class="container">
    <LoadMore-Loader/>
  </div>
</template>

<script>
  import Loader from './Loader.vue';

  export default {
    components: {
      'LoadMore-Loader': Loader,
    },
  };
</script>
