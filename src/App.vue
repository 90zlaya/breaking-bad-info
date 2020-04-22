<template>
  <div id="app">
    <Preloader/>
    <Navbar/>
    <Header/>
    <Slider/>
    <Characters/>
    <Counter/>
    <Synopsis/>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script>
  import Preloader from './components/Preloader.vue';
  import Navbar from './components/Navbar.vue';
  import Header from './components/Header.vue';
  import Slider from './components/Slider.vue';
  import Characters from './components/Characters.vue';
  import Counter from './components/Counter.vue';
  import Synopsis from './components/Synopsis.vue';
  import Footer from './components/Footer.vue';
  import Copyright from './components/Copyright.vue';

  export default {
    components: {
      Preloader,
      Navbar,
      Header,
      Slider,
      Characters,
      Counter,
      Synopsis,
      Footer,
      Copyright,
    },
  };
</script>
