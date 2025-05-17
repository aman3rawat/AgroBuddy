const { create, list } = require("./services")

module.exports = {
    'create': (req, res, next) => {
       create(req, res, next);
    },
    'list': (req, res, next) => {
       list(req, res, next);
    }
}
