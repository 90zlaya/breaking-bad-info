<template>
  <div id="quotes" class="slider-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-container">
            <div class="swiper-container card-slider">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from './../../.config.json';
  import quotes from './../data/quotes.json';
  import characters from './../data/characters.json';

  export default {
    data() {
      return {
        slides: [],
      };
    },
    created () {
      this.slides = this.shiftQuotes(quotes);
    },
    methods: {
      shiftQuotes(quotes) {
        let firstArray = [];
        let secondArray = [];

        quotes.forEach((item) => {
          let randomQuoteId = Math.floor(Math.random() * (item.quote_id * 2));

          // Construct image path for quote author
          item.image = this.constructCharacterImagePath(item.author);

          if (randomQuoteId > item.quote_id) {
            firstArray.push(item);
          } else {
            secondArray.push(item);
          }
        });

        let randomFirstArrayIndex = Math.floor(Math.random() * firstArray.length);
        let firstArraySlice = firstArray.slice(randomFirstArrayIndex);
        let randomSecondArrayIndex = Math.floor(Math.random() * firstArray.length);
        let secondArraySlice = firstArray.slice(randomFirstArrayIndex);
        let shiftedQuotes = firstArraySlice.concat(secondArraySlice);

        return shiftedQuotes;
      },
      constructCharacterImagePath(characterName) {
        let imagePath = '';
        let characterNameInLowerCase = characterName.toLowerCase();
        let imageName = characterNameInLowerCase.replace(' ', '-');
        let [characterDetails] = characters.filter((character) => {
          return character.name === characterName;
        });

        imagePath += config.images.root;
        imagePath += config.images.characters;

        if (characterDetails !== undefined && characterDetails.hasImage == 'true') {
          imagePath += imageName;
        } else {
          imagePath += config.images.defaultCharacter;
        }

        imagePath += '.';
        imagePath += config.images.defaultExtension;

        return imagePath;
      },
    },
  };
</script>
