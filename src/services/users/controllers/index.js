const Interactors = require('../interactors')
const makePostUser = require('./post.user')
const makePatchUser = require('./patch.user')

const postUser = makePostUser({ createUser : Interactors.createUser })
const patchUser = makePatchUser({ updateUser : Interactors.updateUser })

const userController = Object.freeze({
    postUser,
    patchUser
})

module.exports = userController