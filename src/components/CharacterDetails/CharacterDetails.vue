<template>
  <div class="container character-details">
    <TheAlerter v-if="toShowAlerter"
      purpose="danger"
      :message="errorMessage"
      class="p-1"
    />
    <div v-else class="row">
      <div class="col-12 pt-3 pb-5">
        <h1 class="text-center">{{ characterDetails.name }}</h1>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 pt-3 pb-3">
        <img class="img-thumbnail"
          :src="characterDetails.img"
          :alt="$t('characters.grid.imageOfCharacterName', {
            characterName: characterDetails.name
          })"
          :id="characterDetails.page_name"
        />
      </div>
      <div class="col-lg-9 col-md-6 col-sm-12 pt-3 pb-3">
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
            </tbody>
          </table>
        </div>
        <div class="col-12 pt-4">
          <router-link v-if="canGoBack"
            :to="characterOnHomepage"
            class="btn-solid-md text-uppercase w-100"
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
      console.log('CharacterDetails Mounted');
      this.getCharacterDetails();
    },
    updated() {
      console.log('CharacterDetails Updated');
    },
    methods: {
      getCharacterDetails() {
        const localCharacters = LocalStorage.getCharacters();

        if (localCharacters) {
          const characters = JSON.parse(localCharacters);
          const characterDetails = characters.find((character) => {
            return character.page_name === this.pageName;
          });
          this.characterDetails = characterDetails;
        } else {
          BreakingBadAPI.getAllCharacters().then((remoteCharacters) => {
            LocalStorage.setCharacters(Helper.characters.addPageNameItem(remoteCharacters));
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
    min-width: 9rem;
  }

  .table {
    color: #fff;
  }

  .btn-solid-md {
    position: initial;
  }

  .character-details {
    padding-top: 5rem;
    padding-bottom: 2.5rem;
    background-color: #262431;
  }

  .img-thumbnail {
    max-height: 20rem;
    margin: 0 auto;
    display: inherit;
  }

  @media (max-width: 767px) {
    .character-details {
      padding-bottom: unset;
    }

    .img-thumbnail {
      max-height: unset;
    }
  }
</style>
