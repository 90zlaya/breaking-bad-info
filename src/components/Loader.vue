<template>
  <img v-bind:src="loaderImagePath" class="loader"/>
</template>

<script>
  import config from './../../.config.json';

  export default {
    data() {
      let {
        root,
        loaderImage
      } = config.images;

      return {
        loaderImagePath: root + loaderImage,
      };
    },
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
