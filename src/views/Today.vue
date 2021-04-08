<template>
  <div id="today" class="container-id">
    <h1>Today, HelloWorld!</h1>
    <h2>{{ id }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String
    }
  }
});
</script>

<style scoped>
.container-id {
  width: 85vw;
  height: 90vh;
  border: 10px solid salmon;
}
</style>
