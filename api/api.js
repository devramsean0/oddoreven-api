const v1routes = require('./v1/v1-routes.js');
function api(app) {
    v1routes(app)
}
module.exports = api