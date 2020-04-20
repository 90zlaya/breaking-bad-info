<template>
  <div id="characters" class="basic-1">
    <Characters-Search
      v-if="toShow.gridLoader === false"
      @showSearchResults="showSearchResults"
      @showOriginalView="featuredCharacters"
    />
    <Characters-Grid
      :showLoader="toShow.gridLoader"
      :characters="characters.grid"
    />
    <Characters-LoadMore
      v-if="toShow.loadMoreButton"
      @loadMoreCharacters="loadMoreCharacters"
    />
  </div>
</template>

<script>
  import config from './../../.config.json';
  import apiMap from './../data/apiMap.json';
  import localStorageMap from './../data/localStorageMap.json';

  import Search from './Search.vue';
  import Grid from './Grid.vue';
  import LoadMore from './LoadMore.vue';

  export default {
    components: {
      'Characters-Search': Search,
      'Characters-Grid': Grid,
      'Characters-LoadMore': LoadMore,
    },
    data() {
      return {
        characters: {
          all: [],
          grid: [],
        },
        toShow: {
          gridLoader: true,
          loadMoreButton: false,
        },
        configuredNumberOfCharacters: config.settings.characters.numberOfCharacters,
      };
    },
    created () {
      let localCharacters = localStorage.getItem(localStorageMap.characters.characters);

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
        this.toShow.gridLoader = false;
      }
    },
    methods: {
      fetchCharacters() {
        fetch(apiMap.baseUrl + apiMap.endpoints.characters).then((response) => {
          return response.json();
        }).then((remoteCharacters) => {
          // Save all characters retrieved from API
          this.characters.all = remoteCharacters;

          // Create featured list of characters
          this.featuredCharacters();

          // Stop grid loader
          this.toShow.gridLoader = false;

          // Save to local storage
          localStorage.setItem(localStorageMap.characters.characters, JSON.stringify(remoteCharacters));
        }).catch((error) => {
          console.error('Fetching characters failed', error);
        });
      },
      featuredCharacters() {
        // Able to load more characters at the start
        this.toShow.loadMoreButton = true;

        // Add to grid featured characters from list of all characters
        this.characters.grid = this.characters.all.slice(0, parseInt(this.configuredNumberOfCharacters));
      },
      loadMoreCharacters() {
        let gridCharactersLength = parseInt(this.characters.grid.length);
        let ending = gridCharactersLength + parseInt(this.configuredNumberOfCharacters);
        let loadedCharacters = this.characters.all.slice(gridCharactersLength, ending);

        // Concat to the loaded characters array
        this.characters.grid = this.characters.grid.concat(loadedCharacters);
      },
      showSearchResults(searchTerm) {
        // Not able to load more during search operation
        this.toShow.loadMoreButton = false;

        // Find resutlt for search term
        this.characters.grid = this.characters.all.filter((character) => {
          return character.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      },
    },
  };
</script>
