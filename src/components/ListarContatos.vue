<template>
  <div>
    <h3>Lista de Contatos </h3>
    <tabela-contatos :contatos="contatos"></tabela-contatos>
  </div>
</template>
<script>
import TabelaContatos from './TabelaContatos.vue';
export default {
  name: 'listar-contatos',
  components: {TabelaContatos},
  computed: {
    contatos() {
      return this.$store.getters.listarContatos
    }
  },
  methods: {
    delContato(contato) {
      this.$store.dispatch('delContato',contato);
    }
  }
}
</script>
