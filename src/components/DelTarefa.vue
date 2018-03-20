<template>
  <span class="badge badge-danger badge-pill" @click="apagar" style="cursor: pointer;">Excluir</span>
</template>
<script>
export default {
  name: 'del-tarefa',
  props: {
    tarefa: {
      required: true,
      type: String
    }
  },
  methods: {
    apagar() {
      this.$store.dispatch('removerTarefa', this.tarefa)
    }
  }
}
</script>
