<template>
  <div id="view-character">
    <BaseCharacterDetails :character="displayed.character">
      <router-link
        v-if="displayed.isSetViaProp"
        :to="charactersSearchHomepage"
        class="nav-link page-scroll"
      >{{ $t('navbar.goBack') }}</router-link>
    </BaseCharacterDetails>
    <TheFooter />
    <TheCopyright />
  </div>
</template>

<script>
import breakingBadApi from './../libs/BreakingBadAPI.js';
import {
  navbarSections,
  routerRoutes
} from "./../mixins/data.js";
import {
  isSet
} from "./../mixins/utils.js";

import BaseCharacterDetails from "./../components/BaseCharacterDetails.vue";
import TheFooter from "./../components/TheFooter.vue";
import TheCopyright from "./../components/TheCopyright.vue";

export default {
  props: {
    character: {
      type: Object,
      required: false,
    },
  },
  components: {
    BaseCharacterDetails,
    TheFooter,
    TheCopyright,
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
    if (isSet(this.character)) {
      console.log("Character from prop", this.character);
      this.displayed.character = this.character;
    } else {
      console.log("Prop not set!");

      const { pageName } = this.$router.currentRoute.params;
      const characterId = breakingBadApi.characterIdFromPageName(pageName);
      // TODO: Check if characterId is undefined and handle that possiblity
      console.log("Converted pageName to characterId:", pageName, characterId);
      breakingBadApi.getCharacter(characterId).then((character) => {
        console.log("Got character", character);
        this.displayed.character = character[0];
        this.displayed.isSetViaProp = false;
      }).catch((err) => {
        console.error(err);
      });
    }
  },
  computed: {
    charactersSearchHomepage() {
      return {
        name: routerRoutes.home.name,
        hash: navbarSections.characters,
      };
    },
  },
};
</script>

<style scoped>
.view-character {
  padding-top: 0.5rem;
}
</style>
