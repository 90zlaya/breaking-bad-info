const template = `
  <div>
    <App-Header></App-Header>
    <App-Content></App-Content>
    <App-Footer></App-Footer>
  </div>
`;

import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

const App = {

  /* ------------------------------------------------------------------------ */

  template,

  /* ------------------------------------------------------------------------ */

  components: {
    'App-Header': Header,
    'App-Content': Content,
    'App-Footer': Footer,
  },

  /* ------------------------------------------------------------------------ */
}

export default App;
