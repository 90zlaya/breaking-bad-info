<template>
  <header id="header" class="header">
    <div class="header-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-container">
              <h1 class="text-center">
                {{ $t('header.title') }}
                <span id="js-rotating">{{ $t('header.rottating') }}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .header .header-content {
    padding-top: 8.5rem;
    padding-bottom: 7rem;
    text-align: center;
  }

  .header .text-container {
    margin-bottom: 3rem;
  }

  .header h1 {
    margin-bottom: 1rem;
  }

  .header #js-rotating {
    color: #cfd200;
  }

  .header .p-large {
    margin-bottom: 2rem;
  }

  .header .btn-solid-lg {
    margin-right: 0.5rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 767px) {
    .header .header-content {
      margin-top: 3.8rem;
    }
  }

  @media (min-width: 768px) {
    .header .header-content {
      padding-top: 11rem;
    }
  }

  @media (min-width: 992px) {
    .header .header-content {
      padding-top: 13rem;
      padding-bottom: 10rem;
      text-align: left;
    }

    .header .text-container {
      margin-top: 6.5rem;
    }
  }

  @media (min-width: 1200px) {
    .header .text-container {
      margin-top: 7.5rem;
      margin-left: 2.5rem;
    }

    .header .image-container {
      margin-left: 3rem;
    }
  }
</style>
