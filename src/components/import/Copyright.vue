<template>
  <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p class="p-small">
            Copyright © 2020 |
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
  export default {
    data() {
      return {
        copyright: {
          link: {
            href: 'https://www.zlatanstajic.com/',
            target: '_blank',
            title: 'Zlatan Stajić',
          },
        },
      };
    },
  };
</script>
