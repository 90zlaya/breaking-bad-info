<template>
  <div id="view-home">
    <h1>Character template</h1>
    <p>This character is {{ character.name }} and is portrayed by {{ character.portrayed }}</p>
    <router-link :to="{ name: 'home', hash: '#characters' }">Go to characters</router-link>
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
      console.log('Character page details from prop', this.character);
    },
  };
</script>
