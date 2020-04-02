<template>
  <div class="counter">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div id="counter">
            <template v-for="item in counter">
              <div class="cell">
                <div class="counter-value number-count" v-bind:data-count="item.data">1</div>
                <p class="counter-info">{{ item.info }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: [
          {
            data: '5',
            info: this.$t('counter.seasons'),
          },
          {
            data: '6',
            info: this.$t('counter.years'),
          },
          {
            data: '62',
            info: this.$t('counter.episodes'),
          },
          {
            data: '274',
            info: this.$t('counter.deaths'),
          },
        ],
      };
    },
  };
</script>
