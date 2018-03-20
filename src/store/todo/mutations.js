export default {
  ADD_TAREFA: (state, value) => {
    state.tarefas.push(value)
  },
  DEL_TAREFA: (state,value) => {
    let posicao = state.tarefas.indexOf(value);

    if(posicao > -1) {
      state.tarefas.splice(posicao,1);
    }
  }
}