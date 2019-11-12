const makeUser = require('../entity')

module.exports = function makeCreateUser({ Db })
{
    return async function createUser(userInfo)
    {
        const user = makeUser(userInfo)
        const exists = await Db.findByEmail({ email : user.getEmail() })

        if(exists)
            throw new Error("User's email must be unique.");

        return Db.insert({
            id : user.getId(),
            name : user.getName(),
            email : user.getEmail(),
            createdAt : user.getCreatedAt(),
            modifiedAt : user.getModifiedAt(),
            status : user.getStatus(),
        });
    }
}