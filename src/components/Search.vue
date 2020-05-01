<template>
  <div class="container">
    <div class="row">
      <form class="col-12">
        <div class="form-group">
          <input
            v-bind:placeholder="$t('characters.search.searchCharacter')"
            v-model="searchTerm"
            v-on:keyup="initiateSearch();"
            type="text"
            class="form-control"
            id="search-term-input"
          >
          <div v-if="searchTerm !== ''" class="icon-container">
            <i
             class="fas fa-times clear-search"
             v-on:click="clearSearch();"
            ></i>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchTerm: '',
      };
    },
    methods: {
      initiateSearch() {
        if (this.searchTerm.length === 0) {
          this.$emit('showOriginalView');
        } else {
          this.$emit('showSearchResults', this.searchTerm);
        }
      },
      clearSearch() {
        this.searchTerm = '';
        this.$emit('showOriginalView');
      },
    },
  };
</script>
