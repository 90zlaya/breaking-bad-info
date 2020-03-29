<template>
  <div>
    <!--<App-Preloader></App-Preloader>-->
    <App-Navbar></App-Navbar>
    <!--<App-Header></App-Header>
    <App-Content></App-Content>
    <App-Footer></App-Footer>-->
  </div>
</template>

<script>
  import Preloader from './import/Preloader.vue';
  import Navbar from './import/Navbar.vue';
  /*import Header from './import/Header.vue';
  import Content from './import/Content.vue';
  import Footer from './import/Footer.vue';*/

  export default {
    components: {
      'App-Preloader': Preloader,
      'App-Navbar': Navbar,
      /*'App-Header': Header,
      'App-Content': Content,
      'App-Footer': Footer,*/
    },
  };
</script>
