<template>
  <div id="view-home">
    <h2>Character template</h2>
    <p>This character is {{ character.name }} and is portrayed by {{ character.portrayed }}</p>
    <a @click="goBack">go back</a>
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      character: {
        type: Object,
        required: true,
      },
      characterName: {
        type: String,
        required: true,
      },
    },
    mounted() {
      console.log('Characters', this.character);
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    },
  };
</script>
