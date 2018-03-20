export default {
  adicionarContato(context, value) {
    context.commit('ADD_CONTATO', value);
  },
  delContato(context, value) {
    context.commit('DEL_CONTATO', value);
  }
}