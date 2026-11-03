const AlunoController = {
  definirCarregando(carregando) {
    document.querySelector("#botao-cadastrar").disabled = carregando;
  },
  async atualizarTela() {
    const resultado = await AlunoService.listar();
    AlunoView.exibirAlunos(resultado.dados);
  },
  async iniciar() {
    try {
      await this.atualizarTela();
    } catch (erro) {
      AlunoView.exibirMensagem(erro.message, "erro");
    }
    document.querySelector("#form-aluno").addEventListener("submit", async evento => {
      evento.preventDefault();
      const validacao = AlunoModel.prepararCadastro(AlunoView.lerDadosFormulario());
      if (!validacao.sucesso) return AlunoView.exibirMensagem(validacao.mensagem, "erro");
      this.definirCarregando(true);
      try {
        await AlunoService.cadastrar(validacao.dados);
        AlunoView.limparFormulario();
        AlunoView.exibirMensagem("Aluno cadastrado com sucesso!");
        await this.atualizarTela();
      } catch (erro) {
        AlunoView.exibirMensagem(erro.message, "erro");
      } finally {
        this.definirCarregando(false);
      }
    });
  }
};
AlunoController.iniciar();
