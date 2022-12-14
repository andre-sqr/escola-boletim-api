import express from "express";
import alunosController from "../controllers/alunosController.js";

const router = express.Router();

router
    .get('/alunos', alunosController.buscarAlunos)
    .get('/alunos/id/:id', alunosController.buscarAlunosPorID)
    .get('/alunos/nome/:nome', alunosController.buscarAlunosPorNome)
    .post('/alunos', alunosController.criarAlunos)
    .delete('/alunos/id/:id', alunosController.deletarAlunos)


export default router;