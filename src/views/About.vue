<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ currentDateTime(new Date())}}
    </h2>
    <div class="hihihihi">
      <h2>
        hi test croll view
      </h2>
    </div>
    <div class="hihihihi">
      <h2>
        hi test croll view
      </h2>
    </div>
    <div class="hihihihi">
      <h2>
        hi test croll view
      </h2>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  methods: {
    currentDateTime(date) {
      return moment(date);
    }
  }
};
// return moment(date).format("MMMM Do YYYY, h:mm:ss a");
</script>

<style scoped>
  .hihihihi {
    border: 10px solid salmon;
    height: 90vh;
  }
</style>