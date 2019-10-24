/* -------------------------------------------------------------------------- */

const ContentTemplate = `
  <div>
    <div class="app-content">
      <h1>
        {{ translations.hello_world }}
        {{ translations.from }}
        {{ translations.title }}
      </h1>
      <h2 v-if="subtitle">{{ subtitle }}</h2>
      <button
        v-if="!subtitle"
        v-on:click="addSubtitle"
      >{{ translations.add_subtitle }}</button>
    </div>
  </div>
`;

/* -------------------------------------------------------------------------- */

export default ContentTemplate;

/* -------------------------------------------------------------------------- */
