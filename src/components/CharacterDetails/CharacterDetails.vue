<template>
  <div id="character-details" class="container character-details">
    <TheAlerter v-if="toShowAlerter"
      purpose="danger"
      :message="errorMessage"
      class="p-1"
    />
    <div v-else class="row">
      <div class="col-12 pb-3">
        <h1 class="text-center">{{ characterDetails.name }}</h1>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 character-image">
        <img v-if="toShowCharacterDetails" class="img-thumbnail"
          :alt="$t('characters.grid.imageOfCharacterName', {
            characterName: characterDetails.name
          })"
          v-lazy="characterDetails.img"
        />
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12">
        <table class="col-12 table">
          <tbody>
            <tr>
              <th scope="row">{{ $t('characters.details.characterName') }}</th>
              <td>{{ characterDetails.name }}</td>
            </tr>
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
        <div class="col-12 text-center">
          <router-link v-if="canGoBack"
            :to="characterOnHomepage"
            class="btn-solid-md text-uppercase"
          >{{ $t('navbar.goBack') }}</router-link>
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
      toShowCharacterDetails() {
        return Object.keys(this.characterDetails).length > 0;
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
    updated() {
      /* global rotatingText */
      rotatingText();
      
      // Scrolling page to the character details
      if (this.canGoBack === true) {
        // Scroll to character details
        document.getElementById('character-details').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start'
        });
      }
    },
    methods: {
      getCharacterDetails() {
        let toUseLocalStorage = false;
        let localCharacterItems = {};
        const localCharacters = LocalStorage.getCharacters();
        if (localCharacters) {
          const { timestamp, items } = JSON.parse(localCharacters);
          toUseLocalStorage = (Helper.formatters.currentTimestamp() - timestamp)
            < data.config.api.cacheResponseSeconds;
          localCharacterItems = items;
        }

        if (toUseLocalStorage) {
          const characters = localCharacterItems;
          const characterDetails = characters.find((character) => {
            return character.page_name === this.pageName;
          });
          this.characterDetails = characterDetails;
        } else {
          BreakingBadAPI.getAllCharacters().then((remoteCharacters) => {
            LocalStorage.setCharacters({
              timestamp: Helper.formatters.currentTimestamp(),
              items: Helper.characters.addPageNameItem(remoteCharacters)
            });
            const featuredCharacter = remoteCharacters.find((character) => {
              return character.char_id === Helper.characters.idFromPageName(this.pageName);
            });
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
  th {
    min-width: 8rem;
    padding-left: 0;
  }

  .table {
    color: #fff;
  }

  .table > tbody > tr:first-child > th,
  .table > tbody > tr:first-child > td {
    border: none;
  }

  .btn-solid-md {
    position: initial;
  }

  .character-details {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: #262431;
  }

  .character-image img {
    width: 100%;
    height: 32rem;
    object-fit: cover;
    color: #495057;
    text-align: center;
  }

  .character-image {
    text-align: center;
    position: relative;
    margin-bottom: 1rem;
  }

  @media (max-width: 767px) {
    .character-image img {
      width: 100%;
      height: 32rem;
      object-fit: cover;
      color: #495057;
      text-align: center;
    }
  }
</style>
