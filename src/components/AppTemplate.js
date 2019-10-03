/* -------------------------------------------------------------------------- */

const AppTemplate = `
  <div>
    <app-header></app-header>
    <div class="app-content">
      <h1>
        {{ dictionary.examples.hello_world }}
        {{ dictionary.examples.items.from }}
        {{ dictionary.examples.title }}
      </h1>
      <h2 v-if="subtitle">{{ subtitle }}</h2>
      <button
        v-if="!subtitle"
        v-on:click="addSubtitle"
      >{{ dictionary.examples.items.add_subtitle }}</button>
    </div>
    <app-footer></app-footer>
  </div>
`;

/* -------------------------------------------------------------------------- */

export default AppTemplate;

/* -------------------------------------------------------------------------- */
