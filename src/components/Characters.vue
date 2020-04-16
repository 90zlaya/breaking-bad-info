<template>
  <div id="characters" class="basic-1">
    <Characters-Search/>
    <Characters-Grid/>
    <Characters-LoadMore/>
  </div>
</template>

<script>
  import Search from './Search.vue';
  import Grid from './Grid.vue';
  import LoadMore from './LoadMore.vue';

  export default {
    components: {
      'Characters-Search': Search,
      'Characters-Grid': Grid,
      'Characters-LoadMore': LoadMore,
    },
  };
</script>
