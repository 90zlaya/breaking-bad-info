<template>
  <div class="container view-character">
    <h1>{{ character.name }} </h1>
    <p>This character is portrayed by {{ character.portrayed }}</p>
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      character: {
        type: Object,
        required: true
      }
    }
  };
</script>