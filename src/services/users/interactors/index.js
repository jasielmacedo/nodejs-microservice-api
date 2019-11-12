const makeCreateUser = require('./create.user')
const makeUpdateUser = require('./update.user')
const makeDeleteUser = require('./delete.user')
const makeViewUser = require('./view.user')
const makeEnableUser = require('./enable.user')
const makeDisableUser = require('./disable.user')

const Db  = require('../adapters')

const createUser = makeCreateUser({ Db })
const updateUser = makeUpdateUser({ Db })
const deleteUser = makeDeleteUser({ Db })
const viewUser = makeViewUser({ Db })
const enableUser = makeEnableUser({ Db })
const disableUser = makeDisableUser({ Db })

module.exports = Object.freeze({
    createUser,
    updateUser,
    deleteUser,
    viewUser,
    enableUser,
    disableUser
})