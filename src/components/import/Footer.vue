<template>
  <div class="footer">
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
                  <i v-bind:class="link.icon"></i>
                  <div class="media-body">
                    {{ link.title }}
                    <a
                      class="turquoise"
                      v-bind:href="link.href"
                      v-bind:target="link.target"
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
                <a v-bind:href="item.href" v-bind:target="item.target">
                  <template v-for="icon in item.icons">
                    <i v-bind:class="icon"></i>
                  </template>
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
  export default {
    data() {
      return {
        links: [
          {
            title: 'You may visit',
            href: 'https://www.zlatanstajic.com/',
            text: 'Developer\'s website',
            target: '_blank',
            icon: 'fas fa-square',
          },
          {
            title: 'If you are developer',
            href: 'https://php-library.zlatanstajic.com/',
            text: 'PHP Library Project',
            target: '_blank',
            icon: 'fas fa-square',
          },
        ],
        socialMedia: [
          {
            href: 'https://github.com/90zlaya',
            target: '_blank',
            icons: ['fas fa-circle fa-stack-2x', 'fab fa-github fa-stack-1x'],
          },
          {
            href: 'https://www.linkedin.com/in/90zlaya',
            target: '_blank',
            icons: ['fas fa-circle fa-stack-2x', 'fab fa-linkedin-in fa-stack-1x'],
          },
          {
            href: 'https://www.youtube.com/90zlaya',
            target: '_blank',
            icons: ['fas fa-circle fa-stack-2x', 'fab fa-youtube fa-stack-1x'],
          },
          {
            href: 'https://instagram.com/90zlaya',
            target: '_blank',
            icons: ['fas fa-circle fa-stack-2x', 'fab fa-instagram fa-stack-1x'],
          },
        ],
      };
    },
  };
</script>
