<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" style="margin-bottom: 40px;">
      <a href="#" class="navbar-brand">Agenda e TodoList VueJS</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" style="margin-right:50px;">
          <li class="nav-item">
              <router-link class="nav-link" to="/">TodoList</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/agenda">Agenda</router-link>
          </li>
        </ul>
      </div>
    </nav>
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
}
</style>
