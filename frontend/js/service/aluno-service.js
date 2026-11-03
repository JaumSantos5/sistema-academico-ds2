const AlunoService = {
  endereco: "http://localhost:3000/api/alunos",
  async requisitar(url, opcoes) {
    let resposta;
    try {
      resposta = await fetch(url, opcoes);
    } catch (_) {
      throw new Error("Não foi possível conectar ao backend. Verifique se npm run dev está ativo.");
    }
    const retorno = await resposta.json();
    if (!resposta.ok) throw new Error(retorno.mensagem || `Erro HTTP ${resposta.status}`);
    return retorno;
  },
  async listar() { return this.requisitar(this.endereco); },
  async cadastrar(dados) {
    return this.requisitar(this.endereco, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });
  }
};
