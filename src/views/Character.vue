<template>
  <div id="view-character">
    <template v-if="isVisitedDirectly">
      <ThePreloader />
    </template>
    <CharacterDetails :can-go-back="canGoBack" />
    <TheFooter />
    <TheCopyright />
  </div>
</template>

<script>
  import ThePreloader from './../components/ThePreloader.vue';
  import CharacterDetails from './../components/CharacterDetails/CharacterDetails.vue';
  import TheFooter from './../components/TheFooter.vue';
  import TheCopyright from './../components/TheCopyright.vue';

  export default {
    components: {
      ThePreloader,
      CharacterDetails,
      TheFooter,
      TheCopyright
    },
    props: {
      canGoBack: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isVisitedDirectly() {
        return !this.canGoBack;
      }
    },
    updated() {
      window.scrollTo(0, 0);
      /* global preloaderHandler */
      preloaderHandler();
    }
  };
</script>
