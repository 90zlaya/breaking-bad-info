<template>
  <div class="container">
    <div class="row">
      <form class="col-12">
        <div class="form-group">
          <input
            :placeholder="$t('characters.search.searchCharacter')"
            v-model="searchTerm"
            v-on:keyup="initiateSearch();"
            type="text"
            class="form-control"
           />
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

<style scoped>
  .icon-container {
    position: absolute;
    right: 10px;
    top: calc(50% - 10px);
  }

  .clear-search {
    color: #495057;
    cursor: pointer;
    padding: 0.25rem;
  }
</style>
