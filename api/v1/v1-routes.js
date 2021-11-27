function v1routes(app) {
    // odd or even?
    app.get('/v1/oddoreven/:number', function (request, reply) {
        var number = request.params.number
        if (number % 2 === 0) {
            reply.send('Even')
        } else {
            reply.send('Odd')
        }
    })
    // odd?
    app.get('/v1/odd/:number', function (request, reply) {
        var number = request.params.number
        if (number % 2 === 0) {
            reply.send(`False`)
        } else {
            reply.send(`True`)
        }
    })
    // even?
    app.get('/v1/even/:number', function (request, reply) {
        var number = request.params.number
        if (number % 2 === 0) {
            reply.send('True')
        } else {
            reply.send('False')
        }
    })
}
module.exports = v1routes