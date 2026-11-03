const AlunoView = {
  lerDadosFormulario() {
    return Object.fromEntries(new FormData(document.querySelector("#form-aluno")));
  },
  exibirMensagem(mensagem, tipo = "sucesso") {
    const elemento = document.querySelector("#mensagem");
    elemento.textContent = mensagem;
    elemento.className = `mensagem ${tipo}`;
  },
  exibirAlunos(alunos) {
    const corpo = document.querySelector("#corpo-tabela");
    corpo.replaceChildren();
    for (const aluno of alunos) {
      const linha = document.createElement("tr");
      for (const chave of ["ra", "nome", "email", "curso", "turma"]) {
        const celula = document.createElement("td");
        celula.textContent = aluno[chave] ?? "";
        linha.append(celula);
      }
      corpo.append(linha);
    }
    document.querySelector("#total-alunos").textContent = `Total: ${alunos.length}`;
    document.querySelector("#saida-json").textContent = JSON.stringify(alunos, null, 2);
  },
  limparFormulario() { document.querySelector("#form-aluno").reset(); }
};
