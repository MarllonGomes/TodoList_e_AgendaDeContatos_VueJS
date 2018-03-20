<template>
  <button @click="apagar" class="btn btn-danger">Excluir Contato</button>
</template>
<script>
export default {
  name: 'del-contato',
  props: {
    contato: {
      required: true,
      type: Object
    }
  },
  methods: {
    apagar() {
      this.$store.dispatch('delContato', this.contato)
    }
  }
}
</script>
