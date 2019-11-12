import makeUser from '../entity'

module.exports = function makeEnableUser({ Db })
{
    return async function enableUser({ id } = {})
    {
        if(!id){
            throw new Error('You must supply an id')
        }

        const current = await Db.findById({ id })

        if(!current)
        {
            throw new RangeError('User not found')
        }

        const toEdit = makeUser({ ...current, modifiedAt : null });
        toEdit.markActive();

        const updated = await Db.update({
            id : toEdit.getId(),
            modifiedAt : toEdit.getModifiedAt(),
            status : toEdit.getStatus()
        })

        return { ...current, ...updated }
    }
}