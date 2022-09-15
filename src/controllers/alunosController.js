import alunosModel from "../models/alunosModel.js";

const alunosController = {
    buscarAlunos: async (req, res)=> {
        try {
            const answer = await alunosModel.buscarAlunos()

            if (answer.status === 200) {
                res.status(answer.status).json({
                    "alunos": answer.dados,
                    "erro": false
                })    
            } else {
                res.status(answer.status).json({
                    "mensagem": answer.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro": true
            })
        }
    }
}

export default alunosController