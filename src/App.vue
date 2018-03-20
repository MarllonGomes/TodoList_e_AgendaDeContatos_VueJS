<template>
  <div id="app">
    <router-link to="/">Página inicial</router-link>
    <router-link style="margin-left: 20px;" to="/agenda">Agenda</router-link>
    <router-link style="margin-left: 20px;" to="/hello-world">Hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
