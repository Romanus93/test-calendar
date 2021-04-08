<template>
  <div>
    <DatePicker v-model="date" :value="null" color="green" is-expanded />
    <h1>달력</h1>
    <h2>{{ date }}</h2>
    <h2>dd/mm/yyyy={{ getDay }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  data() {
    return {
      date: new Date()
    };
  },
  computed: {
    getDay(): string {
      const dd = moment(this.date).get('day');
      const mm = moment(this.date).get('month') + 1;
      console.log(dd);
      console.log(mm);
      const yyyy = moment(this.date).get('year');
      console.log(typeof yyyy);
      // const today = yyyy + mm + dd;
      const today = `${yyyy}/${mm}/${dd}`;
      console.log(typeof today);
      return today;
    }
  },
  beforeUpdate() {
    console.log(typeof this.date);
    console.log(typeof this.getDay);
  }
});
</script>

<style scoped></style>
