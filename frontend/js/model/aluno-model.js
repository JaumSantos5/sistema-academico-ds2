const AlunoModel = {
  alunos: [],
  normalizarTexto(valor) {
    return String(valor ?? "").trim();
  },
  validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  localizarPorRa(ra) {
    return this.alunos.find(aluno => aluno.ra === ra);
  },
  cadastrar(dados) {
    const ra = this.normalizarTexto(dados.ra);
    const nome = this.normalizarTexto(dados.nome);
    const email = this.normalizarTexto(dados.email);
    const curso = this.normalizarTexto(dados.curso);
    const turma = this.normalizarTexto(dados.turma);

    if (!ra || !nome || !email || !curso || !turma) {
      return { sucesso: false, mensagem: "Todos os campos são obrigatórios." };
    }
    if (!this.validarEmail(email)) {
      return { sucesso: false, mensagem: "Informe um e-mail válido." };
    }
    if (this.localizarPorRa(ra)) {
      return { sucesso: false, mensagem: "Já existe um aluno com esse RA." };
    }
    const aluno = { id: this.alunos.length + 1, ra, nome, email, curso, turma };
    this.alunos.push(aluno);
    return { sucesso: true, aluno };
  },
  listar() { return [...this.alunos]; }
};
