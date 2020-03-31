<template>
  <div>
    <App-Preloader></App-Preloader>
    <App-Navbar></App-Navbar>
    <App-Header></App-Header>
    <App-Footer></App-Footer>
    <App-Copyright></App-Copyright>
  </div>
</template>

<script>
  import Preloader from './import/Preloader.vue';
  import Navbar from './import/Navbar.vue';
  import Header from './import/Header.vue';
  import Footer from './import/Footer.vue';
  import Copyright from './import/Copyright.vue';

  export default {
    components: {
      'App-Preloader': Preloader,
      'App-Navbar': Navbar,
      'App-Header': Header,
      'App-Footer': Footer,
      'App-Copyright': Copyright,
    },
  };
</script>
