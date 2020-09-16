<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  export default {
    updated() {
      /* global hidePreloader */
      hidePreloader();
      /* global cardSlider */
      cardSlider();
      /* global textRotation */
      textRotation();

      // Scroll to element
      if (this.$route.hash) {
        const element = this.$route.hash.replace('#', '');

      if (document.getElementById(element)) {
          document.getElementById(element).scrollIntoView();
        }
      }
    }
  };
</script>
