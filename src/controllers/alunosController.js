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
    },

    buscarAlunosPorID: async (req, res)=> {
        const id = req.params.id
        try {
            const answer = await alunosModel.buscarAlunosPorID(id)

            if (answer.status === 200) {
                res.status(answer.status).json({
                    "aluno": answer.dados,
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
    },

    buscarAlunosPorNome: async (req, res)=> {
        const nome = req.params.nome
        const autocomplete = '%' + nome + '%'
        try {
            const answer = await alunosModel.buscarAlunosPorNome(autocomplete)

            if (answer.status === 200) {
                res.status(answer.status).json({
                    "aluno": answer.dados,
                    "erro": false
                })
            } else {
                res.status(answer.status).json({
                    "aluno": answer.dados,
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