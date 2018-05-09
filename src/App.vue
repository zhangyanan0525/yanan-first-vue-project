<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to yanan's App"/> -->
    <Home></Home>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import slider from "./views/slider.vue";
import Home from './Home.vue';

export default {
  name: "app",
  components: {
    HelloWorld,
    slider,
    Home,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
