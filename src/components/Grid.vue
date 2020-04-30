<template>
  <div class="container works">
    <div v-if="showLoader" class="row">
      <div class="col-12">
        <Loader/>
      </div>
    </div>
    <div v-else class="row">
      <template v-for="(character) in characters">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
					<div class="work-item">
            <img
              v-bind:src="character.img"
              v-bind:alt="$t('characters.grid.imageOfCharacterName', {characterName: character.name})"
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

  export default {
    components: {
      Loader,
    },
    props: {
      showLoader: Boolean,
      characters: Array,
    },
  };
</script>
