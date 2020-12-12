<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    updated() {
      // Scroll to element
      if (this.$route.hash) {
        const element = document.getElementById(this.$route.hash.replace('#', ''));
        if (element) {
          console.log('App.vue scrollIntoView for element', this.$route.hash);
          element.scrollIntoView({
            block: 'center',
            inline: 'nearest'
          });
        }
      }
    }
  };
</script>
