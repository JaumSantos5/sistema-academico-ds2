const AlunoController = {
  atualizarTela() { AlunoView.exibirAlunos(AlunoModel.listar()); },
  iniciar() {
    AlunoModel.alunos = AlunoService.listar();
    this.atualizarTela();
    document.querySelector("#form-aluno").addEventListener("submit", evento => {
      evento.preventDefault();
      const resultado = AlunoModel.cadastrar(AlunoView.lerDadosFormulario());
      if (!resultado.sucesso) return AlunoView.exibirMensagem(resultado.mensagem, "erro");
      AlunoService.salvar(AlunoModel.listar());
      AlunoView.limparFormulario();
      AlunoView.exibirMensagem("Aluno cadastrado com sucesso!");
      this.atualizarTela();
    });
    document.querySelector("#botao-limpar").addEventListener("click", () => {
      if (!confirm("Deseja limpar os alunos cadastrados neste navegador?")) return;
      AlunoService.limpar();
      AlunoModel.alunos = [];
      AlunoView.exibirMensagem("Dados locais apagados.", "informacao");
      this.atualizarTela();
    });
  }
};
AlunoController.iniciar();
