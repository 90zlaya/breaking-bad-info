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
        <router-link
          :to="charactersSearch"
          class="btn-solid-lg text-black text-uppercase"
          type="button"
        >{{ $t('fourZeroFour.backToHome') }}</router-link>
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
    computed: {
      charactersSearch() {
        return {
          name: data.routerRoutes.home.name,
          path: data.routerRoutes.home.path
        };
      }
    },
    methods: {
      backToHome() {
        console.log('Would redirect to home page');
        this.$router.push({
          name: data.routerRoutes.home.name
        });
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
    height: 18rem;
  }
  
  .not-found .back-to-home {
    line-height: 5rem;
  }

  .code img {
    height: 6rem;
    width: 7rem;
  }
  
  .not-found .code p {
    font-size: 7rem;
    line-height: 25rem;
  }
  
  .not-found .text p {
    font-size: 2.5rem;
    line-height: 2rem;
  }
</style>