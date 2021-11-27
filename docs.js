const {domain, version} = require('./config.json')
function docs(app) {
    app.get('/', function (request, reply) {
        reply.send(`Docs: \n is it odd or even?: https://${domain}/v${version}/oddoreven/{number} \n odd?: https:/v${version}/${domain}//odd/{number} \n even?:https:/v${version}/${domain}//even/{number}`)
    })
}
module.exports = docs;