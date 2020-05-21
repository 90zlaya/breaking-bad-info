<template>
  <div id="statistics" class="counter">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div id="counter">
            <template v-for="count in counter">
              <div class="cell" :key="count.value">
                <div
                  :data-count="count.value"
                  class="counter-value number-count"
                >1</div>
                <p class="counter-info">{{ count.info }}</p>
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
            value: 5,
            info: this.$t('counter.seasons'),
          },
          {
            value: 6,
            info: this.$t('counter.years'),
          },
          {
            value: 62,
            info: this.$t('counter.episodes'),
          },
          {
            value: 271,
            info: this.$t('counter.deaths'),
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .counter {
    padding-top: 6.5rem;
    padding-bottom: 5.375rem;
    background-color: #262431;
    text-align: center;
    background-color: #2f2c3d;
  }

  .counter #counter .cell {
    display: inline-block;
    width: 6.25rem;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
  }

  .counter #counter .counter-value {
    color: #f1f1f8;
    font: 700 3.5rem/4.25rem "Montserrat", sans-serif;
    vertical-align: middle;
  }

  .counter #counter .counter-info {
    margin-bottom: 0;
    color: #cfd200;
    font: 400 0.875rem/1.25rem "Open Sans", sans-serif;
    vertical-align: middle;
  }

  @media (min-width: 992px) {
    .counter {
      padding-top: 6rem;
      padding-bottom: 4.5rem;
    }

    .counter #counter .cell {
      width: 8rem;
      margin-right: 2.5rem;
      margin-left: 2.5rem;
    }

    .counter #counter .counter-value {
      font: 700 4.25rem/4.5rem "Montserrat", sans-serif;
    }
  }
</style>
