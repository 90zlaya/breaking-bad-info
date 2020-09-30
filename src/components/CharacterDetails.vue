<template>
  <div class="container view-character">
    <p>Character details {{ $route.params.pageName }}</p>
    <router-link
      v-if="canGoBack"
      :to="characterOnHomepage"
      :class="classes.button"
      type="button"
    >{{ $t('navbar.goBack') }}</router-link>
    <a
      v-else
      :class="classes.button"
      @click="backToHome"
    >{{ $t('navbar.home') }}</a>
  </div>
</template>

<script>
  import data from './../mixins/data.js';

  export default {
    props: {
      canGoBack: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      characterOnHomepage() {
        return {
          name: data.routerRoutes.home.name,
          hash: '#' + this.$route.params.pageName
        };
      },
      classes() {
        return {
          button: 'btn-solid-lg text-black text-uppercase'
        }
      }
    },
    created() {
      console.log('BaseCharacterDetails created', this.$route.params.pageName);
    },
    mounted() {
      console.log('BaseCharacterDetails mounted', this.$route.params.pageName);
    },
    updated() {
      console.log('BaseCharacterDetails updated', this.$route.params.pageName);
    },
    methods: {
      backToHome() {
        window.location.href = data.routerRoutes.home.path;
      }
    }
  };
</script>