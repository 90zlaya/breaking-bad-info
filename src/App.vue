<template>
  <div>
    <app-header></app-header>
    <div class="app-content">
      <h1>Hello World from {{ title }}</h1>
      <h2 v-if="subtitle">{{ subtitle }}</h2>
      <button v-if="!subtitle" v-on:click="addSubtitle">Add subtitle</button>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {

  /* ------------------------------------------------------------------------ */

  components: {
    'app-header': Header,
    'app-footer': Footer,
  },

  /* ------------------------------------------------------------------------ */

  data() {
    return {
      title: 'Vue.js Playground',
      subtitle: '',
    };
  },

  /* ------------------------------------------------------------------------ */

  methods: {
    addSubtitle() {
      this.subtitle = 'Example of a subtitle';
    },
  },

  /* ------------------------------------------------------------------------ */
}
</script>

<style>
/* -------------------------------------------------------------------------- */
/* --- Elements ------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
body {
  margin: 0;
}

h1 {
  color: #000;
}

/* -------------------------------------------------------------------------- */
/* --- Classes -------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
.app-content {
  text-align: center;
  margin: 2rem;
}

/* -------------------------------------------------------------------------- */
</style>
