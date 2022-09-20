import { campoNaoVazio } from "../logicaGeral.js";

const validaCampo = (campo)=> {
    if (campoNaoVazio(campo)) {
        return campo
    } else {
        throw new Error('Os campos não podem estar vazios')
    }
}

export const validaAluno = (dados)=> {
    if (dados.nome) 
        validaCampo(dados.nome)
    if (dados.turma)
        validaCampo(dados.turma)
}

export const criaAluno = (dados)=> {
    validaAluno(dados)
    return {
        "nome": dados.nome,
        "turma": dados.turma
    }
}