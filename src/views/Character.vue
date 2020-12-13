<template>
  <div id="view-character">
    <ThePreloader v-if="!canGoBack" />
    <TheNavbar :is-on-homepage="false" />
    <TheHeader />
    <CharacterDetails
      :can-go-back="canGoBack"
      :page-name="pageName"
    />
    <TheSynopsis />
    <TheFooter />
    <TheCopyright />
  </div>
</template>

<script>
  import ThePreloader from './../components/ThePreloader.vue';
  import TheNavbar from './../components/TheNavbar.vue';
  import TheHeader from './../components/TheHeader.vue';
  import CharacterDetails from './../components/CharacterDetails/CharacterDetails.vue';
  import TheSynopsis from './../components/TheSynopsis.vue';
  import TheFooter from './../components/TheFooter.vue';
  import TheCopyright from './../components/TheCopyright.vue';

  export default {
    name: 'Character',
    components: {
      ThePreloader,
      TheNavbar,
      TheHeader,
      CharacterDetails,
      TheSynopsis,
      TheFooter,
      TheCopyright
    },
    props: {
      canGoBack: {
        type: Boolean,
        default: false
      },
      pageName: {
        type: String,
        required: true
      }
    },
    mounted() {
      window.scrollTo(0, 0);
      /* global closeResponsiveMenu */
      closeResponsiveMenu();
      /* global magnificPopup */
      magnificPopup();
    }
  };
</script>
