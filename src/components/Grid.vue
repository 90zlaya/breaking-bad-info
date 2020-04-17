<template>
  <div class="container">
    <Grid-Loader v-if="showLoader"/>
  </div>
</template>

<script>
  import Loader from './Loader.vue';

  export default {
    components: {
      'Grid-Loader': Loader,
    },
    props: {
      showLoader: Boolean,
      characters: Array,
    },
    created() {
      console.log('Characters in Grid.vue created()', this.characters);
    },
    mounted() {
      console.log('Characters in Grid.vue mounted()', this.characters);
    },
    updated() {
      console.log('Characters in Grid.vue updated()', this.characters);
    },
  };
</script>
