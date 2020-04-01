<template>
  <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p class="p-small">
            {{ $t('copyright.text') }} © {{ year }} |
            <a
              v-bind:href="copyright.link.href"
              v-bind:target="copyright.link.target"
            >{{ copyright.link.title }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from './../../.config.json';

  export default {
    data() {
      return {
        year: '2020',
        copyright: {
          link: {
            target: '_blank',
            href: config.urls.developer.url,
            title: config.urls.developer.title,
          },
        },
      };
    },
  };
</script>
