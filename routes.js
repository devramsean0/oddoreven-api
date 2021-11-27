function routes(app) {
    app.get('/', function (request, reply) {
        reply.send("Our first route")
    })
}
module.exports = routes;