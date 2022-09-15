import alunoDAO from "../DAO/alunosDAO.js";

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
            const dados = await alunoDAO.buscarAlunoPorID(id)
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
    }
}

export default alunosModel