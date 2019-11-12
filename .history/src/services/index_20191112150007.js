import makeUserRoutes from './users'

module.exports = ({ router }) =>
{
    makeUserRoutes(router)
}