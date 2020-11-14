<template>
  <div class="container">
    <div class="row not-found">
      <div class="col-12 code">
        <p>
          <span>4</span>
          <img src="/images/logo.png" :alt="$t('navbar.logoImage')" />
          <span>4</span>
        </p>
      </div>
      <div class="col-12 text">
        <p class="text-uppercase">{{ $t('fourZeroFour.pageNotFound') }}</p>
      </div>
      <div class="col-12 back-to-home">
        <a
          @click="backToHome"
          class="btn-solid-lg text-black text-uppercase"
        >{{ $t('fourZeroFour.backToHome') }}</a>
      </div>
      <div class="col-12 reaction">
        <img
          src="/images/jesse-reaction.gif"
          class="rounded-circle"
          :alt="$t('fourZeroFour.jesseReactionGif')"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import data from './../mixins/data.js';

  export default {
    name: 'The404',
    methods: {
      backToHome() {
        window.location.href = data.routerRoutes.home.path;
      }
    }
  };
</script>

<style scoped>
  .not-found {
    text-align: center;
    vertical-align: middle;
    line-height: 10rem;
  }
  .not-found .code {
    height: 15rem;
  }
  .not-found .back-to-home {
    line-height: 5rem;
  }
  .not-found .code p {
    font-size: 7rem;
    line-height: 20rem;
  }
  .not-found .text p {
    font-size: 2.5rem;
    line-height: 2rem;
  }

  .code img {
    height: 6rem;
    width: 7rem;
  }

  .back-to-home a {
    color: #000;
    cursor: pointer;
  }
  .back-to-home a:hover {
    color: #cfd200;
  }
</style>