const userController = require('./controllers')
const makeCallback = require('./callback')

module.exports = function({ router })
{
    router.post('/user/create',makeCallback(userController.postUser)); 
}