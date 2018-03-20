<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Descreva a Tarefa" v-model="tarefa">
          <div class="input-group-append">
            <button class="btn btn-outline-primary" type="button" @click="adicionar">Adicionar Tarefa</button>
          </div>
        </div>
        <br>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(tarefa,index) in tarefas" :key="index">
            {{tarefa}}
            <del-tarefa :tarefa="tarefa"></del-tarefa>
          </li>      
        </ul>
      </div>
    </div>    
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

