import makeCreateUser from './create.user'
import makeUpdateUser from './update.user'
import makeDeleteUser from './delete.user'
import makeViewUser from './view.user'
import makeEnableUser from './enable.user'
import makeDisableUser from './disable.user'

import userDb from '../adapters'

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