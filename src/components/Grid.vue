<template>
  <Alerter
    v-if="characters.length === 0 && showLoader === false"
    :purpose="'info'"
    :message="$t('characters.search.noSearchResults')"
  />
  <div v-else class="container works">
    <div v-if="showLoader" class="row">
      <div class="col-12">
        <Loader/>
      </div>
    </div>
    <div v-else class="row">
      <template v-for="(character) in characters">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
					<div class="work-item">
            <img
              v-bind:src="character.img"
              v-bind:alt="$t('characters.grid.imageOfCharacterName', {characterName: character.name})"
              v-bind:id="'char-id_' + character.char_id"
              class="img-thumbnail"
            />
            <span class="org">{{ character.name }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import Loader from './Loader.vue';
  import Alerter from './Alerter.vue';

  export default {
    components: {
      Loader,
      Alerter,
    },
    props: {
      showLoader: Boolean,
      characters: Array,
    },
  };
</script>
