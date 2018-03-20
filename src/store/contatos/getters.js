export default {
  listarContatos: state => {
    let lista = state.contatos.slice();
    return lista.reverse();
  },
  buscarContatos: state => termo => {
    let resultado = []
    if (termo !== '') {
      for (let i = 0; i < state.contatos.length; i++) {
        if (state.contatos[i].nome.toLowerCase().indexOf(termo.toLowerCase()) > -1)
          resultado.push(state.contatos[i])
      }
    }
    return resultado
  }

}