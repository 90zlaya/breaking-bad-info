<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="alert alert-danger" role="alert">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      message: String,
    },
  };
</script>
