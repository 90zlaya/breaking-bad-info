<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div
          v-bind:class="'alert alert-' + purpose"
          role="alert"
        >{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      purpose: String,
      message: String,
    },
  };
</script>
