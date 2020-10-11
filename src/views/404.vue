<template>
  <div id="view-404">
    <ThePreloader />
    <The404 />
  </div>
</template>

<script>
  import ThePreloader from './../components/ThePreloader.vue';
  import The404 from './../components/The404.vue';

  export default {
    components: {
      ThePreloader,
      The404
    },
    created() {
      // Scroll to top
      window.scrollTo(0, 0);
      /* global preloaderHandler */
      preloaderHandler();
    }
  };
</script>
