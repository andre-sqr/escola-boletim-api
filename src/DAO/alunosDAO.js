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
    },

    buscarAlunosPorID: (id)=> {
        const PEGA_ALUNO_ID = `
        SELECT * FROM ALUNOS
        WHERE id = ?
        `
        return new Promise((resolve, reject)=> {
            db.all(PEGA_ALUNO_ID, id, (error, row)=> {
                if(error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    buscarAlunosPorNome: (nome)=> {
        const PEGA_ALUNO_NOME = `
        SELECT * FROM ALUNOS
        WHERE nome LIKE ?
        `
        return new Promise((resolve, reject)=> {
            db.all(PEGA_ALUNO_NOME, nome, (error, row)=> {
                if (error) {
                    reject (error)
                } else {
                    resolve (row)
                }
            })
        })
    },

    criarAlunos: (aluno)=> {
        const CRIA_ALUNO = `
        INSERT INTO ALUNOS (nome, turma)
        VALUES (?, ?)`

        return new Promise((resolve, reject)=> {
            db.all(CRIA_ALUNO, aluno.nome, aluno.turma, (error)=> {
                if (error) {
                    reject (error)
                } else {
                    resolve (aluno)
                }
            })
        })
    }
}

export default alunoDAO