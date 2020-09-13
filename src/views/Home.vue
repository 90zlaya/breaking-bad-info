<template>
  <div id="view-home">
    <ThePreloader />
    <TheNavbar />
    <TheHeader />
    <TheSlider />
    <TheSynopsis />
    <TheCounter />
    <BaseCharacters />
    <TheFooter />
    <TheCopyright />
  </div>
</template>

<script>
  import ThePreloader from './../components/ThePreloader.vue';
  import TheNavbar from './../components/TheNavbar.vue';
  import TheHeader from './../components/TheHeader.vue';
  import TheSlider from './../components/TheSlider.vue';
  import TheSynopsis from './../components/TheSynopsis.vue';
  import TheCounter from './../components/TheCounter.vue';
  import BaseCharacters from './../components/BaseCharacters.vue';
  import TheFooter from './../components/TheFooter.vue';
  import TheCopyright from './../components/TheCopyright.vue';

  export default {
    components: {
      ThePreloader,
      TheNavbar,
      TheHeader,
      TheSlider,
      TheSynopsis,
      TheCounter,
      BaseCharacters,
      TheFooter,
      TheCopyright
    }
  };
</script>
