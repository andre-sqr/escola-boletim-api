import alunos from "./alunosRouter.js"

const routes = (app)=> {
    app.route('/').get((req, res)=> {
        res.status(200).send({
            titulo: "Boletim API",
            versao: "1.0.0",
            autor: "André Siqueira"
        })
    })

    app.use(alunos)
}

export default routes;