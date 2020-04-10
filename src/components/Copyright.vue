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
  import urls from './../data/json/urls.json';

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
