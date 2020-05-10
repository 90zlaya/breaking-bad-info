<template>
  <div id="view-home">
    <h1>Character template</h1>
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
