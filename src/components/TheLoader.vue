<template>
  <img :src="loader" class="loader" />
</template>

<script>
  import Helper from './../libraries/Helper.js';

  export default {
    name: 'TheLoader',
    computed: {
      loader() {
        return Helper.images.dotLoader();
      }
    }
  };
</script>

<style scoped>
  .loader {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 15%;
  }

  .loader:has(> div) {
    width: 100%;
    height: 100%;
  }
</style>
