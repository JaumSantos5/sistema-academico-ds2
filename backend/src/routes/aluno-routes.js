const AlunoController = require("../controller/aluno-controller");
const { enviarJson } = require("../utils/http");

async function tratarRotas(req, res) {
  const caminho = new URL(req.url, "http://localhost").pathname;
  if (req.method === "OPTIONS") {
    enviarJson(res, 204, {});
    return;
  }
  if (req.method === "GET" && caminho === "/api/health") {
    enviarJson(res, 200, { status: "ok", mensagem: "Servidor funcionando." });
    return;
  }
  if (req.method === "GET" && caminho === "/api/alunos") {
    AlunoController.listar(req, res);
    return;
  }
  if (req.method === "POST" && caminho === "/api/alunos") {
    await AlunoController.cadastrar(req, res);
    return;
  }
  enviarJson(res, 404, { mensagem: "Rota não encontrada." });
}
module.exports = { tratarRotas };
