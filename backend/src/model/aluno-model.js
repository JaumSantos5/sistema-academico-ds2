const alunos = [];
let proximoId = 1;

function normalizar(valor) {
  return String(valor ?? "").trim();
}

function cadastrar(dados = {}) {
  const aluno = {
    ra: normalizar(dados.ra),
    nome: normalizar(dados.nome),
    email: normalizar(dados.email),
    curso: normalizar(dados.curso),
    turma: normalizar(dados.turma)
  };
  if (Object.values(aluno).some(valor => !valor)) {
    return { sucesso: false, status: 400, mensagem: "Todos os campos são obrigatórios." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(aluno.email)) {
    return { sucesso: false, status: 400, mensagem: "Informe um e-mail válido." };
  }
  if (alunos.some(item => item.ra === aluno.ra)) {
    return { sucesso: false, status: 409, mensagem: "Já existe um aluno com esse RA." };
  }
  const novoAluno = { id: proximoId++, ...aluno };
  alunos.push(novoAluno);
  return { sucesso: true, status: 201, aluno: novoAluno };
}

function listar() {
  return { total: alunos.length, dados: [...alunos] };
}
module.exports = { cadastrar, listar };
