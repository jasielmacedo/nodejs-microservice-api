const Interactors = require('../interactors')
const makePostUser = require('./post.user')

const postUser = makePostUser({ createUser : Interactors.createUser })

const userController = Object.freeze({
    postUser
})

module.exports = userController