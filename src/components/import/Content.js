const template = `
  <div class="app-content">
    <h1>
      {{ $t('hello_world_from_title', { title: $t('title') }) }}
    </h1>
    <h2 v-if="subtitle">{{ subtitle }}</h2>
    <button
      v-if="!subtitle"
      v-on:click="addSubtitle()"
    >{{ $t('add_subtitle') }}</button>
  </div>
`;

const Content = {

  /* ------------------------------------------------------------------------ */

  template,

  /* ------------------------------------------------------------------------ */

  data() {
    return {
      subtitle: '',
    };
  },

  /* ------------------------------------------------------------------------ */

  methods: {
    addSubtitle() {
      this.subtitle = this.$t('subtitle');
    },
  },

  /* ------------------------------------------------------------------------ */

}

export default Content;
