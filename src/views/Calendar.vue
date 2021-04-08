<template>
  <div>
    <DatePicker v-model="date" :value="null" color="green" is-expanded />
    <!-- <v-date-picker
      v-model="date"
      color="red" 선택 값, 주변 색 변경
      is-dark 다크모드만 가능.
      is-expanded 확장모드 (width)
      :min-date="date" 날짜 범위 선택
    /> -->
    <h1>달력</h1>
    <!-- <button type="button" @click="createTodo"></button> -->
    <h2>{{ date }}</h2>
    <h2>{{ getDay }}</h2>
    <!-- <router-link :to="{ name: 'today', params: { id: getDay }}">today</router-link> -->
    <router-view></router-view>
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
  created(): void {
    this.createTodo();
  },
  computed: {
    getDay(): string {
      const dd = moment(this.date).get('date');
      const mm = moment(this.date).get('month') + 1;
      console.log(dd);
      console.log(mm);
      const yyyy = moment(this.date).get('year');
      console.log(typeof yyyy);
      const today = `${yyyy}${mm}${dd}`;
      console.log(typeof today);
      return today;
    }
  },
  beforeUpdate() {
    console.log(typeof this.date);
    console.log(typeof this.getDay);
    this.createTodo();
  },
  methods: {
    createTodo() { 
      this.$router.push({ name: "Today", params: { id: this.getDay } });
      console.log("hello World!");
    }
  }
});
</script>

<style scoped></style>
