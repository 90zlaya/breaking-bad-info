<template>
  <div>
    <App-Preloader/>
    <App-Navbar/>
    <App-Header/>
    <App-Slider/>
    <App-Counter/>
    <App-Video/>
    <App-Footer/>
    <App-Copyright/>
  </div>
</template>

<script>
  import Preloader from './components/Preloader.vue';
  import Navbar from './components/Navbar.vue';
  import Header from './components/Header.vue';
  import Slider from './components/Slider.vue';
  import Counter from './components/Counter.vue';
  import Video from './components/Video.vue';
  import Footer from './components/Footer.vue';
  import Copyright from './components/Copyright.vue';

  export default {
    components: {
      'App-Preloader': Preloader,
      'App-Navbar': Navbar,
      'App-Header': Header,
      'App-Slider': Slider,
      'App-Counter': Counter,
      'App-Video': Video,
      'App-Footer': Footer,
      'App-Copyright': Copyright,
    },
  };
</script>
