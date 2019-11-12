import makeUser from '../entity'

module.exports = function makeDeleteUser({ Db })
{
    return async function deleteUser({ id } = {})
    {
        if(!id){
            throw new Error('You must supply an id')
        }

        const current = await Db.findById({ id })

        if(!current)
        {
            throw new RangeError('User not found')
        }

        const toDelete = makeUser({ ...current, modifiedAt : null });
        toDelete.markDeleted();

        const updated = await Db.update({
            id : toDelete.getId(),
            modifiedAt : toDelete.getModifiedAt(),
            status : toDelete.getStatus()
        })

        return { ...current, ...updated }
    }
}