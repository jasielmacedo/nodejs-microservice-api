const makeUserRoutes = require('./users')

module.exports = ({ router }) =>
{
    makeUserRoutes(router)
}