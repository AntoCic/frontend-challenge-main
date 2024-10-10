<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Movie</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
export default {
  props: {
    id: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped></style>