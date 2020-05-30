<template>
  <div id="view-home">
    <TheNavbar />
    <div class="container view-character">
      <h1>Character template</h1>
      <p>This character is {{ character.name }} and is portrayed by {{ character.portrayed }}</p>
      <router-link :to="{ name: 'home', hash: '#characters' }">Go to characters</router-link>
    </div>
    <TheFooter />
    <TheCopyright />
  </div>
</template>

<script>
  import TheNavbar from '../components/TheNavbar.vue';
  import TheFooter from '../components/TheFooter.vue';
  import TheCopyright from '../components/TheCopyright.vue';

  export default {
    components: {
    TheNavbar,
      TheFooter,
      TheCopyright,
    },
    props: {
      character: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      console.log('Character page details from prop', this.character);
    },
  };
</script>

<style scoped>
  .view-character {
    padding-top: 5.5rem;
  }
</style>
