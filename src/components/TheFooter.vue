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
              <template v-for="(link, index) in links">
                <li class="media" :key="index">
                  <i class="fas fa-square"></i>
                  <div class="media-body">
                    {{ link.title }}
                    <a
                      class="turquoise"
                      :href="link.href"
                      target="_blank"
                      rel="noopener"
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
            <template v-for="(social, index) in socialMedia">
              <span class="fa-stack" :key="index">
                <a :href="social.href" target="_blank">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i :class="`fab fa-${ social.icon } fa-stack-1x`"></i>
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
  import data from './../mixins/data.js';

  export default {
    data() {
      return {
        links: [
          {
            title: this.$t('footer.links.developer.youMayVisit'),
            text: this.$t('footer.links.developer.developersWebsite'),
            href: data.urls.developer.url
          },
          {
            title: this.$t('footer.links.library.ifYouAreDeveloper'),
            text: this.$t('footer.links.library.phpLibraryProject'),
            href: data.urls.phpLibrary.url
          }
        ],
        socialMedia: [
          {
            href: data.urls.social.github,
            icon: 'github'
          },
          {
            href: data.urls.social.linkedIn,
            icon: 'linkedin-in'
          },
          {
            href: data.urls.social.youtube,
            icon: 'youtube'
          },
          {
            href: data.urls.social.instagram,
            icon: 'instagram'
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .footer {
    padding-top: 5rem;
    background-color: #262431;
  }

  .footer .footer-col {
    margin-bottom: 2.25rem;
  }

  .footer h4 {
    margin-bottom: 1rem;
  }

  .footer .list-unstyled .fas {
    color: #cfd200;
    font-size: 0.5rem;
    line-height: 1.375rem;
  }

  .footer .list-unstyled .media-body {
    margin-left: 0.625rem;
  }

  .footer .fa-stack {
    margin-bottom: 0.75rem;
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }

  .footer .fa-stack .fa-stack-1x {
    color: #262431;
    transition: all 0.2s ease;
  }

  .footer .fa-stack .fa-stack-2x {
    color: #f1f1f8;
    transition: all 0.2s ease;
  }

  .footer .fa-stack:hover .fa-stack-1x {
    color: #f1f1f8;
  }

  .footer .fa-stack:hover .fa-stack-2x {
    color: #cfd200;
  }

  @media (min-width: 1200px) {
    .footer .footer-col {
      width: 90%;
    }

    .footer .footer-col.middle {
      margin-right: auto;
      margin-left: auto;
    }

    .footer .footer-col.last {
      margin-right: 0;
      margin-left: auto;
    }
  }
</style>
