<template>
  <div>
    <App-Preloader></App-Preloader>
    <App-Navbar></App-Navbar>
    <App-Header></App-Header>
    <App-Counter></App-Counter>
    <!--<App-Video></App-Video>-->
    <App-Footer></App-Footer>
    <App-Copyright></App-Copyright>
  </div>
</template>

<script>
  import Preloader from './components/Preloader.vue';
  import Navbar from './components/Navbar.vue';
  import Header from './components/Header.vue';
  //import Video from './components/Video.vue';
  import Counter from './components/Counter.vue';
  import Footer from './components/Footer.vue';
  import Copyright from './components/Copyright.vue';

  export default {
    components: {
      'App-Preloader': Preloader,
      'App-Navbar': Navbar,
      'App-Header': Header,
      //'App-Video': Video,
      'App-Counter': Counter,
      'App-Footer': Footer,
      'App-Copyright': Copyright,
    },
  };
</script>
