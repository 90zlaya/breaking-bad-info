<template>
  <div id="quotes" class="slider-1">
    <TheAlerter v-if="errorMessage !== ''" :purpose="'danger'" :message="errorMessage" />
    <div v-else class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-container">
            <div class="swiper-container card-slider">
              <TheLoader v-if="showLoader" />
              <template v-else>
                <div class="swiper-wrapper">
                  <template v-for="slide in slides">
                    <div class="swiper-slide" :key="slide.quote_id">
                      <div class="card">
                        <img
                          class="card-image"
                          :src="slide.image"
                          :alt="$t('slider.imageOfQuoteAuthor')"
                        >
                        <div class="card-body">
                          <p class="testimonial-text">{{ slide.quote }}</p>
                          <p class="testimonial-author">{{ slide.author }}</p>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from './../../.config.json';
  import {
    apiMap,
    localStorageMap,
    quotedAuthors,
  } from './../mixins/data.js';
  // TODO: Enable to fix eslint error
  /*import {
    cardSlider,
  } from './../mixins/functions.js';*/

  import TheLoader from './TheLoader.vue';
  import TheAlerter from './TheAlerter.vue';

  export default {
    components: {
      TheLoader,
      TheAlerter,
    },
    data() {
      return {
        slides: [],
        errorMessage: '',
        showLoader: true,
        numberOfSlides: config.slider.numberOfSlides,
      };
    },
    created() {
      const localQuotes = localStorage.getItem(localStorageMap.slider.quotes);

      if (localQuotes === undefined || localQuotes === null) {
        // Fetch quotes from API
        this.fetchQuotes();

        // NOTE: fetchQuotes makes promise, any code here is ineffective
      } else {
        // Create slides from quotes retrieved from local storage
        this.slides = this.createSlides(JSON.parse(localQuotes));
        this.showLoader = false;
      }
    },
    updated() {
      if (this.showLoader === false) {
        // Run card slider function from scripts.js
        //cardSlider();
        // TODO: Update this piece of code blocked by eslint
      }
    },
    methods: {
      fetchQuotes() {
        fetch(apiMap.baseUrl + apiMap.endpoints.quotes).then((response) => {
          return response.json();
        }).then((remoteQuotes) => {
          // Create slides from quotes retrieved from API
          this.slides = this.createSlides(remoteQuotes);

          // Save to local storage
          localStorage.setItem(localStorageMap.slider.quotes, JSON.stringify(remoteQuotes));

          // Stop loader
          this.showLoader = false;
        }).catch((error) => {
          console.error('Fetching quotes failed', error);
          this.errorMessage = this.$t('slider.errors.fetchingQuotes');
        });
      },
      createSlides(quotes) {
        let quoteIds = [];
        let slides = [];
        let previousAuthor = '';

        while (slides.length < this.numberOfSlides){
          const randomNumber = Math.floor(Math.random() * quotes.length) + 1;

          if (quoteIds.indexOf(randomNumber) === -1 && quotes[randomNumber] !== undefined) {
            // Do not repeat quote authors
            if (quotes[randomNumber].author !== previousAuthor) {
              // Remember current quote author for next query
              previousAuthor = quotes[randomNumber].author;

              // Construct image path for quote author
              quotes[randomNumber].image = this.constructCharacterImagePath(
                quotes[randomNumber].author
              );

              // Add quotes object to the slides array
              slides.push(quotes[randomNumber]);
              // Prevent repetition of quotes
              quoteIds.push(randomNumber);
            }
          }
        }

        return slides;
      },
      constructCharacterImagePath(characterName) {
        let imagePath = '';
        const characterNameInLowerCase = characterName.toLowerCase();
        const imageName = characterNameInLowerCase.replace(' ', '-');
        const [characterDetails] = quotedAuthors.filter((author) => {
          return author === characterName;
        });
        const {
          root,
          characters,
          defaultCharacter,
          defaultExtension
        } = config.images;

        imagePath += root;
        imagePath += characters;
        imagePath += characterDetails ? imageName : defaultCharacter;
        imagePath += '.';
        imagePath += defaultExtension;

        return imagePath;
      },
    },
  };
</script>

<style scoped>
  .slider-1 {
    padding-top: 6.875rem;
    padding-bottom: 6.375rem;
    background-color: #262431;
  }

  .slider-1 .slider-container {
    position: relative;
  }

  .slider-1 .swiper-container {
    position: static;
    width: 90%;
    text-align: center;
  }

  .slider-1 .swiper-button-prev:focus,
  .slider-1 .swiper-button-next:focus {
    /* even if you can't see it chrome you can see it on mobile device */
    outline: none;
  }

  .slider-1 .swiper-button-prev {
    left: -0.5rem;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23f1f1f8'%2F%3E%3C%2Fsvg%3E");
    background-size: 1.125rem 1.75rem;
  }

  .slider-1 .swiper-button-next {
    right: -0.5rem;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23f1f1f8'%2F%3E%3C%2Fsvg%3E");
    background-size: 1.125rem 1.75rem;
  }

  .slider-1 .card {
    position: relative;
    border: none;
    background-color: transparent;
  }

  .slider-1 .card-image {
    width: 6rem;
    height: 6rem;
    margin-right: auto;
    margin-bottom: 0.25rem;
    margin-left: auto;
    border-radius: 50%;
  }

  .slider-1 .card-body {
    padding-bottom: 0;
  }

  .slider-1 .testimonial-author {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    .slider-1 .swiper-button-prev {
      left: 1rem;
      width: 1.375rem;
      background-size: 1.375rem 2.125rem;
    }

    .slider-1 .swiper-button-next {
      right: 1rem;
      width: 1.375rem;
      background-size: 1.375rem 2.125rem;
    }
  }
</style>
