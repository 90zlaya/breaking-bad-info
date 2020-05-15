<template>
  <div id="characters" class="basic-1">
    <TheAlerter v-if="errorMessage !== ''" :purpose="'danger'" :message="errorMessage" />
    <template v-else>
      <CharactersSearch
        v-if="toShow.loader === false"
        @showSearchResults="showSearchResults"
        @showOriginalView="featuredCharacters"
       />
      <CharactersGrid
        :showLoader="toShow.loader"
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
  import {
    apiMap,
    localStorageMap,
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
      const localCharacters = localStorage.getItem(localStorageMap.characters.characters);

      if (localCharacters === undefined || localCharacters === null) {
        // Fetch characters from API
        this.fetchCharacters();

        // NOTE: fetchCharacters makes promise, any code here is ineffective
      } else {
        // Save all characters retrieved from local storage
        this.characters.all = JSON.parse(localCharacters);

        // Create featured list of characters
        this.featuredCharacters();

        // Stop grid loader
        this.toShow.loader = false;
      }
    },
    methods: {
      fetchCharacters() {
        fetch(apiMap.baseUrl + apiMap.endpoints.characters).then((response) => {
          return response.json();
        }).then((remoteCharacters) => {
          // Save all characters retrieved from API
          this.characters.all = this.addPageNameItem(remoteCharacters);

          // Create featured list of characters
          this.featuredCharacters();

          // Stop grid loader
          this.toShow.loader = false;

          // Save to local storage
          localStorage.setItem(localStorageMap.characters.characters, JSON.stringify(remoteCharacters));
        }).catch((error) => {
          console.error('Fetching characters failed', error);
          this.errorMessage = this.$t('characters.errors.fetchingCharacters');
        });
      },
      featuredCharacters() {
        // Able to load more characters at the start
        this.toShow.loadMoreButton = true;

        // Add to grid featured characters from list of all characters
        this.characters.grid = this.characters.all.slice(0, this.numberOfCharacters);
      },
      loadMoreCharacters() {
        const gridCharactersLength = this.characters.grid.length;
        const ending = gridCharactersLength + this.numberOfCharacters;
        const loadedCharacters = this.characters.all.slice(gridCharactersLength, ending);

        // Concat to the loaded characters array
        this.characters.grid = this.characters.grid.concat(loadedCharacters);

        // Hide Load More button when there are no characters for loading
        if (this.characters.grid.length === this.characters.all.length) {
          this.toShow.loadMoreButton = false;
        }
      },
      showSearchResults(searchTerm) {
        // Not able to load more during search operation
        this.toShow.loadMoreButton = false;

        // Find resutlt for search term
        this.characters.grid = this.characters.all.filter((character) => {
          return character.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      },
      addPageNameItem(charactersList) {
        charactersList.forEach((character, id) => {
          const characterNameInLowerCase = character.name.toLowerCase();
          let pageName = characterNameInLowerCase.replace(' ', '-');

          // Clear what's left
          pageName = pageName.replace(' ', '-');
          pageName = pageName.replace('.', '');

          charactersList[id].pageName = pageName;
        });

        return charactersList;
      },
    },
  };
</script>
