<template>
  <div class="container">
    <LoadMore-Loader v-if="showLoader"/>
    <div class="row">
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
  import Loader from './Loader.vue';

  export default {
    components: {
      'LoadMore-Loader': Loader,
    },
    props: {
      showLoader: Boolean,
    },
    methods: {
      loadMore() {
        this.$emit('loadMoreCharacters')
      },
    },
  };
</script>
