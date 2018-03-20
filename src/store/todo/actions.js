export default {
  adicionarTarefa(context, value) {
    context.commit('ADD_TAREFA', value);
  },
  removerTarefa(context, value) {
    context.commit('DEL_TAREFA',value);
  }
}