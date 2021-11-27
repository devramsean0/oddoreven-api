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
    // odd or even? JSON
    app.get('/v1/oddoreven/:number/json', function (request, reply) {
        var number = request.params.number
        if (number % 2 === 0) {
            reply.send({ response: 'Even'})
        } else {
            reply.send({ response: 'Odd'})    
        }
    })
    // odd? JSON
    app.get('/v1/odd/:number/json', function (request, reply) {
        var number = request.params.number
        if (number % 2 === 0) {
            reply.send({ response: 'False'})
        } else {
            reply.send({ response: 'True'})
        }
    })
    // even? JSON
    app.get('/v1/even/:number/json', function (request, reply) {
        var number = request.params.number
        if (number % 2 === 0) {
            reply.send({ response: 'True'})
        } else {
            reply.send({ response: 'False'})
        }
    })
}
module.exports = v1routes