<template>
  <div id="quotes" class="slider-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-container">
            <div class="swiper-container card-slider">
              <Loader v-if="showSliderLoader"/>
              <template v-else>
                <div class="swiper-wrapper">
                  <template v-for="slide in slides">
                    <div class="swiper-slide">
                      <div class="card">
                        <img
                          class="card-image"
                          v-bind:src="slide.image"
                          v-bind:alt="$t('slider.imageOfQuoteAuthor')"
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
  import apiMap from './../data/apiMap.json';
  import localStorageMap from './../data/localStorageMap.json';
  import quotedAuthors from './../data/quotedAuthors.json';
  import Loader from './Loader.vue';

  export default {
    components: {
      Loader,
    },
    data() {
      return {
        slides: [],
        showSliderLoader: true,
        numberOfSlides: config.slider.numberOfSlides,
      };
    },
    created() {
      let localQuotes = localStorage.getItem(localStorageMap.slider.quotes);

      if (localQuotes === undefined || localQuotes === null) {
        // Fetch quotes from API
        this.fetchQuotes();

        // NOTE: fetchQuotes makes promise, any code here is ineffective
      } else {
        // Create slides from quotes retrieved from local storage
        this.slides = this.createSlides(JSON.parse(localQuotes));
        this.showSliderLoader = false;
      }
    },
    updated() {
      if (this.showSliderLoader === false) {
        // Run card slider function from scripts.js
        cardSlider();
      }
    },
    methods: {
      createSlides(quotes) {
        let slides = [];
        let previousAuthor = '';

        while (slides.length < this.numberOfSlides){
          let randomNumber = Math.floor(Math.random() * quotes.length) + 1;

          if (slides.indexOf(randomNumber) === -1 && quotes[randomNumber] !== undefined) {
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
            }
          }
        }

        return slides;
      },
      constructCharacterImagePath(characterName) {
        let imagePath = '';
        let characterNameInLowerCase = characterName.toLowerCase();
        let imageName = characterNameInLowerCase.replace(' ', '-');
        let [characterDetails] = quotedAuthors.filter((author) => {
          return author === characterName;
        });
        let {
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
      fetchQuotes() {
        fetch(apiMap.baseUrl + apiMap.endpoints.quotes).then((response) => {
          return response.json();
        }).then((remoteQuotes) => {
          // Create slides from quotes retrieved from API
          this.slides = this.createSlides(remoteQuotes);

          // Save to local storage
          localStorage.setItem(localStorageMap.slider.quotes, JSON.stringify(remoteQuotes));

          // Stop loader
          this.showSliderLoader = false;
        }).catch((error) => {
          console.error('Fetching quotes failed', error);
        });
      },
    },
  };
</script>
