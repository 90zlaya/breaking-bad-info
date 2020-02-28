<template>
  <div>
    <App-Header></App-Header>
    <App-Content></App-Content>
    <App-Footer></App-Footer>
  </div>
</template>

<script>
  import Header from './import/Header.vue';
  import Content from './import/Content.vue';
  import Footer from './import/Footer.vue';

  export default {
    components: {
      'App-Header': Header,
      'App-Content': Content,
      'App-Footer': Footer,
    },
  };
</script>
