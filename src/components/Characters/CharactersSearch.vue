<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="initiateSearch" class="col-12">
        <div class="form-group">
          <input
            v-model="searchTerm"
            :placeholder="$t('characters.search.searchCharacter')"
            @keyup="initiateSearch"
            type="text"
            class="form-control"
           />
          <div v-if="hasSearchTerm" class="icon-container">
            <i class="fas fa-times clear-search" @click="clearSearch"></i>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CharactersSearch',
    computed: {
      hasSearchTerm() {
        return this.searchTerm.length > 0;
      }
    },
    data() {
      return {
        searchTerm: ''
      };
    },
    methods: {
      initiateSearch() {
        if (this.searchTerm.length === 0) {
          this.$emit('show-original-view');
        } else {
          this.$emit('show-search-results', this.searchTerm);
        }
      },
      clearSearch() {
        this.searchTerm = '';
        this.$emit('show-original-view');
      }
    }
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
