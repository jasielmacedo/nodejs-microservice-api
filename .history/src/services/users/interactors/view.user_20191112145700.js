import makeUser from '../entity'

export default function makeViewUser({ Db })
{
    return async function viewUser({ id } = {})
    {
        if(!id){
            throw new Error('You must supply an id')
        }

        const current = await Db.findById({ id })

        if(!current)
        {
            throw new RangeError('User not found')
        }

        return makeUser(current);
    }
}