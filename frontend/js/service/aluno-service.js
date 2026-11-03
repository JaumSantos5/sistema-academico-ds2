const AlunoService = {
  chave: "sistema-academico-alunos",
  listar() {
    try {
      const json = localStorage.getItem(this.chave);
      const alunos = json ? JSON.parse(json) : [];
      return Array.isArray(alunos) ? alunos : [];
    } catch (_) {
      return [];
    }
  },
  salvar(alunos) { localStorage.setItem(this.chave, JSON.stringify(alunos)); },
  limpar() { localStorage.removeItem(this.chave); }
};
