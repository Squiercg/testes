<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"><router-link class="navbar-link" to='/'>Home</router-link></li>
        <li class="nav-item active"><router-link class="navbar-link" to='/listapostagens'>Lista Postagens </router-link></li>
        <li class="nav-item active"><router-link class="navbar-link" to='/criapostagem'>Cria uma postagem </router-link></li>
        <li class="nav-item active"><router-link class="navbar-link" to='/listapostagensvuex'>Lista Postagens Vuex</router-link></li>
      </ul>
    </nav>

    <div>
      <ol>
        <li><strong>API:</strong> <a href="https://jsonplaceholder.typicode.com" target="_blank">https://jsonplaceholder.typicode.com</a></li>
        <li><strong>API:</strong> <a href="https://reqres.in/" target="_blank">https://reqres.in/</a></li>
      </ol>
    </div>
    <br>
    <router-view />



  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar-link {
  color: white !important;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
