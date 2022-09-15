import express from "express";
import alunosController from "../controllers/alunosController.js";

const router = express.Router();

router
    .get('/alunos', alunosController.buscarAlunos)
    .get('/alunos/id/:id', alunosController.buscarAlunosPorID)


export default router;