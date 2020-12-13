<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isHomeRoute" />
    </keep-alive>
    <router-view v-if="!isHomeRoute" />
  </div>
</template>

<script>
  import data from './mixins/data.js';

  export default {
    name: 'App',
    computed: {
      isHomeRoute() {
        return this.$route.name === data.routerRoutes.home.name;
      }
    },
    updated() {
      // Scroll to the character on homepage
      if (this.$route.hash) {
        const element = document.getElementById(this.$route.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({
            block: 'center',
            inline: 'nearest'
          });
        }
      }
    }
  };
</script>
