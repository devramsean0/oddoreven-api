function routes(app) {
    app.get('/', function (request, reply) {
        reply.send(`Docs: \n is it odd or even?: https://oddoreven.sean-outram.dev/oddoreven/{number} \n odd?: https://oddoreven.sean-outram.dev/odd/{number} \n even?:https://oddoreveb.sean-outram.dev/even/{number}`)
    })
}
module.exports = routes;