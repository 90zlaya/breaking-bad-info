<template>
  <div class="container">
    <div class="row p-3">
      <div class="col-12 d-flex justify-content-center">
        <a class="btn-solid-lg text-black"
          @click="$emit('load-more-characters')"
          :id="loadMoreCharacters"
        >
          <i class="fas fa-spinner"></i>&nbsp;
          {{ $t('characters.loadMore.loadMore') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import data from './../../mixins/data.js';

  export default {
    name: 'CharactersLoadMore',
    data() {
      return {
        loadMoreCharacters: data.ids.loadMoreCharacters
      };
    }
  };
</script>
