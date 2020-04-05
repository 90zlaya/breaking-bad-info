<template>
  <div id="quotes" class="slider-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-container">
            <div class="swiper-container card-slider">
              <div class="swiper-wrapper">
                <template v-for="(item, index) in slides">
                  <div class="swiper-slide">
                    <div class="card">
                      <img class="card-image" src="src/data/images/user.png" alt="alternative">
                      <div class="card-body">
                        <p class="testimonial-text">{{ item.quote }}</p>
                        <p class="testimonial-author">{{ item.author }}</p>
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
  import quotes from './../data/json/quotes.json';

  export default {
    data() {
      return {
        slides: quotes,
      };
    },
    created () {
      // Do something here
    },
  };
</script>
