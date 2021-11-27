const fastify = require('fastify');
const app = fastify();
const routes = require('./routes.js');
routes(app)
app.listen(3000, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})