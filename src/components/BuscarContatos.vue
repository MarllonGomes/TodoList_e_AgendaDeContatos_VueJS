<template>
  <div>
    <form>
      <div class="form-control">
        <input type="text" class="form-control" v-model="busca" placeholder="Digite o nome do Contato">
      </div>
    </form>
    <TabelaContatos :contatos="resultado"></TabelaContatos>
  </div>
</template>
<script>
import TabelaContatos from './TabelaContatos.vue';
export default {
  name: 'buscar-contatos',
  components: {TabelaContatos},
  data() {
    return {
      busca: ''
    }
  },
  computed: {
    resultado() {
      return this.$store.getters.buscarContatos(this.busca)
    }
  },
}
</script>
