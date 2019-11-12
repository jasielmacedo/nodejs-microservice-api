import makeUser from '../entity'

module.exports = function makeUpdateUser({ Db })
{
    return async function updateUser({ id, ...changes } = {})
    {
        if(!id){
            throw new Error('You must supply an id')
        }

        if(!changes.name)
        {
            throw new Error('You must supply a name')
        }

        const current = await Db.findById({ id })

        if(changes.email && changes.email != current.email)
        {
            const existsEmail = await Db.findByEmail({ email : changes.email })
            if(existsEmail)
                throw new RangeError("User's email must be unique");
        }

        if(!current)
        {
            throw new RangeError('User not found')
        }

        const user = makeUser({ ...current, ...changes, modifiedAt : null })

        const updated = await Db.update({
            id : user.getId(),
            name : user.getName(),
            email : user.getEmail(),
            modifiedAt : user.getModifiedAt(),
            status : user.getStatus()
        })
        
        return { ...current, ...updated }
    }
}