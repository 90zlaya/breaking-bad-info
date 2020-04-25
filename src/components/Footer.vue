<template>
  <div id="about" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="footer-col">
            <h4>{{ $t('footer.about.title') }}</h4>
            <p>{{ $t('footer.about.description') }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="footer-col middle">
            <h4>{{ $t('footer.links.title') }}</h4>
            <ul class="list-unstyled li-space-lg">
              <template v-for="link in links">
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">
                    {{ link.title }}
                    <a
                      class="turquoise"
                      v-bind:href="link.href"
                      target="_blank"
                    >{{ link.text }}</a>
                  </div>
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="footer-col last">
            <h4>{{ $t('footer.socialMedia') }}</h4>
            <template v-for="item in socialMedia">
              <span class="fa-stack">
                <a v-bind:href="item.href" target="_blank">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i v-bind:class="'fab fa-' + item.icon + ' fa-stack-1x'"></i>
                </a>
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    urls,
  } from './../data/info.js';

  export default {
    data() {
      return {
        links: [
          {
            title: this.$t('footer.links.developer.youMayVisit'),
            text: this.$t('footer.links.developer.developersWebsite'),
            href: urls.developer.url,
          },
          {
            title: this.$t('footer.links.library.ifYouAreDeveloper'),
            text: this.$t('footer.links.library.phpLibraryProject'),
            href: urls.phpLibrary.url,
          },
        ],
        socialMedia: [
          {
            href: 'https://github.com/90zlaya',
            icon: 'github',
          },
          {
            href: 'https://www.linkedin.com/in/90zlaya',
            icon: 'linkedin-in',
          },
          {
            href: 'https://www.youtube.com/90zlaya',
            icon: 'youtube',
          },
          {
            href: 'https://instagram.com/90zlaya',
            icon: 'instagram',
          },
        ],
      };
    },
  };
</script>
