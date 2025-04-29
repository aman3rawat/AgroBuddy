const { create } = require("./services")

module.exports = {
    'create': (req, res, next) => {
       create(req, res, next);
    }
}
