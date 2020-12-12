<template>
  <div id="characters" class="basic-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3
            class="text-center pb-3"
          >{{ $t('characters.sectionTitle') }}</h3>
          <div
            class="p-heading p-large"
          >{{ $t('characters.sectionDescription') }}</div>
        </div>
      </div>
    </div>
    <TheAlerter
      v-if="toShowAlerter"
      purpose="danger"
      :message="errorMessage"
    />
    <template v-else>
      <CharactersSearch
        @show-search-results="showSearchResults"
        @show-original-view="featuredCharacters"
       />
      <CharactersGrid
        :show-loader="toShow.loader"
        :characters="characters.grid"
        :is-able-to-load-more="toShow.loadMoreButton"
       />
      <CharactersLoadMore
        v-if="toShow.loadMoreButton"
        @load-more-characters="loadMoreCharacters"
       />
    </template>
  </div>
</template>

<script>
  import data from './../../mixins/data.js';
  
  import Helper from './../../libraries/Helper.js';
  import LocalStorage from './../../libraries/LocalStorage.js';
  import BreakingBadAPI from './../../libraries/BreakingBadAPI.js';

  import CharactersSearch from './../Characters/CharactersSearch.vue';
  import CharactersGrid from './../Characters/CharactersGrid.vue';
  import CharactersLoadMore from './../Characters/CharactersLoadMore.vue';
  import TheAlerter from './../TheAlerter.vue';

  export default {
    name: 'BaseCharacters',
    components: {
      CharactersSearch,
      CharactersGrid,
      CharactersLoadMore,
      TheAlerter
    },
    computed: {
      toShowAlerter() {
        return this.errorMessage.length > 0;
      }
    },
    data() {
      return {
        characters: {
          all: [],
          grid: []
        },
        toShow: {
          loader: true,
          loadMoreButton: false
        },
        errorMessage: ''
      };
    },
    created() {
      const localCharacters = LocalStorage.getCharacters();

      if (localCharacters) {
        this.characters.all = JSON.parse(localCharacters);
        this.featuredCharacters();
        this.toShow.loader = false;
      } else {
        BreakingBadAPI.getAllCharacters().then((remoteCharacters) => {
          this.characters.all = Helper.characters.addPageNameItem(remoteCharacters);
          this.featuredCharacters();
          this.toShow.loader = false;
          LocalStorage.setCharacters(remoteCharacters);
        }).catch((error) => {
          console.error('Fetching characters failed', error);
          this.errorMessage = this.$t('characters.errors.fetchingCharacters');
        });
      }
    },
    methods: {
      featuredCharacters() {
        this.toShow.loadMoreButton = true;
        const { numberOfCharacters } = data.config.characters;
        this.characters.grid = this.characters.all.slice(0, numberOfCharacters);
      },
      loadMoreCharacters() {
        const { numberOfCharacters } = data.config.characters;
        const gridCharactersLength = this.characters.grid.length;
        const ending = gridCharactersLength + numberOfCharacters;
        const loadedCharacters = this.characters.all.slice(gridCharactersLength, ending);

        this.characters.grid = this.characters.grid.concat(loadedCharacters);

        if (this.characters.grid.length === this.characters.all.length) {
          this.toShow.loadMoreButton = false;
        }

        // Scroll to newly loaded characters
        console.log('BaseCharacters.vue scrollIntoView for element', data.ids.loadMoreCharacters);
        document.getElementById(data.ids.loadMoreCharacters).scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      },
      showSearchResults(searchTerm) {
        this.toShow.loadMoreButton = false;
        this.characters.grid = this.characters.all.filter((character) => {
          return character.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }
    }
  };
</script>
