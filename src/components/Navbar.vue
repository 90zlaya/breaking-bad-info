<template>
  <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
    <a
      class="navbar-brand logo-image"
      href="index.html"
    >
      <img src="src/assets/images/logo.png" alt="Logo Image"/>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-awesome fas fa-bars"></span>
      <span class="navbar-toggler-awesome fas fa-times"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav ml-auto">
        <template v-for="item in navigation">
          <li class="nav-item">
            <a class="nav-link page-scroll" v-bind:href="item.href">
              {{ item.title }}
            </a>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        navigation: [
          {
            href: '#header',
            title: this.$t('navbar.home'),
          },
          {
            href: '#quotes',
            title: this.$t('navbar.quotes'),
          },
          {
            href: '#statistics',
            title: this.$t('navbar.statistics'),
          },
          {
            href: '#synopsis',
            title: this.$t('navbar.synopsis'),
          },
          {
            href: '#about',
            title: this.$t('navbar.about'),
          },
        ],
      };
    },
  };
</script>
