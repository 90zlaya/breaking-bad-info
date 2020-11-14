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
    <TheAlerter
      v-if="toShowAlerter"
      purpose="danger"
      :message="errorMessage"
      class="p-1"
    />
  </div>
</template>

<script>
  import data from './../../mixins/data.js';
  
  import Helper from './../../libraries/Helper.js';
  import LocalStorage from './../../libraries/LocalStorage.js';
  import BreakingBadAPI from './../../libraries/BreakingBadAPI.js';
  
  import TheAlerter from './../TheAlerter.vue';

  export default {
    name: 'CharacterDetails',
    props: {
      canGoBack: {
        type: Boolean,
        required: true
      }
    },
    components: {
      TheAlerter
    },
    computed: {
      characterOnHomepage() {
        return {
          name: data.routerRoutes.home.name,
          hash: `#${ this.$route.params.pageName }`
        };
      },
      toShowAlerter() {
        return this.errorMessage.length > 0;
      }
    },
    data() {
      return {
        characterDetails: {},
        errorMessage: ''
      };
    },
    mounted() {
      this.getCharacterDetails();
    },
    updated() {
      if (this.$route.params.pageName) {
        this.getCharacterDetails();
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
            return character.page_name === this.$route.params.pageName;
          });
          console.log('Character details', characterDetails);
          this.characterDetails = characterDetails;
        } else {
          BreakingBadAPI.getAllCharacters().then((remoteCharacters) => {
            LocalStorage.setCharacters(Helper.characters.addPageNameItem(remoteCharacters));
            const featuredCharacter = remoteCharacters.find((character) => {
              return character.char_id === Helper.characters.idFromPageName(this.$route.params.pageName)
              ;
            });
            console.log('Character details', featuredCharacter);
            this.characterDetails = featuredCharacter;
          }).catch((error) => {
            console.error('Fetching characters failed', error);
            this.errorMessage = this.$t('characters.errors.fetchingCharacters');
          });
        }
      }
    }
  };
</script>