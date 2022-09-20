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
    },

    criarAlunos: async (req, res)=> {
        const body = req.body
        try {
            const answer = await alunosModel.criarAlunos(body)

            res.status(answer.status).json({
                "mensagem": answer.mensagem,
                "aluno": answer.dados,
                "erro": false
            })
        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro": true
            })
        }
    },

    deletarAlunos: async (req, res)=> {
        const id = req.params.id
        try {
            const {status, mensagem} = await alunosModel.buscarAlunosPorID(id)
            if (status === 404) {
                res.status(status).json({
                    "mensagem": mensagem,
                    "erro": true
                })
            } else {
                const answer = await alunosModel.deletarAlunos(id)

                res.status(answer.status).json({
                    "mensagem": answer.mensagem,
                    "erro": false
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