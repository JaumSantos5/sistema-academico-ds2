const AlunoModel = require("../model/aluno-model");
const AlunoController = {
  listar(req, res) {
    return res.status(200).json(AlunoModel.listar());
  },
  cadastrar(req, res) {
    const resultado = AlunoModel.cadastrar(req.body || {});
    if (!resultado.sucesso) {
      return res.status(resultado.status).json({ mensagem: resultado.mensagem });
    }
    return res.status(201).json({ mensagem: "Aluno cadastrado com sucesso.", aluno: resultado.aluno });
  }
};
module.exports = AlunoController;
