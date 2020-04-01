<template>
  <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
    <a
      class="navbar-brand logo-image"
      href="index.html"
    >
      <img
        v-bind:alt="$t('navbar.logoImage')"
        src="src/assets/images/logo.png"
      >
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
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#header">
            {{ $t('navbar.home') }}
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {};
</script>
