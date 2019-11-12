import Interactors from '../interactors'
import makePostUser from './post.user'

const postUser = makePostUser({ createUser : Interactors.createUser })

const userController = Object.freeze({
    postUser
})

module.exports = userController