<template>
  <div class="hello">
    <!-- <section>
      <h1>{{ msg }}</h1>
      <h2>Installed CLI Plugins</h2>  
    </section> -->
      <h1>Filter</h1>
      <input type="text"/>
      <p>{{ msg }}</p>
      <h2>{{ readersNumber }} {{ book.title }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toRef, ref, reactive, h } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup(props, context) {
    // console.log(props.msg);
    // console.log(toRef);
    // const msg = toRef(props, 'msg')
    // // readersNumber book.title
    // console.log(ref);
    // const readersNumber = ref(10);
    // const book = reactive({ title: 'vue 3 Guide'});
    // console.log(reactive);
    console.log(h);
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    // Please note that we need to explicitly expose ref value here
    return () => h('h2', [readersNumber.value, book.title]) 
    // return {
    //   // readersNumber,
    //   // book
    // }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
