<template>
  <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p class="p-small">
            {{ $t('copyright.text') }} © {{ year }} |
            <a
              v-bind:href="copyright.link.href"
              target="_blank"
            >{{ copyright.link.title }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    urls,
  } from './../mixins/data.js';

  export default {
    data() {
      return {
        year: '2020',
        copyright: {
          link: {
            href: urls.developer.url,
            title: urls.developer.title,
          },
        },
      };
    },
  };
</script>

<style scoped>
  .copyright {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    background-color: #262431;
    text-align: center;
  }

  .copyright .p-small {
    color: #f1f1f8;
    opacity: 0.6;
  }
</style>
