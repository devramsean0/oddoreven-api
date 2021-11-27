const fastify = require('fastify');
const app = fastify();
const docs = require('./docs.js');
const api = require('./api/api.js');
docs(app)
api(app)
app.listen(3000, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})