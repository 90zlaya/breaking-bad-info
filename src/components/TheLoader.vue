<template>
  <img :src="loaderImage" class="loader" />
</template>

<script>
  import data from './../mixins/data.js';

  export default {
    computed: {
      loaderImage() {
        const {
          root,
          loaderImage
        } = data.config.images;
        return root + loaderImage;
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
