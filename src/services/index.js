const makeUserRoutes = require('./users')

module.exports = function({ router, app })
{
    makeUserRoutes({router})
    
    app.use('/v1',router)
    app.use((req,res,next) => {
        res.status(404).send({ error : 'not found'})
    })
}