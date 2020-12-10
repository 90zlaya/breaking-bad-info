<template>
  <div class="container view-character">
    <TheAlerter
      v-if="toShowAlerter"
      purpose="danger"
      :message="errorMessage"
      class="p-1"
    />
    <div v-else class="row">
      <div class="col-12 pt-3">
        <h1 class="text-center">{{ characterDetails.name }}</h1>
      </div>
      <div v-lazy-container="lazyLoadContainer"
        class="col-lg-4 col-md-6 col-sm-12 pt-3 pb-3"
      >
        <img
          :data-src="characterDetails.img"
          :alt="$t('characters.grid.imageOfCharacterName', {
            characterName: characterDetails.name
          })"
          :id="characterDetails.page_name"
          class="img-thumbnail"
          loading="lazy"
        />
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12 row pt-3 pb-3">
        <div class="col-12">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">{{ $t('characters.details.portrayedBy') }}</th>
                <td>{{ characterDetails.portrayed }}</td>
              </tr>
              <tr>
                <th scope="row">{{ $t('characters.details.nickname') }}</th>
                <td>{{ characterDetails.nickname }}</td>
              </tr>
              <tr>
                <th scope="row">{{ $t('characters.details.birthday') }}</th>
                <td>{{ characterDetails.birthday }}</td>
              </tr>
              <tr>
                <th scope="row">{{ $t('characters.details.occupation') }}</th>
                <td>{{ characterDetails.occupation }}</td>
              </tr>
              <tr>
                <th scope="row">{{ $t('characters.details.lifeStatus') }}</th>
                <td>{{ characterDetails.life_status }}</td>
              </tr>
              <tr>
                <th scope="row">{{ $t('characters.details.appearance') }}</th>
                <td>{{ characterDetails.appearance }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12">
          <router-link
            v-if="canGoBack"
            :to="characterOnHomepage"
            class="btn-solid-md text-uppercase text-center"
          >{{ $t('navbar.goBack') }}</router-link>
          <a v-else
            class="btn-solid-lg text-black text-uppercase text-center"
            @click="backToHome"
          >{{ $t('navbar.home') }}</a>
        </div>
      </div>
    </div>
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
      },
      pageName: {
        type: String,
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
          hash: `#${ this.pageName }`
        };
      },
      toShowAlerter() {
        return this.errorMessage.length > 0;
      },
      lazyLoadContainer() {
        return {
          selector: 'img'
        };
      }
    },
    watch: {
      pageName() {
        this.getCharacterDetails();
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
    methods: {
      backToHome() {
        window.location.href = data.routerRoutes.home.path;
      },
      getCharacterDetails() {
        const localCharacters = LocalStorage.getCharacters();

        if (localCharacters) {
          const characters = JSON.parse(localCharacters);
          const characterDetails = characters.find((character) => {
            return character.page_name === this.pageName;
          });
          console.log('Character details', characterDetails);
          this.characterDetails = characterDetails;
        } else {
          BreakingBadAPI.getAllCharacters().then((remoteCharacters) => {
            LocalStorage.setCharacters(Helper.characters.addPageNameItem(remoteCharacters));
            const featuredCharacter = remoteCharacters.find((character) => {
              return character.char_id === Helper.characters.idFromPageName(this.pageName);
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

<style scoped>
  .table {
    color: #fff;
  }

  .btn-solid-md {
    position: initial;
  }
</style>
