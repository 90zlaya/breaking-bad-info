<template>
  <div id="characters" class="basic-1">
    <Characters-Search/>
    <Characters-Grid
      :showLoader="showLoader.grid"
      :characters="characters.grid"
    />
    <Characters-LoadMore
      :showLoader="showLoader.loadMore"
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
        showLoader: {
          grid: true,
          loadMore: false,
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
        this.characters.grid = this.featuredCharacters(this.characters.all);

        // Stop grid loader
        this.showLoader.grid = false;
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
          this.characters.grid = this.featuredCharacters(this.characters.all);

          // Stop grid loader
          this.showLoader.grid = false;

          // Save to local storage
          localStorage.setItem(localStorageMap.characters.characters, JSON.stringify(remoteCharacters));
        }).catch((error) => {
          console.error('Fetching characters failed', error);
        });
      },
      featuredCharacters(characters) {
        return characters.slice(0, parseInt(this.configuredNumberOfCharacters));
      },
      loadMoreCharacters() {
        let gridCharactersLength = parseInt(this.characters.grid.length);
        let ending = gridCharactersLength + parseInt(this.configuredNumberOfCharacters);
        let loadedCharacters = this.characters.all.slice(gridCharactersLength, ending);

        // Concat to the loaded characters array
        this.characters.grid = this.characters.grid.concat(loadedCharacters);

        console.log('Chracters in grid', this.characters.grid);
        alert('Displays more characters in grid');
      },
    },
  };
</script>
