<template>
  <div id="synopsis" class="basic-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>{{ $t('video.synopsis') }}</h2>
          <div class="p-heading p-large">{{ $t('video.seriesSynopsis') }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="image-container">
            <div class="video-wrapper">
              <a
                v-bind:href="videoUrl"
                class="popup-youtube"
                data-effect="fadeIn"
              >
                <img class="img-fluid" v-bind:src="imageUrl" alt="Video Frame Image"/>
                <span class="video-play-button">
                    <span></span>
                </span>
              </a>
            </div>
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
        imageUrl: 'src/assets/images/video-frame.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=ceqOTZnhgY8',
      };
    },
  };
</script>
