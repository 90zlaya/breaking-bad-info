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
