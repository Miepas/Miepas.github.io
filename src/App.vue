<template>
<div>
  <router-view/>
</div>
  <!-- <img id="logo" alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- <divdemoVue /> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Gsap from './components/Gsap.vue'
// import Home from './components/Home'
//import divdemoVue from './components/divdemo.vue'
//import gsap from 'gsap';
export default {
  name: 'App',
  components: {
    //HelloWorld,
    // Home
    //divdemoVue,
  },
  mounted:function () {
    console.log("第二条线索:点一下五彩斑斓的地方");
    //gsap.to("#logo",{duration:3,x:500,ease:"bounce"});
  }
}
</script>

<style scoped>

</style>


