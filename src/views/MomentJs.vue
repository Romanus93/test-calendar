<template>
  <div>
    <h1>MomentJs</h1>
    <h2>{{ toDate() }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  methods: {
    toDate(year: number): string {
      // const moment = require('moment');
      // const now = moment(d).format("MMMM Do YYYY, h:mm:ss a");
      const now = moment().date();
      return now;
    }
  }
});
</script>
