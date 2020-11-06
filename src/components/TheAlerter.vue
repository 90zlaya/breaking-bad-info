<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div
          :class="`alert alert-${ purpose }`"
          role="alert"
        >{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      purpose: {
        type: String,
        required: true,
        validator(status) {
          return ['info', 'danger'].includes(status);
        }
      },
      message: {
        type: String,
        required: true
      }
    }
  };
</script>
