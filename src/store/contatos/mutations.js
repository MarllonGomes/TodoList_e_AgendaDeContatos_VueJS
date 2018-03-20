export default {
  ADD_CONTATO: (state, value) => {
    state.contatos.push(value);
  },
  DEL_CONTATO: (state, value) => {
    let posicao = state.contatos.indexOf(value);

    if (posicao > -1) {
      state.contatos.splice(posicao, 1);
    }
  }
}