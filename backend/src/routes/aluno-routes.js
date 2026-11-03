const express = require("express");
const AlunoController = require("../controller/aluno-controller");
const router = express.Router();
router.get("/", AlunoController.listar);
router.post("/", AlunoController.cadastrar);
module.exports = router;
