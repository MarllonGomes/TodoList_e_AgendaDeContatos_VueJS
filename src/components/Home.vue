<template>
  <div>
    <h1>Página Inicial</h1>
    <input type="text" v-model="tarefa">
    <button @click="adicionar">Adicionar</button>
    <br/><br/>
    <ul></ul>
    <li v-for="(tarefa,index) in tarefas" :key="index">
      {{tarefa}}
      <del-tarefa :tarefa="tarefa"></del-tarefa>
    </li>
  </div>
</template>
<script>
import DelTarefa from './DelTarefa.vue'
export default {
  name: 'mercadao-pg-inicial',
  components: {DelTarefa},
  data() {
    return {
      tarefa: ''
    }
  },
  methods: {
    adicionar() {
      if(this.tarefa !== '') {
        this.$store.dispatch('adicionarTarefa',this.tarefa);
        this.tarefa = '';
      }
    }
  },
  computed: {
    tarefas() {
      return this.$store.getters.listaTarefas
    }
  }
}
</script>

