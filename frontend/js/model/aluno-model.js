const AlunoModel = {
  normalizarTexto(valor) { return String(valor ?? "").trim(); },
  prepararCadastro(dados) {
    const aluno = {
      ra: this.normalizarTexto(dados.ra),
      nome: this.normalizarTexto(dados.nome),
      email: this.normalizarTexto(dados.email),
      curso: this.normalizarTexto(dados.curso),
      turma: this.normalizarTexto(dados.turma)
    };
    if (Object.values(aluno).some(valor => !valor)) {
      return { sucesso: false, mensagem: "Todos os campos são obrigatórios." };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(aluno.email)) {
      return { sucesso: false, mensagem: "Informe um e-mail válido." };
    }
    return { sucesso: true, dados: aluno };
  }
};
