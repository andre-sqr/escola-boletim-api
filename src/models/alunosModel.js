import alunoDAO from "../DAO/alunosDAO.js";
import { criaAluno } from "../services/alunos/aluno.js";

const alunosModel = {

    buscarAlunos: async ()=> {
        try {
            const dados = await alunoDAO.buscarAlunos()
            return {
                dados: dados,
                status: 200
            }
        } catch (error) {
            return {
                mensagem: error.message,
                status: 400
            }
        }
    },

    buscarAlunosPorID: async (id)=> {
        try {
            const dados = await alunoDAO.buscarAlunosPorID(id)
            if (dados) {
                return {
                    dados: dados,
                    status: 200
                }
            } else {
                return {
                    mensagem: `Aluno de id ${id} não encontrado`,
                    status: 404
                }
            }
        } catch (error) {
            return {
                mensagem: error.message,
                status: 400
            }
        }
    },

    buscarAlunosPorNome: async (nome)=> {
        try {
            const dados = await alunoDAO.buscarAlunosPorNome(nome)
            console.log(dados);
            return {
                dados: dados,
                status: 200
            }
        } catch (error) {
            return {
                mensagem: error.message,
                status: 400
            }
        }
    },

    criarAlunos: async (aluno)=> {
        try {
            const novoAluno = criaAluno(aluno)
            const dados = await alunoDAO.criarAlunos(novoAluno)
            return {
                mensagem: "Aluno inserido com sucesso",
                dados: dados,
                status: 201
            }
        } catch (error) {
            return {
                mensagem: error.message,
                status: 400
            }
        }
    },

    deletarAlunos: async (id)=> {
        try {
            const msg = await alunoDAO.deletarAlunos(id)
            return {
                mensagem: msg,
                status: 200
            }
        } catch (error) {
            return {
                mensagem: error.message,
                status: 400
            }
        }
    }
}

export default alunosModel