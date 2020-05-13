<template>
  <Alerter
    v-if="characters.length === 0 && showLoader === false"
    :purpose="'info'"
    :message="$t('characters.search.noSearchResults')"
  />
  <div v-else class="container grid">
    <div v-if="showLoader" class="row">
      <div class="col-12">
        <Loader/>
      </div>
    </div>
    <div v-else class="row">
      <template v-for="character in characters">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
					<div class="grid-item">
            <img
              v-bind:src="character.img"
              v-bind:alt="$t('characters.grid.imageOfCharacterName', {characterName: character.name})"
              v-bind:id="'char-id_' + character.char_id"
              class="img-thumbnail"
            />
            <div
              v-on:mouseover="savePosition(character);"
              v-bind:id="'overlay-for-character_' + character.char_id"
              class="grid-overlay"
            >
              <router-link
                :to="{ name: 'character', params: { character: character, pageName: character.pageName } }"
                class="grid-hover-text"
              >{{ character.name }}</router-link>
            </div>
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
    methods: {
      savePosition(character) {
        console.log('Saving position', character.name);

        const overlayItem = document.querySelector('#overlay-for-character_' + character.char_id);
        const rect = overlayItem.getBoundingClientRect();

        console.log('Position', rect.top);

        const bodyRectTop = document.body.getBoundingClientRect().top;

        console.log('Body offset from top', Math.abs(bodyRectTop));
      },
    },
  };
</script>

<style scoped>
  .grid .grid-item {
  	text-align: center;
    position: relative;
    margin-bottom: 1rem;
  }

  .grid .grid-item img {
    width: 17rem;
    height: 17rem;
    object-fit: cover;
    color: #495057;
    text-align: center;
  }

  .grid-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #262431;
    border-radius: .25rem;
  }

  .grid-item:hover .grid-overlay {
    opacity: 0.75;
  }

  .grid-hover-text {
    color: #fff;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  @media (max-width: 767px) {
    .grid .grid-item img {
      width: 24rem;
      height: 24rem;
      object-fit: cover;
      color: #495057;
      text-align: center;
    }
  }
</style>
