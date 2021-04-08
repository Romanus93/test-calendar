<template>
  <div>
    <h1>BasicCalendar</h1>
    <h2>{{ date }}</h2>
    <h2>이건 moment() = {{ mDate }}</h2>
    <h2>이건 moment().day() = {{ momentDate }}</h2>
    <!-- <h2>이건 moment().date(this.date) = {{ momentNewDate }}</h2> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  data() {
    return {
      date: new Date()
    }
  },
  computed: {
    mDate(): number {
      const now = moment("2010-10-20 4:30",       "YYYY-MM-DD HH:mm");
      return now;
    },
    momentDate(): number {
      const now = moment(this.date).get('date');
      console.log(typeof now);
      return now;
    },
    // momentNewDate(): number {
    //   const now = moment().date();
    //   return now;
    // }
  }
  // methods: {
  //   toDate(year: number): string {
  //     // const moment = require('moment');
  //     // const now = moment(d).format("MMMM Do YYYY, h:mm:ss a");
  //     const now = moment().date();
  //     return now;
  //   }
  // }
});
</script>