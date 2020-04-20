<template>
  <img v-bind:src="loaderImagePath" class="loader"/>
</template>

<script>
  import config from './../../.config.json';

  export default {
    data() {
      return {
        loaderImagePath: config.images.root + config.images.loaderImage,
      };
    },
  };
</script>
