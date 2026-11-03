const AlunoModel = require("../model/aluno-model");
const { enviarJson, lerJson } = require("../utils/http");

const AlunoController = {
  listar(req, res) {
    enviarJson(res, 200, AlunoModel.listar());
  },
  async cadastrar(req, res) {
    try {
      const dados = await lerJson(req);
      const resultado = AlunoModel.cadastrar(dados);
      if (!resultado.sucesso) {
        return enviarJson(res, resultado.status, { mensagem: resultado.mensagem });
      }
      enviarJson(res, 201, { mensagem: "Aluno cadastrado com sucesso.", aluno: resultado.aluno });
    } catch (erro) {
      enviarJson(res, erro.status || 500, { mensagem: erro.status ? erro.message : "Erro interno." });
    }
  }
};
module.exports = AlunoController;
