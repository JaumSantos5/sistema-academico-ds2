function enviarJson(res, status, dados) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(JSON.stringify(dados));
}

async function lerJson(req) {
  const partes = [];
  let tamanho = 0;
  for await (const parte of req) {
    tamanho += parte.length;
    if (tamanho > 100_000) {
      const erro = new Error("Corpo da requisição muito grande.");
      erro.status = 413;
      throw erro;
    }
    partes.push(parte);
  }
  try {
    return JSON.parse(Buffer.concat(partes).toString("utf8") || "{}");
  } catch (_) {
    const erro = new Error("JSON inválido.");
    erro.status = 400;
    throw erro;
  }
}
module.exports = { enviarJson, lerJson };
