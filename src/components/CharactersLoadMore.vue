<template>
  <div class="container">
    <div class="row p-3">
      <div class="col-12 d-flex justify-content-center">
        <a class="btn-solid-lg" v-on:click="loadMore();">
          <i class="fas fa-spinner"></i>&nbsp;
          {{ $t('characters.loadMore.loadMore') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      loadMore() {
        this.$emit('loadMoreCharacters');
      },
    },
  };
</script>
