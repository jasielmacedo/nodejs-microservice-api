const makeCreateUser = require('./create.user')
const makeUpdateUser = require('./update.user')
const makeDeleteUser = require('./delete.user')
const makeViewUser = require('./view.user')
const makeEnableUser = require('./enable.user')
const makeDisableUser = require('./disable.user')

const userDb = require('../adapters')

const createUser = makeCreateUser({ userDb })
const updateUser = makeUpdateUser({ userDb })
const deleteUser = makeDeleteUser({ userDb })
const viewUser = makeViewUser({ userDb })
const enableUser = makeEnableUser({ userDb })
const disableUser = makeDisableUser({ userDb })

export default Object.freeze({
    createUser,
    updateUser,
    deleteUser,
    viewUser,
    enableUser,
    disableUser
})