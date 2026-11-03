const AlunoController = {
  iniciar() {
    document.querySelector("#form-aluno").addEventListener("submit", evento => {
      evento.preventDefault();
      const resultado = AlunoModel.cadastrar(AlunoView.lerDadosFormulario());
      if (!resultado.sucesso) {
        AlunoView.exibirMensagem(resultado.mensagem, "erro");
        return;
      }
      AlunoView.exibirMensagem("Aluno cadastrado com sucesso!");
      AlunoView.limparFormulario();
      AlunoView.exibirAlunos(AlunoModel.listar());
    });
    AlunoView.exibirAlunos(AlunoModel.listar());
  }
};
AlunoController.iniciar();
