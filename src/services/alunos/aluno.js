import { maiorQueUmDigito } from "../logicaGeral.js";

const validaCampo = (campo)=> {
    if (maiorQueUmDigito(campo)) {
        return campo
    } else {
        throw new Error('Insira um campo válido')
    }
}

export const validaAluno = (dados)=> {
    if (dados.nome) {
        validaCampo(dados.nome)
    } else {
        throw new Error('Os campos não podem estar vazios')
    }
    if (dados.turma) {
        validaCampo(dados.turma)
    } else {
        throw new Error('Os campos não podem estar vazios')
    }
}

export const criaAluno = (dados)=> {
    validaAluno(dados)
    return {
        "nome": dados.nome,
        "turma": dados.turma
    }
}