<template>
  <div id="view-character">
    <template v-if="isVisitedDirectly">
      <ThePreloader />
    </template>
    <TheNavbar :is-on-homepage="false" />
    <TheHeader />
    <CharacterDetails
      :can-go-back="canGoBack"
      :page-name="pageName"
    />
    <TheFooter />
    <TheCopyright />
  </div>
</template>

<script>
  import ThePreloader from './../components/ThePreloader.vue';
  import TheNavbar from './../components/TheNavbar.vue';
  import TheHeader from './../components/TheHeader.vue';
  import CharacterDetails from './../components/CharacterDetails/CharacterDetails.vue';
  import TheFooter from './../components/TheFooter.vue';
  import TheCopyright from './../components/TheCopyright.vue';

  export default {
    name: 'Character',
    components: {
      ThePreloader,
      TheNavbar,
      TheHeader,
      CharacterDetails,
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
    computed: {
      isVisitedDirectly() {
        return !this.canGoBack;
      }
    },
    mounted() {
      console.log('Character View Mounted');
      window.scrollTo(0, 0);
      /* global rotatingText */
      rotatingText();
      /* global closeResponsiveMenu */
      closeResponsiveMenu();
      /* global backToTopButton */
      backToTopButton();
    },
    updated() {
      console.log('Character View Updated');
      // Scrolling page
      if (this.canGoBack === true) {
        console.log('Character scroll');
        // Scroll to character details
        document.getElementById('character-details').scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'start'
        });
      } else {
        window.scrollTo(0, 0);
      }
      /* global preloaderHandler */
      preloaderHandler();
    }
  };
</script>
