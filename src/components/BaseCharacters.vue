<template>
  <div id="characters" class="basic-1">
    <TheAlerter v-if="errorMessage !== ''" :purpose="'danger'" :message="errorMessage" />
    <template v-else>
      <CharactersSearch
        @showSearchResults="showSearchResults"
        @showOriginalView="featuredCharacters"
       />
      <CharactersGrid
        :show-loader="toShow.loader"
        :characters="characters.grid"
       />
      <CharactersLoadMore
        v-if="toShow.loadMoreButton"
        @loadMoreCharacters="loadMoreCharacters"
       />
    </template>
  </div>
</template>

<script>
  import config from './../../.config.json';
  import localStorage from './../libs/LocalStorage.js';
  import {
    apiMap,
  } from './../mixins/data.js';

  import CharactersSearch from './CharactersSearch.vue';
  import CharactersGrid from './CharactersGrid.vue';
  import CharactersLoadMore from './CharactersLoadMore.vue';
  import TheAlerter from './TheAlerter.vue';

  export default {
    components: {
      CharactersSearch,
      CharactersGrid,
      CharactersLoadMore,
      TheAlerter,
    },
    data() {
      return {
        characters: {
          all: [],
          grid: [],
        },
        toShow: {
          loader: true,
          loadMoreButton: false,
        },
        errorMessage: '',
        numberOfCharacters: config.characters.numberOfCharacters,
      };
    },
    created () {
      const localCharacters = localStorage.getCharacters();

      if (localCharacters === undefined || localCharacters === null) {
        this.fetchCharacters();
      } else {
        this.characters.all = JSON.parse(localCharacters);
        this.featuredCharacters();
        this.toShow.loader = false;
      }
    },
    methods: {
      fetchCharacters() {
        fetch(apiMap.baseUrl + apiMap.endpoints.characters).then((response) => {
          return response.json();
        }).then((remoteCharacters) => {
          this.characters.all = this.addPageNameItem(remoteCharacters);
          this.featuredCharacters();
          this.toShow.loader = false;
          localStorage.setCharacters(remoteCharacters);
        }).catch((error) => {
          console.error('Fetching characters failed', error);
          this.errorMessage = this.$t('characters.errors.fetchingCharacters');
        });
      },
      featuredCharacters() {
        this.toShow.loadMoreButton = true;
        this.characters.grid = this.characters.all.slice(0, this.numberOfCharacters);
      },
      loadMoreCharacters() {
        const gridCharactersLength = this.characters.grid.length;
        const ending = gridCharactersLength + this.numberOfCharacters;
        const loadedCharacters = this.characters.all.slice(gridCharactersLength, ending);

        this.characters.grid = this.characters.grid.concat(loadedCharacters);

        if (this.characters.grid.length === this.characters.all.length) {
          this.toShow.loadMoreButton = false;
        }
      },
      showSearchResults(searchTerm) {
        this.toShow.loadMoreButton = false;
        this.characters.grid = this.characters.all.filter((character) => {
          return character.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      },
      addPageNameItem(charactersList) {
        charactersList.forEach((character, id) => {
          charactersList[id].page_name = character.name
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[á]/g, 'a')
            .replace(/[&]/g, 'and')
            .replace(/[^\w-]+/g, '');
        });

        return charactersList;
      },
    },
  };
</script>
