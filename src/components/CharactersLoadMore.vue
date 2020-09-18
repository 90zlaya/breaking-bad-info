<template>
  <div class="container">
    <div class="row p-3">
      <div class="col-12 d-flex justify-content-center">
        <a
          @click="$emit(loadMoreCharacters)"
          :id="loadMoreCharacters"
          class="btn-solid-lg"
        >
          <i class="fas fa-spinner"></i>&nbsp;
          {{ $t('characters.loadMore.loadMore') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import data from './../mixins/data.js';

  export default {
    data() {
      return {
        loadMoreCharacters: data.ids.loadMoreCharacters
      };
    }
  };
</script>
