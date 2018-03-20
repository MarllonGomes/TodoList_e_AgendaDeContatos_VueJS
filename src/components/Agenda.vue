<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>Agenda de Contatos</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <AdicionarContatoComponent @click.native="listarContatos = true"></AdicionarContatoComponent>
        </div>
        <div class="col-lg-6">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn btn-secondary" @click="listarContatos = true">Listar Contatos</button>
            <button class="btn btn-secondary" @click="listarContatos = false">Buscar Contatos</button>
          </div>
          <br/><br/>
          <listar-contatos v-if="listarContatos"></listar-contatos>
          <buscar-contatos v-if="!listarContatos"></buscar-contatos>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdicionarContatoComponent from './AdicionarContato.vue';
import ListarContatos from './ListarContatos.vue';
import BuscarContatos from './BuscarContatos.vue';
export default {
  name: 'agenda-de-contatos',
  data() {
    return {
      listarContatos: true
    }
  },
  components: {AdicionarContatoComponent, ListarContatos, BuscarContatos},
  
}
</script>

