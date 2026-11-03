const express = require("express");
const cors = require("cors");
const alunoRoutes = require("./routes/aluno-routes");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", mensagem: "Servidor funcionando." });
});
app.use("/api/alunos", alunoRoutes);
app.use((req, res) => res.status(404).json({ mensagem: "Rota não encontrada." }));
app.use((erro, req, res, next) => {
  if (erro instanceof SyntaxError && "body" in erro) {
    return res.status(400).json({ mensagem: "JSON inválido." });
  }
  console.error(erro);
  return res.status(500).json({ mensagem: "Erro interno." });
});
module.exports = app;
