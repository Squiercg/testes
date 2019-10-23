<template>
  <div id="app">

    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="item of sharedState.seedData" :key="item" >{{ item.item }}</div>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamp</strong>
          <div v-for="item of sharedState.seedData" :key="item" >{{ item.data }}</div>
        </div>
      </div>
    </div>
    <entrada :placeholder="placeholder" @novaContagem="updateContagem" />
    <contador :contagem="contagem"/>
  </div>
</template>

<script>
  import { store } from './store.js';
  import entrada from "./components/entrada.vue";
  import contador from "./components/contador.vue";


export default {
  name: 'app',
  data () {
    return {
      sharedState: store.state,
      placeholder: 'Entre uma nota',
      contagem: store.getContagem()
    }
  },
  components: {
    entrada,
    contador
  },
  methods: {
    updateContagem(variable) {
      this.contagem = variable
    }

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
</style>
