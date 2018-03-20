<template>
  <button @click="apagar">apagar tarefa</button>
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
