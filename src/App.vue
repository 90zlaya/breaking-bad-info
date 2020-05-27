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
      this.scrollToElement(this.$route.hash);
    },
    methods: {
      scrollToElement(routeHash) {
        if (routeHash !== '') {
          const element = routeHash.replace('#', '');

          if (document.getElementById(element) !== undefined) {
            document.getElementById(element).scrollIntoView();
          }
        }
      },
    }
  };
</script>
