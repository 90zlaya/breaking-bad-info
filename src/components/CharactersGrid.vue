<template>
  <TheAlerter
    v-if="characters.length === 0 && showLoader === false"
    purpose="info"
    :message="$t('characters.search.noSearchResults')"
   />
  <div v-else class="container grid">
    <div v-if="showLoader" class="row">
      <div class="col-12">
        <TheLoader />
      </div>
    </div>
    <div v-else class="row">
      <template v-for="(character, index) in characters">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" :key="index">
					<div v-lazy-container="lazyLoadContainer" class="grid-item">
            <img
              :data-src="character.img"
              :alt="$t('characters.grid.imageOfCharacterName', {
                characterName: character.name
              })"
              :id="character.page_name"
              class="img-thumbnail"
              loading="lazy"
            />
            <div class="grid-overlay">
              <p class="grid-hover-text">{{ character.name }}</p>
              <router-link
                :to="characterDetails(character.page_name)"
                class="btn-solid-md"
              >{{ $t('characters.grid.details') }}</router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import data from '../mixins/data.js';
  
  import TheLoader from './TheLoader.vue';
  import TheAlerter from './TheAlerter.vue';

  export default {
    components: {
      TheLoader,
      TheAlerter
    },
    props: {
      showLoader: {
        type: Boolean,
        required: true
      },
      characters: {
        type: Array,
        trequired: true
      }
    },
    computed: {
      lazyLoadContainer() {
        return {
          selector: 'img'
        };
      }
    },
    methods: {
      characterDetails(pageName) {
        return {
          name: data.routerRoutes.character.name,
          params: {
            canGoBack: true,
            pageName
          }
        };
      }
    }
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
    object-position: 0 0;
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
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .btn-solid-md {
    font-size: 20px;
    position: relative;
    top: 60%;
    text-align: center;
    display: inline-block;
    padding: 1.375rem 2.625rem 1.375rem 2.625rem;
    border: 0.125rem solid #cfd200;
    border-radius: 2rem;
    background-color: #cfd200;
    color: #000;
    font: 700 0.75rem/0 "Montserrat", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
  }

  .btn-solid-md:hover {
    background-color: transparent;
    color: #cfd200;
    text-decoration: none;
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
