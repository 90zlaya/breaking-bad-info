/* -------------------------------------------------------------------------- */

const appTemplate = `
  <div>
    <app-header></app-header>
    <div class="app-content">
      <h1>Hello World from {{ title }}</h1>
      <h2 v-if="subtitle">{{ subtitle }}</h2>
      <button v-if="!subtitle" v-on:click="addSubtitle">Add subtitle</button>
    </div>
    <app-footer></app-footer>
  </div>
`;

/* -------------------------------------------------------------------------- */

export default appTemplate;

/* -------------------------------------------------------------------------- */
