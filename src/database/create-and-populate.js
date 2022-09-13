import sqlite3 from "sqlite3";
import { dirname } from "path"
import { fileURLToPath } from "url";
sqlite3.verbose()

const filepath = dirname(fileURLToPath(import.meta.url)) + '/escola-boletim.db'
console.log(filepath);
const db = new sqlite3.Database(filepath);

const DATABASE_SCHEMA = [
    {
        table: "Alunos",
        message: "Tabela alunos criada",
        query: `CREATE TABLE IF NOT EXISTS "ALUNOS" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "nome" text, 
            "turma" varchar(64)
        )`,
    },
    {
        table: "Avaliações",
        message: "Tabela avaliações criada",
        query: `CREATE TABLE IF NOT EXISTS "AVALIACOES" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
            "materia" varchar(80),
            "data" text,
            "nota_maxima" real
        )`,
    },
    {
        table: "Boletim",
        message: "Tabela boletim criada",
        query: `CREATE TABLE IF NOT EXISTS "BOLETIM" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "id_aluno" int,
            "id_prova" int,
            "nota_recebida" real
        )`,
    }
]

const POPULATION = [
    {
        table: "Alunos",
        message: "Tabela alunos populada",
        query: `INSERT INTO ALUNOS (nome, turma)
        VALUES
        ("João Porsche", "2020A"),
        ("Bárbara Fusca", "2020B"),
        ("Marta Ferrari", "2022A"),
        ("Pedro Celta", "2018A"),
        ("Carina Celta", "2022A")`,
    },
    {
        table: "Avaliações",
        message: "Tabela avaliações populada",
        query: `INSERT INTO AVALIACOES (materia, data, nota_maxima)
        VALUES
        ("Cálculo I", "2020-08-13", 10),
        ("Trabalho de Educação Física", "2022-04-12", 5),
        ("Inglês para Negócios", "2020-10-09" , 10),
        ("Experiência do Usuário", "2018-05-07", 6),
        ("Literatura francesa", "2020-09-27", 20)`,
    },
    {
        table: "Boletim",
        message: "Tabela boletim populada",
        query: `INSERT INTO BOLETIM (id_aluno, id_prova, nota_recebida)
        VALUES
        (1, 1, 8),
        (2, 3, 10),
        (2, 5, 10),
        (3, 2, 4),
        (4, 4, 6),
        (5, 3, 2)`,
    }
]

const createAndPopulate = (...query)=> {
    query.forEach((query)=> {
        db.all(query.query, (err)=> {
            if (err) {
                console.log(err.message);
            } else {
                console.log(query.message);
            }
        })
    })
}

db.serialize(()=> {
    createAndPopulate(...DATABASE_SCHEMA)
    createAndPopulate(...POPULATION)
})