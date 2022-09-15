<h1 align="center">Escola Boletim API</h1>

## Tecnologias utilizadas:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## O projeto:

O projeto consiste em uma API de notas de sistema escolar, que realiza operações CRUD, com suporte às entidades de aluno, avaliação e boletim. 

## Pré-requisitos:

- Node.js (v.16.15.0)
- NPM (v.8.18.0)

## Pacotes utilizados:

- Express (v.4.18.1)
- Cors (v.2.8.5)
- Sqlite3 (v.5.0.11)
- Nodemon (v.2.0.19)

### Instalação: 

Para utilizar este projeto de forma local, é necessário fazer um `git clone` em sua máquina. Lembre-se de conferir se você possui instalado o `Node.js` e um gerenciador de arquivos, como o `NPM`. As versões estão citadas acima em `pré-requisitos`.

Para clonar o repositório, digite no terminal da sua máquina:

```
git clone https://github.com/andre-sqr/escola-boletim-api.git
```

Acesse a pasta:

```
cd escola-boletim-api
```

Instale os pacotes:

```
npm install
```

E por fim, rode o projeto:

```
npm start
```

Com o servidor inicializado, já é possível fazer requisições. 

### Excluindo o banco de dados

Caso seja necessário excluir o arquivo do banco de dados, execute o seguinte comando no terminal:

```
npm run delete-db
```

### Reiniciando o banco de dados

Se for preciso reinicializar o banco de dados, lembre-se de excluir o arquivo `escola-boletim.db`, caso necessário, e execute o seguinte comando no terminal:

```
npm run db
```