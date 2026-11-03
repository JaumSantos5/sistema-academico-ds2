const http = require("node:http");
const { tratarRotas } = require("./routes/aluno-routes");
const porta = Number(process.env.PORT) || 3000;

const servidor = http.createServer((req, res) => {
  tratarRotas(req, res).catch(() => {
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ mensagem: "Erro interno." }));
    }
  });
});
servidor.listen(porta, () => console.log(`API disponível em http://localhost:${porta}`));
