<template>
  <div>
    <h4>Adicionar Contato</h4>
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Nome</label>
        <div class="col-sm-10">
          <input type="text" v-model="contato.nome" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">E-mail</label>
        <div class="col-sm-10">
          <input type="email" v-model="contato.email" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Telefone</label>
        <div class="col-sm-10">
          <input type="text" v-model="contato.telefone" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click.prevent="adicionarContato">Adicionar Contato</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'adicionar-contato',
  data() {
    return {
      contato: {}
    }
  },
  methods: {
    adicionarContato() {
      if(this.contato.nome !== '' && this.contato.email !== '' && this.contato.telefone !== '') {
        this.$store.dispatch('adicionarContato',this.contato);
        this.contato = {}
      }
    }
  }
}
</script>
