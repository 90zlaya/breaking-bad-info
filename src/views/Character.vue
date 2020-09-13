<template>
  <div id="view-character">
    <BaseCharacterDetails :character="character">
      <router-link
        v-if="displayed.isSetViaProp"
        :to="charactersSearchHomepage"
        class="nav-link page-scroll btn-solid-lg"
      >{{ $t('navbar.goBack') }}</router-link>
    </BaseCharacterDetails>
    <TheFooter />
    <TheCopyright />
  </div>
</template>

<script>
  import data from "./../mixins/data.js";

  import BreakingBadAPI from './../libs/BreakingBadAPI.js';
  import Helper from './../libs/Helper.js';

  import BaseCharacterDetails from "./../components/BaseCharacterDetails.vue";
  import TheFooter from "./../components/TheFooter.vue";
  import TheCopyright from "./../components/TheCopyright.vue";

  export default {
    props: {
      character: {
        type: Object,
        required: false
      }
    },
    components: {
      BaseCharacterDetails,
      TheFooter,
      TheCopyright
    },
    computed: {
      charactersSearchHomepage() {
        return {
          name: data.routerRoutes.home.name,
          hash: data.navbarSections.characters,
        };
      }
    },
    data() {
      return {
        displayed: {
          isSetViaProp: true,
          character: {}
        }
      };
    },
    created() {
      console.log('Character created');
      this.handleCharacterData();
    },
    mounted() {
      console.log('Character mounted');
      window.scrollTo(0, 0);
      this.handleCharacterData();
    },
    updated() {
      console.log('Character updated');
      window.scrollTo(0, 0);
      this.handleCharacterData();
    },
    methods: {
      handleCharacterData() {
        if (this.character) {
          console.log("Character from prop", this.character);
          this.displayed.character = this.character;
        } else {
          console.log("Prop not set!");
    
          const { pageName } = this.$router.currentRoute.params;
          const characterId = Helper.characters.idFromPageName(pageName);
          // TODO: Check if characterId is undefined and handle that possiblity
          console.log("Converted pageName to characterId:", pageName, characterId);
          BreakingBadAPI.getCharacter(characterId).then((character) => {
            console.log("Got character", character);
            this.displayed.character = character[0];
            this.displayed.isSetViaProp = false;
          }).catch((err) => {
            console.error(err);
          });
        }
      }
    }
  };
</script>

<style scoped>
  .view-character {
    padding-top: 0.5rem;
  }
</style>
