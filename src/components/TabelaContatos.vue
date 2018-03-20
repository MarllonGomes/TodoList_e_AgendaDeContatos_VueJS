<template>
  <table class="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th>Email</th>
        <th>Ações</th>
      </tr> 
    </thead>
    <tbody>
      <tr v-for="(contato,index) in contatos" :key="index">
        <td>{{ contato.nome }}</td>
        <td>{{ contato.telefone }}</td>
        <td>{{ contato.email }}</td>
        <td>
          <del-contato :contato="contato"></del-contato>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import DelContato from './DelContato.vue';
export default {
  name: 'tabela-contatos',
  components: {DelContato},
  props: ['contatos']
}
</script>

