<template>
  <div class="container view-character">
    <p>Character details {{ $route.params.pageName }}</p>
    <router-link
      v-if="canGoBack"
      :to="characterOnHomepage"
      class="btn-solid-md"
    >{{ $t('navbar.goBack') }}</router-link>
    <a
      v-else
      class="btn-solid-lg text-black text-uppercase"
      @click="backToHome"
    >{{ $t('navbar.home') }}</a>
  </div>
</template>

<script>
  import data from './../mixins/data.js';
  
  import LocalStorage from './../libraries/LocalStorage.js';

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
          hash: `#${ this.$route.params.pageName }`
        };
      }
    },
    data() {
      return {
        characterDetails: {}
      };
    },
    created() {
      console.log('BaseCharacterDetails created', this.$route.params.pageName);
    },
    mounted() {
      console.log('BaseCharacterDetails mounted', this.$route.params.pageName);
      this.characterDetails = this.getCharacterDetails();
      console.log('Character details', this.$route.params.pageName, this.characterDetails);
    },
    updated() {
      console.log('BaseCharacterDetails updated', this.$route.params.pageName);
      if (this.$route.params.pageName) {
        this.characterDetails = this.getCharacterDetails();
        console.log('Character details', this.$route.params.pageName, this.characterDetails);
      }
    },
    methods: {
      backToHome() {
        window.location.href = data.routerRoutes.home.path;
      },
      getCharacterDetails() {
        const localCharacters = LocalStorage.getCharacters();

        if (localCharacters) {
          const characters = JSON.parse(localCharacters);
          const characterDetails = characters.find((character) => {
            return Object.is(character.page_name, this.$route.params.pageName);
          });

          return characterDetails;
        }

        return {};
      }
    }
  };
</script>