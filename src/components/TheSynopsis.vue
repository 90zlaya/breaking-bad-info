<template>
  <div id="synopsis" class="basic-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="text-center pb-3">{{ $t('video.synopsis') }}</h3>
          <div class="p-heading p-large">{{ $t('video.seriesSynopsis') }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="image-container">
            <div class="video-wrapper">
              <a
                href="https://www.youtube.com/watch?v=ceqOTZnhgY8"
                class="popup-youtube"
                data-effect="fadeIn"
              >
                <img
                  class="img-fluid"
                  src="images/video-frame.jpg"
                  alt="Video Frame Image"
                 />
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
  export default { name: 'TheSynopsis' };
</script>

<style scoped>
  .basic-1 h2 {
    margin-bottom: 1.125rem;
    text-align: center;
  }

  .basic-1 .p-heading {
    margin-bottom: 4rem;
    text-align: center;
  }

  .basic-1 .image-container img {
    border-radius: 0.425rem;
  }

  .basic-1 .video-wrapper {
    position: relative;
  }

  .basic-1 .video-play-button {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    display: block;
    box-sizing: content-box;
    width: 2rem;
    height: 2.75rem;
    padding: 1.125rem 1.25rem 1.125rem 1.75rem;
    border-radius: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .basic-1 .video-play-button:before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    display: block;
    width: 4.75rem;
    height: 4.75rem;
    border-radius: 50%;
    background: #cfd200;
    animation: pulse-border 1500ms ease-out infinite;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .basic-1 .video-play-button:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    display: block;
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;
    background: #cfd200;
    transition: all 200ms;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .basic-1 .video-play-button span {
    position: relative;
    display: block;
    z-index: 3;
    top: 0.375rem;
    left: 0.25rem;
    width: 0;
    height: 0;
    border-left: 1.625rem solid #fff;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
  }

  @keyframes pulse-border {
    0% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      opacity: 0;
    }
  }

  @media (min-width: 992px) {
    .basic-1 .image-container {
      max-width: 53.125rem;
      margin-right: auto;
      margin-left: auto;
    }
  }
</style>
