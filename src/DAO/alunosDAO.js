import db from "../database/connect.js";

const alunoDAO = {
    buscarAlunos: ()=> {
        const PEGA_ALUNOS_TODOS = `
        SELECT * FROM ALUNOS
        `

        return new Promise((resolve, reject)=> {
            db.all(PEGA_ALUNOS_TODOS, (error, row)=> {
                if(error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    }
}

export default alunoDAO